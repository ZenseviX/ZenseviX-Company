import React from 'react';
import { TrendingUp, GitFork, Compass, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'PREDICT',
      desc: 'Predict future race performance.',
      icon: TrendingUp,
      detail: 'Leverage historical degradation curves and live weather telemetry to project lap times across full stints.',
      metrics: ['Pace forecasting', 'Thermal cliff warning']
    },
    {
      num: '02',
      title: 'SIMULATE',
      desc: 'Test different race strategies.',
      icon: GitFork,
      detail: 'Execute Monte Carlo race simulations factoring in Virtual Safety Cars, yellow flags, traffic, and undercut windows.',
      metrics: ['10,000+ branch paths', 'Pit delta calculus']
    },
    {
      num: '03',
      title: 'OPTIMIZE',
      desc: 'Find the best strategy.',
      icon: Compass,
      detail: 'Identify the mathematically superior compound sequence and pit stop window to maximize finishing positions.',
      metrics: ['Expected value ranking', 'Dynamic track position']
    }
  ];

  return (
    <section id="technology" className="relative py-24 sm:py-32 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-red-950/40 border border-red-800/30 text-xs font-mono font-semibold tracking-widest text-red-400 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            THE SOLUTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Turn race data into smarter decisions.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Zensivix combines machine learning, simulation, and optimization to evaluate different race scenarios and identify strategies with the highest potential.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                id={`solution-card-${card.num}`}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 flex flex-col justify-between hover:border-red-500/50 hover:bg-neutral-900/70 transition-all duration-300"
              >
                {/* Subtle top indicator line on hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-mono font-black text-neutral-500 group-hover:text-red-500 transition-colors">
                      {card.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:border-red-500/40 group-hover:bg-red-950/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Core Subtitle */}
                  <h3 className="text-2xl font-black font-sans uppercase tracking-tight text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base font-medium text-red-400 mb-4">
                    {card.desc}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {card.detail}
                  </p>
                </div>

                {/* Sub-bullets */}
                <div className="pt-6 border-t border-neutral-800/80 space-y-2">
                  {card.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
