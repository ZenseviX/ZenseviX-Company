import React from 'react';
import { ArrowRight, Cpu, Trophy, BarChart3, Clock, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/5 bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-red-950/40 border border-red-800/30 text-xs font-mono font-semibold tracking-widest text-red-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            THE CHALLENGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Every second matters.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            In motorsport, a single strategic decision can change the outcome of an entire race. Choosing the wrong tire or missing the right pit window can cost valuable seconds and positions.
          </p>
        </div>

        {/* Visual: Data → Decision → Race Outcome */}
        <div className="relative rounded-2xl border border-neutral-800/90 bg-neutral-950/70 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {/* Subtle top indicator bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-8 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-bold">FLOW DIAGRAM:</span>
              <span className="text-neutral-300">RACE EXECUTION CHAIN</span>
            </div>
            <span className="hidden sm:inline text-neutral-400">TOLERANCE: ±0.10s PER STINT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: Data */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <BarChart3 className="w-5 h-5 text-neutral-300" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-500">STAGE 01</span>
                </div>
                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-wide mb-2">
                  Data
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  High-frequency track telemetry, micro-sector speeds, thermal tire wear, and dynamic ambient shifts.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-800 text-xs font-mono space-y-2">
                <div className="flex justify-between text-neutral-400">
                  <span>Track Surface</span>
                  <span className="text-neutral-200">41.8°C (Deg: High)</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Delta to P2</span>
                  <span className="text-red-400">+1.840s (Closing)</span>
                </div>
              </div>
            </div>

            {/* Step 2: Decision */}
            <div className="relative rounded-xl border border-red-500/40 bg-red-950/10 p-6 flex flex-col justify-between hover:border-red-500/60 transition-colors">
              {/* Highlight ribbon */}
              <div className="absolute -top-3 left-6 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
                ZENSIVIX ENGINE
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-900/40 flex items-center justify-center border border-red-700/50">
                    <Cpu className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-red-400">STAGE 02</span>
                </div>
                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-wide mb-2">
                  Decision
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  Real-time algorithmic pit window optimization and tire compound recommendation based on simulated outcomes.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-red-900/30 text-xs font-mono space-y-2">
                <div className="flex justify-between text-neutral-300">
                  <span>Box Target</span>
                  <span className="text-white font-bold">LAP 26 [HARD COMPOUND]</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Undercut Threat</span>
                  <span className="text-emerald-400 font-semibold">NEUTRALIZED</span>
                </div>
              </div>
            </div>

            {/* Step 3: Race Outcome */}
            <div className="relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-500">STAGE 03</span>
                </div>
                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-wide mb-2">
                  Race Outcome
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  Maximized championship points, protected track position, and eliminated costly human strategy errors.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-800 text-xs font-mono space-y-2">
                <div className="flex justify-between text-neutral-400">
                  <span>Net Track Delta</span>
                  <span className="text-emerald-400 font-bold">-5.5 SEC</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Final Position</span>
                  <span className="text-white font-bold">P1 (VICTORY)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop flow connector indicators */}
          <div className="hidden md:flex justify-between items-center mt-6 px-4 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              Sub-second sensor latency
            </span>
            <span className="flex items-center gap-1 text-red-400">
              <ArrowRight className="w-3.5 h-3.5" />
              Deterministic Strategy Pipeline
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              Optimal Podium Probability: 94.2%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
