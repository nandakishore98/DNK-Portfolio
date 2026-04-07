"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import { profile, achievements } from "@/data/resume";

interface HeroSectionProps {
  onChatOpen: () => void;
}

export default function HeroSection({ onChatOpen }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 grid-bg overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Product Manager
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-100"
          >
            {profile.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === 0 ? <span className="gradient-text">{word}</span> : ` ${word}`}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 mb-4 max-w-xl mx-auto lg:mx-0 font-medium"
          >
            {profile.tagline}
          </motion.p>

          {/* Lead with the number */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-slate-400 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Shipped conversational AI to <span className="text-blue-400 font-semibold">4.5 Cr policyholders</span> in 4 weeks at SBI Life. Evaluated 10 product verticals at an AI startup and picked the two highest-growth bets. Turned a 6,000-item vulnerability backlog into a weekly release machine at Accenture. I think in tradeoffs and own the outcome.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-xs text-slate-500 mb-6 max-w-xl mx-auto lg:mx-0"
          >
            MBA, BITSoM (BITS Pilani) | PMP Certified | 4 years in regulated AI, enterprise platforms &amp; 0→1 builds
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
          >
            <button
              onClick={onChatOpen}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Am I the Right Fit?
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
            >
              <ArrowDown className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full gradient-border p-[3px]">
              <div className="w-full h-full rounded-full bg-slate-950" />
            </div>
            <div className="absolute inset-[6px] rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Metrics banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {achievements.map((a, i) => (
            <div key={i} className="text-center px-3 py-3 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-bold gradient-text">{a.metric}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{a.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
      >
        <ChevronDown className="w-5 h-5 bounce-slow" />
      </motion.div>
    </section>
  );
}
