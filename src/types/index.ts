export type UnitSystem = 'imperial' | 'metric';
export type BiologicalSex = 'male' | 'female';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very_active' | 'athlete';

export type FitnessGoal = 'fat_loss' | 'muscle_gain' | 'maintenance' | 'endurance';

export interface CalculatorInputs {
  unitSystem: UnitSystem;
  sex: BiologicalSex;
  age: number;
  weightLbs: number;
  weightKg: number;
  heightFeet: number;
  heightInches: number;
  heightCm: number;
  activityLevel: ActivityLevel;
  goal: FitnessGoal;
  useBodyFat: boolean;
  bodyFatPercent: number;
}

export interface CalculationResult {
  dailyTargetGrams: number;
  minRangeGrams: number;
  maxRangeGrams: number;
  gramsPerKg: number;
  gramsPerLb: number;
  caloriesFromProtein: number;
  mealsBreakdown: {
    threeMeals: number;
    fourMeals: number;
    fiveMeals: number;
  };
  leucineGramsEstimate: number;
  leanBodyMassKg?: number;
  leanBodyMassLbs?: number;
  scientificStandard: string;
  rationale: string;
}

export interface ProteinFood {
  id: string;
  name: string;
  category: 'meat' | 'seafood' | 'dairy' | 'plant' | 'supplement';
  proteinPer100g: number;
  caloriesPer100g: number;
  servingSize: string;
  servingProtein: number;
  diaasScore: number; // Digestible Indispensable Amino Acid Score
  leucinePer100g: number;
  description: string;
  badge?: string;
}

export interface MealItem {
  id: string;
  foodId: string;
  customName?: string;
  grams: number;
  protein: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}
