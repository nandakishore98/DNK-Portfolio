"use client";

import { useState } from "react";
import {
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Car,
  Users,
  Building2,
  TrendingUp,
  DollarSign,
  Headphones,
  Briefcase,
  Globe,
  Shield,
  MapPin,
  Wallet,
  Lock,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

/* ───────── Idea definitions ───────── */

const ideas = [
  {
    id: "conversational-banking",
    icon: MessageSquare,
    accent: "blue",
    title: "Conversational Banking at Scale",
    summary:
      "A MECE framework for day-one conversational banking use cases — proactive outreach, conversational cross-sell, smart triage, and branch enablement for distributors.",
  },
  {
    id: "ride-hailing",
    icon: Car,
    accent: "orange",
    title: "6 Gen AI Features Ride-Hailing Apps Should've Shipped Yesterday",
    summary:
      "Ride-hailing apps optimize for bookings. Riders optimize for reaching on time. Here's the gap — and the features that close it.",
  },
];

const accentColors: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", iconBg: "bg-blue-500/10" },
  orange: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400", iconBg: "bg-orange-500/10" },
};

/* ───────── Idea 1 Data: Conversational Banking ───────── */

const customerBranches = [
  {
    category: "Engagement",
    label: "Proactive Outreach",
    icon: TrendingUp,
    color: "emerald",
    description:
      "Move beyond reactive flows to AI-initiated touchpoints — renewal reminders, pre-qualified loan nudges, dormant account reactivation. The bot meets the customer.",
  },
  {
    category: "Monetization",
    label: "Conversational Cross-sell",
    icon: DollarSign,
    color: "amber",
    description:
      "Insurance, mutual funds, credit cards through guided discovery — the chatbot as a recommendation layer with regulatory guardrails, not a product dump.",
  },
  {
    category: "Service",
    label: "Smart Service Triage",
    icon: Headphones,
    color: "sky",
    description:
      "Know when to resolve, escalate, or offer a callback. Containment goes up without CSAT going down. Intelligent routing, not just FAQ deflection.",
  },
];

const distributorBranches = [
  {
    category: "Distribution",
    label: "Branch Enablement",
    icon: Briefcase,
    color: "purple",
    description:
      "AI co-pilot on WhatsApp for RMs — contextual nudges on eligibility, pre-approved offers, objection handling. Every branch interaction becomes an informed one.",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", dot: "bg-amber-400" },
  sky: { bg: "bg-sky-500/10", border: "border-sky-500/20", text: "text-sky-400", dot: "bg-sky-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", dot: "bg-purple-400" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", dot: "bg-blue-400" },
  red: { bg: "bg-red-500/10", border: "border-red-500/20", text: "text-red-400", dot: "bg-red-400" },
};

/* ───────── Idea 2 Data: Ride-Hailing ───────── */

const pricingFlow = [
  { text: "App shows ₹120", sub: "Estimated fare" },
  { text: "No Driver Accepts", sub: "Timeout" },
  { text: "Another app at ₹140", sub: "Switch & retry" },
  { text: "Still no acceptance", sub: "Surge kicks in" },
  { text: "Pay ₹165, 12 min later", sub: "Finally booked" },
];

const featureCards = [
  {
    number: "01",
    title: "Multilingual Driver-Rider Chat",
    tags: ["Communication", "Real-time Translation"],
    icon: Globe,
    color: "blue",
    description: "Rider types in English, driver sees it in Kannada. Instantly.",
    features: [
      "Language preference at booking",
      "Real-time translated chat",
      "Pre-translated quick replies",
      "Auto-translated pickup instructions",
    ],
    ready: true,
  },
  {
    number: "02",
    title: "Any-Language Safety Helpline",
    tags: ["Safety", "Voice-to-Text", "Auto-Report"],
    icon: Shield,
    color: "red",
    description:
      "SOS button → speak in any language → real-time transcript + translation → auto-generated incident report.",
    features: [
      "Voice-to-text in rider's language",
      "Instant translation",
      "Auto-structured incident summary",
      "One-tap report to authorities",
    ],
    ready: true,
  },
  {
    number: "03",
    title: "Smart Pickup & Route Intelligence",
    tags: ["Navigation", "Context-Aware"],
    icon: MapPin,
    color: "emerald",
    description: null,
    features: [],
    ready: false,
  },
  {
    number: "04",
    title: "Driver Earnings Copilot",
    tags: ["Driver Tools", "Earnings Optimization"],
    icon: Wallet,
    color: "amber",
    description: null,
    features: [],
    ready: false,
  },
];

/* ───────── Shared Components ───────── */

function BranchCard({ item, delay }: { item: (typeof customerBranches)[0]; delay: number }) {
  const c = colorMap[item.color];
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-xl border ${c.border} ${c.bg} p-5`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-[10px] font-semibold uppercase tracking-wider ${c.text}`}>
          {item.category}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4 h-4 ${c.text}`} />
        </div>
        <h4 className="text-base font-semibold text-slate-100">{item.label}</h4>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

function FeatureCard({ card, delay }: { card: (typeof featureCards)[0]; delay: number }) {
  const c = colorMap[card.color];
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-xl border ${card.ready ? c.border : "border-slate-800/60"} ${
        card.ready ? c.bg : "bg-slate-900/40"
      } p-6`}
    >
      <span className={`text-xs font-mono ${card.ready ? c.text : "text-slate-600"}`}>
        {card.number}
      </span>

      <div className="flex items-center gap-3 mt-2 mb-1">
        <div
          className={`w-9 h-9 rounded-lg ${card.ready ? c.bg : "bg-slate-800/50"} border ${
            card.ready ? c.border : "border-slate-700/40"
          } flex items-center justify-center flex-shrink-0`}
        >
          <Icon className={`w-4 h-4 ${card.ready ? c.text : "text-slate-600"}`} />
        </div>
        <h4 className={`text-base font-semibold ${card.ready ? "text-slate-100" : "text-slate-500"}`}>
          {card.title}
        </h4>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
        {card.tags.map((t) => (
          <span
            key={t}
            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
              card.ready
                ? `${c.bg} ${c.text} border ${c.border}`
                : "bg-slate-800/40 text-slate-600 border border-slate-700/30"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {card.ready && card.description ? (
        <>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{card.description}</p>
          <ul className="space-y-2">
            {card.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${c.text}`} />
                {f}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="flex items-center gap-2 mt-2">
          <Lock className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-xs text-slate-600 italic">Coming soon</span>
        </div>
      )}
    </motion.div>
  );
}

/* ───────── List View ───────── */

function IdeaList({ onSelect }: { onSelect: (index: number) => void }) {
  return (
    <div className="space-y-5">
      {ideas.map((idea, i) => {
        const Icon = idea.icon;
        const colors = accentColors[idea.accent];
        return (
          <motion.button
            key={idea.id}
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
                  {idea.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{idea.summary}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 mt-1 flex-shrink-0 transition-colors" />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ───────── Article Views ───────── */

function ConversationalBankingView() {
  return (
    <div>
      <p className="text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">
        Day-one use cases across conversational banking — a MECE framework mapping customers and distributors to high-impact AI flows.
      </p>

      {/* MECE Tree */}
      <div className="relative">
        {/* Root node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold">
            Conversational Banking
          </div>
        </motion.div>

        {/* Connecting line from root */}
        <div className="flex justify-center mb-2">
          <div className="w-px h-6 bg-slate-700/60" />
        </div>

        {/* Horizontal connector */}
        <div className="hidden sm:flex justify-center mb-2">
          <div className="w-[60%] max-w-md h-px bg-slate-700/60 relative">
            <div className="absolute left-0 top-0 w-px h-4 bg-slate-700/60" />
            <div className="absolute right-0 top-0 w-px h-4 bg-slate-700/60" />
          </div>
        </div>

        {/* Two branch headers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">Customers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Building2 className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Distributors</span>
            </div>
          </motion.div>
        </div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            {customerBranches.map((b, i) => (
              <BranchCard key={b.label} item={b} delay={0.15 * (i + 1)} />
            ))}
          </div>
          <div className="space-y-4">
            {distributorBranches.map((b, i) => (
              <BranchCard key={b.label} item={b} delay={0.15 * (i + 1)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RideHailingView() {
  return (
    <div>
      <p className="text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">
        Ride-hailing apps optimize for bookings. Riders optimize for reaching on time. Here&apos;s the gap — and the features that close it.
      </p>

      {/* Problem Statement Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8 mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h3 className="text-lg font-semibold text-red-300">Negotiation Disguised as Automation</h3>
        </div>
        <p className="text-sm text-slate-400 mb-6 max-w-xl leading-relaxed">
          The app shows ₹120. No driver accepts below ₹150. This isn&apos;t a pricing algorithm. It&apos;s theatre.
        </p>

        {/* Pricing flow */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          {pricingFlow.map((step, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <span
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${
                    i === pricingFlow.length - 1
                      ? "bg-red-500/10 border-red-500/30 text-red-300"
                      : "bg-slate-800/60 border-slate-700/40 text-slate-300"
                  }`}
                >
                  {step.text}
                </span>
                <span className="text-[9px] text-slate-600 mt-1">{step.sub}</span>
              </div>
              {i < pricingFlow.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 border border-slate-800/60 rounded-lg px-4 py-3">
          <p className="text-xs text-slate-400 italic leading-relaxed">
            &quot;Train missed. Meeting late. Same story. Multiple times a week.&quot;
          </p>
        </div>
      </motion.div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featureCards.map((card, i) => (
          <FeatureCard key={card.number} card={card} delay={0.12 * (i + 1)} />
        ))}
      </div>
    </div>
  );
}

function IdeaView({ index, onBack }: { index: number; onBack: () => void }) {
  const idea = ideas[index];
  const colors = accentColors[idea.accent];
  const Icon = idea.icon;

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
        Back to Ideas
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div className={`w-11 h-11 rounded-lg ${colors.iconBg} border ${colors.border} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">{idea.title}</h2>
      </div>

      {index === 0 && <ConversationalBankingView />}
      {index === 1 && <RideHailingView />}
    </motion.div>
  );
}

/* ───────── Page ───────── */

export default function IdeasPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<number | null>(null);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {selectedIdea === null ? (
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
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-100">My Ideas</h1>
                    <p className="text-slate-400 text-sm">Want to know what excites me?</p>
                  </div>
                </div>
                <p className="text-slate-400 max-w-2xl leading-relaxed">
                  Product ideas, industry observations, and problem spaces I&apos;m thinking about.
                  Some are early explorations, others are deeper dives with frameworks and analysis.
                </p>
              </motion.div>

              <IdeaList onSelect={setSelectedIdea} />

              <div className="mt-16 text-center">
                <p className="text-sm text-slate-500">
                  Ideas are being documented. Check back soon or{" "}
                  <button onClick={() => setChatOpen(true)} className="text-blue-400 hover:underline">
                    ask my AI
                  </button>{" "}
                  about what I&apos;m working on.
                </p>
              </div>
            </>
          ) : (
            <IdeaView index={selectedIdea} onBack={() => setSelectedIdea(null)} />
          )}
        </div>
      </main>

      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
}
