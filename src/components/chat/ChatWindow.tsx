"use client";

import { useState, useRef, useEffect } from "react";
import { Send, RotateCcw, Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { useChat } from "@/hooks/useChat";

const quickActions = [
  "Paste a JD to check fit",
  "AI product experience",
  "Tell me about his MBA",
  "Key achievements",
];

export default function ChatWindow() {
  const { messages, isLoading, error, sendMessage, clearMessages } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage(trimmed);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700/50">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-slate-900 dark:text-slate-200">
            Chat with Nanda&apos;s AI
          </span>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearMessages}
            className="text-slate-500 hover:text-slate-300 transition-colors"
            title="Clear chat"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-sm text-slate-300 mb-1 font-medium">
              Hi! I&apos;m Nanda&apos;s AI assistant.
            </p>
            <p className="text-xs text-slate-500 mb-6 max-w-[240px]">
              Paste a job description to see if Nanda&apos;s a fit, or ask anything about his experience.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    if (action === "Paste a JD to check fit") {
                      setInput("Here's the job description:\n\n");
                      textareaRef.current?.focus();
                    } else {
                      sendMessage(action);
                    }
                  }}
                  className="px-3 py-1.5 rounded-full text-xs border border-slate-700 text-slate-400 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {isLoading && messages[messages.length - 1]?.content === "" && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {error && (
          <p className="text-xs text-red-400 text-center">{error}</p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700/50">
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            placeholder="Paste a JD or ask a question..."
            rows={1}
            className="flex-1 resize-none bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl px-3 py-2.5 text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25 transition-all flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
