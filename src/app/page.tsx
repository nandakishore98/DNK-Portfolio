"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SBILifeSection from "@/components/sections/SBILifeSection";
import MBASection from "@/components/sections/MBASection";
import CloudcraftzSection from "@/components/sections/CloudcraftzSection";
import AccentureSection from "@/components/sections/AccentureSection";
import UndergradSection from "@/components/sections/UndergradSection";
import HomeSection from "@/components/sections/HomeSection";
import ChatWidget from "@/components/chat/ChatWidget";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);

  return (
    <div className="relative bg-slate-950 min-h-screen">
      <Navbar onChatOpen={openChat} />

      {/* Journey line */}
      <div className="hidden lg:block fixed left-8 top-0 bottom-0 w-px z-10">
        <div className="h-full journey-line opacity-20" />
      </div>

      <main>
        <HeroSection onChatOpen={openChat} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <SBILifeSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <MBASection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <CloudcraftzSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <AccentureSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <UndergradSection />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        <HomeSection onChatOpen={openChat} />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800/50">
        &copy; {new Date().getFullYear()} Nanda Kishore D. Vibe coded with Next.js &amp; Claude.
      </footer>

      <ChatWidget isOpen={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </div>
  );
}
