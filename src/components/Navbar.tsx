import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Technology', href: '#technology' },
    { label: 'Features', href: '#features' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          id="navbar-logo"
        >
          {/* Motorsport Telemetry Geometric Emblem */}
          <div className="relative w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center overflow-hidden group-hover:border-red-500/70 transition-colors">
            <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/20 transition-colors" />
            <Activity className="w-4 h-4 text-red-500 transform group-hover:scale-110 transition-transform duration-200" />
            {/* Speed cuts */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rotate-45 transform translate-x-1 -translate-y-1" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white group-hover:text-neutral-100">
                Zensivix
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 rounded">
                AI
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-red-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="h-4 w-px bg-neutral-800" />
          <button
            id="nav-get-started-btn"
            onClick={onOpenGetStarted}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-md transition-all duration-200 shadow-md shadow-red-950/50 hover:shadow-red-900/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get Started</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1.5 -mr-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0c0d11]/98 border-b border-neutral-800 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-900/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-800">
              <button
                id="mobile-nav-get-started-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-md shadow-lg shadow-red-950/40"
              >
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
