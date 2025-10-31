"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const samplePrompts = [
    "Can you tell me your name?",
    "Where are you currently working?",
    "What technologies or tools have you worked with",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;
    setInput("");
    const newMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: messageText }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Error getting response. Please try again.",
        },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Bajinder Bot</h2>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-3 overflow-y-auto max-h-[400px] bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center mt-6">
                  <p className="text-gray-500 text-sm mb-3">👋 Hi!.</p>

                  {/* 🌟 Sample prompts */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {samplePrompts.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(prompt)}
                        className="text-xs bg-white border border-gray-300 px-3 py-1 rounded-full hover:bg-blue-50 hover:border-blue-400 transition"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 my-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* 👇 Show your image before assistant messages */}
                  {msg.role === "assistant" && (
                    <Image
                      src="/avatar.png" // <-- your image (place in /public)
                      alt="AI Avatar"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  )}

                  {/* Message bubble */}
                  <div
                    className={`p-2 rounded-lg max-w-[75%] ${
                      msg.role === "user"
                        ? "bg-blue-200 text-right ml-8"
                        : "bg-gray-200 text-left mr-8"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <p className="text-gray-500 text-sm text-center animate-pulse mt-2">
                  Thinking...
                </p>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-2 border-t bg-white flex">
              <input
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <button
                className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
                onClick={() => sendMessage()}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
