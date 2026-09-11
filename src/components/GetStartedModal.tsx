import React, { useState } from 'react';
import { X, CheckCircle2, Send, Activity, Shield } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [series, setSeries] = useState('Formula 1 / F2 / F3');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTeamName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-neutral-800 bg-[#0e0f14] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top apex accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-md bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <Activity className="w-3.5 h-3.5 text-red-500" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                EARLY ACCESS APPLICATION
              </span>
            </div>

            <h3 className="text-2xl font-black font-sans uppercase tracking-tight text-white mb-2">
              Join the Zensivix Beta
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Connect your pit wall telemetry stream to our AI simulation engine. Currently evaluating racing teams for season 2026 deployment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                  Racing Team / Organization
                </label>
                <input
                  type="text"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Apex Racing Engineering"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                  Official Contact Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="strategist@team.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-1.5">
                  Championship Category
                </label>
                <select
                  value={series}
                  onChange={(e) => setSeries(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option>Formula 1 / F2 / F3</option>
                  <option>FIA World Endurance Championship (WEC)</option>
                  <option>IndyCar Series</option>
                  <option>IMSA SportsCar / GT3</option>
                  <option>Sim Racing Esports Pro</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Telemetry Access</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-400 pt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>NDA & Telemetry encryption standard applied</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black font-sans uppercase tracking-tight text-white mb-2">
              Application Received
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6 max-w-sm mx-auto">
              Thank you, <span className="text-white font-bold">{teamName || 'Strategist'}</span>. Our motorsport engineering group will review your telemetry specs and contact you at <span className="text-red-400 font-mono">{email}</span> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
