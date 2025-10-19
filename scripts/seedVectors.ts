import fs from "fs";
import path from "path";

import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

console.log("Starting vector db seeding...");

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}
const firestore = admin.firestore();

const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGINGFACE_API_KEY,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 800,
  chunkOverlap: 150,
});

async function saveVectorToFirestore(id: string, embedding: number[], text: string, metadata: any) {
  const docRef = firestore.collection("cvData").doc(id);
  await docRef.set({
    embedding,
    text,
    metadata,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
}

async function seed() {
  try {
    const pdfDir = path.join(process.cwd(), "data", "pdfs");
    const localFiles = fs.readdirSync(pdfDir).filter((f) => f.endsWith(".pdf"));

    if (localFiles.length === 0) {
      console.log("No local PDFs found.");
      return;
    }

    for (const file of localFiles) {
      const filePath = path.join(pdfDir, file);
      console.log(`📄 Processing ${file}...`);

      const loader = new PDFLoader(filePath);
      const docs: Document[] = await loader.load();
      const splits = await splitter.splitDocuments(docs);

      for (let i = 0; i < splits.length; i++) {
        const text = splits[i].pageContent;
        const metadata = { source: file, chunkIndex: i };
        const vector = await embeddings.embedQuery(text);

        await saveVectorToFirestore(`${file}-chunk-${i}`, vector, text, metadata);
      }
    }

    console.log("Vector seeding completed successfully!");
  } catch (err) {
    console.error("Error during saving data:", err);
  } finally {
    process.exit(0);
  }
}

seed();
