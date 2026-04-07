"use client";

import { MapPin, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { education } from "@/data/resume";

const techThemes = ["Artificial Intelligence", "Cloud Computing", "Data Structures", "Big Data", "IoT", "Blockchain"];

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-100">
            {undergrad.institution}
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            {undergrad.degree}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* CGPA */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-900/50 px-5 py-3">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-slate-100">{undergrad.grade}</span>
                <span className="text-xs text-slate-500">CGPA</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Key themes as tags */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {techThemes.map((theme) => (
              <span key={theme} className="px-2.5 py-1 rounded-full text-xs border border-amber-500/20 text-amber-400/80 bg-amber-500/5">
                {theme}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Compressed volunteering */}
        <ScrollReveal delay={0.25}>
          <p className="text-sm text-slate-500 leading-relaxed">
            Youth for Seva volunteer (2018–2022) — taught English &amp; math to underprivileged students, recorded textbook audio for visually impaired.
            Rotaract Club of Bangalore South — Treasurer, managed membership &amp; budgets.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
