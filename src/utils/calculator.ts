import { CalculatorInputs, CalculationResult } from '../types';

export function lbsToKg(lbs: number): number {
  return Number((lbs * 0.45359237).toFixed(1));
}

export function kgToLbs(kg: number): number {
  return Number((kg * 2.20462).toFixed(1));
}

export function feetInchesToCm(feet: number, inches: number): number {
  const totalInches = feet * 12 + inches;
  return Number((totalInches * 2.54).toFixed(1));
}

export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}

export function calculateProtein(inputs: CalculatorInputs): CalculationResult {
  const weightKg = inputs.unitSystem === 'metric' ? inputs.weightKg : lbsToKg(inputs.weightLbs);
  const weightLbs = inputs.unitSystem === 'metric' ? kgToLbs(inputs.weightKg) : inputs.weightLbs;

  let baseMultiplierMin = 1.2;
  let baseMultiplierTarget = 1.6;
  let baseMultiplierMax = 2.0;
  let standard = 'ISSN Consensus (International Society of Sports Nutrition)';
  let rationale = 'Supports athletic recovery and preserves lean muscle tissue.';

  // Goal-based baseline multipliers (grams per kg total bodyweight)
  switch (inputs.goal) {
    case 'fat_loss':
      baseMultiplierMin = 1.8;
      baseMultiplierTarget = 2.1;
      baseMultiplierMax = 2.4;
      standard = 'Helms et al. & ISSN Fat Loss Protocol';
      rationale = 'Higher protein preserves lean skeletal mass during an energy deficit while maximizing dietary thermogenesis and satiety.';
      break;

    case 'muscle_gain':
      baseMultiplierMin = 1.6;
      baseMultiplierTarget = 1.9;
      baseMultiplierMax = 2.2;
      standard = 'Morton et al. 2018 Systematic Meta-Analysis (BJSM)';
      rationale = 'Saturates muscle protein synthesis (MPS). Research confirms gains plateau beyond ~1.62 g/kg, with 2.2 g/kg capturing the upper 95% confidence interval.';
      break;

    case 'endurance':
      baseMultiplierMin = 1.4;
      baseMultiplierTarget = 1.6;
      baseMultiplierMax = 1.8;
      standard = 'American College of Sports Medicine (ACSM)';
      rationale = 'Counters amino acid oxidation during prolonged aerobic training and repairs micro-trauma in slow-twitch fibers.';
      break;

    case 'maintenance':
    default:
      baseMultiplierMin = 1.2;
      baseMultiplierTarget = 1.4;
      baseMultiplierMax = 1.6;
      standard = 'Dietary Reference Guidelines & Active Longevity';
      rationale = 'Exceeds the 0.8 g/kg sedentary RDA baseline to maintain positive nitrogen balance and functional tissue integrity in active adults.';
      break;
  }

  // Activity level fine-tuning
  if (inputs.activityLevel === 'very_active') {
    baseMultiplierTarget += 0.1;
    baseMultiplierMax += 0.1;
  } else if (inputs.activityLevel === 'athlete') {
    baseMultiplierTarget += 0.2;
    baseMultiplierMax += 0.2;
  } else if (inputs.activityLevel === 'sedentary') {
    baseMultiplierTarget = Math.max(1.0, baseMultiplierTarget - 0.2);
    baseMultiplierMin = Math.max(0.8, baseMultiplierMin - 0.2);
  }

  // Age factor: Anabolic resistance in adults 60+ requires slightly elevated threshold
  if (inputs.age >= 60) {
    baseMultiplierMin = Math.max(baseMultiplierMin, 1.2);
    baseMultiplierTarget = Math.max(baseMultiplierTarget, 1.5);
    baseMultiplierMax = Math.max(baseMultiplierMax, 1.8);
    rationale += ' Adjusted upwards for age-related anabolic resistance (PROT-AGE consensus recommendation).';
  }

  // If using Lean Body Mass (Katch-McArdle precision)
  let leanBodyMassKg: number | undefined;
  let leanBodyMassLbs: number | undefined;
  let targetGrams: number;
  let minGrams: number;
  let maxGrams: number;

  if (inputs.useBodyFat && inputs.bodyFatPercent > 0 && inputs.bodyFatPercent < 70) {
    const lbmFactor = 1 - (inputs.bodyFatPercent / 100);
    leanBodyMassKg = Number((weightKg * lbmFactor).toFixed(1));
    leanBodyMassLbs = Number((weightLbs * lbmFactor).toFixed(1));

    // LBM multipliers are higher (typically 2.3 to 3.1 g/kg LBM)
    let lbmMultiplierMin = 2.2;
    let lbmMultiplierTarget = 2.6;
    let lbmMultiplierMax = 3.0;

    if (inputs.goal === 'fat_loss') {
      lbmMultiplierMin = 2.4;
      lbmMultiplierTarget = 2.8;
      lbmMultiplierMax = 3.1;
      standard = 'Helms et al. 2014 Lean Body Mass Precision Guideline';
    } else if (inputs.goal === 'muscle_gain') {
      lbmMultiplierMin = 2.2;
      lbmMultiplierTarget = 2.5;
      lbmMultiplierMax = 2.8;
    } else {
      lbmMultiplierMin = 1.8;
      lbmMultiplierTarget = 2.1;
      lbmMultiplierMax = 2.4;
    }

    targetGrams = Math.round(leanBodyMassKg * lbmMultiplierTarget);
    minGrams = Math.round(leanBodyMassKg * lbmMultiplierMin);
    maxGrams = Math.round(leanBodyMassKg * lbmMultiplierMax);
  } else {
    targetGrams = Math.round(weightKg * baseMultiplierTarget);
    minGrams = Math.round(weightKg * baseMultiplierMin);
    maxGrams = Math.round(weightKg * baseMultiplierMax);
  }

  const gramsPerKg = Number((targetGrams / weightKg).toFixed(2));
  const gramsPerLb = Number((targetGrams / weightLbs).toFixed(2));
  const caloriesFromProtein = targetGrams * 4;

  return {
    dailyTargetGrams: targetGrams,
    minRangeGrams: minGrams,
    maxRangeGrams: maxGrams,
    gramsPerKg,
    gramsPerLb,
    caloriesFromProtein,
    mealsBreakdown: {
      threeMeals: Math.round(targetGrams / 3),
      fourMeals: Math.round(targetGrams / 4),
      fiveMeals: Math.round(targetGrams / 5),
    },
    leucineGramsEstimate: Number(((targetGrams * 0.08)).toFixed(1)), // approx 8% average leucine across balanced whole proteins
    leanBodyMassKg,
    leanBodyMassLbs,
    scientificStandard: standard,
    rationale,
  };
}
