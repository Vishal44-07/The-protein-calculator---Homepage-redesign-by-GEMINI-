/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Calculator } from './components/Calculator';
import { FoodLibrary } from './components/FoodLibrary';
import { MealPlanner } from './components/MealPlanner';
import { ScienceTable } from './components/ScienceTable';
import { FounderNote } from './components/FounderNote';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowUpRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTargetGrams, setCurrentTargetGrams] = useState<number>(167);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050b07] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* Apple-style Fluid Ambient Glass Glow Orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Top-left deep forest aura */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-950/25 blur-[140px]" />
        
        {/* Center ambient specular radiance */}
        <div className="absolute top-[28%] -right-40 w-[650px] h-[650px] rounded-full bg-emerald-900/15 blur-[160px]" />
        
        {/* Lower body glow */}
        <div className="absolute top-[65%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#06301d]/20 blur-[180px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* 1. Apple Glass Top Navigation Bar */}
        <Navbar onScrollTo={handleScrollTo} />

        <main className="flex-1">
          
          {/* Hero Introductory Section */}
          <section className="pt-12 pb-6 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              
              {/* Quiet Kicker (Zero-Pill discipline compliant) */}
              <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
                <span>Next-Gen Nutritional Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Version 2.0 Redesign</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] [text-wrap:balance]">
                Optimal Protein Targets, Engineered With Precision.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance] max-w-2xl mx-auto">
                Discover your biologically ideal protein requirement. Calibrated against 
                peer-reviewed exercise metabolism research and delivered in a fluid 
                Apple-inspired glass interface.
              </p>

              {/* Action Jump */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => handleScrollTo('calculator')}
                  className="px-6 py-3 rounded-full glass-button-primary text-sm font-semibold text-white shadow-xl cursor-pointer"
                >
                  Start Intake Calculation
                </button>
                <button
                  onClick={() => handleScrollTo('science')}
                  className="px-6 py-3 rounded-full glass-pill text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Research Standards</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

            </div>

            {/* KPI Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mt-10 mb-4">
              <div className="glass-panel p-4 rounded-2xl text-center">
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  1.6 – 2.2
                </div>
                <div className="text-xs text-emerald-400/90 font-medium mt-1">g/kg Hypertrophy Optimum</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Morton et al. Meta-Analysis</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl text-center">
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  49+
                </div>
                <div className="text-xs text-emerald-400/90 font-medium mt-1">Controlled Clinical Trials</div>
                <div className="text-[11px] text-slate-400 mt-0.5">BJSM Systematic Synthesis</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl text-center">
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  100%
                </div>
                <div className="text-xs text-emerald-400/90 font-medium mt-1">Browser-Side Privacy</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Zero Biometric Storage</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl text-center">
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  0
                </div>
                <div className="text-xs text-emerald-400/90 font-medium mt-1">Sponsor Conflicts</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Unbiased Nutritional Math</div>
              </div>
            </div>
          </section>

          {/* 2. Flagship Interactive Calculator */}
          <Calculator
            onTargetCalculated={(target) => setCurrentTargetGrams(target)}
            onScrollToPlanner={() => handleScrollTo('meal-planner')}
          />

          {/* 3. Food Equivalent & DIAAS Bioavailability Library */}
          <FoodLibrary dailyTargetGrams={currentTargetGrams} />

          {/* 4. Daily Intake Simulator & Meal Planner */}
          <MealPlanner dailyTargetGrams={currentTargetGrams} />

          {/* 5. Clinical Research Standards Comparison */}
          <ScienceTable />

          {/* 6. Founder Vision Note */}
          <FounderNote />

          {/* 7. Evidence-Based FAQ Accordion */}
          <FaqSection />

          {/* 8. Validated Glass Contact Form */}
          <ContactSection />

        </main>

        {/* 9. Clean Legal & Reference Footer */}
        <Footer />

      </div>
    </div>
  );
}
