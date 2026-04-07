"use client";

import { useState } from "react";
import { MapPin, ArrowRight, BarChart3, AlertCircle, Lightbulb, GitBranch, Scale, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, accentureFlow } from "@/data/resume";
import type { Capability, CaseStudy } from "@/data/resume";

const capabilityColors: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-300" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-300" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-300" },
};

function CapabilityChip({ cap }: { cap: Capability }) {
  const c = capabilityColors[cap.color];
  return (
    <div>
      <span className={`text-[10px] font-semibold uppercase tracking-wider ${c.text} mb-2 block`}>
        {cap.category}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {cap.items.map((item) => (
          <span key={item} className={`px-2.5 py-1 rounded-full text-xs ${c.bg} ${c.text} border ${c.border}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const rows = [
    { icon: AlertCircle, label: "Problem", text: cs.problem, color: "text-red-400" },
    { icon: Lightbulb, label: "Insight", text: cs.insight, color: "text-amber-400" },
    { icon: GitBranch, label: "Decision", text: cs.decision, color: "text-blue-400" },
    { icon: Scale, label: "Tradeoffs", text: cs.tradeoffs, color: "text-purple-400" },
    { icon: Target, label: "Outcome", text: cs.outcome, color: "text-emerald-400" },
  ];

  return (
    <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5 mb-6">
      <div className="space-y-3">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="flex items-start gap-3">
              <div className="flex items-center gap-1.5 w-24 flex-shrink-0 pt-0.5">
                <Icon className={`w-3.5 h-3.5 ${row.color}`} />
                <span className={`text-xs font-semibold uppercase tracking-wider ${row.color}`}>{row.label}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{row.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const flow = accentureFlow.vulnerabilityTriage;

export default function AccentureSection() {
  const exp = experiences.find((e) => e.id === "accenture")!;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="accenture" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 pulse-glow" />
            <span className="text-sm font-mono text-green-400">
              2020 &ndash; 2022
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              Bengaluru
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-100">
            {exp.company}
          </h2>
          <p className="text-lg text-slate-400 mb-1">{exp.role}</p>
          <p className="text-slate-500 max-w-3xl mb-12">{exp.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h3 className="text-xl font-semibold text-slate-100 mb-1">
            {flow.title}
          </h3>
          <p className="text-sm italic text-slate-500 mb-6 max-w-2xl">
            {flow.subtitle}
          </p>
        </ScrollReveal>

        {/* Case Study */}
        <ScrollReveal delay={0.18}>
          {flow.caseStudy && <CaseStudyCard cs={flow.caseStudy} />}
        </ScrollReveal>

        {/* Horizontal flowchart */}
        <ScrollReveal delay={0.2}>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Execution Flow</h4>
          <div className="flex flex-wrap items-center gap-2 mb-14">
            {flow.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 cursor-default transition-colors hover:bg-green-500/20 hover:border-green-500/40">
                    {step.label}
                  </span>

                  {hoveredStep === i && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-xs text-slate-300 shadow-xl z-50">
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-700" />
                      {step.detail}
                    </div>
                  )}
                </div>

                {i < flow.steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Capabilities + Metrics */}
        <ScrollReveal delay={0.25}>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="sm:col-span-2 rounded-xl border border-slate-800/80 bg-slate-900/50 p-6">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                How It Was Built
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {flow.capabilities.map((cap, i) => (
                  <CapabilityChip key={i} cap={cap} />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-4 h-4 text-green-400" />
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                  Key Metrics
                </h4>
              </div>
              <div className="space-y-3">
                {flow.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-lg font-bold text-green-400">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-400">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
