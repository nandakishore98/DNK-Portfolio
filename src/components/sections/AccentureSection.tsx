"use client";

import { MapPin, Shield, Award, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences } from "@/data/resume";

export default function AccentureSection() {
  const exp = experiences.find((e) => e.id === "accenture")!;
  const bulletIcons = [Shield, FileText, Award];

  return (
    <section id="accenture" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 pulse-glow" />
            <span className="text-sm font-mono text-green-400">{exp.period}</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
            {exp.company}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-3">
            {exp.role}
          </p>
          <p className="text-slate-600 dark:text-slate-500 max-w-3xl mb-10">
            {exp.description}
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {exp.bullets?.map((bullet, i) => {
            const Icon = bulletIcons[i] || Shield;
            return (
              <ScrollReveal key={i} delay={0.15 * (i + 1)}>
                <div className="group flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
