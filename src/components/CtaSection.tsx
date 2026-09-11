import React from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

interface CtaSectionProps {
  onStartExploring: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartExploring }) => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/5 bg-[#08080a] overflow-hidden">
      {/* Background ambient red radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative racing line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(239, 68, 68, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 100%'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small top chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono font-semibold tracking-widest text-neutral-300 uppercase mb-8">
          <Zap className="w-3.5 h-3.5 text-red-500" />
          RACE STRATEGY INTELLIGENCE
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
          Make Every Lap Count.
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Race smarter with AI-powered strategy.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-start-exploring-btn"
            onClick={onStartExploring}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-md transition-all duration-200 shadow-xl shadow-red-950/60 hover:shadow-red-900/50 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Minimal subtext */}
        <p className="mt-8 text-xs font-mono text-neutral-400">
          DEPLOYABLE FOR FORMULA 1, WEC HYPERCAR, INDYCAR & GT3 STRATEGY DESKS
        </p>
      </div>
    </section>
  );
};
