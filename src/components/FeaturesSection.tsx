import React from 'react';
import { Gauge, Disc3, Timer, Network, ChevronRight } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 'lap-time',
      title: 'Lap Time Prediction',
      subtitle: 'Predict expected lap performance.',
      description: 'Continuous predictive modeling factoring in fuel burn weight loss, track rubber-in rate, aero balance, and driver telemetry deltas.',
      icon: Gauge,
      badge: 'SPEED & PACE',
      telemetry: {
        metric: 'TARGET LAP',
        value: '1:33.890',
        delta: '-0.210s vs Field'
      }
    },
    {
      id: 'tire-strategy',
      title: 'Tire Strategy',
      subtitle: 'Compare Soft, Medium, and Hard compounds.',
      description: 'Analyze thermal degradation curves, graining risks, and grip drop-off cliffs for Pirelli C1 through C5 slick compounds.',
      icon: Disc3,
      badge: 'COMPOUND DYNAMICS',
      telemetry: {
        metric: 'COMPOUNDS',
        value: 'SOFT / MED / HARD',
        delta: 'Cross-over: Lap 24'
      }
    },
    {
      id: 'pit-stop',
      title: 'Pit Stop Optimization',
      subtitle: 'Find the optimal pit-stop window.',
      description: 'Calculate net pit loss time against traffic windows, DRS trains, and competitor pit in-laps to ensure clean air return.',
      icon: Timer,
      badge: 'BOX WINDOW',
      telemetry: {
        metric: 'STATIONARY LOSS',
        value: '21.4 SEC',
        delta: 'Clean Air Exit: 98%'
      }
    },
    {
      id: 'race-simulation',
      title: 'Race Simulation',
      subtitle: 'Explore different race scenarios before they happen.',
      description: 'Simulate safety cars, rain probability, red flag restarts, and alternate competitor strategies before committing.',
      icon: Network,
      badge: 'MONTE CARLO',
      telemetry: {
        metric: 'SCENARIOS RUN',
        value: '50,000 ITERATIONS',
        delta: 'Convergence: 99.4%'
      }
    }
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 border-t border-white/5 bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono font-semibold tracking-widest text-neutral-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Built for smarter racing.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Engineered specifically for race engineers, strategists, and performance directors demanding split-second predictive clarity.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`feature-${item.id}`}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/90 border border-neutral-700 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-neutral-400 font-semibold uppercase bg-neutral-800/60 px-2.5 py-1 rounded border border-neutral-700/60">
                      {item.badge}
                    </span>
                  </div>

                  {/* Feature Title & Subtitle */}
                  <h3 className="text-2xl font-black font-sans uppercase tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-red-400 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Micro Telemetry Widget in Card */}
                <div className="mt-4 pt-4 border-t border-neutral-800 bg-black/30 rounded-xl p-4 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase block">
                      {item.telemetry.metric}
                    </span>
                    <span className="text-white font-bold text-sm">
                      {item.telemetry.value}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-500 uppercase block">
                      DELTA / STATUS
                    </span>
                    <span className="text-emerald-400 font-medium">
                      {item.telemetry.delta}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
