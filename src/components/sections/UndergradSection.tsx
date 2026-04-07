"use client";

import { MapPin, GraduationCap, Brain, Heart, Cpu, Cloud, Database, Wifi, Link2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { education, undergradKnowledge, volunteerWork } from "@/data/resume";

const topicIcons = [Brain, Cloud, Database, Cpu, Wifi, Link2];

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
          <p className="text-lg text-slate-400 mb-8">
            {undergrad.degree}
          </p>
        </ScrollReveal>

        {/* CGPA card */}
        <ScrollReveal delay={0.15}>
          <div className="inline-flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 hover:border-amber-500/30 transition-all duration-300 mb-10">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-100">
                {undergrad.grade}
              </p>
              <p className="text-sm text-slate-500">CGPA</p>
            </div>
          </div>
        </ScrollReveal>

        {/* CS Knowledge Areas */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-lg font-semibold text-slate-200 mb-5">Technical Foundation</h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {undergradKnowledge.map((topic, i) => {
            const Icon = topicIcons[i] || Brain;
            return (
              <ScrollReveal key={topic.topic} delay={0.1 * (i + 1)}>
                <div className="group rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 hover:border-amber-500/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-slate-200">{topic.topic}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{topic.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Volunteer Work */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center gap-2 mb-5">
            <Heart className="w-4 h-4 text-rose-400" />
            <h3 className="text-lg font-semibold text-slate-200">Community & Volunteering</h3>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {volunteerWork.map((vol, i) => (
            <ScrollReveal key={vol.org} delay={0.15 * (i + 1)}>
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 hover:border-rose-500/20 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-slate-200">{vol.org}</h4>
                  <span className="text-[10px] text-slate-600 font-mono">{vol.period}</span>
                </div>
                <p className="text-xs text-rose-400 font-medium mb-3">{vol.role}</p>
                <ul className="space-y-1.5">
                  {vol.items.map((item) => (
                    <li key={item} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
