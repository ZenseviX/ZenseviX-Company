import React from 'react';
import { Activity, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#060709] text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800/60">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <Activity className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-xl font-bold font-sans tracking-tight text-white">
                Zensivix
              </span>
            </a>

            {/* Tagline */}
            <p className="text-base text-neutral-300 font-medium italic mb-4">
              "Predict the Race. Optimize the Strategy."
            </p>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed mb-6">
              Zensivix is an AI-powered racing strategy platform that analyzes race data and helps teams make better decisions about tire strategy, pit stops, and race conditions.
            </p>

            {/* Telemetry Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>TELEMETRY SERVERS OPERATIONAL [240Hz]</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-white transition-colors">
                  Simulator Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Legal & Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              Engineering Hub
            </h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <p>Silverstone Innovation Centre, Northants, UK</p>
              <p className="font-mono text-xs text-neutral-400">telemetry@zensivix.ai</p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#hero"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-red-500/50 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#hero"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-red-500/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#hero"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-red-500/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4">
          <p>© 2026 Zensivix. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
