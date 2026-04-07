"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Wrench, Target, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, accentureFlow } from "@/data/resume";

const flow = accentureFlow.vulnerabilityTriage;

export default function AccentureSection() {
  const exp = experiences.find((e) => e.id === "accenture")!;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="accenture" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Company header */}
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

        {/* Flow title + subtitle */}
        <ScrollReveal delay={0.15}>
          <h3 className="text-xl font-semibold text-slate-100 mb-1">
            {flow.title}
          </h3>
          <p className="text-sm text-slate-400 mb-8 max-w-2xl">
            {flow.subtitle}
          </p>
        </ScrollReveal>

        {/* Horizontal flowchart */}
        <ScrollReveal delay={0.2}>
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

                  {/* Tooltip */}
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

        {/* 3-column grid: Skills | Tools | Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Key Skills */}
          <ScrollReveal delay={0.25}>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-green-400" />
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                  Key Skills
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {flow.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tools Used */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-4 h-4 text-green-400" />
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                  Tools Used
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {flow.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Key Metrics */}
          <ScrollReveal delay={0.35}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
