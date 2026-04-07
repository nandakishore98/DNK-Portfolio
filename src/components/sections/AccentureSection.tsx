"use client";

import { MapPin, AlertCircle, GitBranch, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, accentureFlow } from "@/data/resume";

const flow = accentureFlow.vulnerabilityTriage;

export default function AccentureSection() {
  const exp = experiences.find((e) => e.id === "accenture")!;

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
          <p className="text-slate-500 max-w-3xl mb-8">{exp.description}</p>
        </ScrollReveal>

        {/* Compressed case study: Problem → Decision → Outcome */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-6">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              {flow.title}
            </h3>
            <p className="text-sm italic text-slate-500 mb-5">{flow.subtitle}</p>

            <div className="space-y-4">
              {flow.caseStudy && (
                <>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-1.5 w-20 flex-shrink-0 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Problem</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{flow.caseStudy.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-1.5 w-20 flex-shrink-0 pt-0.5">
                      <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Decision</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{flow.caseStudy.decision}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-1.5 w-20 flex-shrink-0 pt-0.5">
                      <Target className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Outcome</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{flow.caseStudy.outcome}</p>
                  </div>
                </>
              )}
            </div>

            {/* Inline metrics + capability tags */}
            <div className="mt-6 pt-5 border-t border-slate-800/60">
              <div className="flex flex-wrap gap-4 mb-4">
                {flow.metrics.map((m) => (
                  <div key={m.label} className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-green-400">{m.value}</span>
                    <span className="text-xs text-slate-500">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {flow.capabilities.flatMap((cap) => cap.items).map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded-full text-[10px] border border-slate-700/60 text-slate-500 bg-slate-800/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
