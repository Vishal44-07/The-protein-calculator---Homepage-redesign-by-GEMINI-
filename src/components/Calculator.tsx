import React, { useState, useMemo } from 'react';
import { CalculatorInputs, CalculationResult } from '../types';
import { calculateProtein, kgToLbs, lbsToKg } from '../utils/calculator';
import { ResultsDisplay } from './ResultsDisplay';
import { Activity, Dumbbell, Heart, ShieldAlert, Sliders, TrendingUp, Zap } from 'lucide-react';

interface CalculatorProps {
  onTargetCalculated?: (targetGrams: number) => void;
  onScrollToPlanner?: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  onTargetCalculated,
  onScrollToPlanner,
}) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    unitSystem: 'imperial',
    sex: 'male',
    age: 28,
    weightLbs: 175,
    weightKg: 79.4,
    heightFeet: 5,
    heightInches: 10,
    heightCm: 178,
    activityLevel: 'moderate',
    goal: 'muscle_gain',
    useBodyFat: false,
    bodyFatPercent: 16,
  });

  const calculationResult: CalculationResult = useMemo(() => {
    const res = calculateProtein(inputs);
    if (onTargetCalculated) {
      onTargetCalculated(res.dailyTargetGrams);
    }
    return res;
  }, [inputs, onTargetCalculated]);

  const handleUnitChange = (system: 'imperial' | 'metric') => {
    if (system === inputs.unitSystem) return;

    if (system === 'metric') {
      const kg = lbsToKg(inputs.weightLbs);
      const totalInches = inputs.heightFeet * 12 + inputs.heightInches;
      const cm = Math.round(totalInches * 2.54);
      setInputs((prev) => ({
        ...prev,
        unitSystem: 'metric',
        weightKg: kg,
        heightCm: cm,
      }));
    } else {
      const lbs = Math.round(kgToLbs(inputs.weightKg));
      const totalInches = inputs.heightCm / 2.54;
      const feet = Math.floor(totalInches / 12);
      const inches = Math.round(totalInches % 12);
      setInputs((prev) => ({
        ...prev,
        unitSystem: 'imperial',
        weightLbs: lbs,
        heightFeet: feet,
        heightInches: inches,
      }));
    }
  };

  return (
    <section id="calculator" className="relative py-12 lg:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>ISSN & Meta-Analytic Clinical Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Daily Protein Intake Calculator
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Move past static one-size-fits-all formulas. Calculate your scientifically verified 
            target customized for your body composition, energy demands, and training status.
          </p>
        </div>

        {/* 2-Column Split: Calculator Deck & Apple Glass Readout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 lg:p-8 space-y-7">
            
            {/* Row 1: Unit & Biological Sex Switchers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Unit System Segmented Control */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Measurement System
                </label>
                <div className="flex p-1 bg-black/40 rounded-xl border border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => handleUnitChange('imperial')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      inputs.unitSystem === 'imperial'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Imperial (lbs, ft/in)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUnitChange('metric')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      inputs.unitSystem === 'metric'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Metric (kg, cm)
                  </button>
                </div>
              </div>

              {/* Sex Segmented Control */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Biological Sex
                </label>
                <div className="flex p-1 bg-black/40 rounded-xl border border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setInputs((prev) => ({ ...prev, sex: 'male' }))}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      inputs.sex === 'male'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputs((prev) => ({ ...prev, sex: 'female' }))}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      inputs.sex === 'female'
                        ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: Weight & Height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Weight */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium text-slate-300">
                    Body Weight
                  </label>
                  <span className="font-mono text-sm font-semibold text-emerald-400 tabular-nums">
                    {inputs.unitSystem === 'imperial'
                      ? `${inputs.weightLbs} lbs`
                      : `${inputs.weightKg} kg`}
                  </span>
                </div>
                {inputs.unitSystem === 'imperial' ? (
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={80}
                      max={350}
                      value={inputs.weightLbs}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          weightLbs: Number(e.target.value),
                          weightKg: lbsToKg(Number(e.target.value)),
                        }))
                      }
                      className="w-full"
                    />
                    <div className="relative">
                      <input
                        type="number"
                        min={80}
                        max={400}
                        value={inputs.weightLbs}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            weightLbs: Number(e.target.value) || 0,
                            weightKg: lbsToKg(Number(e.target.value) || 0),
                          }))
                        }
                        className="w-full px-3.5 py-2 rounded-xl glass-input text-sm font-mono tabular-nums"
                      />
                      <span className="absolute right-3.5 top-2 text-xs text-slate-400 font-mono">
                        lbs
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={35}
                      max={180}
                      value={inputs.weightKg}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          weightKg: Number(e.target.value),
                          weightLbs: Math.round(kgToLbs(Number(e.target.value))),
                        }))
                      }
                      className="w-full"
                    />
                    <div className="relative">
                      <input
                        type="number"
                        min={35}
                        max={200}
                        step="0.5"
                        value={inputs.weightKg}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            weightKg: Number(e.target.value) || 0,
                            weightLbs: Math.round(kgToLbs(Number(e.target.value) || 0)),
                          }))
                        }
                        className="w-full px-3.5 py-2 rounded-xl glass-input text-sm font-mono tabular-nums"
                      />
                      <span className="absolute right-3.5 top-2 text-xs text-slate-400 font-mono">
                        kg
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Height & Age */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-medium text-slate-300">
                    Height & Age
                  </label>
                  <span className="font-mono text-xs text-slate-400 tabular-nums">
                    {inputs.age} yrs
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {inputs.unitSystem === 'imperial' ? (
                    <>
                      <div className="relative">
                        <select
                          value={inputs.heightFeet}
                          onChange={(e) =>
                            setInputs((prev) => ({
                              ...prev,
                              heightFeet: Number(e.target.value),
                            }))
                          }
                          className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono appearance-none cursor-pointer"
                        >
                          {[4, 5, 6, 7].map((ft) => (
                            <option key={ft} value={ft} className="bg-[#0b1710] text-white">
                              {ft} ft
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <select
                          value={inputs.heightInches}
                          onChange={(e) =>
                            setInputs((prev) => ({
                              ...prev,
                              heightInches: Number(e.target.value),
                            }))
                          }
                          className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono appearance-none cursor-pointer"
                        >
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i} className="bg-[#0b1710] text-white">
                              {i} in
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <div className="relative col-span-2">
                      <input
                        type="number"
                        min={120}
                        max={230}
                        value={inputs.heightCm}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            heightCm: Number(e.target.value) || 0,
                          }))
                        }
                        className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono tabular-nums"
                      />
                      <span className="absolute right-3.5 top-2 text-xs text-slate-400 font-mono">
                        cm
                      </span>
                    </div>
                  )}
                </div>

                {/* Age Slider */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Age</span>
                    <span className="font-mono text-emerald-400 font-semibold">{inputs.age}</span>
                  </div>
                  <input
                    type="range"
                    min={16}
                    max={85}
                    value={inputs.age}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, age: Number(e.target.value) }))
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Primary Fitness Goal */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2.5">
                Primary Goal & Objective
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: 'fat_loss',
                    label: 'Fat Loss & Muscle Retention',
                    desc: 'Higher intake (1.8–2.4 g/kg) to protect lean tissue in a deficit',
                    icon: ShieldAlert,
                  },
                  {
                    id: 'muscle_gain',
                    label: 'Muscle Hypertrophy & Bulking',
                    desc: 'Optimal stimulus (1.6–2.2 g/kg) for MPS and strength gains',
                    icon: Dumbbell,
                  },
                  {
                    id: 'maintenance',
                    label: 'Active Health & Maintenance',
                    desc: 'Balanced range (1.2–1.6 g/kg) for vital tissue preservation',
                    icon: Heart,
                  },
                  {
                    id: 'endurance',
                    label: 'Endurance & High Volume',
                    desc: 'Sustained recovery (1.4–1.8 g/kg) for runners & cyclists',
                    icon: Zap,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = inputs.goal === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setInputs((prev) => ({ ...prev, goal: item.id as any }))
                      }
                      className={`text-left p-3.5 rounded-2xl transition-all border cursor-pointer ${
                        isSelected
                          ? 'glass-pill-active border-emerald-500/50'
                          : 'glass-panel-subtle hover:bg-white/[0.05] border-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                        <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal pl-6">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Activity Level */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Daily Activity & Training Frequency
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'sedentary', label: 'Sedentary', sub: 'Desk work' },
                  { id: 'light', label: 'Light', sub: '1-3 d/wk' },
                  { id: 'moderate', label: 'Moderate', sub: '3-5 d/wk' },
                  { id: 'very_active', label: 'Very Active', sub: '6-7 intense' },
                  { id: 'athlete', label: 'Athlete', sub: 'Heavy labor' },
                ].map((act) => (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() =>
                      setInputs((prev) => ({ ...prev, activityLevel: act.id as any }))
                    }
                    className={`py-2 px-2 text-center rounded-xl border transition-all cursor-pointer ${
                      inputs.activityLevel === act.id
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-sm'
                        : 'glass-panel-subtle border-white/[0.05] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{act.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{act.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Advanced Precision Toggle (Lean Body Mass) */}
            <div className="pt-2 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-300">
                    Katch-McArdle Precision (Lean Body Mass)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setInputs((prev) => ({ ...prev, useBodyFat: !prev.useBodyFat }))
                  }
                  className={`w-11 h-6 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
                    inputs.useBodyFat ? 'bg-emerald-600' : 'bg-slate-800'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      inputs.useBodyFat ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {inputs.useBodyFat && (
                <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300">Estimated Body Fat %</span>
                    <span className="font-mono text-sm font-semibold text-emerald-400">
                      {inputs.bodyFatPercent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={50}
                    value={inputs.bodyFatPercent}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        bodyFatPercent: Number(e.target.value),
                      }))
                    }
                    className="w-full"
                  />
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Uses Lean Body Mass (LBM) to isolate metabolically active muscle tissue. Recommended for athletes with low body fat or individuals with high BMI.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Luminous Apple Glass Readout (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <ResultsDisplay
              result={calculationResult}
              inputs={inputs}
              onApplyToPlanner={() => {
                if (onTargetCalculated) onTargetCalculated(calculationResult.dailyTargetGrams);
              }}
              onScrollToPlanner={onScrollToPlanner}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
