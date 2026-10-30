import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#030704]/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-white">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-emerald-400 font-mono font-bold text-xs">P</span>
              </div>
              <span>The Protein Calculator</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Evidence-informed daily dietary protein calculations and nutritional optimization tools. 
              Designed with an Apple-inspired dark forest glass aesthetic for serious athletes, lifters, and health-conscious adults.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Founded by Vishal Pradhan · theproteincalculator.com
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Intake Calculator
                </a>
              </li>
              <li>
                <a href="#food-library" className="hover:text-emerald-400 transition-colors">
                  Food & DIAAS Library
                </a>
              </li>
              <li>
                <a href="#meal-planner" className="hover:text-emerald-400 transition-colors">
                  Daily Intake Planner
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-emerald-400 transition-colors">
                  Scientific Standards
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-emerald-400 transition-colors">
                  Common Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Connect & Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about-contact" className="hover:text-emerald-400 transition-colors">
                  Direct Inquiries
                </a>
              </li>
              <li className="text-[11px] font-mono text-slate-300">
                contact@theproteincalculator.com
              </li>
              <li className="pt-2 text-[11px] text-slate-400 leading-normal">
                Responses typically delivered within 2–3 business days.
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-[11px] leading-relaxed max-w-2xl">
            Disclaimer: The calculations and recommendations provided on theproteincalculator.com are for educational and informational purposes only. They do not constitute individualized medical or dietetic advice. Consult a qualified medical practitioner before undertaking high-protein diets if you have diagnosed renal, hepatic, or metabolic health conditions.
          </p>
          <div className="whitespace-nowrap shrink-0 text-[11px]">
            &copy; {new Date().getFullYear()} The Protein Calculator. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
