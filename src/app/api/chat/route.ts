import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import OpenAI from 'openai';
// @ts-ignore
import cosineSimilarity from 'cosine-similarity';

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  });
}

const db = admin.firestore();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: process.env.HUGGINGFACE_API_KEY,
  model: 'sentence-transformers/all-MiniLM-L6-v2',
});

export async function POST(req: Request) {
  try {
    const { question } = await req.json();
    const queryEmbedding = await embeddings.embedQuery(question);
    const snapshot = await db.collection('cvData').get();
    const docs: any[] = [];

    snapshot.forEach((doc) => docs.push(doc.data()));
    const scored = docs.map((d) => ({
      ...d,
      score: cosineSimilarity(queryEmbedding, d.embedding),
    }));
    const topDocs = scored.sort((a, b) => b.score - a.score).slice(0, 3);

    const context = topDocs.map((d) => d.text).join('\n\n');
    const prompt = `
You are a friendly and knowledgeable assistant.

Use the information below only to ensure accuracy. 
Respond naturally, as if you already know the answer — 
do not mention context, documents, or sources.you can give website links mentioned in context.

Context:
${context}

Question:
${question}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // low-cost & high-quality
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    const answer = completion.choices[0].message.content;

    return NextResponse.json({ answer });
  } catch (err: any) {
    console.error('Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
