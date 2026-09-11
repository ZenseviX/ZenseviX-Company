import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from 'recharts';
import { Activity, Clock, Zap, TrendingDown, Layers, Sliders, ShieldCheck, RefreshCw } from 'lucide-react';

interface TelemetryPoint {
  lap: number;
  aiStrategyLapTime: number;
  baselineLapTime: number;
  tireGrip: number;
}

const mockTelemetryData: TelemetryPoint[] = [
  { lap: 1, aiStrategyLapTime: 96.2, baselineLapTime: 95.8, tireGrip: 100 },
  { lap: 5, aiStrategyLapTime: 95.1, baselineLapTime: 95.4, tireGrip: 94 },
  { lap: 10, aiStrategyLapTime: 94.8, baselineLapTime: 95.7, tireGrip: 88 },
  { lap: 15, aiStrategyLapTime: 94.9, baselineLapTime: 96.6, tireGrip: 81 },
  { lap: 18, aiStrategyLapTime: 95.0, baselineLapTime: 118.5, tireGrip: 75 }, // Baseline pits lap 18
  { lap: 20, aiStrategyLapTime: 95.2, baselineLapTime: 94.6, tireGrip: 70 },
  { lap: 24, aiStrategyLapTime: 95.5, baselineLapTime: 95.0, tireGrip: 62 },
  { lap: 26, aiStrategyLapTime: 116.8, baselineLapTime: 95.6, tireGrip: 98 }, // AI pits lap 26
  { lap: 30, aiStrategyLapTime: 94.2, baselineLapTime: 96.1, tireGrip: 93 },
  { lap: 35, aiStrategyLapTime: 94.1, baselineLapTime: 96.8, tireGrip: 87 },
  { lap: 40, aiStrategyLapTime: 94.3, baselineLapTime: 97.4, tireGrip: 80 },
  { lap: 45, aiStrategyLapTime: 94.5, baselineLapTime: 98.2, tireGrip: 73 },
  { lap: 50, aiStrategyLapTime: 94.6, baselineLapTime: 99.1, tireGrip: 65 },
  { lap: 53, aiStrategyLapTime: 94.4, baselineLapTime: 99.8, tireGrip: 60 },
];

export const ProductPreview: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'A' | 'B' | 'C'>('A');

  // Plan presets for the simulator
  const plans = {
    A: {
      strategy: 'MEDIUM → HARD',
      badge: 'RECOMMENDED',
      predictedTime: '92:28.7',
      gain: '-5.5 sec',
      gainColor: 'text-emerald-400',
      confidence: 87,
      pitLap: 'LAP 26',
      stops: 1,
      desc: 'Optimal 1-stop strategy with extended medium stint to avoid dirty air, switching to hard compound for maximum degradation resilience.',
    },
    B: {
      strategy: 'SOFT → HARD',
      badge: 'AGGRESSIVE',
      predictedTime: '92:32.1',
      gain: '-2.1 sec',
      gainColor: 'text-emerald-400',
      confidence: 79,
      pitLap: 'LAP 17',
      stops: 1,
      desc: 'Aggressive opening stint to take track position into turn 1, earlier pit window with higher vulnerability to safety car periods.',
    },
    C: {
      strategy: 'SOFT → MED → SOFT',
      badge: '2-STOP ALTERNATIVE',
      predictedTime: '92:35.6',
      gain: '+1.4 sec',
      gainColor: 'text-red-400',
      confidence: 71,
      pitLap: 'LAPS 15 & 38',
      stops: 2,
      desc: 'High-pace sprint approach, requires 2 full pit lane deltas (~42s loss) only viable under neutralised safety car conditions.',
    },
  };

  const currentPlan = plans[selectedPlan];

  return (
    <section id="preview" className="relative py-24 sm:py-32 border-t border-white/5 bg-[#08080a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] pointer-events-none">
        <div className="w-full h-full bg-red-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono font-semibold tracking-widest text-neutral-300 uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            PRODUCT PREVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Race Strategy Simulator
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Real-time algorithmic simulation cockpit. Test tire degradation deltas, pit stop cross-overs, and predicted race times with sub-second accuracy.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div
          id="product-preview-dashboard"
          className="rounded-2xl border border-neutral-800 bg-[#0e0f14] shadow-2xl overflow-hidden backdrop-blur-md"
        >
          {/* Top Pit Wall Command Bar */}
          <div className="px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-black font-sans tracking-wide text-white uppercase">
                  Race Strategy Simulator
                </span>
                <span className="text-xs font-mono text-neutral-500">|</span>
                <span className="text-xs font-mono text-neutral-400">SESSION: SUNDAY GRAND PRIX (53 LAPS)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 mr-2 hidden sm:inline">SELECT STRATEGY:</span>
              {(['A', 'B', 'C'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlan(key)}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedPlan === key
                      ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                      : 'bg-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-700'
                  }`}
                >
                  Plan {key}
                </button>
              ))}
            </div>
          </div>

          {/* Core Metrics Grid - Exact required items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800 border-b border-neutral-800 bg-[#0b0c10]">
            {/* Metric 1: Recommended Strategy */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>Recommended Strategy</span>
                <Layers className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-white tracking-tight flex items-center gap-2">
                <span>{currentPlan.strategy}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs font-mono">
                <span className="inline-block px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 font-semibold text-[10px]">
                  {currentPlan.badge}
                </span>
                <span className="text-neutral-400">PIT: {currentPlan.pitLap}</span>
              </div>
            </div>

            {/* Metric 2: Predicted Race Time */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>Predicted Race Time</span>
                <Clock className="w-4 h-4 text-neutral-400" />
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-white tracking-tight">
                {currentPlan.predictedTime}
              </div>
              <div className="mt-2 text-xs font-mono text-neutral-400">
                53 LAPS @ AVG 1:34.2
              </div>
            </div>

            {/* Metric 3: Strategy Gain */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>Strategy Gain</span>
                <TrendingDown className="w-4 h-4 text-emerald-400" />
              </div>
              <div className={`text-xl sm:text-2xl font-mono font-black tracking-tight ${currentPlan.gainColor}`}>
                {currentPlan.gain}
              </div>
              <div className="mt-2 text-xs font-mono text-neutral-400">
                VS FIELD BASELINE (SOFT→MED)
              </div>
            </div>

            {/* Metric 4: AI Confidence */}
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                <span>AI Confidence</span>
                <Zap className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-white tracking-tight flex items-baseline gap-2">
                <span>{currentPlan.confidence}%</span>
                <span className="text-xs font-sans font-normal text-emerald-400">HIGH PROBABILITY</span>
              </div>
              <div className="mt-3 w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-600 to-red-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentPlan.confidence}%` }}
                />
              </div>
            </div>
          </div>

          {/* Strategy Details Brief */}
          <div className="px-6 py-3 bg-neutral-950/60 border-b border-neutral-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-neutral-300">{currentPlan.desc}</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500">
              <span>SIM VERSION: V2.8.4</span>
              <span>PIT LANE DELTA: 21.4s</span>
            </div>
          </div>

          {/* Telemetry Chart Section */}
          <div className="p-6 sm:p-8 bg-[#090a0e]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-base font-bold font-sans uppercase text-white tracking-wide flex items-center gap-2">
                  <Activity className="w-4 h-4 text-red-500" />
                  Racing Telemetry & Lap Degradation Pace
                </h4>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Seconds per lap across 53-lap race distance. Lower value indicates superior pace.
                </p>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 rounded-full bg-red-500" />
                  <span className="text-white font-medium">Zensivix Strategy ({currentPlan.strategy})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-1 rounded-full bg-neutral-500" />
                  <span className="text-neutral-400">Baseline Strategy</span>
                </div>
              </div>
            </div>

            {/* Recharts Telemetry Line Chart */}
            <div className="h-[280px] sm:h-[340px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockTelemetryData}
                  margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                >
                  <CartesianGrid stroke="#22242d" strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="lap"
                    stroke="#52525b"
                    fontSize={11}
                    fontFamily="JetBrains Mono"
                    tickFormatter={(val) => `L${val}`}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[92, 120]}
                    stroke="#52525b"
                    fontSize={11}
                    fontFamily="JetBrains Mono"
                    tickFormatter={(val) => `${val}s`}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#14151b',
                      borderColor: '#2e313d',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontFamily: 'JetBrains Mono',
                      color: '#ffffff',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                    }}
                    formatter={(value: any, name: any) => {
                      if (name === 'aiStrategyLapTime') return [`${value}s`, 'Zensivix Strategy'];
                      if (name === 'baselineLapTime') return [`${value}s`, 'Baseline Strategy'];
                      return [value, name];
                    }}
                    labelFormatter={(label) => `Lap ${label}`}
                  />
                  <ReferenceLine
                    x={26}
                    stroke="#ef4444"
                    strokeDasharray="4 4"
                    label={{
                      value: 'AI BOX LAP 26',
                      position: 'top',
                      fill: '#ef4444',
                      fontSize: 10,
                      fontFamily: 'JetBrains Mono',
                    }}
                  />
                  <ReferenceLine
                    x={18}
                    stroke="#71717a"
                    strokeDasharray="4 4"
                    label={{
                      value: 'BASELINE BOX LAP 18',
                      position: 'top',
                      fill: '#71717a',
                      fontSize: 10,
                      fontFamily: 'JetBrains Mono',
                    }}
                  />
                  {/* Baseline Lap Times */}
                  <Line
                    type="monotone"
                    dataKey="baselineLapTime"
                    stroke="#71717a"
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#71717a' }}
                    activeDot={{ r: 5, fill: '#ffffff' }}
                    name="baselineLapTime"
                  />
                  {/* AI Strategy Lap Times */}
                  <Line
                    type="monotone"
                    dataKey="aiStrategyLapTime"
                    stroke="#ef4444"
                    strokeWidth={2.5}
                    dot={{ r: 3.5, fill: '#ef4444' }}
                    activeDot={{ r: 6, fill: '#ffffff', stroke: '#ef4444', strokeWidth: 2 }}
                    name="aiStrategyLapTime"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                <span>CLEAN AIR DELTA: +0.420s/LAP</span>
                <span className="text-neutral-600">|</span>
                <span>TIRE LIFE CLIFF: LAP 31 (MEDIUM)</span>
              </div>
              <span className="text-[11px] text-neutral-500 italic">
                *Visual product preview demonstration. Live system connects via CAN-bus and WFS telemetry streams.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
