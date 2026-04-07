"use client";

import { useState } from "react";
import { Brain, ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

const frameworks = [
  {
    title: "First Principles Thinking",
    description: "Breaking down complex problems to their fundamental truths before building up solutions.",
    status: "coming-soon",
  },
  {
    title: "Jobs-to-be-Done",
    description: "Understanding what customers are really hiring your product to do.",
    status: "coming-soon",
  },
  {
    title: "Lean Canvas for AI Products",
    description: "Adapting lean methodology for enterprise AI product discovery.",
    status: "coming-soon",
  },
  {
    title: "Risk-Based Prioritization",
    description: "How I turned a 6000+ vulnerability backlog into weekly releases.",
    status: "coming-soon",
  },
  {
    title: "0→1 Product Discovery",
    description: "From 40+ expert interviews to a shipped MVP — my process for finding product-market fit.",
    status: "coming-soon",
  },
  {
    title: "Metrics That Matter",
    description: "Building dashboards that drive action, not just observation.",
    status: "coming-soon",
  },
];

export default function PMMindsetPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journey
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                  PM Mindset
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Want to know how I think?
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Frameworks, mental models, and approaches I use to think about products.
              Drawn from building AI products at SBI Life, 0→1 discovery at Cloudcraftz,
              and enterprise delivery at Accenture.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {frameworks.map((fw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {fw.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Lock className="w-2.5 h-2.5" />
                    Soon
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {fw.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Content is being crafted. Check back soon or{" "}
              <button
                onClick={() => setChatOpen(true)}
                className="text-blue-400 hover:underline"
              >
                ask my AI
              </button>{" "}
              about how I approach problems.
            </p>
          </motion.div>
        </div>
      </main>

      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
}
