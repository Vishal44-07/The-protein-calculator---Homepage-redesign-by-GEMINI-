export interface FAQItem {
  question: string;
  answer: string;
  category: 'safety' | 'timing' | 'sources' | 'targets';
  citation?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'targets',
    question: 'Why does this calculator recommend more than the 0.8 g/kg RDA standard?',
    answer: 'The Recommended Dietary Allowance (RDA) of 0.8 grams per kilogram was established by health authorities as the minimum required intake to prevent negative nitrogen balance and clinical deficiency in sedentary populations. It was never intended as an optimal intake for active individuals, athletic recovery, or retaining lean mass during fat loss. Leading sports nutrition bodies (including the ISSN, ACSM, and British Journal of Sports Medicine meta-analyses) consistently demonstrate that 1.6 to 2.2 g/kg is optimal for muscle protein synthesis and lean body composition.',
    citation: 'Morton et al., British Journal of Sports Medicine (2018)'
  },
  {
    category: 'safety',
    question: 'Can eating a high-protein diet cause kidney or liver damage?',
    answer: 'In healthy individuals with normal renal function, systematic reviews and randomized controlled trials have repeatedly demonstrated that high-protein diets (up to 3.3 g/kg per day) do not cause renal impairment, kidney stones, or decline in glomerular filtration rate (GFR). The kidneys adapt naturally to clear urea byproducts. However, individuals with pre-existing chronic kidney disease (CKD) or diagnosed renal compromise must strictly limit protein under medical supervision.',
    citation: 'Antonio et al., Journal of Nutrition and Metabolism (2016); Devries et al., Journal of Nutrition (2018)'
  },
  {
    category: 'timing',
    question: 'Can the human body only absorb 30 grams of protein in a single sitting?',
    answer: 'This is one of fitness culture\'s most persistent misunderstandings. The body will digest and absorb virtually 100% of the amino acids you consume, no matter the meal size; transit time through the gastrointestinal tract simply slows down. What does plateau around 30 to 45 grams per meal is the acute trigger for Muscle Protein Synthesis (MPS), driven by leucine saturation. Consuming extra protein beyond that threshold is utilized for gut tissue maintenance, systemic protein turnover, and energy via oxidation, rather than being "wasted".',
    citation: 'Schoenfeld & Aragon, Journal of the International Society of Sports Nutrition (2018)'
  },
  {
    category: 'sources',
    question: 'Do plant-based athletes need to consume more total protein than omnivores?',
    answer: 'Plant proteins often have slightly lower concentrations of leucine and essential amino acids (EAAs) and generally lower digestibility (lower DIAAS scores) due to fibrous plant cellular matrices. Sports nutrition researchers recommend that vegan and plant-forward lifters target the higher end of the recommended intake spectrum (~1.8–2.2 g/kg) and consume diverse protein combinations (e.g., legumes + grains) or isolated plant proteins (such as soy, pea, or rice isolate) to easily trigger the muscle-building leucine threshold.',
    citation: 'van Vliet et al., Journal of Nutrition (2015); Berrazaga et al., Nutrients (2019)'
  },
  {
    category: 'targets',
    question: 'Should I calculate my protein using Total Body Weight or Lean Body Mass?',
    answer: 'For individuals in average body fat ranges (10–25% for men, 18–32% for women), total bodyweight multipliers work exceptionally well and are standard practice. However, if you are carrying significant excess adiposity (body fat >28% for men, >35% for women), total weight multipliers can artificially inflate protein targets because adipose tissue is metabolically inert. In those cases, using the Lean Body Mass (LBM) toggle yields a much more accurate and comfortable daily target.',
    citation: 'Helms et al., Journal of the International Society of Sports Nutrition (2014)'
  },
  {
    category: 'timing',
    question: 'Does the "anabolic window" after a workout really exist?',
    answer: 'The traditional belief that you must consume protein within 30 minutes of a workout is an oversimplification. While muscle tissue remains sensitized to amino acid uptake for up to 24–48 hours post-exercise, total daily protein intake remains by far the primary determinant of muscle growth and recovery. Distributing your intake evenly across 3 to 5 meals spaced 3 to 4 hours apart provides optimal, sustained MPS throughout the day.',
    citation: 'Aragon & Schoenfeld, Journal of the International Society of Sports Nutrition (2013)'
  }
];
