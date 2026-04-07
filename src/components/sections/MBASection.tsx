"use client";

import { MapPin, Trophy, ShoppingBag, Star, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { education, mbaLeadership, caseCompetitions } from "@/data/resume";

const compIcons = [Trophy, ShoppingBag, Star, Award, Award];

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-slate-100">
            {mba.institution}
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            {mba.degree}
          </p>
        </ScrollReveal>

        {/* Leadership role */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 mb-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-purple-300">{mbaLeadership.role}</h3>
              <p className="text-sm text-slate-400 mt-1">{mbaLeadership.description}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Case Competitions */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-lg font-semibold text-slate-200 mb-5">Case Competitions</h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseCompetitions.map((comp, i) => {
            const Icon = compIcons[i] || Award;
            return (
              <ScrollReveal key={i} delay={0.15 * (i + 1)}>
                <div className={`group relative rounded-xl border ${
                  comp.highlight ? "border-purple-500/30 bg-purple-500/5" : "border-slate-800/80 bg-slate-900/50"
                } p-5 hover:border-purple-500/40 transition-all duration-300 h-full`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      comp.highlight ? "bg-purple-500/10 border border-purple-500/20" : "bg-slate-800/50 border border-slate-700/40"
                    }`}>
                      <Icon className={`w-4 h-4 ${comp.highlight ? "text-purple-400" : "text-slate-500"}`} />
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      comp.highlight
                        ? "bg-purple-500/10 text-purple-300 border border-purple-500/30"
                        : "bg-slate-800/50 text-slate-400 border border-slate-700/40"
                    }`}>
                      {comp.result}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200 mb-1">{comp.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{comp.detail}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
