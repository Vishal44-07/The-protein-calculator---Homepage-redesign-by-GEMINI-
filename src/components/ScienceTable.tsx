import React from 'react';
import { BookOpen, Check, ExternalLink } from 'lucide-react';

export const ScienceTable: React.FC = () => {
  const standards = [
    {
      body: 'RDA Minimum Baseline',
      intake: '0.8 g/kg (0.36 g/lb)',
      objective: 'Prevent clinical deficiency & negative nitrogen balance in sedentary adults.',
      pros: 'Sufficient to prevent muscle wasting in low-activity populations.',
      limitations: 'Inadequate for athletic hypertrophy, injury recovery, or sparing lean mass during caloric restriction.',
      status: 'Deficiency Prevention',
      badgeColor: 'text-amber-400 border-amber-500/20 bg-amber-500/10'
    },
    {
      body: 'ISSN Position Stand',
      intake: '1.4 – 2.0 g/kg (0.64 – 0.91 g/lb)',
      objective: 'Optimize training adaptation, power output, and muscle protein synthesis in active individuals.',
      pros: 'Extensively validated across resistance-trained and endurance cohorts worldwide.',
      limitations: 'May need slight upward adjustment in aggressive hypocaloric cutting phases.',
      status: 'Gold Standard Athletic',
      badgeColor: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10'
    },
    {
      body: 'Morton et al. Meta-Analysis',
      intake: '1.62 – 2.2 g/kg (0.73 – 1.00 g/lb)',
      objective: 'Systematic review of 49 randomized controlled trials with 1,863 participants.',
      pros: 'Identified the 1.62 g/kg plateau point with 2.2 g/kg capturing the upper 95% confidence interval.',
      limitations: 'Intakes above 2.2 g/kg yield diminishing lean mass accretion in neutral energy balance.',
      status: 'Peer-Reviewed Consensus',
      badgeColor: 'text-emerald-300 border-emerald-500/20 bg-emerald-500/10'
    },
    {
      body: 'Helms et al. Deficit Protocol',
      intake: '1.8 – 2.4 g/kg (or 2.3–3.1 g/kg LBM)',
      objective: 'Preserve skeletal muscle during intense caloric restriction and bodybuilding contest preparation.',
      pros: 'Protects metabolic rate and functional strength when endogenous energy substrates are scarce.',
      limitations: 'Requires disciplined whole-food meal planning to stay within tight calorie budgets.',
      status: 'Caloric Deficit Optimum',
      badgeColor: 'text-teal-300 border-teal-500/20 bg-teal-500/10'
    },
    {
      body: 'PROT-AGE Senior Study Group',
      intake: '1.2 – 1.5 g/kg (0.55 – 0.68 g/lb)',
      objective: 'Overcome age-related anabolic resistance and protect functional mobility against sarcopenia.',
      pros: 'Slows involuntary sarcopenic muscle loss and preserves bone mineral density.',
      limitations: 'Requires consistent meal spacing with higher leucine thresholds per feeding.',
      status: 'Longevity & Sarcopenia',
      badgeColor: 'text-sky-400 border-sky-500/20 bg-sky-500/10'
    }
  ];

  return (
    <section id="science" className="py-16 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Nutritional Research Synthesis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            The Science Behind Our Recommendations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Why does the conventional 0.8 g/kg advice differ from modern sports science? 
            Here is the transparent comparison of peer-reviewed clinical guidelines.
          </p>
        </div>

        {/* Glass Comparison Table */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/[0.08]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-black/40 text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                  <th className="py-4 px-6">Guideline / Study</th>
                  <th className="py-4 px-6">Daily Target</th>
                  <th className="py-4 px-6">Clinical Purpose</th>
                  <th className="py-4 px-6">Key Strength</th>
                  <th className="py-4 px-6">Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs">
                {standards.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                      {row.body}
                    </td>
                    <td className="py-4 px-6 font-mono font-semibold text-emerald-400 tabular-nums whitespace-nowrap">
                      {row.intake}
                    </td>
                    <td className="py-4 px-6 text-slate-300 max-w-xs">
                      {row.objective}
                    </td>
                    <td className="py-4 px-6 text-slate-400 max-w-xs">
                      {row.pros}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] font-medium ${row.badgeColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rigor Callout Box */}
        <div className="mt-8 p-6 rounded-2xl glass-panel-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Independent & Non-Sponsored</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                All algorithms operate on published research from the British Journal of Sports Medicine, ISSN, and the American College of Sports Medicine.
              </p>
            </div>
          </div>
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/28698222/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium whitespace-nowrap"
          >
            <span>Read BJSM Meta-Analysis</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
