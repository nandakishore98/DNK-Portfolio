"use client";

import { useState } from "react";
import { Lightbulb, ArrowLeft, Lock, Car } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

const ideas = [
  {
    title: "Ride-Hailing Reimagined",
    description: "Rethinking the ride-hailing experience from first principles — what if we optimized for driver economics and rider trust simultaneously?",
    icon: Car,
    status: "phase-1",
    phase: "Phase 1",
  },
  {
    title: "More ideas brewing...",
    description: "Exploring intersections of AI, insurance, and consumer products. Stay tuned.",
    icon: Lightbulb,
    status: "coming-soon",
    phase: "Coming Soon",
  },
];

export default function IdeasPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative bg-slate-950 min-h-screen">
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
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                  My Ideas
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Want to know what excites me?
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Product ideas, industry observations, and problem spaces I&apos;m thinking about.
              Some are early explorations, others are deeper dives with frameworks and analysis.
            </p>
          </motion.div>

          <div className="space-y-6">
            {ideas.map((idea, i) => {
              const Icon = idea.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                  className="group relative rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                          {idea.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
                            idea.status === "phase-1"
                              ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          {idea.status === "coming-soon" && <Lock className="w-2.5 h-2.5" />}
                          {idea.phase}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {idea.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Ideas are being documented. Check back soon or{" "}
              <button
                onClick={() => setChatOpen(true)}
                className="text-blue-400 hover:underline"
              >
                ask my AI
              </button>{" "}
              about what I&apos;m working on.
            </p>
          </motion.div>
        </div>
      </main>

      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
}
