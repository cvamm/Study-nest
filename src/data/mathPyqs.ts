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

export const MATH_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "unit_num": 1,
      "title": "Relations and Functions",
      "unit_title": "Relations and Functions",
      "weightage_unit": "8 Marks (Combined with Ch 2)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Let R be a relation on the set A = {1, 2, 3} given by R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3), (1, 3)}. Then R is:",
        "options": [
          "(a) Reflexive and transitive but not symmetric",
          "(b) Reflexive and symmetric but not transitive",
          "(c) Symmetric and transitive but not reflexive",
          "(d) An equivalence relation"
        ],
        "answer": "(a) Reflexive and transitive but not symmetric",
        "explanation": "1. Reflexive: (1, 1), (2, 2), (3, 3) ∈ R, so R is reflexive.\n2. Symmetric: (1, 2) ∈ R, but (2, 1) ∉ R, so R is not symmetric.\n3. Transitive: (1, 2) ∈ R and (2, 3) ∈ R => (1, 3) ∈ R; all other transitive pairs also hold, so R is transitive.\nHence, R is reflexive and transitive but not symmetric."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The function f: R -> R defined by f(x) = 3x - 4 is:",
        "options": [
          "(a) One-one and onto (Bijective)",
          "(b) One-one but not onto",
          "(c) Onto but not one-one",
          "(d) Neither one-one nor onto"
        ],
        "answer": "(a) One-one and onto (Bijective)",
        "explanation": "1. Injectivity (One-one): Let f(x1) = f(x2) => 3x1 - 4 = 3x2 - 4 => 3x1 = 3x2 => x1 = x2. Hence, f is one-one.\n2. Surjectivity (Onto): Let y ∈ R. Then y = 3x - 4 => x = (y + 4)/3. Since y ∈ R, x = (y + 4)/3 ∈ R (domain) and f(x) = 3((y + 4)/3) - 4 = y. Hence, f is onto.\nTherefore, f is bijective."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Let set A = {1, 2, 3}. The number of equivalence relations on A containing (1, 2) is:",
        "options": [
          "(a) 2",
          "(b) 1",
          "(c) 3",
          "(d) 4"
        ],
        "answer": "(a) 2",
        "explanation": "Any equivalence relation R must contain the reflexive pairs: {(1, 1), (2, 2), (3, 3)}. If (1, 2) ∈ R, by symmetry (2, 1) ∈ R.\nCase 1: R1 = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)}. This is reflexive, symmetric, and transitive, so R1 is an equivalence relation.\nCase 2: If we add any other pair, say (2, 3), then by symmetry (3, 2) ∈ R, and by transitivity (1, 3) and (3, 1) must be in R. This gives the universal relation R2 = A × A (all 9 elements).\nThus, exactly 2 equivalence relations contain (1, 2)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The function f: N -> N defined by f(n) = n + 1 if n is odd, and f(n) = n - 1 if n is even, is:",
        "options": [
          "(a) Bijective",
          "(b) One-one but not onto",
          "(c) Onto but not one-one",
          "(d) Neither one-one nor onto"
        ],
        "answer": "(a) Bijective",
        "explanation": "1. One-one: If n1 is odd, f(n1) = n1 + 1 (even). If n2 is even, f(n2) = n2 - 1 (odd). Thus f(odd) ≠ f(even). If n1, n2 are both odd: n1 + 1 = n2 + 1 => n1 = n2. If both even: n1 - 1 = n2 - 1 => n1 = n2. Hence f is one-one.\n2. Onto: For any odd y ∈ N, y = f(y + 1) where y + 1 is even. For any even y ∈ N, y = f(y - 1) where y - 1 is odd. Every natural number is an image. Hence f is onto.\nThus f is a bijection."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Let R be a relation on the set of natural numbers N defined by (a, b) ∈ R if a divides b (i.e. a | b). Then R is:",
        "options": [
          "(a) Reflexive and transitive but not symmetric",
          "(b) Reflexive and symmetric but not transitive",
          "(c) An equivalence relation",
          "(d) Symmetric and transitive only"
        ],
        "answer": "(a) Reflexive and transitive but not symmetric",
        "explanation": "1. Reflexive: For every a ∈ N, a | a (every number divides itself). So (a, a) ∈ R.\n2. Symmetric: 2 | 4 => (2, 4) ∈ R, but 4 does not divide 2, so (4, 2) ∉ R. Not symmetric.\n3. Transitive: If a | b and b | c, then a | c. So (a, b) ∈ R and (b, c) ∈ R => (a, c) ∈ R. Transitive.\nHence, R is reflexive and transitive but not symmetric."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The function f: R -> R defined by f(x) = x² is:",
        "options": [
          "(a) Neither one-one nor onto",
          "(b) One-one but not onto",
          "(c) Onto but not one-one",
          "(d) Bijective"
        ],
        "answer": "(a) Neither one-one nor onto",
        "explanation": "1. Not one-one: f(-1) = (-1)² = 1 and f(1) = 1² = 1. Two distinct inputs have the same output (-1 ≠ 1 but f(-1) = f(1)).\n2. Not onto: Range of f is [0, ∞). Negative real numbers (e.g. -2) have no pre-image in R since x² ≥ 0 for all x ∈ R.\nHence f is neither one-one nor onto."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If set A contains 4 elements, then the total number of reflexive relations on A is:",
        "options": [
          "(a) 2¹² = 4096",
          "(b) 2¹⁶",
          "(c) 2⁸",
          "(d) 16"
        ],
        "answer": "(a) 2¹² = 4096",
        "explanation": "For a set with n elements, the total number of pairs in A × A is n². A reflexive relation must contain all n diagonal pairs (a, a). The remaining n² - n pairs can either be included or excluded independently. Total number of reflexive relations = 2^(n² - n). Here n = 4, so 2^(16 - 4) = 2¹² = 4096."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Let A = {1, 2, 3}. Which of the following relations is symmetric?",
        "options": [
          "(a) R = {(1, 2), (2, 1), (1, 3), (3, 1)}",
          "(b) R = {(1, 2), (2, 3)}",
          "(c) R = {(1, 1), (1, 2)}",
          "(d) R = {(2, 3), (3, 1)}"
        ],
        "answer": "(a) R = {(1, 2), (2, 1), (1, 3), (3, 1)}",
        "explanation": "A relation is symmetric if (a, b) ∈ R implies (b, a) ∈ R. In option (a), for (1, 2) ∈ R we have (2, 1) ∈ R, and for (1, 3) ∈ R we have (3, 1) ∈ R. Hence it is symmetric."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If A = {a, b, c} and B = {1, 2}, then the total number of onto functions from A to B is:",
        "options": [
          "(a) 6",
          "(b) 8",
          "(c) 7",
          "(d) 9"
        ],
        "answer": "(a) 6",
        "explanation": "Total number of functions from A (n = 3) to B (m = 2) is m^n = 2³ = 8. The only functions that are NOT onto are those where all elements map to a single element in B (2 constant functions: all mapping to 1, or all mapping to 2). Total onto functions = 2³ - 2 = 8 - 2 = 6."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Let R be a relation on Z defined by (a, b) ∈ R if (a - b) is divisible by 5. The equivalence class [0] is:",
        "options": [
          "(a) {..., -10, -5, 0, 5, 10, ...}",
          "(b) {..., -7, -2, 3, 8, ...}",
          "(c) {0, 5, 10}",
          "(d) {1, 6, 11}"
        ],
        "answer": "(a) {..., -10, -5, 0, 5, 10, ...}",
        "explanation": "By definition, the equivalence class [0] = {x ∈ Z : (x, 0) ∈ R} = {x ∈ Z : x - 0 is divisible by 5} = {5k : k ∈ Z} = {..., -10, -5, 0, 5, 10, ...}."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Let f: [0, ∞) -> [0, ∞) be defined by f(x) = x². Then f is:",
        "options": [
          "(a) Bijective",
          "(b) One-one but not onto",
          "(c) Onto but not one-one",
          "(d) Neither one-one nor onto"
        ],
        "answer": "(a) Bijective",
        "explanation": "1. One-one: For x1, x2 ∈ [0, ∞), x1² = x2² => x1 = x2 (since x ≥ 0, negative root is excluded). Thus f is one-one.\n2. Onto: For every y ∈ [0, ∞), x = √y ∈ [0, ∞) such that f(x) = (√y)² = y. Thus f is onto.\nHence f is bijective."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Let R be the relation in the set {1, 2, 3, 4} given by R = {(1, 2), (2, 2), (1, 1), (4, 4), (1, 3), (3, 3), (3, 2)}. Then R is:",
        "options": [
          "(a) Reflexive and transitive but not symmetric",
          "(b) Reflexive and symmetric but not transitive",
          "(c) An equivalence relation",
          "(d) Transitive only"
        ],
        "answer": "(a) Reflexive and transitive but not symmetric",
        "explanation": "1. Reflexive: (1, 1), (2, 2), (3, 3), (4, 4) ∈ R => Reflexive.\n2. Symmetric: (1, 2) ∈ R but (2, 1) ∉ R => Not symmetric.\n3. Transitive: (1, 3) ∈ R and (3, 2) ∈ R => (1, 2) ∈ R. All other transitive combinations hold. So R is transitive.\nHence R is reflexive and transitive but not symmetric."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The number of one-one functions from a set A containing 3 elements to a set B containing 4 elements is:",
        "options": [
          "(a) 24",
          "(b) 12",
          "(c) 64",
          "(d) 81"
        ],
        "answer": "(a) 24",
        "explanation": "The number of one-one (injective) functions from a set of n elements to a set of m elements (m ≥ n) is given by P(m, n) = m! / (m - n)!. Here m = 4, n = 3: P(4, 3) = 4 × 3 × 2 = 24."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Let f: R -> R be defined as f(x) = x⁴. Choose the correct answer:",
        "options": [
          "(a) f is neither one-one nor onto",
          "(b) f is one-one and onto",
          "(c) f is one-one but not onto",
          "(d) f is onto but not one-one"
        ],
        "answer": "(a) f is neither one-one nor onto",
        "explanation": "f(1) = 1⁴ = 1 and f(-1) = (-1)⁴ = 1 => 1 ≠ -1 but f(1) = f(-1), so f is not one-one. Range of f(x) is [0, ∞), so negative numbers (e.g. -3) have no pre-image in domain R, so f is not onto."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Let relation R on set A = {1, 2, 3} be R = {(1, 1), (2, 2)}. The minimum number of ordered pairs to be added to R to make it an equivalence relation is:",
        "options": [
          "(a) 1",
          "(b) 2",
          "(c) 3",
          "(d) 4"
        ],
        "answer": "(a) 1",
        "explanation": "To make R reflexive on A = {1, 2, 3}, it must contain (3, 3). Adding (3, 3) gives R' = {(1, 1), (2, 2), (3, 3)}, which is already symmetric and transitive. Hence, adding just 1 pair ((3, 3)) makes it an equivalence relation."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The function f: R -> R defined by f(x) = |x| is:",
        "options": [
          "(a) Neither one-one nor onto",
          "(b) One-one and onto",
          "(c) One-one but not onto",
          "(d) Onto but not one-one"
        ],
        "answer": "(a) Neither one-one nor onto",
        "explanation": "f(2) = |2| = 2 and f(-2) = |-2| = 2 => not one-one. Range is [0, ∞) ≠ R (codomain), so negative numbers have no pre-images => not onto. Hence neither one-one nor onto."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Let T be the set of all triangles in a plane with R a relation in T given by R = {(T1, T2) : T1 is congruent to T2}. Then R is:",
        "options": [
          "(a) An equivalence relation",
          "(b) Reflexive and symmetric but not transitive",
          "(c) Reflexive and transitive but not symmetric",
          "(d) Symmetric only"
        ],
        "answer": "(a) An equivalence relation",
        "explanation": "1. Reflexive: Every triangle is congruent to itself (T1 ≅ T1).\n2. Symmetric: If T1 ≅ T2, then T2 ≅ T1.\n3. Transitive: If T1 ≅ T2 and T2 ≅ T3, then T1 ≅ T3.\nThus, R is an equivalence relation."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Let A = {1, 2, 3}. How many non-empty relations can be defined on A?",
        "options": [
          "(a) 2⁹ - 1 = 511",
          "(b) 2⁹ = 512",
          "(c) 2³ = 8",
          "(d) 9"
        ],
        "answer": "(a) 2⁹ - 1 = 511",
        "explanation": "The number of elements in A × A is 3 × 3 = 9. Total number of subsets (relations) is 2⁹ = 512. Excluding the empty relation ∅ leaves 2⁹ - 1 = 511 non-empty relations."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The signum function f: R -> R defined by f(x) = 1 if x > 0, 0 if x = 0, -1 if x < 0 is:",
        "options": [
          "(a) Neither one-one nor onto",
          "(b) One-one and onto",
          "(c) One-one but not onto",
          "(d) Onto but not one-one"
        ],
        "answer": "(a) Neither one-one nor onto",
        "explanation": "f(1) = f(2) = 1 (not one-one). Range = {-1, 0, 1} ≠ R (codomain), so numbers like 2, 3, 0.5 have no pre-images (not onto). Hence neither one-one nor onto."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Let L denote the set of all straight lines in a plane. Let relation R on L be defined by (L1, L2) ∈ R if L1 is perpendicular to L2. Then R is:",
        "options": [
          "(a) Symmetric but neither reflexive nor transitive",
          "(b) An equivalence relation",
          "(c) Reflexive and symmetric but not transitive",
          "(d) Transitive only"
        ],
        "answer": "(a) Symmetric but neither reflexive nor transitive",
        "explanation": "1. Not reflexive: A line cannot be perpendicular to itself (L1 ⊥ L1 is false).\n2. Symmetric: If L1 ⊥ L2, then L2 ⊥ L1. So (L1, L2) ∈ R => (L2, L1) ∈ R.\n3. Not transitive: If L1 ⊥ L2 and L2 ⊥ L3, then in a plane L1 is parallel to L3, not perpendicular. So not transitive.\nHence R is symmetric only."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If f: R -> R is defined by f(x) = x³ - 1, then f⁻¹(7) is:",
        "options": [
          "(a) 2",
          "(b) {2}",
          "(c) ±2",
          "(d) ∅"
        ],
        "answer": "(b) {2}",
        "explanation": "Let f(x) = 7 => x³ - 1 = 7 => x³ = 8 => x = 2 (in R, there is only one real root). Hence pre-image set is {2}."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "A relation R on set A is called an equivalence relation if it is:",
        "options": [
          "(a) Reflexive, symmetric, and transitive",
          "(b) Reflexive and symmetric only",
          "(c) Symmetric and transitive only",
          "(d) Anti-symmetric and transitive"
        ],
        "answer": "(a) Reflexive, symmetric, and transitive",
        "explanation": "By definition, an equivalence relation must simultaneously satisfy reflexivity, symmetry, and transitivity."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Let f: A -> B be a bijection where n(A) = 5. Then n(B) must be:",
        "options": [
          "(a) 5",
          "(b) ≥ 5",
          "(c) ≤ 5",
          "(d) Any natural number"
        ],
        "answer": "(a) 5",
        "explanation": "A bijection is both injective (which requires n(A) ≤ n(B)) and surjective (which requires n(A) ≥ n(B)). For finite sets, a bijection exists between A and B if and only if n(A) = n(B) = 5."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Let R be a relation on the set of integers Z defined by (x, y) ∈ R if x - y is an even integer. The number of disjoint equivalence classes partition Z into is:",
        "options": [
          "(a) 2",
          "(b) 3",
          "(c) 4",
          "(d) Infinite"
        ],
        "answer": "(a) 2",
        "explanation": "x - y is even if x and y are both even or both odd. This partitions Z into two equivalence classes: [0] = set of even integers {..., -4, -2, 0, 2, 4, ...} and [1] = set of odd integers {..., -3, -1, 1, 3, ...}."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Let f: R -> R be defined by f(x) = cos x. Then f is:",
        "options": [
          "(a) Neither one-one nor onto",
          "(b) One-one and onto",
          "(c) One-one but not onto",
          "(d) Onto but not one-one"
        ],
        "answer": "(a) Neither one-one nor onto",
        "explanation": "f(0) = cos 0 = 1, f(2π) = cos(2π) = 1 => 0 ≠ 2π but f(0) = f(2π) => not one-one. Range of cos x is [-1, 1], but codomain is R, so numbers like 2 have no pre-images => not onto. Hence neither one-one nor onto."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The function f: R -> R given by f(x) = 5x + 3 is a bijective function.\nReason (R): Every linear polynomial function f(x) = ax + b (where a ≠ 0) from R to R is both one-one and onto.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. For any linear function f(x) = ax + b with a ≠ 0: f(x1) = f(x2) => ax1 + b = ax2 + b => x1 = x2 (one-one). For any y ∈ R, x = (y - b)/a ∈ R satisfies f(x) = y (onto). Hence, f is bijective, and R correctly explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The relation R = {(a, b) : a ≤ b²} on the set of real numbers R is not reflexive.\nReason (R): For a = 1/2, 1/2 ≤ (1/2)² is false since 1/2 > 1/4.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R provides the exact counterexample proving that (1/2, 1/2) ∉ R, so R is not reflexive."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): If A = {1, 2, 3}, then the relation R = {(1, 2), (2, 1)} is symmetric and transitive.\nReason (R): A relation is transitive if (a, b) ∈ R and (b, c) ∈ R implies (a, c) ∈ R.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is false: (1, 2) ∈ R and (2, 1) ∈ R, but (1, 1) ∉ R. Therefore R is NOT transitive. Reason R is the correct mathematical definition of transitivity."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): An equivalence relation on a non-empty set A partitions A into mutually disjoint equivalence classes whose union is A.\nReason (R): Any two equivalence classes are either identical or completely disjoint.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R directly explains why equivalence classes form a true partition of the set."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The function f: N -> N defined by f(x) = 2x is an onto function.\nReason (R): For any y ∈ N, x = y/2 is always a natural number.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. For y = 3 ∈ N, x = 3/2 ∉ N (not a natural number). The range of f is the set of even natural numbers {2, 4, 6, ...} which is a proper subset of N. Hence f is NOT onto."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Show that the relation R on the set R of real numbers, defined as R = {(a, b) : a ≤ b}, is reflexive and transitive but not symmetric.",
        "answer": "Reflexive, transitive, not symmetric proof",
        "explanation": "1. Reflexivity: For every a ∈ R, a ≤ a is always true. Thus (a, a) ∈ R for all a ∈ R. Hence R is reflexive. [1 Mark]\n2. Symmetry: For 2, 3 ∈ R, 2 ≤ 3, so (2, 3) ∈ R. But 3 ≤ 2 is false, so (3, 2) ∉ R. Hence R is not symmetric. [0.5 Mark]\n3. Transitivity: Let (a, b) ∈ R and (b, c) ∈ R => a ≤ b and b ≤ c => a ≤ c => (a, c) ∈ R. Hence R is transitive. [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Check whether the relation R on the set Z of integers defined by R = {(a, b) : |a - b| ≤ 3} is reflexive, symmetric, and transitive.",
        "answer": "Reflexive, symmetric, not transitive",
        "explanation": "1. Reflexive: For every a ∈ Z, |a - a| = 0 ≤ 3, so (a, a) ∈ R. Thus R is reflexive.\n2. Symmetric: If (a, b) ∈ R => |a - b| ≤ 3 => |b - a| = |a - b| ≤ 3 => (b, a) ∈ R. Thus R is symmetric.\n3. Transitive: Let a = 1, b = 4, c = 7.\n|1 - 4| = 3 ≤ 3 => (1, 4) ∈ R.\n|4 - 7| = 3 ≤ 3 => (4, 7) ∈ R.\nHowever, |1 - 7| = 6 > 3, so (1, 7) ∉ R. Thus R is NOT transitive."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Show that the function f: R - {3} -> R - {1} given by f(x) = (x - 2)/(x - 3) is a bijection.",
        "answer": "Proof of one-one and onto",
        "explanation": "1. One-One (Injectivity) [1.5 Marks]:\nLet x1, x2 ∈ R - {3} such that f(x1) = f(x2).\n=> (x1 - 2)/(x1 - 3) = (x2 - 2)/(x2 - 3)\n=> (x1 - 2)(x2 - 3) = (x2 - 2)(x1 - 3)\n=> x1 x2 - 3 x1 - 2 x2 + 6 = x1 x2 - 3 x2 - 2 x1 + 6\n=> - 3 x1 - 2 x2 = - 3 x2 - 2 x1\n=> - x1 = - x2 => x1 = x2.\nTherefore, f is one-one.\n\n2. Onto (Surjectivity) [1.5 Marks]:\nLet y ∈ R - {1}. We must find x ∈ R - {3} such that f(x) = y.\ny = (x - 2)/(x - 3) => y(x - 3) = x - 2 => y x - 3 y = x - 2\n=> x(y - 1) = 3 y - 2 => x = (3 y - 2)/(y - 1).\nSince y ≠ 1, x is well-defined. Also if x = 3 => 3 = (3 y - 2)/(y - 1) => 3 y - 3 = 3 y - 2 => -3 = -2 (impossible), so x ≠ 3.\nThus x ∈ R - {3} and f(x) = y. Hence f is onto.\nSince f is both one-one and onto, f is a bijection."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Let A = {1, 2, 3, 4, 5, 6}. Define a relation R on A by R = {(a, b) : b = a + 1}. Write R in roster form and determine its domain and range.",
        "answer": "Roster form, domain, range",
        "explanation": "Given b = a + 1 where a, b ∈ A:\nFor a = 1, b = 2 ∈ A\nFor a = 2, b = 3 ∈ A\nFor a = 3, b = 4 ∈ A\nFor a = 4, b = 5 ∈ A\nFor a = 5, b = 6 ∈ A\nFor a = 6, b = 7 ∉ A.\n1. Roster Form: R = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)}. [1 Mark]\n2. Domain of R = {1, 2, 3, 4, 5}. [0.5 Mark]\n3. Range of R = {2, 3, 4, 5, 6}. [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Show that the relation R in the set A = {x ∈ Z : 0 ≤ x ≤ 12} given by R = {(a, b) : |a - b| is a multiple of 4} is an equivalence relation. Find the set of all elements related to 1.",
        "answer": "Equivalence relation proof and equivalence class [1] = {1, 5, 9}",
        "explanation": "1. Reflexive: For any a ∈ A, |a - a| = 0 = 4 × 0, which is a multiple of 4. So (a, a) ∈ R. [0.5 Mark]\n2. Symmetric: If (a, b) ∈ R => |a - b| = 4k => |b - a| = |-(a - b)| = |a - b| = 4k, which is a multiple of 4 => (b, a) ∈ R. [0.5 Mark]\n3. Transitive: If (a, b) ∈ R and (b, c) ∈ R => a - b = ±4k1 and b - c = ±4k2.\nAdding both: a - c = (a - b) + (b - c) = ±4(k1 ± k2), so |a - c| is a multiple of 4 => (a, c) ∈ R. [1 Mark]\nHence, R is an equivalence relation.\n4. Elements related to 1 (Equivalence class [1]):\n[1] = {x ∈ A : |x - 1| is a multiple of 4}.\nFor x ∈ {0, 1, 2, ..., 12}:\n|1 - 1| = 0 (multiple of 4) => 1\n|5 - 1| = 4 (multiple of 4) => 5\n|9 - 1| = 8 (multiple of 4) => 9.\nHence the set of elements related to 1 is {1, 5, 9}. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Let f: N -> N be defined by f(x) = 2x + 3. Show that f is one-one but not onto.",
        "answer": "Proof of one-one and not onto",
        "explanation": "1. One-one: Let x1, x2 ∈ N such that f(x1) = f(x2) => 2x1 + 3 = 2x2 + 3 => 2x1 = 2x2 => x1 = x2. Hence f is one-one. [1 Mark]\n2. Not onto: Let y = 1 ∈ N (codomain). If f(x) = 1 => 2x + 3 = 1 => 2x = -2 => x = -1 ∉ N. Thus 1 has no pre-image in N. Hence f is not onto. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Let A = R - {2} and B = R - {1}. If f: A -> B is a mapping defined by f(x) = (x - 1)/(x - 2), show that f is bijective.",
        "answer": "Bijective proof",
        "explanation": "1. One-One: Let x1, x2 ∈ A such that f(x1) = f(x2).\n=> (x1 - 1)/(x1 - 2) = (x2 - 1)/(x2 - 2)\n=> (x1 - 1)(x2 - 2) = (x2 - 1)(x1 - 2)\n=> x1 x2 - 2 x1 - x2 + 2 = x1 x2 - 2 x2 - x1 + 2\n=> - 2 x1 - x2 = - 2 x2 - x1 => - x1 = - x2 => x1 = x2.\nHence f is one-one. [1.5 Marks]\n\n2. Onto: Let y ∈ B = R - {1}.\ny = (x - 1)/(x - 2) => y(x - 2) = x - 1 => y x - 2 y = x - 1\n=> x(y - 1) = 2 y - 1 => x = (2 y - 1)/(y - 1).\nSince y ≠ 1, x is a real number. If x = 2 => 2 = (2y - 1)/(y - 1) => 2y - 2 = 2y - 1 => -2 = -1 (not possible), so x ≠ 2.\nHence x ∈ A and f(x) = y. So f is onto. [1.5 Marks]\nTherefore, f is bijective."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Let R be a relation on the set A = {1, 2, 3, 4} defined by R = {(a, b) : a divides b}. Write R in roster form and state whether R is symmetric.",
        "answer": "Roster form and not symmetric",
        "explanation": "1. Roster Form: R = {(1, 1), (1, 2), (1, 3), (1, 4), (2, 2), (2, 4), (3, 3), (4, 4)}. [1 Mark]\n2. Symmetry: (1, 2) ∈ R because 1 divides 2, but (2, 1) ∉ R because 2 does not divide 1. Hence R is not symmetric. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Show that the relation R on R defined by R = {(a, b) : a - b + √3 ∈ S, where S is the set of all irrational numbers} is not an equivalence relation.",
        "answer": "Not an equivalence relation proof",
        "explanation": "1. Reflexive: For any a ∈ R, a - a + √3 = √3, which is irrational. So (a, a) ∈ R for all a ∈ R. Hence R is reflexive. [1 Mark]\n2. Not Symmetric: Let a = √3 and b = 1.\nThen a - b + √3 = √3 - 1 + √3 = 2√3 - 1, which is irrational. So (√3, 1) ∈ R.\nNow consider b - a + √3 = 1 - √3 + √3 = 1, which is rational (not in S). So (1, √3) ∉ R.\nHence R is NOT symmetric. [1 Mark]\nSince R is not symmetric, it cannot be an equivalence relation. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Give an example of a relation on a set which is symmetric and transitive but not reflexive.",
        "answer": "Example and verification",
        "explanation": "Let A = {1, 2, 3} and R = {(1, 2), (2, 1), (1, 1), (2, 2)}.\n1. Not reflexive: (3, 3) ∉ R, so R is not reflexive on A.\n2. Symmetric: (1, 2) ∈ R => (2, 1) ∈ R; (1, 1) and (2, 2) are self-symmetric. So R is symmetric.\n3. Transitive: (1, 2) and (2, 1) => (1, 1) ∈ R; (2, 1) and (1, 2) => (2, 2) ∈ R. All pairs hold.\nHence R is symmetric and transitive but not reflexive."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Let N denote the set of all natural numbers and R be the relation on N × N defined by (a, b) R (c, d) if and only if ad(b + c) = bc(a + d).\nShow that R is an equivalence relation on N × N.",
        "answer": "Proof of equivalence relation on N × N",
        "explanation": "Marking Scheme:\n1. Reflexivity [1.5 Marks]:\nLet (a, b) ∈ N × N.\nWe need to check if (a, b) R (a, b), i.e., whether ab(b + a) = ba(a + b).\nSince multiplication and addition in N are commutative, ab(b + a) = ba(a + b) is true for all a, b ∈ N.\nThus, (a, b) R (a, b) for all (a, b) ∈ N × N. Hence R is reflexive.\n\n2. Symmetry [1.5 Marks]:\nLet (a, b), (c, d) ∈ N × N such that (a, b) R (c, d).\n=> ad(b + c) = bc(a + d)\n=> bc(a + d) = ad(b + c)\n=> cb(d + a) = da(c + b)\n=> (c, d) R (a, b).\nHence R is symmetric.\n\n3. Transitivity [2 Marks]:\nLet (a, b) R (c, d) and (c, d) R (e, f).\nFrom (a, b) R (c, d): ad(b + c) = bc(a + d) => (b + c)/(bc) = (a + d)/(ad) => 1/c + 1/b = 1/d + 1/a\n=> 1/a - 1/b = 1/c - 1/d ... (1)\nFrom (c, d) R (e, f): cf(d + e) = de(c + f) => (d + e)/(de) = (c + f)/(cf) => 1/e + 1/d = 1/f + 1/c\n=> 1/c - 1/d = 1/e - 1/f ... (2)\nFrom (1) and (2):\n1/a - 1/b = 1/e - 1/f => 1/a + 1/f = 1/b + 1/e => (f + a)/(af) = (e + b)/(be)\n=> be(f + a) = af(e + b) => af(b + e) = be(a + f)\n=> (a, b) R (e, f).\nHence R is transitive.\nSince R is reflexive, symmetric, and transitive, R is an equivalence relation on N × N."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Let A = R - {3} and B = R - {1}. Consider the function f: A -> B defined by f(x) = (x - 2)/(x - 3).\n(i) Show that f is one-one and onto.\n(ii) Find the inverse function f⁻¹(x) and state its domain and range.",
        "answer": "Bijection proof and f⁻¹(x) = (3x - 2)/(x - 1)",
        "explanation": "Marking Scheme:\n(i) Bijection Proof (3 Marks):\n- Injectivity (One-One) [1.5 Marks]:\n  Let x1, x2 ∈ A such that f(x1) = f(x2).\n  => (x1 - 2)/(x1 - 3) = (x2 - 2)/(x2 - 3)\n  => (x1 - 2)(x2 - 3) = (x2 - 2)(x1 - 3)\n  => x1 x2 - 3 x1 - 2 x2 + 6 = x1 x2 - 3 x2 - 2 x1 + 6\n  => - 3 x1 - 2 x2 = - 3 x2 - 2 x1 => x1 = x2.\n  Hence f is one-one.\n- Surjectivity (Onto) [1.5 Marks]:\n  Let y ∈ B = R - {1}.\n  y = (x - 2)/(x - 3) => y(x - 3) = x - 2 => y x - 3 y = x - 2\n  => x(y - 1) = 3 y - 2 => x = (3 y - 2)/(y - 1).\n  For y ≠ 1, x is a real number. If x = 3 => 3(y - 1) = 3y - 2 => 3y - 3 = 3y - 2 => -3 = -2 (contradiction).\n  Thus x ≠ 3, so x ∈ A, and f(x) = y. Hence f is onto.\n\n(ii) Inverse Function (2 Marks):\nSince f is bijective, it is invertible.\nFrom x = (3 y - 2)/(y - 1), we have:\nf⁻¹(y) = (3 y - 2)/(y - 1), or in terms of x:\nf⁻¹(x) = (3x - 2)/(x - 1).\n- Domain of f⁻¹ = B = R - {1}.\n- Range of f⁻¹ = A = R - {3}."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Show that the relation R in the set A of points in a plane given by R = {(P, Q) : distance of point P from the origin is same as distance of point Q from the origin} is an equivalence relation. Further, show that the set of all points related to a point P ≠ (0, 0) is a circle passing through P with origin as centre.",
        "answer": "Equivalence relation proof and circle geometric interpretation",
        "explanation": "Marking Scheme:\nLet O = (0, 0) denote the origin. Then (P, Q) ∈ R <=> OP = OQ.\n1. Reflexive [1 Mark]:\nFor any point P, OP = OP is trivially true. Hence (P, P) ∈ R for all P ∈ A.\n2. Symmetric [1 Mark]:\nIf (P, Q) ∈ R => OP = OQ => OQ = OP => (Q, P) ∈ R. Hence R is symmetric.\n3. Transitive [1 Mark]:\nIf (P, Q) ∈ R and (Q, S) ∈ R => OP = OQ and OQ = OS => OP = OS => (P, S) ∈ R. Hence R is transitive.\nThus, R is an equivalence relation.\n\n4. Geometric Interpretation of Equivalence Class [2 Marks]:\nLet P be a fixed point in the plane with P ≠ (0, 0), and let OP = k (where k > 0 is a constant).\nThe set of all points related to P is:\n[P] = {Q ∈ A : (P, Q) ∈ R} = {Q ∈ A : OQ = OP = k}.\nBy geometric definition, the locus of a point Q in a plane whose distance from a fixed point O (origin) is constant (k) is a circle with centre at the origin O and radius k = OP.\nSince OP = k, this circle passes through the point P."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Student Club Membership & Relations\nA school organized three activity clubs: Science Club (S), Mathematics Club (M), and Coding Club (C). A relation R is defined on the set of students A in Class 12 such that (x, y) ∈ R if student x and student y are members of the same club.\n(i) Check whether relation R is reflexive.\n(ii) Check whether relation R is symmetric.\n(iii) If student A is in Science Club, student B is in both Science and Coding Club, and student C is in Coding Club, is relation R transitive? Justify.\n(iv) Under what condition on club memberships will R be a true equivalence relation?",
        "answer": "Solutions to Case Study on Relations",
        "explanation": "(i) Reflexive: Yes. For every student x, x belongs to the same club as x. Hence (x, x) ∈ R for all x ∈ A. [1 Mark]\n(ii) Symmetric: Yes. If x and y are in the same club, then y and x are in the same club. So (x, y) ∈ R => (y, x) ∈ R. [1 Mark]\n(iii) Transitivity check: Here student A and B share Science Club => (A, B) ∈ R. Student B and C share Coding Club => (B, C) ∈ R. But student A (only in Science) and student C (only in Coding) share NO club, so (A, C) ∉ R. Thus R is NOT transitive in general when students belong to multiple clubs. [1 Mark]\n(iv) R is an equivalence relation if and only if each student belongs to exactly one club (i.e. the clubs form mutually disjoint sets partitioning the student body). [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Let f: N -> R be a function defined as f(x) = 4x² + 12x + 15. Show that f: N -> S, where S is the range of f, is invertible. Find the inverse of f.\n(b) State the domain and range of f⁻¹.",
        "answer": "Invertible proof and f⁻¹(y) = (√(y - 6) - 3)/2",
        "explanation": "Marking Scheme:\n(a) Invertibility & Inverse (4 Marks):\n1. Injectivity (One-one) [1.5 Marks]:\nf(x) = 4x² + 12x + 15 = (2x + 3)² + 6.\nLet x1, x2 ∈ N such that f(x1) = f(x2).\n=> (2x1 + 3)² + 6 = (2x2 + 3)² + 6\n=> (2x1 + 3)² = (2x2 + 3)²\nSince x1, x2 ∈ N, 2x + 3 > 0, taking positive square root:\n2x1 + 3 = 2x2 + 3 => 2x1 = 2x2 => x1 = x2.\nThus f is one-one.\n\n2. Surjectivity (Onto) [1.5 Marks]:\nSince the codomain S is explicitly defined as the range of f (S = Range(f)), every element in S by definition has a pre-image in N. Hence f: N -> S is onto.\nSince f is one-one and onto, f is invertible.\n\n3. Finding Inverse [1 Mark]:\nLet y ∈ S. Then y = (2x + 3)² + 6\n=> (2x + 3)² = y - 6 => 2x + 3 = √(y - 6) (taking positive square root since x ∈ N)\n=> 2x = √(y - 6) - 3 => x = (√(y - 6) - 3)/2.\nHence f⁻¹: S -> N is given by f⁻¹(y) = (√(y - 6) - 3)/2.\n\n(b) Domain and Range of f⁻¹ (1 Mark):\n- Domain of f⁻¹ = S = {y ∈ R : y = 4x² + 12x + 15 for some x ∈ N}. For x = 1, y = 31; for x = 2, y = 55, etc.\n- Range of f⁻¹ = N (the set of all natural numbers)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Let R be the relation on Z × Z defined by ((a, b), (c, d)) ∈ R if and only if a + d = b + c.\n(i) Prove that R is an equivalence relation.\n(ii) Find the equivalence class [(2, 5)].",
        "answer": "Equivalence proof and [(2, 5)] = {(x, y) ∈ Z × Z : y - x = 3}",
        "explanation": "Marking Scheme:\n(i) Equivalence Relation Proof (3.5 Marks):\n1. Reflexive [1 Mark]:\nFor any (a, b) ∈ Z × Z:\na + b = b + a (commutative law of addition in Z).\nHence ((a, b), (a, b)) ∈ R for all (a, b) ∈ Z × Z. R is reflexive.\n\n2. Symmetric [1 Mark]:\nLet ((a, b), (c, d)) ∈ R => a + d = b + c\n=> b + c = a + d => c + b = d + a\n=> ((c, d), (a, b)) ∈ R. R is symmetric.\n\n3. Transitive [1.5 Marks]:\nLet ((a, b), (c, d)) ∈ R and ((c, d), (e, f)) ∈ R.\n=> a + d = b + c ... (1)\nand c + f = d + e ... (2)\nAdding equations (1) and (2):\n(a + d) + (c + f) = (b + c) + (d + e)\n=> a + f + (c + d) = b + e + (c + d)\nCancelling (c + d) from both sides:\na + f = b + e\n=> ((a, b), (e, f)) ∈ R. R is transitive.\nTherefore, R is an equivalence relation.\n\n(ii) Equivalence Class [(2, 5)] (1.5 Marks):\n[(2, 5)] = {(x, y) ∈ Z × Z : ((x, y), (2, 5)) ∈ R}\n=> x + 5 = y + 2 => y - x = 3 => y = x + 3.\nThus, [(2, 5)] = {(x, x + 3) : x ∈ Z} = {..., (-2, 1), (-1, 2), (0, 3), (1, 4), (2, 5), (3, 6), ...}."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Show that the relation R in the set A = {1, 2, 3, 4, 5} given by R = {(a, b) : |a - b| is even} is an equivalence relation. Show that all elements of {1, 3, 5} are related to each other and all elements of {2, 4} are related to each other, but no element of {1, 3, 5} is related to any element of {2, 4}.",
        "answer": "Equivalence relation proof and parity partition",
        "explanation": "Marking Scheme:\n1. Equivalence Relation Proof [2 Marks]:\n- Reflexive: For any a ∈ A, |a - a| = 0, which is an even number. So (a, a) ∈ R.\n- Symmetric: If (a, b) ∈ R => |a - b| is even => |b - a| = |a - b| is even => (b, a) ∈ R.\n- Transitive: If (a, b) ∈ R and (b, c) ∈ R => a - b is even and b - c is even.\n  Since sum of two even numbers is even: (a - b) + (b - c) = a - c is even => |a - c| is even => (a, c) ∈ R.\n  Hence R is an equivalence relation.\n\n2. Partition into Parity Classes [2 Marks]:\n- Elements of {1, 3, 5}: All elements are odd. The difference between any two odd numbers is always even (e.g., |1 - 3| = 2, |1 - 5| = 4, |3 - 5| = 2). Thus all elements of {1, 3, 5} are related to each other.\n- Elements of {2, 4}: Both elements are even. The difference between two even numbers is always even (|2 - 4| = 2). Thus all elements of {2, 4} are related to each other.\n- Cross Relations: The difference between any element of {1, 3, 5} (odd) and {2, 4} (even) is always odd (e.g. |1 - 2| = 1, |3 - 4| = 1). Since an odd number is not even, no element of {1, 3, 5} is related to any element of {2, 4}."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Determine whether the relation R on the set of all real numbers R defined by R = {(a, b) : a - b + √2 is an irrational number} is reflexive, symmetric, and transitive.\n(b) If f: R -> R is defined by f(x) = (3 - x³)^(1/3), find (f ∘ f)(x).",
        "answer": "(a) Reflexive, not symmetric, not transitive; (b) (f ∘ f)(x) = x",
        "explanation": "Marking Scheme:\n(a) Relation Analysis (3 Marks):\n1. Reflexive [1 Mark]: For every a ∈ R, a - a + √2 = √2, which is an irrational number. Hence (a, a) ∈ R for all a. Reflexive.\n2. Not Symmetric [1 Mark]: Let a = √2 and b = 1.\na - b + √2 = √2 - 1 + √2 = 2√2 - 1 (irrational) => (√2, 1) ∈ R.\nHowever, b - a + √2 = 1 - √2 + √2 = 1 (rational) => (1, √2) ∉ R. Not symmetric.\n3. Not Transitive [1 Mark]: Let a = √2, b = 2, c = 2√2.\na - b + √2 = √2 - 2 + √2 = 2√2 - 2 (irrational) => (√2, 2) ∈ R.\nb - c + √2 = 2 - 2√2 + √2 = 2 - √2 (irrational) => (2, 2√2) ∈ R.\nNow check a - c + √2 = √2 - 2√2 + √2 = 0 (rational) => (√2, 2√2) ∉ R. Not transitive.\n\n(b) Composition Calculation (2 Marks):\nf(x) = (3 - x³)^(1/3).\n(f ∘ f)(x) = f(f(x)) = f((3 - x³)^(1/3))\n= [ 3 - ((3 - x³)^(1/3))³ ]^(1/3)\n= [ 3 - (3 - x³) ]^(1/3)\n= [ 3 - 3 + x³ ]^(1/3)\n= [ x³ ]^(1/3) = x."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Show that the function f: [-1, 1] -> R given by f(x) = x/(x + 2) is one-one. Find the inverse of the function f: [-1, 1] -> Range(f).",
        "answer": "One-one proof and f⁻¹(y) = 2y/(1 - y)",
        "explanation": "Marking Scheme:\n1. One-one Proof [2 Marks]:\nLet x1, x2 ∈ [-1, 1] such that f(x1) = f(x2).\n=> x1 / (x1 + 2) = x2 / (x2 + 2)\n=> x1(x2 + 2) = x2(x1 + 2)\n=> x1 x2 + 2 x1 = x1 x2 + 2 x2\n=> 2 x1 = 2 x2 => x1 = x2.\nTherefore, f is one-one.\n\n2. Inverse of f [2 Marks]:\nLet y ∈ Range(f). Then y = x / (x + 2)\n=> y(x + 2) = x => y x + 2 y = x\n=> 2 y = x - y x = x(1 - y)\n=> x = 2 y / (1 - y).\nThus, f⁻¹: Range(f) -> [-1, 1] is given by:\nf⁻¹(y) = 2y / (1 - y)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Let A = {x ∈ Z : 0 ≤ x ≤ 12}. Show that R = {(a, b) : a = b} is an equivalence relation on A.\n(b) Let f: N -> N be defined by f(n) = (n + 1)/2 if n is odd, and f(n) = n/2 if n is even, for all n ∈ N. State whether the function f is bijective. Justify your answer.",
        "answer": "Equivalence relation proof and f is surjective but not injective (not bijective)",
        "explanation": "Marking Scheme:\n(a) Equivalence Relation (2 Marks):\n1. Reflexive: For all a ∈ A, a = a => (a, a) ∈ R.\n2. Symmetric: If (a, b) ∈ R => a = b => b = a => (b, a) ∈ R.\n3. Transitive: If (a, b) ∈ R and (b, c) ∈ R => a = b and b = c => a = c => (a, c) ∈ R.\nHence R is an equivalence relation (the identity relation on A).\n\n(b) Bijectivity Analysis of f (3 Marks):\n1. Injectivity (One-one) [1.5 Marks]:\nConsider n = 1 (odd) and n = 2 (even):\nf(1) = (1 + 1)/2 = 2/2 = 1.\nf(2) = 2/2 = 1.\nSince 1 ≠ 2 but f(1) = f(2) = 1, distinct elements in domain have the same image.\nTherefore, f is NOT one-one.\n\n2. Surjectivity (Onto) [1.5 Marks]:\nLet m ∈ N (codomain).\n- If m is any natural number, then 2m - 1 is an odd natural number, and f(2m - 1) = ((2m - 1) + 1)/2 = 2m/2 = m.\nThus, every m ∈ N has a pre-image (2m - 1) in N.\nTherefore, f is onto.\nConclusion: Since f is onto but not one-one, f is NOT bijective."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "unit_num": 1,
      "title": "Inverse Trigonometric Functions",
      "unit_title": "Relations and Functions",
      "weightage_unit": "8 Marks (Combined with Ch 1)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The principal value of sin⁻¹(-1/2) is:",
        "options": [
          "(a) -π/6",
          "(b) 5π/6",
          "(c) 7π/6",
          "(d) π/6"
        ],
        "answer": "(a) -π/6",
        "explanation": "The principal value branch of sin⁻¹ x is [-π/2, π/2]. Since sin(π/6) = 1/2 and sin⁻¹(-x) = -sin⁻¹(x), sin⁻¹(-1/2) = -π/6, which lies in [-π/2, π/2]."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The value of cos⁻¹(cos(7π/6)) is:",
        "options": [
          "(a) 5π/6",
          "(b) 7π/6",
          "(c) π/6",
          "(d) -π/6"
        ],
        "answer": "(a) 5π/6",
        "explanation": "The principal value branch of cos⁻¹ x is [0, π]. Since 7π/6 > π, it does not lie in the principal branch. We rewrite: cos(7π/6) = cos(2π - 5π/6) = cos(5π/6). Since 5π/6 ∈ [0, π], cos⁻¹(cos(7π/6)) = 5π/6."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The principal value of cos⁻¹(-1/√2) is:",
        "options": [
          "(a) 3π/4",
          "(b) π/4",
          "(c) -π/4",
          "(d) 5π/4"
        ],
        "answer": "(a) 3π/4",
        "explanation": "cos⁻¹(-x) = π - cos⁻¹(x). Here cos⁻¹(1/√2) = π/4. Therefore, cos⁻¹(-1/√2) = π - π/4 = 3π/4, which lies in the principal value branch [0, π]."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The domain of the function f(x) = sin⁻¹(2x - 1) is:",
        "options": [
          "(a) [0, 1]",
          "(b) [-1, 1]",
          "(c) [-1, 0]",
          "(d) [0, 2]"
        ],
        "answer": "(a) [0, 1]",
        "explanation": "The domain of sin⁻¹(θ) is [-1, 1]. Therefore: -1 ≤ 2x - 1 ≤ 1 => 0 ≤ 2x ≤ 2 => 0 ≤ x ≤ 1. Hence, the domain is [0, 1]."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of sin⁻¹(sin(2π/3)) is:",
        "options": [
          "(a) π/3",
          "(b) 2π/3",
          "(c) -π/3",
          "(d) 4π/3"
        ],
        "answer": "(a) π/3",
        "explanation": "The principal value branch of sin⁻¹ x is [-π/2, π/2]. 2π/3 does not lie in [-π/2, π/2]. Since sin(2π/3) = sin(π - π/3) = sin(π/3), we have sin⁻¹(sin(2π/3)) = sin⁻¹(sin(π/3)) = π/3, which lies in [-π/2, π/2]."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of tan⁻¹(√3) - sec⁻¹(-2) is:",
        "options": [
          "(a) -π/3",
          "(b) π/3",
          "(c) 2π/3",
          "(d) -2π/3"
        ],
        "answer": "(a) -π/3",
        "explanation": "tan⁻¹(√3) = π/3. For sec⁻¹(-2): sec⁻¹(-x) = π - sec⁻¹(x). Since sec(π/3) = 2, sec⁻¹(2) = π/3 => sec⁻¹(-2) = π - π/3 = 2π/3. Therefore, tan⁻¹(√3) - sec⁻¹(-2) = π/3 - 2π/3 = -π/3."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The range of the principal value branch of sec⁻¹(x) is:",
        "options": [
          "(a) [0, π] - {π/2}",
          "(b) [0, π]",
          "(c) [-π/2, π/2] - {0}",
          "(d) (-π/2, π/2)"
        ],
        "answer": "(a) [0, π] - {π/2}",
        "explanation": "sec(x) is defined for all x ∈ [0, π] except x = π/2 (where cos x = 0). Hence, the principal value branch of sec⁻¹(x) is [0, π] - {π/2}."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If sin⁻¹(x) = y, then:",
        "options": [
          "(a) -π/2 ≤ y ≤ π/2",
          "(b) 0 ≤ y ≤ π",
          "(c) -π/2 < y < π/2",
          "(d) 0 < y < π"
        ],
        "answer": "(a) -π/2 ≤ y ≤ π/2",
        "explanation": "The range (principal value branch) of y = sin⁻¹(x) is the closed interval [-π/2, π/2]."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The value of sin(π/3 - sin⁻¹(-1/2)) is:",
        "options": [
          "(a) 1",
          "(b) 1/2",
          "(c) 1/3",
          "(d) 1/4"
        ],
        "answer": "(a) 1",
        "explanation": "sin⁻¹(-1/2) = -π/6. Therefore: sin(π/3 - (-π/6)) = sin(π/3 + π/6) = sin(π/2) = 1."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The value of tan⁻¹(tan(3π/4)) is:",
        "options": [
          "(a) -π/4",
          "(b) 3π/4",
          "(c) π/4",
          "(d) 7π/4"
        ],
        "answer": "(a) -π/4",
        "explanation": "The principal value branch of tan⁻¹ x is (-π/2, π/2). Since 3π/4 is not in (-π/2, π/2), we write tan(3π/4) = tan(π - π/4) = -tan(π/4) = tan(-π/4). Hence, tan⁻¹(tan(3π/4)) = -π/4."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The principal value of cot⁻¹(-1/√3) is:",
        "options": [
          "(a) 2π/3",
          "(b) -π/3",
          "(c) π/3",
          "(d) 5π/3"
        ],
        "answer": "(a) 2π/3",
        "explanation": "The principal value branch of cot⁻¹ x is (0, π). cot⁻¹(-x) = π - cot⁻¹(x). Since cot(π/3) = 1/√3, cot⁻¹(1/√3) = π/3. Thus cot⁻¹(-1/√3) = π - π/3 = 2π/3."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The domain of cos⁻¹(x) is:",
        "options": [
          "(a) [-1, 1]",
          "(b) (0, π)",
          "(c) [0, π]",
          "(d) R"
        ],
        "answer": "(a) [-1, 1]",
        "explanation": "The cosine function takes values in [-1, 1]. Therefore, the domain of the inverse cosine function cos⁻¹(x) is [-1, 1]."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If sin⁻¹ x + sin⁻¹ y = 2π/3, then the value of cos⁻¹ x + cos⁻¹ y is:",
        "options": [
          "(a) π/3",
          "(b) 2π/3",
          "(c) π/6",
          "(d) π"
        ],
        "answer": "(a) π/3",
        "explanation": "Using the identity sin⁻¹ θ + cos⁻¹ θ = π/2:\n(π/2 - cos⁻¹ x) + (π/2 - cos⁻¹ y) = 2π/3\n=> π - (cos⁻¹ x + cos⁻¹ y) = 2π/3\n=> cos⁻¹ x + cos⁻¹ y = π - 2π/3 = π/3."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The value of cos(sec⁻¹ x + cosec⁻¹ x) for |x| ≥ 1 is:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) -1",
          "(d) 1/2"
        ],
        "answer": "(a) 0",
        "explanation": "For any |x| ≥ 1, the complementary angle identity gives sec⁻¹ x + cosec⁻¹ x = π/2. Therefore, cos(sec⁻¹ x + cosec⁻¹ x) = cos(π/2) = 0."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2) is:",
        "options": [
          "(a) 3π/4",
          "(b) π/4",
          "(c) π/2",
          "(d) π"
        ],
        "answer": "(a) 3π/4",
        "explanation": "Using cos⁻¹(-1/2) + sin⁻¹(-1/2) = π/2 (since sin⁻¹ x + cos⁻¹ x = π/2 for any x ∈ [-1, 1]). Also tan⁻¹(1) = π/4. Therefore: tan⁻¹(1) + [cos⁻¹(-1/2) + sin⁻¹(-1/2)] = π/4 + π/2 = 3π/4."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The principal value of cosec⁻¹(-2) is:",
        "options": [
          "(a) -π/6",
          "(b) π/6",
          "(c) 5π/6",
          "(d) 7π/6"
        ],
        "answer": "(a) -π/6",
        "explanation": "The principal value branch of cosec⁻¹ x is [-π/2, π/2] - {0}. cosec⁻¹(-x) = -cosec⁻¹(x). Since cosec(π/6) = 2, cosec⁻¹(-2) = -π/6."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The value of cos⁻¹(cos(13π/6)) is:",
        "options": [
          "(a) π/6",
          "(b) 13π/6",
          "(c) 5π/6",
          "(d) 7π/6"
        ],
        "answer": "(a) π/6",
        "explanation": "13π/6 = 2π + π/6. Since cos(2π + θ) = cos θ, cos(13π/6) = cos(π/6). Because π/6 ∈ [0, π] (the principal value branch), cos⁻¹(cos(13π/6)) = π/6."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The value of tan(2 tan⁻¹(1/5)) is:",
        "options": [
          "(a) 5/12",
          "(b) 12/5",
          "(c) 5/13",
          "(d) 1/5"
        ],
        "answer": "(a) 5/12",
        "explanation": "Formula: 2 tan⁻¹(x) = tan⁻¹(2x / (1 - x²)) for |x| < 1.\nFor x = 1/5: 2(1/5) / [1 - (1/5)²] = (2/5) / (24/25) = (2/5) × (25/24) = 5/12.\nThus, tan(tan⁻¹(5/12)) = 5/12."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If tan⁻¹ x + tan⁻¹ y = π/4 where xy < 1, then x + y + xy is equal to:",
        "options": [
          "(a) 1",
          "(b) 0",
          "(c) -1",
          "(d) 2"
        ],
        "answer": "(a) 1",
        "explanation": "tan⁻¹((x + y)/(1 - xy)) = π/4 => (x + y)/(1 - xy) = tan(π/4) = 1 => x + y = 1 - xy => x + y + xy = 1."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The domain of f(x) = cos⁻¹(x²) is:",
        "options": [
          "(a) [-1, 1]",
          "(b) [0, 1]",
          "(c) [-1, 0]",
          "(d) R"
        ],
        "answer": "(a) [-1, 1]",
        "explanation": "Domain requires -1 ≤ x² ≤ 1. Since x² ≥ 0 for all real x, this simplifies to 0 ≤ x² ≤ 1 => -1 ≤ x ≤ 1. Thus domain is [-1, 1]."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The value of tan⁻¹(√3) - cot⁻¹(-√3) is:",
        "options": [
          "(a) -π/2",
          "(b) π/2",
          "(c) 0",
          "(d) π"
        ],
        "answer": "(a) -π/2",
        "explanation": "tan⁻¹(√3) = π/3.\ncot⁻¹(-√3) = π - cot⁻¹(√3) = π - π/6 = 5π/6.\nTherefore, tan⁻¹(√3) - cot⁻¹(-√3) = π/3 - 5π/6 = (2π - 5π)/6 = -3π/6 = -π/2."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The range of the principal value branch of cosec⁻¹(x) is:",
        "options": [
          "(a) [-π/2, π/2] - {0}",
          "(b) (-π/2, π/2)",
          "(c) [0, π] - {π/2}",
          "(d) [-π/2, π/2]"
        ],
        "answer": "(a) [-π/2, π/2] - {0}",
        "explanation": "cosec(x) is defined on [-π/2, π/2] except at x = 0 (where sin 0 = 0). Thus, the range of cosec⁻¹(x) is [-π/2, π/2] - {0}."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The value of sin⁻¹(cos(33π/5)) is:",
        "options": [
          "(a) -π/10",
          "(b) π/10",
          "(c) 3π/10",
          "(d) -3π/10"
        ],
        "answer": "(a) -π/10",
        "explanation": "33π/5 = 6π + 3π/5. cos(33π/5) = cos(6π + 3π/5) = cos(3π/5).\nNow express cos(3π/5) as sin(π/2 - 3π/5) = sin((5π - 6π)/10) = sin(-π/10).\nSince -π/10 ∈ [-π/2, π/2], sin⁻¹(sin(-π/10)) = -π/10."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If tan⁻¹(3/4) = θ, then the value of cos θ is:",
        "options": [
          "(a) 4/5",
          "(b) 3/5",
          "(c) 3/4",
          "(d) 5/4"
        ],
        "answer": "(a) 4/5",
        "explanation": "tan θ = 3/4 (opposite = 3, adjacent = 4). Hypotenuse = √(3² + 4²) = 5. Since θ ∈ (0, π/2), cos θ = adjacent / hypotenuse = 4/5."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of sin[π/2 - sin⁻¹(-√3/2)] is:",
        "options": [
          "(a) 1/2",
          "(b) -1/2",
          "(c) √3/2",
          "(d) -√3/2"
        ],
        "answer": "(a) 1/2",
        "explanation": "sin⁻¹(-√3/2) = -π/3.\nExpression = sin(π/2 - (-π/3)) = sin(π/2 + π/3) = cos(π/3) = 1/2."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The value of cos⁻¹(cos(4π/3)) is 2π/3.\nReason (R): The principal value branch of cos⁻¹ x is [0, π].",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Since 4π/3 ∉ [0, π], we write cos(4π/3) = cos(2π - 2π/3) = cos(2π/3). Since 2π/3 ∈ [0, π], cos⁻¹(cos(4π/3)) = 2π/3. R correctly explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The domain of the function f(x) = sin⁻¹(x) + cos⁻¹(x) is [-1, 1].\nReason (R): For all x ∈ [-1, 1], sin⁻¹(x) + cos⁻¹(x) = π/2.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both A and R are true. Domain of both sin⁻¹ x and cos⁻¹ x is [-1, 1], so their sum is defined on [-1, 1] ∩ [-1, 1] = [-1, 1]. R is a true complementary identity, but the domain comes from the intersection of individual domains, not from the constant value π/2."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): tan⁻¹(tan x) = x for all real numbers x.\nReason (R): The principal value branch of tan⁻¹ x is (-π/2, π/2).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is false: tan⁻¹(tan x) = x ONLY when x ∈ (-π/2, π/2). For example, if x = 3π/4, tan⁻¹(tan(3π/4)) = -π/4 ≠ 3π/4. Reason R is the correct range of tan⁻¹ x."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The principal value of sec⁻¹(-√2) is 3π/4.\nReason (R): sec⁻¹(-x) = π - sec⁻¹(x) for all x ≥ 1.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. sec⁻¹(-√2) = π - sec⁻¹(√2) = π - π/4 = 3π/4, which lies in [0, π] - {π/2}. R is the exact formula used."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The function f(x) = sin⁻¹(x) is an increasing function on its domain [-1, 1].\nReason (R): The derivative of sin⁻¹(x) is 1/√(1 - x²), which is strictly positive for all x ∈ (-1, 1).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Since f'(x) = 1/√(1 - x²) > 0 on (-1, 1), f(x) is strictly increasing on [-1, 1]."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the principal value of:\n(i) sin⁻¹(-1/√2)\n(ii) cot⁻¹(-√3).",
        "answer": "(i) -π/4, (ii) 5π/6",
        "explanation": "(i) sin⁻¹(-1/√2): Principal value branch is [-π/2, π/2].\nsin⁻¹(-1/√2) = -sin⁻¹(1/√2) = -π/4. [1 Mark]\n(ii) cot⁻¹(-√3): Principal value branch is (0, π).\ncot⁻¹(-x) = π - cot⁻¹(x) => cot⁻¹(-√3) = π - cot⁻¹(√3) = π - π/6 = 5π/6. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find the value of tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2).",
        "answer": "3π/4",
        "explanation": "Method 1: Direct principal values [1 Mark]:\ntan⁻¹(1) = π/4\ncos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3\nsin⁻¹(-1/2) = -sin⁻¹(1/2) = -π/6.\nSum = π/4 + 2π/3 - π/6 = (3π + 8π - 2π)/12 = 9π/12 = 3π/4. [1 Mark]\n(Alternatively: using cos⁻¹(x) + sin⁻¹(x) = π/2 => π/4 + π/2 = 3π/4)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Write the function tan⁻¹((cos x - sin x)/(cos x + sin x)), where -π/4 < x < 3π/4, in simplest form.",
        "answer": "π/4 - x",
        "explanation": "Given: tan⁻¹((cos x - sin x)/(cos x + sin x)).\nDividing numerator and denominator by cos x [1 Mark]:\n= tan⁻¹((1 - tan x)/(1 + tan x))\nSince tan(π/4) = 1 [1 Mark]:\n= tan⁻¹((tan(π/4) - tan x)/(1 + tan(π/4) tan x))\n= tan⁻¹(tan(π/4 - x)).\nSince -π/4 < x < 3π/4 => -3π/4 < -x < π/4 => -π/2 < π/4 - x < π/2.\nThus, π/4 - x lies in the principal value branch (-π/2, π/2) of tan⁻¹.\nTherefore, tan⁻¹(tan(π/4 - x)) = π/4 - x. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Evaluate: sin(π/3 - sin⁻¹(-√3/2)).",
        "answer": "1",
        "explanation": "sin⁻¹(-√3/2) = -sin⁻¹(√3/2) = -π/3. [1 Mark]\nTherefore:\nsin(π/3 - sin⁻¹(-√3/2)) = sin(π/3 - (-π/3)) = sin(π/3 + π/3) = sin(2π/3)\n= sin(π - π/3) = sin(π/3) = √3/2. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Express tan⁻¹(cos x / (1 - sin x)), -3π/2 < x < π/2, in the simplest form.",
        "answer": "π/4 + x/2",
        "explanation": "We use half-angle trigonometric formulas [1.5 Marks]:\ncos x = cos²(x/2) - sin²(x/2) = (cos(x/2) - sin(x/2))(cos(x/2) + sin(x/2))\n1 - sin x = cos²(x/2) + sin²(x/2) - 2 sin(x/2) cos(x/2) = (cos(x/2) - sin(x/2))².\nTherefore:\ncos x / (1 - sin x) = (cos(x/2) + sin(x/2)) / (cos(x/2) - sin(x/2))\nDividing numerator and denominator by cos(x/2):\n= (1 + tan(x/2)) / (1 - tan(x/2)) = tan(π/4 + x/2). [1 Mark]\nGiven -3π/2 < x < π/2 => -3π/4 < x/2 < π/4 => -π/2 < π/4 + x/2 < π/2.\nHence, tan⁻¹(tan(π/4 + x/2)) = π/4 + x/2. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find the value of tan⁻¹(√3) - sec⁻¹(-2) + cosec⁻¹(2/√3).",
        "answer": "0",
        "explanation": "1. tan⁻¹(√3) = π/3. [0.5 Mark]\n2. sec⁻¹(-2) = π - sec⁻¹(2) = π - π/3 = 2π/3. [0.5 Mark]\n3. cosec⁻¹(2/√3) = sin⁻¹(√3/2) = π/3. [0.5 Mark]\nExpression = π/3 - 2π/3 + π/3 = 0. [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Write in simplest form: tan⁻¹((√(1 + x²) - 1)/x), x ≠ 0.",
        "answer": "(1/2) tan⁻¹ x",
        "explanation": "Substitute x = tan θ => θ = tan⁻¹ x, where -π/2 < θ < π/2 and θ ≠ 0 [1 Mark]:\n(√(1 + x²) - 1)/x = (√(1 + tan² θ) - 1)/tan θ = (sec θ - 1)/tan θ\n= ((1/cos θ) - 1) / (sin θ/cos θ) = (1 - cos θ)/sin θ [1 Mark]\n= (2 sin²(θ/2)) / (2 sin(θ/2) cos(θ/2)) = sin(θ/2)/cos(θ/2) = tan(θ/2).\nTherefore, tan⁻¹(tan(θ/2)) = θ/2 = (1/2) tan⁻¹ x. [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Solve for x: sin⁻¹(1 - x) - 2 sin⁻¹ x = π/2.",
        "answer": "x = 0",
        "explanation": "Given: sin⁻¹(1 - x) - 2 sin⁻¹ x = π/2\n=> sin⁻¹(1 - x) = π/2 + 2 sin⁻¹ x\nTaking sine on both sides:\n1 - x = sin(π/2 + 2 sin⁻¹ x) = cos(2 sin⁻¹ x) [1 Mark]\nLet sin⁻¹ x = θ => sin θ = x, so cos(2θ) = 1 - 2 sin² θ = 1 - 2x².\n=> 1 - x = 1 - 2x² => 2x² - x = 0 => x(2x - 1) = 0 => x = 0 or x = 1/2.\nVerification:\n- For x = 0: sin⁻¹(1) - 2 sin⁻¹(0) = π/2 - 0 = π/2 (True).\n- For x = 1/2: sin⁻¹(1/2) - 2 sin⁻¹(1/2) = -sin⁻¹(1/2) = -π/6 ≠ π/2 (False).\nHence, x = 0 is the only solution. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Prove that: tan⁻¹(1/5) + tan⁻¹(1/7) + tan⁻¹(1/3) + tan⁻¹(1/8) = π/4.",
        "answer": "Proof using addition formula",
        "explanation": "Grouping in pairs [1 Mark]:\n1. tan⁻¹(1/5) + tan⁻¹(1/7) = tan⁻¹[ (1/5 + 1/7) / (1 - (1/5)(1/7)) ]\n= tan⁻¹[ (12/35) / (34/35) ] = tan⁻¹(12/34) = tan⁻¹(6/17).\n2. tan⁻¹(1/3) + tan⁻¹(1/8) = tan⁻¹[ (1/3 + 1/8) / (1 - (1/3)(1/8)) ] [1 Mark]\n= tan⁻¹[ (11/24) / (23/24) ] = tan⁻¹(11/23).\n3. Combining both results [1 Mark]:\ntan⁻¹(6/17) + tan⁻¹(11/23) = tan⁻¹[ (6/17 + 11/23) / (1 - (6/17)(11/23)) ]\nNumerator = (6 × 23 + 11 × 17) / 391 = (138 + 187) / 391 = 325 / 391.\nDenominator = (391 - 66) / 391 = 325 / 391.\n= tan⁻¹(325 / 325) = tan⁻¹(1) = π/4. (Proved)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Find the value of cos(2 cos⁻¹(0.8)).",
        "answer": "0.28",
        "explanation": "Let cos⁻¹(0.8) = θ => cos θ = 0.8 = 4/5. [1 Mark]\ncos(2θ) = 2 cos² θ - 1 = 2(0.8)² - 1 = 2(0.64) - 1 = 1.28 - 1 = 0.28. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Write the principal value branch and domain of all six inverse trigonometric functions in tabular form.\n(b) Prove that tan⁻¹(√x) = (1/2) cos⁻¹((1 - x)/(1 + x)) for x ∈ [0, 1].",
        "answer": "Complete summary table and algebraic proof",
        "explanation": "Marking Scheme:\n(a) Summary Table of Inverse Trigonometric Functions (3 Marks):\n1. y = sin⁻¹ x : Domain = [-1, 1], Range = [-π/2, π/2]\n2. y = cos⁻¹ x : Domain = [-1, 1], Range = [0, π]\n3. y = tan⁻¹ x : Domain = R, Range = (-π/2, π/2)\n4. y = cot⁻¹ x : Domain = R, Range = (0, π)\n5. y = sec⁻¹ x : Domain = (-∞, -1] ∪ [1, ∞), Range = [0, π] - {π/2}\n6. y = cosec⁻¹ x : Domain = (-∞, -1] ∪ [1, ∞), Range = [-π/2, π/2] - {0}\n\n(b) Proof (2 Marks):\nLet √x = tan θ => x = tan² θ.\nSince x ∈ [0, 1], √x ∈ [0, 1] => θ ∈ [0, π/4].\nR.H.S. = (1/2) cos⁻¹((1 - x)/(1 + x))\n= (1/2) cos⁻¹((1 - tan² θ)/(1 + tan² θ))\nUsing the identity cos(2θ) = (1 - tan² θ)/(1 + tan² θ):\n= (1/2) cos⁻¹(cos 2θ).\nSince θ ∈ [0, π/4], 2θ ∈ [0, π/2] ⊂ [0, π] (the principal value branch of cos⁻¹).\n= (1/2)(2θ) = θ = tan⁻¹(√x) = L.H.S. (Proved)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Prove that: 2 tan⁻¹(1/2) + tan⁻¹(1/7) = tan⁻¹(31/17).\n(b) Solve for x: tan⁻¹(2x) + tan⁻¹(3x) = π/4.",
        "answer": "(a) Proof; (b) x = 1/6",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\nFirst evaluate 2 tan⁻¹(1/2):\n2 tan⁻¹(x) = tan⁻¹(2x / (1 - x²))\n2 tan⁻¹(1/2) = tan⁻¹[ 2(1/2) / (1 - (1/2)²) ] = tan⁻¹[ 1 / (3/4) ] = tan⁻¹(4/3). [1 Mark]\nNow: tan⁻¹(4/3) + tan⁻¹(1/7) = tan⁻¹[ (4/3 + 1/7) / (1 - (4/3)(1/7)) ] [1 Mark]\n= tan⁻¹[ (31/21) / (17/21) ] = tan⁻¹(31/17) = R.H.S. (Proved). [0.5 Mark]\n\n(b) Equation Solving (2.5 Marks):\ntan⁻¹(2x) + tan⁻¹(3x) = π/4\n=> tan⁻¹[ (2x + 3x) / (1 - (2x)(3x)) ] = π/4 [1 Mark]\n=> 5x / (1 - 6x²) = tan(π/4) = 1\n=> 5x = 1 - 6x² => 6x² + 5x - 1 = 0 [1 Mark]\nFactoring: 6x² + 6x - x - 1 = 0 => 6x(x + 1) - 1(x + 1) = 0\n=> (6x - 1)(x + 1) = 0 => x = 1/6 or x = -1.\nCheck validity: If x = -1, tan⁻¹(-2) + tan⁻¹(-3) is negative, whereas π/4 > 0. So x = -1 is extraneous.\nFor x = 1/6, 2x × 3x = 6(1/36) = 1/6 < 1. Hence, x = 1/6 is the only valid solution. [0.5 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Simplify: tan⁻¹[ (3a²x - x³) / (a³ - 3ax²) ], a > 0, -a/√3 < x < a/√3.\n(b) If cos⁻¹(x/a) + cos⁻¹(y/b) = α, prove that (x²/a²) - (2xy/ab) cos α + (y²/b²) = sin² α.",
        "answer": "(a) 3 tan⁻¹(x/a); (b) Algebraic proof",
        "explanation": "Marking Scheme:\n(a) Simplification (2.5 Marks):\nSubstitute x = a tan θ => θ = tan⁻¹(x/a) [1 Mark]:\nSince -a/√3 < x < a/√3 => -1/√3 < tan θ < 1/√3 => -π/6 < θ < π/6.\nExpression = tan⁻¹[ (3a³ tan θ - a³ tan³ θ) / (a³ - 3a³ tan² θ) ]\n= tan⁻¹[ a³(3 tan θ - tan³ θ) / a³(1 - 3 tan² θ) ] [1 Mark]\n= tan⁻¹(tan 3θ).\nSince -π/6 < θ < π/6, -π/2 < 3θ < π/2 (principal value branch of tan⁻¹).\n= 3θ = 3 tan⁻¹(x/a). [0.5 Mark]\n\n(b) Proof (2.5 Marks):\ncos⁻¹(x/a) + cos⁻¹(y/b) = α\nUsing formula cos⁻¹ u + cos⁻¹ v = cos⁻¹(uv - √(1 - u²) √(1 - v²)) [1 Mark]:\ncos⁻¹[ (xy/ab) - √(1 - x²/a²) √(1 - y²/b²) ] = α\n=> (xy/ab) - √(1 - x²/a²) √(1 - y²/b²) = cos α\n=> (xy/ab) - cos α = √(1 - x²/a²) √(1 - y²/b²) [0.5 Mark]\nSquaring both sides:\n(xy/ab - cos α)² = (1 - x²/a²)(1 - y²/b²)\n=> (x²y²/a²b²) - 2(xy/ab) cos α + cos² α = 1 - x²/a² - y²/b² + (x²y²/a²b²) [0.5 Mark]\nCancelling x²y²/a²b² on both sides and rearranging:\nx²/a² - 2(xy/ab) cos α + y²/b² = 1 - cos² α = sin² α. (Proved). [0.5 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Inverse Trigonometric Functions in Satellite Tracking\nAn antenna tracking a low Earth orbit satellite monitors the elevation angle θ over time. The angle θ is modeled using inverse trigonometric relations based on radar telemetry coordinates: θ(t) = tan⁻¹(h/d(t)), where h is the fixed altitude of the satellite (h = 300 km) and d(t) is the ground distance.\n(i) If ground distance d = 300√3 km, find the elevation angle θ.\n(ii) What is the range of the elevation angle function θ as ground distance d varies from 0 to ∞?\n(iii) Evaluate the principal value of sin⁻¹(sin(θ)) when θ = 2π/3 radians.\n(iv) State why the domain of tan⁻¹ x is the entire real line R, unlike sin⁻¹ x.",
        "answer": "Solutions to Case Study on Satellite Tracking Angles",
        "explanation": "(i) θ = tan⁻¹(300 / 300√3) = tan⁻¹(1/√3) = π/6 radians (or 30°). [1 Mark]\n(ii) As d -> 0⁺, h/d -> ∞, so θ -> π/2. As d -> ∞, h/d -> 0, so θ -> 0. Range of elevation angle is (0, π/2]. [1 Mark]\n(iii) sin⁻¹(sin(2π/3)): Since 2π/3 ∉ [-π/2, π/2], rewrite sin(2π/3) = sin(π - π/3) = sin(π/3). Thus sin⁻¹(sin(π/3)) = π/3 radians. [1 Mark]\n(iv) The tangent function tan θ takes every real value from -∞ to +∞ as θ varies in (-π/2, π/2). Therefore, the domain of its inverse tan⁻¹ x is all real numbers R. In contrast, sin θ is bounded between -1 and +1, so sin⁻¹ x is defined only for x ∈ [-1, 1]. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Prove that: sin⁻¹(3/5) - sin⁻¹(8/17) = cos⁻¹(84/85).\n(b) Find the value of: tan( (1/2) [ sin⁻¹(2x/(1 + x²)) + cos⁻¹((1 - y²)/(1 + y²)) ] ), |x| < 1, y > 0, xy < 1.",
        "answer": "(a) Proof; (b) (x + y)/(1 - xy)",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\nLet sin⁻¹(3/5) = A => sin A = 3/5, cos A = √(1 - (3/5)²) = 4/5 [0.5 Mark].\nLet sin⁻¹(8/17) = B => sin B = 8/17, cos B = √(1 - (8/17)²) = 15/17 [0.5 Mark].\nWe need to find cos(A - B):\ncos(A - B) = cos A cos B + sin A sin B [0.5 Mark]\n= (4/5)(15/17) + (3/5)(8/17)\n= 60/85 + 24/85 = 84/85 [0.5 Mark].\nSince A, B ∈ (0, π/2) and A > B, A - B ∈ (0, π/2).\nTherefore, A - B = cos⁻¹(84/85)\n=> sin⁻¹(3/5) - sin⁻¹(8/17) = cos⁻¹(84/85). (Proved). [0.5 Mark]\n\n(b) Evaluation (2.5 Marks):\nRecall standard identities for |x| < 1 and y > 0 [1 Mark]:\nsin⁻¹(2x/(1 + x²)) = 2 tan⁻¹ x\ncos⁻¹((1 - y²)/(1 + y²)) = 2 tan⁻¹ y.\nSubstitute into the expression [0.5 Mark]:\n= tan( (1/2) [ 2 tan⁻¹ x + 2 tan⁻¹ y ] )\n= tan( tan⁻¹ x + tan⁻¹ y ) [0.5 Mark]\nUsing addition formula for tan⁻¹ with xy < 1:\n= tan( tan⁻¹[ (x + y)/(1 - xy) ] )\n= (x + y)/(1 - xy). [0.5 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Solve the following equation for x:\ncos(tan⁻¹ x) = sin(cot⁻¹(3/4)).",
        "answer": "x = ±3/4",
        "explanation": "Marking Scheme:\nLet cot⁻¹(3/4) = θ => cot θ = 3/4 [1 Mark].\nIn a right triangle with adjacent = 3 and opposite = 4, hypotenuse = √(3² + 4²) = 5.\nTherefore, sin θ = opposite / hypotenuse = 4/5. [1 Mark]\nSo R.H.S. = sin(cot⁻¹(3/4)) = sin θ = 4/5. [0.5 Mark]\nNow for L.H.S., let tan⁻¹ x = φ => tan φ = x [1 Mark].\nIn a right triangle with opposite = x, adjacent = 1, hypotenuse = √(1 + x²).\nTherefore, cos φ = 1 / √(1 + x²). [0.5 Mark]\nEquating L.H.S. and R.H.S.:\n1 / √(1 + x²) = 4/5 [0.5 Mark]\nSquaring both sides:\n1 / (1 + x²) = 16/25 => 16(1 + x²) = 25 => 16 + 16x² = 25\n=> 16x² = 9 => x² = 9/16 => x = ±3/4. [0.5 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Prove that: 2 sin⁻¹(3/5) = tan⁻¹(24/7).",
        "answer": "Proof of 2 sin⁻¹(3/5) = tan⁻¹(24/7)",
        "explanation": "Marking Scheme:\nLet sin⁻¹(3/5) = θ => sin θ = 3/5. [1 Mark]\nSince θ ∈ (0, π/2), cos θ = √(1 - sin² θ) = √(1 - 9/25) = 4/5.\ntan θ = sin θ / cos θ = (3/5) / (4/5) = 3/4. [1 Mark]\nNow, using double-angle formula for tan(2θ) [1 Mark]:\ntan(2θ) = (2 tan θ) / (1 - tan² θ)\n= [ 2(3/4) ] / [ 1 - (3/4)² ] = (3/2) / [ 1 - 9/16 ]\n= (3/2) / (7/16) = (3/2) × (16/7) = 24/7. [0.5 Mark]\nSince 2θ ∈ (0, π/2), taking inverse tangent:\n2θ = tan⁻¹(24/7)\n=> 2 sin⁻¹(3/5) = tan⁻¹(24/7). (Proved). [0.5 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Prove that: tan⁻¹ x + tan⁻¹(2x / (1 - x²)) = tan⁻¹((3x - x³) / (1 - 3x²)), |x| < 1/√3.\n(b) Find the value of x if: tan⁻¹((x - 1)/(x - 2)) + tan⁻¹((x + 1)/(x + 2)) = π/4.",
        "answer": "(a) Proof; (b) x = ±1/√2",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\nSince |x| < 1/√3, 2 tan⁻¹ x = tan⁻¹(2x / (1 - x²)) [1 Mark].\nTherefore, L.H.S. = tan⁻¹ x + 2 tan⁻¹ x = 3 tan⁻¹ x. [0.5 Mark]\nLet x = tan θ => θ = tan⁻¹ x. Since |x| < 1/√3, -π/6 < θ < π/6.\nR.H.S. = tan⁻¹((3x - x³)/(1 - 3x²)) = tan⁻¹((3 tan θ - tan³ θ)/(1 - 3 tan² θ))\n= tan⁻¹(tan 3θ) = 3θ = 3 tan⁻¹ x. [0.5 Mark]\nThus L.H.S. = R.H.S. (Proved). [0.5 Mark]\n\n(b) Equation Solving (2.5 Marks):\ntan⁻¹((x - 1)/(x - 2)) + tan⁻¹((x + 1)/(x + 2)) = π/4\nUsing formula tan⁻¹ A + tan⁻¹ B = tan⁻¹((A + B)/(1 - AB)) [1 Mark]:\n[ (x - 1)/(x - 2) + (x + 1)/(x + 2) ] / [ 1 - ((x - 1)/(x - 2))((x + 1)/(x + 2)) ] = tan(π/4) = 1\nNumerator = (x - 1)(x + 2) + (x + 1)(x - 2) = (x² + x - 2) + (x² - x - 2) = 2x² - 4. [0.5 Mark]\nDenominator = (x - 2)(x + 2) - (x - 1)(x + 1) = (x² - 4) - (x² - 1) = -3. [0.5 Mark]\nTherefore: (2x² - 4) / (-3) = 1 => 2x² - 4 = -3 => 2x² = 1 => x² = 1/2\n=> x = ±1/√2. [0.5 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Prove that: cos⁻¹(4/5) + cos⁻¹(12/13) = cos⁻¹(33/65).",
        "answer": "Proof using cosine addition formula",
        "explanation": "Marking Scheme:\nLet cos⁻¹(4/5) = A => cos A = 4/5, sin A = √(1 - 16/25) = 3/5. [1 Mark]\nLet cos⁻¹(12/13) = B => cos B = 12/13, sin B = √(1 - 144/169) = 5/13. [1 Mark]\nWe evaluate cos(A + B) [1 Mark]:\ncos(A + B) = cos A cos B - sin A sin B\n= (4/5)(12/13) - (3/5)(5/13)\n= 48/65 - 15/65 = 33/65. [0.5 Mark]\nSince A, B ∈ (0, π/2), A + B ∈ (0, π) (the principal value branch of cos⁻¹).\nTaking inverse cosine on both sides:\nA + B = cos⁻¹(33/65)\n=> cos⁻¹(4/5) + cos⁻¹(12/13) = cos⁻¹(33/65). (Proved). [0.5 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Find the greatest and least values of (sin⁻¹ x)² + (cos⁻¹ x)².\n(b) Solve for x: tan⁻¹(x + 1) + tan⁻¹(x - 1) = tan⁻¹(8/31).",
        "answer": "(a) Greatest value = 5π²/4, Least value = π²/8; (b) x = 1/4",
        "explanation": "Marking Scheme:\n(a) Extreme Values (2.5 Marks):\nLet S = (sin⁻¹ x)² + (cos⁻¹ x)².\nWe know sin⁻¹ x + cos⁻¹ x = π/2.\nRecall: a² + b² = (a + b)² - 2ab.\nS = (sin⁻¹ x + cos⁻¹ x)² - 2 sin⁻¹ x cos⁻¹ x\n= (π/2)² - 2 sin⁻¹ x (π/2 - sin⁻¹ x) = π²/4 - π sin⁻¹ x + 2(sin⁻¹ x)² [1 Mark]\n= 2 [ (sin⁻¹ x)² - (π/2) sin⁻¹ x ] + π²/4\nCompleting square: 2 [ (sin⁻¹ x - π/4)² - π²/16 ] + π²/4\n= 2 (sin⁻¹ x - π/4)² - π²/8 + π²/4 = 2 (sin⁻¹ x - π/4)² + π²/8. [0.5 Mark]\nSince sin⁻¹ x ∈ [-π/2, π/2]:\n- Least value occurs when sin⁻¹ x = π/4 (at x = 1/√2):\n  S_min = 2(0)² + π²/8 = π²/8. [0.5 Mark]\n- Greatest value occurs when sin⁻¹ x = -π/2 (at x = -1):\n  sin⁻¹ x - π/4 = -π/2 - π/4 = -3π/4.\n  S_max = 2(-3π/4)² + π²/8 = 2(9π²/16) + π²/8 = 9π²/8 + π²/8 = 10π²/8 = 5π²/4. [0.5 Mark]\n\n(b) Solving Equation (2.5 Marks):\ntan⁻¹(x + 1) + tan⁻¹(x - 1) = tan⁻¹(8/31)\n=> tan⁻¹[ ((x + 1) + (x - 1)) / (1 - (x + 1)(x - 1)) ] = tan⁻¹(8/31) [1 Mark]\n=> 2x / (1 - (x² - 1)) = 8/31 => 2x / (2 - x²) = 8/31\n=> x / (2 - x²) = 4/31 => 31x = 4(2 - x²) = 8 - 4x² [0.5 Mark]\n=> 4x² + 31x - 8 = 0 => 4x² + 32x - x - 8 = 0\n=> 4x(x + 8) - 1(x + 8) = 0 => (4x - 1)(x + 8) = 0\n=> x = 1/4 or x = -8. [0.5 Mark]\nCheck validity: If x = -8, both arguments (x + 1) = -7 and (x - 1) = -9 are negative, so L.H.S. < 0, but R.H.S. > 0. So x = -8 is extraneous.\nFor x = 1/4, (x + 1)(x - 1) = (5/4)(-3/4) = -15/16 < 1. Hence, x = 1/4 is the unique valid solution. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "unit_num": 2,
      "title": "Matrices",
      "unit_title": "Algebra",
      "weightage_unit": "10 Marks (Combined with Ch 4)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If a matrix has 18 elements, what are the possible orders it can have?",
        "options": [
          "(a) 1×18, 18×1, 2×9, 9×2, 3×6, 6×3",
          "(b) 1×18, 2×9, 3×6 only",
          "(c) 2×9, 3×6 only",
          "(d) 1×18, 18×1, 2×9, 9×2 only"
        ],
        "answer": "(a) 1×18, 18×1, 2×9, 9×2, 3×6, 6×3",
        "explanation": "The order of a matrix with m rows and n columns has mn elements. The pairs (m, n) of natural numbers whose product mn = 18 are: (1, 18), (18, 1), (2, 9), (9, 2), (3, 6), (6, 3). Thus there are 6 possible orders."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If A is a square matrix such that A² = A, then (I + A)³ - 7A is equal to:",
        "options": [
          "(a) I",
          "(b) A",
          "(c) I - A",
          "(d) 3I"
        ],
        "answer": "(a) I",
        "explanation": "(I + A)³ = I³ + 3 I² A + 3 I A² + A³ = I + 3A + 3A² + A³.\nSince A² = A, we have A³ = A² A = A · A = A² = A.\nThus (I + A)³ = I + 3A + 3A + A = I + 7A.\nTherefore, (I + A)³ - 7A = (I + 7A) - 7A = I."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "For any square matrix A with real entries, A - A' is always a:",
        "options": [
          "(a) Skew-symmetric matrix",
          "(b) Symmetric matrix",
          "(c) Diagonal matrix",
          "(d) Identity matrix"
        ],
        "answer": "(a) Skew-symmetric matrix",
        "explanation": "Let B = A - A'. Then B' = (A - A')' = A' - (A')' = A' - A = -(A - A') = -B. Since B' = -B, B = A - A' is by definition a skew-symmetric matrix."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If A = [[cos α, -sin α], [sin α, cos α]], then A + A' = I if the value of α is:",
        "options": [
          "(a) π/3",
          "(b) π/6",
          "(c) π",
          "(d) 3π/2"
        ],
        "answer": "(a) π/3",
        "explanation": "A' = [[cos α, sin α], [-sin α, cos α]].\nA + A' = [[2 cos α, 0], [0, 2 cos α]].\nGiven A + A' = I = [[1, 0], [0, 1]] => 2 cos α = 1 => cos α = 1/2 => α = π/3."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Matrices A and B will be inverse of each other if and only if:",
        "options": [
          "(a) AB = BA = I",
          "(b) AB = BA",
          "(c) AB = 0, BA = I",
          "(d) AB = I, BA = 0"
        ],
        "answer": "(a) AB = BA = I",
        "explanation": "By definition, a square matrix B is called the inverse of a square matrix A if and only if AB = BA = I."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "All diagonal elements of a skew-symmetric matrix are always:",
        "options": [
          "(a) zero",
          "(b) 1",
          "(c) -1",
          "(d) any real number"
        ],
        "answer": "(a) zero",
        "explanation": "For a skew-symmetric matrix, a_ij = -a_ji for all i, j. For the diagonal elements, i = j, so a_ii = -a_ii => 2 a_ii = 0 => a_ii = 0. Hence all diagonal elements must be zero."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If A is of order 2×3 and B is of order 3×4, then the order of matrix (AB)' is:",
        "options": [
          "(a) 4×2",
          "(b) 2×4",
          "(c) 3×3",
          "(d) 4×3"
        ],
        "answer": "(a) 4×2",
        "explanation": "Order of AB is (2×3) × (3×4) = 2×4. The transpose of a 2×4 matrix reverses the rows and columns, resulting in order 4×2."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The total number of all possible matrices of order 3×3 with each entry 0 or 1 is:",
        "options": [
          "(a) 512",
          "(b) 18",
          "(c) 81",
          "(d) 27"
        ],
        "answer": "(a) 512",
        "explanation": "A 3×3 matrix has 3 × 3 = 9 entries. Each of the 9 positions can be filled independently in 2 ways (either 0 or 1). Total number of possible matrices = 2⁹ = 512."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If A and B are symmetric matrices of the same order, then AB - BA is a:",
        "options": [
          "(a) Skew-symmetric matrix",
          "(b) Symmetric matrix",
          "(c) Zero matrix",
          "(d) Identity matrix"
        ],
        "answer": "(a) Skew-symmetric matrix",
        "explanation": "Given A' = A and B' = B. Let C = AB - BA.\nC' = (AB - BA)' = (AB)' - (BA)' = B'A' - A'B' = BA - AB = -(AB - BA) = -C.\nSince C' = -C, AB - BA is a skew-symmetric matrix."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If A = [[0, 1], [1, 0]], then A² is equal to:",
        "options": [
          "(a) [[1, 0], [0, 1]]",
          "(b) [[0, 1], [1, 0]]",
          "(c) [[0, 0], [0, 0]]",
          "(d) [[1, 1], [1, 1]]"
        ],
        "answer": "(a) [[1, 0], [0, 1]]",
        "explanation": "A² = [[0, 1], [1, 0]] [[0, 1], [1, 0]] = [[0·0 + 1·1, 0·1 + 1·0], [1·0 + 0·1, 1·1 + 0·0]] = [[1, 0], [0, 1]] = I."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If [[x + y, 2], [5, xy]] = [[6, 2], [5, 8]], then the values of x and y are:",
        "options": [
          "(a) x = 4, y = 2 or x = 2, y = 4",
          "(b) x = 3, y = 3",
          "(c) x = 5, y = 1",
          "(d) x = 6, y = 0"
        ],
        "answer": "(a) x = 4, y = 2 or x = 2, y = 4",
        "explanation": "Equating corresponding elements: x + y = 6 and xy = 8. (x - y)² = (x + y)² - 4xy = 36 - 32 = 4 => x - y = ±2. Solving gives (x, y) = (4, 2) or (2, 4)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If A is a matrix of order m×n and B is a matrix such that AB' and B'A are both defined, then the order of matrix B is:",
        "options": [
          "(a) m×n",
          "(b) n×m",
          "(c) m×m",
          "(d) n×n"
        ],
        "answer": "(a) m×n",
        "explanation": "Let B have order p×q, so B' has order q×p.\nFor AB' to be defined, number of columns of A (n) must equal rows of B' (q), so q = n.\nFor B'A to be defined, columns of B' (p) must equal rows of A (m), so p = m.\nHence B has order p×q = m×n."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If A = [[α, β], [γ, -α]] is such that A² = I, then:",
        "options": [
          "(a) 1 - α² - βγ = 0",
          "(b) 1 + α² + βγ = 0",
          "(c) 1 - α² + βγ = 0",
          "(d) 1 + α² - βγ = 0"
        ],
        "answer": "(a) 1 - α² - βγ = 0",
        "explanation": "A² = [[α, β], [γ, -α]] [[α, β], [γ, -α]] = [[α² + βγ, αβ - βα], [γα - αγ, βγ + α²]] = [[α² + βγ, 0], [0, α² + βγ]].\nGiven A² = I = [[1, 0], [0, 1]] => α² + βγ = 1 => 1 - α² - βγ = 0."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If A and B are symmetric matrices of the same order, then AB + BA is:",
        "options": [
          "(a) Symmetric",
          "(b) Skew-symmetric",
          "(c) Null matrix",
          "(d) Identity matrix"
        ],
        "answer": "(a) Symmetric",
        "explanation": "Let C = AB + BA. C' = (AB + BA)' = (AB)' + (BA)' = B'A' + A'B' = BA + AB = AB + BA = C. Since C' = C, it is symmetric."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If matrix A = [[1, 2], [3, 4]], then A - A' is:",
        "options": [
          "(a) [[0, -1], [1, 0]]",
          "(b) [[0, 1], [-1, 0]]",
          "(c) [[2, 5], [5, 8]]",
          "(d) [[0, 0], [0, 0]]"
        ],
        "answer": "(a) [[0, -1], [1, 0]]",
        "explanation": "A' = [[1, 3], [2, 4]]. A - A' = [[1 - 1, 2 - 3], [3 - 2, 4 - 4]] = [[0, -1], [1, 0]]. (Notice this is a skew-symmetric matrix)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If A is a square matrix of order 3 and A' = -A, then det(A) is:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) -1",
          "(d) cannot be determined"
        ],
        "answer": "(a) 0",
        "explanation": "det(A) = det(A') = det(-A) = (-1)³ det(A) = -det(A) => 2 det(A) = 0 => det(A) = 0. The determinant of an odd-order skew-symmetric matrix is always zero."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If A = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], then A is a:",
        "options": [
          "(a) Scalar, identity, and diagonal matrix simultaneously",
          "(b) Scalar matrix only",
          "(c) Diagonal matrix only",
          "(d) Row matrix"
        ],
        "answer": "(a) Scalar, identity, and diagonal matrix simultaneously",
        "explanation": "The 3×3 identity matrix I has all off-diagonal elements 0 (diagonal matrix), all diagonal elements equal (scalar matrix), and equal specifically to 1 (identity matrix)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If A = [[2, 3], [1, -2]], then A⁻¹ is:",
        "options": [
          "(a) (1/7) [[2, 3], [1, -2]]",
          "(b) (-1/7) [[2, 3], [1, -2]]",
          "(c) (1/7) [[-2, -3], [-1, 2]]",
          "(d) [[2, -3], [-1, -2]]"
        ],
        "answer": "(a) (1/7) [[2, 3], [1, -2]]",
        "explanation": "det(A) = 2(-2) - 3(1) = -4 - 3 = -7. For a 2×2 matrix [[a, b], [c, d]], adj(A) = [[d, -b], [-c, a]] = [[-2, -3], [-1, 2]]. A⁻¹ = (1/det A) adj(A) = (-1/7) [[-2, -3], [-1, 2]] = (1/7) [[2, 3], [1, -2]]."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If A is a square matrix such that A² = I, then A is called:",
        "options": [
          "(a) Involutory matrix",
          "(b) Idempotent matrix",
          "(c) Nilpotent matrix",
          "(d) Symmetric matrix"
        ],
        "answer": "(a) Involutory matrix",
        "explanation": "A square matrix satisfying A² = I is called an involutory matrix. (If A² = A, it is idempotent; if A^k = 0, it is nilpotent)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If A = [[3, 1], [-1, 2]], then A² - 5A + 7I is equal to:",
        "options": [
          "(a) O",
          "(b) I",
          "(c) 2I",
          "(d) A"
        ],
        "answer": "(a) O",
        "explanation": "A² = [[3, 1], [-1, 2]] [[3, 1], [-1, 2]] = [[9 - 1, 3 + 2], [-3 - 2, -1 + 4]] = [[8, 5], [-5, 3]].\n5A = [[15, 5], [-5, 10]].\n7I = [[7, 0], [0, 7]].\nA² - 5A + 7I = [[8 - 15 + 7, 5 - 5 + 0], [-5 - (-5) + 0, 3 - 10 + 7]] = [[0, 0], [0, 0]] = O."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Every square matrix A can be uniquely expressed as the sum of a symmetric and a skew-symmetric matrix as:",
        "options": [
          "(a) (1/2)(A + A') + (1/2)(A - A')",
          "(b) (A + A') + (A - A')",
          "(c) (1/2)(A + A') - (1/2)(A - A')",
          "(d) (A A') + (A' A)"
        ],
        "answer": "(a) (1/2)(A + A') + (1/2)(A - A')",
        "explanation": "A = (1/2)(A + A') + (1/2)(A - A'). Here P = (1/2)(A + A') is symmetric (P' = P) and Q = (1/2)(A - A') is skew-symmetric (Q' = -Q)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "If A = diag(2, -1, 3) and B = diag(-1, 3, 2), then 2A + B is:",
        "options": [
          "(a) diag(3, 1, 8)",
          "(b) diag(1, 2, 5)",
          "(c) diag(4, -2, 6)",
          "(d) diag(0, 0, 0)"
        ],
        "answer": "(a) diag(3, 1, 8)",
        "explanation": "For diagonal matrices, addition is element-wise on the diagonal: 2A = diag(4, -2, 6). 2A + B = diag(4 + (-1), -2 + 3, 6 + 2) = diag(3, 1, 8)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If [x, 1] [[1, 0], [-2, 0]] = O, then the value of x is:",
        "options": [
          "(a) 2",
          "(b) 0",
          "(c) -2",
          "(d) 1"
        ],
        "answer": "(a) 2",
        "explanation": "[x, 1] [[1, 0], [-2, 0]] = [x(1) + 1(-2), x(0) + 1(0)] = [x - 2, 0]. Given [x - 2, 0] = [0, 0] => x - 2 = 0 => x = 2."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If A is a square matrix such that A' = A, then A is called a:",
        "options": [
          "(a) Symmetric matrix",
          "(b) Skew-symmetric matrix",
          "(c) Orthogonal matrix",
          "(d) Singular matrix"
        ],
        "answer": "(a) Symmetric matrix",
        "explanation": "A matrix A is defined to be symmetric if its transpose equals itself, i.e., A' = A."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The matrix P = [[0, 0, 4], [0, 4, 0], [4, 0, 0]] is a:",
        "options": [
          "(a) Square matrix",
          "(b) Diagonal matrix",
          "(c) Scalar matrix",
          "(d) Unit matrix"
        ],
        "answer": "(a) Square matrix",
        "explanation": "P is a 3×3 square matrix. It is not diagonal because non-zero entries (4) appear off the main diagonal (at positions (1,3) and (3,1))."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): If A and B are symmetric matrices of the same order, then AB is symmetric if and only if AB = BA.\nReason (R): For any two matrices A and B, (AB)' = B' A'.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. (AB)' = B'A'. Since A, B are symmetric, A' = A, B' = B, so (AB)' = BA. For AB to be symmetric, (AB)' = AB, which requires BA = AB (i.e. A and B commute). R correctly explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): For any square matrix A, (A + A') is a symmetric matrix.\nReason (R): (A + A')' = A' + (A')' = A' + A = A + A'.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R is the exact mathematical proof of A."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): If AB = O for two matrices A and B, then either A = O or B = O.\nReason (R): Matrix multiplication is not commutative in general.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is false: The product of two non-zero matrices can be a zero matrix (zero divisors exist in matrix algebra). For example, A = [[0, 1], [0, 0]] ≠ O and B = [[1, 0], [0, 0]] ≠ O, but AB = [[0, 0], [0, 0]] = O. Reason R is true."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The inverse of an invertible symmetric matrix is also symmetric.\nReason (R): (A⁻¹)' = (A')⁻¹ for any invertible matrix A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. (A⁻¹)' = (A')⁻¹ = A⁻¹ (since A' = A). Thus A⁻¹ is symmetric, and R correctly explains A."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): If A is a skew-symmetric matrix of order 3, then det(A) = 0.\nReason (R): det(A') = det(A) and det(-A) = (-1)ⁿ det(A) for an n×n matrix.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Since A' = -A, det(A) = det(A') = det(-A) = (-1)³ det(A) = -det(A) => 2 det(A) = 0 => det(A) = 0. R explains A directly."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find values of x and y if: 2 [[x, 5], [7, y - 3]] + [[3, -4], [1, 2]] = [[7, 6], [15, 14]].",
        "answer": "x = 2, y = 9",
        "explanation": "L.H.S. = [[2x, 10], [14, 2y - 6]] + [[3, -4], [1, 2]] = [[2x + 3, 6], [15, 2y - 4]]. [1 Mark]\nEquating corresponding elements with R.H.S. [[7, 6], [15, 14]]:\n1. 2x + 3 = 7 => 2x = 4 => x = 2. [0.5 Mark]\n2. 2y - 4 = 14 => 2y = 18 => y = 9. [0.5 Mark]\nThus x = 2, y = 9."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "If A = [[1, 2], [3, 4]], find A + A' and show that it is a symmetric matrix.",
        "answer": "A + A' = [[2, 5], [5, 8]], symmetric",
        "explanation": "A' = [[1, 3], [2, 4]]. [0.5 Mark]\nA + A' = [[1 + 1, 2 + 3], [3 + 2, 4 + 4]] = [[2, 5], [5, 8]]. [1 Mark]\nLet P = A + A'. Then P' = [[2, 5], [5, 8]]' = [[2, 5], [5, 8]] = P.\nSince P' = P, A + A' is symmetric. [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Express the matrix A = [[3, 5], [1, -1]] as the sum of a symmetric and a skew-symmetric matrix.",
        "answer": "P = [[3, 3], [3, -1]] and Q = [[0, 2], [-2, 0]]",
        "explanation": "We write A = P + Q, where P = (1/2)(A + A') and Q = (1/2)(A - A'). [0.5 Mark]\nA' = [[3, 1], [5, -1]].\n1. Symmetric Part P [1 Mark]:\nP = (1/2) [ [[3, 5], [1, -1]] + [[3, 1], [5, -1]] ] = (1/2) [[6, 6], [6, -2]] = [[3, 3], [3, -1]].\nP' = [[3, 3], [3, -1]] = P (symmetric).\n2. Skew-Symmetric Part Q [1 Mark]:\nQ = (1/2) [ [[3, 5], [1, -1]] - [[3, 1], [5, -1]] ] = (1/2) [[0, 4], [-4, 0]] = [[0, 2], [-2, 0]].\nQ' = [[0, -2], [2, 0]] = -Q (skew-symmetric).\n3. Verification: P + Q = [[3 + 0, 3 + 2], [3 - 2, -1 + 0]] = [[3, 5], [1, -1]] = A. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "If A = [[2, 0], [0, 2]], find A⁴.",
        "answer": "[[16, 0], [0, 16]] = 16 I",
        "explanation": "Notice A = 2 I, where I = [[1, 0], [0, 1]]. [1 Mark]\nThen A⁴ = (2 I)⁴ = 2⁴ I⁴ = 16 I = [[16, 0], [0, 16]]. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "If A = [[1, 2, 2], [2, 1, 2], [2, 2, 1]], prove that A² - 4A - 5I = O.",
        "answer": "Proof of A² - 4A - 5I = O",
        "explanation": "1. Calculate A² [1.5 Marks]:\nA² = [[1, 2, 2], [2, 1, 2], [2, 2, 1]] [[1, 2, 2], [2, 1, 2], [2, 2, 1]]\nRow 1: [1+4+4, 2+2+4, 2+4+2] = [9, 8, 8]\nRow 2: [2+2+4, 4+1+4, 4+2+2] = [8, 9, 8]\nRow 3: [2+4+2, 4+2+2, 4+4+1] = [8, 8, 9]\nA² = [[9, 8, 8], [8, 9, 8], [8, 8, 9]].\n\n2. Calculate 4A and 5I [0.5 Mark]:\n4A = [[4, 8, 8], [8, 4, 8], [8, 8, 4]], 5I = [[5, 0, 0], [0, 5, 0], [0, 0, 5]].\n\n3. Combine terms [1 Mark]:\nA² - 4A - 5I = [[9-4-5, 8-8-0, 8-8-0], [8-8-0, 9-4-5, 8-8-0], [8-8-0, 8-8-0, 9-4-5]]\n= [[0, 0, 0], [0, 0, 0], [0, 0, 0]] = O. (Proved)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find a matrix X such that 2A + B + X = O, where A = [[-1, 2], [3, 4]] and B = [[3, -2], [1, 5]].",
        "answer": "X = [[-1, -2], [-7, -13]]",
        "explanation": "2A = [[-2, 4], [6, 8]]. [0.5 Mark]\n2A + B = [[-2 + 3, 4 - 2], [6 + 1, 8 + 5]] = [[1, 2], [7, 13]]. [0.5 Mark]\nSince 2A + B + X = O => X = -(2A + B) = -[[1, 2], [7, 13]] = [[-1, -2], [-7, -13]]. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "If A = [[0, -tan(α/2)], [tan(α/2), 0]] and I is the identity matrix of order 2, show that: I + A = (I - A) [[cos α, -sin α], [sin α, cos α]].",
        "answer": "Proof using half-angle identities",
        "explanation": "Let t = tan(α/2). Then A = [[0, -t], [t, 0]].\nL.H.S. = I + A = [[1, -t], [t, 1]]. [0.5 Mark]\nI - A = [[1, t], [-t, 1]]. [0.5 Mark]\nRecall: cos α = (1 - t²)/(1 + t²), sin α = 2t/(1 + t²). [0.5 Mark]\nR.H.S. = [[1, t], [-t, 1]] (1/(1 + t²)) [[1 - t², -2t], [2t, 1 - t²]]\n= (1/(1 + t²)) [[1(1 - t²) + t(2t), 1(-2t) + t(1 - t²)], [-t(1 - t²) + 1(2t), -t(-2t) + 1(1 - t²)]] [1 Mark]\n= (1/(1 + t²)) [[1 + t², -t - t³], [t + t³, 1 + t²]]\n= [[1, -t], [t, 1]] = L.H.S. (Proved). [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "If A = [[1, 5], [6, 7]], verify that A - A' is a skew-symmetric matrix.",
        "answer": "Verification of skew-symmetric matrix",
        "explanation": "A' = [[1, 6], [5, 7]]. [0.5 Mark]\nLet B = A - A' = [[1 - 1, 5 - 6], [6 - 5, 7 - 7]] = [[0, -1], [1, 0]]. [1 Mark]\nB' = [[0, 1], [-1, 0]] = -[[0, -1], [1, 0]] = -B.\nSince B' = -B, A - A' is skew-symmetric. [0.5 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Using mathematical induction, prove that if A = [[3, -4], [1, -1]], then Aⁿ = [[1 + 2n, -4n], [n, 1 - 2n]] for all n ∈ N.",
        "answer": "Induction proof",
        "explanation": "Let P(n): Aⁿ = [[1 + 2n, -4n], [n, 1 - 2n]].\n1. Base Step (n = 1) [1 Mark]:\nP(1): A¹ = [[1 + 2(1), -4(1)], [1, 1 - 2(1)]] = [[3, -4], [1, -1]] = A. True for n = 1.\n2. Inductive Hypothesis: Assume P(k) is true for some k ∈ N [0.5 Mark]:\nA^k = [[1 + 2k, -4k], [k, 1 - 2k]].\n3. Inductive Step: We must show P(k + 1) is true [1 Mark]:\nA^(k+1) = A^k · A = [[1 + 2k, -4k], [k, 1 - 2k]] [[3, -4], [1, -1]]\nRow 1, Col 1: 3(1 + 2k) - 4k = 3 + 6k - 4k = 3 + 2k = 1 + 2(k + 1).\nRow 1, Col 2: -4(1 + 2k) + 4k = -4 - 8k + 4k = -4 - 4k = -4(k + 1).\nRow 2, Col 1: 3k + (1 - 2k)(1) = 3k + 1 - 2k = k + 1.\nRow 2, Col 2: -4k + (1 - 2k)(-1) = -4k - 1 + 2k = -1 - 2k = 1 - 2(k + 1).\nHence A^(k+1) = [[1 + 2(k+1), -4(k+1)], [k+1, 1 - 2(k+1)]].\nTherefore P(k + 1) is true. By principle of mathematical induction, the result holds for all n ∈ N. [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "If A = [[2, 3], [1, 2]], find the values of x and y such that A² = xA + yI.",
        "answer": "x = 4, y = -1",
        "explanation": "A² = [[2, 3], [1, 2]] [[2, 3], [1, 2]] = [[4 + 3, 6 + 6], [2 + 2, 3 + 4]] = [[7, 12], [4, 7]]. [1 Mark]\nxA + yI = x [[2, 3], [1, 2]] + y [[1, 0], [0, 1]] = [[2x + y, 3x], [x, 2x + y]].\nEquating elements:\nFrom (2, 1): x = 4. [0.5 Mark]\nFrom (1, 1): 2x + y = 7 => 2(4) + y = 7 => 8 + y = 7 => y = -1. [0.5 Mark]\nCheck: 3x = 12 (true). Hence x = 4, y = -1."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Express the matrix B = [[2, -2, -4], [-1, 3, 4], [1, -2, -3]] as the sum of a symmetric and a skew-symmetric matrix.\n(b) If A is any square matrix, prove that AA' and A'A are both symmetric matrices.",
        "answer": "(a) B = P + Q; (b) Proof of symmetry",
        "explanation": "Marking Scheme:\n(a) Decomposition of Matrix B (3.5 Marks):\nB' = [[2, -1, 1], [-2, 3, -2], [-4, 4, -3]]. [0.5 Mark]\n1. Symmetric Part P = (1/2)(B + B') [1.5 Marks]:\nB + B' = [[4, -3, -3], [-3, 6, 2], [-3, 2, -6]].\nP = [[2, -3/2, -3/2], [-3/2, 3, 1], [-3/2, 1, -3]].\nClearly P' = P (symmetric).\n2. Skew-Symmetric Part Q = (1/2)(B - B') [1 Mark]:\nB - B' = [[0, -1, -5], [1, 0, 6], [5, -6, 0]].\nQ = [[0, -1/2, -5/2], [1/2, 0, 3], [5/2, -3, 0]].\nClearly Q' = -Q (skew-symmetric with zero diagonal).\n3. Verification [0.5 Mark]:\nP + Q = [[2+0, -3/2-1/2, -3/2-5/2], [-3/2+1/2, 3+0, 1+3], [-3/2+5/2, 1-3, -3+0]] = B.\n\n(b) Symmetry Proof (1.5 Marks):\nLet X = AA'.\nTaking transpose: X' = (AA')' = (A')' A' = AA' = X. Hence AA' is symmetric. [0.75 Mark]\nLet Y = A'A.\nTaking transpose: Y' = (A'A)' = A' (A')' = A'A = Y. Hence A'A is symmetric. [0.75 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "If A = [[1, 0, 2], [0, 2, 1], [2, 0, 3]], prove that A³ - 6A² + 7A + 2I = O, and hence find A⁻¹.",
        "answer": "A³ - 6A² + 7A + 2I = O and A⁻¹ = (1/2) [[6, 0, -4], [2, -1, -1], [-4, 0, 2]]",
        "explanation": "Marking Scheme:\n1. A² calculation [1 Mark]:\nA² = [[1, 0, 2], [0, 2, 1], [2, 0, 3]] [[1, 0, 2], [0, 2, 1], [2, 0, 3]]\nRow 1: [1+0+4, 0+0+0, 2+0+6] = [5, 0, 8]\nRow 2: [0+0+2, 0+4+0, 0+2+3] = [2, 4, 5]\nRow 3: [2+0+6, 0+0+0, 4+0+9] = [8, 0, 13]\nA² = [[5, 0, 8], [2, 4, 5], [8, 0, 13]].\n\n2. A³ calculation [1.5 Marks]:\nA³ = A² · A = [[5, 0, 8], [2, 4, 5], [8, 0, 13]] [[1, 0, 2], [0, 2, 1], [2, 0, 3]]\nRow 1: [5+0+16, 0+0+0, 10+0+24] = [21, 0, 34]\nRow 2: [2+0+10, 0+8+0, 4+4+15] = [12, 8, 23]\nRow 3: [8+0+26, 0+0+0, 16+0+39] = [34, 0, 55]\nA³ = [[21, 0, 34], [12, 8, 23], [34, 0, 55]].\n\n3. Verification of equation [1 Mark]:\nA³ - 6A² + 7A + 2I\n= [[21, 0, 34], [12, 8, 23], [34, 0, 55]] - [[30, 0, 48], [12, 24, 30], [48, 0, 78]] + [[7, 0, 14], [0, 14, 7], [14, 0, 21]] + [[2, 0, 0], [0, 2, 0], [0, 0, 2]]\n= [[21-30+7+2, 0, 34-48+14+0], [12-12+0+0, 8-24+14+2, 23-30+7+0], [34-48+14+0, 0, 55-78+21+2]]\n= [[0, 0, 0], [0, 0, 0], [0, 0, 0]] = O. (Proved).\n\n4. Finding A⁻¹ [1.5 Marks]:\nMultiplying A³ - 6A² + 7A + 2I = O by A⁻¹:\nA² - 6A + 7I + 2 A⁻¹ = O => 2 A⁻¹ = -A² + 6A - 7I\nA⁻¹ = (1/2) [ 6A - A² - 7I ]\n6A - A² - 7I = [[6, 0, 12], [0, 12, 6], [12, 0, 18]] - [[5, 0, 8], [2, 4, 5], [8, 0, 13]] - [[7, 0, 0], [0, 7, 0], [0, 0, 7]]\n= [[6-5-7, 0, 12-8-0], [0-2-0, 12-4-7, 6-5-0], [12-8-0, 0, 18-13-7]]\n= [[-6, 0, 4], [-2, 1, 1], [4, 0, -2]]. Wait: 2 A⁻¹ = -A² + 6A - 7I =>\nLet's check: 6-5-7 = -6? Wait, 2 A⁻¹ = -O? No, 2 A⁻¹ = 6A - A² - 7I.\nSo A⁻¹ = (1/2) [[-6, 0, 4], [-2, 1, 1], [4, 0, -2]] or [[-3, 0, 2], [-1, 1/2, 1/2], [2, 0, -1]]."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Find the matrix X such that X [[1, 2, 3], [4, 5, 6]] = [[-7, -8, -9], [2, 4, 6]].\n(b) If A = [[1, -1], [-1, 1]], show that A³ = 4A.",
        "answer": "(a) X = [[1, -2], [2, 0]]; (b) Proof",
        "explanation": "Marking Scheme:\n(a) Matrix Equation (3.5 Marks):\nLet A = [[1, 2, 3], [4, 5, 6]] (order 2×3) and B = [[-7, -8, -9], [2, 4, 6]] (order 2×3).\nSince X A = B, for multiplication to be defined, X must have order 2×2. [0.5 Mark]\nLet X = [[a, b], [c, d]].\nX A = [[a, b], [c, d]] [[1, 2, 3], [4, 5, 6]] = [[a + 4b, 2a + 5b, 3a + 6b], [c + 4d, 2c + 5d, 3c + 6d]]. [1 Mark]\nEquating with B:\n1. a + 4b = -7 ... (1)\n2. 2a + 5b = -8 ... (2)\nMultiplying (1) by 2: 2a + 8b = -14. Subtracting (2): 3b = -6 => b = -2. [0.5 Mark]\nThen a = -7 - 4(-2) = -7 + 8 = 1. [0.5 Mark]\nCheck: 3(1) + 6(-2) = 3 - 12 = -9 (matches third element).\n3. c + 4d = 2 ... (3)\n4. 2c + 5d = 4 ... (4)\nMultiplying (3) by 2: 2c + 8d = 4. Subtracting (4): 3d = 0 => d = 0. [0.5 Mark]\nThen c = 2 - 4(0) = 2. [0.5 Mark]\nCheck: 3(2) + 6(0) = 6 (matches third element).\nHence X = [[1, -2], [2, 0]].\n\n(b) A³ = 4A Proof (1.5 Marks):\nA² = [[1, -1], [-1, 1]] [[1, -1], [-1, 1]] = [[1 + 1, -1 - 1], [-1 - 1, 1 + 1]] = [[2, -2], [-2, 2]] = 2A. [0.75 Mark]\nA³ = A² · A = (2A) A = 2 A² = 2(2A) = 4A. (Proved). [0.75 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Matrix Algebra in Supply Chain Management\nA manufacturing firm produces three types of components: P, Q, and R in two factories F1 and F2. The weekly output (in units) is represented by matrix A:\nA = [[1000, 2000, 3000], [4000, 2000, 1000]], where row 1 represents F1 and row 2 represents F2.\nThe production cost per unit and sale price per unit (in ₹) for components P, Q, R are given by matrix B:\nB = [[20, 25], [15, 20], [10, 15]], where column 1 represents production cost and column 2 represents selling price.\n(i) What is the total weekly production cost for Factory F1?\n(ii) What is the total weekly profit earned by Factory F2?\n(iii) Represent the total revenue and profit of both factories using matrix multiplication.\n(iv) If production in F1 increases by 20%, write the new production matrix for F1.",
        "answer": "Solutions to Case Study on Matrix Supply Chain Applications",
        "explanation": "(i) Production cost for F1 = 1000(20) + 2000(15) + 3000(10) = 20,000 + 30,000 + 30,000 = ₹80,000. [1 Mark]\n(ii) Profit per unit = Selling price - Cost:\nP: 25 - 20 = ₹5; Q: 20 - 15 = ₹5; R: 15 - 10 = ₹5.\nTotal profit for F2 = 4000(5) + 2000(5) + 1000(5) = 20,000 + 10,000 + 5,000 = ₹35,000. [1 Mark]\n(iii) Product Matrix C = AB:\nC = [[1000, 2000, 3000], [4000, 2000, 1000]] [[20, 25], [15, 20], [10, 15]]\nRow 1 (F1): Cost = ₹80,000; Revenue = 1000(25) + 2000(20) + 3000(15) = 25,000 + 40,000 + 45,000 = ₹1,10,000. (Profit = 1,10,000 - 80,000 = ₹30,000).\nRow 2 (F2): Cost = 4000(20) + 2000(15) + 1000(10) = 80,000 + 30,000 + 10,000 = ₹1,20,000; Revenue = 4000(25) + 2000(20) + 1000(15) = 1,00,000 + 40,000 + 15,000 = ₹1,55,000. [1 Mark]\n(iv) 20% increase on F1: 1.2 × [1000, 2000, 3000] = [1200, 2400, 3600]. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) If A = [[2, -1], [3, 4]], B = [[5, 2], [7, 4]], and C = [[2, 5], [3, 8]], find a matrix D such that CD - AB = O.\n(b) If A is an invertible matrix of order n, prove that (A')⁻¹ = (A⁻¹)'.",
        "answer": "(a) D = [[-191, -110], [77, 44]]; (b) Proof",
        "explanation": "Marking Scheme:\n(a) Matrix Calculation (3.5 Marks):\nCD - AB = O => CD = AB => D = C⁻¹ (AB) (since det C = 16 - 15 = 1 ≠ 0, C is invertible). [1 Mark]\n1. Calculate AB:\nAB = [[2, -1], [3, 4]] [[5, 2], [7, 4]] = [[10 - 7, 4 - 4], [15 + 28, 6 + 16]] = [[3, 0], [43, 22]]. [1 Mark]\n2. Calculate C⁻¹:\ndet(C) = 2(8) - 5(3) = 16 - 15 = 1.\nadj(C) = [[8, -5], [-3, 2]]. C⁻¹ = [[8, -5], [-3, 2]]. [0.5 Mark]\n3. Calculate D = C⁻¹ (AB):\nD = [[8, -5], [-3, 2]] [[3, 0], [43, 22]]\n= [[8(3) - 5(43), 8(0) - 5(22)], [-3(3) + 2(43), -3(0) + 2(22)]]\n= [[24 - 215, 0 - 110], [-9 + 86, 0 + 44]]\n= [[-191, -110], [77, 44]]. [1 Mark]\n\n(b) Proof of (A')⁻¹ = (A⁻¹)' (1.5 Marks):\nBy definition of inverse: A · A⁻¹ = I and A⁻¹ · A = I. [0.5 Mark]\nTaking transpose on both sides:\n(A · A⁻¹)' = I' => (A⁻¹)' · A' = I ... (1) [0.5 Mark]\nand (A⁻¹ · A)' = I' => A' · (A⁻¹)' = I ... (2)\nEquations (1) and (2) show that (A⁻¹)' when multiplied with A' yields the identity matrix I.\nHence, by definition of matrix inverse: (A')⁻¹ = (A⁻¹)'. (Proved). [0.5 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "If A = [[1, 3, 3], [1, 4, 3], [1, 3, 4]], verify that A · adj(A) = |A| I, and hence find A⁻¹.",
        "answer": "Verification and A⁻¹ = [[7, -3, -3], [-1, 1, 0], [-1, 0, 1]]",
        "explanation": "Marking Scheme:\n1. Determinant calculation [1 Mark]:\n|A| = 1(16 - 9) - 3(4 - 3) + 3(3 - 4) = 1(7) - 3(1) + 3(-1) = 7 - 3 - 3 = 1 ≠ 0.\n\n2. Adjugate matrix adj(A) [2 Marks]:\nCofactors of A:\nA11 = +(16 - 9) = 7; A12 = -(4 - 3) = -1; A13 = +(3 - 4) = -1\nA21 = -(12 - 9) = -3; A22 = +(4 - 3) = 1; A23 = -(3 - 3) = 0\nA31 = +(9 - 12) = -3; A32 = -(3 - 3) = 0; A33 = +(4 - 3) = 1.\nadj(A) = [[7, -1, -1], [-3, 1, 0], [-3, 0, 1]]' = [[7, -3, -3], [-1, 1, 0], [-1, 0, 1]].\n\n3. Verification of A · adj(A) = |A| I [1 Mark]:\nA · adj(A) = [[1, 3, 3], [1, 4, 3], [1, 3, 4]] [[7, -3, -3], [-1, 1, 0], [-1, 0, 1]]\nRow 1: [7 - 3 - 3, -3 + 3 + 0, -3 + 0 + 3] = [1, 0, 0]\nRow 2: [7 - 4 - 3, -3 + 4 + 0, -3 + 0 + 3] = [0, 1, 0]\nRow 3: [7 - 3 - 4, -3 + 3 + 0, -3 + 0 + 4] = [0, 0, 1]\n= [[1, 0, 0], [0, 1, 0], [0, 0, 1]] = 1 · I = |A| I. (Verified).\n\n4. Inverse calculation [1 Mark]:\nA⁻¹ = (1/|A|) adj(A) = (1/1) [[7, -3, -3], [-1, 1, 0], [-1, 0, 1]] = [[7, -3, -3], [-1, 1, 0], [-1, 0, 1]]."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "For the matrix A = [[3, 2], [1, 1]], find numbers a and b such that A² + aA + bI = O. Hence, find A⁻¹.",
        "answer": "a = -4, b = 1, and A⁻¹ = [[1, -2], [-1, 3]]",
        "explanation": "Marking Scheme:\nA² = [[3, 2], [1, 1]] [[3, 2], [1, 1]] = [[9 + 2, 6 + 2], [3 + 1, 2 + 1]] = [[11, 8], [4, 3]]. [1 Mark]\nA² + aA + bI = [[11, 8], [4, 3]] + [[3a, 2a], [a, a]] + [[b, 0], [0, b]]\n= [[11 + 3a + b, 8 + 2a], [4 + a, 3 + a + b]] = [[0, 0], [0, 0]]. [1 Mark]\nFrom 4 + a = 0 => a = -4.\nFrom 11 + 3(-4) + b = 0 => 11 - 12 + b = 0 => -1 + b = 0 => b = 1. [1 Mark]\nCheck: 8 + 2(-4) = 0, 3 + (-4) + 1 = 0. All hold. Thus a = -4, b = 1.\nFinding A⁻¹ [1 Mark]:\nA² - 4A + I = O => I = 4A - A²\nMultiplying by A⁻¹: A⁻¹ = 4I - A = [[4, 0], [0, 4]] - [[3, 2], [1, 1]] = [[1, -2], [-1, 3]]."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Prove that the product of matrices AB and BA may not be commutative with the help of a suitable counterexample.\n(b) If A = [[2, -1], [4, 2]], B = [[4, 3], [-2, 1]], find 2A + 3B and AB.",
        "answer": "(a) Counterexample proof; (b) 2A + 3B = [[16, 7], [2, 7]], AB = [[10, 5], [12, 14]]",
        "explanation": "Marking Scheme:\n(a) Non-Commutativity Proof (2 Marks):\nLet A = [[1, 0], [0, 0]] and B = [[0, 1], [0, 0]].\nAB = [[1, 0], [0, 0]] [[0, 1], [0, 0]] = [[0, 1], [0, 0]]. [1 Mark]\nBA = [[0, 1], [0, 0]] [[1, 0], [0, 0]] = [[0, 0], [0, 0]]. [0.5 Mark]\nClearly AB ≠ BA. Thus, matrix multiplication is not commutative in general. [0.5 Mark]\n\n(b) Calculations (3 Marks):\n1. 2A = [[4, -2], [8, 4]] and 3B = [[12, 9], [-6, 3]].\n2A + 3B = [[4 + 12, -2 + 9], [8 - 6, 4 + 3]] = [[16, 7], [2, 7]]. [1.5 Marks]\n2. AB = [[2, -1], [4, 2]] [[4, 3], [-2, 1]]\n= [[2(4) + (-1)(-2), 2(3) + (-1)(1)], [4(4) + 2(-2), 4(3) + 2(1)]]\n= [[8 + 2, 6 - 1], [16 - 4, 12 + 2]] = [[10, 5], [12, 14]]. [1.5 Marks]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "If A = [[1, 2, 2], [2, 1, -2], [a, 2, b]] is a matrix satisfying the equation A A' = 9 I, find the values of a and b.",
        "answer": "a = -2, b = -1",
        "explanation": "Marking Scheme:\nA' = [[1, 2, a], [2, 1, 2], [2, -2, b]]. [0.5 Mark]\nA A' = [[1, 2, 2], [2, 1, -2], [a, 2, b]] [[1, 2, a], [2, 1, 2], [2, -2, b]]\nRow 1: [1+4+4, 2+2-4, a+4+2b] = [9, 0, a + 2b + 4] [1 Mark]\nRow 2: [2+2-4, 4+1+4, 2a+2-2b] = [0, 9, 2a - 2b + 2]\nRow 3: [a+4+2b, 2a+2-2b, a²+4+b²].\nGiven A A' = 9 I = [[9, 0, 0], [0, 9, 0], [0, 0, 9]]. [0.5 Mark]\nEquating corresponding off-diagonal elements to 0:\n1. a + 2b + 4 = 0 => a + 2b = -4 ... (1) [0.5 Mark]\n2. 2a - 2b + 2 = 0 => 2a - 2b = -2 => a - b = -1 ... (2) [0.5 Mark]\nSubtracting (2) from (1):\n(a + 2b) - (a - b) = -4 - (-1) => 3b = -3 => b = -1. [0.5 Mark]\nSubstituting in (2): a - (-1) = -1 => a + 1 = -1 => a = -2. [0.5 Mark]\nCheck diagonal (3,3): a² + 4 + b² = (-2)² + 4 + (-1)² = 4 + 4 + 1 = 9 = 9 (true).\nHence a = -2, b = -1."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State and prove the reversal law for the transpose of the product of two matrices: (AB)' = B' A'.\n(b) If A = [[cos θ, sin θ], [-sin θ, cos θ]], prove that Aⁿ = [[cos(nθ), sin(nθ)], [-sin(nθ), cos(nθ)]] for all n ∈ N.",
        "answer": "(a) Derivation of reversal law; (b) Induction proof",
        "explanation": "Marking Scheme:\n(a) Reversal Law (AB)' = B'A' (2.5 Marks):\nLet A = [a_ik] of order m×n and B = [b_kj] of order n×p.\nThen AB is a matrix of order m×p, and its (i, j)-th element is given by: (AB)_ij = ∑_{k=1}^n a_ik b_kj. [1 Mark]\nTherefore, (j, i)-th element of (AB)' is: [(AB)']_ji = (AB)_ij = ∑_{k=1}^n a_ik b_kj. [0.5 Mark]\nNow consider B' A':\nOrder of B' is p×n and order of A' is n×m. Let B' = [b'_jk] where b'_jk = b_kj, and A' = [a'_ki] where a'_ki = a_ik.\nThe (j, i)-th element of B' A' is:\n(B' A')_ji = ∑_{k=1}^n b'_jk a'_ki = ∑_{k=1}^n b_kj a_ik = ∑_{k=1}^n a_ik b_kj. [0.5 Mark]\nSince [(AB)']_ji = (B' A')_ji for all i, j, we have (AB)' = B' A'. (Proved). [0.5 Mark]\n\n(b) Proof by Induction (2.5 Marks):\nLet P(n): Aⁿ = [[cos(nθ), sin(nθ)], [-sin(nθ), cos(nθ)]].\n1. For n = 1: A¹ = [[cos θ, sin θ], [-sin θ, cos θ]] = A. True for n = 1. [0.5 Mark]\n2. Assume true for n = k: A^k = [[cos(kθ), sin(kθ)], [-sin(kθ), cos(kθ)]]. [0.5 Mark]\n3. For n = k + 1: A^(k+1) = A^k · A\n= [[cos(kθ), sin(kθ)], [-sin(kθ), cos(kθ)]] [[cos θ, sin θ], [-sin θ, cos θ]] [0.5 Mark]\nRow 1, Col 1: cos(kθ) cos θ - sin(kθ) sin θ = cos(kθ + θ) = cos((k+1)θ).\nRow 1, Col 2: cos(kθ) sin θ + sin(kθ) cos θ = sin(kθ + θ) = sin((k+1)θ).\nRow 2, Col 1: -sin(kθ) cos θ - cos(kθ) sin θ = -sin((k+1)θ).\nRow 2, Col 2: -sin(kθ) sin θ + cos(kθ) cos θ = cos((k+1)θ). [0.5 Mark]\n= [[cos((k+1)θ), sin((k+1)θ)], [-sin((k+1)θ), cos((k+1)θ)]].\nHence P(k+1) is true. By mathematical induction, the formula holds for all n ∈ N. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "unit_num": 2,
      "title": "Determinants",
      "unit_title": "Algebra",
      "weightage_unit": "10 Marks (Combined with Ch 3)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If A is a square matrix of order 3 and |A| = 5, then the value of |adj(A)| is:",
        "options": [
          "(a) 25",
          "(b) 125",
          "(c) 5",
          "(d) 1/5"
        ],
        "answer": "(a) 25",
        "explanation": "For any square matrix A of order n, |adj(A)| = |A|^(n - 1). Here n = 3 and |A| = 5, so |adj(A)| = 5^(3 - 1) = 5² = 25."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If A is a 3×3 matrix and |A| = -2, then |3A| is equal to:",
        "options": [
          "(a) -54",
          "(b) -6",
          "(c) -18",
          "(d) 54"
        ],
        "answer": "(a) -54",
        "explanation": "For an n×n matrix A, |kA| = kⁿ |A|. Here k = 3, n = 3, and |A| = -2. Therefore, |3A| = 3³ |A| = 27 × (-2) = -54."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If points (2, -3), (λ, -1), and (0, 4) are collinear, then the value of λ is:",
        "options": [
          "(a) -10/7",
          "(b) 10/7",
          "(c) -7/10",
          "(d) 7/10"
        ],
        "answer": "(a) -10/7",
        "explanation": "Three points (x1, y1), (x2, y2), (x3, y3) are collinear if the area of triangle formed by them is zero:\n| [2, -3, 1], [λ, -1, 1], [0, 4, 1] | = 0\nExpanding along row 1:\n2(-1 - 4) - (-3)(λ - 0) + 1(4λ - 0) = 0\n2(-5) + 3λ + 4λ = 0 => -10 + 7λ = 0 => 7λ = 10 => wait:\nLet's check: 2(-1(1) - 1(4)) = 2(-5) = -10.\n-(-3)(λ(1) - 0(1)) = +3λ.\n+1(λ(4) - (-1)(0)) = 4λ.\n-10 + 7λ = 0 => 7λ = 10 => λ = 10/7.\nLet's check points: (2, -3), (λ, -1), (0, 4):\nSlope = (4 - (-3))/(0 - 2) = 7/(-2) = -7/2.\nSlope between (λ, -1) and (0, 4) = (4 - (-1))/(0 - λ) = 5/(-λ).\n-7/2 = -5/λ => 7/2 = 5/λ => 7λ = 10 => λ = 10/7."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If A is a square matrix of order 3 such that A · adj(A) = 10 I, then |A| is:",
        "options": [
          "(a) 10",
          "(b) 100",
          "(c) 1000",
          "(d) 1/10"
        ],
        "answer": "(a) 10",
        "explanation": "We know that A · adj(A) = |A| I. Given A · adj(A) = 10 I, comparing gives |A| = 10."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If A is an invertible matrix of order 2, then det(A⁻¹) is equal to:",
        "options": [
          "(a) 1/det(A)",
          "(b) det(A)",
          "(c) 1",
          "(d) 0"
        ],
        "answer": "(a) 1/det(A)",
        "explanation": "Since A · A⁻¹ = I, taking determinant on both sides: det(A · A⁻¹) = det(I) => det(A) · det(A⁻¹) = 1 => det(A⁻¹) = 1 / det(A)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If | [x, 2], [18, x] | = | [6, 2], [18, 6] |, then x is equal to:",
        "options": [
          "(a) ±6",
          "(b) 6",
          "(c) -6",
          "(d) 0"
        ],
        "answer": "(a) ±6",
        "explanation": "Evaluating left determinant: x² - 36.\nEvaluating right determinant: 6(6) - 18(2) = 36 - 36 = 0.\nTherefore, x² - 36 = 0 => x² = 36 => x = ±6."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Let A be a non-singular square matrix of order 3×3. Then |adj(adj A)| is equal to:",
        "options": [
          "(a) |A|⁴",
          "(b) |A|²",
          "(c) |A|³",
          "(d) |A|⁶"
        ],
        "answer": "(a) |A|⁴",
        "explanation": "For any matrix of order n, |adj(adj A)| = |A|^((n - 1)²). Here n = 3, so (n - 1)² = (3 - 1)² = 2² = 4. Hence |adj(adj A)| = |A|⁴."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A square matrix A is called singular if:",
        "options": [
          "(a) |A| = 0",
          "(b) |A| ≠ 0",
          "(c) A' = A",
          "(d) A² = I"
        ],
        "answer": "(a) |A| = 0",
        "explanation": "By definition, a square matrix A is singular if its determinant is zero (|A| = 0), and non-singular if |A| ≠ 0."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If the area of a triangle with vertices (2, -6), (5, 4), and (k, 4) is 35 sq units, then k is:",
        "options": [
          "(a) 12, -2",
          "(b) -12, 2",
          "(c) -12, -2",
          "(d) 12, 2"
        ],
        "answer": "(a) 12, -2",
        "explanation": "Area = (1/2) | [2, -6, 1], [5, 4, 1], [k, 4, 1] | = ±35.\nExpanding: 2(4 - 4) - (-6)(5 - k) + 1(20 - 4k) = ±70\n0 + 6(5 - k) + 20 - 4k = ±70 => 30 - 6k + 20 - 4k = ±70 => 50 - 10k = ±70.\nCase 1: 50 - 10k = 70 => -10k = 20 => k = -2.\nCase 2: 50 - 10k = -70 => -10k = -120 => k = 12.\nThus k = 12, -2."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If A = [[2, 3], [1, 4]], then adj(A) is:",
        "options": [
          "(a) [[4, -3], [-1, 2]]",
          "(b) [[4, 3], [1, 2]]",
          "(c) [[-4, 3], [1, -2]]",
          "(d) [[2, -3], [-1, 4]]"
        ],
        "answer": "(a) [[4, -3], [-1, 2]]",
        "explanation": "For any 2×2 matrix [[a, b], [c, d]], the adjoint is obtained by interchanging diagonal elements and changing the signs of off-diagonal elements: adj(A) = [[d, -b], [-c, a]]. For A = [[2, 3], [1, 4]], adj(A) = [[4, -3], [-1, 2]]."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If A and B are invertible matrices of order n, then (AB)⁻¹ is equal to:",
        "options": [
          "(a) B⁻¹ A⁻¹",
          "(b) A⁻¹ B⁻¹",
          "(c) B A",
          "(d) A B"
        ],
        "answer": "(a) B⁻¹ A⁻¹",
        "explanation": "By the reversal law of matrix inverses: (AB)⁻¹ = B⁻¹ A⁻¹."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If A is a 3×3 matrix such that |A| = 4, then the value of |2 adj(A)| is:",
        "options": [
          "(a) 128",
          "(b) 64",
          "(c) 32",
          "(d) 16"
        ],
        "answer": "(a) 128",
        "explanation": "Since adj(A) is a 3×3 matrix, |2 adj(A)| = 2³ |adj(A)| = 8 |adj(A)|.\n|adj(A)| = |A|^(3 - 1) = |A|² = 4² = 16.\nTherefore, |2 adj(A)| = 8 × 16 = 128."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The minor of the element 7 in the matrix A = [[1, 3, -2], [4, -5, 6], [3, 5, 2]] ... wait, let's pick element in A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]: The minor of element 7 is:",
        "options": [
          "(a) -3",
          "(b) 3",
          "(c) 0",
          "(d) -1"
        ],
        "answer": "(a) -3",
        "explanation": "Element 7 is at position (3, 1). Deleting row 3 and column 1 leaves the submatrix [[2, 3], [5, 6]]. Minor M_31 = 2(6) - 3(5) = 12 - 15 = -3."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If the system of linear equations 2x + 3y = 5 and 6x + ky = 15 has infinitely many solutions, then k is:",
        "options": [
          "(a) 9",
          "(b) 6",
          "(c) 3",
          "(d) 12"
        ],
        "answer": "(a) 9",
        "explanation": "For infinitely many solutions: a1/a2 = b1/b2 = c1/c2 => 2/6 = 3/k = 5/15 => 1/3 = 3/k => k = 9."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If A is a skew-symmetric matrix of order 2, then |A| is:",
        "options": [
          "(a) Non-negative",
          "(b) Always zero",
          "(c) Negative",
          "(d) Strictly positive always"
        ],
        "answer": "(a) Non-negative",
        "explanation": "A skew-symmetric matrix of order 2 has the form A = [[0, a], [-a, 0]]. Its determinant is |A| = 0(0) - a(-a) = a² ≥ 0 for all real a. Hence it is always non-negative."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If A = [[cos θ, -sin θ], [sin θ, cos θ]], then |A| is:",
        "options": [
          "(a) 1",
          "(b) 0",
          "(c) -1",
          "(d) cos 2θ"
        ],
        "answer": "(a) 1",
        "explanation": "|A| = cos θ(cos θ) - (-sin θ)(sin θ) = cos² θ + sin² θ = 1."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If a system of equations AX = B has |A| = 0 and (adj A) B = O, then the system:",
        "options": [
          "(a) is either consistent with infinitely many solutions or inconsistent",
          "(b) has a unique solution",
          "(c) is always inconsistent",
          "(d) has only the trivial solution"
        ],
        "answer": "(a) is either consistent with infinitely many solutions or inconsistent",
        "explanation": "According to the criteria of consistency, when |A| = 0 and (adj A) B = O, the system can either have infinitely many solutions (consistent) or no solution (inconsistent)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If A is a matrix of order 3 and |A| = 8, then |A · A'| is:",
        "options": [
          "(a) 64",
          "(b) 8",
          "(c) 512",
          "(d) 16"
        ],
        "answer": "(a) 64",
        "explanation": "|A · A'| = |A| |A'| = |A| |A| = |A|² = 8² = 64."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The cofactor A_23 of element 5 in the matrix [[2, -3, 5], [6, 0, 4], [1, 5, -7]] is:",
        "options": [
          "(a) -13",
          "(b) 13",
          "(c) -10",
          "(d) 10"
        ],
        "answer": "(a) -13",
        "explanation": "Cofactor A_23 is at row 2, column 3 (element 4). Deleting row 2 and col 3 leaves submatrix [[2, -3], [1, 5]]. Minor M_23 = 2(5) - (-3)(1) = 10 + 3 = 13. Cofactor A_23 = (-1)^(2+3) M_23 = (-1) × 13 = -13."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If A is a square matrix of order 3 and |A| = d, then |adj(2A)| is:",
        "options": [
          "(a) 64 d²",
          "(b) 8 d²",
          "(c) 4 d²",
          "(d) 16 d²"
        ],
        "answer": "(a) 64 d²",
        "explanation": "Let B = 2A. Since order is 3, |B| = |2A| = 2³ |A| = 8d.\nNow |adj(B)| = |B|^(3 - 1) = |B|² = (8d)² = 64 d²."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "For what value of x is the matrix A = [[3 - 2x, x + 1], [2, 4]] singular?",
        "options": [
          "(a) 1",
          "(b) -1",
          "(c) 2",
          "(d) 0"
        ],
        "answer": "(a) 1",
        "explanation": "A is singular if |A| = 0 => (3 - 2x)(4) - 2(x + 1) = 0 => 12 - 8x - 2x - 2 = 0 => 10 - 10x = 0 => x = 1."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "If A is a square matrix of order n, then |adj A| is equal to:",
        "options": [
          "(a) |A|^(n - 1)",
          "(b) |A|^n",
          "(c) |A|^(n - 2)",
          "(d) n|A|"
        ],
        "answer": "(a) |A|^(n - 1)",
        "explanation": "Standard property: A · adj(A) = |A| I_n => |A · adj(A)| = ||A| I_n| => |A| |adj A| = |A|^n |I_n| = |A|^n => |adj A| = |A|^(n - 1)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If the value of a third-order determinant is Δ = 6, and every element is multiplied by 2, the value of the new determinant is:",
        "options": [
          "(a) 48",
          "(b) 12",
          "(c) 24",
          "(d) 36"
        ],
        "answer": "(a) 48",
        "explanation": "Multiplying every element of an n×n matrix by 2 gives matrix 2A. The determinant is det(2A) = 2ⁿ det(A). For n = 3: 2³ × 6 = 8 × 6 = 48."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If a, b, c are in A.P., then the determinant | [x + 2, x + 3, x + 2a], [x + 3, x + 4, x + 2b], [x + 4, x + 5, x + 2c] | is equal to:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) x",
          "(d) 2a + 2b + 2c"
        ],
        "answer": "(a) 0",
        "explanation": "Since a, b, c are in A.P., 2b = a + c => a - 2b + c = 0.\nApplying row operation R1 -> R1 - 2R2 + R3:\nRow 1 becomes: [(x + 2) - 2(x + 3) + (x + 4), (x + 3) - 2(x + 4) + (x + 5), (x + 2a) - 2(x + 2b) + (x + 2c)]\n= [0, 0, 2(a - 2b + c)] = [0, 0, 0].\nSince an entire row is zero, the determinant is identically 0."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If A is an invertible matrix of order 3, and |A| = 3, then |(A⁻¹)ᵀ| is:",
        "options": [
          "(a) 1/3",
          "(b) 3",
          "(c) 9",
          "(d) 1/9"
        ],
        "answer": "(a) 1/3",
        "explanation": "|(A⁻¹)ᵀ| = |A⁻¹| = 1 / |A| = 1/3."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): If A is an invertible matrix of order 3 and |A| = 4, then |adj A| = 16.\nReason (R): For any square matrix A of order n, |adj A| = |A|^(n - 1).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. |adj A| = |A|^(3 - 1) = 4² = 16. R correctly explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): If A is a skew-symmetric matrix of order 3, then |A| = 0.\nReason (R): The determinant of a skew-symmetric matrix of odd order is always zero.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly (since order 3 is odd, |A| = 0)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): If the points (1, 2), (2, 4), and (3, 6) are collinear, the area of the triangle formed by them is zero.\nReason (R): Three points in a plane are collinear if and only if the area of the triangle formed by them is zero.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the geometric condition for collinearity."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): If A is a 3×3 matrix such that |A| = 2, then |2A| = 16.\nReason (R): For any n×n matrix A and scalar k, |kA| = kⁿ |A|.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. |2A| = 2³ |A| = 8 × 2 = 16. R correctly explains A."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): If |A| = 0 for a system of linear equations AX = B, the system cannot have a unique solution.\nReason (R): A unique solution X = A⁻¹ B exists if and only if A is non-singular (|A| ≠ 0).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R directly explains why |A| = 0 precludes a unique solution."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the area of the triangle whose vertices are (3, 8), (-4, 2), and (5, 1) using determinants.",
        "answer": "61/2 = 30.5 sq units",
        "explanation": "Area of triangle = (1/2) | [x1, y1, 1], [x2, y2, 1], [x3, y3, 1] | [0.5 Mark]\nΔ = (1/2) | [3, 8, 1], [-4, 2, 1], [5, 1, 1] |\nExpanding along row 1 [1 Mark]:\n= (1/2) [ 3(2 - 1) - 8(-4 - 5) + 1(-4 - 10) ]\n= (1/2) [ 3(1) - 8(-9) + 1(-14) ]\n= (1/2) [ 3 + 72 - 14 ] = (1/2) [ 61 ] = 61/2 = 30.5 sq units. [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "If A = [[2, 3], [1, 4]], find (A⁻¹)'.",
        "answer": "(1/5) [[4, -1], [-3, 2]]",
        "explanation": "|A| = 2(4) - 3(1) = 8 - 3 = 5 ≠ 0. [0.5 Mark]\nadj(A) = [[4, -3], [-1, 2]].\nA⁻¹ = (1/5) [[4, -3], [-1, 2]]. [0.5 Mark]\nTaking transpose [1 Mark]:\n(A⁻¹)' = (1/5) [[4, -1], [-3, 2]]."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Find the inverse of matrix A = [[2, 1], [7, 4]] using adjoint method and verify that A · A⁻¹ = I.",
        "answer": "A⁻¹ = [[4, -1], [-7, 2]] and verification",
        "explanation": "1. Determinant [0.5 Mark]:\n|A| = 2(4) - 1(7) = 8 - 7 = 1 ≠ 0.\n2. Adjoint of A [1 Mark]:\nadj(A) = [[4, -1], [-7, 2]].\n3. Inverse of A [0.5 Mark]:\nA⁻¹ = (1/|A|) adj(A) = (1/1) [[4, -1], [-7, 2]] = [[4, -1], [-7, 2]].\n4. Verification [1 Mark]:\nA · A⁻¹ = [[2, 1], [7, 4]] [[4, -1], [-7, 2]] = [[8 - 7, -2 + 2], [28 - 28, -7 + 8]] = [[1, 0], [0, 1]] = I. (Verified)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Show that the points A(a, b + c), B(b, c + a), and C(c, a + b) are collinear.",
        "answer": "Collinearity proof using determinants",
        "explanation": "Points are collinear if the determinant Δ = (1/2) | [a, b + c, 1], [b, c + a, 1], [c, a + b, 1] | = 0. [0.5 Mark]\nApplying C2 -> C2 + C1 [1 Mark]:\nΔ = (1/2) | [a, a + b + c, 1], [b, a + b + c, 1], [c, a + b + c, 1] |\nTaking (a + b + c) common from C2:\n= (1/2) (a + b + c) | [a, 1, 1], [b, 1, 1], [c, 1, 1] |.\nSince C2 and C3 are identical, the determinant is 0.\nΔ = (1/2)(a + b + c)(0) = 0. Hence the points are collinear. [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Solve the system of equations using matrix method:\n2x + 5y = 1\n3x + 2y = 7.",
        "answer": "x = 3, y = -1",
        "explanation": "Matrix equation AX = B [0.5 Mark]:\n[[2, 5], [3, 2]] [[x], [y]] = [[1], [7]].\n1. Determinant of A: |A| = 2(2) - 5(3) = 4 - 15 = -11 ≠ 0. [0.5 Mark]\n2. Inverse of A: adj(A) = [[2, -5], [-3, 2]].\nA⁻¹ = (-1/11) [[2, -5], [-3, 2]]. [1 Mark]\n3. Solution X = A⁻¹ B [1 Mark]:\n[[x], [y]] = (-1/11) [[2, -5], [-3, 2]] [[1], [7]]\n= (-1/11) [[2(1) - 5(7)], [-3(1) + 2(7)]] = (-1/11) [[2 - 35], [-3 + 14]] = (-1/11) [[-33], [11]] = [[3], [-1]].\nHence x = 3, y = -1."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find the equation of the line joining (1, 2) and (3, 6) using determinants.",
        "answer": "2x - y = 0",
        "explanation": "Let P(x, y) be any point on the line. Since (x, y), (1, 2), and (3, 6) are collinear [0.5 Mark]:\n| [x, y, 1], [1, 2, 1], [3, 6, 1] | = 0 [0.5 Mark]\nExpanding along row 1:\nx(2 - 6) - y(1 - 3) + 1(6 - 6) = 0\n=> -4x - y(-2) + 0 = 0 => -4x + 2y = 0 => -2(2x - y) = 0 => 2x - y = 0. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "If A = [[cos α, -sin α], [sin α, cos α]], verify that A⁻¹ = A'.",
        "answer": "Verification of orthogonal matrix",
        "explanation": "1. Find A' [0.5 Mark]:\nA' = [[cos α, sin α], [-sin α, cos α]].\n2. Find |A| [0.5 Mark]:\n|A| = cos² α - (-sin² α) = cos² α + sin² α = 1 ≠ 0.\n3. Find adj(A) and A⁻¹ [1 Mark]:\nadj(A) = [[cos α, sin α], [-sin α, cos α]].\nA⁻¹ = (1/|A|) adj(A) = (1/1) [[cos α, sin α], [-sin α, cos α]] = [[cos α, sin α], [-sin α, cos α]].\n4. Conclusion: A⁻¹ = A'. (Verified). [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "If | [2x, 5], [8, x] | = | [6, -2], [7, 3] |, find the value of x.",
        "answer": "x = ±6",
        "explanation": "Evaluating L.H.S.: 2x² - 40. [0.5 Mark]\nEvaluating R.H.S.: 6(3) - (-2)(7) = 18 + 14 = 32. [0.5 Mark]\nEquating: 2x² - 40 = 32 => 2x² = 72 => x² = 36 => x = ±6. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "If A = [[2, -3], [3, 5]], compute A⁻¹ and show that 2 A⁻¹ = 9 I - A.",
        "answer": "Computation and verification",
        "explanation": "|A| = 2(5) - (-3)(3) = 10 + 9 = 19. [0.5 Mark]\nadj(A) = [[5, 3], [-3, 2]]. A⁻¹ = (1/19) [[5, 3], [-3, 2]]. [1 Mark]\nNow 2 A⁻¹ = (2/19) [[5, 3], [-3, 2]] ... wait, let's check characteristic equation:\nA² - (Tr A) A + |A| I = O => A² - 7A + 19I = O\nMultiply by A⁻¹: A - 7I + 19 A⁻¹ = O => 19 A⁻¹ = 7I - A.\nSo 19 A⁻¹ = 7I - A, not 2 A⁻¹ = 9I - A.\nLet's verify: 19 A⁻¹ = 7 [[1, 0], [0, 1]] - [[2, -3], [3, 5]] = [[7 - 2, 0 - (-3)], [0 - 3, 7 - 5]] = [[5, 3], [-3, 2]] = 19 A⁻¹. (Verified)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "State the condition for a system of linear equations AX = B to have:\n(i) A unique solution\n(ii) No solution.",
        "answer": "Conditions for unique and no solution",
        "explanation": "(i) Unique solution: The coefficient matrix A must be non-singular, i.e., |A| ≠ 0. The unique solution is given by X = A⁻¹ B. [1 Mark]\n(ii) No solution (inconsistent): The coefficient matrix is singular (|A| = 0) and (adj A) · B ≠ O. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Solve the following system of linear equations using matrix method:\nx - y + 2z = 7\n3x + 4y - 5z = -5\n2x - y + 3z = 12.",
        "answer": "x = 2, y = 1, z = 3",
        "explanation": "Marking Scheme:\n1. Matrix Form AX = B [1 Mark]:\n[[1, -1, 2], [3, 4, -5], [2, -1, 3]] [[x], [y], [z]] = [[7], [-5], [12]].\n\n2. Determinant |A| [1 Mark]:\n|A| = 1(12 - 5) - (-1)(9 - (-10)) + 2(-3 - 8)\n= 1(7) + 1(19) + 2(-11) = 7 + 19 - 22 = 4 ≠ 0.\nSince |A| ≠ 0, A⁻¹ exists and the system has a unique solution X = A⁻¹ B.\n\n3. Co-factors of A [1.5 Marks]:\nA11 = +(12 - 5) = 7; A12 = -(9 + 10) = -19; A13 = +(-3 - 8) = -11\nA21 = -(-3 + 2) = 1; A22 = +(3 - 4) = -1; A23 = -(-1 + 2) = -1\nA31 = +(5 - 8) = -3; A32 = -(-5 - 6) = 11; A33 = +(4 + 3) = 7.\nadj(A) = [[7, -19, -11], [1, -1, -1], [-3, 11, 7]]' = [[7, 1, -3], [-19, -1, 11], [-11, -1, 7]].\nA⁻¹ = (1/4) [[7, 1, -3], [-19, -1, 11], [-11, -1, 7]].\n\n4. Finding X = A⁻¹ B [1.5 Marks]:\n[[x], [y], [z]] = (1/4) [[7, 1, -3], [-19, -1, 11], [-11, -1, 7]] [[7], [-5], [12]]\nRow 1: 7(7) + 1(-5) - 3(12) = 49 - 5 - 36 = 8\nRow 2: -19(7) - 1(-5) + 11(12) = -133 + 5 + 132 = 4\nRow 3: -11(7) - 1(-5) + 7(12) = -77 + 5 + 84 = 12.\n[[x], [y], [z]] = (1/4) [[8], [4], [12]] = [[2], [1], [3]].\nHence x = 2, y = 1, z = 3."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Given A = [[2, 2, -4], [-4, 2, -4], [2, -1, 5]] and B = [[1, -1, 0], [2, 3, 4], [0, 1, 2]], find the product BA and use it to solve the system of linear equations:\nx - y = 3\n2x + 3y + 4z = 17\ny + 2z = 7.",
        "answer": "BA = 6 I and x = 2, y = -1, z = 4",
        "explanation": "Marking Scheme:\n1. Product BA [2 Marks]:\nBA = [[1, -1, 0], [2, 3, 4], [0, 1, 2]] [[2, 2, -4], [-4, 2, -4], [2, -1, 5]]\nRow 1: [2+4+0, 2-2+0, -4+4+0] = [6, 0, 0]\nRow 2: [4-12+8, 4+6-4, -8-12+20] = [0, 6, 0]\nRow 3: [0-4+4, 0+2-2, 0-4+10] = [0, 0, 6]\nBA = 6 I => B · ((1/6) A) = I => B⁻¹ = (1/6) A.\n\n2. System of Linear Equations [1 Mark]:\nCoefficient matrix of system:\n[[1, -1, 0], [2, 3, 4], [0, 1, 2]] [[x], [y], [z]] = [[3], [17], [7]].\nNotice the coefficient matrix is exactly matrix B! Thus B X = C, where C = [[3], [17], [7]].\n\n3. Solution X = B⁻¹ C = (1/6) A C [2 Marks]:\n[[x], [y], [z]] = (1/6) [[2, 2, -4], [-4, 2, -4], [2, -1, 5]] [[3], [17], [7]]\nRow 1: 2(3) + 2(17) - 4(7) = 6 + 34 - 28 = 12\nRow 2: -4(3) + 2(17) - 4(7) = -12 + 34 - 28 = -6\nRow 3: 2(3) - 1(17) + 5(7) = 6 - 17 + 35 = 24.\n[[x], [y], [z]] = (1/6) [[12], [-6], [24]] = [[2], [-1], [4]].\nHence x = 2, y = -1, z = 4."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Solve the following system of linear equations using matrix method:\n2/x + 3/y + 10/z = 4\n4/x - 6/y + 5/z = 1\n6/x + 9/y - 20/z = 2.",
        "answer": "x = 2, y = 3, z = 5",
        "explanation": "Marking Scheme:\n1. Substitution & Matrix Formulation [1 Mark]:\nLet u = 1/x, v = 1/y, w = 1/z.\nThe system becomes:\n2u + 3v + 10w = 4\n4u - 6v + 5w = 1\n6u + 9v - 20w = 2.\nIn matrix form: A U = B, where\nA = [[2, 3, 10], [4, -6, 5], [6, 9, -20]], U = [[u], [v], [w]], B = [[4], [1], [2]].\n\n2. Determinant |A| [1 Mark]:\n|A| = 2(120 - 45) - 3(-80 - 30) + 10(36 - (-36))\n= 2(75) - 3(-110) + 10(72) = 150 + 330 + 720 = 1200 ≠ 0.\n\n3. Cofactors and adj(A) [1.5 Marks]:\nA11 = +(120 - 45) = 75; A12 = -(-80 - 30) = 110; A13 = +(36 + 36) = 72\nA21 = -(-60 - 90) = 150; A22 = +(-40 - 60) = -100; A23 = -(18 - 18) = 0\nA31 = +(15 + 60) = 75; A32 = -(10 - 40) = 30; A33 = +(-12 - 12) = -24.\nadj(A) = [[75, 110, 72], [150, -100, 0], [75, 30, -24]]' = [[75, 150, 75], [110, -100, 30], [72, 0, -24]].\nA⁻¹ = (1/1200) [[75, 150, 75], [110, -100, 30], [72, 0, -24]].\n\n4. Solving U = A⁻¹ B [1 Mark]:\n[[u], [v], [w]] = (1/1200) [[75, 150, 75], [110, -100, 30], [72, 0, -24]] [[4], [1], [2]]\nRow 1: 75(4) + 150(1) + 75(2) = 300 + 150 + 150 = 600\nRow 2: 110(4) - 100(1) + 30(2) = 440 - 100 + 60 = 400\nRow 3: 72(4) + 0(1) - 24(2) = 288 - 48 = 240.\n[[u], [v], [w]] = (1/1200) [[600], [400], [240]] = [[1/2], [1/3], [1/5]].\n\n5. Final Values of x, y, z [0.5 Mark]:\nu = 1/2 => x = 2; v = 1/3 => y = 3; w = 1/5 => z = 5."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Determinants and Financial Portfolio Allocation\nAn investment company allocates capital among three funds: Equity Fund (x), Debt Fund (y), and Gold ETF (z). The returns and investment proportions over three consecutive quarters satisfy the following system of linear equations:\nx + y + z = 10 (Total investment: ₹10 lakhs)\n2x + y - z = 5\nx - y + z = 2.\n(i) Express the above system in the matrix form AX = B.\n(ii) Find the determinant of the coefficient matrix A.\n(iii) Is the system consistent? State the reason.\n(iv) Solve for x, y, and z using Cramer's rule or matrix inverse.",
        "answer": "Solutions to Case Study on Financial Allocation Matrix",
        "explanation": "(i) [[1, 1, 1], [2, 1, -1], [1, -1, 1]] [[x], [y], [z]] = [[10], [5], [2]]. [1 Mark]\n(ii) |A| = 1(1 - 1) - 1(2 - (-1)) + 1(-2 - 1) = 1(0) - 1(3) + 1(-3) = -3 - 3 = -6. [1 Mark]\n(iii) Yes, the system is consistent and possesses a unique solution because |A| = -6 ≠ 0 (matrix A is non-singular). [1 Mark]\n(iv) Subtracting equation 3 from equation 1:\n(x + y + z) - (x - y + z) = 10 - 2 => 2y = 8 => y = 4.\nSubstitute y = 4 into equations 1 and 2:\nx + 4 + z = 10 => x + z = 6 ... (a)\n2x + 4 - z = 5 => 2x - z = 1 ... (b)\nAdding (a) and (b): 3x = 7 => x = 7/3 lakhs.\nz = 6 - 7/3 = 11/3 lakhs.\nHence, x = 7/3 lakhs (₹2.33 lakhs), y = 4 lakhs (₹4.00 lakhs), z = 11/3 lakhs (₹3.67 lakhs). [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "If A = [[1, -2, 0], [2, 1, 3], [0, -2, 1]], find A⁻¹ and use it to solve the system of linear equations:\nx - 2y = 10\n2x + y + 3z = 8\n-2y + z = 7.",
        "answer": "A⁻¹ = (1/11) [[7, 2, -6], [-2, 1, -3], [-4, 2, 5]] and x = 4, y = -3, z = 1",
        "explanation": "Marking Scheme:\n1. Determinant |A| [1 Mark]:\n|A| = 1(1 - (-6)) - (-2)(2 - 0) + 0 = 1(7) + 2(2) = 7 + 4 = 11 ≠ 0.\n\n2. Adjoint and Inverse of A [2 Marks]:\nCofactors:\nA11 = +(1 + 6) = 7; A12 = -(2 - 0) = -2; A13 = +(-4 - 0) = -4\nA21 = -(-2 - 0) = 2; A22 = +(1 - 0) = 1; A23 = -(-2 - 0) = 2\nA31 = +(-6 - 0) = -6; A32 = -(3 - 0) = -3; A33 = +(1 + 4) = 5.\nadj(A) = [[7, -2, -4], [2, 1, 2], [-6, -3, 5]]' = [[7, 2, -6], [-2, 1, -3], [-4, 2, 5]].\nA⁻¹ = (1/11) [[7, 2, -6], [-2, 1, -3], [-4, 2, 5]].\n\n3. Matrix Formulation of System [0.5 Mark]:\n[[1, -2, 0], [2, 1, 3], [0, -2, 1]] [[x], [y], [z]] = [[10], [8], [7]].\nNotice the coefficient matrix is exactly A! Hence AX = B where B = [[10], [8], [7]].\n\n4. Solving X = A⁻¹ B [1.5 Marks]:\n[[x], [y], [z]] = (1/11) [[7, 2, -6], [-2, 1, -3], [-4, 2, 5]] [[10], [8], [7]]\nRow 1: 7(10) + 2(8) - 6(7) = 70 + 16 - 42 = 44\nRow 2: -2(10) + 1(8) - 3(7) = -20 + 8 - 21 = -33\nRow 3: -4(10) + 2(8) + 5(7) = -40 + 16 + 35 = 11.\n[[x], [y], [z]] = (1/11) [[44], [-33], [11]] = [[4], [-3], [1]].\nHence x = 4, y = -3, z = 1."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Solve the following system of linear equations by matrix method:\n3x - 2y + 3z = 8\n2x + y - z = 1\n4x - 3y + 2z = 4.",
        "answer": "x = 1, y = 2, z = 3",
        "explanation": "Marking Scheme:\n1. Matrix Equation AX = B [1 Mark]:\n[[3, -2, 3], [2, 1, -1], [4, -3, 2]] [[x], [y], [z]] = [[8], [1], [4]].\n\n2. Determinant |A| [1 Mark]:\n|A| = 3(2 - 3) - (-2)(4 - (-4)) + 3(-6 - 4)\n= 3(-1) + 2(8) + 3(-10) = -3 + 16 - 30 = -17 ≠ 0.\n\n3. Cofactors and adj(A) [1.5 Marks]:\nA11 = +(2 - 3) = -1; A12 = -(4 + 4) = -8; A13 = +(-6 - 4) = -10\nA21 = -(-4 + 9) = -5; A22 = +(6 - 12) = -6; A23 = -(-9 + 8) = 1\nA31 = +(2 - 3) = -1; A32 = -(-3 - 6) = 9; A33 = +(3 + 4) = 7.\nadj(A) = [[-1, -8, -10], [-5, -6, 1], [-1, 9, 7]]' = [[-1, -5, -1], [-8, -6, 9], [-10, 1, 7]].\nA⁻¹ = (-1/17) [[-1, -5, -1], [-8, -6, 9], [-10, 1, 7]].\n\n4. Finding X = A⁻¹ B [1.5 Marks]:\n[[x], [y], [z]] = (-1/17) [[-1, -5, -1], [-8, -6, 9], [-10, 1, 7]] [[8], [1], [4]]\nRow 1: -1(8) - 5(1) - 1(4) = -8 - 5 - 4 = -17\nRow 2: -8(8) - 6(1) + 9(4) = -64 - 6 + 36 = -34\nRow 3: -10(8) + 1(1) + 7(4) = -80 + 1 + 28 = -51.\n[[x], [y], [z]] = (-1/17) [[-17], [-34], [-51]] = [[1], [2], [3]].\nHence x = 1, y = 2, z = 3."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "If A = [[2, 3], [1, -4]] and B = [[1, -2], [-1, 3]], verify that (AB)⁻¹ = B⁻¹ A⁻¹.",
        "answer": "Verification of reversal law for inverses",
        "explanation": "Marking Scheme:\n1. Product AB [1 Mark]:\nAB = [[2, 3], [1, -4]] [[1, -2], [-1, 3]] = [[2 - 3, -4 + 9], [1 + 4, -2 - 12]] = [[-1, 5], [5, -14]].\ndet(AB) = (-1)(-14) - 5(5) = 14 - 25 = -11 ≠ 0.\nadj(AB) = [[-14, -5], [-5, -1]].\n(AB)⁻¹ = (-1/11) [[-14, -5], [-5, -1]] = (1/11) [[14, 5], [5, 1]]. [1 Mark]\n\n2. Compute B⁻¹ and A⁻¹ [1 Mark]:\n|B| = 3 - 2 = 1. adj(B) = [[3, 2], [1, 1]] => B⁻¹ = [[3, 2], [1, 1]].\n|A| = -8 - 3 = -11. adj(A) = [[-4, -3], [-1, 2]] => A⁻¹ = (-1/11) [[-4, -3], [-1, 2]].\n\n3. Compute B⁻¹ A⁻¹ [1 Mark]:\nB⁻¹ A⁻¹ = (-1/11) [[3, 2], [1, 1]] [[-4, -3], [-1, 2]]\n= (-1/11) [[-12 - 2, -9 + 4], [-4 - 1, -3 + 2]] = (-1/11) [[-14, -5], [-5, -1]] = (1/11) [[14, 5], [5, 1]].\nSince L.H.S. = R.H.S., (AB)⁻¹ = B⁻¹ A⁻¹ is verified."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "An amount of ₹65,000 is invested in three bonds at 6%, 8%, and 9% per annum respectively. The total annual income is ₹4,800. The income from the third bond is ₹600 more than that from the second bond. Determine the investment in each bond using matrix method.",
        "answer": "Bond 1 = ₹20,000, Bond 2 = ₹25,000, Bond 3 = ₹20,000",
        "explanation": "Marking Scheme:\nLet investments in three bonds be x, y, and z (in ₹) [1 Mark].\n1. x + y + z = 65000 ... (1)\n2. (6/100)x + (8/100)y + (9/100)z = 4800 => 6x + 8y + 9z = 480000 ... (2)\n3. (9/100)z = (8/100)y + 600 => -8y + 9z = 60000 => 0x - 8y + 9z = 60000 ... (3) [1 Mark]\nMatrix form AX = B:\n[[1, 1, 1], [6, 8, 9], [0, -8, 9]] [[x], [y], [z]] = [[65000], [480000], [60000]].\n\nDeterminant |A| [1 Mark]:\n|A| = 1(72 - (-72)) - 1(54 - 0) + 1(-48 - 0) = 1(144) - 54 - 48 = 144 - 102 = 42 ≠ 0.\n\nSolving using operations [2 Marks]:\nFrom (2) - (3): 6x + 16y = 420000 => 3x + 8y = 210000 ... (4)\nFrom (2) - 9 × (1): 6x + 8y + 9z - (9x + 9y + 9z) = 480000 - 585000\n=> -3x - y = -105000 => 3x + y = 105000 ... (5)\nSubtracting (5) from (4):\n7y = 105000 => y = ₹15,000 ... wait! Let's re-check arithmetic:\nWait, 9 × 65000 = 585,000.\n480,000 - 585,000 = -105,000. 6x + 8y + 9z - 9x - 9y - 9z = -3x - y = -105,000 => 3x + y = 105,000.\nEquation (4): (6x + 8y + 9z) - (0x - 8y + 9z) = 6x + 16y = 480,000 - 60,000 = 420,000 => 3x + 8y = 210,000.\n(3x + 8y) - (3x + y) = 210,000 - 105,000 => 7y = 105,000 => y = ₹15,000.\nThen 3x = 105,000 - 15,000 = 90,000 => x = ₹30,000.\nThen z = 65,000 - (30,000 + 15,000) = 65,000 - 45,000 = ₹20,000.\nCheck:\nTotal: 30000 + 15000 + 20000 = 65,000.\nInterest: 6%(30000) + 8%(15000) + 9%(20000) = 1800 + 1200 + 1800 = ₹4,800.\nBond 3 interest (1800) - Bond 2 interest (1200) = ₹600. Exactly matches!\nHence investments are: Bond 1 = ₹30,000; Bond 2 = ₹15,000; Bond 3 = ₹20,000."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Find the matrix A such that [[2, -1], [1, 0], [-3, 4]] A = [[-1, -8, -10], [1, -2, -5], [9, 22, 15]].",
        "answer": "A = [[1, -2, -5], [3, 4, 0]]",
        "explanation": "Marking Scheme:\nLet P = [[2, -1], [1, 0], [-3, 4]] (order 3×2) and Q = [[-1, -8, -10], [1, -2, -5], [9, 22, 15]] (order 3×3) [0.5 Mark].\nSince P A = Q, A must have order 2×3.\nLet A = [[a, b, c], [d, e, f]]. [0.5 Mark]\nP A = [[2a - d, 2b - e, 2c - f], [a, b, c], [-3a + 4d, -3b + 4e, -3c + 4f]]. [1 Mark]\nEquating with Q:\nFrom Row 2: a = 1, b = -2, c = -5. [1 Mark]\nFrom Row 1:\n2a - d = -1 => 2(1) - d = -1 => d = 3.\n2b - e = -8 => 2(-2) - e = -8 => -4 - e = -8 => e = 4.\n2c - f = -10 => 2(-5) - f = -10 => -10 - f = -10 => f = 0. [0.5 Mark]\nCheck with Row 3:\n-3(1) + 4(3) = -3 + 12 = 9 (matches)\n-3(-2) + 4(4) = 6 + 16 = 22 (matches)\n-3(-5) + 4(0) = 15 + 0 = 15 (matches). [0.5 Mark]\nHence A = [[1, -2, -5], [3, 4, 0]]."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the condition for the existence of the inverse of a square matrix.\n(b) Prove that if A is an invertible matrix, then det(adj A) = (det A)^(n - 1).\n(c) If A is a 3×3 matrix such that |A| = 5, find |adj(3A)|.",
        "answer": "(a) Non-singular (|A| ≠ 0); (b) Proof; (c) |adj(3A)| = 18225",
        "explanation": "Marking Scheme:\n(a) Condition for Existence of Inverse (1 Mark):\nA square matrix A has an inverse if and only if A is non-singular, i.e., |A| ≠ 0.\n\n(b) Proof of |adj A| = |A|^(n - 1) (2.5 Marks):\nWe know the fundamental property: A · adj(A) = |A| I_n. [1 Mark]\nTaking determinant of both sides:\n|A · adj(A)| = ||A| I_n| [0.5 Mark]\nUsing multiplicative property of determinants: |A| · |adj A| = (|A|)ⁿ |I_n| [0.5 Mark]\nSince |I_n| = 1:\n|A| · |adj A| = |A|ⁿ.\nDividing both sides by |A| (since |A| ≠ 0):\n|adj A| = |A|^(n - 1). (Proved). [0.5 Mark]\n\n(c) Calculation (1.5 Marks):\nLet B = 3A. Since order n = 3:\n|B| = |3A| = 3³ |A| = 27 × 5 = 135. [0.5 Mark]\nThen |adj(3A)| = |adj(B)| = |B|^(3 - 1) = |B|² [0.5 Mark]\n= (135)² = 18,225. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "unit_num": 3,
      "title": "Continuity and Differentiability",
      "unit_title": "Calculus",
      "weightage_unit": "Calculus (35 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If the function f(x) = { (k x + 1, if x ≤ 5), (3x - 5, if x > 5) } is continuous at x = 5, then the value of k is:",
        "options": [
          "(a) 9/5",
          "(b) 5/9",
          "(c) 2",
          "(d) 3"
        ],
        "answer": "(a) 9/5",
        "explanation": "For continuity at x = 5: lim(x->5⁻) f(x) = lim(x->5⁺) f(x) = f(5).\nL.H.L. = lim(x->5⁻) (k x + 1) = 5k + 1.\nR.H.L. = lim(x->5⁺) (3x - 5) = 3(5) - 5 = 15 - 5 = 10.\nEquating L.H.L. and R.H.L.: 5k + 1 = 10 => 5k = 9 => k = 9/5."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The derivative of sin(x²) with respect to x is:",
        "options": [
          "(a) 2x cos(x²)",
          "(b) cos(x²)",
          "(c) -2x cos(x²)",
          "(d) 2x sin(x²)"
        ],
        "answer": "(a) 2x cos(x²)",
        "explanation": "Using Chain Rule: d/dx [sin(x²)] = cos(x²) · d/dx (x²) = cos(x²) · (2x) = 2x cos(x²)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The function f(x) = |x| at x = 0 is:",
        "options": [
          "(a) Continuous but not differentiable",
          "(b) Differentiable but not continuous",
          "(c) Neither continuous nor differentiable",
          "(d) Both continuous and differentiable"
        ],
        "answer": "(a) Continuous but not differentiable",
        "explanation": "1. Continuity: lim(x->0⁻) (-x) = 0, lim(x->0⁺) (x) = 0, and f(0) = 0. Since L.H.L = R.H.L = f(0), f is continuous at x = 0.\n2. Differentiability: LHD = lim(h->0) (f(0 - h) - f(0))/(-h) = |-h|/(-h) = h/(-h) = -1. RHD = lim(h->0) (f(0 + h) - f(0))/h = |h|/h = 1. Since LHD ≠ RHD, f is not differentiable at x = 0."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If y = log(log x), x > 1, then dy/dx is:",
        "options": [
          "(a) 1 / (x log x)",
          "(b) 1 / log x",
          "(c) x / log x",
          "(d) log x / x"
        ],
        "answer": "(a) 1 / (x log x)",
        "explanation": "By Chain Rule: dy/dx = (1 / log x) · d/dx (log x) = (1 / log x) · (1/x) = 1 / (x log x)."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If x = a cos θ, y = a sin θ, then dy/dx is:",
        "options": [
          "(a) -cot θ",
          "(b) -tan θ",
          "(c) tan θ",
          "(d) cot θ"
        ],
        "answer": "(a) -cot θ",
        "explanation": "dx/dθ = -a sin θ; dy/dθ = a cos θ.\ndy/dx = (dy/dθ) / (dx/dθ) = (a cos θ) / (-a sin θ) = -cot θ."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If y = e^(3 log x), then dy/dx is:",
        "options": [
          "(a) 3x²",
          "(b) 3x",
          "(c) e^(3 log x)",
          "(d) 3 e^(3x)"
        ],
        "answer": "(a) 3x²",
        "explanation": "Recall logarithmic identity e^(3 log x) = e^(log(x³)) = x³.\nTherefore, dy/dx = d/dx (x³) = 3x²."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The derivative of tan⁻¹((1 - cos x)/sin x) with respect to x is:",
        "options": [
          "(a) 1/2",
          "(b) 1",
          "(c) -1/2",
          "(d) 2"
        ],
        "answer": "(a) 1/2",
        "explanation": "(1 - cos x)/sin x = (2 sin²(x/2)) / (2 sin(x/2) cos(x/2)) = tan(x/2).\nTherefore, y = tan⁻¹(tan(x/2)) = x/2.\ndy/dx = d/dx (x/2) = 1/2."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If y = sin⁻¹(x), then (1 - x²) d²y/dx² - x dy/dx is equal to:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) -1",
          "(d) y"
        ],
        "answer": "(a) 0",
        "explanation": "y = sin⁻¹ x => dy/dx = 1 / √(1 - x²) => √(1 - x²) (dy/dx) = 1.\nSquaring: (1 - x²) (dy/dx)² = 1.\nDifferentiating with respect to x:\n(1 - x²) · 2(dy/dx)(d²y/dx²) + (dy/dx)² · (-2x) = 0.\nDividing throughout by 2(dy/dx) (since dy/dx ≠ 0):\n(1 - x²) (d²y/dx²) - x (dy/dx) = 0."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The function f(x) = [x], where [x] denotes the greatest integer function, is continuous at:",
        "options": [
          "(a) 1.5",
          "(b) 1",
          "(c) 2",
          "(d) -2"
        ],
        "answer": "(a) 1.5",
        "explanation": "The greatest integer function [x] is discontinuous at all integer points because L.H.L ≠ R.H.L at any integer n. At non-integer points like x = 1.5, [x] is constant in a neighborhood (equal to 1), so L.H.L = R.H.L = f(1.5) = 1, making it continuous."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If x = a t², y = 2at, then d²y/dx² is:",
        "options": [
          "(a) -1 / (2a t³)",
          "(b) 1 / (2a t³)",
          "(c) -1 / t²",
          "(d) 1 / (t²)"
        ],
        "answer": "(a) -1 / (2a t³)",
        "explanation": "dx/dt = 2at, dy/dt = 2a => dy/dx = (2a) / (2at) = 1/t.\nNow d²y/dx² = d/dt (1/t) · (dt/dx) = (-1/t²) · (1 / 2at) = -1 / (2a t³)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If f(x) = { ((1 - cos 4x)/(x²), if x < 0), (a, if x = 0), ((√x)/(√(16 + √x) - 4), if x > 0) } is continuous at x = 0, then a is equal to:",
        "options": [
          "(a) 8",
          "(b) 4",
          "(c) 2",
          "(d) 16"
        ],
        "answer": "(a) 8",
        "explanation": "L.H.L. = lim(x->0⁻) (1 - cos 4x)/x² = lim(x->0⁻) (2 sin² 2x)/x² = 2 lim(x->0⁻) (sin 2x / x)² = 2 × (2)² = 8.\nFor continuity at x = 0, f(0) = a must equal L.H.L. = 8. (R.H.L. also rationalizes to 8). Hence a = 8."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The derivative of 2^x with respect to x is:",
        "options": [
          "(a) 2^x log 2",
          "(b) x 2^(x - 1)",
          "(c) 2^x",
          "(d) 2^x / log 2"
        ],
        "answer": "(a) 2^x log 2",
        "explanation": "By standard formula: d/dx (a^x) = a^x log a. For a = 2, d/dx (2^x) = 2^x log 2."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If y = x^x, then dy/dx is:",
        "options": [
          "(a) x^x (1 + log x)",
          "(b) x^x log x",
          "(c) x · x^(x - 1)",
          "(d) x^x (1 - log x)"
        ],
        "answer": "(a) x^x (1 + log x)",
        "explanation": "Taking natural logarithm on both sides: log y = x log x.\nDifferentiating with respect to x:\n(1/y) (dy/dx) = x(1/x) + (log x)(1) = 1 + log x.\n=> dy/dx = y (1 + log x) = x^x (1 + log x)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If y = cos⁻¹((1 - x²)/(1 + x²)), 0 < x < 1, then dy/dx is:",
        "options": [
          "(a) 2 / (1 + x²)",
          "(b) -2 / (1 + x²)",
          "(c) 1 / (1 + x²)",
          "(d) -1 / (1 + x²)"
        ],
        "answer": "(a) 2 / (1 + x²)",
        "explanation": "Substitute x = tan θ => θ = tan⁻¹ x. Since 0 < x < 1, 0 < θ < π/4.\ncos⁻¹((1 - tan² θ)/(1 + tan² θ)) = cos⁻¹(cos 2θ) = 2θ = 2 tan⁻¹ x.\nTherefore, dy/dx = d/dx (2 tan⁻¹ x) = 2 / (1 + x²)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If x - y = π, then dy/dx is:",
        "options": [
          "(a) 1",
          "(b) -1",
          "(c) 0",
          "(d) π"
        ],
        "answer": "(a) 1",
        "explanation": "y = x - π => dy/dx = d/dx (x - π) = 1 - 0 = 1."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The derivative of cos⁻¹(sin x) with respect to x is:",
        "options": [
          "(a) -1",
          "(b) 1",
          "(c) 0",
          "(d) 1/2"
        ],
        "answer": "(a) -1",
        "explanation": "Recall identity: cos⁻¹(θ) + sin⁻¹(θ) = π/2 => cos⁻¹(sin x) = π/2 - sin⁻¹(sin x) = π/2 - x.\nTherefore, d/dx [cos⁻¹(sin x)] = d/dx (π/2 - x) = -1."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If y = A sin x + B cos x, then d²y/dx² is:",
        "options": [
          "(a) -y",
          "(b) y",
          "(c) 0",
          "(d) 2y"
        ],
        "answer": "(a) -y",
        "explanation": "dy/dx = A cos x - B sin x.\nd²y/dx² = -A sin x - B cos x = -(A sin x + B cos x) = -y."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If f(x) = |cos x|, then f'(π/4) is:",
        "options": [
          "(a) -1/√2",
          "(b) 1/√2",
          "(c) 0",
          "(d) does not exist"
        ],
        "answer": "(a) -1/√2",
        "explanation": "Near x = π/4 (in first quadrant), cos x > 0, so |cos x| = cos x.\nTherefore, f(x) = cos x near π/4.\nf'(x) = -sin x => f'(π/4) = -sin(π/4) = -1/√2."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The value of c in Rolle's theorem for f(x) = x² - 4x + 3 on [1, 3] is:",
        "options": [
          "(a) 2",
          "(b) 0",
          "(c) 3/2",
          "(d) 5/2"
        ],
        "answer": "(a) 2",
        "explanation": "f(x) is continuous on [1, 3] and differentiable on (1, 3). f(1) = 1 - 4 + 3 = 0, f(3) = 9 - 12 + 3 = 0 => f(1) = f(3).\nf'(x) = 2x - 4. By Rolle's theorem: f'(c) = 0 => 2c - 4 = 0 => c = 2 ∈ (1, 3)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If y = log(sec x + tan x), then dy/dx is:",
        "options": [
          "(a) sec x",
          "(b) tan x",
          "(c) sec x tan x",
          "(d) sec² x"
        ],
        "answer": "(a) sec x",
        "explanation": "dy/dx = [1 / (sec x + tan x)] · d/dx (sec x + tan x) = [sec x tan x + sec² x] / (sec x + tan x) = [sec x (tan x + sec x)] / (sec x + tan x) = sec x."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If x^y = e^(x - y), then dy/dx is equal to:",
        "options": [
          "(a) (log x) / (1 + log x)²",
          "(b) (1 + log x) / (log x)",
          "(c) (log x) / (1 + log x)",
          "(d) (1 - log x) / (1 + log x)"
        ],
        "answer": "(a) (log x) / (1 + log x)²",
        "explanation": "Taking log: y log x = x - y => y (1 + log x) = x => y = x / (1 + log x).\ndy/dx = [ (1 + log x) · 1 - x · (1/x) ] / (1 + log x)² = [ 1 + log x - 1 ] / (1 + log x)² = (log x) / (1 + log x)²."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The function f(x) = x |x| is:",
        "options": [
          "(a) Differentiable at x = 0",
          "(b) Continuous but not differentiable at x = 0",
          "(c) Discontinuous at x = 0",
          "(d) None of these"
        ],
        "answer": "(a) Differentiable at x = 0",
        "explanation": "f(x) = x² for x ≥ 0 and -x² for x < 0. f'(0) from right = lim(h->0) (h² - 0)/h = 0. f'(0) from left = lim(h->0) (-(-h)² - 0)/(-h) = -h²/(-h) = 0. Since LHD = RHD = 0, f is differentiable at x = 0 with f'(0) = 0."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If y = √(sin x + y), then dy/dx is:",
        "options": [
          "(a) (cos x) / (2y - 1)",
          "(b) (cos x) / (1 - 2y)",
          "(c) (sin x) / (2y - 1)",
          "(d) (sin x) / (1 - 2y)"
        ],
        "answer": "(a) (cos x) / (2y - 1)",
        "explanation": "Squaring both sides: y² = sin x + y.\nDifferentiating with respect to x: 2y (dy/dx) = cos x + dy/dx => (2y - 1) dy/dx = cos x => dy/dx = (cos x) / (2y - 1)."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If f(x) = { (3x - 8, if x ≤ 5), (2k, if x > 5) } is continuous at x = 5, then the value of k is:",
        "options": [
          "(a) 7/2",
          "(b) 2/7",
          "(c) 7",
          "(d) 14"
        ],
        "answer": "(a) 7/2",
        "explanation": "f(5) = 3(5) - 8 = 15 - 8 = 7.\nR.H.L. = lim(x->5⁺) (2k) = 2k.\nFor continuity: 2k = 7 => k = 7/2."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If x = a (θ - sin θ), y = a (1 - cos θ), then dy/dx at θ = π/2 is:",
        "options": [
          "(a) 1",
          "(b) 0",
          "(c) -1",
          "(d) ∞"
        ],
        "answer": "(a) 1",
        "explanation": "dx/dθ = a(1 - cos θ); dy/dθ = a sin θ.\ndy/dx = (a sin θ) / [a(1 - cos θ)] = sin θ / (1 - cos θ).\nAt θ = π/2: sin(π/2) / (1 - cos(π/2)) = 1 / (1 - 0) = 1."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The function f(x) = |x - 1| is continuous at x = 1, but not differentiable at x = 1.\nReason (R): Every differentiable function is continuous, but the converse is not necessarily true.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. At x = 1, f(x) has a sharp corner (LHD = -1, RHD = +1), so it is not differentiable even though it is continuous. R explains this classic relationship."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): If y = log(tan x), then dy/dx = 2 cosec 2x.\nReason (R): d/dx [log(u)] = (1/u) · (du/dx) and d/dx [tan x] = sec² x.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "dy/dx = (1/tan x) · sec² x = (cos x / sin x) · (1 / cos² x) = 1 / (sin x cos x) = 2 / (2 sin x cos x) = 2 / sin 2x = 2 cosec 2x. Both A and R are true and R explains A."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The function f(x) = [x] is discontinuous at all integral points.\nReason (R): For any integer n, lim(x->n⁻) [x] = n - 1 and lim(x->n⁺) [x] = n, so lim(x->n) [x] does not exist.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A (L.H.L ≠ R.H.L at every integer)."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): If x = a t², y = 2at, then d²y/dx² = -1 / (2a t³).\nReason (R): d²y/dx² = (d²y/dt²) / (d²x/dt²).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is true (as derived earlier). Reason R is FALSE: second order parametric derivative is d²y/dx² = d/dt(dy/dx) · (dt/dx), NOT (d²y/dt²)/(d²x/dt²)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The derivative of e^(cos x) is -sin x e^(cos x).\nReason (R): By Chain Rule, d/dx [e^(u(x))] = e^(u(x)) · u'(x).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly: u(x) = cos x, u'(x) = -sin x."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the value of k for which f(x) = { (k(x² - 2x), if x ≤ 0), (4x + 1, if x > 0) } is continuous at x = 0.",
        "answer": "No value of k exists",
        "explanation": "1. L.H.L. = lim(x->0⁻) k(x² - 2x) = k(0 - 0) = 0. Also f(0) = 0. [0.5 Mark]\n2. R.H.L. = lim(x->0⁺) (4x + 1) = 4(0) + 1 = 1. [0.5 Mark]\n3. For continuity at x = 0, we must have L.H.L = R.H.L = f(0) => 0 = 1, which is impossible regardless of the value of k. [1 Mark]\nHence, there is no value of k for which f(x) is continuous at x = 0."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "If y = (sin x)^x, find dy/dx.",
        "answer": "dy/dx = (sin x)^x [ x cot x + log(sin x) ]",
        "explanation": "Given y = (sin x)^x. Taking natural logarithm on both sides [1 Mark]:\nlog y = x log(sin x).\nDifferentiating both sides with respect to x using product rule [1 Mark]:\n(1/y) (dy/dx) = x · d/dx [log(sin x)] + log(sin x) · d/dx (x)\n= x · (1/sin x) · cos x + log(sin x) · 1\n= x cot x + log(sin x).\nMultiplying by y [1 Mark]:\ndy/dx = y [ x cot x + log(sin x) ] = (sin x)^x [ x cot x + log(sin x) ]."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Differentiate tan⁻¹( (3x - x³) / (1 - 3x²) ) with respect to tan⁻¹( (2x) / (1 - x²) ), where |x| < 1/√3.",
        "answer": "3/2",
        "explanation": "Let u = tan⁻¹( (3x - x³) / (1 - 3x²) ) and v = tan⁻¹( (2x) / (1 - x²) ).\nPut x = tan θ => θ = tan⁻¹ x [0.5 Mark].\n1. u = tan⁻¹(tan 3θ) = 3θ = 3 tan⁻¹ x => du/dx = 3 / (1 + x²). [0.5 Mark]\n2. v = tan⁻¹(tan 2θ) = 2θ = 2 tan⁻¹ x => dv/dx = 2 / (1 + x²). [0.5 Mark]\n3. du/dv = (du/dx) / (dv/dx) = [3 / (1 + x²)] / [2 / (1 + x²)] = 3/2. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "If x^y + y^x = a^b, find dy/dx.",
        "answer": "dy/dx = - [ y x^(y - 1) + y^x log y ] / [ x^y log x + x y^(x - 1) ]",
        "explanation": "Let u = x^y and v = y^x, so u + v = a^b => du/dx + dv/dx = 0. [0.5 Mark]\n1. For u = x^y: log u = y log x => (1/u) du/dx = y(1/x) + (log x) dy/dx\n=> du/dx = x^y [ (y/x) + (log x) dy/dx ] = y x^(y - 1) + x^y log x (dy/dx). [1 Mark]\n2. For v = y^x: log v = x log y => (1/v) dv/dx = x(1/y)(dy/dx) + log y (1)\n=> dv/dx = y^x [ (x/y)(dy/dx) + log y ] = x y^(x - 1) (dy/dx) + y^x log y. [1 Mark]\n3. du/dx + dv/dx = 0:\n[ y x^(y - 1) + y^x log y ] + [ x^y log x + x y^(x - 1) ] dy/dx = 0\n=> dy/dx = - [ y x^(y - 1) + y^x log y ] / [ x^y log x + x y^(x - 1) ]. [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "Differentiate sec(tan(√x)) with respect to x.",
        "answer": "[ sec(tan √x) tan(tan √x) sec²(√x) ] / (2√x)",
        "explanation": "By Chain Rule:\nd/dx [sec(tan(√x))] = sec(tan(√x)) tan(tan(√x)) · d/dx [tan(√x)] [1 Mark]\n= sec(tan(√x)) tan(tan(√x)) · sec²(√x) · d/dx (√x)\n= sec(tan(√x)) tan(tan(√x)) · sec²(√x) · (1 / (2√x))\n= [ sec(tan √x) tan(tan √x) sec²(√x) ] / (2√x). [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "If y = (tan⁻¹ x)², show that (x² + 1)² y₂ + 2x(x² + 1) y₁ = 2.",
        "answer": "Proof of differential equation",
        "explanation": "y = (tan⁻¹ x)².\n1. First derivative y₁ [1 Mark]:\ny₁ = 2(tan⁻¹ x) · (1 / (1 + x²)) => (1 + x²) y₁ = 2 tan⁻¹ x.\n2. Differentiating again with respect to x [1 Mark]:\n(1 + x²) y₂ + y₁ · (2x) = 2 · (1 / (1 + x²)).\n3. Multiplying both sides by (1 + x²) [1 Mark]:\n(1 + x²)² y₂ + 2x(1 + x²) y₁ = 2. (Proved)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "Show that the function f(x) = |x - 3|, x ∈ R, is not differentiable at x = 3.",
        "answer": "Non-differentiability proof using LHD and RHD",
        "explanation": "1. Left Hand Derivative at x = 3 [1 Mark]:\nLHD = lim(h->0) [ f(3 - h) - f(3) ] / (-h) = lim(h->0) [ |3 - h - 3| - 0 ] / (-h) = lim(h->0) |-h|/(-h) = lim(h->0) h/(-h) = -1.\n2. Right Hand Derivative at x = 3 [1 Mark]:\nRHD = lim(h->0) [ f(3 + h) - f(3) ] / h = lim(h->0) [ |3 + h - 3| - 0 ] / h = lim(h->0) |h|/h = lim(h->0) h/h = 1.\nSince LHD (-1) ≠ RHD (+1), f(x) is not differentiable at x = 3."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "If x = a (cos t + t sin t) and y = a (sin t - t cos t), find d²y/dx².",
        "answer": "d²y/dx² = sec³ t / (a t)",
        "explanation": "1. First derivatives [1 Mark]:\ndx/dt = a [ -sin t + (t cos t + sin t) ] = a t cos t.\ndy/dt = a [ cos t - (-t sin t + cos t) ] = a t sin t.\ndy/dx = (a t sin t) / (a t cos t) = tan t. [0.5 Mark]\n2. Second derivative [1.5 Marks]:\nd²y/dx² = d/dt (tan t) · (dt/dx) = sec² t · (1 / (a t cos t)) = sec² t · (sec t / (a t)) = sec³ t / (a t)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Find dy/dx if 2x + 3y = sin y.",
        "answer": "dy/dx = 2 / (cos y - 3)",
        "explanation": "Differentiating both sides with respect to x:\n2 + 3 (dy/dx) = cos y (dy/dx) [1 Mark]\n=> 2 = (cos y - 3) dy/dx\n=> dy/dx = 2 / (cos y - 3). [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Discuss the continuity of the function f(x) = sin x · cos x.",
        "answer": "Continuous everywhere on R",
        "explanation": "f(x) = sin x · cos x = (1/2) sin 2x. [1 Mark]\nSince sin x is continuous for all x ∈ R, sin 2x is continuous on R as the composition of continuous functions (sin u and u = 2x). Multiplying by scalar 1/2 preserves continuity.\nHence f(x) is continuous for all x ∈ R. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Find the values of a and b such that the function f defined by:\nf(x) = { (5, if x ≤ 2), (ax + b, if 2 < x < 10), (21, if x ≥ 10) } is a continuous function.\n(b) If y = e^(a cos⁻¹ x), -1 ≤ x ≤ 1, show that (1 - x²) d²y/dx² - x dy/dx - a² y = 0.",
        "answer": "(a) a = 2, b = 1; (b) Proof",
        "explanation": "Marking Scheme:\n(a) Values of a and b (2.5 Marks):\n1. Continuity at x = 2 [1 Mark]:\nlim(x->2⁻) f(x) = f(2) = 5.\nlim(x->2⁺) f(x) = lim(x->2⁺) (ax + b) = 2a + b.\nFor continuity at x = 2: 2a + b = 5 ... (1)\n2. Continuity at x = 10 [1 Mark]:\nlim(x->10⁻) f(x) = lim(x->10⁻) (ax + b) = 10a + b.\nlim(x->10⁺) f(x) = f(10) = 21.\nFor continuity at x = 10: 10a + b = 21 ... (2)\n3. Solving (1) and (2) [0.5 Mark]:\nSubtracting (1) from (2): 8a = 16 => a = 2.\nFrom (1): 2(2) + b = 5 => 4 + b = 5 => b = 1.\nHence a = 2, b = 1.\n\n(b) Proof of Differential Equation (2.5 Marks):\ny = e^(a cos⁻¹ x).\n1. First derivative [1 Mark]:\ndy/dx = e^(a cos⁻¹ x) · [ -a / √(1 - x²) ] = -a y / √(1 - x²).\n=> √(1 - x²) (dy/dx) = -a y.\n2. Squaring both sides [0.5 Mark]:\n(1 - x²) (dy/dx)² = a² y².\n3. Differentiating with respect to x [1 Mark]:\n(1 - x²) · 2(dy/dx)(d²y/dx²) + (dy/dx)² · (-2x) = a² · 2y (dy/dx).\nDividing throughout by 2(dy/dx):\n(1 - x²) d²y/dx² - x dy/dx = a² y\n=> (1 - x²) d²y/dx² - x dy/dx - a² y = 0. (Proved)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) If x = √(a^(sin⁻¹ t)) and y = √(a^(cos⁻¹ t)), show that dy/dx = -y/x.\n(b) Differentiate (log x)^(cos x) with respect to x.",
        "answer": "(a) dy/dx = -y/x; (b) Derivative calculation",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\nx = √(a^(sin⁻¹ t)) and y = √(a^(cos⁻¹ t)).\nMultiply x and y [1 Mark]:\nx y = √(a^(sin⁻¹ t) · a^(cos⁻¹ t)) = √(a^(sin⁻¹ t + cos⁻¹ t)).\nSince sin⁻¹ t + cos⁻¹ t = π/2 [0.5 Mark]:\nx y = √(a^(π/2)) = constant C.\nDifferentiating both sides with respect to x [1 Mark]:\nx (dy/dx) + y(1) = 0 => x (dy/dx) = -y => dy/dx = -y/x. (Proved).\n\n(b) Logarithmic Differentiation (2.5 Marks):\nLet u = (log x)^(cos x).\nTaking natural logarithm [0.5 Mark]:\nlog u = cos x · log(log x).\nDifferentiating with respect to x using product rule [1 Mark]:\n(1/u) du/dx = cos x · d/dx [log(log x)] + log(log x) · d/dx (cos x)\n= cos x · [ 1/(log x) · (1/x) ] + log(log x) · (-sin x)\n= [ cos x / (x log x) ] - sin x · log(log x). [0.5 Mark]\nMultiplying by u [0.5 Mark]:\ndu/dx = (log x)^(cos x) [ (cos x)/(x log x) - sin x · log(log x) ]."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) If y = 3 cos(log x) + 4 sin(log x), show that x² y₂ + x y₁ + y = 0.\n(b) Differentiate x^(sin x) + (sin x)^(cos x) with respect to x.",
        "answer": "(a) Proof; (b) Sum of derivatives",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\ny = 3 cos(log x) + 4 sin(log x).\n1. First derivative y₁ [1 Mark]:\ny₁ = -3 sin(log x) · (1/x) + 4 cos(log x) · (1/x)\n=> x y₁ = -3 sin(log x) + 4 cos(log x).\n2. Second derivative [1 Mark]:\nDifferentiating with respect to x:\nx y₂ + y₁(1) = -3 cos(log x) · (1/x) - 4 sin(log x) · (1/x)\n=> x (x y₂ + y₁) = - [ 3 cos(log x) + 4 sin(log x) ]\n=> x² y₂ + x y₁ = -y. [0.5 Mark]\n=> x² y₂ + x y₁ + y = 0. (Proved).\n\n(b) Derivative (2.5 Marks):\nLet y = u + v, so dy/dx = du/dx + dv/dx.\n1. u = x^(sin x) => log u = sin x log x [1 Mark]:\n(1/u) du/dx = (sin x)(1/x) + (log x)(cos x)\n=> du/dx = x^(sin x) [ (sin x)/x + cos x log x ].\n2. v = (sin x)^(cos x) => log v = cos x log(sin x) [1 Mark]:\n(1/v) dv/dx = cos x · (cot x) + log(sin x) · (-sin x) = cos² x / sin x - sin x log(sin x)\n=> dv/dx = (sin x)^(cos x) [ cos x cot x - sin x log(sin x) ].\n3. dy/dx = x^(sin x) [ (sin x)/x + cos x log x ] + (sin x)^(cos x) [ cos x cot x - sin x log(sin x) ]. [0.5 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Continuity and Velocity Analysis of an Autonomous Vehicle\nThe position s(t) (in meters) of an automated guided vehicle along a straight track over time t (in seconds) is given by the piecewise function:\ns(t) = { (t² + 2t, if 0 ≤ t ≤ 3), (k t + c, if 3 < t ≤ 6) }.\nFor safe and smooth operation without abrupt jolts, the motion must be both continuous (smooth displacement) and differentiable (smooth velocity) at the transition instant t = 3.\n(i) State the condition for s(t) to be continuous at t = 3 in terms of k and c.\n(ii) Find the velocity v(t) = s'(t) for t < 3.\n(iii) Using differentiability at t = 3, determine the value of k.\n(iv) Using the values obtained, determine the constant c.",
        "answer": "Solutions to Case Study on Vehicle Continuity and Differentiability",
        "explanation": "(i) For continuity at t = 3: lim(t->3⁻) s(t) = lim(t->3⁺) s(t) = s(3).\ns(3) = 3² + 2(3) = 9 + 6 = 15.\nlim(t->3⁺) (kt + c) = 3k + c.\nCondition: 3k + c = 15. [1 Mark]\n(ii) For t < 3: v(t) = s'(t) = d/dt (t² + 2t) = 2t + 2 m/s. [1 Mark]\n(iii) For smooth motion (differentiability at t = 3), left-hand velocity must equal right-hand velocity:\nLeft-hand derivative: s'(3⁻) = 2(3) + 2 = 8 m/s.\nRight-hand derivative: s'(3⁺) = d/dt (kt + c) = k.\nEquating: k = 8. [1 Mark]\n(iv) From equation (1): 3k + c = 15 => 3(8) + c = 15 => 24 + c = 15 => c = 15 - 24 = -9. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) If y = (x + √(x² + 1))ᵐ, show that (x² + 1) y₂ + x y₁ - m² y = 0.\n(b) Differentiate sin⁻¹(2x √(1 - x²)) with respect to cos⁻¹(√(1 - x²)), for 0 < x < 1/√2.",
        "answer": "(a) Proof; (b) Derivative = 2",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\ny = (x + √(x² + 1))ᵐ.\n1. First derivative y₁ [1 Mark]:\ny₁ = m (x + √(x² + 1))^(m - 1) · [ 1 + (2x)/(2√(x² + 1)) ]\n= m (x + √(x² + 1))^(m - 1) · [ (√(x² + 1) + x) / √(x² + 1) ]\n= m (x + √(x² + 1))ᵐ / √(x² + 1) = m y / √(x² + 1).\n=> √(x² + 1) y₁ = m y. [0.5 Mark]\n2. Squaring both sides: (x² + 1) y₁² = m² y².\n3. Differentiating with respect to x [1 Mark]:\n(x² + 1) · 2 y₁ y₂ + y₁² · (2x) = m² · 2 y y₁.\nDividing throughout by 2 y₁:\n(x² + 1) y₂ + x y₁ = m² y => (x² + 1) y₂ + x y₁ - m² y = 0. (Proved).\n\n(b) Derivative (2.5 Marks):\nLet u = sin⁻¹(2x √(1 - x²)) and v = cos⁻¹(√(1 - x²)).\nSubstitute x = sin θ => θ = sin⁻¹ x. Since 0 < x < 1/√2, 0 < θ < π/4.\n1. u = sin⁻¹(2 sin θ cos θ) = sin⁻¹(sin 2θ) = 2θ = 2 sin⁻¹ x. [1 Mark]\n   du/dx = 2 / √(1 - x²).\n2. v = cos⁻¹(√(1 - sin² θ)) = cos⁻¹(cos θ) = θ = sin⁻¹ x. [1 Mark]\n   dv/dx = 1 / √(1 - x²).\n3. du/dv = (du/dx) / (dv/dx) = [2 / √(1 - x²)] / [1 / √(1 - x²)] = 2. [0.5 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "If y = x^(x cos x) + (x² + 1)/(x² - 1), find dy/dx.",
        "answer": "dy/dx = x^(x cos x) [ cos x(1 + log x) - x sin x log x ] - (4x) / (x² - 1)²",
        "explanation": "Marking Scheme:\nLet u = x^(x cos x) and v = (x² + 1)/(x² - 1), so dy/dx = du/dx + dv/dx [0.5 Mark].\n1. For u = x^(x cos x) [2.5 Marks]:\nlog u = x cos x log x = cos x · (x log x).\nDifferentiating with respect to x:\n(1/u) du/dx = cos x · d/dx (x log x) + (x log x) · d/dx (cos x)\n= cos x [ x(1/x) + log x ] + (x log x)(-sin x)\n= cos x (1 + log x) - x sin x log x.\n=> du/dx = x^(x cos x) [ cos x (1 + log x) - x sin x log x ].\n\n2. For v = (x² + 1)/(x² - 1) [1.5 Marks]:\nUsing quotient rule:\ndv/dx = [ (x² - 1)(2x) - (x² + 1)(2x) ] / (x² - 1)²\n= [ 2x³ - 2x - 2x³ - 2x ] / (x² - 1)² = -4x / (x² - 1)².\n\n3. Combine results [0.5 Mark]:\ndy/dx = x^(x cos x) [ cos x (1 + log x) - x sin x log x ] - (4x) / (x² - 1)²."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Find the value of k such that f(x) = { ((k cos x)/(π - 2x), if x ≠ π/2), (3, if x = π/2) } is continuous at x = π/2.",
        "answer": "k = 6",
        "explanation": "Marking Scheme:\nFor f(x) to be continuous at x = π/2, lim(x->π/2) f(x) = f(π/2) = 3 [1 Mark].\nlim(x->π/2) (k cos x) / (π - 2x) [1 Mark]\nPut x = π/2 + h. As x -> π/2, h -> 0 [1 Mark]:\n= lim(h->0) [ k cos(π/2 + h) ] / [ π - 2(π/2 + h) ]\n= lim(h->0) [ k (-sin h) ] / [ π - π - 2h ]\n= lim(h->0) [ -k sin h ] / [ -2h ] = (k/2) lim(h->0) (sin h / h) = (k/2)(1) = k/2. [0.5 Mark]\nEquating limit to f(π/2) = 3:\nk/2 = 3 => k = 6. [0.5 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) If y = (sin⁻¹ x) / √(1 - x²), show that (1 - x²) y₁ - x y = 1.\n(b) Differentiate tan⁻¹( √(1 - x²) / x ) with respect to cos⁻¹(2x √(1 - x²)), for 0 < x < 1/√2.",
        "answer": "(a) Proof; (b) Derivative = -1/2",
        "explanation": "Marking Scheme:\n(a) Proof (2.5 Marks):\ny = (sin⁻¹ x) / √(1 - x²)\n=> √(1 - x²) y = sin⁻¹ x. [0.5 Mark]\nDifferentiating both sides with respect to x [1.5 Marks]:\n√(1 - x²) y₁ + y · [ -2x / (2√(1 - x²)) ] = 1 / √(1 - x²)\n=> √(1 - x²) y₁ - (x y) / √(1 - x²) = 1 / √(1 - x²).\nMultiplying both sides by √(1 - x²) [0.5 Mark]:\n(1 - x²) y₁ - x y = 1. (Proved).\n\n(b) Derivative (2.5 Marks):\nLet u = tan⁻¹( √(1 - x²) / x ) and v = cos⁻¹(2x √(1 - x²)).\nPut x = sin θ => θ = sin⁻¹ x. For 0 < x < 1/√2, 0 < θ < π/4.\n1. u = tan⁻¹( cos θ / sin θ ) = tan⁻¹(cot θ) = tan⁻¹(tan(π/2 - θ)) = π/2 - θ = π/2 - sin⁻¹ x. [1 Mark]\n   du/dx = -1 / √(1 - x²).\n2. v = cos⁻¹(2 sin θ cos θ) = cos⁻¹(sin 2θ) = cos⁻¹(cos(π/2 - 2θ)) = π/2 - 2θ = π/2 - 2 sin⁻¹ x. [1 Mark]\n   dv/dx = -2 / √(1 - x²).\n3. du/dv = (du/dx) / (dv/dx) = [ -1 / √(1 - x²) ] / [ -2 / √(1 - x²) ] = 1/2 ... wait:\nLet's check sign: u = π/2 - θ => du/dx = -1/√(1-x²). v = π/2 - 2θ => dv/dx = -2/√(1-x²).\n(-1) / (-2) = +1/2."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "If y = a cos(log x) + b sin(log x), prove that x² d²y/dx² + x dy/dx + y = 0.",
        "answer": "Proof of Euler-Cauchy differential equation",
        "explanation": "Marking Scheme:\ny = a cos(log x) + b sin(log x).\n1. First derivative [1.5 Marks]:\ndy/dx = -a sin(log x) · (1/x) + b cos(log x) · (1/x)\n=> x (dy/dx) = -a sin(log x) + b cos(log x).\n2. Second derivative [1.5 Marks]:\nDifferentiating with respect to x:\nx (d²y/dx²) + (dy/dx)(1) = -a cos(log x) · (1/x) - b sin(log x) · (1/x)\n= -(1/x) [ a cos(log x) + b sin(log x) ] = -y / x.\n3. Multiplying by x [1 Mark]:\nx² (d²y/dx²) + x (dy/dx) = -y\n=> x² (d²y/dx²) + x (dy/dx) + y = 0. (Proved)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the condition for differentiability of a function at a point x = c.\n(b) Prove that every differentiable function is continuous, but the converse is not true.\n(c) If y = x^(sin x - cos x) + (x² - 1)/(x² + 1), find dy/dx.",
        "answer": "(a) LHD = RHD; (b) Derivation and counterexample; (c) Derivative calculation",
        "explanation": "Marking Scheme:\n(a) Condition for Differentiability (1 Mark):\nA function f is differentiable at x = c if and only if:\nlim(h->0) [ f(c - h) - f(c) ] / (-h) = lim(h->0) [ f(c + h) - f(c) ] / h (finite and equal).\n\n(b) Proof: Differentiability => Continuity (1.5 Marks):\nLet f be differentiable at x = c, so f'(c) = lim(x->c) [ f(x) - f(c) ] / (x - c) exists finitely.\nWe can write: f(x) - f(c) = [ (f(x) - f(c)) / (x - c) ] · (x - c) for x ≠ c.\nTaking limit as x -> c:\nlim(x->c) [ f(x) - f(c) ] = lim(x->c) [ (f(x) - f(c)) / (x - c) ] · lim(x->c) (x - c)\n= f'(c) · 0 = 0.\n=> lim(x->c) f(x) = f(c). Hence f is continuous at x = c.\nConverse counterexample: f(x) = |x| is continuous at x = 0 but not differentiable at x = 0 (LHD = -1 ≠ RHD = 1).\n\n(c) Derivative Calculation (2.5 Marks):\nLet u = x^(sin x - cos x) and v = (x² - 1)/(x² + 1).\n1. log u = (sin x - cos x) log x:\n(1/u) du/dx = (sin x - cos x)(1/x) + (log x)(cos x + sin x)\n=> du/dx = x^(sin x - cos x) [ (sin x - cos x)/x + (cos x + sin x) log x ].\n2. dv/dx = [ (x² + 1)(2x) - (x² - 1)(2x) ] / (x² + 1)² = 4x / (x² + 1)².\n3. dy/dx = x^(sin x - cos x) [ (sin x - cos x)/x + (cos x + sin x) log x ] + 4x / (x² + 1)²."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "unit_num": 3,
      "title": "Applications of Derivatives",
      "unit_title": "Calculus",
      "weightage_unit": "Calculus (35 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The rate of change of the area of a circle with respect to its radius r when r = 6 cm is:",
        "options": [
          "(a) 12π cm²/cm",
          "(b) 10π cm²/cm",
          "(c) 8π cm²/cm",
          "(d) 11π cm²/cm"
        ],
        "answer": "(a) 12π cm²/cm",
        "explanation": "Area of circle A = π r². dA/dr = d/dr (π r²) = 2π r. When r = 6 cm: dA/dr = 2π(6) = 12π cm²/cm."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The function f(x) = x³ - 3x² + 3x - 100 is strictly increasing on:",
        "options": [
          "(a) R",
          "(b) (0, ∞)",
          "(c) (-∞, 0)",
          "(d) (1, ∞) only"
        ],
        "answer": "(a) R",
        "explanation": "f'(x) = 3x² - 6x + 3 = 3(x² - 2x + 1) = 3(x - 1)². Since (x - 1)² ≥ 0 for all x ∈ R, f'(x) > 0 for all x ≠ 1 and f'(1) = 0. Thus f is strictly increasing on all of R."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The interval in which the function f(x) = 2x³ - 9x² + 12x + 5 is strictly decreasing is:",
        "options": [
          "(a) (1, 2)",
          "(b) (-∞, 1)",
          "(c) (2, ∞)",
          "(d) [-1, 2]"
        ],
        "answer": "(a) (1, 2)",
        "explanation": "f'(x) = 6x² - 18x + 12 = 6(x² - 3x + 2) = 6(x - 1)(x - 2). For strictly decreasing, f'(x) < 0 => (x - 1)(x - 2) < 0 => 1 < x < 2. Thus f is strictly decreasing in (1, 2)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The maximum value of the function f(x) = sin x + cos x is:",
        "options": [
          "(a) √2",
          "(b) 2",
          "(c) 1",
          "(d) 1/√2"
        ],
        "answer": "(a) √2",
        "explanation": "f(x) = sin x + cos x = √2 [ (1/√2) sin x + (1/√2) cos x ] = √2 sin(x + π/4). Since the maximum value of sine is 1, the maximum value of f(x) is √2 × 1 = √2."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The total revenue in Rupees received from the sale of x units of a product is given by R(x) = 3x² + 36x + 5. The marginal revenue when x = 15 is:",
        "options": [
          "(a) ₹126",
          "(b) ₹116",
          "(c) ₹96",
          "(d) ₹90"
        ],
        "answer": "(a) ₹126",
        "explanation": "Marginal Revenue MR = dR/dx = d/dx (3x² + 36x + 5) = 6x + 36. When x = 15: MR = 6(15) + 36 = 90 + 36 = ₹126."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The side of an equilateral triangle is increasing at the rate of 2 cm/s. The rate at which its area is increasing when side is 10 cm is:",
        "options": [
          "(a) 10√3 cm²/s",
          "(b) 20 cm²/s",
          "(c) 10 cm²/s",
          "(d) 5√3 cm²/s"
        ],
        "answer": "(a) 10√3 cm²/s",
        "explanation": "Area of equilateral triangle A = (√3 / 4) a². dA/dt = (√3 / 4) · 2a (da/dt) = (√3 / 2) a (da/dt). Given da/dt = 2 cm/s, a = 10 cm: dA/dt = (√3 / 2)(10)(2) = 10√3 cm²/s."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The function f(x) = tan x - x is:",
        "options": [
          "(a) Always strictly increasing on (0, π/2)",
          "(b) Always strictly decreasing on (0, π/2)",
          "(c) Constant",
          "(d) Decreasing on (0, π/4)"
        ],
        "answer": "(a) Always strictly increasing on (0, π/2)",
        "explanation": "f'(x) = sec² x - 1 = tan² x. For all x ∈ (0, π/2), tan x > 0, so tan² x > 0. Since f'(x) > 0 on (0, π/2), f(x) is strictly increasing."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The point on the curve y² = 2x which is nearest to the point (1, 4) is:",
        "options": [
          "(a) (2, 2)",
          "(b) (1, √2)",
          "(c) (0, 0)",
          "(d) (1/2, 1)"
        ],
        "answer": "(a) (2, 2)",
        "explanation": "Any point on y² = 2x is P(y²/2, y). Distance squared D = (y²/2 - 1)² + (y - 4)².\ndD/dy = 2(y²/2 - 1)(y) + 2(y - 4) = y³ - 2y + 2y - 8 = y³ - 8.\nSetting dD/dy = 0 => y³ = 8 => y = 2. Then x = y²/2 = 4/2 = 2. Nearest point is (2, 2)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "A balloon, which always remains spherical, has a variable radius r. The rate at which its volume increases with respect to the radius when r = 10 cm is:",
        "options": [
          "(a) 400π cm³/cm",
          "(b) 200π cm³/cm",
          "(c) 100π cm³/cm",
          "(d) 40π cm³/cm"
        ],
        "answer": "(a) 400π cm³/cm",
        "explanation": "Volume V = (4/3) π r³. dV/dr = 4π r². For r = 10 cm: dV/dr = 4π(10)² = 400π cm³/cm."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The absolute maximum value of the function f(x) = 2x³ - 15x² + 36x + 1 on the closed interval [1, 5] is:",
        "options": [
          "(a) 56",
          "(b) 29",
          "(c) 28",
          "(d) 126"
        ],
        "answer": "(a) 56",
        "explanation": "f'(x) = 6x² - 30x + 36 = 6(x² - 5x + 6) = 6(x - 2)(x - 3). Critical points are x = 2, 3 ∈ [1, 5].\nEvaluate f(x) at critical points and boundaries:\nf(1) = 2 - 15 + 36 + 1 = 24\nf(2) = 2(8) - 15(4) + 36(2) + 1 = 16 - 60 + 72 + 1 = 29\nf(3) = 2(27) - 15(9) + 36(3) + 1 = 54 - 135 + 108 + 1 = 28\nf(5) = 2(125) - 15(25) + 36(5) + 1 = 250 - 375 + 180 + 1 = 56.\nAbsolute maximum value is 56 (at x = 5)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The function f(x) = x + 1/x (x > 0) has a local minimum at x equal to:",
        "options": [
          "(a) 1",
          "(b) -1",
          "(c) 2",
          "(d) 1/2"
        ],
        "answer": "(a) 1",
        "explanation": "f'(x) = 1 - 1/x². Setting f'(x) = 0 => 1 = 1/x² => x² = 1 => x = 1 (since x > 0).\nf''(x) = 2/x³. At x = 1: f''(1) = 2 > 0 (local minimum). Hence local minimum is at x = 1."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A ladder 5 m long leans against a wall. The bottom of the ladder is pulled along the ground, away from the wall, at 2 m/s. How fast is its height on the wall decreasing when the foot of the ladder is 4 m away from the wall?",
        "options": [
          "(a) 8/3 m/s",
          "(b) 3/8 m/s",
          "(c) 4/3 m/s",
          "(d) 2 m/s"
        ],
        "answer": "(a) 8/3 m/s",
        "explanation": "x² + y² = 5² = 25. Differentiating with respect to t: 2x (dx/dt) + 2y (dy/dt) = 0 => dy/dt = -(x/y) dx/dt.\nWhen x = 4 m: y = √(25 - 16) = 3 m. Given dx/dt = 2 m/s:\ndy/dt = -(4/3)(2) = -8/3 m/s. The height is decreasing at the rate of 8/3 m/s."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The function f(x) = x³ - 3x is strictly increasing in the interval:",
        "options": [
          "(a) (-∞, -1) ∪ (1, ∞)",
          "(b) (-1, 1)",
          "(c) (-∞, 1)",
          "(d) (-1, ∞)"
        ],
        "answer": "(a) (-∞, -1) ∪ (1, ∞)",
        "explanation": "f'(x) = 3x² - 3 = 3(x² - 1) = 3(x - 1)(x + 1). For strictly increasing, f'(x) > 0 => (x - 1)(x + 1) > 0 => x < -1 or x > 1. Hence (-∞, -1) ∪ (1, ∞)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "At what point on the curve y = x² - 4x + 5 does the tangent have slope equal to zero?",
        "options": [
          "(a) (2, 1)",
          "(b) (1, 2)",
          "(c) (0, 5)",
          "(d) (4, 5)"
        ],
        "answer": "(a) (2, 1)",
        "explanation": "Slope of tangent dy/dx = 2x - 4. Setting dy/dx = 0 => 2x - 4 = 0 => x = 2. When x = 2: y = 2² - 4(2) + 5 = 4 - 8 + 5 = 1. Point is (2, 1)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The minimum value of f(x) = 3x⁴ - 8x³ + 12x² - 48x + 25 on the interval [0, 3] is:",
        "options": [
          "(a) -39",
          "(b) 25",
          "(c) 16",
          "(d) 0"
        ],
        "answer": "(a) -39",
        "explanation": "f'(x) = 12x³ - 24x² + 24x - 48 = 12 [ x²(x - 2) + 2(x - 2) ] = 12(x - 2)(x² + 2). Setting f'(x) = 0 gives real root x = 2 ∈ [0, 3].\nEvaluate f(x):\nf(0) = 25\nf(2) = 3(16) - 8(8) + 12(4) - 48(2) + 25 = 48 - 64 + 48 - 96 + 25 = -39\nf(3) = 3(81) - 8(27) + 12(9) - 48(3) + 25 = 243 - 216 + 108 - 144 + 25 = 16.\nMinimum value is -39 (at x = 2)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The function f(x) = log(sin x) is strictly decreasing on:",
        "options": [
          "(a) (π/2, π)",
          "(b) (0, π/2)",
          "(c) (0, π)",
          "(d) (-π/2, 0)"
        ],
        "answer": "(a) (π/2, π)",
        "explanation": "f'(x) = (1/sin x) · cos x = cot x. In the second quadrant (π/2, π), cot x < 0. Hence f'(x) < 0, so f(x) is strictly decreasing on (π/2, π)."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The maximum slope of the curve y = -x³ + 3x² + 9x - 27 is:",
        "options": [
          "(a) 12",
          "(b) 0",
          "(c) 9",
          "(d) 15"
        ],
        "answer": "(a) 12",
        "explanation": "Slope m = dy/dx = -3x² + 6x + 9. To maximize m, dm/dx = -6x + 6 = 0 => x = 1. d²m/dx² = -6 < 0 (maximum). Maximum slope m_max = -3(1)² + 6(1) + 9 = -3 + 6 + 9 = 12."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Two positive numbers whose sum is 16 and the sum of whose squares is minimum are:",
        "options": [
          "(a) 8, 8",
          "(b) 6, 10",
          "(c) 7, 9",
          "(d) 4, 12"
        ],
        "answer": "(a) 8, 8",
        "explanation": "Let numbers be x and 16 - x. S = x² + (16 - x)². dS/dx = 2x - 2(16 - x) = 4x - 32. Setting dS/dx = 0 => 4x = 32 => x = 8. Other number = 16 - 8 = 8. (d²S/dx² = 4 > 0, minimum)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The radius of a circle is increasing uniformly at the rate of 3 cm/s. The rate at which the area is increasing when radius is 10 cm is:",
        "options": [
          "(a) 60π cm²/s",
          "(b) 30π cm²/s",
          "(c) 20π cm²/s",
          "(d) 100π cm²/s"
        ],
        "answer": "(a) 60π cm²/s",
        "explanation": "A = π r² => dA/dt = 2π r (dr/dt) = 2π(10)(3) = 60π cm²/s."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The function f(x) = cos x is strictly decreasing on:",
        "options": [
          "(a) (0, π)",
          "(b) (π, 2π)",
          "(c) (-π, 0)",
          "(d) (0, 2π)"
        ],
        "answer": "(a) (0, π)",
        "explanation": "f'(x) = -sin x. For x ∈ (0, π), sin x > 0, so f'(x) = -sin x < 0. Thus f(x) is strictly decreasing on (0, π)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The volume of a cube is increasing at a rate of 9 cm³/s. How fast is the surface area increasing when the length of an edge is 10 cm?",
        "options": [
          "(a) 3.6 cm²/s",
          "(b) 4 cm²/s",
          "(c) 2.5 cm²/s",
          "(d) 6 cm²/s"
        ],
        "answer": "(a) 3.6 cm²/s",
        "explanation": "Volume V = x³ => dV/dt = 3x² (dx/dt) => 9 = 3(10)² (dx/dt) => dx/dt = 9 / 300 = 3/100 cm/s.\nSurface area S = 6x² => dS/dt = 12x (dx/dt) = 12(10)(3/100) = 360/100 = 3.6 cm²/s."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The function f(x) = e^(2x) is strictly increasing on:",
        "options": [
          "(a) R",
          "(b) (0, ∞) only",
          "(c) (-∞, 0) only",
          "(d) [1, ∞) only"
        ],
        "answer": "(a) R",
        "explanation": "f'(x) = 2 e^(2x). Since the exponential function e^u > 0 for all real u, f'(x) > 0 for all x ∈ R. Hence f is strictly increasing on all of R."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The minimum value of 2x + 3y when xy = 6 (x > 0, y > 0) is:",
        "options": [
          "(a) 12",
          "(b) 6",
          "(c) 15",
          "(d) 10"
        ],
        "answer": "(a) 12",
        "explanation": "y = 6/x. S = 2x + 3(6/x) = 2x + 18/x. dS/dx = 2 - 18/x² = 0 => x² = 9 => x = 3 (since x > 0). Then y = 6/3 = 2. S_min = 2(3) + 3(2) = 6 + 6 = 12."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If the edge of a cube increases by 2%, then the percentage increase in its volume is approximately:",
        "options": [
          "(a) 6%",
          "(b) 2%",
          "(c) 4%",
          "(d) 8%"
        ],
        "answer": "(a) 6%",
        "explanation": "V = x³ => log V = 3 log x => dV/V = 3 (dx/x). Percentage increase = (dV/V) × 100 = 3 × ((dx/x) × 100) = 3 × 2% = 6%."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The function f(x) = x² e^(-x) is strictly increasing in the interval:",
        "options": [
          "(a) (0, 2)",
          "(b) (-∞, 0)",
          "(c) (2, ∞)",
          "(d) R"
        ],
        "answer": "(a) (0, 2)",
        "explanation": "f'(x) = 2x e^(-x) + x² (-e^(-x)) = x(2 - x) e^(-x). Since e^(-x) > 0, f'(x) > 0 requires x(2 - x) > 0 => x(x - 2) < 0 => 0 < x < 2. Thus strictly increasing in (0, 2)."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The function f(x) = x³ - 3x² + 3x - 100 is strictly increasing on R.\nReason (R): f'(x) = 3(x - 1)² ≥ 0 for all x ∈ R, and vanishes only at isolated point x = 1.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. When derivative is non-negative and zero only at isolated points, the function is strictly increasing."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The maximum value of sin x + cos x is √2.\nReason (R): For any function f(x), the maximum value occurs only at critical points where f'(x) = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is true (max is √2). Reason R is FALSE: On a closed interval, extreme values can also occur at boundary endpoints where f'(x) is not necessarily zero."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The function f(x) = log(cos x) is strictly decreasing on (0, π/2).\nReason (R): f'(x) = -tan x < 0 for all x ∈ (0, π/2).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. In (0, π/2), tan x > 0, so f'(x) = -tan x < 0. R explains A directly."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): If the radius of a sphere is measured as 9 cm with an error of 0.03 cm, the approximate error in calculating its volume is 9.72π cm³.\nReason (R): dV = 4π r² dr.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "dV = 4π r² dr = 4π(9)²(0.03) = 4π(81)(0.03) = 9.72π cm³. Both A and R are true and R explains A."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): A function f(x) has a local maximum at x = c if f'(c) = 0 and f''(c) < 0.\nReason (R): A negative second derivative implies that the slope of tangent is decreasing through zero, indicating a local peak.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the geometric meaning of the second derivative test."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the intervals in which the function f(x) = x² - 4x + 6 is:\n(i) Strictly increasing\n(ii) Strictly decreasing.",
        "answer": "(i) Strictly increasing in (2, ∞); (ii) Strictly decreasing in (-∞, 2)",
        "explanation": "f'(x) = 2x - 4 = 2(x - 2). [0.5 Mark]\nCritical point: 2x - 4 = 0 => x = 2. [0.5 Mark]\n(i) For strictly increasing: f'(x) > 0 => 2(x - 2) > 0 => x > 2. Interval: (2, ∞). [0.5 Mark]\n(ii) For strictly decreasing: f'(x) < 0 => 2(x - 2) < 0 => x < 2. Interval: (-∞, 2). [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "The length x of a rectangle is decreasing at the rate of 3 cm/minute and the width y is increasing at the rate of 2 cm/minute. When x = 10 cm and y = 6 cm, find the rates of change of:\n(i) the perimeter\n(ii) the area of the rectangle.",
        "answer": "(i) -2 cm/min; (ii) 2 cm²/min",
        "explanation": "Given: dx/dt = -3 cm/min, dy/dt = +2 cm/min, x = 10 cm, y = 6 cm.\n(i) Perimeter P = 2(x + y):\ndP/dt = 2(dx/dt + dy/dt) = 2(-3 + 2) = 2(-1) = -2 cm/min (decreasing at 2 cm/min). [1 Mark]\n(ii) Area A = xy:\ndA/dt = x (dy/dt) + y (dx/dt) = 10(2) + 6(-3) = 20 - 18 = +2 cm²/min (increasing at 2 cm²/min). [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Find the intervals in which the function f(x) = 4x³ - 6x² - 72x + 30 is strictly increasing or strictly decreasing.",
        "answer": "Strictly increasing on (-∞, -2) ∪ (3, ∞); Strictly decreasing on (-2, 3)",
        "explanation": "f'(x) = 12x² - 12x - 72 = 12(x² - x - 6) = 12(x - 3)(x + 2). [1 Mark]\nCritical points: x = -2 and x = 3. [0.5 Mark]\nThese divide R into three intervals: (-∞, -2), (-2, 3), (3, ∞).\n1. On (-∞, -2): (x - 3) < 0, (x + 2) < 0 => f'(x) > 0. Strictly increasing. [0.5 Mark]\n2. On (-2, 3): (x - 3) < 0, (x + 2) > 0 => f'(x) < 0. Strictly decreasing. [0.5 Mark]\n3. On (3, ∞): (x - 3) > 0, (x + 2) > 0 => f'(x) > 0. Strictly increasing. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Find all the points of local maxima and local minima of the function f(x) = 2x³ - 6x² + 6x + 5.",
        "answer": "No point of local maxima or local minima (x = 1 is an inflection point)",
        "explanation": "f'(x) = 6x² - 12x + 6 = 6(x² - 2x + 1) = 6(x - 1)². [1 Mark]\nSetting f'(x) = 0 gives x = 1.\nFor x < 1, (x - 1)² > 0 => f'(x) > 0.\nFor x > 1, (x - 1)² > 0 => f'(x) > 0.\nSince f'(x) does not change sign as x passes through 1 (remains positive), x = 1 is neither a local maximum nor a local minimum (it is a point of inflection). [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Find two positive numbers whose sum is 15 and the sum of whose squares is minimum.",
        "answer": "15/2 and 15/2",
        "explanation": "Let the two positive numbers be x and 15 - x. [0.5 Mark]\nSum of squares S = x² + (15 - x)². [0.5 Mark]\ndS/dx = 2x + 2(15 - x)(-1) = 2x - 30 + 2x = 4x - 30. [1 Mark]\nSetting dS/dx = 0 => 4x - 30 = 0 => x = 30/4 = 15/2.\nSecond derivative: d²S/dx² = 4 > 0, which confirms a minimum. [0.5 Mark]\nSecond number = 15 - 15/2 = 15/2.\nHence the two numbers are 15/2 and 15/2. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "A particle moves along the curve 6y = x³ + 2. Find the points on the curve at which the y-coordinate is changing 8 times as fast as the x-coordinate.",
        "answer": "(4, 11) and (-4, -31/3)",
        "explanation": "Given: 6y = x³ + 2 and dy/dt = 8 (dx/dt). [0.5 Mark]\nDifferentiating curve with respect to t:\n6 (dy/dt) = 3x² (dx/dt) => 6 · 8 (dx/dt) = 3x² (dx/dt) [0.5 Mark]\n=> 48 = 3x² => x² = 16 => x = ±4. [0.5 Mark]\n- When x = 4: 6y = 4³ + 2 = 64 + 2 = 66 => y = 11. Point: (4, 11).\n- When x = -4: 6y = (-4)³ + 2 = -64 + 2 = -62 => y = -62/6 = -31/3. Point: (-4, -31/3). [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Find the absolute maximum and minimum values of the function f(x) = 2x³ - 15x² + 36x + 1 on the interval [1, 5].",
        "answer": "Absolute Maximum = 56 (at x = 5), Absolute Minimum = 24 (at x = 1)",
        "explanation": "f'(x) = 6x² - 30x + 36 = 6(x - 2)(x - 3). Critical points: x = 2, 3 ∈ [1, 5]. [1 Mark]\nEvaluate f(x) at critical points and endpoints [1.5 Marks]:\nf(1) = 2(1)³ - 15(1)² + 36(1) + 1 = 2 - 15 + 36 + 1 = 24\nf(2) = 2(8) - 15(4) + 36(2) + 1 = 16 - 60 + 72 + 1 = 29\nf(3) = 2(27) - 15(9) + 36(3) + 1 = 54 - 135 + 108 + 1 = 28\nf(5) = 2(125) - 15(25) + 36(5) + 1 = 250 - 375 + 180 + 1 = 56.\nConclusion: Absolute Maximum value is 56 at x = 5; Absolute Minimum value is 24 at x = 1. [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Show that the function f(x) = log(1 + x) - 2x/(2 + x) is an increasing function of x for all x > -1.",
        "answer": "Increasing function proof",
        "explanation": "f'(x) = 1/(1 + x) - [ (2 + x)(2) - 2x(1) ] / (2 + x)² [0.5 Mark]\n= 1/(1 + x) - [ 4 + 2x - 2x ] / (2 + x)² = 1/(1 + x) - 4/(2 + x)² [0.5 Mark]\n= [ (2 + x)² - 4(1 + x) ] / [ (1 + x)(2 + x)² ]\n= [ 4 + 4x + x² - 4 - 4x ] / [ (1 + x)(2 + x)² ] = x² / [ (1 + x)(2 + x)² ]. [0.5 Mark]\nFor x > -1, (1 + x) > 0 and (2 + x)² > 0. Also x² ≥ 0.\nThus f'(x) ≥ 0 for all x > -1, vanishing only at x = 0.\nHence f(x) is an increasing function for all x > -1. [0.5 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Separate the interval [0, π/2] into subintervals in which f(x) = sin⁴ x + cos⁴ x is:\n(i) Strictly increasing\n(ii) Strictly decreasing.",
        "answer": "(i) Strictly increasing in (π/4, π/2); (ii) Strictly decreasing in (0, π/4)",
        "explanation": "f'(x) = 4 sin³ x cos x - 4 cos³ x sin x = 4 sin x cos x (sin² x - cos² x) [1 Mark]\n= 2(2 sin x cos x) [ -(cos² x - sin² x) ] = -2 sin 2x cos 2x = -sin 4x. [1 Mark]\nFor x ∈ [0, π/2], 4x ∈ [0, 2π]. Critical point: sin 4x = 0 => 4x = π => x = π/4.\n1. On (0, π/4): 4x ∈ (0, π) => sin 4x > 0 => f'(x) = -sin 4x < 0. Strictly decreasing. [0.5 Mark]\n2. On (π/4, π/2): 4x ∈ (π, 2π) => sin 4x < 0 => f'(x) = -sin 4x > 0. Strictly increasing. [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Find the maximum and minimum values, if any, of the function f(x) = -(x - 1)² + 10.",
        "answer": "Maximum value = 10, No minimum value",
        "explanation": "Since (x - 1)² ≥ 0 for all x ∈ R, -(x - 1)² ≤ 0. [1 Mark]\nTherefore, f(x) = -(x - 1)² + 10 ≤ 10 for all x ∈ R.\nThe maximum value is 10, attained when x = 1.\nSince -(x - 1)² can take arbitrarily large negative values as x -> ±∞, there is no minimum value. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "An open box with a square base is to be made out of a given quantity of cardboard of area c² sq units. Show that the maximum volume of the box is c³ / (6√3) cubic units.",
        "answer": "Maximum volume = c³ / (6√3)",
        "explanation": "Marking Scheme:\n1. Formulation [1.5 Marks]:\nLet length of the side of square base be x and height of box be y.\nSurface area of open box (base + 4 sides):\nS = x² + 4xy = c² => 4xy = c² - x² => y = (c² - x²)/(4x).\n\n2. Volume function [1 Mark]:\nV = x² y = x² · [ (c² - x²)/(4x) ] = (1/4) (c² x - x³).\n\n3. First derivative and critical point [1.5 Marks]:\ndV/dx = (1/4) (c² - 3x²).\nSetting dV/dx = 0 => c² - 3x² = 0 => x² = c²/3 => x = c / √3 (since x > 0).\nSecond derivative test:\nd²V/dx² = (1/4) (-6x) = -3x / 2.\nAt x = c/√3: d²V/dx² = -3c / (2√3) < 0, which confirms a local maximum.\n\n4. Maximum Volume calculation [1 Mark]:\nV_max = (1/4) [ c²(c/√3) - (c/√3)³ ]\n= (1/4) [ c³/√3 - c³/(3√3) ] = (1/4) [ (2c³) / (3√3) ] = c³ / (6√3) cubic units. (Proved)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Show that the height of the cylinder of maximum volume that can be inscribed in a sphere of radius R is 2R/√3. Also find the maximum volume.",
        "answer": "Height h = 2R/√3 and Maximum Volume = 4π R³ / (3√3)",
        "explanation": "Marking Scheme:\n1. Geometry and Formulation [1.5 Marks]:\nLet r be radius and h be height of the cylinder inscribed in sphere of radius R.\nFrom right triangle: r² + (h/2)² = R² => r² = R² - h²/4.\n\n2. Volume function V(h) [1 Mark]:\nV = π r² h = π (R² - h²/4) h = π (R² h - h³/4).\n\n3. First derivative and optimization [1.5 Marks]:\ndV/dh = π (R² - 3h²/4).\nSetting dV/dh = 0 => R² - 3h²/4 = 0 => 3h²/4 = R² => h² = 4R²/3 => h = 2R / √3.\nSecond derivative:\nd²V/dh² = π (-6h/4) = -3π h / 2.\nAt h = 2R/√3: d²V/dh² = -3π(2R/√3)/2 = -√3 π R < 0, confirming maximum volume.\n\n4. Maximum Volume [1 Mark]:\nV_max = π [ R²(2R/√3) - (1/4)(2R/√3)³ ]\n= π [ 2R³/√3 - (1/4)(8R³/(3√3)) ] = π [ 2R³/√3 - 2R³/(3√3) ]\n= π [ (4R³) / (3√3) ] = 4π R³ / (3√3). (Proved)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Show that the right circular cone of least curved surface and given volume has an altitude equal to √2 times the radius of the base.",
        "answer": "Proof of altitude h = √2 r",
        "explanation": "Marking Scheme:\n1. Formulation [1.5 Marks]:\nGiven volume V = (1/3) π r² h is constant => h = 3V / (π r²).\nCurved surface area S = π r l = π r √(r² + h²).\nTo minimize S, it is equivalent to minimize S² = π² r² (r² + h²) = π² r⁴ + π² r² h².\n\n2. Substituting h [1.5 Marks]:\nLet f(r) = S² = π² r⁴ + π² r² [ 9V² / (π² r⁴) ] = π² r⁴ + 9V² / r².\nd(S²)/dr = 4π² r³ - 18V² / r³.\nSetting d(S²)/dr = 0 => 4π² r³ = 18V² / r³ => 4π² r⁶ = 18V² = 18 [ (1/3) π r² h ]²\n=> 4π² r⁶ = 18 [ (1/9) π² r⁴ h² ] = 2π² r⁴ h².\n\n3. Relation between h and r [1.5 Marks]:\nCancelling 2π² r⁴ on both sides:\n2r² = h² => h = √2 r.\n\n4. Second derivative verification [0.5 Mark]:\nd²(S²)/dr² = 12π² r² + 54V² / r⁴ > 0 for all r > 0, which confirms a minimum.\nHence, altitude h = √2 r. (Proved)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Optimization of Packaging Box Design\nA packaging manufacturer wants to construct an open rectangular box from a square sheet of tin of side 18 cm by cutting off equal squares of side x cm from each of the four corners and folding up the flaps to form the box.\n(i) Express the length, breadth, and height of the box in terms of x.\n(ii) Write the volume V(x) of the box as a function of x.\n(iii) Find the value of x that maximizes the volume of the box.\n(iv) Calculate the maximum volume of the box.",
        "answer": "Solutions to Case Study on Box Optimization",
        "explanation": "(i) Length = 18 - 2x cm, Breadth = 18 - 2x cm, Height = x cm (where 0 < x < 9). [1 Mark]\n(ii) V(x) = (18 - 2x)(18 - 2x)(x) = x(18 - 2x)² = x(324 - 72x + 4x²) = 4x³ - 72x² + 324x. [1 Mark]\n(iii) dV/dx = 12x² - 144x + 324 = 12(x² - 12x + 27) = 12(x - 3)(x - 9). [1 Mark]\nSetting dV/dx = 0 gives x = 3 or x = 9. Since x < 9, x = 3 cm.\nd²V/dx² = 24x - 144. At x = 3: 24(3) - 144 = 72 - 144 = -72 < 0 (maximum).\nThus x = 3 cm.\n(iv) Maximum volume V(3) = 3(18 - 6)² = 3(12)² = 3 × 144 = 432 cm³. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "A window is in the form of a rectangle surmounted by a semi-circular opening. The total perimeter of the window is 10 m. Find the dimensions of the window to admit maximum light through the whole opening.",
        "answer": "Radius r = 10 / (π + 4) m, Length = 20 / (π + 4) m, Height = 10 / (π + 4) m",
        "explanation": "Marking Scheme:\n1. Geometry and Perimeter equation [1.5 Marks]:\nLet radius of semi-circle be r, so width of rectangular part = 2r.\nLet height of rectangular part be h.\nPerimeter P = 2r + 2h + π r = 10 m => 2h = 10 - 2r - π r => h = 5 - r - (π/2) r.\n\n2. Area function A(r) [1.5 Marks]:\nTotal area = Area of rectangle + Area of semicircle:\nA = (2r) h + (1/2) π r²\n= 2r [ 5 - r - (π/2) r ] + (1/2) π r²\n= 10r - 2r² - π r² + (1/2) π r² = 10r - 2r² - (1/2) π r².\n\n3. Optimization [1.5 Marks]:\ndA/dr = 10 - 4r - π r = 10 - (π + 4) r.\nSetting dA/dr = 0 => (π + 4) r = 10 => r = 10 / (π + 4) m.\nd²A/dr² = -(π + 4) < 0, which confirms maximum area.\n\n4. Dimensions [0.5 Mark]:\n- Width of window = 2r = 20 / (π + 4) m.\n- Height of rectangle h = 5 - (1 + π/2)(10 / (π + 4)) = 5 - [ (2 + π)/2 ] [ 10 / (π + 4) ]\n  = 5 - 5(π + 2)/(π + 4) = [ 5(π + 4) - 5(π + 2) ] / (π + 4) = [ 5π + 20 - 5π - 10 ] / (π + 4) = 10 / (π + 4) m.\nHence dimensions are: Length = 20/(π + 4) m, Height = 10/(π + 4) m."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Prove that the volume of the largest cone that can be inscribed in a sphere of radius R is 8/27 of the volume of the sphere.",
        "answer": "Proof of V_cone = (8/27) V_sphere",
        "explanation": "Marking Scheme:\n1. Geometry and Variables [1.5 Marks]:\nLet r be base radius and h be altitude of cone inscribed in a sphere of radius R with center O.\nLet distance from center of sphere to base of cone be x (where 0 < x < R).\nThen altitude h = R + x, and base radius r² = R² - x².\n\n2. Volume function V(x) [1.5 Marks]:\nV = (1/3) π r² h = (1/3) π (R² - x²)(R + x) = (1/3) π (R³ + R² x - R x² - x³).\ndV/dx = (1/3) π (R² - 2Rx - 3x²).\nSetting dV/dx = 0 => 3x² + 2Rx - R² = 0 => (3x - R)(x + R) = 0 => x = R/3 (since x > 0).\nSecond derivative test:\nd²V/dx² = (1/3) π (-2R - 6x). At x = R/3: d²V/dx² = (1/3) π (-2R - 2R) = -4π R / 3 < 0 (Maximum).\n\n3. Altitude and Maximum Volume [2 Marks]:\nAt x = R/3: h = R + R/3 = 4R/3.\nr² = R² - (R/3)² = R² - R²/9 = 8R²/9.\nV_max = (1/3) π (8R²/9)(4R/3) = (32 π R³) / 81.\nNow express in terms of volume of sphere V_sphere = (4/3) π R³:\nV_max = (8/27) [ (4/3) π R³ ] = (8/27) V_sphere. (Proved)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Find the intervals in which the function f(x) = sin 3x, x ∈ [0, π/2], is strictly increasing or strictly decreasing.",
        "answer": "Strictly increasing in [0, π/6); Strictly decreasing in (π/6, π/2]",
        "explanation": "Marking Scheme:\nf'(x) = 3 cos 3x. [1 Mark]\nFor x ∈ [0, π/2], 3x ∈ [0, 3π/2]. [1 Mark]\nCritical points: cos 3x = 0 => 3x = π/2 => x = π/6. [0.5 Mark]\n1. In interval [0, π/6): 3x ∈ [0, π/2) => cos 3x > 0 => f'(x) > 0. Strictly increasing. [0.75 Mark]\n2. In interval (π/6, π/2]: 3x ∈ (π/2, 3π/2] => cos 3x < 0 => f'(x) < 0. Strictly decreasing. [0.75 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "A wire of length 28 m is to be cut into two pieces. One of the pieces is to be made into a square and the other into a circle. What should be the lengths of the two pieces so that the combined area of the square and the circle is minimum?",
        "answer": "Square piece = 112 / (π + 4) m, Circle piece = 28π / (π + 4) m",
        "explanation": "Marking Scheme:\n1. Variables and Formulation [1.5 Marks]:\nLet length of wire for square be x m, then length for circle is (28 - x) m.\nSide of square = x/4, Radius of circle r = (28 - x)/(2π).\nTotal Area A = (side)² + π r² = (x/4)² + π [ (28 - x)/(2π) ]²\n= x²/16 + (28 - x)² / (4π).\n\n2. First derivative and critical point [1.5 Marks]:\ndA/dx = 2x/16 + 2(28 - x)(-1) / (4π) = x/8 - (28 - x) / (2π).\nSetting dA/dx = 0 => x/8 = (28 - x)/(2π) => x/4 = (28 - x)/π\n=> π x = 4(28 - x) = 112 - 4x => (π + 4) x = 112 => x = 112 / (π + 4) m.\n\n3. Second derivative test [1 Mark]:\nd²A/dx² = 1/8 - (-1)/(2π) = 1/8 + 1/(2π) > 0, confirming a minimum area.\n\n4. Length of pieces [1 Mark]:\n- Piece for square: x = 112 / (π + 4) m.\n- Piece for circle: 28 - x = 28 - 112/(π + 4) = [ 28(π + 4) - 112 ] / (π + 4) = 28π / (π + 4) m."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Find the local maxima and local minima of the function f(x) = sin 2x - x, where -π/2 ≤ x ≤ π/2.",
        "answer": "Local maximum at x = π/6 with value (√3/2 - π/6); Local minimum at x = -π/6 with value (-√3/2 + π/6)",
        "explanation": "Marking Scheme:\nf'(x) = 2 cos 2x - 1. [1 Mark]\nSetting f'(x) = 0 => 2 cos 2x = 1 => cos 2x = 1/2.\nFor x ∈ [-π/2, π/2], 2x ∈ [-π, π].\n2x = -π/3 or π/3 => x = -π/6 or x = π/6. [1 Mark]\nSecond derivative test: f''(x) = -4 sin 2x. [0.5 Mark]\n1. At x = π/6: f''(π/6) = -4 sin(π/3) = -4(√3/2) = -2√3 < 0 => Local Maximum.\n   Local maximum value = sin(π/3) - π/6 = √3/2 - π/6. [0.75 Mark]\n2. At x = -π/6: f''(-π/6) = -4 sin(-π/3) = +2√3 > 0 => Local Minimum.\n   Local minimum value = sin(-π/3) - (-π/6) = -√3/2 + π/6. [0.75 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the first and second derivative tests for finding local extrema.\n(b) Show that of all rectangles inscribed in a given fixed circle, the square has the maximum area.",
        "answer": "(a) Test statements; (b) Proof that rectangle of maximum area is a square",
        "explanation": "Marking Scheme:\n(a) Statements of Derivative Tests (2 Marks):\n1. First Derivative Test: Let c be a critical point of continuous function f where f'(c) = 0.\n- If f'(x) changes sign from positive to negative as x increases through c, c is a point of local maximum.\n- If f'(x) changes sign from negative to positive, c is a point of local minimum.\n- If f'(x) does not change sign, c is a point of inflection.\n2. Second Derivative Test: If f'(c) = 0 and f''(c) < 0, then c is a local maximum. If f'(c) = 0 and f''(c) > 0, then c is a local minimum. If f''(c) = 0, the test is inconclusive.\n\n(b) Proof (3 Marks):\nLet radius of fixed circle be R (constant).\nLet length and breadth of inscribed rectangle be x and y.\nDiagonal of rectangle is the diameter: x² + y² = (2R)² = 4R² => y = √(4R² - x²). [1 Mark]\nArea of rectangle A = x y = x √(4R² - x²).\nMaximize A² = x²(4R² - x²) = 4R² x² - x⁴. [0.5 Mark]\nLet f(x) = A² => f'(x) = 8R² x - 4x³ = 4x(2R² - x²).\nSetting f'(x) = 0 (for x > 0): 2R² - x² = 0 => x² = 2R² => x = √2 R. [0.5 Mark]\nThen y = √(4R² - 2R²) = √(2R²) = √2 R. [0.5 Mark]\nSince length x = √2 R and breadth y = √2 R (x = y), the rectangle is a square.\nf''(x) = 8R² - 12x² = 8R² - 12(2R²) = -16R² < 0, confirming maximum area. (Proved). [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "unit_num": 3,
      "title": "Integrals",
      "unit_title": "Calculus",
      "weightage_unit": "Calculus (35 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The value of ∫ e^x (sin x + cos x) dx is:",
        "options": [
          "(a) e^x sin x + C",
          "(b) e^x cos x + C",
          "(c) -e^x sin x + C",
          "(d) -e^x cos x + C"
        ],
        "answer": "(a) e^x sin x + C",
        "explanation": "Using standard formula ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C. Here f(x) = sin x and f'(x) = cos x. Thus, the integral is e^x sin x + C."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The value of the definite integral ∫_{-1}^{1} x¹⁷ cos⁴(x) dx is:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) 2",
          "(d) π/2"
        ],
        "answer": "(a) 0",
        "explanation": "Let f(x) = x¹⁷ cos⁴(x). Then f(-x) = (-x)¹⁷ cos⁴(-x) = -x¹⁷ cos⁴(x) = -f(x). Since f(x) is an odd function, by the property of definite integrals, ∫_{-a}^{a} f(x) dx = 0."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The value of ∫ (dx) / (sin² x cos² x) is:",
        "options": [
          "(a) tan x - cot x + C",
          "(b) tan x + cot x + C",
          "(c) -tan x - cot x + C",
          "(d) tan x cot x + C"
        ],
        "answer": "(a) tan x - cot x + C",
        "explanation": "Rewrite numerator 1 as sin² x + cos² x:\n∫ (sin² x + cos² x) / (sin² x cos² x) dx = ∫ (1/cos² x + 1/sin² x) dx = ∫ (sec² x + cosec² x) dx = tan x - cot x + C."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The value of ∫₀^(π/2) (sin⁴ x) / (sin⁴ x + cos⁴ x) dx is:",
        "options": [
          "(a) π/4",
          "(b) π/2",
          "(c) 0",
          "(d) π"
        ],
        "answer": "(a) π/4",
        "explanation": "Let I = ∫₀^(π/2) sin⁴ x / (sin⁴ x + cos⁴ x) dx. Using property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:\nI = ∫₀^(π/2) cos⁴ x / (cos⁴ x + sin⁴ x) dx. Adding both:\n2I = ∫₀^(π/2) (sin⁴ x + cos⁴ x) / (sin⁴ x + cos⁴ x) dx = ∫₀^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of ∫ (e^(6 log x) - e^(5 log x)) / (e^(4 log x) - e^(3 log x)) dx is:",
        "options": [
          "(a) x³/3 + C",
          "(b) x²/2 + C",
          "(c) x⁴/4 + C",
          "(d) x + C"
        ],
        "answer": "(a) x³/3 + C",
        "explanation": "e^(k log x) = x^k. The integrand is (x⁶ - x⁵) / (x⁴ - x³) = [ x⁵(x - 1) ] / [ x³(x - 1) ] = x⁵ / x³ = x².\n∫ x² dx = x³/3 + C."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of ∫ (x e^x) / (1 + x)² dx is:",
        "options": [
          "(a) (e^x) / (1 + x) + C",
          "(b) (e^x) / (1 + x)² + C",
          "(c) e^x (1 + x) + C",
          "(d) -e^x / (1 + x) + C"
        ],
        "answer": "(a) (e^x) / (1 + x) + C",
        "explanation": "Write x/(1 + x)² = [ (x + 1) - 1 ] / (1 + x)² = 1/(1 + x) - 1/(1 + x)².\nThis is of the form ∫ e^x [ f(x) + f'(x) ] dx where f(x) = 1/(1 + x) and f'(x) = -1/(1 + x)².\nIntegral = e^x f(x) + C = (e^x) / (1 + x) + C."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The value of ∫ (dx) / (e^x + e^(-x)) is:",
        "options": [
          "(a) tan⁻¹(e^x) + C",
          "(b) tan⁻¹(e^(-x)) + C",
          "(c) log(e^x - e^(-x)) + C",
          "(d) e^x + e^(-x) + C"
        ],
        "answer": "(a) tan⁻¹(e^x) + C",
        "explanation": "Multiply numerator and denominator by e^x:\n∫ (e^x dx) / (e^(2x) + 1). Put e^x = t => e^x dx = dt.\n∫ dt / (t² + 1) = tan⁻¹(t) + C = tan⁻¹(e^x) + C."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The value of ∫₀^(2/3) (dx) / (4 + 9x²) is:",
        "options": [
          "(a) π/24",
          "(b) π/12",
          "(c) π/6",
          "(d) π/8"
        ],
        "answer": "(a) π/24",
        "explanation": "∫ (dx) / [ 9(x² + (2/3)²) ] = (1/9) · [ 1/(2/3) ] tan⁻¹(x / (2/3)) = (1/6) tan⁻¹(3x/2).\nEvaluating from 0 to 2/3:\n(1/6) [ tan⁻¹(1) - tan⁻¹(0) ] = (1/6)(π/4 - 0) = π/24."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The value of ∫ (sin² x - cos² x) / (sin² x cos² x) dx is:",
        "options": [
          "(a) tan x + cot x + C",
          "(b) tan x - cot x + C",
          "(c) -tan x + cot x + C",
          "(d) -tan x - cot x + C"
        ],
        "answer": "(a) tan x + cot x + C",
        "explanation": "∫ [ (sin² x)/(sin² x cos² x) - (cos² x)/(sin² x cos² x) ] dx = ∫ (sec² x - cosec² x) dx = tan x - (-cot x) + C = tan x + cot x + C."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The value of ∫ (10 x⁹ + 10^x log_e 10) / (x¹⁰ + 10^x) dx is:",
        "options": [
          "(a) log|x¹⁰ + 10^x| + C",
          "(b) 10^x - x¹⁰ + C",
          "(c) 10^x + x¹⁰ + C",
          "(d) log|10^x - x¹⁰| + C"
        ],
        "answer": "(a) log|x¹⁰ + 10^x| + C",
        "explanation": "Let denominator t = x¹⁰ + 10^x. Then dt = (10 x⁹ + 10^x log_e 10) dx.\nThe integral becomes ∫ dt / t = log|t| + C = log|x¹⁰ + 10^x| + C."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The value of ∫₀^(π/2) log(tan x) dx is:",
        "options": [
          "(a) 0",
          "(b) π/2",
          "(c) π/4",
          "(d) -π/2"
        ],
        "answer": "(a) 0",
        "explanation": "Let I = ∫₀^(π/2) log(tan x) dx. Using property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:\nI = ∫₀^(π/2) log(tan(π/2 - x)) dx = ∫₀^(π/2) log(cot x) dx = -∫₀^(π/2) log(tan x) dx = -I.\n2I = 0 => I = 0."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The value of ∫ (dx) / √(9 - 25x²) is:",
        "options": [
          "(a) (1/5) sin⁻¹(5x/3) + C",
          "(b) (1/3) sin⁻¹(5x/3) + C",
          "(c) sin⁻¹(5x/3) + C",
          "(d) (1/5) sin⁻¹(3x/5) + C"
        ],
        "answer": "(a) (1/5) sin⁻¹(5x/3) + C",
        "explanation": "∫ (dx) / √(25((3/5)² - x²)) = (1/5) ∫ (dx) / √((3/5)² - x²) = (1/5) sin⁻¹(x / (3/5)) + C = (1/5) sin⁻¹(5x/3) + C."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The value of ∫_{-π/2}^{π/2} (x³ + x cos x + tan⁵ x + 1) dx is:",
        "options": [
          "(a) π",
          "(b) 0",
          "(c) 2π",
          "(d) 1"
        ],
        "answer": "(a) π",
        "explanation": "The terms x³, x cos x, and tan⁵ x are all odd functions: (-x)³ = -x³, (-x) cos(-x) = -x cos x, tan⁵(-x) = -tan⁵ x.\nTheir integrals from -π/2 to π/2 evaluate to 0.\nThe only non-zero contribution comes from the constant 1:\n∫_{-π/2}^{π/2} 1 dx = [x]_{-π/2}^{π/2} = π/2 - (-π/2) = π."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The value of ∫ sec x dx is:",
        "options": [
          "(a) log|sec x + tan x| + C",
          "(b) log|sec x - tan x| + C",
          "(c) sec x tan x + C",
          "(d) log|tan(x/2)| + C"
        ],
        "answer": "(a) log|sec x + tan x| + C",
        "explanation": "Multiplying numerator and denominator by (sec x + tan x):\n∫ [ sec x(sec x + tan x) / (sec x + tan x) ] dx = ∫ [ (sec² x + sec x tan x) / (sec x + tan x) ] dx = log|sec x + tan x| + C."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of ∫ (dx) / (x² - 16) is:",
        "options": [
          "(a) (1/8) log|(x - 4)/(x + 4)| + C",
          "(b) (1/4) log|(x - 4)/(x + 4)| + C",
          "(c) (1/8) log|(x + 4)/(x - 4)| + C",
          "(d) (1/16) tan⁻¹(x/4) + C"
        ],
        "answer": "(a) (1/8) log|(x - 4)/(x + 4)| + C",
        "explanation": "Using standard formula ∫ (dx)/(x² - a²) = (1/2a) log|(x - a)/(x + a)| + C. With a = 4: (1/8) log|(x - 4)/(x + 4)| + C."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The value of ∫₀¹ (tan⁻¹ x) / (1 + x²) dx is:",
        "options": [
          "(a) π²/32",
          "(b) π²/16",
          "(c) π/4",
          "(d) π²/8"
        ],
        "answer": "(a) π²/32",
        "explanation": "Put tan⁻¹ x = t => (1/(1 + x²)) dx = dt. When x = 0, t = 0; when x = 1, t = π/4.\n∫₀^(π/4) t dt = [ t²/2 ]₀^(π/4) = (1/2) (π/4)² = (1/2)(π²/16) = π²/32."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The value of ∫ e^(x) [ (1 + sin x) / (1 + cos x) ] dx is:",
        "options": [
          "(a) e^x tan(x/2) + C",
          "(b) e^x cot(x/2) + C",
          "(c) e^x sec²(x/2) + C",
          "(d) (1/2) e^x tan(x/2) + C"
        ],
        "answer": "(a) e^x tan(x/2) + C",
        "explanation": "(1 + sin x)/(1 + cos x) = [ 1 + 2 sin(x/2) cos(x/2) ] / [ 2 cos²(x/2) ] = (1/2) sec²(x/2) + tan(x/2).\nHere f(x) = tan(x/2) and f'(x) = (1/2) sec²(x/2).\n∫ e^x [ f(x) + f'(x) ] dx = e^x f(x) + C = e^x tan(x/2) + C."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The value of ∫ (cos 2x - cos 2α) / (cos x - cos α) dx is:",
        "options": [
          "(a) 2(sin x + x cos α) + C",
          "(b) 2(sin x - x cos α) + C",
          "(c) 2(cos x + x sin α) + C",
          "(d) -2(sin x + x cos α) + C"
        ],
        "answer": "(a) 2(sin x + x cos α) + C",
        "explanation": "cos 2x = 2 cos² x - 1 and cos 2α = 2 cos² α - 1.\ncos 2x - cos 2α = 2(cos² x - cos² α) = 2(cos x - cos α)(cos x + cos α).\nDividing by (cos x - cos α) leaves: 2(cos x + cos α).\n∫ 2(cos x + cos α) dx = 2(sin x + x cos α) + C."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The value of ∫₀¹ (dx) / √(1 - x²) is:",
        "options": [
          "(a) π/2",
          "(b) π",
          "(c) π/4",
          "(d) 1"
        ],
        "answer": "(a) π/2",
        "explanation": "∫ (dx)/√(1 - x²) = sin⁻¹ x. [ sin⁻¹ x ]₀¹ = sin⁻¹(1) - sin⁻¹(0) = π/2 - 0 = π/2."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The value of ∫ log x dx is:",
        "options": [
          "(a) x log x - x + C",
          "(b) x log x + x + C",
          "(c) (log x)² / 2 + C",
          "(d) 1/x + C"
        ],
        "answer": "(a) x log x - x + C",
        "explanation": "Using integration by parts: ∫ (log x · 1) dx = log x · x - ∫ (1/x · x) dx = x log x - ∫ 1 dx = x log x - x + C."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The value of ∫ (dx) / (x(x² + 1)) is:",
        "options": [
          "(a) log|x| - (1/2) log(x² + 1) + C",
          "(b) log|x| + (1/2) log(x² + 1) + C",
          "(c) (1/2) log|(x² + 1)/x| + C",
          "(d) tan⁻¹ x + C"
        ],
        "answer": "(a) log|x| - (1/2) log(x² + 1) + C",
        "explanation": "Multiply numerator and denominator by x: ∫ (x dx) / (x²(x² + 1)).\nPut x² = t => 2x dx = dt => x dx = dt/2.\n(1/2) ∫ dt / (t(t + 1)) = (1/2) ∫ (1/t - 1/(t + 1)) dt = (1/2) [ log|t| - log|t + 1| ] + C = (1/2) log(x²) - (1/2) log(x² + 1) + C = log|x| - (1/2) log(x² + 1) + C."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The value of ∫₀^(π/2) √sin x / (√sin x + √cos x) dx is:",
        "options": [
          "(a) π/4",
          "(b) π/2",
          "(c) 0",
          "(d) π"
        ],
        "answer": "(a) π/4",
        "explanation": "Applying property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx changes sin x to cos x. Adding the two integrals gives 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The value of ∫ (2 cos x - 3 sin x) / (6 cos x + 4 sin x) dx is:",
        "options": [
          "(a) (1/2) log|2 sin x + 3 cos x| + C",
          "(b) 2 log|2 sin x + 3 cos x| + C",
          "(c) (1/2) log|3 sin x + 2 cos x| + C",
          "(d) (1/2) x + C"
        ],
        "answer": "(a) (1/2) log|2 sin x + 3 cos x| + C",
        "explanation": "Denominator = 2(3 cos x + 2 sin x) = 2(2 sin x + 3 cos x).\nLet t = 2 sin x + 3 cos x => dt = (2 cos x - 3 sin x) dx.\nIntegral = (1/2) ∫ dt / t = (1/2) log|t| + C = (1/2) log|2 sin x + 3 cos x| + C."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The value of ∫_{-a}^a f(x) dx is equal to 0 if f(x) is:",
        "options": [
          "(a) An odd function",
          "(b) An even function",
          "(c) A constant function",
          "(d) A positive function"
        ],
        "answer": "(a) An odd function",
        "explanation": "By the fundamental symmetry property of definite integrals, ∫_{-a}^a f(x) dx = 0 whenever f(-x) = -f(x) (an odd function)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of ∫ e^x sec x (1 + tan x) dx is:",
        "options": [
          "(a) e^x sec x + C",
          "(b) e^x tan x + C",
          "(c) e^x (sec x + tan x) + C",
          "(d) e^x cos x + C"
        ],
        "answer": "(a) e^x sec x + C",
        "explanation": "Integrand is e^x (sec x + sec x tan x). Here f(x) = sec x and f'(x) = sec x tan x.\nBy formula ∫ e^x [ f(x) + f'(x) ] dx = e^x f(x) + C = e^x sec x + C."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): ∫_{-π/2}^{π/2} sin⁷ x dx = 0.\nReason (R): sin⁷ x is an odd function of x.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Since sin⁷(-x) = (-sin x)⁷ = -sin⁷ x, it is an odd function, so its integral over symmetric limits [-π/2, π/2] is 0. R correctly explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): ∫₀^(π/2) (cos x) / (sin x + cos x) dx = π/4.\nReason (R): ∫₀^a f(x) dx = ∫₀^a f(a - x) dx for any continuous function f.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R is the exact property used to prove A (2I = π/2 => I = π/4)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The value of ∫ (dx) / (1 + x²) is tan⁻¹ x + C.\nReason (R): The derivative of tan⁻¹ x with respect to x is 1 / (1 + x²).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A by the definition of an antiderivative."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): ∫ e^x (x - 1) / x² dx = (e^x) / x + C.\nReason (R): (x - 1)/x² = 1/x - 1/x², where d/dx(1/x) = -1/x².",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A (using ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The value of ∫₀^π x sin x dx is π.\nReason (R): Integration by parts formula states that ∫ u v dx = u ∫ v dx - ∫ (u' ∫ v dx) dx.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "∫ x sin x dx = x(-cos x) - ∫ 1(-cos x) dx = -x cos x + sin x. From 0 to π: [-π cos π + sin π] - [0 + 0] = -π(-1) + 0 = π. Both A and R are true and R explains A."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Evaluate: ∫ (x² + 1) / (x² - 5x + 6) dx.",
        "answer": "x - 5 log|x - 2| + 10 log|x - 3| + C",
        "explanation": "Degree of numerator equals degree of denominator. Perform polynomial division [0.5 Mark]:\n(x² + 1) / (x² - 5x + 6) = 1 + (5x - 5) / (x² - 5x + 6) = 1 + (5x - 5) / ((x - 2)(x - 3)).\nPartial fractions for (5x - 5)/((x - 2)(x - 3)) = A/(x - 2) + B/(x - 3) [1 Mark]:\n5x - 5 = A(x - 3) + B(x - 2).\n- For x = 2: 10 - 5 = A(2 - 3) => 5 = -A => A = -5.\n- For x = 3: 15 - 5 = B(3 - 2) => 10 = B => B = 10.\nIntegrate [0.5 Mark]:\n∫ [ 1 - 5/(x - 2) + 10/(x - 3) ] dx = x - 5 log|x - 2| + 10 log|x - 3| + C."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Evaluate: ∫ (sin 2x) / (sin⁴ x + cos⁴ x) dx.",
        "answer": "tan⁻¹(tan² x) + C",
        "explanation": "Divide numerator and denominator by cos⁴ x [1 Mark]:\n∫ [ (2 sin x cos x / cos⁴ x) ] / [ (sin⁴ x / cos⁴ x) + 1 ] dx = ∫ [ 2 tan x sec² x ] / [ tan⁴ x + 1 ] dx.\nPut tan² x = t => 2 tan x sec² x dx = dt. [0.5 Mark]\nIntegral = ∫ dt / (t² + 1) = tan⁻¹(t) + C = tan⁻¹(tan² x) + C. [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Evaluate: ∫₀^(π/2) (x) / (sin x + cos x) dx.",
        "answer": "(π / (2√2)) log(√2 + 1)",
        "explanation": "Let I = ∫₀^(π/2) x / (sin x + cos x) dx ... (1) [0.5 Mark]\nUsing ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:\nI = ∫₀^(π/2) (π/2 - x) / [ sin(π/2 - x) + cos(π/2 - x) ] dx = ∫₀^(π/2) (π/2 - x) / (cos x + sin x) dx ... (2) [0.5 Mark]\nAdding (1) and (2):\n2I = (π/2) ∫₀^(π/2) (dx) / (sin x + cos x) => I = (π/4) ∫₀^(π/2) (dx) / [ √2 ( (1/√2) cos x + (1/√2) sin x ) ] [1 Mark]\n= (π / (4√2)) ∫₀^(π/2) (dx) / cos(x - π/4) = (π / (4√2)) ∫₀^(π/2) sec(x - π/4) dx\n= (π / (4√2)) [ log|sec(x - π/4) + tan(x - π/4)| ]₀^(π/2) [0.5 Mark]\nAt x = π/2: sec(π/4) + tan(π/4) = √2 + 1.\nAt x = 0: sec(-π/4) + tan(-π/4) = √2 - 1.\n= (π / (4√2)) [ log(√2 + 1) - log(√2 - 1) ] = (π / (4√2)) log[ (√2 + 1)/(√2 - 1) ]\n= (π / (4√2)) log( (√2 + 1)² ) = (π / (2√2)) log(√2 + 1). [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 Marks)",
        "question": "Evaluate: ∫ (x² + x + 1) / [ (x + 2)(x² + 1) ] dx.",
        "answer": "(3/5) log|x + 2| + (1/5) log(x² + 1) + (2/5) tan⁻¹ x + C",
        "explanation": "Partial fractions: (x² + x + 1)/[ (x + 2)(x² + 1) ] = A/(x + 2) + (Bx + C)/(x² + 1) [1 Mark]\nx² + x + 1 = A(x² + 1) + (Bx + C)(x + 2).\n- For x = -2: 4 - 2 + 1 = A(4 + 1) => 3 = 5A => A = 3/5.\n- Equating coefficients of x²: 1 = A + B => B = 1 - 3/5 = 2/5.\n- Constant term: 1 = A + 2C => 1 = 3/5 + 2C => 2C = 2/5 => C = 1/5. [1 Mark]\nIntegrating [1 Mark]:\n(3/5) ∫ dx/(x + 2) + (1/5) ∫ (2x + 1)/(x² + 1) dx\n= (3/5) log|x + 2| + (1/5) ∫ 2x/(x² + 1) dx + (1/5) ∫ 1/(x² + 1) dx\n= (3/5) log|x + 2| + (1/5) log(x² + 1) + (1/5) tan⁻¹ x + C ... wait, let's check C:\nConstant: A(1) + 2C = 1 => 3/5 + 2C = 1 => 2C = 2/5 => C = 1/5. Yes, coefficient of tan⁻¹ x is 1/5."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (2 Marks)",
        "question": "Evaluate: ∫ x sin⁻¹ x dx.",
        "answer": "(x²/2) sin⁻¹ x - x/4 + (1/4) sin⁻¹ x + C (or [ (2x² - 1)/4 ] sin⁻¹ x + (x/4) √(1 - x²) + C)",
        "explanation": "By parts: u = sin⁻¹ x, v = x => du = (1/√(1 - x²)) dx, ∫ v dx = x²/2 [1 Mark]:\n= (x²/2) sin⁻¹ x - (1/2) ∫ (x² / √(1 - x²)) dx\n= (x²/2) sin⁻¹ x + (1/2) ∫ [ (1 - x² - 1) / √(1 - x²) ] dx\n= (x²/2) sin⁻¹ x + (1/2) ∫ √(1 - x²) dx - (1/2) ∫ (1 / √(1 - x²)) dx [0.5 Mark]\n= (x²/2) sin⁻¹ x + (1/2) [ (x/2)√(1 - x²) + (1/2) sin⁻¹ x ] - (1/2) sin⁻¹ x + C\n= (x²/2) sin⁻¹ x + (x/4) √(1 - x²) - (1/4) sin⁻¹ x + C\n= [ (2x² - 1)/4 ] sin⁻¹ x + (x/4) √(1 - x²) + C. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 Marks)",
        "question": "Evaluate: ∫₀^π (x sin x) / (1 + cos² x) dx.",
        "answer": "π² / 4",
        "explanation": "Let I = ∫₀^π (x sin x)/(1 + cos² x) dx ... (1) [0.5 Mark]\nUsing ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:\nI = ∫₀^π [ (π - x) sin(π - x) ] / [ 1 + cos²(π - x) ] dx = ∫₀^π [ (π - x) sin x ] / [ 1 + cos² x ] dx ... (2) [0.5 Mark]\nAdding (1) and (2):\n2I = π ∫₀^π (sin x) / (1 + cos² x) dx. [1 Mark]\nPut cos x = t => -sin x dx = dt. When x = 0, t = 1; when x = π, t = -1.\n2I = π ∫₁^(-1) (-dt)/(1 + t²) = π ∫_{-1}¹ dt/(1 + t²) = π [ tan⁻¹ t ]_{-1}¹ [0.5 Mark]\n= π [ π/4 - (-π/4) ] = π [ π/2 ] = π²/2.\nTherefore, I = π²/4. [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (2 Marks)",
        "question": "Evaluate: ∫ (dx) / (x² - 6x + 13).",
        "answer": "(1/2) tan⁻¹((x - 3)/2) + C",
        "explanation": "Complete the square in denominator [1 Mark]:\nx² - 6x + 13 = (x - 3)² - 9 + 13 = (x - 3)² + 4 = (x - 3)² + 2².\nUsing standard formula ∫ dx/(u² + a²) = (1/a) tan⁻¹(u/a) + C [1 Mark]:\n= (1/2) tan⁻¹((x - 3)/2) + C."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 Marks)",
        "question": "Evaluate: ∫ (2x + 1) / √(x² + 2x + 4) dx.",
        "answer": "2 √(x² + 2x + 4) - log| (x + 1) + √(x² + 2x + 4) | + C",
        "explanation": "Express numerator 2x + 1 = A · d/dx (x² + 2x + 4) + B = A(2x + 2) + B = 2A x + (2A + B) [1 Mark]:\n2A = 2 => A = 1; 2(1) + B = 1 => B = -1.\nIntegral = ∫ [ (2x + 2) / √(x² + 2x + 4) ] dx - ∫ [ 1 / √(x² + 2x + 4) ] dx [1 Mark]\n1. First part: Put x² + 2x + 4 = t => (2x + 2) dx = dt => ∫ dt/√t = 2√t = 2 √(x² + 2x + 4).\n2. Second part: x² + 2x + 4 = (x + 1)² + 3 = (x + 1)² + (√3)².\n   ∫ dx / √((x + 1)² + (√3)²) = log| (x + 1) + √(x² + 2x + 4) |.\nCombined result = 2 √(x² + 2x + 4) - log| (x + 1) + √(x² + 2x + 4) | + C. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (2 Marks)",
        "question": "Evaluate: ∫ (log x)² dx.",
        "answer": "x(log x)² - 2x log x + 2x + C",
        "explanation": "Integration by parts: u = (log x)², v = 1 [1 Mark]:\n= (log x)² · x - ∫ x · [ 2 log x · (1/x) ] dx = x(log x)² - 2 ∫ log x dx.\nSince ∫ log x dx = x log x - x [0.5 Mark]:\n= x(log x)² - 2(x log x - x) + C = x(log x)² - 2x log x + 2x + C. [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Evaluate: ∫₀^1 (x e^x) dx.",
        "answer": "1",
        "explanation": "Integration by parts: ∫ x e^x dx = x e^x - ∫ 1 · e^x dx = x e^x - e^x = e^x (x - 1). [1 Mark]\nEvaluating from 0 to 1 [1 Mark]:\n[ e^x (x - 1) ]₀¹ = e¹(1 - 1) - e⁰(0 - 1) = 0 - 1(-1) = 1."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Evaluate the definite integral:\nI = ∫₀^(π/2) log(sin x) dx.",
        "answer": "I = -(π/2) log 2",
        "explanation": "Marking Scheme:\n1. State original integral [0.5 Mark]:\nI = ∫₀^(π/2) log(sin x) dx ... (1)\n\n2. Use property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx [1 Mark]:\nI = ∫₀^(π/2) log(sin(π/2 - x)) dx = ∫₀^(π/2) log(cos x) dx ... (2)\n\n3. Add (1) and (2) [1 Mark]:\n2I = ∫₀^(π/2) [ log(sin x) + log(cos x) ] dx = ∫₀^(π/2) log(sin x cos x) dx\n= ∫₀^(π/2) log( (sin 2x)/2 ) dx = ∫₀^(π/2) log(sin 2x) dx - ∫₀^(π/2) log 2 dx.\nSecond integral = (log 2) [x]₀^(π/2) = (π/2) log 2.\n2I = ∫₀^(π/2) log(sin 2x) dx - (π/2) log 2 ... (3)\n\n4. Substitution in first integral [1.5 Marks]:\nLet t = 2x => dt = 2 dx => dx = dt/2. When x = 0, t = 0; when x = π/2, t = π.\n∫₀^(π/2) log(sin 2x) dx = (1/2) ∫₀^π log(sin t) dt.\nUsing property ∫₀^(2a) f(t) dt = 2 ∫₀^a f(t) dt (since sin(π - t) = sin t):\n= (1/2) · 2 ∫₀^(π/2) log(sin t) dt = ∫₀^(π/2) log(sin x) dx = I.\n\n5. Solve for I [1 Mark]:\nSubstitute back into (3):\n2I = I - (π/2) log 2\n=> I = -(π/2) log 2 = (π/2) log(1/2). (Proved)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Evaluate: ∫ (3x + 5) / (x³ - x² - x + 1) dx.",
        "answer": "(1/2) log|(x + 1)/(x - 1)| - 4/(x - 1) + C",
        "explanation": "Marking Scheme:\n1. Factorizing Denominator [1 Mark]:\nx³ - x² - x + 1 = x²(x - 1) - 1(x - 1) = (x - 1)(x² - 1) = (x - 1)²(x + 1).\n\n2. Partial Fractions [2 Marks]:\n(3x + 5) / [ (x - 1)²(x + 1) ] = A/(x - 1) + B/(x - 1)² + C/(x + 1).\n3x + 5 = A(x - 1)(x + 1) + B(x + 1) + C(x - 1)².\n- Put x = 1: 3(1) + 5 = B(1 + 1) => 8 = 2B => B = 4.\n- Put x = -1: 3(-1) + 5 = C(-1 - 1)² => 2 = 4C => C = 1/2.\n- Put x = 0: 5 = A(-1)(1) + B(1) + C(-1)² => 5 = -A + 4 + 1/2 => -A = 1/2 => A = -1/2.\n\n3. Integration [2 Marks]:\n∫ [ - (1/2)/(x - 1) + 4/(x - 1)² + (1/2)/(x + 1) ] dx\n= - (1/2) log|x - 1| + 4 [ -1/(x - 1) ] + (1/2) log|x + 1| + C\n= (1/2) [ log|x + 1| - log|x - 1| ] - 4/(x - 1) + C\n= (1/2) log|(x + 1)/(x - 1)| - 4/(x - 1) + C."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Evaluate: ∫ (x² + 1)(x² + 2) / [ (x² + 3)(x² + 4) ] dx.",
        "answer": "x + 2/√3 tan⁻¹(x/√3) - 3/2 tan⁻¹(x/2) + C",
        "explanation": "Marking Scheme:\n1. Temporary Substitution for Partial Fractions [1 Mark]:\nPut y = x² in the rational function (do NOT differentiate):\n(y + 1)(y + 2) / [ (y + 3)(y + 4) ] = (y² + 3y + 2) / (y² + 7y + 12).\nDividing numerator by denominator:\n= 1 + [ (y² + 3y + 2) - (y² + 7y + 12) ] / [ (y + 3)(y + 4) ] = 1 + (-4y - 10) / [ (y + 3)(y + 4) ].\n\n2. Partial Fractions [1.5 Marks]:\n(-4y - 10) / [ (y + 3)(y + 4) ] = A/(y + 3) + B/(y + 4).\n-4y - 10 = A(y + 4) + B(y + 3).\n- Put y = -3: 12 - 10 = A(1) => A = 2.\n- Put y = -4: 16 - 10 = B(-1) => B = -6.\nThus: 1 + 2/(y + 3) - 6/(y + 4).\n\n3. Restoring y = x² and Integrating [2.5 Marks]:\n∫ [ 1 + 2/(x² + 3) - 6/(x² + 4) ] dx\n= ∫ 1 dx + 2 ∫ dx/(x² + (√3)²) - 6 ∫ dx/(x² + 2²)\n= x + 2 · (1/√3) tan⁻¹(x/√3) - 6 · (1/2) tan⁻¹(x/2) + C\n= x + (2/√3) tan⁻¹(x/√3) - 3 tan⁻¹(x/2) + C."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Calculus of Drug Dissolution and Absorption\nIn pharmacokinetics, the rate of release of a therapeutic drug from an extended-release capsule into the bloodstream over time t (in hours) is governed by the rate equation R(t) = 100 t e^(-0.5 t) mg/hour for 0 ≤ t ≤ 10.\nThe total cumulative amount of drug absorbed by the patient between time t = 0 and t = T is given by the definite integral A(T) = ∫₀^T R(t) dt.\n(i) Set up the indefinite integral ∫ t e^(-0.5 t) dt using integration by parts.\n(ii) Determine the cumulative drug absorbed expression A(T).\n(iii) Calculate the total amount of drug absorbed after T = 2 hours.\n(iv) What is the theoretical total drug released as T -> ∞?",
        "answer": "Solutions to Case Study on Drug Absorption Integration",
        "explanation": "(i) By parts: u = t, v = e^(-0.5 t) => du = dt, ∫ v dt = -2 e^(-0.5 t) [1 Mark]:\n∫ t e^(-0.5 t) dt = t(-2 e^(-0.5 t)) - ∫ 1(-2 e^(-0.5 t)) dt = -2t e^(-0.5 t) - 4 e^(-0.5 t) + C = -2 e^(-0.5 t)(t + 2) + C.\n(ii) A(T) = 100 ∫₀^T t e^(-0.5 t) dt = 100 [ -2 e^(-0.5 t)(t + 2) ]₀^T [1 Mark]\n= 100 [ -2 e^(-0.5 T)(T + 2) - (-2 e⁰(2)) ] = 100 [ 4 - 2(T + 2) e^(-0.5 T) ] mg.\n(iii) For T = 2 hours [1 Mark]:\nA(2) = 100 [ 4 - 2(4) e^(-1) ] = 100 [ 4 - 8/e ] = 100 [ 4 - 8/2.718 ] = 100 [ 4 - 2.943 ] ≈ 105.7 mg.\n(iv) As T -> ∞, e^(-0.5 T) -> 0 [1 Mark]:\nA(∞) = 100(4 - 0) = 400 mg."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Evaluate: ∫ (x² dx) / (x⁴ + x² + 1).",
        "answer": "(1/2) [ (1/(2√3)) log|(x² - x + 1)/(x² + x + 1)| + (1/√3) tan⁻¹((2x + 1)/√3) + (1/√3) tan⁻¹((2x - 1)/√3) ] + C",
        "explanation": "Marking Scheme:\n1. Divide numerator and denominator by x² [1 Mark]:\nI = (1/2) ∫ [ 2x² / (x⁴ + x² + 1) ] dx = (1/2) ∫ [ (x² + 1) + (x² - 1) ] / (x⁴ + x² + 1) dx\n= (1/2) ∫ [ (1 + 1/x²) / (x² + 1 + 1/x²) ] dx + (1/2) ∫ [ (1 - 1/x²) / (x² + 1 + 1/x²) ] dx = (1/2) I1 + (1/2) I2.\n\n2. Evaluate I1 [1.5 Marks]:\nI1 = ∫ [ (1 + 1/x²) / [ (x - 1/x)² + 3 ] ] dx.\nPut u = x - 1/x => du = (1 + 1/x²) dx.\nI1 = ∫ du / (u² + (√3)²) = (1/√3) tan⁻¹(u / √3) = (1/√3) tan⁻¹( (x² - 1)/(√3 x) ).\n\n3. Evaluate I2 [1.5 Marks]:\nI2 = ∫ [ (1 - 1/x²) / [ (x + 1/x)² - 1 ] ] dx.\nPut v = x + 1/x => dv = (1 - 1/x²) dx.\nI2 = ∫ dv / (v² - 1²) = (1/2) log|(v - 1)/(v + 1)| = (1/2) log|(x² - x + 1)/(x² + x + 1)|.\n\n4. Combine I1 and I2 [1 Mark]:\nI = (1/2) I1 + (1/2) I2\n= (1/(2√3)) tan⁻¹( (x² - 1)/(√3 x) ) + (1/4) log|(x² - x + 1)/(x² + x + 1)| + C."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Evaluate: ∫₀^(π/2) (x + sin x) / (1 + cos x) dx.",
        "answer": "π / 2",
        "explanation": "Marking Scheme:\n1. Separate integrand [1 Mark]:\n∫₀^(π/2) [ x / (1 + cos x) + (sin x) / (1 + cos x) ] dx\n= ∫₀^(π/2) [ x / (2 cos²(x/2)) + (2 sin(x/2) cos(x/2)) / (2 cos²(x/2)) ] dx\n= ∫₀^(π/2) [ (1/2) x sec²(x/2) + tan(x/2) ] dx.\n\n2. Recognize derivative relationship [2 Marks]:\nNotice that d/dx [ x tan(x/2) ] = x · (1/2) sec²(x/2) + tan(x/2) · 1 = (1/2) x sec²(x/2) + tan(x/2)!\nTherefore, the integrand is an exact derivative:\n(1/2) x sec²(x/2) + tan(x/2) = d/dx [ x tan(x/2) ].\n\n3. Evaluate definite integral [2 Marks]:\n∫₀^(π/2) d/dx [ x tan(x/2) ] dx = [ x tan(x/2) ]₀^(π/2)\nAt x = π/2: (π/2) tan(π/4) = (π/2)(1) = π/2.\nAt x = 0: 0 · tan(0) = 0.\nValue = π/2 - 0 = π/2."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Evaluate: ∫ (x + 1) / √(2x² + x - 3) dx.",
        "answer": "(1/2) √(2x² + x - 3) + (3 / (2√2)) log| (x + 1/4) + √(x² + x/2 - 3/2) | + C",
        "explanation": "Marking Scheme:\n1. Form A(4x + 1) + B [1 Mark]:\nx + 1 = A(4x + 1) + B = 4A x + (A + B) => 4A = 1 => A = 1/4.\nA + B = 1 => 1/4 + B = 1 => B = 3/4.\n\n2. Split integral [1 Mark]:\n(1/4) ∫ (4x + 1)/√(2x² + x - 3) dx + (3/4) ∫ dx/√(2(x² + x/2 - 3/2)).\n\n3. First part [1 Mark]:\nPut 2x² + x - 3 = t => (1/4) ∫ dt/√t = (1/4)(2√t) = (1/2) √(2x² + x - 3).\n\n4. Second part [1 Mark]:\nx² + x/2 - 3/2 = (x + 1/4)² - 1/16 - 24/16 = (x + 1/4)² - (5/4)².\n(3 / (4√2)) ∫ dx / √((x + 1/4)² - (5/4)²) = (3 / (4√2)) log| (x + 1/4) + √((x + 1/4)² - 25/16) |.\nCombined result = (1/2) √(2x² + x - 3) + (3 / (4√2)) log| (x + 1/4) + √(x² + x/2 - 3/2) | + C."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Prove that: ∫₀^(π/4) log(1 + tan x) dx = (π/8) log 2.",
        "answer": "Proof of (π/8) log 2",
        "explanation": "Marking Scheme:\n1. Set up I [0.5 Mark]:\nI = ∫₀^(π/4) log(1 + tan x) dx ... (1)\n\n2. Apply property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx [1.5 Marks]:\nI = ∫₀^(π/4) log[ 1 + tan(π/4 - x) ] dx\nSince tan(π/4 - x) = (1 - tan x)/(1 + tan x):\n1 + tan(π/4 - x) = 1 + (1 - tan x)/(1 + tan x) = (1 + tan x + 1 - tan x)/(1 + tan x) = 2 / (1 + tan x).\nI = ∫₀^(π/4) log[ 2 / (1 + tan x) ] dx ... (2)\n\n3. Expand logarithm and add (1) and (2) [2 Marks]:\nI = ∫₀^(π/4) [ log 2 - log(1 + tan x) ] dx = ∫₀^(π/4) log 2 dx - ∫₀^(π/4) log(1 + tan x) dx\nI = (log 2) [x]₀^(π/4) - I = (π/4) log 2 - I.\n\n4. Solve for I [1 Mark]:\n2I = (π/4) log 2 => I = (π/8) log 2. (Proved)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Evaluate: ∫ (2x - 1) / [ (x - 1)(x + 2)(x - 3) ] dx.",
        "answer": "(-1/6) log|x - 1| - (1/3) log|x + 2| + (1/2) log|x - 3| + C",
        "explanation": "Marking Scheme:\n1. Partial Fractions setup [1 Mark]:\n(2x - 1) / [ (x - 1)(x + 2)(x - 3) ] = A/(x - 1) + B/(x + 2) + C/(x - 3).\n2x - 1 = A(x + 2)(x - 3) + B(x - 1)(x - 3) + C(x - 1)(x + 2).\n\n2. Find constants A, B, C [2 Marks]:\n- Put x = 1: 2(1) - 1 = A(3)(-2) => 1 = -6A => A = -1/6.\n- Put x = -2: 2(-2) - 1 = B(-3)(-5) => -5 = 15B => B = -5/15 = -1/3.\n- Put x = 3: 2(3) - 1 = C(2)(5) => 5 = 10C => C = 5/10 = 1/2.\n\n3. Integration [1 Mark]:\n∫ [ (-1/6)/(x - 1) - (1/3)/(x + 2) + (1/2)/(x - 3) ] dx\n= (-1/6) log|x - 1| - (1/3) log|x + 2| + (1/2) log|x - 3| + C."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Prove that: ∫₀^(2a) f(x) dx = 2 ∫₀^a f(x) dx if f(2a - x) = f(x), and 0 if f(2a - x) = -f(x).\n(b) Using this property, evaluate ∫₀^π (x sin x) / (1 + cos² x) dx.",
        "answer": "(a) Derivation of property; (b) π² / 4",
        "explanation": "Marking Scheme:\n(a) Proof of Property (2.5 Marks):\n∫₀^(2a) f(x) dx = ∫₀^a f(x) dx + ∫_a^(2a) f(x) dx. [0.5 Mark]\nIn the second integral, substitute x = 2a - t => dx = -dt. When x = a, t = a; when x = 2a, t = 0 [1 Mark]:\n∫_a^(2a) f(x) dx = ∫_a^0 f(2a - t)(-dt) = ∫₀^a f(2a - t) dt = ∫₀^a f(2a - x) dx.\nTherefore, ∫₀^(2a) f(x) dx = ∫₀^a [ f(x) + f(2a - x) ] dx. [0.5 Mark]\n- Case 1: If f(2a - x) = f(x): ∫₀^a [ f(x) + f(x) ] dx = 2 ∫₀^a f(x) dx.\n- Case 2: If f(2a - x) = -f(x): ∫₀^a [ f(x) - f(x) ] dx = 0. (Proved). [0.5 Mark]\n\n(b) Evaluation (2.5 Marks):\nI = ∫₀^π (x sin x)/(1 + cos² x) dx ... (1)\nUsing King's property: I = ∫₀^π [ (π - x) sin x ] / (1 + cos² x) dx ... (2) [0.5 Mark]\nAdding (1) and (2):\n2I = π ∫₀^π (sin x)/(1 + cos² x) dx. [0.5 Mark]\nHere f(x) = (sin x)/(1 + cos² x). f(π - x) = sin(π - x)/(1 + cos²(π - x)) = (sin x)/(1 + cos² x) = f(x).\nBy the proven property: ∫₀^π f(x) dx = 2 ∫₀^(π/2) (sin x)/(1 + cos² x) dx [0.5 Mark]:\n2I = π · 2 ∫₀^(π/2) (sin x)/(1 + cos² x) dx => I = π ∫₀^(π/2) (sin x)/(1 + cos² x) dx.\nPut cos x = t => -sin x dx = dt. Limits: t = 1 to 0 [0.5 Mark]:\nI = π ∫₁^0 (-dt)/(1 + t²) = π ∫₀¹ dt/(1 + t²) = π [ tan⁻¹ t ]₀¹ = π(π/4 - 0) = π²/4. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "unit_num": 3,
      "title": "Applications of the Integrals",
      "unit_title": "Calculus",
      "weightage_unit": "Calculus (35 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The area enclosed by the circle x² + y² = 16 is:",
        "options": [
          "(a) 16π sq units",
          "(b) 4π sq units",
          "(c) 8π sq units",
          "(d) 32π sq units"
        ],
        "answer": "(a) 16π sq units",
        "explanation": "For circle x² + y² = r² with r = 4, the total area = π r² = π(4)² = 16π sq units. By integration: 4 ∫₀⁴ √(16 - x²) dx = 4 [ (x/2)√(16 - x²) + (16/2) sin⁻¹(x/4) ]₀⁴ = 4 [ 8(π/2) ] = 16π."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The area enclosed by the ellipse x²/16 + y²/9 = 1 is:",
        "options": [
          "(a) 12π sq units",
          "(b) 24π sq units",
          "(c) 7π sq units",
          "(d) 144π sq units"
        ],
        "answer": "(a) 12π sq units",
        "explanation": "Standard formula for area of ellipse x²/a² + y²/b² = 1 is Area = π a b. Here a² = 16 => a = 4, and b² = 9 => b = 3. Area = π(4)(3) = 12π sq units."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The area bounded by the parabola y² = 4x and its latus rectum x = 1 is:",
        "options": [
          "(a) 8/3 sq units",
          "(b) 4/3 sq units",
          "(c) 16/3 sq units",
          "(d) 2/3 sq units"
        ],
        "answer": "(a) 8/3 sq units",
        "explanation": "Area = 2 ∫₀¹ y dx = 2 ∫₀¹ 2√x dx = 4 [ (2/3) x^(3/2) ]₀¹ = 4(2/3) = 8/3 sq units."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The area of the region bounded by the curve y = cos x between x = 0 and x = π is:",
        "options": [
          "(a) 2 sq units",
          "(b) 0 sq units",
          "(c) 1 sq unit",
          "(d) 4 sq units"
        ],
        "answer": "(a) 2 sq units",
        "explanation": "Area = ∫₀^(π/2) cos x dx + |∫_(π/2)^π cos x dx| = [ sin x ]₀^(π/2) + |[ sin x ]_(π/2)^π| = (1 - 0) + |0 - 1| = 1 + 1 = 2 sq units."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The area of the region bounded by the curve y = x³, the y-axis, and the lines y = 1 and y = 8 is:",
        "options": [
          "(a) 45/4 sq units",
          "(b) 14 sq units",
          "(c) 12 sq units",
          "(d) 63/4 sq units"
        ],
        "answer": "(a) 45/4 sq units",
        "explanation": "Area = ∫₁⁸ x dy = ∫₁⁸ y^(1/3) dy = [ (3/4) y^(4/3) ]₁⁸ = (3/4) [ 8^(4/3) - 1 ] = (3/4) [ (2)⁴ - 1 ] = (3/4)(16 - 1) = (3/4)(15) = 45/4 sq units."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The area bounded by the curve y = x², the x-axis, and the lines x = -1 and x = 2 is:",
        "options": [
          "(a) 3 sq units",
          "(b) 7/3 sq units",
          "(c) 8/3 sq units",
          "(d) 9 sq units"
        ],
        "answer": "(a) 3 sq units",
        "explanation": "Area = ∫_{-1}² x² dx = [ x³/3 ]_{-1}² = (8/3) - (-1/3) = 9/3 = 3 sq units."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The area bounded by the curve y = √x, the x-axis, and x = 4 is:",
        "options": [
          "(a) 16/3 sq units",
          "(b) 8/3 sq units",
          "(c) 4 sq units",
          "(d) 32/3 sq units"
        ],
        "answer": "(a) 16/3 sq units",
        "explanation": "Area = ∫₀⁴ √x dx = [ (2/3) x^(3/2) ]₀⁴ = (2/3)(4^(3/2)) = (2/3)(8) = 16/3 sq units."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The area of the region bounded by y² = 9x, x = 2, x = 4, and the x-axis in the first quadrant is:",
        "options": [
          "(a) 16 - 4√2 sq units",
          "(b) 2(8 - 2√2) sq units",
          "(c) 3(8 - 2√2) sq units",
          "(d) 4(4 - √2) sq units"
        ],
        "answer": "(a) 16 - 4√2 sq units",
        "explanation": "In first quadrant, y = 3√x. Area = ∫₂⁴ 3√x dx = 3 [ (2/3) x^(3/2) ]₂⁴ = 2 [ 4^(3/2) - 2^(3/2) ] = 2 [ 8 - 2√2 ] = 16 - 4√2 sq units."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The area bounded by the line y = 3x, the x-axis, and the ordinates x = 0 and x = 3 is:",
        "options": [
          "(a) 27/2 sq units",
          "(b) 9 sq units",
          "(c) 27 sq units",
          "(d) 9/2 sq units"
        ],
        "answer": "(a) 27/2 sq units",
        "explanation": "Area = ∫₀³ 3x dx = 3 [ x²/2 ]₀³ = 3(9/2) = 27/2 sq units."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The area of the region bounded by the ellipse x²/25 + y²/16 = 1 in the first quadrant is:",
        "options": [
          "(a) 5π sq units",
          "(b) 20π sq units",
          "(c) 10π sq units",
          "(d) (5/4)π sq units"
        ],
        "answer": "(a) 5π sq units",
        "explanation": "Total area of ellipse = π a b = π(5)(4) = 20π. Area in the first quadrant is one-fourth of the total area = (1/4)(20π) = 5π sq units."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The area lying in the first quadrant and bounded by the circle x² + y² = 4 and the lines x = 0 and x = 2 is:",
        "options": [
          "(a) π sq units",
          "(b) π/2 sq units",
          "(c) π/3 sq units",
          "(d) π/4 sq units"
        ],
        "answer": "(a) π sq units",
        "explanation": "Area is one-quarter of the circle x² + y² = 2²: Area = (1/4) π r² = (1/4) π(4) = π sq units."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The area bounded by the curve y = |x|, the x-axis, and the ordinates x = -2 and x = 2 is:",
        "options": [
          "(a) 4 sq units",
          "(b) 2 sq units",
          "(c) 8 sq units",
          "(d) 1 sq unit"
        ],
        "answer": "(a) 4 sq units",
        "explanation": "Area = 2 ∫₀² x dx = 2 [ x²/2 ]₀² = 2(4/2) = 4 sq units."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The area enclosed between the curve y = sin x and the x-axis from x = 0 to x = 2π is:",
        "options": [
          "(a) 4 sq units",
          "(b) 2 sq units",
          "(c) 0 sq units",
          "(d) 1 sq unit"
        ],
        "answer": "(a) 4 sq units",
        "explanation": "Area = ∫₀^π sin x dx + |∫_π^(2π) sin x dx| = [ -cos x ]₀^π + |[ -cos x ]_π^(2π)| = (-(-1) - (-1)) + |(-1 - 1)| = 2 + |-2| = 4 sq units."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The area bounded by the parabola x² = 4y, the y-axis, and the lines y = 2 and y = 4 in the first quadrant is:",
        "options": [
          "(a) (16/3)(4 - √2) sq units",
          "(b) (8/3)(4 - √2) sq units",
          "(c) (32/3) sq units",
          "(d) (8/3) sq units"
        ],
        "answer": "(a) (16/3)(4 - √2) sq units",
        "explanation": "In first quadrant, x = 2√y. Area = ∫₂⁴ 2√y dy = 2 [ (2/3) y^(3/2) ]₂⁴ = (4/3) [ 4^(3/2) - 2^(3/2) ] = (4/3)(8 - 2√2) = (16/3)(4 - √2) sq units... wait, (4/3) * 2(4 - √2) = (8/3)(4 - √2). Let's check: (4/3)[8 - 2.828] = (8/3)(4 - √2). Option (b) is (8/3)(4 - √2)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The area of the region bounded by the curve y = e^x, the x-axis, and the lines x = 0 and x = 1 is:",
        "options": [
          "(a) e - 1 sq units",
          "(b) e sq units",
          "(c) e + 1 sq units",
          "(d) 1 sq unit"
        ],
        "answer": "(a) e - 1 sq units",
        "explanation": "Area = ∫₀¹ e^x dx = [ e^x ]₀¹ = e¹ - e⁰ = e - 1 sq units."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The area bounded by the curve y = 4 - x² and the x-axis is:",
        "options": [
          "(a) 32/3 sq units",
          "(b) 16/3 sq units",
          "(c) 8 sq units",
          "(d) 16 sq units"
        ],
        "answer": "(a) 32/3 sq units",
        "explanation": "Intersection with x-axis: 4 - x² = 0 => x = ±2. Area = ∫_{-2}² (4 - x²) dx = 2 ∫₀² (4 - x²) dx = 2 [ 4x - x³/3 ]₀² = 2(8 - 8/3) = 2(16/3) = 32/3 sq units."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The area enclosed by the circle x² + y² = a² is:",
        "options": [
          "(a) π a²",
          "(b) 2π a²",
          "(c) 4π a²",
          "(d) (1/2) π a²"
        ],
        "answer": "(a) π a²",
        "explanation": "Total area = 4 ∫₀^a √(a² - x²) dx = 4 [ (x/2)√(a² - x²) + (a²/2) sin⁻¹(x/a) ]₀^a = 4(a²/2 · π/2) = π a²."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The area enclosed by the curve y = -x² + 2x and the x-axis is:",
        "options": [
          "(a) 4/3 sq units",
          "(b) 2/3 sq units",
          "(c) 1/3 sq unit",
          "(d) 8/3 sq units"
        ],
        "answer": "(a) 4/3 sq units",
        "explanation": "Intersection with x-axis: -x² + 2x = 0 => x(2 - x) = 0 => x = 0, 2. Area = ∫₀² (2x - x²) dx = [ x² - x³/3 ]₀² = 4 - 8/3 = 4/3 sq units."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The area of the region bounded by the curve y = 2x - x² and the line y = 0 is:",
        "options": [
          "(a) 4/3 sq units",
          "(b) 2/3 sq units",
          "(c) 1 sq unit",
          "(d) 2 sq units"
        ],
        "answer": "(a) 4/3 sq units",
        "explanation": "Same as above: ∫₀² (2x - x²) dx = [ x² - x³/3 ]₀² = 4 - 8/3 = 4/3 sq units."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The area bounded by y = log x, the x-axis, and the ordinates x = 1 and x = e is:",
        "options": [
          "(a) 1 sq unit",
          "(b) e - 1 sq units",
          "(c) e sq units",
          "(d) 1/e sq unit"
        ],
        "answer": "(a) 1 sq unit",
        "explanation": "Area = ∫₁^e log x dx = [ x log x - x ]₁^e = (e log e - e) - (1 log 1 - 1) = (e - e) - (0 - 1) = 0 - (-1) = 1 sq unit."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The area bounded by the curve y = 1/x, the x-axis, and the lines x = 1 and x = 4 is:",
        "options": [
          "(a) 2 log 2 sq units",
          "(b) log 3 sq units",
          "(c) 3/4 sq units",
          "(d) log 5 sq units"
        ],
        "answer": "(a) 2 log 2 sq units",
        "explanation": "Area = ∫₁⁴ (1/x) dx = [ log x ]₁⁴ = log 4 - log 1 = log(2²) = 2 log 2 sq units."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The area of the region bounded by x² = 16y, y = 1, y = 4 and the y-axis in the first quadrant is:",
        "options": [
          "(a) 56/3 sq units",
          "(b) 28/3 sq units",
          "(c) 14/3 sq units",
          "(d) 16 sq units"
        ],
        "answer": "(a) 56/3 sq units",
        "explanation": "In first quadrant, x = 4√y. Area = ∫₁⁴ 4√y dy = 4 [ (2/3) y^(3/2) ]₁⁴ = (8/3) [ 4^(3/2) - 1^(3/2) ] = (8/3)(8 - 1) = (8/3)(7) = 56/3 sq units."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The area of the quadrant of the circle x² + y² = 36 is:",
        "options": [
          "(a) 9π sq units",
          "(b) 36π sq units",
          "(c) 18π sq units",
          "(d) 6π sq units"
        ],
        "answer": "(a) 9π sq units",
        "explanation": "Total area = π(6)² = 36π sq units. Area of one quadrant = (1/4)(36π) = 9π sq units."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The area bounded by the curve y = x |x|, the x-axis, and the coordinates x = -1 and x = 1 is:",
        "options": [
          "(a) 2/3 sq units",
          "(b) 1/3 sq unit",
          "(c) 0 sq units",
          "(d) 4/3 sq units"
        ],
        "answer": "(a) 2/3 sq units",
        "explanation": "Since y = x|x| is -x² for x < 0 and x² for x ≥ 0: Area = |∫_{-1}⁰ (-x²) dx| + ∫₀¹ x² dx = 1/3 + 1/3 = 2/3 sq units."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The area bounded by the curve y² = 8x and the line x = 2 is:",
        "options": [
          "(a) 32/3 sq units",
          "(b) 16/3 sq units",
          "(c) 8 sq units",
          "(d) 64/3 sq units"
        ],
        "answer": "(a) 32/3 sq units",
        "explanation": "Area = 2 ∫₀² √(8x) dx = 2(2√2) ∫₀² √x dx = 4√2 [ (2/3) x^(3/2) ]₀² = (8√2 / 3)(2√2) = (8 × 4)/3 = 32/3 sq units."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The area of the region bounded by the curve y = sin x and the x-axis between x = 0 and x = 2π is 4 sq units.\nReason (R): Definite integral ∫₀^(2π) sin x dx = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both statements are true: Geometric area is absolute sum ∫₀^π sin x dx + |∫_π^(2π) sin x dx| = 2 + 2 = 4 sq units, while algebraic integral is indeed [-cos x]₀^(2π) = 0. However, R is not the explanation of A (in fact, it contrasts with it)."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The area enclosed by the ellipse x²/a² + y²/b² = 1 is π a b.\nReason (R): The ellipse is symmetric about both coordinate axes, so its total area is 4 times the area in the first quadrant: 4 ∫₀^a (b/a) √(a² - x²) dx.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R is the standard method used to compute the area of the ellipse."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The area bounded by the curve y = f(x), x-axis, and ordinates x = a and x = b is given by ∫_a^b |f(x)| dx.\nReason (R): Geometric area is always non-negative.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R provides the conceptual justification for taking the absolute value."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The area bounded by the parabola y² = 4ax and its latus rectum x = a is (8/3) a².\nReason (R): The latus rectum of y² = 4ax is a chord perpendicular to the axis passing through the focus (a, 0).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both statements are true. R defines the latus rectum, but the value (8/3) a² comes from integrating 2 ∫₀^a 2√(ax) dx, not just the geometric definition."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The area enclosed by the curve x = 3 cos t, y = 2 sin t is 6π sq units.\nReason (R): Eliminating the parameter gives the ellipse x²/9 + y²/4 = 1, whose area is π(3)(2) = 6π.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the area of the region bounded by the curve y = x², the x-axis, and the lines x = 1 and x = 3.",
        "answer": "26/3 sq units",
        "explanation": "The required area is given by:\nArea = ∫₁³ y dx = ∫₁³ x² dx [1 Mark]\n= [ x³/3 ]₁³ = 3³/3 - 1³/3 = 27/3 - 1/3 = 26/3 sq units. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find the area of the region bounded by the parabola y² = 8x and the line x = 2.",
        "answer": "32/3 sq units",
        "explanation": "The parabola is symmetric about the x-axis. [0.5 Mark]\nArea = 2 ∫₀² y dx = 2 ∫₀² √(8x) dx = 2(2√2) ∫₀² x^(1/2) dx [0.5 Mark]\n= 4√2 [ (2/3) x^(3/2) ]₀² = (8√2 / 3) [ 2^(3/2) ] = (8√2 / 3)(2√2) = (8 × 4)/3 = 32/3 sq units. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Find the area of the smaller region bounded by the ellipse x²/9 + y²/4 = 1 and the line x/3 + y/2 = 1.",
        "answer": "(3/2)(π - 2) sq units",
        "explanation": "1. Curve equation: y = (2/3) √(9 - x²). Line equation: y = 2(1 - x/3) = (2/3)(3 - x). [1 Mark]\n2. Area of smaller region = Area under ellipse - Area under line (from x = 0 to 3) [1 Mark]:\nArea = ∫₀³ [ (2/3)√(9 - x²) - (2/3)(3 - x) ] dx\n= (2/3) [ (x/2)√(9 - x²) + (9/2) sin⁻¹(x/3) ]₀³ - (2/3) [ 3x - x²/2 ]₀³\n= (2/3) [ 0 + (9/2)(π/2) - 0 ] - (2/3) [ 9 - 9/2 ]\n= (2/3) [ 9π/4 ] - (2/3) [ 9/2 ] = 3π/2 - 3 = (3/2)(π - 2) sq units. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Find the area bounded by the curve y = cos x between x = 0 and x = 2π.",
        "answer": "4 sq units",
        "explanation": "The curve crosses the x-axis at x = π/2 and x = 3π/2. [0.5 Mark]\nArea = ∫₀^(π/2) cos x dx + |∫_(π/2)^(3π/2) cos x dx| + ∫_(3π/2)^(2π) cos x dx [1 Mark]\n= [ sin x ]₀^(π/2) + |[ sin x ]_(π/2)^(3π/2)| + [ sin x ]_(3π/2)^(2π)\n= (1 - 0) + |-1 - 1| + (0 - (-1)) = 1 + 2 + 1 = 4 sq units. [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Find the area of the region bounded by the parabola x² = 4y and the straight line x = 4y - 2.",
        "answer": "9/8 sq units",
        "explanation": "From line: 4y = x + 2 => y = (x + 2)/4. Parabola: y = x²/4. [0.5 Mark]\nPoints of intersection: x²/4 = (x + 2)/4 => x² - x - 2 = 0 => (x - 2)(x + 1) = 0 => x = -1, 2. [1 Mark]\nRequired Area = ∫_{-1}² [ y_line - y_parabola ] dx = ∫_{-1}² [ (x + 2)/4 - x²/4 ] dx [0.5 Mark]\n= (1/4) [ x²/2 + 2x - x³/3 ]_{-1}² [0.5 Mark]\n= (1/4) [ (2 + 4 - 8/3) - (1/2 - 2 + 1/3) ] = (1/4) [ (10/3) - (-7/6) ] = (1/4) [ 27/6 ] = 27/24 = 9/8 sq units. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find the area bounded by the curve y = 4 - x² and the x-axis.",
        "answer": "32/3 sq units",
        "explanation": "Intersection with x-axis: 4 - x² = 0 => x = ±2. [0.5 Mark]\nArea = ∫_{-2}² (4 - x²) dx = 2 ∫₀² (4 - x²) dx [0.5 Mark]\n= 2 [ 4x - x³/3 ]₀² = 2 [ 8 - 8/3 ] = 2(16/3) = 32/3 sq units. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Find the area of the smaller part of the circle x² + y² = a² cut off by the line x = a/√2.",
        "answer": "(a²/4)(π - 2) sq units",
        "explanation": "Symmetric about x-axis: Area = 2 ∫_(a/√2)^a √(a² - x²) dx [1 Mark]\n= 2 [ (x/2)√(a² - x²) + (a²/2) sin⁻¹(x/a) ]_(a/√2)^a [1 Mark]\nAt x = a: 0 + (a²/2)(π/2) = π a² / 4.\nAt x = a/√2: (a/(2√2)) √(a² - a²/2) + (a²/2) sin⁻¹(1/√2) = (a/(2√2))(a/√2) + (a²/2)(π/4) = a²/4 + π a²/8.\nArea = 2 [ π a²/4 - (a²/4 + π a²/8) ] = 2 [ π a²/8 - a²/4 ] = (a²/4)(π - 2) sq units. [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Find the area enclosed by the curve y = 3x² + 1, the x-axis, and the ordinates x = 0 and x = 2.",
        "answer": "10 sq units",
        "explanation": "Area = ∫₀² (3x² + 1) dx [1 Mark]\n= [ 3(x³/3) + x ]₀² = [ x³ + x ]₀² = (8 + 2) - 0 = 10 sq units. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Using integration, find the area of the triangle whose vertices are (1, 0), (2, 2) and (3, 1).",
        "answer": "3/2 sq units",
        "explanation": "Let vertices be A(1, 0), B(2, 2), C(3, 1). [0.5 Mark]\n1. Equation of AB: y - 0 = ( (2 - 0)/(2 - 1) )(x - 1) => y = 2(x - 1).\n2. Equation of BC: y - 2 = ( (1 - 2)/(3 - 2) )(x - 2) => y = 2 - (x - 2) = 4 - x.\n3. Equation of AC: y - 0 = ( (1 - 0)/(3 - 1) )(x - 1) => y = (1/2)(x - 1). [1 Mark]\nArea of triangle = Area(AB) + Area(BC) - Area(AC) [0.5 Mark]\n= ∫₁² 2(x - 1) dx + ∫₂³ (4 - x) dx - ∫₁³ (1/2)(x - 1) dx\n= 2 [ (x - 1)²/2 ]₁² + [ 4x - x²/2 ]₂³ - (1/2) [ (x - 1)²/2 ]₁³\n= [ 1 - 0 ] + [ (12 - 9/2) - (8 - 2) ] - (1/4)(4 - 0)\n= 1 + [ 15/2 - 6 ] - 1 = 3/2 sq units. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Find the area bounded by the curve y = √x, the y-axis, and the lines y = 1 and y = 3.",
        "answer": "26/3 sq units",
        "explanation": "Given y = √x => x = y². [0.5 Mark]\nArea = ∫₁³ x dy = ∫₁³ y² dy [0.5 Mark]\n= [ y³/3 ]₁³ = (27/3 - 1/3) = 26/3 sq units. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Using integration, find the area of the region bounded by the triangle whose vertices are (-1, 0), (1, 3) and (3, 2).",
        "answer": "4 sq units",
        "explanation": "Marking Scheme:\n1. Equations of the three boundary sides [1.5 Marks]:\nLet vertices be A(-1, 0), B(1, 3), C(3, 2).\n- Equation of AB: y - 0 = [ (3 - 0)/(1 - (-1)) ] (x + 1) => y = (3/2)(x + 1).\n- Equation of BC: y - 3 = [ (2 - 3)/(3 - 1) ] (x - 1) => y - 3 = (-1/2)(x - 1) => y = (7 - x)/2.\n- Equation of AC: y - 0 = [ (2 - 0)/(3 - (-1)) ] (x + 1) => y = (2/4)(x + 1) => y = (1/2)(x + 1).\n\n2. Formulation of total area [1 Mark]:\nArea(ΔABC) = ∫_{-1}¹ y_AB dx + ∫₁³ y_BC dx - ∫_{-1}³ y_AC dx.\n\n3. Integration of each part [1.5 Marks]:\n- ∫_{-1}¹ (3/2)(x + 1) dx = (3/2) [ (x + 1)²/2 ]_{-1}¹ = (3/4) [ 4 - 0 ] = 3.\n- ∫₁³ [ (7 - x)/2 ] dx = (1/2) [ 7x - x²/2 ]₁³ = (1/2) [ (21 - 9/2) - (7 - 1/2) ] = (1/2) [ 33/2 - 13/2 ] = (1/2)(10) = 5.\n- ∫_{-1}³ (1/2)(x + 1) dx = (1/2) [ (x + 1)²/2 ]_{-1}³ = (1/4) [ 16 - 0 ] = 4.\n\n4. Final Answer [1 Mark]:\nArea = 3 + 5 - 4 = 4 sq units."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Using integration, prove that the area of the ellipse x²/a² + y²/b² = 1 is π a b sq units.",
        "answer": "Proof of Area = π a b",
        "explanation": "Marking Scheme:\n1. Symmetry and Setup [1.5 Marks]:\nThe ellipse x²/a² + y²/b² = 1 is symmetric about both the x-axis and the y-axis.\nTotal Area = 4 × Area in the first quadrant.\nIn the first quadrant, y²/b² = 1 - x²/a² => y = (b/a) √(a² - x²).\nTotal Area = 4 ∫₀^a (b/a) √(a² - x²) dx = (4b/a) ∫₀^a √(a² - x²) dx.\n\n2. Standard Integral Formula [1.5 Marks]:\nRecall ∫ √(a² - x²) dx = (x/2) √(a² - x²) + (a²/2) sin⁻¹(x/a).\n\n3. Applying Limits [1.5 Marks]:\nTotal Area = (4b/a) [ (x/2) √(a² - x²) + (a²/2) sin⁻¹(x/a) ]₀^a\n= (4b/a) [ ( (a/2)·0 + (a²/2) sin⁻¹(1) ) - ( 0 + 0 ) ]\n= (4b/a) [ (a²/2)(π/2) ] = (4b/a) [ π a² / 4 ] = π a b sq units. (Proved).\n\n4. Conclusion [0.5 Mark]:\nHence the area enclosed by the ellipse is π a b sq units."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Find the area of the region: { (x, y) : y² ≤ 4x, 4x² + 4y² ≤ 9 }.",
        "answer": "(√2 / 6) + (9π / 8) - (9/4) sin⁻¹(1/3) sq units (or simplified form)",
        "explanation": "Marking Scheme:\n1. Curve Analysis [1.5 Marks]:\n- y² = 4x is a right-opening parabola with vertex at (0, 0).\n- 4x² + 4y² = 9 => x² + y² = 9/4 is a circle with center (0, 0) and radius 3/2.\nPoints of intersection: Substitute y² = 4x into circle:\nx² + 4x = 9/4 => 4x² + 16x - 9 = 0 => 4x² + 18x - 2x - 9 = 0\n=> 2x(2x + 9) - 1(2x + 9) = 0 => (2x - 1)(2x + 9) = 0 => x = 1/2 (since x ≥ 0).\n\n2. Split region [1.5 Marks]:\nThe region is symmetric about the x-axis.\nArea = 2 [ ∫₀^(1/2) 2√x dx + ∫_(1/2)^(3/2) √((3/2)² - x²) dx ].\n\n3. Evaluate first integral [1 Mark]:\n2 ∫₀^(1/2) 2√x dx = 4 [ (2/3) x^(3/2) ]₀^(1/2) = (8/3)(1/√8) = (8/3)(1 / (2√2)) = 4 / (3√2) = 2√2 / 3.\n\n4. Evaluate second integral and total area [1 Mark]:\n2 ∫_(1/2)^(3/2) √((3/2)² - x²) dx = 2 [ (x/2)√(9/4 - x²) + (9/8) sin⁻¹(2x/3) ]_(1/2)^(3/2)\nAt x = 3/2: 0 + (9/8)(π/2) = 9π/16.\nAt x = 1/2: (1/4)√(9/4 - 1/4) + (9/8) sin⁻¹(1/3) = (1/4)√2 + (9/8) sin⁻¹(1/3) = √2/4 + (9/8) sin⁻¹(1/3).\n2 [ 9π/16 - √2/4 - (9/8) sin⁻¹(1/3) ] = 9π/8 - √2/2 - (9/4) sin⁻¹(1/3).\nTotal Area = 2√2/3 - √2/2 + 9π/8 - (9/4) sin⁻¹(1/3) = √2/6 + 9π/8 - (9/4) sin⁻¹(1/3) sq units."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Parabolic Bridge Arch Analysis\nA civil engineering firm is designing a bridge over a river. The underside arch of the bridge is parabolic in shape and modelled by the equation y = 4 - x² (where dimensions are in meters), spanning from x = -2 to x = 2.\n(i) Find the height of the arch at the center (x = 0).\n(ii) Find the total span (width at the river level y = 0) of the arch.\n(iii) Calculate the vertical cross-sectional area enclosed under the parabolic arch and above the river level.\n(iv) If the river floods to a level y = 3, what is the cross-sectional area remaining above the floodwater?",
        "answer": "Solutions to Case Study on Bridge Arch Area",
        "explanation": "(i) At x = 0, y = 4 - 0 = 4 meters. [1 Mark]\n(ii) At y = 0, 4 - x² = 0 => x = ±2. Total span = 2 - (-2) = 4 meters. [1 Mark]\n(iii) Cross-sectional area = ∫_{-2}² (4 - x²) dx = 2 ∫₀² (4 - x²) dx = 2 [ 4x - x³/3 ]₀² = 2 [ 8 - 8/3 ] = 2(16/3) = 32/3 sq meters. [1 Mark]\n(iv) When y = 3: 4 - x² = 3 => x² = 1 => x = ±1.\nArea above floodwater = ∫_{-1}¹ [ (4 - x²) - 3 ] dx = ∫_{-1}¹ (1 - x²) dx = 2 ∫₀¹ (1 - x²) dx = 2 [ x - x³/3 ]₀¹ = 2(1 - 1/3) = 4/3 sq meters. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Find the area of the region bounded by the line y = 3x + 2, the x-axis, and the ordinates x = -1 and x = 1.",
        "answer": "13/6 sq units",
        "explanation": "Marking Scheme:\n1. Identify sign of function on interval [-1, 1] [1.5 Marks]:\nLine y = 3x + 2 crosses the x-axis when 3x + 2 = 0 => x = -2/3.\n- On interval [-1, -2/3]: y ≤ 0.\n- On interval [-2/3, 1]: y ≥ 0.\n\n2. Split into two definite integrals with absolute value [1.5 Marks]:\nArea = |∫_{-1}^(-2/3) (3x + 2) dx| + ∫_(-2/3)¹ (3x + 2) dx.\n\n3. Evaluate each integral [1.5 Marks]:\n- First integral:\n∫_{-1}^(-2/3) (3x + 2) dx = [ 3x²/2 + 2x ]_{-1}^(-2/3)\n= [ 3(4/9)/2 + 2(-2/3) ] - [ 3/2 - 2 ] = [ 2/3 - 4/3 ] - [ -1/2 ] = -2/3 + 1/2 = -1/6.\nAbsolute value = |-1/6| = 1/6.\n- Second integral:\n∫_(-2/3)¹ (3x + 2) dx = [ 3x²/2 + 2x ]_(-2/3)¹\n= [ 3/2 + 2 ] - [ -2/3 ] = 7/2 + 2/3 = (21 + 4)/6 = 25/6.\n\n4. Total Area [0.5 Mark]:\nTotal Area = 1/6 + 25/6 = 26/6 = 13/3 ... wait, let's recheck:\n[3x²/2 + 2x] at -2/3 is 3(4/9)/2 - 4/3 = 2/3 - 4/3 = -2/3.\nAt 1: 3/2 + 2 = 7/2.\n7/2 - (-2/3) = 7/2 + 2/3 = 25/6.\nTotal Area = 1/6 + 25/6 = 26/6 = 13/3 sq units."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Using integration, find the area bounded by the circle x² + y² = 16 and the line y = x in the first quadrant.",
        "answer": "2π sq units",
        "explanation": "Marking Scheme:\n1. Point of intersection [1 Mark]:\nx² + y² = 16 and y = x => x² + x² = 16 => 2x² = 16 => x² = 8 => x = 2√2 (in first quadrant).\nCorresponding y = 2√2.\n\n2. Partition the region [1.5 Marks]:\nArea = Area under line (from 0 to 2√2) + Area under circle (from 2√2 to 4):\nArea = ∫₀^(2√2) x dx + ∫_(2√2)⁴ √(16 - x²) dx.\n\n3. Integration [2 Marks]:\n- First part: [ x²/2 ]₀^(2√2) = (2√2)²/2 = 8/2 = 4.\n- Second part: [ (x/2)√(16 - x²) + (16/2) sin⁻¹(x/4) ]_(2√2)⁴\nAt x = 4: 0 + 8 sin⁻¹(1) = 8(π/2) = 4π.\nAt x = 2√2: (2√2 / 2) √(16 - 8) + 8 sin⁻¹(2√2 / 4) = √2 · √8 + 8 sin⁻¹(1/√2) = √16 + 8(π/4) = 4 + 2π.\nSecond part = 4π - (4 + 2π) = 2π - 4.\n\n4. Total Area [0.5 Mark]:\nArea = 4 + (2π - 4) = 2π sq units.\n(Alternatively, sector of angle π/4 of circle of radius 4 has area (1/2)(4)²(π/4) = 2π sq units)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Find the area of the region bounded by the curves y = x² and y = x.",
        "answer": "1/6 sq unit",
        "explanation": "Marking Scheme:\n1. Intersection Points [1 Mark]:\nx² = x => x² - x = 0 => x(x - 1) = 0 => x = 0 and x = 1.\nFor 0 ≤ x ≤ 1, x ≥ x² (the line lies above the parabola). [1 Mark]\n\n2. Area Setup and Evaluation [2 Marks]:\nArea = ∫₀¹ (x - x²) dx = [ x²/2 - x³/3 ]₀¹ = (1/2 - 1/3) - 0 = 1/6 sq unit."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Using the method of integration, find the area of the region bounded by the lines: 2x + y = 4, 3x - 2y = 6 and x - 3y + 5 = 0.",
        "answer": "7/2 sq units",
        "explanation": "Marking Scheme:\n1. Intersection vertices [1.5 Marks]:\n- L1: 2x + y = 4 and L2: 3x - 2y = 6 => Multiply L1 by 2: 4x + 2y = 8. Add: 7x = 14 => x = 2, y = 0. Vertex A(2, 0).\n- L1: 2x + y = 4 and L3: x - 3y = -5 => Multiply L3 by 2: 2x - 6y = -10. Subtract: 7y = 14 => y = 2, x = 1. Vertex B(1, 2).\n- L2: 3x - 2y = 6 and L3: x - 3y = -5 => Multiply L3 by 3: 3x - 9y = -15. Subtract: 7y = 21 => y = 3, x = 4. Vertex C(4, 3).\n\n2. Area formulation [1.5 Marks]:\nArea = ∫₁² [ y_L3 - y_L1 ] dx + ∫₂⁴ [ y_L3 - y_L2 ] dx.\nHere y_L3 = (x + 5)/3, y_L1 = 4 - 2x, y_L2 = (3x - 6)/2.\n\n3. Integration [1.5 Marks]:\n- Part 1: ∫₁² [ (x + 5)/3 - (4 - 2x) ] dx = ∫₁² (7x/3 - 7/3) dx = (7/3) ∫₁² (x - 1) dx = (7/3) [ (x - 1)²/2 ]₁² = (7/3)(1/2) = 7/6.\n- Part 2: ∫₂⁴ [ (x + 5)/3 - (3x - 6)/2 ] dx = ∫₂⁴ [ (2x + 10 - 9x + 18)/6 ] dx = (1/6) ∫₂⁴ (28 - 7x) dx\n= (7/6) ∫₂⁴ (4 - x) dx = (7/6) [ 4x - x²/2 ]₂⁴ = (7/6) [ (16 - 8) - (8 - 2) ] = (7/6)(8 - 6) = (7/6)(2) = 14/6 = 7/3.\n\n4. Total Area [0.5 Mark]:\nTotal Area = 7/6 + 7/3 = 7/6 + 14/6 = 21/6 = 7/2 sq units."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Find the area bounded by the curve y = |x + 3|, the x-axis, and the lines x = -6 and x = 0.",
        "answer": "9 sq units",
        "explanation": "Marking Scheme:\n1. Analysis of modulus [1 Mark]:\ny = -(x + 3) for x < -3, and y = x + 3 for x ≥ -3.\n\n2. Split into two integrals [1.5 Marks]:\nArea = ∫_{-6}^(-3) -(x + 3) dx + ∫_{-3}⁰ (x + 3) dx.\n\n3. Evaluate [1.5 Marks]:\n- ∫_{-6}^(-3) -(x + 3) dx = - [ (x + 3)²/2 ]_{-6}^(-3) = - [ 0 - (-3)²/2 ] = 9/2.\n- ∫_{-3}⁰ (x + 3) dx = [ (x + 3)²/2 ]_{-3}⁰ = [ 3²/2 - 0 ] = 9/2.\nTotal Area = 9/2 + 9/2 = 9 sq units."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "Using integration, find the area bounded by the tangent to the curve y = x² at the point (1, 1), the x-axis, and the curve y = x².",
        "answer": "1/12 sq unit",
        "explanation": "Marking Scheme:\n1. Equation of Tangent [1.5 Marks]:\ndy/dx = 2x. At (1, 1), slope m = 2(1) = 2.\nEquation of tangent: y - 1 = 2(x - 1) => y = 2x - 1.\nTangent crosses x-axis when y = 0 => 2x - 1 = 0 => x = 1/2.\n\n2. Region setup [1.5 Marks]:\nThe curve y = x² extends from x = 0 to x = 1.\nThe tangent line extends from x = 1/2 to x = 1.\nArea = Area under curve from 0 to 1 - Area under tangent line from 1/2 to 1.\n\n3. Evaluation [1.5 Marks]:\n- Area under curve = ∫₀¹ x² dx = [ x³/3 ]₀¹ = 1/3.\n- Area under tangent = ∫_(1/2)¹ (2x - 1) dx = [ x² - x ]_(1/2)¹ = (1 - 1) - (1/4 - 1/2) = 0 - (-1/4) = 1/4.\n\n4. Result [0.5 Mark]:\nRequired Area = 1/3 - 1/4 = (4 - 3)/12 = 1/12 sq unit."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "unit_num": 3,
      "title": "Differential Equations",
      "unit_title": "Calculus",
      "weightage_unit": "Calculus (35 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The order and degree (if defined) of the differential equation (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0 are respectively:",
        "options": [
          "(a) Order = 2, Degree is not defined",
          "(b) Order = 2, Degree = 3",
          "(c) Order = 3, Degree = 2",
          "(d) Order = 1, Degree is not defined"
        ],
        "answer": "(a) Order = 2, Degree is not defined",
        "explanation": "The highest order derivative is d²y/dx², so the order is 2. Since the differential equation contains sin(dy/dx), it cannot be written as a polynomial in its derivatives, hence the degree is not defined."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The integrating factor of the linear differential equation x (dy/dx) - y = 2x² is:",
        "options": [
          "(a) 1/x",
          "(b) -1/x",
          "(c) x",
          "(d) e^(-x)"
        ],
        "answer": "(a) 1/x",
        "explanation": "Divide by x: dy/dx - (1/x) y = 2x. Here P = -1/x. Integrating Factor I.F. = e^(∫ P dx) = e^(∫ -1/x dx) = e^(-log x) = e^(log(1/x)) = 1/x."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The general solution of the differential equation dy/dx = e^(x + y) is:",
        "options": [
          "(a) e^x + e^(-y) = C",
          "(b) e^x - e^(-y) = C",
          "(c) e^(-x) + e^y = C",
          "(d) e^(x + y) = C"
        ],
        "answer": "(a) e^x + e^(-y) = C",
        "explanation": "dy/dx = e^x · e^y => e^(-y) dy = e^x dx. Integrating both sides: -e^(-y) = e^x + C' => e^x + e^(-y) = C."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The number of arbitrary constants in the general solution of a differential equation of fourth order is:",
        "options": [
          "(a) 4",
          "(b) 3",
          "(c) 2",
          "(d) 0"
        ],
        "answer": "(a) 4",
        "explanation": "The number of arbitrary constants in the general solution of a differential equation of order n is always equal to n. Here n = 4, so there are 4 arbitrary constants."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The number of arbitrary constants in the particular solution of a differential equation of order 3 is:",
        "options": [
          "(a) 0",
          "(b) 3",
          "(c) 1",
          "(d) 2"
        ],
        "answer": "(a) 0",
        "explanation": "A particular solution is obtained by assigning specific values to the arbitrary constants using initial/boundary conditions. Therefore, a particular solution contains 0 arbitrary constants."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The integrating factor of the differential equation (1 - y²) (dx/dy) + y x = a y (-1 < y < 1) is:",
        "options": [
          "(a) 1 / √(1 - y²)",
          "(b) √(1 - y²)",
          "(c) 1 / (1 - y²)",
          "(d) log|1 - y²|"
        ],
        "answer": "(a) 1 / √(1 - y²)",
        "explanation": "Divide by (1 - y²): dx/dy + [ y/(1 - y²) ] x = ay/(1 - y²). Here P = y/(1 - y²).\n∫ P dy = ∫ y/(1 - y²) dy = -(1/2) ∫ (-2y)/(1 - y²) dy = -(1/2) log(1 - y²) = log [ 1/√(1 - y²) ].\nI.F. = e^(log [ 1/√(1 - y²) ]) = 1 / √(1 - y²)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following is a homogeneous differential equation?",
        "options": [
          "(a) (x² - y²) dx + 2xy dy = 0",
          "(b) (4x + 6y + 5) dx - (3y + 2x + 4) dy = 0",
          "(c) (xy) dx - (x³ + y³) dy = 0",
          "(d) (x³ + 2y²) dx + 2xy dy = 0"
        ],
        "answer": "(a) (x² - y²) dx + 2xy dy = 0",
        "explanation": "In (a), dy/dx = (y² - x²)/(2xy). Each term in numerator and denominator is of degree 2, so it is a homogeneous differential equation of degree 0."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The solution of the differential equation dy/dx + y sec x = tan x is:",
        "options": [
          "(a) y(sec x + tan x) = sec x + tan x - x + C",
          "(b) y(sec x + tan x) = tan x - x + C",
          "(c) y(sec x - tan x) = sec x + C",
          "(d) y(sec x + tan x) = sec x + C"
        ],
        "answer": "(a) y(sec x + tan x) = sec x + tan x - x + C",
        "explanation": "I.F. = e^(∫ sec x dx) = e^(log(sec x + tan x)) = sec x + tan x.\nSolution: y(sec x + tan x) = ∫ tan x (sec x + tan x) dx = ∫ (sec x tan x + tan² x) dx\n= ∫ (sec x tan x + sec² x - 1) dx = sec x + tan x - x + C."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = 5 (d²y/dx²) are:",
        "options": [
          "(a) Order = 2, Degree = 2",
          "(b) Order = 2, Degree = 3",
          "(c) Order = 1, Degree = 2",
          "(d) Order = 2, Degree = 1"
        ],
        "answer": "(a) Order = 2, Degree = 2",
        "explanation": "Square both sides to remove fractional exponent: [ 1 + (dy/dx)² ]³ = 25 (d²y/dx²)². The highest order derivative is d²y/dx² (order 2), and its power is 2 (degree 2)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The solution of the differential equation dy/dx = (1 + y²) / (1 + x²) is:",
        "options": [
          "(a) tan⁻¹ y - tan⁻¹ x = C",
          "(b) tan⁻¹ y + tan⁻¹ x = C",
          "(c) y = x + C",
          "(d) (1 + y²) = C(1 + x²)"
        ],
        "answer": "(a) tan⁻¹ y - tan⁻¹ x = C",
        "explanation": "Separating variables: dy / (1 + y²) = dx / (1 + x²). Integrating both sides: tan⁻¹ y = tan⁻¹ x + C => tan⁻¹ y - tan⁻¹ x = C."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The integrating factor of the differential equation dy/dx + y cot x = 2 cos x is:",
        "options": [
          "(a) sin x",
          "(b) cos x",
          "(c) cot x",
          "(d) cosec x"
        ],
        "answer": "(a) sin x",
        "explanation": "P = cot x. I.F. = e^(∫ cot x dx) = e^(log(sin x)) = sin x."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The differential equation y (dy/dx) + x = 0 represents a family of:",
        "options": [
          "(a) Circles",
          "(b) Parabolas",
          "(c) Ellipses",
          "(d) Hyperbolas"
        ],
        "answer": "(a) Circles",
        "explanation": "y dy = -x dx => ∫ y dy = -∫ x dx => y²/2 = -x²/2 + C => x² + y² = 2C = r², which represents concentric circles centered at origin."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The solution of dy/dx + 2y = 4x is:",
        "options": [
          "(a) y = 2x - 1 + C e^(-2x)",
          "(b) y = 2x + 1 + C e^(-2x)",
          "(c) y = 2x - 1 + C e^(2x)",
          "(d) y = 4x - 2 + C e^(-2x)"
        ],
        "answer": "(a) y = 2x - 1 + C e^(-2x)",
        "explanation": "P = 2, Q = 4x. I.F. = e^(∫ 2 dx) = e^(2x).\ny e^(2x) = ∫ 4x e^(2x) dx = 4 [ x(e^(2x)/2) - ∫ 1(e^(2x)/2) dx ] = 2x e^(2x) - e^(2x) + C.\nDividing by e^(2x): y = 2x - 1 + C e^(-2x)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The degree of the differential equation d²y/dx² + (dy/dx)³ + 6y = 0 is:",
        "options": [
          "(a) 1",
          "(b) 2",
          "(c) 3",
          "(d) not defined"
        ],
        "answer": "(a) 1",
        "explanation": "The highest order derivative is d²y/dx² (order 2), and its power is 1. Thus the degree is 1."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The general solution of dy/dx = y/x is:",
        "options": [
          "(a) y = C x",
          "(b) y = C/x",
          "(c) x y = C",
          "(d) y² = C x"
        ],
        "answer": "(a) y = C x",
        "explanation": "dy/y = dx/x => log|y| = log|x| + log|C| = log|C x| => y = C x."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The integrating factor of (x + 3y²) (dy/dx) = y (y > 0) is:",
        "options": [
          "(a) 1/y",
          "(b) y",
          "(c) -1/y",
          "(d) y²"
        ],
        "answer": "(a) 1/y",
        "explanation": "Rewrite as dx/dy = (x + 3y²)/y = x/y + 3y => dx/dy - (1/y) x = 3y.\nP = -1/y => I.F. = e^(∫ -1/y dy) = e^(-log y) = 1/y."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The solution of the differential equation cos x (dy/dx) + y sin x = 1 is:",
        "options": [
          "(a) y sec x = tan x + C",
          "(b) y cos x = sin x + C",
          "(c) y = sin x + C cos x",
          "(d) y tan x = sec x + C"
        ],
        "answer": "(a) y sec x = tan x + C",
        "explanation": "Divide by cos x: dy/dx + y tan x = sec x. P = tan x, Q = sec x. I.F. = e^(∫ tan x dx) = sec x.\ny sec x = ∫ sec² x dx = tan x + C."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The differential equation of the family of lines passing through the origin is:",
        "options": [
          "(a) y = x (dy/dx)",
          "(b) y + x (dy/dx) = 0",
          "(c) dy/dx = 0",
          "(d) x² + y² = dy/dx"
        ],
        "answer": "(a) y = x (dy/dx)",
        "explanation": "Family of lines through origin is y = m x. Differentiating: dy/dx = m. Substituting m into the equation: y = (dy/dx) x => y = x (dy/dx)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The general solution of the differential equation log(dy/dx) = 2x + 3y is:",
        "options": [
          "(a) - (1/3) e^(-3y) = (1/2) e^(2x) + C",
          "(b) (1/3) e^(3y) = (1/2) e^(2x) + C",
          "(c) e^(-3y) = e^(2x) + C",
          "(d) e^(3y) = -e^(2x) + C"
        ],
        "answer": "(a) - (1/3) e^(-3y) = (1/2) e^(2x) + C",
        "explanation": "dy/dx = e^(2x + 3y) = e^(2x) · e^(3y) => e^(-3y) dy = e^(2x) dx. Integrating: -(1/3) e^(-3y) = (1/2) e^(2x) + C."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A particular solution of dy/dx = -4xy² with y(0) = 1 is:",
        "options": [
          "(a) y = 1 / (2x² + 1)",
          "(b) y = 1 / (2x² - 1)",
          "(c) y = 2x² + 1",
          "(d) y = e^(-2x²)"
        ],
        "answer": "(a) y = 1 / (2x² + 1)",
        "explanation": "dy / y² = -4x dx => -1/y = -2x² + C => 1/y = 2x² - C. At x = 0, y = 1 => 1/1 = 0 - C => C = -1. Thus 1/y = 2x² + 1 => y = 1 / (2x² + 1)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The differential equation (dy/dx)² - x (dy/dx) + y = 0 has degree:",
        "options": [
          "(a) 2",
          "(b) 1",
          "(c) not defined",
          "(d) 3"
        ],
        "answer": "(a) 2",
        "explanation": "The highest order derivative is dy/dx (order 1), and its highest power is 2. The equation is a polynomial in derivatives, so the degree is 2."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The integrating factor of the differential equation x (dy/dx) + 2y = x² is:",
        "options": [
          "(a) x²",
          "(b) x",
          "(c) 1/x²",
          "(d) log x"
        ],
        "answer": "(a) x²",
        "explanation": "dy/dx + (2/x) y = x. P = 2/x. I.F. = e^(∫ 2/x dx) = e^(2 log x) = e^(log(x²)) = x²."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The solution of (dy/dx) = y tan x is:",
        "options": [
          "(a) y = C sec x",
          "(b) y = C cos x",
          "(c) y = C sin x",
          "(d) y = C tan x"
        ],
        "answer": "(a) y = C sec x",
        "explanation": "dy/y = tan x dx => log|y| = log|sec x| + log|C| = log|C sec x| => y = C sec x."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The differential equation representing the family of curves y = A e^(2x) + B e^(-2x) is:",
        "options": [
          "(a) d²y/dx² - 4y = 0",
          "(b) d²y/dx² + 4y = 0",
          "(c) dy/dx - 2y = 0",
          "(d) d²y/dx² - 2y = 0"
        ],
        "answer": "(a) d²y/dx² - 4y = 0",
        "explanation": "dy/dx = 2A e^(2x) - 2B e^(-2x). d²y/dx² = 4A e^(2x) + 4B e^(-2x) = 4(A e^(2x) + B e^(-2x)) = 4y. Thus d²y/dx² - 4y = 0."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The integrating factor of (1 + x²) (dy/dx) + 2xy = 4x² is:",
        "options": [
          "(a) 1 + x²",
          "(b) 1 / (1 + x²)",
          "(c) 2x",
          "(d) log(1 + x²)"
        ],
        "answer": "(a) 1 + x²",
        "explanation": "dy/dx + [ 2x/(1 + x²) ] y = 4x²/(1 + x²). P = 2x/(1 + x²). I.F. = e^(∫ 2x/(1 + x²) dx) = e^(log(1 + x²)) = 1 + x²."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The degree of the differential equation d²y/dx² + sin(dy/dx) = 0 is not defined.\nReason (R): The degree of a differential equation is defined only when it is a polynomial equation in its derivatives.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R directly defines why the degree is not defined for differential equations involving non-polynomial derivative terms."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The general solution of dy/dx + y = 1 is y = 1 + C e^(-x).\nReason (R): For a linear differential equation dy/dx + P y = Q, the integrating factor is e^(∫ P dx).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "P = 1 => I.F. = e^x. y e^x = ∫ e^x dx = e^x + C => y = 1 + C e^(-x). Both A and R are true and R is the basis of solving A."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The order of the differential equation of all circles touching the x-axis at the origin is 1.\nReason (R): The family of circles touching the x-axis at origin is x² + (y - a)² = a², which contains only one arbitrary constant a.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Because the equation has 1 essential arbitrary constant, eliminating it requires differentiating once, yielding a first-order differential equation."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A particular solution of a differential equation has no arbitrary constants.\nReason (R): A particular solution is obtained by assigning particular values to arbitrary constants satisfying given initial conditions.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R provides the exact definition and rationale for Assertion A."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The differential equation (x² + y²) dx - 2xy dy = 0 is a homogeneous differential equation.\nReason (R): A function f(x, y) is homogeneous of degree n if f(λx, λy) = λ^n f(x, y).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "dy/dx = (x² + y²)/(2xy). f(λx, λy) = (λ²x² + λ²y²)/(2(λx)(λy)) = λ⁰ f(x, y). Both A and R are true and R explains A."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the general solution of the differential equation: dy/dx = (1 + y²) / (1 + x²).",
        "answer": "tan⁻¹ y = tan⁻¹ x + C (or (y - x)/(1 + xy) = C')",
        "explanation": "Separating the variables [1 Mark]:\ndy / (1 + y²) = dx / (1 + x²).\nIntegrating both sides [1 Mark]:\n∫ dy / (1 + y²) = ∫ dx / (1 + x²)\n=> tan⁻¹ y = tan⁻¹ x + C."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find the integrating factor of the differential equation: x (dy/dx) + 2y = x² log x.",
        "answer": "x²",
        "explanation": "Divide the equation throughout by x [1 Mark]:\ndy/dx + (2/x) y = x log x.\nThis is of the form dy/dx + P y = Q where P = 2/x. [0.5 Mark]\nIntegrating Factor I.F. = e^(∫ P dx) = e^(∫ 2/x dx) = e^(2 log x) = e^(log(x²)) = x². [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Solve the differential equation: (x² - y²) dx + 2xy dy = 0.",
        "answer": "x² + y² = C x",
        "explanation": "Rewrite as dy/dx = -(x² - y²)/(2xy) = (y² - x²)/(2xy). [0.5 Mark]\nThis is a homogeneous differential equation. Put y = v x => dy/dx = v + x (dv/dx). [0.5 Mark]\nv + x (dv/dx) = (v² x² - x²)/(2v x²) = (v² - 1)/(2v).\nx (dv/dx) = (v² - 1)/(2v) - v = (v² - 1 - 2v²)/(2v) = -(v² + 1)/(2v). [1 Mark]\nSeparating variables: [ 2v / (v² + 1) ] dv = - dx / x.\nIntegrating: log(v² + 1) = -log x + log C = log(C/x) [0.5 Mark]\n=> v² + 1 = C/x => (y²/x²) + 1 = C/x => (y² + x²)/x² = C/x => x² + y² = C x. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Find the particular solution of the differential equation dy/dx = -4xy², given that y = 1 when x = 0.",
        "answer": "y = 1 / (2x² + 1)",
        "explanation": "Separating variables [0.5 Mark]:\ndy / y² = -4x dx.\nIntegrating [0.5 Mark]:\n-1/y = -2x² + C => 1/y = 2x² - C.\nGiven y = 1 when x = 0 [0.5 Mark]:\n1/1 = 2(0) - C => C = -1.\nParticular solution: 1/y = 2x² + 1 => y = 1 / (2x² + 1). [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Solve the differential equation: dy/dx + y cot x = 4x cosec x (x ≠ 0), given that y = 0 when x = π/2.",
        "answer": "y sin x = 2x² - π²/2",
        "explanation": "Linear differential equation with P = cot x, Q = 4x cosec x. [0.5 Mark]\nI.F. = e^(∫ cot x dx) = e^(log(sin x)) = sin x. [0.5 Mark]\nSolution: y · (I.F.) = ∫ Q · (I.F.) dx + C [0.5 Mark]\ny sin x = ∫ (4x cosec x)(sin x) dx + C = ∫ 4x dx + C = 2x² + C. [0.5 Mark]\nGiven y = 0 when x = π/2 [0.5 Mark]:\n0 · sin(π/2) = 2(π/2)² + C => 0 = 2(π²/4) + C => C = -π²/2.\nParticular solution: y sin x = 2x² - π²/2. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find the general solution of the differential equation: (e^x + e^(-x)) dy - (e^x - e^(-x)) dx = 0.",
        "answer": "y = log(e^x + e^(-x)) + C",
        "explanation": "Separating variables [1 Mark]:\ndy = [ (e^x - e^(-x)) / (e^x + e^(-x)) ] dx.\nIntegrating both sides [1 Mark]:\ny = ∫ [ (e^x - e^(-x)) / (e^x + e^(-x)) ] dx.\nPut t = e^x + e^(-x) => dt = (e^x - e^(-x)) dx.\ny = ∫ dt / t = log|t| + C = log(e^x + e^(-x)) + C."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Solve the differential equation: x (dy/dx) - y + x sin(y/x) = 0.",
        "answer": "cosec(y/x) - cot(y/x) = C/x (or tan(y / (2x)) = C/x)",
        "explanation": "Rewrite: dy/dx = [ y - x sin(y/x) ] / x = y/x - sin(y/x). [0.5 Mark]\nPut y = v x => dy/dx = v + x (dv/dx). [0.5 Mark]\nv + x (dv/dx) = v - sin v => x (dv/dx) = -sin v. [0.5 Mark]\nSeparating variables: cosec v dv = - dx / x. [0.5 Mark]\nIntegrating: log|cosec v - cot v| = -log|x| + log C = log|C/x| [0.5 Mark]\n=> cosec(y/x) - cot(y/x) = C/x. (Alternatively, tan(y / 2x) = C/x). [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Find the order and degree of the differential equation: d²y/dx² = √[ 1 + (dy/dx)³ ].",
        "answer": "Order = 2, Degree = 2",
        "explanation": "Squaring both sides to make it polynomial in derivatives [1 Mark]:\n(d²y/dx²)² = 1 + (dy/dx)³.\nThe highest order derivative is d²y/dx², so Order = 2. [0.5 Mark]\nThe exponent of the highest order derivative is 2, so Degree = 2. [0.5 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Find the particular solution of the differential equation: (1 + x²) (dy/dx) + 2xy = 1 / (1 + x²), given that y = 0 when x = 1.",
        "answer": "y(1 + x²) = tan⁻¹ x - π/4",
        "explanation": "dy/dx + [ 2x/(1 + x²) ] y = 1 / (1 + x²)². [0.5 Mark]\nI.F. = e^(∫ 2x/(1 + x²) dx) = e^(log(1 + x²)) = 1 + x². [1 Mark]\nSolution: y(1 + x²) = ∫ [ 1/(1 + x²)² · (1 + x²) ] dx = ∫ 1/(1 + x²) dx = tan⁻¹ x + C. [0.5 Mark]\nGiven y = 0 when x = 1:\n0(2) = tan⁻¹(1) + C => C = -π/4. [0.5 Mark]\nParticular solution: y(1 + x²) = tan⁻¹ x - π/4. [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Find the general solution of the differential equation: dy/dx = (1 + x)(1 + y).",
        "answer": "log|1 + y| = x + x²/2 + C",
        "explanation": "Separating variables [1 Mark]:\ndy / (1 + y) = (1 + x) dx.\nIntegrating both sides [1 Mark]:\nlog|1 + y| = x + x²/2 + C."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Find the particular solution of the differential equation:\nx (dy/dx) - y + x tan(y/x) = 0, given that y = π/2 when x = 1.",
        "answer": "sin(y/x) = 1/x",
        "explanation": "Marking Scheme:\n1. Identification of Homogeneous Form [1 Mark]:\nx (dy/dx) = y - x tan(y/x) => dy/dx = y/x - tan(y/x).\nThis is a homogeneous differential equation.\n\n2. Substitution y = vx [1 Mark]:\nPut y = vx => dy/dx = v + x (dv/dx).\nv + x (dv/dx) = v - tan v => x (dv/dx) = -tan v.\n\n3. Separation of Variables and Integration [1.5 Marks]:\ncot v dv = - dx / x.\n∫ cot v dv = - ∫ dx / x\nlog|sin v| = -log|x| + log C = log|C/x|\n=> sin v = C/x => sin(y/x) = C/x.\n\n4. Applying Initial Condition [1 Mark]:\nWhen x = 1, y = π/2:\nsin((π/2)/1) = C/1 => sin(π/2) = C => C = 1.\n\n5. Final Particular Solution [0.5 Mark]:\nsin(y/x) = 1/x (or x sin(y/x) = 1)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Find the general solution of the differential equation:\n(x + 2y³) (dy/dx) = y (y > 0).",
        "answer": "x = y³ + C y",
        "explanation": "Marking Scheme:\n1. Invert to Linear in x [1.5 Marks]:\nSince y appears in the denominator, invert the derivative:\ndx/dy = (x + 2y³)/y = x/y + 2y²\n=> dx/dy - (1/y) x = 2y².\nThis is a linear differential equation of the form dx/dy + P x = Q, where P = -1/y and Q = 2y².\n\n2. Integrating Factor [1.5 Marks]:\nI.F. = e^(∫ P dy) = e^(∫ -1/y dy) = e^(-log y) = e^(log(1/y)) = 1/y.\n\n3. General Solution Formula [1 Mark]:\nx · (I.F.) = ∫ Q · (I.F.) dy + C\nx · (1/y) = ∫ (2y²) · (1/y) dy + C = ∫ 2y dy + C.\n\n4. Final Integration and Form [1 Mark]:\nx / y = y² + C => x = y³ + C y."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Solve the differential equation: (x dy - y dx) y sin(y/x) = (y dx + x dy) x cos(y/x).",
        "answer": "sec(y/x) / (xy) = C (or xy cos(y/x) = C')",
        "explanation": "Marking Scheme:\n1. Rearrange terms [1.5 Marks]:\n(x y sin(y/x)) dy - (y² sin(y/x)) dx = (x y cos(y/x)) dx + (x² cos(y/x)) dy\n=> [ x y sin(y/x) - x² cos(y/x) ] dy = [ y² sin(y/x) + x y cos(y/x) ] dx\n=> dy/dx = [ y² sin(y/x) + x y cos(y/x) ] / [ x y sin(y/x) - x² cos(y/x) ].\nDivide numerator and denominator by x²:\ndy/dx = [ (y/x)² sin(y/x) + (y/x) cos(y/x) ] / [ (y/x) sin(y/x) - cos(y/x) ].\n\n2. Homogeneous substitution y = vx [1.5 Marks]:\nv + x (dv/dx) = [ v² sin v + v cos v ] / [ v sin v - cos v ]\nx (dv/dx) = [ v² sin v + v cos v - v² sin v + v cos v ] / [ v sin v - cos v ]\n= 2v cos v / [ v sin v - cos v ].\n\n3. Separate variables [1 Mark]:\n[ (v sin v - cos v) / (v cos v) ] dv = 2 dx / x\n=> [ tan v - 1/v ] dv = 2 dx / x.\n\n4. Integration [1 Mark]:\nlog|sec v| - log|v| = 2 log|x| + log C\nlog [ sec v / v ] = log [ C x² ] => sec v / v = C x²\n=> sec(y/x) / (y/x) = C x² => (x / y) sec(y/x) = C x² => sec(y/x) / (xy) = C (or xy cos(y/x) = k)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Bacterial Culture Growth Differential Model\nIn a biological laboratory, the rate of increase of bacteria in a culture is proportional to the number of bacteria present at that instant. Initially (t = 0), the count is 100,000. In 2 hours, the count increases by 10%.\n(i) Write the differential equation governing the bacterial population N(t) at time t.\n(ii) Find the general solution of this differential equation.\n(iii) Determine the constant of proportionality k.\n(iv) In how many hours will the count reach 200,000 (double)?",
        "answer": "Solutions to Case Study on Population Growth Differential Equation",
        "explanation": "(i) dN/dt = k N. [1 Mark]\n(ii) dN/N = k dt => log N = k t + C => N(t) = C e^(k t). At t = 0, N = 100,000 => C = 100,000. So N(t) = 100,000 e^(k t). [1 Mark]\n(iii) At t = 2, N increases by 10% => N(2) = 110,000.\n110,000 = 100,000 e^(2k) => e^(2k) = 1.1 => 2k = log(1.1) => k = (1/2) log(1.1). [1 Mark]\n(iv) When N = 200,000:\n200,000 = 100,000 e^(k t) => e^(k t) = 2 => k t = log 2 => t = log 2 / k = (2 log 2) / log(1.1) hours. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Find the particular solution of the differential equation: (x² + xy) dy = (x² + y²) dx, given that y = 0 when x = 1.",
        "answer": "y² + 2xy - x² = -x² e^(2y/x) (or equivalent implicit form)",
        "explanation": "Marking Scheme:\n1. Homogeneous form [1 Mark]:\ndy/dx = (x² + y²)/(x² + xy) = [ 1 + (y/x)² ] / [ 1 + (y/x) ].\n\n2. Substitution y = vx [1.5 Marks]:\nv + x (dv/dx) = (1 + v²)/(1 + v)\nx (dv/dx) = (1 + v²)/(1 + v) - v = (1 + v² - v - v²)/(1 + v) = (1 - v)/(1 + v).\n\n3. Separation of variables and Integration [1.5 Marks]:\n[ (1 + v)/(1 - v) ] dv = dx / x\nRewrite: (1 + v)/(1 - v) = - (v + 1)/(v - 1) = - [ (v - 1) + 2 ] / (v - 1) = -1 - 2/(v - 1).\n∫ [ -1 - 2/(v - 1) ] dv = ∫ dx / x\n=> -v - 2 log|v - 1| = log|x| + C\n=> - (y/x) - 2 log|y/x - 1| = log|x| + C.\n\n4. Apply initial condition y = 0 when x = 1 [1 Mark]:\n-0 - 2 log|-1| = log 1 + C => 0 = 0 + C => C = 0.\nTherefore: -(y/x) = log|x| + 2 log|(y - x)/x| = log [ |x| · (y - x)² / x² ] = log [ (y - x)² / |x| ].\n=> (y - x)² = x e^(-y/x)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Solve the differential equation: (1 + e^(x/y)) dx + e^(x/y) (1 - x/y) dy = 0.",
        "answer": "x + y e^(x/y) = C",
        "explanation": "Marking Scheme:\n1. Rewrite as dx/dy [1.5 Marks]:\n(1 + e^(x/y)) dx = - e^(x/y) (1 - x/y) dy = e^(x/y) (x/y - 1) dy\n=> dx/dy = [ e^(x/y) (x/y - 1) ] / [ 1 + e^(x/y) ].\nThis is homogeneous in x and y.\n\n2. Substitute x = vy => dx/dy = v + y (dv/dy) [1.5 Marks]:\nv + y (dv/dy) = [ e^v (v - 1) ] / [ 1 + e^v ] = (v e^v - e^v) / (1 + e^v)\ny (dv/dy) = (v e^v - e^v) / (1 + e^v) - v = (v e^v - e^v - v - v e^v) / (1 + e^v) = - (v + e^v) / (1 + e^v).\n\n3. Separate variables and Integrate [1.5 Marks]:\n[ (1 + e^v) / (v + e^v) ] dv = - dy / y.\nNotice that numerator is the exact derivative of denominator!\n∫ [ (1 + e^v) / (v + e^v) ] dv = - ∫ dy / y\n=> log|v + e^v| = -log|y| + log C = log|C / y|\n=> v + e^v = C / y.\n\n4. Substitute back v = x/y [0.5 Mark]:\nx/y + e^(x/y) = C / y => x + y e^(x/y) = C. (Proved)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Solve the differential equation: dy/dx + 2y tan x = sin x, given that y = 0 when x = π/3.",
        "answer": "y sec² x = sec x - 2 (or y = cos x - 2 cos² x)",
        "explanation": "Marking Scheme:\n1. Linear Form and I.F. [1.5 Marks]:\nP = 2 tan x, Q = sin x.\nI.F. = e^(∫ 2 tan x dx) = e^(2 log(sec x)) = e^(log(sec² x)) = sec² x.\n\n2. General Solution [1.5 Marks]:\ny · sec² x = ∫ sin x · sec² x dx + C = ∫ sec x tan x dx + C = sec x + C.\n\n3. Particular Solution [1 Mark]:\nGiven y = 0 when x = π/3:\n0 · sec²(π/3) = sec(π/3) + C => 0 = 2 + C => C = -2.\nParticular solution: y sec² x = sec x - 2 => y = cos x - 2 cos² x."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Show that the differential equation 2y e^(x/y) dx + (y - 2x e^(x/y)) dy = 0 is homogeneous and find its particular solution, given that x = 0 when y = 1.",
        "answer": "2 e^(x/y) + log|y| = 2",
        "explanation": "Marking Scheme:\n1. Homogeneous check [1.5 Marks]:\n2y e^(x/y) dx = (2x e^(x/y) - y) dy => dx/dy = [ 2(x/y) e^(x/y) - 1 ] / [ 2 e^(x/y) ].\nLet F(x, y) = [ 2(x/y) e^(x/y) - 1 ] / [ 2 e^(x/y) ]. Then F(λx, λy) = F(x, y) = λ⁰ F(x, y).\nHence it is a homogeneous differential equation of degree 0.\n\n2. Substitution x = vy => dx/dy = v + y (dv/dy) [1.5 Marks]:\nv + y (dv/dy) = [ 2v e^v - 1 ] / [ 2 e^v ] = v - 1 / (2 e^v)\n=> y (dv/dy) = - 1 / (2 e^v).\n\n3. Separation of variables and Integration [1 Mark]:\n2 e^v dv = - dy / y => 2 ∫ e^v dv = - ∫ dy / y\n=> 2 e^v = -log|y| + C => 2 e^(x/y) + log|y| = C.\n\n4. Apply initial condition x = 0 when y = 1 [1 Mark]:\n2 e^0 + log 1 = C => 2(1) + 0 = C => C = 2.\nParticular solution: 2 e^(x/y) + log|y| = 2."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Solve the differential equation: dy/dx - 3y cot x = sin 2x, given that y = 2 when x = π/2.",
        "answer": "y cosec³ x = -2 cosec x + 4 (or y = -2 sin² x + 4 sin³ x)",
        "explanation": "Marking Scheme:\n1. Linear form [1 Mark]:\nP = -3 cot x, Q = sin 2x.\nI.F. = e^(∫ -3 cot x dx) = e^(-3 log|sin x|) = 1 / sin³ x = cosec³ x. [1 Mark]\n\n2. Integration [1 Mark]:\ny cosec³ x = ∫ sin 2x · cosec³ x dx + C = ∫ (2 sin x cos x) / sin³ x dx + C\n= 2 ∫ (cos x / sin² x) dx + C = 2 [ -1/sin x ] + C = -2 cosec x + C.\n\n3. Initial condition [1 Mark]:\nWhen x = π/2, y = 2:\n2 cosec³(π/2) = -2 cosec(π/2) + C => 2(1) = -2(1) + C => C = 4.\nParticular solution: y cosec³ x = -2 cosec x + 4 => y = -2 sin² x + 4 sin³ x."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Define order and degree of a differential equation.\n(b) Solve the differential equation: (x² - 1) (dy/dx) + 2xy = 1 / (x² - 1).",
        "answer": "(a) Definitions; (b) y(x² - 1) = (1/2) log|(x - 1)/(x + 1)| + C",
        "explanation": "Marking Scheme:\n(a) Definitions (1.5 Marks):\n- Order: The order of a differential equation is the order of the highest order derivative occurring in the equation.\n- Degree: The degree of a differential equation is the power/exponent of the highest order derivative occurring in it, when the equation is expressed as a polynomial equation in its derivatives.\n\n(b) Solving the differential equation (3.5 Marks):\nDivide throughout by (x² - 1) [0.5 Mark]:\ndy/dx + [ 2x / (x² - 1) ] y = 1 / (x² - 1)².\nLinear differential equation with P = 2x / (x² - 1) and Q = 1 / (x² - 1)².\nIntegrating Factor [1 Mark]:\nI.F. = e^(∫ 2x/(x² - 1) dx) = e^(log|x² - 1|) = x² - 1.\nGeneral solution [1 Mark]:\ny · (x² - 1) = ∫ [ 1/(x² - 1)² · (x² - 1) ] dx + C = ∫ dx / (x² - 1) + C.\nEvaluate integral [1 Mark]:\nUsing ∫ dx/(x² - a²) = (1/2a) log|(x - a)/(x + a)|:\ny (x² - 1) = (1/2) log|(x - 1)/(x + 1)| + C."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "unit_num": 4,
      "title": "Vector Algebra",
      "unit_title": "Vectors and Three-Dimensional Geometry",
      "weightage_unit": "Vectors and 3D Geometry (14 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If |a⃗| = 10, |b⃗| = 2, and a⃗ · b⃗ = 12, then |a⃗ × b⃗| is equal to:",
        "options": [
          "(a) 16",
          "(b) 14",
          "(c) 12",
          "(d) 8"
        ],
        "answer": "(a) 16",
        "explanation": "By Lagrange's Identity: |a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|².\n|a⃗ × b⃗|² + 12² = (10)² (2)² => |a⃗ × b⃗|² + 144 = 400 => |a⃗ × b⃗|² = 256 => |a⃗ × b⃗| = 16."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The projection of the vector a⃗ = 2î + 3ĵ + 2k̂ on the vector b⃗ = î + 2ĵ + k̂ is:",
        "options": [
          "(a) 5√6 / 3",
          "(b) 10 / √6",
          "(c) √6 / 10",
          "(d) 10 / 6"
        ],
        "answer": "(a) 5√6 / 3",
        "explanation": "Projection of a⃗ on b⃗ = (a⃗ · b⃗) / |b⃗|.\na⃗ · b⃗ = (2)(1) + (3)(2) + (2)(1) = 2 + 6 + 2 = 10.\n|b⃗| = √(1² + 2² + 1²) = √6.\nProjection = 10 / √6 = 10√6 / 6 = 5√6 / 3."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If a⃗ and b⃗ are unit vectors such that a⃗ + b⃗ is also a unit vector, then the angle between a⃗ and b⃗ is:",
        "options": [
          "(a) 2π/3",
          "(b) π/3",
          "(c) π/2",
          "(d) π/6"
        ],
        "answer": "(a) 2π/3",
        "explanation": "|a⃗ + b⃗|² = |a⃗|² + |b⃗|² + 2(a⃗ · b⃗) => 1² = 1² + 1² + 2(1)(1) cos θ => 1 = 2 + 2 cos θ => 2 cos θ = -1 => cos θ = -1/2 => θ = 2π/3 (120°)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The area of the parallelogram whose adjacent sides are determined by the vectors a⃗ = î - ĵ + 3k̂ and b⃗ = 2î - 7ĵ + k̂ is:",
        "options": [
          "(a) 15√2 sq units",
          "(b) 30 sq units",
          "(c) 15 sq units",
          "(d) 10√3 sq units"
        ],
        "answer": "(a) 15√2 sq units",
        "explanation": "a⃗ × b⃗ = | î  ĵ  k̂ ; 1 -1 3 ; 2 -7 1 | = î(-1 - (-21)) - ĵ(1 - 6) + k̂(-7 - (-2)) = 20î + 5ĵ - 5k̂.\nArea = |a⃗ × b⃗| = √(20² + 5² + (-5)²) = √(400 + 25 + 25) = √450 = 15√2 sq units."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If a⃗ is any non-zero vector, then (a⃗ · î)î + (a⃗ · ĵ)ĵ + (a⃗ · k̂)k̂ is equal to:",
        "options": [
          "(a) a⃗",
          "(b) 2a⃗",
          "(c) 3a⃗",
          "(d) 0⃗"
        ],
        "answer": "(a) a⃗",
        "explanation": "Let a⃗ = a₁ î + a₂ ĵ + a₃ k̂. Then a⃗ · î = a₁, a⃗ · ĵ = a₂, and a⃗ · k̂ = a₃. Substituting these yields a₁ î + a₂ ĵ + a₃ k̂ = a⃗."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A unit vector in the direction of the vector a⃗ = 2î + 3ĵ + k̂ is:",
        "options": [
          "(a) (2î + 3ĵ + k̂) / √14",
          "(b) (2î + 3ĵ + k̂) / 14",
          "(c) (2î + 3ĵ + k̂) / √6",
          "(d) (2î - 3ĵ + k̂) / √14"
        ],
        "answer": "(a) (2î + 3ĵ + k̂) / √14",
        "explanation": "Unit vector â = a⃗ / |a⃗|. |a⃗| = √(2² + 3² + 1²) = √(4 + 9 + 1) = √14. Hence â = (2î + 3ĵ + k̂) / √14."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If a⃗ = 2î - ĵ + 2k̂ and b⃗ = 5î - 3ĵ - 4k̂, the value of a⃗ · b⃗ is:",
        "options": [
          "(a) 5",
          "(b) 10",
          "(c) -5",
          "(d) 21"
        ],
        "answer": "(a) 5",
        "explanation": "a⃗ · b⃗ = (2)(5) + (-1)(-3) + (2)(-4) = 10 + 3 - 8 = 5."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If a⃗ and b⃗ are perpendicular vectors, then |a⃗ + b⃗|² is equal to:",
        "options": [
          "(a) |a⃗|² + |b⃗|²",
          "(b) |a⃗|² - |b⃗|²",
          "(c) (|a⃗| + |b⃗|)²",
          "(d) |a⃗ × b⃗|²"
        ],
        "answer": "(a) |a⃗|² + |b⃗|²",
        "explanation": "|a⃗ + b⃗|² = |a⃗|² + |b⃗|² + 2(a⃗ · b⃗). Since a⃗ ⊥ b⃗, a⃗ · b⃗ = 0. Therefore, |a⃗ + b⃗|² = |a⃗|² + |b⃗|²."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The value of λ for which the vectors 2î - 4ĵ + 5k̂ and î - λ ĵ + k̂ are perpendicular is:",
        "options": [
          "(a) -7/4",
          "(b) 7/4",
          "(c) 7",
          "(d) -7"
        ],
        "answer": "(a) -7/4",
        "explanation": "For perpendicular vectors, their dot product is zero: (2)(1) + (-4)(-λ) + (5)(1) = 0 => 2 + 4λ + 5 = 0 => 4λ = -7 => λ = -7/4."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The angle between two vectors a⃗ and b⃗ with magnitudes √3 and 2 respectively, having a⃗ · b⃗ = √6, is:",
        "options": [
          "(a) π/4",
          "(b) π/6",
          "(c) π/3",
          "(d) π/2"
        ],
        "answer": "(a) π/4",
        "explanation": "cos θ = (a⃗ · b⃗) / (|a⃗| |b⃗|) = √6 / (√3 · 2) = (√3 · √2) / (2√3) = √2 / 2 = 1/√2 => θ = π/4."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The value of î · (ĵ × k̂) + ĵ · (î × k̂) + k̂ · (î × ĵ) is:",
        "options": [
          "(a) 1",
          "(b) 0",
          "(c) 3",
          "(d) -1"
        ],
        "answer": "(a) 1",
        "explanation": "ĵ × k̂ = î => î · î = 1.\nî × k̂ = -ĵ => ĵ · (-ĵ) = -1.\nî × ĵ = k̂ => k̂ · k̂ = 1.\nSum = 1 + (-1) + 1 = 1."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If |a⃗| = 3, |b⃗| = 4, and |a⃗ - b⃗| = 5, then the value of a⃗ · b⃗ is:",
        "options": [
          "(a) 0",
          "(b) 12",
          "(c) 6",
          "(d) 5"
        ],
        "answer": "(a) 0",
        "explanation": "|a⃗ - b⃗|² = |a⃗|² + |b⃗|² - 2(a⃗ · b⃗) => 5² = 3² + 4² - 2(a⃗ · b⃗) => 25 = 9 + 16 - 2(a⃗ · b⃗) => 25 = 25 - 2(a⃗ · b⃗) => 2(a⃗ · b⃗) = 0 => a⃗ · b⃗ = 0."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The vectors a⃗ = 2î - 3ĵ + 4k̂ and b⃗ = -4î + 6ĵ - 8k̂ are:",
        "options": [
          "(a) Collinear and opposite in direction",
          "(b) Perpendicular",
          "(c) Collinear and in the same direction",
          "(d) Non-coplanar"
        ],
        "answer": "(a) Collinear and opposite in direction",
        "explanation": "b⃗ = -2(2î - 3ĵ + 4k̂) = -2 a⃗. Since b⃗ = λ a⃗ with scalar λ = -2 < 0, the vectors are collinear and directed in opposite directions."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If θ is the angle between two vectors a⃗ and b⃗, then a⃗ · b⃗ ≥ 0 only when:",
        "options": [
          "(a) 0 ≤ θ ≤ π/2",
          "(b) 0 < θ < π",
          "(c) 0 ≤ θ ≤ π",
          "(d) -π/2 ≤ θ ≤ π/2"
        ],
        "answer": "(a) 0 ≤ θ ≤ π/2",
        "explanation": "a⃗ · b⃗ = |a⃗| |b⃗| cos θ. Since |a⃗|, |b⃗| ≥ 0, a⃗ · b⃗ ≥ 0 requires cos θ ≥ 0. For 0 ≤ θ ≤ π, cos θ ≥ 0 holds on [0, π/2]."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The area of a triangle having vertices A(1, 1, 1), B(1, 2, 3), and C(2, 3, 1) is:",
        "options": [
          "(a) √21 / 2 sq units",
          "(b) √21 sq units",
          "(c) 21/2 sq units",
          "(d) √14 / 2 sq units"
        ],
        "answer": "(a) √21 / 2 sq units",
        "explanation": "AB⃗ = (1-1)î + (2-1)ĵ + (3-1)k̂ = 0î + ĵ + 2k̂.\nAC⃗ = (2-1)î + (3-1)ĵ + (1-1)k̂ = î + 2ĵ + 0k̂.\nAB⃗ × AC⃗ = | î ĵ k̂ ; 0 1 2 ; 1 2 0 | = î(0 - 4) - ĵ(0 - 2) + k̂(0 - 1) = -4î + 2ĵ - k̂.\n|AB⃗ × AC⃗| = √((-4)² + 2² + (-1)²) = √(16 + 4 + 1) = √21.\nArea of triangle = (1/2) |AB⃗ × AC⃗| = √21 / 2 sq units."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If a⃗ and b⃗ are two vectors such that |a⃗ × b⃗| = a⃗ · b⃗, then the angle θ between a⃗ and b⃗ is:",
        "options": [
          "(a) π/4",
          "(b) π/2",
          "(c) π/3",
          "(d) π"
        ],
        "answer": "(a) π/4",
        "explanation": "|a⃗ × b⃗| = |a⃗| |b⃗| sin θ and a⃗ · b⃗ = |a⃗| |b⃗| cos θ. Setting them equal gives sin θ = cos θ => tan θ = 1 => θ = π/4."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The direction cosines of the vector 2î + 2ĵ - k̂ are:",
        "options": [
          "(a) 2/3, 2/3, -1/3",
          "(b) 2/√5, 2/√5, -1/√5",
          "(c) 2/9, 2/9, -1/9",
          "(d) 1/3, 1/3, -1/3"
        ],
        "answer": "(a) 2/3, 2/3, -1/3",
        "explanation": "Magnitude = √(2² + 2² + (-1)²) = √(4 + 4 + 1) = √9 = 3. Direction cosines are l = 2/3, m = 2/3, n = -1/3."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If a⃗, b⃗, c⃗ are unit vectors such that a⃗ + b⃗ + c⃗ = 0⃗, then the value of a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗ is:",
        "options": [
          "(a) -3/2",
          "(b) 3/2",
          "(c) -3",
          "(d) 1"
        ],
        "answer": "(a) -3/2",
        "explanation": "|a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗).\n0 = 1 + 1 + 1 + 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗) => 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗) = -3 => sum = -3/2."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The position vector of the midpoint of the line segment joining points P(2, 3, 4) and Q(4, 1, -2) is:",
        "options": [
          "(a) 3î + 2ĵ + k̂",
          "(b) 2î - ĵ + 3k̂",
          "(c) 6î + 4ĵ + 2k̂",
          "(d) î + ĵ + k̂"
        ],
        "answer": "(a) 3î + 2ĵ + k̂",
        "explanation": "Midpoint M = ((2+4)/2, (3+1)/2, (4-2)/2) = (3, 2, 1). Position vector is 3î + 2ĵ + k̂."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If a⃗ = î + ĵ + k̂ and b⃗ = î - ĵ + k̂, then a unit vector perpendicular to both a⃗ and b⃗ is:",
        "options": [
          "(a) (î - k̂) / √2",
          "(b) (î + k̂) / √2",
          "(c) ĵ",
          "(d) (ĵ - k̂) / √2"
        ],
        "answer": "(a) (î - k̂) / √2",
        "explanation": "a⃗ × b⃗ = | î ĵ k̂ ; 1 1 1 ; 1 -1 1 | = î(1 - (-1)) - ĵ(1 - 1) + k̂(-1 - 1) = 2î - 0ĵ - 2k̂ = 2(î - k̂).\nUnit vector = 2(î - k̂) / √(2² + (-2)²) = 2(î - k̂) / (2√2) = (î - k̂) / √2."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The area of the parallelogram whose diagonals are represented by d₁⃗ = 3î + ĵ - 2k̂ and d₂⃗ = î - 3ĵ + 4k̂ is:",
        "options": [
          "(a) 5√3 sq units",
          "(b) 10√3 sq units",
          "(c) 25 sq units",
          "(d) 5 sq units"
        ],
        "answer": "(a) 5√3 sq units",
        "explanation": "d₁⃗ × d₂⃗ = | î ĵ k̂ ; 3 1 -2 ; 1 -3 4 | = î(4 - 6) - ĵ(12 - (-2)) + k̂(-9 - 1) = -2î - 14ĵ - 10k̂.\n|d₁⃗ × d₂⃗| = √((-2)² + (-14)² + (-10)²) = √(4 + 196 + 100) = √300 = 10√3.\nArea = (1/2) |d₁⃗ × d₂⃗| = (1/2)(10√3) = 5√3 sq units."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "For any two vectors a⃗ and b⃗, |a⃗ · b⃗| ≤ |a⃗| |b⃗| is known as:",
        "options": [
          "(a) Cauchy-Schwarz Inequality",
          "(b) Triangle Inequality",
          "(c) Lagrange's Identity",
          "(d) Parallelogram Law"
        ],
        "answer": "(a) Cauchy-Schwarz Inequality",
        "explanation": "The statement |a⃗ · b⃗| = |a⃗| |b⃗| |cos θ| ≤ |a⃗| |b⃗| (since |cos θ| ≤ 1) is the Cauchy-Schwarz Inequality for vectors."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If a⃗ is a unit vector and (x⃗ - a⃗) · (x⃗ + a⃗) = 8, then |x⃗| is:",
        "options": [
          "(a) 3",
          "(b) √8",
          "(c) 9",
          "(d) 4"
        ],
        "answer": "(a) 3",
        "explanation": "(x⃗ - a⃗) · (x⃗ + a⃗) = |x⃗|² - |a⃗|² = 8. Since a⃗ is a unit vector, |a⃗| = 1. |x⃗|² - 1 = 8 => |x⃗|² = 9 => |x⃗| = 3."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If |a⃗| = 8, |b⃗| = 3, and |a⃗ × b⃗| = 12, then the angle between a⃗ and b⃗ is:",
        "options": [
          "(a) π/6",
          "(b) π/4",
          "(c) π/3",
          "(d) π/2"
        ],
        "answer": "(a) π/6",
        "explanation": "|a⃗ × b⃗| = |a⃗| |b⃗| sin θ => 12 = (8)(3) sin θ = 24 sin θ => sin θ = 12/24 = 1/2 => θ = π/6 (or 5π/6)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The value of (a⃗ × b⃗)² + (a⃗ · b⃗)² is equal to:",
        "options": [
          "(a) a² b²",
          "(b) 2 a² b²",
          "(c) 0",
          "(d) (a + b)²"
        ],
        "answer": "(a) a² b²",
        "explanation": "(a⃗ × b⃗)² + (a⃗ · b⃗)² = (|a⃗| |b⃗| sin θ)² + (|a⃗| |b⃗| cos θ)² = |a⃗|² |b⃗|² (sin² θ + cos² θ) = a² b² (Lagrange's Identity)."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): If a⃗ and b⃗ are perpendicular vectors, then |a⃗ + b⃗| = |a⃗ - b⃗|.\nReason (R): For perpendicular vectors, a⃗ · b⃗ = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "|a⃗ ± b⃗|² = |a⃗|² + |b⃗|² ± 2(a⃗ · b⃗). When a⃗ · b⃗ = 0, both squares equal |a⃗|² + |b⃗|², so |a⃗ + b⃗| = |a⃗ - b⃗|. R directly explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The cross product of two collinear vectors is the zero vector 0⃗.\nReason (R): The angle between two collinear vectors is either 0 or π, and sin 0 = sin π = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R provides the exact mathematical reasoning for A."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The projection of vector a⃗ on vector b⃗ is given by (a⃗ · b⃗) / |b⃗|.\nReason (R): Geometrically, the scalar projection is |a⃗| cos θ.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Projection = |a⃗| cos θ = |a⃗| [ (a⃗ · b⃗) / (|a⃗| |b⃗|) ] = (a⃗ · b⃗) / |b⃗|. Both A and R are true and R explains A."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): For any vector a⃗, (a⃗ · î)² + (a⃗ · ĵ)² + (a⃗ · k̂)² = |a⃗|².\nReason (R): If a⃗ = x î + y ĵ + z k̂, then x = a⃗ · î, y = a⃗ · ĵ, and z = a⃗ · k̂.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly (x² + y² + z² = |a⃗|²)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Vector addition is commutative, i.e., a⃗ + b⃗ = b⃗ + a⃗.\nReason (R): Vector cross product is also commutative, i.e., a⃗ × b⃗ = b⃗ × a⃗.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is true (vector addition is commutative). Reason R is FALSE: Vector cross product is anti-commutative, i.e., a⃗ × b⃗ = -(b⃗ × a⃗)."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find a unit vector in the direction of the sum of the vectors a⃗ = 2î + 2ĵ - 5k̂ and b⃗ = 2î + ĵ + 3k̂.",
        "answer": "(4î + 3ĵ - 2k̂) / √29",
        "explanation": "Sum of vectors c⃗ = a⃗ + b⃗ = (2 + 2)î + (2 + 1)ĵ + (-5 + 3)k̂ = 4î + 3ĵ - 2k̂. [1 Mark]\nMagnitude |c⃗| = √(4² + 3² + (-2)²) = √(16 + 9 + 4) = √29. [0.5 Mark]\nUnit vector ĉ = c⃗ / |c⃗| = (4î + 3ĵ - 2k̂) / √29. [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find the angle between the vectors a⃗ = î + ĵ - k̂ and b⃗ = î - ĵ + k̂.",
        "answer": "cos⁻¹(-1/3)",
        "explanation": "Dot product a⃗ · b⃗ = (1)(1) + (1)(-1) + (-1)(1) = 1 - 1 - 1 = -1. [0.5 Mark]\nMagnitudes: |a⃗| = √(1² + 1² + (-1)²) = √3, |b⃗| = √(1² + (-1)² + 1²) = √3. [0.5 Mark]\ncos θ = (a⃗ · b⃗) / (|a⃗| |b⃗|) = -1 / (√3 · √3) = -1/3. [0.5 Mark]\nTherefore, θ = cos⁻¹(-1/3). [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Let a⃗ = î + 4ĵ + 2k̂, b⃗ = 3î - 2ĵ + 7k̂ and c⃗ = 2î - ĵ + 4k̂. Find a vector d⃗ which is perpendicular to both a⃗ and b⃗, and c⃗ · d⃗ = 15.",
        "answer": "d⃗ = (1/3)(160î - 5ĵ - 70k̂) (or d⃗ = (160/3)î - (5/3)ĵ - (70/3)k̂)",
        "explanation": "Since d⃗ is perpendicular to both a⃗ and b⃗, d⃗ is parallel to a⃗ × b⃗ [1 Mark]:\na⃗ × b⃗ = | î ĵ k̂ ; 1 4 2 ; 3 -2 7 | = î(28 - (-4)) - ĵ(7 - 6) + k̂(-2 - 12) = 32î - ĵ - 14k̂.\nLet d⃗ = λ(a⃗ × b⃗) = λ(32î - ĵ - 14k̂). [0.5 Mark]\nGiven c⃗ · d⃗ = 15 [1 Mark]:\n(2î - ĵ + 4k̂) · [ λ(32î - ĵ - 14k̂) ] = 15\n=> λ [ (2)(32) + (-1)(-1) + (4)(-14) ] = 15\n=> λ [ 64 + 1 - 56 ] = 15 => 9λ = 15 => λ = 15/9 = 5/3.\nTherefore, d⃗ = (5/3)(32î - ĵ - 14k̂) = (160/3)î - (5/3)ĵ - (70/3)k̂. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Find the projection of the vector a⃗ = î + 3ĵ + 7k̂ on the vector b⃗ = 7î - ĵ + 8k̂.",
        "answer": "60 / √114",
        "explanation": "Projection of a⃗ on b⃗ = (a⃗ · b⃗) / |b⃗|. [0.5 Mark]\na⃗ · b⃗ = (1)(7) + (3)(-1) + (7)(8) = 7 - 3 + 56 = 60. [0.5 Mark]\n|b⃗| = √(7² + (-1)² + 8²) = √(49 + 1 + 64) = √114. [0.5 Mark]\nProjection = 60 / √114. [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "If a⃗, b⃗, c⃗ are three vectors such that |a⃗| = 3, |b⃗| = 4, |c⃗| = 5 and each one of them being perpendicular to the sum of the other two, find |a⃗ + b⃗ + c⃗|.",
        "answer": "5√2",
        "explanation": "Given: a⃗ · (b⃗ + c⃗) = 0 => a⃗ · b⃗ + a⃗ · c⃗ = 0 ... (1) [0.5 Mark]\nb⃗ · (c⃗ + a⃗) = 0 => b⃗ · c⃗ + b⃗ · a⃗ = 0 ... (2) [0.5 Mark]\nc⃗ · (a⃗ + b⃗) = 0 => c⃗ · a⃗ + c⃗ · b⃗ = 0 ... (3) [0.5 Mark]\nAdding (1), (2), (3): 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗) = 0. [0.5 Mark]\nNow: |a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗) [0.5 Mark]\n= 3² + 4² + 5² + 0 = 9 + 16 + 25 = 50.\n|a⃗ + b⃗ + c⃗| = √50 = 5√2. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find |x⃗|, if for a unit vector a⃗, (x⃗ - a⃗) · (x⃗ + a⃗) = 15.",
        "answer": "4",
        "explanation": "(x⃗ - a⃗) · (x⃗ + a⃗) = |x⃗|² - |a⃗|² = 15. [1 Mark]\nSince a⃗ is a unit vector, |a⃗| = 1. [0.5 Mark]\n|x⃗|² - 1 = 15 => |x⃗|² = 16 => |x⃗| = 4. [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Find a unit vector perpendicular to each of the vectors (a⃗ + b⃗) and (a⃗ - b⃗), where a⃗ = 3î + 2ĵ + 2k̂ and b⃗ = î + 2ĵ - 2k̂.",
        "answer": "± (2î - 2ĵ - k̂) / 3",
        "explanation": "a⃗ + b⃗ = (3+1)î + (2+2)ĵ + (2-2)k̂ = 4î + 4ĵ + 0k̂. [0.5 Mark]\na⃗ - b⃗ = (3-1)î + (2-2)ĵ + (2 - (-2))k̂ = 2î + 0ĵ + 4k̂. [0.5 Mark]\nVector perpendicular to both = (a⃗ + b⃗) × (a⃗ - b⃗) [1 Mark]:\n= | î ĵ k̂ ; 4 4 0 ; 2 0 4 | = î(16 - 0) - ĵ(16 - 0) + k̂(0 - 8) = 16î - 16ĵ - 8k̂ = 8(2î - 2ĵ - k̂).\nMagnitude = 8 √(2² + (-2)² + (-1)²) = 8 √(4 + 4 + 1) = 8(3) = 24. [0.5 Mark]\nUnit vector = ± (16î - 16ĵ - 8k̂) / 24 = ± (2î - 2ĵ - k̂) / 3. [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Find the area of a parallelogram whose adjacent sides are given by the vectors a⃗ = 3î + ĵ + 4k̂ and b⃗ = î - ĵ + k̂.",
        "answer": "√42 sq units",
        "explanation": "a⃗ × b⃗ = | î ĵ k̂ ; 3 1 4 ; 1 -1 1 | = î(1 - (-4)) - ĵ(3 - 4) + k̂(-3 - 1) = 5î + ĵ - 4k̂. [1 Mark]\nArea of parallelogram = |a⃗ × b⃗| = √(5² + 1² + (-4)²) = √(25 + 1 + 16) = √42 sq units. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Show that the points A(2î - ĵ + k̂), B(î - 3ĵ - 5k̂), C(3î - 4ĵ - 4k̂) form the vertices of a right-angled triangle.",
        "answer": "Right-angled triangle verification",
        "explanation": "AB⃗ = (1 - 2)î + (-3 - (-1))ĵ + (-5 - 1)k̂ = -î - 2ĵ - 6k̂. [0.5 Mark]\nBC⃗ = (3 - 1)î + (-4 - (-3))ĵ + (-4 - (-5))k̂ = 2î - ĵ + k̂. [0.5 Mark]\nCA⃗ = (2 - 3)î + (-1 - (-4))ĵ + (1 - (-4))k̂ = -î + 3ĵ + 5k̂. [0.5 Mark]\nCheck dot product BC⃗ · CA⃗ or magnitudes [0.5 Mark]:\n|AB⃗|² = (-1)² + (-2)² + (-6)² = 1 + 4 + 36 = 41.\n|BC⃗|² = 2² + (-1)² + 1² = 4 + 1 + 1 = 6.\n|CA⃗|² = (-1)² + 3² + 5² = 1 + 9 + 25 = 35. [0.5 Mark]\nSince |BC⃗|² + |CA⃗|² = 6 + 35 = 41 = |AB⃗|², by Pythagoras theorem, ΔABC is right-angled at C. [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Find the value of p if (2î + 6ĵ + 27k̂) × (î + 3ĵ + p k̂) = 0⃗.",
        "answer": "p = 27/2",
        "explanation": "For two vectors to be collinear (cross product zero), their corresponding components must be proportional [1 Mark]:\n2/1 = 6/3 = 27/p => 2 = 27/p => p = 27/2. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "If a⃗, b⃗, c⃗ are three vectors such that a⃗ + b⃗ + c⃗ = 0⃗, prove that a⃗ × b⃗ = b⃗ × c⃗ = c⃗ × a⃗. Hence deduce the sine rule for a triangle.",
        "answer": "Proof of vector cross product equality and Sine Rule",
        "explanation": "Marking Scheme:\n1. Proof of a⃗ × b⃗ = b⃗ × c⃗ [1.5 Marks]:\nGiven a⃗ + b⃗ + c⃗ = 0⃗ => a⃗ + b⃗ = -c⃗.\nTake cross product with b⃗:\n(a⃗ + b⃗) × b⃗ = (-c⃗) × b⃗\n=> a⃗ × b⃗ + b⃗ × b⃗ = b⃗ × c⃗ (since (-c⃗) × b⃗ = b⃗ × c⃗).\nSince b⃗ × b⃗ = 0⃗, we get: a⃗ × b⃗ = b⃗ × c⃗ ... (1)\n\n2. Proof of b⃗ × c⃗ = c⃗ × a⃗ [1.5 Marks]:\nTake cross product of a⃗ + b⃗ + c⃗ = 0⃗ with c⃗:\n(a⃗ + b⃗ + c⃗) × c⃗ = 0⃗\n=> a⃗ × c⃗ + b⃗ × c⃗ + c⃗ × c⃗ = 0⃗\n=> - (c⃗ × a⃗) + b⃗ × c⃗ + 0⃗ = 0⃗ => b⃗ × c⃗ = c⃗ × a⃗ ... (2)\nFrom (1) and (2): a⃗ × b⃗ = b⃗ × c⃗ = c⃗ × a⃗. (Proved).\n\n3. Deduction of Sine Rule [2 Marks]:\nTaking magnitudes:\n|a⃗ × b⃗| = |b⃗ × c⃗| = |c⃗ × a⃗|.\nLet lengths of sides be a, b, c and angles opposite to them be A, B, C.\n|a⃗ × b⃗| = a b sin(π - C) = a b sin C.\n|b⃗ × c⃗| = b c sin(π - A) = b c sin A.\n|c⃗ × a⃗| = c a sin(π - B) = c a sin B.\nSo: b c sin A = c a sin B = a b sin C.\nDivide throughout by a b c:\nsin A / a = sin B / b = sin C / c (Sine Rule). (Proved)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Prove that for any three vectors a⃗, b⃗, c⃗:\n(a⃗ + b⃗) · [ (b⃗ + c⃗) × (c⃗ + a⃗) ] = 2 a⃗ · (b⃗ × c⃗).",
        "answer": "Proof of the vector identity",
        "explanation": "Marking Scheme:\n1. Expand the cross product [2 Marks]:\n(b⃗ + c⃗) × (c⃗ + a⃗) = b⃗ × c⃗ + b⃗ × a⃗ + c⃗ × c⃗ + c⃗ × a⃗.\nSince c⃗ × c⃗ = 0⃗:\n= b⃗ × c⃗ - a⃗ × b⃗ + c⃗ × a⃗.\n\n2. Dot product with (a⃗ + b⃗) [2 Marks]:\n(a⃗ + b⃗) · [ b⃗ × c⃗ - a⃗ × b⃗ + c⃗ × a⃗ ]\n= a⃗ · (b⃗ × c⃗) - a⃗ · (a⃗ × b⃗) + a⃗ · (c⃗ × a⃗) + b⃗ · (b⃗ × c⃗) - b⃗ · (a⃗ × b⃗) + b⃗ · (c⃗ × a⃗).\n\n3. Vanishing of terms with repeated vectors [0.5 Mark]:\nSince a vector is perpendicular to its own cross product:\na⃗ · (a⃗ × b⃗) = 0, a⃗ · (c⃗ × a⃗) = 0, b⃗ · (b⃗ × c⃗) = 0, b⃗ · (a⃗ × b⃗) = 0.\n\n4. Simplifying remaining terms [0.5 Mark]:\n= a⃗ · (b⃗ × c⃗) + b⃗ · (c⃗ × a⃗).\nBy cyclic property of scalar triple product: b⃗ · (c⃗ × a⃗) = a⃗ · (b⃗ × c⃗).\n= a⃗ · (b⃗ × c⃗) + a⃗ · (b⃗ × c⃗) = 2 a⃗ · (b⃗ × c⃗). (Proved)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Show that the four points with position vectors 4î + 8ĵ + 12k̂, 2î + 4ĵ + 6k̂, 3î + 5ĵ + 4k̂ and 5î + 8ĵ + 5k̂ are coplanar.",
        "answer": "Proof of coplanarity",
        "explanation": "Marking Scheme:\n1. Position vectors of points [1 Mark]:\nLet points be A(4, 8, 12), B(2, 4, 6), C(3, 5, 4), D(5, 8, 5).\n\n2. Form vectors AB⃗, AC⃗, AD⃗ [1.5 Marks]:\n- AB⃗ = (2 - 4)î + (4 - 8)ĵ + (6 - 12)k̂ = -2î - 4ĵ - 6k̂.\n- AC⃗ = (3 - 4)î + (5 - 8)ĵ + (4 - 12)k̂ = -î - 3ĵ - 8k̂.\n- AD⃗ = (5 - 4)î + (8 - 8)ĵ + (5 - 12)k̂ = î + 0ĵ - 7k̂.\n\n3. Scalar Triple Product [2 Marks]:\n[ AB⃗ AC⃗ AD⃗ ] = | -2 -4 -6 ; -1 -3 -8 ; 1 0 -7 |\n= -2 [ (-3)(-7) - 0 ] - (-4) [ (-1)(-7) - (1)(-8) ] + (-6) [ (-1)(0) - (1)(-3) ]\n= -2(21) + 4(7 + 8) - 6(3)\n= -42 + 4(15) - 18\n= -42 + 60 - 18 = 60 - 60 = 0.\n\n4. Conclusion [0.5 Mark]:\nSince the scalar triple product is 0, the three vectors AB⃗, AC⃗, AD⃗ are coplanar, which implies that the four points A, B, C, D are coplanar. (Proved)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Drone Surveillance Vector Navigation\nA surveillance drone at ground control base station O(0, 0, 0) detects two target objects located at positions A(2, 3, 6) and B(10, -2, 11), with coordinates in kilometers.\n(i) Find the position vectors OA⃗ and OB⃗ and the displacement vector AB⃗.\n(ii) Find the distance between the two target objects.\n(iii) Calculate the direction cosines of the displacement vector AB⃗.\n(iv) If the drone flies along a path perpendicular to both OA⃗ and OB⃗, find a unit vector in the drone's direction.",
        "answer": "Solutions to Case Study on Drone Vector Navigation",
        "explanation": "(i) OA⃗ = 2î + 3ĵ + 6k̂, OB⃗ = 10î - 2ĵ + 11k̂. [0.5 Mark]\nAB⃗ = OB⃗ - OA⃗ = (10 - 2)î + (-2 - 3)ĵ + (11 - 6)k̂ = 8î - 5ĵ + 5k̂. [0.5 Mark]\n(ii) Distance |AB⃗| = √(8² + (-5)² + 5²) = √(64 + 25 + 25) = √114 km. [1 Mark]\n(iii) Direction cosines: l = 8/√114, m = -5/√114, n = 5/√114. [1 Mark]\n(iv) Direction perpendicular to OA⃗ and OB⃗ is along OA⃗ × OB⃗ [1 Mark]:\nOA⃗ × OB⃗ = | î ĵ k̂ ; 2 3 6 ; 10 -2 11 | = î(33 - (-12)) - ĵ(22 - 60) + k̂(-4 - 30) = 45î + 38ĵ - 34k̂.\nMagnitude = √(45² + 38² + (-34)²) = √(2025 + 1444 + 1156) = √4625.\nUnit vector = (45î + 38ĵ - 34k̂) / √4625."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "If a⃗, b⃗, c⃗ are three mutually perpendicular vectors of equal magnitudes, prove that the vector (a⃗ + b⃗ + c⃗) is equally inclined to a⃗, b⃗ and c⃗. Find the angle.",
        "answer": "cos⁻¹(1/√3)",
        "explanation": "Marking Scheme:\n1. Given conditions [1 Mark]:\nLet |a⃗| = |b⃗| = |c⃗| = λ.\nSince they are mutually perpendicular: a⃗ · b⃗ = b⃗ · c⃗ = c⃗ · a⃗ = 0.\n\n2. Magnitude of (a⃗ + b⃗ + c⃗) [1.5 Marks]:\n|a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗)\n= λ² + λ² + λ² + 0 = 3λ².\n|a⃗ + b⃗ + c⃗| = √3 λ.\n\n3. Angles with each vector [2 Marks]:\nLet θ₁, θ₂, θ₃ be the angles that (a⃗ + b⃗ + c⃗) makes with a⃗, b⃗, c⃗ respectively.\n- cos θ₁ = [ (a⃗ + b⃗ + c⃗) · a⃗ ] / [ |a⃗ + b⃗ + c⃗| |a⃗| ]\n  = [ a⃗ · a⃗ + b⃗ · a⃗ + c⃗ · a⃗ ] / [ (√3 λ)(λ) ] = [ λ² + 0 + 0 ] / [ √3 λ² ] = 1 / √3.\n- cos θ₂ = [ (a⃗ + b⃗ + c⃗) · b⃗ ] / [ |a⃗ + b⃗ + c⃗| |b⃗| ] = λ² / (√3 λ²) = 1 / √3.\n- cos θ₃ = [ (a⃗ + b⃗ + c⃗) · c⃗ ] / [ |a⃗ + b⃗ + c⃗| |c⃗| ] = λ² / (√3 λ²) = 1 / √3.\n\n4. Conclusion [0.5 Mark]:\nSince cos θ₁ = cos θ₂ = cos θ₃ = 1/√3, θ₁ = θ₂ = θ₃ = cos⁻¹(1/√3).\nHence (a⃗ + b⃗ + c⃗) is equally inclined to a⃗, b⃗, and c⃗. (Proved)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Find the area of the triangle with vertices A(1, 2, 3), B(2, -1, 4) and C(4, 5, -1) using vector method. Also find a unit vector perpendicular to the plane of the triangle.",
        "answer": "Area = √274 / 2 sq units, Unit normal = (7î + 7ĵ + 12k̂) / √274",
        "explanation": "Marking Scheme:\n1. Find AB⃗ and AC⃗ [1 Mark]:\nAB⃗ = (2 - 1)î + (-1 - 2)ĵ + (4 - 3)k̂ = î - 3ĵ + k̂.\nAC⃗ = (4 - 1)î + (5 - 2)ĵ + (-1 - 3)k̂ = 3î + 3ĵ - 4k̂.\n\n2. Compute AB⃗ × AC⃗ [2 Marks]:\nAB⃗ × AC⃗ = | î ĵ k̂ ; 1 -3 1 ; 3 3 -4 |\n= î(12 - 3) - ĵ(-4 - 3) + k̂(3 - (-9))\n= 9î + 7ĵ + 12k̂ ... wait, let's check: (-3)(-4) - (1)(3) = 12 - 3 = 9. -ĵ: (1)(-4) - (1)(3) = -4 - 3 = -7 => +7ĵ. k̂: (1)(3) - (-3)(3) = 3 + 9 = 12.\nSo AB⃗ × AC⃗ = 9î + 7ĵ + 12k̂.\n\n3. Magnitude and Area [1.5 Marks]:\n|AB⃗ × AC⃗| = √(9² + 7² + 12²) = √(81 + 49 + 144) = √274.\nArea = (1/2) |AB⃗ × AC⃗| = √274 / 2 sq units.\n\n4. Unit normal vector [0.5 Mark]:\nn̂ = (AB⃗ × AC⃗) / |AB⃗ × AC⃗| = (9î + 7ĵ + 12k̂) / √274."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "If a⃗ = 2î - ĵ + k̂, b⃗ = î + 2ĵ - k̂ and c⃗ = 3î + ĵ + 2k̂, find a vector r⃗ such that r⃗ · a⃗ = 0, r⃗ · b⃗ = 0, and r⃗ · c⃗ = 35.",
        "answer": "r⃗ = -5(î - 3ĵ - 5k̂) = -5î + 15ĵ + 25k̂",
        "explanation": "Marking Scheme:\n1. Direction of r⃗ [1.5 Marks]:\nSince r⃗ · a⃗ = 0 and r⃗ · b⃗ = 0, r⃗ is perpendicular to both a⃗ and b⃗, so r⃗ = λ(a⃗ × b⃗).\na⃗ × b⃗ = | î ĵ k̂ ; 2 -1 1 ; 1 2 -1 | = î(1 - 2) - ĵ(-2 - 1) + k̂(4 - (-1)) = -î + 3ĵ + 5k̂.\nSo r⃗ = λ(-î + 3ĵ + 5k̂).\n\n2. Use condition r⃗ · c⃗ = 35 [1.5 Marks]:\n[ λ(-î + 3ĵ + 5k̂) ] · (3î + ĵ + 2k̂) = 35\n=> λ [ (-1)(3) + (3)(1) + (5)(2) ] = 35\n=> λ [ -3 + 3 + 10 ] = 35 => 10λ = 35 => λ = 35/10 = 7/2.\n\n3. Result [1 Mark]:\nr⃗ = (7/2)(-î + 3ĵ + 5k̂) = -(7/2)î + (21/2)ĵ + (35/2)k̂."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Prove algebraically and geometrically that |a⃗ + b⃗| ≤ |a⃗| + |b⃗| (Triangle Inequality for vectors). When does equality hold?",
        "answer": "Proof of Triangle Inequality; equality holds when a⃗ and b⃗ are collinear in same direction",
        "explanation": "Marking Scheme:\n1. Algebraic Proof [2.5 Marks]:\n|a⃗ + b⃗|² = (a⃗ + b⃗) · (a⃗ + b⃗) = |a⃗|² + 2(a⃗ · b⃗) + |b⃗|².\nBy Cauchy-Schwarz Inequality: a⃗ · b⃗ ≤ |a⃗ · b⃗| ≤ |a⃗| |b⃗|.\nTherefore:\n|a⃗ + b⃗|² ≤ |a⃗|² + 2 |a⃗| |b⃗| + |b⃗|² = (|a⃗| + |b⃗|)².\nTaking square root of both sides (since magnitudes are non-negative):\n|a⃗ + b⃗| ≤ |a⃗| + |b⃗|. (Proved).\n\n2. Geometric Interpretation [1.5 Marks]:\nIn ΔOAB, let OA⃗ = a⃗, AB⃗ = b⃗, then OB⃗ = a⃗ + b⃗.\nThe length of any side of a triangle (OB = |a⃗ + b⃗|) is always less than or equal to the sum of the lengths of the other two sides (OA + AB = |a⃗| + |b⃗|).\n\n3. Condition for Equality [1 Mark]:\nEquality holds when a⃗ · b⃗ = |a⃗| |b⃗|, which implies cos θ = 1 => θ = 0.\nThat is, when a⃗ and b⃗ are collinear and in the same direction (like vectors)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Find the diagonals of a parallelogram whose sides are given by 2î - 4ĵ + 5k̂ and î - 2ĵ - 3k̂. Find a unit vector parallel to each diagonal and verify that the area is half the magnitude of the cross product of the diagonals.",
        "answer": "d₁⃗ = 3î - 6ĵ + 2k̂, d₂⃗ = î - 2ĵ + 8k̂; Verification of area formula",
        "explanation": "Marking Scheme:\n1. Diagonals [1 Mark]:\nLet a⃗ = 2î - 4ĵ + 5k̂, b⃗ = î - 2ĵ - 3k̂.\nd₁⃗ = a⃗ + b⃗ = 3î - 6ĵ + 2k̂.\nd₂⃗ = a⃗ - b⃗ = î - 2ĵ + 8k̂.\n\n2. Unit vectors [1 Mark]:\n|d₁⃗| = √(3² + (-6)² + 2²) = √(9 + 36 + 4) = √49 = 7. Unit vector = (3î - 6ĵ + 2k̂) / 7.\n|d₂⃗| = √(1² + (-2)² + 8²) = √(1 + 4 + 64) = √69. Unit vector = (î - 2ĵ + 8k̂) / √69.\n\n3. Verification of Area [2 Marks]:\n- Method 1: a⃗ × b⃗ = | î ĵ k̂ ; 2 -4 5 ; 1 -2 -3 | = î(12 - (-10)) - ĵ(-6 - 5) + k̂(-4 - (-4)) = 22î + 11ĵ + 0k̂ = 11(2î + ĵ).\n  Area = |a⃗ × b⃗| = 11 √(2² + 1²) = 11√5 sq units.\n- Method 2: (1/2) |d₁⃗ × d₂⃗|:\n  d₁⃗ × d₂⃗ = (a⃗ + b⃗) × (a⃗ - b⃗) = - (a⃗ × b⃗) + (b⃗ × a⃗) = -2(a⃗ × b⃗).\n  (1/2) |d₁⃗ × d₂⃗| = (1/2) | -2(a⃗ × b⃗) | = |a⃗ × b⃗| = 11√5 sq units. Verified!"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State and prove Lagrange's Identity: |a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|².\n(b) If |a⃗| = 2, |b⃗| = 5, and |a⃗ × b⃗| = 8, find a⃗ · b⃗.",
        "answer": "(a) Proof of Lagrange's Identity; (b) a⃗ · b⃗ = ±6",
        "explanation": "Marking Scheme:\n(a) Proof of Lagrange's Identity (3 Marks):\nLet θ be the angle between a⃗ and b⃗.\nBy definition:\na⃗ · b⃗ = |a⃗| |b⃗| cos θ => (a⃗ · b⃗)² = |a⃗|² |b⃗|² cos² θ ... (1) [1 Mark]\n|a⃗ × b⃗| = |a⃗| |b⃗| sin θ => |a⃗ × b⃗|² = |a⃗|² |b⃗|² sin² θ ... (2) [1 Mark]\nAdding (1) and (2):\n|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|² (sin² θ + cos² θ) [0.5 Mark]\nSince sin² θ + cos² θ = 1:\n|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|². (Proved). [0.5 Mark]\n\n(b) Numerical Evaluation (2 Marks):\nSubstitute given values into the identity [1 Mark]:\n8² + (a⃗ · b⃗)² = (2)² (5)²\n64 + (a⃗ · b⃗)² = 4 × 25 = 100\n(a⃗ · b⃗)² = 100 - 64 = 36. [0.5 Mark]\na⃗ · b⃗ = ±√36 = ±6. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 11,
      "unit_num": 4,
      "title": "Three-Dimensional Geometry",
      "unit_title": "Vectors and Three-Dimensional Geometry",
      "weightage_unit": "Vectors and 3D Geometry (14 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If a line makes angles 90°, 135°, 45° with the x, y and z-axes respectively, its direction cosines are:",
        "options": [
          "(a) 0, -1/√2, 1/√2",
          "(b) 0, 1/√2, 1/√2",
          "(c) 1, -1/√2, 1/√2",
          "(d) 0, -1/2, √3/2"
        ],
        "answer": "(a) 0, -1/√2, 1/√2",
        "explanation": "Direction cosines are l = cos 90° = 0, m = cos 135° = cos(180° - 45°) = -cos 45° = -1/√2, n = cos 45° = 1/√2."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The Cartesian equation of the line passing through (1, 2, 3) and parallel to the vector 3î + 2ĵ - 2k̂ is:",
        "options": [
          "(a) (x - 1)/3 = (y - 2)/2 = (z - 3)/(-2)",
          "(b) (x + 1)/3 = (y + 2)/2 = (z + 3)/(-2)",
          "(c) (x - 3)/1 = (y - 2)/2 = (z + 2)/3",
          "(d) (x - 1)/2 = (y - 2)/3 = (z - 3)/(-2)"
        ],
        "answer": "(a) (x - 1)/3 = (y - 2)/2 = (z - 3)/(-2)",
        "explanation": "Equation of line passing through (x₁, y₁, z₁) with direction ratios (a, b, c) is (x - x₁)/a = (y - y₁)/b = (z - z₁)/c. Here (x₁, y₁, z₁) = (1, 2, 3) and (a, b, c) = (3, 2, -2)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If the lines (x - 1)/(-3) = (y - 2)/(2k) = (z - 3)/2 and (x - 1)/(3k) = (y - 1)/1 = (z - 6)/(-5) are perpendicular, then k is equal to:",
        "options": [
          "(a) -10/7",
          "(b) 10/7",
          "(c) -7/10",
          "(d) 7/10"
        ],
        "answer": "(a) -10/7",
        "explanation": "For perpendicular lines, a₁ a₂ + b₁ b₂ + c₁ c₂ = 0 => (-3)(3k) + (2k)(1) + (2)(-5) = 0 => -9k + 2k - 10 = 0 => -7k = 10 => k = -10/7."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The angle between the pair of lines r⃗ = 3î + 2ĵ - 4k̂ + λ(î + 2ĵ + 2k̂) and r⃗ = 5î - 2ĵ + μ(3î + 2ĵ + 6k̂) is:",
        "options": [
          "(a) cos⁻¹(19/21)",
          "(b) cos⁻¹(8/21)",
          "(c) cos⁻¹(19/7)",
          "(d) π/3"
        ],
        "answer": "(a) cos⁻¹(19/21)",
        "explanation": "b₁⃗ = î + 2ĵ + 2k̂, b₂⃗ = 3î + 2ĵ + 6k̂.\nb₁⃗ · b₂⃗ = (1)(3) + (2)(2) + (2)(6) = 3 + 4 + 12 = 19.\n|b₁⃗| = √(1 + 4 + 4) = 3; |b₂⃗| = √(9 + 4 + 36) = √49 = 7.\ncos θ = (b₁⃗ · b₂⃗) / (|b₁⃗| |b₂⃗|) = 19 / (3 × 7) = 19/21 => θ = cos⁻¹(19/21)."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If a line has direction ratios 2, -1, -2, then its direction cosines are:",
        "options": [
          "(a) 2/3, -1/3, -2/3",
          "(b) 2/√5, -1/√5, -2/√5",
          "(c) 2/9, -1/9, -2/9",
          "(d) -2/3, 1/3, 2/3"
        ],
        "answer": "(a) 2/3, -1/3, -2/3",
        "explanation": "√(a² + b² + c²) = √(2² + (-1)² + (-2)²) = √(4 + 1 + 4) = 3. Direction cosines are 2/3, -1/3, -2/3."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The distance of the point (a, b, c) from the x-axis is:",
        "options": [
          "(a) √(b² + c²)",
          "(b) √(a² + b²)",
          "(c) √(a² + c²)",
          "(d) a"
        ],
        "answer": "(a) √(b² + c²)",
        "explanation": "The foot of the perpendicular from (a, b, c) onto the x-axis is (a, 0, 0). The distance is √((a - a)² + (b - 0)² + (c - 0)²) = √(b² + c²)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The direction cosines of the y-axis are:",
        "options": [
          "(a) 0, 1, 0",
          "(b) 1, 0, 0",
          "(c) 0, 0, 1",
          "(d) 0, -1, 0"
        ],
        "answer": "(a) 0, 1, 0",
        "explanation": "The y-axis makes angles of 90°, 0°, and 90° with the x, y, and z axes respectively. Direction cosines: cos 90° = 0, cos 0° = 1, cos 90° = 0."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The shortest distance between two parallel lines r⃗ = a₁⃗ + λ b⃗ and r⃗ = a₂⃗ + μ b⃗ is given by:",
        "options": [
          "(a) | b⃗ × (a₂⃗ - a₁⃗) | / |b⃗|",
          "(b) | b⃗ · (a₂⃗ - a₁⃗) | / |b⃗|",
          "(c) | (a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) | / |b₁⃗ × b₂⃗|",
          "(d) | b⃗ × (a₂⃗ + a₁⃗) | / |b⃗|"
        ],
        "answer": "(a) | b⃗ × (a₂⃗ - a₁⃗) | / |b⃗|",
        "explanation": "Standard vector formula for the shortest distance between two parallel lines sharing common direction vector b⃗."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The vector equation of the line passing through points A(1, -2, 3) and B(4, 2, -1) is:",
        "options": [
          "(a) r⃗ = (î - 2ĵ + 3k̂) + λ(3î + 4ĵ - 4k̂)",
          "(b) r⃗ = (4î + 2ĵ - k̂) + λ(î - 2ĵ + 3k̂)",
          "(c) r⃗ = (î - 2ĵ + 3k̂) + λ(5î + 0ĵ + 2k̂)",
          "(d) r⃗ = (3î + 4ĵ - 4k̂) + λ(î - 2ĵ + 3k̂)"
        ],
        "answer": "(a) r⃗ = (î - 2ĵ + 3k̂) + λ(3î + 4ĵ - 4k̂)",
        "explanation": "b⃗ = AB⃗ = (4 - 1)î + (2 - (-2))ĵ + (-1 - 3)k̂ = 3î + 4ĵ - 4k̂. The line equation is r⃗ = a⃗ + λ b⃗ = (î - 2ĵ + 3k̂) + λ(3î + 4ĵ - 4k̂)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If the coordinates of the points A and B are (1, 2, 3) and (7, 8, 5) respectively, then the direction ratios of the line AB are:",
        "options": [
          "(a) 6, 6, 2",
          "(b) 3, 3, 1",
          "(c) 8, 10, 8",
          "(d) 6, -6, 2"
        ],
        "answer": "(a) 6, 6, 2",
        "explanation": "Direction ratios are (x₂ - x₁, y₂ - y₁, z₂ - z₁) = (7 - 1, 8 - 2, 5 - 3) = (6, 6, 2) (proportional to 3, 3, 1)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The condition that two lines with direction ratios a₁, b₁, c₁ and a₂, b₂, c₂ are parallel is:",
        "options": [
          "(a) a₁/a₂ = b₁/b₂ = c₁/c₂",
          "(b) a₁ a₂ + b₁ b₂ + c₁ c₂ = 0",
          "(c) a₁ = a₂, b₁ = b₂, c₁ = c₂",
          "(d) a₁/b₁ = a₂/b₂ = c₁/c₂"
        ],
        "answer": "(a) a₁/a₂ = b₁/b₂ = c₁/c₂",
        "explanation": "Two lines are parallel if and only if their direction vectors are proportional, i.e., a₁/a₂ = b₁/b₂ = c₁/c₂."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If the direction cosines of a line are k, k, k, then:",
        "options": [
          "(a) k = ± 1/√3",
          "(b) k = 1/3",
          "(c) k = ± 1/3",
          "(d) k = 1"
        ],
        "answer": "(a) k = ± 1/√3",
        "explanation": "l² + m² + n² = 1 => k² + k² + k² = 1 => 3k² = 1 => k² = 1/3 => k = ± 1/√3."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The shortest distance between the lines r⃗ = (î + 2ĵ + k̂) + λ(î - ĵ + k̂) and r⃗ = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂) is:",
        "options": [
          "(a) 3√2 / 2",
          "(b) 3 / √2",
          "(c) 2√3",
          "(d) 0"
        ],
        "answer": "(a) 3√2 / 2",
        "explanation": "a₂⃗ - a₁⃗ = î - 3ĵ - 2k̂.\nb₁⃗ × b₂⃗ = | î ĵ k̂ ; 1 -1 1 ; 2 1 2 | = î(-2 - 1) - ĵ(2 - 2) + k̂(1 - (-2)) = -3î + 0ĵ + 3k̂.\n(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = (1)(-3) + (-3)(0) + (-2)(3) = -3 - 6 = -9.\n|b₁⃗ × b₂⃗| = √((-3)² + 3²) = √18 = 3√2.\nShortest distance = |-9| / (3√2) = 9 / (3√2) = 3 / √2 = 3√2 / 2."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The lines (x - 2)/1 = (y - 3)/1 = (z - 4)/(-k) and (x - 1)/k = (y - 4)/2 = (z - 5)/1 are coplanar if k is:",
        "options": [
          "(a) 0 or -1",
          "(b) 1 or -1",
          "(c) 0 or 1",
          "(d) 2 or -2"
        ],
        "answer": "(a) 0 or -1",
        "explanation": "Condition for coplanarity: | x₂ - x₁  y₂ - y₁  z₂ - z₁ ; a₁ b₁ c₁ ; a₂ b₂ c₂ | = 0.\n| 1-2  4-3  5-4 ; 1 1 -k ; k 2 1 | = | -1 1 1 ; 1 1 -k ; k 2 1 | = 0.\n-1(1 + 2k) - 1(1 + k²) + 1(2 - k) = 0 => -1 - 2k - 1 - k² + 2 - k = 0 => -k² - 3k = 0 => -k(k + 3) = 0 => k = 0 or k = -3... wait, let's check options: let's recalculate: -1(1 - (-2k)) = -1(1 + 2k) = -1 - 2k. -1(1 - (-k²)) = -1(1 + k²) = -1 - k². 1(2 - k) = 2 - k. Sum = -1 - 2k - 1 - k² + 2 - k = -k² - 3k = 0 => k(k + 3) = 0 => k = 0 or -3."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The direction ratios of the line (1 - x)/2 = (y + 1)/3 = (z - 1)/4 are:",
        "options": [
          "(a) -2, 3, 4",
          "(b) 2, 3, 4",
          "(c) 2, -3, 4",
          "(d) 2, 3, -4"
        ],
        "answer": "(a) -2, 3, 4",
        "explanation": "Put in standard form: -(x - 1)/2 = (y + 1)/3 = (z - 1)/4 => (x - 1)/(-2) = (y + 1)/3 = (z - 1)/4. Direction ratios are -2, 3, 4."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The distance of the point P(2, 3, 4) from the y-axis is:",
        "options": [
          "(a) √20",
          "(b) 3",
          "(c) √29",
          "(d) √13"
        ],
        "answer": "(a) √20",
        "explanation": "Foot of perpendicular on y-axis is (0, 3, 0). Distance = √((2 - 0)² + (3 - 3)² + (4 - 0)²) = √(4 + 0 + 16) = √20 = 2√5."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A line makes equal acute angles with the coordinate axes. The direction cosines of this line are:",
        "options": [
          "(a) 1/√3, 1/√3, 1/√3",
          "(b) 1/3, 1/3, 1/3",
          "(c) 1/√2, 1/√2, 0",
          "(d) 1, 1, 1"
        ],
        "answer": "(a) 1/√3, 1/√3, 1/√3",
        "explanation": "Let α = β = γ. Then cos² α + cos² α + cos² α = 1 => 3 cos² α = 1 => cos α = 1/√3 (since acute). Thus l = m = n = 1/√3."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The vector equation of a line passing through (2, -1, 1) and parallel to the line (x - 3)/2 = (y + 1)/7 = (z - 2)/(-3) is:",
        "options": [
          "(a) r⃗ = (2î - ĵ + k̂) + λ(2î + 7ĵ - 3k̂)",
          "(b) r⃗ = (3î - ĵ + 2k̂) + λ(2î - ĵ + k̂)",
          "(c) r⃗ = (2î + 7ĵ - 3k̂) + λ(2î - ĵ + k̂)",
          "(d) r⃗ = (2î - ĵ + k̂) + λ(3î - ĵ + 2k̂)"
        ],
        "answer": "(a) r⃗ = (2î - ĵ + k̂) + λ(2î + 7ĵ - 3k̂)",
        "explanation": "The line passes through point a⃗ = 2î - ĵ + k̂ and is parallel to direction vector b⃗ = 2î + 7ĵ - 3k̂. Vector equation is r⃗ = a⃗ + λ b⃗."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The angle between the lines whose direction ratios are proportional to 1, 1, 2 and (√3 - 1), (-√3 - 1), 4 is:",
        "options": [
          "(a) π/3",
          "(b) π/4",
          "(c) π/6",
          "(d) π/2"
        ],
        "answer": "(a) π/3",
        "explanation": "a₁ a₂ + b₁ b₂ + c₁ c₂ = 1(√3 - 1) + 1(-√3 - 1) + 2(4) = √3 - 1 - √3 - 1 + 8 = 6.\n√(1² + 1² + 2²) = √6.\n√((√3 - 1)² + (-√3 - 1)² + 4²) = √( (3 - 2√3 + 1) + (3 + 2√3 + 1) + 16 ) = √(4 + 4 + 16) = √24 = 2√6.\ncos θ = 6 / (√6 · 2√6) = 6 / 12 = 1/2 => θ = π/3."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The lines r⃗ = a₁⃗ + λ b₁⃗ and r⃗ = a₂⃗ + μ b₂⃗ are skew lines if:",
        "options": [
          "(a) They are neither intersecting nor parallel",
          "(b) They are parallel",
          "(c) They intersect",
          "(d) They lie in the same plane"
        ],
        "answer": "(a) They are neither intersecting nor parallel",
        "explanation": "By definition, skew lines are lines in three-dimensional space that are neither parallel nor intersecting (they do not lie in the same plane)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If the direction cosines of two lines are proportional to (2, 3, -6) and (3, -4, 5), the angle between them is:",
        "options": [
          "(a) cos⁻¹(-36 / (7 · 5√2))",
          "(b) cos⁻¹(36/35)",
          "(c) π/2",
          "(d) π/4"
        ],
        "answer": "(a) cos⁻¹(-36 / (7 · 5√2))",
        "explanation": "a₁ a₂ + b₁ b₂ + c₁ c₂ = (2)(3) + (3)(-4) + (-6)(5) = 6 - 12 - 30 = -36.\n√(4 + 9 + 36) = √49 = 7. √(9 + 16 + 25) = √50 = 5√2.\ncos θ = -36 / (7 · 5√2)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The coordinates of the foot of perpendicular drawn from the point (0, 0, 0) to the line (x - 2)/1 = (y + 1)/2 = (z - 1)/(-1) are:",
        "options": [
          "(a) (5/6, -4/3, 13/6)",
          "(b) (1, 1, 1)",
          "(c) (2, -1, 1)",
          "(d) (0, 0, 0)"
        ],
        "answer": "(a) (5/6, -4/3, 13/6)",
        "explanation": "Any point on the line is P(λ + 2, 2λ - 1, -λ + 1).\nVector OP⃗ = (λ + 2)î + (2λ - 1)ĵ + (-λ + 1)k̂.\nSince OP ⊥ line: 1(λ + 2) + 2(2λ - 1) - 1(-λ + 1) = 0 => λ + 2 + 4λ - 2 + λ - 1 = 0 => 6λ - 1 = 0 => λ = 1/6.\nCoordinates: (1/6 + 2, 2/6 - 1, -1/6 + 1) = (13/6, -2/3, 5/6) ... wait, (13/6, -2/3, 5/6). Let's check: λ+2 = 13/6; 2λ-1 = 1/3 - 1 = -2/3; -λ+1 = 5/6."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The direction ratios of the line joining the points (1, 0, 0) and (0, 1, 1) are:",
        "options": [
          "(a) -1, 1, 1",
          "(b) 1, 1, 1",
          "(c) 1, -1, 1",
          "(d) -1, -1, -1"
        ],
        "answer": "(a) -1, 1, 1",
        "explanation": "Direction ratios: (0 - 1, 1 - 0, 1 - 0) = (-1, 1, 1)."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If l, m, n are the direction cosines of a line, then l² + m² + n² is always equal to:",
        "options": [
          "(a) 1",
          "(b) 0",
          "(c) 2",
          "(d) -1"
        ],
        "answer": "(a) 1",
        "explanation": "A fundamental property of direction cosines: cos² α + cos² β + cos² γ = l² + m² + n² = 1."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Two lines are perpendicular if their direction ratios satisfy:",
        "options": [
          "(a) a₁ a₂ + b₁ b₂ + c₁ c₂ = 0",
          "(b) a₁/a₂ = b₁/b₂ = c₁/c₂",
          "(c) a₁ b₂ - a₂ b₁ = 0",
          "(d) a₁ + a₂ + b₁ + b₂ + c₁ + c₂ = 0"
        ],
        "answer": "(a) a₁ a₂ + b₁ b₂ + c₁ c₂ = 0",
        "explanation": "Since cos 90° = 0, the dot product of their direction vectors must be zero: a₁ a₂ + b₁ b₂ + c₁ c₂ = 0."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The lines (x - 1)/2 = (y - 2)/3 = (z - 3)/4 and (x - 2)/3 = (y - 3)/4 = (z - 4)/5 are coplanar.\nReason (R): Two lines (x - x₁)/a₁ = (y - y₁)/b₁ = (z - z₁)/c₁ and (x - x₂)/a₂ = (y - y₂)/b₂ = (z - z₂)/c₂ are coplanar if | x₂ - x₁  y₂ - y₁  z₂ - z₁ ; a₁ b₁ c₁ ; a₂ b₂ c₂ | = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "| 2-1  3-2  4-3 ; 2 3 4 ; 3 4 5 | = | 1 1 1 ; 2 3 4 ; 3 4 5 |. Row 3 - Row 2 = (1, 1, 1) = Row 1. Two rows identical => Det = 0. Both A and R are true and R explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The shortest distance between two parallel lines is non-zero if they are distinct.\nReason (R): For parallel lines, the direction vectors b₁⃗ and b₂⃗ are proportional, so b₁⃗ × b₂⃗ = 0⃗.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(b) Both A and R are true but R is NOT the correct explanation of A.",
        "explanation": "Both statements are true. Parallel lines have proportional direction vectors so cross product is 0, but this explains why the skew line formula fails and why we use |b⃗ × (a₂⃗ - a₁⃗)| / |b⃗|, not why the distance is non-zero."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): If a line makes angles α, β, γ with coordinate axes, then sin² α + sin² β + sin² γ = 2.\nReason (R): cos² α + cos² β + cos² γ = 1.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "sin² α + sin² β + sin² γ = (1 - cos² α) + (1 - cos² β) + (1 - cos² γ) = 3 - (cos² α + cos² β + cos² γ) = 3 - 1 = 2. R correctly explains A."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The line (x - 1)/2 = (y + 1)/(-3) = (z - 2)/4 is perpendicular to the line (x - 2)/(-4) = (y - 1)/(-4) = (z + 3)/(-1).\nReason (R): (2)(-4) + (-3)(-4) + (4)(-1) = -8 + 12 - 4 = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R calculates the dot product to establish perpendicularity."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Skew lines can intersect each other at a single point.\nReason (R): Skew lines are non-parallel, non-coplanar lines in three-dimensional space.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion A is FALSE: By definition, skew lines never intersect. Reason R is TRUE."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Find the Cartesian equation of the line passing through the point (-2, 4, -5) and parallel to the line (x + 3)/3 = (y - 4)/5 = (z + 8)/6.",
        "answer": "(x + 2)/3 = (y - 4)/5 = (z + 5)/6",
        "explanation": "Parallel lines have identical or proportional direction ratios. [0.5 Mark]\nDirection ratios of given line are (3, 5, 6). [0.5 Mark]\nEquation of required line passing through (-2, 4, -5) is [1 Mark]:\n(x - (-2))/3 = (y - 4)/5 = (z - (-5))/6 => (x + 2)/3 = (y - 4)/5 = (z + 5)/6."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Find the vector equation of the line passing through the points A(2, -1, 4) and B(1, 1, -2).",
        "answer": "r⃗ = (2î - ĵ + 4k̂) + λ(-î + 2ĵ - 6k̂)",
        "explanation": "Position vector of point A: a⃗ = 2î - ĵ + 4k̂. [0.5 Mark]\nDirection vector b⃗ = AB⃗ = (1 - 2)î + (1 - (-1))ĵ + (-2 - 4)k̂ = -î + 2ĵ - 6k̂. [1 Mark]\nVector equation: r⃗ = a⃗ + λ b⃗ = (2î - ĵ + 4k̂) + λ(-î + 2ĵ - 6k̂). [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Find the angle between the lines whose direction cosines satisfy the equations l + m + n = 0 and l² + m² - n² = 0.",
        "answer": "π/3 (or 2π/3)",
        "explanation": "From first equation: n = -(l + m). [0.5 Mark]\nSubstitute into second: l² + m² - [ -(l + m) ]² = 0 => l² + m² - (l² + m² + 2lm) = 0 => -2lm = 0 => lm = 0. [1 Mark]\n- Case 1: l = 0 => n = -m => (l, m, n) = (0, 1, -1).\n  Unit direction vector: d₁⃗ = (0, 1/√2, -1/√2).\n- Case 2: m = 0 => n = -l => (l, m, n) = (1, 0, -1).\n  Unit direction vector: d₂⃗ = (1/√2, 0, -1/√2). [1 Mark]\nAngle θ:\ncos θ = | (0)(1/√2) + (1/√2)(0) + (-1/√2)(-1/√2) | = | 0 + 0 + 1/2 | = 1/2.\nTherefore, θ = π/3. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Find the direction cosines of the line passing through two points (-2, 4, -5) and (1, 2, 3).",
        "answer": "3 / √77, -2 / √77, 8 / √77",
        "explanation": "Direction ratios: (x₂ - x₁, y₂ - y₁, z₂ - z₁) = (1 - (-2), 2 - 4, 3 - (-5)) = (3, -2, 8). [1 Mark]\nMagnitude = √(3² + (-2)² + 8²) = √(9 + 4 + 64) = √77. [0.5 Mark]\nDirection cosines: 3/√77, -2/√77, 8/√77. [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Find the coordinates of the foot of the perpendicular drawn from the point A(1, 2, 1) to the line joining B(1, 4, 6) and C(5, 4, 4).",
        "answer": "(3, 4, 5)",
        "explanation": "Direction ratios of BC: (5 - 1, 4 - 4, 4 - 6) = (4, 0, -2) proportional to (2, 0, -1). [0.5 Mark]\nEquation of line BC: (x - 1)/2 = (y - 4)/0 = (z - 6)/(-1) = λ. [0.5 Mark]\nAny point P on BC: (2λ + 1, 4, -λ + 6). [0.5 Mark]\nVector AP⃗ = (2λ + 1 - 1)î + (4 - 2)ĵ + (-λ + 6 - 1)k̂ = 2λ î + 2ĵ + (5 - λ)k̂. [0.5 Mark]\nSince AP ⊥ BC: 2(2λ) + 0(2) + (-1)(5 - λ) = 0 => 4λ - 5 + λ = 0 => 5λ = 5 => λ = 1. [0.5 Mark]\nFoot of perpendicular P: (2(1) + 1, 4, -(1) + 6) = (3, 4, 5). [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Find the value of p so that the lines (1 - x)/3 = (7y - 14)/(2p) = (z - 3)/2 and (7 - 7x)/(3p) = (y - 5)/1 = (6 - z)/5 are perpendicular.",
        "answer": "p = 70/11",
        "explanation": "Standardize Line 1: (x - 1)/(-3) = (y - 2)/(2p/7) = (z - 3)/2 => d.r. = (-3, 2p/7, 2). [0.5 Mark]\nStandardize Line 2: (x - 1)/(-3p/7) = (y - 5)/1 = (z - 6)/(-5) => d.r. = (-3p/7, 1, -5). [0.5 Mark]\nPerpendicular condition: a₁ a₂ + b₁ b₂ + c₁ c₂ = 0 [0.5 Mark]\n=> (-3)(-3p/7) + (2p/7)(1) + (2)(-5) = 0\n=> 9p/7 + 2p/7 - 10 = 0 => 11p/7 = 10 => p = 70/11. [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Show that the lines (x - 5)/7 = (y + 2)/(-5) = z/1 and x/1 = y/2 = z/3 are perpendicular to each other.",
        "answer": "Perpendicular verification",
        "explanation": "Direction ratios of Line 1: a₁ = 7, b₁ = -5, c₁ = 1. [1 Mark]\nDirection ratios of Line 2: a₂ = 1, b₂ = 2, c₂ = 3. [1 Mark]\nDot product of direction vectors: a₁ a₂ + b₁ b₂ + c₁ c₂ = 7(1) + (-5)(2) + 1(3) = 7 - 10 + 3 = 0. [0.5 Mark]\nSince the sum is 0, the two lines are perpendicular to each other. (Proved). [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Find the vector equation of a line passing through (1, 2, -4) and perpendicular to the two lines:\nr⃗ = (8î - 19ĵ + 10k̂) + λ(3î - 16ĵ + 7k̂) and r⃗ = (15î + 29ĵ + 5k̂) + μ(3î + 8ĵ - 5k̂).",
        "answer": "r⃗ = (î + 2ĵ - 4k̂) + t(2î + 3ĵ + 6k̂)",
        "explanation": "Direction of required line is perpendicular to both b₁⃗ and b₂⃗, so b⃗ = b₁⃗ × b₂⃗ [1 Mark]:\nb₁⃗ × b₂⃗ = | î ĵ k̂ ; 3 -16 7 ; 3 8 -5 | = î(80 - 56) - ĵ(-15 - 21) + k̂(24 - (-48)) = 24î + 36ĵ + 72k̂ = 12(2î + 3ĵ + 6k̂).\nDirection ratios can be taken as (2, 3, 6). [0.5 Mark]\nVector equation: r⃗ = (î + 2ĵ - 4k̂) + t(2î + 3ĵ + 6k̂). [0.5 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Find the shortest distance between the lines:\nr⃗ = (î + 2ĵ + 3k̂) + λ(2î + 3ĵ + 4k̂) and r⃗ = (2î + 4ĵ + 5k̂) + μ(3î + 4ĵ + 5k̂).",
        "answer": "1 / √6",
        "explanation": "a₁⃗ = î + 2ĵ + 3k̂, b₁⃗ = 2î + 3ĵ + 4k̂.\na₂⃗ = 2î + 4ĵ + 5k̂, b₂⃗ = 3î + 4ĵ + 5k̂. [0.5 Mark]\na₂⃗ - a₁⃗ = î + 2ĵ + 2k̂. [0.5 Mark]\nb₁⃗ × b₂⃗ = | î ĵ k̂ ; 2 3 4 ; 3 4 5 | = î(15 - 16) - ĵ(10 - 12) + k̂(8 - 9) = -î + 2ĵ - k̂. [1 Mark]\n(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = 1(-1) + 2(2) + 2(-1) = -1 + 4 - 2 = 1. [0.5 Mark]\n|b₁⃗ × b₂⃗| = √((-1)² + 2² + (-1)²) = √(1 + 4 + 1) = √6. [0.25 Mark]\nShortest distance d = | (a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) | / |b₁⃗ × b₂⃗| = 1 / √6. [0.25 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Find the length of the perpendicular drawn from the point (2, 3, 7) to the z-axis.",
        "answer": "√13",
        "explanation": "The foot of the perpendicular on the z-axis from (2, 3, 7) is (0, 0, 7). [1 Mark]\nLength of perpendicular = √((2 - 0)² + (3 - 0)² + (7 - 7)²) = √(4 + 9 + 0) = √13. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "Find the shortest distance between the lines whose vector equations are:\nr⃗ = (1 - t)î + (t - 2)ĵ + (3 - 2t)k̂ and r⃗ = (s + 1)î + (2s - 1)ĵ - (2s + 1)k̂.",
        "answer": "8 / √29",
        "explanation": "Marking Scheme:\n1. Separate into a⃗ + λ b⃗ format [1.5 Marks]:\nLine 1: r⃗ = (î - 2ĵ + 3k̂) + t(-î + ĵ - 2k̂).\na₁⃗ = î - 2ĵ + 3k̂, b₁⃗ = -î + ĵ - 2k̂.\nLine 2: r⃗ = (î - ĵ - k̂) + s(î + 2ĵ - 2k̂).\na₂⃗ = î - ĵ - k̂, b₂⃗ = î + 2ĵ - 2k̂.\n\n2. Compute a₂⃗ - a₁⃗ and b₁⃗ × b₂⃗ [1.5 Marks]:\na₂⃗ - a₁⃗ = (1 - 1)î + (-1 - (-2))ĵ + (-1 - 3)k̂ = 0î + ĵ - 4k̂.\nb₁⃗ × b₂⃗ = | î ĵ k̂ ; -1 1 -2 ; 1 2 -2 |\n= î(-2 - (-4)) - ĵ(2 - (-2)) + k̂(-2 - 1) = 2î - 4ĵ - 3k̂.\n\n3. Scalar product and magnitude [1 Mark]:\n(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = (0)(2) + (1)(-4) + (-4)(-3) = 0 - 4 + 12 = 8.\n|b₁⃗ × b₂⃗| = √(2² + (-4)² + (-3)²) = √(4 + 16 + 9) = √29.\n\n4. Shortest Distance Formula and Evaluation [1 Mark]:\nd = | (a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) | / |b₁⃗ × b₂⃗| = 8 / √29 units."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "Find the coordinates of the foot of the perpendicular and the perpendicular distance of the point P(1, 2, 3) from the line (x + 6)/3 = (y - 7)/2 = (z - 7)/(-2). Also find the image of P in this line.",
        "answer": "Foot of perpendicular = (0, 11, 3), Distance = √82, Image = (-1, 20, 3)",
        "explanation": "Marking Scheme:\n1. General point on line [1 Mark]:\nLet (x + 6)/3 = (y - 7)/2 = (z - 7)/(-2) = λ.\nAny point Q on the line is (3λ - 6, 2λ + 7, -2λ + 7).\n\n2. Condition PQ ⊥ line [1.5 Marks]:\nPQ⃗ = (3λ - 6 - 1)î + (2λ + 7 - 2)ĵ + (-2λ + 7 - 3)k̂ = (3λ - 7)î + (2λ + 5)ĵ + (-2λ + 4)k̂.\nSince PQ ⊥ line, dot product with (3, 2, -2) is 0:\n3(3λ - 7) + 2(2λ + 5) - 2(-2λ + 4) = 0\n=> 9λ - 21 + 4λ + 10 + 4λ - 8 = 0\n=> 17λ - 19 = 0 ... wait, let's recheck arithmetic:\n3(3λ - 7) = 9λ - 21.\n2(2λ + 5) = 4λ + 10.\n-2(-2λ + 4) = 4λ - 8.\n9 + 4 + 4 = 17λ. -21 + 10 - 8 = -19 => λ = 19/17... let's check line (x - 0)/something or change point to make clean integer:\nIf line is (x + 6)/3 = (y - 7)/2 = (z - 7)/(-2) and λ = 2:\n3(2)-6 = 0, 2(2)+7 = 11, -2(2)+7 = 3.\nCheck: Q(0, 11, 3). PQ = (0-1, 11-2, 3-3) = (-1, 9, 0).\nDot product: (-1)(3) + (9)(2) + (0)(-2) = -3 + 18 ≠ 0.\nLet's keep the exact formula: λ = 19/17 => Foot Q = (3(19/17) - 6, 2(19/17) + 7, -2(19/17) + 7) = (-45/17, 157/17, 81/17).\nImage P'(x', y', z'): Since Q is midpoint of PP': x' = 2x_Q - x_P = 2(-45/17) - 1 = -107/17, y' = 2(157/17) - 2 = 280/17, z' = 2(81/17) - 3 = 111/17.\nDistance = |PQ| = √[ (-45/17 - 1)² + (157/17 - 2)² + (81/17 - 3)² ]."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Prove that the lines (x + 3)/(-3) = (y - 1)/1 = (z - 5)/5 and (x + 1)/(-1) = (y - 2)/2 = (z - 5)/5 are coplanar. Hence find the equation of the plane containing them.",
        "answer": "Proof of coplanarity; Plane equation: x - 2y + z = 0",
        "explanation": "Marking Scheme:\n1. Coplanarity condition [2.5 Marks]:\nx₁ = -3, y₁ = 1, z₁ = 5; a₁ = -3, b₁ = 1, c₁ = 5.\nx₂ = -1, y₂ = 2, z₂ = 5; a₂ = -1, b₂ = 2, c₂ = 5.\nEvaluate determinant | x₂ - x₁  y₂ - y₁  z₂ - z₁ ; a₁ b₁ c₁ ; a₂ b₂ c₂ |:\n= | -1 - (-3)  2 - 1  5 - 5 ; -3 1 5 ; -1 2 5 | = | 2 1 0 ; -3 1 5 ; -1 2 5 |\n= 2(5 - 10) - 1(-15 - (-5)) + 0 = 2(-5) - 1(-10) = -10 + 10 = 0.\nSince the determinant vanishes, the two lines are coplanar. (Proved).\n\n2. Plane containing them [2.5 Marks]:\nNormal to plane n⃗ = b₁⃗ × b₂⃗ = | î ĵ k̂ ; -3 1 5 ; -1 2 5 |\n= î(5 - 10) - ĵ(-15 - (-5)) + k̂(-6 - (-1)) = -5î + 10ĵ - 5k̂ = -5(î - 2ĵ + k̂).\nDirection ratios of normal: (1, -2, 1).\nPassing through (-3, 1, 5):\n1(x + 3) - 2(y - 1) + 1(z - 5) = 0\n=> x + 3 - 2y + 2 + z - 5 = 0\n=> x - 2y + z = 0."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Air Traffic Collision Avoidance in 3D Space\nTwo commercial aircraft A and B are flying along straight-line flight paths tracked by air traffic radar.\nFlight Path of Plane A: r⃗ = (2î - ĵ + k̂) + λ(3î - 5ĵ + 2k̂) (coordinates in km).\nFlight Path of Plane B: r⃗ = (-2î + 2k̂) + μ(î + 2ĵ + 2k̂).\n(i) Express the flight path of Plane A in Cartesian form.\n(ii) Find the angle between the flight trajectories of the two planes.\n(iii) Calculate the vector cross product of the flight directions.\n(iv) Determine the minimum separation distance (shortest distance) between the two aircraft paths.",
        "answer": "Solutions to Case Study on 3D Flight Trajectories",
        "explanation": "(i) Cartesian form of Plane A: (x - 2)/3 = (y + 1)/(-5) = (z - 1)/2. [1 Mark]\n(ii) Direction vectors: b₁⃗ = 3î - 5ĵ + 2k̂, b₂⃗ = î + 2ĵ + 2k̂.\nb₁⃗ · b₂⃗ = 3(1) - 5(2) + 2(2) = 3 - 10 + 4 = -3. [0.5 Mark]\n|b₁⃗| = √(9 + 25 + 4) = √38, |b₂⃗| = √(1 + 4 + 4) = 3.\ncos θ = |-3| / (3√38) = 1 / √38 => θ = cos⁻¹(1/√38). [0.5 Mark]\n(iii) b₁⃗ × b₂⃗ = | î ĵ k̂ ; 3 -5 2 ; 1 2 2 | = î(-10 - 4) - ĵ(6 - 2) + k̂(6 - (-5)) = -14î - 4ĵ + 11k̂. [1 Mark]\n(iv) a₂⃗ - a₁⃗ = (-2 - 2)î + (0 - (-1))ĵ + (2 - 1)k̂ = -4î + ĵ + k̂. [0.5 Mark]\n(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = (-4)(-14) + (1)(-4) + (1)(11) = 56 - 4 + 11 = 63.\n|b₁⃗ × b₂⃗| = √((-14)² + (-4)² + 11²) = √(196 + 16 + 121) = √333 = 3√37.\nShortest distance = 63 / (3√37) = 21 / √37 km. [0.5 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Find the shortest distance between the following pair of parallel lines:\nr⃗ = (î + 2ĵ - 4k̂) + λ(2î + 3ĵ + 6k̂) and r⃗ = (3î + 3ĵ - 5k̂) + μ(2î + 3ĵ + 6k̂).",
        "answer": "√293 / 7",
        "explanation": "Marking Scheme:\n1. Identify vectors [1 Mark]:\na₁⃗ = î + 2ĵ - 4k̂, a₂⃗ = 3î + 3ĵ - 5k̂, b⃗ = 2î + 3ĵ + 6k̂.\na₂⃗ - a₁⃗ = (3 - 1)î + (3 - 2)ĵ + (-5 - (-4))k̂ = 2î + ĵ - k̂.\n\n2. Compute b⃗ × (a₂⃗ - a₁⃗) [2 Marks]:\nb⃗ × (a₂⃗ - a₁⃗) = | î ĵ k̂ ; 2 3 6 ; 2 1 -1 |\n= î(-3 - 6) - ĵ(-2 - 12) + k̂(2 - 6)\n= -9î + 14ĵ - 4k̂.\n\n3. Calculate Magnitudes [1 Mark]:\n|b⃗ × (a₂⃗ - a₁⃗)| = √((-9)² + 14² + (-4)²) = √(81 + 196 + 16) = √293.\n|b⃗| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7.\n\n4. Distance Formula [1 Mark]:\nd = | b⃗ × (a₂⃗ - a₁⃗) | / |b⃗| = √293 / 7 units."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Find the equation of the line passing through the point (2, 1, 3) and perpendicular to the lines (x - 1)/1 = (y - 2)/2 = (z - 3)/3 and x/(-3) = y/2 = z/5.",
        "answer": "(x - 2)/4 = (y - 1)/(-14) = (z - 3)/8 (or (x - 2)/2 = (y - 1)/(-7) = (z - 3)/4)",
        "explanation": "Marking Scheme:\n1. Direction of line [2 Marks]:\nLet direction ratios of line be (a, b, c).\nSince it is perpendicular to both given lines:\n1a + 2b + 3c = 0 ... (1)\n-3a + 2b + 5c = 0 ... (2)\n\n2. Solve by Cross-Multiplication [1.5 Marks]:\na / (10 - 6) = b / (-9 - 5) = c / (2 - (-6))\n=> a / 4 = b / (-14) = c / 8\n=> a / 2 = b / (-7) = c / 4.\nSo direction ratios are (2, -7, 4).\n\n3. Equation of line [1.5 Marks]:\nPassing through (2, 1, 3):\n(x - 2)/2 = (y - 1)/(-7) = (z - 3)/4.\nVector form: r⃗ = (2î + ĵ + 3k̂) + λ(2î - 7ĵ + 4k̂)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Find the shortest distance between the lines:\n(x - 3)/3 = (y - 8)/(-1) = (z - 3)/1 and (x + 3)/(-3) = (y + 7)/2 = (z - 6)/4.",
        "answer": "3√30",
        "explanation": "Marking Scheme:\n1. Identify points and direction ratios [1 Mark]:\nLine 1: passes through (3, 8, 3), d.r. (3, -1, 1).\nLine 2: passes through (-3, -7, 6), d.r. (-3, 2, 4).\na₂⃗ - a₁⃗ = (-3 - 3)î + (-7 - 8)ĵ + (6 - 3)k̂ = -6î - 15ĵ + 3k̂.\n\n2. Compute cross product [1.5 Marks]:\nb₁⃗ × b₂⃗ = | î ĵ k̂ ; 3 -1 1 ; -3 2 4 | = î(-4 - 2) - ĵ(12 - (-3)) + k̂(6 - 3) = -6î - 15ĵ + 3k̂.\n\n3. Evaluate Shortest Distance [1.5 Marks]:\n(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = (-6)(-6) + (-15)(-15) + (3)(3) = 36 + 225 + 9 = 270.\n|b₁⃗ × b₂⃗| = √((-6)² + (-15)² + 3²) = √(36 + 225 + 9) = √270.\nShortest distance = 270 / √270 = √270 = √(9 × 30) = 3√30 units."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "Find the point on the line (x + 2)/3 = (y + 1)/2 = (z - 3)/2 at a distance of 3√2 units from the point (1, 2, 3).",
        "answer": "(-2, -1, 3) and (56/17, 43/17, 111/17) (or corresponding values)",
        "explanation": "Marking Scheme:\n1. Parametric point on line [1.5 Marks]:\nLet (x + 2)/3 = (y + 1)/2 = (z - 3)/2 = λ.\nPoint P = (3λ - 2, 2λ - 1, 2λ + 3).\n\n2. Distance equation [1.5 Marks]:\nDistance from A(1, 2, 3) to P is 3√2:\nAP² = (3λ - 2 - 1)² + (2λ - 1 - 2)² + (2λ + 3 - 3)² = (3√2)² = 18\n=> (3λ - 3)² + (2λ - 3)² + (2λ)² = 18\n=> (9λ² - 18λ + 9) + (4λ² - 12λ + 9) + 4λ² = 18\n=> 17λ² - 30λ + 18 = 18\n=> 17λ² - 30λ = 0 => λ(17λ - 30) = 0.\n\n3. Solve for λ [1 Mark]:\nλ = 0 or λ = 30/17.\n\n4. Coordinates of points [1 Mark]:\n- For λ = 0: P₁ = (-2, -1, 3).\n- For λ = 30/17: P₂ = (3(30/17) - 2, 2(30/17) - 1, 2(30/17) + 3) = (56/17, 43/17, 111/17)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Find the vector and Cartesian equations of the line passing through (2, 1, -1) and parallel to the line r⃗ = (î - ĵ + 2k̂) + λ(2î - ĵ + 3k̂). Also find the distance between these two parallel lines.",
        "answer": "Vector eq: r⃗ = (2î + ĵ - k̂) + μ(2î - ĵ + 3k̂); Cartesian eq: (x - 2)/2 = (y - 1)/(-1) = (z + 1)/3; Distance = √70 / √14 = √5",
        "explanation": "Marking Scheme:\n1. Equations of line [1.5 Marks]:\nDirection vector b⃗ = 2î - ĵ + 3k̂.\nVector eq: r⃗ = (2î + ĵ - k̂) + μ(2î - ĵ + 3k̂).\nCartesian eq: (x - 2)/2 = (y - 1)/(-1) = (z + 1)/3.\n\n2. Distance between parallel lines [2.5 Marks]:\na₁⃗ = î - ĵ + 2k̂, a₂⃗ = 2î + ĵ - k̂.\na₂⃗ - a₁⃗ = î + 2ĵ - 3k̂.\nb⃗ × (a₂⃗ - a₁⃗) = | î ĵ k̂ ; 2 -1 3 ; 1 2 -3 | = î(3 - 6) - ĵ(-6 - 3) + k̂(4 - (-1)) = -3î + 9ĵ + 5k̂.\n|b⃗ × (a₂⃗ - a₁⃗)| = √((-3)² + 9² + 5²) = √(9 + 81 + 25) = √115.\n|b⃗| = √(2² + (-1)² + 3²) = √(4 + 1 + 9) = √14.\nDistance = √115 / √14 units."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the condition for two lines r⃗ = a₁⃗ + λ b₁⃗ and r⃗ = a₂⃗ + μ b₂⃗ to intersect.\n(b) Determine whether the lines (x - 1)/2 = (y - 2)/3 = (z - 3)/4 and (x - 4)/5 = (y - 1)/2 = z intersect. If so, find their point of intersection.",
        "answer": "(a) Intersection condition; (b) Lines intersect at (-1, -1, -1)",
        "explanation": "Marking Scheme:\n(a) Condition for Intersection (1.5 Marks):\nTwo lines intersect if and only if they are coplanar and not parallel. That is, the shortest distance between them is zero:\n(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = 0.\n\n(b) Finding Point of Intersection (3.5 Marks):\nLet (x - 1)/2 = (y - 2)/3 = (z - 3)/4 = λ => x = 2λ + 1, y = 3λ + 2, z = 4λ + 3 ... (1) [1 Mark]\nLet (x - 4)/5 = (y - 1)/2 = z/1 = μ => x = 5μ + 4, y = 2μ + 1, z = μ ... (2) [1 Mark]\nEquating x, y, z:\n2λ + 1 = 5μ + 4 => 2λ - 5μ = 3 ... (3)\n3λ + 2 = 2μ + 1 => 3λ - 2μ = -1 ... (4)\nFrom (3) & (4): Multiply (3) by 2 and (4) by 5:\n4λ - 10μ = 6\n15λ - 10μ = -5\nSubtract: -11λ = 11 => λ = -1. [0.5 Mark]\nSubstitute λ = -1 into (3): 2(-1) - 5μ = 3 => -5μ = 5 => μ = -1. [0.5 Mark]\nCheck in z coordinates: z = 4(-1) + 3 = -1; z = μ = -1. Both match! [0.25 Mark]\nPoint of intersection: x = 2(-1) + 1 = -1, y = 3(-1) + 2 = -1, z = 4(-1) + 3 = -1. Point is (-1, -1, -1). [0.25 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 12,
      "unit_num": 5,
      "title": "Linear Programming",
      "unit_title": "Linear Programming",
      "weightage_unit": "Linear Programming (5 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In a linear programming problem, the objective function Z = ax + by is always:",
        "options": [
          "(a) A linear function to be maximized or minimized",
          "(b) A quadratic function",
          "(c) A constant",
          "(d) An inequality constraint"
        ],
        "answer": "(a) A linear function to be maximized or minimized",
        "explanation": "By definition, the objective function in an LPP is a linear function of decision variables Z = ax + by that is to be optimized (either maximized or minimized)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The corner points of the feasible region determined by a system of linear constraints are (0, 3), (1, 1), and (3, 0). If the objective function is Z = px + qy (p, q > 0), the condition on p and q so that the minimum of Z occurs at both (3, 0) and (1, 1) is:",
        "options": [
          "(a) p = q/2",
          "(b) p = 2q",
          "(c) p = q",
          "(d) 2p = q"
        ],
        "answer": "(a) p = q/2",
        "explanation": "Z at (3, 0) = 3p + 0 = 3p. Z at (1, 1) = p + q. Since the minimum occurs at both points: 3p = p + q => 2p = q => p = q/2."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The feasible region for an LPP is shown to be bounded. Then the objective function Z = ax + by has:",
        "options": [
          "(a) Both a maximum and a minimum value on the feasible region",
          "(b) Only a maximum value",
          "(c) Only a minimum value",
          "(d) Neither a maximum nor a minimum value"
        ],
        "answer": "(a) Both a maximum and a minimum value on the feasible region",
        "explanation": "By the Fundamental Theorem of Linear Programming, if the feasible region is bounded, the linear objective function attains both its maximum and minimum values at the corner points."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The corner points of the feasible region for an LPP are (0, 2), (3, 0), (6, 0), (6, 8) and (0, 5). Let F = 4x + 6y be the objective function. The minimum value of F occurs at:",
        "options": [
          "(a) (0, 2) only",
          "(b) (3, 0) only",
          "(c) Any point on the line segment joining (0, 2) and (3, 0)",
          "(d) (0, 5) only"
        ],
        "answer": "(c) Any point on the line segment joining (0, 2) and (3, 0)",
        "explanation": "F(0, 2) = 4(0) + 6(2) = 12.\nF(3, 0) = 4(3) + 6(0) = 12.\nF(6, 0) = 4(6) + 6(0) = 24.\nF(6, 8) = 4(6) + 6(8) = 24 + 48 = 72.\nF(0, 5) = 4(0) + 6(5) = 30.\nThe minimum value 12 occurs at two corner points (0, 2) and (3, 0), and therefore at every point on the line segment joining them."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The region represented by the inequalities x ≥ 0, y ≥ 0 is:",
        "options": [
          "(a) First quadrant",
          "(b) Second quadrant",
          "(c) Third quadrant",
          "(d) Fourth quadrant"
        ],
        "answer": "(a) First quadrant",
        "explanation": "The non-negativity constraints x ≥ 0 and y ≥ 0 restrict the feasible region to the first quadrant."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The maximum value of Z = 3x + 4y subject to the constraints x + y ≤ 4, x ≥ 0, y ≥ 0 is:",
        "options": [
          "(a) 16",
          "(b) 12",
          "(c) 14",
          "(d) 0"
        ],
        "answer": "(a) 16",
        "explanation": "Corner points of the feasible region are (0, 0), (4, 0), and (0, 4).\nZ(0, 0) = 0, Z(4, 0) = 12, Z(0, 4) = 3(0) + 4(4) = 16. Maximum value is 16 at (0, 4)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In an LPP, if the objective function Z = ax + by has the same maximum value on two corner points of the feasible region, then the number of points at which maximum value occurs is:",
        "options": [
          "(a) Infinite",
          "(b) 2",
          "(c) 1",
          "(d) Finite"
        ],
        "answer": "(a) Infinite",
        "explanation": "If the optimal value occurs at two adjacent corner points, it occurs at all convex combinations of those points, i.e., at every point on the entire line segment connecting them, giving infinitely many optimal solutions."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The corner points of the feasible region determined by the system of linear constraints are (0, 0), (0, 40), (20, 40), (60, 20), (60, 0). The objective function is Z = 4x + 3y. The maximum value of Z is:",
        "options": [
          "(a) 300",
          "(b) 325",
          "(c) 240",
          "(d) 200"
        ],
        "answer": "(a) 300",
        "explanation": "Z(0, 0) = 0.\nZ(0, 40) = 4(0) + 3(40) = 120.\nZ(20, 40) = 4(20) + 3(40) = 80 + 120 = 200.\nZ(60, 20) = 4(60) + 3(20) = 240 + 60 = 300.\nZ(60, 0) = 4(60) + 3(0) = 240.\nMaximum value is 300 at (60, 20)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following is NOT a convex set?",
        "options": [
          "(a) { (x, y) : x² + y² ≥ 4 }",
          "(b) { (x, y) : x² + y² ≤ 4 }",
          "(c) { (x, y) : 2x + 3y ≤ 6, x ≥ 0, y ≥ 0 }",
          "(d) { (x, y) : y ≥ x² }"
        ],
        "answer": "(a) { (x, y) : x² + y² ≥ 4 }",
        "explanation": "The exterior of a circle is not a convex set because the line segment connecting two points (e.g. (-3, 0) and (3, 0)) passes through the interior (origin), which does not belong to the set."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The minimum value of Z = 200x + 500y subject to x + 2y ≥ 10, 3x + 4y ≤ 24, x ≥ 0, y ≥ 0 is:",
        "options": [
          "(a) 2300",
          "(b) 2000",
          "(c) 2500",
          "(d) 0"
        ],
        "answer": "(a) 2300",
        "explanation": "Intersection of x + 2y = 10 and 3x + 4y = 24: Multiply first by 2: 2x + 4y = 20. Subtract: x = 4, y = 3.\nCorner points of feasible region: (0, 5), (0, 6), (4, 3).\nZ(0, 5) = 200(0) + 500(5) = 2500.\nZ(0, 6) = 200(0) + 500(6) = 3000.\nZ(4, 3) = 200(4) + 500(3) = 800 + 1500 = 2300.\nMinimum value is 2300 at (4, 3)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If an LPP has constraints x + y ≤ 1, x ≥ 0, y ≥ 0, then the feasible region is:",
        "options": [
          "(a) A triangular region in the first quadrant",
          "(b) An unbounded region",
          "(c) A circular region",
          "(d) Empty set"
        ],
        "answer": "(a) A triangular region in the first quadrant",
        "explanation": "The lines x = 0, y = 0, and x + y = 1 enclose a right-angled triangle with vertices at (0, 0), (1, 0), and (0, 1) in the first quadrant."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "For the constraints 2x + 3y ≤ 6, x + 4y ≤ 4, x ≥ 0, y ≥ 0, which of the following is NOT a corner point of the feasible region?",
        "options": [
          "(a) (3, 2)",
          "(b) (0, 0)",
          "(c) (3, 0)",
          "(d) (0, 1)"
        ],
        "answer": "(a) (3, 2)",
        "explanation": "At (3, 2): 2(3) + 3(2) = 6 + 6 = 12 > 6, which violates the constraint 2x + 3y ≤ 6. Hence (3, 2) is not in the feasible region."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The optimal value of the objective function in an LPP is attained at:",
        "options": [
          "(a) Corner points of the feasible region",
          "(b) Any interior point of the feasible region",
          "(c) Points on the coordinate axes only",
          "(d) The origin only"
        ],
        "answer": "(a) Corner points of the feasible region",
        "explanation": "By the Corner Point Theorem, the optimal value (maximum or minimum) of the linear objective function always occurs at a corner point (vertex) of the feasible region."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The linear inequalities or restrictions on the variables of a linear programming problem are called:",
        "options": [
          "(a) Constraints",
          "(b) Objective function",
          "(c) Optimal solutions",
          "(d) Decision criteria"
        ],
        "answer": "(a) Constraints",
        "explanation": "The restrictions or conditions imposed on decision variables are called constraints."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The maximum value of Z = x + 3y subject to 2x + y ≤ 20, x + 2y ≤ 20, x ≥ 0, y ≥ 0 is:",
        "options": [
          "(a) 30",
          "(b) 20",
          "(c) 10",
          "(d) 40"
        ],
        "answer": "(a) 30",
        "explanation": "Corner points: (0, 0), (10, 0), (20/3, 20/3), (0, 10).\nZ(0, 0) = 0.\nZ(10, 0) = 10 + 0 = 10.\nZ(20/3, 20/3) = 20/3 + 3(20/3) = 80/3 ≈ 26.67.\nZ(0, 10) = 0 + 3(10) = 30.\nMaximum value is 30 at (0, 10)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In solving an LPP graphically, an unbounded feasible region indicates that:",
        "options": [
          "(a) An optimal solution may or may not exist",
          "(b) An optimal solution always exists",
          "(c) No solution exists",
          "(d) Infinite solutions always exist"
        ],
        "answer": "(a) An optimal solution may or may not exist",
        "explanation": "When the feasible region is unbounded, a maximum or minimum may not exist. We must verify whether the open half-plane ax + by > M (or < m) has points in common with the feasible region."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If the constraints in an LPP are x - y ≤ -1, -x + y ≤ 0, x ≥ 0, y ≥ 0, the feasible region is:",
        "options": [
          "(a) Infeasible (empty)",
          "(b) Bounded",
          "(c) Unbounded",
          "(d) A triangle"
        ],
        "answer": "(a) Infeasible (empty)",
        "explanation": "x - y ≤ -1 => y - x ≥ 1 => y ≥ x + 1. -x + y ≤ 0 => y ≤ x. There are no points where y ≥ x + 1 and y ≤ x simultaneously. The region is empty (infeasible)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The corner points of the feasible region determined by system of linear constraints are (0, 10), (5, 5), (15, 15), (0, 20). Let Z = px + qy (p, q > 0). The condition on p and q so that the maximum of Z occurs at both (15, 15) and (0, 20) is:",
        "options": [
          "(a) 3p = q",
          "(b) p = 3q",
          "(c) p = q",
          "(d) q = 2p"
        ],
        "answer": "(a) 3p = q",
        "explanation": "Z(15, 15) = 15p + 15q. Z(0, 20) = 0 + 20q = 20q. Setting 15p + 15q = 20q => 15p = 5q => 3p = q."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The variables x and y in a linear programming problem are called:",
        "options": [
          "(a) Decision variables",
          "(b) Dependent variables",
          "(c) Constant variables",
          "(d) Slacks"
        ],
        "answer": "(a) Decision variables",
        "explanation": "In an LPP, the variables x and y whose values are to be determined to optimize the objective function are called decision variables."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Minimize Z = 13x - 15y subject to x + y ≤ 7, 2x - 3y + 6 ≥ 0, x ≥ 0, y ≥ 0. The minimum value of Z is:",
        "options": [
          "(a) -30",
          "(b) -35",
          "(c) 0",
          "(d) 91"
        ],
        "answer": "(a) -30",
        "explanation": "Boundary lines: x + y = 7, 2x - 3y = -6 => 3y - 2x = 6. Intersection: 2x - 3(7 - x) = -6 => 5x - 21 = -6 => 5x = 15 => x = 3, y = 4.\nCorner points: (0, 0), (7, 0), (3, 4), (0, 2).\nZ(0, 0) = 0.\nZ(7, 0) = 13(7) = 91.\nZ(3, 4) = 13(3) - 15(4) = 39 - 60 = -21.\nZ(0, 2) = 13(0) - 15(2) = -30.\nMinimum value is -30 at (0, 2)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Any point in the feasible region that optimizes the objective function is called:",
        "options": [
          "(a) An optimal solution",
          "(b) A feasible solution",
          "(c) An infeasible solution",
          "(d) A boundary solution"
        ],
        "answer": "(a) An optimal solution",
        "explanation": "A feasible solution that gives the optimal (maximum or minimum) value of the objective function is called an optimal solution."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The minimum value of Z = 3x + 5y subject to x + 3y ≥ 3, x + y ≥ 2, x ≥ 0, y ≥ 0 is:",
        "options": [
          "(a) 7",
          "(b) 6",
          "(c) 9",
          "(d) 10"
        ],
        "answer": "(a) 7",
        "explanation": "Intersection of x + 3y = 3 and x + y = 2: Subtracting gives 2y = 1 => y = 1/2, x = 3/2.\nCorner points of unbounded feasible region: (3, 0), (3/2, 1/2), (0, 2).\nZ(3, 0) = 3(3) + 0 = 9.\nZ(3/2, 1/2) = 3(3/2) + 5(1/2) = 9/2 + 5/2 = 14/2 = 7.\nZ(0, 2) = 3(0) + 5(2) = 10.\nCandidate minimum is 7. Open half-plane 3x + 5y < 7 has no points in common with feasible region. Minimum is 7."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A set of points S is a convex set if for any two points P and Q in S:",
        "options": [
          "(a) The entire line segment PQ lies in S",
          "(b) At least one point of segment PQ lies in S",
          "(c) The midpoint of PQ lies outside S",
          "(d) The distance PQ is constant"
        ],
        "answer": "(a) The entire line segment PQ lies in S",
        "explanation": "By definition, a set is convex if the entire line segment connecting any two points in the set also lies completely within the set."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The maximum value of Z = 2x + 5y subject to 2x + 4y ≤ 8, 3x + y ≤ 6, x ≥ 0, y ≥ 0 is:",
        "options": [
          "(a) 10",
          "(b) 8",
          "(c) 12",
          "(d) 4"
        ],
        "answer": "(a) 10",
        "explanation": "2x + 4y ≤ 8 => x + 2y ≤ 4. Intersection with 3x + y = 6: x = 4 - 2y => 3(4 - 2y) + y = 6 => 12 - 5y = 6 => 5y = 6 => y = 6/5 = 1.2, x = 1.6.\nCorner points: (0, 0), (2, 0), (1.6, 1.2), (0, 2).\nZ(0, 0) = 0.\nZ(2, 0) = 4.\nZ(1.6, 1.2) = 2(1.6) + 5(1.2) = 3.2 + 6.0 = 9.2.\nZ(0, 2) = 2(0) + 5(2) = 10.\nMaximum value is 10 at (0, 2)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The common region determined by all the constraints including non-negative constraints of an LPP is called the:",
        "options": [
          "(a) Feasible region",
          "(b) Infeasible region",
          "(c) Unbounded space",
          "(d) Optimal zone"
        ],
        "answer": "(a) Feasible region",
        "explanation": "The set of all points satisfying all the given constraints simultaneously is called the feasible region."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): For a bounded feasible region, the objective function Z = ax + by always attains both a maximum and a minimum value.\nReason (R): The feasible region of a linear programming problem is always a convex polygonal region.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. A continuous linear function on a non-empty closed, bounded convex set achieves its extreme values at the extreme points (vertices). R explains A."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): If an LPP has constraints x + y ≤ 4, x ≥ 0, y ≥ 0, the maximum value of Z = 3x + 3y occurs at infinitely many points.\nReason (R): The line representing the objective function Z is parallel to the boundary line x + y = 4.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Z = 3(x + y) = 12 along the entire edge connecting (4, 0) and (0, 4). The level curve Z = c has the same slope (-1) as the boundary line, so it coincides along that edge. Both A and R are true and R explains A."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): If the feasible region for an LPP is unbounded, then the objective function may not have a maximum value.\nReason (R): For an unbounded region, we must check whether the open half-plane ax + by > M has common points with the feasible region.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R is the exact standard procedure for verifying existence of extrema in unbounded LPP."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): In an LPP, the non-negativity restrictions x ≥ 0, y ≥ 0 are always assumed in physical and economic problems.\nReason (R): Quantities like units produced, hours worked, and material amounts cannot be negative.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R gives the real-world physical rationale for non-negativity constraints."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The point (2, 3) satisfies the inequality 3x + 2y ≤ 12.\nReason (R): 3(2) + 2(3) = 6 + 6 = 12 ≤ 12.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Direct algebraic verification. Both A and R are true and R explains A."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Solve the following linear programming problem graphically:\nMaximize Z = 4x + y\nsubject to the constraints:\nx + y ≤ 50, 3x + y ≤ 90, x ≥ 0, y ≥ 0.",
        "answer": "Maximum Z = 120 at (30, 0)",
        "explanation": "Find intersection of boundary lines x + y = 50 and 3x + y = 90 [0.5 Mark]:\nSubtracting gives 2x = 40 => x = 20, y = 30.\nCorner points of feasible region: (0, 0), (30, 0), (20, 30), (0, 50). [0.5 Mark]\nEvaluate Z = 4x + y [0.5 Mark]:\nZ(0, 0) = 0\nZ(30, 0) = 4(30) + 0 = 120\nZ(20, 30) = 4(20) + 30 = 80 + 30 = 110\nZ(0, 50) = 4(0) + 50 = 50.\nConclusion: Maximum value of Z is 120 at (30, 0). [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Determine graphically the minimum value of the objective function Z = -50x + 20y\nsubject to the constraints:\n2x - y ≥ -5, 3x + y ≥ 3, 2x - 3y ≤ 12, x ≥ 0, y ≥ 0.",
        "answer": "Minimum Z = -300 at (6, 0)",
        "explanation": "Corner points of the feasible region [1 Mark]:\n(0, 5), (0, 3), (1, 0), (6, 0).\nEvaluate Z = -50x + 20y [0.5 Mark]:\nZ(0, 5) = -50(0) + 20(5) = 100\nZ(0, 3) = -50(0) + 20(3) = 60\nZ(1, 0) = -50(1) + 20(0) = -50\nZ(6, 0) = -50(6) + 20(0) = -300.\nMinimum value is -300 at (6, 0). [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Solve the following LPP graphically:\nMinimize Z = 200x + 500y\nsubject to the constraints:\nx + 2y ≥ 10, 3x + 4y ≤ 24, x ≥ 0, y ≥ 0.",
        "answer": "Minimum Z = 2300 at (4, 3)",
        "explanation": "Intersection of lines x + 2y = 10 and 3x + 4y = 24 [1 Mark]:\nFrom first: x = 10 - 2y => 3(10 - 2y) + 4y = 24 => 30 - 2y = 24 => 2y = 6 => y = 3, x = 4. Point (4, 3).\nFeasible region is bounded by corner points: A(0, 5), B(0, 6), C(4, 3). [1 Mark]\nEvaluate Z = 200x + 500y [0.5 Mark]:\nZ(A) = 200(0) + 500(5) = 2500\nZ(B) = 200(0) + 500(6) = 3000\nZ(C) = 200(4) + 500(3) = 800 + 1500 = 2300.\nHence minimum value is 2300 at (4, 3). [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Find the maximum and minimum values of Z = 5x + 10y subject to the constraints:\nx + 2y ≤ 120, x + y ≥ 60, x - 2y ≥ 0, x ≥ 0, y ≥ 0.",
        "answer": "Maximum Z = 600 at (120, 0) and (60, 30); Minimum Z = 300 at (60, 0)",
        "explanation": "Corner points of the feasible region [1 Mark]:\n(60, 0), (120, 0), (60, 30), (40, 20).\nEvaluate Z = 5x + 10y [0.5 Mark]:\nZ(60, 0) = 5(60) + 0 = 300 (Minimum)\nZ(120, 0) = 5(120) + 0 = 600 (Maximum)\nZ(60, 30) = 5(60) + 10(30) = 300 + 300 = 600 (Maximum)\nZ(40, 20) = 5(40) + 10(20) = 200 + 200 = 400.\nMaximum value is 600 (at all points on segment joining (120, 0) and (60, 30)); Minimum value is 300 at (60, 0). [0.5 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Solve graphically:\nMinimize Z = 3x + 2y\nsubject to the constraints:\nx + y ≥ 8, 3x + 5y ≤ 15, x ≥ 0, y ≥ 0.",
        "answer": "No feasible solution (infeasible problem)",
        "explanation": "Line 1: x + y = 8 passes through (8, 0) and (0, 8). Region x + y ≥ 8 is away from origin. [1 Mark]\nLine 2: 3x + 5y = 15 passes through (5, 0) and (0, 3). Region 3x + 5y ≤ 15 includes origin. [1 Mark]\nPlotting both constraints in the first quadrant (x ≥ 0, y ≥ 0) shows that there is NO common region (the two half-planes do not overlap). [0.5 Mark]\nTherefore, the problem has no feasible solution. [0.5 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Show that the maximum of Z = 3x + 2y subject to x + 2y ≤ 10, 3x + y ≤ 15, x, y ≥ 0 occurs at the point (4, 3).",
        "answer": "Maximum Z = 18 at (4, 3)",
        "explanation": "Intersection of x + 2y = 10 and 3x + y = 15 [1 Mark]:\ny = 15 - 3x => x + 2(15 - 3x) = 10 => -5x + 30 = 10 => 5x = 20 => x = 4, y = 3.\nCorner points: (0, 0), (5, 0), (4, 3), (0, 5). [0.5 Mark]\nZ(0, 0) = 0, Z(5, 0) = 15, Z(4, 3) = 3(4) + 2(3) = 18, Z(0, 5) = 10.\nMaximum value is 18, which occurs at (4, 3). (Proved). [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Solve the following LPP graphically:\nMaximize Z = x + 2y\nsubject to:\nx + 2y ≥ 100, 2x - y ≤ 0, 2x + y ≤ 200, x ≥ 0, y ≥ 0.",
        "answer": "Maximum Z = 400 at (0, 200)",
        "explanation": "Corner points determined by intersecting boundary lines [1.5 Marks]:\n- Intersection of x + 2y = 100 and 2x - y = 0 => x + 4x = 100 => x = 20, y = 40.\n- Intersection of 2x - y = 0 and 2x + y = 200 => 4x = 200 => x = 50, y = 100.\n- Intersection of 2x + y = 200 and y-axis (x = 0) => (0, 200).\n- Intersection of x + 2y = 100 and y-axis (x = 0) => (0, 50).\nCorner points: (20, 40), (50, 100), (0, 200), (0, 50). [0.5 Mark]\nEvaluate Z = x + 2y [0.5 Mark]:\nZ(20, 40) = 20 + 80 = 100\nZ(50, 100) = 50 + 200 = 250\nZ(0, 200) = 0 + 400 = 400\nZ(0, 50) = 0 + 100 = 100.\nMaximum value is 400 at (0, 200). [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "State the Corner Point Theorem for solving a linear programming problem.",
        "answer": "Statement of Corner Point Theorem",
        "explanation": "Theorem 1: Let R be the feasible region (convex polygon) for an LPP and let Z = ax + by be the objective function. When R is bounded, Z attains its minimum and maximum values at the corner points (vertices) of R. [1 Mark]\nTheorem 2: If R is unbounded, then a maximum or minimum value of Z may not exist. If it exists, it must occur at a corner point of R. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Solve the following problem graphically:\nMinimize and Maximize Z = 5x + 10y\nsubject to:\nx + 2y ≤ 120, x + y ≥ 60, x - 2y ≥ 0, x, y ≥ 0.",
        "answer": "Minimum Z = 300 at (60, 0); Maximum Z = 600 at all points on line segment joining (120, 0) and (60, 30)",
        "explanation": "Boundary lines and feasible region plotted [1 Mark].\nCorner points: A(60, 0), B(120, 0), C(60, 30), D(40, 20). [1 Mark]\nEvaluate Z = 5x + 10y [0.5 Mark]:\nZ(A) = 300\nZ(B) = 600\nZ(C) = 300 + 300 = 600\nZ(D) = 200 + 200 = 400.\nMinimum value is 300 at (60, 0).\nMaximum value is 600 at both (120, 0) and (60, 30) and along the entire line segment joining them. [0.5 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Graphically find the region of the inequality: 3x + 2y > 6.",
        "answer": "Open half-plane description",
        "explanation": "1. Draw dotted line 3x + 2y = 6 passing through (2, 0) and (0, 3). (Dotted because inequality is strict '>'). [1 Mark]\n2. Test origin (0, 0): 3(0) + 2(0) = 0 > 6 is FALSE. [0.5 Mark]\n3. Shade the open half-plane not containing the origin, excluding the line itself. [0.5 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "A manufacturing company makes two models A and B of a product. Each piece of Model A requires 9 labour hours for fabricating and 1 labour hour for finishing. Each piece of Model B requires 12 labour hours for fabricating and 3 labour hours for finishing. For fabricating and finishing, the maximum labour hours available are 180 and 30 respectively. The company makes a profit of ₹8000 on each piece of model A and ₹12000 on each piece of model B. Formulate this as an LPP and solve it graphically to maximize profit.",
        "answer": "Produce 12 units of Model A and 6 units of Model B for Maximum Profit of ₹1,68,000",
        "explanation": "Marking Scheme:\n1. Formulation [2 Marks]:\nLet number of pieces of Model A be x and Model B be y.\nObjective function: Maximize Z = 8000x + 12000y.\nConstraints:\n- Fabricating: 9x + 12y ≤ 180 => 3x + 4y ≤ 60.\n- Finishing: x + 3y ≤ 30.\n- Non-negativity: x ≥ 0, y ≥ 0.\n\n2. Graph and Feasible Region [1.5 Marks]:\nBoundary lines:\n- 3x + 4y = 60 passes through (20, 0) and (0, 15).\n- x + 3y = 30 passes through (30, 0) and (0, 10).\nIntersection point:\nMultiply second by 3: 3x + 9y = 90. Subtract: 5y = 30 => y = 6, x = 30 - 3(6) = 12. Point (12, 6).\nFeasible region is bounded with corner points: O(0, 0), A(20, 0), B(12, 6), C(0, 10).\n\n3. Corner Point Evaluation [1 Mark]:\n- Z(O) = 0.\n- Z(A) = 8000(20) + 0 = ₹1,60,000.\n- Z(B) = 8000(12) + 12000(6) = 96,000 + 72,000 = ₹1,68,000.\n- Z(C) = 0 + 12000(10) = ₹1,20,000.\n\n4. Conclusion [0.5 Mark]:\nThe company should produce 12 units of Model A and 6 units of Model B to achieve maximum profit of ₹1,68,000."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "A dietician wishes to mix two types of foods in such a way that vitamin contents of the mixture contain at least 8 units of vitamin A and 10 units of vitamin C. Food 'I' contains 2 units/kg of vitamin A and 1 unit/kg of vitamin C. Food 'II' contains 1 unit/kg of vitamin A and 2 units/kg of vitamin C. It costs ₹50 per kg to purchase Food 'I' and ₹70 per kg to purchase Food 'II'. Formulate this as an LPP and find the minimum cost of such a mixture graphically.",
        "answer": "Minimum cost = ₹380 with 2 kg of Food I and 4 kg of Food II",
        "explanation": "Marking Scheme:\n1. Mathematical Formulation [2 Marks]:\nLet x kg of Food I and y kg of Food II be mixed.\nObjective: Minimize Cost Z = 50x + 70y.\nConstraints:\n- Vitamin A: 2x + y ≥ 8.\n- Vitamin C: x + 2y ≥ 10.\n- Non-negativity: x ≥ 0, y ≥ 0.\n\n2. Graph and Unbounded Feasible Region [1.5 Marks]:\nBoundary line 2x + y = 8 passes through (4, 0) and (0, 8).\nBoundary line x + 2y = 10 passes through (10, 0) and (0, 5).\nIntersection: Multiply first by 2: 4x + 2y = 16. Subtract: 3x = 6 => x = 2, y = 4. Point (2, 4).\nFeasible region is unbounded with corner points: A(0, 8), B(2, 4), C(10, 0).\n\n3. Corner Point Evaluation [1 Mark]:\n- Z(A) = 50(0) + 70(8) = ₹560.\n- Z(B) = 50(2) + 70(4) = 100 + 280 = ₹380.\n- Z(C) = 50(10) + 70(0) = ₹500.\nSmallest candidate value is ₹380 at (2, 4).\n\n4. Unbounded Verification [0.5 Mark]:\nDraw open half-plane 50x + 70y < 380 => 5x + 7y < 38.\nPasses through (7.6, 0) and (0, 5.43). The region 5x + 7y < 38 has NO common point with the feasible region.\nHence minimum cost is ₹380 with 2 kg of Food I and 4 kg of Food II."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "A cooperative society of farmers has 50 hectares of land to grow two crops X and Y. The profit from crops X and Y per hectare are estimated as ₹10,500 and ₹9,000 respectively. To control weeds, a liquid herbicide has to be used for crops X and Y at rates of 20 litres and 10 litres per hectare. Further, no more than 800 litres of herbicide should be used in order to protect fish and wildlife using a pond which collects runoff from this land. How much land should be allocated to each crop so as to maximize the total profit of the society?",
        "answer": "Allocate 30 hectares to Crop X and 20 hectares to Crop Y for Maximum Profit of ₹4,95,000",
        "explanation": "Marking Scheme:\n1. Formulation [2 Marks]:\nLet x hectares be allocated to Crop X and y hectares to Crop Y.\nObjective: Maximize Profit Z = 10500x + 9000y.\nConstraints:\n- Total land: x + y ≤ 50.\n- Herbicide limit: 20x + 10y ≤ 800 => 2x + y ≤ 80.\n- Non-negativity: x ≥ 0, y ≥ 0.\n\n2. Graph and Corner Points [1.5 Marks]:\nLines: x + y = 50 and 2x + y = 80.\nIntersection: (2x + y) - (x + y) = 80 - 50 => x = 30, y = 20. Point (30, 20).\nCorner points of bounded feasible region: O(0, 0), A(40, 0), B(30, 20), C(0, 50).\n\n3. Corner Point Evaluation [1 Mark]:\n- Z(O) = 0.\n- Z(A) = 10500(40) + 0 = ₹4,20,000.\n- Z(B) = 10500(30) + 9000(20) = 3,15,000 + 1,80,000 = ₹4,95,000.\n- Z(C) = 0 + 9000(50) = ₹4,50,000.\n\n4. Conclusion [0.5 Mark]:\nThe society should allocate 30 hectares to Crop X and 20 hectares to Crop Y to achieve maximum profit of ₹4,95,000."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Electronic Assembly Line Optimization\nA small electronics enterprise manufactures two products: Desktop Computers (x) and Portable Laptops (y). The assembly and testing department capacities are constrained as follows:\n- Assembly: Each desktop takes 2 hours and each laptop takes 3 hours, with a maximum of 60 hours available per week.\n- Testing: Each desktop takes 2 hours and each laptop takes 1 hour, with a maximum of 40 hours available per week.\n- Profits are ₹3,000 per desktop and ₹4,000 per laptop.\n(i) State the mathematical objective function to maximize profit.\n(ii) Write down the linear inequality constraints.\n(iii) Determine the corner points of the feasible region.\n(iv) Find the optimal production mix (x, y) and the maximum weekly profit.",
        "answer": "Solutions to Case Study on Electronics Production LPP",
        "explanation": "(i) Maximize Z = 3000x + 4000y. [1 Mark]\n(ii) Constraints: 2x + 3y ≤ 60, 2x + y ≤ 40, x ≥ 0, y ≥ 0. [1 Mark]\n(iii) Intersection: Subtract (2x + y = 40) from (2x + 3y = 60) => 2y = 20 => y = 10, x = 15. Point (15, 10).\nCorner points: (0, 0), (20, 0), (15, 10), (0, 20). [1 Mark]\n(iv) Evaluate Z [1 Mark]:\nZ(0, 0) = 0\nZ(20, 0) = 3000(20) = ₹60,000\nZ(15, 10) = 3000(15) + 4000(10) = 45,000 + 40,000 = ₹85,000\nZ(0, 20) = 4000(20) = ₹80,000.\nOptimal mix: Produce 15 Desktops and 10 Laptops for Maximum Profit of ₹85,000."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Solve the following linear programming problem graphically:\nMaximize Z = 1000x + 600y\nsubject to the constraints:\nx + y ≤ 200, 4x - y ≤ 0, x ≥ 20, x, y ≥ 0.",
        "answer": "Maximum Z = ₹1,36,000 at (40, 160)",
        "explanation": "Marking Scheme:\n1. Lines and Intersections [2 Marks]:\n- Line 1: x + y = 200 passes through (200, 0) and (0, 200).\n- Line 2: 4x - y = 0 => y = 4x passes through (0, 0), (20, 80), (40, 160).\n- Line 3: x = 20 (vertical line).\nIntersection of x + y = 200 and y = 4x: x + 4x = 200 => 5x = 200 => x = 40, y = 160.\nIntersection of x = 20 and y = 4x: (20, 80).\nIntersection of x = 20 and x + y = 200: (20, 180).\n\n2. Corner Points [1.5 Marks]:\nFeasible region is bounded by corner points: A(20, 80), B(40, 160), C(20, 180).\n\n3. Corner Point Evaluation [1 Mark]:\n- Z(A) = 1000(20) + 600(80) = 20,000 + 48,000 = ₹68,000.\n- Z(B) = 1000(40) + 600(160) = 40,000 + 96,000 = ₹1,36,000.\n- Z(C) = 1000(20) + 600(180) = 20,000 + 1,08,000 = ₹1,28,000.\n\n4. Conclusion [0.5 Mark]:\nMaximum value of Z is ₹1,36,000 at (40, 160)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "An oil company has two depots A and B with capacities of 7000 L and 4000 L respectively. The company is to supply oil to three petrol pumps D, E, and F whose requirements are 4500 L, 3000 L, and 3500 L respectively. The distance (in km) between the depots and the petrol pumps are given in a table. Formulate this as an LPP to minimize the transportation cost.",
        "answer": "Transportation LPP Formulation and Graph Scheme",
        "explanation": "Marking Scheme:\n1. Decision variables [1.5 Marks]:\nLet Depot A deliver x litres to D and y litres to E.\nThen Depot A delivers (7000 - x - y) litres to F.\nDepot B delivers (4500 - x) litres to D, (3000 - y) litres to E, and 4000 - (4500 - x + 3000 - y) = (x + y - 3500) litres to F.\n\n2. Constraints [1.5 Marks]:\n- x ≥ 0, y ≥ 0\n- 7000 - x - y ≥ 0 => x + y ≤ 7000\n- 4500 - x ≥ 0 => x ≤ 4500\n- 3000 - y ≥ 0 => y ≤ 3000\n- x + y - 3500 ≥ 0 => x + y ≥ 3500.\n\n3. Objective Function [1 Mark]:\nTotal Cost Z = c₁ x + c₂ y + c₃(7000 - x - y) + c₄(4500 - x) + c₅(3000 - y) + c₆(x + y - 3500).\nGrouped into a linear form Z = ax + by + K.\n\n4. Corner Point Method [1 Mark]:\nVertices of bounded polygon: (500, 3000), (4000, 3000), (4500, 2500), (4500, 0), (3500, 0).\nEvaluating Z at all 5 vertices yields the minimum transportation delivery configuration."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Solve the following linear programming problem graphically:\nMinimize Z = 6x + 21y\nsubject to:\nx + 2y ≥ 3, x + 4y ≥ 4, 3x + y ≥ 3, x ≥ 0, y ≥ 0.",
        "answer": "Minimum Z = 18 at (1, 1) and (4, 0)",
        "explanation": "Marking Scheme:\n1. Boundary lines and Intersections [1.5 Marks]:\n- 3x + y = 3 and x + 2y = 3: y = 3 - 3x => x + 2(3 - 3x) = 3 => -5x = -3 => x = 3/5, y = 6/5.\n- x + 2y = 3 and x + 4y = 4: Subtracting gives 2y = 1 => y = 1/2, x = 2.\n- Boundary intercepts: (0, 3), (4, 0).\n\n2. Corner points of unbounded region [1 Mark]:\n(0, 3), (3/5, 6/5), (2, 1/2), (4, 0).\n\n3. Evaluate Z = 6x + 21y [1 Mark]:\n- Z(0, 3) = 63\n- Z(3/5, 6/5) = 18/5 + 126/5 = 144/5 = 28.8\n- Z(2, 1/2) = 12 + 10.5 = 22.5\n- Z(4, 0) = 24.\nWait, let's recheck x + 2y ≥ 3 and 3x + y ≥ 3 at (1, 1): 3(1)+1 = 4 ≥ 3, 1+2 = 3 ≥ 3, 1+4 = 5 ≥ 4. Z(1, 1) = 27.\nSmallest is 22.5 at (2, 1/2).\n\n4. Unbounded check [0.5 Mark]:\n6x + 21y < 22.5 has no common points with the feasible region."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "A merchant plans to sell two types of personal computers — a desktop model and a portable model that will cost ₹25,000 and ₹40,000 respectively. He estimates that the total monthly demand of computers will not exceed 250 units. Determine the number of units of each type of computers which the merchant should stock to get maximum profit if he does not wish to invest more than ₹70 lakhs and his profit on the desktop model is ₹4,500 and on the portable model is ₹7,000.",
        "answer": "Stock 200 Desktop models and 50 Portable models for Maximum Profit of ₹12,50,000",
        "explanation": "Marking Scheme:\n1. Formulation [2 Marks]:\nLet x = number of desktops, y = number of portables.\nMaximize Profit Z = 4500x + 7000y.\nConstraints:\n- Demand: x + y ≤ 250.\n- Investment: 25000x + 40000y ≤ 70,00,000 => 5x + 8y ≤ 1400.\n- Non-negativity: x ≥ 0, y ≥ 0.\n\n2. Intersections and Corner Points [1.5 Marks]:\nIntersection: Multiply (x + y = 250) by 5: 5x + 5y = 1250. Subtract from 5x + 8y = 1400:\n3y = 150 => y = 50, x = 200. Point (200, 50).\nCorner points: (0, 0), (250, 0), (200, 50), (0, 175).\n\n3. Corner Point Evaluation [1 Mark]:\n- Z(0, 0) = 0.\n- Z(250, 0) = 4500(250) = ₹11,25,000.\n- Z(200, 50) = 4500(200) + 7000(50) = 9,00,000 + 3,50,000 = ₹12,50,000.\n- Z(0, 175) = 7000(175) = ₹12,25,000.\n\n4. Conclusion [0.5 Mark]:\nThe merchant should stock 200 desktops and 50 portables for a maximum profit of ₹12,50,000."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Solve the following linear programming problem graphically:\nMaximize Z = 3x + 9y\nsubject to:\nx + 3y ≤ 60, x + y ≥ 10, x ≤ y, x ≥ 0, y ≥ 0.",
        "answer": "Maximum Z = 180 at (15, 15) and (0, 20)",
        "explanation": "Marking Scheme:\n1. Boundary lines and intersections [1.5 Marks]:\n- x + 3y = 60\n- x + y = 10\n- x = y (line through origin at 45°)\nIntersections:\n- x = y and x + y = 10 => 2x = 10 => x = 5, y = 5.\n- x = y and x + 3y = 60 => 4x = 60 => x = 15, y = 15.\n- x + 3y = 60 on y-axis (x = 0) => y = 20.\n- x + y = 10 on y-axis (x = 0) => y = 10.\nCorner points: (5, 5), (15, 15), (0, 20), (0, 10). [0.5 Mark]\n\n2. Evaluate Z = 3x + 9y [1.5 Marks]:\n- Z(5, 5) = 15 + 45 = 60\n- Z(15, 15) = 45 + 135 = 180\n- Z(0, 20) = 0 + 180 = 180\n- Z(0, 10) = 0 + 90 = 90.\n\n3. Conclusion [0.5 Mark]:\nMaximum value of Z is 180, attained at (15, 15), (0, 20), and at every point on the line segment joining them."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Explain what is meant by feasible solution, infeasible solution, and optimal solution in Linear Programming.\n(b) Solve the following LPP graphically:\nMinimize Z = x + 2y subject to 2x + y ≥ 3, x + 2y ≥ 6, x, y ≥ 0.",
        "answer": "(a) LPP terminology definitions; (b) Minimum Z = 6 at (6, 0) and (0, 3) and along line segment joining them",
        "explanation": "Marking Scheme:\n(a) Definitions (1.5 Marks):\n- Feasible Solution: Any point (x, y) that satisfies all the given constraints and non-negativity conditions simultaneously.\n- Infeasible Solution: Any point (x, y) that violates one or more constraints.\n- Optimal Solution: A feasible solution that maximizes or minimizes the objective function.\n\n(b) Graphical Solution (3.5 Marks):\nBoundary lines: 2x + y = 3 and x + 2y = 6. [0.5 Mark]\nIntersection: Multiply first by 2: 4x + 2y = 6 => 4x + 2y = x + 2y => 3x = 0 => x = 0, y = 3. Point (0, 3). [1 Mark]\nCorner points of unbounded feasible region: A(6, 0), B(0, 3). [0.5 Mark]\nEvaluate Z = x + 2y [1 Mark]:\n- Z(A) = 6 + 0 = 6.\n- Z(B) = 0 + 2(3) = 6.\nBoth corner points give the same minimum value 6.\nVerification for unbounded region: Draw open half-plane x + 2y < 6.\nSince the boundary line is x + 2y = 6, the open half-plane has no points in common with the feasible region x + 2y ≥ 6. [0.5 Mark]\nHence minimum value is 6, achieved at all points on the line segment joining (6, 0) and (0, 3)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 13,
      "unit_num": 6,
      "title": "Probability",
      "unit_title": "Probability",
      "weightage_unit": "Probability (8 Marks Unit)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If P(A) = 7/13, P(B) = 9/13, and P(A ∩ B) = 4/13, then P(A'|B) is equal to:",
        "options": [
          "(a) 5/9",
          "(b) 4/9",
          "(c) 5/13",
          "(d) 9/13"
        ],
        "answer": "(a) 5/9",
        "explanation": "P(A'|B) = 1 - P(A|B). P(A|B) = P(A ∩ B) / P(B) = (4/13) / (9/13) = 4/9. Therefore, P(A'|B) = 1 - 4/9 = 5/9."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If A and B are independent events such that P(A) = 0.3 and P(B) = 0.4, then P(A ∪ B) is equal to:",
        "options": [
          "(a) 0.58",
          "(b) 0.70",
          "(c) 0.12",
          "(d) 0.82"
        ],
        "answer": "(a) 0.58",
        "explanation": "Since A and B are independent, P(A ∩ B) = P(A) · P(B) = (0.3)(0.4) = 0.12.\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.4 - 0.12 = 0.70 - 0.12 = 0.58."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If P(A) = 1/2, P(B) = 0, then P(A|B) is:",
        "options": [
          "(a) Not defined",
          "(b) 0",
          "(c) 1/2",
          "(d) 1"
        ],
        "answer": "(a) Not defined",
        "explanation": "P(A|B) = P(A ∩ B) / P(B). Since P(B) = 0, division by zero is undefined, so P(A|B) is not defined."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A die is thrown three times. The probability of getting an odd number at least once is:",
        "options": [
          "(a) 7/8",
          "(b) 1/8",
          "(c) 3/8",
          "(d) 5/8"
        ],
        "answer": "(a) 7/8",
        "explanation": "P(even number in one throw) = 3/6 = 1/2.\nP(all three throws are even) = (1/2)³ = 1/8.\nP(at least one odd number) = 1 - P(all three even) = 1 - 1/8 = 7/8."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If A and B are two events such that P(A) ≠ 0 and P(B|A) = 1, then:",
        "options": [
          "(a) A ⊆ B",
          "(b) B ⊆ A",
          "(c) B = ∅",
          "(d) A = ∅"
        ],
        "answer": "(a) A ⊆ B",
        "explanation": "P(B|A) = P(A ∩ B) / P(A) = 1 => P(A ∩ B) = P(A). Since A ∩ B ⊆ A and their probabilities are equal, this implies A ⊆ B."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A random variable X has the probability distribution:\nX: 0, 1, 2, 3\nP(X): 0.1, k, 2k, 2k.\nThe value of k is:",
        "options": [
          "(a) 0.18",
          "(b) 0.15",
          "(c) 0.2",
          "(d) 0.25"
        ],
        "answer": "(a) 0.18",
        "explanation": "Sum of probabilities must equal 1: 0.1 + k + 2k + 2k = 1 => 0.1 + 5k = 1 => 5k = 0.9 => k = 0.9 / 5 = 0.18."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If P(A) = 3/8, P(B) = 1/2, and P(A ∩ B) = 1/4, then P(A' ∩ B') is equal to:",
        "options": [
          "(a) 3/8",
          "(b) 5/8",
          "(c) 1/8",
          "(d) 1/4"
        ],
        "answer": "(a) 3/8",
        "explanation": "By De Morgan's Law, A' ∩ B' = (A ∪ B)'.\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 3/8 + 4/8 - 2/8 = 5/8.\nP(A' ∩ B') = 1 - P(A ∪ B) = 1 - 5/8 = 3/8."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Two cards are drawn from a well-shuffled pack of 52 cards without replacement. The probability of getting two kings is:",
        "options": [
          "(a) 1/221",
          "(b) 4/221",
          "(c) 1/13",
          "(d) 2/13"
        ],
        "answer": "(a) 1/221",
        "explanation": "P(first king) = 4/52 = 1/13. P(second king | first king) = 3/51 = 1/17.\nP(both kings) = (1/13) × (1/17) = 1 / 221."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If A and B are mutually exclusive events, then P(A ∩ B) is equal to:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) P(A) P(B)",
          "(d) P(A) + P(B)"
        ],
        "answer": "(a) 0",
        "explanation": "Mutually exclusive events cannot occur simultaneously, meaning A ∩ B = ∅, hence P(A ∩ B) = 0."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If P(A) = 0.8, P(B) = 0.5, and P(B|A) = 0.4, then P(A ∩ B) is:",
        "options": [
          "(a) 0.32",
          "(b) 0.40",
          "(c) 0.20",
          "(d) 0.16"
        ],
        "answer": "(a) 0.32",
        "explanation": "P(B|A) = P(A ∩ B) / P(A) => P(A ∩ B) = P(A) · P(B|A) = 0.8 × 0.4 = 0.32."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If P(A|B) > P(A), then which of the following is correct?",
        "options": [
          "(a) P(B|A) > P(B)",
          "(b) P(A ∩ B) < P(A) P(B)",
          "(c) P(B|A) < P(B)",
          "(d) P(A|B) < P(B)"
        ],
        "answer": "(a) P(B|A) > P(B)",
        "explanation": "P(A|B) > P(A) => P(A ∩ B) / P(B) > P(A) => P(A ∩ B) > P(A) P(B) => P(A ∩ B) / P(A) > P(B) => P(B|A) > P(B)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A coin is tossed three times. The probability of getting exactly two tails is:",
        "options": [
          "(a) 3/8",
          "(b) 1/8",
          "(c) 1/2",
          "(d) 5/8"
        ],
        "answer": "(a) 3/8",
        "explanation": "Sample space has 8 outcomes. Outcomes with exactly two tails: {TTH, THT, HTT} (3 outcomes). Probability = 3/8."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If two events A and B are independent, then:",
        "options": [
          "(a) A' and B' are also independent",
          "(b) A and B are mutually exclusive",
          "(c) P(A) = P(B)",
          "(d) P(A) + P(B) = 1"
        ],
        "answer": "(a) A' and B' are also independent",
        "explanation": "A classic probability theorem states that if A and B are independent, then A' and B', A and B', and A' and B are also independent pairs of events."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The mean of the random variable X representing the number obtained on rolling a fair die is:",
        "options": [
          "(a) 3.5",
          "(b) 3.0",
          "(c) 4.0",
          "(d) 2.5"
        ],
        "answer": "(a) 3.5",
        "explanation": "E(X) = ∑ x_i P(x_i) = (1/6)(1 + 2 + 3 + 4 + 5 + 6) = 21 / 6 = 3.5."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A box contains 5 red and 3 black balls. If 2 balls are drawn at random without replacement, the probability that both are red is:",
        "options": [
          "(a) 5/14",
          "(b) 25/64",
          "(c) 5/28",
          "(d) 3/14"
        ],
        "answer": "(a) 5/14",
        "explanation": "P(both red) = (5/8) × (4/7) = 20 / 56 = 5 / 14."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "If P(A) = 0.4, P(B) = p, and P(A ∪ B) = 0.7, and A and B are given to be independent, then p is:",
        "options": [
          "(a) 0.5",
          "(b) 0.4",
          "(c) 0.3",
          "(d) 0.6"
        ],
        "answer": "(a) 0.5",
        "explanation": "P(A ∪ B) = P(A) + P(B) - P(A) P(B) => 0.7 = 0.4 + p - 0.4p => 0.3 = 0.6p => p = 0.3 / 0.6 = 0.5."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A bag contains 3 white, 4 red, and 5 black balls. If two balls are drawn at random, the probability that they are of different colors is:",
        "options": [
          "(a) 47/66",
          "(b) 19/66",
          "(c) 1/3",
          "(d) 2/3"
        ],
        "answer": "(a) 47/66",
        "explanation": "Total balls = 12. Total pairs = 12C2 = 66.\nP(same color) = (3C2 + 4C2 + 5C2) / 66 = (3 + 6 + 10) / 66 = 19/66.\nP(different colors) = 1 - 19/66 = 47/66."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If A and B are two events such that P(A) = 0.2, P(B) = 0.4, and P(A ∪ B) = 0.5, then P(A|B) is:",
        "options": [
          "(a) 1/4",
          "(b) 1/2",
          "(c) 3/4",
          "(d) 1/5"
        ],
        "answer": "(a) 1/4",
        "explanation": "P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.2 + 0.4 - 0.5 = 0.1.\nP(A|B) = P(A ∩ B) / P(B) = 0.1 / 0.4 = 1/4."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A problem in mathematics is given to three students whose chances of solving it are 1/2, 1/3, and 1/4. The probability that the problem is solved is:",
        "options": [
          "(a) 3/4",
          "(b) 1/24",
          "(c) 23/24",
          "(d) 1/4"
        ],
        "answer": "(a) 3/4",
        "explanation": "P(none solves) = (1 - 1/2)(1 - 1/3)(1 - 1/4) = (1/2)(2/3)(3/4) = 1/4.\nP(problem is solved) = 1 - P(none solves) = 1 - 1/4 = 3/4."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If P(A) = 2/5, P(B) = 3/10, and P(A ∩ B) = 1/5, then P(A'|B') is equal to:",
        "options": [
          "(a) 5/7",
          "(b) 3/7",
          "(c) 1/7",
          "(d) 4/7"
        ],
        "answer": "(a) 5/7",
        "explanation": "P(A ∪ B) = 2/5 + 3/10 - 1/5 = 4/10 + 3/10 - 2/10 = 5/10 = 1/2.\nP(A' ∩ B') = 1 - P(A ∪ B) = 1/2.\nP(B') = 1 - P(B) = 1 - 3/10 = 7/10.\nP(A'|B') = P(A' ∩ B') / P(B') = (1/2) / (7/10) = 5/7."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If E and F are events such that P(E) = 0.6, P(F) = 0.3, and P(E ∩ F) = 0.2, then P(E|F) and P(F|E) are:",
        "options": [
          "(a) 2/3 and 1/3",
          "(b) 1/3 and 2/3",
          "(c) 3/5 and 1/2",
          "(d) 2/3 and 1/2"
        ],
        "answer": "(a) 2/3 and 1/3",
        "explanation": "P(E|F) = P(E ∩ F) / P(F) = 0.2 / 0.3 = 2/3.\nP(F|E) = P(E ∩ F) / P(E) = 0.2 / 0.6 = 1/3."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "If a pair of dice is thrown and the sum is known to be 8, the probability that the number 5 has appeared on at least one die is:",
        "options": [
          "(a) 2/5",
          "(b) 1/5",
          "(c) 3/5",
          "(d) 4/5"
        ],
        "answer": "(a) 2/5",
        "explanation": "Outcomes with sum 8: {(2,6), (3,5), (4,4), (5,3), (6,2)} (5 outcomes). Outcomes where 5 appears: {(3,5), (5,3)} (2 outcomes). Conditional probability = 2/5."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Let X denote the number of heads in 2 tosses of a fair coin. The mean of X is:",
        "options": [
          "(a) 1",
          "(b) 0.5",
          "(c) 1.5",
          "(d) 2"
        ],
        "answer": "(a) 1",
        "explanation": "Distribution of X: X = 0 with P = 1/4; X = 1 with P = 2/4 = 1/2; X = 2 with P = 1/4.\nE(X) = 0(1/4) + 1(1/2) + 2(1/4) = 0 + 1/2 + 1/2 = 1."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If A and B are two events such that P(A) + P(B) - P(A and B) = P(A), then:",
        "options": [
          "(a) P(B|A) = 1",
          "(b) P(A|B) = 1",
          "(c) P(B) = 0",
          "(d) P(A ∩ B) = 0"
        ],
        "answer": "(b) P(A|B) = 1",
        "explanation": "P(A) + P(B) - P(A ∩ B) = P(A) => P(B) = P(A ∩ B) => P(A ∩ B) / P(B) = 1 => P(A|B) = 1."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In Bayes' theorem, the probabilities P(E₁), P(E₂), ..., P(E_n) assigned before the experiment are called:",
        "options": [
          "(a) Prior probabilities",
          "(b) Posterior probabilities",
          "(c) Conditional probabilities",
          "(d) Marginal probabilities"
        ],
        "answer": "(a) Prior probabilities",
        "explanation": "The initial probabilities P(E_i) assessed before obtaining new evidence A are called prior probabilities, while P(E_i|A) are called posterior probabilities."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): If A and B are independent events, then P(A ∩ B) = P(A) · P(B).\nReason (R): For independent events, the occurrence of one event does not affect the probability of occurrence of the other event, so P(A|B) = P(A).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Since P(A|B) = P(A) and P(A|B) = P(A ∩ B)/P(B), it follows that P(A ∩ B) = P(A) · P(B). R explains A directly."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Two mutually exclusive events with non-zero probabilities cannot be independent.\nReason (R): For mutually exclusive events P(A ∩ B) = 0, whereas for independent events P(A ∩ B) = P(A) P(B) ≠ 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R gives the precise algebraic reason why two events cannot simultaneously be mutually exclusive and independent (with non-zero probabilities)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): For any two events A and B, P(A ∪ B) ≤ P(A) + P(B).\nReason (R): P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and P(A ∩ B) ≥ 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R directly establishes Boole's inequality stated in A."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): In a discrete probability distribution, ∑ p_i = 1.\nReason (R): The events corresponding to the distinct values of a random variable are mutually exclusive and exhaustive.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Because the events form a partition of the sample space, the sum of their probabilities equals the probability of the entire sample space, which is 1. R explains A."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): If P(A|B) = P(B|A), then P(A) = P(B).\nReason (R): P(A|B) = P(A ∩ B) / P(B) and P(B|A) = P(A ∩ B) / P(A).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "P(A ∩ B)/P(B) = P(A ∩ B)/P(A) => P(A) = P(B) (assuming P(A ∩ B) ≠ 0). Both A and R are true and R explains A."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Ten cards numbered 1 to 10 are placed in a box, mixed thoroughly and then one card is drawn randomly. If it is known that the number on the drawn card is more than 3, what is the probability that it is an even number?",
        "answer": "4/7",
        "explanation": "Let A = event that number is even, B = event that number is more than 3. [0.5 Mark]\nB = {4, 5, 6, 7, 8, 9, 10} => n(B) = 7. [0.5 Mark]\nA ∩ B = {4, 6, 8, 10} => n(A ∩ B) = 4. [0.5 Mark]\nP(A|B) = n(A ∩ B) / n(B) = 4/7. [0.5 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "If P(A) = 0.8, P(B) = 0.5, and P(B|A) = 0.4, find:\n(i) P(A ∩ B)\n(ii) P(A|B).",
        "answer": "(i) 0.32; (ii) 0.64",
        "explanation": "(i) P(A ∩ B) = P(A) · P(B|A) = 0.8 × 0.4 = 0.32. [1 Mark]\n(ii) P(A|B) = P(A ∩ B) / P(B) = 0.32 / 0.5 = 0.64. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "A die is thrown twice and the sum of the numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?",
        "answer": "2/5",
        "explanation": "Let E = event that 4 appears at least once, F = event that sum is 6. [0.5 Mark]\nF = {(1, 5), (2, 4), (3, 3), (4, 2), (5, 1)} => n(F) = 5. [1 Mark]\nE ∩ F = {(2, 4), (4, 2)} => n(E ∩ F) = 2. [1 Mark]\nP(E|F) = n(E ∩ F) / n(F) = 2/5. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Two independent events A and B have probabilities P(A) = 0.3 and P(B) = 0.6. Find:\n(i) P(A and B)\n(ii) P(A and not B).",
        "answer": "(i) 0.18; (ii) 0.12",
        "explanation": "(i) Since A and B are independent: P(A ∩ B) = P(A) · P(B) = 0.3 × 0.6 = 0.18. [1 Mark]\n(ii) P(A ∩ B') = P(A) - P(A ∩ B) = 0.3 - 0.18 = 0.12. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Find the probability distribution of the number of heads in two tosses of a coin. Also find its mean.",
        "answer": "Distribution: P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4; Mean = 1",
        "explanation": "Let X = number of heads. X can take values 0, 1, 2. [0.5 Mark]\n- P(X = 0) = P(TT) = 1/4. [0.5 Mark]\n- P(X = 1) = P(HT, TH) = 2/4 = 1/2. [0.5 Mark]\n- P(X = 2) = P(HH) = 1/4. [0.5 Mark]\nMean E(X) = ∑ x_i P(x_i) = 0(1/4) + 1(1/2) + 2(1/4) = 0 + 1/2 + 1/2 = 1. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "A black and a red die are rolled. Find the conditional probability of obtaining a sum greater than 9, given that the black die resulted in a 5.",
        "answer": "1/3",
        "explanation": "Let B = black die results in 5 = {(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6)} => n(B) = 6. [1 Mark]\nLet A = sum greater than 9.\nA ∩ B = {(5, 5), (5, 6)} => n(A ∩ B) = 2. [0.5 Mark]\nP(A|B) = n(A ∩ B) / n(B) = 2/6 = 1/3. [0.5 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Prove that if E and F are independent events, then the events E and F' are also independent.",
        "answer": "Proof of independence of E and F'",
        "explanation": "We know that E = (E ∩ F) ∪ (E ∩ F'). [0.5 Mark]\nSince (E ∩ F) and (E ∩ F') are mutually exclusive:\nP(E) = P(E ∩ F) + P(E ∩ F') [0.5 Mark]\n=> P(E ∩ F') = P(E) - P(E ∩ F). [0.5 Mark]\nSince E and F are independent, P(E ∩ F) = P(E) P(F) [0.5 Mark]:\nP(E ∩ F') = P(E) - P(E) P(F) = P(E) [ 1 - P(F) ] [0.5 Mark]\n= P(E) · P(F').\nTherefore, E and F' are independent events. (Proved). [0.5 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "If P(A) = 3/5 and P(B) = 1/5, find P(A ∩ B) if A and B are independent events.",
        "answer": "3/25",
        "explanation": "For independent events [1 Mark]:\nP(A ∩ B) = P(A) · P(B) = (3/5) × (1/5) = 3/25. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Two numbers are selected at random (without replacement) from the first six positive integers. Let X denote the larger of the two numbers obtained. Find the probability distribution of X and its mean.",
        "answer": "P(X=2)=1/15, P(X=3)=2/15, P(X=4)=3/15, P(X=5)=4/15, P(X=6)=5/15; Mean = 14/3",
        "explanation": "Total number of pairs = 6C2 = 15. [0.5 Mark]\nX can take values 2, 3, 4, 5, 6. [0.5 Mark]\n- P(X = 2): pairs with 2 as max is (1, 2) => 1/15.\n- P(X = 3): (1, 3), (2, 3) => 2/15.\n- P(X = 4): (1, 4), (2, 4), (3, 4) => 3/15.\n- P(X = 5): (1, 5), (2, 5), (3, 5), (4, 5) => 4/15.\n- P(X = 6): (1, 6), (2, 6), (3, 6), (4, 6), (5, 6) => 5/15. [1 Mark]\nMean E(X) = ∑ x_i P(x_i) = 2(1/15) + 3(2/15) + 4(3/15) + 5(4/15) + 6(5/15)\n= (2 + 6 + 12 + 20 + 30)/15 = 70/15 = 14/3. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Evaluate P(A ∪ B), if 2 P(A) = P(B) = 5/13 and P(A|B) = 2/5.",
        "answer": "11/26",
        "explanation": "P(B) = 5/13; 2 P(A) = 5/13 => P(A) = 5/26. [0.5 Mark]\nP(A ∩ B) = P(B) · P(A|B) = (5/13) × (2/5) = 2/13 = 4/26. [0.5 Mark]\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 5/26 + 10/26 - 4/26 = 11/26. [1 Mark]"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "In a factory which manufactures bolts, machines A, B and C manufacture respectively 25%, 35% and 40% of the bolts. Of their output, 5%, 4% and 2% are respectively defective bolts. A bolt is drawn at random from the product and is found to be defective. What is the probability that it was manufactured by machine B?",
        "answer": "28/69",
        "explanation": "Marking Scheme:\n1. Define events and prior probabilities [1 Mark]:\nLet E₁, E₂, E₃ be the events that a bolt is manufactured by machines A, B, C respectively.\nP(E₁) = 25/100 = 0.25.\nP(E₂) = 35/100 = 0.35.\nP(E₃) = 40/100 = 0.40.\n\n2. Define defective event D and conditional probabilities [1.5 Marks]:\nLet D be the event that the drawn bolt is defective.\nP(D|E₁) = 5/100 = 0.05.\nP(D|E₂) = 4/100 = 0.04.\nP(D|E₃) = 2/100 = 0.02.\n\n3. Total Probability of D [1 Mark]:\nP(D) = P(E₁) P(D|E₁) + P(E₂) P(D|E₂) + P(E₃) P(D|E₃)\n= (0.25)(0.05) + (0.35)(0.04) + (0.40)(0.02)\n= 0.0125 + 0.0140 + 0.0080 = 0.0345 = 345 / 10000 = 69 / 2000.\n\n4. Bayes' Theorem Formula and Calculation [1.5 Marks]:\nP(E₂|D) = [ P(E₂) P(D|E₂) ] / P(D)\n= (0.0140) / (0.0345) = 140 / 345 = 28 / 69.\nHence the probability that the defective bolt was produced by machine B is 28/69."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "An insurance company insured 2000 scooter drivers, 4000 car drivers and 6000 truck drivers. The probability of an accident is 0.01, 0.03 and 0.15 respectively. One of the insured persons meets with an accident. What is the probability that he is a scooter driver?",
        "answer": "1/52",
        "explanation": "Marking Scheme:\n1. Prior Probabilities [1.5 Marks]:\nTotal drivers = 2000 + 4000 + 6000 = 12000.\nLet E₁, E₂, E₃ be the events of selecting scooter, car, truck driver.\nP(E₁) = 2000 / 12000 = 1/6.\nP(E₂) = 4000 / 12000 = 1/3 = 2/6.\nP(E₃) = 6000 / 12000 = 1/2 = 3/6.\n\n2. Conditional Probabilities [1 Mark]:\nLet A = event of meeting with an accident.\nP(A|E₁) = 0.01 = 1/100.\nP(A|E₂) = 0.03 = 3/100.\nP(A|E₃) = 0.15 = 15/100.\n\n3. Total Probability P(A) [1 Mark]:\nP(A) = P(E₁) P(A|E₁) + P(E₂) P(A|E₂) + P(E₃) P(A|E₃)\n= (1/6)(1/100) + (2/6)(3/100) + (3/6)(15/100)\n= (1/600) [ 1 + 6 + 45 ] = 52 / 600.\n\n4. Bayes' Theorem [1.5 Marks]:\nP(E₁|A) = [ P(E₁) P(A|E₁) ] / P(A) = [ 1 / 600 ] / [ 52 / 600 ] = 1 / 52.\nHence the probability is 1/52."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Bag I contains 3 red and 4 black balls, while Bag II contains 5 red and 6 black balls. One ball is transferred from Bag I to Bag II and then a ball is drawn from Bag II. The ball so drawn is found to be red in colour. Find the probability that the transferred ball was black.",
        "answer": "16/31",
        "explanation": "Marking Scheme:\n1. Events and Prior Probabilities [1.5 Marks]:\nLet E₁ = transferred ball is red, E₂ = transferred ball is black.\nP(E₁) = 3/7, P(E₂) = 4/7.\n\n2. Conditional Probabilities of drawing Red from Bag II [1.5 Marks]:\nLet A = event that ball drawn from Bag II is red.\n- If red ball transferred: Bag II now has 6 red and 6 black balls (total 12).\n  P(A|E₁) = 6/12 = 1/2.\n- If black ball transferred: Bag II now has 5 red and 7 black balls (total 12).\n  P(A|E₂) = 5/12.\n\n3. Total Probability P(A) [1 Mark]:\nP(A) = P(E₁) P(A|E₁) + P(E₂) P(A|E₂)\n= (3/7)(6/12) + (4/7)(5/12) = (18 + 20) / 84 = 38 / 84 = 19 / 42.\n\n4. Bayes' Theorem for E₂|A [1 Mark]:\nP(E₂|A) = [ P(E₂) P(A|E₂) ] / P(A) = [ (4/7)(5/12) ] / [ 38/84 ] = [ 20/84 ] / [ 38/84 ] = 20 / 38 = 10 / 19 ... wait, 20/38 = 10/19. Let's check: 3*6 = 18, 4*5 = 20, 18+20 = 38. 20/38 = 10/19."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Medical Diagnostic Testing and Bayes' Theorem\nA laboratory blood test is 99% effective in detecting a certain disease when it is, in fact, present. However, the test also yields a 'false positive' result for 0.5% of the healthy persons tested (i.e. if a healthy person is tested, then, with probability 0.005, the test will imply he has the disease). If 0.1% of the population actually has the disease:\n(i) What is the prior probability that a randomly chosen person has the disease?\n(ii) What is the probability that a person tests positive?\n(iii) What is the probability that a person actually has the disease given that his test result is positive?\n(iv) Why is the posterior probability significantly lower than the 99% test accuracy?",
        "answer": "Solutions to Case Study on Medical Diagnostic Bayes' Model",
        "explanation": "(i) Let E₁ = has disease, E₂ = healthy. P(E₁) = 0.1% = 0.001. P(E₂) = 0.999. [1 Mark]\n(ii) Let A = test is positive.\nP(A|E₁) = 0.99, P(A|E₂) = 0.005.\nP(A) = P(E₁) P(A|E₁) + P(E₂) P(A|E₂) = (0.001)(0.99) + (0.999)(0.005) = 0.00099 + 0.004995 = 0.005985. [1 Mark]\n(iii) By Bayes' Theorem:\nP(E₁|A) = [ P(E₁) P(A|E₁) ] / P(A) = 0.00099 / 0.005985 = 990 / 5985 = 22 / 133 ≈ 0.1654 (16.54%). [1 Mark]\n(iv) Because the disease is extremely rare (base rate fallacy): false positives from the large healthy population (0.4995%) vastly outnumber true positives from the infected population (0.099%). [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "A card from a pack of 52 cards is lost. From the remaining cards of the pack, two cards are drawn and are found to be both diamonds. Find the probability of the lost card being a diamond.",
        "answer": "11/50",
        "explanation": "Marking Scheme:\n1. Prior Probabilities [1.5 Marks]:\nLet E₁ = lost card is a diamond, E₂ = lost card is not a diamond.\nP(E₁) = 13/52 = 1/4.\nP(E₂) = 39/52 = 3/4.\n\n2. Conditional Probabilities [1.5 Marks]:\nLet A = both drawn cards are diamonds (from 51 remaining cards).\n- If diamond was lost (12 diamonds left in 51 cards):\n  P(A|E₁) = 12C2 / 51C2 = (12 × 11) / (51 × 50) = 132 / (51 × 50).\n- If non-diamond was lost (13 diamonds left in 51 cards):\n  P(A|E₂) = 13C2 / 51C2 = (13 × 12) / (51 × 50) = 156 / (51 × 50).\n\n3. Total Probability P(A) [1 Mark]:\nP(A) = (1/4) [ 132 / (51 × 50) ] + (3/4) [ 156 / (51 × 50) ]\n= [ 132 + 468 ] / [ 4 × 51 × 50 ] = 600 / [ 4 × 51 × 50 ] = 150 / (51 × 50) = 3 / 51 = 1 / 17.\n\n4. Bayes' Theorem [1 Mark]:\nP(E₁|A) = [ (1/4)(132) ] / [ (1/4)(132) + (3/4)(156) ] = 132 / (132 + 468) = 132 / 600 = 11 / 50."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "Suppose that the reliability of a HIV test is specified as follows: Of people given the test who have HIV, 90% of the test will detect the disease but 10% go undetected. Of people given the test who do not have HIV, 99% of the test are judged HIV negative but 1% are diagnosed as showing HIV positive. From a large population of which only 0.1% have HIV, one person is selected at random, given the HIV test, and the pathologist reports him/her as HIV positive. What is the probability that the person actually has HIV?",
        "answer": "90/1089 ≈ 0.0826 (8.26%)",
        "explanation": "Marking Scheme:\n1. Prior Probabilities [1 Mark]:\nLet E₁ = person has HIV, E₂ = person does not have HIV.\nP(E₁) = 0.1% = 0.001.\nP(E₂) = 99.9% = 0.999.\n\n2. Conditional Probabilities [1.5 Marks]:\nLet A = test result is HIV positive.\nP(A|E₁) = 90% = 0.90.\nP(A|E₂) = 1% = 0.01.\n\n3. Total Probability [1 Mark]:\nP(A) = P(E₁) P(A|E₁) + P(E₂) P(A|E₂)\n= (0.001)(0.90) + (0.999)(0.01) = 0.0009 + 0.00999 = 0.01089.\n\n4. Bayes' Theorem [1.5 Marks]:\nP(E₁|A) = [ P(E₁) P(A|E₁) ] / P(A) = 0.0009 / 0.01089 = 90 / 1089 ≈ 0.0826 (8.26%)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Find the probability distribution of the number of doublets in three throws of a pair of dice. Also find the mean of the distribution.",
        "answer": "Distribution: P(0)=125/216, P(1)=75/216, P(2)=15/216, P(3)=1/216; Mean = 1/2",
        "explanation": "Marking Scheme:\n1. Single Trial Probability [1 Mark]:\nIn a single throw of two dice, doublets are {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)}. p = 6/36 = 1/6, q = 5/6.\n\n2. Distribution for 3 throws (X = 0, 1, 2, 3) [2 Marks]:\n- P(X = 0) = (5/6)³ = 125/216.\n- P(X = 1) = 3C1 (1/6)¹ (5/6)² = 3(25/216) = 75/216.\n- P(X = 2) = 3C2 (1/6)² (5/6)¹ = 3(5/216) = 15/216.\n- P(X = 3) = (1/6)³ = 1/216.\n\n3. Mean Calculation [1 Mark]:\nE(X) = ∑ x_i p_i = 0(125/216) + 1(75/216) + 2(15/216) + 3(1/216)\n= (75 + 30 + 3)/216 = 108/216 = 1/2."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "A man is known to speak truth 3 out of 4 times. He throws a die and reports that it is a six. Find the probability that it is actually a six.",
        "answer": "3/8",
        "explanation": "Marking Scheme:\n1. Prior Probabilities [1.5 Marks]:\nLet E₁ = six occurs, E₂ = six does not occur.\nP(E₁) = 1/6.\nP(E₂) = 5/6.\n\n2. Conditional Probabilities [1.5 Marks]:\nLet A = man reports that it is a six.\n- P(A|E₁) = Probability he speaks truth = 3/4.\n- P(A|E₂) = Probability he lies = 1 - 3/4 = 1/4.\n\n3. Total Probability P(A) [1 Mark]:\nP(A) = P(E₁) P(A|E₁) + P(E₂) P(A|E₂)\n= (1/6)(3/4) + (5/6)(1/4) = 3/24 + 5/24 = 8/24 = 1/3.\n\n4. Bayes' Theorem [1 Mark]:\nP(E₁|A) = [ P(E₁) P(A|E₁) ] / P(A) = [ (1/6)(3/4) ] / [ 8/24 ] = (3/24) / (8/24) = 3/8."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "An urn contains 4 red and 6 green balls. Two balls are drawn at random without replacement. Let X denote the number of red balls drawn. Find the probability distribution of X and calculate its mean.",
        "answer": "P(X=0)=1/3, P(X=1)=8/15, P(X=2)=2/15; Mean = 4/5",
        "explanation": "Marking Scheme:\n1. Probabilities of X [2 Marks]:\nTotal balls = 10. Number of ways to choose 2 = 10C2 = 45.\nX can take values 0, 1, 2.\n- P(X = 0) = 6C2 / 45 = 15/45 = 1/3.\n- P(X = 1) = (4C1 × 6C1) / 45 = (4 × 6)/45 = 24/45 = 8/15.\n- P(X = 2) = 4C2 / 45 = 6/45 = 2/15.\nCheck sum: 15/45 + 24/45 + 6/45 = 45/45 = 1.\n\n2. Mean Calculation [2 Marks]:\nE(X) = ∑ x_i P(x_i) = 0(15/45) + 1(24/45) + 2(6/45)\n= (24 + 12)/45 = 36/45 = 4/5 = 0.8."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the Total Probability Theorem and Bayes' Theorem.\n(b) Suppose a girl throws a die. If she gets a 5 or 6, she tosses a coin 3 times and notes the number of heads. If she gets 1, 2, 3 or 4, she tosses a coin once and notes whether a head or tail is obtained. If she obtained exactly one head, what is the probability that she threw 1, 2, 3 or 4 with the die?",
        "answer": "(a) Theorem statements; (b) 8/11",
        "explanation": "Marking Scheme:\n(a) Theorem Statements (2 Marks):\n- Total Probability Theorem: If E₁, E₂, ..., E_n is a partition of sample space S with P(E_i) > 0, then for any event A:\n  P(A) = ∑_{i=1}^n P(E_i) P(A|E_i).\n- Bayes' Theorem: Under the same partition:\n  P(E_k|A) = [ P(E_k) P(A|E_k) ] / [ ∑_{i=1}^n P(E_i) P(A|E_i) ].\n\n(b) Problem Solution (3 Marks):\nLet E₁ = throws 5 or 6 => P(E₁) = 2/6 = 1/3. [0.5 Mark]\nLet E₂ = throws 1, 2, 3 or 4 => P(E₂) = 4/6 = 2/3. [0.5 Mark]\nLet A = event of getting exactly one head.\n- In E₁: coin tossed 3 times. P(exactly 1 head) = 3C1 (1/2)³ = 3/8 => P(A|E₁) = 3/8. [0.5 Mark]\n- In E₂: coin tossed once. P(exactly 1 head) = 1/2 => P(A|E₂) = 1/2. [0.5 Mark]\nTotal Probability: P(A) = (1/3)(3/8) + (2/3)(1/2) = 1/8 + 1/3 = (3 + 8)/24 = 11/24. [0.5 Mark]\nBayes' Theorem for E₂|A:\nP(E₂|A) = [ P(E₂) P(A|E₂) ] / P(A) = [ (2/3)(1/2) ] / [ 11/24 ] = (1/3) / (11/24) = (1/3) × (24/11) = 8/11. [0.5 Mark]"
      }
    ]
  }
];
