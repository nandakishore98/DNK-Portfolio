"use client";

import { useState } from "react";
import { Brain, ArrowLeft, CheckCircle, AlertTriangle, Scale, Zap, Layers, ArrowRight, Target, GitBranch, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

const articles = [
  {
    id: "tradeoffs-regulated-ai",
    icon: Scale,
    accent: "blue",
    title: "Tradeoff Thinking in Regulated AI",
    summary: "Every AI product decision in financial services is a bet between speed, safety, cost, and customer experience. Here's how I navigate those bets.",
    content: {
      cards: [
        {
          icon: Scale,
          title: "Cost vs. Experience",
          description: "Call centers cost ₹40–60 per interaction. AI costs ₹2–5. But a bad AI response in insurance can trigger regulatory action. I designed the Conversational AI system at SBI Life to handle 80% of volume autonomously while routing the remaining 20% — the high-risk, high-emotion cases — to humans. The cost savings came from volume, not from eliminating human judgment.",
        },
        {
          icon: ShieldAlert,
          title: "Automation vs. Control",
          description: "The fastest path to production was a fully automated bot. I chose a hybrid: AI handles policy status, FAQs, and renewal nudges; humans handle claims disputes and complaints. This isn't a technical limitation — it's a product decision. Automating a complaint response in insurance is a regulatory risk I chose not to take.",
        },
        {
          icon: Zap,
          title: "Speed vs. Trust",
          description: "I could have shipped the conversational AI pilot 2 weeks faster by skipping the audit trail layer. I didn't. That compliance foundation is what unlocked sign-off for the 4.5 Cr rollout. The delay was the investment.",
        },
        {
          icon: GitBranch,
          title: "Failure-First Design",
          description: "Most AI products are designed for the happy path. I start with: what happens when it's wrong? Every flow I shipped at SBI Life had a recovery path — graceful fallback, human escalation, or 'I don't know' response. The failure mode IS the product in regulated environments.",
        },
      ],
      callout: "The AI PM's job isn't to ship AI. It's to decide where AI earns its place — and where it doesn't. That's a product decision, not a technology one.",
    },
  },
  {
    id: "when-to-kill",
    icon: Target,
    accent: "red",
    title: "When to Kill a Product Idea",
    summary: "At Cloudcraftz, I evaluated 10 LLM verticals and killed 8 of them. Here's the framework that made those calls defensible.",
    content: {
      items: [
        {
          question: "Can a 10-person team win here?",
          detail: "Big market ≠ right market. Healthcare AI is a massive opportunity, but an early-stage startup competing against Epic, Cerner, and established EMR integrations is a losing bet. I killed healthcare despite the TAM because the go-to-market required enterprise sales cycles we couldn't afford.",
        },
        {
          question: "Is the data moat real or imagined?",
          detail: "If the product works equally well with public data, there's no defensibility. I prioritized verticals where proprietary data gave us a compounding advantage — talent acquisition (resume databases) and B2B sales intelligence (CRM data).",
        },
        {
          question: "Does the buyer exist today?",
          detail: "Some verticals had problems worth solving but no buyer with budget allocated. 'Interesting problem, no budget' is the graveyard of B2B AI startups. I looked for buyers already spending money on bad solutions.",
        },
        {
          question: "Can we prove value in < 2 weeks?",
          detail: "If the POC takes 3 months, the sales cycle is 6+ months. For an early-stage startup, time-to-value is survival. I prioritized verticals where we could demo meaningful output in days, not quarters.",
        },
        {
          question: "Will the founding team obsess over this?",
          detail: "This is the underrated filter. If the team isn't genuinely curious about the domain, the product quality will plateau. Passion isn't fluff — it's the difference between a mediocre V1 and a product that iterates relentlessly.",
        },
        {
          question: "What's the 'worse than nothing' scenario?",
          detail: "Every AI product has a mode where it's actively harmful. In legal AI, a wrong clause can create liability. In healthcare, a wrong recommendation can harm a patient. I assessed: if the AI fails, does the user just shrug, or does something bad happen?",
        },
      ],
      callout: "Killing ideas is the highest-leverage product activity. The 8 verticals I killed freed the team to go deep on the 2 that mattered. Saying no is a product skill.",
    },
  },
  {
    id: "ai-autonomy",
    icon: Layers,
    accent: "purple",
    title: "How I Calibrate AI Autonomy",
    summary: "Not all AI decisions are equal. A balance check and a claims dispute require fundamentally different levels of trust. Here's how I think about the spectrum.",
    content: {
      levels: [
        {
          level: 1,
          title: "Action Autonomy",
          subtitle: "Low-stakes, high-volume",
          examples: "Balance checks, FAQs, policy status, KYC queries. The AI resolves the task end-to-end. If it gets it wrong, the user retries or gets redirected. No lasting damage.",
          risk: "Full Autonomy",
          color: "text-green-400 border-green-500/30 bg-green-500/10",
        },
        {
          level: 2,
          title: "Guided Autonomy",
          subtitle: "Multi-step, medium-stakes",
          examples: "Loan applications, dispute resolution, renewal processing. The AI orchestrates the workflow but triggers human review at key decision points. Like a co-pilot — it drives, but the human approves the turns.",
          risk: "Human-in-the-Loop",
          color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
        },
        {
          level: 3,
          title: "Human-Led + AI-Assisted",
          subtitle: "High-stakes, irreversible",
          examples: "Claims adjudication, underwriting decisions, complaint escalation. The human decides; the AI surfaces relevant data, past cases, and risk scores. This isn't AI limitation — it's product judgment.",
          risk: "AI as Intelligence Layer",
          color: "text-red-400 border-red-500/30 bg-red-500/10",
        },
      ],
      callout: "The wrong calibration destroys trust. Automate too much → users distrust the system after the first bad experience. Automate too little → the AI becomes an expensive FAQ page. The product skill is finding the line — and moving it gradually as the system earns trust through performance.",
    },
  },
];

const accentColors: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", iconBg: "bg-blue-500/10" },
  purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", iconBg: "bg-purple-500/10" },
  green: { border: "border-green-500/30", bg: "bg-green-500/10", text: "text-green-400", iconBg: "bg-green-500/10" },
  red: { border: "border-red-500/30", bg: "bg-red-500/10", text: "text-red-400", iconBg: "bg-red-500/10" },
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
            className="w-full text-left rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 cursor-pointer group"
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
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-blue-400">{level.level}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1 text-center">{level.title}</h3>
                <p className="text-xs text-slate-500 mb-4 text-center">{level.subtitle}</p>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{level.examples}</p>
                <div className="text-center">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${level.color}`}>
                    {level.risk}
                  </span>
                </div>
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
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Target className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-slate-200">{item.question}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed ml-8">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-5 py-4">
            <p className="text-sm text-red-300 leading-relaxed">{article.content.callout}</p>
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
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-100">How I Think</h1>
                    <p className="text-slate-400 text-sm">Decision frameworks from regulated AI, 0→1, and enterprise delivery</p>
                  </div>
                </div>
                <p className="text-slate-400 max-w-2xl mb-12 leading-relaxed">
                  Not theoretical frameworks — these are mental models I used to make real decisions. Tradeoff thinking from shipping AI at SBI Life, kill/go frameworks from Cloudcraftz, and autonomy calibration from designing systems that handle failure gracefully.
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
