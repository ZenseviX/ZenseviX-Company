import React, { useEffect, useState } from 'react';
import { Gauge, Zap, Disc3, Crosshair } from 'lucide-react';

export const CircuitVisual: React.FC = () => {
  const [pulsePos, setPulsePos] = useState({ x: 280, y: 150 });

  // Subtle telemetry pulse tracking along track nodes
  useEffect(() => {
    const waypoints = [
      { x: 160, y: 120 },
      { x: 260, y: 100 },
      { x: 420, y: 130 },
      { x: 500, y: 220 },
      { x: 440, y: 320 },
      { x: 300, y: 340 },
      { x: 190, y: 280 },
      { x: 130, y: 200 }
    ];

    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % waypoints.length;
      setPulsePos(waypoints[idx]);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[620px] aspect-[16/12] sm:aspect-[16/11] mx-auto flex items-center justify-center select-none">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-radial from-red-950/20 via-transparent to-transparent pointer-events-none blur-2xl" />

      {/* Grid telemetry matrix overlay */}
      <div 
        className="absolute inset-4 rounded-2xl border border-white/5 bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 backdrop-blur-sm overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        {/* Telemetry header strip */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-white font-medium tracking-wider">LIVE TELEMETRY FEED</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400">CIRCUIT MONZA [SIM V4.2]</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-neutral-400">SAMPLE RATE: 240Hz</span>
            <span className="text-red-400 font-semibold">DELTA -0.34s</span>
          </div>
        </div>

        {/* Abstract Futuristic Racing Circuit SVG */}
        <svg
          viewBox="0 0 600 420"
          className="w-full h-full p-6 sm:p-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Red circuit glow filter */}
            <filter id="red-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Linear gradient for circuit elevation */}
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="trackBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>

          {/* Sector grid demarcation lines */}
          <line x1="80" y1="180" x2="520" y2="180" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
          <line x1="80" y1="280" x2="520" y2="280" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
          <line x1="280" y1="60" x2="280" y2="380" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

          {/* Sector tags */}
          <text x="100" y="100" fill="#71717a" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.1em">SECTOR 1 [SPEED TRAP]</text>
          <text x="440" y="90" fill="#71717a" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.1em">SECTOR 2 [CHICANE]</text>
          <text x="290" y="385" fill="#71717a" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.1em">SECTOR 3 [MAIN STRAIGHT]</text>

          {/* Wide Track Asphalt Underlay */}
          <path
            d="M 140 180 
               C 140 100, 240 70, 360 80 
               C 440 85, 520 120, 520 200 
               C 520 280, 460 340, 380 340 
               C 280 340, 240 310, 210 270 
               C 190 240, 140 240, 140 180 Z"
            stroke="url(#trackBase)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing AI Apex Racing Line */}
          <path
            d="M 140 180 
               C 140 100, 240 70, 360 80 
               C 440 85, 520 120, 520 200 
               C 520 280, 460 340, 380 340 
               C 280 340, 240 310, 210 270 
               C 190 240, 140 240, 140 180 Z"
            stroke="url(#circuitGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 3"
            filter="url(#red-glow)"
          />

          {/* Apex markers (curbs) */}
          <circle cx="140" cy="180" r="4" fill="#ffffff" />
          <circle cx="360" cy="80" r="4" fill="#ef4444" />
          <circle cx="520" cy="200" r="4" fill="#ef4444" />
          <circle cx="380" cy="340" r="4" fill="#ffffff" />
          <circle cx="210" cy="270" r="4" fill="#ef4444" />

          {/* DRS Zone */}
          <path
            d="M 360 80 C 420 85, 480 110, 510 160"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.8"
          />
          <text x="440" y="115" fill="#22c55e" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">DRS DETECTION</text>

          {/* Finish Line Checkered Bar */}
          <line x1="330" y1="332" x2="330" y2="348" stroke="#ffffff" strokeWidth="4" strokeDasharray="2 2" />

          {/* Animated telemetry beacon tracking the car */}
          <g transform={`translate(${pulsePos.x}, ${pulsePos.y})`} className="transition-all duration-1000 ease-out">
            <circle cx="0" cy="0" r="12" fill="rgba(239, 68, 68, 0.25)" className="animate-ping" />
            <circle cx="0" cy="0" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="0" y1="-8" x2="0" y2="-20" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="8" y="-24" width="70" height="20" rx="3" fill="#141417" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
            <text x="14" y="-10" fill="#ffffff" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">CAR #01: 312kph</text>
          </g>
        </svg>

        {/* Footer telemetry ticker */}
        <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-white/5 pt-1.5">
          <span>TRACK TEMP: 41.2°C</span>
          <span>AIR: 27.5°C</span>
          <span>WIND: 12 KM/H NW</span>
          <span className="text-neutral-400">LAP: 18/53</span>
        </div>
      </div>

      {/* Floating Data Card 1: LAP TIME */}
      <div 
        id="hero-card-lap-time"
        className="absolute -top-3 left-2 sm:left-4 z-20 bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md hover:border-red-500/60 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-1">
          <Gauge className="w-3.5 h-3.5 text-red-500" />
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-semibold uppercase">LAP TIME</span>
        </div>
        <div className="text-lg sm:text-xl font-mono font-bold text-white tracking-tight flex items-baseline gap-1">
          1:34.52
          <span className="text-[11px] font-sans font-normal text-emerald-400">PURPLE</span>
        </div>
      </div>

      {/* Floating Data Card 2: TIRE */}
      <div 
        id="hero-card-tire"
        className="absolute top-1/4 -right-2 sm:-right-4 z-20 bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md hover:border-yellow-500/60 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-1">
          <Disc3 className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-semibold uppercase">TIRE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center font-bold text-[11px] text-yellow-400 font-mono">
            M
          </span>
          <span className="text-base sm:text-lg font-mono font-bold text-white">MEDIUM</span>
        </div>
        <div className="text-[10px] font-mono text-neutral-400 mt-1">LAPS: 14 / LIFE 68%</div>
      </div>

      {/* Floating Data Card 3: PIT WINDOW */}
      <div 
        id="hero-card-pit-window"
        className="absolute -bottom-3 left-3 sm:left-8 z-20 bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md hover:border-red-500/60 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-1">
          <Crosshair className="w-3.5 h-3.5 text-red-500" />
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-semibold uppercase">PIT WINDOW</span>
        </div>
        <div className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
          LAP 25–27
        </div>
        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">TARGET: HARD COMPOUND</div>
      </div>

      {/* Floating Data Card 4: AI CONFIDENCE */}
      <div 
        id="hero-card-confidence"
        className="absolute -bottom-2 right-2 sm:right-6 z-20 bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md hover:border-red-500/60 transition-all duration-300"
      >
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-3.5 h-3.5 text-red-500" />
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 font-semibold uppercase">AI CONFIDENCE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-mono font-bold text-white tracking-tight">87%</span>
          <div className="w-12 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 w-[87%]" />
          </div>
        </div>
        <div className="text-[10px] font-mono text-emerald-400 mt-0.5">OPTIMAL SCENARIO</div>
      </div>
    </div>
  );
};
