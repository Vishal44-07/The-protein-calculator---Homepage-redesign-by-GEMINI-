import React, { useState } from 'react';
import { CalculationResult, CalculatorInputs } from '../types';
import { Check, Copy, Flame, Layers, Sparkles, Target, ArrowDown } from 'lucide-react';

interface ResultsDisplayProps {
  result: CalculationResult;
  inputs: CalculatorInputs;
  onApplyToPlanner?: () => void;
  onScrollToPlanner?: () => void;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  result,
  inputs,
  onApplyToPlanner,
  onScrollToPlanner,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedMealFreq, setSelectedMealFreq] = useState<'3' | '4' | '5'>('4');

  const copySummary = () => {
    const text = `The Protein Calculator Target:
Daily Intake: ${result.dailyTargetGrams}g (Range: ${result.minRangeGrams}g - ${result.maxRangeGrams}g)
Grams/Weight: ${inputs.unitSystem === 'metric' ? `${result.gramsPerKg} g/kg` : `${result.gramsPerLb} g/lb`}
Calories from Protein: ${result.caloriesFromProtein} kcal
Recommended Distribution (4 meals): ~${result.mealsBreakdown.fourMeals}g per meal
Standard: ${result.scientificStandard}
Calculated at theproteincalculator.com`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const currentMealTarget =
    selectedMealFreq === '3'
      ? result.mealsBreakdown.threeMeals
      : selectedMealFreq === '4'
      ? result.mealsBreakdown.fourMeals
      : result.mealsBreakdown.fiveMeals;

  return (
    <div className="glass-panel-elevated rounded-3xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300">
      {/* Ambient glass specular gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" 
      />

      <div>
        {/* Header row */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-400" />
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Optimal Target
            </span>
          </div>
          <button
            onClick={copySummary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            title="Copy target breakdown"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Central Luminous Readout */}
        <div className="my-7 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl sm:text-7xl font-extrabold tracking-tight font-mono tabular-nums text-white drop-shadow-[0_4px_20px_rgba(16,185,129,0.3)]">
                {result.dailyTargetGrams}
              </span>
              <span className="text-2xl sm:text-3xl font-medium text-emerald-400/90 tracking-tight">
                g / day
              </span>
            </div>
            
            {/* Range & Relative intake */}
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
              <span>Optimum Range:</span>
              <span className="font-mono font-medium text-slate-200 tabular-nums">
                {result.minRangeGrams}g – {result.maxRangeGrams}g
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-emerald-400/90 font-medium tabular-nums">
                {inputs.unitSystem === 'metric'
                  ? `${result.gramsPerKg} g/kg`
                  : `${result.gramsPerLb} g/lb`}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Metrics Strip */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="glass-panel-subtle rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <Flame className="w-3.5 h-3.5 text-emerald-400" />
              <span>Protein Energy</span>
            </div>
            <div className="text-lg font-bold font-mono text-white tabular-nums">
              {result.caloriesFromProtein} <span className="text-xs font-normal text-slate-400">kcal</span>
            </div>
          </div>

          <div className="glass-panel-subtle rounded-2xl p-3.5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Est. Daily Leucine</span>
            </div>
            <div className="text-lg font-bold font-mono text-white tabular-nums">
              ~{result.leucineGramsEstimate} <span className="text-xs font-normal text-slate-400">g</span>
            </div>
          </div>
        </div>

        {/* Meal Distribution Segmented Control */}
        <div className="glass-panel-subtle rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Per-Meal Distribution
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-black/30 rounded-lg border border-white/[0.06]">
              {(['3', '4', '5'] as const).map((count) => (
                <button
                  key={count}
                  onClick={() => setSelectedMealFreq(count)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    selectedMealFreq === count
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {count} Meals
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-1">
            <div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">
                ~{currentMealTarget} <span className="text-sm font-normal text-slate-400">g / meal</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {selectedMealFreq === '4'
                  ? 'Recommended: Exceeds the ~2.7g leucine trigger per feeding for 4 distinct protein synthesis cycles.'
                  : selectedMealFreq === '3'
                  ? 'Larger feedings, ideal for intermittent fasting or 3 solid meals.'
                  : 'Frequent smaller portions for active athletes with high total caloric demand.'}
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Basis Pill */}
        <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/15 mb-6">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            {result.scientificStandard}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {result.rationale}
          </p>
          {result.leanBodyMassKg && (
            <div className="mt-2 pt-2 border-t border-emerald-500/15 text-[11px] text-emerald-300 font-mono">
              Calculated on Lean Body Mass: {inputs.unitSystem === 'metric' ? `${result.leanBodyMassKg} kg LBM` : `${result.leanBodyMassLbs} lbs LBM`}
            </div>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2">
        <button
          onClick={() => {
            if (onApplyToPlanner) onApplyToPlanner();
            if (onScrollToPlanner) onScrollToPlanner();
          }}
          className="w-full py-3 px-4 rounded-xl glass-button-primary font-semibold text-sm text-white flex items-center justify-center gap-2 cursor-pointer transition-all"
        >
          <span>Build Meal Plan With {result.dailyTargetGrams}g Target</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
