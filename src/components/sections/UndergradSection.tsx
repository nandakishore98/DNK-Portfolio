"use client";

import { MapPin, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { education } from "@/data/resume";

export default function UndergradSection() {
  const undergrad = education.find((e) => e.id === "undergrad")!;

  return (
    <section id="undergrad" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 pulse-glow" />
            <span className="text-sm font-mono text-amber-400">
              {undergrad.period}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              {undergrad.location}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
            {undergrad.institution}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            {undergrad.degree}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="inline-flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 p-6 hover:border-amber-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {undergrad.grade}
              </p>
              <p className="text-sm text-slate-500">CGPA</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
