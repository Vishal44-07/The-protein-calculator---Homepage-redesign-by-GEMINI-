import { ProteinFood } from '../types';

export const PROTEIN_FOODS: ProteinFood[] = [
  {
    id: 'chicken_breast',
    name: 'Skinless Chicken Breast',
    category: 'meat',
    proteinPer100g: 31.0,
    caloriesPer100g: 165,
    servingSize: '150g fillet (cooked)',
    servingProtein: 46.5,
    diaasScore: 1.15,
    leucinePer100g: 2.7,
    description: 'Gold standard lean animal protein with virtually zero carbohydrate and minimal fat.',
    badge: 'High Lean Purity'
  },
  {
    id: 'wild_salmon',
    name: 'Wild Atlantic Salmon',
    category: 'seafood',
    proteinPer100g: 25.4,
    caloriesPer100g: 206,
    servingSize: '170g fillet (cooked)',
    servingProtein: 43.2,
    diaasScore: 1.18,
    leucinePer100g: 2.1,
    description: 'Complete amino acid spectrum coupled with cardioprotective EPA & DHA Omega-3 fatty acids.',
    badge: 'Omega-3 Rich'
  },
  {
    id: 'whey_isolate',
    name: 'Whey Protein Isolate 90%',
    category: 'supplement',
    proteinPer100g: 88.0,
    caloriesPer100g: 370,
    servingSize: '30g scoop',
    servingProtein: 26.4,
    diaasScore: 1.33,
    leucinePer100g: 9.8,
    description: 'Rapidly absorbed milk fraction with highest natural leucine concentration for acute MPS stimulation.',
    badge: 'Peak Leucine'
  },
  {
    id: 'greek_yogurt',
    name: 'Plain Greek Yogurt (0% Fat)',
    category: 'dairy',
    proteinPer100g: 10.3,
    caloriesPer100g: 59,
    servingSize: '200g cup',
    servingProtein: 20.6,
    diaasScore: 1.15,
    leucinePer100g: 1.1,
    description: 'Slow-digesting casein-rich dairy with active probiotic cultures and calcium.',
    badge: 'Sustained Release'
  },
  {
    id: 'whole_eggs',
    name: 'Pasture-Raised Whole Eggs',
    category: 'dairy',
    proteinPer100g: 13.0,
    caloriesPer100g: 143,
    servingSize: '3 large eggs (150g)',
    servingProtein: 18.9,
    diaasScore: 1.18,
    leucinePer100g: 1.1,
    description: 'The biological standard of nutrient density; egg yolk choline and phospholipids amplify anabolic signaling.',
    badge: 'High Bioavailability'
  },
  {
    id: 'egg_whites',
    name: 'Liquid Egg Whites',
    category: 'dairy',
    proteinPer100g: 11.0,
    caloriesPer100g: 52,
    servingSize: '200g serving',
    servingProtein: 22.0,
    diaasScore: 1.12,
    leucinePer100g: 0.9,
    description: 'Pure ovalbumin protein without cholesterol or fats, ideal for strict caloric cuts.',
    badge: 'Ultra Pure'
  },
  {
    id: 'extra_firm_tofu',
    name: 'Extra Firm Organic Tofu',
    category: 'plant',
    proteinPer100g: 17.3,
    caloriesPer100g: 135,
    servingSize: '150g block',
    servingProtein: 26.0,
    diaasScore: 0.98,
    leucinePer100g: 1.4,
    description: 'Complete plant protein made from coagulated whole non-GMO soy curds with minimal processing.',
    badge: 'Plant Complete'
  },
  {
    id: 'edamame',
    name: 'Steamed Shelled Edamame',
    category: 'plant',
    proteinPer100g: 18.2,
    caloriesPer100g: 140,
    servingSize: '120g cup',
    servingProtein: 21.8,
    diaasScore: 0.91,
    leucinePer100g: 1.3,
    description: 'Young green soybeans providing dietary fiber, iron, and complete essential aminos.',
    badge: 'Whole Plant'
  },
  {
    id: 'cottage_cheese',
    name: 'Low-Fat Cottage Cheese (2%)',
    category: 'dairy',
    proteinPer100g: 12.0,
    caloriesPer100g: 81,
    servingSize: '225g cup',
    servingProtein: 27.0,
    diaasScore: 1.14,
    leucinePer100g: 1.2,
    description: 'Rich in micellar casein that releases amino acids gradually over 6 to 7 hours.',
    badge: 'Nighttime Anti-Catabolic'
  },
  {
    id: 'lean_beef',
    name: '93/7 Grass-Fed Ground Beef',
    category: 'meat',
    proteinPer100g: 26.2,
    caloriesPer100g: 172,
    servingSize: '150g portion (cooked)',
    servingProtein: 39.3,
    diaasScore: 1.21,
    leucinePer100g: 2.2,
    description: 'Nutrient-dense red meat rich in bioavailable heme iron, zinc, and natural creatine.',
    badge: 'Creatine & Zinc'
  },
  {
    id: 'seitan',
    name: 'Vital Wheat Gluten (Seitan)',
    category: 'plant',
    proteinPer100g: 75.0,
    caloriesPer100g: 370,
    servingSize: '80g prepared',
    servingProtein: 32.0,
    diaasScore: 0.65,
    leucinePer100g: 4.1,
    description: 'Exceptionally protein-dense plant food; best paired with lysine sources like legumes or nutritional yeast.',
    badge: 'Maximum Density'
  },
  {
    id: 'red_lentils',
    name: 'Cooked Red Lentils',
    category: 'plant',
    proteinPer100g: 9.0,
    caloriesPer100g: 116,
    servingSize: '200g bowl (cooked)',
    servingProtein: 18.0,
    diaasScore: 0.72,
    leucinePer100g: 0.7,
    description: 'High-fiber complex carbohydrate and plant protein combo that supports microbiome health.',
    badge: 'Fiber & Gut Health'
  }
];

export interface MealPreset {
  id: string;
  name: string;
  description: string;
  totalProtein: number;
  meals: {
    mealName: string;
    food: string;
    portion: string;
    proteinGrams: number;
  }[];
}

export const SAMPLE_MEAL_PRESETS: MealPreset[] = [
  {
    id: 'high_performance_athletic',
    name: 'High Performance Athletic (165g)',
    description: 'Optimized 4-meal distribution designed for maximal muscle protein synthesis pulses.',
    totalProtein: 165,
    meals: [
      { mealName: 'Breakfast', food: '3 Whole Eggs + 150g Egg Whites & Avocado Toast', portion: '1 serving', proteinGrams: 36 },
      { mealName: 'Lunch', food: 'Grilled Chicken Breast with Quinoa & Steamed Broccoli', portion: '160g chicken', proteinGrams: 48 },
      { mealName: 'Post-Workout', food: 'Whey Isolate Shake with Berries & 150g Greek Yogurt', portion: '1 scoop + yogurt', proteinGrams: 42 },
      { mealName: 'Dinner', food: 'Pan-Seared Salmon Fillet with Sweet Potato & Asparagus', portion: '160g salmon', proteinGrams: 39 }
    ]
  },
  {
    id: 'plant_forward',
    name: 'Plant-Powered Athlete (150g)',
    description: 'Strategically paired plant proteins ensuring optimal DIAAS balance and leucine intake.',
    totalProtein: 152,
    meals: [
      { mealName: 'Breakfast', food: 'Soy Protein Oatmeal with Hemp Seeds & Chia', portion: '1 bowl', proteinGrams: 34 },
      { mealName: 'Lunch', food: 'Extra Firm Tofu & Edamame Quinoa Power Bowl', portion: '180g tofu mix', proteinGrams: 42 },
      { mealName: 'Snack', food: 'Roasted Chickpeas & High-Protein Pea Shake', portion: '1 serving', proteinGrams: 36 },
      { mealName: 'Dinner', food: 'Seitan Stir-Fry with Lentils & Mixed Vegetables', portion: '90g seitan mix', proteinGrams: 40 }
    ]
  },
  {
    id: 'lean_cutting_efficiency',
    name: 'Calorie-Efficient Shred (175g)',
    description: 'Maximal protein-to-calorie ratio to preserve muscle tissue during an aggressive fat loss deficit.',
    totalProtein: 175,
    meals: [
      { mealName: 'Breakfast', food: '200g Liquid Egg Whites scramble + 1 Whole Egg & Spinach', portion: 'Scramble', proteinGrams: 28 },
      { mealName: 'Lunch', food: '180g White Fish (Cod/Halibut) with Big Leafy Green Salad', portion: '180g fillet', proteinGrams: 42 },
      { mealName: 'Mid-Day', food: '250g Nonfat Plain Greek Yogurt with Cinnamon & Blueberries', portion: '1 bowl', proteinGrams: 26 },
      { mealName: 'Dinner', food: '190g Skinless Chicken Breast with Roasted Cauliflower', portion: '190g breast', proteinGrams: 52 },
      { mealName: 'Nightcap', food: '175g Low-Fat Cottage Cheese with Crushed Walnuts', portion: '1 cup', proteinGrams: 27 }
    ]
  }
];
