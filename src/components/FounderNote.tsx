import React from 'react';
import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

export const FounderNote: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Apple Glass Card */}
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle ambient light */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Founding Philosophy & Redesign Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                "We built this to replace commercial bias with pure nutritional clarity."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  When I launched <span className="text-white font-semibold">The Protein Calculator</span>, 
                  most online calculators fell into two frustrating camps: either they gave you an arbitrary, 
                  one-line generic number, or they were disguised sales funnels pushing proprietary protein powders 
                  and meal replacement bars.
                </p>
                <p>
                  Nutrition isn't a one-size-fits-all formula. Your true biological requirement depends on your lean tissue mass, 
                  activity profile, and whether you are preserving muscle in a calorie deficit or fueling high-volume athletic performance.
                </p>
                <p className="text-slate-400">
                  This new redesign introduces an ultra-clean, Apple glass aesthetic—toned-down dark forest tones, tactile controls, 
                  and transparent peer-reviewed calculations—giving you immediate, classy, and dependable answers without 
                  popups, sponsor bias, or paywalls.
                </p>
              </div>

              {/* Founder Signoff */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-white">Vishal Pradhan</div>
                  <div className="text-xs text-emerald-400">Founder, The Protein Calculator</div>
                </div>
                <div className="text-right text-xs text-slate-400 font-mono">
                  theproteincalculator.com
                </div>
              </div>
            </div>

            {/* Right Core Pillars (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="glass-panel p-5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-white">100% Client-Side Privacy</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Your biometric inputs, body weight, and meal data are computed locally in your browser. We never monetize or sell personal health data.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Award className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-white">Zero Affiliate Traps</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We don’t force you toward high-margin supplement brands. Whole food bio-availability and nutritional reality always come first.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <HeartHandshake className="w-5 h-5" />
                  <h3 className="text-sm font-bold text-white">Open Science & Research</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  All math aligns strictly with published meta-analyses (Morton et al., Helms et al., ISSN) and open sports nutrition consensus.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
