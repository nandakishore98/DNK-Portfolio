"use client";

import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  BadgeCheck,
  ArrowUpRight,
  MessageCircle,
  Code2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { profile, skillCategories, certifications, achievements } from "@/data/resume";

interface HomeSectionProps {
  onChatOpen?: () => void;
}

export default function HomeSection({ onChatOpen }: HomeSectionProps) {
  return (
    <section id="home" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 pulse-glow" />
            <span className="text-sm font-mono text-rose-400">Home</span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              Bengaluru
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-slate-100">
            Where it all began
          </h2>
        </ScrollReveal>

        {/* Key metrics */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 text-center hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {a.metric}
                </p>
                <p className="text-sm font-medium text-slate-300">
                  {a.label}
                </p>
                <p className="text-xs text-slate-500 mt-1">{a.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills by category */}
        <div className="space-y-8 mb-12">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm border border-slate-700/80 bg-slate-800/50 text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium"
              >
                <BadgeCheck className="w-4 h-4" />
                {cert}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal delay={0.25}>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-8">
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">{profile.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">{profile.phone}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            {onChatOpen && (
              <button
                onClick={onChatOpen}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with My AI
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Vibe coded note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600">
            <Code2 className="w-3.5 h-3.5" />
            <span>Vibe coded with Claude Code &amp; Next.js</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
