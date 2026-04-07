"use client";

import { useState } from "react";
import { Brain, ArrowLeft, CheckCircle, AlertTriangle, Shield, Zap, Bot, Layers } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

const buildingConvAI = {
  title: "What Building Conversational AI in Financial Services Actually Takes",
  subtitle: "The hardest part was never getting the AI to work. It was everything around it.",
  cards: [
    { icon: AlertTriangle, title: "Failure Design", description: "Designing what happens when AI gets it wrong — graceful fallbacks, not dead ends." },
    { icon: Layers, title: "Knowledge Base Reality", description: "Fixing the data layer everyone assumes AI will magically work on top of." },
    { icon: Shield, title: "Regulatory Compliance", description: "Compliance as a design constraint, not a checkbox — every flow must hold up to audit." },
    { icon: Zap, title: "Beyond the POC", description: "Building the strategic case for why the investment matters past a pilot." },
  ],
  callout: "The AI PM is the integrator — deep enough on tech to push back, sharp enough on domain to know where AI moves a metric, and keeping CX as the non-negotiable.",
};

const aiAutonomy = {
  title: "How I Think About AI Autonomy",
  subtitle: "Continuous Calibration, Continuous Development — the CCCD framework for building trust",
  levels: [
    { level: 1, title: "Action Autonomy", subtitle: "Discrete task execution", examples: "Balance checks, FAQs, policy status, KYC queries", risk: "Low Risk", color: "text-green-400 border-green-500/30 bg-green-500/10" },
    { level: 2, title: "Planning Autonomy", subtitle: "Multi-step orchestration", examples: "Loan applications, dispute resolution, claim filing", risk: "Medium Risk", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { level: 3, title: "End-to-End Autonomy", subtitle: "Full process management", examples: "Account onboarding, portfolio rebalancing nudges", risk: "High Volume Only", color: "text-red-400 border-red-500/30 bg-red-500/10" },
  ],
  callout: "Getting this calibration wrong is how chatbot products lose user trust. Start conservative, earn autonomy through performance.",
};

const deployChecklist = {
  title: "My Checklist Before Deploying Any AI-Powered Workflow",
  subtitle: "A framework I follow to ensure every conversational AI use case earns its place in production",
  items: [
    { question: "Is it high-volume and recurring?", detail: "If the workflow doesn't handle significant daily volume, the automation investment won't pay back. AI should absorb load, not add overhead." },
    { question: "Does it follow a definable sequence?", detail: "Conversational flows need a backbone. If the workflow can't be mapped into steps — even loosely — the bot will break in production." },
    { question: "Can outcomes be measured?", detail: "If you can't track resolution rate, conversion, or cost-per-interaction, you can't prove value. No metrics, no mandate for continued investment." },
    { question: "Does the workflow touch live systems?", detail: "Real impact requires system integration — CBS, CRM, payment rails. If the bot only shows static info, it's a glorified FAQ page." },
    { question: "Can it tolerate occasional errors?", detail: "Every AI system will get things wrong. The question is whether a wrong answer causes annoyance or financial harm. That determines how much autonomy the bot gets." },
    { question: "Is the current path slow or expensive?", detail: "The strongest case for AI is when the existing process — branch visit, call center queue, manual ops — is visibly painful for the customer or costly for the org." },
  ],
  callout: "If a use case doesn't clear most of these, it's not ready for AI — it needs process redesign first.",
};

export default function PMMindsetPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-100">PM Mindset</h1>
                <p className="text-slate-400 text-sm">Want to know how I think?</p>
              </div>
            </div>
            <p className="text-slate-400 max-w-2xl mb-16 leading-relaxed">
              Frameworks and mental models drawn from building AI products at SBI Life, 0→1 discovery at Cloudcraftz, and enterprise delivery at Accenture.
            </p>
          </motion.div>

          {/* Section 1: Building Conversational AI */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-2">{buildingConvAI.title}</h2>
            <p className="text-sm italic text-blue-400 mb-8">{buildingConvAI.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {buildingConvAI.cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <h3 className="text-lg font-semibold text-slate-200">{card.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-5 py-4">
              <p className="text-sm text-blue-300 leading-relaxed">{buildingConvAI.callout}</p>
            </div>
          </motion.section>

          {/* Section 2: AI Autonomy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-2">{aiAutonomy.title}</h2>
            <p className="text-sm text-slate-400 mb-8">{aiAutonomy.subtitle}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {aiAutonomy.levels.map((level) => (
                <div key={level.level} className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-blue-400">{level.level}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">{level.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{level.subtitle}</p>
                  <p className="text-sm text-slate-400 mb-4">{level.examples}</p>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${level.color}`}>
                    {level.risk}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-slate-800/50 border border-slate-700/50 px-5 py-4">
              <p className="text-sm text-slate-300 leading-relaxed">{aiAutonomy.callout}</p>
            </div>
          </motion.section>

          {/* Section 3: Deploy Checklist */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-2">{deployChecklist.title}</h2>
            <p className="text-sm italic text-blue-400 mb-8">{deployChecklist.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {deployChecklist.items.map((item, i) => (
                <div key={i} className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:border-green-500/30 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <h3 className="text-base font-semibold text-slate-200">{item.question}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed ml-8">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-5 py-4">
              <p className="text-sm text-amber-300 leading-relaxed">{deployChecklist.callout}</p>
            </div>
          </motion.section>

          <div className="text-center">
            <p className="text-sm text-slate-500">
              Want to discuss these frameworks?{" "}
              <button onClick={() => setChatOpen(true)} className="text-blue-400 hover:underline">
                Ask my AI
              </button>
            </p>
          </div>
        </div>
      </main>

      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
}
