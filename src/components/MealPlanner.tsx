import React, { useState } from 'react';
import { SAMPLE_MEAL_PRESETS, MealPreset } from '../data/proteinFoods';
import { Calendar, Check, Plus, RotateCcw, Sparkles, Trash2 } from 'lucide-react';

interface MealPlannerProps {
  dailyTargetGrams: number;
}

interface UserMeal {
  id: string;
  name: string;
  foodDescription: string;
  proteinGrams: number;
}

export const MealPlanner: React.FC<MealPlannerProps> = ({ dailyTargetGrams }) => {
  const [activePreset, setActivePreset] = useState<string>(SAMPLE_MEAL_PRESETS[0].id);
  const [meals, setMeals] = useState<UserMeal[]>(
    SAMPLE_MEAL_PRESETS[0].meals.map((m, idx) => ({
      id: `meal-${idx}`,
      name: m.mealName,
      foodDescription: `${m.food} (${m.portion})`,
      proteinGrams: m.proteinGrams,
    }))
  );

  const [newMealName, setNewMealName] = useState('');
  const [newMealFood, setNewMealFood] = useState('');
  const [newMealProtein, setNewMealProtein] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const totalPlannedProtein = meals.reduce((acc, m) => acc + m.proteinGrams, 0);
  const percentComplete = Math.min(150, Math.round((totalPlannedProtein / dailyTargetGrams) * 100));
  const diffGrams = dailyTargetGrams - totalPlannedProtein;

  const handleApplyPreset = (preset: MealPreset) => {
    setActivePreset(preset.id);
    setMeals(
      preset.meals.map((m, idx) => ({
        id: `meal-${idx}-${Date.now()}`,
        name: m.mealName,
        foodDescription: `${m.food} (${m.portion})`,
        proteinGrams: m.proteinGrams,
      }))
    );
  };

  const handleAddMeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMealName || !newMealProtein) return;
    const pGrams = Number(newMealProtein);
    if (isNaN(pGrams) || pGrams <= 0) return;

    setMeals((prev) => [
      ...prev,
      {
        id: `custom-${Date.now()}`,
        name: newMealName,
        foodDescription: newMealFood || 'Custom whole foods',
        proteinGrams: pGrams,
      },
    ]);

    setNewMealName('');
    setNewMealFood('');
    setNewMealProtein('');
    setShowAddForm(false);
  };

  const handleDeleteMeal = (id: string) => {
    setMeals((prev) => prev.filter((m) => m.id !== id));
  };

  const handleReset = () => {
    handleApplyPreset(SAMPLE_MEAL_PRESETS[0]);
  };

  return (
    <section id="meal-planner" className="py-16 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Daily Intake Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Simulate Your Daily Protein Strategy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Distribute your intake across the day. Review real-world dietary templates or build your custom 
            timing schedule to sustain positive nitrogen balance.
          </p>
        </div>

        {/* Preset Switcher Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="text-xs text-slate-400 mr-1">Evidence Templates:</span>
          {SAMPLE_MEAL_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleApplyPreset(preset)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                activePreset === preset.id
                  ? 'glass-pill-active border-emerald-500/40 text-emerald-300'
                  : 'glass-panel-subtle border-white/[0.08] text-slate-300 hover:text-white'
              }`}
            >
              {preset.name}
            </button>
          ))}
          <button
            onClick={handleReset}
            className="p-2 rounded-xl glass-panel-subtle text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Reset to default template"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Split: Progress Ring & Meals Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Glass Gauge Card (4 cols) */}
          <div className="lg:col-span-4 glass-panel-elevated rounded-3xl p-6 lg:p-7 text-center sticky top-24">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
              Daily Target Completion
            </span>

            {/* Radial / Glass Progress Visualization */}
            <div className="my-6 relative flex flex-col items-center justify-center">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="78"
                  className="stroke-white/[0.08]"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="78"
                  className="stroke-emerald-400 transition-all duration-700 ease-out"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 78}
                  strokeDashoffset={2 * Math.PI * 78 * (1 - Math.min(1, totalPlannedProtein / dailyTargetGrams))}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold font-mono text-white tabular-nums drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]">
                  {totalPlannedProtein}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  of {dailyTargetGrams}g target
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-400 mt-1">
                  {percentComplete}%
                </span>
              </div>
            </div>

            {/* Target Status Evaluation */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.08] mb-4 text-xs text-left">
              {diffGrams > 0 ? (
                <div className="text-amber-300 font-medium">
                  {diffGrams}g remaining to hit optimal daily intake.
                </div>
              ) : diffGrams === 0 ? (
                <div className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Exact target reached!
                </div>
              ) : (
                <div className="text-emerald-300 font-medium">
                  Target exceeded by {Math.abs(diffGrams)}g (Sufficient for surplus).
                </div>
              )}
              <div className="text-[11px] text-slate-400 mt-1">
                Avg per meal: ~{meals.length > 0 ? Math.round(totalPlannedProtein / meals.length) : 0}g across {meals.length} meals.
              </div>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="w-full py-2.5 px-4 rounded-xl glass-button-primary text-xs font-semibold text-white flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? 'Close Add Form' : 'Add Custom Meal'}</span>
            </button>
          </div>

          {/* Right Column: Meal Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {showAddForm && (
              <form onSubmit={handleAddMeal} className="glass-panel p-5 rounded-2xl mb-6 space-y-3 border border-emerald-500/30">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Log Custom Meal or Snack</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Meal name (e.g. Lunch)"
                    value={newMealName}
                    onChange={(e) => setNewMealName(e.target.value)}
                    required
                    className="px-3 py-2 rounded-xl glass-input text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Food description (e.g. 200g Greek yogurt)"
                    value={newMealFood}
                    onChange={(e) => setNewMealFood(e.target.value)}
                    className="px-3 py-2 rounded-xl glass-input text-xs"
                  />
                  <input
                    type="number"
                    placeholder="Protein (grams)"
                    value={newMealProtein}
                    onChange={(e) => setNewMealProtein(e.target.value)}
                    required
                    min={1}
                    max={200}
                    className="px-3 py-2 rounded-xl glass-input text-xs font-mono"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 rounded-lg glass-pill text-xs text-slate-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 cursor-pointer"
                  >
                    Add Meal
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {meals.map((meal, idx) => (
                <div
                  key={meal.id}
                  className="glass-panel p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 transition-all hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {meal.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {meal.foodDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <span className="font-mono font-bold text-base text-white tabular-nums">
                        {meal.proteinGrams}g
                      </span>
                      <div className="text-[10px] text-slate-400">
                        {meal.proteinGrams >= 25 ? 'MPS Trigger Met' : 'Sub-trigger'}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteMeal(meal.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors p-1.5 rounded-lg cursor-pointer"
                      title="Remove meal"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
