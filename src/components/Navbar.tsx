import React from 'react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#050b07]/80 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-8 h-18">
        {/* Zone 1: Single clean text element wordmark */}
        <a 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 p-[1px] shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center justify-center">
            <div className="w-full h-full rounded-[11px] bg-[#050b07] flex items-center justify-center">
              <span className="text-emerald-400 font-mono font-semibold text-sm">P</span>
            </div>
          </div>
          <span>The Protein Calculator</span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => onScrollTo('calculator')}
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Calculator
          </button>
          <button
            onClick={() => onScrollTo('food-library')}
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Food Library
          </button>
          <button
            onClick={() => onScrollTo('meal-planner')}
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Day Planner
          </button>
          <button
            onClick={() => onScrollTo('science')}
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Scientific Standards
          </button>
          <button
            onClick={() => onScrollTo('about-contact')}
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            About & Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onScrollTo('calculator')}
            className="px-5 py-2.5 text-xs font-semibold text-white tracking-wide rounded-full glass-button-primary cursor-pointer whitespace-nowrap shrink-0 transition-transform active:scale-95"
          >
            Calculate Intake
          </button>
        </div>
      </div>
    </header>
  );
};
