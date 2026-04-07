"use client";

import { MapPin, Trophy, ShoppingBag, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { education } from "@/data/resume";

const achievementIcons = [Trophy, ShoppingBag, Star];

export default function MBASection() {
  const mba = education.find((e) => e.id === "mba")!;

  return (
    <section id="mba" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 pulse-glow" />
            <span className="text-sm font-mono text-purple-400">{mba.period}</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              {mba.location}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">
            {mba.institution}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
            {mba.degree}
          </p>
        </ScrollReveal>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {mba.achievements?.map((achievement, i) => {
            const Icon = achievementIcons[i] || Trophy;
            return (
              <ScrollReveal key={i} delay={0.15 * (i + 1)}>
                <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {achievement}
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
