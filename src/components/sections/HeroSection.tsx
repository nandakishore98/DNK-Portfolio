"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/resume";

interface HeroSectionProps {
  onChatOpen: () => void;
}

export default function HeroSection({ onChatOpen }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 grid-bg overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
        {/* Text content */}
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-100"
          >
            {profile.name.split(" ").map((word, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  ` ${word}`
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-3 max-w-xl mx-auto lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-slate-600 dark:text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={onChatOpen}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Am I the Right Fit?
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Get in Touch
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
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full gradient-border p-[3px]">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-950" />
            </div>
            {/* Photo */}
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
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 bounce-slow" />
      </motion.div>
    </section>
  );
}
