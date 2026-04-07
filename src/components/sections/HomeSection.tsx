"use client";

import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  BadgeCheck,
  ArrowUpRight,
  MessageCircle,
  Code2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { profile, certifications } from "@/data/resume";

interface HomeSectionProps {
  onChatOpen?: () => void;
}

const proofSnippets = [
  { label: "Conversational AI", proof: "Shipped to 4.5 Cr policyholders — failure-first design, IRDAI compliance, hybrid LLM architecture" },
  { label: "0→1 Product Design", proof: "Built spec for AI hiring platform at Cloudcraftz. Engineering shipped V1 directly from it" },
  { label: "Data Governance", proof: "Unified MIS across 3 channels at SBI Life. Cut data errors from 5% to <1%" },
  { label: "Vendor Evaluation", proof: "Led GenAI vendor RFP — POC scoring, integration feasibility, compliance readiness" },
  { label: "Product-Led Growth", proof: "Grew distributor dashboard from 5K to 50K DAU by fixing the data layer, not the UX" },
  { label: "Enterprise Delivery", proof: "Reduced 6,000+ vulnerability backlog to <20 active items. Best People Award (top 4/100+)" },
];

export default function HomeSection({ onChatOpen }: HomeSectionProps) {
  return (
    <section id="home" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 pulse-glow" />
            <span className="text-sm font-mono text-rose-400">Home</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              Bengaluru
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-100">
            Where it all began
          </h2>
        </ScrollReveal>

        {/* Proof snippets instead of generic skill tags */}
        <div className="space-y-3 mb-12">
          {proofSnippets.map((item, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="flex items-start gap-3 py-2">
                <span className="text-sm font-semibold text-slate-200 w-40 flex-shrink-0">{item.label}</span>
                <span className="text-sm text-slate-500">{item.proof}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium"
              >
                <BadgeCheck className="w-4 h-4" />
                {cert}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal delay={0.25}>
          <div id="contact" className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-8">
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">{profile.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">{profile.phone}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            {onChatOpen && (
              <button
                onClick={onChatOpen}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with My AI
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Vibe coded note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600">
            <Code2 className="w-3.5 h-3.5" />
            <span>Vibe coded with Claude Code &amp; Next.js</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
