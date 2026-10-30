import React, { useState } from 'react';
import { PROTEIN_FOODS } from '../data/proteinFoods';
import { ProteinFood } from '../types';
import { CheckCircle2, ChevronRight, Info, Search, Utensils } from 'lucide-react';

interface FoodLibraryProps {
  dailyTargetGrams: number;
}

export const FoodLibrary: React.FC<FoodLibraryProps> = ({ dailyTargetGrams }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<ProteinFood>(PROTEIN_FOODS[0]);
  const [customServingGrams, setCustomServingGrams] = useState<number>(150);

  const filteredFoods = PROTEIN_FOODS.filter((food) => {
    const matchesCategory = activeCategory === 'all' || food.category === activeCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const gramsToHitTarget = Math.round((dailyTargetGrams / selectedFood.proteinPer100g) * 100);
  const currentServingProtein = Number(((customServingGrams / 100) * selectedFood.proteinPer100g).toFixed(1));
  const currentServingCalories = Math.round((customServingGrams / 100) * selectedFood.caloriesPer100g);
  const currentServingLeucine = Number(((customServingGrams / 100) * selectedFood.leucinePer100g).toFixed(1));

  return (
    <section id="food-library" className="py-16 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>Bioavailability & Food Database</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Translate Target Grams Into Real Food
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Compare complete amino acid matrices, DIAAS digestibility scores, and exact portion sizes 
              to hit your {dailyTargetGrams}g target without nutritional guesswork.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search food or protein source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs"
            />
          </div>
        </div>

        {/* Category Tabs (Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/[0.08] mb-8 overflow-x-auto">
          {[
            { id: 'all', label: 'All Sources' },
            { id: 'meat', label: 'Poultry & Beef' },
            { id: 'seafood', label: 'Seafood & Fish' },
            { id: 'dairy', label: 'Dairy & Eggs' },
            { id: 'plant', label: 'Plant & Legumes' },
            { id: 'supplement', label: 'Supplements' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid: Food Catalog & Deep Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Scrollable Glass Food Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[640px] overflow-y-auto pr-1">
            {filteredFoods.map((food) => {
              const isSelected = selectedFood.id === food.id;
              return (
                <div
                  key={food.id}
                  onClick={() => {
                    setSelectedFood(food);
                    setCustomServingGrams(150);
                  }}
                  className={`p-4 rounded-2xl glass-panel transition-all text-left cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'border-emerald-500/50 bg-[#102217]/80 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                      : 'hover:border-white/20 hover:bg-[#0b1710]/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {food.name}
                      </h3>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {food.servingSize}
                      </div>
                    </div>
                    {food.badge && (
                      <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        {food.badge}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/[0.06] text-xs">
                    <div>
                      <span className="text-slate-400 text-[11px]">Per 100g:</span>
                      <div className="font-mono font-semibold text-white tabular-nums">
                        {food.proteinPer100g}g <span className="text-[10px] font-normal text-slate-400">protein</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px]">DIAAS Score:</span>
                      <div className="font-mono font-semibold text-emerald-400 tabular-nums">
                        {food.diaasScore.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate pr-2">{food.description}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-emerald-400' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Interactive Serving Inspector (5 cols) */}
          <div className="lg:col-span-5 glass-panel-elevated rounded-3xl p-6 lg:p-7 sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                  Interactive Portion Inspector
                </span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  {selectedFood.name}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                DIAAS {selectedFood.diaasScore.toFixed(2)}
              </div>
            </div>

            {/* Slider to adjust serving size */}
            <div className="my-5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">Serving Size Portion:</span>
                <span className="font-mono font-bold text-emerald-400 text-sm tabular-nums">
                  {customServingGrams} grams
                </span>
              </div>
              <input
                type="range"
                min={25}
                max={500}
                step={5}
                value={customServingGrams}
                onChange={(e) => setCustomServingGrams(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>25g</span>
                <span>150g</span>
                <span>300g</span>
                <span>500g</span>
              </div>
            </div>

            {/* Macro Readout for this portion */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <div className="p-3 rounded-2xl glass-panel-subtle text-center">
                <div className="text-[10px] uppercase text-slate-400">Protein</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5 tabular-nums">
                  {currentServingProtein}g
                </div>
              </div>
              <div className="p-3 rounded-2xl glass-panel-subtle text-center">
                <div className="text-[10px] uppercase text-slate-400">Energy</div>
                <div className="text-xl font-bold font-mono text-white mt-0.5 tabular-nums">
                  {currentServingCalories} <span className="text-[10px] text-slate-400 font-normal">kcal</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl glass-panel-subtle text-center">
                <div className="text-[10px] uppercase text-slate-400">Leucine</div>
                <div className="text-xl font-bold font-mono text-emerald-300 mt-0.5 tabular-nums">
                  {currentServingLeucine}g
                </div>
              </div>
            </div>

            {/* Leucine Threshold Evaluation */}
            <div className="p-3.5 rounded-2xl bg-black/30 border border-white/[0.08] mb-5">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className={`w-4 h-4 ${currentServingLeucine >= 2.7 ? 'text-emerald-400' : 'text-amber-400'}`} />
                <span className="text-xs font-semibold text-white">
                  {currentServingLeucine >= 2.7
                    ? 'Exceeds MPS Leucine Trigger (≥2.7g)'
                    : `Below Leucine Trigger (${currentServingLeucine}g / 2.7g)`}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                {currentServingLeucine >= 2.7
                  ? 'This single portion supplies sufficient L-leucine to initiate maximal muscle protein synthesis via mTORC1 pathway activation.'
                  : 'To maximally stimulate muscle protein synthesis with this food alone, consider increasing portion to ~' + Math.ceil((2.7 / selectedFood.leucinePer100g) * 100) + 'g.'}
              </p>
            </div>

            {/* Daily Target Equivalent Callout */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>Target Equivalence</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                To fulfill your entire daily target of <span className="font-mono text-emerald-300 font-bold">{dailyTargetGrams}g protein</span> solely from {selectedFood.name}, you would consume approximately <span className="font-mono text-emerald-300 font-bold">{gramsToHitTarget}g</span>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
