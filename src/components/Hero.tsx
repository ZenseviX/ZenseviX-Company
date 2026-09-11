import React from 'react';
import { CircuitVisual } from './CircuitVisual';
import { ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle carbon grid & apex glow background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[128px]" />
        <div className="absolute top-24 right-1/4 w-80 h-80 bg-red-950/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-neutral-400">STATUS:</span>
              <span className="text-white font-medium">PREDICT THE RACE. OPTIMIZE THE STRATEGY.</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black uppercase tracking-tight text-white leading-[0.98] mb-6">
              THE FUTURE OF<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-500">
                RACE STRATEGY.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mb-8">
              AI-powered race simulation that helps teams predict outcomes, optimize pit stops, and make smarter decisions before every critical lap.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-explore-btn"
                onClick={onExplore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-md transition-all duration-200 shadow-lg shadow-red-950/50 hover:shadow-red-800/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Zensivix</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-tech-btn"
                href="#technology"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 rounded-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Terminal className="w-4 h-4 text-red-500" />
                <span>View Technology</span>
              </a>
            </div>

            {/* Micro Credibility Bar */}
            <div className="mt-10 pt-6 border-t border-neutral-800/80 w-full flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">10,000+</span>
                <span>LAPS SIMULATED / SEC</span>
              </div>
              <div className="h-3 w-px bg-neutral-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">&lt; 150ms</span>
                <span>STRATEGY SOLVER LATENCY</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual (Abstract Futuristic Circuit + Telemetry + Floating Cards) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <CircuitVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
