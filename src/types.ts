export interface TelemetryPoint {
  lap: number;
  delta: number;
  speed: number;
  tireWear: number;
  alternativeDelta: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  stat?: string;
  statLabel?: string;
}

export interface StrategyOption {
  id: string;
  name: string;
  stints: {
    compound: 'SOFT' | 'MEDIUM' | 'HARD';
    laps: string;
    color: string;
  }[];
  predictedTime: string;
  gain: string;
  gainValue: number; // negative is faster
  confidence: number;
  pitLap: number;
}
