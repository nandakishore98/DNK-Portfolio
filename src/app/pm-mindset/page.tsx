"use client";

import { useState } from "react";
import { Brain, ArrowLeft, CheckCircle, AlertTriangle, Shield, Zap, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

const articles = [
  {
    id: "building-conv-ai",
    icon: AlertTriangle,
    accent: "blue",
    title: "What Building Conversational AI in Financial Services Actually Takes",
    summary: "The hardest part was never getting the AI to work — it was designing failure modes, fixing the data layer, navigating compliance, and making the business case past a POC.",
    content: {
      cards: [
        { icon: AlertTriangle, title: "Failure Design", description: "Designing what happens when AI gets it wrong — graceful fallbacks, not dead ends. Every conversation flow needs a recovery path that feels intentional, not broken." },
        { icon: Layers, title: "Knowledge Base Reality", description: "Fixing the data layer everyone assumes AI will magically work on top of. Structured FAQs, policy docs, product catalogs — all need curation before any model touches them." },
        { icon: Shield, title: "Regulatory Compliance", description: "Compliance as a design constraint, not a checkbox — every flow must hold up to audit. In financial services, one wrong auto-response can trigger regulatory scrutiny." },
        { icon: Zap, title: "Beyond the POC", description: "Building the strategic case for why the investment matters past a pilot. POCs impress stakeholders; production systems need sustained funding, ops support, and measurable ROI." },
      ],
      callout: "The AI PM is the integrator — deep enough on tech to push back, sharp enough on domain to know where AI moves a metric, and keeping CX as the non-negotiable.",
    },
  },
  {
    id: "ai-autonomy",
    icon: Layers,
    accent: "purple",
    title: "How I Think About AI Autonomy",
    summary: "Continuous Calibration, Continuous Development — the CCCD framework for building trust. Start conservative, earn autonomy through performance.",
    content: {
      levels: [
        { level: 1, title: "Action Autonomy", subtitle: "Discrete task execution", examples: "Balance checks, FAQs, policy status, KYC queries", risk: "Low Risk", color: "text-green-400 border-green-500/30 bg-green-500/10" },
        { level: 2, title: "Planning Autonomy", subtitle: "Multi-step orchestration", examples: "Loan applications, dispute resolution, claim filing", risk: "Medium Risk", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
        { level: 3, title: "End-to-End Autonomy", subtitle: "Full process management", examples: "Account onboarding, portfolio rebalancing nudges", risk: "High Volume Only", color: "text-red-400 border-red-500/30 bg-red-500/10" },
      ],
      callout: "Getting this calibration wrong is how chatbot products lose user trust. Start conservative, earn autonomy through performance.",
    },
  },
  {
    id: "deploy-checklist",
    icon: CheckCircle,
    accent: "green",
    title: "My Checklist Before Deploying Any AI-Powered Workflow",
    summary: "A framework to ensure every conversational AI use case earns its place in production — six questions that separate real automation candidates from shiny POCs.",
    content: {
      items: [
        { question: "Is it high-volume and recurring?", detail: "If the workflow doesn't handle significant daily volume, the automation investment won't pay back. AI should absorb load, not add overhead." },
        { question: "Does it follow a definable sequence?", detail: "Conversational flows need a backbone. If the workflow can't be mapped into steps — even loosely — the bot will break in production." },
        { question: "Can outcomes be measured?", detail: "If you can't track resolution rate, conversion, or cost-per-interaction, you can't prove value. No metrics, no mandate for continued investment." },
        { question: "Does the workflow touch live systems?", detail: "Real impact requires system integration — CBS, CRM, payment rails. If the bot only shows static info, it's a glorified FAQ page." },
        { question: "Can it tolerate occasional errors?", detail: "Every AI system will get things wrong. The question is whether a wrong answer causes annoyance or financial harm. That determines how much autonomy the bot gets." },
        { question: "Is the current path slow or expensive?", detail: "The strongest case for AI is when the existing process — branch visit, call center queue, manual ops — is visibly painful for the customer or costly for the org." },
      ],
      callout: "If a use case doesn't clear most of these, it's not ready for AI — it needs process redesign first.",
    },
  },
];

const accentColors: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", iconBg: "bg-blue-500/10" },
  purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", iconBg: "bg-purple-500/10" },
  green: { border: "border-green-500/30", bg: "bg-green-500/10", text: "text-green-400", iconBg: "bg-green-500/10" },
};

function ArticleList({ onSelect }: { onSelect: (index: number) => void }) {
  return (
    <div className="space-y-5">
      {articles.map((article, i) => {
        const Icon = article.icon;
        const colors = accentColors[article.accent];
        return (
          <motion.button
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            onClick={() => onSelect(i)}
            className={`w-full text-left rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:${colors.border} hover:bg-slate-900/80 transition-all duration-300 cursor-pointer group`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-lg ${colors.iconBg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${colors.text}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 mt-1 flex-shrink-0 transition-colors" />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

function ArticleView({ index, onBack }: { index: number; onBack: () => void }) {
  const article = articles[index];
  const colors = accentColors[article.accent];
  const Icon = article.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Articles
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div className={`w-11 h-11 rounded-lg ${colors.iconBg} border ${colors.border} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">{article.title}</h2>
      </div>
      <p className="text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">{article.summary}</p>

      {/* Article-specific content */}
      {"cards" in article.content && article.content.cards && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            {article.content.cards.map((card, i) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CardIcon className={`w-5 h-5 ${colors.text}`} />
                    <h3 className="text-lg font-semibold text-slate-200">{card.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
          <div className={`rounded-lg ${colors.bg} border ${colors.border} px-5 py-4`}>
            <p className={`text-sm leading-relaxed ${colors.text}`}>{article.content.callout}</p>
          </div>
        </div>
      )}

      {"levels" in article.content && article.content.levels && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-3 gap-4">
            {article.content.levels.map((level, i) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-400">{level.level}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">{level.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{level.subtitle}</p>
                <p className="text-sm text-slate-400 mb-4">{level.examples}</p>
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${level.color}`}>
                  {level.risk}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="rounded-lg bg-slate-800/50 border border-slate-700/50 px-5 py-4">
            <p className="text-sm text-slate-300 leading-relaxed">{article.content.callout}</p>
          </div>
        </div>
      )}

      {"items" in article.content && article.content.items && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            {article.content.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-slate-200">{item.question}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed ml-8">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-5 py-4">
            <p className="text-sm text-amber-300 leading-relaxed">{article.content.callout}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function PMMindsetPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {selectedArticle === null ? (
            <>
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
                <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
                  Frameworks and mental models drawn from building AI products at SBI Life, 0→1 discovery at Cloudcraftz, and enterprise delivery at Accenture.
                </p>
              </motion.div>

              <ArticleList onSelect={setSelectedArticle} />

              <div className="text-center mt-16">
                <p className="text-sm text-slate-500">
                  Want to discuss these frameworks?{" "}
                  <button onClick={() => setChatOpen(true)} className="text-blue-400 hover:underline">
                    Ask my AI
                  </button>
                </p>
              </div>
            </>
          ) : (
            <ArticleView index={selectedArticle} onBack={() => setSelectedArticle(null)} />
          )}
        </div>
      </main>

      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
}
