"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Journey", href: "/", tooltip: null },
  { label: "My AI", href: "#", tooltip: "Paste a JD and get a fit analysis", isChat: true },
  { label: "How I Think", href: "/pm-mindset", tooltip: "Tradeoffs, kill frameworks, AI autonomy" },
  { label: "My Ideas", href: "/ideas", tooltip: "Product ideas I'm exploring" },
];

interface NavbarProps {
  onChatOpen?: () => void;
}

export default function Navbar({ onChatOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold gradient-text tracking-tight">
            DNK
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.isChat ? (
                  <button
                    onClick={onChatOpen}
                    className="px-4 py-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-500/5"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-blue-500/5"
                  >
                    {link.label}
                  </Link>
                )}
                {link.tooltip && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                    {link.tooltip}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-800 border-l border-t border-slate-700" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-slate-400 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-slate-800/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.isChat ? (
                  <button
                    onClick={() => { setMobileOpen(false); onChatOpen?.(); }}
                    className="block w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/5"
                  >
                    {link.label}
                    {link.tooltip && <span className="block text-xs text-slate-600 mt-0.5">{link.tooltip}</span>}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-400 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/5"
                  >
                    {link.label}
                    {link.tooltip && <span className="block text-xs text-slate-600 mt-0.5">{link.tooltip}</span>}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
