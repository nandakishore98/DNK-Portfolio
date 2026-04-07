"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Wrench, Target, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, processFlows } from "@/data/resume";

function ProcessFlow({ flow }: { flow: typeof processFlows.conversationalAI }) {
  return (
    <div className="space-y-8">
      {/* Subtitle / tagline */}
      <p className="text-sm italic text-slate-500 max-w-2xl">
        {flow.subtitle}
      </p>

      {/* Flowchart */}
      <div className="relative">
        <div className="flex flex-wrap gap-2 items-center">
          {flow.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="group relative">
                <div className="px-4 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-sm font-medium text-slate-200 hover:border-blue-500/40 hover:bg-slate-800 transition-all duration-200 cursor-default">
                  {step.label}
                </div>
                {/* Tooltip with detail */}
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

      {/* Skills + Tools + Metrics grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Skills */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-blue-400" />
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Key Skills</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {flow.skills.map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-full text-xs border border-slate-700/60 text-slate-400 bg-slate-800/50">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-4 h-4 text-purple-400" />
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Tools Used</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {flow.tools.map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-full text-xs border border-purple-500/30 text-purple-300 bg-purple-500/10">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
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
      </div>
    </div>
  );
}

export default function SBILifeSection() {
  const exp = experiences.find((e) => e.id === "sbi-life")!;
  const [activeProject, setActiveProject] = useState<"conversationalAI" | "distributorDashboard">("conversationalAI");

  const projects = [
    { key: "conversationalAI" as const, label: "Conversational AI", flow: processFlows.conversationalAI },
    { key: "distributorDashboard" as const, label: "Distributor Dashboards", flow: processFlows.distributorDashboard },
  ];

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
          <div className="flex gap-2 mb-8">
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
              {projects.find((p) => p.key === activeProject)!.flow.title}
            </h3>
            <ProcessFlow flow={projects.find((p) => p.key === activeProject)!.flow} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
