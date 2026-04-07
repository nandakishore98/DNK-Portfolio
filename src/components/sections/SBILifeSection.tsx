"use client";

import { useState } from "react";
import { MapPin, ArrowRight, BarChart3, AlertCircle, Lightbulb, GitBranch, Scale, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, sbiProcessFlows } from "@/data/resume";
import type { Capability, CaseStudy } from "@/data/resume";

type FlowKey = keyof typeof sbiProcessFlows;

const capabilityColors: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-300" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-300" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-300" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-300" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-300" },
  red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-300" },
  slate: { bg: "bg-slate-800/50", border: "border-slate-700/60", text: "text-slate-300" },
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

function ProcessFlow({ flow }: { flow: (typeof sbiProcessFlows)[FlowKey] }) {
  return (
    <div className="space-y-8">
      <p className="text-sm italic text-slate-500 max-w-2xl">
        {flow.subtitle}
      </p>

      {/* Case Study */}
      {"caseStudy" in flow && flow.caseStudy && (
        <CaseStudyCard cs={flow.caseStudy} />
      )}

      {/* Flowchart */}
      <div className="relative">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Execution Flow</h4>
        <div className="flex flex-wrap gap-2 items-center">
          {flow.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="group relative">
                <div className="px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-sm font-medium text-slate-200 hover:border-blue-500/40 hover:bg-slate-800 transition-all duration-200 cursor-default">
                  {step.label}
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 text-xs text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl z-10 max-w-[200px] whitespace-normal text-center">
                  {step.detail}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-800 border-r border-b border-slate-600" />
                </div>
              </div>
              {i < flow.steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-blue-500/60 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities + Metrics */}
      <div className={`grid ${flow.metrics.length > 0 ? "sm:grid-cols-3" : "sm:grid-cols-1"} gap-4`}>
        <div className={`${flow.metrics.length > 0 ? "sm:col-span-2" : ""} rounded-xl border border-slate-800/80 bg-slate-900/50 p-5`}>
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">How It Was Built</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {flow.capabilities.map((cap, i) => (
              <CapabilityChip key={i} cap={cap} />
            ))}
          </div>
        </div>

        {flow.metrics.length > 0 && (
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Key Metrics</h4>
            </div>
            <div className="space-y-2">
              {flow.metrics.map((m, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-sm font-bold gradient-text">{m.value}</span>
                  <span className="text-xs text-slate-500">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SBILifeSection() {
  const exp = experiences.find((e) => e.id === "sbi-life")!;
  const [activeProject, setActiveProject] = useState<FlowKey>("conversationalAI");

  const projects: { key: FlowKey; label: string }[] = [
    { key: "conversationalAI", label: "Conversational AI" },
    { key: "distributorDashboard", label: "Distributor Dashboards" },
    { key: "loanAgainstPolicy", label: "Loan Against Policy" },
    { key: "yonoPrototypes", label: "YONO Prototypes" },
  ];

  const activeFlow = sbiProcessFlows[activeProject];

  return (
    <section id="sbi-life" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 pulse-glow" />
            <span className="text-sm font-mono text-blue-400">{exp.period}</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-100">
            {exp.company}
          </h2>
          <p className="text-lg text-slate-400 mb-3">{exp.role}</p>
          <p className="text-slate-500 max-w-3xl mb-10">{exp.description}</p>
        </ScrollReveal>

        {/* Project tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-8">
            {projects.map((p) => (
              <button
                key={p.key}
                onClick={() => setActiveProject(p.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeProject === p.key
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-300"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">
              {activeFlow.title}
            </h3>
            <ProcessFlow flow={activeFlow} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
