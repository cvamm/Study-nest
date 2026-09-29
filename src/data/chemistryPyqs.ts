export interface PyqQuestion {
  id: number;
  type: "MCQ" | "AR" | "SA" | "LA";
  tag: string;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface PyqChapterInfo {
  chapter_num: number;
  unit_num: number;
  title: string;
  unit_title: string;
  weightage_unit: string;
}

export interface PyqChapter {
  info: PyqChapterInfo;
  questions: PyqQuestion[];
}

export const CHEMISTRY_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "unit_num": 1,
      "title": "Solutions",
      "unit_title": "Physical Chemistry",
      "weightage_unit": "7 Marks (Physical Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following concentration terms is independent of temperature?",
        "answer": "(b) Molality",
        "explanation": "Molality is defined as the number of moles of solute per kilogram of solvent (m = n_solute / w_solvent in kg). Because mass does not change with temperature (unlike volume, which expands or contracts with temperature changes), molality and mole fraction are independent of temperature.",
        "options": [
          "(a) Molarity",
          "(b) Molality",
          "(c) Normality",
          "(d) Formality"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Value of Henry's constant KH for a gas in a liquid:",
        "answer": "(a) increases with increase in temperature",
        "explanation": "According to Henry's Law: p = KH * χ => χ = p / KH. The solubility of gases in liquids decreases with increasing temperature because dissolution of gas is an exothermic process. Since solubility (χ) decreases with rising temperature, Henry's constant KH must increase with temperature.",
        "options": [
          "(a) increases with increase in temperature",
          "(b) decreases with increase in temperature",
          "(c) remains constant with temperature",
          "(d) first increases then decreases"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "An azeotropic mixture of two liquids boils at a lower temperature than either of them when:",
        "answer": "(a) it shows large positive deviation from Raoult's law",
        "explanation": "Solutions showing large positive deviations from Raoult's law (e.g., ethanol + water, 95% ethanol by volume) exhibit higher vapour pressure than expected due to weaker A-B interactions. Higher vapour pressure lowers the boiling point, forming a minimum-boiling azeotrope.",
        "options": [
          "(a) it shows large positive deviation from Raoult's law",
          "(b) it shows large negative deviation from Raoult's law",
          "(c) it is an ideal solution",
          "(d) it shows zero deviation"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The van 't Hoff factor (i) for complete dissociation of K4[Fe(CN)6] in aqueous solution is:",
        "answer": "(b) 5",
        "explanation": "K4[Fe(CN)6] ionizes as: K4[Fe(CN)6] -> 4 K⁺ + [Fe(CN)6]⁴⁻. Total number of ions produced per formula unit n = 4 + 1 = 5. For 100% dissociation (α = 1): i = 1 + (n - 1)α = 1 + (5 - 1)(1) = 5.",
        "options": [
          "(a) 4",
          "(b) 5",
          "(c) 6",
          "(d) 1"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following aqueous solutions will have the highest boiling point?",
        "answer": "(a) 1.0 M Na2SO4",
        "explanation": "Elevation in boiling point is a colligative property: ΔTb = i * Kb * m. For Na2SO4, i = 3 (effective molarity = 3.0 M); for NaCl, i = 2 (effective 2.0 M); for glucose and sucrose, i = 1 (effective 1.0 M). Since Na2SO4 has the highest effective particle concentration, it exhibits the largest elevation in boiling point and highest boiling point.",
        "options": [
          "(a) 1.0 M Na2SO4",
          "(b) 1.0 M NaCl",
          "(c) 1.0 M Glucose",
          "(d) 1.0 M Sucrose"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "When non-ideal solution of chloroform and acetone is mixed:",
        "answer": "(b) ΔH_mix < 0 and ΔV_mix < 0",
        "explanation": "Chloroform (CH-Cl3) and acetone ((CH3)2C=O) form strong intermolecular hydrogen bonds (Cl3C-H...O=C(CH3)2) that are stronger than original dipole-dipole interactions. This causes a negative deviation from Raoult's law, characterized by exothermic mixing (ΔH_mix < 0) and volume contraction (ΔV_mix < 0).",
        "options": [
          "(a) ΔH_mix > 0 and ΔV_mix > 0",
          "(b) ΔH_mix < 0 and ΔV_mix < 0",
          "(c) ΔH_mix = 0 and ΔV_mix = 0",
          "(d) ΔH_mix > 0 and ΔV_mix < 0"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Colligative properties of a solution depend upon:",
        "answer": "(c) the number of solute particles relative to total particles",
        "explanation": "Colligative properties depend strictly on the total number of solute particles (molecules/ions) present in a given amount of solvent, regardless of their chemical identity or nature.",
        "options": [
          "(a) the nature of solute particles",
          "(b) the nature of solvent particles",
          "(c) the number of solute particles relative to total particles",
          "(d) the physical state of the solution"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "People living at high altitudes suffer from a condition called anoxia (weakness and inability to think clearly) because:",
        "answer": "(a) atmospheric pressure is low, so dissolved oxygen in blood is low",
        "explanation": "According to Henry's Law, solubility of oxygen in blood is directly proportional to its partial pressure. At high altitudes, low atmospheric pressure reduces the partial pressure of oxygen, leading to low oxygen concentration in blood and tissues (anoxia).",
        "options": [
          "(a) atmospheric pressure is low, so dissolved oxygen in blood is low",
          "(b) atmospheric pressure is high",
          "(c) temperature is low",
          "(d) water boils faster"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Two solutions having the same osmotic pressure at a given temperature are called:",
        "answer": "(a) Isotonic solutions",
        "explanation": "Solutions that exert equal osmotic pressure across a semipermeable membrane at the same temperature are termed isotonic solutions. There is no net movement of solvent between isotonic solutions.",
        "options": [
          "(a) Isotonic solutions",
          "(b) Hypertonic solutions",
          "(c) Hypotonic solutions",
          "(d) Saturated solutions"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The unit of molal elevation constant (Kb) is:",
        "answer": "(a) K kg mol⁻¹",
        "explanation": "From ΔTb = Kb * m => Kb = ΔTb / m = Kelvin / (mol / kg) = K kg mol⁻¹.",
        "options": [
          "(a) K kg mol⁻¹",
          "(b) K mol kg⁻¹",
          "(c) kg mol⁻¹ K⁻¹",
          "(d) K kg⁻¹ mol"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If 0.1 M solution of glucose and 0.1 M solution of urea are separated by a semipermeable membrane, then:",
        "answer": "(c) no net flow of water occurs",
        "explanation": "Both glucose and urea are non-electrolytes with van 't Hoff factor i = 1. At equal molar concentration (0.1 M), their osmotic pressures are identical (Π = CRT), making the solutions isotonic. Hence, no net osmosis occurs.",
        "options": [
          "(a) water flows from glucose to urea",
          "(b) water flows from urea to glucose",
          "(c) no net flow of water occurs",
          "(d) both glucose and urea cross the membrane"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When a blood cell is placed in a hypertonic solution (> 0.9% w/v NaCl):",
        "answer": "(b) it shrinks (plasmolysis)",
        "explanation": "Normal saline (0.9% w/v NaCl) is isotonic with fluid inside human red blood cells. When placed in a hypertonic solution (higher solute concentration / higher osmotic pressure outside), water flows out of the cell by exosmosis, causing it to shrink.",
        "options": [
          "(a) it swells and bursts",
          "(b) it shrinks (plasmolysis)",
          "(c) its shape remains unchanged",
          "(d) it dissolves"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which colligative property is most widely used to determine the molar mass of biomolecules and polymers?",
        "answer": "(a) Osmotic pressure",
        "explanation": "Osmotic pressure is measured at room temperature (avoiding thermal degradation of biomolecules), uses molarity (convenient for dilute solutions), and produces substantial, easily measurable pressure changes even for very dilute solutions of high-molecular-mass macromolecules.",
        "options": [
          "(a) Osmotic pressure",
          "(b) Elevation in boiling point",
          "(c) Depression in freezing point",
          "(d) Relative lowering of vapour pressure"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Acetic acid associates in benzene to form dimers. The value of van 't Hoff factor (i) for acetic acid under complete dimerization is:",
        "answer": "(a) 0.5",
        "explanation": "Dimerization: 2 CH3COOH <=> (CH3COOH)2. Here n = 2. For complete association (α = 1): i = 1 + (1/n - 1)α = 1 + (1/2 - 1)(1) = 1 - 0.5 = 0.5.",
        "options": [
          "(a) 0.5",
          "(b) 2.0",
          "(c) 1.0",
          "(d) 0.25"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "An ideal solution is formed when its components:",
        "answer": "(a) have identical intermolecular forces (A-B = A-A = B-B)",
        "explanation": "An ideal solution obeys Raoult's law at all concentrations and temperatures because intermolecular forces between solute and solvent (A-B) are identical to those in the pure components (A-A and B-B), leading to ΔH_mix = 0 and ΔV_mix = 0.",
        "options": [
          "(a) have identical intermolecular forces (A-B = A-A = B-B)",
          "(b) have ΔH_mix > 0",
          "(c) have ΔV_mix > 0",
          "(d) form an azeotrope"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Ethylene glycol is added to water in car radiators in cold climates because it:",
        "answer": "(a) acts as an anti-freeze by lowering the freezing point of water",
        "explanation": "Ethylene glycol acts as a non-volatile solute that lowers the freezing point of water (depression of freezing point, ΔTf = Kf * m), preventing cooling water in automobile radiators from freezing in sub-zero winter temperatures.",
        "options": [
          "(a) acts as an anti-freeze by lowering the freezing point of water",
          "(b) raises the freezing point",
          "(c) decreases the boiling point",
          "(d) prevents rust only"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The mole fraction of ethylene glycol (C2H6O2) in an aqueous solution containing 20% of C2H6O2 by mass is:",
        "answer": "(a) 0.068",
        "explanation": "In 100 g solution: mass of glycol = 20 g, mass of water = 80 g.\nMoles of glycol = 20 / 62 ≈ 0.322 mol. Moles of water = 80 / 18 ≈ 4.444 mol.\nTotal moles = 0.322 + 4.444 = 4.766 mol.\nMole fraction of glycol = 0.322 / 4.766 ≈ 0.0676 ≈ 0.068.",
        "options": [
          "(a) 0.068",
          "(b) 0.932",
          "(c) 0.20",
          "(d) 0.80"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The semipermeable membrane commonly used in reverse osmosis desalination plants is made of:",
        "answer": "(a) Cellulose acetate supported on a porous sheet",
        "explanation": "Modern industrial reverse osmosis desalination uses polymer membranes of cellulose acetate supported on a porous backing; it is permeable to water molecules while impervious to dissolved salt ions and organic contaminants.",
        "options": [
          "(a) Cellulose acetate supported on a porous sheet",
          "(b) Animal bladder",
          "(c) Copper ferrocyanide",
          "(d) Gelatin"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Scuba divers use air diluted with helium (11.7% He, 56.2% N2, 32.1% O2) to prevent a painful and dangerous medical condition called:",
        "answer": "(a) Bends (decompression sickness)",
        "explanation": "Helium is far less soluble in blood than nitrogen. Diluting breathing gas with helium prevents excessive dissolved gas from forming painful, dangerous nitrogen bubbles in the bloodstream when divers ascend rapidly to the surface (the bends).",
        "options": [
          "(a) Bends (decompression sickness)",
          "(b) Anoxia",
          "(c) Plasmolysis",
          "(d) Emphysema"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following mixtures shows positive deviation from Raoult's law?",
        "answer": "(a) Ethanol and Acetone",
        "explanation": "Pure ethanol molecules are held by intermolecular hydrogen bonds. Adding acetone breaks these hydrogen bonds, weakening overall intermolecular attractions (A-B < A-A, B-B). This increases escaping tendency, causing positive deviation.",
        "options": [
          "(a) Ethanol and Acetone",
          "(b) Chloroform and Acetone",
          "(c) Nitric acid and Water",
          "(d) Phenol and Aniline"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If van 't Hoff factor i = 1, it implies that the solute:",
        "answer": "(a) undergoes neither dissociation nor association",
        "explanation": "i = (observed colligative property) / (calculated colligative property). When i = 1, normal molecular behavior occurs without dissociation or association (e.g. glucose, urea, sucrose in water).",
        "options": [
          "(a) undergoes neither dissociation nor association",
          "(b) undergoes complete dissociation",
          "(c) undergoes complete association",
          "(d) is volatile"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "For a dilute solution containing 2.5 g of non-volatile solute in 100 g of water, the relative lowering of vapour pressure is 0.0125. The molecular mass of the solute is:",
        "answer": "(a) 36 g/mol",
        "explanation": "Relative lowering of vapour pressure (p° - p) / p° = (w2 * M1) / (M2 * w1).\n0.0125 = (2.5 * 18) / (M2 * 100) = 45 / (100 * M2) = 0.45 / M2\n=> M2 = 0.45 / 0.0125 = 36 g/mol.",
        "options": [
          "(a) 36 g/mol",
          "(b) 72 g/mol",
          "(c) 18 g/mol",
          "(d) 90 g/mol"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A solution containing 8.6 g per dm³ of urea (M = 60 g/mol) was found to be isotonic with a 5% (w/v) solution of an organic non-volatile solute. The molar mass of the solute is:",
        "answer": "(a) 348.8 g/mol",
        "explanation": "For isotonic solutions at same temperature: C1 = C2 => w1 / (M1 * V1) = w2 / (M2 * V2).\nFor urea: w1 = 8.6 g, V1 = 1 dm³ = 1 L, M1 = 60 g/mol => C1 = 8.6 / 60 ≈ 0.1433 mol/L.\nFor 5% (w/v) solute: w2 = 5 g in V2 = 100 mL = 0.1 L => C2 = 5 / (M2 * 0.1) = 50 / M2.\nEquating: 50 / M2 = 8.6 / 60 => M2 = (50 * 60) / 8.6 = 3000 / 8.6 ≈ 348.8 g/mol.",
        "options": [
          "(a) 348.8 g/mol",
          "(b) 60 g/mol",
          "(c) 120 g/mol",
          "(d) 180 g/mol"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The cryoscopic constant Kf depends only on:",
        "answer": "(a) the nature of the solvent",
        "explanation": "Kf = (R * M_solvent * Tf²) / (1000 * ΔH_fusion). It is a characteristic physical constant of the solvent and is completely independent of the solute.",
        "options": [
          "(a) the nature of the solvent",
          "(b) the nature of the solute",
          "(c) the concentration of the solution",
          "(d) atmospheric pressure"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A solution of two liquids A and B has maximum boiling azeotrope. The interactions between A-B are:",
        "answer": "(a) stronger than A-A and B-B",
        "explanation": "Maximum boiling azeotropes are formed by non-ideal solutions showing negative deviations from Raoult's law (e.g. 68% HNO3 + 32% H2O). Stronger A-B interactions decrease vapour pressure to a minimum, requiring higher temperature to boil (maximum boiling).",
        "options": [
          "(a) stronger than A-A and B-B",
          "(b) weaker than A-A and B-B",
          "(c) equal to A-A and B-B",
          "(d) zero"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Aquatic species are more comfortable in cold waters than in warm waters.\nReason (R): The solubility of oxygen gas in water increases with decrease in temperature.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Gas dissolution in water is exothermic (ΔH < 0). Lower temperature shifts equilibrium forward (Le Chatelier's principle), increasing dissolved oxygen essential for aquatic respiration.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Cooking takes longer on high mountain peaks without a pressure cooker.\nReason (R): At high altitudes, atmospheric pressure is low, causing water to boil at a lower temperature.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Liquid boils when vapour pressure equals atmospheric pressure. At low atmospheric pressure, boiling point of water drops below 100 °C, supplying less thermal energy to cook food.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Osmotic pressure measurement is preferred over other colligative methods for determining the molecular mass of proteins.\nReason (R): Biomolecules like proteins decompose at elevated temperatures and have very small colligative property changes due to high molar masses.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Osmotic pressure is measurable at room temperature (preventing protein denaturation) and gives substantial, precise readings.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): When sodium chloride (NaCl) is dissolved in water, the boiling point of water increases.\nReason (R): The addition of a non-volatile solute lowers the vapour pressure of the solvent, requiring a higher temperature for vapour pressure to equal atmospheric pressure.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the mechanism of elevation in boiling point (ΔTb = i * Kb * m).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): A mixture of chlorobenzene and bromobenzene forms an ideal solution.\nReason (R): Chlorobenzene and bromobenzene have nearly identical molecular sizes, shapes, and similar intermolecular van der Waals forces.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why ΔH_mix ≈ 0 and ΔV_mix ≈ 0 for this mixture.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Henry's law and mention two of its important industrial/medical applications.",
        "answer": "Henry's law and applications",
        "explanation": "1. Statement: At a constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the liquid: p = KH * χ, where p is partial pressure, χ is mole fraction in solution, and KH is Henry's law constant.\n2. Applications:\n(i) In soft drinks and soda bottles: Bottles are sealed under high CO2 pressure to increase the solubility of CO2.\n(ii) In deep-sea diving: Scuba divers breathe air diluted with helium to avoid 'bends' caused by high nitrogen solubility at high underwater pressures."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "State Raoult's law for a solution containing non-volatile solute. Write its mathematical formulation.",
        "answer": "Raoult's law for non-volatile solute",
        "explanation": "1. Statement: For a solution of a non-volatile solute in a volatile solvent, the relative lowering of vapour pressure is equal to the mole fraction of the solute present in the solution.\n2. Mathematical Formula: (p° - p) / p° = χ_solute = n2 / (n1 + n2) ≈ n2 / n1 (for dilute solutions), where p° is vapour pressure of pure solvent and p is vapour pressure of solution."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Differentiate between ideal and non-ideal solutions on the basis of: (i) Raoult's law obedience, (ii) enthalpy of mixing ΔH_mix, (iii) volume change on mixing ΔV_mix.",
        "answer": "Differences between ideal and non-ideal solutions",
        "explanation": "1. Raoult's Law: Ideal solutions obey Raoult's law over the entire range of concentration and temperature (pA = pA° χA). Non-ideal solutions deviate from Raoult's law.\n2. Enthalpy of Mixing: For ideal solutions, ΔH_mix = 0 (no heat evolved or absorbed). For non-ideal solutions, ΔH_mix ≠ 0 (positive for positive deviations, negative for negative deviations).\n3. Volume Change: For ideal solutions, ΔV_mix = 0 (total volume equals sum of component volumes). For non-ideal solutions, ΔV_mix ≠ 0."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Define: (i) Molal elevation constant (Ebullioscopic constant Kb), (ii) Reverse osmosis.",
        "answer": "Definitions of Kb and reverse osmosis",
        "explanation": "1. Molal Elevation Constant (Kb): The elevation in boiling point produced when one mole of a non-volatile solute is dissolved in 1 kilogram (1000 g) of the solvent (i.e. in a 1 molal solution).\n2. Reverse Osmosis: The phenomenon in which solvent molecules flow from a solution of higher solute concentration to pure solvent across a semipermeable membrane when an external pressure greater than the osmotic pressure is applied on the solution."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Calculate the freezing point of a solution containing 1.8 g of non-electrolyte solute (molar mass = 180 g/mol) dissolved in 90 g of benzene. (Kf for benzene = 5.12 K kg mol⁻¹, freezing point of pure benzene = 5.5 °C).",
        "answer": "Freezing point = 4.93 °C",
        "explanation": "Moles of solute n = 1.8 g / 180 g/mol = 0.01 mol.\nMass of solvent w1 = 90 g = 0.090 kg.\nMolality m = n / w1(kg) = 0.01 / 0.090 = 1 / 9 ≈ 0.111 mol/kg.\nDepression in freezing point: ΔTf = Kf * m = 5.12 * (1 / 9) = 0.569 K ≈ 0.57 °C.\nFreezing point of solution Tf = Tf° - ΔTf = 5.5 °C - 0.57 °C = 4.93 °C."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is an azeotrope? Why can the components of an azeotropic mixture not be separated by fractional distillation?",
        "answer": "Azeotrope definition and distillation behavior",
        "explanation": "1. Azeotrope: A constant-boiling binary liquid mixture that boils at a specific constant temperature and distills over without any change in chemical composition.\n2. Why they cannot be separated: In an azeotropic mixture, the composition of the liquid phase is identical to the composition of the vapour phase. Heating produces vapour with the exact same proportions, preventing separation by fractional distillation."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "A 5% solution (by mass) of cane sugar (molar mass = 342 g/mol) in water has a freezing point of 271 K. Calculate the freezing point of a 5% solution (by mass) of glucose (molar mass = 180 g/mol) in water. (Freezing point of pure water = 273.15 K).",
        "answer": "Freezing point of glucose solution = 269.07 K",
        "explanation": "For 5% cane sugar: 5 g in 95 g water. ΔTf1 = 273.15 - 271 = 2.15 K.\nMolality m1 = (5 / 342) / 0.095 = 5 / (342 * 0.095) ≈ 0.1539 mol/kg.\nΔTf1 = Kf * m1 => 2.15 = Kf * 0.1539 => Kf = 2.15 / 0.1539 ≈ 13.97 K kg/mol.\nFor 5% glucose: 5 g in 95 g water. Molality m2 = (5 / 180) / 0.095 = 5 / (180 * 0.095) ≈ 0.2924 mol/kg.\nΔTf2 = Kf * m2 = 13.97 * 0.2924 ≈ 4.08 K.\nFreezing point of glucose solution = 273.15 - 4.08 = 269.07 K."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Explain with an example what is meant by: (i) minimum boiling azeotrope, (ii) maximum boiling azeotrope.",
        "answer": "Minimum and maximum boiling azeotropes with examples",
        "explanation": "1. Minimum Boiling Azeotrope: Formed by solutions exhibiting large positive deviations from Raoult's law. The boiling point of the azeotrope is lower than that of either pure component. Example: 95% Ethanol + 5% Water by volume (boils at 351.15 K, lower than pure ethanol 351.3 K and water 373.15 K).\n2. Maximum Boiling Azeotrope: Formed by solutions exhibiting large negative deviations from Raoult's law. The boiling point of the azeotrope is higher than that of either component. Example: 68% Nitric acid + 32% Water by mass (boils at 393.5 K, higher than water 373 K and HNO3 359 K)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Determine the amount of CaCl2 (i = 2.47) dissolved in 2.5 L of water such that its osmotic pressure is 0.75 atm at 27 °C. (R = 0.0821 L atm K⁻¹ mol⁻¹, molar mass of CaCl2 = 111 g/mol).",
        "answer": "Mass of CaCl2 = 3.42 g",
        "explanation": "Given: Π = 0.75 atm, V = 2.5 L, T = 27 + 273 = 300 K, i = 2.47, M = 111 g/mol.\nFormula: Π = i * (w / (M * V)) * R * T\n=> w = (Π * M * V) / (i * R * T)\nw = (0.75 * 111 * 2.5) / (2.47 * 0.0821 * 300)\nNumerator = 208.125\nDenominator = 2.47 * 24.63 = 60.836\nw = 208.125 / 60.836 ≈ 3.42 g."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why is the molar mass of benzoic acid determined in benzene found to be nearly 244 g/mol instead of its actual molar mass of 122 g/mol?",
        "answer": "Dimerization of benzoic acid in benzene",
        "explanation": "In non-polar solvents like benzene, benzoic acid molecules undergo intermolecular hydrogen bonding between their carboxylic groups (-COOH), associating into stable dimers: 2 C6H5COOH <=> (C6H5COOH)2. Dimerization halves the total number of solute particles in solution. Since colligative properties are inversely proportional to molar mass, the experimental molar mass appears doubled (~244 g/mol)."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) State Raoult's law for a solution of two volatile liquids.\n(b) A solution is prepared by mixing 2 moles of liquid A (pA° = 400 mm Hg) and 3 moles of liquid B (pB° = 200 mm Hg). Assuming ideal behavior, calculate:\n(i) the vapour pressure of each component in solution,\n(ii) the total vapour pressure of the solution,\n(iii) the mole fraction of each component in the vapour phase.",
        "answer": "Raoult's law derivation and complete numerical calculation",
        "explanation": "Marking Scheme:\n(a) Raoult's Law Statement (1 mark):\n- For a solution of volatile liquids, the partial vapour pressure of each volatile component in the solution is directly proportional to its mole fraction: pA = pA° * χA and pB = pB° * χB.\n\n(b) Numerical (4 marks):\n- Total moles in liquid phase = 2 + 3 = 5 moles.\n- Mole fractions in liquid: χA = 2/5 = 0.40, χB = 3/5 = 0.60.\n(i) Partial vapour pressures:\n  pA = pA° * χA = 400 mm Hg * 0.40 = 160 mm Hg.\n  pB = pB° * χB = 200 mm Hg * 0.60 = 120 mm Hg.\n(ii) Total vapour pressure:\n  p_total = pA + pB = 160 + 120 = 280 mm Hg.\n(iii) Mole fractions in vapour phase (Dalton's Law: y_i = p_i / p_total):\n  yA = pA / p_total = 160 / 280 = 4 / 7 ≈ 0.571.\n  yB = pB / p_total = 120 / 280 = 3 / 7 ≈ 0.429."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Define van 't Hoff factor i. Write expressions relating i with:\n(i) degree of dissociation α,\n(ii) degree of association α.\n(b) A 0.2 molal aqueous solution of KCl freezes at -0.680 °C. Calculate the van 't Hoff factor and degree of dissociation of KCl. (Kf for water = 1.86 K kg mol⁻¹).",
        "answer": "van 't Hoff factor theory, derivations, and degree of dissociation numerical",
        "explanation": "Marking Scheme:\n(a) Definition & Formulas (2 marks):\n- Definition: i = (Observed colligative property) / (Calculated colligative property) = (Normal molar mass) / (Abnormal molar mass).\n(i) For dissociation: A -> n B. Initial 1 mol, equilibrium: 1 - α + nα. Total particles = 1 + (n - 1)α => i = 1 + (n - 1)α => α = (i - 1) / (n - 1).\n(ii) For association: n A -> An. Equilibrium particles = 1 - α + α/n => i = 1 + (1/n - 1)α => α = (1 - i) / (1 - 1/n).\n\n(b) Numerical (3 marks):\n- m = 0.2 mol/kg, Kf = 1.86 K kg/mol, ΔTf_obs = 0 - (-0.680) = 0.680 K.\n- Calculated ΔTf = Kf * m = 1.86 * 0.2 = 0.372 K.\n- van 't Hoff factor i = ΔTf_obs / ΔTf_calc = 0.680 / 0.372 ≈ 1.828.\n- For KCl: KCl -> K⁺ + Cl⁻ (n = 2 ions).\n- Degree of dissociation α = (i - 1) / (n - 1) = (1.828 - 1) / (2 - 1) = 0.828 = 82.8%."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) What is elevation in boiling point? Derive the relationship between elevation in boiling point and molar mass of solute.\n(b) 18 g of glucose (C6H12O6) is dissolved in 1 kg of water in a saucepan. At what temperature will this water boil at 1.013 bar pressure? (Kb for water = 0.52 K kg mol⁻¹).",
        "answer": "Elevation in boiling point derivation and boiling point calculation = 373.202 K",
        "explanation": "Marking Scheme:\n(a) Derivation (3 marks):\n- Elevation in boiling point ΔTb = Tb - Tb° is proportional to molality m: ΔTb = Kb * m.\n- Molality m = (w2 / M2) / (w1 / 1000) = (1000 * w2) / (M2 * w1), where w2 is mass of solute, M2 is molar mass of solute, and w1 is mass of solvent in grams.\n- Substituting: ΔTb = [ 1000 * Kb * w2 ] / [ M2 * w1 ].\n- Rearranging for molar mass: M2 = [ 1000 * Kb * w2 ] / [ ΔTb * w1 ].\n\n(b) Numerical (2 marks):\n- Solute: Glucose w2 = 18 g, M2 = 180 g/mol => moles = 18 / 180 = 0.1 mol.\n- Solvent: Water w1 = 1 kg.\n- Molality m = 0.1 mol / 1 kg = 0.1 m.\n- ΔTb = Kb * m = 0.52 K kg/mol * 0.1 mol/kg = 0.052 K.\n- Normal boiling point of water at 1.013 bar = 100 °C = 373.15 K.\n- Boiling point of solution Tb = Tb° + ΔTb = 373.15 + 0.052 = 373.202 K (or 100.052 °C)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Intravenous Injections and Osmotic Pressure\nRed blood cells (erythrocytes) are bounded by semipermeable cell membranes. The fluid inside the cells has an osmotic pressure equal to that of a 0.9% (mass/volume) sodium chloride solution (normal saline). When preparing intravenous injections, the medicine must be dissolved in a vehicle that is strictly isotonic with blood. If a patient is injected with pure distilled water, water rushes into the cells via endosmosis, causing the cells to swell and burst (hemolysis). Conversely, hypertonic solutions cause water to rush out (crenation).\n(i) What type of solution is normal saline relative to human blood?\n(ii) What happens to red blood cells if suspended in 1.5% NaCl solution?\n(iii) Calculate the osmotic pressure of a 0.9% (w/v) NaCl solution at 37 °C (body temperature), assuming complete dissociation. (M of NaCl = 58.5 g/mol, R = 0.0821 L atm K⁻¹ mol⁻¹).\n(iv) State the phenomenon underlying the preservation of meat by salting and fruits by sugar syrup.",
        "answer": "Solutions to Case Study on Osmotic Pressure",
        "explanation": "(i) Normal saline is an isotonic solution with blood plasma (same osmotic pressure).\n(ii) A 1.5% NaCl solution is hypertonic (higher osmotic pressure than cellular fluid). Water flows out of erythrocytes by exosmosis, causing them to shrink and shrivel (crenation/plasmolysis).\n(iii) In 100 mL, mass = 0.9 g => In 1 L (1000 mL), mass w = 9.0 g.\nMoles n = 9.0 / 58.5 ≈ 0.1538 mol. Concentration C = 0.1538 mol/L.\nT = 37 + 273 = 310 K. For NaCl, i = 2.\nΠ = i * C * R * T = 2 * (0.1538) * (0.0821) * (310) ≈ 7.83 atm.\n(iv) Osmosis (exosmosis): High salt or sugar concentration draws water out of bacterial and fungal cells via exosmosis, causing plasmolysis, dehydration, and death of microorganisms, preventing food spoilage."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Derive the relationship between depression in freezing point ΔTf and molar mass of solute M2.\n(b) 45 g of ethylene glycol (C2H6O2) is mixed with 600 g of water. Calculate:\n(i) the freezing point depression,\n(ii) the freezing point of the solution. (Kf for water = 1.86 K kg mol⁻¹).",
        "answer": "Depression in freezing point derivation and freezing point calculation = -2.25 °C",
        "explanation": "(a) Derivation (3 marks):\n- Freezing point depression ΔTf = Tf° - Tf is directly proportional to molality m: ΔTf = Kf * m.\n- Molality m = (w2 / M2) / (w1 / 1000) = (1000 * w2) / (M2 * w1).\n- Substituting into formula: ΔTf = [ 1000 * Kf * w2 ] / [ M2 * w1 ].\n- Rearranging for M2: M2 = [ 1000 * Kf * w2 ] / [ ΔTf * w1 ].\n\n(b) Numerical (2 marks):\n- Molar mass of ethylene glycol C2H6O2 = 2(12) + 6(1) + 2(16) = 24 + 6 + 32 = 62 g/mol.\n- Moles of glycol = 45 / 62 ≈ 0.7258 mol.\n- Mass of water w1 = 600 g = 0.600 kg.\n- Molality m = 0.7258 / 0.600 ≈ 1.21 mol/kg.\n(i) Freezing point depression ΔTf = Kf * m = 1.86 K kg/mol * 1.21 mol/kg ≈ 2.25 K (or 2.25 °C).\n(ii) Freezing point of solution Tf = 0 °C - 2.25 °C = -2.25 °C (or 270.90 K)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Explain positive and negative deviations from Raoult's law with vapour pressure-composition diagrams.\n(b) Give one example of each type and explain the molecular interactions responsible.",
        "answer": "Detailed analysis of positive and negative deviations from Raoult's law",
        "explanation": "(a) Descriptions & Graphs:\n1. Positive Deviation: Vapour pressure of each component and total vapour pressure is higher than predicted by Raoult's law (pA > pA° χA, pB > pB° χB, p_total > pA + pB). Graph shows curves bowing upward above the ideal linear dashed lines.\n2. Negative Deviation: Vapour pressure of each component and total vapour pressure is lower than predicted by Raoult's law (pA < pA° χA, pB < pB° χB, p_total < pA + pB). Graph shows curves bowing downward below ideal lines.\n\n(b) Molecular Interactions & Examples:\n1. Positive Deviation Example: Ethanol + Acetone.\n- Explanation: Intermolecular forces between solute and solvent (A-B) are weaker than those between pure components (A-A and B-B). Pure ethanol has strong hydrogen bonds. Adding acetone breaks these hydrogen bonds, allowing molecules to escape more easily into the vapour phase. ΔH_mix > 0 (endothermic), ΔV_mix > 0 (expansion).\n2. Negative Deviation Example: Chloroform + Acetone (or Phenol + Aniline).\n- Explanation: Intermolecular forces between A-B are stronger than A-A and B-B. Chloroform and acetone form strong hydrogen bonds between the hydrogen of chloroform and carbonyl oxygen of acetone. Escaping tendency is reduced. ΔH_mix < 0 (exothermic), ΔV_mix < 0 (contraction)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A 100 g aqueous solution of a polymer containing 1.0 g of the polymer exerts an osmotic pressure of 0.20 mm Hg at 27 °C. Calculate the molar mass of the polymer. (R = 0.0821 L atm K⁻¹ mol⁻¹, 1 atm = 760 mm Hg).",
        "answer": "Molar mass of polymer = 93,594 g/mol ≈ 9.36 × 10⁴ g/mol",
        "explanation": "Given: w2 = 1.0 g, V ≈ 100 mL = 0.10 L, T = 27 + 273 = 300 K.\nOsmotic pressure Π = 0.20 mm Hg = 0.20 / 760 atm ≈ 2.632 × 10⁻⁴ atm.\nFormula: Π = (w2 * R * T) / (M2 * V)\n=> M2 = (w2 * R * T) / (Π * V)\nSubstitute values:\nM2 = (1.0 * 0.0821 * 300) / [ (2.632 × 10⁻⁴) * 0.10 ]\nNumerator = 24.63\nDenominator = 2.632 × 10⁻⁵\nM2 = 24.63 / (2.632 × 10⁻⁵) ≈ 93,579 g/mol ≈ 9.36 × 10⁴ g/mol."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the condition for reverse osmosis. Mention one large-scale application.\n(b) 2.0 g of benzoic acid (C6H5COOH) dissolved in 25.0 g of benzene shows a depression in freezing point equal to 1.62 K. Molal depression constant for benzene is 4.9 K kg mol⁻¹. If benzoic acid associates into dimers in benzene, calculate the percentage association of the acid.",
        "answer": "Reverse osmosis condition and percentage association = 99.2%",
        "explanation": "(a) Reverse Osmosis (1.5 marks):\n- Condition: An external hydrostatic pressure greater than the osmotic pressure (P_ext > Π) must be applied to the solution side.\n- Application: Desalination of seawater to produce potable drinking water.\n\n(b) Numerical (3.5 marks):\n- Solute mass w2 = 2.0 g, solvent benzene w1 = 25.0 g = 0.025 kg, ΔTf = 1.62 K, Kf = 4.9 K kg/mol.\n- Molar mass of benzoic acid C7H6O2 = 7(12) + 6(1) + 2(16) = 84 + 6 + 32 = 122 g/mol.\n- Theoretical molality m = (2.0 / 122) / 0.025 = 0.6557 mol/kg.\n- Calculated ΔTf_calc = Kf * m = 4.9 * 0.6557 = 3.213 K.\n- van 't Hoff factor i = ΔTf_obs / ΔTf_calc = 1.62 / 3.213 ≈ 0.5042.\n- For dimerization (n = 2): 2 C6H5COOH <=> (C6H5COOH)2.\n  i = 1 - α + α/2 = 1 - α/2\n  => α / 2 = 1 - i = 1 - 0.5042 = 0.4958\n  => α = 2 * 0.4958 = 0.9916 = 99.2%.\n- The percentage association of benzoic acid is 99.2%."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A solution is prepared by dissolving 10.0 g of a non-volatile solute in 200 g of water. It has a vapour pressure of 31.60 mm Hg at 30 °C. The vapour pressure of pure water at 30 °C is 31.82 mm Hg. Calculate the molar mass of the solute.",
        "answer": "Molar mass of solute = 126.8 g/mol",
        "explanation": "Given: p° = 31.82 mm Hg, p = 31.60 mm Hg, w2 = 10.0 g, w1 = 200 g, M1 (water) = 18 g/mol.\nRelative lowering of vapour pressure:\n(p° - p) / p° = (w2 * M1) / (M2 * w1)\n(31.82 - 31.60) / 31.82 = (10.0 * 18) / (M2 * 200)\n0.22 / 31.82 = 180 / (200 * M2) = 0.90 / M2\n0.006914 = 0.90 / M2\n=> M2 = 0.90 / 0.006914 ≈ 130.2 g/mol.\n(Using exact formula (p° - p)/p = n2/n1: 0.22/31.60 = (10/M2) / (200/18) = (10*18) / (200*M2) = 0.90/M2 => M2 = 0.90 * (31.60 / 0.22) = 129.27 g/mol)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the reasons why abnormal molecular masses are observed for certain solutes.\n(b) Phenol associates in benzene to an extent of 75% to form dimers. Calculate the freezing point of a solution containing 2.0 g of phenol dissolved in 100 g of benzene. (Kf for benzene = 5.12 K kg mol⁻¹, freezing point of benzene = 5.5 °C, molar mass of phenol = 94 g/mol).",
        "answer": "Abnormal molecular mass reasons and freezing point calculation = 4.86 °C",
        "explanation": "(a) Reasons for Abnormal Molecular Mass (2 marks):\n1. Association of solute molecules: Solute molecules associate in non-polar solvents via hydrogen bonding or dimer formation (e.g. carboxylic acids in benzene). The number of particles decreases, colligative property decreases, and experimental molar mass becomes abnormally high.\n2. Dissociation of solute into ions: Electrolytes (salts, acids, bases) dissociate into ions in polar solvents. The number of particles increases, colligative property increases, and experimental molar mass becomes abnormally low.\n\n(b) Numerical (3 marks):\n- Molar mass of phenol C6H5OH = 94 g/mol.\n- Degree of association α = 75% = 0.75, dimer formation n = 2.\n- van 't Hoff factor i = 1 - α/2 = 1 - 0.75/2 = 1 - 0.375 = 0.625.\n- Moles of phenol = 2.0 g / 94 g/mol = 0.02128 mol.\n- Molality m = 0.02128 mol / 0.100 kg = 0.2128 mol/kg.\n- Freezing point depression: ΔTf = i * Kf * m = 0.625 * 5.12 K kg/mol * 0.2128 mol/kg ≈ 0.681 °C.\n- Freezing point of solution Tf = Tf° - ΔTf = 5.5 °C - 0.681 °C = 4.82 °C."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "unit_num": 1,
      "title": "Electrochemistry",
      "unit_title": "Physical Chemistry",
      "weightage_unit": "9 Marks (Physical Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The unit of molar conductivity (Λm) is:",
        "answer": "(a) S cm² mol⁻¹",
        "explanation": "Molar conductivity Λm = (κ * 1000) / M. Conductivity κ has unit S cm⁻¹ and concentration M has unit mol cm⁻³. Therefore, Λm = S cm⁻¹ / (mol cm⁻³) = S cm² mol⁻¹.",
        "options": [
          "(a) S cm² mol⁻¹",
          "(b) S cm⁻¹ mol",
          "(c) S cm mol⁻¹",
          "(d) S⁻¹ cm² mol"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following statements is TRUE regarding the effect of dilution on conductivity (κ) and molar conductivity (Λm)?",
        "answer": "(c) κ decreases while Λm increases with dilution",
        "explanation": "Conductivity κ decreases on dilution because the number of current-carrying ions per unit volume decreases. In contrast, molar conductivity Λm = κ * V increases on dilution because the increase in volume V containing 1 mole of electrolyte vastly outweighs the decrease in conductivity κ.",
        "options": [
          "(a) Both κ and Λm increase with dilution",
          "(b) Both κ and Λm decrease with dilution",
          "(c) κ decreases while Λm increases with dilution",
          "(d) κ increases while Λm decreases with dilution"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The cell potential E_cell is related to Gibbs free energy change ΔrG by the expression:",
        "answer": "(a) ΔrG = - n F E_cell",
        "explanation": "The maximum electrical work done by a galvanic cell is equal to the decrease in Gibbs free energy: W_max = - ΔrG = n F E_cell => ΔrG = - n F E_cell.",
        "options": [
          "(a) ΔrG = - n F E_cell",
          "(b) ΔrG = + n F E_cell",
          "(c) ΔrG = - n F / E_cell",
          "(d) ΔrG = - E_cell / (n F)"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "According to Kohlrausch's law, the limiting molar conductivity of an electrolyte AxBy is given by:",
        "answer": "(a) x λ°_A + y λ°_B",
        "explanation": "Kohlrausch's law of independent migration of ions states that limiting molar conductivity of an electrolyte is the sum of the individual contributions of the cation and anion: Λ°m(AxBy) = x λ°(A^(y+)) + y λ°(B^(x-)).",
        "options": [
          "(a) x λ°_A + y λ°_B",
          "(b) λ°_A + λ°_B",
          "(c) (x + y)(λ°_A + λ°_B)",
          "(d) x/y (λ°_A + λ°_B)"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a lead-acid storage battery, during discharging, the electrolyte H2SO4:",
        "answer": "(a) is consumed and its density decreases",
        "explanation": "Overall discharging reaction: Pb(s) + PbO2(s) + 2 H2SO4(aq) -> 2 PbSO4(s) + 2 H2O(l). Sulfuric acid is continuously consumed and water is produced, causing the specific gravity of the battery acid to drop below 1.20 g/cm³.",
        "options": [
          "(a) is consumed and its density decreases",
          "(b) is formed and density increases",
          "(c) remains unchanged",
          "(d) evaporates"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The quantity of charge required to reduce 1 mole of Cr2O7²⁻ to Cr³⁺ in acidic medium is:",
        "answer": "(a) 6 F",
        "explanation": "Reduction half-reaction: Cr2O7²⁻ + 14 H⁺ + 6 e⁻ -> 2 Cr³⁺ + 7 H2O. Since 1 mole of Cr2O7²⁻ requires 6 moles of electrons, the quantity of charge required is 6 Faradays (6 F = 6 * 96500 C).",
        "options": [
          "(a) 6 F",
          "(b) 3 F",
          "(c) 1 F",
          "(d) 2 F"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "For the Daniell cell Zn | Zn²⁺ || Cu²⁺ | Cu, when an external opposing voltage E_ext > 1.1 V is applied:",
        "answer": "(b) electrons flow from Cu to Zn and current flows from Zn to Cu",
        "explanation": "When E_ext > E_cell (1.1 V), the cell reverses its role and functions as an electrolytic cell: the non-spontaneous reverse reaction proceeds, electrons flow from Cu to Zn, and zinc dissolves at the cathode.",
        "options": [
          "(a) electrons flow from Zn to Cu",
          "(b) electrons flow from Cu to Zn and current flows from Zn to Cu",
          "(c) no current flows",
          "(d) cell stops completely"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The electrode potential of standard hydrogen electrode (SHE) is arbitrarily fixed as:",
        "answer": "(a) 0.00 V",
        "explanation": "By IUPAC international convention, the standard reduction potential of the standard hydrogen electrode (SHE) Pt, H2(g, 1 bar) | H⁺(aq, 1 M) is assigned as 0.00 V at all temperatures.",
        "options": [
          "(a) 0.00 V",
          "(b) 1.00 V",
          "(c) -1.00 V",
          "(d) 0.76 V"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following metals is used for the cathodic protection of underground iron pipelines to prevent rusting?",
        "answer": "(a) Zinc or Magnesium",
        "explanation": "Zinc and magnesium have more negative standard reduction potentials than iron (E°(Mg²⁺/Mg) = -2.37 V, E°(Zn²⁺/Zn) = -0.76 V vs E°(Fe²⁺/Fe) = -0.44 V). Acting as sacrificial anodes, they corrode preferentially, protecting the iron cathode.",
        "options": [
          "(a) Zinc or Magnesium",
          "(b) Copper",
          "(c) Lead",
          "(d) Silver"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "A conductivity cell has a cell constant of 0.5 cm⁻¹. When filled with 0.1 M KCl solution, its resistance is 100 Ω. The conductivity of the solution is:",
        "answer": "(a) 0.005 S cm⁻¹",
        "explanation": "Conductivity κ = Cell constant (G*) / Resistance (R) = 0.5 cm⁻¹ / 100 Ω = 0.005 S cm⁻¹ (or 0.5 S m⁻¹).",
        "options": [
          "(a) 0.005 S cm⁻¹",
          "(b) 0.05 S cm⁻¹",
          "(c) 50 S cm⁻¹",
          "(d) 200 S cm⁻¹"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In the H2-O2 fuel cell, the reaction occurring at the anode is:",
        "answer": "(a) 2 H2(g) + 4 OH⁻(aq) -> 4 H2O(l) + 4 e⁻",
        "explanation": "In alkaline H2-O2 fuel cells, hydrogen gas is oxidized at the anode: 2 H2 + 4 OH⁻ -> 4 H2O + 4 e⁻. Oxygen gas is reduced at the cathode: O2 + 2 H2O + 4 e⁻ -> 4 OH⁻. Overall reaction: 2 H2 + O2 -> 2 H2O.",
        "options": [
          "(a) 2 H2(g) + 4 OH⁻(aq) -> 4 H2O(l) + 4 e⁻",
          "(b) O2(g) + 2 H2O(l) + 4 e⁻ -> 4 OH⁻(aq)",
          "(c) H⁺ + e⁻ -> 1/2 H2",
          "(d) 2 H2O -> 2 H2 + O2"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following represents the correct graph for variation of Λm with √c for a weak electrolyte like acetic acid (CH3COOH)?",
        "answer": "(a) A steep curve rising asymptotically at infinite dilution (near c = 0)",
        "explanation": "For weak electrolytes, degree of dissociation α increases steeply on extreme dilution (Ostwald's dilution law). Λm rises sharply near c -> 0 and does not intercept the y-axis linearly, making it impossible to obtain Λ°m by linear extrapolation.",
        "options": [
          "(a) A steep curve rising asymptotically at infinite dilution (near c = 0)",
          "(b) A straight line with negative slope",
          "(c) A horizontal straight line",
          "(d) A parabolic curve bowing downwards"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "How much electricity in Coulombs is required to deposit 27 g of aluminium from molten Al2O3? (Molar mass of Al = 27 g/mol, 1 F = 96500 C):",
        "answer": "(a) 289500 C",
        "explanation": "Al³⁺ + 3 e⁻ -> Al. Depositing 1 mole (27 g) of Al requires 3 moles of electrons = 3 Faradays. Charge Q = 3 * 96500 C = 289500 C.",
        "options": [
          "(a) 289500 C",
          "(b) 96500 C",
          "(c) 193000 C",
          "(d) 32166 C"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The standard reduction potentials of four metals A, B, C, and D are -0.76 V, +0.34 V, -2.37 V, and +0.80 V respectively. The strongest reducing agent is:",
        "answer": "(a) C",
        "explanation": "The lower (more negative) the standard reduction potential, the greater the ease of oxidation, and hence the stronger the reducing agent. Metal C with E° = -2.37 V is the strongest reducing agent.",
        "options": [
          "(a) C",
          "(b) A",
          "(c) D",
          "(d) B"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Rusting of iron is an electrochemical process where the cathode reaction is:",
        "answer": "(a) O2(g) + 4 H⁺(aq) + 4 e⁻ -> 2 H2O(l)",
        "explanation": "In atmospheric corrosion (rusting), iron acts as anode (Fe -> Fe²⁺ + 2 e⁻), and dissolved oxygen in acidic moisture is reduced at cathodic areas: O2 + 4 H⁺ + 4 e⁻ -> 2 H2O.",
        "options": [
          "(a) O2(g) + 4 H⁺(aq) + 4 e⁻ -> 2 H2O(l)",
          "(b) Fe(s) -> Fe²⁺(aq) + 2 e⁻",
          "(c) Fe²⁺ + 2 e⁻ -> Fe",
          "(d) 2 H2O -> O2 + 4 H⁺ + 4 e⁻"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The equilibrium constant Kc for a cell reaction with E°_cell = 0.2955 V at 298 K (for n = 1) is:",
        "answer": "(a) 10⁵",
        "explanation": "E°_cell = (0.0591 / n) log Kc => 0.2955 = (0.0591 / 1) log Kc => log Kc = 0.2955 / 0.0591 = 5. Therefore, Kc = 10⁵.",
        "options": [
          "(a) 10⁵",
          "(b) 10¹⁰",
          "(c) 10²",
          "(d) 10⁻⁵"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Mercury cell gives a constant potential of 1.35 V throughout its operational life because:",
        "answer": "(a) the overall cell reaction does not involve any ion in solution whose concentration can change",
        "explanation": "Overall reaction: Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l). Because there are no ions in solution whose concentration changes during discharge, its potential remains stable at 1.35 V until depleted.",
        "options": [
          "(a) the overall cell reaction does not involve any ion in solution whose concentration can change",
          "(b) it uses a liquid electrolyte",
          "(c) its internal resistance is zero",
          "(d) mercury is a liquid metal"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "During the electrolysis of aqueous sodium chloride (brine) using inert platinum electrodes, the products obtained at cathode and anode are:",
        "answer": "(a) H2 at cathode, Cl2 at anode",
        "explanation": "At cathode, reduction of water (H⁺) has higher potential than Na⁺, releasing H2 gas. At anode, chloride ions are oxidized preferentially over water due to oxygen overpotential, releasing Cl2 gas.",
        "options": [
          "(a) H2 at cathode, Cl2 at anode",
          "(b) Na at cathode, Cl2 at anode",
          "(c) H2 at cathode, O2 at anode",
          "(d) Na at cathode, O2 at anode"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The cell constant G* of a conductivity cell is determined using a standard solution of:",
        "answer": "(a) KCl whose conductivity is accurately known",
        "explanation": "Cell constant G* = l/A is difficult to measure geometrically. It is determined experimentally by measuring the resistance R of standard KCl solutions whose conductivities κ are known with high precision at various temperatures (G* = κ * R).",
        "options": [
          "(a) KCl whose conductivity is accurately known",
          "(b) NaCl",
          "(c) HCl",
          "(d) NaOH"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "For the reaction: 2 Fe³⁺(aq) + 2 I⁻(aq) -> 2 Fe²⁺(aq) + I2(s), the value of standard cell potential is 0.236 V. The standard Gibbs free energy change ΔrG° is:",
        "answer": "(a) -45.55 kJ/mol",
        "explanation": "Here n = 2 electrons. ΔrG° = - n F E°_cell = - 2 * 96500 C * 0.236 V = - 45548 J/mol = - 45.55 kJ/mol.",
        "options": [
          "(a) -45.55 kJ/mol",
          "(b) +45.55 kJ/mol",
          "(c) -91.10 kJ/mol",
          "(d) -22.77 kJ/mol"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If molar conductivities at infinite dilution of NaCl, HCl, and CH3COONa are 126.4, 425.9, and 91.0 S cm² mol⁻¹ respectively, Λ°m for CH3COOH is:",
        "answer": "(a) 390.5 S cm² mol⁻¹",
        "explanation": "By Kohlrausch's law: Λ°m(CH3COOH) = Λ°m(CH3COONa) + Λ°m(HCl) - Λ°m(NaCl) = 91.0 + 425.9 - 126.4 = 516.9 - 126.4 = 390.5 S cm² mol⁻¹.",
        "options": [
          "(a) 390.5 S cm² mol⁻¹",
          "(b) 425.9 S cm² mol⁻¹",
          "(c) 516.9 S cm² mol⁻¹",
          "(d) 208.5 S cm² mol⁻¹"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "A device that converts the chemical energy of a fuel directly into electrical energy is called a:",
        "answer": "(a) Fuel cell",
        "explanation": "Fuel cells continuously convert the chemical energy of combustion of fuels (like hydrogen, methane, methanol) directly into electrical energy with high thermodynamic efficiency (~70%).",
        "options": [
          "(a) Fuel cell",
          "(b) Electrolytic cell",
          "(c) Primary dry cell",
          "(d) Lead-acid storage battery"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In a dry cell (Leclanché cell), manganese dioxide (MnO2) acts as:",
        "answer": "(a) a depolarizer",
        "explanation": "MnO2 surrounds the carbon rod cathode and acts as a depolarizer by oxidizing hydrogen gas to water (preventing hydrogen bubble build-up on the electrode) while manganese is reduced from Mn(IV) to Mn(III) as MnO(OH).",
        "options": [
          "(a) a depolarizer",
          "(b) electrolyte",
          "(c) reducing agent",
          "(d) catalyst only"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Electrolysis of dilute aqueous H2SO4 using platinum electrodes produces:",
        "answer": "(a) H2 at cathode and O2 at anode",
        "explanation": "In dilute sulfuric acid, water undergoes electrolysis: 2 H⁺ + 2 e⁻ -> H2 at cathode, and 2 H2O -> O2 + 4 H⁺ + 4 e⁻ at anode.",
        "options": [
          "(a) H2 at cathode and O2 at anode",
          "(b) H2 at cathode and SO2 at anode",
          "(c) O2 at cathode and H2 at anode",
          "(d) SO4²⁻ at cathode"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The standard reduction potentials are E°(Cu²⁺/Cu) = +0.34 V and E°(Ag⁺/Ag) = +0.80 V. The standard EMF of the cell Cu | Cu²⁺ || Ag⁺ | Ag is:",
        "answer": "(a) +0.46 V",
        "explanation": "E°_cell = E°_cathode - E°_anode = E°(Ag⁺/Ag) - E°(Cu²⁺/Cu) = +0.80 V - (+0.34 V) = +0.46 V.",
        "options": [
          "(a) +0.46 V",
          "(b) -0.46 V",
          "(c) +1.14 V",
          "(d) +0.12 V"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Conductivity of an electrolytic solution decreases with dilution.\nReason (R): On dilution, the number of current-carrying ions per unit volume of the solution decreases.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Conductivity κ is the conductance of 1 cm³ of solution. Dilution increases total volume, dispersing ions and decreasing ion count per unit volume.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): For a weak electrolyte, limiting molar conductivity (Λ°m) cannot be obtained by direct extrapolation of Λm vs √c plot.\nReason (R): For weak electrolytes, the plot of Λm vs √c is not linear and curves upward asymptotically near zero concentration.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Because degree of dissociation increases rapidly near infinite dilution, the curve becomes parallel to the y-axis, requiring Kohlrausch's law to determine Λ°m.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): A galvanic cell stops functioning after some time.\nReason (R): As the reaction proceeds, the cell potential gradually decreases and becomes zero when the reaction reaches chemical equilibrium.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. From Nernst equation E_cell = E°_cell - (0.0591/n) log Q: as reactants are consumed and products accumulate, Q increases until E_cell = 0 at equilibrium.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Zinc is used in galvanizing iron rather than copper.\nReason (R): Standard reduction potential of zinc is more negative than that of iron, so zinc acts as a sacrificial anode even if the coating is scratched.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. If copper-coated iron is scratched, iron corrodes faster because iron is more reactive than copper; with zinc, zinc corrodes preferentially.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The cell potential of a mercury cell remains constant throughout its lifetime.\nReason (R): Mercury cell is a secondary storage cell that can be recharged repeatedly.",
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion is true (potential remains constant at 1.35 V because no ions in solution change concentration). Reason is false: a mercury cell is a primary cell and cannot be recharged.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Kohlrausch's law of independent migration of ions. Write its mathematical expression for an electrolyte of type AxBy.",
        "answer": "Kohlrausch's law and mathematical expression",
        "explanation": "1. Statement: Limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation of the electrolyte at infinite dilution.\n2. Expression: Λ°m(AxBy) = x λ°(A^(y+)) + y λ°(B^(x-)), where λ°(A^(y+)) and λ°(B^(x-)) are the limiting molar conductivities of the cation and anion respectively."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Write the Nernst equation for the following electrochemical cell at 298 K:\nNi(s) | Ni²⁺(aq) || Ag⁺(aq) | Ag(s).",
        "answer": "Nernst equation for Ni-Ag cell",
        "explanation": "Cell reaction: Ni(s) + 2 Ag⁺(aq) -> Ni²⁺(aq) + 2 Ag(s).\nNumber of electrons transferred n = 2.\nNernst equation at 298 K:\nE_cell = E°_cell - (0.0591 / 2) * log [ [Ni²⁺] / [Ag⁺]² ].\nwhere E°_cell = E°(Ag⁺/Ag) - E°(Ni²⁺/Ni)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "A solution of Ni(NO3)2 is electrolysed between platinum electrodes using a current of 5.0 amperes for 20 minutes. What mass of nickel is deposited at the cathode? (Molar mass of Ni = 58.7 g/mol, 1 F = 96500 C).",
        "answer": "Mass of Ni deposited = 1.825 g",
        "explanation": "Cathode reaction: Ni²⁺ + 2 e⁻ -> Ni(s).\nQuantity of electricity Q = I * t = 5.0 A * (20 * 60 s) = 5.0 * 1200 = 6000 C.\n2 moles of electrons (2 * 96500 C) deposit 1 mole (58.7 g) of Ni.\nMass deposited w = (M * I * t) / (n * F) = (58.7 * 6000) / (2 * 96500) = 352200 / 193000 ≈ 1.825 g."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "What is a fuel cell? Write the cathode and anode reactions of hydrogen-oxygen fuel cell.",
        "answer": "Fuel cell definition and H2-O2 reactions",
        "explanation": "1. Definition: A galvanic cell that converts the chemical energy from the combustion of fuels (like hydrogen, carbon monoxide, methane) directly into electrical energy.\n2. Reactions in alkaline H2-O2 fuel cell:\n- Anode: 2 H2(g) + 4 OH⁻(aq) -> 4 H2O(l) + 4 e⁻\n- Cathode: O2(g) + 2 H2O(l) + 4 e⁻ -> 4 OH⁻(aq)\n- Overall reaction: 2 H2(g) + O2(g) -> 2 H2O(l)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "The electrical resistance of a column of 0.05 M NaOH solution of diameter 1 cm and length 50 cm is 5.55 × 10³ Ω. Calculate its resistivity, conductivity, and molar conductivity.",
        "answer": "Resistivity = 87.135 Ω cm, Conductivity = 0.01148 S/cm, Molar conductivity = 229.6 S cm²/mol",
        "explanation": "Radius r = 0.5 cm, Area A = π r² = 3.1416 * 0.25 = 0.7854 cm², Length l = 50 cm.\n1. Resistivity ρ = R * A / l = (5.55 × 10³ Ω * 0.7854 cm²) / 50 cm = 4358.97 / 50 ≈ 87.18 Ω cm.\n2. Conductivity κ = 1 / ρ = 1 / 87.18 ≈ 0.01147 S cm⁻¹.\n3. Molar Conductivity Λm = (κ * 1000) / M = (0.01147 * 1000) / 0.05 = 11.47 / 0.05 = 229.4 S cm² mol⁻¹."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Write the chemistry of recharging the lead storage battery, highlighting all reactions at cathode and anode.",
        "answer": "Recharging reactions of lead storage battery",
        "explanation": "During recharging, a direct current is passed from an external source, reversing the cell reactions:\n- At Cathode (Negative electrode during recharge): PbSO4(s) + 2 e⁻ -> Pb(s) + SO4²⁻(aq)\n- At Anode (Positive electrode during recharge): PbSO4(s) + 2 H2O(l) -> PbO2(s) + SO4²⁻(aq) + 4 H⁺(aq) + 2 e⁻\n- Overall Recharging Reaction: 2 PbSO4(s) + 2 H2O(l) -> Pb(s) + PbO2(s) + 2 H2SO4(aq)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Calculate the EMF and ΔrG of the cell: Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s) at 298 K. (Given E°(Mg²⁺/Mg) = -2.37 V, E°(Cu²⁺/Cu) = +0.34 V).",
        "answer": "E_cell = 2.68 V, ΔrG = -517.2 kJ/mol",
        "explanation": "Cell reaction: Mg(s) + Cu²⁺(aq) -> Mg²⁺(aq) + Cu(s) (n = 2).\nE°_cell = E°_cathode - E°_anode = +0.34 - (-2.37) = +2.71 V.\nNernst equation:\nE_cell = E°_cell - (0.0591 / 2) log [ [Mg²⁺] / [Cu²⁺] ]\n= 2.71 - (0.02955) log [ 10⁻³ / 10⁻⁴ ] = 2.71 - 0.02955 * log(10) = 2.71 - 0.02955 ≈ 2.68 V.\nΔrG = - n F E_cell = - 2 * 96500 * 2.68 J = - 517240 J/mol = - 517.24 kJ/mol."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Explain the electrochemical mechanism of rusting of iron.",
        "answer": "Electrochemical mechanism of rusting",
        "explanation": "Rusting occurs via miniature electrochemical cells set up on the iron surface in presence of moisture and dissolved oxygen:\n1. Anodic Site: Fe(s) -> Fe²⁺(aq) + 2 e⁻ (E° = -0.44 V).\n2. Cathodic Site: Electrons travel through metal to another spot where dissolved oxygen is reduced: O2(g) + 4 H⁺(aq) + 4 e⁻ -> 2 H2O(l) (E° = +1.23 V).\n3. Overall Reaction: 2 Fe + O2 + 4 H⁺ -> 2 Fe²⁺ + 2 H2O.\nFe²⁺ ions are further oxidized by atmospheric oxygen to form hydrated ferric oxide (rust: Fe2O3·xH2O)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "The conductivity of 0.001028 mol L⁻¹ acetic acid is 4.95 × 10⁻⁵ S cm⁻¹. Calculate its dissociation constant Ka if Λ°m for acetic acid is 390.5 S cm² mol⁻¹.",
        "answer": "Ka = 1.78 × 10⁻⁵ mol/L",
        "explanation": "Molar conductivity Λm = (κ * 1000) / c = (4.95 × 10⁻⁵ * 1000) / 0.001028 = 0.0495 / 0.001028 ≈ 48.15 S cm² mol⁻¹.\nDegree of dissociation α = Λm / Λ°m = 48.15 / 390.5 ≈ 0.1233.\nDissociation constant Ka = (c * α²) / (1 - α) = [ 0.001028 * (0.1233)² ] / (1 - 0.1233)\n= [ 0.001028 * 0.0152 ] / 0.8767 = (1.563 × 10⁻⁵) / 0.8767 ≈ 1.78 × 10⁻⁵ mol L⁻¹."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Can you store copper sulfate solution in a zinc pot? Justify using standard electrode potentials (E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V).",
        "answer": "No, zinc pot will react and get holes",
        "explanation": "Standard potential for oxidation of zinc is higher than copper: E°(Zn²⁺/Zn) = -0.76 V is more negative than E°(Cu²⁺/Cu) = +0.34 V. Therefore, zinc is more reactive than copper and will spontaneously displace copper from copper sulfate solution: Zn(s) + Cu²⁺(aq) -> Zn²⁺(aq) + Cu(s). The zinc vessel will dissolve, forming holes. Hence, CuSO4 cannot be stored in a zinc pot."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Represent the electrochemical cell in which the reaction is:\n2 Cr(s) + 3 Fe²⁺(0.01 M) -> 2 Cr³⁺(0.01 M) + 3 Fe(s).\n(b) Calculate the EMF of the cell at 298 K. (Given: E°(Cr³⁺/Cr) = -0.74 V, E°(Fe²⁺/Fe) = -0.44 V).\n(c) Calculate the maximum work that can be obtained from this cell.",
        "answer": "Cell representation, Nernst EMF = +0.31 V, and maximum work = 179.5 kJ",
        "explanation": "Marking Scheme:\n(a) Cell Representation (1 mark):\n- Cr(s) | Cr³⁺(0.01 M) || Fe²⁺(0.01 M) | Fe(s).\n\n(b) EMF Calculation (2.5 marks):\n- E°_cell = E°_cathode - E°_anode = E°(Fe²⁺/Fe) - E°(Cr³⁺/Cr) = -0.44 V - (-0.74 V) = +0.30 V.\n- Number of electrons transferred n = 6 (2 Cr lose 6e⁻, 3 Fe²⁺ gain 6e⁻).\n- Reaction quotient Q = [Cr³⁺]² / [Fe²⁺]³ = (0.01)² / (0.01)³ = 1 / 0.01 = 100 = 10².\n- Nernst equation:\n  E_cell = E°_cell - (0.0591 / n) log Q = +0.30 - (0.0591 / 6) log(10²)\n  = 0.30 - (0.0591 / 6) * 2 = 0.30 - 0.0591 / 3 = 0.30 - 0.0197 = +0.2803 V ≈ 0.28 V.\n\n(c) Maximum Work (1.5 marks):\n- W_max = - ΔrG = n F E_cell = 6 * 96500 C * 0.2803 V = 162,293 J ≈ 162.3 kJ."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) State Faraday's first and second laws of electrolysis.\n(b) A steady current of 2.0 A is passed through three electrolytic cells A, B, and C containing solutions of ZnSO4, AgNO3, and CuSO4 connected in series until 1.45 g of silver is deposited at the cathode of cell B. How long did the current flow? What mass of copper and zinc were deposited? (Molar masses: Ag = 108 g/mol, Cu = 63.5 g/mol, Zn = 65.4 g/mol).",
        "answer": "Faraday's laws and numerical calculations: time = 647.7 s, m_Cu = 0.426 g, m_Zn = 0.439 g",
        "explanation": "Marking Scheme:\n(a) Statements of Faraday's Laws (2 marks):\n- First Law: The mass of any substance deposited or liberated at any electrode is directly proportional to the quantity of electricity passed through the electrolyte: w = Z * Q = Z * I * t.\n- Second Law: When the same quantity of electricity is passed through different electrolytes connected in series, the masses of substances liberated are directly proportional to their chemical equivalent weights: w1 / w2 = E1 / E2.\n\n(b) Calculations (3 marks):\n- For Ag: Ag⁺ + e⁻ -> Ag. Equivalent weight E_Ag = 108 / 1 = 108.\n- Time required: w_Ag = (E_Ag * I * t) / F => 1.45 = (108 * 2.0 * t) / 96500\n  => t = (1.45 * 96500) / (216) = 139925 / 216 ≈ 647.8 seconds (10.8 minutes).\n- By Faraday's Second Law: w_Cu / w_Ag = E_Cu / E_Ag.\n  E_Cu = 63.5 / 2 = 31.75.\n  w_Cu = w_Ag * (E_Cu / E_Ag) = 1.45 * (31.75 / 108) ≈ 0.426 g.\n- For Zn: E_Zn = 65.4 / 2 = 32.7.\n  w_Zn = w_Ag * (E_Zn / E_Ag) = 1.45 * (32.7 / 108) ≈ 0.439 g."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain with a neat diagram the construction and working of a lead storage battery.\n(b) Write the chemical reactions occurring at both electrodes during:\n(i) discharging,\n(ii) recharging.",
        "answer": "Complete theory and reactions of lead storage battery",
        "explanation": "Marking Scheme:\n(a) Construction & Working (2 marks):\n- Anode: Spongy lead (Pb) plates.\n- Cathode: Lead grid packed with lead dioxide (PbO2).\n- Electrolyte: 38% aqueous sulfuric acid solution (density ≈ 1.30 g/cm³).\n\n(b) Electrode Reactions (3 marks):\n(i) During Discharging:\n- At Anode: Pb(s) + SO4²⁻(aq) -> PbSO4(s) + 2 e⁻\n- At Cathode: PbO2(s) + SO4²⁻(aq) + 4 H⁺(aq) + 2 e⁻ -> PbSO4(s) + 2 H2O(l)\n- Overall: Pb(s) + PbO2(s) + 2 H2SO4(aq) -> 2 PbSO4(s) + 2 H2O(l) (E_cell ≈ 2.0 V per cell, 12 V for 6 cells).\n(ii) During Recharging (Reverses the discharging reactions):\n- At Cathode: PbSO4(s) + 2 e⁻ -> Pb(s) + SO4²⁻(aq)\n- At Anode: PbSO4(s) + 2 H2O(l) -> PbO2(s) + SO4²⁻(aq) + 4 H⁺(aq) + 2 e⁻\n- Overall: 2 PbSO4(s) + 2 H2O(l) -> Pb(s) + PbO2(s) + 2 H2SO4(aq)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Commercial Electrochemical Cells\nElectrochemical cells are classified into primary and secondary cells. In primary cells, the reaction occurs only once, and after use over a period of time, the battery dies and cannot be reused (e.g. Leclanché dry cell and mercury button cell). In secondary cells, after discharging, the cell can be recharged by passing electric current through it in the opposite direction (e.g. Lead-acid accumulator and nickel-cadmium cell). Another category is fuel cells, which run continuously as long as fuel reactants are supplied.\n(i) Why cannot a primary dry cell be recharged?\n(ii) What is the electrolyte used in a mercury cell?\n(iii) Write the overall cell reaction of a mercury cell.\n(iv) State two major advantages of hydrogen-oxygen fuel cells over conventional thermal power plants.",
        "answer": "Solutions to Case Study on Commercial Batteries",
        "explanation": "(i) In a primary cell, electrode reactions are chemically irreversible; internal components degrade and reaction products cannot be restored to original states by reversing the current.\n(ii) A moist paste of potassium hydroxide (KOH) and zinc oxide (ZnO).\n(iii) Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l).\n(iv) Advantages of fuel cells: (1) Very high thermodynamic efficiency (~70% compared to ~40% for thermal power plants). (2) Eco-friendly and pollution-free (by-product is clean pure water, unlike toxic greenhouse gases emitted by coal plants)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Define conductivity and molar conductivity for an electrolytic solution. How do they vary with concentration?\n(b) The resistance of a conductivity cell containing 0.001 M KCl solution at 298 K is 1500 Ω. What is the cell constant if conductivity of 0.001 M KCl at 298 K is 0.146 × 10⁻³ S cm⁻¹?",
        "answer": "Conductivity definitions, dilution trends, and cell constant calculation G* = 0.219 cm⁻¹",
        "explanation": "(a) Definitions & Trends (3 marks):\n- Conductivity (κ): The conductance of a solution of 1 cm length with cross-sectional area of 1 cm² (conductance of unit volume). It decreases on dilution because the number of ions per unit volume decreases.\n- Molar Conductivity (Λm): The conducting power of all the ions produced by dissolving one mole of an electrolyte in solution: Λm = (κ * 1000) / M. It increases on dilution because the increase in volume V containing 1 mole of electrolyte compensates for the decrease in κ.\n- For strong electrolytes, Λm increases slowly following Debye-Hückel-Onsager equation: Λm = Λ°m - A √c.\n- For weak electrolytes, Λm increases steeply at high dilution due to increased ionization.\n\n(b) Numerical (2 marks):\n- Given: R = 1500 Ω, κ = 0.146 × 10⁻³ S cm⁻¹.\n- Cell constant G* = κ * R = (0.146 × 10⁻³ S cm⁻¹) * (1500 Ω) = 0.219 cm⁻¹ (or 21.9 m⁻¹)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) State the relationship between standard cell potential E°_cell, equilibrium constant Kc, and standard Gibbs energy ΔrG°.\n(b) Calculate the equilibrium constant Kc and ΔrG° for the reaction at 298 K:\nNi(s) + 2 Ag⁺(aq) -> Ni²⁺(aq) + 2 Ag(s).\n(Given: E°(Ag⁺/Ag) = +0.80 V, E°(Ni²⁺/Ni) = -0.25 V).",
        "answer": "E°_cell = +1.05 V, ΔrG° = -202.65 kJ/mol, Kc = 3.6 × 10³⁵",
        "explanation": "(a) Relationships (1.5 marks):\n1. ΔrG° = - n F E°_cell.\n2. ΔrG° = - 2.303 R T log Kc => log Kc = (n F E°_cell) / (2.303 R T) = (n E°_cell) / 0.0591 at 298 K.\n\n(b) Numerical (3.5 marks):\n- E°_cell = E°(Ag⁺/Ag) - E°(Ni²⁺/Ni) = +0.80 - (-0.25) = +1.05 V.\n- n = 2 electrons.\n- ΔrG° = - n F E°_cell = - 2 * 96500 C * 1.05 V = - 202,650 J/mol = - 202.65 kJ/mol.\n- log Kc = (n E°_cell) / 0.0591 = (2 * 1.05) / 0.0591 = 2.10 / 0.0591 ≈ 35.533.\n- Kc = antilog(35.533) = 10^(0.533) × 10³⁵ ≈ 3.41 × 10³⁵."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Predict the products of electrolysis in each of the following cases:\n(i) An aqueous solution of AgNO3 with silver electrodes.\n(ii) An aqueous solution of AgNO3 with platinum electrodes.\n(iii) A dilute solution of H2SO4 with platinum electrodes.\n(iv) An aqueous solution of CuCl2 with platinum electrodes.",
        "answer": "Electrolysis products under four distinct conditions",
        "explanation": "(i) Aqueous AgNO3 with silver electrodes (attackable electrodes):\n- Cathode: Ag⁺(aq) + e⁻ -> Ag(s) (silver deposits).\n- Anode: Ag(s) -> Ag⁺(aq) + e⁻ (silver anode dissolves).\n(ii) Aqueous AgNO3 with platinum electrodes (inert electrodes):\n- Cathode: Ag⁺(aq) + e⁻ -> Ag(s) (silver deposits).\n- Anode: 2 H2O(l) -> O2(g) + 4 H⁺(aq) + 4 e⁻ (oxygen gas is liberated).\n(iii) Dilute H2SO4 with platinum electrodes:\n- Cathode: 2 H⁺(aq) + 2 e⁻ -> H2(g) (hydrogen gas evolves).\n- Anode: 2 H2O(l) -> O2(g) + 4 H⁺(aq) + 4 e⁻ (oxygen gas evolves).\n(iv) Aqueous CuCl2 with platinum electrodes:\n- Cathode: Cu²⁺(aq) + 2 e⁻ -> Cu(s) (copper metal deposits).\n- Anode: 2 Cl⁻(aq) -> Cl2(g) + 2 e⁻ (chlorine gas evolves due to lower overpotential than O2)."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is corrosion? Name two factors that promote corrosion.\n(b) Explain why iron does not rust when coated with zinc, even when the zinc coating is scratched and broken.",
        "answer": "Corrosion definition, factors, and sacrificial protection of zinc",
        "explanation": "(a) Definition & Factors (2 marks):\n- Corrosion: The slow, spontaneous deterioration and eating away of a metal surface by chemical or electrochemical reaction with atmospheric moisture, oxygen, and other gases.\n- Promoting Factors: (1) Presence of moisture and oxygen/air, (2) Presence of dissolved electrolytes (salts/acids in water), (3) Strained or rough metal surfaces.\n\n(b) Sacrificial Protection (3 marks):\n- Standard reduction potentials: E°(Zn²⁺/Zn) = -0.76 V, E°(Fe²⁺/Fe) = -0.44 V.\n- Because zinc has a more negative reduction potential than iron, zinc has a higher tendency to get oxidized (Zn -> Zn²⁺ + 2 e⁻).\n- When zinc-coated iron (galvanized iron) is scratched, an electrochemical cell is formed with zinc and iron exposed to moisture. Zinc acts as the anode and iron acts as the cathode.\n- Electrons released by zinc flow to iron, preventing iron from losing electrons. Thus, zinc oxidizes sacrificially, protecting the underlying iron from rusting completely until the zinc is consumed."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A cell is constructed by dipping a zinc rod in 0.1 M ZnSO4 solution and a lead rod in 0.02 M Pb(NO3)2 solution. Calculate the EMF of the cell at 298 K. (Given: E°(Zn²⁺/Zn) = -0.76 V, E°(Pb²⁺/Pb) = -0.13 V).",
        "answer": "E_cell = +0.609 V",
        "explanation": "Cell reaction: Zn(s) + Pb²⁺(aq) -> Zn²⁺(aq) + Pb(s) (n = 2).\nE°_cell = E°(Pb²⁺/Pb) - E°(Zn²⁺/Zn) = -0.13 V - (-0.76 V) = +0.63 V.\nNernst equation at 298 K:\nE_cell = E°_cell - (0.0591 / 2) * log [ [Zn²⁺] / [Pb²⁺] ]\n= 0.63 - (0.02955) * log [ 0.1 / 0.02 ]\n= 0.63 - 0.02955 * log(5)\nSince log(5) = 0.6990:\nE_cell = 0.63 - 0.02955 * 0.6990 = 0.63 - 0.0207 = +0.6093 V ≈ 0.61 V."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the relationship between cell constant, resistance, and conductivity.\n(b) The molar conductivity of 0.025 mol L⁻¹ methanoic acid (HCOOH) is 46.1 S cm² mol⁻¹. Calculate its degree of dissociation α and dissociation constant Ka. (Given: λ°(H⁺) = 349.6 S cm² mol⁻¹, λ°(HCOO⁻) = 54.6 S cm² mol⁻¹).",
        "answer": "Cell constant relations, α = 0.1138, and Ka = 3.67 × 10⁻⁴ mol/L",
        "explanation": "(a) Relationships (1.5 marks):\n1. Conductance G = 1 / R.\n2. Conductivity κ = G * (l / A) = (1 / R) * G*, where G* = l/A is the cell constant.\n3. Cell constant G* = κ * R.\n\n(b) Numerical (3.5 marks):\n- By Kohlrausch's law for HCOOH:\n  Λ°m(HCOOH) = λ°(H⁺) + λ°(HCOO⁻) = 349.6 + 54.6 = 404.2 S cm² mol⁻¹.\n- Degree of dissociation α = Λm / Λ°m = 46.1 / 404.2 ≈ 0.1140 (or 11.4%).\n- Concentration c = 0.025 mol/L.\n- Dissociation constant Ka = (c * α²) / (1 - α)\n  Ka = [ 0.025 * (0.1140)² ] / (1 - 0.1140) = [ 0.025 * 0.0130 ] / 0.8860\n  = (3.249 × 10⁻⁴) / 0.8860 ≈ 3.67 × 10⁻⁴ mol L⁻¹."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "unit_num": 1,
      "title": "Chemical Kinetics",
      "unit_title": "Physical Chemistry",
      "weightage_unit": "7 Marks (Physical Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The unit of rate constant for a zero order reaction is:",
        "answer": "(a) mol L⁻¹ s⁻¹",
        "explanation": "General unit of rate constant is (mol L⁻¹)^(1 - n) s⁻¹, where n is reaction order. For zero order (n = 0): unit is (mol L⁻¹)^(1 - 0) s⁻¹ = mol L⁻¹ s⁻¹.",
        "options": [
          "(a) mol L⁻¹ s⁻¹",
          "(b) s⁻¹",
          "(c) L mol⁻¹ s⁻¹",
          "(d) mol⁻¹ L s⁻¹"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The half-life of a first order reaction is 69.3 seconds. The rate constant k of the reaction is:",
        "answer": "(a) 0.01 s⁻¹",
        "explanation": "For a first order reaction: t_1/2 = 0.693 / k => k = 0.693 / t_1/2 = 0.693 / 69.3 s = 0.01 s⁻¹ = 10⁻² s⁻¹.",
        "options": [
          "(a) 0.01 s⁻¹",
          "(b) 0.1 s⁻¹",
          "(c) 10 s⁻¹",
          "(d) 0.001 s⁻¹"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "For a reaction A + B -> Products, doubling the concentration of A quadruples the rate, while doubling B has no effect on rate. The rate law is:",
        "answer": "(a) Rate = k [A]²",
        "explanation": "When [A] is doubled, Rate increases 4-fold (2² = 4), meaning order with respect to A is 2. When [B] is doubled, Rate is unchanged (2⁰ = 1), meaning order with respect to B is 0. Rate = k [A]² [B]⁰ = k [A]².",
        "options": [
          "(a) Rate = k [A]²",
          "(b) Rate = k [A] [B]",
          "(c) Rate = k [A]² [B]",
          "(d) Rate = k [A]"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A catalyst increases the rate of a chemical reaction by:",
        "answer": "(a) lowering the activation energy",
        "explanation": "A catalyst provides an alternative reaction pathway with a lower activation energy barrier (Ea), allowing a vastly larger fraction of colliding molecules to possess sufficient kinetic energy to react. It does not alter ΔH, ΔG, or K_eq.",
        "options": [
          "(a) lowering the activation energy",
          "(b) increasing the activation energy",
          "(c) increasing enthalpy change ΔH",
          "(d) changing the equilibrium constant"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following is an example of a pseudo-first-order reaction?",
        "answer": "(a) Acid-catalyzed hydrolysis of ethyl acetate",
        "explanation": "Hydrolysis of ethyl acetate: CH3COOC2H5 + H2O -(H⁺)-> CH3COOH + C2H5OH. Water is present in such huge excess that its concentration remains practically constant throughout. The reaction obeys pseudo-first-order kinetics: Rate = k' [CH3COOC2H5].",
        "options": [
          "(a) Acid-catalyzed hydrolysis of ethyl acetate",
          "(b) Thermal decomposition of HI",
          "(c) Radioactive decay",
          "(d) Decomposition of N2O5"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The slope of the line in the Arrhenius plot of ln k versus 1/T is equal to:",
        "answer": "(a) - Ea / R",
        "explanation": "Arrhenius equation: ln k = ln A - (Ea / R) * (1 / T). Comparing with linear equation y = c + m x, plotting y = ln k against x = 1/T yields slope m = - Ea / R. (For log10 k, slope is - Ea / (2.303 R)).",
        "options": [
          "(a) - Ea / R",
          "(b) + Ea / R",
          "(c) - Ea / (2.303 R)",
          "(d) - R / Ea"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Molecularity of an elementary chemical reaction CANNOT be:",
        "answer": "(a) zero or fractional",
        "explanation": "Molecularity is the number of reactant species colliding simultaneously in an elementary step. Because collision requires actual, whole physical particles, molecularity must be a non-zero positive integer (1, 2, or rarely 3) and can never be zero, fractional, or negative.",
        "options": [
          "(a) zero or fractional",
          "(b) 1",
          "(c) 2",
          "(d) 3"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "For a zero order reaction R -> P, the plot of reactant concentration [R] versus time t gives a straight line with slope equal to:",
        "answer": "(a) - k",
        "explanation": "Integrated rate equation for zero order: [R] = - k t + [R]₀. A plot of [R] on the y-axis against t on the x-axis gives a straight line with slope m = - k and intercept = [R]₀.",
        "options": [
          "(a) - k",
          "(b) + k",
          "(c) - k / 2.303",
          "(d) - k / 2"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "In a first-order reaction, the time taken for 99.9% completion of the reaction is roughly how many times the half-life t_1/2?",
        "answer": "(a) 10 times",
        "explanation": "For 99.9% completion: [R] = [R]₀ - 0.999 [R]₀ = 0.001 [R]₀ = 10⁻³ [R]₀. t_99.9% = (2.303 / k) log([R]₀ / 10⁻³ [R]₀) = (2.303 / k) log(10³) = 3 * (2.303 / k) = 3 * (2.303 / (0.693 / t_1/2)) = 3 * (2.303 / 0.693) t_1/2 ≈ 3 * 3.32 t_1/2 ≈ 10 * t_1/2.",
        "options": [
          "(a) 10 times",
          "(b) 2 times",
          "(c) 4 times",
          "(d) 100 times"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "For the reaction 2 N2O5(g) -> 4 NO2(g) + O2(g), the rate of disappearance of N2O5 is related to the rate of formation of NO2 as:",
        "answer": "(a) - 1/2 d[N2O5]/dt = + 1/4 d[NO2]/dt",
        "explanation": "Rate of reaction is expressed by dividing the rate of change of each species by its stoichiometric coefficient: Rate = - 1/2 d[N2O5]/dt = + 1/4 d[NO2]/dt = + d[O2]/dt.",
        "options": [
          "(a) - 1/2 d[N2O5]/dt = + 1/4 d[NO2]/dt",
          "(b) - d[N2O5]/dt = + d[NO2]/dt",
          "(c) - 2 d[N2O5]/dt = + 4 d[NO2]/dt",
          "(d) - 1/4 d[N2O5]/dt = + 1/2 d[NO2]/dt"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If the concentration is expressed in mol L⁻¹ and time in minutes, the unit of rate of reaction is:",
        "answer": "(a) mol L⁻¹ min⁻¹",
        "explanation": "Rate of reaction = Change in concentration / Time taken = (mol L⁻¹) / min = mol L⁻¹ min⁻¹.",
        "options": [
          "(a) mol L⁻¹ min⁻¹",
          "(b) mol L min⁻¹",
          "(c) mol⁻¹ L min",
          "(d) min⁻¹"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The rate constant of a reaction is k = 3.2 × 10⁻⁴ L mol⁻¹ s⁻¹. The overall order of the reaction is:",
        "answer": "(a) Second order",
        "explanation": "Units of rate constant are (mol L⁻¹)^(1 - n) s⁻¹ = L^(n - 1) mol^(1 - n) s⁻¹. Here unit is L mol⁻¹ s⁻¹, which matches n - 1 = 1 => n = 2 (Second order).",
        "options": [
          "(a) Second order",
          "(b) First order",
          "(c) Zero order",
          "(d) Third order"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "For a reaction, the temperature coefficient is 2. By what factor will the reaction rate increase if temperature is raised from 20 °C to 50 °C?",
        "answer": "(a) 8 times",
        "explanation": "ΔT = 50 - 20 = 30 °C. The number of 10 °C increments is n = 30 / 10 = 3. Increase factor = (Temperature coefficient)^n = 2³ = 8 times.",
        "options": [
          "(a) 8 times",
          "(b) 6 times",
          "(c) 4 times",
          "(d) 16 times"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A first order reaction is 50% completed in 20 minutes. The time required for 75% completion of the reaction is:",
        "answer": "(a) 40 minutes",
        "explanation": "75% completion means 25% remains: [R] = [R]₀ / 4 = [R]₀ / 2². This represents 2 half-lives: t_75% = 2 * t_1/2 = 2 * 20 min = 40 minutes.",
        "options": [
          "(a) 40 minutes",
          "(b) 60 minutes",
          "(c) 30 minutes",
          "(d) 80 minutes"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "For an endothermic reaction where ΔH is positive, the minimum value of activation energy (Ea) must be:",
        "answer": "(a) greater than ΔH",
        "explanation": "For an endothermic reaction: ΔH = Ea(forward) - Ea(backward). Because the reverse activation energy Ea(backward) must be greater than zero, Ea(forward) = ΔH + Ea(backward) > ΔH.",
        "options": [
          "(a) greater than ΔH",
          "(b) less than ΔH",
          "(c) equal to zero",
          "(d) equal to ΔH / 2"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In the collision theory of chemical reactions, the steric factor P accounts for:",
        "answer": "(a) proper spatial orientation of colliding molecules",
        "explanation": "According to modified collision theory (Rate = P * Z_AB * exp(-Ea/RT)), the steric factor (probability factor P) accounts for the fraction of collisions in which reacting molecules collide with the proper spatial geometric orientation to facilitate bond breaking and formation.",
        "options": [
          "(a) proper spatial orientation of colliding molecules",
          "(b) activation energy",
          "(c) temperature of the system",
          "(d) collision frequency alone"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If the rate of a reaction is independent of the concentration of all reactants, the reaction is:",
        "answer": "(a) zero order",
        "explanation": "By definition, a zero order reaction has Rate = k [A]⁰ = k, meaning the reaction rate is completely independent of reactant concentration.",
        "options": [
          "(a) zero order",
          "(b) first order",
          "(c) second order",
          "(d) fractional order"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The decomposition of phosphine (PH3) on tungsten at low pressure is a first order reaction, but at high pressure it becomes zero order because:",
        "answer": "(a) surface of tungsten becomes fully saturated at high pressure",
        "explanation": "At high pressure, all active catalytic sites on the tungsten metal surface become completely occupied (saturated) with adsorbed PH3 molecules. Further increase in gas pressure cannot increase the surface concentration, causing the rate to become independent of pressure (zero order).",
        "options": [
          "(a) surface of tungsten becomes fully saturated at high pressure",
          "(b) rate constant decreases",
          "(c) tungsten melts",
          "(d) PH3 dissociates completely"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The rate constant k for a reaction is found to double when temperature is increased from 300 K to 310 K. The activation energy Ea of the reaction is approximately (R = 8.314 J K⁻¹ mol⁻¹):",
        "answer": "(a) 53.6 kJ/mol",
        "explanation": "log(k2/k1) = (Ea / (2.303 R)) * [ (T2 - T1) / (T1 * T2) ].\nlog(2) = 0.3010 = [ Ea / (2.303 * 8.314) ] * [ 10 / (300 * 310) ]\n0.3010 = [ Ea / 19.147 ] * [ 10 / 93000 ] = [ Ea / 19.147 ] * (1.075 × 10⁻⁴)\n=> Ea = (0.3010 * 19.147) / (1.075 × 10⁻⁴) ≈ 5.763 / (1.075 × 10⁻⁴) ≈ 53,600 J/mol = 53.6 kJ/mol.",
        "options": [
          "(a) 53.6 kJ/mol",
          "(b) 100 kJ/mol",
          "(c) 25.2 kJ/mol",
          "(d) 12.5 kJ/mol"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "For a first order reaction, a plot of log [R] versus time t gives a straight line with slope equal to:",
        "answer": "(a) - k / 2.303",
        "explanation": "First order equation: log [R] = - (k / 2.303) t + log [R]₀. Plotting log [R] on y-axis against t on x-axis gives a straight line with slope m = - k / 2.303.",
        "options": [
          "(a) - k / 2.303",
          "(b) - k",
          "(c) + k / 2.303",
          "(d) 2.303 / k"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "A reaction has activation energy Ea = 0. Its rate constant k:",
        "answer": "(a) is independent of temperature and equals the frequency factor A",
        "explanation": "From Arrhenius equation: k = A exp(-Ea / RT). If Ea = 0, exp(0) = 1, so k = A at all temperatures (the reaction rate is completely independent of temperature, meaning every collision with proper orientation leads to reaction).",
        "options": [
          "(a) is independent of temperature and equals the frequency factor A",
          "(b) becomes infinite",
          "(c) becomes zero",
          "(d) increases exponentially with temperature"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The rate law for a reaction A + 2 B -> C is Rate = k [A]^(1/2) [B]². The overall order of reaction is:",
        "answer": "(a) 2.5 (or 5/2)",
        "explanation": "Overall order is the sum of exponents of concentration terms in the rate law: Order = 1/2 + 2 = 2.5 (or 5/2).",
        "options": [
          "(a) 2.5 (or 5/2)",
          "(b) 3",
          "(c) 1.5",
          "(d) 2"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following is NOT affected by the presence of a catalyst in a reversible reaction?",
        "answer": "(a) Equilibrium constant K_eq and enthalpy of reaction ΔH",
        "explanation": "A catalyst speeds up both forward and reverse reactions equally by lowering activation energy by the same amount. It has zero effect on standard free energy change ΔG°, enthalpy change ΔH, and the equilibrium constant K_eq.",
        "options": [
          "(a) Equilibrium constant K_eq and enthalpy of reaction ΔH",
          "(b) Activation energy",
          "(c) Rate of forward reaction",
          "(d) Rate of backward reaction"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The half-life period t_1/2 for a zero order reaction is proportional to:",
        "answer": "(a) [R]₀",
        "explanation": "For a zero order reaction: t_1/2 = [R]₀ / (2k). Therefore, t_1/2 is directly proportional to initial concentration [R]₀.",
        "options": [
          "(a) [R]₀",
          "(b) 1 / [R]₀",
          "(c) [R]₀²",
          "(d) independent of [R]₀"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "For a gaseous reaction: 2 A(g) -> B(g) + C(g), the rate law is Rate = k pA². If total pressure increases, the rate will:",
        "answer": "(a) increase",
        "explanation": "Increasing total pressure compresses the gas mixture, increasing the partial pressure pA of reactant A. Since Rate ∝ pA², the rate of reaction increases proportionally to the square of partial pressure.",
        "options": [
          "(a) increase",
          "(b) decrease",
          "(c) remain constant",
          "(d) become zero"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Order of a reaction can be zero or fractional, but molecularity is always a positive integer.\nReason (R): Order is an experimentally determined quantity, whereas molecularity is theoretical and represents the number of molecules colliding simultaneously in an elementary step.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Because collision involves whole discrete particles, molecularity cannot be fractional or zero, whereas order is an empirical power fit.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The rate of reaction generally doubles for every 10 °C rise in temperature.\nReason (R): An increase in temperature increases the total collision frequency by roughly 100%.",
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion is true. Reason is false: A 10 °C rise increases collision frequency by only 1-2% (Z ∝ √T). The doubling of rate is caused by a dramatic increase (often 100-200%) in the fraction of molecules with kinetic energy exceeding activation energy (Boltzmann factor exp(-Ea/RT)).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): For a first order reaction, the half-life period t_1/2 is completely independent of initial reactant concentration.\nReason (R): In a first order reaction, t_1/2 = 0.693 / k, which contains no concentration terms.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Hydrolysis of ethyl acetate in presence of acid is a pseudo-first-order reaction.\nReason (R): Water is present in such large excess that its concentration remains essentially constant during the course of the reaction.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why a bimolecular reaction exhibits first-order kinetics.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): A catalyst increases the speed of a reaction without changing the position of equilibrium.\nReason (R): A catalyst lowers the activation energy of both the forward and reverse reactions by an equal amount.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Because forward and backward rates increase by the exact same ratio, equilibrium is reached faster without shifting equilibrium concentrations.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Distinguish between order and molecularity of a chemical reaction (any two points).",
        "answer": "Differences between order and molecularity",
        "explanation": "1. Definition: Order is the sum of powers of concentration terms of reactants in the experimentally determined rate law. Molecularity is the total number of reacting species colliding simultaneously in an elementary step.\n2. Nature of Values: Order can be zero, fractional, integer, or negative, and is determined solely by experiment. Molecularity is always a non-zero positive integer (1, 2, or 3) and cannot be zero or fractional.\n3. Applicability: Order applies to both elementary and complex reactions. Molecularity has meaning only for elementary steps."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Derive the integrated rate equation for a zero-order reaction: R -> Products.",
        "answer": "Derivation of zero-order integrated rate equation",
        "explanation": "For zero-order reaction: Rate = - d[R]/dt = k [R]⁰ = k.\n=> d[R] = - k dt.\nIntegrating both sides: ∫ d[R] = - k ∫ dt => [R] = - k t + I, where I is integration constant.\nAt t = 0: [R] = [R]₀ => I = [R]₀.\nSubstituting I: [R] = - k t + [R]₀.\nRearranging for rate constant: k = ( [R]₀ - [R] ) / t."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "A first order reaction has a rate constant k = 1.15 × 10⁻³ s⁻¹. How long will 5 g of this reactant take to reduce to 3 g?",
        "answer": "Time required t = 444 seconds",
        "explanation": "First order equation: t = (2.303 / k) * log([R]₀ / [R]).\nGiven: k = 1.15 × 10⁻³ s⁻¹, [R]₀ = 5 g, [R] = 3 g.\n[R]₀ / [R] = 5 / 3 = 1.667.\nlog(1.667) = log 5 - log 3 = 0.6990 - 0.4771 = 0.2219.\nt = [ 2.303 / (1.15 × 10⁻³) ] * 0.2219 = (2002.6) * 0.2219 ≈ 444.4 seconds (or ~7.4 minutes)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Show that for a first order reaction, the time required for 99% completion is twice the time required for 90% completion.",
        "answer": "Proof of t_99% = 2 * t_90%",
        "explanation": "For first order reaction: t = (2.303 / k) * log([R]₀ / [R]).\n1. For 90% completion: [R] = [R]₀ - 0.90 [R]₀ = 0.10 [R]₀ = [R]₀ / 10.\nt_90% = (2.303 / k) * log(10) = 2.303 / k ... (1)\n2. For 99% completion: [R] = [R]₀ - 0.99 [R]₀ = 0.01 [R]₀ = [R]₀ / 100.\nt_99% = (2.303 / k) * log(100) = (2.303 / k) * 2 = 2 * (2.303 / k) ... (2)\nDividing (2) by (1): t_99% / t_90% = [ 2 * (2.303 / k) ] / [ 2.303 / k ] = 2.\nTherefore, t_99% = 2 * t_90%. (Proven)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "The rate of a reaction triples when the temperature changes from 20 °C to 50 °C. Calculate the energy of activation for this reaction. (R = 8.314 J K⁻¹ mol⁻¹, log 3 = 0.4771).",
        "answer": "Activation energy Ea = 28.8 kJ/mol",
        "explanation": "Given: T1 = 20 + 273 = 293 K, T2 = 50 + 273 = 323 K, k2 / k1 = 3.\nArrhenius equation:\nlog(k2 / k1) = [ Ea / (2.303 * R) ] * [ (T2 - T1) / (T1 * T2) ]\nlog(3) = [ Ea / (2.303 * 8.314) ] * [ (323 - 293) / (293 * 323) ]\n0.4771 = [ Ea / 19.147 ] * [ 30 / 94639 ] = [ Ea / 19.147 ] * (3.170 × 10⁻⁴)\nEa = (0.4771 * 19.147) / (3.170 × 10⁻⁴) = 9.135 / (3.170 × 10⁻⁴) ≈ 28,817 J/mol ≈ 28.82 kJ/mol."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Define: (i) Pseudo-first-order reaction, (ii) Activation energy.",
        "answer": "Definitions of pseudo-first-order and activation energy",
        "explanation": "1. Pseudo-First-Order Reaction: A higher-order reaction that behaves kinetics-wise as a first-order reaction because one of the reacting reactants is present in large excess compared to the other.\n2. Activation Energy (Ea): The minimum extra energy that reacting molecules must absorb above their ground state average kinetic energy to reach the transition state (threshold energy) and form products."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "The following results were obtained during kinetic studies of the reaction: 2 A + B -> C + D:\nExp 1: [A] = 0.1 M, [B] = 0.1 M, Initial Rate = 6.0 × 10⁻³ M/min\nExp 2: [A] = 0.3 M, [B] = 0.2 M, Initial Rate = 7.2 × 10⁻² M/min\nExp 3: [A] = 0.3 M, [B] = 0.4 M, Initial Rate = 2.88 × 10⁻¹ M/min\nExp 4: [A] = 0.4 M, [B] = 0.1 M, Initial Rate = 2.4 × 10⁻² M/min\nDetermine the rate law and rate constant for the reaction.",
        "answer": "Rate = k [A] [B]², k = 6.0 L² mol⁻² min⁻¹",
        "explanation": "Let Rate = k [A]^x [B]^y.\nComparing Exp 1 and Exp 4 ([B] is constant at 0.1 M):\nRate4 / Rate1 = (2.4 × 10⁻²) / (6.0 × 10⁻³) = 4.\n[A]4 / [A]1 = 0.4 / 0.1 = 4.\n4 = 4^x => x = 1 (First order in A).\nComparing Exp 2 and Exp 3 ([A] is constant at 0.3 M):\nRate3 / Rate2 = (2.88 × 10⁻¹) / (7.2 × 10⁻²) = 4.\n[B]3 / [B]2 = 0.4 / 0.2 = 2.\n4 = 2^y => 2² = 2^y => y = 2 (Second order in B).\nRate Law: Rate = k [A] [B]².\nOverall order = 1 + 2 = 3.\nCalculating k using Exp 1:\n6.0 × 10⁻³ = k (0.1) (0.1)² = k * 10⁻³ => k = 6.0 L² mol⁻² min⁻¹."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is the effect of adding a catalyst on the activation energy and enthalpy of reaction (ΔH)? Draw an energy profile diagram showing this effect.",
        "answer": "Catalyst effect and energy profile diagram",
        "explanation": "1. Effect: A catalyst lowers the activation energy barrier for both the forward and reverse reactions by providing an alternate reaction pathway. It has zero effect on the enthalpy of reaction ΔH (ΔH = H_products - H_reactants remains strictly unchanged).\n2. Diagram: Potential energy on y-axis vs reaction coordinate on x-axis. Shows a high energy hump for uncatalyzed reaction (Ea) and a significantly lower energy hump for catalyzed reaction (Ea'), with initial reactant and final product energy levels identical in both."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "A first order reaction takes 40 minutes for 30% decomposition. Calculate its half-life period t_1/2. (log 10 = 1, log 7 = 0.8451).",
        "answer": "Half-life t_1/2 = 77.7 minutes",
        "explanation": "For 30% decomposition: [R]₀ = 100, [R] = 100 - 30 = 70, t = 40 min.\nRate constant k = (2.303 / t) * log([R]₀ / [R])\nk = (2.303 / 40) * log(100 / 70) = (2.303 / 40) * log(10 / 7)\nlog(10/7) = log 10 - log 7 = 1.0000 - 0.8451 = 0.1549.\nk = (2.303 / 40) * 0.1549 = 0.3567 / 40 ≈ 8.918 × 10⁻³ min⁻¹.\nHalf-life period: t_1/2 = 0.693 / k = 0.693 / (8.918 × 10⁻³) ≈ 77.7 minutes."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "State the two essential criteria required for effective collisions according to collision theory.",
        "answer": "Two criteria for effective collisions",
        "explanation": "1. Energy Criterion: The colliding reactant molecules must possess a minimum amount of kinetic energy, called threshold energy (E_threshold = E_ground + Ea), to overcome the activation energy barrier and break existing chemical bonds.\n2. Orientation Criterion: The colliding molecules must collide with proper spatial orientation so that the reacting atoms face each other to facilitate breaking of old bonds and formation of new bonds."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Derive the integrated rate equation for a first order reaction: R -> Products.\n(b) Show that the half-life period of a first order reaction is independent of initial concentration.\n(c) A first order reaction is 20% complete in 10 minutes. Calculate the time taken for the reaction to go to 75% completion. (log 10 = 1, log 8 = 0.9030, log 2 = 0.3010).",
        "answer": "First-order integrated rate derivation, half-life proof, and time calculation = 62.18 min",
        "explanation": "Marking Scheme:\n(a) Integrated Rate Equation Derivation (2 marks):\n- Rate = - d[R]/dt = k [R] => d[R] / [R] = - k dt.\n- Integrating: ln [R] = - k t + I.\n- At t = 0: [R] = [R]₀ => I = ln [R]₀.\n- ln [R] = - k t + ln [R]₀ => k t = ln([R]₀ / [R]).\n- Converting to common logarithm: k = (2.303 / t) * log([R]₀ / [R]).\n\n(b) Half-Life Proof (1 mark):\n- At t = t_1/2: [R] = [R]₀ / 2.\n- k = (2.303 / t_1/2) * log([R]₀ / ([R]₀/2)) = (2.303 / t_1/2) * log(2) = (2.303 * 0.3010) / t_1/2 = 0.693 / t_1/2.\n- t_1/2 = 0.693 / k. Because the equation contains no [R]₀ term, t_1/2 is independent of initial concentration.\n\n(c) Numerical (2 marks):\n- For 20% completion: [R]₀ = 100, [R] = 80, t = 10 min.\n  k = (2.303 / 10) * log(100 / 80) = (2.303 / 10) * log(10 / 8) = 0.2303 * (1 - 0.9030) = 0.2303 * 0.0970 ≈ 0.02234 min⁻¹.\n- For 75% completion: [R]₀ = 100, [R] = 25.\n  t = (2.303 / k) * log(100 / 25) = (2.303 / 0.02234) * log(4) = (2.303 / 0.02234) * 2(0.3010)\n  = (2.303 * 0.6020) / 0.02234 = 1.3864 / 0.02234 ≈ 62.06 minutes."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) State Arrhenius equation. Express it in logarithmic form relating rate constants k1 and k2 at two different temperatures T1 and T2.\n(b) The rate constants of a reaction at 500 K and 700 K are 0.02 s⁻¹ and 0.07 s⁻¹ respectively. Calculate the values of Ea and A. (R = 8.314 J K⁻¹ mol⁻¹, log 3.5 = 0.5441).",
        "answer": "Arrhenius equation, Ea = 18.23 kJ/mol, A = 1.61 s⁻¹",
        "explanation": "Marking Scheme:\n(a) Arrhenius Equation Formulation (2 marks):\n- k = A * exp(- Ea / RT), where A is frequency factor, Ea is activation energy, R is gas constant, T is absolute temperature.\n- Taking log10: log k = log A - Ea / (2.303 R T).\n- At T1 and T2: log(k2 / k1) = [ Ea / (2.303 R) ] * [ (T2 - T1) / (T1 * T2) ].\n\n(b) Numerical (3 marks):\n- T1 = 500 K, k1 = 0.02 s⁻¹; T2 = 700 K, k2 = 0.07 s⁻¹.\n- k2 / k1 = 0.07 / 0.02 = 3.5. log(3.5) = 0.5441.\n- 0.5441 = [ Ea / (2.303 * 8.314) ] * [ (700 - 500) / (500 * 700) ]\n  0.5441 = [ Ea / 19.147 ] * [ 200 / 350000 ] = [ Ea / 19.147 ] * (5.714 × 10⁻⁴)\n  => Ea = (0.5441 * 19.147) / (5.714 × 10⁻⁴) ≈ 10.418 / (5.714 × 10⁻⁴) ≈ 18,232 J/mol = 18.23 kJ/mol.\n- Calculation of A at T1 = 500 K:\n  log k1 = log A - Ea / (2.303 R T1)\n  log(0.02) = - 1.6990 = log A - 18232 / (19.147 * 500) = log A - 18232 / 9573.5 = log A - 1.9044\n  => log A = - 1.6990 + 1.9044 = 0.2054\n  => A = antilog(0.2054) ≈ 1.605 s⁻¹ ≈ 1.61 s⁻¹."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) For the reaction: A + B -> Products, write the differential rate equation.\n(b) The following data were obtained for the reaction: 2 NO(g) + Cl2(g) -> 2 NOCl(g) at 298 K:\nExp 1: [NO] = 0.15 M, [Cl2] = 0.15 M, Rate = 0.60 M/min\nExp 2: [NO] = 0.15 M, [Cl2] = 0.30 M, Rate = 1.20 M/min\nExp 3: [NO] = 0.30 M, [Cl2] = 0.15 M, Rate = 2.40 M/min\nExp 4: [NO] = 0.25 M, [Cl2] = 0.25 M, Rate = ?\nFind:\n(i) Order with respect to NO and Cl2,\n(ii) Overall order of the reaction,\n(iii) Rate constant k with units,\n(iv) Rate of reaction in Experiment 4.",
        "answer": "(i) Order in NO = 2, in Cl2 = 1; (ii) Overall = 3; (iii) k = 177.8 L² mol⁻² min⁻¹; (iv) Rate4 = 2.78 M/min",
        "explanation": "Marking Scheme:\n(a) Differential rate equation: Rate = - 1/2 d[NO]/dt = - d[Cl2]/dt = + 1/2 d[NOCl]/dt.\n\n(b) Calculations:\nLet Rate = k [NO]^x [Cl2]^y.\n(i) From Exp 1 and 2 ([NO] constant at 0.15 M):\nRate2 / Rate1 = 1.20 / 0.60 = 2. [Cl2]2 / [Cl2]1 = 0.30 / 0.15 = 2.\n2 = 2^y => y = 1 (First order with respect to Cl2).\nFrom Exp 1 and 3 ([Cl2] constant at 0.15 M):\nRate3 / Rate1 = 2.40 / 0.60 = 4. [NO]3 / [NO]1 = 0.30 / 0.15 = 2.\n4 = 2^x => 2² = 2^x => x = 2 (Second order with respect to NO).\n\n(ii) Overall order = x + y = 2 + 1 = 3 (Third order).\n\n(iii) Rate Law: Rate = k [NO]² [Cl2].\nUsing Exp 1:\n0.60 M/min = k * (0.15 M)² * (0.15 M) = k * (0.0225) * (0.15) = k * (3.375 × 10⁻³ M³)\nk = 0.60 / (3.375 × 10⁻³) ≈ 177.78 L² mol⁻² min⁻¹.\n\n(iv) In Exp 4 ([NO] = 0.25 M, [Cl2] = 0.25 M):\nRate4 = 177.78 * (0.25)² * (0.25) = 177.78 * (0.015625) ≈ 2.778 M/min."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Chemical Kinetics in Food Preservation\nChemical reactions responsible for food spoilage—such as lipid oxidation, microbial enzymatic reactions, and enzymatic browning—obey the fundamental laws of chemical kinetics. The rates of these reactions depend exponentially on temperature according to the Arrhenius relation k = A exp(-Ea/RT). Lowering storage temperature reduces the fraction of molecules with thermal energy equal to or greater than activation energy, drastically slowing down spoilage kinetics. Thus, refrigeration (4 °C) and deep freezing (-18 °C) extend the shelf life of perishable food items.\n(i) Why does food spoil much faster in summer than in winter?\n(ii) State the mathematical form of the Arrhenius equation and identify each parameter.\n(iii) If a food spoilage reaction has an activation energy of 50 kJ/mol, by what factor will its rate constant change when temperature is decreased from 25 °C (298 K) to 5 °C (278 K)? (R = 8.314 J K⁻¹ mol⁻¹).\n(iv) What is the effect of food preservatives (antioxidants) from a kinetic perspective?",
        "answer": "Solutions to Case Study on Food Preservation Kinetics",
        "explanation": "(i) Summer temperatures are higher (35-40 °C vs 15-20 °C). By Arrhenius equation, reaction rate increases exponentially with temperature because a much larger fraction of reactant molecules possess energy exceeding the activation energy threshold.\n(ii) k = A exp(-Ea / RT), where k = rate constant, A = pre-exponential frequency factor, Ea = activation energy, R = universal gas constant, T = absolute temperature in Kelvin.\n(iii) log(k_25 / k_5) = [ Ea / (2.303 R) ] * [ (298 - 278) / (298 * 278) ]\n= [ 50000 / (19.147) ] * [ 20 / 82844 ] = 2611.37 * (2.414 × 10⁻⁴) ≈ 0.6304.\nk_25 / k_5 = antilog(0.6304) ≈ 4.27.\nThe rate constant at 5 °C is reduced by a factor of ~4.3 (spoilage reaction is more than 4 times slower).\n(iv) Preservatives act as inhibitors or free radical scavengers that interfere with chain propagation steps, effectively creating alternative pathways with higher activation energy barriers or blocking active enzyme sites, drastically diminishing spoilage rates."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) What is the physical significance of activation energy?\n(b) The decomposition of A into products has a rate constant of 4.5 × 10³ s⁻¹ at 10 °C and energy of activation 60 kJ/mol. At what temperature will its rate constant be 1.5 × 10⁴ s⁻¹? (R = 8.314 J K⁻¹ mol⁻¹, log 3.33 = 0.5224).",
        "answer": "Significance of activation energy and temperature calculation T2 = 297 K = 24 °C",
        "explanation": "(a) Physical Significance (1.5 marks):\n- Activation energy (Ea) represents the energy barrier that reactants must overcome to convert into products. It determines the height of the transition state potential energy peak.\n- Reactions with high Ea have very few molecules with sufficient energy to react, resulting in slow reaction rates. Reactions with low Ea have many molecules exceeding the barrier and proceed rapidly.\n\n(b) Numerical (3.5 marks):\n- T1 = 10 + 273 = 283 K, k1 = 4.5 × 10³ s⁻¹, k2 = 1.5 × 10⁴ s⁻¹, Ea = 60,000 J/mol.\n- k2 / k1 = (1.5 × 10⁴) / (4.5 × 10³) = 15 / 4.5 = 3.333. log(3.333) = 0.5228.\n- log(k2 / k1) = [ Ea / (2.303 R) ] * [ (T2 - T1) / (T1 * T2) ]\n- 0.5228 = [ 60000 / (2.303 * 8.314) ] * [ (T2 - 283) / (283 T2) ]\n  0.5228 = [ 60000 / 19.147 ] * [ (T2 - 283) / (283 T2) ] = 3133.65 * [ (T2 - 283) / (283 T2) ]\n- (T2 - 283) / (283 T2) = 0.5228 / 3133.65 ≈ 1.668 × 10⁻⁴\n- T2 - 283 = (1.668 × 10⁻⁴) * 283 T2 = 0.0472 T2\n- T2 - 0.0472 T2 = 283 => 0.9528 T2 = 283\n- T2 = 283 / 0.9528 ≈ 297.0 K.\n- In Celsius: T2 = 297 - 273 = 24 °C."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Explain pseudo-first-order reaction with a suitable chemical reaction.\n(b) A first order reaction takes 30 minutes for 50% completion. Calculate the time required for 90% completion of this reaction. (log 10 = 1, log 2 = 0.3010).",
        "answer": "Pseudo-first-order explanation and time calculation t = 99.7 min",
        "explanation": "(a) Pseudo-First-Order Reaction (2 marks):\n- A reaction which is bimolecular (molecularity = 2) but obeys first-order kinetics because one of the reactants is present in large excess.\n- Example: Inversion of cane sugar (sucrose):\n  C12H22O11 + H2O -(H⁺)-> C6H12O6(glucose) + C6H12O6(fructose).\n- Because water is the solvent, its concentration (~55.5 M) remains virtually unchanged throughout the reaction. Rate = k [C12H22O11] [H2O] = k' [C12H22O11], where k' = k [H2O].\n\n(b) Numerical (3 marks):\n- t_1/2 = 30 min => k = 0.693 / 30 = 0.0231 min⁻¹.\n- For 90% completion: [R]₀ = 100, [R] = 100 - 90 = 10.\n- t = (2.303 / k) * log([R]₀ / [R]) = (2.303 / 0.0231) * log(100 / 10) = (2.303 / 0.0231) * log(10)\n  = 2.303 / 0.0231 ≈ 99.7 minutes."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "For a chemical reaction: R -> P, the variation in the concentration ln [R] vs time t plot is given as a straight line with slope -0.05 s⁻¹ and intercept 0.693.\n(i) What is the order of the reaction?\n(ii) What is the unit of rate constant?\n(iii) What is the half-life of the reaction?",
        "answer": "(i) First order, (ii) s⁻¹, (iii) t_1/2 = 13.86 s",
        "explanation": "(i) For a first order reaction, integrated equation is: ln [R] = - k t + ln [R]₀. Plotting ln [R] against t gives a straight line. Hence, the reaction is of First Order.\n(ii) For a first order reaction, the unit of rate constant k is s⁻¹ (or time⁻¹).\n(iii) From equation, slope = - k => - k = - 0.05 s⁻¹ => k = 0.05 s⁻¹.\nHalf-life period: t_1/2 = 0.693 / k = 0.693 / 0.05 = 13.86 seconds."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is the difference between average rate and instantaneous rate of a reaction? How are they determined graphically?\n(b) The decomposition of NH3 on platinum surface is zero order reaction. If k = 2.5 × 10⁻⁴ mol L⁻¹ s⁻¹, what are the rates of production of N2 and H2?",
        "answer": "Rate distinctions, graphical determination, and rates of production",
        "explanation": "(a) Distinctions & Graphical Determination (2.5 marks):\n1. Average Rate: The change in concentration of a reactant or product divided by the finite time interval Δt taken: r_avg = - Δ[R] / Δt = + Δ[P] / Δt. Determined graphically by finding the slope of the chord (secant line) connecting two points at t1 and t2 on the concentration vs time curve.\n2. Instantaneous Rate: The rate of reaction at a specific instant of time: r_inst = lim(Δt->0) - Δ[R]/Δt = - d[R]/dt. Determined graphically by drawing a tangent to the concentration vs time curve at that specific time t and finding the negative slope of that tangent line.\n\n(b) Production Rates (2.5 marks):\nReaction: 2 NH3 -(Pt)-> N2 + 3 H2.\nRate of reaction = - 1/2 d[NH3]/dt = d[N2]/dt = 1/3 d[H2]/dt.\nFor zero-order reaction: Rate of reaction = k = 2.5 × 10⁻⁴ mol L⁻¹ s⁻¹.\n1. Rate of production of N2: d[N2]/dt = Rate = 2.5 × 10⁻⁴ mol L⁻¹ s⁻¹.\n2. Rate of production of H2: d[H2]/dt = 3 * Rate = 3 * (2.5 × 10⁻⁴) = 7.5 × 10⁻⁴ mol L⁻¹ s⁻¹."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Show that in a first order reaction, time required for completion of 99.9% is 10 times that required for completion of 50% of the reaction.",
        "answer": "Proof that t_99.9% = 10 * t_50%",
        "explanation": "For first order reaction: t = (2.303 / k) * log([R]₀ / [R]).\n1. For 50% completion (half-life):\n[R] = [R]₀ / 2 => t_50% = (2.303 / k) * log(2) = (2.303 * 0.3010) / k = 0.693 / k ... (1)\n2. For 99.9% completion:\n[R] = [R]₀ - 0.999 [R]₀ = 0.001 [R]₀ = 10⁻³ [R]₀.\nt_99.9% = (2.303 / k) * log([R]₀ / (10⁻³ [R]₀)) = (2.303 / k) * log(10³) = (2.303 * 3) / k = 6.909 / k ... (2)\n3. Ratio of (2) to (1):\nt_99.9% / t_50% = (6.909 / k) / (0.693 / k) = 6.909 / 0.693 ≈ 9.969 ≈ 10.\nTherefore: t_99.9% = 10 * t_50%. (Proven)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the postulates of collision theory of chemical reactions.\n(b) Why do all molecular collisions not lead to product formation?\n(c) The activation energy for the reaction 2 HI(g) -> H2(g) + I2(g) is 209.5 kJ/mol at 581 K. Calculate the fraction of molecules having energy equal to or greater than activation energy.",
        "answer": "Collision theory postulates, collision barriers, and fraction calculation = 1.47 × 10⁻¹⁹",
        "explanation": "(a) Postulates of Collision Theory (2 marks):\n1. Reactant molecules are assumed to be hard, impenetrable spheres, and chemical reaction occurs only when these spheres collide with each other.\n2. The number of collisions taking place per second per unit volume of reaction mixture is called collision frequency (Z).\n3. Collisions are effective only if colliding molecules possess a minimum threshold energy and collide with proper spatial orientation.\n\n(b) Why all collisions do not result in reaction (1.5 marks):\n- Energy Barrier: Most molecules at room temperature have kinetic energy much lower than the activation energy (E < Ea). Collisions between sub-threshold molecules are completely elastic and bounce apart without reaction.\n- Orientation Barrier: Even energetic collisions fail to react if molecules collide with improper orientation (atoms that need to bond do not contact each other).\n\n(c) Calculation of Fraction of Molecules (1.5 marks):\n- Fraction x = exp(- Ea / RT) => log x = - Ea / (2.303 R T).\n- Given: Ea = 209.5 kJ/mol = 209,500 J/mol, T = 581 K, R = 8.314 J K⁻¹ mol⁻¹.\n- log x = - 209500 / (2.303 * 8.314 * 581) = - 209500 / (11124.7) = - 18.832.\n- x = antilog(-18.832) = antilog(-19 + 0.168) = 10^(0.168) × 10⁻¹⁹ ≈ 1.47 × 10⁻¹⁹.\n(Only about 1 in every 10¹⁹ collisions has sufficient energy!)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "unit_num": 2,
      "title": "d- and f-Block Elements",
      "unit_title": "Inorganic Chemistry",
      "weightage_unit": "7 Marks (Inorganic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following 3d transition metal ions is diamagnetic in nature?",
        "answer": "(a) Sc³⁺",
        "explanation": "Sc (Z = 21) has ground state configuration [Ar] 3d¹ 4s². Upon losing 3 electrons to form Sc³⁺, its configuration becomes [Ar] 3d⁰. With zero unpaired electrons (n = 0), Sc³⁺ is completely diamagnetic.",
        "options": [
          "(a) Sc³⁺",
          "(b) Ti³⁺",
          "(c) V³⁺",
          "(d) Cr³⁺"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The spin-only magnetic moment of Fe²⁺ ion (Z = 26) is approximately:",
        "answer": "(a) 4.90 BM",
        "explanation": "Fe²⁺ (Z = 26): Configuration is [Ar] 3d⁶. Number of unpaired electrons n = 4. Spin-only magnetic moment μ = √(n(n+2)) = √(4(4+2)) = √24 ≈ 4.90 BM.",
        "options": [
          "(a) 4.90 BM",
          "(b) 5.92 BM",
          "(c) 3.87 BM",
          "(d) 1.73 BM"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Zirconium (Zr) and Hafnium (Hf) exhibit almost identical atomic and ionic radii because of:",
        "answer": "(a) Lanthanoid contraction",
        "explanation": "The filling of 4f orbitals before 5d series in Hf results in poor shielding by 4f electrons. The gradual increase in effective nuclear charge causes a steady contraction in size (lanthanoid contraction), making the atomic radius of 5d Hf (159 pm) almost identical to 4d Zr (160 pm).",
        "options": [
          "(a) Lanthanoid contraction",
          "(b) Actinoid contraction",
          "(c) Diagonal relationship",
          "(d) Belonging to the same group"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which 3d transition element exhibits the maximum number of oxidation states?",
        "answer": "(a) Mn",
        "explanation": "Manganese (Mn, Z = 25) has electronic configuration [Ar] 3d⁵ 4s². Because both 3d and 4s electrons have comparable energies, all 7 electrons can participate in bonding, giving oxidation states from +2 to +7.",
        "options": [
          "(a) Mn",
          "(b) Cr",
          "(c) Fe",
          "(d) Ti"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following transition metal ions is colourless in aqueous solution?",
        "answer": "(a) Cu⁺ and Sc³⁺",
        "explanation": "Cu⁺ has [Ar] 3d¹⁰ (completely filled d orbitals) and Sc³⁺ has [Ar] 3d⁰ (empty d orbitals). In the absence of unpaired d electrons, d-d electronic transitions are impossible, making both ions colourless.",
        "options": [
          "(a) Cu⁺ and Sc³⁺",
          "(b) Cu²⁺ and Fe²⁺",
          "(c) Ni²⁺ and Co²⁺",
          "(d) Cr³⁺ and Mn²⁺"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The standard reduction potential E°(Cu²⁺/Cu) is positive (+0.34 V) mainly because:",
        "answer": "(a) high enthalpy of atomization and ionization enthalpy are not balanced by hydration enthalpy",
        "explanation": "The transformation Cu(s) -> Cu²⁺(aq) requires high sublimation/atomization energy and very high sum of first and second ionization enthalpies (ΔiH1 + ΔiH2). The hydration enthalpy of Cu²⁺ is not sufficiently negative to compensate for these large energy inputs, resulting in a positive E°.",
        "options": [
          "(a) high enthalpy of atomization and ionization enthalpy are not balanced by hydration enthalpy",
          "(b) low enthalpy of sublimation",
          "(c) high negative hydration enthalpy",
          "(d) high electron gain enthalpy"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In acidic medium, orange dichromate ion (Cr2O7²⁻) oxidizes Fe²⁺ to Fe³⁺. The reduced form of chromium is:",
        "answer": "(a) Cr³⁺ (green)",
        "explanation": "Reaction: Cr2O7²⁻ + 14 H⁺ + 6 Fe²⁺ -> 2 Cr³⁺ (green) + 6 Fe³⁺ + 7 H2O. Chromium is reduced from +6 oxidation state to +3 oxidation state.",
        "options": [
          "(a) Cr³⁺ (green)",
          "(b) Cr²⁺ (blue)",
          "(c) CrO4²⁻ (yellow)",
          "(d) CrO2 (black)"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Ce⁴⁺ is a well-known oxidizing agent because:",
        "answer": "(a) Ce³⁺ is the most stable oxidation state of cerium",
        "explanation": "Although Ce⁴⁺ possesses a stable noble gas configuration ([Xe] 4f⁰), +3 is the characteristic and thermodynamically most stable oxidation state of lanthanoids. Ce⁴⁺ readily gains an electron (E° = +1.74 V) to convert to Ce³⁺, making it a strong oxidizing agent.",
        "options": [
          "(a) Ce³⁺ is the most stable oxidation state of cerium",
          "(b) Ce⁴⁺ has noble gas configuration",
          "(c) Ce has very low electronegativity",
          "(d) Ce⁴⁺ is easily oxidized"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following oxides of manganese is amphoteric in nature?",
        "answer": "(d) MnO2",
        "explanation": "MnO is purely basic (+2 state), Mn2O3 is weakly basic (+3 state), MnO2 (+4 state) is amphoteric (reacts with both acids and strong bases), and Mn2O7 (+7 state) is strongly acidic covalent green oil.",
        "options": [
          "(a) Mn2O7",
          "(b) MnO",
          "(c) Mn2O3",
          "(d) MnO2"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Transition metals and their compounds exhibit excellent catalytic activity primarily because of their:",
        "answer": "(a) variable oxidation states and ability to form coordination complexes",
        "explanation": "Transition metals can adopt multiple oxidation states to participate in redox steps and provide large surface areas with vacant d orbitals to form unstable intermediate complexes with reactants, lowering activation energy.",
        "options": [
          "(a) variable oxidation states and ability to form coordination complexes",
          "(b) diamagnetic nature",
          "(c) high melting and boiling points",
          "(d) high electrical conductivity"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The basicity of lanthanoid hydroxides Ln(OH)3 across the series from La(OH)3 to Lu(OH)3:",
        "answer": "(a) decreases",
        "explanation": "Due to lanthanoid contraction, the ionic radius of Ln³⁺ ions decreases from La³⁺ (103 pm) to Lu³⁺ (86 pm). According to Fajan's rules, smaller cation size increases the covalent character of the Ln-OH bond, decreasing OH⁻ release tendency. Thus, La(OH)3 is most basic and Lu(OH)3 is least basic.",
        "options": [
          "(a) decreases",
          "(b) increases",
          "(c) remains constant",
          "(d) first decreases then increases"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When yellow chromate solution is acidified with dilute sulfuric acid, it turns orange due to the formation of:",
        "answer": "(a) Cr2O7²⁻",
        "explanation": "In aqueous solution, chromate and dichromate exist in pH-dependent equilibrium: 2 CrO4²⁻ (yellow) + 2 H⁺ ⇌ Cr2O7²⁻ (orange) + H2O. Adding acid shifts equilibrium to the right, forming orange dichromate.",
        "options": [
          "(a) Cr2O7²⁻",
          "(b) Cr³⁺",
          "(c) CrO3",
          "(d) [Cr(H2O)6]³⁺"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Interstitial compounds formed by transition metals are characterized by:",
        "answer": "(a) very high melting points and retention of metallic conductivity",
        "explanation": "Interstitial compounds are formed when small non-metal atoms (H, B, C, N) are trapped inside interstitial voids of transition metal lattices. They are extremely hard, chemically inert, possess melting points higher than pure metals, and retain metallic conductivity.",
        "options": [
          "(a) very high melting points and retention of metallic conductivity",
          "(b) ionic bonding and softness",
          "(c) very high chemical reactivity",
          "(d) low hardness"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why is Cr²⁺ a reducing agent while Mn³⁺ is an oxidizing agent, although both have d⁴ electronic configuration?",
        "answer": "(a) Cr³⁺ has half-filled t2g³ level, whereas Mn²⁺ has half-filled 3d⁵ configuration",
        "explanation": "Cr²⁺ (d⁴) loses 1 electron to form Cr³⁺ (d³), which has an exceptionally stable half-filled t2g³ subshell in octahedral crystal field, making Cr²⁺ a strong reducing agent. Mn³⁺ (d⁴) gains 1 electron to form Mn²⁺ (d⁵), which has a half-filled 3d⁵ configuration, making Mn³⁺ a strong oxidizing agent.",
        "options": [
          "(a) Cr³⁺ has half-filled t2g³ level, whereas Mn²⁺ has half-filled 3d⁵ configuration",
          "(b) Cr is a non-metal",
          "(c) Mn has higher ionization energy",
          "(d) Cr has higher electronegativity"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Actinoids show a greater number of oxidation states than lanthanoids because:",
        "answer": "(a) 5f, 6d, and 7s energy levels are comparable in energy",
        "explanation": "In actinoids, the energy difference between 5f, 6d, and 7s subshells is extremely small, allowing electrons from all three subshells to participate in chemical bonding, producing variable oxidation states up to +7 (e.g. Np, Pu).",
        "options": [
          "(a) 5f, 6d, and 7s energy levels are comparable in energy",
          "(b) 4f orbitals are closer to nucleus",
          "(c) actinoids are all radioactive",
          "(d) actinoid contraction is smaller"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following transition elements has the highest enthalpy of atomization in the 3d series?",
        "answer": "(b) Cr",
        "explanation": "Enthalpy of atomization depends directly on the strength of metallic bonding, which is governed by the number of unpaired d-electrons participating in interatomic bonding. Chromium ([Ar] 3d⁵ 4s¹) has 6 unpaired valence electrons, giving it the highest enthalpy of atomization in the 3d series.",
        "options": [
          "(a) V",
          "(b) Cr",
          "(c) Fe",
          "(d) Zn"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "In potassium permanganate (KMnO4), the oxidation state of Mn is +7. The deep purple colour of KMnO4 is due to:",
        "answer": "(a) Charge transfer from oxygen to manganese (L -> M charge transfer)",
        "explanation": "Mn in KMnO4 is in +7 state with [Ar] 3d⁰ configuration (no d-electrons), so d-d transitions are impossible. The intense purple color arises from Ligand-to-Metal Charge Transfer (LMCT), where an electron is momentarily transferred from the 2p orbital of oxide ligand (O²⁻) into an empty 3d orbital of Mn(VII).",
        "options": [
          "(a) Charge transfer from oxygen to manganese (L -> M charge transfer)",
          "(b) d-d transition of electrons",
          "(c) f-f transition",
          "(d) polarization of potassium ion"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Mischmetal is an alloy consisting predominantly of:",
        "answer": "(a) Lanthanoid metals (~95%) and iron (~5%)",
        "explanation": "Mischmetal is a well-known pyrophoric alloy containing about 95% lanthanoid metal (chiefly cerium ~50%, lanthanum and neodymium) and ~5% iron, along with traces of S, C, Ca, and Al. Used in cigarette lighter flints and tracer bullets.",
        "options": [
          "(a) Lanthanoid metals (~95%) and iron (~5%)",
          "(b) Actinoids (~95%) and copper (~5%)",
          "(c) Chromium and nickel",
          "(d) Titanium and aluminum"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following compounds has the lowest oxidation state of the metal?",
        "answer": "(a) [Ni(CO)4]",
        "explanation": "In tetracarbonylnickel(0) [Ni(CO)4], CO is a neutral ligand, so the oxidation state of Ni is 0. In FeSO4 it is +2, in K2Cr2O7 it is +6, and in KMnO4 it is +7.",
        "options": [
          "(a) [Ni(CO)4]",
          "(b) K2Cr2O7",
          "(c) KMnO4",
          "(d) FeSO4"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Europium (Eu, Z = 63) and Ytterbium (Yb, Z = 70) show stable +2 oxidation states because of:",
        "answer": "(a) half-filled 4f⁷ and completely filled 4f¹⁴ configurations",
        "explanation": "Eu²⁺ has electronic configuration [Xe] 4f⁷ (half-filled f-subshell) and Yb²⁺ has [Xe] 4f¹⁴ (completely filled f-subshell). Extra exchange energy confers special thermodynamic stability to these configurations.",
        "options": [
          "(a) half-filled 4f⁷ and completely filled 4f¹⁴ configurations",
          "(b) completely empty 4f⁰ configuration",
          "(c) noble gas configuration",
          "(d) inert pair effect"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the equivalent weight of KMnO4 in acidic medium? (Molecular weight = M):",
        "answer": "(a) M / 5",
        "explanation": "In acidic medium: MnO4⁻ + 8 H⁺ + 5 e⁻ -> Mn²⁺ + 4 H2O. The change in oxidation state of Mn is from +7 to +2 (n-factor = 5). Equivalent weight = Molar mass / n-factor = M / 5 = 158 / 5 = 31.6 g/eq.",
        "options": [
          "(a) M / 5",
          "(b) M / 3",
          "(c) M / 1",
          "(d) M / 6"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Zinc (Zn), Cadmium (Cd), and Mercury (Hg) are NOT regarded as typical transition elements because:",
        "answer": "(a) they have completely filled d-orbitals in their ground state as well as common oxidation states",
        "explanation": "By definition, a transition element is an element having incompletely filled (partially filled) d-subshell in its atomic state or common oxidation state. Group 12 elements (Zn, Cd, Hg) have (n-1)d¹⁰ ns² ground state and (n-1)d¹⁰ in +2 state, so they do not exhibit typical transition characteristics.",
        "options": [
          "(a) they have completely filled d-orbitals in their ground state as well as common oxidation states",
          "(b) they are soft metals",
          "(c) they have low melting points",
          "(d) they do not form coordination compounds"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Pyrolusite ore (MnO2) on fusion with KOH in presence of atmospheric oxygen or KNO3 produces:",
        "answer": "(a) K2MnO4 (dark green)",
        "explanation": "Reaction: 2 MnO2 + 4 KOH + O2 -> 2 K2MnO4 (potassium manganate, dark green) + 2 H2O. Potassium manganate is then disproportionated or electrolytically oxidized to KMnO4.",
        "options": [
          "(a) K2MnO4 (dark green)",
          "(b) KMnO4 (purple)",
          "(c) Mn2O3 (brown)",
          "(d) MnSO4 (pink)"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which transition metal ion in 3d series has magnetic moment μ = 1.73 BM?",
        "answer": "(a) Ti³⁺",
        "explanation": "μ = √(n(n+2)) = 1.73 BM corresponds to n = 1 unpaired electron (√(1(3)) = √3 ≈ 1.73). Ti³⁺ (Z = 22) has configuration [Ar] 3d¹, which has exactly 1 unpaired electron.",
        "options": [
          "(a) Ti³⁺",
          "(b) Fe³⁺",
          "(c) Co²⁺",
          "(d) Ni²⁺"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The highest oxidation state of manganese is exhibited in its oxide (Mn2O7) rather than in its fluoride (MnF4) because:",
        "answer": "(a) oxygen has the ability to form multiple pπ-dπ bonds with manganese",
        "explanation": "Oxygen can stabilize high oxidation states via multiple bonding (pπ-dπ overlap), allowing Mn to reach +7 in Mn2O7 (Mn=O bonds). Fluorine can only form single covalent bonds, sterically limiting manganese to MnF4.",
        "options": [
          "(a) oxygen has the ability to form multiple pπ-dπ bonds with manganese",
          "(b) fluorine is less electronegative than oxygen",
          "(c) oxygen has smaller size than fluorine",
          "(d) fluorine cannot act as oxidizing agent"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Zr and Hf possess almost identical chemical properties and atomic sizes.\nReason (R): Lanthanoid contraction cancels out the expected normal increase in atomic size down group 4 from 4d to 5d series.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The intervention of 14 4f elements with poor shielding causes Hf to shrink to the size of Zr.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Copper(I) compounds are unstable in aqueous solution and readily disproportionate to Cu²⁺ and Cu.\nReason (R): The hydration enthalpy of Cu²⁺ is much more negative than that of Cu⁺, which more than compensates for the second ionization enthalpy of copper.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the disproportionation: 2 Cu⁺(aq) -> Cu²⁺(aq) + Cu(s).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Transition metals form a wide range of interstitial compounds with small non-metals.\nReason (R): Small atoms like H, C, and N can easily fit into the vacant interstitial tetrahedral and octahedral spaces in the metal lattice.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Potassium permanganate solution cannot be acidified using hydrochloric acid in redox titrations.\nReason (R): KMnO4 is a strong oxidizing agent that oxidizes HCl to chlorine gas (Cl2).",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why dilute H2SO4 is used instead of HCl (H2SO4 cannot be oxidized by KMnO4).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Actinoid contraction is greater from element to element than lanthanoid contraction.\nReason (R): 5f electrons have poorer shielding effect than 4f electrons due to their more diffuse spatial distribution.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why actinoid contraction is more pronounced across the series.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Give chemical reasons for the following:\n(i) Transition metals show variable oxidation states.\n(ii) Sc³⁺ is colourless while Ti³⁺ is purple in aqueous solution.",
        "answer": "Reasons for variable oxidation states and ion colour",
        "explanation": "(i) Variable Oxidation States: In transition metals, the energy levels of (n-1)d and ns orbitals are very close. Therefore, both ns electrons and unpaired (n-1)d electrons can be readily lost or shared in chemical bond formation.\n(ii) Colour Comparison: Sc³⁺ (Z = 21) has configuration [Ar] 3d⁰ (empty d-orbitals, no d-d transition possible, colourless). Ti³⁺ (Z = 22) has configuration [Ar] 3d¹ (one unpaired electron undergoes d-d transition by absorbing yellow-green light and transmitting purple)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Describe the preparation of potassium dichromate (K2Cr2O7) from chromite ore (FeCr2O4) giving balanced chemical equations for all steps.",
        "answer": "Preparation of K2Cr2O7 from chromite ore",
        "explanation": "Step 1: Conversion of chromite ore to sodium chromate:\n4 FeCr2O4 + 8 Na2CO3 + 7 O2 -> 8 Na2CrO4 (yellow solution) + 2 Fe2O3 (insoluble residue) + 8 CO2.\nStep 2: Conversion of sodium chromate to sodium dichromate:\n2 Na2CrO4 + H2SO4 (conc.) -> Na2Cr2O7 (orange) + Na2SO4 + H2O.\nStep 3: Conversion of sodium dichromate to potassium dichromate:\nNa2Cr2O7 + 2 KCl -> K2Cr2O7 (orange crystals) + 2 NaCl.\n(K2Cr2O7 is less soluble in cold water than NaCl and crystallizes out readily)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "What is lanthanoid contraction? State two important consequences of lanthanoid contraction.",
        "answer": "Definition and consequences of lanthanoid contraction",
        "explanation": "1. Definition: The steady and gradual decrease in the atomic and ionic radii of lanthanoid elements with increasing atomic number from Lanthanum (57) to Lutetium (71) due to poor shielding of 4f electrons.\n2. Consequences:\n(a) Similarity in radii of 4d and 5d elements: Pairs like Zr/Hf and Nb/Ta have nearly identical radii and identical chemical properties, making separation difficult.\n(b) Decrease in basic strength of hydroxides: Basicity decreases progressively from La(OH)3 (most basic) to Lu(OH)3 (least basic) as covalent character increases."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Explain the following observations:\n(a) Transition metals exhibit high enthalpy of atomization.\n(b) Cr²⁺ is reducing while Mn³⁺ is oxidizing though both have d⁴ configuration.\n(c) The highest oxidation state of a metal is exhibited in its oxide or fluoride.",
        "answer": "Explanations for atomization enthalpy, redox behavior, and high oxidation states",
        "explanation": "(a) High Enthalpy of Atomization: Transition metals have many unpaired electrons in their (n-1)d orbitals that participate in extensive interatomic covalent bonding in addition to metallic bonding.\n(b) Redox Nature: Cr²⁺ (3d⁴) loses an electron to form Cr³⁺ (3d³), having half-filled stable t2g³ level in octahedral crystal field. Mn³⁺ (3d⁴) gains an electron to form Mn²⁺ (3d⁵), achieving stable half-filled 3d⁵ subshell.\n(c) Fluorides/Oxides: Small size and exceptionally high electronegativities of fluorine and oxygen enable them to oxidize transition metals to their highest oxidation states; oxygen additionally forms strong pπ-dπ multiple bonds."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "Complete and balance the following chemical equations:\n(i) MnO4⁻ + C2O4²⁻ + H⁺ ->\n(ii) Cr2O7²⁻ + Fe²⁺ + H⁺ ->",
        "answer": "Balanced redox equations",
        "explanation": "(i) 2 MnO4⁻ + 5 C2O4²⁻ + 16 H⁺ -> 2 Mn²⁺ + 10 CO2 + 8 H2O\n(Permanganate oxidizes oxalate ion to carbon dioxide gas while Mn(VII) is reduced to Mn²⁺).\n\n(ii) Cr2O7²⁻ + 6 Fe²⁺ + 14 H⁺ -> 2 Cr³⁺ + 6 Fe³⁺ + 7 H2O\n(Dichromate oxidizes ferrous ion to ferric ion while Cr(VI) is reduced to Cr³⁺)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "Calculate the spin-only magnetic moments of the following ions in aqueous solution: (i) Mn²⁺, (ii) Cr³⁺, (iii) Ni²⁺. (Atomic numbers: Mn = 25, Cr = 24, Ni = 28).",
        "answer": "(i) 5.92 BM, (ii) 3.87 BM, (iii) 2.83 BM",
        "explanation": "Formula: μ = √(n(n+2)) BM, where n is number of unpaired electrons.\n(i) Mn²⁺ (Z = 25): [Ar] 3d⁵ => n = 5 unpaired electrons.\nμ = √(5(5+2)) = √35 ≈ 5.92 BM.\n(ii) Cr³⁺ (Z = 24): [Ar] 3d³ => n = 3 unpaired electrons.\nμ = √(3(3+2)) = √15 ≈ 3.87 BM.\n(iii) Ni²⁺ (Z = 28): [Ar] 3d⁸ => n = 2 unpaired electrons.\nμ = √(2(2+2)) = √8 ≈ 2.83 BM."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "Account for the following:\n(i) E° value for Mn³⁺/Mn²⁺ couple is much more positive (+1.57 V) than for Cr³⁺/Cr²⁺ (-0.41 V).\n(ii) Zn is not regarded as a transition element.",
        "answer": "Explanations for E°(Mn³⁺/Mn²⁺) and non-transition nature of Zn",
        "explanation": "(i) Mn²⁺ has an exceptionally stable half-filled 3d⁵ configuration, making the reduction of Mn³⁺ (3d⁴) to Mn²⁺ highly energetically favorable (high positive E°). For Cr, Cr³⁺ has half-filled stable t2g³ level, so Cr³⁺ resists reduction, giving a negative E°.\n(ii) Transition metals are defined as elements having partially filled d-orbitals in ground or common ionic states. Zn ([Ar] 3d¹⁰ 4s²) and Zn²⁺ ([Ar] 3d¹⁰) have completely filled d-orbitals in both elemental and +2 state, so Zn is not a transition element."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Compare lanthanoids and actinoids with respect to:\n(i) Oxidation states,\n(ii) Chemical reactivity,\n(iii) Magnetic properties.",
        "answer": "Comparison between Lanthanoids and Actinoids",
        "explanation": "1. Oxidation States: Lanthanoids exhibit mainly +3, with occasional +2 and +4 due to large energy gap between 4f and 5d. Actinoids show a wide range of oxidation states (+3, +4, +5, +6, +7) because 5f, 6d, and 7s are comparable in energy.\n2. Chemical Reactivity: Actinoids are significantly more reactive than lanthanoids due to lower ionization enthalpies; actinoids react readily with boiling water, acids, and halogens.\n3. Magnetic Properties: Both show paramagnetism, but the magnetic behavior of actinoids is far more complex than that of lanthanoids due to stronger spin-orbit coupling and interaction with crystal field."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "How would you account for the following:\n(i) Transition metals and their compounds act as good catalysts.\n(ii) The d¹ configuration is very unstable in transition metals.",
        "answer": "Catalytic activity and instability of d¹ configuration",
        "explanation": "(i) Catalytic Activity: Transition metals have variable oxidation states allowing them to form intermediate compounds, vacant d-orbitals to coordinate with reactant molecules, and large surface areas for chemisorption.\n(ii) Instability of d¹: Ions with d¹ configuration (like Ti³⁺) readily lose the single d-electron to achieve the noble gas configuration ([Ar] 3d⁰) or disproportionate, making d¹ species strong reducing agents."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What happens when:\n(i) Potassium dichromate is treated with an alkali?\n(ii) Potassium permanganate is heated strongly?",
        "answer": "Reactions with alkali and thermal decomposition",
        "explanation": "(i) Reaction with Alkali: Orange dichromate turns into yellow chromate:\nCr2O7²⁻ (orange) + 2 OH⁻ -> 2 CrO4²⁻ (yellow) + H2O.\n(ii) Heating KMnO4: Potassium permanganate undergoes thermal decomposition at 513 K to give potassium manganate, manganese dioxide, and oxygen gas:\n2 KMnO4 -(heat)-> K2MnO4 (dark green) + MnO2 (black) + O2(g)."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Describe the industrial preparation of potassium permanganate (KMnO4) from pyrolusite ore (MnO2).\n(b) Write balanced chemical equations for the reaction of acidified KMnO4 with:\n(i) Oxalic acid (H2C2O4)\n(ii) Iron(II) sulfate (FeSO4)\n(iii) Potassium iodide (KI).",
        "answer": "Industrial preparation of KMnO4 and balanced redox reactions",
        "explanation": "Marking Scheme:\n(a) Preparation of KMnO4 (2 marks):\n- Step 1: Conversion of MnO2 to Potassium Manganate:\n  Finely powdered pyrolusite (MnO2) is fused with KOH in presence of air (O2) or KNO3:\n  2 MnO2 + 4 KOH + O2 -> 2 K2MnO4 (dark green) + 2 H2O.\n- Step 2: Oxidation of Manganate to Permanganate:\n  The green mass is dissolved in water and oxidized electrolytically (or by bubbling CO2/chlorine):\n  At Anode: MnO4²⁻ (green) -> MnO4⁻ (purple) + e⁻.\n  (Chemical route: 3 MnO4²⁻ + 4 H⁺ -> 2 MnO4⁻ + MnO2 + 2 H2O).\n\n(b) Balanced Redox Equations (3 marks):\n(i) With oxalic acid:\n2 MnO4⁻ + 5 C2O4²⁻ + 16 H⁺ -> 2 Mn²⁺ + 10 CO2 + 8 H2O.\n(ii) With iron(II) sulfate:\nMnO4⁻ + 5 Fe²⁺ + 8 H⁺ -> Mn²⁺ + 5 Fe³⁺ + 4 H2O.\n(iii) With potassium iodide:\n2 MnO4⁻ + 10 I⁻ + 16 H⁺ -> 2 Mn²⁺ + 5 I2 + 8 H2O."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Account for each of the following observations:\n(i) E°(M²⁺/M) value for copper is positive (+0.34 V).\n(ii) Transition metals have high enthalpies of atomization.\n(iii) Transition metals form interstitial compounds.\n(iv) Cr²⁺ is a strong reducing agent while Mn³⁺ is a strong oxidizing agent.\n(v) The basic strength of Ln(OH)3 decreases across the lanthanoid series.",
        "answer": "Detailed explanations for 5 core properties of d- and f-block elements",
        "explanation": "Marking Scheme (1 mark each):\n(i) Positive E°(Cu²⁺/Cu): The sum of enthalpy of sublimation (atomization) and ionization enthalpies (ΔiH1 + ΔiH2) for copper is exceptionally high and is not compensated by its hydration enthalpy.\n(ii) High Enthalpy of Atomization: Due to the presence of large numbers of unpaired electrons in (n-1)d orbitals, extensive interatomic covalent bonding occurs in addition to metallic bonding.\n(iii) Interstitial Compounds: The crystal lattices of transition metals have interstitial spaces (voids) where small non-metal atoms (H, B, C, N) get trapped without distorting lattice symmetry.\n(iv) Cr²⁺ vs Mn³⁺: Oxidation of Cr²⁺ (d⁴) yields Cr³⁺ (d³), which possesses an exceptionally stable half-filled t2g³ level in octahedral crystal field. Mn³⁺ (d⁴) readily accepts an electron to form Mn²⁺ (d⁵), gaining high exchange stability of half-filled d-subshell.\n(v) Basicity of Ln(OH)3: Due to lanthanoid contraction, the ionic radii of Ln³⁺ decrease from La³⁺ to Lu³⁺. By Fajan's rules, the polarizability increases and covalent character of Ln-OH bond increases, decreasing OH⁻ dissociation."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) What is the effect of increasing pH on a solution of potassium dichromate?\n(b) Write the ionic equations for the reaction of acidified K2Cr2O7 with:\n(i) H2S\n(ii) Sn²⁺\n(iii) SO2.\n(c) Why do Zr and Hf exhibit very similar physical and chemical properties?",
        "answer": "Effect of pH, redox reactions of dichromate, and lanthanoid contraction effect on Zr/Hf",
        "explanation": "Marking Scheme:\n(a) Effect of pH (1 mark):\nIncreasing pH (adding base) converts orange dichromate into yellow chromate:\nCr2O7²⁻ (orange) + 2 OH⁻ ⇌ 2 CrO4²⁻ (yellow) + H2O.\n\n(b) Redox Reactions (3 marks):\n(i) With H2S (sulfur is precipitated):\nCr2O7²⁻ + 8 H⁺ + 3 H2S -> 2 Cr³⁺ + 3 S (precipitate) + 7 H2O.\n(ii) With Sn²⁺ (tin(II) to tin(IV)):\nCr2O7²⁻ + 14 H⁺ + 3 Sn²⁺ -> 2 Cr³⁺ + 3 Sn⁴⁺ + 7 H2O.\n(iii) With SO2 (sulfur dioxide oxidized to sulfate):\nCr2O7²⁻ + 2 H⁺ + 3 SO2 -> 2 Cr³⁺ + 3 SO4²⁻ + H2O.\n\n(c) Similarity of Zr and Hf (1 mark):\nDue to Lanthanoid Contraction (poor shielding by 14 intervened 4f electrons in Hf), Hf has an atomic radius (159 pm) virtually identical to that of Zr (160 pm), resulting in nearly identical chemical properties."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Coordination, Magnetism, and Catalysis in Transition Metals\nThe d-block elements occupy the middle of the periodic table between s- and p-blocks. The valence electrons enter (n-1)d orbitals, which are shielded by ns electrons. This configuration imparts distinctive physical and chemical properties such as variable valency, catalytic efficiency, high melting points, and coloured paramagnetic ions. Magnetic measurements provide crucial information about the oxidation state and coordination geometry of metal complexes. The spin-only magnetic moment is given by μ = √(n(n+2)) BM.\n(i) Why do transition metals exhibit variable oxidation states?\n(ii) Calculate the spin-only magnetic moment of V³⁺ (Z = 23).\n(iii) Why are Zn²⁺ salts white while Cu²⁺ salts are blue in aqueous solution?\n(iv) Name a transition metal catalyst used in Haber's process for the synthesis of ammonia.",
        "answer": "Solutions to Case Study on Transition Metal Chemistry",
        "explanation": "(i) The energy levels of (n-1)d and ns orbitals are very close; hence both ns and unpaired (n-1)d electrons can be utilized for bonding.\n(ii) V (Z = 23): [Ar] 3d³ 4s². For V³⁺: [Ar] 3d² => n = 2 unpaired electrons.\nμ = √(2(2+2)) = √8 ≈ 2.83 BM.\n(iii) Zn²⁺ has [Ar] 3d¹⁰ configuration (completely filled d-subshell, no unpaired electrons), so d-d transitions cannot occur, making its salts white/colourless. Cu²⁺ has [Ar] 3d⁹ configuration (one unpaired electron), which undergoes d-d absorption in the red-orange region, transmitting blue light.\n(iv) Finely divided Iron (Fe) with Molybdenum (Mo) as promoter (or K2O/Al2O3)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Compare the chemistry of Lanthanoids and Actinoids with special reference to:\n(i) Electronic configuration\n(ii) Atomic and ionic sizes\n(iii) Oxidation states\n(iv) Chemical reactivity.\n(b) Why is Ce⁴⁺ used as an analytical reagent in volumetric titrations?",
        "answer": "Lanthanoid vs Actinoid comparison and Ce⁴⁺ analytical use",
        "explanation": "Marking Scheme:\n(a) Detailed Comparison (4 marks):\n1. Electronic Configuration: Lanthanoids involve filling of 4f orbitals ([Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²). Actinoids involve filling of 5f orbitals ([Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²).\n2. Atomic/Ionic Sizes: Both exhibit contraction across the series (Lanthanoid vs Actinoid contraction). Actinoid contraction is greater due to poorer shielding by 5f electrons compared to 4f.\n3. Oxidation States: Lanthanoids show primarily +3 state (with limited +2, +4). Actinoids show a wide range of oxidation states (+3, +4, +5, +6, +7) because 5f, 6d, and 7s levels are close in energy.\n4. Chemical Reactivity: Actinoids are more reactive than lanthanoids due to lower ionization energies and greater electropositive character; all actinoids are radioactive.\n\n(b) Ce⁴⁺ as Analytical Reagent (1 mark):\nCe⁴⁺ is a strong oxidizing agent (E°(Ce⁴⁺/Ce³⁺) = +1.74 V) in acidic solution. It quantitatively oxidizes Fe²⁺, oxalate, etc., Ce⁴⁺ + e⁻ -> Ce³⁺, making it an excellent primary standard in cerimetric titrations."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Write the electronic configuration of Cr³⁺ and Cu⁺ (Z = 24 and 29).\n(b) Why are transition metal fluorides and oxides generally more ionic in low oxidation states and covalent in high oxidation states?\n(c) How is potassium manganate (K2MnO4) converted into potassium permanganate (KMnO4)?",
        "answer": "Electronic configurations, ionic vs covalent nature, and manganate conversion",
        "explanation": "(a) Electronic Configurations (1.5 marks):\n- Cr (Z = 24): [Ar] 3d⁵ 4s¹ => Cr³⁺: [Ar] 3d³.\n- Cu (Z = 29): [Ar] 3d¹⁰ 4s¹ => Cu⁺: [Ar] 3d¹⁰.\n\n(b) Ionic vs Covalent Nature (1.5 marks):\n- In lower oxidation states (+2, +3), the metal ion has a larger radius and lower positive charge density, resulting in low polarizing power and primarily ionic bonding.\n- In higher oxidation states (+5, +6, +7), the metal ion has very high charge density and small radius, leading to immense polarizing power according to Fajan's rules, resulting in electron cloud distortion and strong covalent character (e.g. Mn2O7, CrO3).\n\n(c) Conversion of K2MnO4 to KMnO4 (2 marks):\n1. Disproportionation in Acidic/Neutral Solution:\n3 MnO4²⁻ (green) + 4 H⁺ -> 2 MnO4⁻ (purple) + MnO2 + 2 H2O.\n2. Electrolytic Oxidation (Industrial Method):\nElectrolysis of alkaline manganate solution using iron electrodes:\nAt Anode: MnO4²⁻ -> MnO4⁻ + e⁻."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Assign reasons for the following:\n(i) Copper(I) ion is not stable in aqueous solution.\n(ii) Actinoids show irregularities in their electronic configurations.\n(iii) Transition metals have high melting and boiling points.\n(iv) The lowest oxide of transition metal is basic, the intermediate is amphoteric, and the highest is acidic.",
        "answer": "Four concise reasons for fundamental transition metal properties",
        "explanation": "(i) Cu⁺ disproportionates in water: 2 Cu⁺(aq) -> Cu²⁺(aq) + Cu(s) because the highly negative hydration enthalpy of Cu²⁺ easily compensates for the second ionization enthalpy.\n(ii) The energy difference between 5f, 6d, and 7s subshells is extremely small; electrons easily shift between these orbitals depending on slight differences in nuclear charge and exchange energy.\n(iii) Strong metallic bonding involving both ns and unpaired (n-1)d electrons requires tremendous thermal energy to break.\n(iv) In lower oxides (e.g. MnO), the metal has low oxidation state and can donate electrons/oxide ions (basic). In intermediate oxides (MnO2), it exhibits amphoteric character. In high oxides (Mn2O7), high charge density makes the metal highly electronegative, withdrawing electron density from oxygen and acting as a Lewis acid."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What are interstitial compounds? Why are such compounds well known for transition metals?\n(b) State three characteristic properties of interstitial compounds.\n(c) Calculate the number of unpaired electrons in Mn⁴⁺ ion (Z = 25).",
        "answer": "Interstitial compounds definition, properties, and unpaired electrons in Mn⁴⁺",
        "explanation": "(a) Definition and Formation (2 marks):\n- Interstitial compounds are non-stoichiometric chemical compounds formed when small non-metallic atoms (such as H, B, C, N) occupy the interstitial interstitial voids in the close-packed crystal lattice of transition metals (e.g. TiC, Mn4N, Fe3H).\n- Transition metals have large atomic radii and open crystal structures that provide voids of suitable dimensions to house these small atoms.\n\n(b) Properties (2 marks):\n1. Very high melting points, higher than those of the corresponding pure metals.\n2. Extremely hard; some borides approach diamond in hardness.\n3. Retain metallic electrical and thermal conductivity.\n4. Chemically inert and resistant to attack by acids and bases.\n\n(c) Unpaired electrons in Mn⁴⁺ (1 mark):\n- Mn (Z = 25): [Ar] 3d⁵ 4s².\n- Mn⁴⁺: [Ar] 3d³.\n- Number of unpaired electrons n = 3."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A violet compound 'A' of manganese decomposes on heating to 513 K to give a green compound 'B' and a black compound 'C' along with oxygen gas. Compound 'B' on treatment with dilute H2SO4 turns violet again yielding 'A' and 'C'. Identify compounds A, B, and C, and write balanced chemical equations for all reactions involved.",
        "answer": "A = KMnO4, B = K2MnO4, C = MnO2 with balanced equations",
        "explanation": "1. Identification:\n- Compound A: Potassium permanganate (KMnO4) - violet/purple solid.\n- Compound B: Potassium manganate (K2MnO4) - dark green solid.\n- Compound C: Manganese dioxide (MnO2) - black powder.\n\n2. Chemical Reactions:\n- Heating of A (513 K):\n  2 KMnO4 (A) -(513 K)-> K2MnO4 (B) + MnO2 (C) + O2(g)\n- Reaction of B with dilute H2SO4 (disproportionation):\n  3 K2MnO4 (B) + 2 H2SO4 -> 2 KMnO4 (A, violet) + MnO2 (C, black) + 2 K2SO4 + 2 H2O."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Give reasons for the following:\n(i) Transition elements show catalytic properties.\n(ii) Zinc has lowest enthalpy of atomization in 3d series.\n(iii) Transition metals form coloured complexes.\n(b) Write balanced chemical equations for:\n(i) Reaction of acidified KMnO4 with sodium sulfite (Na2SO3).\n(ii) Reaction of alkaline KMnO4 with potassium iodide (KI).",
        "answer": "Explanations of catalytic, atomization, and colour properties, and balanced redox equations",
        "explanation": "(a) Explanations (3 marks):\n(i) Catalytic Properties: Ability to adopt multiple oxidation states to form reaction intermediates, vacant d-orbitals to coordinate reactants, and provision of active surface sites for chemisorption.\n(ii) Zinc Enthalpy of Atomization: In Zn ([Ar] 3d¹⁰ 4s²), all 3d orbitals are completely filled and do not participate in metallic bonding. Only weak 4s metallic bonding exists.\n(iii) Coloured Complexes: In presence of ligands, d-orbitals split into t2g and eg sets. Absorption of light in visible region causes excitation of electrons from lower to higher d-orbital (d-d transition), and complementary color is transmitted.\n\n(b) Balanced Equations (2 marks):\n(i) With Na2SO3 (acidic medium):\n2 MnO4⁻ + 5 SO3²⁻ + 6 H⁺ -> 2 Mn²⁺ + 5 SO4²⁻ + 3 H2O.\n(ii) With KI (faintly alkaline / neutral medium - iodide is oxidized to iodate):\n2 MnO4⁻ + I⁻ + H2O -> 2 MnO2 + IO3⁻ (iodate) + 2 OH⁻."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "unit_num": 2,
      "title": "Coordination Compounds",
      "unit_title": "Inorganic Chemistry",
      "weightage_unit": "7 Marks (Inorganic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The correct IUPAC name of the complex [Co(NH3)5(CO3)]Cl is:",
        "answer": "(a) Pentaamminecarbonatocobalt(III) chloride",
        "explanation": "Ligands are named alphabetically: 'ammine' (5 = pentaammine) before 'carbonato'. Oxidation state of Co: x + 5(0) + (-2) + (-1) = 0 => x = +3. Hence: Pentaamminecarbonatocobalt(III) chloride.",
        "options": [
          "(a) Pentaamminecarbonatocobalt(III) chloride",
          "(b) Pentaamminecarbonatocobalt(II) chloride",
          "(c) Carbonatopentaamminecobalt(III) chloride",
          "(d) Pentaamminechlorocobalt(III) carbonate"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following is an ambidentate ligand?",
        "answer": "(a) NO2⁻",
        "explanation": "An ambidentate ligand has two different donor atoms through which it can coordinate to the central metal atom. NO2⁻ can coordinate via nitrogen (-NO2, nitro) or via oxygen (-ONO, nitrito).",
        "options": [
          "(a) NO2⁻",
          "(b) H2O",
          "(c) NH3",
          "(d) C2O4²⁻"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The coordination number and oxidation state of cobalt in the complex [Co(en)2Cl2]⁺ are respectively:",
        "answer": "(a) 6 and +3",
        "explanation": "'en' (ethane-1,2-diamine) is a bidentate ligand contributing 2 donor atoms each (2 × 2 = 4). Cl⁻ is unidentate (2 × 1 = 2). Total coordination number = 4 + 2 = 6. Oxidation state: x + 2(0) + 2(-1) = +1 => x = +3.",
        "options": [
          "(a) 6 and +3",
          "(b) 4 and +2",
          "(c) 6 and +2",
          "(d) 4 and +3"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following complexes is an inner orbital complex and diamagnetic?",
        "answer": "(a) [Co(NH3)6]³⁺",
        "explanation": "Co³⁺ has [Ar] 3d⁶. NH3 acts as a strong field ligand for Co(III), causing pairing of 3d electrons into t2g⁶ eg⁰ (0 unpaired electrons, diamagnetic). Two vacant 3d orbitals, one 4s, and three 4p orbitals hybridize to form d²sp³ (inner orbital complex).",
        "options": [
          "(a) [Co(NH3)6]³⁺",
          "(b) [CoF6]³⁻",
          "(c) [Ni(H2O)6]²⁺",
          "(d) [Fe(H2O)6]²⁺"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The type of isomerism shown by [Co(NH3)5(SO4)]Br and [Co(NH3)5Br]SO4 is:",
        "answer": "(a) Ionisation isomerism",
        "explanation": "These two isomers give different ions in aqueous solution: the first gives bromide ion Br⁻ (giving cream precipitate with AgNO3), while the second gives sulfate ion SO4²⁻ (giving white precipitate with BaCl2).",
        "options": [
          "(a) Ionisation isomerism",
          "(b) Linkage isomerism",
          "(c) Coordination isomerism",
          "(d) Hydrate isomerism"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The complex [Pt(NH3)2Cl2] exists in two geometrical isomeric forms. The cis-isomer is commercially known as:",
        "answer": "(a) Cisplatin",
        "explanation": "cis-[Pt(NH3)2Cl2] is famously known as Cisplatin and is widely used as a potent chemotherapy drug in cancer treatment.",
        "options": [
          "(a) Cisplatin",
          "(b) Chelate",
          "(c) Ferrocene",
          "(d) Zeise's salt"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "According to Crystal Field Theory, for an octahedral d⁴ complex with strong field ligands (Δo > P), the electronic configuration is:",
        "answer": "(a) t2g⁴ eg⁰",
        "explanation": "When crystal field splitting energy Δo is greater than the pairing energy P (Δo > P), electrons prefer to pair up in the lower-energy t2g orbitals rather than jump to higher-energy eg orbitals, yielding low-spin t2g⁴ eg⁰.",
        "options": [
          "(a) t2g⁴ eg⁰",
          "(b) t2g³ eg¹",
          "(c) t2g² eg²",
          "(d) t2g¹ eg³"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The relationship between crystal field splitting in tetrahedral (Δt) and octahedral (Δo) complexes is:",
        "answer": "(a) Δt = 4/9 Δo",
        "explanation": "In a tetrahedral field, there are only 4 ligands compared to 6 in octahedral field (factor of 4/6), and the ligands do not point directly along the metal d-orbital lobes (factor of 2/3). Thus: Δt = (4/6) * (2/3) Δo = 4/9 Δo.",
        "options": [
          "(a) Δt = 4/9 Δo",
          "(b) Δt = 9/4 Δo",
          "(c) Δt = Δo / 2",
          "(d) Δt = 2 Δo"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following complexes is optically active?",
        "answer": "(a) cis-[Co(en)2Cl2]⁺",
        "explanation": "cis-[Co(en)2Cl2]⁺ lacks a plane of symmetry and center of inversion, making it chiral. It exists as non-superimposable d- and l-enantiomers. The trans-isomer has a center of symmetry and plane of symmetry, so it is achiral (optically inactive).",
        "options": [
          "(a) cis-[Co(en)2Cl2]⁺",
          "(b) trans-[Co(en)2Cl2]⁺",
          "(c) trans-[Pt(NH3)2Cl2]",
          "(d) [Co(NH3)4Cl2]⁺"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The hybridization and shape of [Ni(CN)4]²⁻ and [NiCl4]²⁻ respectively are:",
        "answer": "(a) dsp² (square planar) and sp³ (tetrahedral)",
        "explanation": "Ni²⁺ is 3d⁸. CN⁻ is a strong field ligand that forces pairing of the two unpaired 3d electrons into one d-orbital, freeing one 3d orbital for dsp² hybridization (square planar, diamagnetic). Cl⁻ is a weak field ligand that cannot force pairing, so 4s and 4p orbitals hybridize as sp³ (tetrahedral, paramagnetic with 2 unpaired electrons).",
        "options": [
          "(a) dsp² (square planar) and sp³ (tetrahedral)",
          "(b) sp³ (tetrahedral) and dsp² (square planar)",
          "(c) dsp² (square planar) and dsp² (square planar)",
          "(d) sp³ (tetrahedral) and sp³ (tetrahedral)"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The chelating ligand among the following is:",
        "answer": "(a) Oxalate (ox)",
        "explanation": "Oxalate ion (C2O4²⁻) is a didentate ligand with two carboxylate oxygen donor atoms that coordinate to the same central metal ion to form a stable 5-membered chelate ring.",
        "options": [
          "(a) Oxalate (ox)",
          "(b) Cyanide (CN⁻)",
          "(c) Ammonia (NH3)",
          "(d) Chloride (Cl⁻)"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The correct order of increasing field strength of ligands according to the spectrochemical series is:",
        "answer": "(a) I⁻ < Cl⁻ < F⁻ < H2O < NH3 < CN⁻ < CO",
        "explanation": "In the spectrochemical series, halides are weak field ligands, oxygen donors are intermediate, nitrogen donors are stronger, and carbon-donor ligands (cyanide, carbonyl) are the strongest field ligands.",
        "options": [
          "(a) I⁻ < Cl⁻ < F⁻ < H2O < NH3 < CN⁻ < CO",
          "(b) CO < CN⁻ < NH3 < H2O < F⁻ < Cl⁻ < I⁻",
          "(c) Cl⁻ < I⁻ < H2O < F⁻ < CN⁻ < NH3 < CO",
          "(d) H2O < I⁻ < Cl⁻ < F⁻ < NH3 < CO < CN⁻"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Synergic bonding in metal carbonyls involves:",
        "answer": "(a) σ-donation from C to metal and π-back donation from metal d-orbital to vacant π* of CO",
        "explanation": "In metal carbonyls, a σ bond is formed by donation of lone pair of electrons on carbonyl carbon into a vacant d-orbital of the metal. Simultaneously, a π-back bond is formed by donation of a pair of electrons from a filled d-orbital of metal into the vacant antibonding π* orbital of CO. This synergic effect strengthens the M-C bond.",
        "options": [
          "(a) σ-donation from C to metal and π-back donation from metal d-orbital to vacant π* of CO",
          "(b) only σ-bond formation",
          "(c) only π-bond formation",
          "(d) electron transfer from metal to carbon σ-orbital"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following compounds gives 3 moles of AgCl precipitate per mole of complex when treated with excess AgNO3 solution?",
        "answer": "(a) [Co(NH3)6]Cl3",
        "explanation": "[Co(NH3)6]Cl3 has three ionizable chloride ions outside the coordination sphere: [Co(NH3)6]Cl3 -> [Co(NH3)6]³⁺ + 3 Cl⁻. Reaction with excess AgNO3 precipitates 3 moles of AgCl.",
        "options": [
          "(a) [Co(NH3)6]Cl3",
          "(b) [Co(NH3)5Cl]Cl2",
          "(c) [Co(NH3)4Cl2]Cl",
          "(d) [Co(NH3)3Cl3]"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Facial (fac) and meridional (mer) isomerism is exhibited by complexes of the general formula:",
        "answer": "(a) [Ma3b3]",
        "explanation": "Octahedral complexes of the type [Ma3b3] (such as [Co(NH3)3(NO2)3]) exhibit facial (fac) isomerism when three identical ligands occupy the corners of an octahedral face, and meridional (mer) isomerism when they occupy positions around the meridian.",
        "options": [
          "(a) [Ma3b3]",
          "(b) [Ma4b2]",
          "(c) [M(AA)2b2]",
          "(d) [Ma2b2]"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The number of donor atoms present in EDTA⁴⁻ ligand is:",
        "answer": "(a) 6 (hexadentate)",
        "explanation": "EDTA⁴⁻ (ethylenediaminetetraacetate ion) is a hexadentate ligand possessing 2 nitrogen atoms and 4 carboxylate oxygen atoms as donor sites.",
        "options": [
          "(a) 6 (hexadentate)",
          "(b) 4 (tetradentate)",
          "(c) 2 (bidentate)",
          "(d) 1 (unidentate)"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The spin-only magnetic moment of [Mn(CN)6]³⁻ is (Mn Z = 25):",
        "answer": "(a) 2.83 BM",
        "explanation": "Mn³⁺ has [Ar] 3d⁴. CN⁻ is a strong field ligand, forcing pairing: t2g⁴ eg⁰. Number of unpaired electrons n = 2. Spin-only magnetic moment μ = √(2(2+2)) = √8 ≈ 2.83 BM.",
        "options": [
          "(a) 2.83 BM",
          "(b) 4.90 BM",
          "(c) 5.92 BM",
          "(d) 1.73 BM"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following complex ions is expected to absorb visible light and appear violet?",
        "answer": "(a) [Ti(H2O)6]³⁺",
        "explanation": "[Ti(H2O)6]³⁺ has Ti³⁺ (3d¹). The single electron in t2g orbital absorbs green-yellow light (~500 nm) to get promoted to eg orbital (d-d transition). The transmitted complementary colour is violet. Sc³⁺, Zn²⁺, and Cu⁺ have d⁰ or d¹⁰ configurations and are colourless.",
        "options": [
          "(a) [Ti(H2O)6]³⁺",
          "(b) [Sc(H2O)6]³⁺",
          "(c) [Zn(H2O)6]²⁺",
          "(d) [Cu(CN)4]³⁻"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What is the oxidation state of Fe in brown ring complex [Fe(H2O)5(NO)]SO4?",
        "answer": "(a) +1",
        "explanation": "In the brown ring complex, nitric oxide coordinates as the nitrosonium cation (NO⁺): [Fe(H2O)5(NO⁺)]²⁺ SO4²⁻. Thus, x + 5(0) + (+1) = +2 => x = +1.",
        "options": [
          "(a) +1",
          "(b) +2",
          "(c) +3",
          "(d) 0"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Due to the 'chelate effect', a complex containing chelating ligands is:",
        "answer": "(a) more stable than similar complexes containing unidentate ligands",
        "explanation": "Chelating ligands form cyclic ring structures with the central metal ion. Chelate formation causes a large increase in entropy (ΔS > 0) due to release of displaced unidentate solvent molecules, making ΔG° more negative and conferring enhanced thermodynamic stability.",
        "options": [
          "(a) more stable than similar complexes containing unidentate ligands",
          "(b) less stable",
          "(c) highly unstable and decomposes",
          "(d) optically inactive always"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The primary valency and secondary valency in Werner's coordination theory correspond respectively to:",
        "answer": "(a) oxidation state and coordination number",
        "explanation": "According to Werner's theory, primary valency is ionizable and satisfied by negative ions (corresponding to the oxidation state). Secondary valency is non-ionizable, directional, and satisfied by neutral molecules or negative ions (corresponding to the coordination number).",
        "options": [
          "(a) oxidation state and coordination number",
          "(b) coordination number and oxidation state",
          "(c) charge and magnetic moment",
          "(d) valence electrons and atomic number"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following has a square planar geometry?",
        "answer": "(a) [Ni(CN)4]²⁻",
        "explanation": "[Ni(CN)4]²⁻ contains Ni²⁺ (3d⁸) and strong ligand CN⁻. The electrons pair up to vacate one 3d orbital, giving dsp² hybridization which corresponds to square planar geometry.",
        "options": [
          "(a) [Ni(CN)4]²⁻",
          "(b) [NiCl4]²⁻",
          "(c) [Ni(CO)4]",
          "(d) [ZnCl4]²⁻"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The complex [Cr(H2O)6]Cl3 (violet) and [Cr(H2O)5Cl]Cl2·H2O (grey-green) are examples of:",
        "answer": "(a) Hydrate (Solvate) isomerism",
        "explanation": "These isomers differ in whether water molecules are directly bonded to the metal center as ligands inside the coordination sphere or present as free water of crystallization in the crystal lattice.",
        "options": [
          "(a) Hydrate (Solvate) isomerism",
          "(b) Ionisation isomerism",
          "(c) Coordination isomerism",
          "(d) Linkage isomerism"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The number of geometrical isomers possible for square planar [Pt(NH3)(Br)(Cl)(py)] is:",
        "answer": "(a) 3",
        "explanation": "A square planar complex of the type [Mabcd] with four different unidentate ligands forms three geometrical isomers (fixing one ligand, say py, and rotating the other three positions).",
        "options": [
          "(a) 3",
          "(b) 2",
          "(c) 4",
          "(d) 6"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following compounds is used in the treatment of lead poisoning?",
        "answer": "(a) Ca-EDTA chelate",
        "explanation": "Calcium disodium EDTA (Ca-EDTA chelate) is administered in lead poisoning; lead ions displace calcium from the chelate because Pb-EDTA complex is far more stable, and the soluble Pb-chelate is excreted safely in urine.",
        "options": [
          "(a) Ca-EDTA chelate",
          "(b) Cisplatin",
          "(c) D-penicillamine",
          "(d) Dimercaprol"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): [Fe(CN)6]³⁻ is weakly paramagnetic with one unpaired electron, whereas [FeF6]³⁻ is strongly paramagnetic with 5 unpaired electrons.\nReason (R): CN⁻ is a strong field ligand that causes pairing of 3d electrons, whereas F⁻ is a weak field ligand that cannot force pairing.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Fe³⁺ is 3d⁵. With CN⁻, Δo > P resulting in t2g⁵ eg⁰ (n = 1). With F⁻, Δo < P resulting in t2g³ eg² (n = 5).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Linkage isomerism arises in coordination compounds containing ambidentate ligands.\nReason (R): Ambidentate ligands possess two different donor atoms and can coordinate through either of them.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Tetrahedral complexes do not show geometrical isomerism.\nReason (R): The relative spatial positions of any two ligands with respect to each other in a regular tetrahedron are all identical (adjacent).",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. In a regular tetrahedron, every corner is equally distant (cis) to every other corner.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Complexes containing chelating ligands are exceptionally stable compared to complexes containing unidentate ligands.\nReason (R): Chelate formation is accompanied by an increase in entropy of the system (ΔS > 0).",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the thermodynamic origin of the chelate effect.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): [Ti(H2O)6]³⁺ is violet in colour, but on heating it turns colourless.\nReason (R): On heating, the water ligands are driven off, destroying the crystal field splitting and preventing d-d transitions.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the loss of colour on heating anhydrous titanium salts.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Write the IUPAC names of the following coordination compounds:\n(i) [Co(NH3)4Cl(NO2)]Cl\n(ii) K3[Fe(CN)6]",
        "answer": "IUPAC nomenclature",
        "explanation": "(i) [Co(NH3)4Cl(NO2)]Cl: Tetraamminechloridonitrito-N-cobalt(III) chloride (or Tetraamminechloridonitrocobalt(III) chloride).\n(ii) K3[Fe(CN)6]: Potassium hexacyanidoferrate(III)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Using Valence Bond Theory (VBT), predict the hybridization, geometry, and magnetic behaviour of [CoF6]³⁻. (Atomic number of Co = 27).",
        "answer": "sp³d², octahedral, paramagnetic (4 unpaired electrons)",
        "explanation": "1. Oxidation state: Co³⁺ (Z = 27): [Ar] 3d⁶ 4s⁰ 4p⁰ 4d⁰.\n2. Ligand nature: Fluoride ion (F⁻) is a weak field ligand, so pairing of 3d electrons does not take place (pairing energy P > Δo).\n3. 3d configuration remains: ↑↓ ↑ ↑ ↑ ↑ (4 unpaired electrons).\n4. Empty orbitals used: One 4s, three 4p, and two outer 4d orbitals hybridize to give sp³d² hybridization.\n5. Geometry: Octahedral (outer orbital complex).\n6. Magnetic Nature: Paramagnetic with 4 unpaired electrons (μ = √24 ≈ 4.90 BM)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Draw the structures of optical isomers of [Co(en)3]³⁺.",
        "answer": "d- and l-enantiomers of [Co(en)3]³⁺",
        "explanation": "Structures: [Co(en)3]³⁺ is an octahedral complex with three bidentate ethylenediamine ligands. It has no plane of symmetry and forms two non-superimposable mirror image enantiomers:\n1. Dextrorotatory (d or Δ-isomer): The three 'en' rings form a right-handed propeller helix.\n2. Laevorotatory (l or Λ-isomer): Mirror image with left-handed propeller orientation."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Define the following terms with one example each:\n(i) Ambidentate ligand\n(ii) Chelate ligand\n(iii) Coordination sphere",
        "answer": "Definitions and examples",
        "explanation": "(i) Ambidentate Ligand: A unidentate ligand containing two different donor atoms that can coordinate to the central metal atom through either atom. Example: NO2⁻ (coordinates through N as nitro, or through O as nitrito).\n(ii) Chelate Ligand: A di- or polydentate ligand that coordinates to a single metal ion via two or more donor atoms simultaneously, forming a cyclic ring structure. Example: Ethane-1,2-diamine (en) or oxalate (ox).\n(iii) Coordination Sphere: The central metal atom/ion together with its directly coordinated ligands enclosed within square brackets [ ], which behaves as a single non-ionizable discrete entity in solution. Example: [Co(NH3)6]³⁺ in [Co(NH3)6]Cl3."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "What is spectrochemical series? Explain the difference between a weak field ligand and a strong field ligand.",
        "answer": "Spectrochemical series and ligand field strength",
        "explanation": "1. Spectrochemical Series: An experimentally determined series arranging ligands in increasing order of their crystal field splitting energy (Δo) values.\n2. Difference:\n- Weak Field Ligand: Ligands for which crystal field splitting is small (Δo < P). They cannot force electron pairing and produce high-spin complexes (e.g. I⁻, Br⁻, Cl⁻, F⁻).\n- Strong Field Ligand: Ligands producing large crystal field splitting (Δo > P). They force electrons to pair up in lower orbitals and form low-spin complexes (e.g. CN⁻, CO, en, NH3)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "Give the formula and IUPAC name of the coordination entity formed when:\n(i) Iron(II) coordinates with six cyanide ions.\n(ii) Platinum(II) coordinates with two ammonia molecules and two chloride ions.\n(iii) Nickel(0) coordinates with four carbon monoxide molecules.",
        "answer": "Formulas and IUPAC names",
        "explanation": "(i) Formula: [Fe(CN)6]⁴⁻; IUPAC Name: Hexacyanidoferrate(II) ion.\n(ii) Formula: [Pt(NH3)2Cl2]; IUPAC Name: Diamminedichloridoplatinum(II).\n(iii) Formula: [Ni(CO)4]; IUPAC Name: Tetracarbonylnickel(0)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "Draw the geometrical isomers (cis and trans) of [Pt(NH3)2Cl2]. Which of these isomers shows antitumor activity?",
        "answer": "cis- and trans-isomers, Cisplatin is antitumor",
        "explanation": "1. Structures: Square planar Pt(II) complex.\n- cis-[Pt(NH3)2Cl2]: The two Cl⁻ ligands occupy adjacent positions (90° apart), and the two NH3 ligands occupy adjacent positions.\n- trans-[Pt(NH3)2Cl2]: The two Cl⁻ ligands are opposite (180° apart), and the two NH3 ligands are opposite.\n2. Antitumor Activity: cis-[Pt(NH3)2Cl2] (Cisplatin) specifically binds to DNA of cancer cells and inhibits replication, exhibiting potent antitumor properties. The trans-isomer is biologically inactive."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Explain why [NiCl4]²⁻ is paramagnetic while [Ni(CO)4] is diamagnetic, though both are tetrahedral.",
        "answer": "Comparison of magnetic nature based on VBT/ligand strength",
        "explanation": "1. [NiCl4]²⁻: Nickel is in +2 oxidation state (3d⁸). Cl⁻ is a weak field ligand, so no electron pairing occurs. 3d subshell retains two unpaired electrons (↑↓ ↑↓ ↑↓ ↑ ↑). 4s and 4p orbitals hybridize as sp³ (tetrahedral). Due to 2 unpaired electrons, [NiCl4]²⁻ is paramagnetic (μ = 2.83 BM).\n2. [Ni(CO)4]: Nickel is in 0 oxidation state (3d⁸ 4s²). CO is a very strong field ligand; it forces both 4s electrons into the 3d subshell, pairing up all electrons to give a completely filled 3d¹⁰ configuration (↑↓ ↑↓ ↑↓ ↑↓ ↑↓). The empty 4s and 4p orbitals hybridize as sp³ (tetrahedral). With zero unpaired electrons, [Ni(CO)4] is diamagnetic."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Explain linkage isomerism with a suitable example.",
        "answer": "Explanation and example of linkage isomerism",
        "explanation": "1. Explanation: Linkage isomerism arises in a coordination compound containing an ambidentate ligand that can bind to the central metal atom through either of two different donor atoms.\n2. Example:\n- Yellow form: [Co(NH3)5(NO2)]Cl2 (Pentaamminenitrito-N-cobalt(III) chloride) where NO2⁻ coordinates via Nitrogen atom (Co-NO2).\n- Red form: [Co(NH3)5(ONO)]Cl2 (Pentaamminenitrito-O-cobalt(III) chloride) where NO2⁻ coordinates via Oxygen atom (Co-ONO)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is the crystal field splitting energy (CFSE)? Draw a diagram showing splitting of d-orbitals in an octahedral crystal field.",
        "answer": "CFSE definition and octahedral splitting diagram",
        "explanation": "1. CFSE: The energy difference between the lower energy t2g set (dxy, dyz, dzx) and higher energy eg set (dx²-y², dz²) resulting from electrostatic repulsion between metal d-electrons and surrounding ligands. Designated as Δo.\n2. Diagram:\n- Free metal ion has five degenerate d-orbitals.\n- In spherical field, energy raises uniformly.\n- In octahedral field, splits into:\n  - Lower triplet t2g (stabilized by -0.4 Δo or -2/5 Δo)\n  - Upper doublet eg (destabilized by +0.6 Δo or +3/5 Δo)\n- Total separation = Δo (or 10 Dq)."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Discuss the nature of bonding in metal carbonyls with the help of a neat orbital overlap diagram.\n(b) Write the formula and calculate the coordination number of central metal in:\n(i) Potassium trioxalatoferrate(III)\n(ii) Dichloridobis(ethane-1,2-diamine)platinum(IV) nitrate.\n(c) Why are tetrahedral complexes always of high spin?",
        "answer": "Bonding in metal carbonyls, formulas & CN, and tetrahedral high spin justification",
        "explanation": "Marking Scheme:\n(a) Synergic Bonding in Metal Carbonyls (2.5 marks):\n- In metal carbonyls (e.g. Ni(CO)4, Fe(CO)5), bonding involves both σ and π components:\n  1. Metal-Carbon σ-bond: Formed by donation of lone pair of electrons on the carbonyl carbon atom into a vacant hybrid orbital of the transition metal (M <- :C≡O).\n  2. Metal-Carbon π-bond (Back-bonding): Formed by donation of a pair of electrons from a filled metal d-orbital (dxy, dyz, or dzx) into the empty antibonding π* molecular orbital of carbon monoxide (M -> π* CO).\n- This synergic bonding creates a mutual strengthening effect: σ-donation increases electron density on metal, facilitating π-back donation, which in turn strengthens M-C bond while weakening C-O bond.\n\n(b) Formulas and Coordination Numbers (1.5 marks):\n(i) Potassium trioxalatoferrate(III): K3[Fe(C2O4)3]. Oxalate is bidentate (3 × 2 = 6). Coordination number = 6.\n(ii) Dichloridobis(ethane-1,2-diamine)platinum(IV) nitrate: [Pt(en)2Cl2](NO3)2. Coordination number = 2(2) + 2(1) = 6.\n\n(c) Why Tetrahedral Complexes are High Spin (1 mark):\n- In tetrahedral geometry, Δt = (4/9) Δo. The crystal field splitting is very small and is always less than the pairing energy (Δt < P). Consequently, electrons always prefer to enter higher energy orbitals rather than pairing up, so low-spin tetrahedral complexes are rarely observed."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Apply Crystal Field Theory (CFT) to explain:\n(a) Why [Co(NH3)6]³⁺ is diamagnetic whereas [CoF6]³⁻ is paramagnetic.\n(b) The electronic configuration of d⁴, d⁵, d⁶, and d⁷ in an octahedral field for both weak field (Δo < P) and strong field (Δo > P) ligands.",
        "answer": "CFT analysis of Co(III) complexes and CF electronic configurations",
        "explanation": "Marking Scheme:\n(a) Co(III) Complexes (2.5 marks):\n- In both complexes, cobalt is in +3 state: Co³⁺ (3d⁶).\n- [Co(NH3)6]³⁺: NH3 is a strong field ligand. Δo > P. Electrons pair up in t2g orbitals: configuration is t2g⁶ eg⁰. Since there are 0 unpaired electrons, it is diamagnetic.\n- [CoF6]³⁻: F⁻ is a weak field ligand. Δo < P. Pairing does not occur until all orbitals are singly occupied: configuration is t2g⁴ eg² (↑↓ ↑ ↑ in t2g, ↑ ↑ in eg). There are 4 unpaired electrons; hence it is paramagnetic (μ ≈ 4.90 BM).\n\n(b) Octahedral Configurations (2.5 marks):\n- d⁴:\n  Weak field (Δo < P): t2g³ eg¹ (High spin, n = 4)\n  Strong field (Δo > P): t2g⁴ eg⁰ (Low spin, n = 2)\n- d⁵:\n  Weak field: t2g³ eg² (High spin, n = 5)\n  Strong field: t2g⁵ eg⁰ (Low spin, n = 1)\n- d⁶:\n  Weak field: t2g⁴ eg² (High spin, n = 4)\n  Strong field: t2g⁶ eg⁰ (Low spin, n = 0)\n- d⁷:\n  Weak field: t2g⁵ eg² (High spin, n = 3)\n  Strong field: t2g⁶ eg¹ (Low spin, n = 1)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) A coordination compound CrCl3·6H2O is violet in colour. One mole of this compound on treatment with excess AgNO3 yields 3 moles of AgCl precipitate.\n(i) Write the structural formula of the compound.\n(ii) Write its IUPAC name.\n(b) Another isomer of the same formula is green in colour and gives only 1 mole of AgCl with excess AgNO3.\n(i) Write the structural formula of this isomer.\n(ii) Write its IUPAC name.\n(c) What type of isomerism is exhibited by these two compounds?",
        "answer": "Structural identification of chromium(III) hydrate isomers",
        "explanation": "Marking Scheme:\n(a) Violet Compound (2 marks):\n(i) Since 1 mole yields 3 moles of AgCl, all three chloride ions must be ionizable and located outside the coordination sphere: [Cr(H2O)6]Cl3.\n(ii) IUPAC Name: Hexaaquachromium(III) chloride.\n\n(b) Green Isomer (2 marks):\n(i) Since only 1 mole of AgCl is precipitated, only 1 chloride is outside the coordination sphere. Two chlorides are inside as ligands: [Cr(H2O)4Cl2]Cl·2H2O.\n(ii) IUPAC Name: Tetraaquadichloridochromium(III) chloride dihydrate.\n\n(c) Type of Isomerism (1 mark):\nHydrate (or Solvate) Isomerism, because the isomers differ in the number of water molecules coordinated directly to the metal ion versus those held as water of crystallization."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Coordination Complexes in Medicine and Biology\nCoordination compounds play indispensable roles in living organisms and pharmacological therapies. Chlorophyll, the green pigment in plants responsible for photosynthesis, is a coordination compound of magnesium. Hemoglobin, the oxygen-transport protein in red blood cells, contains an iron(II)-porphyrin complex (heme). Vitamin B12 (cyanocobalamin) is a coordination complex of cobalt(III). In modern medicine, synthetic chelating agents are deployed to remove toxic heavy metals from the body (chelation therapy). For example, excess copper in Wilson's disease is removed by D-penicillamine, and lead toxicity is treated with calcium-disodium EDTA.\n(i) Name the central metal ion present in: (a) Chlorophyll, (b) Hemoglobin.\n(ii) Explain how EDTA removes lead ions from the bloodstream in lead poisoning.\n(iii) Which coordination compound of platinum is used as an anticancer drug? State its geometry.\n(iv) What is meant by the 'chelate effect'?",
        "answer": "Solutions to Case Study on Bioinorganic Coordination Chemistry",
        "explanation": "(i) (a) Chlorophyll: Magnesium (Mg²⁺); (b) Hemoglobin: Iron (Fe²⁺).\n(ii) Calcium disodium EDTA [Ca(EDTA)]²⁻ is injected intravenously. Lead (Pb²⁺) forms a far more thermodynamically stable chelate complex with EDTA⁴⁻ than Ca²⁺ (higher stability constant). Pb²⁺ displaces Ca²⁺, and the stable, water-soluble [Pb(EDTA)]²⁻ chelate is safely excreted in urine.\n(iii) Cisplatin (cis-[Pt(NH3)2Cl2]); Geometry: Square planar (dsp² hybridization).\n(iv) Chelate Effect: The enhanced thermodynamic stability of a coordination complex formed by polydentate (chelating) ligands compared to analogous complexes formed by unidentate ligands, driven primarily by favorable entropy increase (ΔS > 0)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) State Werner's coordination theory. Write its main postulates.\n(b) What are the primary and secondary valencies of cobalt in the following compounds:\n(i) [Co(NH3)6]Cl3\n(ii) [Co(NH3)5Cl]Cl2\n(iii) [Co(NH3)4Cl2]Cl\n(c) How many ions are produced by each compound in aqueous solution?",
        "answer": "Werner's theory postulates, valencies, and ionization behaviour",
        "explanation": "Marking Scheme:\n(a) Werner's Postulates (2 marks):\n1. In coordination compounds, metals exhibit two types of valency: Primary (ionizable) and Secondary (non-ionizable).\n2. Primary valency corresponds to the oxidation state of the metal and is satisfied only by negative ions.\n3. Secondary valency corresponds to the coordination number and is satisfied by neutral molecules or negative ions.\n4. Secondary valencies are directed towards fixed spatial positions around the metal, determining the definite stereochemistry/geometry of the complex.\n\n(b) & (c) Valencies and Ionization (3 marks):\n(i) [Co(NH3)6]Cl3:\n- Primary valency = 3 (oxidation state Co³⁺)\n- Secondary valency = 6 (coordination number)\n- Ions produced = 4 ions (1 [Co(NH3)6]³⁺ + 3 Cl⁻).\n(ii) [Co(NH3)5Cl]Cl2:\n- Primary valency = 3\n- Secondary valency = 6 (5 NH3 + 1 Cl⁻)\n- Ions produced = 3 ions (1 [Co(NH3)5Cl]²⁺ + 2 Cl⁻).\n(iii) [Co(NH3)4Cl2]Cl:\n- Primary valency = 3\n- Secondary valency = 6 (4 NH3 + 2 Cl⁻)\n- Ions produced = 2 ions (1 [Co(NH3)4Cl2]⁺ + 1 Cl⁻)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Give reasons for the following:\n(i) [Ni(CO)4] possesses tetrahedral geometry while [Ni(CN)4]²⁻ is square planar.\n(ii) [Fe(H2O)6]³⁺ is strongly paramagnetic whereas [Fe(CN)6]³⁻ is weakly paramagnetic.\n(b) Write the IUPAC names and draw the structures of geometrical isomers of [Co(NH3)4Cl2]⁺.",
        "answer": "VBT geometry comparisons and cis/trans isomers of [Co(NH3)4Cl2]⁺",
        "explanation": "(a) Reasons (3 marks):\n(i) Geometry Comparison: In [Ni(CO)4], Ni(0) has 3d⁸ 4s². Strong ligand CO forces 4s electrons into 3d to make 3d¹⁰; 4s and 4p hybridize as sp³ (tetrahedral). In [Ni(CN)4]²⁻, Ni(II) is 3d⁸; strong ligand CN⁻ forces pairing of 3d electrons, leaving one empty 3d orbital for dsp² hybridization (square planar).\n(ii) Paramagnetism: In [Fe(H2O)6]³⁺, H2O is a weak field ligand (Δo < P). The 3d⁵ electrons remain unpaired (t2g³ eg²), giving 5 unpaired electrons (strongly paramagnetic, μ = 5.92 BM). In [Fe(CN)6]³⁻, CN⁻ is a strong field ligand (Δo > P), forcing pairing into t2g⁵ eg⁰, leaving only 1 unpaired electron (weakly paramagnetic, μ = 1.73 BM).\n\n(b) IUPAC and Geometrical Isomers (2 marks):\n- IUPAC Name: Tetraamminedichloridocobalt(III) ion.\n- cis-isomer: Two Cl⁻ ligands at 90° to each other (adjacent corners of octahedron).\n- trans-isomer: Two Cl⁻ ligands at 180° to each other (opposite axial positions)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Explain the following types of isomerism in coordination compounds with one suitable example for each:\n(i) Ionisation isomerism\n(ii) Solvate (hydrate) isomerism\n(iii) Coordination isomerism\n(iv) Linkage isomerism.",
        "answer": "Four structural isomerisms with representative examples",
        "explanation": "(i) Ionisation Isomerism: Arises when counter ion in a coordination compound is itself a potential ligand and can displace a ligand from the coordination sphere, producing different ions in solution.\nExample: [Co(NH3)5SO4]Br (gives Br⁻) and [Co(NH3)5Br]SO4 (gives SO4²⁻).\n(ii) Solvate Isomerism: Compounds having identical empirical formula but differing in whether solvent molecules (like water) act as ligands or are held as crystal water.\nExample: [Cr(H2O)6]Cl3 (violet) and [Cr(H2O)5Cl]Cl2·H2O (grey-green).\n(iii) Coordination Isomerism: Occurs in compounds where both cation and anion are complex ions, arising from interchange of ligands between the two metal centers.\nExample: [Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6].\n(iv) Linkage Isomerism: Occurs in complexes containing ambidentate ligands having two donor atoms.\nExample: [Co(NH3)5(NO2)]Cl2 (nitro, yellow) and [Co(NH3)5(ONO)]Cl2 (nitrito, red)."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What are the limitations of Valence Bond Theory (VBT)?\n(b) How does Crystal Field Theory (CFT) overcome these limitations?\n(c) Calculate the CFSE for high-spin and low-spin d⁶ octahedral complexes.",
        "answer": "VBT limitations, CFT advantages, and CFSE calculations",
        "explanation": "Marking Scheme:\n(a) Limitations of VBT (2 marks):\n1. It does not explain the origin of colour and electronic absorption spectra of complexes.\n2. It does not give a quantitative interpretation of magnetic data (temperature dependence of magnetism).\n3. It does not distinguish clearly between weak and strong field ligands.\n4. It fails to give quantitative thermodynamic or kinetic stability of complexes.\n\n(b) How CFT Overcomes Limitations (1.5 marks):\n- CFT treats ligands as point charges/dipoles splitting degenerate d-orbitals into t2g and eg sets. It directly explains colour in terms of d-d electronic transitions, accounts quantitatively for magnetic moments, and establishes the spectrochemical series.\n\n(c) CFSE Calculations for d⁶ (1.5 marks):\nFormula: CFSE = [ - 0.4 * n(t2g) + 0.6 * n(eg) ] * Δo + m * P\n1. High Spin (Weak Field, Δo < P): Configuration = t2g⁴ eg².\nCFSE = [ - 0.4(4) + 0.6(2) ] Δo = [ - 1.6 + 1.2 ] Δo = - 0.4 Δo.\n2. Low Spin (Strong Field, Δo > P): Configuration = t2g⁶ eg⁰.\nCFSE = [ - 0.4(6) + 0.6(0) ] Δo + 2 P = - 2.4 Δo + 2 P."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "(a) What is meant by unidentate, bidentate, and ambidentate ligands? Give one example of each.\n(b) Write the formulas of the following:\n(i) Potassium tetrahydroxidozincate(II)\n(ii) Hexaammineplatinum(IV) chloride.",
        "answer": "Ligand classifications and chemical formulas",
        "explanation": "(a) Ligand Classifications (2 marks):\n1. Unidentate Ligand: A ligand that binds to the metal ion through a single donor atom. Example: Cl⁻, NH3, H2O.\n2. Bidentate Ligand: A ligand that can coordinate to the metal ion through two donor atoms simultaneously. Example: Ethane-1,2-diamine (en: H2N-CH2-CH2-NH2) or oxalate ion (C2O4²⁻).\n3. Ambidentate Ligand: A unidentate ligand that possesses two different donor atoms and can coordinate through either of them. Example: SCN⁻ (thiocyanato via S, or isothiocyanato via N).\n\n(b) Chemical Formulas (2 marks):\n(i) Potassium tetrahydroxidozincate(II): K2[Zn(OH)4].\n(ii) Hexaammineplatinum(IV) chloride: [Pt(NH3)6]Cl4."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Explain why [Fe(H2O)6]³⁺ is strongly paramagnetic whereas [Fe(CN)6]³⁻ is weakly paramagnetic using CFT.\n(b) Draw the structures of optical isomers of:\n(i) [Cr(C2O4)3]³⁻\n(ii) cis-[Pt(en)2Cl2]²⁺.\n(c) Name one coordination compound of each used in:\n(i) Cancer therapy\n(ii) Water hardness determination.",
        "answer": "CFT explanation, optical isomer structures, and applications",
        "explanation": "Marking Scheme:\n(a) CFT Explanation (2 marks):\n- Fe³⁺ has 3d⁵ configuration.\n- In [Fe(H2O)6]³⁺: H2O is a weak field ligand (Δo < P). The 5 electrons occupy 5 degenerate d-orbitals singly: t2g³ eg² (5 unpaired electrons, spin-only magnetic moment μ = √35 ≈ 5.92 BM, strongly paramagnetic).\n- In [Fe(CN)6]³⁻: CN⁻ is a strong field ligand (Δo > P). The electrons pair up in the t2g set: t2g⁵ eg⁰ (only 1 unpaired electron, μ = √3 ≈ 1.73 BM, weakly paramagnetic).\n\n(b) Optical Isomer Structures (2 marks):\n(i) [Cr(C2O4)3]³⁻: Forms d- and l-enantiomers (non-superimposable mirror images) with three bidentate oxalate chelate rings arranged in a propeller-like configuration.\n(ii) cis-[Pt(en)2Cl2]²⁺: Octahedral complex lacking plane of symmetry, forming non-superimposable d- and l-forms.\n\n(c) Applications (1 mark):\n(i) Cancer therapy: Cisplatin (cis-[Pt(NH3)2Cl2]).\n(ii) Water hardness determination: Disodium salt of EDTA (Na2EDTA forms stable chelate complexes with Ca²⁺ and Mg²⁺)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "unit_num": 3,
      "title": "Haloalkanes and Haloarenes",
      "unit_title": "Organic Chemistry",
      "weightage_unit": "6 Marks (Organic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following alkyl halides undergoes nucleophilic substitution by SN1 mechanism most rapidly?",
        "answer": "(a) (CH3)3C-Br",
        "explanation": "SN1 reaction proceeds via the formation of a carbocation intermediate in the rate-determining step. The stability of carbocations follows the order: 3° > 2° > 1° > methyl. Tertiary butyl bromide (CH3)3C-Br forms the highly stable tertiary carbocation (CH3)3C⁺, and thus reacts fastest via SN1.",
        "options": [
          "(a) (CH3)3C-Br",
          "(b) (CH3)2CH-Br",
          "(c) CH3-CH2-Br",
          "(d) CH3-Br"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The conversion of an alkyl halide to an alkyl fluoride using AgF, Hg2F2, or CoF2 is known as:",
        "answer": "(a) Swarts reaction",
        "explanation": "Heating an alkyl chloride or bromide in the presence of a metallic fluoride such as AgF, Hg2F2, CoF2, or SbF3 gives alkyl fluorides. This reaction is known as the Swarts reaction.",
        "options": [
          "(a) Swarts reaction",
          "(b) Finkelstein reaction",
          "(c) Wurtz reaction",
          "(d) Sandmeyer reaction"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "An alkyl halide reacts with alcoholic KCN to form an alkyl cyanide as the major product, whereas with alcoholic AgCN it forms an alkyl isocyanide because:",
        "answer": "(a) KCN is ionic providing cyanide ion with C-attack, whereas AgCN is predominantly covalent with N-lone pair attack",
        "explanation": "KCN is ionic and dissociates into K⁺ and :C≡N:⁻. Attack occurs primarily through carbon since C-C bond is much stronger than C-N bond, forming alkyl cyanides (R-CN). AgCN is predominantly covalent; only nitrogen has a free lone pair to attack the carbon of alkyl halide, forming alkyl isocyanides (R-NC).",
        "options": [
          "(a) KCN is ionic providing cyanide ion with C-attack, whereas AgCN is predominantly covalent with N-lone pair attack",
          "(b) AgCN is ionic and KCN is covalent",
          "(c) Cyanide is a monodentate ligand",
          "(d) Isocyanides are thermodynamically more stable than cyanides"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following compounds exhibits optical isomerism (chirality)?",
        "answer": "(a) 2-Chlorobutane",
        "explanation": "In 2-chlorobutane (CH3-*CH(Cl)-CH2-CH3), the C-2 carbon atom is bonded to four completely different groups: -H, -Cl, -CH3, and -CH2CH3. This asymmetric (chiral) carbon makes the molecule chiral and optically active.",
        "options": [
          "(a) 2-Chlorobutane",
          "(b) 1-Chlorobutane",
          "(c) 2-Chloropropane",
          "(d) Chloromethane"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The major product formed when 2-bromopentane is heated with alcoholic KOH is:",
        "answer": "(a) Pent-2-ene",
        "explanation": "According to Saytzeff's (Zaitsev's) rule, dehydrohalogenation of an alkyl halide yields predominantly the more substituted, highly alkylated, and thermodynamically more stable alkene. Elimination from 2-bromopentane yields Pent-2-ene (major, ~81%) and Pent-1-ene (minor, ~19%).",
        "options": [
          "(a) Pent-2-ene",
          "(b) Pent-1-ene",
          "(c) Pentan-2-ol",
          "(d) Pentan-1-ol"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Among the isomeric dichlorobenzenes, p-dichlorobenzene has a significantly higher melting point than ortho and meta isomers because:",
        "answer": "(a) p-isomer has symmetrical structure that fits closely in the crystal lattice",
        "explanation": "The para-isomer has a highly symmetrical centrosymmetric shape. It packs much more tightly and uniformly into the solid crystal lattice than the less symmetrical ortho and meta isomers, requiring significantly more thermal energy to melt (mp: para = 325 K, ortho = 256 K, meta = 249 K).",
        "options": [
          "(a) p-isomer has symmetrical structure that fits closely in the crystal lattice",
          "(b) p-isomer has higher dipole moment",
          "(c) p-isomer has stronger hydrogen bonding",
          "(d) p-isomer has lower molecular weight"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "SN2 reactions proceed with complete:",
        "answer": "(a) Inversion of configuration (Walden inversion)",
        "explanation": "The SN2 mechanism is a concerted, single-step bimolecular reaction where the incoming nucleophile attacks the substrate from the side exactly opposite (180°) to the leaving group (backside attack). This causes an umbrella-like flip in spatial geometry, resulting in complete inversion of configuration (Walden inversion).",
        "options": [
          "(a) Inversion of configuration (Walden inversion)",
          "(b) Retention of configuration",
          "(c) Racemization",
          "(d) None of these"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Chlorobenzene is extremely less reactive towards nucleophilic substitution compared to chloroethane because of:",
        "answer": "(a) Resonance stabilization and sp² hybridization of carbon in C-Cl bond",
        "explanation": "Low reactivity of chlorobenzene is due to: (1) Resonance delocalization imparting partial double bond character to C-Cl bond (shorter and stronger, 169 pm vs 177 pm), (2) sp² hybridized aromatic carbon is more electronegative than sp³ carbon, holding bonding electrons tightly, (3) Instability of phenyl cation, and (4) Electrostatic repulsion by π-electron cloud.",
        "options": [
          "(a) Resonance stabilization and sp² hybridization of carbon in C-Cl bond",
          "(b) Lower boiling point",
          "(c) Presence of chlorine atom",
          "(d) High polarity of benzene ring"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Chloroform (CHCl3) is stored in closed dark brown bottles filled completely to the neck to prevent:",
        "answer": "(a) Oxidation by air and light to poisonous phosgene (COCl2)",
        "explanation": "In the presence of light and atmospheric oxygen, chloroform is slowly oxidized into an extremely poisonous and suffocating gas called phosgene (carbonyl chloride, COCl2): 2 CHCl3 + O2 -(light)-> 2 COCl2 + 2 HCl.",
        "options": [
          "(a) Oxidation by air and light to poisonous phosgene (COCl2)",
          "(b) Evaporation of chloroform",
          "(c) Formation of chloromethane",
          "(d) Reduction of chloroform"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The best reagent for converting ethanol (CH3CH2OH) into chloroethane (CH3CH2Cl) is:",
        "answer": "(a) SOCl2 in presence of pyridine",
        "explanation": "Thionyl chloride (SOCl2) is preferred (Darzens halogenation) because the side products formed, sulfur dioxide (SO2) and hydrogen chloride (HCl), are both gases that escape into the atmosphere, leaving behind virtually pure alkyl chloride without demanding separation steps.",
        "options": [
          "(a) SOCl2 in presence of pyridine",
          "(b) PCl5",
          "(c) PCl3",
          "(d) Conc. HCl + ZnCl2"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Reaction of chlorobenzene with methyl chloride in the presence of sodium metal and dry ether is an example of:",
        "answer": "(a) Wurtz-Fittig reaction",
        "explanation": "A mixture of an aryl halide (chlorobenzene) and an alkyl halide (methyl chloride) reacts with metallic sodium in dry ether to form an alkylarene (toluene). This is known as the Wurtz-Fittig reaction: C6H5Cl + 2 Na + CH3Cl -> C6H5CH3 + 2 NaCl.",
        "options": [
          "(a) Wurtz-Fittig reaction",
          "(b) Wurtz reaction",
          "(c) Fittig reaction",
          "(d) Ullmann reaction"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following compounds has the highest dipole moment?",
        "answer": "(a) CH3Cl",
        "explanation": "Dipole moment μ = q × d. Although fluorine is more electronegative than chlorine (q is larger for C-F), the C-Cl bond length (d = 178 pm) is significantly longer than C-F bond length (d = 139 pm). The product of charge and distance is larger for CH3Cl (1.860 D) than for CH3F (1.847 D).",
        "options": [
          "(a) CH3Cl",
          "(b) CH3F",
          "(c) CH3Br",
          "(d) CH3I"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The addition of HBr to propene in the presence of benzoyl peroxide gives:",
        "answer": "(a) 1-Bromopropane",
        "explanation": "In the presence of peroxide, HBr adds to unsymmetrical alkenes contrary to Markovnikov's rule (Kharasch / Peroxide effect) via a free-radical mechanism, yielding 1-bromopropane as the major product: CH3-CH=CH2 + HBr -(peroxide)-> CH3-CH2-CH2-Br.",
        "options": [
          "(a) 1-Bromopropane",
          "(b) 2-Bromopropane",
          "(c) 1,2-Dibromopropane",
          "(d) Allyl bromide"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following haloalkanes will react fastest with aqueous KOH via SN2 mechanism?",
        "answer": "(a) CH3-I",
        "explanation": "In SN2 reactions with identical alkyl groups, reaction rate depends on leaving group ability. Iodide ion (I⁻) is the best leaving group because C-I bond has the lowest bond dissociation enthalpy and largest bond length. Reactivity order: R-I > R-Br > R-Cl > R-F.",
        "options": [
          "(a) CH3-I",
          "(b) CH3-Br",
          "(c) CH3-Cl",
          "(d) CH3-F"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Preparation of alkyl iodides by the reaction of alkyl chlorides or bromides with sodium iodide in dry acetone is called:",
        "answer": "(a) Finkelstein reaction",
        "explanation": "R-X + NaI -(dry acetone)-> R-I + NaX (where X = Cl, Br). NaCl and NaBr precipitate in dry acetone and are removed, driving the equilibrium forward according to Le Chatelier's principle. This is the Finkelstein reaction.",
        "options": [
          "(a) Finkelstein reaction",
          "(b) Swarts reaction",
          "(c) Kolbe's reaction",
          "(d) Reimer-Tiemann reaction"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Reaction of bromobenzene with magnesium metal in dry ether gives:",
        "answer": "(a) Phenylmagnesium bromide (Grignard reagent)",
        "explanation": "C6H5Br + Mg -(dry ether)-> C6H5MgBr (phenylmagnesium bromide). This is an organometallic compound known as Grignard reagent.",
        "options": [
          "(a) Phenylmagnesium bromide (Grignard reagent)",
          "(b) Biphenyl",
          "(c) Benzene",
          "(d) Phenol"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The presence of a nitro (-NO2) group at which position(s) drastically accelerates the nucleophilic substitution of chlorobenzene?",
        "answer": "(a) Ortho and Para positions only",
        "explanation": "During nucleophilic aromatic substitution, a carbanion intermediate (Meisenheimer complex) is formed. Resonance structures show that the negative charge delocalizes exclusively onto the ortho and para positions. Strong electron-withdrawing -NO2 groups at these positions stabilize the carbanion directly by resonance, dramatically increasing substitution rate.",
        "options": [
          "(a) Ortho and Para positions only",
          "(b) Meta position only",
          "(c) Meta and Para positions only",
          "(d) All positions equally"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following compounds has zero dipole moment?",
        "answer": "(a) Carbon tetrachloride (CCl4)",
        "explanation": "CCl4 has a regular symmetrical tetrahedral geometry with four identical C-Cl bond dipoles pointing toward vertices of a regular tetrahedron. The vector sum of the individual dipoles cancels out completely, resulting in a net dipole moment μ = 0.",
        "options": [
          "(a) Carbon tetrachloride (CCl4)",
          "(b) Chloroform (CHCl3)",
          "(c) Dichloromethane (CH2Cl2)",
          "(d) Chloromethane (CH3Cl)"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Freon-12 (CF2Cl2) is widely manufactured from CCl4 by the reaction with antimony trifluoride in the presence of SbCl5. This is an application of:",
        "answer": "(a) Swarts reaction",
        "explanation": "3 CCl4 + 2 SbF3 -(SbCl5 catalyst)-> 3 CCl2F2 (Freon-12) + 2 SbCl3. Fluorination using heavy metal fluorides is a Swarts halogen exchange reaction.",
        "options": [
          "(a) Swarts reaction",
          "(b) Finkelstein reaction",
          "(c) Wurtz reaction",
          "(d) Sandmeyer reaction"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A racemic mixture is optically inactive because of:",
        "answer": "(a) External compensation",
        "explanation": "A racemic mixture contains equimolar (50:50) quantities of dextrorotatory (+) and laevorotatory (-) enantiomers. The optical rotation caused by molecules of one enantiomer is cancelled out exactly by the equal and opposite rotation caused by molecules of the other enantiomer. This cancellation is called external compensation.",
        "options": [
          "(a) External compensation",
          "(b) Internal compensation",
          "(c) Molecular symmetry",
          "(d) Absence of chiral center"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Reaction of chlorobenzene with concentrated HNO3 and concentrated H2SO4 yields mainly:",
        "answer": "(a) 1-Chloro-4-nitrobenzene (p-chloronitrobenzene)",
        "explanation": "Chlorine is ortho/para-directing in electrophilic aromatic substitutions due to +R resonance stabilization. The para-isomer is formed as the major product (~80%) due to minimum steric hindrance compared to the crowded ortho position.",
        "options": [
          "(a) 1-Chloro-4-nitrobenzene (p-chloronitrobenzene)",
          "(b) 1-Chloro-2-nitrobenzene (o-chloronitrobenzene)",
          "(c) 1-Chloro-3-nitrobenzene (m-chloronitrobenzene)",
          "(d) Nitrobenzene"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The IUPAC name of (CH3)3C-CH2-Br is:",
        "answer": "(a) 1-Bromo-2,2-dimethylpropane",
        "explanation": "Longest continuous carbon chain containing the bromine atom has 3 carbons (propane). C-1 carries the bromo group, and C-2 carries two methyl groups: 1-Bromo-2,2-dimethylpropane.",
        "options": [
          "(a) 1-Bromo-2,2-dimethylpropane",
          "(b) 2-Bromo-2-methylbutane",
          "(c) Neopentyl bromide",
          "(d) 1-Bromo-2-methylpropane"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following compounds gives a yellow precipitate of CHI3 when treated with I2 and NaOH (Iodoform test)?",
        "answer": "(a) Ethanol",
        "explanation": "Compounds containing CH3-CH(OH)- group or CH3-C=O group give a positive iodoform test. Ethanol (CH3-CH2-OH) contains the CH3-CH(OH)- unit and is oxidized by I2/NaOH to acetaldehyde, which undergoes iodination and cleavage to form yellow crystalline CHI3 (iodoform).",
        "options": [
          "(a) Ethanol",
          "(b) Methanol",
          "(c) 1-Propanol",
          "(d) Diethyl ether"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Grignard reagents are synthesized and preserved under strictly anhydrous conditions because:",
        "answer": "(a) they react with traces of moisture (water) to form hydrocarbons",
        "explanation": "The carbon-magnesium bond in Grignard reagents is highly polarized (R^δ⁻ - Mg^δ⁺X). The carbanionic alkyl group acts as a powerful base and readily abstracts a proton even from weakly acidic sources like water: R-MgX + H2O -> R-H + Mg(OH)X, destroying the reagent.",
        "options": [
          "(a) they react with traces of moisture (water) to form hydrocarbons",
          "(b) they decompose into magnesium metal",
          "(c) ether evaporates in moisture",
          "(d) they are soluble in water"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following is used as an insecticide and has the chemical name p,p'-dichlorodiphenyltrichloroethane?",
        "answer": "(a) DDT",
        "explanation": "DDT (p,p'-dichlorodiphenyltrichloroethane) was the first chlorinated organic insecticide synthesized by Paul Müller in 1939.",
        "options": [
          "(a) DDT",
          "(b) BHC",
          "(c) Freon-11",
          "(d) Westrosol"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Tertiary alkyl halides react predominantly by SN1 mechanism in polar protic solvents.\nReason (R): Tertiary carbocations are highly stabilized by hyperconjugation and inductive effect (+I) of three alkyl groups.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The stability of 3° carbocation lowers the activation energy for the rate-determining ionization step.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Chlorobenzene is less reactive towards nucleophilic substitution than chloroethane.\nReason (R): In chlorobenzene, the C-Cl bond acquires partial double bond character due to resonance delocalization of chlorine lone pairs.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Addition of HBr to propene in the presence of benzoyl peroxide yields 1-bromopropane.\nReason (R): The reaction proceeds via a free radical mechanism involving the formation of a more stable 2° alkyl free radical.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the anti-Markovnikov regioselectivity.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Hydrolysis of 2-bromooctane with aqueous NaOH results in an alcohol with inversion of optical configuration.\nReason (R): The reaction follows an SN2 pathway involving backside attack of hydroxide ion on the chiral substrate.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly (Walden inversion in SN2).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Chloroform is stored in dark coloured bottles filled to the brim with 1% ethanol added.\nReason (R): Ethanol acts as a negative catalyst to retard oxidation and converts any phosgene formed into harmless diethyl carbonate.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the role of 1% ethanol in chloroform preservation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Explain why:\n(i) Alkyl halides, though polar, are practically immiscible with water.\n(ii) The dipole moment of chlorobenzene is lower than that of cyclohexyl chloride.",
        "answer": "Explanations of water immiscibility and dipole moment difference",
        "explanation": "(i) Immiscibility: Alkyl halides cannot form intermolecular hydrogen bonds with water molecules. The new dipole-dipole attractions formed between alkyl halide and water are far weaker than the strong existing hydrogen bonds among water molecules, making dissolution energetically unfavorable.\n(ii) Dipole Moment: In chlorobenzene, carbon attached to chlorine is sp² hybridized (more s-character, more electronegative, opposes electron withdrawal by chlorine) and resonance delocalizes chlorine lone pairs towards ring (+R effect). In cyclohexyl chloride, carbon is sp³ hybridized and only electron-withdrawing -I effect operates without resonance opposition."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Give the mechanism of SN1 and SN2 reactions taking 2-bromobutane and 1-bromobutane as examples respectively.",
        "answer": "Mechanisms of SN1 and SN2 reactions",
        "explanation": "1. SN1 Mechanism (e.g., 2-bromobutane):\n- Step 1 (Slow, Rate-determining): Ionization of C-Br bond to form a planar carbocation intermediate: CH3-CH(Br)-CH2CH3 -> [CH3-CH⁺-CH2CH3] + Br⁻.\n- Step 2 (Fast): Nucleophile (OH⁻) attacks the planar carbocation from either face with equal probability, yielding a racemic mixture (~50% retention + ~50% inversion).\n\n2. SN2 Mechanism (e.g., 1-bromobutane):\n- Single-step concerted mechanism: Incoming nucleophile (OH⁻) attacks C-1 from the backside (180° opposite to Br).\n- A pentacoordinated transition state [HO···CH2(C3H7)···Br]⁻ is formed where C-OH bond formation and C-Br bond cleavage occur simultaneously.\n- Bromide departs, yielding alcohol with complete inversion of stereochemical configuration."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "How do you convert:\n(i) Propene to 1-iodopropane\n(ii) Benzene to diphenyl (biphenyl)?",
        "answer": "Conversions with chemical equations",
        "explanation": "(i) Propene to 1-iodopropane:\n- Step 1: Propene is treated with HBr in presence of peroxide (anti-Markovnikov addition) to give 1-bromopropane:\n  CH3-CH=CH2 + HBr -(peroxide)-> CH3-CH2-CH2-Br.\n- Step 2: 1-Bromopropane is heated with NaI in dry acetone (Finkelstein reaction):\n  CH3-CH2-CH2-Br + NaI -(dry acetone)-> CH3-CH2-CH2-I + NaBr(s).\n\n(ii) Benzene to diphenyl (Fittig reaction):\n- Step 1: Bromination of benzene using Br2/FeBr3 yields bromobenzene:\n  C6H6 + Br2 -(FeBr3)-> C6H5Br + HBr.\n- Step 2: Bromobenzene is treated with sodium metal in dry ether:\n  2 C6H5Br + 2 Na -(dry ether)-> C6H5-C6H5 (diphenyl) + 2 NaBr."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Write the major monohalo product in each of the following reactions:\n(i) CH3-CH2-CH=CH2 + HBr -(peroxide)->\n(ii) Cyclohexanol + SOCl2 ->\n(iii) Toluene + Br2 -(Fe / dark)->",
        "answer": "Major products of 3 organic reactions",
        "explanation": "(i) CH3-CH2-CH=CH2 + HBr -(peroxide)-> CH3-CH2-CH2-CH2-Br (1-Bromobutane, anti-Markovnikov addition).\n(ii) Cyclohexanol + SOCl2 -> Chlorocyclohexane + SO2(g) + HCl(g) (Darzens halogenation).\n(iii) Toluene + Br2 -(Fe/dark)-> 4-Bromotoluene (p-bromotoluene, major product due to less steric hindrance) + 2-bromotoluene (minor)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "Explain why chlorobenzene is resistant to nucleophilic substitution, but 2,4,6-trinitrochlorobenzene is readily hydrolyzed with warm water alone.",
        "answer": "Effect of nitro groups on nucleophilic aromatic substitution",
        "explanation": "1. Chlorobenzene: The C-Cl bond possesses partial double bond character due to resonance (+R effect). Furthermore, the carbanion intermediate formed upon nucleophilic attack is unstable in the absence of electron-withdrawing groups.\n2. 2,4,6-Trinitrochlorobenzene (Picryl chloride): The three powerful electron-withdrawing nitro groups (-NO2) at ortho and para positions exert immense -M and -I effects, drastically decreasing electron density on the benzene ring and strongly stabilizing the carbanionic Meisenheimer intermediate by dispersing negative charge onto the electronegative oxygen atoms. As a result, C-Cl bond is cleaved extremely easily by warm water."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "State Saytzeff's rule. Give the elimination reaction of 2-bromopentane with alcoholic KOH, naming all products and indicating the major product.",
        "answer": "Saytzeff's rule and dehydrohalogenation of 2-bromopentane",
        "explanation": "1. Saytzeff's Rule: In dehydrohalogenation reactions of alkyl halides, the preferred alkene is the one which has the greater number of alkyl substituents attached to the doubly bonded carbon atoms (more highly substituted alkene).\n2. Reaction of 2-bromopentane with alc. KOH:\nCH3-CH2-CH2-CH(Br)-CH3 + alc. KOH -(heat)->\n- Major Product (~81%): Pent-2-ene (CH3-CH2-CH=CH-CH3) - disubstituted alkene.\n- Minor Product (~19%): Pent-1-ene (CH3-CH2-CH2-CH=CH2) - monosubstituted alkene."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "What is meant by:\n(i) Chiral carbon atom\n(ii) Enantiomers?",
        "answer": "Definitions of chiral carbon and enantiomers",
        "explanation": "(i) Chiral (Asymmetric) Carbon: An sp³ hybridized carbon atom bonded to four completely different atoms or groups of atoms. A molecule containing a single chiral carbon lacks an alternating axis of symmetry and is non-superimposable on its mirror image.\n(ii) Enantiomers: Stereoisomers that are non-superimposable mirror images of each other. Enantiomers possess identical physical properties (boiling point, melting point, refractive index) except that they rotate plane-polarized light in equal magnitudes but opposite directions."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Write chemical equations for the following named reactions:\n(i) Sandmeyer reaction\n(ii) Finkelstein reaction\n(iii) Wurtz reaction",
        "answer": "Equations for named organic reactions",
        "explanation": "(i) Sandmeyer Reaction: Benzene diazonium chloride reacts with Cu2Cl2/HCl (or Cu2Br2/HBr) to form chlorobenzene (or bromobenzene):\nC6H5N2⁺Cl⁻ -(Cu2Cl2/HCl)-> C6H5Cl + N2(g).\n\n(ii) Finkelstein Reaction: Alkyl chloride/bromide reacts with NaI in dry acetone to form alkyl iodide:\nCH3-CH2-Br + NaI -(dry acetone)-> CH3-CH2-I + NaBr(s).\n\n(iii) Wurtz Reaction: Two molecules of alkyl halide react with sodium metal in dry ether to form a symmetrical alkane:\n2 CH3-Br + 2 Na -(dry ether)-> CH3-CH3 (ethane) + 2 NaBr."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Which alkyl halide in each pair would you expect to react faster in an SN2 reaction and why?\n(i) 1-Bromobutane or 2-Bromobutane\n(ii) 1-Chlorobutane or 1-Iodobutane",
        "answer": "SN2 reactivity predictions with justifications",
        "explanation": "(i) 1-Bromobutane reacts faster than 2-bromobutane because 1-bromobutane is a primary (1°) halide with minimal steric hindrance at the reactive carbon center, allowing unobstructed backside approach of the nucleophile. 2-Bromobutane is a secondary (2°) halide with greater steric congestion.\n(ii) 1-Iodobutane reacts faster than 1-chlorobutane because iodide ion (I⁻) is a much better leaving group than chloride (Cl⁻) due to longer C-I bond length and lower C-I bond dissociation energy."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Write the IUPAC names of the following:\n(i) CH3-CH(Cl)-CH(CH3)-CH3\n(ii) (CCl3)3C-Cl",
        "answer": "IUPAC names of haloalkanes",
        "explanation": "(i) CH3-CH(Cl)-CH(CH3)-CH3: Numbering from left gives lower locants (2,3). Name: 2-Chloro-3-methylbutane.\n(ii) (CCl3)3C-Cl: Longest continuous carbon chain has 3 carbons (propane). C-2 is bonded to a chloro group and three trichloromethyl groups, giving: 2-(Trichloromethyl)-1,1,1,2,3,3,3-heptachloropropane."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) An organic compound 'A' having molecular formula C4H9Br on reaction with alcoholic KOH yields compound 'B'. Compound 'B' on ozonolysis gives only ethanal. Identify compounds 'A' and 'B', write all reactions involved, and explain the mechanism of elimination.\n(b) Why does primary alkyl halide prefer SN2 while tertiary alkyl halide prefers SN1 mechanism?",
        "answer": "Identification of A = 2-bromobutane, B = but-2-ene, and SN1 vs SN2 mechanistic comparison",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3 marks):\n- Ozonolysis product is ethanal (CH3CHO): Two molecules of ethanal indicate that compound 'B' is But-2-ene (CH3-CH=CH-CH3):\n  CH3-CH=CH-CH3 + O3 -> Ozonide -(Zn/H2O)-> 2 CH3CHO.\n- Since 'B' is But-2-ene formed by dehydrohalogenation of C4H9Br with alc. KOH, compound 'A' must be 2-Bromobutane:\n  CH3-CH2-CH(Br)-CH3 (A) + alc. KOH -(heat)-> CH3-CH=CH-CH3 (B, But-2-ene, major) + KBr + H2O.\n- Mechanism: It follows E2 (bimolecular elimination) where base (OH⁻) removes a proton from β-carbon while Br⁻ leaves from α-carbon simultaneously, driven by Saytzeff orientation.\n\n(b) SN1 vs SN2 Preference (2 marks):\n- 1° Alkyl Halides prefer SN2 because the primary carbon has only one alkyl substituent, minimizing steric hindrance and allowing easy backside attack by incoming nucleophile. Conversely, 1° carbocations are extremely unstable, making SN1 ionization energetically prohibitive.\n- 3° Alkyl Halides prefer SN1 because three bulky alkyl groups sterically shield the carbon center, blocking backside nucleophilic approach (disfavoring SN2). Meanwhile, ionization generates a tertiary carbocation that is exceptionally stabilized by hyperconjugation and +I inductive effects."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Discuss the electrophilic substitution reactions of chlorobenzene: halogenation, nitration, sulfonation, and Friedel-Crafts alkylation. Why is the halogen atom ortho/para-directing but deactivating?\n(b) How will you convert:\n(i) Chlorobenzene to phenol\n(ii) Ethyl chloride to propanoic acid?",
        "answer": "Electrophilic substitutions of chlorobenzene and chemical conversions",
        "explanation": "Marking Scheme:\n(a) Electrophilic Substitutions and Directing Nature (3.5 marks):\n1. Ortho/Para Directing but Deactivating:\n- Halogen has lone pairs that participate in resonance with the π-system of benzene (+R effect), increasing electron density specifically at ortho and para positions compared to meta positions.\n- However, halogen is strongly electronegative and withdraws electron density via inductive effect (-I effect), deactivating the ring overall relative to benzene.\n- Since inductive effect dominates resonance in deactivation, halogen deactivates the ring, but orientation is governed by resonance (+R), directing electrophiles to ortho and para positions.\n2. Reactions:\n- Halogenation: Chlorobenzene + Cl2 -(anhyd. FeCl3)-> 1,4-Dichlorobenzene (p-major) + 1,2-dichlorobenzene (o-minor).\n- Nitration: Chlorobenzene + conc. HNO3/H2SO4 -> 1-Chloro-4-nitrobenzene (p-major) + 1-chloro-2-nitrobenzene (o-minor).\n- Sulfonation: Chlorobenzene + conc. H2SO4 -(heat)-> 4-Chlorobenzenesulfonic acid (p-major).\n- Friedel-Crafts Alkylation: Chlorobenzene + CH3Cl -(anhyd. AlCl3)-> 1-Chloro-4-methylbenzene (p-chlorotoluene, major).\n\n(b) Conversions (1.5 marks):\n(i) Chlorobenzene to Phenol (Dow's Process):\nC6H5Cl + 2 NaOH -(623 K, 300 atm)-> C6H5ONa -(H⁺)-> C6H5OH (Phenol).\n(ii) Ethyl chloride to Propanoic acid:\nCH3CH2Cl + alc. KCN -> CH3CH2CN -(H3O⁺/heat)-> CH3CH2COOH."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) What are polyhalogen compounds? Write short notes on the environmental and health impacts of:\n(i) Chloroform (CHCl3)\n(ii) Carbon tetrachloride (CCl4)\n(iii) Freons (CFCs)\n(iv) DDT.\n(b) Write the structural formula and IUPAC name of DDT.",
        "answer": "Detailed account of polyhalogen compounds and DDT structure",
        "explanation": "Marking Scheme:\n(a) Polyhalogen Compounds and Impacts (3.5 marks):\n- Definition: Carbon compounds containing more than one halogen atom.\n(i) Chloroform (CHCl3): Inhaling chloroform depresses the central nervous system (anesthetic). Chronic exposure damages liver and kidneys. Oxidizes in light and air to form lethal phosgene gas (COCl2).\n(ii) Carbon tetrachloride (CCl4): Highly toxic liver poison (carcinogen). In atmosphere, it depletes the ozone layer, leading to increased UV-B radiation exposure.\n(iii) Freons (CFCs, e.g. CF2Cl2): Extremely stable, volatile chlorofluorocarbons used as refrigerants and propellants. They diffuse into the stratosphere where UV radiation breaks C-Cl bonds, releasing chlorine free radicals (Cl•) that catalytically destroy the stratospheric ozone layer.\n(iv) DDT (p,p'-Dichlorodiphenyltrichloroethane): Extremely persistent organochlorine pesticide. It is non-biodegradable, highly lipid-soluble, and undergoes biomagnification along food chains, disrupting calcium metabolism in birds and thinning eggshells.\n\n(b) Structural Formula and IUPAC Name of DDT (1.5 marks):\n- Structure: (p-Cl-C6H4)2-CH-CCl3.\n- IUPAC Name: 1,1,1-Trichloro-2,2-bis(4-chlorophenyl)ethane."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Nucleophilic Substitution in Alkyl Halides\nNucleophilic substitution reactions of alkyl halides occur by two distinct pathways: SN1 (unimolecular) and SN2 (bimolecular). The choice of pathway depends crucially on the structure of the substrate, the nature of the leaving group, the nucleophile, and the solvent polarity. In SN2 reactions, rate = k [RX] [Nu⁻]; the process is concerted and results in complete inversion of configuration (Walden inversion). In SN1 reactions, rate = k [RX]; ionization produces a planar carbocation that reacts rapidly with nucleophiles to yield racemic mixtures. Bulky alkyl substituents disfavor SN2 by steric shielding but favor SN1 by carbocation stabilization.\n(i) Which compound undergoes SN1 faster: 1-bromobutane or 2-bromobutane? Why?\n(ii) Predict the stereochemical outcome of an SN2 reaction on an optically active alkyl halide.\n(iii) Why are allylic and benzylic halides exceptionally reactive towards SN1 substitution?\n(iv) What is the effect of changing solvent from water to acetone on the rate of an SN2 reaction?",
        "answer": "Solutions to Case Study on Nucleophilic Substitution Kinetics and Stereochemistry",
        "explanation": "(i) 2-Bromobutane reacts faster via SN1 because it forms a secondary carbocation (CH3-CH⁺-CH2CH3) which is more stable than the primary carbocation formed by 1-bromobutane.\n(ii) Complete inversion of stereochemical configuration (Walden inversion).\n(iii) Allylic and benzylic halides ionize to form allyl (CH2=CH-CH2⁺) and benzyl (C6H5CH2⁺) carbocations, which are exceptionally stable due to resonance delocalization of positive charge across the π-system.\n(iv) Acetone is a polar aprotic solvent that does not solvate or encapsulate nucleophiles via hydrogen bonding. This leaves the nucleophile 'naked' and highly reactive, dramatically accelerating the rate of SN2 reactions."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) An alkyl halide C5H11Br (A) reacts with ethanolic KOH to give an alkene (B), which on ozonolysis gives a mixture of propan-2-one and ethanal. Deduce the structures of (A) and (B) and write all reactions.\n(b) Give reasons:\n(i) Alkyl halides give cyanides with KCN but isocyanides with AgCN.\n(ii) Haloarenes are insoluble in water.",
        "answer": "Deduction of C5H11Br, equations, and chemical explanations",
        "explanation": "Marking Scheme:\n(a) Deduction of Structures (3 marks):\n- Ozonolysis products are propan-2-one (acetone, (CH3)2C=O) and ethanal (CH3CHO).\n- Joining the carbonyl fragments with a double bond gives alkene 'B':\n  (CH3)2C=CH-CH3 (2-Methylbut-2-ene).\n- Since alkene (B) is formed by dehydrohalogenation of C5H11Br (A) using ethanolic KOH, by Saytzeff's rule compound 'A' must be 2-Bromo-2-methylbutane:\n  (CH3)2C(Br)-CH2-CH3 (A).\n  Reaction: (CH3)2C(Br)-CH2-CH3 + alc. KOH -(heat)-> (CH3)2C=CH-CH3 (B) + KBr + H2O.\n  Ozonolysis: (CH3)2C=CH-CH3 + O3 -(Zn/H2O)-> (CH3)2C=O + CH3CHO.\n\n(b) Reasons (2 marks):\n(i) KCN is predominantly ionic; the cyanide ion (:C≡N:⁻) is an ambidentate nucleophile. Attack via carbon occurs because C-C bond (348 kJ/mol) is more stable than C-N bond (305 kJ/mol), forming alkyl cyanide. AgCN is covalent; only the lone pair on nitrogen is available for attack, forming alkyl isocyanide (R-NC).\n(ii) Haloarenes cannot form hydrogen bonds with water molecules, nor can they overcome the existing strong hydrogen-bonding network between water molecules, rendering them insoluble in water."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Write short notes on:\n(i) Wurtz-Fittig reaction\n(ii) Fittig reaction\n(iii) Ullmann reaction.\n(b) What happens when:\n(i) Ethyl bromide is treated with silver nitrite (AgNO2)?\n(ii) Methyl chloride is treated with sodium ethoxide (C2H5ONa)?",
        "answer": "Coupling reactions and chemical equations",
        "explanation": "(a) Named Coupling Reactions (3 marks):\n(i) Wurtz-Fittig Reaction: An aryl halide reacts with an alkyl halide in the presence of sodium metal in dry ether to form an alkylarene:\nC6H5Br + 2 Na + CH3Br -(dry ether)-> C6H5CH3 (toluene) + 2 NaBr.\n(ii) Fittig Reaction: Two molecules of aryl halide react with sodium metal in dry ether to form a diaryl (biphenyl):\n2 C6H5Br + 2 Na -(dry ether)-> C6H5-C6H5 (diphenyl) + 2 NaBr.\n(iii) Ullmann Reaction: Heating an iodobenzene with copper powder in a sealed tube yields biphenyl:\n2 C6H5I + Cu -(heat)-> C6H5-C6H5 + CuI2.\n\n(b) Reactions (2 marks):\n(i) With AgNO2: Silver nitrite is predominantly covalent. Nitrogen lone pair attacks the ethyl group to give nitroethane:\nCH3CH2Br + AgNO2 -> CH3CH2NO2 (nitroethane) + AgBr(s).\n(ii) With C2H5ONa (Williamson Ether Synthesis):\nCH3Cl + C2H5O⁻Na⁺ -> CH3-O-C2H5 (methoxyethane / ethyl methyl ether) + NaCl."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Arrange each set of compounds in order of increasing property indicated:\n(i) 1-Chloropropane, 2-chloropropane, 1-chlorobutane (boiling points)\n(ii) 1-Bromobutane, 1-bromobut-2-ene, 1-bromo-2-methylpropane (reactivity towards SN1)\n(iii) CH3Cl, CH3Br, CH3I, CH3F (reactivity towards SN2)\n(iv) Chlorobenzene, p-nitrochlorobenzene, 2,4-dinitrochlorobenzene (reactivity towards nucleophilic substitution).",
        "answer": "Four property arrangements with chemical reasoning",
        "explanation": "(i) Boiling Points: 2-Chloropropane < 1-Chloropropane < 1-Chlorobutane.\nReason: Higher molecular mass increases van der Waals forces (1-chlorobutane > chloropropanes); for isomeric chloropropanes, straight-chain 1-chloropropane has larger surface area than branched 2-chloropropane.\n(ii) Reactivity towards SN1: 1-Bromobutane < 1-Bromo-2-methylpropane < 1-Bromobut-2-ene.\nReason: SN1 rate depends on carbocation stability. 1-Bromobut-2-ene forms resonance-stabilized allylic carbocation (CH3-CH=CH-CH2⁺ ↔ CH3-CH⁺-CH=CH2).\n(iii) Reactivity towards SN2: CH3F < CH3Cl < CH3Br < CH3I.\nReason: Leaving group ability increases down the halogen group (I⁻ > Br⁻ > Cl⁻ > F⁻) due to lower bond dissociation energy.\n(iv) Nucleophilic Substitution: Chlorobenzene < p-Nitrochlorobenzene < 2,4-Dinitrochlorobenzene.\nReason: Strongly electron-withdrawing -NO2 groups at ortho/para positions stabilize the carbanion Meisenheimer intermediate."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Define optical activity. Explain the terms: plane-polarized light, dextrorotatory, and laevorotatory.\n(b) What is a racemic mixture? Why is it optically inactive?\n(c) Draw the structures of optical isomers (enantiomers) of lactic acid (2-hydroxypropanoic acid).",
        "answer": "Optical activity concepts, racemic mixture, and lactic acid enantiomers",
        "explanation": "Marking Scheme:\n(a) Optical Activity Definitions (2 marks):\n- Optical Activity: The ability of certain chiral organic substances to rotate the plane of polarized light when a beam passes through their solution.\n- Plane-Polarized Light: Light whose electric field oscillations are confined strictly to a single plane.\n- Dextrorotatory (+ or d): A substance that rotates the plane of polarized light in a clockwise direction.\n- Laevorotatory (- or l): A substance that rotates the plane of polarized light in an anticlockwise direction.\n\n(b) Racemic Mixture (1.5 marks):\n- An equimolar (1:1) mixture of dextrorotatory and laevorotatory enantiomers of a compound is called a racemic modification (or racemic mixture), designated as (±) or dl.\n- It is optically inactive due to external compensation: the optical rotation caused by the molecules of one enantiomer is cancelled out completely by the equal and opposite optical rotation produced by the molecules of the other enantiomer.\n\n(c) Enantiomers of Lactic Acid (1.5 marks):\n- Lactic acid: CH3-*CH(OH)-COOH. Chiral center at C-2.\n- Enantiomer 1 (+)-lactic acid: COOH at top, CH3 at bottom, -OH on right, -H on left.\n- Enantiomer 2 (-)-lactic acid: Non-superimposable mirror image with -OH on left, -H on right."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "How will you carry out the following conversions:\n(i) 1-Chloropropane to 2-chloropropane\n(ii) Isopropyl alcohol to iodoform\n(iii) Chlorobenzene to p-nitrophenol\n(iv) 2-Bromopropane to 1-bromopropane?",
        "answer": "Four multistep organic conversions",
        "explanation": "(i) 1-Chloropropane to 2-chloropropane:\nCH3CH2CH2Cl + alc. KOH -(heat)-> CH3-CH=CH2 + KCl + H2O.\nCH3-CH=CH2 + HCl -> CH3-CH(Cl)-CH3 (Markovnikov addition).\n\n(ii) Isopropyl alcohol to iodoform:\nCH3-CH(OH)-CH3 + 4 I2 + 6 NaOH -(warm)-> CHI3 (yellow crystals of iodoform) + CH3COONa + 5 NaI + 5 H2O.\n\n(iii) Chlorobenzene to p-nitrophenol:\nC6H5Cl + conc. HNO3/H2SO4 -> p-Chloronitrobenzene (major).\np-Chloronitrobenzene + aq. NaOH -(443 K)-> Sodium p-nitrophenoxide -(dil. HCl)-> p-Nitrophenol.\n\n(iv) 2-Bromopropane to 1-bromopropane:\nCH3-CH(Br)-CH3 + alc. KOH -(heat)-> CH3-CH=CH2 + KBr + H2O.\nCH3-CH=CH2 + HBr -(peroxide)-> CH3-CH2-CH2-Br (anti-Markovnikov addition)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Discuss the mechanism of nucleophilic aromatic substitution in 1-chloro-4-nitrobenzene with aqueous NaOH.\n(b) Explain why a nitro group at meta position has practically no effect on the reactivity of chlorobenzene towards nucleophiles.\n(c) What happens when chlorobenzene is treated with chlorine in the presence of anhydrous FeCl3?",
        "answer": "Mechanism of nucleophilic aromatic substitution, meta-nitro effect, and chlorination",
        "explanation": "Marking Scheme:\n(a) Mechanism in 1-Chloro-4-nitrobenzene (2.5 marks):\n- Step 1 (Slow, Rate-determining step): Hydroxide ion (OH⁻) attacks C-1 carrying the chlorine atom, generating a resonance-stabilized carbanionic σ-complex (Meisenheimer complex). The negative charge delocalizes over the ortho and para positions of the ring and directly onto the oxygen atoms of the para-nitro group: [-O-N⁺(=O)=C6H4(Cl)(OH)]⁻.\n- Step 2 (Fast): Aromaticity is regenerated by the rapid expulsion of the chloride leaving group (Cl⁻), yielding 4-nitrophenol (p-nitrophenol).\n\n(b) Why Meta-Nitro has negligible effect (1.5 marks):\n- When nucleophile attacks at C-1, negative charge appears on carbons ortho and para to the site of attack (positions 2, 4, and 6).\n- If -NO2 is at meta position (position 3 or 5), none of the resonance contributors places the negative charge on the carbon bearing the nitro group. Consequently, the nitro group cannot disperse negative charge by its powerful +M resonance effect, leaving the carbanion unstabilized by resonance.\n\n(c) Chlorination of Chlorobenzene (1 mark):\nC6H5Cl + Cl2 -(anhyd. FeCl3)-> 1,4-Dichlorobenzene (p-isomer, major product) + 1,2-Dichlorobenzene (o-isomer, minor product)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "unit_num": 3,
      "title": "Alcohols, Phenols and Ethers",
      "unit_title": "Organic Chemistry",
      "weightage_unit": "6 Marks (Organic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following compounds gives a white precipitate of 2,4,6-tribromophenol with bromine water?",
        "answer": "(a) Phenol",
        "explanation": "In aqueous solution, phenol dissociates into phenoxide ion which strongly activates the benzene ring towards electrophilic attack. Treatment with bromine water results in polyhalogenation, forming a white precipitate of 2,4,6-tribromophenol.",
        "options": [
          "(a) Phenol",
          "(b) Anisole",
          "(c) Benzoic acid",
          "(d) Benzyl alcohol"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Lucas reagent is a mixture of:",
        "answer": "(a) Anhydrous ZnCl2 and concentrated HCl",
        "explanation": "Lucas reagent is an equimolar mixture of anhydrous zinc chloride (ZnCl2) and concentrated hydrochloric acid (conc. HCl). It is used to distinguish between primary, secondary, and tertiary alcohols based on the rate of turbidity formation (alkyl chloride precipitation).",
        "options": [
          "(a) Anhydrous ZnCl2 and concentrated HCl",
          "(b) Hydrated ZnCl2 and dilute HCl",
          "(c) Pyridine and SOCl2",
          "(d) Anhydrous AlCl3 and concentrated HCl"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The major product formed in the reaction of tert-butyl bromide with sodium methoxide is:",
        "answer": "(a) 2-Methylpropene (Isobutylene)",
        "explanation": "Sodium methoxide (CH3ONa) is a strong base as well as a nucleophile. When reacted with a bulky tertiary alkyl halide ((CH3)3C-Br), steric hindrance suppresses SN2 substitution and elimination (E2) predominates, yielding 2-methylpropene (isobutylene) as the major product.",
        "options": [
          "(a) 2-Methylpropene (Isobutylene)",
          "(b) tert-Butyl methyl ether",
          "(c) 2-Methylpropan-2-ol",
          "(d) But-2-ene"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Ortho-nitrophenol is more steam-volatile than para-nitrophenol because of:",
        "answer": "(a) Intramolecular hydrogen bonding in o-nitrophenol",
        "explanation": "o-Nitrophenol forms an intramolecular hydrogen bond (chelation) between the phenolic -OH and the ortho -NO2 group. This prevents association with other molecules, lowering its boiling point and making it steam-volatile. p-Nitrophenol forms extensive intermolecular hydrogen bonds, leading to molecular association, higher boiling point, and non-volatility.",
        "options": [
          "(a) Intramolecular hydrogen bonding in o-nitrophenol",
          "(b) Intermolecular hydrogen bonding in o-nitrophenol",
          "(c) Higher molecular weight of p-nitrophenol",
          "(d) Higher dipole moment of o-nitrophenol"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The industrial preparation of phenol from cumene involves oxidation of cumene to cumene hydroperoxide followed by treatment with dilute acid. The valuable by-product obtained is:",
        "answer": "(a) Acetone",
        "explanation": "Cumene (isopropylbenzene) is oxidized by air to cumene hydroperoxide, which on acid-catalyzed rearrangement (dil. H2SO4) cleaves quantitatively into phenol and propan-2-one (acetone): C6H5CH(CH3)2 + O2 -> C6H5C(CH3)2(OOH) -(H⁺/H2O)-> C6H5OH + CH3COCH3.",
        "options": [
          "(a) Acetone",
          "(b) Acetaldehyde",
          "(c) Ethanol",
          "(d) Formaldehyde"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following alcohols gives an alkene upon heating with copper at 573 K instead of a carbonyl compound?",
        "answer": "(a) 2-Methylpropan-2-ol (tert-butyl alcohol)",
        "explanation": "Primary alcohols undergo catalytic dehydrogenation over Cu at 573 K to give aldehydes; secondary alcohols give ketones. Tertiary alcohols lack an α-hydrogen atom and therefore undergo catalytic dehydration over Cu at 573 K to form an alkene (2-methylpropene).",
        "options": [
          "(a) 2-Methylpropan-2-ol (tert-butyl alcohol)",
          "(b) Propan-2-ol",
          "(c) Ethanol",
          "(d) Butan-1-ol"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Phenol reacts with chloroform in the presence of aqueous sodium hydroxide at 340 K to form salicylaldehyde. This reaction is known as:",
        "answer": "(a) Reimer-Tiemann reaction",
        "explanation": "The Reimer-Tiemann reaction involves electrophilic attack of dichlorocarbene (:CCl2), generated in situ from CHCl3 and NaOH, on the electron-rich phenoxide ion, followed by alkaline hydrolysis to form 2-hydroxybenzaldehyde (salicylaldehyde).",
        "options": [
          "(a) Reimer-Tiemann reaction",
          "(b) Kolbe's reaction",
          "(c) Cannizzaro reaction",
          "(d) Rosenmund reduction"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The reaction of anisole with concentrated HI at 373 K yields:",
        "answer": "(a) Phenol and methyl iodide",
        "explanation": "In methyl phenyl ether (anisole), the phenyl-oxygen bond has partial double bond character due to resonance and is much stronger than the alkyl C-O bond. Protonation gives [C6H5-O⁺(H)-CH3]; iodide ion (I⁻) attacks the less hindered methyl group via SN2, cleaving the alkyl-oxygen bond to yield phenol and methyl iodide (CH3I).",
        "options": [
          "(a) Phenol and methyl iodide",
          "(b) Iodobenzene and methanol",
          "(c) Phenol and methanol",
          "(d) Iodobenzene and methyl iodide"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The acid-catalyzed dehydration of ethanol at 413 K produces diethyl ether, whereas at 443 K it produces:",
        "answer": "(a) Ethene",
        "explanation": "At 413 K (140 °C), ethanol reacts with concentrated H2SO4 via bimolecular nucleophilic substitution (SN2) to form diethyl ether: 2 C2H5OH -> C2H5OC2H5 + H2O. At 443 K (170 °C), unimolecular elimination (E1) takes over, yielding ethene: C2H5OH -> CH2=CH2 + H2O.",
        "options": [
          "(a) Ethene",
          "(b) Ethanal",
          "(c) Ethanoic acid",
          "(d) Butane"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following compounds is the most acidic?",
        "answer": "(a) 2,4,6-Trinitrophenol (Picric acid)",
        "explanation": "The three strong electron-withdrawing nitro groups (-NO2) at positions 2, 4, and 6 exert massive -M and -I effects, stabilizing the conjugate base (picrate anion) extensively across multiple oxygen atoms. With a pKa of ~0.7, picric acid is even stronger than many carboxylic acids.",
        "options": [
          "(a) 2,4,6-Trinitrophenol (Picric acid)",
          "(b) 4-Nitrophenol",
          "(c) Phenol",
          "(d) 4-Methoxyphenol"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Aspirin is chemically known as:",
        "answer": "(a) Acetylsalicylic acid",
        "explanation": "Acetylation of the phenolic -OH group of salicylic acid using acetic anhydride in the presence of an acid catalyst produces acetylsalicylic acid, commonly known as Aspirin.",
        "options": [
          "(a) Acetylsalicylic acid",
          "(b) Methyl salicylate",
          "(c) Phenyl salicylate",
          "(d) Salicylaldehyde"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Hydroboration-oxidation of propene with B2H6 followed by alkaline H2O2 yields:",
        "answer": "(a) Propan-1-ol",
        "explanation": "Hydroboration-oxidation yields anti-Markovnikov hydration of alkenes without carbocation rearrangement. Boron attaches to the less hindered terminal carbon atom; alkaline H2O2 oxidation replaces boron with an -OH group, producing Propan-1-ol.",
        "options": [
          "(a) Propan-1-ol",
          "(b) Propan-2-ol",
          "(c) Propane-1,2-diol",
          "(d) Propanone"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Phenol reacts with neutral ferric chloride (FeCl3) solution to give a characteristic:",
        "answer": "(a) Violet coloration",
        "explanation": "Phenols react with neutral aqueous FeCl3 solution to form a soluble coordination complex [Fe(OC6H5)6]³⁻, giving an intense violet (or blue-violet) coloration. This serves as a diagnostic test distinguishing phenols from aliphatic alcohols.",
        "options": [
          "(a) Violet coloration",
          "(b) Blue precipitate",
          "(c) Yellow solution",
          "(d) Red gas"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In the reaction of tert-butyl methyl ether with one equivalent of HI, the products are:",
        "answer": "(a) tert-Butyl iodide and methanol",
        "explanation": "When an ether has a tertiary alkyl group, protonation forms (CH3)3C-O⁺(H)-CH3. Cleavage proceeds via an SN1 pathway because the tertiary carbocation ((CH3)3C⁺) formed is exceptionally stable. Iodide ion attacks the carbocation to form tert-butyl iodide ((CH3)3C-I), and methanol (CH3OH) is released.",
        "options": [
          "(a) tert-Butyl iodide and methanol",
          "(b) tert-Butyl alcohol and methyl iodide",
          "(c) Isobutylene and methanol",
          "(d) Methyl iodide and water"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which reagent is used to selectively oxidize primary alcohols to aldehydes without over-oxidation to carboxylic acids?",
        "answer": "(a) Pyridinium chlorochromate (PCC)",
        "explanation": "PCC (Corey's reagent: C5H5NH⁺ ClCrO3⁻ in CH2Cl2) is a mild, non-aqueous oxidizing agent that stops the oxidation of primary alcohols cleanly at the aldehyde stage without oxidizing them to carboxylic acids.",
        "options": [
          "(a) Pyridinium chlorochromate (PCC)",
          "(b) Acidified KMnO4",
          "(c) Acidified K2Cr2O7",
          "(d) Jones reagent (CrO3 in H2SO4)"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "When phenol is heated with zinc dust, it is reduced to:",
        "answer": "(a) Benzene",
        "explanation": "Distillation of phenol with zinc dust reduces the phenolic hydroxyl group: C6H5OH + Zn -(heat)-> C6H5-H (Benzene) + ZnO.",
        "options": [
          "(a) Benzene",
          "(b) Toluene",
          "(c) Benzoic acid",
          "(d) Cyclohexane"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Kolbe's reaction of sodium phenoxide with CO2 at 400 K and 4-7 atm pressure followed by acidification yields:",
        "answer": "(a) Salicylic acid (2-hydroxybenzoic acid)",
        "explanation": "Sodium phenoxide reacts with weak electrophile carbon dioxide (CO2) at 400 K and 4-7 atm to form sodium salicylate, which on acidification yields salicylic acid (2-hydroxybenzoic acid).",
        "options": [
          "(a) Salicylic acid (2-hydroxybenzoic acid)",
          "(b) Benzoic acid",
          "(c) Salicylaldehyde",
          "(d) Phthalic acid"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following compounds does NOT react with Lucas reagent at room temperature even after 30 minutes?",
        "answer": "(a) Butan-1-ol",
        "explanation": "Butan-1-ol is a primary (1°) alcohol. Primary carbocations are unstable, so primary alcohols do not react with Lucas reagent at room temperature; turbidity appears only upon vigorous heating.",
        "options": [
          "(a) Butan-1-ol",
          "(b) Butan-2-ol",
          "(c) 2-Methylpropan-2-ol",
          "(d) Pentan-2-ol"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The boiling point of ethanol (78 °C) is much higher than that of dimethyl ether (-24 °C), although both have the same molecular formula C2H6O, because:",
        "answer": "(a) Ethanol molecules associate via intermolecular hydrogen bonding",
        "explanation": "In ethanol (CH3CH2OH), hydrogen is bonded directly to highly electronegative oxygen, establishing strong intermolecular hydrogen bonding. Dimethyl ether (CH3-O-CH3) has oxygen bonded only to carbon atoms and cannot form intermolecular hydrogen bonds.",
        "options": [
          "(a) Ethanol molecules associate via intermolecular hydrogen bonding",
          "(b) Ethanol has higher molecular weight",
          "(c) Dimethyl ether is ionic",
          "(d) Ethanol has non-polar bonding"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Oxidation of phenol with acidified sodium dichromate (Na2Cr2O7 / H2SO4) yields:",
        "answer": "(a) Benzoquinone",
        "explanation": "Oxidation of phenol with chromic acid / sodium dichromate produces a conjugated diketone called p-benzoquinone (or 1,4-benzoquinone).",
        "options": [
          "(a) Benzoquinone",
          "(b) Hydroquinone",
          "(c) Catechol",
          "(d) Resorcinol"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The Williamson ether synthesis involves which mechanistic pathway?",
        "answer": "(a) SN2",
        "explanation": "Williamson synthesis involves the nucleophilic attack of an alkoxide ion (R-O⁻) on an unhindered primary alkyl halide (R'-X) via an SN2 displacement of halide ion.",
        "options": [
          "(a) SN2",
          "(b) SN1",
          "(c) E2",
          "(d) Electrophilic addition"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The IUPAC name of the compound CH3-CH(OH)-CH2-O-CH3 is:",
        "answer": "(a) 1-Methoxypropan-2-ol",
        "explanation": "The principal functional group is the -OH group (alcohol suffix '-ol'), which takes priority over the ether alkoxy prefix. Numbering from right gives C-1 to methoxy-bearing carbon and C-2 to hydroxyl: 1-Methoxypropan-2-ol.",
        "options": [
          "(a) 1-Methoxypropan-2-ol",
          "(b) 3-Methoxypropan-2-ol",
          "(c) 2-Hydroxypropyl methyl ether",
          "(d) 1-Methoxypropan-1-ol"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following ethers cannot be prepared by Williamson's synthesis?",
        "answer": "(a) Diphenyl ether",
        "explanation": "Preparation of diphenyl ether would require an SN2 attack of phenoxide ion on an aryl halide (bromobenzene or chlorobenzene). Haloarenes are unreactive towards SN2 nucleophilic substitution due to partial double bond character of the C-X bond and steric/electronic repulsion of the aromatic ring.",
        "options": [
          "(a) Diphenyl ether",
          "(b) Diethyl ether",
          "(c) Ethyl methyl ether",
          "(d) tert-Butyl ethyl ether"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Phenol reacts with dilute nitric acid (HNO3) at 298 K to give:",
        "answer": "(a) A mixture of ortho- and para-nitrophenol",
        "explanation": "With dilute HNO3 at low temperature (298 K), phenol is nitrated at activated ortho and para positions, giving a mixture of o-nitrophenol (~30-40%) and p-nitrophenol (~15-20%), which are separable by steam distillation.",
        "options": [
          "(a) A mixture of ortho- and para-nitrophenol",
          "(b) 2,4,6-Trinitrophenol",
          "(c) meta-Nitrophenol only",
          "(d) Nitrobenzene"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following compounds reacts fastest with Lucas reagent?",
        "answer": "(a) 2-Methylpropan-2-ol",
        "explanation": "2-Methylpropan-2-ol is a tertiary alcohol. It reacts immediately at room temperature with Lucas reagent via an SN1 pathway to produce an insoluble layer of tert-butyl chloride, creating immediate cloudiness/turbidity.",
        "options": [
          "(a) 2-Methylpropan-2-ol",
          "(b) Propan-2-ol",
          "(c) Butan-1-ol",
          "(d) Ethanol"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Phenol is significantly more acidic than ethanol.\nReason (R): The phenoxide ion is stabilized by resonance delocalization of negative charge into the aromatic ring, whereas the ethoxide ion has no resonance stabilization.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The phenoxide ion has 5 contributing resonance structures which disperse the negative charge across the benzene ring, making loss of proton energetically favorable.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Ortho-nitrophenol and para-nitrophenol can be easily separated by steam distillation.\nReason (R): Ortho-nitrophenol is steam-volatile due to intramolecular hydrogen bonding, whereas para-nitrophenol is non-volatile due to intermolecular hydrogen bonding.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the separation basis.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Reaction of tert-butyl bromide with sodium ethoxide yields 2-methylpropene as the major product.\nReason (R): Sodium ethoxide is a strong base; with a sterically hindered tertiary alkyl halide, elimination (E2) predominates over substitution (SN2).",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why tertiary halides give alkenes in Williamson synthesis.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Anisole on reaction with HI gives phenol and methyl iodide, not iodobenzene and methanol.\nReason (R): In anisole, the C-O bond attached to the benzene ring has partial double bond character due to resonance and is stronger than the alkyl C-O bond.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why alkyl-oxygen bond cleaves rather than aryl-oxygen bond.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The boiling points of alcohols are higher than those of ethers of comparable molecular masses.\nReason (R): Alcohols undergo extensive intermolecular hydrogen bonding, whereas ethers cannot form intermolecular hydrogen bonds among themselves.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Give chemical tests to distinguish between:\n(i) Phenol and Ethanol\n(ii) Propan-1-ol and Propan-2-ol.",
        "answer": "Distinguishing chemical tests",
        "explanation": "(i) Phenol and Ethanol: Add neutral FeCl3 solution.\n- Phenol gives an intense violet coloration due to complex formation [Fe(OC6H5)6]³⁻.\n- Ethanol produces no coloration with neutral FeCl3. (Alternatively: Phenol gives white ppt with bromine water, ethanol does not).\n\n(ii) Propan-1-ol and Propan-2-ol: Iodoform Test.\n- Propan-2-ol (CH3-CH(OH)-CH3) has the CH3-CH(OH)- group; on warming with I2 and aqueous NaOH, it gives a yellow crystalline precipitate of iodoform (CHI3) with a characteristic medicinal smell.\n- Propan-1-ol does not give a yellow precipitate with I2/NaOH."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Write the mechanism of acid-catalyzed dehydration of ethanol to yield ethene at 443 K.",
        "answer": "Three-step mechanism of alcohol dehydration",
        "explanation": "Step 1: Protonation of alcohol to form oxonium ion (fast):\nCH3-CH2-OH + H⁺ ⇌ CH3-CH2-O⁺H2.\n\nStep 2: Formation of carbocation (Slow, Rate-determining step):\nCH3-CH2-O⁺H2 -> [CH3-CH2⁺] (ethyl carbocation) + H2O.\n\nStep 3: Elimination of a proton to form ethene (fast):\n[CH3-CH2⁺] -> CH2=CH2 (ethene) + H⁺.\nThe acid catalyst (H⁺) is regenerated."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Explain Williamson ether synthesis. Why cannot tert-butyl ethyl ether be prepared by treating tert-butyl bromide with sodium ethoxide?",
        "answer": "Williamson synthesis and limitation with tertiary halides",
        "explanation": "1. Williamson Ether Synthesis: An SN2 reaction where an alkoxide ion displaces a halide ion from an unhindered primary alkyl halide: R-ONa + R'-X -> R-O-R' + NaX.\n2. Why it fails with tert-butyl bromide: Alkoxides are not only good nucleophiles but also strong Brønsted bases. With tertiary alkyl halides like (CH3)3C-Br, steric crowding completely blocks backside SN2 attack. Instead, the ethoxide base abstracts a β-proton, leading exclusively to E2 elimination to yield 2-methylpropene (isobutylene) rather than ether."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Write balanced chemical equations for:\n(i) Kolbe's reaction\n(ii) Reimer-Tiemann reaction\n(iii) Nitration of phenol with concentrated HNO3.",
        "answer": "Three balanced organic equations",
        "explanation": "(i) Kolbe's Reaction:\nC6H5OH + NaOH -> C6H5ONa -(CO2, 400 K, 4-7 atm)-> Sodium salicylate -(H⁺)-> Salicylic acid (2-hydroxybenzoic acid).\n\n(ii) Reimer-Tiemann Reaction:\nC6H5OH + CHCl3 + 3 NaOH -(340 K)-> Salicylaldehyde (2-hydroxybenzaldehyde) + 3 NaCl + 2 H2O.\n\n(iii) Nitration with concentrated HNO3:\nC6H5OH + 3 conc. HNO3 -(conc. H2SO4)-> 2,4,6-Trinitrophenol (Picric acid) + 3 H2O."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "How will you synthesize:\n(i) 1-Phenylethanol from benzaldehyde using Grignard reagent?\n(ii) Phenol from cumene?",
        "answer": "Two organic synthesis routes",
        "explanation": "(i) Benzaldehyde to 1-Phenylethanol:\nBenzaldehyde (C6H5CHO) reacts with methylmagnesium bromide (CH3MgBr) in dry ether to form an adduct, followed by acid hydrolysis:\nC6H5CHO + CH3MgBr -(dry ether)-> C6H5-CH(OMgBr)-CH3 -(H3O⁺)-> C6H5-CH(OH)-CH3 (1-phenylethanol) + Mg(OH)Br.\n\n(ii) Phenol from Cumene:\nCumene (isopropylbenzene, C6H5CH(CH3)2) is oxidized by atmospheric air to cumene hydroperoxide, followed by hydrolysis with dilute H2SO4:\nC6H5CH(CH3)2 + O2 -> C6H5C(CH3)2(OOH) -(dil. H2SO4)-> C6H5OH (phenol) + CH3COCH3 (acetone)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "Account for the following observations:\n(i) Phenol does not undergo substitution of -OH by -Cl with HCl/ZnCl2.\n(ii) Alcohols have higher boiling points than isomeric ethers.\n(iii) The C-O-C bond angle in dimethyl ether (111.7°) is slightly greater than the tetrahedral angle (109.5°).",
        "answer": "Explanations for phenol reactivity, boiling points, and ether bond angle",
        "explanation": "(i) Phenol resistance: In phenol, the C-O bond acquires partial double bond character due to resonance (+R effect). This makes the C-O bond much stronger and shorter (136 pm vs 142 pm in alcohols), preventing cleavage by Lucas reagent.\n(ii) Higher boiling point: Alcohols possess intermolecular hydrogen bonding between -OH groups, whereas ethers lack hydrogen directly attached to oxygen and cannot associate by H-bonding.\n(iii) Bond angle in ethers: The repulsive steric interaction between the two bulky alkyl groups (methyl groups) attached to oxygen pushes them apart, opening the C-O-C bond angle to 111.7°, which is slightly larger than the tetrahedral angle (109.5°)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "What happens when:\n(i) Salicylic acid is treated with acetic anhydride in the presence of concentrated H2SO4?\n(ii) Anisole is treated with methyl chloride in the presence of anhydrous AlCl3?",
        "answer": "Aspirin synthesis and Friedel-Crafts alkylation of anisole",
        "explanation": "(i) Treatment of salicylic acid with acetic anhydride produces Aspirin (acetylsalicylic acid):\n2-HOC6H4COOH + (CH3CO)2O -(conc. H2SO4)-> 2-(CH3COO)C6H4COOH (Aspirin) + CH3COOH.\n\n(ii) Treatment of anisole with CH3Cl/anhyd. AlCl3 gives 4-methoxytoluene (p-isomer, major product) and 2-methoxytoluene (o-isomer, minor product) due to Friedel-Crafts alkylation."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Arrange the following compounds in increasing order of acidity and justify your order:\nPropan-1-ol, 2,4,6-Trinitrophenol, 4-Nitrophenol, Phenol, 4-Methylphenol.",
        "answer": "Propan-1-ol < 4-Methylphenol < Phenol < 4-Nitrophenol < 2,4,6-Trinitrophenol",
        "explanation": "1. Justification:\n- Propan-1-ol is least acidic because aliphatic alkoxide has no resonance and is destabilized by +I effect.\n- Phenols are far more acidic due to resonance stabilization of phenoxide ion.\n- 4-Methylphenol has electron-donating methyl group (+I, hyperconjugation) which destabilizes phenoxide, making it less acidic than phenol.\n- 4-Nitrophenol has strong electron-withdrawing -NO2 group (-M, -I) at para position which stabilizes phenoxide ion, making it much more acidic than phenol.\n- 2,4,6-Trinitrophenol (Picric acid) has three powerful -NO2 groups that disperse negative charge extensively, making it exceptionally acidic (pKa ~ 0.7)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Explain hydroboration-oxidation of propene with balanced chemical equations.",
        "answer": "Hydroboration-oxidation of propene",
        "explanation": "Diborane (B2H6) reacts with propene by syn-addition of B-H bond across the double bond in anti-Markovnikov fashion to form tripropylborane:\n6 CH3-CH=CH2 + B2H6 -> 2 (CH3-CH2-CH2)3B.\nTripropylborane on oxidation with alkaline hydrogen peroxide (H2O2 / OH⁻) cleaves into propan-1-ol:\n(CH3-CH2-CH2)3B + 3 H2O2 -(OH⁻)-> 3 CH3-CH2-CH2-OH (Propan-1-ol) + B(OH)3."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Write the products formed when diethyl ether is heated with excess concentrated HI.",
        "answer": "Cleavage of diethyl ether with excess HI",
        "explanation": "When diethyl ether is heated with excess concentrated HI, both alkyl-oxygen bonds are cleaved in a two-stage process:\nStage 1: C2H5-O-C2H5 + HI -> C2H5I + C2H5OH.\nStage 2: C2H5OH + HI -> C2H5I + H2O.\nOverall Reaction: C2H5-O-C2H5 + 2 HI -(heat)-> 2 C2H5I (ethyl iodide) + H2O."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) An organic compound 'A' (C6H6O) gives a violet colour with neutral FeCl3. When 'A' is treated with CHCl3 and aqueous NaOH at 340 K, it yields compound 'B' (C7H6O2) as the major product. Compound 'A' when treated with CO2 and NaOH at 400 K under pressure followed by acidification yields compound 'C' (C7H6O3). Identify A, B, and C, and write balanced chemical equations for all reactions.\n(b) How is Aspirin prepared from compound 'C'?",
        "answer": "A = Phenol, B = Salicylaldehyde, C = Salicylic acid; Aspirin preparation",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3.5 marks):\n- Compound 'A' (C6H6O) giving violet colour with neutral FeCl3 is Phenol (C6H5OH).\n- Reaction with CHCl3 and aq. NaOH (Reimer-Tiemann reaction) gives Salicylaldehyde (2-hydroxybenzaldehyde) as compound 'B':\n  C6H5OH (A) + CHCl3 + 3 NaOH -(340 K)-> 2-HOC6H4CHO (B, Salicylaldehyde) + 3 NaCl + 2 H2O.\n- Reaction with CO2 and NaOH at 400 K and 4-7 atm (Kolbe's reaction) followed by acidification yields Salicylic acid (2-hydroxybenzoic acid) as compound 'C':\n  C6H5OH (A) + NaOH -> C6H5ONa -(CO2, 400 K, 4-7 atm)-> 2-HOC6H4COONa -(H⁺)-> 2-HOC6H4COOH (C, Salicylic acid).\n\n(b) Preparation of Aspirin (1.5 marks):\n- Salicylic acid (compound C) is acetylated with acetic anhydride in the presence of concentrated H2SO4:\n  2-HOC6H4COOH + (CH3CO)2O -(conc. H2SO4)-> 2-(CH3COO)C6H4COOH (Aspirin / Acetylsalicylic acid) + CH3COOH."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Write the mechanism of the reaction of HI with methoxymethane (CH3-O-CH3).\n(b) Predict the products when the following ethers are cleaved with 1 equivalent of HI:\n(i) Ethoxybenzene (phenetole)\n(ii) (CH3)3C-O-CH2CH3\n(iii) Benzyl ethyl ether.\n(c) How will you distinguish between 1-phenylethanol and 2-phenylethanol?",
        "answer": "Ether cleavage mechanism, HI reactions on varied ethers, and iodoform distinction",
        "explanation": "Marking Scheme:\n(a) Mechanism of Methoxymethane Cleavage (2 marks):\n- Step 1 (Protonation of ether): CH3-O-CH3 + H-I ⇌ [CH3-O⁺(H)-CH3] + I⁻ (oxonium ion formation).\n- Step 2 (SN2 attack by iodide ion): Iodide ion attacks one of the methyl carbons from backside, displacing methanol:\n  I⁻ + CH3-O⁺(H)-CH3 -> [I···CH3···O⁺(H)CH3] -> CH3I + CH3OH.\n\n(b) Ether Cleavages (2 marks):\n(i) Ethoxybenzene + HI -> Phenol (C6H5OH) + Ethyl iodide (C2H5I). (Aryl-O bond has partial double bond character and cannot be cleaved).\n(ii) (CH3)3C-O-CH2CH3 + HI -> tert-Butyl iodide ((CH3)3C-I) + Ethanol (C2H5OH). (Proceeds via SN1 due to tertiary carbocation stability).\n(iii) C6H5CH2-O-CH2CH3 + HI -> Benzyl iodide (C6H5CH2I) + Ethanol (C2H5OH). (Benzyl carbocation is highly resonance-stabilized).\n\n(c) Distinction (1 mark):\n- 1-Phenylethanol (C6H5-CH(OH)-CH3) has the CH3-CH(OH)- group and gives a positive Iodoform test (yellow precipitate of CHI3 with I2/NaOH).\n- 2-Phenylethanol (C6H5-CH2-CH2-OH) does not have this group and gives no yellow precipitate."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain why phenols are more acidic than alcohols using resonance structures of phenol and phenoxide ion.\n(b) Discuss the effect of electron-donating (-CH3) and electron-withdrawing (-NO2) groups on the acidity of phenol.\n(c) Why is picric acid a strong acid even though it contains no carboxyl group?",
        "answer": "Resonance analysis of phenol acidity, substituent effects, and picric acid acidity",
        "explanation": "Marking Scheme:\n(a) Acidity of Phenol vs Alcohol (2.5 marks):\n- In phenol, resonance involves charge separation (+ charge on oxygen, - charge on ortho/para ring carbons), making phenol less stable.\n- In phenoxide ion (C6H5O⁻), resonance involves no charge separation: the negative charge on oxygen is delocalized over the ortho and para positions of the benzene ring through five stable canonical structures.\n- Alcohols (R-OH) form alkoxide ions (R-O⁻) where the negative charge is localized strictly on oxygen, and +I effect of alkyl groups intensifies the charge. Therefore, phenoxide ion is vastly more stabilized than alkoxide ion, shifting equilibrium forward.\n\n(b) Substituent Effects (1.5 marks):\n- Electron-withdrawing groups (-NO2, -CN, halogens): Disperse the negative charge of the phenoxide ion through -M and -I effects, increasing phenoxide stability and enhancing acidity. The effect is especially pronounced at ortho and para positions.\n- Electron-donating groups (-CH3, -OCH3, -NH2): Intensify the negative charge on the phenoxide ion by +I and +M effects, destabilizing it and decreasing acidity.\n\n(c) Picric Acid (1 mark):\n2,4,6-Trinitrophenol has three intensely electron-withdrawing nitro groups that pull electron density away from the phenoxide oxygen through resonance (-M) and inductive (-I) effects. The resulting picrate anion is exceptionally stable, giving picric acid a pKa of 0.7 (comparable to mineral acids)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Industrial Alcohols and Their Biochemical Impacts\nMethanol and ethanol are two industrially vital alcohols. Methanol (CH3OH, 'wood spirit') is manufactured by catalytic hydrogenation of carbon monoxide: CO + 2 H2 -(ZnO-Cr2O3, 573-673 K, 200-300 atm)-> CH3OH. Ingestion of even small quantities (10-30 mL) of methanol is fatal; inside the liver, alcohol dehydrogenase oxidizes methanol to methanal (formaldehyde), which rapidly coagulates cellular protoplasm, while formic acid causes severe metabolic acidosis and blindness by damaging the optic nerve. Ethanol is industrially obtained by fermentation of sugars using invertase and zymase enzymes. To prevent misuse of industrial ethanol, it is 'denatured' by adding poisonous substances.\n(i) Write the chemical equation for the industrial synthesis of methanol.\n(ii) Why does ingestion of methanol cause blindness and death?\n(iii) What is 'denatured alcohol'? Name two substances added to denature ethanol.\n(iv) Name the enzymes used to convert sucrose into ethanol during fermentation.",
        "answer": "Solutions to Case Study on Methanol and Ethanol Chemistry",
        "explanation": "(i) CO(g) + 2 H2(g) -(ZnO-Cr2O3 / 573-673 K, 200-300 atm)-> CH3OH(l).\n(ii) In the liver, alcohol dehydrogenase oxidizes methanol to methanal (HCHO) and formic acid (HCOOH). Methanal rapidly reacts with and coagulates cellular proteins/protoplasm in a manner similar to egg boiling. Formic acid inhibits cytochrome oxidase in the optic nerve, causing irreversible retinal damage and blindness, while severe systemic acidosis leads to death.\n(iii) Denatured alcohol is ethanol rendered unfit for drinking by mixing it with toxic, foul-smelling, or foul-tasting additives. Commonly added: Methanol (~5-10%), Pyridine (foul smell), and Copper sulfate (blue dye for visual identification).\n(iv) Invertase (hydrolyzes sucrose to glucose + fructose) and Zymase (ferments glucose/fructose to ethanol + CO2)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) An organic compound (A) with molecular formula C4H10O is soluble in concentrated H2SO4. (A) does not react with sodium metal or cold HI. On heating with excess HI, (A) gives only one alkyl iodide (B). Identify (A) and (B) and write the reactions involved.\n(b) Write the equations for the preparation of 1-propoxypropane from propan-1-ol.\n(c) What happens when propan-2-ol is heated with copper at 573 K?",
        "answer": "Identification of C4H10O as diethyl ether, Williamson synthesis, and Cu/573K oxidation",
        "explanation": "Marking Scheme:\n(a) Identification of Compounds (2.5 marks):\n- Compound (A) has formula C4H10O, dissolves in conc. H2SO4 (forming oxonium salt), but does not react with metallic Na (not an alcohol, therefore an ether).\n- It does not react with cold HI, but on heating with excess HI it yields ONLY ONE alkyl iodide (B). This proves that (A) is a symmetrical ether: Diethyl ether (CH3CH2-O-CH2CH3).\n- Alkyl iodide (B) is Ethyl iodide (CH3CH2I).\n- Reactions:\n  CH3CH2-O-CH2CH3 (A) + conc. H2SO4 -> [(C2H5)2OH]⁺ HSO4⁻ (soluble oxonium salt).\n  CH3CH2-O-CH2CH3 (A) + 2 HI -(heat)-> 2 CH3CH2I (B, Ethyl iodide) + H2O.\n\n(b) Preparation of 1-propoxypropane (1.5 marks):\n- Method 1: Intermolecular Dehydration of propan-1-ol with conc. H2SO4:\n  2 CH3CH2CH2OH -(conc. H2SO4, 413 K)-> CH3CH2CH2-O-CH2CH2CH3 + H2O.\n- Method 2: Williamson Synthesis:\n  CH3CH2CH2OH + Na -> CH3CH2CH2ONa + 1/2 H2.\n  CH3CH2CH2ONa + CH3CH2CH2Br -> CH3CH2CH2-O-CH2CH2CH3 + NaBr.\n\n(c) Reaction with Cu at 573 K (1 mark):\nPropan-2-ol undergoes catalytic dehydrogenation to give propanone (acetone):\nCH3-CH(OH)-CH3 -(Cu / 573 K)-> CH3-CO-CH3 (acetone) + H2(g)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Illustrate the following name reactions with one chemical equation each:\n(i) Kolbe's reaction\n(ii) Reimer-Tiemann reaction\n(iii) Williamson ether synthesis.\n(b) Give the mechanism for the reaction of ethanol with concentrated H2SO4 at 413 K.",
        "answer": "Three named reactions and bimolecular etherification mechanism",
        "explanation": "(a) Name Reactions (3 marks):\n(i) Kolbe's Reaction: C6H5ONa + CO2 -(400 K, 4-7 atm)-> Sodium salicylate -(H⁺)-> Salicylic acid (2-hydroxybenzoic acid).\n(ii) Reimer-Tiemann Reaction: C6H5OH + CHCl3 + 3 NaOH -(340 K)-> Salicylaldehyde + 3 NaCl + 2 H2O.\n(iii) Williamson Synthesis: CH3CH2ONa + CH3I -> CH3CH2-O-CH3 + NaI.\n\n(b) Mechanism at 413 K (2 marks):\nBimolecular nucleophilic substitution (SN2):\n- Step 1: Protonation of ethanol:\n  CH3CH2-OH + H⁺ ⇌ CH3CH2-O⁺H2.\n- Step 2: Nucleophilic attack by a second unprotonated ethanol molecule on the protonated species (SN2 displacement of water):\n  CH3CH2-OH + CH3CH2-O⁺H2 -> [CH3CH2-O⁺(H)-CH2CH3] (diethyloxonium ion) + H2O.\n- Step 3: Deprotonation:\n  [CH3CH2-O⁺(H)-CH2CH3] -> CH3CH2-O-CH2CH3 (diethyl ether) + H⁺."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "How will you carry out the following conversions:\n(i) Propene to Propan-2-ol\n(ii) Phenol to p-Bromophenol\n(iii) Ethyl bromide to Diethyl ether\n(iv) Phenol to Benzoquinone?",
        "answer": "Four organic synthesis pathways",
        "explanation": "(i) Propene to Propan-2-ol: Acid-catalyzed hydration:\nCH3-CH=CH2 + H2O -(H2SO4)-> CH3-CH(OH)-CH3 (Markovnikov addition).\n\n(ii) Phenol to p-Bromophenol: Bromination in non-polar solvent:\nC6H5OH + Br2 -(in CS2 or CHCl3 at 273 K)-> p-Bromophenol (major product) + HBr.\n\n(iii) Ethyl bromide to Diethyl ether: Williamson synthesis:\nCH3CH2Br + C2H5ONa -> CH3CH2-O-CH2CH3 (diethyl ether) + NaBr.\n\n(iv) Phenol to Benzoquinone: Oxidation with chromic acid:\nC6H5OH + Na2Cr2O7 + H2SO4 -> 1,4-Benzoquinone (p-benzoquinone)."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) An organic compound 'A' having molecular formula C3H8O on treatment with Lucas reagent gives turbidity after 5 minutes. On oxidation with acidified potassium dichromate, 'A' gives compound 'B' (C3H6O). Compound 'B' gives a positive iodoform test. Identify 'A' and 'B', and write all reactions.\n(b) Explain why tertiary alcohols do not undergo oxidation under mild conditions.",
        "answer": "Identification of propan-2-ol and acetone, and resistance of 3° alcohols to oxidation",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3.5 marks):\n- Compound 'A' (C3H8O) gives turbidity with Lucas reagent after 5 minutes, indicating that 'A' is a secondary (2°) alcohol: Propan-2-ol (CH3-CH(OH)-CH3).\n- Reaction with Lucas reagent:\n  CH3-CH(OH)-CH3 + conc. HCl -(anhyd. ZnCl2)-> CH3-CH(Cl)-CH3 (2-chloropropane) + H2O (turbidity in 5 min).\n- Oxidation of 'A' with acidified K2Cr2O7 yields compound 'B':\n  CH3-CH(OH)-CH3 + [O] -(K2Cr2O7/H2SO4)-> CH3-CO-CH3 (B, Propan-2-one / acetone) + H2O.\n- Compound 'B' gives a positive iodoform test because it has a CH3-CO- group:\n  CH3-CO-CH3 + 3 I2 + 4 NaOH -> CHI3 (yellow ppt of iodoform) + CH3COONa + 3 NaI + 3 H2O.\n\n(b) Why 3° Alcohols Resist Oxidation (1.5 marks):\n- Oxidation of alcohols involves the cleavage of an O-H bond and an α-C-H bond to form a C=O double bond.\n- In tertiary alcohols (e.g. (CH3)3C-OH), the carbon bearing the -OH group has no α-hydrogen atom (all 4 valencies of carbon are bonded to oxygen and carbon atoms).\n- Therefore, mild oxidizing agents cannot oxidise them; only drastic conditions (conc. HNO3, high temp) break strong C-C bonds to yield carboxylic acid mixtures with fewer carbon atoms."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "(a) What is meant by hydroboration-oxidation? Why does it give anti-Markovnikov alcohol?\n(b) Write the structural formulas of the following compounds:\n(i) 2,3-Diethylphenol\n(ii) 1-Ethoxypropane\n(iii) 2-Methylbutan-2-ol.",
        "answer": "Hydroboration-oxidation principle and structural formulas",
        "explanation": "(a) Hydroboration-Oxidation Principle (2 marks):\n- Hydroboration-oxidation is a two-step method of converting alkenes into alcohols: diborane (B2H6) adds across the double bond to form a trialkylborane, which is subsequently oxidized by alkaline hydrogen peroxide (H2O2/OH⁻) to an alcohol.\n- Anti-Markovnikov Orientation: Boron is larger than hydrogen and less electronegative (B^δ⁺ - H^δ⁻). During addition, boron attaches to the less sterically hindered terminal carbon atom, and the hydride ion attaches to the more substituted carbon. Subsequent oxidation replaces boron with -OH with retention of configuration, resulting in net anti-Markovnikov hydration of the alkene.\n\n(b) Structural Formulas (2 marks):\n(i) 2,3-Diethylphenol: Benzene ring with -OH at C-1, -CH2CH3 at C-2, and -CH2CH3 at C-3.\n(ii) 1-Ethoxypropane: CH3-CH2-O-CH2-CH2-CH3.\n(iii) 2-Methylbutan-2-ol: CH3-C(CH3)(OH)-CH2-CH3."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Account for the following:\n(i) Phenol has higher boiling point than toluene.\n(ii) Electrophilic substitution in phenol takes place predominantly at ortho and para positions.\n(iii) Cleavage of phenyl alkyl ether with HI always yields phenol and alkyl iodide, never iodobenzene and alcohol.\n(b) Describe the preparation of phenol from aniline.",
        "answer": "Three core chemical explanations and diazotization route to phenol",
        "explanation": "Marking Scheme:\n(a) Explanations (3.5 marks):\n(i) Intermolecular Hydrogen Bonding: Phenol molecules are strongly associated via intermolecular hydrogen bonding through -OH groups, demanding high thermal energy to vaporize (bp 182 °C). Toluene molecules are held only by weak London dispersion forces (bp 111 °C).\n(ii) Ortho/Para Orientation: The lone pair on oxygen delocalizes into the π-system of the benzene ring (+R resonance effect). Resonance contributors show that electron density increases selectively at the ortho and para positions, making these sites vulnerable to electrophilic attack.\n(iii) Ether Cleavage Selectivity: The sp² carbon-oxygen bond between the aromatic ring and oxygen has partial double bond character due to resonance (+R effect) and is much stronger (shorter) than the sp³ carbon-oxygen alkyl bond. Therefore, nucleophilic attack by I⁻ cleaves the weaker alkyl C-O bond via SN2 to yield alkyl iodide, leaving the C-O bond attached to the aromatic ring intact as phenol.\n\n(b) Preparation of Phenol from Aniline (1.5 marks):\n- Step 1 (Diazotization): Aniline is dissolved in dilute HCl and treated with sodium nitrite (NaNO2) at 273-278 K (0-5 °C) to form benzene diazonium chloride:\n  C6H5NH2 + NaNO2 + 2 HCl -(273-278 K)-> C6H5N2⁺Cl⁻ + NaCl + 2 H2O.\n- Step 2 (Hydrolysis): The diazonium salt solution is warmed with water or dilute H2SO4 to liberate nitrogen gas and yield phenol:\n  C6H5N2⁺Cl⁻ + H2O -(warm)-> C6H5OH (Phenol) + N2(g) + HCl."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "unit_num": 3,
      "title": "Aldehydes, Ketones and Carboxylic Acids",
      "unit_title": "Organic Chemistry",
      "weightage_unit": "8 Marks (Organic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following compounds will undergo Cannizzaro reaction on treatment with 50% concentrated NaOH?",
        "answer": "(a) Benzaldehyde (C6H5CHO)",
        "explanation": "Aldehydes having no α-hydrogen atom undergo self-oxidation and reduction (disproportionation) on heating with concentrated alkali (Cannizzaro reaction). Benzaldehyde lacks α-hydrogens and yields benzyl alcohol and sodium benzoate.",
        "options": [
          "(a) Benzaldehyde (C6H5CHO)",
          "(b) Acetaldehyde (CH3CHO)",
          "(c) Acetone (CH3COCH3)",
          "(d) Propionaldehyde (CH3CH2CHO)"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The reduction of benzoyl chloride to benzaldehyde using H2 in the presence of Pd-BaSO4 poisoned with sulfur or quinoline is known as:",
        "answer": "(a) Rosenmund reduction",
        "explanation": "Catalytic hydrogenation of an acyl chloride to an aldehyde using Pd supported on BaSO4 and partially poisoned with sulfur or quinoline (to prevent further reduction to alcohol) is called Rosenmund reduction: C6H5COCl + H2 -(Pd-BaSO4/quinoline)-> C6H5CHO + HCl.",
        "options": [
          "(a) Rosenmund reduction",
          "(b) Stephen reduction",
          "(c) Clemmensen reduction",
          "(d) Wolff-Kishner reduction"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The correct order of increasing reactivity towards nucleophilic addition reactions is:",
        "answer": "(a) Acetophenone < Acetone < Acetaldehyde < Formaldehyde",
        "explanation": "Reactivity towards nucleophilic addition decreases with increasing steric crowding and electron donation (+I effect) by alkyl groups. Alkyl groups reduce the electrophilic character of carbonyl carbon: HCHO (no alkyl group, least hindered) > CH3CHO (one +I methyl) > CH3COCH3 (two +I methyls) > C6H5COCH3 (resonance delocalization from phenyl ring reduces electrophilicity).",
        "options": [
          "(a) Acetophenone < Acetone < Acetaldehyde < Formaldehyde",
          "(b) Formaldehyde < Acetaldehyde < Acetone < Acetophenone",
          "(c) Acetone < Acetophenone < Acetaldehyde < Formaldehyde",
          "(d) Acetaldehyde < Formaldehyde < Acetone < Acetophenone"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Clemmensen reduction of a ketone is carried out using:",
        "answer": "(a) Zn-Hg and concentrated HCl",
        "explanation": "Clemmensen reduction converts carbonyl group (>C=O) into a methylene group (>CH2) using zinc amalgam (Zn-Hg) and concentrated hydrochloric acid (conc. HCl).",
        "options": [
          "(a) Zn-Hg and concentrated HCl",
          "(b) NH2NH2 and KOH in ethylene glycol",
          "(c) LiAlH4 in dry ether",
          "(d) NaBH4 in ethanol"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following compounds gives a bright silver mirror with Tollens' reagent?",
        "answer": "(a) Ethanal",
        "explanation": "Tollens' reagent (ammoniacal silver nitrate solution [Ag(NH3)2]⁺) is a mild oxidizing agent that oxidizes aldehydes (both aliphatic and aromatic) to carboxylate anions while reducing Ag⁺ to metallic silver (silver mirror). Ketones do not reduce Tollens' reagent.",
        "options": [
          "(a) Ethanal",
          "(b) Acetone",
          "(c) Acetophenone",
          "(d) Benzophenone"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The Hell-Volhard-Zelinsky (HVZ) reaction is used for the preparation of:",
        "answer": "(a) α-Halocarboxylic acids",
        "explanation": "Carboxylic acids having an α-hydrogen react with chlorine or bromine in the presence of a small amount of red phosphorus to form α-halocarboxylic acids (HVZ reaction): R-CH2-COOH + X2 -(red P / H2O)-> R-CH(X)-COOH + HX.",
        "options": [
          "(a) α-Halocarboxylic acids",
          "(b) β-Halocarboxylic acids",
          "(c) Acid chlorides",
          "(d) Acid anhydrides"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following carboxylic acids has the lowest pKa value (is the strongest acid)?",
        "answer": "(a) Trifluoroacetic acid (CF3COOH)",
        "explanation": "Fluorine is the most electronegative halogen and exerts the strongest electron-withdrawing inductive effect (-I). Three fluorine atoms in CF3COOH drastically stabilize the carboxylate anion by dispersing negative charge, giving it the lowest pKa (~0.23) and highest acidity.",
        "options": [
          "(a) Trifluoroacetic acid (CF3COOH)",
          "(b) Trichloroacetic acid (CCl3COOH)",
          "(c) Chloroacetic acid (CH2ClCOOH)",
          "(d) Acetic acid (CH3COOH)"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Reaction of an aldehyde with 2,4-dinitrophenylhydrazine (Brady's reagent) yields:",
        "answer": "(a) a yellow, orange, or red crystalline precipitate",
        "explanation": "Aldehydes and ketones react with 2,4-DNP in acidic medium via nucleophilic addition followed by elimination of water to form brightly coloured (yellow, orange, or red) crystalline 2,4-dinitrophenylhydrazones, serving as a classic test for the carbonyl functional group.",
        "options": [
          "(a) a yellow, orange, or red crystalline precipitate",
          "(b) a colourless gas",
          "(c) a silver mirror",
          "(d) a blue solution"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The reaction of acetaldehyde with dilute NaOH gives 3-hydroxybutanal. This reaction is known as:",
        "answer": "(a) Aldol condensation",
        "explanation": "Aldehydes with at least one α-hydrogen react in the presence of dilute alkali (dil. NaOH) to undergo nucleophilic addition of enolate anion to another carbonyl molecule, forming a β-hydroxyaldehyde (Aldol): 2 CH3CHO -(dil. NaOH)-> CH3-CH(OH)-CH2-CHO (3-hydroxybutanal).",
        "options": [
          "(a) Aldol condensation",
          "(b) Cannizzaro reaction",
          "(c) Etard reaction",
          "(d) Kolbe's reaction"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In the reaction of benzaldehyde with Tollens' reagent and Fehling's solution:",
        "answer": "(a) Benzaldehyde reduces Tollens' reagent but does not reduce Fehling's solution",
        "explanation": "Aromatic aldehydes like benzaldehyde are easily oxidized by Tollens' reagent (stronger oxidizing potential than Fehling's), forming a silver mirror. However, Fehling's solution is a weaker oxidizing agent and cannot oxidize aromatic aldehydes.",
        "options": [
          "(a) Benzaldehyde reduces Tollens' reagent but does not reduce Fehling's solution",
          "(b) Benzaldehyde reduces both reagents",
          "(c) Benzaldehyde reduces Fehling's solution but not Tollens' reagent",
          "(d) Benzaldehyde reduces neither reagent"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The oxidation of toluene to benzaldehyde using chromyl chloride (CrO2Cl2) in CS2 followed by hydrolysis is called:",
        "answer": "(a) Etard reaction",
        "explanation": "Chromyl chloride (CrO2Cl2) in CS2 or CCl4 oxidizes the methyl group of toluene to a brown chromium complex [C6H5CH(OCrOHCl2)2], which upon aqueous acid hydrolysis cleaves cleanly to benzaldehyde. This is the Etard reaction.",
        "options": [
          "(a) Etard reaction",
          "(b) Gattermann-Koch reaction",
          "(c) Stephen reaction",
          "(d) Cannizzaro reaction"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When acetone is heated with iodine and aqueous sodium hydroxide, a yellow precipitate of which compound is formed?",
        "answer": "(a) CHI3",
        "explanation": "Compounds with a methyl carbonyl group (CH3-C=O) undergo the iodoform reaction. Acetone (CH3COCH3) reacts with I2 and NaOH to yield yellow crystalline triiodomethane (iodoform, CHI3) and sodium acetate: CH3COCH3 + 3 I2 + 4 NaOH -> CHI3 + CH3COONa + 3 NaI + 3 H2O.",
        "options": [
          "(a) CHI3",
          "(b) CH3I",
          "(c) CH2I2",
          "(d) CI4"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following compounds does NOT undergo aldol condensation?",
        "answer": "(a) Trichloroacetaldehyde (Chloral, CCl3CHO)",
        "explanation": "Aldol condensation requires at least one acidic α-hydrogen on the carbon adjacent to the carbonyl group. In chloral (CCl3-CHO), the α-carbon has three chlorine atoms and zero α-hydrogens; hence it cannot undergo aldol condensation.",
        "options": [
          "(a) Trichloroacetaldehyde (Chloral, CCl3CHO)",
          "(b) Acetaldehyde (CH3CHO)",
          "(c) Propanal (CH3CH2CHO)",
          "(d) Acetone (CH3COCH3)"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Carboxylic acids do not give characteristic reactions of carbonyl group (>C=O), such as 2,4-DNP derivative formation, because:",
        "answer": "(a) the lone pair of electrons on oxygen of -OH group is delocalized into the carbonyl group by resonance",
        "explanation": "In carboxylic acids, the lone pair of electrons on the hydroxyl oxygen is delocalized into the carbonyl group by resonance: R-C(=O)-OH <-> R-C(-O⁻)=O⁺H. This resonance significantly reduces the electrophilic character of the carbonyl carbon, preventing nucleophilic attack by 2,4-DNP, NaHSO3, or hydroxylamine.",
        "options": [
          "(a) the lone pair of electrons on oxygen of -OH group is delocalized into the carbonyl group by resonance",
          "(b) carboxyl carbon is sp³ hybridized",
          "(c) carboxylic acids are basic",
          "(d) the C=O bond is too strong to be broken"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Decarboxylation of sodium ethanoate (CH3COONa) by heating with soda lime (NaOH + CaO) yields:",
        "answer": "(a) Methane (CH4)",
        "explanation": "Heating the sodium salt of a carboxylic acid with soda lime (a 3:1 mixture of NaOH and CaO) eliminates carbon dioxide as Na2CO3, forming an alkane containing one less carbon atom than the parent acid: CH3COONa + NaOH -(CaO / heat)-> CH4 + Na2CO3.",
        "options": [
          "(a) Methane (CH4)",
          "(b) Ethane (C2H6)",
          "(c) Propane",
          "(d) Ethene"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Wolff-Kishner reduction of an aldehyde or ketone uses which of the following reagents?",
        "answer": "(a) Hydrazine (NH2NH2) followed by KOH in ethylene glycol",
        "explanation": "In Wolff-Kishner reduction, the carbonyl compound is first converted to a hydrazone with hydrazine (NH2NH2), which is then heated with a strong base (KOH) in high-boiling ethylene glycol (453-473 K) to evolve N2 gas and form the corresponding alkane.",
        "options": [
          "(a) Hydrazine (NH2NH2) followed by KOH in ethylene glycol",
          "(b) Zn-Hg and concentrated HCl",
          "(c) H2 / Pd-BaSO4",
          "(d) SnCl2 and concentrated HCl"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "During the reaction of a ketone with semicarbazide (H2N-NH-CO-NH2), only one -NH2 group acts as a nucleophile because:",
        "answer": "(a) the other -NH2 group is involved in resonance with the carbonyl group",
        "explanation": "Semicarbazide has two -NH2 groups: H2N-NH-CO-NH2. The lone pair on the amide -NH2 group directly attached to C=O is delocalized into the carbonyl π-system (H2N-C(=O)- <-> H2N⁺=C(-O⁻)-), greatly reducing its nucleophilicity. The terminal hydrazine -NH2 group is not involved in resonance, retaining full nucleophilic power to attack carbonyls.",
        "options": [
          "(a) the other -NH2 group is involved in resonance with the carbonyl group",
          "(b) the other -NH2 group is sterically hindered",
          "(c) only one nitrogen atom has a lone pair",
          "(d) semicarbazide is an ambidentate nucleophile"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In the Gattermann-Koch reaction, benzene is converted into benzaldehyde by treatment with:",
        "answer": "(a) CO + HCl in the presence of anhydrous AlCl3 / CuCl",
        "explanation": "When benzene or its derivative is treated with carbon monoxide (CO) and hydrogen chloride (HCl) gas in the presence of anhydrous aluminum chloride (AlCl3) and cuprous chloride (CuCl), benzaldehyde is formed. This is the Gattermann-Koch reaction.",
        "options": [
          "(a) CO + HCl in the presence of anhydrous AlCl3 / CuCl",
          "(b) CrO2Cl2 in CS2",
          "(c) Alkaline KMnO4",
          "(d) CH3Cl in anhydrous AlCl3"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following compounds will not give benzoic acid upon vigorous oxidation with alkaline KMnO4 followed by acidification?",
        "answer": "(a) tert-Butylbenzene",
        "explanation": "Side-chain oxidation of alkylbenzenes by hot alkaline KMnO4 requires at least one benzylic hydrogen atom. In tert-butylbenzene (C6H5-C(CH3)3), the benzylic carbon is tertiary and lacks any benzylic hydrogen; therefore, it completely resists permanganate oxidation.",
        "options": [
          "(a) tert-Butylbenzene",
          "(b) Toluene",
          "(c) Ethylbenzene",
          "(d) Isopropylbenzene"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The addition of hydrogen cyanide (HCN) to a carbonyl compound to form a cyanohydrin is catalyzed by a base because:",
        "answer": "(a) the base deprotonates HCN to generate the strong nucleophile cyanide ion (CN⁻)",
        "explanation": "HCN is a very weak acid (Ka ≈ 10⁻¹⁰) and produces an insufficient concentration of nucleophilic cyanide ions on its own. Addition of base deprotonates HCN: HCN + OH⁻ ⇌ CN⁻ + H2O, generating the reactive nucleophile CN⁻ which readily attacks the carbonyl carbon.",
        "options": [
          "(a) the base deprotonates HCN to generate the strong nucleophile cyanide ion (CN⁻)",
          "(b) the base protonates the carbonyl oxygen",
          "(c) the base oxidizes the aldehyde",
          "(d) the base removes water"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Treatment of propanoic acid with thionyl chloride (SOCl2) gives:",
        "answer": "(a) Propanoyl chloride",
        "explanation": "Carboxylic acids react with thionyl chloride (SOCl2) to form acyl chlorides: CH3CH2COOH + SOCl2 -> CH3CH2COCl (propanoyl chloride) + SO2(g) + HCl(g).",
        "options": [
          "(a) Propanoyl chloride",
          "(b) 1-Chloropropane",
          "(c) 2-Chloropropane",
          "(d) Propanoic anhydride"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Formaldehyde reacts with concentrated KOH (50%) to give:",
        "answer": "(a) Methanol and potassium formate",
        "explanation": "Formaldehyde lacks α-hydrogen atoms and undergoes the Cannizzaro reaction: 2 HCHO + conc. KOH -> CH3OH (methanol) + HCOOK (potassium formate).",
        "options": [
          "(a) Methanol and potassium formate",
          "(b) Ethanol and potassium acetate",
          "(c) Acetaldehyde",
          "(d) Formic acid and methane"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The product formed when propanal is treated with dilute NaOH followed by heating is:",
        "answer": "(a) 2-Methylpent-2-enal",
        "explanation": "Self-aldol condensation of propanal (CH3CH2CHO): The α-carbon of one propanal molecule (CH3-*CH(CHO)-) attacks the carbonyl carbon of another propanal molecule to give 3-hydroxy-2-methylpentanal. Upon heating, elimination of water yields 2-Methylpent-2-enal: CH3-CH2-CH=C(CH3)-CHO.",
        "options": [
          "(a) 2-Methylpent-2-enal",
          "(b) Hex-2-enal",
          "(c) Pent-2-enal",
          "(d) 3-Hydroxyhexanal"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following derivatives of ammonia gives an oxime upon condensation with an aldehyde?",
        "answer": "(a) Hydroxylamine (NH2OH)",
        "explanation": "Aldehydes and ketones react with hydroxylamine (NH2OH) in weakly acidic medium to form oximes: R-CHO + H2N-OH -> R-CH=N-OH (aldoxime) + H2O.",
        "options": [
          "(a) Hydroxylamine (NH2OH)",
          "(b) Hydrazine (NH2NH2)",
          "(c) Phenylhydrazine (C6H5NHNH2)",
          "(d) Semicarbazide"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The boiling points of aldehydes and ketones are lower than those of isomeric alcohols because:",
        "answer": "(a) aldehydes and ketones lack intermolecular hydrogen bonding",
        "explanation": "Alcohols possess a hydrogen atom directly bonded to oxygen, forming strong intermolecular hydrogen bonds. Aldehydes and ketones have only dipole-dipole attractions between polar carbonyl groups, which are significantly weaker than hydrogen bonds.",
        "options": [
          "(a) aldehydes and ketones lack intermolecular hydrogen bonding",
          "(b) alcohols are less polar",
          "(c) carbonyl compounds have higher molecular mass",
          "(d) alcohols are non-polar"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Benzaldehyde does not undergo aldol condensation with itself.\nReason (R): Benzaldehyde lacks any α-hydrogen atoms on the carbon adjacent to the carbonyl group.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The formyl group is attached to a benzene carbon that has no attached hydrogen.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Chloroacetic acid is a stronger acid than acetic acid.\nReason (R): The chlorine atom exerts an electron-withdrawing inductive effect (-I), stabilizing the chloroacetate anion.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Carboxylic acids have higher boiling points than alcohols of comparable molecular masses.\nReason (R): Carboxylic acids form stable cyclic hydrogen-bonded dimers in both liquid and vapour states.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly (dimer formation via two intermolecular H-bonds doubles effective molecular weight).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Aldehydes are generally more reactive than ketones towards nucleophilic addition reactions.\nReason (R): Ketones have two electron-donating alkyl groups that reduce the positive charge on the carbonyl carbon and increase steric crowding.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A on both steric and electronic grounds.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): In semicarbazide (H2N-NH-CO-NH2), only the hydrazine -NH2 group acts as a nucleophile towards carbonyls.\nReason (R): The amide -NH2 group is involved in resonance with the adjacent carbonyl group, reducing its electron pair availability.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the regioselectivity of semicarbazide.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Give simple chemical tests to distinguish between:\n(i) Ethanal and Propanal\n(ii) Benzoic acid and Phenol.",
        "answer": "Distinguishing chemical tests",
        "explanation": "(i) Ethanal and Propanal: Iodoform Test.\n- Ethanal (CH3CHO) has a methyl carbonyl group (CH3-C=O); on warming with I2 and NaOH, it forms a yellow crystalline precipitate of iodoform (CHI3).\n- Propanal (CH3CH2CHO) does not have a CH3-C=O group and gives no yellow precipitate.\n\n(ii) Benzoic acid and Phenol: Sodium Bicarbonate (NaHCO3) Test.\n- Benzoic acid is stronger than carbonic acid; it reacts with saturated NaHCO3 solution to produce brisk effervescence of CO2 gas.\n- Phenol is a weaker acid and does not react with NaHCO3 (no effervescence)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Write the mechanism of nucleophilic addition of HCN to an aldehyde in the presence of a base catalyst.",
        "answer": "Base-catalyzed HCN addition mechanism",
        "explanation": "Step 1: Generation of nucleophile (cyanide ion):\nHCN + OH⁻ ⇌ :C≡N:⁻ + H2O.\n(Base deprotonates HCN to generate the powerful nucleophile CN⁻).\n\nStep 2: Nucleophilic attack on carbonyl carbon (Slow, Rate-determining step):\nThe cyanide ion attacks the electrophilic sp² hybridized carbonyl carbon perpendicularly to the planar carbonyl group, forming a tetrahedral alkoxide intermediate:\nR-CH(=O) + CN⁻ -> R-CH(CN)-O⁻.\n\nStep 3: Protonation (Fast):\nThe tetrahedral alkoxide intermediate abstracts a proton from water to regenerate the base catalyst and form the cyanohydrin:\nR-CH(CN)-O⁻ + H2O -> R-CH(CN)-OH (Cyanohydrin) + OH⁻."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Explain the following named reactions with one example each:\n(i) Cannizzaro reaction\n(ii) Cross-aldol condensation.",
        "answer": "Cannizzaro and cross-aldol condensation explanations",
        "explanation": "(i) Cannizzaro Reaction: Disproportionation of an aldehyde lacking α-hydrogen in the presence of concentrated alkali (50% NaOH):\n2 C6H5CHO + 50% NaOH -(heat)-> C6H5CH2OH (benzyl alcohol) + C6H5COONa (sodium benzoate).\n\n(ii) Cross-Aldol Condensation: Aldol condensation between two different carbonyl compounds. If both possess α-hydrogens, a mixture of four products is formed. When benzaldehyde (no α-H) reacts with ethanal in dilute NaOH, it yields 3-phenylprop-2-enal (cinnamaldehyde) cleanly:\nC6H5CHO + CH3CHO -(dil. NaOH / heat)-> C6H5-CH=CH-CHO + H2O."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Arrange the following compounds in increasing order of property indicated:\n(i) Ethanal, Propanal, Propanone, Butanone (reactivity towards nucleophilic addition)\n(ii) CH3COOH, ClCH2COOH, FCH2COOH, Cl2CHCOOH (acidic strength)\n(iii) Pentan-1-ol, Pentanal, Ethoxypropane, Hexane (boiling points).",
        "answer": "Three property orderings with reasoning",
        "explanation": "(i) Nucleophilic Addition: Butanone < Propanone < Propanal < Ethanal.\nReason: Steric crowding and +I inductive effect of alkyl groups decrease the electrophilicity of carbonyl carbon.\n(ii) Acidic Strength: CH3COOH < ClCH2COOH < FCH2COOH < Cl2CHCOOH.\nReason: Electron-withdrawing inductive effect (-I) stabilizes carboxylate anion; F is more electronegative than Cl, and two chlorines exert a stronger cumulative -I effect than one.\n(iii) Boiling Points: Hexane < Ethoxypropane < Pentanal < Pentan-1-ol.\nReason: Hexane has weak dispersion forces; ether has weak dipole moments; aldehyde has strong dipole-dipole attractions; alcohol forms strong intermolecular hydrogen bonds."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "How will you carry out the following conversions:\n(i) Toluene to Benzaldehyde\n(ii) Benzene to Acetophenone?",
        "answer": "Two aromatic organic conversions",
        "explanation": "(i) Toluene to Benzaldehyde (Etard Reaction):\nToluene is treated with chromyl chloride (CrO2Cl2) in CS2 followed by aqueous acid hydrolysis:\nC6H5CH3 + 2 CrO2Cl2 -(CS2)-> C6H5CH(OCrOHCl2)2 -(H3O⁺)-> C6H5CHO + 2 Cr(OH)2Cl2.\n\n(ii) Benzene to Acetophenone (Friedel-Crafts Acylation):\nBenzene reacts with acetyl chloride in the presence of anhydrous AlCl3:\nC6H6 + CH3COCl -(anhyd. AlCl3)-> C6H5COCH3 (acetophenone) + HCl."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "An organic compound 'A' (C3H6O) forms an orange-red precipitate with 2,4-DNP reagent and gives a yellow precipitate on heating with iodine in the presence of sodium hydroxide. It does not reduce Tollens' reagent or Fehling's solution. Identify compound 'A' and write all chemical reactions involved.",
        "answer": "Identification of compound A as Propanone (Acetone)",
        "explanation": "1. Deduction:\n- Compound 'A' (C3H6O) reacts with 2,4-DNP, confirming it is an aldehyde or ketone.\n- It does not reduce Tollens' reagent or Fehling's solution, confirming it is a ketone, not an aldehyde.\n- It gives a positive iodoform test (yellow precipitate with I2/NaOH), confirming the presence of a methyl ketone (CH3-CO-) group.\n- The only 3-carbon ketone is Propanone (Acetone, CH3COCH3).\n\n2. Chemical Reactions:\n- With 2,4-DNP:\n  (CH3)2C=O + H2N-NH-C6H3(NO2)2 -(H⁺)-> (CH3)2C=N-NH-C6H3(NO2)2 (Acetone 2,4-dinitrophenylhydrazone, yellow-orange ppt) + H2O.\n- With I2/NaOH (Iodoform reaction):\n  CH3COCH3 + 3 I2 + 4 NaOH -(heat)-> CHI3 (yellow crystals of iodoform) + CH3COONa + 3 NaI + 3 H2O."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "What is the Hell-Volhard-Zelinsky (HVZ) reaction? Give one example with chemical equation.",
        "answer": "HVZ reaction definition and chemical equation",
        "explanation": "1. Definition: Carboxylic acids having α-hydrogen atoms undergo halogenation exclusively at the α-position when treated with chlorine or bromine in the presence of a catalytic amount of red phosphorus, followed by aqueous workup.\n2. Example:\nPropanoic acid reacts with bromine and red phosphorus to yield 2-bromopropanoic acid (α-bromopropanoic acid):\nCH3-CH2-COOH + Br2 -(red P / H2O)-> CH3-CH(Br)-COOH + HBr."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Explain why:\n(i) Carboxylic acids are stronger acids than phenols.\n(ii) Benzaldehyde is less reactive than propanal towards nucleophilic addition.\n(iii) Aromatic carboxylic acids do not undergo Friedel-Crafts reaction.",
        "answer": "Explanations for relative acidities, reactivity, and Friedel-Crafts failure",
        "explanation": "(i) Carboxylic acid vs Phenol: In carboxylate ion (RCOO⁻), the negative charge is delocalized equally over two highly electronegative oxygen atoms in two equivalent resonance structures. In phenoxide ion (C6H5O⁻), the negative charge is delocalized onto less electronegative carbon atoms in non-equivalent structures. Thus, carboxylate ion is far more stable.\n(ii) Benzaldehyde vs Propanal: The carbonyl group in benzaldehyde is in conjugation with the benzene ring. Resonance delocalizes π-electrons of the ring into the carbonyl carbon (+R effect), decreasing its partial positive charge (electrophilicity). Propanal has no resonance stabilization of carbonyl carbon.\n(iii) Friedel-Crafts Failure: The -COOH group is strongly electron-withdrawing (-M, -I) and strongly deactivates the benzene ring. Additionally, the Lewis acid catalyst (anhyd. AlCl3) bonds to the lone pairs on carboxyl oxygen, completely destroying its catalytic activity."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Write the structural formulas of:\n(i) Semicarbazone of cyclopentanone\n(ii) Oxime of benzaldehyde.",
        "answer": "Structural formulas of carbonyl derivatives",
        "explanation": "(i) Semicarbazone of cyclopentanone: Cyclopentane ring with C=N-NH-CO-NH2.\nReaction: Cyclopentanone + H2N-NH-CO-NH2 -> C5H8=N-NH-CO-NH2 + H2O.\n(ii) Oxime of benzaldehyde (Benzaldoxime): C6H5-CH=N-OH."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "State Clemmensen and Wolff-Kishner reductions. Mention the key difference between their reaction conditions.",
        "answer": "Comparison between Clemmensen and Wolff-Kishner reductions",
        "explanation": "1. Clemmensen Reduction: Converts carbonyl >C=O to >CH2 using Zn-Hg and concentrated HCl (conducted under strongly acidic conditions). Suitable for substrates sensitive to base.\n2. Wolff-Kishner Reduction: Converts carbonyl >C=O to >CH2 by heating with hydrazine (NH2NH2) and KOH in ethylene glycol at 453-473 K (conducted under strongly basic conditions). Suitable for substrates sensitive to acid."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) An organic compound 'A' (molecular formula C8H8O) gives a positive 2,4-DNP test and forms a yellow precipitate of compound 'B' on treatment with I2 and NaOH. Compound 'A' does not reduce Tollens' reagent or Fehling's solution. On drastic oxidation with chromic acid (KMnO4/H2SO4), 'A' gives a monocarboxylic acid 'C' (molecular formula C7H6O2). Identify A, B, and C, and write balanced chemical equations for all reactions.\n(b) Write the mechanism of aldol condensation of ethanal in the presence of dilute NaOH.",
        "answer": "Identification of A = Acetophenone, B = Iodoform, C = Benzoic acid; Aldol mechanism",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3 marks):\n- Compound 'A' (C8H8O) gives positive 2,4-DNP: it is a carbonyl compound (aldehyde or ketone).\n- It does not reduce Tollens' or Fehling's solution: it is a ketone, not an aldehyde.\n- It gives a yellow precipitate with I2/NaOH: it contains a methyl ketone group (-COCH3).\n- Vigorous oxidation gives C7H6O2 (Benzoic acid): hence 'A' is Acetophenone (C6H5COCH3).\n- Compound 'B' is Iodoform (CHI3).\n- Compound 'C' is Benzoic acid (C6H5COOH).\n- Reactions:\n  1. C6H5COCH3 (A) + 2,4-DNP -(H⁺)-> Acetophenone 2,4-dinitrophenylhydrazone + H2O.\n  2. C6H5COCH3 + 3 I2 + 4 NaOH -> CHI3 (B, yellow ppt) + C6H5COONa + 3 NaI + 3 H2O.\n  3. C6H5COCH3 + 3 [O] -(KMnO4/H2SO4, heat)-> C6H5COOH (C, Benzoic acid) + CO2 + H2O.\n\n(b) Mechanism of Aldol Condensation (2 marks):\n- Step 1 (Enolate formation): Base (OH⁻) removes an acidic α-hydrogen from ethanal to form resonance-stabilized enolate ion:\n  OH⁻ + H-CH2-CHO ⇌ [:CH2-CHO <-> CH2=CH-O⁻] + H2O.\n- Step 2 (Nucleophilic addition): The nucleophilic enolate ion attacks the carbonyl carbon of a second ethanal molecule:\n  CH3-CH(=O) + :CH2-CHO -> CH3-CH(O⁻)-CH2-CHO (alkoxide ion).\n- Step 3 (Protonation): The alkoxide abstracts a proton from water to form 3-hydroxybutanal (aldol) and regenerates OH⁻:\n  CH3-CH(O⁻)-CH2-CHO + H2O -> CH3-CH(OH)-CH2-CHO (Aldol) + OH⁻.\n- Upon heating, elimination of water gives but-2-enal (crotonaldehyde): CH3-CH=CH-CHO."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Account for the following:\n(i) Oxidation of propanal is easier than that of propanone.\n(ii) Monochloroethanoic acid is a stronger acid than ethanoic acid.\n(iii) Benzaldehyde reduces Tollens' reagent but not Fehling's solution.\n(b) Write chemical equations for the following:\n(i) Etard reaction\n(ii) Hell-Volhard-Zelinsky reaction.",
        "answer": "Three chemical justifications and two named reaction equations",
        "explanation": "Marking Scheme:\n(a) Explanations (3 marks):\n(i) Aldehyde vs Ketone Oxidation: Propanal contains a hydrogen atom directly attached to the carbonyl carbon (formyl C-H bond). This C-H bond is relatively weak and is cleaved without breaking any carbon-carbon bonds. Propanone contains no hydrogen on carbonyl carbon; its oxidation requires breaking strong C-C bonds, requiring vigorous conditions.\n(ii) Acidity of Monochloroethanoic Acid: Chlorine is strongly electronegative and exerts an electron-withdrawing inductive effect (-I). This disperses the negative charge on the carboxylate oxygen, stabilizing the chloroacetate anion. Ethanoic acid has an electron-donating methyl group (+I) that intensifies negative charge, destabilizing acetate.\n(iii) Benzaldehyde and Fehling's: Aromatic aldehydes have carbonyl carbon conjugated with the benzene ring, reducing electrophilic character. Tollens' reagent is a stronger oxidizing agent than Fehling's solution, so Tollens' oxidizes benzaldehyde to benzoate while Fehling's cannot.\n\n(b) Equations (2 marks):\n(i) Etard Reaction:\nC6H5CH3 + 2 CrO2Cl2 -(CS2)-> C6H5CH(OCrOHCl2)2 -(H3O⁺)-> C6H5CHO + 2 Cr(OH)2Cl2.\n(ii) Hell-Volhard-Zelinsky (HVZ) Reaction:\nCH3COOH + Cl2 -(red P / H2O)-> ClCH2COOH + HCl."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Describe the mechanism of esterification of a carboxylic acid with an alcohol in the presence of an acid catalyst.\n(b) Complete the following reactions:\n(i) CH3-CO-CH3 -(Zn-Hg / conc. HCl)->\n(ii) C6H5-CHO + HCHO -(conc. NaOH, heat)->\n(iii) CH3-COOH + PCl5 ->",
        "answer": "Mechanism of esterification and three completed chemical equations",
        "explanation": "Marking Scheme:\n(a) Mechanism of Esterification (3 marks):\n- Step 1 (Protonation): Proton from acid catalyst protonates carbonyl oxygen, enhancing electrophilicity of carbonyl carbon:\n  R-C(=O)-OH + H⁺ ⇌ R-C(⁺OH)-OH.\n- Step 2 (Nucleophilic attack): Alcohol molecule (R'OH) attacks the electrophilic carbon to form a tetrahedral intermediate:\n  R-C(⁺OH)-OH + R'-OH ⇌ [R-C(OH)2(O⁺HR')].\n- Step 3 (Proton transfer): Proton shifts from the alkoxy oxygen to one of the -OH groups:\n  [R-C(OH)2(O⁺HR')] ⇌ [R-C(OH)(O⁺H2)(OR')].\n- Step 4 (Elimination of water): Water departs as leaving group, forming a protonated ester:\n  [R-C(OH)(O⁺H2)(OR')] ⇌ [R-C(⁺OH)(OR')] + H2O.\n- Step 5 (Deprotonation): Deprotonation regenerates the acid catalyst, yielding ester:\n  [R-C(⁺OH)(OR')] ⇌ R-COOR' + H⁺.\n\n(b) Completed Reactions (2 marks):\n(i) CH3-CO-CH3 -(Zn-Hg/conc. HCl)-> CH3-CH2-CH3 (Propane, Clemmensen reduction).\n(ii) C6H5-CHO + HCHO -(conc. NaOH)-> C6H5CH2OH (benzyl alcohol) + HCOONa (sodium formate). (Cross-Cannizzaro: HCHO is more reactive and oxidizes preferentially).\n(iii) CH3-COOH + PCl5 -> CH3-COCl (acetyl chloride) + POCl3 + HCl."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Carbonyl Reactivity and Diagnostic Tests\nAldehydes and ketones contain the polar carbonyl functional group (>C=O). The sp² hybridized carbon carries a partial positive charge, making it highly susceptible to nucleophilic attack. While both aldehydes and ketones form crystalline derivatives with 2,4-dinitrophenylhydrazine (Brady's reagent), their differentiation relies on redox behavior. Aldehydes are easily oxidized to carboxylic acids by mild reagents such as Tollens' reagent and Fehling's solution. Tollens' reagent contains [Ag(NH3)2]⁺, which oxidizes aldehydes to carboxylate ions while depositing a brilliant silver mirror. In addition, methyl ketones undergo the haloform reaction with halogen and base to yield trihalomethane precipitates.\n(i) Why are aldehydes more easily oxidized than ketones?\n(ii) What observation confirms a positive Tollens' test?\n(iii) Which among butanal and butan-2-one will give a yellow precipitate with I2/NaOH? Write the formula of the precipitate.\n(iv) Why is Fehling's test negative for benzaldehyde?",
        "answer": "Solutions to Case Study on Carbonyl Chemical Tests and Reactivity",
        "explanation": "(i) Aldehydes possess a hydrogen atom directly bonded to the carbonyl carbon (formyl C-H bond), which can be cleaved without breaking any carbon-carbon bonds. Ketones have no such hydrogen and require cleavage of strong C-C bonds.\n(ii) Deposition of a shining silver mirror on the inner walls of the test tube (or grey-black precipitate of metallic silver).\n(iii) Butan-2-one (CH3-CO-CH2CH3) will give the yellow precipitate because it contains a methyl ketone (CH3-C=O) group. The precipitate is Iodoform (CHI3).\n(iv) Benzaldehyde is an aromatic aldehyde; resonance with the benzene ring decreases electrophilicity of carbonyl carbon, and Fehling's solution is too weak an oxidizing agent to oxidize aromatic aldehydes."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) An organic compound 'A' with molecular formula C5H10O does not reduce Tollens' reagent but forms an addition compound with sodium hydrogen sulfite (NaHSO3) and gives a positive iodoform test. On Clemmensen reduction, 'A' gives compound 'B' (C5H12). Identify 'A' and 'B', and write all reactions involved.\n(b) Why cannot carboxylic acids be reduced to alcohols using NaBH4?",
        "answer": "Identification of A = Pentan-2-one, B = Pentane, and inertness of -COOH to NaBH4",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3.5 marks):\n- Compound 'A' (C5H10O) forms NaHSO3 addition compound: contains a carbonyl group (>C=O).\n- It does not reduce Tollens' reagent: it is a ketone, not an aldehyde.\n- It gives a positive iodoform test: it contains a methyl ketone group (CH3-CO-).\n- The only 5-carbon methyl ketone is Pentan-2-one (CH3-CO-CH2CH2CH3).\n- Clemmensen reduction converts >C=O to >CH2, giving Pentane (CH3-CH2-CH2-CH2-CH3) as compound 'B'.\n- Reactions:\n  1. CH3COCH2CH2CH3 + NaHSO3 -> CH3-C(OH)(SO3Na)-CH2CH2CH3 (crystalline bisulfite adduct).\n  2. CH3COCH2CH2CH3 + 3 I2 + 4 NaOH -> CHI3 (yellow ppt of iodoform) + CH3CH2CH2COONa + 3 NaI + 3 H2O.\n  3. CH3COCH2CH2CH3 (A) -(Zn-Hg / conc. HCl)-> CH3CH2CH2CH2CH3 (B, Pentane) + H2O.\n\n(b) Inertness of -COOH towards NaBH4 (1.5 marks):\n- NaBH4 is a mild reducing agent that readily reduces aldehydes and ketones. However, in carboxylic acids, resonance delocalization of lone pairs on the -OH oxygen into the carbonyl group greatly reduces the electrophilicity of the carbonyl carbon.\n- Additionally, the acidic carboxyl proton reacts immediately with hydride: RCOOH + BH4⁻ -> RCOO⁻ + H2 + BH3. The resulting carboxylate anion has an intensive negative charge that repels incoming hydride nucleophiles. Therefore, powerful reducing agents like LiAlH4 or B2H6 are required."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Write chemical equations for the following:\n(i) Stephen reduction\n(ii) Gattermann-Koch reaction\n(iii) Wolff-Kishner reduction.\n(b) How will you convert:\n(i) Ethanal to But-2-enal\n(ii) Bromobenzene to Benzoic acid?",
        "answer": "Three named reaction equations and two chemical conversions",
        "explanation": "(a) Chemical Equations (3 marks):\n(i) Stephen Reduction: Nitriles are reduced by SnCl2/HCl to imine hydrochloride followed by hydrolysis:\nCH3CN + SnCl2 + 2 HCl -> CH3CH=NH·HCl -(H3O⁺)-> CH3CHO (ethanal) + NH4Cl.\n(ii) Gattermann-Koch Reaction: Benzene + CO + HCl -(anhyd. AlCl3/CuCl)-> C6H5CHO (benzaldehyde) + HCl.\n(iii) Wolff-Kishner Reduction: CH3COCH3 + NH2NH2 -> (CH3)2C=N-NH2 -(KOH / ethylene glycol, 453-473 K)-> CH3CH2CH3 (propane) + N2(g).\n\n(b) Conversions (2 marks):\n(i) Ethanal to But-2-enal: Aldol condensation followed by dehydration:\n2 CH3CHO -(dil. NaOH)-> CH3-CH(OH)-CH2-CHO -(heat, -H2O)-> CH3-CH=CH-CHO (But-2-enal).\n(ii) Bromobenzene to Benzoic acid: Grignard carboxylation:\nC6H5Br + Mg -(dry ether)-> C6H5MgBr -(CO2)-> C6H5COOMgBr -(H3O⁺)-> C6H5COOH (benzoic acid)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "How will you distinguish between the following pairs of compounds by simple chemical tests:\n(i) Pentan-2-one and Pentan-3-one\n(ii) Benzaldehyde and Acetophenone\n(iii) Formic acid and Acetic acid\n(iv) Propanal and Propanone?",
        "answer": "Four pairs distinguished by chemical tests",
        "explanation": "(i) Pentan-2-one and Pentan-3-one: Iodoform Test.\nPentan-2-one (CH3-CO-CH2CH2CH3) is a methyl ketone and yields a yellow precipitate of CHI3 with I2/NaOH. Pentan-3-one (CH3CH2-CO-CH2CH3) has no CH3-CO- group and gives no precipitate.\n(ii) Benzaldehyde and Acetophenone: Tollens' Test.\nBenzaldehyde is an aldehyde and reduces Tollens' reagent to give a silver mirror. Acetophenone is a ketone and does not reduce Tollens' reagent.\n(iii) Formic acid and Acetic acid: Tollens' or Fehling's Test.\nFormic acid (HCOOH) possesses an aldehyde-like formyl group (-CHO) and reduces Tollens' reagent to metallic silver. Acetic acid (CH3COOH) does not reduce Tollens' reagent.\n(iv) Propanal and Propanone: Fehling's Test.\nPropanal is an aliphatic aldehyde and reduces Fehling's solution to form a red precipitate of Cu2O. Propanone is a ketone and does not react."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) An organic compound 'A' having molecular formula C2H4O on oxidation with acidified K2Cr2O7 gives compound 'B' (C2H4O2). 'A' undergoes aldol condensation. Compound 'B' on heating with soda lime yields a hydrocarbon 'C'. Identify A, B, and C, and write all reactions.\n(b) Why do aldehydes and ketones have high dipole moments?",
        "answer": "Identification of A = Ethanal, B = Ethanoic acid, C = Methane; Dipole moment explanation",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3.5 marks):\n- Compound 'A' (C2H4O) undergoes aldol condensation and has 2 carbons: hence 'A' is Ethanal (Acetaldehyde, CH3CHO).\n- Oxidation of 'A' gives 'B' (C2H4O2): hence 'B' is Ethanoic acid (Acetic acid, CH3COOH).\n- Decarboxylation of 'B' with soda lime yields hydrocarbon 'C': hence 'C' is Methane (CH4).\n- Reactions:\n  1. CH3CHO (A) + [O] -(K2Cr2O7/H2SO4)-> CH3COOH (B, Ethanoic acid).\n  2. 2 CH3CHO -(dil. NaOH)-> CH3-CH(OH)-CH2-CHO (Aldol).\n  3. CH3COOH + NaOH -> CH3COONa + H2O.\n     CH3COONa + NaOH -(CaO / heat)-> CH4 (C, Methane) + Na2CO3.\n\n(b) Dipole Moment of Carbonyls (1.5 marks):\n- The carbonyl group (>C=O) consists of a carbon atom doubly bonded to an oxygen atom.\n- Oxygen is significantly more electronegative than carbon (3.44 vs 2.55). The polarizable π-electron cloud is strongly shifted towards oxygen, creating substantial partial charges: >C^δ⁺=O^δ⁻.\n- The dipolar resonance structure >C⁺-O⁻ contributes about 40-50% to the hybrid, resulting in large dipole moments (2.3 - 2.8 D)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Give the structures and IUPAC names of the main products in the following reactions:\n(i) Reaction of cyclohexanone with hydroxylamine\n(ii) Reaction of benzaldehyde with semicarbazide\n(iii) Hydrolysis of propanenitrile with dilute HCl\n(iv) Reaction of butanal with 2,4-dinitrophenylhydrazine.",
        "answer": "Structures and IUPAC names of four organic products",
        "explanation": "(i) Cyclohexanone + NH2OH -> Cyclohexanone oxime + H2O. Structure: Six-membered ring with =N-OH.\n(ii) Benzaldehyde + H2N-NH-CO-NH2 -> Benzaldehyde semicarbazone + H2O. Structure: C6H5-CH=N-NH-CO-NH2.\n(iii) CH3CH2CN + 2 H2O + HCl -(heat)-> CH3CH2COOH (Propanoic acid) + NH4Cl.\n(iv) Butanal + 2,4-DNP -> Butanal 2,4-dinitrophenylhydrazone + H2O. Structure: CH3-CH2-CH2-CH=N-NH-C6H3(NO2)2."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is cross-aldol condensation? What products are obtained when a mixture of ethanal and propanal is treated with dilute NaOH? Write their structural formulas.\n(b) Why is formic acid stronger than benzoic acid?",
        "answer": "Cross-aldol condensation of ethanal and propanal, and formic vs benzoic acid acidity",
        "explanation": "Marking Scheme:\n(a) Cross-Aldol Condensation (3.5 marks):\n- When aldol condensation is carried out between two different aldehydes/ketones, it is called cross-aldol condensation. Since both ethanal and propanal possess α-hydrogens, four aldol condensation products are formed upon dehydration:\n1. Self-aldol of ethanal: But-2-enal (CH3-CH=CH-CHO).\n2. Self-aldol of propanal: 2-Methylpent-2-enal (CH3-CH2-CH=C(CH3)-CHO).\n3. Cross-aldol (ethanal enolate + propanal carbonyl):\n   CH3-CH2-CH=CH-CHO (Pent-2-enal).\n4. Cross-aldol (propanal enolate + ethanal carbonyl):\n   CH3-CH=C(CH3)-CHO (2-Methylbut-2-enal).\n\n(b) Formic Acid vs Benzoic Acid (1.5 marks):\n- In benzoic acid (C6H5COOH), the phenyl ring acts as an electron-donating group through resonance (+R effect), delocalizing π-electrons into the carboxyl carbon. This reduces the polarity of the O-H bond and destabilizes the benzoate anion relative to formate.\n- In formic acid (HCOOH), hydrogen has virtually no inductive (+I) or resonance (+R) effect, allowing the formate anion to be more stable.\n- Consequently, formic acid (pKa = 3.75) is stronger than benzoic acid (pKa = 4.20)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "unit_num": 3,
      "title": "Amines",
      "unit_title": "Organic Chemistry",
      "weightage_unit": "6 Marks (Organic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following amines gives a foul-smelling isocyanide when heated with chloroform and alcoholic KOH (Carbylamine test)?",
        "answer": "(a) Aniline (C6H5NH2)",
        "explanation": "The carbylamine reaction is specific only to primary (1°) aliphatic and aromatic amines. Aniline is a primary aromatic amine and reacts with CHCl3 and alc. KOH to produce phenyl isocyanide (foul smell): C6H5NH2 + CHCl3 + 3 KOH -> C6H5NC + 3 KCl + 3 H2O. Secondary and tertiary amines do not show this reaction.",
        "options": [
          "(a) Aniline (C6H5NH2)",
          "(b) N-Methylaniline",
          "(c) Triethylamine",
          "(d) N,N-Dimethylaniline"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The correct order of increasing basic strength of methyl-substituted amines in aqueous solution is:",
        "answer": "(a) NH3 < (CH3)3N < CH3NH2 < (CH3)2NH",
        "explanation": "In aqueous solution, the basic strength of methylamines is determined by the combined interplay of inductive effect (+I), steric hindrance, and hydration of the substituted ammonium cation. The resulting order is: 2° > 1° > 3° > NH3: (CH3)2NH > CH3NH2 > (CH3)3N > NH3.",
        "options": [
          "(a) NH3 < (CH3)3N < CH3NH2 < (CH3)2NH",
          "(b) (CH3)3N < (CH3)2NH < CH3NH2 < NH3",
          "(c) NH3 < CH3NH2 < (CH3)2NH < (CH3)3N",
          "(d) (CH3)2NH < CH3NH2 < (CH3)3N < NH3"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Gabriel phthalimide synthesis is exclusively used for the preparation of:",
        "answer": "(a) Primary aliphatic amines",
        "explanation": "Gabriel phthalimide synthesis involves an SN2 attack of phthalimide anion on an alkyl halide, yielding primary aliphatic amines cleanly. Primary aromatic amines (like aniline) cannot be prepared by this method because aryl halides do not undergo SN2 nucleophilic substitution with phthalimide anion.",
        "options": [
          "(a) Primary aliphatic amines",
          "(b) Primary aromatic amines",
          "(c) Secondary amines",
          "(d) Tertiary amines"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Hoffmann bromamide degradation of propanamide (CH3CH2CONH2) yields:",
        "answer": "(a) Ethylamine (CH3CH2NH2)",
        "explanation": "Hoffmann bromamide degradation converts a primary carboxamide into a primary amine with one carbon atom less than the parent amide: CH3CH2CONH2 + Br2 + 4 KOH -> CH3CH2NH2 (ethylamine) + K2CO3 + 2 KBr + 2 H2O.",
        "options": [
          "(a) Ethylamine (CH3CH2NH2)",
          "(b) Propylamine (CH3CH2CH2NH2)",
          "(c) Methylamine (CH3NH2)",
          "(d) Ethanamide"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Hinsberg's reagent used to distinguish between primary, secondary, and tertiary amines is:",
        "answer": "(a) Benzenesulfonyl chloride",
        "explanation": "Hinsberg's reagent is benzenesulfonyl chloride (C6H5SO2Cl). It reacts with primary amines to form N-alkylbenzenesulfonamides (soluble in alkali due to acidic N-H), with secondary amines to form insoluble sulfonamides, and does not react with tertiary amines.",
        "options": [
          "(a) Benzenesulfonyl chloride",
          "(b) Benzoyl chloride",
          "(c) Acetyl chloride",
          "(d) p-Toluenesulfonic acid"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Direct nitration of aniline with concentrated HNO3 and concentrated H2SO4 yields an unusually large amount (~47%) of:",
        "answer": "(a) m-Nitroaniline",
        "explanation": "In strongly acidic nitrating mixture, the basic amino group of aniline is protonated to form the anilinium ion (C6H5NH3⁺). The -NH3⁺ group has a positive charge and acts as a powerful electron-withdrawing, meta-directing group (-I effect), leading to 47% meta-nitroaniline (along with 51% para and 2% ortho).",
        "options": [
          "(a) m-Nitroaniline",
          "(b) o-Nitroaniline",
          "(c) p-Nitroaniline",
          "(d) 2,4,6-Trinitroaniline"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Aniline reacts with bromine water at room temperature to give a white precipitate of:",
        "answer": "(a) 2,4,6-Tribromoaniline",
        "explanation": "The -NH2 group strongly activates the benzene ring towards electrophilic attack due to the powerful +R resonance effect of the nitrogen lone pair. Reaction with bromine water results in instantaneous bromination at all ortho and para positions, yielding 2,4,6-tribromoaniline as a white precipitate.",
        "options": [
          "(a) 2,4,6-Tribromoaniline",
          "(b) 4-Bromoaniline",
          "(c) 2-Bromoaniline",
          "(d) 3-Bromoaniline"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following is the strongest base in gaseous phase?",
        "answer": "(a) (CH3)3N",
        "explanation": "In the gas phase, solvent effects (hydration) and steric hindrances are absent; basicity is governed solely by the electron-donating inductive effect (+I) of alkyl groups. Since tertiary amine has three +I methyl groups, the electron density on nitrogen is highest: 3° > 2° > 1° > NH3.",
        "options": [
          "(a) (CH3)3N",
          "(b) (CH3)2NH",
          "(c) CH3NH2",
          "(d) NH3"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Azo coupling of benzenediazonium chloride with phenol in a basic medium (pH 9-10) yields:",
        "answer": "(a) p-Hydroxyazobenzene (Orange dye)",
        "explanation": "C6H5N2⁺Cl⁻ + C6H5OH -(pH 9-10 / OH⁻)-> C6H5-N=N-C6H4-OH (p-hydroxyazobenzene, brilliant orange dye) + Cl⁻ + H2O.",
        "options": [
          "(a) p-Hydroxyazobenzene (Orange dye)",
          "(b) p-Aminoazobenzene (Yellow dye)",
          "(c) Chlorobenzene",
          "(d) Phenol"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Reduction of nitrobenzene is best carried out industrially using Fe and concentrated HCl because:",
        "answer": "(a) FeCl2 formed gets hydrolyzed to release HCl, requiring only a catalytic amount of HCl",
        "explanation": "Reduction with Fe and HCl is preferred because the ferrous chloride (FeCl2) produced hydrolyzes in the aqueous reaction mixture (FeCl2 + 2 H2O -> Fe(OH)2 + 2 HCl), regenerating hydrochloric acid. Hence, only a small catalytic amount of HCl is needed to initiate the reaction.",
        "options": [
          "(a) FeCl2 formed gets hydrolyzed to release HCl, requiring only a catalytic amount of HCl",
          "(b) Fe is a noble metal",
          "(c) it gives nitrosobenzene",
          "(d) the reaction is reversible"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Sulfanilic acid exists as a dipolar zwitterion because:",
        "answer": "(a) proton transfers internally from acidic -SO3H group to basic -NH2 group",
        "explanation": "Sulfanilic acid (p-aminobenzenesulfonic acid) contains both an acidic sulfonic group (-SO3H) and a basic amino group (-NH2) in the same molecule. An internal acid-base neutralization occurs: the sulfonic acid transfers its proton to the amino group, forming the dipolar zwitterion +H3N-C6H4-SO3⁻.",
        "options": [
          "(a) proton transfers internally from acidic -SO3H group to basic -NH2 group",
          "(b) it contains sulfur",
          "(c) it has two benzene rings",
          "(d) it is insoluble in acids"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Primary aliphatic amines react with cold nitrous acid (HNO2) to produce:",
        "answer": "(a) Alcohols with quantitative liberation of nitrogen gas",
        "explanation": "R-NH2 + HNO2 -(0-5 °C)-> [R-N2⁺Cl⁻] (unstable aliphatic diazonium salt) -> R-OH + N2(g)↑ + HCl. The evolution of nitrogen gas is quantitative and is utilized in amino acid estimation.",
        "options": [
          "(a) Alcohols with quantitative liberation of nitrogen gas",
          "(b) Stable diazonium salts",
          "(c) Nitroalkanes",
          "(d) Alkyl nitrites"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Why does aniline not undergo Friedel-Crafts alkylation or acylation?",
        "answer": "(a) The lone pair on nitrogen forms a coordinate complex with Lewis acid catalyst AlCl3",
        "explanation": "Aniline is a Lewis base and reacts directly with the Lewis acid catalyst AlCl3 to form an insoluble adduct: C6H5NH2: -> AlCl3. This puts a formal positive charge on nitrogen (-N⁺H2-Al⁻Cl3), which strongly deactivates the benzene ring via -I effect and prevents electrophilic attack.",
        "options": [
          "(a) The lone pair on nitrogen forms a coordinate complex with Lewis acid catalyst AlCl3",
          "(b) Aniline is a gas",
          "(c) Benzene ring is deactivated",
          "(d) AlCl3 decomposes aniline"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following compounds reacts with benzenesulfonyl chloride to give a solid insoluble in aqueous KOH?",
        "answer": "(a) Diethylamine ((C2H5)2NH)",
        "explanation": "Diethylamine is a secondary amine. It reacts with benzenesulfonyl chloride to form N,N-diethylbenzenesulfonamide: C6H5SO2Cl + HN(C2H5)2 -> C6H5SO2N(C2H5)2 + HCl. Because there is no acidic hydrogen attached to nitrogen, the sulfonamide is completely insoluble in aqueous KOH.",
        "options": [
          "(a) Diethylamine ((C2H5)2NH)",
          "(b) Ethylamine (C2H5NH2)",
          "(c) Triethylamine ((C2H5)3N)",
          "(d) Aniline (C6H5NH2)"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The conversion of benzenediazonium chloride to fluorobenzene using fluoroboric acid (HBF4) followed by heating is known as:",
        "answer": "(a) Balz-Schiemann reaction",
        "explanation": "C6H5N2⁺Cl⁻ + HBF4 -> C6H5N2⁺BF4⁻ (insoluble precipitate) -(heat)-> C6H5F (fluorobenzene) + BF3 + N2. This is the Balz-Schiemann reaction.",
        "options": [
          "(a) Balz-Schiemann reaction",
          "(b) Sandmeyer reaction",
          "(c) Gattermann reaction",
          "(d) Swarts reaction"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The correct order of boiling points among isomeric butylamines is:",
        "answer": "(a) Primary > Secondary > Tertiary",
        "explanation": "Primary amines (CH3(CH2)3NH2) have two N-H bonds and form extensive intermolecular hydrogen-bonded networks. Secondary amines have one N-H bond and form weaker H-bonds. Tertiary amines have no N-H bonds and cannot form intermolecular hydrogen bonds among themselves, resulting in the lowest boiling points.",
        "options": [
          "(a) Primary > Secondary > Tertiary",
          "(b) Tertiary > Secondary > Primary",
          "(c) Secondary > Primary > Tertiary",
          "(d) Primary > Tertiary > Secondary"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following is used to prepare pure p-bromoaniline from aniline?",
        "answer": "(a) Acetylation with acetic anhydride before bromination, followed by hydrolysis",
        "explanation": "Direct bromination gives 2,4,6-tribromoaniline. To prepare monobromo derivative, the activating effect of -NH2 group is moderated by acetylation with (CH3CO)2O to form acetanilide. Bromination of acetanilide with Br2 in acetic acid yields 4-bromoacetanilide (major), which upon acid or alkaline hydrolysis yields 4-bromoaniline (p-bromoaniline).",
        "options": [
          "(a) Acetylation with acetic anhydride before bromination, followed by hydrolysis",
          "(b) Direct reaction with bromine water",
          "(c) Reaction with Br2 in CS2",
          "(d) Reaction with HBr"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The reagent used in Mendius reaction to reduce nitriles to primary amines is:",
        "answer": "(a) Sodium and ethanol (Na / C2H5OH)",
        "explanation": "The reduction of alkyl or aryl cyanides (nitriles) to primary amines using sodium in boiling ethanol (or catalytic hydrogenation) is called the Mendius reaction: R-C≡N + 4 [H] -(Na/C2H5OH)-> R-CH2-NH2.",
        "options": [
          "(a) Sodium and ethanol (Na / C2H5OH)",
          "(b) Zn-Hg / HCl",
          "(c) NaBH4",
          "(d) Sn / HCl"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Benzenediazonium chloride on reduction with hypophosphorous acid (H3PO2) in the presence of Cu⁺ catalyst yields:",
        "answer": "(a) Benzene",
        "explanation": "Mild reducing agents like hypophosphorous acid (H3PO2 / phosphinic acid) or ethanol reduce diazonium salts to arenes: C6H5N2⁺Cl⁻ + H3PO2 + H2O -(Cu⁺)-> C6H6 (Benzene) + N2 + H3PO3 + HCl.",
        "options": [
          "(a) Benzene",
          "(b) Phenol",
          "(c) Chlorobenzene",
          "(d) Aniline"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following amines does not form hydrogen bonds with water?",
        "answer": "(a) All aliphatic amines can form hydrogen bonds with water",
        "explanation": "All lower aliphatic amines (1°, 2°, and 3°) possess a lone pair of electrons on the nitrogen atom which can accept hydrogen bonds from polar water molecules (R3N:···H-O-H), rendering lower members water-soluble.",
        "options": [
          "(a) All aliphatic amines can form hydrogen bonds with water",
          "(b) Primary amines only",
          "(c) Secondary amines only",
          "(d) Tertiary amines cannot"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The IUPAC name of (CH3)2N-CH2-CH3 is:",
        "answer": "(a) N,N-Dimethylethanamine",
        "explanation": "The longest carbon chain attached to nitrogen has 2 carbons (ethanamine). The two methyl groups are attached to nitrogen, designated by locant N: N,N-Dimethylethanamine.",
        "options": [
          "(a) N,N-Dimethylethanamine",
          "(b) Dimethyl ethyl amine",
          "(c) N-Ethyl-N-methylmethanamine",
          "(d) 1-(Dimethylamino)ethane"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "What is the order of basicity of ethyl-substituted amines in aqueous solution?",
        "answer": "(a) (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3",
        "explanation": "For ethyl-substituted amines in water, the order of basic strength is 2° > 3° > 1° > NH3: (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3.",
        "options": [
          "(a) (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3",
          "(b) (C2H5)3N > (C2H5)2NH > C2H5NH2 > NH3",
          "(c) C2H5NH2 > (C2H5)2NH > (C2H5)3N > NH3",
          "(d) (C2H5)2NH > C2H5NH2 > (C2H5)3N > NH3"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In the Sandmeyer reaction, benzenediazonium chloride is converted to chlorobenzene using:",
        "answer": "(a) Cu2Cl2 / HCl",
        "explanation": "The Sandmeyer reaction utilizes cuprous chloride (Cu2Cl2) dissolved in concentrated HCl to replace the diazonium group with chlorine: C6H5N2⁺Cl⁻ -(Cu2Cl2/HCl)-> C6H5Cl + N2. (Using copper powder is the Gattermann reaction).",
        "options": [
          "(a) Cu2Cl2 / HCl",
          "(b) Cu powder / HCl",
          "(c) CuCl2 / HCl",
          "(d) Cl2 / FeCl3"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following compounds is the least basic?",
        "answer": "(a) C6H5NH2 (Aniline)",
        "explanation": "In aniline, the lone pair of electrons on the nitrogen atom is delocalized over the aromatic benzene ring via +R resonance effect, making it significantly less available for protonation compared to ammonia and aliphatic amines (pKb of aniline is ~9.38, compared to 4.75 for NH3).",
        "options": [
          "(a) C6H5NH2 (Aniline)",
          "(b) CH3NH2",
          "(c) (CH3)2NH",
          "(d) NH3"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "When benzenediazonium chloride is warmed with aqueous KI, it forms:",
        "answer": "(a) Iodobenzene",
        "explanation": "Iodobenzene is conveniently prepared by simply warming benzenediazonium chloride with an aqueous solution of potassium iodide (no copper catalyst is needed): C6H5N2⁺Cl⁻ + KI -(warm)-> C6H5I + KCl + N2(g).",
        "options": [
          "(a) Iodobenzene",
          "(b) Chlorobenzene",
          "(c) Potassium benzoate",
          "(d) Biphenyl"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Aniline is a weaker base than cyclohexylamine.\nReason (R): In aniline, the nitrogen lone pair participates in resonance delocalization into the benzene ring, whereas in cyclohexylamine, it is fully available.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Resonance delocalization drastically decreases the electron density on nitrogen in aniline.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Gabriel phthalimide synthesis cannot be used to prepare aniline.\nReason (R): Aryl halides do not undergo nucleophilic substitution with potassium phthalimide under mild conditions.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why Gabriel synthesis fails for aryl amines.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Direct nitration of aniline produces a significant yield (47%) of meta-nitroaniline.\nReason (R): In the presence of strong acid, the -NH2 group is protonated to form anilinium ion (-NH3⁺), which is meta-directing.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the high meta-isomer formation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Tertiary amines have lower boiling points than isomeric primary amines.\nReason (R): Tertiary amines lack N-H bonds and cannot form intermolecular hydrogen bonds among themselves.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Benzenediazonium chloride is stable at 0-5 °C but decomposes rapidly above 10 °C.\nReason (R): The diazonium group (-N2⁺) is an exceptional leaving group because N2 is an extremely stable diatomic gas with high bond dissociation energy.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains the thermal instability of diazonium salts.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Distinguish between the following pairs using a simple chemical test:\n(i) Methylamine and Dimethylamine\n(ii) Aniline and Benzylamine.",
        "answer": "Distinguishing chemical tests for amines",
        "explanation": "(i) Methylamine and Dimethylamine: Carbylamine Test.\n- Methylamine (1° amine) on warming with CHCl3 and alcoholic KOH gives an extremely offensive, foul smell of methyl isocyanide (CH3NC).\n- Dimethylamine (2° amine) does not give the carbylamine test.\n\n(ii) Aniline and Benzylamine: Azo Dye Test.\n- Aniline on diazotization at 0-5 °C followed by coupling with alkaline β-naphthol yields a brilliant orange-red azo dye.\n- Benzylamine forms an unstable aliphatic diazonium salt that decomposes immediately, liberating N2 gas with no dye formation."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Explain the Hoffmann bromamide degradation reaction. Write its chemical equation and outline the reason for shortening of carbon chain.",
        "answer": "Hoffmann bromamide degradation explanation and equation",
        "explanation": "1. Explanation: When a primary carboxamide is heated with bromine and aqueous or ethanolic potassium hydroxide, it degrades to form a primary amine containing one carbon atom less than the starting amide.\n2. Chemical Equation:\nR-CONH2 + Br2 + 4 KOH -(heat)-> R-NH2 + K2CO3 + 2 KBr + 2 H2O.\n3. Reason for Chain Shortening: The mechanism involves intramolecular rearrangement (migration) of the alkyl or aryl group (R) from the carbonyl carbon to the electron-deficient nitrogen atom of an intermediate nitrene/isocyanate (R-N=C=O). Subsequent alkaline hydrolysis expels the carbonyl carbon as carbonate ion (CO3²⁻), resulting in loss of one carbon atom."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Why is aniline a weaker base than aliphatic amines? Explain using resonance structures.",
        "answer": "Resonance analysis of aniline basicity",
        "explanation": "1. Aniline has 5 canonical resonance structures in which the lone pair of electrons on nitrogen is delocalized over the ortho and para positions of the benzene ring (+R effect). This reduces the electron density on nitrogen, lowering its proton-accepting ability.\n2. Furthermore, when aniline accepts a proton to form anilinium ion (C6H5NH3⁺), the positive charge cannot delocalize into the ring; anilinium ion has only 2 resonance structures. Thus, protonation decreases resonance stabilization (loss of exchange energy), making aniline a much weaker base (pKb ~ 9.38 vs 3.3 for aliphatic amines)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "How will you convert:\n(i) Nitrobenzene to Aniline\n(ii) Aniline to Fluorobenzene\n(iii) Benzenediazonium chloride to Benzene?",
        "answer": "Three organic conversions involving diazonium and nitro compounds",
        "explanation": "(i) Nitrobenzene to Aniline:\nC6H5NO2 + 3 Fe + 6 HCl -> C6H5NH2 (Aniline) + 3 FeCl2 + 2 H2O.\n\n(ii) Aniline to Fluorobenzene (Balz-Schiemann reaction):\n- Step 1: Diazotization: C6H5NH2 + NaNO2 + 2 HCl -(273-278 K)-> C6H5N2⁺Cl⁻.\n- Step 2: Precipitation with HBF4: C6H5N2⁺Cl⁻ + HBF4 -> C6H5N2⁺BF4⁻.\n- Step 3: Pyrolysis: C6H5N2⁺BF4⁻ -(heat)-> C6H5F (Fluorobenzene) + BF3 + N2.\n\n(iii) Benzenediazonium chloride to Benzene:\nC6H5N2⁺Cl⁻ + H3PO2 + H2O -(Cu⁺)-> C6H6 (Benzene) + N2 + H3PO3 + HCl."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "Write the chemical reaction of benzenediazonium chloride with:\n(i) Cu2Cl2 / HCl\n(ii) Alkaline Phenol.",
        "answer": "Sandmeyer reaction and azo coupling",
        "explanation": "(i) With Cu2Cl2/HCl (Sandmeyer Reaction):\nC6H5N2⁺Cl⁻ -(Cu2Cl2 / HCl)-> C6H5Cl (Chlorobenzene) + N2(g).\n\n(ii) With Alkaline Phenol (Azo Coupling):\nC6H5N2⁺Cl⁻ + C6H5OH -(OH⁻, pH 9-10)-> C6H5-N=N-C6H4-OH (p-hydroxyazobenzene, orange dye) + Cl⁻ + H2O."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "Describe Gabriel phthalimide synthesis with balanced chemical equations. Why cannot aromatic primary amines be prepared by this method?",
        "answer": "Gabriel phthalimide synthesis and aromatic limitation",
        "explanation": "1. Procedure & Equations:\n- Phthalimide is reacted with ethanolic KOH to produce potassium phthalimide:\n  C6H4(CO)2NH + KOH -> C6H4(CO)2N⁻K⁺ + H2O.\n- Potassium phthalimide is heated with an alkyl halide to yield N-alkylphthalimide via SN2:\n  C6H4(CO)2N⁻K⁺ + R-X -> C6H4(CO)2N-R + KX.\n- Alkaline hydrolysis of N-alkylphthalimide yields primary aliphatic amine:\n  C6H4(CO)2N-R + 2 NaOH -(aq)-> C6H4(COONa)2 (sodium phthalate) + R-NH2 (1° amine).\n2. Limitation: Aromatic primary amines (like aniline) cannot be prepared because aryl halides (C6H5X) do not undergo nucleophilic substitution (SN2) with phthalimide anion under these conditions due to partial double bond character of C-X bond and ring repulsion."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "Explain why:\n(i) Alkylamines are more basic than ammonia.\n(ii) Primary amines have higher boiling points than tertiary amines of comparable molecular mass.",
        "answer": "Explanations for alkylamine basicity and boiling points",
        "explanation": "(i) Basicity: Alkyl groups have an electron-donating inductive effect (+I). In alkylamines (R-NH2), the +I effect pushes electron density onto nitrogen, increasing the availability of the lone pair for protonation and stabilizing the alkylammonium cation (R-NH3⁺). Hence, alkylamines are stronger bases than NH3.\n(ii) Boiling Points: Primary amines possess two hydrogen atoms directly bonded to electronegative nitrogen (N-H), forming extensive intermolecular hydrogen bonding. Tertiary amines have no hydrogen attached to nitrogen and cannot form intermolecular hydrogen bonds among themselves, resulting in much lower boiling points."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "How will you separate and identify a mixture of 1°, 2°, and 3° amines using Hinsberg's reagent (benzenesulfonyl chloride)?",
        "answer": "Hinsberg method for amine separation and identification",
        "explanation": "1. Addition of Hinsberg's Reagent (C6H5SO2Cl) in aqueous KOH:\n- 1° Amine forms N-alkylbenzenesulfonamide (C6H5SO2NHR), which contains an acidic hydrogen on nitrogen. It dissolves completely in aqueous KOH to form a clear soluble potassium salt.\n- 2° Amine forms N,N-dialkylbenzenesulfonamide (C6H5SO2NR2), which has no acidic hydrogen. It remains insoluble and precipitates as an oily layer or solid in KOH.\n- 3° Amine does not react because it has no replaceable hydrogen on nitrogen, remaining insoluble in alkaline medium.\n2. Separation:\n- Filter the mixture: the precipitate contains 2° amine sulfonamide; unreacted 3° amine is distilled or extracted.\n- Acidify the clear alkaline filtrate with dilute HCl: the 1° amine sulfonamide precipitates out and is recovered by acid hydrolysis."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Account for the fact that nitration of aniline with nitric acid produces a mixture of ortho, meta, and para-nitroanilines.",
        "answer": "Explanation of direct nitration isomer distribution",
        "explanation": "In strongly acidic nitrating medium (conc. HNO3 + conc. H2SO4), aniline (ortho/para-directing due to +R effect of -NH2) is partially protonated into the anilinium ion (C6H5NH3⁺). The -NH3⁺ group has a formal positive charge and exerts a powerful electron-withdrawing inductive effect (-I), strongly deactivating the ring and directing incoming nitronium ions (NO2⁺) to the meta position. Because of the equilibrium C6H5NH2 + H⁺ ⇌ C6H5NH3⁺, nitration occurs on both unprotonated aniline (yielding 51% para and 2% ortho) and anilinium ion (yielding 47% meta)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Write the structure of the zwitterion of sulfanilic acid. Why does it show amphoteric behaviour?",
        "answer": "Zwitterion structure of sulfanilic acid and amphoteric character",
        "explanation": "1. Structure: +H3N-C6H4-SO3⁻ (dipolar ion with protonated amino group and deprotonated sulfonate group at para positions).\n2. Amphoteric Nature: In acidic medium, the basic sulfonate group (-SO3⁻) accepts a proton to form +H3N-C6H4-SO3H (cation). In basic medium, the acidic ammonium group (-NH3⁺) donates a proton to form H2N-C6H4-SO3⁻ (anion). Thus, it reacts with both strong acids and strong bases."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) An organic compound 'A' having molecular formula C2H7N on treatment with nitrous acid gives an alcohol 'B' and liberates nitrogen gas. Compound 'A' on warming with CHCl3 and alcoholic KOH gives an offensive smelling compound 'C'. Identify A, B, and C, and write balanced chemical equations for all reactions.\n(b) Why is methylamine a stronger base than ammonia in aqueous solution?\n(c) Arrange the following in increasing order of basic strength in aqueous solution:\nC6H5NH2, C6H5N(CH3)2, (C2H5)2NH, CH3NH2.",
        "answer": "A = Ethanamine, B = Ethanol, C = Ethyl isocyanide; Basicity analysis and ranking",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3 marks):\n- Compound 'A' (C2H7N) liberates N2 gas with HNO2: it is a primary aliphatic amine.\n- It gives an offensive smelling compound 'C' with CHCl3/alc. KOH (carbylamine test): confirms 'A' is a 1° amine: Ethanamine (CH3CH2NH2).\n- Reaction with HNO2 yields Ethanol (CH3CH2OH) as compound 'B':\n  CH3CH2NH2 (A) + HNO2 -> CH3CH2OH (B, Ethanol) + N2(g)↑ + H2O.\n- Reaction with CHCl3/KOH yields Ethyl isocyanide (CH3CH2NC) as compound 'C':\n  CH3CH2NH2 (A) + CHCl3 + 3 KOH -(heat)-> CH3CH2NC (C, Ethyl isocyanide) + 3 KCl + 3 H2O.\n\n(b) Methylamine vs Ammonia (1 mark):\n- The methyl group in CH3NH2 exerts an electron-donating inductive effect (+I), increasing electron density on nitrogen and stabilizing the methylammonium cation (CH3NH3⁺) via charge dispersal.\n- Ammonia lacks any +I group, making it a weaker base.\n\n(c) Basicity Ordering (1 mark):\nC6H5NH2 < C6H5N(CH3)2 < CH3NH2 < (C2H5)2NH.\n(Aromatic amines are much weaker than aliphatic amines due to resonance; secondary aliphatic amine is strongest in aqueous medium)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) How will you convert aniline into:\n(i) 4-Bromoaniline\n(ii) Benzonitrile\n(iii) p-Aminoazobenzene?\n(b) Why is pyridine added during the acylation of amines with acetyl chloride?",
        "answer": "Three conversions of aniline and role of pyridine in acylation",
        "explanation": "Marking Scheme:\n(a) Conversions of Aniline (3.5 marks):\n(i) Aniline to 4-Bromoaniline:\n- Step 1: Protection by acetylation: C6H5NH2 + (CH3CO)2O -(pyridine)-> C6H5NHCOCH3 (acetanilide) + CH3COOH.\n- Step 2: Bromination: C6H5NHCOCH3 + Br2 -(CH3COOH)-> 4-Br-C6H4-NHCOCH3 (4-bromoacetanilide, major).\n- Step 3: Deprotection by hydrolysis: 4-Br-C6H4-NHCOCH3 + H2O -(H⁺ or OH⁻)-> 4-Br-C6H4-NH2 (4-bromoaniline) + CH3COOH.\n\n(ii) Aniline to Benzonitrile:\n- Step 1: Diazotization: C6H5NH2 + NaNO2 + 2 HCl -(273-278 K)-> C6H5N2⁺Cl⁻ + NaCl + 2 H2O.\n- Step 2: Sandmeyer cyanation: C6H5N2⁺Cl⁻ + CuCN -(KCN, heat)-> C6H5CN (Benzonitrile) + N2.\n\n(iii) Aniline to p-Aminoazobenzene:\n- Benzenediazonium chloride is coupled with aniline in mildly acidic medium (pH 4-5):\n  C6H5N2⁺Cl⁻ + C6H5NH2 -(pH 4-5)-> C6H5-N=N-C6H4-NH2 (p-aminoazobenzene, yellow dye) + HCl.\n\n(b) Role of Pyridine in Acylation (1.5 marks):\n- The acylation reaction generates hydrochloric acid (HCl) as a byproduct:\n  R-NH2 + CH3COCl -> R-NHCOCH3 + HCl.\n- Pyridine is a stronger base than the amine. It neutralizes the HCl formed, forming pyridinium chloride and driving the equilibrium forward according to Le Chatelier's principle. This also prevents the amine reactant from being protonated into an unreactive ammonium salt."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Discuss the factors influencing the basic strength of aliphatic amines in aqueous medium: Inductive effect, Solvation effect, and Steric hindrance.\n(b) Why does the basicity order change from (CH3)2NH > CH3NH2 > (CH3)3N for methylamines to (C2H5)2NH > (C2H5)3N > C2H5NH2 for ethylamines?",
        "answer": "Comprehensive analysis of amine basicity factors and alkyl substitution trends",
        "explanation": "Marking Scheme:\n(a) Three Factors Influencing Basicity in Water (3 marks):\n1. Inductive Effect (+I): Alkyl groups push electron density toward nitrogen, stabilizing the protonated ammonium cation (R3NH⁺). Purely on inductive grounds, order should be: 3° > 2° > 1° > NH3.\n2. Solvation Effect (Hydration): The substituted ammonium ion is stabilized in aqueous solution by hydrogen bonding with water molecules. Greater number of hydrogens attached to nitrogen allows more extensive H-bonding: RNH3⁺ (3 H-bonds) > R2NH2⁺ (2 H-bonds) > R3NH⁺ (1 H-bond). On solvation grounds, order is: 1° > 2° > 3°.\n3. Steric Hindrance: Bulky alkyl groups crowd around the nitrogen atom, hindering attack of the proton and shielding the ammonium cation from stabilizing solvent water molecules. Greater crowding destabilizes 3° ammonium ions.\n\n(b) Contrast between Methyl and Ethyl Amines (2 marks):\n- In methylamines, the small methyl group produces minimal steric hindrance. Solvation effect dominates over inductive effect in tertiary amine, causing trimethylamine ((CH3)3N) to drop behind methylamine. The balance yields: 2° > 1° > 3° > NH3: (CH3)2NH > CH3NH2 > (CH3)3N > NH3.\n- In ethylamines, the larger ethyl group exerts a substantially stronger +I effect that outweighs loss of hydration in the tertiary amine compared to 1° amine, pushing triethylamine ahead of ethylamine. The balance yields: 2° > 3° > 1° > NH3: (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Diazonium Salts in Synthetic Organic Chemistry\nArenediazonium salts ([ArN2⁺]X⁻) are versatile synthetic intermediates prepared by diazotization of primary aromatic amines with nitrous acid (NaNO2 + HCl) at 273-278 K. The stability of diazonium salts arises from resonance delocalization of positive charge across the aromatic ring. Nitrogen gas (N2) is an exceptional leaving group due to its extreme thermodynamic stability and gaseous nature. Diazonium salts undergo two broad categories of reactions: (1) replacement reactions where N2 is displaced by -Cl, -Br, -I, -F, -CN, -OH, or -H, and (2) coupling reactions where the diazo group is retained, forming brightly coloured azo dyes.\n(i) Why must diazotization be conducted at low temperatures (0-5 °C)?\n(ii) Name the reaction used to introduce a fluorine atom into a benzene ring via diazonium salt.\n(iii) What product is formed when benzenediazonium chloride is heated with water?\n(iv) Give the structure and colour of the dye formed when benzenediazonium chloride couples with phenol.",
        "answer": "Solutions to Case Study on Diazonium Salts Chemistry",
        "explanation": "(i) Diazonium salts are thermally unstable. Above 5 °C (278 K), they decompose rapidly by hydrolyzing with water to form phenol with evolution of nitrogen gas: ArN2⁺Cl⁻ + H2O -> ArOH + N2 + HCl.\n(ii) Balz-Schiemann reaction (treatment with fluoroboric acid HBF4 followed by thermal decomposition of ArN2⁺BF4⁻).\n(iii) Phenol (C6H5OH), with evolution of N2 gas and HCl.\n(iv) p-Hydroxyazobenzene (C6H5-N=N-C6H4-OH); Colour: Brilliant Orange dye."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) An aromatic compound 'A' on heating with Br2 and KOH forms a compound 'B' (molecular formula C6H7N) which reacts with CHCl3 and alc. KOH to produce an unbearable foul-smelling compound 'C'. Compound 'B' on reaction with NaNO2 and HCl at 273-278 K followed by reaction with KI gives compound 'D'. Identify A, B, C, and D, and write all chemical reactions.\n(b) Write the IUPAC name of (CH3)2CH-NH-CH3.",
        "answer": "Identification of A = Benzamide, B = Aniline, C = Phenyl isocyanide, D = Iodobenzene; IUPAC name",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (4 marks):\n- Compound 'A' undergoes Hoffmann bromamide degradation (Br2/KOH) to give 'B' (C6H7N): hence 'B' is Aniline (C6H5NH2) and 'A' is Benzamide (C6H5CONH2).\n- Reaction with CHCl3/KOH (Carbylamine test) gives foul-smelling Phenyl isocyanide (C6H5NC) as compound 'C'.\n- Diazotization of 'B' followed by treatment with KI yields Iodobenzene (C6H5I) as compound 'D'.\n- Reactions:\n  1. C6H5CONH2 (A) + Br2 + 4 KOH -(heat)-> C6H5NH2 (B, Aniline) + K2CO3 + 2 KBr + 2 H2O.\n  2. C6H5NH2 (B) + CHCl3 + 3 KOH -> C6H5NC (C, Phenyl isocyanide) + 3 KCl + 3 H2O.\n  3. C6H5NH2 + NaNO2 + 2 HCl -(273-278 K)-> C6H5N2⁺Cl⁻ + NaCl + 2 H2O.\n  4. C6H5N2⁺Cl⁻ + KI -(warm)-> C6H5I (D, Iodobenzene) + KCl + N2(g).\n\n(b) IUPAC Name (1 mark):\n- (CH3)2CH-NH-CH3: The longest carbon chain bonded to nitrogen has 3 carbons (propan-2-amine). The methyl group is attached to nitrogen: N-Methylpropan-2-amine."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Write short notes on:\n(i) Carbylamine reaction\n(ii) Diazotization\n(iii) Coupling reaction.\n(b) Why are aliphatic diazonium salts unstable even at 0 °C, whereas aromatic diazonium salts are stable at 0-5 °C?",
        "answer": "Three named reactions and stability comparison of diazonium salts",
        "explanation": "(a) Named Reactions (3 marks):\n(i) Carbylamine Reaction: Primary amine heated with chloroform and alcoholic KOH yields an offensive smelling isocyanide: R-NH2 + CHCl3 + 3 KOH -> R-NC + 3 KCl + 3 H2O.\n(ii) Diazotization: Conversion of primary aromatic amine into diazonium salt using NaNO2 and dilute HCl at 273-278 K: Ar-NH2 + NaNO2 + 2 HCl -> Ar-N2⁺Cl⁻ + NaCl + 2 H2O.\n(iii) Coupling Reaction: Arenediazonium salts react with electron-rich aromatic compounds (phenols or aromatic amines) to form brightly coloured azo compounds containing -N=N- linkage: ArN2⁺Cl⁻ + Ar'H -> Ar-N=N-Ar' + HCl.\n\n(b) Stability of Diazonium Salts (2 marks):\n- Aromatic diazonium salts ([C6H5-N⁺≡N]Cl⁻) are stabilized by resonance delocalization of the positive charge into the π-electron cloud of the benzene ring across four canonical structures. This resonance stabilization allows them to persist at low temperatures (0-5 °C).\n- Aliphatic diazonium salts ([R-N⁺≡N]Cl⁻) have no conjugated π-system to delocalize the positive charge. The C-N bond cleaves instantaneously to release gaseous nitrogen (N2) and form a highly reactive carbocation (R⁺), decomposing explosively even below 0 °C."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Arrange the following in the order directed:\n(i) (C2H5)2NH, (C2H5)3N, C2H5NH2, NH3 (decreasing basic strength in aqueous solution)\n(ii) Aniline, p-Nitroaniline, p-Toluidine (increasing basic strength)\n(iii) C2H5NH2, (C2H5)2NH, C2H5OH, CH3COOH (increasing boiling point)\n(iv) Ethanamine, N-Ethylethanamine, N,N-Diethylethanamine (increasing solubility in water).",
        "answer": "Four rankings with chemical reasoning",
        "explanation": "(i) Decreasing basic strength: (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3.\n(Combination of +I effect, hydration of ammonium cation, and steric hindrance makes 2° > 3° > 1° > NH3).\n(ii) Increasing basic strength: p-Nitroaniline < Aniline < p-Toluidine.\n(The -NO2 group is electron-withdrawing (-M, -I) and decreases basicity; the -CH3 group is electron-donating (+I, hyperconjugation) and increases basicity).\n(iii) Increasing boiling point: C2H5NH2 < (C2H5)2NH < C2H5OH < CH3COOH.\n(Carboxylic acid forms dimers with two H-bonds; alcohol forms stronger H-bonds than amine because O is more electronegative than N; 2° amine has higher molecular mass than 1° amine).\n(iv) Increasing solubility in water: N,N-Diethylethanamine (3°) < N-Ethylethanamine (2°) < Ethanamine (1°).\n(Primary amine has smallest hydrophobic alkyl bulk and two N-H bonds to donate and accept hydrogen bonds with water)."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) An organic compound 'A' (C3H5N) on reduction with LiAlH4 yields compound 'B'. Compound 'B' on treatment with HNO2 gives compound 'C' with evolution of N2 gas. Compound 'C' on oxidation with acidified K2Cr2O7 gives propanoic acid. Identify A, B, and C, and write all chemical reactions.\n(b) Why does primary amine have higher boiling point than tertiary amine of the same molecular formula?",
        "answer": "Identification of A = Propanenitrile, B = Propan-1-amine, C = Propan-1-ol; Boiling point justification",
        "explanation": "Marking Scheme:\n(a) Identification and Reactions (3.5 marks):\n- Oxidation of compound 'C' gives Propanoic acid (CH3CH2COOH): hence 'C' must be Propan-1-ol (CH3CH2CH2OH).\n- Compound 'C' is obtained from 'B' with HNO2: hence 'B' is Propan-1-amine (CH3CH2CH2NH2).\n- Compound 'B' is obtained by reduction of 'A' (C3H5N): hence 'A' is Propanenitrile (CH3CH2CN).\n- Reactions:\n  1. CH3CH2CN (A) + 4 [H] -(LiAlH4)-> CH3CH2CH2NH2 (B, Propan-1-amine).\n  2. CH3CH2CH2NH2 (B) + HNO2 -> CH3CH2CH2OH (C, Propan-1-ol) + N2(g)↑ + H2O.\n  3. CH3CH2CH2OH (C) + 2 [O] -(K2Cr2O7/H2SO4)-> CH3CH2COOH (Propanoic acid) + H2O.\n\n(b) Boiling Point Justification (1.5 marks):\n- Primary amines (R-NH2) have two polar N-H bonds with hydrogen directly bonded to electronegative nitrogen. They form extensive intermolecular hydrogen-bonded networks.\n- Tertiary amines (R3N) have all three valencies of nitrogen bonded to alkyl carbons and lack any hydrogen on nitrogen. Consequently, they cannot form intermolecular hydrogen bonds among themselves, possessing only weak dipole-dipole attractions and lower boiling points."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "How will you carry out the following conversions:\n(i) Benzamide to Aniline\n(ii) Aniline to Benzoic acid\n(iii) Ethanamine to Methanamine\n(iv) Methanamine to Ethanamine?",
        "answer": "Four organic conversions involving amines and diazonium salts",
        "explanation": "(i) Benzamide to Aniline: Hoffmann bromamide degradation:\nC6H5CONH2 + Br2 + 4 KOH -(heat)-> C6H5NH2 (Aniline) + K2CO3 + 2 KBr + 2 H2O.\n\n(ii) Aniline to Benzoic acid:\n- Step 1: C6H5NH2 + NaNO2 + 2 HCl -(273-278 K)-> C6H5N2⁺Cl⁻.\n- Step 2: C6H5N2⁺Cl⁻ + CuCN -(KCN, heat)-> C6H5CN (Benzonitrile).\n- Step 3: C6H5CN + 2 H2O + H⁺ -(heat)-> C6H5COOH (Benzoic acid) + NH4⁺.\n\n(iii) Ethanamine to Methanamine (Step down):\n- Step 1: CH3CH2NH2 + HNO2 -> CH3CH2OH + N2 + H2O.\n- Step 2: CH3CH2OH + [O] -(KMnO4/H⁺)-> CH3COOH.\n- Step 3: CH3COOH + NH3 -(heat)-> CH3CONH2.\n- Step 4: CH3CONH2 + Br2 + 4 KOH -(heat)-> CH3NH2 (Methanamine).\n\n(iv) Methanamine to Ethanamine (Step up):\n- Step 1: CH3NH2 + HNO2 -> CH3OH + N2 + H2O.\n- Step 2: CH3OH + PCl5 -> CH3Cl + POCl3 + HCl.\n- Step 3: CH3Cl + alc. KCN -> CH3CN + KCl.\n- Step 4: CH3CN + 4 [H] -(LiAlH4 or H2/Ni)-> CH3CH2NH2 (Ethanamine)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the reasons for each of the following:\n(i) Aniline does not undergo Friedel-Crafts reaction.\n(ii) Diazonium salts of aromatic amines are more stable than those of aliphatic amines.\n(iii) Gabriel phthalimide synthesis is preferred for synthesizing primary aliphatic amines.\n(b) Write the chemical equation for the reaction of benzenediazonium chloride with hypophosphorous acid.",
        "answer": "Explanations for Friedel-Crafts failure, diazonium stability, Gabriel synthesis, and deamination equation",
        "explanation": "Marking Scheme:\n(a) Explanations (3.5 marks):\n(i) Failure of Friedel-Crafts: Aniline is a Lewis base and donates its lone pair to the Lewis acid catalyst AlCl3, forming an insoluble coordination complex: C6H5NH2: -> AlCl3. The resulting positive formal charge on nitrogen strongly deactivates the benzene ring by -I effect, preventing electrophilic substitution.\n(ii) Stability of Aromatic Diazonium Salts: The positive charge on the diazonium group is delocalized over the π-system of the aromatic ring through four resonance structures. Aliphatic diazonium salts lack this resonance stabilization and decompose spontaneously even at 0 °C to evolve N2.\n(iii) Gabriel Phthalimide Preference: In Gabriel synthesis, the reaction proceeds by clean SN2 substitution on alkyl halide to yield purely primary amine, completely free from contaminating secondary and tertiary amines or quaternary ammonium salts (which always plague ammonolysis of alkyl halides).\n\n(b) Chemical Equation (1.5 marks):\nC6H5N2⁺Cl⁻ + H3PO2 + H2O -(Cu⁺ catalyst)-> C6H6 (Benzene) + N2(g) + H3PO3 (phosphorous acid) + HCl."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "unit_num": 3,
      "title": "Biomolecules",
      "unit_title": "Organic Chemistry",
      "weightage_unit": "7 Marks (Organic Chemistry)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following amino acids is optically inactive?",
        "answer": "(a) Glycine",
        "explanation": "Glycine (H2N-CH2-COOH) has two hydrogen atoms attached to the α-carbon. Lacking four different groups, the α-carbon is achiral (symmetric), making glycine the only optically inactive natural α-amino acid.",
        "options": [
          "(a) Glycine",
          "(b) Alanine",
          "(c) Valine",
          "(d) Leucine"
        ]
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Sucrose is a non-reducing sugar because:",
        "answer": "(a) both reducing functional groups (C-1 of α-glucose and C-2 of β-fructose) are involved in the glycosidic bond",
        "explanation": "In sucrose, the hemiacetal/hemiketal carbon C-1 of α-D-glucose is joined to C-2 of β-D-fructose via an α,β-(1->2) glycosidic linkage. Because both potential aldehyde and ketone carbonyl carbons are locked in the bond, there is no free carbonyl group to reduce Tollens' or Fehling's reagent.",
        "options": [
          "(a) both reducing functional groups (C-1 of α-glucose and C-2 of β-fructose) are involved in the glycosidic bond",
          "(b) it contains fructose",
          "(c) it has no hydroxyl groups",
          "(d) it is insoluble in water"
        ]
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following nitrogenous bases is present in RNA but ABSENT in DNA?",
        "answer": "(a) Uracil",
        "explanation": "DNA contains Adenine (A), Guanine (G), Cytosine (C), and Thymine (T). RNA contains Adenine (A), Guanine (G), Cytosine (C), and Uracil (U). Uracil replaces thymine in RNA.",
        "options": [
          "(a) Uracil",
          "(b) Thymine",
          "(c) Cytosine",
          "(d) Adenine"
        ]
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "During denaturation of a protein, which of the following structures remains intact?",
        "answer": "(a) Primary structure",
        "explanation": "Denaturation disrupts the weak hydrogen bonds, ionic interactions, and hydrophobic bonds stabilizing the secondary, tertiary, and quaternary structures of the protein. The strong covalent peptide bonds of the primary structure (amino acid sequence) remain completely intact.",
        "options": [
          "(a) Primary structure",
          "(b) Secondary structure",
          "(c) Tertiary structure",
          "(d) Quaternary structure"
        ]
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Deficiency of Vitamin C (ascorbic acid) causes:",
        "answer": "(a) Scurvy (bleeding gums)",
        "explanation": "Vitamin C is essential for collagen biosynthesis. Its deficiency leads to Scurvy, characterized by bleeding spongy gums, loose teeth, poor wound healing, and fragile capillaries.",
        "options": [
          "(a) Scurvy (bleeding gums)",
          "(b) Beriberi",
          "(c) Rickets",
          "(d) Night blindness"
        ]
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Amylose, a water-soluble component of starch, consists of unbranched chains of α-D-glucose units linked by:",
        "answer": "(a) C-1 to C-4 glycosidic linkages",
        "explanation": "Amylose constitutes about 15-20% of starch and is a long unbranched water-soluble polymer composed of 200-1000 α-D-(+)-glucose units held together exclusively by α-(1->4) glycosidic linkages.",
        "options": [
          "(a) C-1 to C-4 glycosidic linkages",
          "(b) C-1 to C-6 glycosidic linkages",
          "(c) C-1 to C-2 glycosidic linkages",
          "(d) β-1,4-glycosidic linkages"
        ]
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "On prolonged heating with concentrated hydriodic acid (HI) and red phosphorus, D-glucose yields:",
        "answer": "(a) n-Hexane",
        "explanation": "Prolonged heating of glucose with HI and red P reduces all six carbon atoms to an unbranched six-carbon alkane, n-hexane: C6H12O6 + 14 HI -(heat)-> CH3(CH2)4CH3 (n-hexane) + 6 H2O + 7 I2. This proved that all six carbon atoms in glucose are linked in a continuous straight chain.",
        "options": [
          "(a) n-Hexane",
          "(b) Gluconic acid",
          "(c) Saccharic acid",
          "(d) Hexanoic acid"
        ]
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following is a water-soluble vitamin that is NOT excreted in urine and is stored in the liver?",
        "answer": "(a) Vitamin B12",
        "explanation": "Unlike most water-soluble vitamins (such as Vitamin C and B-complex vitamins) which cannot be stored and are excreted in urine, Vitamin B12 (cobalamin) is stored in substantial quantities in the human liver.",
        "options": [
          "(a) Vitamin B12",
          "(b) Vitamin C",
          "(c) Vitamin B1",
          "(d) Vitamin B6"
        ]
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The helical structure of proteins (α-helix) is stabilized by:",
        "answer": "(a) Intramolecular hydrogen bonds between -NH- and -C=O groups",
        "explanation": "In an α-helix, a polypeptide chain coils into a right-handed screw. The structure is stabilized by intramolecular hydrogen bonds formed between the -NH- group of each amino acid residue and the >C=O group of the fourth preceding residue along the turn.",
        "options": [
          "(a) Intramolecular hydrogen bonds between -NH- and -C=O groups",
          "(b) Peptide bonds only",
          "(c) Disulfide bonds",
          "(d) van der Waals forces only"
        ]
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The two crystalline cyclic forms of D-glucose, α-D-glucose and β-D-glucose, are called:",
        "answer": "(a) Anomers",
        "explanation": "α-D-glucose and β-D-glucose differ in configuration only around the newly created hemiacetal chiral carbon C-1 (the anomeric carbon). Isomers differing in configuration exclusively at the anomeric center are termed anomers.",
        "options": [
          "(a) Anomers",
          "(b) Enantiomers",
          "(c) Epimers",
          "(d) Racemers"
        ]
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In DNA, the complementary base pairing between guanine (G) and cytosine (C) is held together by:",
        "answer": "(a) Three hydrogen bonds",
        "explanation": "In the Watson-Crick double helical model of DNA, Guanine pairs with Cytosine through three specific hydrogen bonds (G≡C), while Adenine pairs with Thymine through two hydrogen bonds (A=T).",
        "options": [
          "(a) Three hydrogen bonds",
          "(b) Two hydrogen bonds",
          "(c) One covalent bond",
          "(d) Phosphodiester bonds"
        ]
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When D-glucose is treated with bromine water (Br2 / H2O), the product formed is:",
        "answer": "(a) Gluconic acid",
        "explanation": "Bromine water is a mild oxidizing agent that selectively oxidizes the terminal aldehyde group (-CHO) of glucose into a carboxylic acid (-COOH) without affecting the primary alcohol group (-CH2OH), producing Gluconic acid (HOCH2(CHOH)4COOH).",
        "options": [
          "(a) Gluconic acid",
          "(b) Saccharic acid",
          "(c) Sorbitol",
          "(d) Tartaric acid"
        ]
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following is a fibrous protein?",
        "answer": "(a) Keratin",
        "explanation": "Keratin (found in hair, nails, skin, wool) consists of polypeptide chains running parallel and held together by disulfide and hydrogen bonds, forming long insoluble fibrous sheets. Insulin, hemoglobin, and albumin are globular proteins.",
        "options": [
          "(a) Keratin",
          "(b) Insulin",
          "(c) Hemoglobin",
          "(d) Albumin"
        ]
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The hydrolysis of sucrose produces an equimolar mixture of D-(+)-glucose and D-(-)-fructose known as 'invert sugar' because:",
        "answer": "(a) the optical rotation changes from dextrorotatory (+66.5°) to laevorotatory (-39.9°)",
        "explanation": "Sucrose is dextrorotatory ([α]D = +66.5°). On hydrolysis, it yields D-(+)-glucose ([α]D = +52.5°) and D-(-)-fructose ([α]D = -92.4°). Because the laevorotation of fructose is much greater than the dextrorotation of glucose, the resulting hydrolysate is net laevorotatory ([α]D ≈ -39.9°). This inversion of the sign of optical rotation gives it the name invert sugar.",
        "options": [
          "(a) the optical rotation changes from dextrorotatory (+66.5°) to laevorotatory (-39.9°)",
          "(b) glucose is converted into fructose",
          "(c) fructose has positive rotation",
          "(d) sucrose is a reducing sugar"
        ]
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A nucleoside consists of:",
        "answer": "(a) A nitrogenous base and a pentose sugar",
        "explanation": "A nucleoside is formed by attachment of a nitrogenous heterocyclic base (purine or pyrimidine) to the C-1' position of a pentose sugar (ribose or deoxyribose). When a phosphate group is attached at C-5' of the sugar, it becomes a nucleotide.",
        "options": [
          "(a) A nitrogenous base and a pentose sugar",
          "(b) A nitrogenous base, a pentose sugar, and a phosphate group",
          "(c) A pentose sugar and a phosphate group",
          "(d) A nitrogenous base and a phosphate group"
        ]
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following carbohydrates cannot be digested by the human gastrointestinal system?",
        "answer": "(a) Cellulose",
        "explanation": "Cellulose consists of β-D-glucose units joined by β-(1->4) glycosidic linkages. The human digestive system produces enzymes (like amylase) that cleave only α-glycosidic bonds and lacks the enzyme cellulase needed to hydrolyze β-glycosidic linkages.",
        "options": [
          "(a) Cellulose",
          "(b) Starch",
          "(c) Glycogen",
          "(d) Maltose"
        ]
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "At the isoelectric point (pI), an amino acid:",
        "answer": "(a) exists as a dipolar zwitterion and does not migrate in an electric field",
        "explanation": "The isoelectric point (pI) is the specific pH at which an amino acid exists predominantly as an electrically neutral dipolar zwitterion (+H3N-CHR-COO⁻) with equal positive and negative charges, resulting in zero net electrical migration towards either electrode.",
        "options": [
          "(a) exists as a dipolar zwitterion and does not migrate in an electric field",
          "(b) exists as a cation and moves to the cathode",
          "(c) exists as an anion and moves to the anode",
          "(d) is completely uncharged"
        ]
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Glucose on reaction with concentrated nitric acid (conc. HNO3) yields:",
        "answer": "(a) Saccharic acid",
        "explanation": "Concentrated nitric acid is a powerful oxidizing agent that oxidizes both the aldehyde group (-CHO at C-1) and the primary alcohol group (-CH2OH at C-6) of glucose into carboxylic acid groups, yielding the dicarboxylic acid Saccharic acid (HOOC-(CHOH)4-COOH).",
        "options": [
          "(a) Saccharic acid",
          "(b) Gluconic acid",
          "(c) Hexanoic acid",
          "(d) Tartaric acid"
        ]
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following vitamins is fat-soluble and essential for blood clotting?",
        "answer": "(a) Vitamin K",
        "explanation": "Vitamin K (phylloquinone) is a fat-soluble vitamin essential for the hepatic synthesis of prothrombin and other blood-clotting factors. Its deficiency leads to impaired blood coagulation and prolonged bleeding time.",
        "options": [
          "(a) Vitamin K",
          "(b) Vitamin A",
          "(c) Vitamin D",
          "(d) Vitamin E"
        ]
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "In aqueous solution, an amino acid exists as a dipolar ion called a zwitterion formed by:",
        "answer": "(a) internal transfer of a proton from -COOH group to -NH2 group",
        "explanation": "Amino acids contain both an acidic carboxyl group (-COOH) and a basic amino group (-NH2). In aqueous solution, an intramolecular acid-base neutralization occurs: the -COOH loses a proton to become -COO⁻, and the -NH2 gains the proton to become -NH3⁺, producing the dipolar zwitterion +H3N-CHR-COO⁻.",
        "options": [
          "(a) internal transfer of a proton from -COOH group to -NH2 group",
          "(b) loss of water molecule",
          "(c) coordination with solvent",
          "(d) loss of carbon dioxide"
        ]
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In a DNA molecule, consecutive nucleotides along a single strand are linked together by:",
        "answer": "(a) Phosphodiester bonds between 3' and 5' carbon atoms",
        "explanation": "Nucleotides in a polynucleotide strand are covalently joined by 3',5'-phosphodiester linkages between the 3'-OH group of one pentose sugar and the 5'-phosphate group of the adjacent sugar.",
        "options": [
          "(a) Phosphodiester bonds between 3' and 5' carbon atoms",
          "(b) Hydrogen bonds",
          "(c) Peptide bonds",
          "(d) Glycosidic bonds"
        ]
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following tests is NOT given by D-glucose, proving its cyclic hemiacetal structure?",
        "answer": "(a) Schiff's test and NaHSO3 addition",
        "explanation": "Despite having an aldehyde group in its open-chain formulation, glucose fails to restore the pink color of Schiff's reagent and does not form a bisulfite addition compound with NaHSO3, proving that the aldehyde group is predominantly masked in a cyclic six-membered hemiacetal pyranose ring.",
        "options": [
          "(a) Schiff's test and NaHSO3 addition",
          "(b) Fehling's test",
          "(c) Tollens' test",
          "(d) Acetylation with acetic anhydride"
        ]
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Glycogen, the carbohydrate reserve in animals, is structurally most similar to:",
        "answer": "(a) Amylopectin",
        "explanation": "Glycogen (animal starch) is a branched polymer of α-D-glucose with α-(1->4) linear chains and α-(1->6) branch points, resembling amylopectin but with a significantly higher degree of branching (branching occurs every 8-12 glucose units compared to 20-25 in amylopectin).",
        "options": [
          "(a) Amylopectin",
          "(b) Amylose",
          "(c) Cellulose",
          "(d) Sucrose"
        ]
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The peptide linkage formed between two amino acid molecules is chemically an:",
        "answer": "(a) Amide linkage (-CO-NH-)",
        "explanation": "A peptide bond is a covalent amide linkage (-CO-NH-) formed between the carboxyl group of one amino acid and the amino group of an adjacent amino acid, with the elimination of a water molecule.",
        "options": [
          "(a) Amide linkage (-CO-NH-)",
          "(b) Ester linkage",
          "(c) Ether linkage",
          "(d) Anhydride linkage"
        ]
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Deficiency of Vitamin D in growing children leads to:",
        "answer": "(a) Rickets",
        "explanation": "Vitamin D regulates calcium and phosphate homeostasis. Its deficiency in children leads to Rickets, characterized by soft, malformed, and bowed leg bones due to failure of osteoid matrix mineralization.",
        "options": [
          "(a) Rickets",
          "(b) Scurvy",
          "(c) Beriberi",
          "(d) Night blindness"
        ]
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Glucose pentaacetate does not react with hydroxylamine (NH2OH).\nReason (R): In glucose pentaacetate, the cyclic hemiacetal -OH group at C-1 is acetylated, preventing the opening of the ring to form a free aldehyde group.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The acetyl group locks the anomeric hemiacetal into an unreactive acetal form.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): All natural α-amino acids except glycine are optically active.\nReason (R): Natural α-amino acids possess a chiral α-carbon atom and generally have the L-stereochemical configuration.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Vitamin B-complex and Vitamin C must be supplied regularly in human diet.\nReason (R): Water-soluble vitamins are readily excreted in urine and cannot be stored in the body in significant amounts.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains why water-soluble vitamins require continuous dietary intake.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): During the denaturation of proteins, biological activity is completely lost, but the primary structure remains unaltered.\nReason (R): Denaturation breaks weak secondary, tertiary, and quaternary hydrogen and ionic bonds, but cannot hydrolyze strong covalent peptide bonds.",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the structural changes during denaturation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The two strands of a DNA double helix are complementary and not identical.\nReason (R): Hydrogen bonding occurs strictly between specific base pairs: Adenine with Thymine (A=T) and Guanine with Cytosine (G≡C).",
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why the sequence of one strand uniquely dictates the exact complementary sequence of the other strand.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ]
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "What is meant by anomers? Draw the Haworth projection structures of α-D-glucopyranose and β-D-glucopyranose.",
        "answer": "Definition of anomers and Haworth structures of glucose",
        "explanation": "1. Anomers: Diastereomeric monosaccharides that differ in stereochemical configuration exclusively at the hemiacetal or hemiketal carbon atom (C-1 in aldoses, C-2 in ketoses), called the anomeric carbon.\n2. Haworth Projections:\n- α-D-glucopyranose: Pyranose ring with the anomeric -OH group at C-1 pointing downwards (trans to the -CH2OH group at C-5).\n- β-D-glucopyranose: Pyranose ring with the anomeric -OH group at C-1 pointing upwards (cis to the -CH2OH group at C-5)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Give chemical reactions to prove the following facts about the structure of D-glucose:\n(i) Presence of an aldehyde group\n(ii) Presence of five hydroxyl (-OH) groups\n(iii) Straight chain of six carbon atoms.",
        "answer": "Three structural proofs of D-glucose",
        "explanation": "(i) Presence of Aldehyde Group: Glucose on oxidation with mild bromine water (Br2/H2O) forms gluconic acid, confirming the presence of an aldehyde (-CHO) group:\nCHO-(CHOH)4-CH2OH + [O] -(Br2/H2O)-> COOH-(CHOH)4-CH2OH (Gluconic acid).\n\n(ii) Presence of Five Hydroxyl Groups: Acetylation of glucose with acetic anhydride in the presence of pyridine yields glucose pentaacetate, confirming the presence of five -OH groups:\nC6H12O6 + 5 (CH3CO)2O -> Glucose pentaacetate + 5 CH3COOH.\n\n(iii) Straight Chain of Six Carbons: Prolonged heating of glucose with concentrated hydriodic acid (HI) and red phosphorus yields n-hexane, proving that all six carbons are linked in an unbranched linear chain:\nC6H12O6 + 14 HI -(heat / red P)-> CH3-CH2-CH2-CH2-CH2-CH3 (n-hexane) + 6 H2O + 7 I2."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Differentiate between fibrous proteins and globular proteins (any two points).",
        "answer": "Differences between fibrous and globular proteins",
        "explanation": "1. Molecular Shape: Fibrous proteins have polypeptide chains running parallel along a single axis to form long, fiber-like thread structures. Globular proteins have polypeptide chains folded tightly into compact, spherical, three-dimensional shapes.\n2. Solubility in Water: Fibrous proteins are insoluble in water (due to strong intermolecular hydrogen bonds and hydrophobic interactions). Globular proteins are soluble in water (hydrophilic groups face outward).\n3. Examples: Fibrous = Keratin (hair/nails), Collagen (tendons), Myosin (muscles). Globular = Insulin, Hemoglobin, Albumin."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Define the following terms with one example each:\n(i) Peptide linkage\n(ii) Invert sugar\n(iii) Zwitterion.",
        "answer": "Definitions and examples",
        "explanation": "(i) Peptide Linkage: A covalent amide bond (-CO-NH-) formed between the carboxyl group (-COOH) of one α-amino acid and the amino group (-NH2) of another α-amino acid with elimination of water. Example: Glycylalanine (Gly-Ala).\n(ii) Invert Sugar: The equimolar mixture of D-(+)-glucose and D-(-)-fructose obtained by acid or enzymatic hydrolysis of sucrose, having a net laevorotatory optical rotation (-39.9°) opposite to the original dextrorotation (+66.5°) of sucrose.\n(iii) Zwitterion: A dipolar, electrically neutral ion carrying equal and opposite formal electrical charges (+NH3 and -COO⁻) in the same molecule. Example: +H3N-CH2-COO⁻ (glycine zwitterion in water)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "What is denaturation of proteins? What happens to the native structure and biological activity during denaturation?",
        "answer": "Denaturation concept and structural effects",
        "explanation": "1. Definition: The phenomenon where a native protein is exposed to physical changes (such as heat) or chemical changes (such as pH change, heavy metal ions), causing disruption of hydrogen bonds and electrostatic interactions.\n2. Effects on Structure and Activity: The compact globular tertiary and helical secondary structures unfold into random coils, destroying the active site geometry. The protein coagulates and completely loses its biological activity. Importantly, the primary structure (covalent peptide backbone) remains unaffected."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "State the deficiency disease caused by lack of each of the following vitamins:\n(i) Vitamin A\n(ii) Vitamin B1 (Thiamine)\n(iii) Vitamin D.",
        "answer": "Deficiency diseases of vitamins A, B1, and D",
        "explanation": "(i) Vitamin A (Retinol): Night blindness (nyctalopia) and Xerophthalmia (hardening/keratinization of the cornea of the eye).\n(ii) Vitamin B1 (Thiamine): Beriberi (characterized by peripheral neuropathy, muscle wasting, and cardiac failure).\n(iii) Vitamin D (Calciferol): Rickets in growing children (bow legs, bone deformities) and Osteomalacia in adults (soft, brittle bones)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "Differentiate between DNA and RNA with respect to:\n(i) Pentose sugar present\n(ii) Nitrogenous pyrimidine bases present.",
        "answer": "Chemical differences between DNA and RNA",
        "explanation": "(i) Pentose Sugar: DNA contains β-D-2-deoxyribose (lacks oxygen at C-2' position). RNA contains β-D-ribose (possesses a hydroxyl group -OH at C-2' position).\n(ii) Pyrimidine Bases: DNA contains Cytosine (C) and Thymine (T). RNA contains Cytosine (C) and Uracil (U) instead of thymine."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Explain why:\n(i) Cellulose cannot be used as a source of energy for humans.\n(ii) Amino acids have high melting points and are soluble in water unlike haloacids.\n(iii) Vitamin C cannot be stored in our body.",
        "answer": "Explanations for cellulose digestion, amino acid physical properties, and vitamin C excretion",
        "explanation": "(i) Cellulose Digestion: Cellulose contains β-(1->4) glycosidic bonds. Human digestive enzymes (like salivary and pancreatic amylases) hydrolyze only α-glycosidic bonds. Humans lack the enzyme cellulase needed to cleave β-linkages.\n(ii) Amino Acid Properties: Amino acids exist in the solid state as dipolar zwitterions (+H3N-CHR-COO⁻). Strong electrostatic ionic attractions between oppositely charged zwitterionic ends require immense thermal energy to break (high melting points >250 °C). Furthermore, the ionic charges form strong ion-dipole interactions and hydrogen bonds with water molecules, making them readily water-soluble.\n(iii) Vitamin C Storage: Vitamin C (ascorbic acid) is a water-soluble vitamin. Excess amounts absorbed are readily filtered by the kidneys and excreted in urine, so it cannot be stored in the body."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Write the structural differences between starch and cellulose.",
        "answer": "Structural comparison of starch and cellulose",
        "explanation": "1. Monomeric Unit: Starch is a polymer of α-D-glucose; Cellulose is a linear polymer of β-D-glucose.\n2. Linkages and Branching: Starch consists of amylose (linear α-1,4-linkages) and amylopectin (branched, with α-1,4-linear and α-1,6-branch linkages). Cellulose consists exclusively of unbranched, linear chains held together by β-1,4-glycosidic linkages that pack tightly into rigid fibrous bundles via extensive interchain hydrogen bonds."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What are essential and non-essential amino acids? Give one example of each.",
        "answer": "Essential vs non-essential amino acids",
        "explanation": "1. Essential Amino Acids: Amino acids that cannot be synthesized by the human body and must be supplied through regular dietary sources. Example: Valine, Leucine, Lysine.\n2. Non-Essential Amino Acids: Amino acids that can be synthesized by the human body from metabolic precursors and do not strictly require dietary intake. Example: Glycine, Alanine, Glutamic acid."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Discuss the primary, secondary, tertiary, and quaternary structures of proteins.\n(b) What type of bonding stabilizes the α-helix and β-pleated sheet structures?\n(c) Name one example each of a fibrous protein and a globular protein.",
        "answer": "Four levels of protein structure, secondary bonding, and examples",
        "explanation": "Marking Scheme:\n(a) Four Levels of Protein Architecture (3 marks):\n1. Primary Structure: The linear, specific sequence in which various α-amino acids are linked by covalent peptide bonds in a polypeptide chain. Any alteration in this sequence completely disrupts protein function (e.g. Sickle-cell anaemia).\n2. Secondary Structure: The regular local conformation of the polypeptide backbone resulting from hydrogen bonding between the >C=O and -NH- groups of peptide bonds. Main types: α-helix and β-pleated sheet.\n3. Tertiary Structure: The overall three-dimensional folding of the entire polypeptide chain, producing complex compact shapes. Stabilized by disulfide bonds (-S-S-), hydrogen bonds, ionic/electrostatic bonds, hydrophobic interactions, and van der Waals forces. Determines fibrous vs globular character.\n4. Quaternary Structure: The spatial arrangement and association of two or more independent folded polypeptide subunits into a single multi-subunit oligomeric protein complex (e.g. Hemoglobin with 2α and 2β subunits).\n\n(b) Secondary Structure Stabilization (1 mark):\n- α-Helix: Stabilized by intramolecular hydrogen bonds between the -NH- of one amino acid and the >C=O of the fourth residue ahead.\n- β-Pleated Sheet: Stabilized by intermolecular hydrogen bonds between >C=O and -NH- groups of adjacent parallel or antiparallel polypeptide strands.\n\n(c) Examples (1 mark):\n- Fibrous protein: Keratin (hair/nails) or Collagen (connective tissue).\n- Globular protein: Insulin (pancreatic hormone) or Hemoglobin (oxygen transport)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Write the chemical reactions of D-glucose with:\n(i) Hydroxylamine (NH2OH)\n(ii) Hydrogen cyanide (HCN)\n(iii) Acetic anhydride ((CH3CO)2O)\n(iv) Concentrated nitric acid (conc. HNO3)\n(v) Bromine water (Br2 / H2O).\n(b) State two experimental observations that could not be explained by the open-chain structure of D-glucose.",
        "answer": "Five diagnostic reactions of glucose and limitations of open-chain structure",
        "explanation": "Marking Scheme:\n(a) Chemical Reactions of D-Glucose (3.5 marks):\n(i) With NH2OH: Forms glucose oxime:\nCHO-(CHOH)4-CH2OH + H2N-OH -> CH=N-OH-(CHOH)4-CH2OH + H2O.\n(ii) With HCN: Forms glucose cyanohydrin:\nCHO-(CHOH)4-CH2OH + HCN -> CH(OH)(CN)-(CHOH)4-CH2OH.\n(iii) With Acetic Anhydride: Forms glucose pentaacetate:\nC6H12O6 + 5 (CH3CO)2O -(pyridine)-> Glucose pentaacetate + 5 CH3COOH.\n(iv) With conc. HNO3: Forms Saccharic acid:\nCHO-(CHOH)4-CH2OH + 3 [O] -(conc. HNO3)-> COOH-(CHOH)4-COOH + 2 H2O.\n(v) With Br2 water: Forms Gluconic acid:\nCHO-(CHOH)4-CH2OH + [O] -(Br2/H2O)-> COOH-(CHOH)4-CH2OH.\n\n(b) Limitations of Open-Chain Structure (1.5 marks):\n1. Glucose does not give Schiff's test, nor does it form a sodium hydrogen sulfite (NaHSO3) addition compound, indicating absence of a free -CHO group.\n2. Glucose pentaacetate does not react with hydroxylamine (NH2OH), proving that the anomeric C-1 is locked in a cyclic hemiacetal ring.\n3. Glucose exists in two distinct crystalline anomeric forms: α-D-glucose (mp 419 K, [α]D = +112°) and β-D-glucose (mp 423 K, [α]D = +19°), which undergo mutarotation to an equilibrium mixture ([α]D = +52.5°)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Describe the double helix model of DNA proposed by Watson and Crick.\n(b) What are Chargaff's rules?\n(c) A segment of a DNA strand has the base sequence: 5'-A-T-G-C-C-T-A-3'. Write the base sequence of the complementary strand.",
        "answer": "Watson-Crick DNA model, Chargaff's rules, and complementary base sequence",
        "explanation": "Marking Scheme:\n(a) Watson-Crick DNA Model (2.5 marks):\n1. DNA consists of two polynucleotide strands coiled around a central axis to form a right-handed double helix.\n2. The two strands run in opposite, antiparallel directions: one runs in 5' -> 3' direction, while the other runs in 3' -> 5' direction.\n3. The sugar-phosphate backbone forms the outer structural framework, while nitrogenous bases project inward into the helix perpendicular to the axis.\n4. The two strands are held together by specific hydrogen bonds between purines and pyrimidines:\n   - Adenine pairs with Thymine via two hydrogen bonds (A = T).\n   - Guanine pairs with Cytosine via three hydrogen bonds (G ≡ C).\n5. Pitch of the helix is 3.4 nm (34 Å), containing roughly 10 base pairs per turn (0.34 nm per base pair).\n\n(b) Chargaff's Rules (1.5 marks):\nIn any double-stranded DNA molecule:\n1. The molar ratio of Adenine to Thymine is strictly equal to 1: [A] = [T].\n2. The molar ratio of Guanine to Cytosine is strictly equal to 1: [G] = [C].\n3. Total purines equal total pyrimidines: [A + G] = [T + C].\n\n(c) Complementary Base Sequence (1 mark):\nGiven: 5'-A-T-G-C-C-T-A-3'\nComplementary strand: 3'-T-A-C-G-G-A-T-5' (or 5'-T-A-G-G-C-A-T-3')."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Carbohydrate Chemistry in Nutrition and Disease\nCarbohydrates serve as vital metabolic fuels and structural components in all living systems. Monosaccharides undergo intramolecular cyclization to form cyclic hemiacetals (pyranose and furanose rings). Disaccharides like sucrose, maltose, and lactose are formed by condensation of two monosaccharides with elimination of water, linked via glycosidic bonds. Polysaccharides function as energy reserves (starch in plants, glycogen in animals) or structural elements (cellulose in plants). In diabetics, elevated glucose levels can be monitored using glucose oxidase test strips or clinical Benedict's reagent.\n(i) Name the two monosaccharide units produced upon hydrolysis of lactose.\n(ii) Why is maltose called a reducing sugar?\n(iii) What structural difference distinguishes amylose from amylopectin in starch?\n(iv) Which polysaccharide is stored in the human liver as an emergency glucose reserve?",
        "answer": "Solutions to Case Study on Carbohydrates in Nutrition and Biology",
        "explanation": "(i) β-D-galactose and β-D-glucose (linked via β-1,4-glycosidic bond).\n(ii) Maltose contains two α-D-glucose units linked by an α-1,4-glycosidic bond. The hemiacetal carbon (C-1) of the second glucose unit remains free and can open to form an aldehyde group that reduces Tollens' and Fehling's reagents.\n(iii) Amylose is a water-soluble, unbranched linear polymer of α-D-glucose linked strictly by α-(1->4) glycosidic bonds (15-20% of starch). Amylopectin is a water-insoluble, highly branched polymer containing α-(1->4) linear chains with α-(1->6) glycosidic branching points every 20-25 glucose units (80-85% of starch).\n(iv) Glycogen (animal starch)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Classify vitamins into fat-soluble and water-soluble vitamins. Give two examples of each group.\n(b) Name the deficiency disease caused by lack of:\n(i) Vitamin B12\n(ii) Vitamin E\n(iii) Vitamin K\n(iv) Vitamin B2 (Riboflavin).\n(c) Why should vitamin B-complex and vitamin C be taken daily in diet?",
        "answer": "Vitamin classification, deficiency diseases, and dietary requirement",
        "explanation": "Marking Scheme:\n(a) Classification of Vitamins (2 marks):\n1. Fat-Soluble Vitamins: Soluble in fats and oils, insoluble in water. Stored in liver and adipose (fat-storing) tissues. Examples: Vitamin A, Vitamin D, Vitamin E, Vitamin K.\n2. Water-Soluble Vitamins: Soluble in water, insoluble in fats. Examples: Vitamin B-complex (B1, B2, B6, B12) and Vitamin C (ascorbic acid).\n\n(b) Deficiency Diseases (2 marks):\n(i) Vitamin B12: Pernicious anaemia (severe reduction in RBC production and neurological damage).\n(ii) Vitamin E: Muscular dystrophy / weakness and increased fragility of RBCs / loss of reproductive fertility.\n(iii) Vitamin K: Defective blood clotting / delayed clotting time (hemorrhagic tendency).\n(iv) Vitamin B2 (Riboflavin): Cheilosis (fissuring at corners of mouth and lips), digestive disorders, and glossitis (inflamed tongue).\n\n(c) Dietary Requirement (1 mark):\nWater-soluble vitamins cannot be stored in the body in appreciable amounts (except B12) because they are continually excreted through urine; hence they must be regularly supplied in our daily diet."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Differentiate between nucleoside and nucleotide. Draw schematic diagrams showing their general assembly.\n(b) What are the three structural components of a nucleotide in RNA?\n(c) State two fundamental biological functions of nucleic acids.",
        "answer": "Nucleoside vs nucleotide, RNA components, and biological functions",
        "explanation": "(a) Nucleoside vs Nucleotide (2.5 marks):\n1. Nucleoside: Formed by attachment of a nitrogenous base (purine or pyrimidine) to the C-1' carbon of a pentose sugar via an N-glycosidic bond:\n   Nucleoside = Pentose Sugar + Nitrogenous Base.\n2. Nucleotide: Formed when the C-5' hydroxyl group of the pentose sugar in a nucleoside is esterified with phosphoric acid:\n   Nucleotide = Pentose Sugar + Nitrogenous Base + Phosphate group.\n   (Nucleotide = Nucleoside 5'-monophosphate).\n\n(b) Components in RNA (1 mark):\n1. Pentose Sugar: β-D-Ribose.\n2. Nitrogenous Bases: Adenine (A), Guanine (G), Cytosine (C), and Uracil (U).\n3. Inorganic Acid: Phosphoric acid (H3PO4).\n\n(c) Biological Functions (1.5 marks):\n1. Replication and Heredity: DNA stores genetic instructions and replicates itself during cell division, transmitting hereditary information faithfully from generation to generation.\n2. Protein Biosynthesis: RNA molecules (mRNA, tRNA, rRNA) direct and synthesize all proteins and enzymes required for life according to genetic codons transcribe from DNA."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Account for the following observations:\n(i) Sucrose is dextrorotatory, but its hydrolysis product is laevorotatory.\n(ii) Amino acids behave like salts rather than simple amines or carboxylic acids.\n(iii) Helical structure of proteins is called secondary structure.\n(iv) Glucose and fructose both give the same osazone on reaction with excess phenylhydrazine.",
        "answer": "Four fundamental chemical explanations in biomolecules",
        "explanation": "(i) Invert Sugar: Sucrose has dextrorotation of +66.5°. Hydrolysis yields equal amounts of D-(+)-glucose (+52.5°) and D-(-)-fructose (-92.4°). The powerful laevorotation of fructose outweighs the dextrorotation of glucose, rendering the net hydrolysate mixture laevorotatory (-39.9°).\n(ii) Salt-like Nature: Amino acids contain both an acidic -COOH and a basic -NH2 group. Internal proton transfer forms a dipolar zwitterion (+H3N-CHR-COO⁻). Strong intermolecular electrostatic ionic attractions give amino acids crystalline solid forms, high melting points (>250 °C), and water solubility, characteristic of ionic salts.\n(iii) Secondary Structure Designation: 'Secondary' refers specifically to the local spatial conformational arrangement that the linear polypeptide backbone assumes (such as α-helix or β-sheet) through regular hydrogen bonding, preceding overall tertiary folding.\n(iv) Identical Osazone: In osazone formation with phenylhydrazine, reaction involves only C-1 and C-2 carbon atoms. Since D-glucose and D-fructose have identical stereochemical configurations at carbons C-3, C-4, and C-5, both monosaccharides yield the exact same glucosazone crystals."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What are reducing and non-reducing sugars? Give one example of each.\n(b) Explain the glycosidic linkage present in:\n(i) Maltose\n(ii) Lactose\n(iii) Sucrose.\n(c) How will you show that glucose contains a primary alcoholic group?",
        "answer": "Reducing vs non-reducing sugars, glycosidic linkages in disaccharides, and primary alcohol proof",
        "explanation": "Marking Scheme:\n(a) Reducing vs Non-Reducing Sugars (1.5 marks):\n- Reducing Sugars: Carbohydrates containing a free or potential aldehyde or keto group (free hemiacetal/hemiketal OH at anomeric carbon) that reduce Tollens' and Fehling's solutions. Example: Glucose, Fructose, Maltose, Lactose.\n- Non-Reducing Sugars: Carbohydrates in which the anomeric carbons of all monosaccharide units are locked in glycosidic linkages, preventing ring opening. Example: Sucrose, Starch, Cellulose.\n\n(b) Glycosidic Linkages (2 marks):\n(i) Maltose: Formed between C-1 of one α-D-glucose unit and C-4 of another α-D-glucose unit (α-1,4-glycosidic linkage).\n(ii) Lactose: Formed between C-1 of β-D-galactose and C-4 of β-D-glucose (β-1,4-glycosidic linkage).\n(iii) Sucrose: Formed between C-1 of α-D-glucose and C-2 of β-D-fructose (α-1,β-2-glycosidic linkage).\n\n(c) Primary Alcohol Proof in Glucose (1.5 marks):\nOxidation of glucose with concentrated nitric acid (conc. HNO3) yields the dicarboxylic acid Saccharic acid (HOOC-(CHOH)4-COOH). Since nitric acid oxidizes the terminal -CHO and primary alcohol -CH2OH to -COOH, this confirms the presence of one primary alcohol group at C-6."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "(a) What are vitamins? How are they classified?\n(b) Which disease is caused by the deficiency of:\n(i) Thiamine\n(ii) Ascorbic acid\n(iii) Pyridoxine\n(iv) Calciferol?",
        "answer": "Vitamins definition, classification, and four deficiency diseases",
        "explanation": "(a) Definition and Classification (2 marks):\n- Vitamins: Organic compounds required in minute amounts in the diet for specific biological functions, maintenance of optimum growth, and normal health of an organism.\n- Classification:\n  1. Fat-Soluble: Dissolve in fats/oils (Vitamins A, D, E, K). Stored in liver and fatty tissues.\n  2. Water-Soluble: Dissolve in water (Vitamins B-complex and C). Excreted in urine; cannot be stored (except B12).\n\n(b) Deficiency Diseases (2 marks):\n(i) Thiamine (Vitamin B1): Beriberi.\n(ii) Ascorbic Acid (Vitamin C): Scurvy.\n(iii) Pyridoxine (Vitamin B6): Convulsions, peripheral neuropathy.\n(iv) Calciferol (Vitamin D): Rickets (in children) and Osteomalacia (in adults)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is the difference between an α-amino acid and a β-amino acid?\n(b) Write the zwitterionic structure of alanine.\n(c) What are the forces that stabilize the tertiary structure of proteins?\n(d) Name the purine bases and pyrimidine bases found in DNA.",
        "answer": "Amino acid distinction, alanine zwitterion, tertiary stabilizing forces, and DNA bases",
        "explanation": "Marking Scheme:\n(a) α vs β Amino Acid (1 mark):\n- In α-amino acids, the amino group (-NH2) is attached to the α-carbon (carbon directly adjacent to the -COOH group): R-CH(NH2)-COOH.\n- In β-amino acids, the amino group is attached to the β-carbon (two carbons away from -COOH): R-CH(NH2)-CH2-COOH.\n\n(b) Alanine Zwitterion (1 mark):\n+H3N-CH(CH3)-COO⁻.\n\n(c) Stabilizing Forces in Tertiary Structure (2 marks):\n1. Disulfide linkages: Covalent -S-S- bonds between cysteine residues.\n2. Hydrogen bonds: Between polar side-chain groups (-OH, -NH2, -COOH).\n3. Electrostatic / Ionic bonds (Salt bridges): Between oppositely charged side chains (-NH3⁺ and -COO⁻).\n4. Hydrophobic interactions: Association of non-polar hydrophobic side chains (leucine, isoleucine, phenylalanine) in the interior core away from water.\n5. van der Waals forces: Weak dispersion forces between close-packed atoms.\n\n(d) Bases in DNA (1 mark):\n- Purines: Adenine (A) and Guanine (G).\n- Pyrimidines: Cytosine (C) and Thymine (T)."
      }
    ]
  }
];
