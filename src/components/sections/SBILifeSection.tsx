"use client";

import { MapPin, Calendar, Bot, BarChart3, Smartphone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences } from "@/data/resume";

const projectIcons = [Bot, BarChart3, Smartphone];

export default function SBILifeSection() {
  const exp = experiences.find((e) => e.id === "sbi-life")!;

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

        {/* Project cards */}
        <div className="space-y-6">
          {exp.projects?.map((project, i) => {
            const Icon = projectIcons[i] || Calendar;
            return (
              <ScrollReveal key={i} delay={0.15 * (i + 1)}>
                <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  {/* Gradient top accent */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                        {project.title}
                      </h3>
                      {project.period && (
                        <span className="text-sm text-slate-500 font-mono">
                          {project.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 ml-14">
                    {project.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex gap-2"
                      >
                        <span className="text-blue-500 mt-1 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
