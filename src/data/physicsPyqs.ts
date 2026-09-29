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

export const PHYSICS_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "unit_num": 1,
      "title": "Electric Charges and Fields",
      "unit_title": "Electrostatics",
      "weightage_unit": "16 Marks (Units 1 & 2)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Two point charges +3 μC and +8 μC repel each other with a force of 40 N. If a charge of -5 μC is added to each of them, then the new force between them will be:",
        "options": [
          "(a) -10 N (attractive)",
          "(b) +10 N (repulsive)",
          "(c) -20 N (attractive)",
          "(d) +20 N (repulsive)"
        ],
        "answer": "(a) -10 N (attractive)",
        "explanation": "Initial charges: q1 = +3 μC, q2 = +8 μC. Force F = k*q1*q2 / r² = k*(3*8)/r² = 24k/r² = 40 N, so k/r² = 40/24 = 5/3 N/(μC)². New charges after adding -5 μC: q1' = 3 - 5 = -2 μC, q2' = 8 - 5 = +3 μC. New force F' = k*q1'*q2' / r² = k*(-2)*(+3)/r² = -6*(k/r²) = -6 * (5/3) = -10 N. The negative sign signifies an attractive force."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "An electric dipole of moment p is placed in a uniform electric field E. The torque acting on it and the potential energy of the dipole when p is perpendicular to E are respectively:",
        "options": [
          "(a) pE, 0",
          "(b) 0, -pE",
          "(c) pE, -pE",
          "(d) 0, 0"
        ],
        "answer": "(a) pE, 0",
        "explanation": "Torque τ = p × E = pE sin θ. When θ = 90°, τ = pE sin 90° = pE. Potential energy U = -p · E = -pE cos θ. When θ = 90°, U = -pE cos 90° = 0."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A point charge +q is placed at a distance d from an isolated conducting plane. The field at a point P on the other side of the plane is:",
        "options": [
          "(a) directed perpendicular to the plane and away from the plane",
          "(b) directed perpendicular to the plane but towards the plane",
          "(c) directed radially away from the point charge",
          "(d) zero"
        ],
        "answer": "(a) directed perpendicular to the plane and away from the plane",
        "explanation": "Due to electrostatic induction, negative charges appear on the surface facing the positive charge, and positive charges appear on the outer surface. The electric field lines emerge normally outwards from the positively charged outer surface, directed perpendicular to the plane and away from it."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A cylinder of radius R and length L is placed in a uniform electric field E parallel to the cylinder axis. The total flux for the surface of the cylinder is given by:",
        "options": [
          "(a) 2πR²E",
          "(b) πR²E",
          "(c) (2πR² + πR)E",
          "(d) Zero"
        ],
        "answer": "(d) Zero",
        "explanation": "The electric flux entering through one circular face is Φ1 = -E * πR². The flux leaving through the opposite circular face is Φ2 = +E * πR². For the curved cylindrical surface, the electric field is perpendicular to the area vector (E ⊥ dA), so Φcurved = 0. Total flux Φ = Φ1 + Φ2 + Φcurved = -πR²E + πR²E + 0 = 0."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Electric field lines:",
        "options": [
          "(a) are always closed loops",
          "(b) cannot intersect each other",
          "(c) are parallel to equipotential surfaces",
          "(d) originate on negative charges and terminate on positive charges"
        ],
        "answer": "(b) cannot intersect each other",
        "explanation": "If two electric field lines intersect at a point, there would be two tangents at that point, indicating two different directions of the electric field at the same point, which is physically impossible. Also, electrostatic field lines never form closed loops because electrostatic field is conservative."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The ratio of the electric field due to an electric dipole on its axial line to that on its equatorial line at the same distance r (for r >> a) is:",
        "options": [
          "(a) 1 : 1",
          "(b) 2 : 1",
          "(c) 1 : 2",
          "(d) 4 : 1"
        ],
        "answer": "(b) 2 : 1",
        "explanation": "Electric field on the axial line: E_axial = 2kp / r³. Electric field on the equatorial line: E_equatorial = kp / r³. Therefore, E_axial / E_equatorial = (2kp/r³) / (kp/r³) = 2 : 1."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "A charge Q is enclosed by a Gaussian spherical surface of radius R. If the radius is doubled, the outward electric flux will:",
        "options": [
          "(a) be doubled",
          "(b) increase four times",
          "(c) be reduced to half",
          "(d) remain the same"
        ],
        "answer": "(d) remain the same",
        "explanation": "According to Gauss's Law, the total electric flux through any closed surface is given by Φ = q_enclosed / ε₀. It depends solely on the enclosed charge, not on the shape, radius, or size of the Gaussian surface."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "An electric dipole of dipole moment p is aligned at an angle of 30° with a uniform electric field of magnitude 2 × 10⁵ N/C. If it experiences a torque of 4 N·m, the magnitude of the dipole moment is:",
        "options": [
          "(a) 4 × 10⁻⁵ C·m",
          "(b) 2 × 10⁻⁵ C·m",
          "(c) 8 × 10⁻⁵ C·m",
          "(d) 10⁻⁵ C·m"
        ],
        "answer": "(a) 4 × 10⁻⁵ C·m",
        "explanation": "Torque τ = p E sin θ => 4 = p * (2 × 10⁵) * sin 30° = p * (2 × 10⁵) * 0.5 = 10⁵ p. Therefore, p = 4 / 10⁵ = 4 × 10⁻⁵ C·m."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A spherical conducting shell of inner radius r1 and outer radius r2 has a charge Q. A charge -q is placed at the centre of the shell. The surface charge density on the inner and outer surfaces will be:",
        "options": [
          "(a) +q/(4πr1²), (Q - q)/(4πr2²)",
          "(b) -q/(4πr1²), Q/(4πr2²)",
          "(c) +q/(4πr1²), (Q + q)/(4πr2²)",
          "(d) 0, Q/(4πr2²)"
        ],
        "answer": "(a) +q/(4πr1²), (Q - q)/(4πr2²)",
        "explanation": "By electrostatic induction, a charge of -q at the centre induces +q on the inner surface. To conserve total charge on the shell (Q), the outer surface acquires Q - (+q) = Q - q. Thus, inner surface density σ_in = +q / (4πr1²) and outer surface density σ_out = (Q - q) / (4πr2²)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "SI unit of permittivity of free space (ε₀) is:",
        "options": [
          "(a) C² N⁻¹ m⁻²",
          "(b) N m² C⁻²",
          "(c) N C⁻² m²",
          "(d) C² N m⁻²"
        ],
        "answer": "(a) C² N⁻¹ m⁻²",
        "explanation": "From Coulomb's Law: F = q1 q2 / (4πε₀ r²) => ε₀ = q1 q2 / (4π F r²). Units: C * C / (N * m²) = C² N⁻¹ m⁻²."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A charge q is placed at the centre of a cube of side l. The electric flux coming out from each face of the cube is:",
        "options": [
          "(a) q / ε₀",
          "(b) q / (6 ε₀)",
          "(c) q / (3 ε₀)",
          "(d) q / (24 ε₀)"
        ],
        "answer": "(b) q / (6 ε₀)",
        "explanation": "By Gauss's theorem, total flux through all 6 faces of the cube is Φ_total = q / ε₀. Due to symmetry, the flux passing through each of the 6 identical faces is Φ_face = (1/6) * (q / ε₀) = q / (6ε₀)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Two parallel infinite plane sheets of charge densities +σ and -σ are placed in air. The electric field in the region between the sheets is:",
        "options": [
          "(a) σ / ε₀",
          "(b) σ / (2ε₀)",
          "(c) 2σ / ε₀",
          "(d) Zero"
        ],
        "answer": "(a) σ / ε₀",
        "explanation": "The electric field due to +σ is E1 = σ/(2ε₀) directed away from the positive sheet. The field due to -σ is E2 = σ/(2ε₀) directed towards the negative sheet. Between the sheets, both fields point in the same direction, so E_net = E1 + E2 = σ/(2ε₀) + σ/(2ε₀) = σ / ε₀."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following statements about electric dipole in a non-uniform electric field is correct?",
        "options": [
          "(a) It experiences only a net torque",
          "(b) It experiences only a net force",
          "(c) It experiences both a net force and a net torque",
          "(d) It experiences neither a force nor a torque"
        ],
        "answer": "(c) It experiences both a net force and a net torque",
        "explanation": "In a non-uniform electric field, the electric field strength at the location of +q is different from that at -q, resulting in unequal forces on the two charges (F_net ≠ 0). In general, these forces also form a couple unless aligned parallel/antiparallel to the field gradient, producing a net torque (τ ≠ 0)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If the electric flux entering and leaving a closed surface are Φ1 and Φ2 respectively, the electric charge enclosed within the surface is:",
        "options": [
          "(a) (Φ2 - Φ1) ε₀",
          "(b) (Φ1 + Φ2) ε₀",
          "(c) (Φ2 - Φ1) / ε₀",
          "(d) (Φ1 + Φ2) / ε₀"
        ],
        "answer": "(a) (Φ2 - Φ1) ε₀",
        "explanation": "Incoming flux is taken as negative (-Φ1) and outgoing flux as positive (+Φ2). Net flux Φ_net = Φ2 - Φ1. By Gauss's Law, Φ_net = q_enclosed / ε₀ => q_enclosed = (Φ2 - Φ1) ε₀."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A hollow insulated conducting sphere of radius 0.2 m is given a charge of 4 μC. The electric field at a distance of 0.1 m from the centre of the sphere is:",
        "options": [
          "(a) 9 × 10⁵ N/C",
          "(b) 18 × 10⁵ N/C",
          "(c) Zero",
          "(d) 4.5 × 10⁵ N/C"
        ],
        "answer": "(c) Zero",
        "explanation": "For any charged conducting hollow sphere, the entire charge resides on the outer surface. The electric field inside the conductor (r = 0.1 m < R = 0.2 m) is identically zero by Gauss's Law (q_enclosed = 0)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "When a dielectric medium of dielectric constant K is introduced between two charges, the electrostatic force between them:",
        "options": [
          "(a) increases by factor K",
          "(b) decreases by factor K",
          "(c) remains unchanged",
          "(d) increases by factor K²"
        ],
        "answer": "(b) decreases by factor K",
        "explanation": "Electrostatic force in a dielectric medium is F_med = F_vac / K. Since K > 1 for all dielectric materials, the force decreases by a factor of K."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An electron and a proton are released from rest in a uniform electric field. The ratio of their accelerations (a_e / a_p) is:",
        "options": [
          "(a) 1",
          "(b) m_p / m_e",
          "(c) m_e / m_p",
          "(d) √(m_p / m_e)"
        ],
        "answer": "(b) m_p / m_e",
        "explanation": "Electric force on charge q is F = qE. For both electron and proton, |q| = e, so F = eE. Acceleration a = F / m = eE / m. Therefore, a_e / a_p = (eE / m_e) / (eE / m_p) = m_p / m_e."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A point charge +Q is placed at the centre of a hemisphere of radius R. The electric flux through the curved surface of the hemisphere is:",
        "options": [
          "(a) Q / (2ε₀)",
          "(b) Q / ε₀",
          "(c) Q / (4ε₀)",
          "(d) Zero"
        ],
        "answer": "(a) Q / (2ε₀)",
        "explanation": "A complete sphere enclosing charge Q has total flux Q / ε₀. Symmetrically, half the flux passes through the hemispherical surface, so Φ = Q / (2ε₀)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A charge q is placed at the corner of a cube of edge length a. The total electric flux through the cube is:",
        "options": [
          "(a) q / ε₀",
          "(b) q / (8ε₀)",
          "(c) q / (6ε₀)",
          "(d) q / (24ε₀)"
        ],
        "answer": "(b) q / (8ε₀)",
        "explanation": "To symmetrically enclose a charge placed at a corner, 8 identical cubes sharing that corner are required. Thus, total flux through one cube is (1/8) of the total flux, i.e., q / (8ε₀)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The work done in rotating an electric dipole of moment p in a uniform electric field E from stable equilibrium (θ = 0°) to unstable equilibrium (θ = 180°) is:",
        "options": [
          "(a) pE",
          "(b) -pE",
          "(c) 2pE",
          "(d) Zero"
        ],
        "answer": "(c) 2pE",
        "explanation": "Work done W = -pE (cos θ2 - cos θ1). Here θ1 = 0° and θ2 = 180°. W = -pE (cos 180° - cos 0°) = -pE (-1 - 1) = -pE (-2) = +2pE."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which of the following charge values is NOT possible according to the principle of quantization of charge?",
        "options": [
          "(a) 1.6 × 10⁻¹⁹ C",
          "(b) 3.2 × 10⁻¹⁹ C",
          "(c) 2.4 × 10⁻¹⁹ C",
          "(d) 4.8 × 10⁻¹⁹ C"
        ],
        "answer": "(c) 2.4 × 10⁻¹⁹ C",
        "explanation": "By quantization of charge, q = ne where n must be an integer. For q = 2.4 × 10⁻¹⁹ C: n = (2.4 × 10⁻¹⁹) / (1.6 × 10⁻¹⁹) = 1.5, which is not an integer. Hence, this charge cannot exist."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The electric field at a distance r from an infinitely long straight wire carrying linear charge density λ is proportional to:",
        "options": [
          "(a) r",
          "(b) 1 / r",
          "(c) 1 / r²",
          "(d) 1 / r³"
        ],
        "answer": "(b) 1 / r",
        "explanation": "Using Gauss's law for an infinite line charge, the electric field is E = λ / (2πε₀ r). Therefore, E ∝ 1/r."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Electric field lines around an isolated negative point charge are:",
        "options": [
          "(a) circular loops",
          "(b) straight lines radially outwards",
          "(c) straight lines radially inwards",
          "(d) elliptical paths"
        ],
        "answer": "(c) straight lines radially inwards",
        "explanation": "Electric field lines start from positive charges and end at negative charges. For an isolated negative charge, the field lines come from infinity and terminate on the charge, pointing radially inwards."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A soap bubble is given a negative charge. Its radius will:",
        "options": [
          "(a) increase",
          "(b) decrease",
          "(c) remain constant",
          "(d) fluctuate"
        ],
        "answer": "(a) increase",
        "explanation": "Like charges repel each other. When negative charge is distributed over the surface of the soap bubble, mutual electrostatic repulsion between charge elements acts radially outward, causing the bubble radius to expand."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Two charges +q and -q are placed at points (0, 0, -a) and (0, 0, +a). The electric field at the origin (0, 0, 0) is directed along:",
        "options": [
          "(a) +z axis",
          "(b) -z axis",
          "(c) +x axis",
          "(d) -y axis"
        ],
        "answer": "(a) +z axis",
        "explanation": "+q is at z = -a, so its field at the origin points away from it, along +z direction. -q is at z = +a, so its field points towards it, also along +z direction. Both fields add up along the +z axis."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Electrostatic field lines do not form any closed loops.\nReason (R): Electrostatic field is conservative in nature and work done in moving a charge along a closed path is zero.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Assertion is true: Electrostatic field lines originate on positive charges and terminate on negative charges; they never loop back. Reason is true: The electrostatic force is conservative, meaning ∮ E · dl = 0. If field lines formed closed loops, the line integral along a loop would be non-zero, violating the conservative nature."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): If the electric flux through a closed surface is zero, the electric field must be zero everywhere on the surface.\nReason (R): Gauss's law states that Φ = ∮ E · dA = q_enclosed / ε₀.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(d) A is false but R is true.",
        "explanation": "Assertion is false: Zero total flux only implies that the net enclosed charge is zero (q_enclosed = 0). The electric field E on the surface can be non-zero if incoming flux equals outgoing flux (e.g., placing an external charge near a closed box). Reason is true: Gauss's law is correctly stated."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): A sensitive electronic device can be protected from external electric fields by enclosing it in a hollow metallic conductor.\nReason (R): The electric field inside the cavity of any charged or uncharged conductor in electrostatic equilibrium is zero.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both Assertion and Reason are true, and R correctly explains A. This phenomenon is known as Electrostatic Shielding: free charges on the metallic surface redistribute such that the interior cavity remains completely field-free."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The electric field due to an electric dipole falls off as 1/r³ at large distances, whereas that due to a single point charge falls off as 1/r².\nReason (R): An electric dipole consists of two equal and opposite charges whose fields tend to cancel each other at large distances.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both statements are true. Since the net charge of a dipole is zero, at large distances (r >> 2a) the fields of the positive and negative charges almost cancel each other, leaving a residual field that drops off faster (∝ 1/r³) than a single monopole field (∝ 1/r²)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Coulomb force between two charges is an action-reaction pair.\nReason (R): The electrostatic force exerted by charge q1 on q2 is equal in magnitude and opposite in direction to the force exerted by q2 on q1 along the line joining them.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Coulomb's law obeys Newton's third law in vector form: F12 = -F21. The forces are mutual, equal in magnitude, opposite in direction, and act along the central line joining the two point charges."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Coulomb's law in vector form and write two limitations of Coulomb's law.",
        "answer": "Coulomb's Law in vector form and limitations",
        "explanation": "1. Vector Form: The electrostatic force between two point charges q1 and q2 separated by position vector r12 is given by: F12 = [1 / (4πε₀)] * [q1 q2 / |r12|²] * r̂12, where r̂12 is the unit vector directed from q2 towards q1.\n2. Limitations: (i) It is valid only for stationary (static) charges. (ii) It applies strictly to point charges (charges whose linear dimensions are negligible compared to separation distance r)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Define electric flux. State its SI unit and dimensional formula. Is it a scalar or vector quantity?",
        "answer": "Definition, SI unit, and dimensions of electric flux",
        "explanation": "1. Definition: Electric flux (Φ) through an area is the total number of electric field lines crossing normally through that surface. Mathematically: Φ = ∮ E · dA = E A cos θ.\n2. SI Unit: N·m²·C⁻¹ or V·m.\n3. Dimensional Formula: [M L³ T⁻³ A⁻¹].\n4. Nature: It is a scalar quantity, defined as the scalar (dot) product of electric field vector and area vector."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Two point charges +4 μC and -1 μC are separated by a distance of 30 cm in air. At what point on the line joining the two charges is the net electric field zero?",
        "answer": "Distance where net electric field is zero",
        "explanation": "Let the charges be q1 = +4 μC at A and q2 = -1 μC at B, with separation AB = 30 cm = 0.3 m.\nSince the charges have opposite signs, the null point P cannot lie between them. It must lie on the line joining them outside, closer to the smaller magnitude charge (-1 μC).\nLet P be at distance x from charge q2 (-1 μC), so distance from q1 (+4 μC) is (0.3 + x).\nFor net electric field to be zero at P: |E1| = |E2|\n=> k * |q1| / (0.3 + x)² = k * |q2| / x²\n=> 4 / (0.3 + x)² = 1 / x²\nTaking square root on both sides: 2 / (0.3 + x) = 1 / x\n=> 2x = 0.3 + x => x = 0.3 m = 30 cm.\nTherefore, the net electric field is zero at a point 30 cm away from the -1 μC charge on the side opposite to the +4 μC charge."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Plot a graph showing the variation of electric field E with distance r from the centre of a uniformly charged thin spherical shell of radius R.",
        "answer": "Variation of E with r for a spherical shell",
        "explanation": "1. Inside the shell (r < R): E = 0 (horizontal line along the r-axis).\n2. At the surface (r = R): E reaches maximum value E_max = q / (4πε₀ R²).\n3. Outside the shell (r > R): E ∝ 1/r², dropping off non-linearly towards zero as r -> ∞.\nThe graph shows E = 0 for 0 ≤ r < R, a step jump to maximum at r = R, and a smooth decreasing curve proportional to 1/r² for r > R."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "An electric dipole of length 4 cm, when placed with its axis making an angle of 60° with a uniform electric field, experiences a torque of 4√3 N·m. If the dipole has charges ±8 nC, calculate: (i) magnitude of the electric field, (ii) potential energy of the dipole.",
        "answer": "(i) E = 2.5 × 10⁷ N/C, (ii) U = -4 J",
        "explanation": "Given: 2a = 4 cm = 0.04 m, q = 8 nC = 8 × 10⁻⁹ C, θ = 60°, τ = 4√3 N·m.\nDipole moment p = q * (2a) = (8 × 10⁻⁹ C) * (0.04 m) = 3.2 × 10⁻¹⁰ C·m.\n(i) Magnitude of electric field:\nτ = p E sin θ => 4√3 = (3.2 × 10⁻¹⁰) * E * sin 60°\n=> 4√3 = 3.2 × 10⁻¹⁰ * E * (√3 / 2) = 1.6 × 10⁻¹⁰ * √3 * E\n=> E = 4 / (1.6 × 10⁻¹⁰) = 2.5 × 10¹⁰ N/C.\n(ii) Potential energy of dipole:\nU = -p E cos θ = - (3.2 × 10⁻¹⁰) * (2.5 × 10¹⁰) * cos 60°\nU = - 8.0 * 0.5 = -4.0 J."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Why do electric field lines never cross each other? Can two equipotential surfaces intersect?",
        "answer": "Reason why field lines and equipotential surfaces never intersect",
        "explanation": "1. Field lines: If two electric field lines intersect at a point, we can draw two tangents at that point of intersection. This would mean two different directions of resultant electric field at that single point, which is physically impossible.\n2. Equipotential surfaces: If two equipotential surfaces intersect, there would be two different values of electric potential at the line of intersection, which is impossible since potential at any point in an electrostatic field is unique."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Using Gauss's law, deduce an expression for the electric field due to an infinitely long straight wire of linear charge density λ.",
        "answer": "Derivation of E = λ / (2πε₀ r)",
        "explanation": "1. Consider an infinitely long thin wire with linear charge density λ. To find E at distance r, choose a coaxial cylindrical Gaussian surface of radius r and length l.\n2. By symmetry, E is directed radially outward everywhere on the curved surface, and dA is also normal to the surface, so E || dA. For the two flat end caps, E ⊥ dA, so flux through end caps is zero (cos 90° = 0).\n3. Total electric flux: Φ = ∮ E · dA = E * (Curved surface area) = E * (2πrl).\n4. By Gauss's Law: Φ = q_enclosed / ε₀ = (λl) / ε₀.\n5. Equating: E * (2πrl) = (λl) / ε₀ => E = λ / (2πε₀ r). In vector form: E = [λ / (2πε₀ r)] r̂."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "A particle of mass m and charge -q enters a region between two charged parallel plates with initial horizontal velocity vx along the x-axis. The plates have length L and a uniform electric field E exists between them. Find the vertical deflection of the particle as it leaves the plates.",
        "answer": "Vertical deflection y = (q E L²) / (2 m vx²)",
        "explanation": "1. Along x-axis: There is no electric field (Ex = 0), so velocity remains constant: vx = L / t => time spent between plates t = L / vx.\n2. Along y-axis: Acceleration ay = F/m = qE / m (directed toward positive plate).\nInitial vertical velocity uy = 0.\n3. Using kinematic equation: y = uy*t + 1/2 ay t² = 0 + 1/2 (qE/m) (L/vx)²\n=> Vertical deflection y = (q E L²) / (2 m vx²)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "State the principle of superposition of electrostatic forces. Write the formula for the net force on charge q0 due to a system of discrete charges q1, q2, ..., qn.",
        "answer": "Superposition principle and net force expression",
        "explanation": "1. Principle: According to the principle of superposition, the total electrostatic force on any given charge due to a collection of other charges is the vector sum of the individual forces exerted by each charge independently. The force between any pair of charges is unaffected by the presence of other charges.\n2. Mathematical Formula:\nF₀ = F₀₁ + F₀₂ + ... + F₀ₙ\nF₀ = (1 / 4πε₀) * ∑ [i=1 to n] [ (q₀ qᵢ / |r₀ - rᵢ|³) * (r₀ - rᵢ) ], where r₀ and rᵢ are the position vectors of q₀ and qᵢ."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is the net electric flux through a cube of side 20 cm oriented so that its faces are parallel to the coordinate planes, if an electric field is given by E = 500x î N/C?",
        "answer": "Net flux Φ = 4 N·m²/C",
        "explanation": "Given E = 500x î N/C. The field only has an x-component, so flux through y-z faces alone contributes.\n- Left face at x = 0: E = 500(0) = 0, so Φ_left = 0.\n- Right face at x = 0.2 m: Area vector points in +î direction, A = (0.2)² = 0.04 m².\nElectric field at right face: E = 500 * (0.2) = 100 î N/C.\nFlux through right face: Φ_right = E · A = 100 * 0.04 = 4.0 N·m²/C.\n- Top, bottom, front, and back faces are parallel to E, so flux through them is zero.\nTotal net flux Φ_net = 4.0 N·m²/C."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Define electric dipole moment and state its SI unit.\n(b) Derive an expression for the electric field at a point on the equatorial plane of an electric dipole of dipole length 2a at a distance r from its centre.\n(c) What is the direction of this electric field relative to the dipole moment vector?",
        "answer": "Derivation of E_equatorial = kp / (r² + a²)^(3/2)",
        "explanation": "Marking Scheme:\n(a) Definition & SI unit (1 mark):\n- Electric dipole moment is defined as the product of the magnitude of either charge and the separation distance between them: p = q * (2a). It is a vector directed from -q to +q.\n- SI unit: Coulomb-metre (C·m).\n\n(b) Derivation (3 marks):\n- Let an electric dipole have charges -q at A(-a, 0) and +q at B(+a, 0). Consider a point P on the equatorial axis at distance r from centre O.\n- Distance of P from each charge: AP = BP = √(r² + a²).\n- Field due to +q: E₊ = [1 / (4πε₀)] * [q / (r² + a²)] directed along BP produced.\n- Field due to -q: E₋ = [1 / (4πε₀)] * [q / (r² + a²)] directed along PA.\n- Resolving E₊ and E₋ into components:\n  * Vertical components: E₊ sin θ and E₋ sin θ are equal and opposite, hence they cancel out.\n  * Horizontal components: Both point in the direction antiparallel to p (-î):\n    E_net = E₊ cos θ + E₋ cos θ = 2 E₊ cos θ\n- From geometry, cos θ = a / √(r² + a²).\n- Substituting:\n  E_net = 2 * [q / (4πε₀(r² + a²))] * [a / (r² + a²)^(1/2)]\n  E_net = [q * 2a] / [4πε₀ (r² + a²)^(3/2)] = p / [4πε₀ (r² + a²)^(3/2)].\n- For short dipole (r >> a): E_equatorial = p / (4πε₀ r³).\n\n(c) Direction (1 mark):\n- The equatorial electric field is oriented antiparallel to the dipole moment vector p."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) State Gauss's Law in electrostatics.\n(b) Using Gauss's law, prove that the electric field at a point due to a uniformly charged infinite plane sheet with surface charge density σ is independent of the distance of the point from the sheet.\n(c) Two large, thin metal plates are placed parallel and close to each other with face charge densities +σ and -σ. What is the electric field in: (i) outer region I, (ii) inner region II, (iii) outer region III?",
        "answer": "Gauss's law, derivation of E = σ / (2ε₀), and field between two oppositely charged plates",
        "explanation": "Marking Scheme:\n(a) Statement of Gauss's Law (1 mark):\n- The total electric flux through any closed surface is equal to 1/ε₀ times the net charge enclosed inside that surface: Φ = ∮ E · dA = q_enclosed / ε₀.\n\n(b) Derivation for infinite plane sheet (2.5 marks):\n- Consider a flat thin sheet of infinite area carrying uniform surface charge density σ.\n- Choose a cylindrical Gaussian pillbox of cross-sectional area A and length 2r penetrating perpendicularly through the sheet, with ends at equal distance r on either side.\n- By symmetry, E is perpendicular to the sheet everywhere. For the curved cylindrical surface, E is parallel to the surface (E ⊥ dA), so flux through curved part is zero.\n- For both circular end faces, E is parallel to outward area vector dA, so flux = 2 * E * A.\n- Charge enclosed inside cylinder = σ * A.\n- By Gauss's Law: 2 E A = (σ A) / ε₀ => E = σ / (2ε₀).\n- Since the expression contains no distance r, the electric field is uniform and independent of distance.\n\n(c) Two oppositely charged plates (1.5 marks):\n- In outer region I (to the left): E_I = σ/(2ε₀) - σ/(2ε₀) = 0.\n- In inner region II (between plates): E_II = σ/(2ε₀) + σ/(2ε₀) = σ / ε₀ (directed from positive to negative plate).\n- In outer region III (to the right): E_III = σ/(2ε₀) - σ/(2ε₀) = 0."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Derive an expression for the electric field at an axial point of an electric dipole of length 2a at distance r from the centre.\n(b) What is the torque experienced by this dipole when placed in a uniform electric field E at an angle θ with it?\n(c) Find the work done in rotating the dipole from θ = 0° to θ = 90°.",
        "answer": "E_axial derivation, torque derivation, and work calculation",
        "explanation": "Marking Scheme:\n(a) Axial field derivation (2.5 marks):\n- Charges -q at A(-a) and +q at B(+a). Point P is on the axis at distance r from centre O.\n- Distance AP = r + a, BP = r - a.\n- Field due to +q: E₊ = [1 / (4πε₀)] * [q / (r - a)²] (along OP directed away).\n- Field due to -q: E₋ = [1 / (4πε₀)] * [q / (r + a)²] (towards dipole).\n- Net field E = E₊ - E₋ = [q / (4πε₀)] * [ 1/(r - a)² - 1/(r + a)² ]\n  = [q / (4πε₀)] * [ ((r + a)² - (r - a)²) / (r² - a²)² ]\n  = [q / (4πε₀)] * [ 4ra / (r² - a²)² ] = [2 * (q * 2a) * r] / [4πε₀ (r² - a²)²] = [2pr] / [4πε₀ (r² - a²)²].\n- For a short dipole (r >> a): E_axial = [2p] / [4πε₀ r³] along the direction of p.\n\n(b) Torque derivation (1.5 marks):\n- Forces on +q and -q are F = +qE and F = -qE (equal and opposite, collinearity offset by perpendicular distance 2a sin θ).\n- Net force F_net = 0.\n- Torque τ = Force × perpendicular distance = (qE) × (2a sin θ) = (q * 2a) E sin θ = pE sin θ.\n- In vector form: τ = p × E.\n\n(c) Work done (1 mark):\n- W = -pE (cos 90° - cos 0°) = -pE (0 - 1) = +pE."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "Using Gauss's law, find the electric field intensity due to a uniformly charged thin spherical shell of radius R and surface charge density σ at a point:\n(i) outside the shell (r > R),\n(ii) on the surface of the shell (r = R),\n(iii) inside the shell (r < R).\nDraw the variation of E versus distance r from the centre.",
        "answer": "Electric field due to spherical shell at r > R, r = R, and r < R with graph",
        "explanation": "Marking Scheme:\n(i) Outside the shell (r > R) (1.5 marks):\n- Choose a concentric spherical Gaussian surface of radius r > R.\n- By symmetry, E is directed radially outward and has constant magnitude on this surface.\n- Flux Φ = ∮ E · dA = E (4πr²).\n- Enclosed charge q = σ (4πR²).\n- By Gauss's Law: E (4πr²) = q / ε₀ => E = q / (4πε₀ r²) = [σ R²] / [ε₀ r²].\n\n(ii) On the surface (r = R) (1 mark):\n- Putting r = R: E = q / (4πε₀ R²) = σ / ε₀.\n\n(iii) Inside the shell (r < R) (1.5 marks):\n- Choose a concentric spherical Gaussian surface of radius r < R.\n- Since the entire charge resides on the outer surface of the shell, q_enclosed = 0.\n- By Gauss's Law: E (4πr²) = 0 => E = 0.\n\nGraph (1 mark):\n- E = 0 from r = 0 to r < R.\n- Sudden jump to peak value E = σ/ε₀ at r = R.\n- Smooth decline obeying inverse square law E ∝ 1/r² for r > R."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Electrostatic Shielding\nWhen an empty conducting hollow body is placed in an electric field, the free electrons inside the metal redistribute themselves on the outer surface such that the internal electric field created by them exactly cancels the external applied electric field. Consequently, the net electric field inside the conductor cavity is zero. This phenomenon is called electrostatic shielding. Because of this, delicate instruments can be protected from external stray electric fields.\n(i) What is the electric field inside a hollow charged conductor?\n(ii) Why is it safer to sit inside a car during a thunderstorm accompanied by lightning rather than under a tree?\n(iii) A metal box is placed in an external uniform electric field. What is the value of electric potential at any point inside the box if the potential of the box surface is 10 V?\n(iv) State one practical application of electrostatic shielding.",
        "answer": "Solutions to Case Study on Electrostatic Shielding",
        "explanation": "(i) The net electric field inside the cavity of a hollow charged conductor is zero (E = 0).\n(ii) The metallic body of the car acts as a Faraday cage (electrostatic shield). During lightning, the lightning charge safely flows along the outer surface of the car to the ground, keeping the interior field-free and the passengers safe.\n(iii) Since E = -dV/dr and E = 0 inside the conductor, dV/dr = 0, meaning potential V is constant throughout the volume of the conductor and equal to its value on the surface. Hence, V = 10 V everywhere inside the box.\n(iv) Practical applications: (a) Coaxial cables use an outer grounded metallic shield to prevent external electromagnetic interference. (b) Sensitive laboratory measuring devices (like electrometers) are enclosed in metal cages."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) An electric dipole consists of two charges ±2 μC separated by 2 mm. It is placed in an electric field of 10⁵ N/C. Calculate:\n(i) Maximum torque experienced by the dipole.\n(ii) Work done in turning it through 180° from the position of stable equilibrium.\n(b) Show that the electric field at an equatorial point of a dipole is opposite to the dipole moment vector.",
        "answer": "(i) τ_max = 4 × 10⁻⁴ N·m, (ii) W = 8 × 10⁻⁴ J; vector direction proof",
        "explanation": "(a) (i) q = 2 μC = 2 × 10⁻⁶ C, 2a = 2 mm = 2 × 10⁻³ m, E = 10⁵ N/C.\nDipole moment p = q * 2a = (2 × 10⁻⁶) * (2 × 10⁻³) = 4 × 10⁻⁹ C·m.\nMaximum torque occurs at θ = 90°: τ_max = p E = (4 × 10⁻⁹) * (10⁵) = 4 × 10⁻⁴ N·m.\n(ii) Work done in turning from θ1 = 0° (stable equilibrium) to θ2 = 180°:\nW = -pE (cos 180° - cos 0°) = -pE (-1 - 1) = 2 p E = 2 * (4 × 10⁻⁴) = 8 × 10⁻⁴ J.\n(b) At an equatorial point P, the vertical components of E₊ and E₋ cancel each other, while their horizontal components add up in the direction from +q to -q. Since the electric dipole moment p is defined from -q to +q, the resultant field E_equatorial = - [p / (4πε₀ r³)] p̂, which is directly opposite to the dipole moment."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2019 (4 Marks)",
        "question": "A spherical Gaussian surface encloses a point charge q at its centre. How will the electric flux be affected if:\n(i) the sphere is replaced by a cube of the same volume?\n(ii) a second identical charge is placed inside the surface?\n(iii) the charge is moved away from the centre to another point inside the sphere?\n(iv) a dielectric medium of dielectric constant K = 4 fills the space inside the surface?",
        "answer": "Flux analysis under 4 different conditions",
        "explanation": "(i) The flux remains unchanged (Φ = q/ε₀) because Gauss's law depends only on the net enclosed charge, not on the geometric shape of the enclosing surface.\n(ii) The flux will double (Φ' = 2q/ε₀) because net enclosed charge becomes q + q = 2q.\n(iii) The flux remains unchanged because the charge is still enclosed completely within the surface.\n(iv) The flux is reduced to 1/4th (Φ' = q / (K ε₀) = q / (4ε₀)) because permittivity of the medium is ε = K ε₀."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2018 (5 Marks)",
        "question": "(a) Define electric field intensity. Write its SI unit.\n(b) Four charges +q, +q, -q, -q are placed respectively at the corners A, B, C, and D of a square of side a. Find the magnitude and direction of the electric field at the centre O of the square.",
        "answer": "Electric field intensity definition and numerical at square centre",
        "explanation": "(a) Electric field intensity at a point is the electrostatic force experienced per unit positive test charge placed at that point: E = lim(q₀->0) F / q₀. SI unit: N/C or V/m.\n(b) Let the vertices of the square of side a be A(+q), B(+q), C(-q), D(-q) in cyclic order.\nDistance of centre O from each corner: r = a / √2. Thus r² = a² / 2.\nField magnitudes due to each charge: E₀ = k q / r² = k q / (a²/2) = 2kq / a².\n- At O, field due to +q at A is directed towards C (along OC). Field due to -q at C is also directed towards C (along OC). Total field along OC = E_A + E_C = 2 E₀ = 4kq / a².\n- Field due to +q at B is directed towards D (along OD). Field due to -q at D is also directed towards D (along OD). Total field along OD = E_B + E_D = 2 E₀ = 4kq / a².\n- The vectors along OC and along OD are mutually perpendicular (angle = 90°).\n- Resultant electric field E_net = √( (4kq/a²)² + (4kq/a²)² ) = (4kq / a²) * √2 = (4√2 k q) / a².\nSubstituting k = 1/(4πε₀): E_net = (√2 q) / (πε₀ a²), directed parallel to AD (downwards)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the conditions under which an electric dipole is in:\n(i) stable equilibrium,\n(ii) unstable equilibrium in a uniform electric field.\n(b) An electric dipole of length 2 cm is placed with its axis making an angle of 30° to a uniform electric field of 10⁵ N/C. If it experiences a torque of 10√3 N·m, calculate:\n(i) the magnitude of charge on the dipole,\n(ii) potential energy of the dipole in this position.",
        "answer": "Equilibrium conditions and numerical for charge and potential energy",
        "explanation": "(a) (i) Stable equilibrium: When θ = 0° (dipole moment p is aligned parallel to E). Here τ = 0 and potential energy is minimum: U = -pE.\n(ii) Unstable equilibrium: When θ = 180° (dipole moment p is antiparallel to E). Here τ = 0 and potential energy is maximum: U = +pE.\n(b) (i) Given: 2a = 2 cm = 0.02 m, θ = 30°, E = 10⁵ N/C, τ = 10√3 N·m.\nτ = p E sin θ => 10√3 = p * (10⁵) * sin 30° = p * 10⁵ * 0.5 = 5 × 10⁴ p\n=> p = (10√3) / (5 × 10⁴) = 2√3 × 10⁻⁴ C·m.\nSince p = q * (2a):\nq = p / (2a) = (2√3 × 10⁻⁴) / 0.02 = 100 * √3 × 10⁻⁴ = √3 × 10⁻² C = 1.732 × 10⁻² C = 17.32 mC.\n(ii) Potential energy U = -p E cos θ = - (2√3 × 10⁻⁴) * (10⁵) * cos 30°\n= - 20√3 * (√3 / 2) = - 20 * 3 / 2 = -30 J."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2016 (5 Marks)",
        "question": "(a) Using Gauss's theorem, derive an expression for the electric field at a distance r from an infinitely long straight uniformly charged wire.\n(b) An electron is revolving around an infinitely long cylindrical wire carrying uniform linear charge density λ = 2 × 10⁻⁸ C/m in a circular orbit of radius 0.1 m. Calculate the kinetic energy and velocity of the electron (mass of electron = 9.1 × 10⁻³¹ kg).",
        "answer": "Gauss derivation and electron orbiting wire numerical",
        "explanation": "(a) [See Question 37 for full step-by-step derivation]: E = λ / (2πε₀ r).\n(b) The inward electrostatic force provides the necessary centripetal force for circular motion:\nF_e = F_c => e * E = m v² / r\nSubstitute E = λ / (2πε₀ r):\ne * [λ / (2πε₀ r)] = m v² / r\n=> m v² = (e λ) / (2πε₀) = 2 * [1 / (4πε₀)] * e * λ\n=> Kinetic Energy KE = 1/2 m v² = [1 / (4πε₀)] * e * λ\nKE = (9 × 10⁹) * (1.6 × 10⁻¹⁹ C) * (2 × 10⁻⁸ C/m) = 2.88 × 10⁻¹⁷ J.\nIn electron-volts: KE = (2.88 × 10⁻¹⁷) / (1.6 × 10⁻¹⁹) = 180 eV.\nVelocity v = √( 2 * KE / m ) = √( 2 * 2.88 × 10⁻¹⁷ / (9.1 × 10⁻³¹) ) = √( 5.76 × 10¹⁴ / 9.1 ) ≈ √(6.33 × 10¹⁴) ≈ 2.52 × 10⁷ m/s."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "unit_num": 1,
      "title": "Electrostatic Potential and Capacitance",
      "unit_title": "Electrostatics",
      "weightage_unit": "16 Marks (Units 1 & 2)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The work done in moving a test charge q over an equipotential surface of potential V from point A to point B is:",
        "options": [
          "(a) q V",
          "(b) 2 q V",
          "(c) Zero",
          "(d) q / V"
        ],
        "answer": "(c) Zero",
        "explanation": "Work done is given by W = q * ΔV = q * (V_B - V_A). On an equipotential surface, V_A = V_B = V, so ΔV = 0. Therefore, W = 0."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A parallel plate capacitor is charged by a battery and then disconnected from it. A dielectric slab of dielectric constant K is then inserted between its plates. The potential difference across the plates:",
        "options": [
          "(a) increases by factor K",
          "(b) decreases by factor K",
          "(c) remains unchanged",
          "(d) increases by factor K²"
        ],
        "answer": "(b) decreases by factor K",
        "explanation": "When disconnected from the battery, the charge Q remains constant. The capacitance increases to C' = K*C. The potential difference becomes V' = Q / C' = Q / (KC) = V / K. Thus, it decreases by a factor of K."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The electric potential at an equatorial point of an electric dipole of dipole moment p at distance r from its centre is:",
        "options": [
          "(a) kp / r²",
          "(b) kp / r",
          "(c) Zero",
          "(d) 2kp / r²"
        ],
        "answer": "(c) Zero",
        "explanation": "Any point on the equatorial plane is equidistant from +q and -q. The potential due to +q is +kq/d and due to -q is -kq/d. Their sum is V = kq/d - kq/d = 0."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Three capacitors of capacitances 2 μF, 3 μF, and 6 μF are connected in series. The equivalent capacitance is:",
        "options": [
          "(a) 11 μF",
          "(b) 1 μF",
          "(c) 0.5 μF",
          "(d) 2 μF"
        ],
        "answer": "(b) 1 μF",
        "explanation": "1/C_eq = 1/C1 + 1/C2 + 1/C3 = 1/2 + 1/3 + 1/6 = (3 + 2 + 1) / 6 = 6/6 = 1 μF⁻¹. Therefore, C_eq = 1 μF."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The electric field E and electric potential V in a region are related by:",
        "options": [
          "(a) E = dV/dr",
          "(b) E = -dV/dr",
          "(c) V = -dE/dr",
          "(d) V = dE/dr"
        ],
        "answer": "(b) E = -dV/dr",
        "explanation": "Electric field is the negative potential gradient: E = -dV/dr. The negative sign signifies that electric field points in the direction of steepest decrease of electric potential."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Equipotential surfaces around an isolated point positive charge are:",
        "options": [
          "(a) concentric spheres",
          "(b) coaxial cylinders",
          "(c) parallel planes",
          "(d) hyperboloids"
        ],
        "answer": "(a) concentric spheres",
        "explanation": "For a point charge, potential V = kq/r depends only on distance r. All points at the same radius r have the same potential, forming spherical surfaces concentric with the charge."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "A capacitor of 20 μF is charged to 500 V. The energy stored in the capacitor is:",
        "options": [
          "(a) 5 J",
          "(b) 2.5 J",
          "(c) 10 J",
          "(d) 0.05 J"
        ],
        "answer": "(b) 2.5 J",
        "explanation": "Energy U = 1/2 C V² = 0.5 * (20 × 10⁻⁶ F) * (500 V)² = 10 × 10⁻⁶ * 250,000 = 2.5 J."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A parallel plate capacitor is connected across a battery of voltage V. While the battery remains connected, a dielectric slab (K > 1) is inserted. The energy stored in the capacitor will:",
        "options": [
          "(a) decrease by factor K",
          "(b) increase by factor K",
          "(c) remain constant",
          "(d) increase by factor K²"
        ],
        "answer": "(b) increase by factor K",
        "explanation": "With battery connected, voltage V remains constant. Capacitance increases from C to KC. Stored energy U' = 1/2 C' V² = 1/2 (KC) V² = K * (1/2 C V²) = K * U. Hence, energy increases by a factor of K."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The electrostatic potential inside a uniformly charged conducting spherical shell of radius R and potential V₀ is:",
        "options": [
          "(a) zero",
          "(b) V₀",
          "(c) V₀ / 2",
          "(d) dependent on r as 1/r"
        ],
        "answer": "(b) V₀",
        "explanation": "Since E = 0 everywhere inside the shell, dV/dr = 0, meaning potential V is constant from the centre up to the surface. Therefore, the potential at every interior point is equal to its surface value V₀."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Two charges +5 μC and -5 μC are located at (-10 cm, 0, 0) and (+10 cm, 0, 0). The electric potential at the origin (0, 0, 0) is:",
        "options": [
          "(a) 9 × 10⁴ V",
          "(b) 4.5 × 10⁴ V",
          "(c) Zero",
          "(d) -9 × 10⁴ V"
        ],
        "answer": "(c) Zero",
        "explanation": "Distance from each charge to origin is r = 10 cm = 0.1 m. Net potential V = k(q1)/r + k(q2)/r = k/r * (5 μC - 5 μC) = 0."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The dielectric constant of a metallic conductor is:",
        "options": [
          "(a) 0",
          "(b) 1",
          "(c) infinity",
          "(d) -1"
        ],
        "answer": "(c) infinity",
        "explanation": "Inside a conductor in electrostatic equilibrium, induced charges completely cancel the external electric field (E = 0). Since E_net = E₀ / K, for E_net = 0, K must approach infinity (K = ∞)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A parallel plate capacitor with plate separation d has capacitance C₀. If a metal plate of thickness d/2 is inserted between the plates, the new capacitance is:",
        "options": [
          "(a) C₀ / 2",
          "(b) 2 C₀",
          "(c) 4 C₀",
          "(d) C₀"
        ],
        "answer": "(b) 2 C₀",
        "explanation": "For a conducting slab of thickness t, capacitance is C = ε₀ A / (d - t). Here t = d/2, so C = ε₀ A / (d - d/2) = ε₀ A / (d/2) = 2 (ε₀ A / d) = 2 C₀."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The electrostatic energy density u in an electric field E in free space is:",
        "options": [
          "(a) 1/2 ε₀ E²",
          "(b) 1/2 ε₀² E",
          "(c) ε₀ E²",
          "(d) 1/2 E² / ε₀"
        ],
        "answer": "(a) 1/2 ε₀ E²",
        "explanation": "Energy density (energy per unit volume) stored in an electrostatic field is derived from U/Volume = (1/2 C V²) / (A d) = 1/2 ε₀ (V/d)² = 1/2 ε₀ E²."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "An electron is accelerated through a potential difference of 100 V. The kinetic energy gained by the electron is:",
        "options": [
          "(a) 100 J",
          "(b) 1.6 × 10⁻¹⁷ J",
          "(c) 1.6 × 10⁻¹⁹ J",
          "(d) 100 keV"
        ],
        "answer": "(b) 1.6 × 10⁻¹⁷ J",
        "explanation": "KE = q * V = (1.6 × 10⁻¹⁹ C) * (100 V) = 1.6 × 10⁻¹⁷ J (or 100 eV)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If potential V(x) = 4x² volts, the electric field at x = 1 m is:",
        "options": [
          "(a) 8 V/m along -x",
          "(b) 8 V/m along +x",
          "(c) 4 V/m along -x",
          "(d) -4 V/m along +x"
        ],
        "answer": "(a) 8 V/m along -x",
        "explanation": "E = - dV/dx = - d(4x²)/dx = -8x. At x = 1 m, E = -8 V/m, meaning magnitude is 8 V/m directed along negative x-direction."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Two capacitors of capacitances 3 μF and 6 μF are connected in series across a 12 V battery. The potential difference across the 3 μF capacitor is:",
        "options": [
          "(a) 4 V",
          "(b) 8 V",
          "(c) 6 V",
          "(d) 12 V"
        ],
        "answer": "(b) 8 V",
        "explanation": "In series, Q is same on both: V1 / V2 = C2 / C1 = 6 / 3 = 2/1. Thus V1 = [2 / (1 + 2)] * 12 V = (2/3) * 12 = 8 V."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "When two charged conductors of potentials V1 and V2 and capacitances C1 and C2 are connected by a conducting wire, the common potential is:",
        "options": [
          "(a) (C1 V1 + C2 V2) / (C1 + C2)",
          "(b) (C1 V1 - C2 V2) / (C1 + C2)",
          "(c) (C1 + C2) / (V1 + V2)",
          "(d) (V1 + V2) / 2"
        ],
        "answer": "(a) (C1 V1 + C2 V2) / (C1 + C2)",
        "explanation": "Total initial charge Q = C1 V1 + C2 V2. Total capacitance C = C1 + C2. Common potential V = Q / C = (C1 V1 + C2 V2) / (C1 + C2)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "During the sharing of charges between two capacitors, there is always:",
        "options": [
          "(a) a net gain of electrostatic energy",
          "(b) a net loss of electrostatic energy as heat and radiation",
          "(c) conservation of electrostatic potential energy",
          "(d) conservation of both charge and energy without loss"
        ],
        "answer": "(b) a net loss of electrostatic energy as heat and radiation",
        "explanation": "Charge is conserved, but electrostatic potential energy is lost as Joule heat in connecting wires and EM radiation during redistribution: ΔU = 1/2 [C1 C2 / (C1 + C2)] (V1 - V2)² > 0."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Equipotential surfaces in a uniform electric field directed along the +z axis are planes parallel to:",
        "options": [
          "(a) xy-plane",
          "(b) yz-plane",
          "(c) xz-plane",
          "(d) line x = y"
        ],
        "answer": "(a) xy-plane",
        "explanation": "Equipotential surfaces are always perpendicular to electric field lines. Since E is along z-axis, surfaces perpendicular to z-axis are parallel to the xy-plane (z = constant)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Capacitance of a spherical conductor of radius R in air is:",
        "options": [
          "(a) 4πε₀ R",
          "(b) 4πε₀ / R",
          "(c) R / (4πε₀)",
          "(d) 2πε₀ R"
        ],
        "answer": "(a) 4πε₀ R",
        "explanation": "Potential of sphere V = Q / (4πε₀ R). Since C = Q / V, C = Q / [Q / (4πε₀ R)] = 4πε₀ R."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If the distance between plates of a parallel plate capacitor is halved and dielectric constant is doubled, its capacitance:",
        "options": [
          "(a) increases 4 times",
          "(b) increases 2 times",
          "(c) remains unchanged",
          "(d) decreases 4 times"
        ],
        "answer": "(a) increases 4 times",
        "explanation": "C = K ε₀ A / d. New capacitance C' = (2K) ε₀ A / (d/2) = 4 * (K ε₀ A / d) = 4 C."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An electric dipole of moment p is placed in a uniform electric field E. The work done in rotating the dipole from stable to unstable orientation is:",
        "options": [
          "(a) 2pE",
          "(b) pE",
          "(c) -pE",
          "(d) -2pE"
        ],
        "answer": "(a) 2pE",
        "explanation": "Stable is θ = 0°, unstable is θ = 180°. W = -pE(cos 180° - cos 0°) = -pE(-1 - 1) = 2pE."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The electric potential at a point (x, y, z) is given by V = -x²y - xz³ + 4. The electric field at (1, 1, 1) is:",
        "options": [
          "(a) 3 î + ĵ + 3 k̂",
          "(b) 2 î + ĵ + 3 k̂",
          "(c) 3 î - ĵ + 3 k̂",
          "(d) -3 î - ĵ - 3 k̂"
        ],
        "answer": "(a) 3 î + ĵ + 3 k̂",
        "explanation": "Ex = - ∂V/∂x = - (-2xy - z³) = 2xy + z³. At (1,1,1), Ex = 2(1)(1) + 1³ = 3. Ey = - ∂V/∂y = - (-x²) = x² = 1. Ez = - ∂V/∂z = - (-3xz²) = 3xz² = 3(1)(1) = 3. Thus E = 3 î + ĵ + 3 k̂."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A 10 μF capacitor is charged to 50 V and connected in parallel with an uncharged 10 μF capacitor. The common voltage is:",
        "options": [
          "(a) 50 V",
          "(b) 25 V",
          "(c) 12.5 V",
          "(d) Zero"
        ],
        "answer": "(b) 25 V",
        "explanation": "V_common = (C1 V1 + C2 V2) / (C1 + C2) = (10*50 + 10*0) / (10 + 10) = 500 / 20 = 25 V."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The physical quantity with unit J/C (Joule per Coulomb) is:",
        "options": [
          "(a) Electric field",
          "(b) Electric potential",
          "(c) Electric flux",
          "(d) Capacitance"
        ],
        "answer": "(b) Electric potential",
        "explanation": "Electric potential V = W / q. Therefore, 1 Volt = 1 Joule / 1 Coulomb = 1 J/C."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Electric field is always normal to equipotential surfaces at every point.\nReason (R): If electric field had a tangential component along an equipotential surface, work would be required to move a charge between two points on the surface, violating the definition of equipotential surface.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. dW = -q E · dr = -q E dr cos θ = 0 implies cos θ = 0, so θ = 90°, proving E is perpendicular to the equipotential surface."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The capacitance of a parallel plate capacitor increases when a dielectric slab is inserted between its plates.\nReason (R): Dielectric polarisation produces an internal electric field opposite to the external applied field, reducing the net potential difference between plates for a given charge.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R is correct explanation: E_net = E₀ - E_p = E₀ / K. Since V = E_net * d, V decreases, and C = Q / V increases."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Two equipotential surfaces cannot intersect each other.\nReason (R): Electric potential at any single physical point in an electrostatic field has a unique value.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "If two equipotential surfaces intersected, the point of intersection would have two different potential values, which is impossible."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Electrostatic potential is zero at every point on the equatorial line of a dipole, but the electric field is non-zero.\nReason (R): Electric field is related to potential gradient as E = -dV/dr, so zero potential does not imply zero field gradient.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "On the equatorial plane V = 0 everywhere, but V changes as one moves perpendicular to the equatorial plane, so dV/dr ≠ 0, giving E = kp/r³ ≠ 0."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): When a conductor is charged, all excess charge resides exclusively on its outer surface.\nReason (R): Charges inside a conductor repel each other and move as far apart as possible until electrostatic equilibrium is achieved.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Since like charges repel and free electrons can move within a conductor, they push each other to the outermost boundary so that E = 0 inside."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Define an equipotential surface. Draw equipotential surfaces for: (i) an isolated positive point charge, (ii) a uniform electric field.",
        "answer": "Equipotential surface definition and sketches",
        "explanation": "1. Definition: A surface on which the electric potential is identical at every point is called an equipotential surface. Work done in moving a test charge between any two points on it is zero.\n2. Sketches: (i) For isolated positive point charge: Concentric spherical surfaces with the charge at the centre. (ii) For uniform electric field (say along z-axis): A family of equidistant parallel planes perpendicular to the field lines (parallel to xy-plane)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Establish the relation between electric field E and electrostatic potential V at a point.",
        "answer": "Derivation of E = -dV/dr",
        "explanation": "Consider two closely spaced equipotential surfaces A and B with potentials V and V - dV separated by distance dr. Work done in moving unit positive charge from B to A against electric field E is: dW = -E · dr = -E dr cos 0° = -E dr. By definition, this work done equals potential difference: dW = V_A - V_B = V - (V - dV) = dV. Therefore, -E dr = dV => E = -dV/dr."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Derive an expression for the electrostatic potential energy of a system of two point charges q1 and q2 separated by distance r12 in an external field-free space.",
        "answer": "Derivation of U = (1/4πε₀) * (q1 q2 / r12)",
        "explanation": "1. Bringing charge q1 from infinity to position r1: Since no initial electric field exists, work done W1 = 0.\n2. Potential produced by q1 at distance r12: V1 = (1 / 4πε₀) * (q1 / r12).\n3. Bringing charge q2 from infinity to position r2: Work done W2 = q2 * V1 = (1 / 4πε₀) * (q1 q2 / r12).\n4. Total work done to assemble the two-charge system is stored as potential energy: U = W1 + W2 = (1 / 4πε₀) * (q1 q2 / r12)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "A 600 pF capacitor is charged by a 200 V supply. It is then disconnected from the supply and connected to another uncharged 600 pF capacitor. How much electrostatic energy is lost in the process?",
        "answer": "Energy lost = 6 × 10⁻⁶ J",
        "explanation": "Initial energy stored in first capacitor: U_i = 1/2 C1 V1² = 0.5 * (600 × 10⁻¹² F) * (200 V)² = 1.2 × 10⁻⁵ J.\nWhen connected in parallel, common potential V = (C1 V1) / (C1 + C2) = (600 * 200) / (600 + 600) = 100 V.\nFinal energy U_f = 1/2 (C1 + C2) V² = 0.5 * (1200 × 10⁻¹²) * (100)² = 6.0 × 10⁻⁶ J.\nEnergy lost ΔU = U_i - U_f = 1.2 × 10⁻⁵ - 0.6 × 10⁻⁵ = 6.0 × 10⁻⁶ J."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "A slab of material of dielectric constant K has the same area as the plates of a parallel plate capacitor but has a thickness 3d/4, where d is the separation between plates. Find the expression for capacitance when the slab is inserted between the plates.",
        "answer": "C = [4K / (K + 3)] * C₀",
        "explanation": "Thickness of dielectric t = 3d/4. Remaining air gap thickness = d - t = d - 3d/4 = d/4.\nCapacitance formula for dielectric slab of thickness t:\nC = ε₀ A / [ (d - t) + t/K ] = ε₀ A / [ d/4 + (3d/4K) ]\nC = ε₀ A / [ (d/4) * (1 + 3/K) ] = [4 ε₀ A / d] / [ (K + 3)/K ] = [4K / (K + 3)] * (ε₀ A / d)\nSince C₀ = ε₀ A / d, C = [4K / (K + 3)] * C₀."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "State two properties of conductors in electrostatic equilibrium.",
        "answer": "Properties of conductors in electrostatics",
        "explanation": "1. The electric field inside a conductor is zero everywhere (E = 0).\n2. The electrostatic potential is constant throughout the entire volume of the conductor and equal to its value on the surface.\n3. The electric field at any point on the outer surface of a charged conductor is normal to the surface at that point: E = (σ / ε₀) n̂.\n4. Any net static charge resides entirely on the outer surface."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Derive an expression for the capacitance of a parallel plate capacitor with air as dielectric between the plates.",
        "answer": "Derivation of C = ε₀ A / d",
        "explanation": "1. Consider two parallel conducting plates each of area A separated by distance d in vacuum/air. One plate has charge +Q (surface density +σ = Q/A) and the other has -Q (surface density -σ = -Q/A).\n2. Electric field between plates: E = σ / ε₀ = Q / (ε₀ A).\n3. Potential difference between plates: V = E * d = (Q d) / (ε₀ A).\n4. By definition of capacitance: C = Q / V = Q / [ (Q d) / (ε₀ A) ] = ε₀ A / d."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Why does the electric field inside a dielectric decrease when it is placed in an external electric field?",
        "answer": "Dielectric polarisation mechanism",
        "explanation": "When an external electric field E₀ is applied across a dielectric, the positive and negative bound charges shift slightly in opposite directions, creating electric dipoles. This induced polarisation produces an internal electric field E_p oriented opposite to the external applied field. The net electric field inside the dielectric is reduced to E_net = E₀ - E_p = E₀ / K."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Three identical capacitors C1, C2, and C3 of capacitance 6 μF each are connected to a 12 V battery such that C1 and C2 are in series, and C3 is in parallel with this combination. Find: (i) equivalent capacitance, (ii) total charge drawn from the battery.",
        "answer": "(i) C_eq = 9 μF, (ii) Q_total = 108 μC",
        "explanation": "(i) C1 and C2 are in series: 1/C_s = 1/6 + 1/6 = 2/6 => C_s = 3 μF.\nC_s is in parallel with C3: C_eq = C_s + C3 = 3 μF + 6 μF = 9 μF.\n(ii) Total charge drawn from 12 V battery:\nQ_total = C_eq * V = (9 μF) * (12 V) = 108 μC."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Show that the electric field at the surface of a charged conductor is given by E = (σ / ε₀) n̂.",
        "answer": "Derivation of surface electric field E = (σ/ε₀) n̂",
        "explanation": "Construct a small cylindrical Gaussian pillbox half inside and half outside the conductor surface, with cross-sectional area dA.\n- Inside the conductor, E = 0, so flux through inner face is zero.\n- On curved surface, field is normal to surface so E ⊥ dA, flux = 0.\n- On outer face, field E is parallel to dA, flux = E * dA.\nTotal flux Φ = E * dA.\nBy Gauss's law: Φ = q_enclosed / ε₀ = (σ * dA) / ε₀.\nEquating: E * dA = (σ * dA) / ε₀ => E = σ / ε₀.\nIn vector form: E = (σ / ε₀) n̂."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Derive an expression for the electric potential at a point due to an electric dipole of dipole moment p at a distance r making an angle θ with the dipole axis.\n(b) From this general expression, deduce the values of potential at:\n(i) an axial point,\n(ii) an equatorial point.",
        "answer": "Dipole potential derivation V = (kp cos θ) / r²",
        "explanation": "Marking Scheme:\n(a) General derivation (3.5 marks):\n- Consider an electric dipole with charges -q at A(-a) and +q at B(+a) with centre at origin O.\n- Let P(r, θ) be a point at distance r from O, where line OP makes angle θ with dipole axis AB.\n- Let r1 = BP and r2 = AP.\n- By geometry/cosine rule for r >> a:\n  r1 ≈ r - a cos θ and r2 ≈ r + a cos θ.\n- Potential at P: V = V₊ + V₋ = [q / (4πε₀)] * [1/r1 - 1/r2]\n- Substitute r1 and r2:\n  V = [q / (4πε₀)] * [ (r2 - r1) / (r1 r2) ]\n  r2 - r1 ≈ 2a cos θ, and r1 r2 ≈ r².\n- Therefore: V = [q * 2a cos θ] / [4πε₀ r²] = [p cos θ] / [4πε₀ r²].\n- In vector form: V = [p · r̂] / [4πε₀ r²].\n\n(b) Special cases (1.5 marks):\n(i) On axial line: θ = 0° (or 180°), cos 0° = 1 => V_axial = ± p / (4πε₀ r²).\n(ii) On equatorial line: θ = 90°, cos 90° = 0 => V_equatorial = 0."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Derive an expression for the energy stored in a charged parallel plate capacitor of capacitance C charged to potential V.\n(b) Hence, show that the electrostatic energy density (energy per unit volume) in the electric field between plates is u = 1/2 ε₀ E².\n(c) A 900 pF capacitor is charged by a 100 V battery. Calculate the electrostatic energy stored in it.",
        "answer": "Energy derivation, energy density, and numerical calculation",
        "explanation": "Marking Scheme:\n(a) Energy stored derivation (2.5 marks):\n- Let at any instant charge on capacitor be q' and potential difference V' = q'/C.\n- Work done in adding an additional charge dq': dW = V' dq' = (q'/C) dq'.\n- Total work done in charging capacitor from 0 to Q:\n  W = ∫₀^Q (q'/C) dq' = (1/C) [q'² / 2]₀^Q = Q² / (2C).\n- Substituting Q = CV:\n  U = Q² / (2C) = 1/2 C V² = 1/2 Q V.\n\n(b) Energy density u (1.5 marks):\n- Volume between capacitor plates = Area × separation = A * d.\n- Capacitance C = ε₀ A / d, and potential difference V = E * d.\n- Energy U = 1/2 C V² = 1/2 [ε₀ A / d] * [E d]² = 1/2 ε₀ E² * (A d).\n- Energy density u = U / Volume = [1/2 ε₀ E² * (A d)] / (A d) = 1/2 ε₀ E².\n\n(c) Numerical (1 mark):\n- C = 900 pF = 900 × 10⁻¹² F = 9 × 10⁻¹⁰ F, V = 100 V.\n- U = 1/2 C V² = 0.5 * (9 × 10⁻¹⁰) * (100)² = 4.5 × 10⁻⁶ J."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain what happens when a dielectric slab of dielectric constant K is introduced between the plates of a parallel plate capacitor:\n(i) when the battery remains connected across it,\n(ii) when the battery is disconnected before introducing the slab.\nTabulate the changes in: Capacitance, Charge, Potential difference, Electric field, and Stored Energy.",
        "answer": "Complete comparison table of dielectric insertion with battery connected vs disconnected",
        "explanation": "Marking Scheme (Complete Analysis):\n\nParameter | Battery Connected | Battery Disconnected\n---|---|---\nCapacitance (C) | Increases to K*C₀ | Increases to K*C₀\nPotential Difference (V) | Remains Constant (= V₀) | Decreases to V₀ / K\nElectric Charge (Q) | Increases to K*Q₀ (battery supplies charge) | Remains Constant (= Q₀)\nElectric Field (E) | Remains Constant (= E₀ = V₀/d) | Decreases to E₀ / K\nStored Energy (U) | Increases to K*U₀ [U = 1/2 K C₀ V₀²] | Decreases to U₀ / K [U = Q₀² / (2 K C₀)]\n\nFull explanations for each parameter are awarded 1 mark each."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Capacitors in Modern Electronics\nA capacitor is an arrangement of two conductors separated by an insulating medium that is used to store electric charge and electrical energy. Capacitors find extensive applications in radio tuning circuits, power supply filter circuits, flash units in cameras, and computer dynamic memory (DRAM). When a dielectric is introduced between plates, the capacitance increases due to dielectric polarisation.\n(i) What is the function of a dielectric in a capacitor?\n(ii) A parallel plate capacitor with air has capacitance 8 pF. What will be the capacitance if distance between plates is halved and space filled with a substance of dielectric constant K = 6?\n(iii) Calculate the charge on this modified capacitor if connected to a 100 V supply.\n(iv) How does energy stored change in part (ii) if it was charged to 100 V before disconnecting the battery and then inserting the dielectric?",
        "answer": "Solutions to Case Study on Capacitors",
        "explanation": "(i) Functions of dielectric: (a) Increases capacitance by factor K, (b) Prevents conducting plates from touching, (c) Increases the maximum operating voltage without electrical breakdown.\n(ii) C' = K * ε₀ A / (d/2) = 2 K * (ε₀ A / d) = 2 * 6 * 8 pF = 96 pF.\n(iii) Q' = C' * V = 96 pF * 100 V = 9600 pC = 9.6 × 10⁻⁹ C = 9.6 nC.\n(iv) When disconnected before inserting dielectric, Q = Q₀ = C₀ V₀ = 8 pF * 100 V = 800 pC. Initial energy U₀ = 1/2 C₀ V₀² = 0.5 * 8 × 10⁻¹² * 10⁴ = 4 × 10⁻⁸ J. Final capacitance C' = 96 pF. Final energy U' = Q₀² / (2 C') = (800 × 10⁻¹²)² / (2 * 96 × 10⁻¹²) = 3.33 × 10⁻⁹ J (energy decreases by factor of 12)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Two capacitors C1 and C2 charged to potentials V1 and V2 are connected together in parallel by conducting wires. Derive an expression for:\n(i) Common potential V.\n(ii) Loss of electrostatic potential energy during sharing of charges.\n(b) Where does this lost energy go?",
        "answer": "Derivation of common potential and loss of energy formula",
        "explanation": "(a) (i) Initial charges: Q1 = C1 V1, Q2 = C2 V2. Total charge Q = C1 V1 + C2 V2.\nWhen connected in parallel, equivalent capacitance C = C1 + C2.\nCommon potential V = Total charge / Total capacitance = (C1 V1 + C2 V2) / (C1 + C2).\n\n(ii) Initial stored energy: U_i = 1/2 C1 V1² + 1/2 C2 V2².\nFinal stored energy: U_f = 1/2 (C1 + C2) V² = 1/2 (C1 + C2) * [ (C1 V1 + C2 V2) / (C1 + C2) ]²\n= (C1 V1 + C2 V2)² / [2 (C1 + C2)].\nLoss of energy ΔU = U_i - U_f:\nΔU = 1/2 [ C1 V1² + C2 V2² - (C1 V1 + C2 V2)² / (C1 + C2) ]\nMultiplying and simplifying terms:\nΔU = 1/2 [ (C1² V1² + C1 C2 V1² + C1 C2 V2² + C2² V2² - (C1² V1² + 2 C1 C2 V1 V2 + C2² V2²)) / (C1 + C2) ]\nΔU = 1/2 * [ C1 C2 (V1² + V2² - 2 V1 V2) / (C1 + C2) ]\nΔU = [ C1 C2 / (2(C1 + C2)) ] * (V1 - V2)².\nSince (V1 - V2)² is always positive, ΔU ≥ 0, proving energy is always lost.\n\n(b) The lost energy is dissipated as Joule heat (I²Rt) in the connecting wires and partly radiated as electromagnetic radiation due to transient surging currents."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Derive an expression for the potential energy of an electric dipole of moment p in a uniform electric field E.\n(b) At what orientation is the potential energy of the dipole:\n(i) minimum (stable equilibrium),\n(ii) maximum (unstable equilibrium)?\n(c) An electric dipole with charges ±4 μC separated by 10 cm is placed in an electric field of 2 × 10⁵ N/C. Find work done to rotate it from stable equilibrium to 90°.",
        "answer": "Potential energy derivation U = -p·E and numerical",
        "explanation": "(a) Torque on dipole τ = p E sin θ. Work done in rotating through infinitesimal angle dθ:\ndW = τ dθ = p E sin θ dθ.\nTotal work done from reference angle θ₀ = 90° (where U is chosen as zero) to angle θ:\nU = ∫₉₀^θ p E sin θ dθ = - p E [cos θ]₉₀^θ = - p E (cos θ - cos 90°) = - p E cos θ = - p · E.\n\n(b) (i) Minimum PE: θ = 0°, U_min = - pE (Stable equilibrium).\n(ii) Maximum PE: θ = 180°, U_max = + pE (Unstable equilibrium).\n\n(c) Numerical:\n2a = 10 cm = 0.1 m, q = 4 μC = 4 × 10⁻⁶ C, E = 2 × 10⁵ N/C.\np = q * 2a = (4 × 10⁻⁶) * 0.1 = 4 × 10⁻⁷ C·m.\nW = - p E (cos 90° - cos 0°) = - p E (0 - 1) = + p E\nW = (4 × 10⁻⁷ C·m) * (2 × 10⁵ N/C) = 8 × 10⁻² J = 0.08 J."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A network of four capacitors, each of capacitance 15 μF, is connected to a 500 V supply as follows: C1, C2, and C3 are in series, and C4 is connected in parallel across the series combination. Determine:\n(i) the equivalent capacitance of the network,\n(ii) the charge on each capacitor,\n(iii) total energy stored in the network.",
        "answer": "(i) C_eq = 20 μF, (ii) Q4 = 7500 μC, Q1=Q2=Q3 = 2500 μC, (iii) U = 2.5 J",
        "explanation": "(i) C1, C2, C3 are in series:\n1/C_s = 1/15 + 1/15 + 1/15 = 3/15 = 1/5 => C_s = 5 μF.\nC4 = 15 μF is in parallel with C_s:\nC_eq = C_s + C4 = 5 μF + 15 μF = 20 μF.\n\n(ii) Charge on each capacitor:\n- For C4: Across 500 V supply directly:\n  Q4 = C4 * V = (15 μF) * (500 V) = 7500 μC = 7.5 mC.\n- For series branch (C1, C2, C3): Total charge in series branch Q_s = C_s * V = (5 μF) * (500 V) = 2500 μC.\n  In series, charge on each capacitor is equal: Q1 = Q2 = Q3 = 2500 μC = 2.5 mC.\n\n(iii) Total energy stored:\nU = 1/2 C_eq V² = 0.5 * (20 × 10⁻⁶ F) * (500 V)² = 10 × 10⁻⁶ * 250000 = 2.5 J."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Derive an expression for the capacitance of a parallel plate capacitor having plate area A and plate separation d when a dielectric slab of thickness t (t < d) and dielectric constant K is inserted between the plates.\n(b) What happens to capacitance if: (i) t = d, (ii) t -> 0, (iii) dielectric slab is replaced by a metallic slab of thickness t?",
        "answer": "Derivation of partially filled capacitor capacitance and special cases",
        "explanation": "(a) Derivation:\n- Plate area A, plate separation d, charge ±Q => surface charge density σ = Q/A.\n- Electric field in air gap (thickness d - t): E₀ = σ / ε₀.\n- Electric field inside dielectric slab (thickness t): E = E₀ / K = σ / (K ε₀).\n- Total potential difference V between plates:\n  V = E₀ (d - t) + E t = E₀ (d - t) + (E₀ / K) t = E₀ [ (d - t) + t/K ]\n  V = (Q / (ε₀ A)) * [ (d - t) + t/K ].\n- Capacitance C = Q / V = ε₀ A / [ (d - t) + t/K ].\n\n(b) Special cases:\n(i) If t = d: C = ε₀ A / [ 0 + d/K ] = K (ε₀ A / d) = K C₀.\n(ii) If t -> 0: C = ε₀ A / d = C₀.\n(iii) If metallic slab of thickness t is inserted: For a conductor, K = ∞, so t/K = 0.\nThus, C_metal = ε₀ A / (d - t)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Two spherical conductors of radii R1 and R2 (R1 > R2) are kept at a large separation and charged to potentials V1 and V2. They are then connected by a thin conducting wire. Find:\n(i) Common potential,\n(ii) Ratio of their final charges (Q1'/Q2'),\n(iii) Ratio of their surface charge densities (σ1/σ2).",
        "answer": "(i) V_c = (R1 V1 + R2 V2)/(R1 + R2), (ii) Q1'/Q2' = R1/R2, (iii) σ1/σ2 = R2/R1",
        "explanation": "(i) Capacitances of isolated spherical conductors are C1 = 4πε₀ R1 and C2 = 4πε₀ R2.\nCommon potential V_c = (C1 V1 + C2 V2) / (C1 + C2) = (4πε₀ R1 V1 + 4πε₀ R2 V2) / (4πε₀(R1 + R2)) = (R1 V1 + R2 V2) / (R1 + R2).\n\n(ii) Final charges after connecting:\nQ1' = C1 V_c and Q2' = C2 V_c.\nRatio Q1' / Q2' = C1 / C2 = (4πε₀ R1) / (4πε₀ R2) = R1 / R2.\n\n(iii) Surface charge density σ = Q / (4π R²):\nRatio σ1 / σ2 = (Q1' / (4π R1²)) / (Q2' / (4π R2²)) = (Q1'/Q2') * (R2² / R1²) = (R1/R2) * (R2² / R1²) = R2 / R1.\nHence, surface charge density is inversely proportional to radius (σ ∝ 1/R), explaining why sharp pointed edges have higher charge density (corona discharge)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Find the expression for the electric potential at any point on the axial line of an electric dipole.\n(b) Three point charges +q, +2q, and -3q are placed at the vertices of an equilateral triangle of side l. Calculate the electrostatic potential energy of this system.",
        "answer": "Axial potential derivation and equilateral triangle potential energy numerical",
        "explanation": "(a) Charges -q at A(-a) and +q at B(+a). Axial point P at distance r from centre O.\nDistance AP = r + a, BP = r - a.\nPotential V = V₊ + V₋ = [q / (4πε₀)] * [ 1/(r - a) - 1/(r + a) ]\n= [q / (4πε₀)] * [ ((r + a) - (r - a)) / (r² - a²) ] = [q * (2a)] / [4πε₀ (r² - a²)] = p / [4πε₀ (r² - a²)].\nFor r >> a: V_axial = p / (4πε₀ r²).\n\n(b) Charges: q1 = +q, q2 = +2q, q3 = -3q at vertices of equilateral triangle of side l.\nPair distances: r12 = r23 = r31 = l.\nElectrostatic potential energy of 3-charge system:\nU = (1 / 4πε₀) * [ (q1 q2)/l + (q2 q3)/l + (q3 q1)/l ]\nU = (1 / 4πε₀ l) * [ (+q)(+2q) + (+2q)(-3q) + (-3q)(+q) ]\nU = (1 / 4πε₀ l) * [ 2q² - 6q² - 3q² ] = (1 / 4πε₀ l) * [ -7q² ] = - 7 q² / (4πε₀ l)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "unit_num": 2,
      "title": "Current Electricity",
      "unit_title": "Current Electricity",
      "weightage_unit": "16 Marks (Units 1 & 2)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The drift velocity vd of free electrons in a copper wire varies with the applied electric field E as:",
        "options": [
          "(a) vd ∝ E",
          "(b) vd ∝ 1/E",
          "(c) vd ∝ E²",
          "(d) vd ∝ √E"
        ],
        "answer": "(a) vd ∝ E",
        "explanation": "Drift velocity is given by vd = (e τ / m) * E = μ E, where mobility μ is constant for a given conductor at constant temperature. Hence, vd ∝ E."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "When a cell of emf E and internal resistance r is connected across an external resistance R = r, the terminal potential difference across the cell is:",
        "options": [
          "(a) E",
          "(b) E / 2",
          "(c) 2 E",
          "(d) Zero"
        ],
        "answer": "(b) E / 2",
        "explanation": "Current I = E / (R + r) = E / (r + r) = E / (2r). Terminal voltage V = I R = [E / (2r)] * r = E / 2."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Kirchhoff's first rule (ΣI = 0) at a junction and second rule (ΣΔV = 0) around a closed loop are respectively based on the conservation of:",
        "options": [
          "(a) energy and charge",
          "(b) charge and energy",
          "(c) charge and momentum",
          "(d) energy and momentum"
        ],
        "answer": "(b) charge and energy",
        "explanation": "Junction rule is based on conservation of electric charge (charge cannot accumulate at a junction). Loop rule is based on conservation of energy (electrostatic field is conservative, net work done around any closed loop is zero)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A wire of resistance R is stretched uniformly such that its length is doubled. Its new resistance will be:",
        "options": [
          "(a) 2 R",
          "(b) 4 R",
          "(c) R / 2",
          "(d) R / 4"
        ],
        "answer": "(b) 4 R",
        "explanation": "Volume remains constant (V = A * L = constant). When length is doubled (L' = 2L), cross-sectional area is halved (A' = A/2). New resistance R' = ρ L' / A' = ρ (2L) / (A/2) = 4 (ρ L / A) = 4 R."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following materials has a negative temperature coefficient of resistance (α)?",
        "options": [
          "(a) Copper",
          "(b) Nichrome",
          "(c) Silicon",
          "(d) Silver"
        ],
        "answer": "(c) Silicon",
        "explanation": "Semiconductors (like silicon and germanium) have negative temperature coefficients of resistance (α < 0) because as temperature rises, more covalent bonds break, exponentially increasing charge carrier concentration n."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a Wheatstone bridge, the four arms have resistances P = 10 Ω, Q = 20 Ω, R = 15 Ω, and S = 30 Ω. The bridge is:",
        "options": [
          "(a) balanced",
          "(b) unbalanced",
          "(c) in resonance",
          "(d) short circuited"
        ],
        "answer": "(a) balanced",
        "explanation": "The condition for bridge balance is P / Q = R / S. Here P/Q = 10/20 = 1/2, and R/S = 15/30 = 1/2. Since P/Q = R/S, the bridge is balanced and no current flows through the galvanometer."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The relaxation time of free electrons in a metal conductor as temperature increases:",
        "options": [
          "(a) increases",
          "(b) decreases",
          "(c) remains constant",
          "(d) fluctuates"
        ],
        "answer": "(b) decreases",
        "explanation": "As temperature increases, thermal vibrations of lattice ions increase, causing more frequent collisions of conduction electrons. Thus, the average time interval between two successive collisions (relaxation time τ) decreases."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Mobility of an electron is defined as the drift velocity per unit:",
        "options": [
          "(a) current",
          "(b) electric field",
          "(c) potential difference",
          "(d) resistance"
        ],
        "answer": "(b) electric field",
        "explanation": "Mobility μ = vd / E. It represents the ease with which charge carriers drift in response to an applied electric field."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Two bulbs of ratings 40 W - 220 V and 100 W - 220 V are connected in series across 220 V supply. Which bulb will glow brighter?",
        "options": [
          "(a) 40 W bulb",
          "(b) 100 W bulb",
          "(c) Both glow with equal brightness",
          "(d) Neither bulb glows"
        ],
        "answer": "(a) 40 W bulb",
        "explanation": "Resistance R = V² / P. Hence R(40 W) > R(100 W). In series connection, both carry identical current I. Power dissipated is P = I² R. Since R(40 W) is larger, the 40 W bulb dissipates more power and glows brighter."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "A cell of emf E and internal resistance r is charged by a current I. The terminal voltage V across the cell during charging is:",
        "options": [
          "(a) E - I r",
          "(b) E + I r",
          "(c) E",
          "(d) I r"
        ],
        "answer": "(b) E + I r",
        "explanation": "During charging, current enters the positive terminal of the cell, so V = E + I r. (During discharging, current leaves positive terminal, so V = E - I r)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The resistivity of alloys like constantan and manganin is nearly independent of temperature because:",
        "options": [
          "(a) they have very low resistivity",
          "(b) they have almost zero temperature coefficient of resistance",
          "(c) they are semiconductors",
          "(d) they melt at room temperature"
        ],
        "answer": "(b) they have almost zero temperature coefficient of resistance",
        "explanation": "Manganin and constantan are standard resistance materials because their temperature coefficient of resistance α is extremely small (~10⁻⁵ K⁻¹), making their resistance virtually constant with temperature variations."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The SI unit of electrical conductivity is:",
        "options": [
          "(a) Ω·m",
          "(b) Ω⁻¹·m⁻¹ (or S/m)",
          "(c) Ω·m⁻¹",
          "(d) Ω⁻¹·m"
        ],
        "answer": "(b) Ω⁻¹·m⁻¹ (or S/m)",
        "explanation": "Conductivity σ = 1 / ρ. Since resistivity has unit Ω·m, conductivity has unit Ω⁻¹·m⁻¹, also called Siemens per metre (S·m⁻¹)."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Two wires of equal length and same material have radii in the ratio 1 : 2. The ratio of their resistances is:",
        "options": [
          "(a) 1 : 2",
          "(b) 2 : 1",
          "(c) 4 : 1",
          "(d) 1 : 4"
        ],
        "answer": "(c) 4 : 1",
        "explanation": "R = ρ L / A = ρ L / (π r²). For equal L and ρ, R ∝ 1/r². Thus R1 / R2 = (r2 / r1)² = (2/1)² = 4/1 = 4 : 1."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "When n identical cells each of emf E and internal resistance r are connected in parallel, the total emf and equivalent internal resistance are:",
        "options": [
          "(a) nE, nr",
          "(b) E, r/n",
          "(c) nE, r/n",
          "(d) E, nr"
        ],
        "answer": "(b) E, r/n",
        "explanation": "In parallel connection of identical cells, the potential difference across the combination remains E, while the n internal resistances combine in parallel to give r_eq = r/n."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Maximum power is delivered by a source of internal resistance r to an external load resistor R when:",
        "options": [
          "(a) R = 0",
          "(b) R = r",
          "(c) R = ∞",
          "(d) R = 2r"
        ],
        "answer": "(b) R = r",
        "explanation": "By the Maximum Power Transfer Theorem, power transferred from a source to a load resistor is maximum when the load resistance equals the internal resistance of the source (R = r)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A steady current flows through a metallic conductor of non-uniform cross-section. The quantity that remains constant along the conductor is:",
        "options": [
          "(a) current",
          "(b) drift velocity",
          "(c) electric field",
          "(d) current density"
        ],
        "answer": "(a) current",
        "explanation": "By conservation of charge, the number of charges entering any cross-section per second equals the number leaving. Drift speed, current density (J = I/A), and electric field (E = Jρ) all vary inversely with cross-sectional area A, but current I remains constant."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The color code on a carbon resistor consists of Red, Red, Orange, Gold bands. Its resistance value is:",
        "options": [
          "(a) (22 ± 5%) kΩ",
          "(b) (22 ± 10%) kΩ",
          "(c) (220 ± 5%) Ω",
          "(d) (2.2 ± 5%) kΩ"
        ],
        "answer": "(a) (22 ± 5%) kΩ",
        "explanation": "Red = 2, Red = 2, Orange = 10³, Gold = ±5%. Value = 22 × 10³ Ω ± 5% = 22 kΩ ± 5%."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If the temperature of a metallic conductor is increased, the product of its resistivity and conductivity (ρ × σ):",
        "options": [
          "(a) increases",
          "(b) decreases",
          "(c) remains unchanged at 1",
          "(d) becomes zero"
        ],
        "answer": "(c) remains unchanged at 1",
        "explanation": "Conductivity is defined as σ = 1/ρ. Therefore, the product ρ × σ = ρ * (1/ρ) = 1, which is fundamentally a constant regardless of temperature."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The internal resistance of a secondary cell is generally:",
        "options": [
          "(a) higher than a primary cell",
          "(b) much lower than a primary cell",
          "(c) infinite",
          "(d) negative"
        ],
        "answer": "(b) much lower than a primary cell",
        "explanation": "Secondary cells (like lead-acid accumulators) have very low internal resistance (~0.01 - 0.1 Ω), allowing them to deliver large currents (e.g. for car starters), unlike primary cells which have higher internal resistance."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A current of 1.6 mA flows through a copper conductor. The number of electrons crossing any cross-section per second is:",
        "options": [
          "(a) 10¹⁶",
          "(b) 10¹⁹",
          "(c) 1.6 × 10¹⁶",
          "(d) 10¹⁵"
        ],
        "answer": "(a) 10¹⁶",
        "explanation": "I = q / t = n e / t => n/t = I / e = (1.6 × 10⁻³ A) / (1.6 × 10⁻¹⁹ C) = 10¹⁶ electrons/second."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The dimension of electrical resistivity is:",
        "options": [
          "(a) [M L³ T⁻³ A⁻²]",
          "(b) [M L² T⁻³ A⁻²]",
          "(c) [M L³ T⁻³ A⁻¹]",
          "(d) [M⁻¹ L⁻³ T³ A²]"
        ],
        "answer": "(a) [M L³ T⁻³ A⁻²]",
        "explanation": "ρ = R A / L. [R] = [M L² T⁻³ A⁻²]. Multiplying by [L² / L] = [L] gives [ρ] = [M L³ T⁻³ A⁻²]."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Twelve identical resistors each of resistance R are connected to form the edges of a skeleton cube. The equivalent resistance between two diagonally opposite corners is:",
        "options": [
          "(a) 5/6 R",
          "(b) 3/4 R",
          "(c) 7/12 R",
          "(d) 6/5 R"
        ],
        "answer": "(a) 5/6 R",
        "explanation": "By current symmetry across body diagonals: the total voltage drop V = (I/3)R + (I/6)R + (I/3)R = (5/6) I R. Therefore, R_eq = V / I = 5/6 R."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A copper wire and an iron wire of the same length and diameter carry the same current. Which wire gets heated more?",
        "options": [
          "(a) Copper wire",
          "(b) Iron wire",
          "(c) Both get heated equally",
          "(d) Neither gets heated"
        ],
        "answer": "(b) Iron wire",
        "explanation": "H = I² R t. Since length and diameter are identical, R ∝ ρ. The resistivity of iron is higher than copper (ρ_iron > ρ_copper), so R_iron > R_copper. Thus, the iron wire generates more heat."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The V-I graph for a non-ohmic conductor is:",
        "options": [
          "(a) a straight line through the origin",
          "(b) non-linear or does not pass through origin",
          "(c) a circle",
          "(d) parallel to the current axis"
        ],
        "answer": "(b) non-linear or does not pass through origin",
        "explanation": "Non-ohmic devices (like semiconductor diodes, transistors, electrolyte solutions) do not obey Ohm's law; their V-I characteristics are non-linear or asymmetric."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Three resistors of 1 Ω, 2 Ω, and 3 Ω are combined in parallel. The equivalent resistance is:",
        "options": [
          "(a) 6 Ω",
          "(b) 6/11 Ω",
          "(c) 11/6 Ω",
          "(d) 1 Ω"
        ],
        "answer": "(b) 6/11 Ω",
        "explanation": "1/R_eq = 1/1 + 1/2 + 1/3 = (6 + 3 + 2) / 6 = 11/6 Ω⁻¹. Therefore, R_eq = 6/11 Ω."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The terminal voltage of a cell is less than its electromotive force (emf) when it is discharging.\nReason (R): In a discharging cell, there is an internal potential drop equal to Ir due to internal resistance.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. During discharge, V = E - Ir. The internal resistance consumes part of the energy per unit charge, making terminal voltage V < E."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The resistance of a metal increases with increasing temperature, whereas that of a semiconductor decreases.\nReason (R): In metals, collision frequency increases with temperature, while in semiconductors, carrier density increases exponentially with temperature.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. In metals, n is fixed and τ decreases. In semiconductors, the exponential increase in n vastly overcompensates for the decrease in τ."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Kirchhoff's junction rule reflects the conservation of electric charge.\nReason (R): Since electric charge can neither be created nor accumulated at an electrical node, the algebraic sum of currents entering equals the sum leaving.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly. ΣI = 0 comes directly from dq/dt = 0 at the node in steady state."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Standard resistance coils are prepared from alloys like manganin and constantan.\nReason (R): Manganin and constantan possess high resistivity and very low temperature coefficient of resistance.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains why these alloys are used in standard resistance boxes and meter bridges (their resistance remains stable under temperature changes)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Although electrons drift at speeds of a few mm/s, an electric bulb glows almost instantaneously when switched on.\nReason (R): The electric field travels through the wire at nearly the speed of light, setting electrons throughout the circuit into drift motion simultaneously.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Turning on the switch establishes an electromagnetic field propagating at roughly the speed of light (~10⁸ m/s), immediately causing electrons everywhere to start drifting."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Define drift velocity and relaxation time. Write the relationship between them.",
        "answer": "Definitions and relationship between vd and τ",
        "explanation": "1. Drift Velocity (vd): The average velocity with which free electrons in a conductor get drifted in the direction opposite to the applied electric field.\n2. Relaxation Time (τ): The average time interval elapsed between two successive collisions of a conduction electron with the lattice ions.\n3. Relationship: vd = - (e E / m) * τ, where e is electron charge, m is electron mass, and E is applied electric field."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Distinguish between electromotive force (emf) and terminal potential difference of a cell.",
        "answer": "Differences between emf and terminal potential difference",
        "explanation": "1. Definition: EMF is the maximum potential difference between the terminals of a cell in an open circuit (no current drawn). Terminal PD is the potential difference between the electrodes when current is drawn in a closed circuit.\n2. Dependence on circuit: EMF is independent of external resistance R. Terminal PD depends directly on R and current I (V = E - Ir).\n3. Magnitude: In a discharging cell, EMF is always greater than terminal PD."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Deduce Ohm's law using the concept of drift velocity of electrons.",
        "answer": "Derivation of Ohm's law: R = ml / (n e² τ A)",
        "explanation": "1. Drift velocity vd = (e E / m) τ.\n2. Electric current I = n e A vd = n e A [ (e E / m) τ ] = (n e² A τ / m) E.\n3. Since electric field E = V / l (where V is potential difference and l is wire length):\n   I = (n e² A τ / m) * (V / l) = [ (n e² τ A) / (m l) ] * V.\n4. Rearranging: V = [ (m l) / (n e² τ A) ] * I.\n5. At constant temperature, m, l, n, e, τ, and A are constants. Therefore, [ (m l) / (n e² τ A) ] = R (constant).\n6. Thus V = I R, which proves Ohm's Law."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "A cell of emf 2 V and internal resistance 0.1 Ω is connected across a resistor of 3.9 Ω. Find: (i) current in the circuit, (ii) terminal voltage across the cell.",
        "answer": "(i) I = 0.5 A, (ii) V = 1.95 V",
        "explanation": "Given: E = 2 V, r = 0.1 Ω, R = 3.9 Ω.\n(i) Current I = E / (R + r) = 2 / (3.9 + 0.1) = 2 / 4.0 = 0.5 A.\n(ii) Terminal voltage V = E - I r = 2 - (0.5 * 0.1) = 2 - 0.05 = 1.95 V (or V = I R = 0.5 * 3.9 = 1.95 V)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "State Kirchhoff's rules. Mention the physical principles on which they are based.",
        "answer": "Kirchhoff's rules and conservation laws",
        "explanation": "1. First Rule (Junction Rule): In any electrical network, the algebraic sum of currents meeting at a junction is zero: ∑ I = 0 (Current entering = Current leaving). Principle: Law of Conservation of Electric Charge.\n2. Second Rule (Loop Rule): In any closed loop of an electrical network, the algebraic sum of changes in potential around the loop is zero: ∑ ΔV = 0 (or ∑ E = ∑ I R). Principle: Law of Conservation of Energy."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Two wires A and B of the same metal have lengths in the ratio 1 : 2 and cross-sectional areas in the ratio 2 : 1. If both are connected in parallel to the same battery, find the ratio of currents through them.",
        "answer": "Ratio of currents IA / IB = 4 : 1",
        "explanation": "Resistance R = ρ L / A. Given LA/LB = 1/2 and AA/AB = 2/1.\nRA / RB = (LA / LB) * (AB / AA) = (1/2) * (1/2) = 1/4.\nIn parallel connection, voltage V is identical: I = V / R.\nIA / IB = RB / RA = 4 / 1 = 4 : 1."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "A heating element connected to a 230 V supply draws an initial current of 3.2 A which settles down after a few seconds to a steady value of 2.8 A. What is the steady temperature of the heating element if the room temperature is 27.0 °C? (Temperature coefficient of resistance of the element = 1.70 × 10⁻⁴ °C⁻¹).",
        "answer": "Steady temperature T2 = 867 °C",
        "explanation": "Initial resistance at T1 = 27 °C: R1 = V / I1 = 230 / 3.2 = 71.875 Ω.\nSteady state resistance at T2: R2 = V / I2 = 230 / 2.8 = 82.143 Ω.\nUsing R2 = R1 [ 1 + α (T2 - T1) ]:\n=> R2 - R1 = R1 α (T2 - T1)\n=> T2 - T1 = (R2 - R1) / (R1 * α) = (82.143 - 71.875) / (71.875 * 1.70 × 10⁻⁴)\n= 10.268 / 0.01221875 ≈ 840.3 °C.\nTherefore, steady temperature T2 = 27 + 840.3 = 867.3 °C ≈ 867 °C."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Plot a graph showing the variation of terminal potential difference V of a cell with current I drawn from it. How can the emf and internal resistance be determined from this graph?",
        "answer": "V vs I graph interpretation for a cell",
        "explanation": "1. Equation: V = E - I r => V = (-r) I + E (straight line with negative slope).\n2. Graph: A straight line sloping downwards intersecting the V-axis at (0, E) and the I-axis at (I_sc, 0).\n3. Determination: (i) EMF E is the y-intercept (when I = 0). (ii) Internal resistance r is the magnitude of the slope of the line: r = |dV / dI|."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Using Kirchhoff's rules, find the value of current I1, I2, and I3 in a circuit with two batteries of 6 V and 12 V with internal resistances 1 Ω and 2 Ω supplying an external load of 5 Ω in parallel.",
        "answer": "Kirchhoff network analysis",
        "explanation": "Let battery 1 be E1 = 6V, r1 = 1Ω; battery 2 be E2 = 12V, r2 = 2Ω; load R = 5Ω.\nBy junction rule: I3 = I1 + I2.\nLoop 1: 6 - I1(1) - (I1 + I2)(5) = 0 => 6I1 + 5I2 = 6  ... (1)\nLoop 2: 12 - I2(2) - (I1 + I2)(5) = 0 => 5I1 + 7I2 = 12 ... (2)\nMultiply (1) by 5 and (2) by 6:\n30I1 + 25I2 = 30\n30I1 + 42I2 = 72\nSubtracting: 17I2 = 42 => I2 = 42/17 ≈ 2.47 A.\nSubstitute in (1): 6I1 = 6 - 5(42/17) = (102 - 210)/17 = -108/17 => I1 = -18/17 ≈ -1.06 A (charging).\nLoad current I3 = I1 + I2 = (-18 + 42)/17 = 24/17 ≈ 1.41 A."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is the principle of a Wheatstone bridge? State the condition for balance.",
        "answer": "Principle and balance condition of Wheatstone bridge",
        "explanation": "1. Principle: It consists of four resistances P, Q, R, S connected to form a closed quadrilateral network ABCD, with a galvanometer connected across BD and a battery across AC. When no current flows through the galvanometer (null deflection), the bridge is balanced.\n2. Condition for balance: P / Q = R / S."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Derive the condition for balance in a Wheatstone bridge using Kirchhoff's rules.\n(b) In a Wheatstone bridge network, P = 2 Ω, Q = 2 Ω, R = 2 Ω, and S = 3 Ω. The bridge is connected to a 2 V battery. Find the current drawn from the battery and the current through the galvanometer of resistance 10 Ω.",
        "answer": "Derivation of P/Q = R/S and unbalanced bridge analysis",
        "explanation": "Marking Scheme:\n(a) Derivation (3 marks):\n- Let currents in arms AB, BC, AD, DC be I1, I1 - Ig, I2, I2 + Ig, where Ig is galvanometer current.\n- Loop ABDA: - I1 P - Ig G + I2 R = 0 ... (1)\n- Loop BCDB: - (I1 - Ig) Q + (I2 + Ig) S + Ig G = 0 ... (2)\n- For bridge balance, galvanometer shows zero deflection: Ig = 0.\n- Equation (1) becomes: I1 P = I2 R => I1 / I2 = R / P ... (3)\n- Equation (2) becomes: I1 Q = I2 S => I1 / I2 = S / Q ... (4)\n- Equating (3) and (4): R / P = S / Q => P / Q = R / S. (Proven).\n\n(b) Numerical (2 marks):\n- For bridge balance: P/Q = 2/2 = 1, but R/S = 2/3 ≠ 1, so bridge is unbalanced.\n- Solving network using Kirchhoff's loops gives Ig ≈ 0.038 A and total battery current I ≈ 0.83 A."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) State the relation between electric current I and drift velocity vd of electrons in a conductor.\n(b) Hence, derive an expression for the electrical conductivity σ and resistivity ρ of a material in terms of relaxation time τ and electron density n.\n(c) Why does the resistivity of a typical semiconductor decrease with temperature?",
        "answer": "Current-drift velocity relation, resistivity derivation, and semiconductor explanation",
        "explanation": "Marking Scheme:\n(a) Relation I = n e A vd (1.5 marks):\n- Consider a conductor of length l and cross-sectional area A. Total volume = A * l.\n- Number of free electrons N = n * A * l. Total charge Q = N * e = n A l e.\n- Time taken by electrons to drift through length l: t = l / vd.\n- Electric current I = Q / t = (n A l e) / (l / vd) = n e A vd.\n\n(b) Expressions for σ and ρ (2.5 marks):\n- Drift velocity vd = (e E / m) τ.\n- Substituting vd into current formula: I = n e A [ (e E / m) τ ] = (n e² τ A / m) E.\n- Current density J = I / A = (n e² τ / m) E.\n- By microscopic Ohm's law, J = σ E. Comparing yields: Conductivity σ = n e² τ / m.\n- Resistivity ρ = 1 / σ = m / (n e² τ).\n\n(c) Semiconductor explanation (1 mark):\n- In semiconductors, with increasing temperature, valence electrons gain thermal energy to break covalent bonds, causing an exponential increase in charge carrier density n. Although τ decreases, the dramatic rise in n dominates, resulting in a net decrease in resistivity ρ."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Two cells of emf E1 and E2 and internal resistances r1 and r2 are connected in parallel. Derive the expression for the equivalent emf E_eq and equivalent internal resistance r_eq of the combination.\n(b) What will be the equivalent emf and internal resistance if the two cells are identical with emf E and internal resistance r?",
        "answer": "Derivation of parallel cell combination: E_eq = (E1 r2 + E2 r1)/(r1 + r2)",
        "explanation": "Marking Scheme:\n(a) Parallel derivation (3.5 marks):\n- Let the two cells be connected between terminals A and B. Terminal potential difference across both cells is V = V_A - V_B.\n- For cell 1: V = E1 - I1 r1 => I1 = (E1 - V) / r1.\n- For cell 2: V = E2 - I2 r2 => I2 = (E2 - V) / r2.\n- Total current delivered to circuit: I = I1 + I2 = (E1 - V)/r1 + (E2 - V)/r2\n  I = (E1/r1 + E2/r2) - V (1/r1 + 1/r2).\n- Rearranging for V:\n  V (1/r1 + 1/r2) = (E1/r1 + E2/r2) - I\n  V = [ (E1/r1 + E2/r2) / (1/r1 + 1/r2) ] - I * [ 1 / (1/r1 + 1/r2) ].\n- Comparing with standard cell equation V = E_eq - I r_eq:\n  1/r_eq = 1/r1 + 1/r2 => r_eq = (r1 r2) / (r1 + r2).\n  E_eq / r_eq = E1/r1 + E2/r2 => E_eq = (E1 r2 + E2 r1) / (r1 + r2).\n\n(b) Identical cells (1.5 marks):\n- If E1 = E2 = E and r1 = r2 = r:\n  E_eq = (E*r + E*r) / (r + r) = 2Er / 2r = E.\n  r_eq = r*r / (r + r) = r² / 2r = r / 2."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Temperature Dependence of Electrical Resistivity\nThe resistivity of a metallic conductor is given by ρ = m / (n e² τ). In metals, the number density n of free electrons is approximately constant with temperature (~10²⁹ m⁻³). However, as temperature increases, lattice ions vibrate more vigorously, leading to more frequent collisions and hence a reduction in relaxation time τ. This causes resistivity to increase with temperature: ρ(T) = ρ₀ [1 + α (T - T₀)]. In contrast, in semiconductors, n increases exponentially with temperature.\n(i) Why does the resistivity of metals increase with temperature?\n(ii) Name an alloy whose resistivity is almost independent of temperature.\n(iii) Write the dimensional formula of temperature coefficient of resistance α.\n(iv) A copper wire has resistance 10 Ω at 0 °C. If its temperature coefficient of resistance is 0.004 °C⁻¹, calculate its resistance at 100 °C.",
        "answer": "Solutions to Case Study on Temperature Dependence",
        "explanation": "(i) With increasing temperature, thermal amplitude of lattice ions increases, causing collision frequency to rise and relaxation time τ to decrease. Since ρ ∝ 1/τ, resistivity increases.\n(ii) Manganin (or Constantan / Nichrome).\n(iii) α = ΔR / (R₀ ΔT). Dimensional formula: [K⁻¹] or [°C⁻¹].\n(iv) R(T) = R₀ [1 + α ΔT] = 10 * [1 + 0.004 * (100 - 0)] = 10 * [1 + 0.4] = 10 * 1.4 = 14 Ω."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Two cells of emf E1 and E2 and internal resistances r1 and r2 are connected in series. Find equivalent emf and internal resistance.\n(b) What is the condition for maximum current through an external resistor R connected across a mixed grouping of mn cells (m rows of n cells in each row)?",
        "answer": "Series cell combination and mixed grouping condition R = nr/m",
        "explanation": "(a) Series connection (2.5 marks):\n- Let current I pass through both cells in series.\n- Potential difference across cell 1: V1 = E1 - I r1.\n- Potential difference across cell 2: V2 = E2 - I r2.\n- Total potential difference: V = V1 + V2 = (E1 - I r1) + (E2 - I r2) = (E1 + E2) - I (r1 + r2).\n- Comparing with V = E_eq - I r_eq:\n  E_eq = E1 + E2, and r_eq = r1 + r2.\n- (If reversed polarity: E_eq = E1 - E2, r_eq = r1 + r2).\n\n(b) Mixed Grouping Condition (2.5 marks):\n- Total cells N = m * n (n cells per row, m parallel rows).\n- Emf of each row = n E. Total emf of combination = n E.\n- Internal resistance of each row = n r. Equivalent internal resistance r_eq = (n r) / m.\n- Current I = (n E) / [ R + (n r)/m ] = (m n E) / (m R + n r).\n- By mathematical minimization of denominator (√mR - √nr)² + 2√(mnRr), the denominator is minimum when √mR = √nr => m R = n r => R = (n r) / m.\n- Thus, maximum current is obtained when external resistance equals total internal resistance."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Define electrical energy and electrical power. Deduce Joule's law of heating (H = I² R t).\n(b) An electric kettle has two heating coils. When one coil is used, it boils water in 6 minutes. When the other coil is used, it boils water in 8 minutes. In what time will the water boil if both coils are used in:\n(i) series,\n(ii) parallel?",
        "answer": "Joule's law deduction and boiling time numerical: (i) 14 min, (ii) 3.43 min",
        "explanation": "(a) Electrical power P = V * I. By Ohm's law V = IR => P = I² R = V² / R.\nHeat energy produced in time t: H = P * t = I² R t.\nJoule's Law states that heat produced in a conductor is directly proportional to: (i) square of current (I²), (ii) resistance (R), (iii) time of current flow (t).\n\n(b) Numerical:\nLet heat required to boil water be H (constant) at supply voltage V.\nH = (V² / R) * t => R = (V² t) / H. Thus R ∝ t.\nGiven t1 = 6 min (so R1 = k*6), t2 = 8 min (so R2 = k*8).\n(i) In series: R_series = R1 + R2 => t_series = t1 + t2 = 6 + 8 = 14 minutes.\n(ii) In parallel: 1/R_parallel = 1/R1 + 1/R2 => 1/t_parallel = 1/t1 + 1/t2\n1/t_parallel = 1/6 + 1/8 = (4 + 3)/24 = 7/24 => t_parallel = 24/7 ≈ 3.43 minutes."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A battery of emf 10 V and internal resistance 3 Ω is connected to an external resistor. If the current in the circuit is 0.5 A, determine:\n(i) the resistance of the external resistor,\n(ii) the terminal voltage of the battery,\n(iii) maximum current that can be drawn from the battery,\n(iv) power dissipated in the external resistor.",
        "answer": "(i) R = 17 Ω, (ii) V = 8.5 V, (iii) I_max = 3.33 A, (iv) P = 4.25 W",
        "explanation": "Given: E = 10 V, r = 3 Ω, I = 0.5 A.\n(i) I = E / (R + r) => 0.5 = 10 / (R + 3) => R + 3 = 10 / 0.5 = 20 => R = 17 Ω.\n(ii) Terminal voltage V = E - I r = 10 - (0.5 * 3) = 10 - 1.5 = 8.5 V (or V = I R = 0.5 * 17 = 8.5 V).\n(iii) Maximum current occurs at short circuit (R = 0): I_max = E / r = 10 / 3 ≈ 3.33 A.\n(iv) Power dissipated P = I² R = (0.5)² * 17 = 0.25 * 17 = 4.25 W."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the condition for maximum power transfer from a battery to a load resistor.\n(b) Using the expression for current I = E / (R + r), prove that power delivered to load R is maximum when R = r.\n(c) What is the efficiency of power transfer at the maximum power condition?",
        "answer": "Maximum power transfer proof and efficiency",
        "explanation": "(a) Condition: Load resistance R must equal internal resistance r of the source.\n(b) Proof:\n- Current I = E / (R + r).\n- Power delivered to R: P = I² R = [ E / (R + r) ]² * R = [ E² R ] / (R + r)².\n- For P to be maximum, dP/dR = 0:\n  dP/dR = E² * [ (R + r)² * (1) - R * 2(R + r) ] / (R + r)⁴ = 0\n  => (R + r)² - 2R(R + r) = 0\n  => (R + r) [ (R + r) - 2R ] = 0\n  => r - R = 0 => R = r. (Proven).\n- Maximum power P_max = E² r / (2r)² = E² / (4r).\n(c) Efficiency η = (Power output) / (Total power generated) = (I² R) / (I² (R + r)).\nWhen R = r: η = r / (r + r) = r / 2r = 1/2 = 50%."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A cylindrical wire of length L and cross-sectional radius r has resistance R. If it is stretched to twice its initial length without changing its mass or density, find:\n(i) new radius of the wire,\n(ii) new resistance of the wire,\n(iii) percentage change in resistance.",
        "answer": "(i) r' = r / √2, (ii) R' = 4 R, (iii) 300% increase",
        "explanation": "(i) Volume V = π r² L remains constant.\nWhen L' = 2L: π (r')² (2L) = π r² L => (r')² = r² / 2 => r' = r / √2.\n(ii) New area A' = π (r')² = A / 2.\nNew resistance R' = ρ L' / A' = ρ (2L) / (A / 2) = 4 (ρ L / A) = 4 R.\n(iii) Percentage increase = [ (R' - R) / R ] * 100% = [ (4R - R) / R ] * 100% = 300%."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is electrical mobility? Express it in terms of relaxation time.\n(b) A potential difference V is applied across a copper conductor of length l and diameter d. How is the drift velocity of electrons affected if:\n(i) V is doubled?\n(ii) l is doubled (keeping V and d constant)?\n(iii) d is doubled (keeping V and l constant)?",
        "answer": "Drift velocity dependencies under varying V, l, and d",
        "explanation": "(a) Mobility μ = vd / E = (e τ / m). It represents the magnitude of drift velocity acquired per unit electric field.\n(b) Formula for drift velocity in terms of V and l:\nvd = (e E / m) τ = (e V / (m l)) τ.\n(i) When V is doubled: vd ∝ V, so drift velocity is doubled (vd' = 2 vd).\n(ii) When l is doubled: vd ∝ 1/l, so drift velocity is halved (vd' = vd / 2).\n(iii) When diameter d is doubled: vd depends on V and l, but is completely independent of diameter d (or area A). Therefore, drift velocity remains unchanged."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "unit_num": 3,
      "title": "Moving Charges and Magnetism",
      "unit_title": "Magnetic Effects of Current and Magnetism",
      "weightage_unit": "17 Marks (Units 3 & 4)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "An electron and a proton having the same kinetic energy enter perpendicularly into a uniform magnetic field. The ratio of the radii of their circular paths (r_e / r_p) is:",
        "options": [
          "(a) 1",
          "(b) √(m_e / m_p)",
          "(c) √(m_p / m_e)",
          "(d) m_e / m_p"
        ],
        "answer": "(b) √(m_e / m_p)",
        "explanation": "Radius r = mv / (qB) = √(2mK) / (qB). Since KE (K), charge q, and B are identical, r ∝ √m. Therefore, r_e / r_p = √(m_e / m_p)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A current-carrying circular coil of radius R has n turns. The magnetic field at its centre is B. If the radius is doubled and number of turns halved, keeping current unchanged, the new magnetic field is:",
        "options": [
          "(a) B / 4",
          "(b) B / 2",
          "(c) 4 B",
          "(d) B"
        ],
        "answer": "(a) B / 4",
        "explanation": "B = μ₀ n I / (2R). When n' = n/2 and R' = 2R: B' = μ₀ (n/2) I / [2(2R)] = (1/4) * [μ₀ n I / (2R)] = B / 4."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Two parallel wires carrying currents in the same direction:",
        "options": [
          "(a) attract each other",
          "(b) repel each other",
          "(c) neither attract nor repel",
          "(d) rotate perpendicular to each other"
        ],
        "answer": "(a) attract each other",
        "explanation": "By Right-Hand Rule and Fleming's Left-Hand Rule, parallel currents create magnetic fields that result in mutual attractive forces between the two wires."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A galvanometer of resistance G gives full-scale deflection for current Ig. To convert it into an ammeter of range 0 to I (I > Ig), the required shunt resistance S is:",
        "options": [
          "(a) Ig G / (I - Ig)",
          "(b) (I - Ig) G / Ig",
          "(c) I G / Ig",
          "(d) Ig G / I"
        ],
        "answer": "(a) Ig G / (I - Ig)",
        "explanation": "The shunt resistor S is connected in parallel with the galvanometer coil G, so potential difference across both is identical: Ig * G = (I - Ig) * S => S = Ig G / (I - Ig)."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The work done by a magnetic field on a moving charged particle is always:",
        "options": [
          "(a) positive",
          "(b) negative",
          "(c) zero",
          "(d) dependent on particle velocity"
        ],
        "answer": "(c) zero",
        "explanation": "Magnetic Lorentz force is F = q (v × B), which is always perpendicular to instantaneous velocity v. Power P = F · v = 0. Therefore, work done W = ∫ P dt = 0, meaning kinetic energy and speed remain constant."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A charged particle moves with constant velocity through a region of space. Which of the following conditions is possible?",
        "options": [
          "(a) E ≠ 0, B = 0",
          "(b) E = 0, B ≠ 0 (with v ⊥ B)",
          "(c) E ≠ 0, B ≠ 0 with E = - (v × B)",
          "(d) E = 0, B ≠ 0 with circular orbit"
        ],
        "answer": "(c) E ≠ 0, B ≠ 0 with E = - (v × B)",
        "explanation": "For velocity to remain constant, net Lorentz force F = q(E + v × B) = 0 => E = - (v × B). This is the condition of a velocity selector where electric and magnetic forces balance each other."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The magnetic dipole moment of a current carrying circular loop of radius r and current I is:",
        "options": [
          "(a) I π r²",
          "(b) I / (π r²)",
          "(c) 2π r I",
          "(d) I / (2π r)"
        ],
        "answer": "(a) I π r²",
        "explanation": "Magnetic dipole moment M = I * A = I * (π r²)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A straight wire of length L carrying current I is bent into a circular loop. The magnetic dipole moment of the loop is:",
        "options": [
          "(a) I L² / (4π)",
          "(b) I L² / 4",
          "(c) I L / (2π)",
          "(d) 4π I L²"
        ],
        "answer": "(a) I L² / (4π)",
        "explanation": "Circumference 2π r = L => r = L / (2π). Area A = π r² = π (L / 2π)² = L² / (4π). Magnetic dipole moment M = I A = I L² / (4π)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The magnetic field inside a long straight solenoid carrying current I having n turns per unit length is:",
        "options": [
          "(a) μ₀ n I",
          "(b) μ₀ n I / 2",
          "(c) 2 μ₀ n I",
          "(d) Zero"
        ],
        "answer": "(a) μ₀ n I",
        "explanation": "Applying Ampere's circuital law to a rectangular loop enclosing turns of a long solenoid gives B = μ₀ n I."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If the current sensitivity of a galvanometer is increased by 20%, its voltage sensitivity:",
        "options": [
          "(a) also increases by 20%",
          "(b) may increase, decrease, or remain unchanged",
          "(c) decreases by 20%",
          "(d) becomes zero"
        ],
        "answer": "(b) may increase, decrease, or remain unchanged",
        "explanation": "Voltage sensitivity Vs = Is / R. If current sensitivity Is increases (e.g. by increasing number of turns N), resistance R also increases proportionally due to greater wire length, so Vs may remain unchanged."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A charged particle enters a uniform magnetic field at an angle of 45° with the field direction. The resulting trajectory is a:",
        "options": [
          "(a) straight line",
          "(b) circle",
          "(c) helix",
          "(d) parabola"
        ],
        "answer": "(c) helix",
        "explanation": "The velocity component parallel to B (v cos 45°) causes linear translation along the field, while the perpendicular component (v sin 45°) causes uniform circular motion. The superposition of both motions produces a helical path."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Biot-Savart law in vector form for a current element I dl is expressed as:",
        "options": [
          "(a) dB = [μ₀ / (4π)] * [I (dl × r̂) / r²]",
          "(b) dB = [μ₀ / (4π)] * [I (dl · r̂) / r²]",
          "(c) dB = [μ₀ / (4π)] * [I (dl × r) / r²]",
          "(d) dB = [μ₀ / (4π)] * [I (r × dl) / r³]"
        ],
        "answer": "(a) dB = [μ₀ / (4π)] * [I (dl × r̂) / r²]",
        "explanation": "dB = [μ₀ / (4π)] * [I (dl × r̂) / r²] = [μ₀ / (4π)] * [I (dl × r) / r³]."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "To convert a galvanometer of resistance G into a voltmeter of range 0 to V, a resistance R is connected in:",
        "options": [
          "(a) series, where R = V/Ig - G",
          "(b) parallel, where R = Ig G / V",
          "(c) series, where R = V/Ig + G",
          "(d) parallel, where R = V / Ig"
        ],
        "answer": "(a) series, where R = V/Ig - G",
        "explanation": "A high resistance R is connected in series with the galvanometer so that total resistance is (G + R). Then V = Ig (G + R) => R = V/Ig - G."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "One Ampere is defined as the current which, when flowing through two infinitely long straight parallel conductors of negligible cross-section placed 1 metre apart in vacuum, produces between them a force equal to:",
        "options": [
          "(a) 2 × 10⁻⁷ N/m",
          "(b) 4π × 10⁻⁷ N/m",
          "(c) 10⁻⁷ N/m",
          "(d) 9 × 10⁹ N/m"
        ],
        "answer": "(a) 2 × 10⁻⁷ N/m",
        "explanation": "From F / L = (μ₀ I1 I2) / (2π d) = (4π × 10⁻⁷ * 1 * 1) / (2π * 1) = 2 × 10⁻⁷ N/m."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The magnetic field B at a distance r from an infinitely long straight wire carrying current I is proportional to:",
        "options": [
          "(a) 1 / r",
          "(b) 1 / r²",
          "(c) r",
          "(d) 1 / r³"
        ],
        "answer": "(a) 1 / r",
        "explanation": "Using Ampere's law, B = μ₀ I / (2π r). Thus B ∝ 1/r."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The torque acting on a magnetic dipole of moment M in a uniform magnetic field B is:",
        "options": [
          "(a) M × B",
          "(b) M · B",
          "(c) B × M",
          "(d) Zero"
        ],
        "answer": "(a) M × B",
        "explanation": "Torque τ = M × B = M B sin θ."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A circular loop of radius R carries a current I. The magnetic field at an axial point at distance x = R from the centre is:",
        "options": [
          "(a) B_centre / (2√2)",
          "(b) B_centre / 2",
          "(c) B_centre / 4",
          "(d) B_centre / √2"
        ],
        "answer": "(a) B_centre / (2√2)",
        "explanation": "B_axial = μ₀ I R² / [2(R² + x²)^(3/2)]. At x = R: B_axial = μ₀ I R² / [2(2R²)^(3/2)] = μ₀ I / [2 * 2√2 R] = (1 / 2√2) * [μ₀ I / (2R)] = B_centre / (2√2)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The time period of revolution of a charged particle in a uniform magnetic field is independent of its:",
        "options": [
          "(a) speed and radius",
          "(b) mass",
          "(c) charge",
          "(d) magnetic field"
        ],
        "answer": "(a) speed and radius",
        "explanation": "Time period T = 2πr / v = 2π(mv/qB) / v = 2πm / (qB). It depends only on m, q, and B, and is independent of velocity v and orbital radius r."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A cylindrical conductor of radius R carries a steady current I uniformly distributed over its cross-section. The magnetic field at distance r < R inside the wire varies as:",
        "options": [
          "(a) B ∝ r",
          "(b) B ∝ 1/r",
          "(c) B = 0",
          "(d) B ∝ r²"
        ],
        "answer": "(a) B ∝ r",
        "explanation": "Inside the conductor (r < R), enclosed current is I_enc = I * (π r² / π R²) = I (r/R)². By Ampere's Law: B (2πr) = μ₀ I (r²/R²) => B = [μ₀ I / (2π R²)] r. Thus B ∝ r."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "In a moving coil galvanometer, the magnetic field is made radial by using:",
        "options": [
          "(a) cylindrical soft iron core and concave pole pieces",
          "(b) plane pole pieces",
          "(c) a copper core",
          "(d) a uniform external electric field"
        ],
        "answer": "(a) cylindrical soft iron core and concave pole pieces",
        "explanation": "Concave pole pieces combined with a cylindrical soft iron core produce a radial magnetic field, ensuring that the plane of the coil is always parallel to magnetic field lines (θ = 90°, sin θ = 1), so torque is always maximum (τ = NIAB)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "An ideal ammeter and an ideal voltmeter have resistances respectively equal to:",
        "options": [
          "(a) 0 and ∞",
          "(b) ∞ and 0",
          "(c) 0 and 0",
          "(d) ∞ and ∞"
        ],
        "answer": "(a) 0 and ∞",
        "explanation": "An ideal ammeter has zero resistance so that it does not reduce circuit current when inserted in series. An ideal voltmeter has infinite resistance so that it draws zero current when connected in parallel."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The force experienced by a straight wire of length 0.5 m carrying a current of 2 A placed in a uniform magnetic field of 0.4 T perpendicular to the wire is:",
        "options": [
          "(a) 0.4 N",
          "(b) 0.8 N",
          "(c) 0.2 N",
          "(d) Zero"
        ],
        "answer": "(a) 0.4 N",
        "explanation": "F = I L B sin 90° = 2 A * 0.5 m * 0.4 T * 1 = 0.4 N."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following is NOT accelerated by a cyclotron?",
        "options": [
          "(a) Proton",
          "(b) Alpha particle",
          "(c) Neutron",
          "(d) Deuteron"
        ],
        "answer": "(c) Neutron",
        "explanation": "A cyclotron accelerates only charged particles using electric fields. Since neutrons are electrically neutral (q = 0), they experience no electrostatic force."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The pitch of a helical path traced by a charged particle of mass m, charge q, moving with velocity v at angle θ to magnetic field B is:",
        "options": [
          "(a) 2π m v cos θ / (q B)",
          "(b) 2π m v sin θ / (q B)",
          "(c) 2π m / (q B)",
          "(d) 2π m v / (q B)"
        ],
        "answer": "(a) 2π m v cos θ / (q B)",
        "explanation": "Pitch = v_parallel * Time period = (v cos θ) * (2π m / qB) = 2π m v cos θ / (q B)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The SI unit of magnetic field B (Tesla) in terms of fundamental SI units is:",
        "options": [
          "(a) kg s⁻² A⁻¹",
          "(b) kg m s⁻² A⁻¹",
          "(c) kg s⁻¹ A⁻²",
          "(d) N m⁻¹ A⁻²"
        ],
        "answer": "(a) kg s⁻² A⁻¹",
        "explanation": "F = q v B => B = F / (q v). Dimensions: [M L T⁻²] / ([A T] [L T⁻¹]) = [M T⁻² A⁻¹]. In SI units: kg s⁻² A⁻¹."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): A magnetic field does not alter the kinetic energy of a moving charged particle.\nReason (R): The magnetic Lorentz force acts perpendicularly to the instantaneous velocity of the charge at every point, doing zero work.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. F = q(v × B) implies F ⊥ v, so dW = F · dr = F · v dt = 0. By the work-energy theorem, ΔKE = 0."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Two long parallel wires carrying currents in opposite directions repel each other.\nReason (R): Magnetic field produced by one wire exerts a repulsive force on the anti-parallel current in the second wire according to Fleming's left hand rule.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Applying right hand thumb rule for magnetic field and Fleming's left hand rule for force confirms mutual repulsion for opposite currents."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Increasing the current sensitivity of a galvanometer may not necessarily increase its voltage sensitivity.\nReason (R): Current sensitivity is inversely proportional to coil resistance, while voltage sensitivity is independent of coil resistance.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion is true. Reason is false: Current sensitivity is Is = NBA/k (independent of resistance R), while voltage sensitivity is Vs = NBA/(k R) (inversely proportional to R)."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A radial magnetic field is employed in a moving coil galvanometer.\nReason (R): A radial field ensures that the deflecting torque is independent of the deflection angle θ, producing a strictly linear scale.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Radial field keeps the coil plane parallel to field lines at all angles, giving τ = NIAB = k θ => θ ∝ I."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): An ammeter must have very low electrical resistance.\nReason (R): An ammeter is connected in series with the circuit branch whose current is to be measured, so it should not noticeably alter the total circuit resistance.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. If ammeter resistance were significant, the total circuit resistance would increase, significantly reducing the actual current being measured."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Biot-Savart law. Write its mathematical expression in vector form.",
        "answer": "Biot-Savart law statement and vector formula",
        "explanation": "1. Statement: The magnitude of the magnetic field dB produced by a current element I dl at a point with position vector r is: (i) directly proportional to current I, (ii) directly proportional to element length dl, (iii) directly proportional to sine of angle between dl and r, (iv) inversely proportional to square of distance r.\n2. Vector Form: dB = [μ₀ / (4π)] * [ I (dl × r̂) / r² ] = [μ₀ / (4π)] * [ I (dl × r) / r³ ]."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "State Ampere's circuital law and write its mathematical equation.",
        "answer": "Ampere's circuital law statement and formula",
        "explanation": "1. Statement: The line integral of the magnetic field B around any closed loop in free space is equal to μ₀ times the total net electric current enclosed by that loop.\n2. Mathematical Equation: ∮ B · dl = μ₀ I_enclosed."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "A galvanometer having a coil resistance of 12 Ω gives full scale deflection for a current of 4 mA. How can it be converted into an ammeter of range 0 to 6 A?",
        "answer": "Shunt resistance S = 0.008 Ω connected in parallel",
        "explanation": "Given: Galvanometer resistance G = 12 Ω, full scale current Ig = 4 mA = 4 × 10⁻³ A = 0.004 A, ammeter range I = 6 A.\nTo convert into an ammeter, a small shunt resistance S must be connected in parallel with the coil.\nS = (Ig * G) / (I - Ig) = (0.004 * 12) / (6 - 0.004) = 0.048 / 5.996 ≈ 0.008 Ω.\nHence, a shunt resistor of 0.008 Ω is connected in parallel with the galvanometer."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "A galvanometer of resistance 50 Ω gives full scale deflection for 2 mA. What resistance must be connected in series to convert it into a voltmeter of range 0 to 10 V?",
        "answer": "Series resistance R = 4950 Ω",
        "explanation": "Given: G = 50 Ω, Ig = 2 mA = 2 × 10⁻³ A, V = 10 V.\nResistance required in series:\nR = V / Ig - G = 10 / (2 × 10⁻³) - 50 = 5000 - 50 = 4950 Ω.\nTherefore, a resistance of 4950 Ω must be connected in series."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Derive an expression for the magnetic field at the centre of a circular coil of radius R carrying current I.",
        "answer": "Derivation of B = μ₀ I / (2R)",
        "explanation": "1. Consider a circular loop of radius R carrying steady current I. Divide the loop into infinitesimal elements dl.\n2. At the centre O, distance from any element dl is R, and dl ⊥ R (θ = 90°).\n3. By Biot-Savart Law, field due to dl: dB = [μ₀ / (4π)] * [I dl sin 90° / R²] = [μ₀ I / (4π R²)] dl.\n4. All elements produce fields directed along the same perpendicular direction (by right-hand rule).\n5. Total magnetic field B = ∮ dB = [μ₀ I / (4π R²)] ∮ dl = [μ₀ I / (4π R²)] * (2π R) = μ₀ I / (2R).\nFor N turns: B = μ₀ N I / (2R)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Define current sensitivity and voltage sensitivity of a galvanometer. How are they related?",
        "answer": "Definitions and relationship between Is and Vs",
        "explanation": "1. Current Sensitivity (Is): The deflection produced in the galvanometer per unit current passing through it: Is = θ / I = NBA / k.\n2. Voltage Sensitivity (Vs): The deflection produced in the galvanometer per unit voltage applied across it: Vs = θ / V = NBA / (k R).\n3. Relationship: Vs = Is / R, where R is total resistance of galvanometer coil."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "An alpha particle and a proton are accelerated through the same potential difference V and then enter perpendicularly into a uniform magnetic field B. Find the ratio of the radii of their circular paths.",
        "answer": "Ratio r_alpha / r_p = √2 : 1",
        "explanation": "Radius r = mv / (qB) = √(2m q V) / (qB) = (1/B) * √(2m V / q) ∝ √(m / q).\nFor proton: mass = m, charge = e => r_p ∝ √(m / e).\nFor alpha particle: mass = 4m, charge = 2e => r_alpha ∝ √(4m / 2e) = √(2m / e).\nRatio r_alpha / r_p = √(2m / e) / √(m / e) = √2 / 1 = √2 : 1."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "A straight wire carrying a current of 10 A is held horizontally in a region with a uniform horizontal magnetic field of 0.2 T directed perpendicular to the wire. Calculate the magnetic force per unit length on the wire.",
        "answer": "Force per unit length = 2.0 N/m",
        "explanation": "Force on a current-carrying wire: F = I L B sin θ.\nHere θ = 90°, so F / L = I B sin 90° = 10 A * 0.2 T * 1 = 2.0 N/m."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Using Ampere's circuital law, derive an expression for the magnetic field inside a long straight solenoid carrying current I with n turns per unit length.",
        "answer": "Derivation of B = μ₀ n I for a solenoid",
        "explanation": "1. Consider an infinitely long solenoid with n turns per metre carrying current I. The field inside is uniform and along the axis, and field outside is negligibly small (B ≈ 0).\n2. Choose a rectangular Amperean loop abcd of length L, where side ab of length L lies inside along the axis, cd lies outside, and bc, da are perpendicular to axis.\n3. Line integral: ∮ B · dl = ∫_a^b B · dl + ∫_b^c B · dl + ∫_c^d B · dl + ∫_d^a B · dl.\n- Side ab: B || dl => ∫_a^b B dl = B * L.\n- Sides bc and da: B ⊥ dl => dot product = 0.\n- Side cd: Outside B = 0 => integral = 0.\nTotal ∮ B · dl = B * L.\n4. Total current enclosed: I_enc = (Number of turns in length L) * I = (n L) I.\n5. By Ampere's Law: B * L = μ₀ (n L I) => B = μ₀ n I."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "State the principle of a moving coil galvanometer.",
        "answer": "Principle of Moving Coil Galvanometer",
        "explanation": "Principle: A current-carrying coil placed in an external magnetic field experiences a deflecting torque given by τ = NIAB sin θ. When suspended by a phosphor-bronze strip in a radial magnetic field (θ = 90°), the deflecting torque τ = NIAB is balanced by the restoring torque τ_r = k θ of the suspension fibre, producing a deflection proportional to current: θ ∝ I."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) State Biot-Savart law.\n(b) Using Biot-Savart law, derive an expression for the magnetic field at a point on the axis of a circular current loop of radius R carrying current I at a distance x from its centre.\n(c) Hence, find the magnetic field at the centre of the loop.",
        "answer": "Derivation of B_axial = μ₀ I R² / [2(R² + x²)^(3/2)]",
        "explanation": "Marking Scheme:\n(a) Statement of Biot-Savart Law (1 mark):\n- dB = [μ₀ / (4π)] * [I (dl × r̂) / r²].\n\n(b) Axial Field Derivation (3 marks):\n- Consider a circular loop of radius R in y-z plane carrying steady current I. Point P is on the x-axis at distance x from centre O.\n- Distance of P from any current element dl on circumference: r = √(R² + x²).\n- Since dl is perpendicular to position vector r, angle = 90°:\n  dB = [μ₀ / (4π)] * [I dl / (R² + x²)].\n- Resolving dB into components:\n  * Perpendicular to axis: dB cos θ components from diametrically opposite elements are equal and opposite, cancelling out completely.\n  * Along axis: dB sin θ components all point in the same direction along +x axis.\n- Net axial field B = ∮ dB sin θ = ∮ [μ₀ I dl / (4π (R² + x²))] * sin θ.\n- From geometry, sin θ = R / r = R / √(R² + x²).\n- Substituting sin θ:\n  B = [μ₀ I R / (4π (R² + x²)^(3/2))] ∮ dl.\n- Since ∮ dl = 2π R:\n  B = [μ₀ I R / (4π (R² + x²)^(3/2))] * (2π R) = μ₀ I R² / [2(R² + x²)^(3/2)].\n- For N turns: B = μ₀ N I R² / [2(R² + x²)^(3/2)].\n\n(c) Field at centre (1 mark):\n- At centre x = 0: B = μ₀ I R² / [2 (R²)^(3/2)] = μ₀ I R² / [2 R³] = μ₀ I / (2R)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Derive an expression for the force per unit length between two infinitely long straight parallel conductors carrying steady currents I1 and I2 separated by distance d in vacuum.\n(b) Hence, define the standard SI unit of current (one Ampere).\n(c) Two long parallel wires are 10 cm apart and carry currents of 5 A and 10 A in the same direction. Find the magnitude and direction of the force experienced per metre of each wire.",
        "answer": "Derivation of F/L = μ₀ I1 I2 / (2π d), definition of Ampere, and numerical",
        "explanation": "Marking Scheme:\n(a) Derivation (2.5 marks):\n- Wire 1 carrying current I1 produces a magnetic field at the position of wire 2 (distance d):\n  B1 = μ₀ I1 / (2π d) (directed perpendicularly into the plane by right-hand thumb rule).\n- Wire 2 carrying current I2 in this field B1 experiences a magnetic force on length L:\n  F2 = I2 L B1 sin 90° = I2 L [ μ₀ I1 / (2π d) ].\n- Force per unit length: F / L = (μ₀ I1 I2) / (2π d).\n- By Fleming's left hand rule, this force is directed towards wire 1 (attractive for parallel currents).\n\n(b) Definition of 1 Ampere (1.5 marks):\n- If I1 = I2 = 1 A and d = 1 m:\n  F/L = (4π × 10⁻⁷ * 1 * 1) / (2π * 1) = 2 × 10⁻⁷ N/m.\n- Definition: One Ampere is that steady current which, when maintained in each of two infinitely long, straight, parallel conductors of negligible circular cross-section, placed 1 metre apart in vacuum, produces between them a force equal to 2 × 10⁻⁷ Newton per metre of length.\n\n(c) Numerical (1 mark):\n- F/L = (4π × 10⁻⁷ * 5 * 10) / (2π * 0.1) = (2 × 10⁻⁷ * 50) / 0.1 = 10⁻⁴ N/m (attractive)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Describe the principle, construction, and working of a Moving Coil Galvanometer with a labelled diagram.\n(b) Explain the role of:\n(i) a radial magnetic field,\n(ii) a soft iron core.",
        "answer": "Full theory of Moving Coil Galvanometer",
        "explanation": "Marking Scheme:\n(a) Theory & Working (3 marks):\n- Principle: A current-carrying coil placed in a magnetic field experiences a deflecting torque.\n- Construction: A rectangular coil of insulated copper wire wound on a light non-magnetic frame, suspended between cylindrical concave magnetic poles by a phosphor-bronze strip, with a soft iron core inside and a hairspring at bottom.\n- Working: When current I flows through coil of N turns, area A in magnetic field B, deflecting torque is τ_def = NIAB sin θ.\n- In a radial field, θ = 90°, so τ_def = NIAB.\n- The suspension strip twists through angle θ, setting up a restoring torque: τ_res = k θ, where k is torsional restoring couple per unit twist.\n- In equilibrium: NIAB = k θ => θ = (NAB / k) I => θ ∝ I.\n\n(b) Roles (2 marks):\n(i) Radial magnetic field: Ensures the plane of the coil remains parallel to magnetic field lines in all positions (θ = 90°), making the deflecting torque constant and maximum (τ = NIAB), which produces a linear scale where deflection is directly proportional to current (θ ∝ I).\n(ii) Soft iron core: Has high magnetic permeability (μr >> 1), which concentrates magnetic flux lines through the coil, thereby substantially increasing magnetic field strength B and enhancing the galvanometer's sensitivity."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Velocity Selector and Cyclotron Frequency\nWhen a charged particle of charge q and mass m enters a region with mutually perpendicular electric and magnetic fields (E ⊥ B), it experiences the Lorentz force F = q (E + v × B). If electric and magnetic forces are equal and opposite, qE = qvB, the particle passes undeflected with velocity v = E/B. In a purely perpendicular magnetic field, the particle executes uniform circular motion with cyclotron frequency f = qB / (2πm), which is independent of particle speed and radius.\n(i) Write the condition under which a charged particle traverses crossed fields without deflection.\n(ii) Why is cyclotron frequency independent of the radius of the circular orbit?\n(iii) An electron with kinetic energy 10 keV enters perpendicularly into a magnetic field of 0.2 T. Calculate its radius of path.\n(iv) Can crossed electric and magnetic fields separate isotopes having equal charge and energy?",
        "answer": "Solutions to Case Study on Velocity Selector and Cyclotron Frequency",
        "explanation": "(i) Condition: qE = qvB => v = E / B, with electric force qE directed exactly opposite to magnetic force q(v × B).\n(ii) Radius is r = mv / (qB), so speed v = qBr / m. Time period T = 2πr / v = 2πr / (qBr/m) = 2πm / (qB). The radius r cancels out completely, making frequency f = 1/T = qB / (2πm) independent of radius.\n(iii) KE = 10 keV = 10 × 10³ × 1.6 × 10⁻¹⁹ J = 1.6 × 10⁻¹⁵ J.\nSpeed v = √(2 KE / m) = √( 2 * 1.6 × 10⁻¹⁵ / (9.1 × 10⁻³¹) ) = √(3.516 × 10¹⁵) ≈ 5.93 × 10⁷ m/s.\nRadius r = mv / (qB) = (9.1 × 10⁻³¹ * 5.93 × 10⁷) / (1.6 × 10⁻¹⁹ * 0.2) = 5.396 × 10⁻²³ / 3.2 × 10⁻²⁰ ≈ 1.69 × 10⁻³ m = 1.69 mm.\n(iv) A velocity selector selects a specific velocity v = E/B. Since kinetic energy K = 1/2 m v², isotopes of different masses m will have different velocities for the same kinetic energy. Thus, only particles with velocity matching E/B pass through, allowing isotope separation."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Derive an expression for the torque experienced by a rectangular current-carrying loop of N turns, area A, carrying current I placed in a uniform magnetic field B.\n(b) A square coil of side 10 cm consists of 20 turns and carries a current of 12 A. The coil is suspended vertically and the normal to the plane of the coil makes an angle of 30° with the direction of a uniform horizontal magnetic field of magnitude 0.80 T. What is the magnitude of torque experienced by the coil?",
        "answer": "Torque derivation τ = NIAB sin θ and numerical calculation",
        "explanation": "(a) Derivation (3 marks):\n- Consider a rectangular loop ABCD with sides AB = CD = b and BC = DA = a carrying current I in uniform magnetic field B.\n- Forces on sides BC and DA: F = I a B sin(90° ± θ). These forces are equal in magnitude, opposite in direction, and act along the same line (collinear), thus cancelling out.\n- Forces on sides AB and CD: F1 = F2 = I b B (perpendicular to field). These forces are equal and opposite, but their lines of action do not coincide, forming a couple.\n- Perpendicular distance between lines of action = a sin θ, where θ is angle between normal to coil area and magnetic field B.\n- Torque on 1 turn: τ = Force × perpendicular distance = (I b B) * (a sin θ) = I (a b) B sin θ = I A B sin θ.\n- For N turns: τ = N I A B sin θ. In vector form: τ = M × B, where M = N I A n̂.\n\n(b) Numerical (2 marks):\n- Side = 10 cm = 0.1 m => Area A = (0.1)² = 0.01 m².\n- N = 20, I = 12 A, B = 0.80 T, θ = 30°.\n- τ = N I A B sin θ = 20 * 12 * 0.01 * 0.80 * sin 30° = 240 * 0.01 * 0.80 * 0.5 = 0.96 N·m."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Explain with circuit diagrams how a moving coil galvanometer can be converted into:\n(i) an ammeter of range 0 to I,\n(ii) a voltmeter of range 0 to V.\n(b) A galvanometer with coil resistance 15 Ω gives full scale deflection for a current of 5 mA. How will you convert it into a voltmeter of range 0 to 18 V?",
        "answer": "Conversion of galvanometer to ammeter and voltmeter and numerical",
        "explanation": "(a) (i) Conversion to Ammeter (2 marks):\n- A low resistance called shunt S is connected in parallel with the galvanometer.\n- Voltage drop across S equals voltage drop across G: (I - Ig) S = Ig G => S = (Ig G) / (I - Ig).\n(ii) Conversion to Voltmeter (2 marks):\n- A high resistance R is connected in series with the galvanometer.\n- Total voltage V = Ig (G + R) => R = V / Ig - G.\n\n(b) Numerical (1 mark):\n- Given: G = 15 Ω, Ig = 5 mA = 0.005 A, V = 18 V.\n- R = V / Ig - G = 18 / 0.005 - 15 = 3600 - 15 = 3585 Ω.\n- A resistance of 3585 Ω must be connected in series with the galvanometer."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A straight horizontal conducting rod of length 0.45 m and mass 60 g is suspended by two vertical wires at its ends. A current of 5.0 A is set up in the rod through the wires.\n(i) What magnetic field normal to the conductor must be set up to make the tension in the wires zero? (g = 9.8 m/s²)\n(ii) What will be the total tension in the wires if the direction of current is reversed keeping the magnetic field unchanged?",
        "answer": "(i) B = 0.261 T, (ii) Total tension = 1.176 N",
        "explanation": "(i) For tension in supporting wires to be zero, upward magnetic force must balance downward gravitational force:\nF_mag = mg => I L B sin 90° = m g\n=> B = m g / (I L) = (0.060 kg * 9.8 m/s²) / (5.0 A * 0.45 m) = 0.588 / 2.25 ≈ 0.261 T (directed horizontally such that I × B points upwards).\n(ii) If current is reversed, magnetic force acts downwards in the same direction as gravity:\nTotal downward force = mg + F_mag = 0.588 + 0.588 = 1.176 N.\nTherefore, total tension in the wires = 1.176 N."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) An electron moving with kinetic energy 25 keV enters a uniform magnetic field of 0.5 T along a direction making an angle of 30° with the field. Calculate:\n(i) radius of helical path,\n(ii) pitch of helix.\n(b) Show that frequency of revolution does not depend on electron speed.",
        "answer": "Helical motion calculations and frequency proof",
        "explanation": "(a) Kinetic energy K = 25 keV = 25 × 10³ × 1.6 × 10⁻¹⁹ J = 4.0 × 10⁻¹⁵ J.\nSpeed v = √(2K / m) = √( 2 * 4.0 × 10⁻¹⁵ / (9.1 × 10⁻³¹) ) = √(8.79 × 10¹⁵) ≈ 9.38 × 10⁷ m/s.\nParallel component: v_parallel = v cos 30° = (9.38 × 10⁷) * (√3/2) ≈ 8.12 × 10⁷ m/s.\nPerpendicular component: v_perp = v sin 30° = (9.38 × 10⁷) * 0.5 = 4.69 × 10⁷ m/s.\n(i) Radius r = m v_perp / (q B) = (9.1 × 10⁻³¹ * 4.69 × 10⁷) / (1.6 × 10⁻¹⁹ * 0.5) = 4.268 × 10⁻²³ / 8.0 × 10⁻²⁰ = 5.34 × 10⁻⁴ m = 0.534 mm.\n(ii) Time period T = 2π m / (q B) = (2 * 3.1416 * 9.1 × 10⁻³¹) / (1.6 × 10⁻¹⁹ * 0.5) = 5.718 × 10⁻³⁰ / 8.0 × 10⁻²⁰ = 7.15 × 10⁻¹¹ s.\nPitch = v_parallel * T = (8.12 × 10⁷ m/s) * (7.15 × 10⁻¹¹ s) ≈ 5.81 × 10⁻³ m = 5.81 mm.\n(b) Frequency f = 1/T = qB / (2π m). Since this expression contains only fundamental constants q, m, and field strength B, it is completely independent of electron velocity v."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A square loop of side 20 cm carrying current 8 A is placed in a uniform magnetic field of 0.5 T. Find the magnetic potential energy of the loop when its magnetic dipole moment makes an angle of:\n(i) 0°,\n(ii) 90°,\n(iii) 180° with the magnetic field.\nIdentify the states of stable and unstable equilibrium.",
        "answer": "(i) U = -0.16 J (stable), (ii) U = 0 J, (iii) U = +0.16 J (unstable)",
        "explanation": "Area of square loop A = (0.2 m)² = 0.04 m².\nMagnetic dipole moment M = I A = 8 A * 0.04 m² = 0.32 A·m².\nPotential energy U = - M · B = - M B cos θ.\nHere M B = 0.32 * 0.5 = 0.16 J.\n(i) θ = 0°: U = - 0.16 cos 0° = - 0.16 J. (Minimum energy => Stable Equilibrium).\n(ii) θ = 90°: U = - 0.16 cos 90° = 0 J.\n(iii) θ = 180°: U = - 0.16 cos 180° = + 0.16 J. (Maximum energy => Unstable Equilibrium)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State the expression for the magnetic field produced by a long straight current-carrying wire at distance r using Ampere's circuital law.\n(b) Two long, parallel wires carrying currents of 3 A and 5 A in opposite directions are separated by 20 cm. Find the location of a line in the plane of the wires where the net magnetic field is zero.",
        "answer": "Ampere derivation and null magnetic field position",
        "explanation": "(a) Ampere's circuital law: ∮ B · dl = μ₀ I => B (2π r) = μ₀ I => B = μ₀ I / (2π r).\n(b) Let the wires carry I1 = 3 A (at origin x = 0) and I2 = 5 A (at x = 20 cm = 0.2 m) in opposite directions.\nBecause currents are opposite, between the wires their magnetic fields point in the same direction, so B_net cannot be zero between them.\nThe null point P must lie outside the wires, closer to the weaker current (3 A), say at distance x to the left of wire 1 (x < 0).\nDistance from wire 1 is x, distance from wire 2 is (0.2 + x).\nFor B_net = 0:\nμ₀ I1 / (2π x) = μ₀ I2 / [2π (0.2 + x)]\n=> 3 / x = 5 / (0.2 + x)\n=> 3 (0.2 + x) = 5x\n=> 0.6 + 3x = 5x => 2x = 0.6 => x = 0.3 m = 30 cm.\nTherefore, the net magnetic field is zero along a line parallel to the wires at a distance of 30 cm from the 3 A wire, on the side away from the 5 A wire."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "unit_num": 3,
      "title": "Magnetism and Matter",
      "unit_title": "Magnetic Effects of Current and Magnetism",
      "weightage_unit": "17 Marks (Units 3 & 4)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The magnetic susceptibility χ of a diamagnetic substance is:",
        "options": [
          "(a) small and positive",
          "(b) large and positive",
          "(c) small and negative",
          "(d) independent of temperature and positive"
        ],
        "answer": "(c) small and negative",
        "explanation": "Diamagnetic materials have a negative susceptibility (-1 ≤ χ < 0) that is small in magnitude and essentially independent of temperature."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "At the magnetic poles of the Earth, the angle of dip is:",
        "options": [
          "(a) 0°",
          "(b) 45°",
          "(c) 90°",
          "(d) 180°"
        ],
        "answer": "(c) 90°",
        "explanation": "At the magnetic poles, Earth's magnetic field lines are completely vertical, pointing directly into the ground at the North magnetic pole and out at the South magnetic pole. Thus, the angle of dip δ = 90°."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The horizontal component of Earth's magnetic field is zero at:",
        "options": [
          "(a) magnetic equator",
          "(b) magnetic poles",
          "(c) geographic equator",
          "(d) latitude of 45°"
        ],
        "answer": "(b) magnetic poles",
        "explanation": "BH = B cos δ. At the magnetic poles, angle of dip δ = 90°, so BH = B cos 90° = 0."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "According to Curie's law, the magnetic susceptibility of a paramagnetic substance is proportional to:",
        "options": [
          "(a) T",
          "(b) 1 / T",
          "(c) T²",
          "(d) 1 / T²"
        ],
        "answer": "(b) 1 / T",
        "explanation": "Curie's law states that magnetization is inversely proportional to absolute temperature: χ = C / T, where C is Curie's constant."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Magnetic field lines:",
        "options": [
          "(a) always form continuous closed loops",
          "(b) cannot pass through vacuum",
          "(c) start from south pole and end at north pole outside the magnet",
          "(d) intersect each other at neutral points"
        ],
        "answer": "(a) always form continuous closed loops",
        "explanation": "Because isolated magnetic monopoles do not exist (∮ B · dA = 0), magnetic field lines are continuous closed loops, pointing from North to South outside the magnet and South to North inside."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If a bar magnet of magnetic moment M is cut into two equal halves along its length, the magnetic moment of each half will be:",
        "options": [
          "(a) M",
          "(b) M / 2",
          "(c) 2 M",
          "(d) M / 4"
        ],
        "answer": "(b) M / 2",
        "explanation": "When cut longitudinally (along length), the pole strength of each piece becomes m' = m/2 while length 2l remains unchanged. New dipole moment M' = m' * 2l = (m/2) * 2l = M / 2."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The angle between the magnetic meridian and the geographic meridian at a place is called:",
        "options": [
          "(a) Angle of dip",
          "(b) Magnetic declination",
          "(c) Magnetic latitude",
          "(d) Neutral angle"
        ],
        "answer": "(b) Magnetic declination",
        "explanation": "Magnetic declination (or variation) is defined as the angle between the geographic meridian (true north-south) and the magnetic meridian (direction of compass needle)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The SI unit of magnetic dipole moment is:",
        "options": [
          "(a) A·m² (or J/T)",
          "(b) A/m",
          "(c) T·m/A",
          "(d) J·T"
        ],
        "answer": "(a) A·m² (or J/T)",
        "explanation": "Magnetic dipole moment M = I * A, so its SI unit is Ampere-metre² (A·m²). Also from torque τ = M B, M = τ / B has units N·m / T = Joule / Tesla (J/T)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "At a place, the horizontal and vertical components of Earth's magnetic field are equal. The angle of dip at that place is:",
        "options": [
          "(a) 0°",
          "(b) 30°",
          "(c) 45°",
          "(d) 60°"
        ],
        "answer": "(c) 45°",
        "explanation": "tan δ = BV / BH. Since BV = BH, tan δ = 1 => δ = 45°."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Relative permeability μr and magnetic susceptibility χ are related by:",
        "options": [
          "(a) μr = 1 + χ",
          "(b) μr = 1 - χ",
          "(c) χ = 1 + μr",
          "(d) μr = χ - 1"
        ],
        "answer": "(a) μr = 1 + χ",
        "explanation": "B = μ₀ (H + M) = μ₀ (1 + χ) H = μ H => μ = μ₀ (1 + χ) => μr = μ / μ₀ = 1 + χ."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "A superconductor exhibits perfect diamagnetism. Its magnetic susceptibility χ is:",
        "options": [
          "(a) 0",
          "(b) +1",
          "(c) -1",
          "(d) infinity"
        ],
        "answer": "(c) -1",
        "explanation": "In superconductors, the Meissner effect leads to total flux expulsion (B = 0). Since B = μ₀ (1 + χ) H = 0, we must have 1 + χ = 0 => χ = -1."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "When a ferromagnetic material is heated above its Curie temperature, it becomes:",
        "options": [
          "(a) diamagnetic",
          "(b) paramagnetic",
          "(c) superconductor",
          "(d) non-magnetic"
        ],
        "answer": "(b) paramagnetic",
        "explanation": "Above the Curie temperature (Tc), thermal agitation destroys the domain alignment of the ferromagnetic material, transforming it into a paramagnetic substance obeying the Curie-Weiss law."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A compass needle free to rotate in a vertical plane orientation at the magnetic equator will align itself:",
        "options": [
          "(a) vertically",
          "(b) horizontally",
          "(c) at 45° to horizontal",
          "(d) in any arbitrary direction"
        ],
        "answer": "(b) horizontally",
        "explanation": "At the magnetic equator, angle of dip δ = 0°, meaning the vertical component BV = 0 and Earth's field is purely horizontal. A dip circle needle therefore rests completely horizontal."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Electromagnets are made of soft iron because soft iron has:",
        "options": [
          "(a) high retentivity and high coercivity",
          "(b) low retentivity and low coercivity",
          "(c) high permeability and low retentivity",
          "(d) low permeability and high coercivity"
        ],
        "answer": "(c) high permeability and low retentivity",
        "explanation": "Soft iron is easily magnetised (high permeability) and readily demagnetised when the current is switched off (low retentivity and low coercivity), making it ideal for electromagnets."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Permanent magnets are made of materials having:",
        "options": [
          "(a) high retentivity and high coercivity",
          "(b) low retentivity and low coercivity",
          "(c) high retentivity and low coercivity",
          "(d) low retentivity and high coercivity"
        ],
        "answer": "(a) high retentivity and high coercivity",
        "explanation": "Permanent magnets must retain strong magnetization (high retentivity) and resist demagnetization from stray magnetic fields or mechanical shocks (high coercivity), such as Alnico or carbon steel."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The net magnetic flux through any closed surface is always:",
        "options": [
          "(a) μ₀ times enclosed pole strength",
          "(b) zero",
          "(c) positive",
          "(d) infinite"
        ],
        "answer": "(b) zero",
        "explanation": "According to Gauss's Law for magnetism: ∮ B · dA = 0. This reflects the non-existence of isolated magnetic monopoles; every magnetic field line that enters a closed surface must also exit."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The ratio of magnetic field on the axial line to that on the equatorial line of a short bar magnet at the same distance d is:",
        "options": [
          "(a) 1 : 1",
          "(b) 2 : 1",
          "(c) 1 : 2",
          "(d) 4 : 1"
        ],
        "answer": "(b) 2 : 1",
        "explanation": "For a short bar magnet, B_axial = 2 μ₀ M / (4π d³) and B_equatorial = μ₀ M / (4π d³). Their ratio is 2 : 1."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The Bohr magneton μB represents the magnetic moment associated with an electron's orbital motion in the first Bohr orbit and has the value:",
        "options": [
          "(a) 9.27 × 10⁻²⁴ A·m²",
          "(b) 1.6 × 10⁻¹⁹ A·m²",
          "(c) 6.63 × 10⁻³⁴ A·m²",
          "(d) 8.85 × 10⁻¹² A·m²"
        ],
        "answer": "(a) 9.27 × 10⁻²⁴ A·m²",
        "explanation": "μB = e h / (4π m) = (1.6 × 10⁻¹⁹ * 6.63 × 10⁻³⁴) / (4 * 3.1416 * 9.1 × 10⁻³¹) ≈ 9.27 × 10⁻²⁴ A·m² (or J/T)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "When a bar of diamagnetic material is placed in an external non-uniform magnetic field, it tends to move from:",
        "options": [
          "(a) weaker to stronger parts of the field",
          "(b) stronger to weaker parts of the field",
          "(c) perpendicular to the field",
          "(d) along the direction of the field gradient"
        ],
        "answer": "(b) stronger to weaker parts of the field",
        "explanation": "Diamagnetic substances are feebly repelled by magnetic fields. Therefore, in a non-uniform field, they experience a net force pushing them from stronger field regions towards weaker field regions."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A bar magnet of length 10 cm and pole strength 2 A·m has magnetic moment:",
        "options": [
          "(a) 0.2 A·m²",
          "(b) 20 A·m²",
          "(c) 2 A·m²",
          "(d) 0.02 A·m²"
        ],
        "answer": "(a) 0.2 A·m²",
        "explanation": "M = m * 2l = 2 A·m * 0.10 m = 0.2 A·m²."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If a bar magnet is cut into two equal halves perpendicular to its axis, the pole strength of each piece:",
        "options": [
          "(a) becomes half",
          "(b) remains unchanged",
          "(c) is doubled",
          "(d) becomes zero"
        ],
        "answer": "(b) remains unchanged",
        "explanation": "Transverse cutting does not change the cross-sectional area of the poles, so the pole strength m remains unchanged, while the length becomes l/2, resulting in M' = M/2."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The potential energy of a magnetic dipole of moment M aligned antiparallel to a uniform magnetic field B is:",
        "options": [
          "(a) - M B",
          "(b) + M B",
          "(c) 0",
          "(d) 2 M B"
        ],
        "answer": "(b) + M B",
        "explanation": "U = - M · B = - M B cos 180° = - M B (-1) = + M B."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following materials is paramagnetic?",
        "options": [
          "(a) Bismuth",
          "(b) Aluminium",
          "(c) Copper",
          "(d) Water"
        ],
        "answer": "(b) Aluminium",
        "explanation": "Aluminium, sodium, oxygen (at STP), and platinum are paramagnetic. Bismuth, copper, and water are diamagnetic."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A dip needle indicates an apparent dip of 45° in a plane at 30° to the magnetic meridian. The true dip δ satisfies:",
        "options": [
          "(a) tan δ = √3 / 2",
          "(b) tan δ = 1 / √3",
          "(c) tan δ = √3",
          "(d) tan δ = 2 / √3"
        ],
        "answer": "(a) tan δ = √3 / 2",
        "explanation": "Relation between true dip δ and apparent dip δ' at angle θ to meridian: tan δ' = tan δ / cos θ => tan 45° = tan δ / cos 30° => 1 = tan δ / (√3/2) => tan δ = √3/2."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In a bar magnet, neutral points are points where:",
        "options": [
          "(a) Earth's magnetic field is zero",
          "(b) the field of the magnet is zero",
          "(c) the magnetic field of the magnet is equal and opposite to the horizontal component of Earth's magnetic field",
          "(d) angle of dip is 90°"
        ],
        "answer": "(c) the magnetic field of the magnet is equal and opposite to the horizontal component of Earth's magnetic field",
        "explanation": "Neutral points are locations where the magnetic field produced by the bar magnet is exactly equal in magnitude and opposite in direction to the horizontal component of the Earth's magnetic field (B_magnet = BH), resulting in zero net horizontal field."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Isolated magnetic poles (monopoles) do not exist in nature.\nReason (R): Magnetic field lines always form continuous closed loops without beginning or end, obeying Gauss's law ∮ B · dA = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The absence of magnetic monopoles means that the net magnetic flux through any closed surface is identically zero."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Diamagnetic materials tend to move from stronger to weaker regions of a non-uniform magnetic field.\nReason (R): Diamagnetic materials develop a weak induced magnetic moment in the direction opposite to the applied external magnetic field.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Due to Lenz's law on orbiting electrons, the induced moment opposes the external field, causing mutual repulsion towards weaker field regions."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The magnetic susceptibility of a paramagnetic material varies inversely with absolute temperature.\nReason (R): Higher thermal agitation at higher temperatures increasingly disrupts the alignment of atomic magnetic dipoles along the external field.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains Curie's law (χ = C/T): thermal kinetic energy (kT) randomises dipole orientations, lowering net magnetization."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): At the magnetic equator of the Earth, a freely suspended magnetic needle rests in an entirely horizontal position.\nReason (R): At the magnetic equator, the vertical component of the Earth's magnetic field is zero.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. BV = B sin 0° = 0 at the equator, so the resultant field is entirely horizontal."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Soft iron is preferred over steel for making electromagnets and transformer cores.\nReason (R): Soft iron has high retentivity and high coercivity compared to steel.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion is true. Reason is false: Soft iron has high permeability, but low retentivity and low coercivity (it easily demagnetises), which minimizes hysteresis energy loss."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Define the magnetic elements of the Earth at a place: (i) Magnetic declination, (ii) Angle of dip.",
        "answer": "Definitions of magnetic declination and angle of dip",
        "explanation": "1. Magnetic Declination (θ): The angle between the geographic meridian and the magnetic meridian at a given place on Earth's surface.\n2. Angle of Dip / Magnetic Inclination (δ): The angle which the direction of the total magnetic field of the Earth makes with the horizontal in the magnetic meridian."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Write two important distinguishing properties of diamagnetic and paramagnetic materials.",
        "answer": "Comparison between diamagnetic and paramagnetic materials",
        "explanation": "1. Magnetic Susceptibility (χ):\n- Diamagnetic: Small and negative (-1 ≤ χ < 0), independent of temperature.\n- Paramagnetic: Small and positive (0 < χ < ε), varies inversely with temperature (χ ∝ 1/T).\n2. Behavior in External Magnetic Field:\n- Diamagnetic: Feebly repelled by a magnet; moves from stronger to weaker field regions.\n- Paramagnetic: Feebly attracted by a magnet; moves from weaker to stronger field regions."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "In the magnetic meridian of a certain place, the horizontal component of Earth's magnetic field is 0.26 G and the dip angle is 60°. What is the total magnetic field of the Earth at this location?",
        "answer": "Total magnetic field B = 0.52 G",
        "explanation": "Given: BH = 0.26 G, δ = 60°.\nHorizontal component formula: BH = B cos δ\n=> B = BH / cos δ = 0.26 G / cos 60° = 0.26 / 0.5 = 0.52 Gauss (or 0.52 × 10⁻⁴ T)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Show that a current-carrying solenoid is equivalent to a bar magnet.",
        "answer": "Equivalence of solenoid and bar magnet",
        "explanation": "1. Magnetic Field Lines: Both have identical magnetic field line patterns outside: lines emerge from one end (acting as North pole) and enter the other end (acting as South pole), forming closed loops.\n2. Far-field Formula: The magnetic field on the axis at large distance r for both is given by B = [2 μ₀ M / (4π r³)], where M = N I A for the solenoid.\n3. Both experience torque τ = M × B in an external field and exhibit north-south directive property when suspended."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "State Gauss's law for magnetism. Explain its physical significance.",
        "answer": "Gauss's law for magnetism and physical significance",
        "explanation": "1. Statement: The net magnetic flux through any arbitrary closed surface is always zero: ∮ B · dA = 0.\n2. Physical Significance: (i) Isolated magnetic poles (monopoles) do not exist in nature; magnetic poles always occur in equal and opposite pairs (dipoles). (ii) Magnetic field lines are continuous closed loops with no beginning and no end. Every line entering a closed surface must necessarily leave it."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Define retentivity and coercivity of a ferromagnetic material.",
        "answer": "Definitions of retentivity and coercivity",
        "explanation": "1. Retentivity (Residual Magnetism): The value of magnetic field B (or intensity of magnetization M) remaining in a ferromagnetic specimen when the external magnetizing field H is reduced to zero.\n2. Coercivity: The magnitude of the reverse magnetizing field H required to completely reduce the residual magnetization to zero."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Derive an expression for the magnetic dipole moment of an electron revolving around the nucleus in a hydrogen atom. Define Bohr magneton.",
        "answer": "Derivation of M = e v r / 2 and Bohr magneton definition",
        "explanation": "1. Consider an electron of charge e and mass m moving with speed v in circular orbit of radius r.\n2. Equivalent current: I = e / T = e / (2π r / v) = e v / (2π r).\n3. Orbital area A = π r².\n4. Magnetic dipole moment M = I A = [e v / (2π r)] * (π r²) = (1/2) e v r.\n5. In terms of orbital angular momentum L = m v r => v r = L / m:\n   M = (e / 2m) L.\n6. By Bohr's postulate, L = n h / (2π). For n = 1 (first orbit):\n   μB = (e / 2m) * [h / (2π)] = e h / (4π m).\n7. Definition: Bohr magneton is the fundamental natural unit of magnetic dipole moment associated with an electron's orbital motion in the ground state of hydrogen."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is Curie temperature? What happens to a ferromagnetic material when it is heated above its Curie temperature?",
        "answer": "Curie temperature and effect on ferromagnet",
        "explanation": "1. Curie temperature (Tc) is the specific transition temperature above which a ferromagnetic material loses its spontaneous magnetization and transforms into a paramagnetic material.\n2. Above Tc, thermal vibrations overcome the quantum mechanical exchange forces that maintain domain alignment. The domains break down into randomly oriented atomic dipoles, and the material exhibits paramagnetic behavior governed by the Curie-Weiss law: χ = C / (T - Tc)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "A short bar magnet placed with its axis at 30° with an external field of 800 G experiences a torque of 0.016 N·m. (i) What is the magnetic moment of the magnet? (ii) What is the work done in moving it from its most stable to most unstable position?",
        "answer": "(i) M = 0.40 A·m², (ii) W = 0.064 J",
        "explanation": "Given: θ = 30°, B = 800 G = 800 × 10⁻⁴ T = 0.08 T, τ = 0.016 N·m.\n(i) τ = M B sin θ => 0.016 = M * 0.08 * sin 30° = M * 0.08 * 0.5 = 0.04 M\n=> M = 0.016 / 0.04 = 0.40 A·m² (or J/T).\n(ii) Work done from stable (θ1 = 0°) to unstable (θ2 = 180°):\nW = - M B (cos 180° - cos 0°) = - M B (-1 - 1) = 2 M B\nW = 2 * 0.40 * 0.08 = 0.064 J."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Can two magnetic field lines intersect each other? Justify your answer.",
        "answer": "Justification why magnetic field lines never intersect",
        "explanation": "No, two magnetic field lines can never cross each other. If they were to intersect at a point, one could draw two different tangents at that intersection point, implying two distinct directions of resultant magnetic field at the same location, which is physically impossible."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Derive an expression for the magnetic field at a point on the axis of a bar magnet of length 2l and magnetic dipole moment M at distance d from its centre.\n(b) A short bar magnet has a magnetic moment of 0.48 J/T. Give the direction and magnitude of the magnetic field produced by the magnet at a distance of 10 cm from the centre of the magnet on:\n(i) the axis,\n(ii) the equatorial line.",
        "answer": "Derivation of axial field and numerical calculations",
        "explanation": "Marking Scheme:\n(a) Derivation (3 marks):\n- Consider a bar magnet of length 2l and pole strength m, dipole moment M = m * 2l.\n- Let P be on the axis at distance d from centre O.\n- Distance of P from North pole: (d - l); from South pole: (d + l).\n- Field due to North pole: B_N = [μ₀ / (4π)] * [m / (d - l)²] (directed away from N).\n- Field due to South pole: B_S = [μ₀ / (4π)] * [m / (d + l)²] (directed towards S).\n- Resultant field B = B_N - B_S = [μ₀ m / (4π)] * [ 1/(d - l)² - 1/(d + l)² ]\n  = [μ₀ m / (4π)] * [ 4dl / (d² - l²)² ] = [μ₀ (m * 2l) * 2d] / [4π (d² - l²)²] = [μ₀ * 2Md] / [4π (d² - l²)²].\n- For a short magnet (d >> l): B_axial = [2 μ₀ M] / [4π d³] along the dipole moment vector.\n\n(b) Numerical (2 marks):\n- M = 0.48 J/T, d = 10 cm = 0.1 m.\n(i) On axis: B_axial = (μ₀ / 4π) * (2M / d³) = (10⁻⁷ * 2 * 0.48) / (0.1)³ = 0.96 × 10⁻⁴ T = 0.96 G, directed along the direction of M (from S to N).\n(ii) On equatorial line: B_equatorial = B_axial / 2 = 0.48 × 10⁻⁴ T = 0.48 G, directed opposite to M (from N to S)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Explain the origin of diamagnetism, paramagnetism, and ferromagnetism on the basis of atomic structure and domain theory.\n(b) Distinguish between the three types of magnetic materials on the basis of:\n(i) magnetic susceptibility χ,\n(ii) relative permeability μr,\n(iii) effect of temperature.",
        "answer": "Detailed comparison of diamagnetic, paramagnetic, and ferromagnetic materials",
        "explanation": "Marking Scheme:\n(a) Atomic/Domain Origin (2.5 marks):\n- Diamagnetism: Occurs in atoms with paired electrons where net permanent dipole moment is zero. External field induces an opposing magnetic moment (Lenz's law), creating weak repulsion.\n- Paramagnetism: Occurs in atoms with unpaired electrons having permanent atomic dipole moments. In the absence of a field, thermal motion randomises their orientations. An external field aligns them weakly along the field.\n- Ferromagnetism: Atoms have strong permanent magnetic dipole moments coupled by quantum mechanical exchange interactions forming macroscopic regions called domains. An external field aligns entire domains simultaneously, producing intense magnetization.\n\n(b) Comparison Table (2.5 marks):\nProperty | Diamagnetic | Paramagnetic | Ferromagnetic\n---|---|---|---\nSusceptibility (χ) | Small and negative (-1 ≤ χ < 0) | Small and positive (0 < χ < 10⁻³) | Very large and positive (χ >> 10³)\nRelative Permeability (μr) | Slightly less than 1 (0 ≤ μr < 1) | Slightly greater than 1 (1 < μr < 1 + ε) | Very large (μr >> 10³)\nTemperature Effect | Independent of temperature | Inversely proportional: χ ∝ 1/T (Curie's Law) | Decreases with temperature; becomes paramagnetic above Tc"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Define the three magnetic elements of Earth with suitable diagrams.\n(b) Establish the mathematical relationships between them:\n(i) BV = B sin δ,\n(ii) BH = B cos δ,\n(iii) tan δ = BV / BH,\n(iv) B = √(BH² + BV²).",
        "answer": "Earth's magnetic elements and mathematical relationships",
        "explanation": "Marking Scheme:\n(a) Definitions & Diagram (2 marks):\n- Geographic meridian: Vertical plane passing through geographic north and south poles.\n- Magnetic meridian: Vertical plane passing through magnetic north and south poles of freely suspended compass needle.\n- Elements: 1. Magnetic declination (θ), 2. Angle of dip (δ), 3. Horizontal component (BH).\n\n(b) Relationships (3 marks):\n- Resolving total Earth's magnetic field B along horizontal and vertical directions in the magnetic meridian:\n  * Horizontal component: BH = B cos δ ... (1)\n  * Vertical component: BV = B sin δ ... (2)\n- Dividing (2) by (1):\n  BV / BH = (B sin δ) / (B cos δ) = tan δ => tan δ = BV / BH.\n- Squaring and adding (1) and (2):\n  BH² + BV² = B² cos² δ + B² sin² δ = B² (cos² δ + sin² δ) = B².\n  Therefore: B = √(BH² + BV²)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Earth's Magnetic Field and Navigation\nPlanet Earth behaves as a giant magnetic dipole tilted at an angle of roughly 11.3° to the geographic rotational axis. Navigators and aviators use magnetic compasses that align with Earth's local magnetic field. However, because magnetic north differs from true geographic north, navigators must correct their heading using magnetic declination. Furthermore, at high latitudes near the magnetic poles, compasses become ineffective because the horizontal field component BH drops to near zero.\n(i) Why does a magnetic compass fail to work effectively near Earth's magnetic poles?\n(ii) What is the value of angle of dip at the equator and at the magnetic poles?\n(iii) At a place, BH = 0.3 G and BV = 0.3√3 G. Calculate the angle of dip.\n(iv) Why does Earth's magnetic field change over centuries?",
        "answer": "Solutions to Case Study on Earth's Magnetism",
        "explanation": "(i) At magnetic poles, Earth's magnetic field is vertical (δ = 90°), so horizontal component BH = B cos 90° = 0. Since standard compasses rotate in the horizontal plane, there is no horizontal directive force, making the compass needle spin uselessly.\n(ii) At equator: dip δ = 0°. At magnetic poles: dip δ = 90°.\n(iii) tan δ = BV / BH = (0.3√3) / 0.3 = √3 => δ = 60°.\n(iv) Earth's magnetic field is generated by convective currents of molten iron and nickel in the outer core (geodynamo effect). Slow fluid circulation and core eddy currents cause gradual changes in field orientation and magnitude over geological timescales (secular variations)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) What is a magnetic hysteresis loop? Draw a neat labelled B-H curve for a ferromagnetic material.\n(b) Identify and define:\n(i) Retentivity,\n(ii) Coercivity,\n(iii) Saturation magnetization.\n(c) How does the hysteresis loop help in selecting materials for:\n(i) permanent magnets,\n(ii) transformer cores?",
        "answer": "Hysteresis loop, definitions, and material selection criteria",
        "explanation": "(a) Magnetic Hysteresis: The phenomenon of lagging of magnetic induction B behind the magnetizing field H in a ferromagnetic material during cycles of magnetization.\n(b) Definitions:\n(i) Retentivity: The residual magnetic induction B remaining in the specimen when H is reduced to zero (point on B-axis).\n(ii) Coercivity: The magnitude of reverse magnetizing field (-H) required to demagnetize the material completely (point on negative H-axis).\n(iii) Saturation: The state where all magnetic domains are fully aligned and further increase in H causes no increase in magnetization.\n(c) Material Selection:\n(i) Permanent Magnets: Require materials with broad hysteresis loops having high retentivity (strong magnetic field), high coercivity (resists demagnetization), and large loop area (e.g. Alnico, carbon steel).\n(ii) Transformer Cores & Electromagnets: Require materials with narrow hysteresis loops having high permeability, high saturation, low coercivity, and small loop area to minimize continuous energy dissipation as heat during AC cycles (e.g. Soft iron, silicon steel)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Show that an orbital electron in an atom possesses a magnetic dipole moment and deduce the gyromagnetic ratio.\n(b) State the value and units of gyromagnetic ratio for an electron.\n(c) If the angular momentum of an electron is 1.05 × 10⁻³⁴ J·s, calculate its orbital magnetic dipole moment.",
        "answer": "Gyromagnetic ratio derivation, value, and numerical calculation",
        "explanation": "(a) An electron of charge e and mass m moving with speed v in orbit of radius r has:\nPeriod T = 2πr / v => Current I = e / T = e v / (2π r).\nMagnetic moment M = I A = [e v / (2π r)] * (π r²) = (1/2) e v r.\nOrbital angular momentum L = m v r => v r = L / m.\nSubstituting: M = [e / (2m)] * L.\nIn vector notation, since electron has negative charge, M and L point in opposite directions: M = - [e / (2m)] L.\nGyromagnetic Ratio is defined as the ratio of magnetic dipole moment to angular momentum: Gyromagnetic Ratio = M / L = e / (2m).\n\n(b) Value: e / (2m) = (1.602 × 10⁻¹⁹ C) / (2 * 9.109 × 10⁻³¹ kg) = 8.8 × 10¹⁰ C/kg (or A·m² / (J·s)).\n\n(c) M = (e / 2m) * L = (8.8 × 10¹⁰ C/kg) * (1.05 × 10⁻³⁴ J·s) = 9.24 × 10⁻²⁴ A·m²."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A magnetic needle free to rotate in a horizontal plane has a magnetic moment of 6.7 × 10⁻² A·m² and moment of inertia 7.5 × 10⁻⁶ kg·m². It performs 10 complete oscillations in 6.70 s in an unknown magnetic field B. Calculate the magnitude of the magnetic field.",
        "answer": "B = 0.010 T = 100 G",
        "explanation": "Time period of oscillation T = (Total time) / (Number of oscillations) = 6.70 s / 10 = 0.67 s.\nFormula for time period of magnetic dipole in magnetic field:\nT = 2π √( I / (M B) )\nSquaring both sides: T² = 4π² I / (M B)\n=> B = 4π² I / (M T²)\nSubstitute values: I = 7.5 × 10⁻⁶ kg·m², M = 6.7 × 10⁻² A·m², T = 0.67 s:\nB = [ 4 * (3.1416)² * (7.5 × 10⁻⁶) ] / [ (6.7 × 10⁻²) * (0.67)² ]\nB = [ 39.478 * 7.5 × 10⁻⁶ ] / [ 0.067 * 0.4489 ] = 2.9608 × 10⁻⁴ / 0.03008 ≈ 9.84 × 10⁻³ T ≈ 0.01 T = 100 Gauss."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the differences between the magnetic field lines of an electric dipole and a magnetic dipole.\n(b) Why do magnetic field lines form continuous closed loops while electric field lines do not?",
        "answer": "Comparison between electric and magnetic field lines and closed loop explanation",
        "explanation": "(a) Comparison:\n1. Continuity: Magnetic field lines are continuous closed loops passing through both outside (N to S) and inside (S to N) the magnet. Electric field lines are discontinuous; they begin on positive charges and end on negative charges.\n2. Monopoles: Electric field lines originate and terminate on isolated electric charges (monopoles exist: +q, -q). Magnetic monopoles do not exist, so magnetic field lines cannot begin or terminate on single magnetic charges.\n3. Conservative nature: Electrostatic field is conservative (∮ E · dl = 0), preventing closed lines. Magnetic fields have non-zero line integrals around currents (∮ B · dl = μ₀ I).\n\n(b) Explanation of closed loops: According to Maxwell's equation (Gauss's law for magnetism), ∮ B · dA = 0. This implies that there are no source or sink points (no isolated north or south poles). Since field lines cannot terminate or originate at a point, any line that enters a region must leave it, forming endless continuous closed loops."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A compass needle whose magnetic moment is 60 A·m² pointing geographical north at a certain place where the horizontal component of Earth's magnetic field is 40 μWb/m² experiences a torque of 1.2 × 10⁻³ N·m. Calculate the declination of the place.",
        "answer": "Declination θ = 30°",
        "explanation": "Given: M = 60 A·m², BH = 40 μWb/m² = 40 × 10⁻⁶ T = 4.0 × 10⁻⁵ T, τ = 1.2 × 10⁻³ N·m.\nThe compass aligns with geographic north, so the angle between the needle (geographic meridian) and Earth's horizontal field BH (magnetic meridian) is the magnetic declination θ.\nτ = M BH sin θ\n=> sin θ = τ / (M BH) = (1.2 × 10⁻³ N·m) / (60 * 4.0 × 10⁻⁵)\n=> sin θ = (1.2 × 10⁻³) / (2.4 × 10⁻³) = 1/2 = 0.5\n=> Declination θ = 30°."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Explain with the help of a suitable diagram how a magnetic dipole placed in a uniform magnetic field experiences torque but no net force.\n(b) A bar magnet of magnetic moment 1.5 J/T lies aligned with the direction of a uniform magnetic field of 0.22 T. (i) What is the amount of work required by an external agent to turn the magnet so as to align its magnetic moment normal to the field direction and opposite to the field direction? (ii) What is the torque on the magnet in each case?",
        "answer": "Dipole torque explanation and work calculations: (i) W = 0.33 J and 0.66 J, (ii) τ = 0.33 N·m and 0 N·m",
        "explanation": "(a) Equal and opposite forces: North pole (+m) experiences force F = +mB along B, South pole (-m) experiences force F = -mB opposite to B. Net force F_net = +mB - mB = 0. Because these forces act along different parallel lines separated by 2l sin θ, they produce a torque τ = mB * (2l sin θ) = (m * 2l) B sin θ = M B sin θ.\n\n(b) Given: M = 1.5 J/T, B = 0.22 T. Initial orientation θ1 = 0°.\n(i) Work done: W = - M B (cos θ2 - cos θ1).\n- To normal (θ2 = 90°):\n  W = - (1.5 * 0.22) * (cos 90° - cos 0°) = - 0.33 * (0 - 1) = + 0.33 J.\n- To opposite (θ2 = 180°):\n  W = - (1.5 * 0.22) * (cos 180° - cos 0°) = - 0.33 * (-1 - 1) = + 0.66 J.\n\n(ii) Torque τ = M B sin θ:\n- At θ = 90°: τ = 1.5 * 0.22 * sin 90° = 0.33 N·m.\n- At θ = 180°: τ = 1.5 * 0.22 * sin 180° = 0 N·m."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "unit_num": 4,
      "title": "Electromagnetic Induction",
      "unit_title": "Electromagnetic Induction & Alternating Currents",
      "weightage_unit": "17 Marks (Units 3 & 4)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Lenz's law is a direct consequence of the law of conservation of:",
        "options": [
          "(a) Charge",
          "(b) Energy",
          "(c) Momentum",
          "(d) Magnetic flux"
        ],
        "answer": "(b) Energy",
        "explanation": "Lenz's law states that the polarity of induced emf always opposes the change in flux producing it. Mechanical work done against this opposing magnetic force is transformed into electrical energy, satisfying conservation of energy."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A metal rod of length l is rotated with angular frequency ω with one end hinged at the centre and the other end at the circumference of a circular metallic ring of radius l, in a uniform magnetic field B parallel to the axis. The induced emf between the centre and the ring is:",
        "options": [
          "(a) 1/2 B ω l²",
          "(b) B ω l²",
          "(c) 2 B ω l²",
          "(d) Zero"
        ],
        "answer": "(a) 1/2 B ω l²",
        "explanation": "Linear velocity of an element at distance r from hinge is v = ω r. Motional emf de = B v dr = B (ω r) dr. Total induced emf e = ∫₀^l B ω r dr = 1/2 B ω l²."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The self-inductance of a solenoid of length l and cross-sectional area A with N turns is given by:",
        "options": [
          "(a) μ₀ N² A / l",
          "(b) μ₀ N A / l",
          "(c) μ₀ N² A l",
          "(d) μ₀ N A l"
        ],
        "answer": "(a) μ₀ N² A / l",
        "explanation": "Magnetic field B = μ₀ (N/l) I. Flux through 1 turn Φ₁ = B A = (μ₀ N A / l) I. Total flux linkage N Φ₁ = (μ₀ N² A / l) I. Since total flux = L I, self-inductance L = μ₀ N² A / l."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A square loop of wire of side 10 cm and resistance 0.5 Ω is placed vertically in the east-west plane. A uniform magnetic field of 0.10 T is set up across the plane in the north-east direction. The magnetic field is decreased to zero in 0.70 s at a steady rate. The magnitude of induced emf is:",
        "options": [
          "(a) 1.0 mV",
          "(b) 0.5 mV",
          "(c) 2.0 mV",
          "(d) 10 mV"
        ],
        "answer": "(a) 1.0 mV",
        "explanation": "Angle between normal to east-west plane (pointing North) and field (North-East) is θ = 45°. Initial flux Φ = B A cos 45° = 0.10 * (0.1)² * (1/√2) = 10⁻³ / √2 ≈ 0.707 × 10⁻³ Wb. Final flux = 0. Induced emf |e| = ΔΦ / Δt = (0.707 × 10⁻³) / 0.70 ≈ 1.0 × 10⁻³ V = 1.0 mV."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Eddy currents are produced when:",
        "options": [
          "(a) a metal plate is kept in a steady magnetic field",
          "(b) a metal plate is moved through a time-varying magnetic field",
          "(c) a circular coil carries direct current",
          "(d) a plastic sheet is rotated in a magnetic field"
        ],
        "answer": "(b) a metal plate is moved through a time-varying magnetic field",
        "explanation": "Eddy currents (or Foucault currents) are circulating currents induced in bulk metallic pieces when the magnetic flux linking them changes with time."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The SI unit of magnetic flux is Weber (Wb), which is equivalent to:",
        "options": [
          "(a) T·m²",
          "(b) T / m²",
          "(c) N·m / A",
          "(d) V·s⁻¹"
        ],
        "answer": "(a) T·m²",
        "explanation": "Φ = B · A, so 1 Weber = 1 Tesla × 1 metre² = 1 T·m² (also 1 V·s)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The direction of induced current is such that it opposes the cause that produces it. This statement is known as:",
        "options": [
          "(a) Faraday's First Law",
          "(b) Faraday's Second Law",
          "(c) Lenz's Law",
          "(d) Fleming's Right-Hand Rule"
        ],
        "answer": "(c) Lenz's Law",
        "explanation": "This is the precise statement of Lenz's Law."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If the number of turns per unit length in a solenoid is doubled, its self-inductance will:",
        "options": [
          "(a) become four times",
          "(b) be doubled",
          "(c) remain unchanged",
          "(d) be halved"
        ],
        "answer": "(a) become four times",
        "explanation": "L = μ₀ n² A l. Since L ∝ n², doubling the turns per unit length n increases L by a factor of 2² = 4."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "A copper ring is held horizontally and a bar magnet is dropped through the ring with its north pole pointing downwards. The acceleration of the falling magnet is:",
        "options": [
          "(a) equal to g",
          "(b) greater than g",
          "(c) less than g",
          "(d) zero"
        ],
        "answer": "(c) less than g",
        "explanation": "As the North pole approaches the ring, the induced current in the ring creates an upward North pole (by Lenz's law) to repel the falling magnet. This upward repulsive force opposes gravity, resulting in an acceleration a < g."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The energy stored in an inductor of inductance L carrying current I is:",
        "options": [
          "(a) 1/2 L I²",
          "(b) L I²",
          "(c) 1/2 L² I",
          "(d) L I"
        ],
        "answer": "(a) 1/2 L I²",
        "explanation": "dW = P dt = e I dt = (L dI/dt) I dt = L I dI. Total energy U = ∫₀^I L I dI = 1/2 L I²."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Two coaxial circular coils of radii r1 and r2 (r1 << r2) are placed with their centres coinciding. The mutual inductance M between them is proportional to:",
        "options": [
          "(a) r1² / r2",
          "(b) r1 / r2²",
          "(c) r1 r2",
          "(d) r1² r2²"
        ],
        "answer": "(a) r1² / r2",
        "explanation": "Field at centre due to outer coil of radius r2: B2 = μ₀ I2 / (2r2). Flux linking inner coil of radius r1: Φ1 = B2 (π r1²) = [μ₀ π r1² / (2r2)] I2. Therefore, M = Φ1 / I2 = μ₀ π r1² / (2r2) ∝ r1² / r2."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A conducting rod of length l moves with velocity v perpendicular to a uniform magnetic field B. The induced motional emf across its ends is:",
        "options": [
          "(a) B l v",
          "(b) 1/2 B l v",
          "(c) B l² v",
          "(d) B² l v"
        ],
        "answer": "(a) B l v",
        "explanation": "Motional emf e = (v × B) · l = v B l sin 90° = B l v."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following does NOT use eddy currents?",
        "options": [
          "(a) Induction furnace",
          "(b) Magnetic braking in trains",
          "(c) Electric bulb",
          "(d) Deadbeat galvanometer"
        ],
        "answer": "(c) Electric bulb",
        "explanation": "Electric bulbs operate on the principle of Joule heating (incandescence of tungsten filament). Induction furnaces, magnetic brakes, and deadbeat galvanometers utilize eddy currents."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The dimensional formula of self-inductance L is:",
        "options": [
          "(a) [M L² T⁻² A⁻²]",
          "(b) [M L² T⁻¹ A⁻²]",
          "(c) [M L T⁻² A⁻²]",
          "(d) [M L² T⁻² A⁻¹]"
        ],
        "answer": "(a) [M L² T⁻² A⁻²]",
        "explanation": "From U = 1/2 L I² => [L] = [Energy] / [Current]² = [M L² T⁻²] / [A²] = [M L² T⁻² A⁻²]."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In an AC generator, the induced emf is maximum when the plane of the armature coil is:",
        "options": [
          "(a) parallel to the magnetic field",
          "(b) perpendicular to the magnetic field",
          "(c) inclined at 45° to the field",
          "(d) in any arbitrary position"
        ],
        "answer": "(a) parallel to the magnetic field",
        "explanation": "Induced emf e = e₀ sin ωt = NBA ω sin ωt. It is maximum when sin ωt = 1 (ωt = 90°). At ωt = 90°, the normal to the coil is perpendicular to B, which means the plane of the coil is parallel to the magnetic field."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "An inductor may store energy in its:",
        "options": [
          "(a) electric field",
          "(b) magnetic field",
          "(c) dielectric medium",
          "(d) resistance coils"
        ],
        "answer": "(b) magnetic field",
        "explanation": "Inductors store energy in the concentrated magnetic field established inside their coil volume: U = 1/2 L I² = [B² / (2μ₀)] * Volume."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "When current in a coil changes from 5 A to 2 A in 0.1 s, an average emf of 60 V is induced in it. The self-inductance of the coil is:",
        "options": [
          "(a) 2 H",
          "(b) 4 H",
          "(c) 1 H",
          "(d) 0.5 H"
        ],
        "answer": "(a) 2 H",
        "explanation": "|e| = L |dI / dt| => 60 = L * |(2 - 5) / 0.1| = L * (3 / 0.1) = 30 L => L = 60 / 30 = 2 H."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A circular coil of radius 8.0 cm and 20 turns is rotated about its vertical diameter with an angular speed of 50 rad/s in a uniform horizontal magnetic field of 3.0 × 10⁻² T. The peak value of induced emf is:",
        "options": [
          "(a) 0.603 V",
          "(b) 0.12 V",
          "(c) 1.2 V",
          "(d) 0.06 V"
        ],
        "answer": "(a) 0.603 V",
        "explanation": "Area A = π r² = 3.1416 * (0.08)² = 0.0201 m². Peak emf e₀ = N A B ω = 20 * (0.0201 m²) * (3.0 × 10⁻² T) * (50 rad/s) = 0.603 V."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The magnetic flux linked with a coil is given by Φ = 5t² + 3t + 16 (in Wb). The induced emf at t = 3 s is:",
        "options": [
          "(a) -33 V",
          "(b) 33 V",
          "(c) -19 V",
          "(d) -10 V"
        ],
        "answer": "(a) -33 V",
        "explanation": "Induced emf e = - dΦ/dt = - d(5t² + 3t + 16)/dt = - (10t + 3). At t = 3 s: e = - (10*3 + 3) = - 33 V."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Eddy current loss in transformer cores is minimised by:",
        "options": [
          "(a) using thick copper wire",
          "(b) using a laminated soft iron core insulated by varnish",
          "(c) cooling the core with water",
          "(d) operating at DC"
        ],
        "answer": "(b) using a laminated soft iron core insulated by varnish",
        "explanation": "Laminating the core into thin sheets separated by insulating varnish breaks the large closed loops required for eddy currents to circulate, significantly increasing resistance and drastically cutting energy losses."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Two coils have mutual inductance 0.005 H. The current changes in the first coil according to equation I = I₀ sin ωt, where I₀ = 10 A and ω = 100π rad/s. The maximum value of induced emf in the second coil is:",
        "options": [
          "(a) 5π V",
          "(b) 2π V",
          "(c) 10π V",
          "(d) 4π V"
        ],
        "answer": "(a) 5π V",
        "explanation": "Induced emf e2 = - M dI/dt = - M d(I₀ sin ωt)/dt = - M I₀ ω cos ωt. Peak emf e₀ = M I₀ ω = 0.005 * 10 * 100π = 5π V."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "A 1 metre long metallic rod held horizontally oriented along the east-west direction is falling freely under gravity. The induced emf across its ends:",
        "options": [
          "(a) increases with time",
          "(b) remains constant",
          "(c) decreases with time",
          "(d) is zero"
        ],
        "answer": "(a) increases with time",
        "explanation": "The rod falls cutting Earth's horizontal magnetic field lines BH. Induced emf is e = BH l v. Since the rod falls freely under gravity, speed v = gt increases with time, so e = BH l g t increases linearly with time."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The coefficient of coupling k between two coils of self-inductances L1 and L2 is given by:",
        "options": [
          "(a) M / √(L1 L2)",
          "(b) √(L1 L2) / M",
          "(c) M √(L1 L2)",
          "(d) M² / (L1 L2)"
        ],
        "answer": "(a) M / √(L1 L2)",
        "explanation": "The coupling factor k = M / √(L1 L2), where 0 ≤ k ≤ 1. For ideal tight coupling, k = 1."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Self-inductance of a coil is also known as electrical:",
        "options": [
          "(a) resistance",
          "(b) inertia",
          "(c) capacitance",
          "(d) conductance"
        ],
        "answer": "(b) inertia",
        "explanation": "Self-inductance opposes any change (growth or decay) of electric current in the circuit, playing the exact analogue of mass/inertia in mechanical systems (hence known as electrical inertia)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A loop of wire encloses a constant area in a magnetic field. An emf is induced in the loop only if:",
        "options": [
          "(a) magnetic field is uniform and constant",
          "(b) magnetic field changes with time",
          "(c) loop is moved parallel to uniform field",
          "(d) magnetic flux is constant"
        ],
        "answer": "(b) magnetic field changes with time",
        "explanation": "According to Faraday's Law, e = -dΦ/dt. For constant area and orientation, an emf can only be induced if the magnetic field B changes with time (dB/dt ≠ 0)."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Lenz's law obeys the principle of conservation of energy.\nReason (R): Mechanical work done in moving a magnet towards or away from a closed conducting coil is converted into electrical energy in the coil.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. If the induced current did not oppose the motion, a slight push would accelerate the magnet endlessly without energy input, creating a perpetual motion machine in violation of conservation of energy."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Transformer cores are fabricated from laminated sheets of soft iron separated by varnish insulation.\nReason (R): Lamination restricts eddy current paths to thin cross-sections, thereby minimizing Joule heating losses.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly. Thin laminations interrupt large circulating loops, cutting eddy current power loss (which scales as thickness squared)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): An induced current is produced in a closed loop only when there is a change in the magnetic flux linked with the loop.\nReason (R): The magnitude of the induced emf is directly proportional to the rate of change of magnetic flux.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Faraday's law states e = -dΦ/dt, so without flux change (dΦ/dt = 0), induced emf and current are zero."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Self-inductance is called the inertia of electricity.\nReason (R): Self-inductance opposes both the growth and decay of electric current in an electrical circuit.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Just as mechanical inertia opposes change in velocity (state of motion), self-inductance opposes change in electrical current via back-emf."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): When an aeroplane flies horizontally in the northern hemisphere, an emf is induced between the tips of its wings.\nReason (R): The wings of the aeroplane cut across the vertical component of the Earth's magnetic field during horizontal flight.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Motional emf e = BV l v, where BV is the vertical component of Earth's magnetic field and l is the wingspan."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Faraday's laws of electromagnetic induction.",
        "answer": "Faraday's laws of induction",
        "explanation": "1. First Law: Whenever the magnetic flux linked with a closed conducting circuit changes with time, an electromotive force (emf) is induced in the circuit, which lasts as long as the change in flux continues.\n2. Second Law: The magnitude of the induced emf in a circuit is directly proportional to the time rate of change of magnetic flux linked with it: e = - dΦ/dt (or e = - N dΦ/dt for N turns)."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "State Lenz's law. Show that Lenz's law is in accordance with the law of conservation of energy.",
        "answer": "Lenz's law and conservation of energy",
        "explanation": "1. Lenz's Law: The polarity of induced emf is such that it tends to produce an electric current whose magnetic field opposes the change in magnetic flux that produces it.\n2. Energy Conservation: When a bar magnet's north pole is pushed towards a coil, induced current produces a North pole facing the magnet, repelling it. Work must be done against this repulsive force to move the magnet. This mechanical work done is converted into electrical energy. If it did not oppose, energy would be created from nothing, violating conservation of energy."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Derive an expression for the motional emf induced across the ends of a conducting rod of length l moving with velocity v perpendicular to a uniform magnetic field B.",
        "answer": "Derivation of motional emf e = B l v",
        "explanation": "1. Consider a straight conductor PQ of length l moving with velocity v perpendicular to uniform magnetic field B directed into the page.\n2. Free conduction electrons inside the rod experience a magnetic Lorentz force: Fm = -e (v × B). This force drives electrons towards end Q, leaving positive charge at P.\n3. This charge accumulation creates an electrostatic field E directed from P to Q, exerting an electrostatic force Fe = e E on electrons.\n4. In equilibrium: Fe = Fm => e E = e v B => E = v B.\n5. The potential difference (motional emf) across rod ends: e = E * l = B l v."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "A jet plane is travelling towards west at a speed of 1800 km/h. What is the voltage difference developed between the ends of the wing having a span of 25 m, if Earth's magnetic field at the location has a magnitude of 5.0 × 10⁻⁴ T and the dip angle is 30°?",
        "answer": "Voltage difference = 3.125 V",
        "explanation": "Speed v = 1800 km/h = 1800 * (5/18) = 500 m/s.\nWingspan l = 25 m, B = 5.0 × 10⁻⁴ T, δ = 30°.\nHorizontal flight cuts vertical field component: BV = B sin δ = 5.0 × 10⁻⁴ * sin 30° = 2.5 × 10⁻⁴ T.\nMotional emf e = BV l v = (2.5 × 10⁻⁴ T) * (25 m) * (500 m/s) = 3.125 V."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "What are eddy currents? How are they produced? Give two applications of eddy currents.",
        "answer": "Eddy currents, generation, and applications",
        "explanation": "1. Definition: Eddy currents are circulating electric currents induced in solid metallic bodies when the magnetic flux linking them changes with time.\n2. Generation: When a bulk conductor is moved in a magnetic field or placed in a time-varying magnetic field, induced electric fields drive circulating closed current loops in the metal.\n3. Applications:\n(i) Magnetic Braking in Trains: Strong electromagnets induce eddy currents in rotating wheels/rails that oppose rotation, providing smooth braking.\n(ii) Induction Furnace: High-frequency eddy currents generate intense Joule heat (I²R) used to melt scrap metals and prepare alloys."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Define self-inductance and mutual inductance. State their SI unit.",
        "answer": "Definitions and SI unit of self and mutual inductance",
        "explanation": "1. Self-Inductance (L): The property of a coil by virtue of which it opposes any change of electric current flowing through itself by inducing a back-emf: e = - L (dI/dt).\n2. Mutual Inductance (M): The property of a pair of coils by virtue of which an emf is induced in one coil whenever the current in the neighboring coil changes: e2 = - M (dI1/dt).\n3. SI Unit: Henry (H) = Volt-second per Ampere (V·s/A) = Weber per Ampere (Wb/A)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Derive an expression for the mutual inductance of two long coaxial solenoids of same length l, radii r1 and r2 (r1 < r2), and turns N1 and N2.",
        "answer": "Derivation of M = μ₀ N1 N2 A1 / l",
        "explanation": "1. Let current I2 flow through outer solenoid S2 (turns N2, radius r2). Magnetic field inside S2: B2 = μ₀ (N2 / l) I2.\n2. Flux linked with each turn of inner solenoid S1 (radius r1, area A1 = π r1²): Φ₁ = B2 A1 = [μ₀ (N2 / l) I2] * (π r1²).\n3. Total flux linkage of inner solenoid: N1 Φ₁ = N1 * [μ₀ (N2 / l) I2 (π r1²)] = [μ₀ N1 N2 A1 / l] I2.\n4. By definition, N1 Φ₁ = M I2.\n5. Therefore: Mutual inductance M = μ₀ N1 N2 A1 / l."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "A 100-turn coil of area 0.05 m² is placed perpendicular to a magnetic field of 0.2 T. If the field is reduced to zero uniformly in 0.01 s, calculate the average induced emf.",
        "answer": "Induced emf = 100 V",
        "explanation": "Initial flux Φ1 = N B A cos 0° = 100 * 0.2 T * 0.05 m² = 1.0 Wb.\nFinal flux Φ2 = 0.\nTime interval Δt = 0.01 s.\nInduced emf |e| = |ΔΦ / Δt| = (1.0 - 0) / 0.01 = 100 V."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Derive an expression for the magnetic energy stored in an inductor of self-inductance L carrying a steady current I₀.",
        "answer": "Derivation of U = 1/2 L I₀²",
        "explanation": "1. To establish current in an inductor, work must be done against the induced back-emf e = - L (dI/dt).\n2. Rate of doing work (electrical power): P = dW/dt = |e| I = (L dI/dt) I.\n3. Work done in small time dt: dW = P dt = L I dI.\n4. Total work done in increasing current from 0 to I₀:\n   W = ∫₀^{I₀} L I dI = L [ I² / 2 ]₀^{I₀} = 1/2 L I₀².\n5. This work is stored as magnetic potential energy in the magnetic field: U = 1/2 L I₀²."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why does a metallic piece placed in a high frequency alternating magnetic field get heated up rapidly?",
        "answer": "Heating of metal via eddy currents",
        "explanation": "A high-frequency alternating magnetic field causes rapid changes in magnetic flux through the bulk metallic piece. This induces powerful, swirling eddy currents throughout the metal's volume. Due to the finite electrical resistance R of the metal, these large eddy currents dissipate electrical energy into thermal energy at a rate P = I² R (Joule heating), causing the metal to heat up rapidly."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) State the principle of an AC generator.\n(b) Explain its working with the help of a neat labelled diagram.\n(c) Derive an expression for the instantaneous emf induced in a coil of N turns and area A rotating with constant angular speed ω in a uniform magnetic field B.\n(d) Draw a graph of induced emf versus time.",
        "answer": "Complete theory and derivation of AC Generator",
        "explanation": "Marking Scheme:\n(a) Principle (1 mark):\n- Works on the principle of electromagnetic induction: when a closed coil is rotated in a uniform magnetic field, the magnetic flux linked with the coil changes continuously, inducing an alternating emf across its terminals.\n\n(b) Working & Diagram (1.5 marks):\n- Diagram: Rectangular armature coil ABCD between concave magnetic poles N and S, slip rings R1 and R2, carbon brushes B1 and B2, load resistor RL.\n- As the coil rotates, sides AB and CD cut magnetic field lines in opposite directions. By Fleming's right-hand rule, induced currents reverse direction every half rotation.\n\n(c) Derivation (2 marks):\n- At any instant t, angle between normal to coil area and magnetic field B is θ = ωt.\n- Magnetic flux linked with 1 turn: Φ₁ = B · A = B A cos ωt.\n- Total flux linkage with N turns: Φ = N B A cos ωt.\n- By Faraday's Law, induced emf e = - dΦ/dt:\n  e = - d(N B A cos ωt) / dt = - N B A (- ω sin ωt) = N B A ω sin ωt.\n- Maximum (peak) emf e₀ = N B A ω.\n- Instantaneous emf: e = e₀ sin ωt.\n\n(d) Graph (0.5 mark):\n- A sinusoidal wave showing e varying from +e₀ to -e₀ with period T = 2π/ω."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) A conducting rod of length l with resistance r moves with a constant velocity v on a pair of parallel, frictionless conducting rails separated by distance l, connected by resistance R in a uniform perpendicular magnetic field B. Derive expressions for:\n(i) Induced emf,\n(ii) Induced current,\n(iii) External force required to maintain constant speed,\n(iv) Power dissipated as Joule heat.\n(b) Show that the mechanical power supplied equals the electrical power dissipated.",
        "answer": "Full motional emf analysis, force, power, and conservation of energy",
        "explanation": "Marking Scheme:\n(a) Expressions (3.5 marks):\n(i) Induced emf: In time dt, area swept dA = l dx = l (v dt). Flux change dΦ = B dA = B l v dt. Induced emf e = dΦ/dt = B l v.\n(ii) Induced current: Total circuit resistance = R + r. Current I = e / (R + r) = (B l v) / (R + r).\n(iii) External force: Rod carries current I in perpendicular field B, experiencing opposing magnetic force F_mag = I l B = [ (B l v) / (R + r) ] * l B = [ B² l² v ] / (R + r). To maintain constant velocity (zero acceleration), external mechanical force must balance F_mag:\nF_ext = [ B² l² v ] / (R + r).\n(iv) Power dissipated: P_joule = I² (R + r) = [ (B l v) / (R + r) ]² * (R + r) = [ B² l² v² ] / (R + r).\n\n(b) Energy Conservation Proof (1.5 marks):\n- Mechanical power supplied by external agent:\n  P_mech = F_ext * v = [ B² l² v / (R + r) ] * v = [ B² l² v² ] / (R + r).\n- Since P_mech = P_joule, mechanical work performed per second is completely converted into electrical power dissipated as heat in the resistors, verifying energy conservation."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Define self-inductance of a coil and derive an expression for the self-inductance of a long straight solenoid of length l, cross-sectional area A, having N turns.\n(b) A long solenoid with 15 turns per cm has a small loop of area 2.0 cm² placed inside the solenoid normal to its axis. If the current carried by the solenoid changes steadily from 2.0 A to 4.0 A in 0.1 s, what is the induced emf in the loop while the current is changing?",
        "answer": "Self-inductance derivation and numerical",
        "explanation": "Marking Scheme:\n(a) Derivation (3 marks):\n- Self-inductance L is the ratio of total magnetic flux linkage to current: L = N Φ / I.\n- For a long solenoid with n = N/l turns per unit length carrying current I, interior magnetic field B = μ₀ n I = μ₀ (N/l) I.\n- Magnetic flux linked with each turn: Φ₁ = B A = [ μ₀ (N/l) I ] * A.\n- Total flux linked with all N turns: Φ_total = N Φ₁ = N * [ μ₀ (N/l) I A ] = [ μ₀ N² A / l ] I.\n- Comparing with Φ_total = L I: Self-inductance L = μ₀ N² A / l = μ₀ n² A l.\n\n(b) Numerical (2 marks):\n- Turns per metre n = 15 turns/cm = 1500 turns/m.\n- Loop area A_loop = 2.0 cm² = 2.0 × 10⁻⁴ m².\n- Rate of change of current: dI/dt = (4.0 - 2.0) / 0.1 = 20 A/s.\n- Magnetic field inside solenoid B = μ₀ n I.\n- Flux linked with small loop: Φ = B * A_loop = (μ₀ n I) * A_loop.\n- Induced emf |e| = dΦ/dt = μ₀ n A_loop (dI/dt)\n- |e| = (4π × 10⁻⁷ T·m/A) * (1500 m⁻¹) * (2.0 × 10⁻⁴ m²) * (20 A/s)\n  = 4 * 3.1416 * 10⁻⁷ * 1500 * 2.0 × 10⁻⁴ * 20\n  = 1.257 × 10⁻⁶ * 60000 = 7.54 × 10⁻⁶ V = 7.54 μV."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Mutual Induction and Wireless Power Transfer\nMutual induction is the phenomenon in which an electromotive force is induced in one circuit whenever the electric current in an adjacent circuit varies with time. This electromagnetic coupling forms the operational foundation of electrical transformers, induction cooktops, and modern wireless charging pads. The induced emf in the secondary coil is given by e₂ = - M (dI₁/dt), where M depends on the geometry of the coils, separation distance, orientation, and magnetic permeability of the medium between them.\n(i) On what factors does the mutual inductance of a pair of coils depend?\n(ii) State the SI unit and dimensions of mutual inductance.\n(iii) If a current in primary coil increases from 0 to 5 A in 0.2 s and an emf of 25 V is induced in secondary coil, calculate mutual inductance M.\n(iv) Why is an iron core placed between primary and secondary coils in a transformer?",
        "answer": "Solutions to Case Study on Mutual Induction",
        "explanation": "(i) Mutual inductance depends on: (a) Number of turns in both coils (N1, N2), (b) Common cross-sectional area and length of coils, (c) Relative orientation and separation distance between coils, (d) Magnetic permeability of the core material (μr).\n(ii) SI Unit: Henry (H) = V·s/A. Dimensional Formula: [M L² T⁻² A⁻²].\n(iii) |e₂| = M (dI₁/dt) => 25 = M * (5 / 0.2) = M * 25 => M = 1.0 Henry.\n(iv) Iron has very high magnetic permeability (μr >> 1), which concentrates and channels virtually all magnetic flux from the primary coil through the secondary coil, maximizing mutual inductance (k ≈ 1) and minimizing flux leakage."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) A metallic rod of length l is rotated with frequency ν in a plane perpendicular to a uniform magnetic field B about an axis passing through one end. Derive an expression for the induced emf between the ends of the rod.\n(b) A 1.0 m long metallic rod is rotated with an angular frequency of 400 rad/s about an axis normal to the rod passing through its one end. The other end of the rod is in contact with a circular metallic ring. A constant and uniform magnetic field of 0.5 T parallel to the axis exists everywhere. Calculate the emf developed between the centre and the ring.",
        "answer": "Rotational emf derivation e = 1/2 B ω l² and numerical",
        "explanation": "(a) Derivation (3 marks):\n- Consider a rod of length l rotating with angular frequency ω = 2πν about an axis through end O perpendicular to magnetic field B.\n- Consider a small element of length dr at distance r from axis O.\n- Linear velocity of this element is v = ω r.\n- Motional emf induced in element: de = B v dr = B (ω r) dr.\n- Total emf between centre O and outer end:\n  e = ∫₀^l de = ∫₀^l B ω r dr = B ω [ r² / 2 ]₀^l = 1/2 B ω l².\n- In terms of frequency ν: e = 1/2 B (2πν) l² = B π ν l² = B (Area swept per second).\n\n(b) Numerical (2 marks):\n- Given: l = 1.0 m, ω = 400 rad/s, B = 0.5 T.\n- e = 1/2 B ω l² = 0.5 * 0.5 T * (400 rad/s) * (1.0 m)² = 100 V."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) State the condition under which the magnetic flux linked with a rotating coil in a magnetic field is:\n(i) maximum,\n(ii) zero.\n(b) At these two positions, what is the value of induced emf?\n(c) A rectangular coil of 200 turns and dimensions 10 cm × 20 cm is rotated at 1800 rpm in a uniform magnetic field of 0.05 T. Calculate the peak value of induced emf.",
        "answer": "Flux vs emf phase conditions and AC generator peak emf calculation",
        "explanation": "(a) Magnetic flux Φ = N B A cos θ, where θ is angle between normal to coil and field B:\n(i) Maximum flux: When θ = 0° or 180° (plane of coil is perpendicular to magnetic field lines): Φ_max = ± N B A.\n(ii) Zero flux: When θ = 90° or 270° (plane of coil is parallel to magnetic field lines): Φ = 0.\n\n(b) Induced emf e = - dΦ/dt = N B A ω sin θ:\n(i) At Φ_max (θ = 0°): e = N B A ω sin 0° = 0 (induced emf is zero).\n(ii) At Φ = 0 (θ = 90°): e = N B A ω sin 90° = e₀ = N B A ω (induced emf is maximum).\n(Flux and induced emf are 90° out of phase).\n\n(c) Numerical:\n- N = 200, Area A = 0.10 m * 0.20 m = 0.02 m², B = 0.05 T.\n- Rotational speed: ν = 1800 rpm = 1800 / 60 = 30 rev/s => ω = 2πν = 2 * 3.1416 * 30 = 188.5 rad/s.\n- Peak emf e₀ = N B A ω = 200 * 0.05 T * 0.02 m² * 188.5 rad/s = 37.7 V."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Two concentric circular coils, one of small radius r1 and the other of large radius r2, such that r1 << r2, are placed co-axially with centres coinciding. Obtain the mutual inductance of the arrangement. If current in the outer coil changes at 5 A/s, find the induced emf in the inner coil (given r1 = 2 cm, r2 = 20 cm).",
        "answer": "M = μ₀ π r1² / (2 r2) and numerical e = 1.97 × 10⁻⁷ V",
        "explanation": "Field at centre due to outer coil carrying current I2: B2 = μ₀ I2 / (2 r2).\nSince r1 << r2, field B2 is uniform over area of inner coil A1 = π r1².\nFlux linked with inner coil: Φ1 = B2 A1 = [ μ₀ I2 / (2 r2) ] * (π r1²) = [ μ₀ π r1² / (2 r2) ] I2.\nMutual inductance M = Φ1 / I2 = μ₀ π r1² / (2 r2).\nNumerical calculation:\nr1 = 0.02 m, r2 = 0.20 m, dI2/dt = 5 A/s.\nM = [ (4π × 10⁻⁷) * π * (0.02)² ] / [ 2 * 0.20 ] = [ 4 * 9.87 * 10⁻⁷ * 4 × 10⁻⁴ ] / 0.40 = 3.95 × 10⁻⁸ H.\nInduced emf |e1| = M (dI2/dt) = (3.95 × 10⁻⁸ H) * (5 A/s) ≈ 1.97 × 10⁻⁷ V."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Explain what happens when a copper plate is allowed to oscillate like a pendulum between the pole pieces of a strong magnet.\n(b) What happens if slots are cut into the copper plate?\n(c) Name and explain the phenomenon involved.",
        "answer": "Electromagnetic damping and slotted plate explanation",
        "explanation": "(a) When a solid copper plate swings into and out of the magnetic field between the poles, the magnetic flux through the plate changes continuously. This induces strong eddy currents within the plate. According to Lenz's law, these eddy currents produce opposing forces that retard the plate's motion. As a result, the oscillatory motion is rapidly damped, and the plate quickly comes to rest (electromagnetic damping).\n\n(b) When narrow vertical slots are cut into the copper plate (comb-like structure), the continuous conduction paths are broken. This limits eddy currents to much smaller circulating loops, substantially increasing electrical resistance and drastically reducing the magnitude of eddy currents. Consequently, the opposing magnetic damping force is greatly diminished, and the plate oscillates much longer before stopping.\n\n(c) Phenomenon: Electromagnetic Damping. Applications include deadbeat galvanometers, induction brakes, and safety mechanisms in elevators."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A pair of adjacent coils has a mutual inductance of 1.5 H. If the current in one coil changes from 0 to 20 A in 0.5 s, what is the change of flux linkage with the other coil?",
        "answer": "Change in flux linkage = 30 Weber",
        "explanation": "Relation between flux linkage N2 Φ2 and primary current I1:\nN2 Φ2 = M I1.\nChange in flux linkage Δ(N2 Φ2) = M ΔI1.\nGiven: M = 1.5 H, ΔI1 = 20 - 0 = 20 A.\nΔΦ_total = 1.5 H * 20 A = 30 Weber (Wb).\n(Also, induced emf |e| = ΔΦ / Δt = 30 / 0.5 = 60 V)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Deduce the expression for the magnetic energy density u_B = B² / (2μ₀) stored in a magnetic field B.\n(b) Compare this expression with electrostatic energy density u_E = 1/2 ε₀ E².",
        "answer": "Derivation of magnetic energy density and comparison with electric energy density",
        "explanation": "(a) Derivation:\n- Energy stored in a current-carrying solenoid of length l and cross-sectional area A:\n  U = 1/2 L I².\n- Self-inductance of solenoid: L = μ₀ n² A l = μ₀ (N/l)² A l.\n- Magnetic field inside solenoid: B = μ₀ n I => I = B / (μ₀ n).\n- Substituting L and I into energy equation:\n  U = 1/2 * (μ₀ n² A l) * [ B / (μ₀ n) ]²\n  U = 1/2 * (μ₀ n² A l) * [ B² / (μ₀² n²) ] = 1/2 * [ B² / μ₀ ] * (A l).\n- Solenoid volume = Area × length = A * l.\n- Energy density u_B = Energy / Volume = U / (A l) = B² / (2μ₀).\n\n(b) Comparison:\n- Electrostatic energy density: u_E = 1/2 ε₀ E² (proportional to square of electric field E and electric permittivity ε₀).\n- Magnetic energy density: u_B = 1/2 (1/μ₀) B² = B² / (2μ₀) (proportional to square of magnetic field B and inversely proportional to magnetic permeability μ₀).\n- Both demonstrate that energy is stored directly in the field residing within space."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "unit_num": 4,
      "title": "Alternating Current",
      "unit_title": "Electromagnetic Induction & Alternating Currents",
      "weightage_unit": "17 Marks (Units 3 & 4)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In a series LCR alternating circuit at resonance, the phase difference between the applied voltage and current is:",
        "options": [
          "(a) 0",
          "(b) π/2",
          "(c) π",
          "(d) π/4"
        ],
        "answer": "(a) 0",
        "explanation": "At resonance, inductive reactance equals capacitive reactance (XL = XC). Net reactance is zero, and impedance Z = R. Therefore, tan φ = (XL - XC) / R = 0 => φ = 0, meaning voltage and current are in phase."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The power factor of an AC circuit having a pure inductor or pure capacitor is:",
        "options": [
          "(a) 1",
          "(b) 0",
          "(c) 0.5",
          "(d) -1"
        ],
        "answer": "(b) 0",
        "explanation": "For a pure inductor or capacitor, the phase difference between voltage and current is φ = 90° (π/2). Power factor = cos φ = cos 90° = 0. Consequently, average power dissipated is zero (wattless current)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The peak value of an alternating voltage given by V = 220√2 sin(100π t) is:",
        "options": [
          "(a) 220 V",
          "(b) 311 V",
          "(c) 110 V",
          "(d) 440 V"
        ],
        "answer": "(b) 311 V",
        "explanation": "Comparing with V = V₀ sin(ωt), peak voltage V₀ = 220√2 V = 220 * 1.414 ≈ 311.1 V."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If the frequency of an AC source in an inductive circuit is doubled, the inductive reactance XL will:",
        "options": [
          "(a) be halved",
          "(b) be doubled",
          "(c) be quadrupled",
          "(d) remain unchanged"
        ],
        "answer": "(b) be doubled",
        "explanation": "Inductive reactance is XL = 2π f L. Since XL is directly proportional to frequency f, doubling the frequency doubles XL."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A capacitor blocks DC because for direct current (f = 0), capacitive reactance XC is:",
        "options": [
          "(a) zero",
          "(b) infinite",
          "(c) 1 Ω",
          "(d) negative"
        ],
        "answer": "(b) infinite",
        "explanation": "Capacitive reactance is XC = 1 / (2π f C). For steady DC, frequency f = 0, which makes XC = 1 / 0 = ∞. An infinite reactance represents an open circuit, blocking DC completely."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a step-up transformer, the turns ratio Ns / Np is:",
        "options": [
          "(a) greater than 1",
          "(b) less than 1",
          "(c) equal to 1",
          "(d) zero"
        ],
        "answer": "(a) greater than 1",
        "explanation": "In a step-up transformer, secondary voltage is higher than primary voltage (Vs > Vp). Since Vs / Vp = Ns / Np, the turns ratio Ns / Np must be greater than 1."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The Q-factor (quality factor) of a series LCR resonant circuit is given by:",
        "options": [
          "(a) (1/R) √(L/C)",
          "(b) (1/R) √(C/L)",
          "(c) R √(L/C)",
          "(d) √(LC) / R"
        ],
        "answer": "(a) (1/R) √(L/C)",
        "explanation": "Q = ω₀ L / R = [1 / √(LC)] * (L / R) = (1/R) √(L/C)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The rms value of an alternating current of 50 Hz is 10 A. The time taken by the alternating current in reaching from zero to maximum value is:",
        "options": [
          "(a) 5 × 10⁻³ s",
          "(b) 2 × 10⁻² s",
          "(c) 10⁻² s",
          "(d) 2.5 × 10⁻³ s"
        ],
        "answer": "(a) 5 × 10⁻³ s",
        "explanation": "Time period T = 1 / f = 1 / 50 = 0.02 s. Time to reach maximum from zero is T / 4 = 0.02 / 4 = 0.005 s = 5 × 10⁻³ s."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "In a series LCR circuit, R = 300 Ω, XL = 800 Ω, and XC = 400 Ω. The impedance of the circuit is:",
        "options": [
          "(a) 500 Ω",
          "(b) 700 Ω",
          "(c) 1500 Ω",
          "(d) 100 Ω"
        ],
        "answer": "(a) 500 Ω",
        "explanation": "Z = √( R² + (XL - XC)² ) = √( 300² + (800 - 400)² ) = √( 300² + 400² ) = √( 90000 + 160000 ) = √250000 = 500 Ω."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following causes wattless current in an AC circuit?",
        "options": [
          "(a) Pure resistance",
          "(b) Pure inductor or pure capacitor",
          "(c) Resistor and inductor combination",
          "(d) Resistor and capacitor combination"
        ],
        "answer": "(b) Pure inductor or pure capacitor",
        "explanation": "Wattless current occurs when the average power consumption over a complete AC cycle is zero. This happens when phase angle φ = ±90°, which is true only for purely inductive or purely capacitive circuits (P_avg = Vrms Irms cos 90° = 0)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "An alternating voltage V = V₀ sin ωt is applied across a pure capacitor C. The alternating current flowing through it is:",
        "options": [
          "(a) I = I₀ sin(ωt - π/2)",
          "(b) I = I₀ sin(ωt + π/2)",
          "(c) I = I₀ sin ωt",
          "(d) I = I₀ cos(ωt + π)"
        ],
        "answer": "(b) I = I₀ sin(ωt + π/2)",
        "explanation": "In a pure capacitor, current leads the alternating voltage across its terminals by a phase angle of 90° (π/2 rad). Thus I = I₀ sin(ωt + π/2)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A transformer works on the principle of:",
        "options": [
          "(a) Self-induction",
          "(b) Mutual induction",
          "(c) Ampere's circuital law",
          "(d) Lorentz force"
        ],
        "answer": "(b) Mutual induction",
        "explanation": "A transformer operates on the principle of mutual induction: changing alternating current in the primary winding induces an alternating emf in the magnetically coupled secondary winding."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In a series LCR circuit, if capacitance is changed from C to 4C, then for the resonant frequency to remain unchanged, the inductance must be changed to:",
        "options": [
          "(a) 4 L",
          "(b) 2 L",
          "(c) L / 4",
          "(d) L / 2"
        ],
        "answer": "(c) L / 4",
        "explanation": "Resonant frequency ω₀ = 1 / √(LC). For ω₀ to remain unchanged, the product L * C must remain constant: L' * C' = L * C => L' * (4C) = L * C => L' = L / 4."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The core of a transformer is laminated to reduce energy loss caused by:",
        "options": [
          "(a) Hysteresis",
          "(b) Eddy currents",
          "(c) Copper resistance",
          "(d) Flux leakage"
        ],
        "answer": "(b) Eddy currents",
        "explanation": "Lamination creates high electrical resistance across circulating loops within the core, directly attenuating eddy currents and their associated Joule heating losses."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A 220 V AC line is more dangerous than a 220 V DC line because:",
        "options": [
          "(a) AC attracts the body",
          "(b) the peak voltage of 220 V AC is 311 V",
          "(c) AC causes burning",
          "(d) DC has zero frequency"
        ],
        "answer": "(b) the peak voltage of 220 V AC is 311 V",
        "explanation": "The rated 220 V of an AC supply is the root-mean-square (rms) value. The peak voltage reaches V₀ = 220 * √2 ≈ 311 V, which exerts a significantly higher electrical breakdown potential on human tissue compared to steady 220 V DC."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In an AC circuit containing an inductor of inductance L, current lags the voltage by π/2. If the AC frequency is f, the inductive reactance is:",
        "options": [
          "(a) 2π f L",
          "(b) 1 / (2π f L)",
          "(c) 2π / (f L)",
          "(d) f L / (2π)"
        ],
        "answer": "(a) 2π f L",
        "explanation": "XL = ω L = 2π f L."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "For a series resonant LCR circuit, which of the following statements is FALSE?",
        "options": [
          "(a) Current amplitude is maximum",
          "(b) Impedance is minimum and equals R",
          "(c) Power factor is zero",
          "(d) Voltage and current are in phase"
        ],
        "answer": "(c) Power factor is zero",
        "explanation": "At resonance, the phase difference φ = 0. Therefore, power factor = cos φ = cos 0° = 1 (unity, maximum), NOT zero. Hence option (c) is false."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An electric bulb rated 100 W, 220 V is connected in series with an inductor across a 220 V, 50 Hz AC supply. The brightness of the bulb will:",
        "options": [
          "(a) increase",
          "(b) decrease",
          "(c) remain the same",
          "(d) fluctuate violently"
        ],
        "answer": "(b) decrease",
        "explanation": "Adding an inductor in series increases the total circuit impedance to Z = √(R² + XL²). The circuit current decreases from I = V/R to I' = V/Z < I. Since bulb power P = I'² R, the power dissipated drops, decreasing its brightness."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The phase difference between voltage across the inductor VL and voltage across the capacitor VC in a series LCR circuit is:",
        "options": [
          "(a) 0",
          "(b) π/2",
          "(c) π (180°)",
          "(d) 2π"
        ],
        "answer": "(c) π (180°)",
        "explanation": "Voltage VL leads current I by π/2 (+90°), while voltage VC lags current I by π/2 (-90°). Therefore, the phase difference between VL and VC is π/2 - (-π/2) = π radians (180°), meaning they are in direct opposition."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "In an ideal step-down transformer, which of the following quantities is higher in the secondary than in the primary?",
        "options": [
          "(a) Voltage",
          "(b) Current",
          "(c) Power",
          "(d) Frequency"
        ],
        "answer": "(b) Current",
        "explanation": "For an ideal transformer, power is conserved: Pp = Ps => Vp Ip = Vs Is. In a step-down transformer Vs < Vp, which requires Is > Ip. Current in the secondary is greater."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "An AC source is connected to a series LCR circuit. When L is removed from the circuit, the phase difference between current and voltage is π/3. When C is removed instead, the phase difference is again π/3. The power factor of the complete LCR circuit is:",
        "options": [
          "(a) 0",
          "(b) 0.5",
          "(c) 1.0",
          "(d) 1 / √2"
        ],
        "answer": "(c) 1.0",
        "explanation": "Without L: tan(π/3) = XC / R => XC = R tan(π/3). Without C: tan(π/3) = XL / R => XL = R tan(π/3). Thus XL = XC, which is the condition of resonance! At resonance, Z = R, so power factor cos φ = R/Z = 1.0."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The current in an AC circuit is given by I = 5 sin(100t - π/6) A and voltage is V = 200 sin(100t + π/6) V. The average power consumed in the circuit is:",
        "options": [
          "(a) 1000 W",
          "(b) 500 W",
          "(c) 250 W",
          "(d) Zero"
        ],
        "answer": "(c) 250 W",
        "explanation": "Phase difference φ = (π/6) - (-π/6) = π/3 = 60°. Peak values: V₀ = 200 V, I₀ = 5 A. P_avg = 1/2 V₀ I₀ cos φ = 1/2 * 200 * 5 * cos 60° = 500 * 0.5 = 250 W."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A choke coil used in fluorescent tubes is preferred over a rheostat because:",
        "options": [
          "(a) choke coil consumes almost zero power",
          "(b) choke coil increases voltage",
          "(c) rheostat is cheaper",
          "(d) choke coil converts AC to DC"
        ],
        "answer": "(a) choke coil consumes almost zero power",
        "explanation": "A choke coil has high inductance L and very low resistance R. It reduces current by providing large inductive reactance XL without significant Joule heating loss (P_avg ≈ 0 due to cos φ ≈ 0), whereas a rheostat wastes energy continuously as I²R heat."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The resonant frequency of a series LCR circuit with L = 2.0 H, C = 32 μF, and R = 10 Ω is:",
        "options": [
          "(a) 125 rad/s",
          "(b) 250 rad/s",
          "(c) 62.5 rad/s",
          "(d) 50 rad/s"
        ],
        "answer": "(a) 125 rad/s",
        "explanation": "Resonant angular frequency ω₀ = 1 / √(LC) = 1 / √(2.0 * 32 × 10⁻⁶) = 1 / √(64 × 10⁻⁶) = 1 / (8 × 10⁻³) = 1000 / 8 = 125 rad/s."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Electrical energy is transmitted over long distances at very high voltages in order to:",
        "options": [
          "(a) minimize I²R power loss in transmission lines",
          "(b) increase current",
          "(c) protect transformers",
          "(d) prevent lightning strikes"
        ],
        "answer": "(a) minimize I²R power loss in transmission lines",
        "explanation": "Power transmitted P = V * I. For a given power, higher transmission voltage V reduces the current I = P/V. Since Joule loss in cables is P_loss = I² R_cable, transmitting at high voltage dramatically cuts line transmission losses."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): In a series LCR circuit at resonance, the current in the circuit is maximum.\nReason (R): At resonance, inductive reactance equals capacitive reactance, reducing the total circuit impedance to its minimum possible value equal to R.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Since Z = √(R² + (XL - XC)²), when XL = XC, Z_min = R, maximizing current I = V / Z_min = V / R."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): A capacitor blocks direct current (DC) while allowing alternating current (AC) to flow.\nReason (R): Capacitive reactance XC = 1/(2πfC) is inversely proportional to frequency, becoming infinitely large for DC (f = 0) and small for high-frequency AC.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Infinite reactance for DC acts as an open circuit."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The power factor of a purely inductive or purely capacitive AC circuit is zero.\nReason (R): The phase difference between current and voltage in a purely inductive or capacitive circuit is π/2, making cos φ = 0.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Power factor = cos φ = cos(π/2) = 0."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A transformer cannot be used to step up a DC voltage.\nReason (R): Direct current (DC) produces a steady, time-invariant magnetic flux in the core, so no emf is induced in the secondary winding according to Faraday's law.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Transformers require dΦ/dt ≠ 0, which constant DC cannot provide."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Choke coils are preferred over variable resistors for controlling alternating currents.\nReason (R): A choke coil reduces alternating current with very little loss of electrical energy as heat compared to an ohmic resistance.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Because cos φ ≈ 0 in an ideal choke coil, P_avg = Vrms Irms cos φ ≈ 0, conserving power."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Define root-mean-square (rms) value of alternating current. Derive the relation between Irms and peak current I₀.",
        "answer": "Definition and derivation of Irms = I₀ / √2",
        "explanation": "1. Definition: The rms value of AC is that steady DC current which produces the same amount of Joule heat in a given resistor in a given time as is produced by the alternating current in the same resistor over one full cycle.\n2. Derivation: Instantaneous heat dH = I² R dt = (I₀ sin ωt)² R dt.\nTotal heat over one cycle T: H = I₀² R ∫₀^T sin²(ωt) dt = I₀² R [T / 2].\nEquating to DC heat H = Irms² R T:\nIrms² R T = I₀² R (T / 2) => Irms² = I₀² / 2 => Irms = I₀ / √2 ≈ 0.707 I₀."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "What is meant by wattless current? Under what conditions does it occur?",
        "answer": "Wattless current concept and condition",
        "explanation": "1. Definition: That component of alternating current which consumes zero average electrical power over a complete cycle is called wattless current.\n2. Condition: It occurs when the phase difference between applied alternating voltage and current is φ = 90° (π/2). The average power is P_avg = Vrms Irms cos 90° = 0. This is achieved in a purely inductive circuit or purely capacitive circuit with zero ohmic resistance."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "A series LCR circuit with R = 20 Ω, L = 1.5 H, and C = 35 μF is connected to a variable frequency 220 V AC supply. When the frequency of the supply equals the natural frequency of the circuit, what is the average power transferred to the circuit in one complete cycle?",
        "answer": "P_avg = 2420 W",
        "explanation": "When supply frequency equals natural frequency, the circuit is in electrical resonance.\nAt resonance, impedance is purely resistive: Z = R = 20 Ω.\nCircuit current Irms = Vrms / R = 220 V / 20 Ω = 11 A.\nPower factor at resonance is cos φ = 1.0.\nAverage power transferred: P_avg = Vrms * Irms * cos φ = 220 V * 11 A * 1.0 = 2420 W."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Draw a phasor diagram for an alternating circuit containing a pure capacitor across an AC voltage source V = V₀ sin ωt.",
        "answer": "Phasor diagram for pure capacitor",
        "explanation": "In a pure capacitor, alternating current leads voltage by π/2:\n- Voltage phasor V of length V₀ is inclined at angle ωt to the reference axis.\n- Current phasor I of length I₀ is drawn at an angle (ωt + π/2), perpendicular and counterclockwise relative to the voltage phasor.\n- Projections on the vertical axis give instantaneous values: v = V₀ sin ωt and i = I₀ cos ωt = I₀ sin(ωt + π/2)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Define Q-factor (Quality Factor) of a series resonant circuit. Write its formula and state how it relates to the sharpness of resonance.",
        "answer": "Q-factor definition, formula, and resonance sharpness",
        "explanation": "1. Definition: The Quality Factor Q of a series resonant circuit is defined as the ratio of the resonant angular frequency ω₀ to the bandwidth Δω (difference between two half-power frequencies):\nQ = ω₀ / Δω = ω₀ / (2 Δω_half) = ω₀ L / R = (1/R) √(L/C).\n2. Sharpness of resonance: Higher Q-factor indicates a narrower bandwidth Δω, which means that the resonance peak is sharper and the circuit possesses high selectivity (e.g. In radio tuning circuits for selecting desired station frequencies while rejecting adjacent channels)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Why is the core of a transformer made of a magnetic material with high permeability and low hysteresis loop area?",
        "answer": "Core material selection criteria for transformers",
        "explanation": "1. High Permeability (μr >> 1): Ensures that magnetic flux created by the primary coil is efficiently coupled to the secondary coil with minimal flux leakage (high coupling factor k ≈ 1).\n2. Low Hysteresis Loop Area: Every AC cycle magnetises and demagnetises the core. The energy dissipated as heat per cycle per unit volume is proportional to the hysteresis loop area. Low hysteresis loss minimizes continuous thermal energy wastage."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "An inductor of 200 mH, a capacitor of 25 μF, and a resistor of 10 Ω are connected in series across an AC source of 220 V, 50 Hz. Calculate: (i) inductive reactance, (ii) capacitive reactance, (iii) total impedance.",
        "answer": "(i) XL = 62.83 Ω, (ii) XC = 127.32 Ω, (iii) Z = 65.26 Ω",
        "explanation": "Given: L = 0.2 H, C = 25 × 10⁻⁶ F, R = 10 Ω, f = 50 Hz.\n(i) XL = 2π f L = 2 * 3.1416 * 50 * 0.2 = 62.83 Ω.\n(ii) XC = 1 / (2π f C) = 1 / (2 * 3.1416 * 50 * 25 × 10⁻⁶) = 1 / (7.854 × 10⁻³) ≈ 127.32 Ω.\n(iii) Impedance Z = √( R² + (XL - XC)² ) = √( 10² + (62.83 - 127.32)² ) = √( 100 + (-64.49)² ) = √( 100 + 4158.96 ) = √4258.96 ≈ 65.26 Ω."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "A step-down transformer transforms 2200 V into 220 V. The primary coil has 5000 turns. Find the number of turns in the secondary coil and the transformation ratio.",
        "answer": "Ns = 500 turns, k = 0.1",
        "explanation": "Transformation ratio k = Vs / Vp = Ns / Np.\nGiven Vp = 2200 V, Vs = 220 V, Np = 5000.\nNs = Np * (Vs / Vp) = 5000 * (220 / 2200) = 5000 * (1/10) = 500 turns.\nTransformation ratio k = 220 / 2200 = 0.1 (or 1/10)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Show that the average power consumed over a complete cycle in a purely resistive AC circuit is P = Vrms Irms.",
        "answer": "Derivation of average power in pure resistive circuit",
        "explanation": "1. For a pure resistor, voltage and current are in phase:\nv = V₀ sin ωt and i = I₀ sin ωt.\n2. Instantaneous power: p = v * i = (V₀ sin ωt) (I₀ sin ωt) = V₀ I₀ sin² ωt.\n3. Using trigonometric identity sin² ωt = (1 - cos 2ωt) / 2:\np = (V₀ I₀ / 2) [1 - cos 2ωt].\n4. Average power over complete period T:\nP_avg = (1/T) ∫₀^T p dt = (V₀ I₀ / 2) * [ (1/T) ∫₀^T 1 dt - (1/T) ∫₀^T cos 2ωt dt ].\n5. Since the average of cos 2ωt over a complete cycle is zero:\nP_avg = (V₀ I₀ / 2) * [ 1 - 0 ] = (V₀ / √2) * (I₀ / √2) = Vrms * Irms."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "State four main causes of energy losses in a real transformer and how they can be reduced.",
        "answer": "Energy losses in transformers and mitigation",
        "explanation": "1. Copper Loss (I²R): Heat dissipated in windings; reduced by using thick copper wires of low resistance.\n2. Eddy Current Loss: Induced circulating currents in iron core; reduced by using a laminated core insulated by varnish.\n3. Hysteresis Loss: Energy lost in repeated magnetization cycles of core; reduced by using soft iron/silicon steel having a narrow hysteresis loop.\n4. Flux Leakage: Incomplete magnetic coupling between primary and secondary; reduced by winding secondary directly over primary coil."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) An AC voltage V = V₀ sin ωt is applied across a series LCR circuit. Using the phasor diagram method, derive expressions for:\n(i) the impedance of the circuit Z,\n(ii) the phase difference φ between voltage and current.\n(b) State the condition for resonance and derive the formula for resonant frequency.",
        "answer": "Complete phasor derivation of series LCR circuit and resonance",
        "explanation": "Marking Scheme:\n(a) Phasor Derivation (3 marks):\n- Let current in series circuit be i = I₀ sin(ωt + φ).\n- The same current i flows through R, L, and C.\n- Phasors:\n  * Voltage across resistor VR = I₀ R (in phase with i).\n  * Voltage across inductor VL = I₀ XL (leads i by π/2).\n  * Voltage across capacitor VC = I₀ XC (lags i by π/2).\n- Since VL and VC are in direct phase opposition (180°), their net reactive phasor is (VL - VC) directed along VL (assuming VL > VC).\n- By vector addition of VR and (VL - VC) at right angles:\n  V₀² = VR² + (VL - VC)² = (I₀ R)² + (I₀ XL - I₀ XC)² = I₀² [ R² + (XL - XC)² ].\n- Impedance Z = V₀ / I₀ = √( R² + (XL - XC)² ).\n- Phase angle φ from phasor triangle:\n  tan φ = (VL - VC) / VR = (XL - XC) / R.\n\n(b) Resonance (2 marks):\n- Condition: Inductive reactance equals capacitive reactance: XL = XC.\n- Then net reactance (XL - XC) = 0, impedance is minimum Z = R, and current is maximum I₀ = V₀ / R in phase with applied voltage (φ = 0).\n- Resonant frequency formula:\n  ω₀ L = 1 / (ω₀ C) => ω₀² = 1 / (LC) => ω₀ = 1 / √(LC).\n- In Hertz: f₀ = ω₀ / (2π) = 1 / [ 2π √(LC) ]."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Derive an expression for the average power consumed over a complete cycle in a series LCR circuit: P_avg = Vrms Irms cos φ.\n(b) Define power factor and state its value for:\n(i) a purely resistive circuit,\n(ii) a purely inductive circuit,\n(iii) a series LCR circuit at resonance.",
        "answer": "Power formula derivation and power factor in different circuits",
        "explanation": "Marking Scheme:\n(a) Derivation (3 marks):\n- Let alternating voltage be v = V₀ sin ωt and alternating current be i = I₀ sin(ωt - φ).\n- Instantaneous power p = v * i = V₀ I₀ sin ωt sin(ωt - φ).\n- Using 2 sin A sin B = cos(A - B) - cos(A + B):\n  p = (V₀ I₀ / 2) [ cos φ - cos(2ωt - φ) ].\n- Average power over complete cycle of period T:\n  P_avg = (1/T) ∫₀^T p dt = (V₀ I₀ / 2) cos φ - (V₀ I₀ / 2) * (1/T) ∫₀^T cos(2ωt - φ) dt.\n- Since the time average of cosine term over a full cycle is zero:\n  P_avg = (V₀ I₀ / 2) cos φ = (V₀ / √2) * (I₀ / √2) * cos φ = Vrms Irms cos φ.\n\n(b) Power Factor (2 marks):\n- Power factor is the cosine of the phase angle φ between voltage and current: Power Factor = cos φ = R / Z.\n(i) Pure resistive circuit: φ = 0 => cos 0° = 1 (Unity).\n(ii) Pure inductive circuit: φ = 90° => cos 90° = 0.\n(iii) Series LCR at resonance: Z = R, φ = 0 => cos φ = 1 (Unity)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain the principle, construction, and working of a transformer with a neat labelled diagram.\n(b) Derive the relationship between primary and secondary voltages and currents for an ideal transformer (Vs / Vp = Ns / Np = Ip / Is).\n(c) Why can a transformer not step up DC voltage?",
        "answer": "Complete theory of transformer, transformation ratio, and DC limitation",
        "explanation": "Marking Scheme:\n(a) Theory & Working (2.5 marks):\n- Principle: Mutual induction between two magnetically coupled coils.\n- Construction: Soft iron laminated core with two insulated copper windings (Primary with Np turns, Secondary with Ns turns).\n- Working: An AC voltage Vp applied to primary produces a time-varying magnetic flux Φ in the core. By Faraday's law, induced emfs are ep = - Np (dΦ/dt) and es = - Ns (dΦ/dt).\n\n(b) Transformation Ratio Derivation (1.5 marks):\n- Dividing secondary emf by primary emf: es / ep = Ns / Np.\n- For an ideal transformer with zero winding resistance: Vp = ep and Vs = es, so Vs / Vp = Ns / Np.\n- Assuming 100% efficiency (no energy loss): Pin = Pout => Vp Ip = Vs Is => Vs / Vp = Ip / Is.\n- Combining: Vs / Vp = Ns / Np = Ip / Is = k (transformation ratio).\n\n(c) DC limitation (1 mark):\n- Direct current (DC) has zero frequency (f = 0) and creates a constant, unchanging magnetic flux (dΦ/dt = 0). By Faraday's law, es = - Ns (dΦ/dt) = 0. No emf is induced in the secondary, making transformers useless for DC."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Long-Distance AC Power Transmission\nElectrical power generated at power stations must be transmitted across hundreds of kilometres to urban load centres. Transmission cables possess unavoidable electrical resistance R. If power P is transmitted at line voltage V, the current carried is I = P / V. The Joule heating power loss in transmission wires is P_loss = I² R = (P² R) / V². To minimize this loss, step-up transformers boost the voltage to 220 kV or 400 kV at the generating station. At substations near cities, step-down transformers progressively reduce voltage to 220 V for domestic usage.\n(i) Why is electrical energy transmitted at high voltage rather than high current?\n(ii) If transmission voltage is increased by a factor of 10, by what factor does line power loss decrease?\n(iii) Name the transformer used at the generating station.\n(iv) A generating station delivers 20 MW of power at 200 kV over transmission lines of total resistance 5 Ω. Calculate line power loss.",
        "answer": "Solutions to Case Study on Power Transmission",
        "explanation": "(i) To minimize Joule heating loss (I²R). Since I = P/V, higher voltage reduces transmission current I, drastically reducing heat dissipation in cables.\n(ii) P_loss ∝ 1 / V². Increasing voltage by a factor of 10 decreases power loss by a factor of 10² = 100.\n(iii) Step-up transformer.\n(iv) Current I = P / V = (20 × 10⁶ W) / (200 × 10³ V) = 100 A.\nLine power loss P_loss = I² R = (100 A)² * 5 Ω = 10000 * 5 = 50,000 W = 50 kW."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "A series LCR circuit containing L = 0.12 H, C = 480 nF, and R = 23 Ω is connected to a 230 V variable frequency AC supply.\n(i) Determine the source frequency for which current amplitude is maximum.\n(ii) Calculate the maximum current amplitude.\n(iii) Find the Q-factor of the circuit.\n(iv) Determine the power dissipated at resonance.",
        "answer": "(i) f₀ = 663 Hz, (ii) I₀ = 14.14 A, (iii) Q = 21.7, (iv) P = 2300 W",
        "explanation": "(i) Resonant angular frequency ω₀ = 1 / √(LC) = 1 / √(0.12 * 480 × 10⁻⁹) = 1 / √(5.76 × 10⁻⁸) = 1 / (2.4 × 10⁻⁴) = 4166.7 rad/s.\nSource frequency f₀ = ω₀ / (2π) = 4166.7 / (2 * 3.1416) ≈ 663.1 Hz.\n(ii) Maximum current amplitude I₀ = V₀ / R = (Vrms * √2) / R = (230 * 1.414) / 23 = 10 * 1.414 = 14.14 A.\n(Irms = 230/23 = 10 A).\n(iii) Q-factor: Q = ω₀ L / R = (4166.7 * 0.12) / 23 = 500 / 23 ≈ 21.74.\n(iv) Power at resonance: P = Vrms * Irms * cos 0° = 230 V * 10 A * 1 = 2300 W."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) An AC source V = V₀ sin ωt is connected to an inductor of self-inductance L. Prove that current lags voltage by π/2 radians.\n(b) Plot graphs showing the variation of:\n(i) inductive reactance XL with frequency f,\n(ii) capacitive reactance XC with frequency f.",
        "answer": "Derivation of lagging current in pure inductor and frequency graphs",
        "explanation": "(a) Derivation (3 marks):\n- Applied voltage: v = V₀ sin ωt.\n- Back-emf induced in inductor: e = - L (di/dt).\n- By Kirchhoff's loop rule: v + e = 0 => V₀ sin ωt - L (di/dt) = 0\n  => di/dt = (V₀ / L) sin ωt.\n- Integrating with respect to time:\n  i = (V₀ / L) ∫ sin ωt dt = - (V₀ / (ω L)) cos ωt.\n- Using - cos θ = sin(θ - π/2):\n  i = (V₀ / (ω L)) sin(ωt - π/2) = I₀ sin(ωt - π/2), where I₀ = V₀ / (ω L) = V₀ / XL.\n- Comparing with v = V₀ sin ωt confirms that current lags voltage by π/2 radians (90°).\n\n(b) Graphs (2 marks):\n(i) XL vs f: XL = 2π f L is a straight line passing through the origin (XL ∝ f).\n(ii) XC vs f: XC = 1 / (2π f C) is a rectangular hyperbola decaying asymptotically towards the axes (XC ∝ 1/f)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A 100 V, 50 Hz AC supply is connected across a series combination of an 80 Ω resistor and a capacitor of 40 μF. Calculate:\n(i) capacitive reactance,\n(ii) circuit impedance,\n(iii) current in the circuit,\n(iv) phase angle between current and voltage.",
        "answer": "(i) XC = 79.58 Ω, (ii) Z = 112.84 Ω, (iii) I = 0.886 A, (iv) φ = 44.85° (current leads)",
        "explanation": "Given: Vrms = 100 V, f = 50 Hz, R = 80 Ω, C = 40 × 10⁻⁶ F.\n(i) XC = 1 / (2π f C) = 1 / (2 * 3.1416 * 50 * 40 × 10⁻⁶) = 1 / (0.012566) ≈ 79.58 Ω.\n(ii) Z = √(R² + XC²) = √(80² + 79.58²) = √(6400 + 6333) = √12733 ≈ 112.84 Ω.\n(iii) Current Irms = Vrms / Z = 100 / 112.84 ≈ 0.886 A.\n(iv) tan φ = XC / R = 79.58 / 80 ≈ 0.9948 => φ = arctan(0.9948) ≈ 44.85°, with current leading voltage."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) What is an LC oscillator? Explain the physical mechanism of LC oscillations.\n(b) Write expressions for the total energy of an LC circuit at any instant and show that it remains constant in the absence of resistance.",
        "answer": "Theory of LC oscillations and energy conservation proof",
        "explanation": "(a) LC Oscillator: A circuit containing an inductor L and capacitor C connected in parallel that produces sustained electrical oscillations.\nMechanism: When a charged capacitor discharges through an inductor, electrostatic energy (1/2 Q²/C) decreases while magnetic energy (1/2 L I²) builds up in the inductor. When capacitor charge reaches zero, current is maximum. The collapsing magnetic field then recharges the capacitor with opposite polarity. This continuous periodic interchange of electric and magnetic energy constitutes LC oscillations of angular frequency ω = 1/√(LC).\n\n(b) Energy Conservation:\nTotal energy U = U_E + U_B = q² / (2C) + 1/2 L i².\nCharge varies as q(t) = Q₀ cos ωt, and current i = dq/dt = - Q₀ ω sin ωt.\nSubstitute q and i:\nU = (Q₀² cos² ωt) / (2C) + 1/2 L (Q₀² ω² sin² ωt).\nSince ω² = 1 / (LC) => L ω² = 1/C:\nU = [ Q₀² / (2C) ] cos² ωt + [ Q₀² / (2C) ] sin² ωt = [ Q₀² / (2C) ] (cos² ωt + sin² ωt) = Q₀² / (2C) = Constant.\nThus, total energy is strictly conserved."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A series LCR circuit has R = 5 Ω, L = 40 mH, and C = 100 μF. (i) Calculate the resonant frequency. (ii) Calculate the Q-factor. (iii) If AC supply voltage is 200 V, calculate the voltage across the inductor at resonance.",
        "answer": "(i) f₀ = 79.58 Hz, (ii) Q = 4, (iii) VL = 800 V",
        "explanation": "Given: R = 5 Ω, L = 40 × 10⁻³ H = 0.04 H, C = 100 × 10⁻⁶ F = 10⁻⁴ F, V = 200 V.\n(i) ω₀ = 1 / √(LC) = 1 / √(0.04 * 10⁻⁴) = 1 / √(4 × 10⁻⁶) = 1 / (2 × 10⁻³) = 500 rad/s.\nf₀ = ω₀ / (2π) = 500 / (2 * 3.1416) ≈ 79.58 Hz.\n(ii) Q = ω₀ L / R = (500 * 0.04) / 5 = 20 / 5 = 4.\n(iii) At resonance, current Irms = V / R = 200 V / 5 Ω = 40 A.\nInductive reactance XL = ω₀ L = 500 * 0.04 = 20 Ω.\nVoltage across inductor VL = Irms * XL = 40 A * 20 Ω = 800 V.\n(Notice VL = Q * V = 4 * 200 = 800 V, demonstrating voltage magnification!)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is the function of a step-up transformer at a generating power plant and a step-down transformer at a city substation?\n(b) An ideal transformer has 200 turns in primary and 50 turns in secondary. The primary is connected to 220 V AC and draws 2 A current. Calculate:\n(i) secondary voltage,\n(ii) secondary current,\n(iii) output electrical power.",
        "answer": "(i) Vs = 55 V, (ii) Is = 8 A, (iii) Pout = 440 W",
        "explanation": "(a) Function:\n- Step-up transformer at generating plant: Steps up voltage to very high levels (e.g. 220 kV or 400 kV) to minimize transmission line current I = P/V, cutting I²R Joule heating losses across hundreds of kilometres.\n- Step-down transformer at substations: Steps down high transmission voltage progressively to safe, usable domestic levels (220 V) for household consumer appliances.\n\n(b) Given: Np = 200, Ns = 50, Vp = 220 V, Ip = 2 A.\n(i) Vs / Vp = Ns / Np => Vs = Vp * (Ns / Np) = 220 * (50 / 200) = 220 / 4 = 55 V.\n(ii) In an ideal transformer: Vp Ip = Vs Is => Is = (Vp Ip) / Vs = (220 * 2) / 55 = 440 / 55 = 8 A (or Is = Ip * (Np/Ns) = 2 * 4 = 8 A).\n(iii) Output power Pout = Vs * Is = 55 V * 8 A = 440 W (equals input power Pin = 220 * 2 = 440 W)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "unit_num": 5,
      "title": "Electromagnetic Waves",
      "unit_title": "Electromagnetic Waves",
      "weightage_unit": "18 Marks (Units 5 & 6)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following electromagnetic waves has the highest frequency?",
        "options": [
          "(a) X-rays",
          "(b) Gamma rays",
          "(c) Ultraviolet rays",
          "(d) Microwaves"
        ],
        "answer": "(b) Gamma rays",
        "explanation": "In the electromagnetic spectrum, Gamma rays possess the shortest wavelength (< 10⁻¹² m) and therefore the highest frequency (> 10²⁰ Hz) and photon energy."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The displacement current Id between the plates of a charging capacitor of area A and plate separation d is given by:",
        "options": [
          "(a) ε₀ dΦE/dt",
          "(b) μ₀ dΦE/dt",
          "(c) (1/ε₀) dΦE/dt",
          "(d) ε₀ dΦB/dt"
        ],
        "answer": "(a) ε₀ dΦE/dt",
        "explanation": "Displacement current arises from a time-varying electric field and is given by Id = ε₀ (dΦE / dt)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The ratio of the amplitudes of the electric field E₀ and magnetic field B₀ in an electromagnetic wave in free space is equal to:",
        "options": [
          "(a) speed of light c",
          "(b) 1 / c",
          "(c) c²",
          "(d) 1 / c²"
        ],
        "answer": "(a) speed of light c",
        "explanation": "From Maxwell's electromagnetic wave equations: E₀ / B₀ = c = 1 / √(μ₀ ε₀)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Electromagnetic waves are transverse in nature. This is evident by the phenomenon of:",
        "options": [
          "(a) Interference",
          "(b) Diffraction",
          "(c) Polarisation",
          "(d) Refraction"
        ],
        "answer": "(c) Polarisation",
        "explanation": "Interference, diffraction, and refraction occur for both longitudinal and transverse waves. Only transverse waves can be polarised, proving the transverse nature of electromagnetic waves."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Electromagnetic waves used in RADAR systems and microwave ovens are:",
        "options": [
          "(a) Radio waves",
          "(b) Microwaves",
          "(c) Infrared waves",
          "(d) Ultraviolet rays"
        ],
        "answer": "(b) Microwaves",
        "explanation": "Microwaves (wavelength ~ 1 mm to 0.1 m) are used in aircraft navigation (RADAR) due to their short wavelengths, and in microwave ovens where their frequency matches the resonant rotational frequency of water molecules."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If an electromagnetic wave is propagating along the +x direction and its electric field oscillates along the +y direction, the magnetic field oscillates along:",
        "options": [
          "(a) +z direction",
          "(b) -z direction",
          "(c) +y direction",
          "(d) -x direction"
        ],
        "answer": "(a) +z direction",
        "explanation": "The direction of wave propagation is given by the Poynting vector S = (E × B) / μ₀. For propagation along +x (î) and electric field along +y (ĵ): since î = ĵ × k̂, the magnetic field B must oscillate along the +z direction (k̂)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "Which electromagnetic radiation is used for water purification and killing germs?",
        "options": [
          "(a) Infrared rays",
          "(b) Ultraviolet rays",
          "(c) X-rays",
          "(d) Microwaves"
        ],
        "answer": "(b) Ultraviolet rays",
        "explanation": "Ultraviolet (UV) radiation (wavelength ~ 10 nm to 400 nm) has sufficient photon energy to disrupt DNA in microorganisms, effectively destroying bacteria and sterilizing drinking water."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Infrared rays are also known as:",
        "options": [
          "(a) Light waves",
          "(b) Heat waves",
          "(c) Radio waves",
          "(d) Sound waves"
        ],
        "answer": "(b) Heat waves",
        "explanation": "Infrared waves are produced by hot bodies and molecules. When absorbed, they increase molecular thermal vibrations, producing heating; hence they are commonly referred to as heat waves."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The total energy density u of an electromagnetic wave in vacuum is:",
        "options": [
          "(a) 1/2 ε₀ E² + B² / (2μ₀)",
          "(b) ε₀ E² + B² / μ₀",
          "(c) 1/2 ε₀ E²",
          "(d) B² / (2μ₀)"
        ],
        "answer": "(a) 1/2 ε₀ E² + B² / (2μ₀)",
        "explanation": "Total energy density is the sum of the electric and magnetic energy densities: u = uE + uB = 1/2 ε₀ E² + B² / (2μ₀). On average, uE = uB, so u_avg = ε₀ Erms² = Brms² / μ₀."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "During the charging of a parallel plate capacitor, the conduction current Ic in the connecting wires and displacement current Id between the plates satisfy:",
        "options": [
          "(a) Ic > Id",
          "(b) Ic < Id",
          "(c) Ic = Id",
          "(d) Ic = 0"
        ],
        "answer": "(c) Ic = Id",
        "explanation": "By generalized Ampere-Maxwell law, current continuity is strictly maintained: the conduction current flowing through the leads equals the displacement current between the plates at any given instant (Ic = Id)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The greenhouse effect that maintains Earth's average temperature is caused primarily by the trapping of:",
        "options": [
          "(a) Ultraviolet radiation",
          "(b) Infrared radiation",
          "(c) Visible light",
          "(d) X-rays"
        ],
        "answer": "(b) Infrared radiation",
        "explanation": "Earth's surface re-radiates absorbed solar energy as long-wavelength infrared radiation, which is trapped by atmospheric greenhouse gases (CO2, water vapor, methane)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "An electromagnetic wave carries:",
        "options": [
          "(a) only energy",
          "(b) only momentum",
          "(c) both energy and momentum",
          "(d) neither energy nor momentum"
        ],
        "answer": "(c) both energy and momentum",
        "explanation": "EM waves transport both electromagnetic energy U and linear momentum p = U / c, exerting radiation pressure when striking an object."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The source of electromagnetic waves is:",
        "options": [
          "(a) a stationary charge",
          "(b) a charge moving with constant velocity",
          "(c) an accelerated charge",
          "(d) an uncharged particle"
        ],
        "answer": "(c) an accelerated charge",
        "explanation": "Stationary charges produce only electrostatic fields. Charges in steady motion produce static magnetic fields. An accelerating or oscillating charge produces time-varying electric and magnetic fields that radiate outwards as electromagnetic waves."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The speed of electromagnetic waves in a medium of relative permittivity εr and relative permeability μr is:",
        "options": [
          "(a) c / √(μr εr)",
          "(b) c √(μr εr)",
          "(c) √(μr εr) / c",
          "(d) c"
        ],
        "answer": "(a) c / √(μr εr)",
        "explanation": "v = 1 / √(μ ε) = 1 / √(μ₀ μr ε₀ εr) = [ 1 / √(μ₀ ε₀) ] * [ 1 / √(μr εr) ] = c / √(μr εr) = c / n."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following parts of the electromagnetic spectrum is detected by the human eye?",
        "options": [
          "(a) 100 nm to 400 nm",
          "(b) 400 nm to 700 nm",
          "(c) 700 nm to 1 mm",
          "(d) 1 mm to 1 m"
        ],
        "answer": "(b) 400 nm to 700 nm",
        "explanation": "The visible spectrum spans wavelengths from approximately 400 nm (violet) to 700 nm (red)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "X-rays are produced by:",
        "options": [
          "(a) radioactive decay of atomic nuclei",
          "(b) bombarding a high atomic number metal target with high-energy electrons",
          "(c) spark discharge",
          "(d) hot bodies"
        ],
        "answer": "(b) bombarding a high atomic number metal target with high-energy electrons",
        "explanation": "X-rays are produced in Coolidge tubes when high-speed electrons collide with heavy metal targets like tungsten (producing characteristic X-rays and Bremsstrahlung)."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The dimensional formula of 1 / √(μ₀ ε₀) is:",
        "options": [
          "(a) [L T⁻¹]",
          "(b) [L² T⁻²]",
          "(c) [L⁻¹ T]",
          "(d) [M L T⁻¹]"
        ],
        "answer": "(a) [L T⁻¹]",
        "explanation": "Since c = 1 / √(μ₀ ε₀) is the speed of light, its dimensional formula is the dimension of velocity: [L T⁻¹]."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which radiation is used in cellular mobile phone communication?",
        "options": [
          "(a) Ultra High Frequency (UHF) radio waves / Microwaves",
          "(b) Ultraviolet rays",
          "(c) Infrared rays",
          "(d) Gamma rays"
        ],
        "answer": "(a) Ultra High Frequency (UHF) radio waves / Microwaves",
        "explanation": "Cellular communication systems operate in the UHF band (~800 MHz to 2.5 GHz) of radio/microwaves."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The electric field amplitude of an EM wave is E₀ = 120 N/C. The amplitude of its magnetic field component B₀ is:",
        "options": [
          "(a) 4 × 10⁻⁷ T",
          "(b) 3.6 × 10¹⁰ T",
          "(c) 4 × 10⁻⁵ T",
          "(d) 2.5 × 10⁻⁸ T"
        ],
        "answer": "(a) 4 × 10⁻⁷ T",
        "explanation": "B₀ = E₀ / c = (120 N/C) / (3 × 10⁸ m/s) = 4 × 10⁻⁷ T."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which layer of the Earth's atmosphere absorbs harmful ultraviolet rays from the Sun?",
        "options": [
          "(a) Troposphere",
          "(b) Stratosphere (Ozone layer)",
          "(c) Mesosphere",
          "(d) Ionosphere"
        ],
        "answer": "(b) Stratosphere (Ozone layer)",
        "explanation": "The stratospheric ozone (O3) layer absorbs high-energy UV radiation (especially UV-B and UV-C), protecting terrestrial life from severe cell and DNA damage."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The phase difference between electric and magnetic field vectors in an electromagnetic wave in vacuum is:",
        "options": [
          "(a) 0",
          "(b) π/2",
          "(c) π",
          "(d) π/4"
        ],
        "answer": "(a) 0",
        "explanation": "In free space, electric field E and magnetic field B oscillate in the same phase: they reach their maximum, minimum, and zero values simultaneously at the same point in space and time (phase difference = 0)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Radiation pressure exerted by an electromagnetic wave of energy flux S incident normally on a completely absorbing surface is:",
        "options": [
          "(a) S / c",
          "(b) 2S / c",
          "(c) S c",
          "(d) S / c²"
        ],
        "answer": "(a) S / c",
        "explanation": "For complete absorption, momentum delivered is Δp = ΔU / c. Force F = Δp / Δt = (ΔU/Δt) / c = P / c. Pressure = F / A = (P/A) / c = S / c. (For perfect reflection, it is 2S/c)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The electromagnetic wave used for studying the crystal structure of solids is:",
        "options": [
          "(a) X-rays",
          "(b) Microwaves",
          "(c) Infrared",
          "(d) Radio waves"
        ],
        "answer": "(a) X-rays",
        "explanation": "X-rays have wavelengths (~0.1 nm to 1 nm) comparable to interatomic spacing in crystals, allowing them to undergo Bragg diffraction for crystal structure determination."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following electromagnetic waves has the longest wavelength?",
        "options": [
          "(a) Radio waves",
          "(b) Microwaves",
          "(c) Infrared rays",
          "(d) Visible light"
        ],
        "answer": "(a) Radio waves",
        "explanation": "Radio waves have the longest wavelengths (> 0.1 m to thousands of kilometres) in the electromagnetic spectrum."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The Ampere-Maxwell law in mathematical form is written as:",
        "options": [
          "(a) ∮ B · dl = μ₀ Ic + μ₀ ε₀ (dΦE/dt)",
          "(b) ∮ B · dl = μ₀ Ic",
          "(c) ∮ B · dl = μ₀ ε₀ (dΦE/dt)",
          "(d) ∮ E · dl = - dΦB/dt"
        ],
        "answer": "(a) ∮ B · dl = μ₀ Ic + μ₀ ε₀ (dΦE/dt)",
        "explanation": "This is the generalized Ampere-Maxwell law incorporating both conduction current Ic and Maxwell's displacement current Id = ε₀ (dΦE/dt)."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Electromagnetic waves are transverse in nature.\nReason (R): The electric and magnetic field vectors oscillate perpendicular to each other and perpendicular to the direction of wave propagation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. By definition, a wave whose oscillations are perpendicular to the direction of energy propagation is transverse."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): In a charging capacitor, current flows through the dielectric gap even though no physical electrons cross it.\nReason (R): A changing electric field in the capacitor gap creates a displacement current equal in magnitude to the conduction current in the connecting wires.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The displacement current Id = ε₀ dΦE/dt maintains continuity of current across the insulating gap."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Microwaves are considered optimal for satellite and RADAR communication.\nReason (R): Microwaves have short wavelengths and can penetrate the Earth's ionosphere without undergoing total internal reflection or significant absorption.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Unlike lower frequency radio waves which reflect off the ionosphere, microwaves penetrate directly into space to reach satellites."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Infrared waves are often referred to as heat waves.\nReason (R): Infrared radiation is absorbed by water molecules in most materials, which increases their thermal agitation and raises the temperature.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Resonance with molecular vibrational modes converts IR wave energy directly into internal thermal energy."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Gamma rays have the highest penetrating power among all electromagnetic waves.\nReason (R): Gamma rays possess the shortest wavelength and highest frequency in the electromagnetic spectrum, giving them tremendous photon energy (E = hν).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. High photon energy allows gamma rays to pass through substantial thicknesses of matter (like lead shields)."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "What is displacement current? Why did Maxwell introduce this concept?",
        "answer": "Displacement current definition and Maxwell's motivation",
        "explanation": "1. Definition: Displacement current is that current which arises due to a time-varying electric field (rate of change of electric flux): Id = ε₀ (dΦE / dt).\n2. Motivation: Ampere's circuital law (∮ B · dl = μ₀ Ic) was inconsistent when applied to a charging capacitor (it predicted non-zero B for a loop around the lead wire, but zero B for an identical loop surface spanning the gap between plates). Maxwell resolved this inconsistency by adding displacement current to make Ampere's law logically consistent across all surfaces."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Write two characteristics of electromagnetic waves. How are they produced?",
        "answer": "Characteristics and production of EM waves",
        "explanation": "1. Characteristics: (i) They are transverse waves consisting of mutually perpendicular oscillating electric and magnetic fields. (ii) They travel in vacuum at universal speed c = 3 × 10⁸ m/s without requiring any material medium.\n2. Production: Electromagnetic waves are generated by accelerating or oscillating electric charges (e.g. an oscillating LC circuit or decelerating electrons in an X-ray tube)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "A parallel plate capacitor having circular plates of radius 12 cm is being charged by an external current of 0.15 A. Calculate: (i) the rate of change of electric field between plates, (ii) displacement current between the plates.",
        "answer": "(i) dE/dt = 3.75 × 10¹¹ V/(m·s), (ii) Id = 0.15 A",
        "explanation": "Given: r = 0.12 m, Ic = 0.15 A.\nArea of plates A = π r² = 3.1416 * (0.12)² = 0.04524 m².\n(i) Electric field between plates: E = Q / (ε₀ A) => dE/dt = (1 / (ε₀ A)) * (dQ/dt) = Ic / (ε₀ A).\ndE/dt = 0.15 / [ (8.854 × 10⁻¹² C²/(N·m²)) * (0.04524 m²) ] = 0.15 / (4.006 × 10⁻¹³) ≈ 3.74 × 10¹¹ V/(m·s).\n(ii) Displacement current Id = ε₀ A (dE/dt) = Ic = 0.15 A."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Name the electromagnetic waves used in: (i) treatment of cancer tumours, (ii) night vision goggles and fog photography, (iii) LASIK eye surgery, (iv) remote control of television sets.",
        "answer": "Identification of EM waves for specific applications",
        "explanation": "(i) Treatment of cancer: Gamma rays (radiotherapy).\n(ii) Night vision / fog photography: Infrared radiation.\n(iii) LASIK eye surgery: Ultraviolet rays (excimer laser).\n(iv) TV remote control: Infrared rays."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Show that the average energy density of an electromagnetic wave is equally divided between its electric and magnetic fields.",
        "answer": "Proof that uE = uB for an EM wave",
        "explanation": "1. Average electric energy density: uE = 1/4 ε₀ E₀².\n2. Average magnetic energy density: uB = B₀² / (4μ₀).\n3. In an EM wave, E₀ = c B₀ and c = 1 / √(μ₀ ε₀) => c² = 1 / (μ₀ ε₀).\n4. Substituting E₀ into uE:\nuE = 1/4 ε₀ (c B₀)² = 1/4 ε₀ c² B₀² = 1/4 ε₀ [ 1 / (μ₀ ε₀) ] B₀² = B₀² / (4μ₀) = uB.\n5. Therefore, uE = uB, proving that the energy is shared equally between the electric and magnetic fields."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, E = 6.3 ĵ V/m. What is B at this point?",
        "answer": "B = 2.1 × 10⁻⁸ k̂ Tesla",
        "explanation": "Magnitude: B = E / c = (6.3 V/m) / (3.0 × 10⁸ m/s) = 2.1 × 10⁻⁸ T.\nDirection: Propagation vector is along +x (î). Electric field is along +y (ĵ).\nSince î = ĵ × k̂, the magnetic field must be directed along +z (k̂).\nThus, B = 2.1 × 10⁻⁸ k̂ T."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Arrange the following electromagnetic radiations in order of increasing frequency: Radio waves, Gamma rays, Visible light, Microwaves, Ultraviolet rays, Infrared rays, X-rays. State which one has highest wavelength.",
        "answer": "Arrangement in increasing frequency and longest wavelength",
        "explanation": "1. In order of increasing frequency (and decreasing wavelength):\nRadio waves < Microwaves < Infrared rays < Visible light < Ultraviolet rays < X-rays < Gamma rays.\n2. Radio waves have the highest (longest) wavelength."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "How are infrared waves produced? Why are they used for greenhouse cultivation?",
        "answer": "Production of infrared and greenhouse application",
        "explanation": "1. Production: Produced by the thermal vibration and rotation of atoms and molecules in hot bodies.\n2. Greenhouse cultivation: Glass walls allow short-wavelength solar radiation (visible and near-IR) to enter freely. The plants and soil absorb it and re-emit it as long-wavelength infrared. Glass is opaque to this long-wavelength IR, trapping the heat inside and keeping the greenhouse warm for optimal plant growth."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Write Maxwell's four equations in integral form for free space.",
        "answer": "Maxwell's four equations",
        "explanation": "1. Gauss's Law in Electrostatics: ∮ E · dA = q / ε₀.\n2. Gauss's Law in Magnetism: ∮ B · dA = 0.\n3. Faraday's Law of Electromagnetic Induction: ∮ E · dl = - dΦB / dt.\n4. Generalized Ampere-Maxwell Law: ∮ B · dl = μ₀ Ic + μ₀ ε₀ (dΦE / dt)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is radiation pressure? If total energy U of an EM wave is incident on a completely reflecting surface, what is the momentum delivered to the surface?",
        "answer": "Radiation pressure and momentum delivered = 2U / c",
        "explanation": "1. Radiation Pressure: The mechanical force exerted per unit area by an electromagnetic wave when it impinges upon a physical surface.\n2. Momentum Delivered: Initial momentum of incident wave is p_i = U / c. Upon complete reflection, reflected wave has momentum p_f = - U / c. Change in momentum transferred to the surface is Δp = p_i - p_f = U/c - (-U/c) = 2U / c."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) What was the inconsistency in Ampere's circuital law? Explain how Maxwell modified it by introducing the concept of displacement current.\n(b) Prove that during the charging of a capacitor, the displacement current in the region between the plates is exactly equal to the conduction current in the connecting wires.",
        "answer": "Ampere's law inconsistency, Maxwell's displacement current, and proof of Ic = Id",
        "explanation": "Marking Scheme:\n(a) Inconsistency and Resolution (2.5 marks):\n- Consider a parallel plate capacitor charging via conduction current Ic.\n- Draw a circular loop C around the lead wire. By original Ampere's law: ∮ B · dl = μ₀ Ic.\n- Now stretch the surface bounded by loop C like an open bag so that it passes entirely between the capacitor plates without intersecting the wire.\n- Since no electrons cross the gap, Ic = 0, giving ∮ B · dl = 0. This creates a severe contradiction (the line integral around the same loop gives two different results depending on chosen surface).\n- Maxwell resolved this by realizing that the changing electric field between plates generates a magnetic field just as a real current does. He defined displacement current Id = ε₀ (dΦE/dt) and modified the law: ∮ B · dl = μ₀ (Ic + Id).\n\n(b) Proof that Id = Ic (2.5 marks):\n- Let plate area be A and charge at instant t be q. Electric field between plates: E = q / (ε₀ A).\n- Electric flux ΦE = E * A = [ q / (ε₀ A) ] * A = q / ε₀.\n- Rate of change of electric flux: dΦE/dt = (1/ε₀) (dq/dt).\n- By definition, displacement current: Id = ε₀ (dΦE/dt) = ε₀ * [ (1/ε₀) (dq/dt) ] = dq/dt.\n- But dq/dt is the rate of flow of charge in the connecting wire, which is conduction current Ic.\n- Therefore: Id = Ic. (Proven)."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Describe the electromagnetic spectrum in terms of wavelength and frequency ranges.\n(b) State the production method, detection technique, and two prominent applications for each of the following:\n(i) Microwaves,\n(ii) Ultraviolet rays,\n(iii) X-rays.",
        "answer": "Comprehensive review of Microwaves, UV rays, and X-rays",
        "explanation": "Marking Scheme:\n(a) Spectrum Overview (1.5 marks):\n- EM waves range from Radio waves (> 0.1 m) to Gamma rays (< 10⁻¹² m).\n- Order: Radio > Microwaves > Infrared > Visible > Ultraviolet > X-rays > Gamma rays.\n\n(b) Detailed breakdown (3.5 marks):\n(i) Microwaves:\n- Wavelength: 1 mm to 0.1 m.\n- Production: Special vacuum tubes like Klystrons, Magnetrons, and Gunn diodes.\n- Detection: Point contact diodes, crystal detectors.\n- Applications: 1. RADAR systems for aircraft navigation. 2. Microwave ovens for domestic and commercial cooking.\n\n(ii) Ultraviolet (UV) Rays:\n- Wavelength: 10 nm to 400 nm.\n- Production: High-voltage electric arcs, mercury vapor lamps, hot stars.\n- Detection: Photodiodes, photographic plates, fluorescent screens.\n- Applications: 1. Water purifiers to kill germs and bacteria. 2. LASIK eye corneal surgery.\n\n(iii) X-rays:\n- Wavelength: 0.01 nm to 10 nm.\n- Production: Sudden deceleration of fast electrons hitting a high-Z metal target (Coolidge tube).\n- Detection: Photographic film, Geiger counters, ionization chambers.\n- Applications: 1. Medical diagnostic imaging for bone fractures. 2. Studying crystalline solid structures (crystallography)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) State four important properties of electromagnetic waves.\n(b) A plane electromagnetic wave travels in vacuum along the z-direction. Write the mathematical expressions for its electric and magnetic fields.\n(c) The amplitude of the magnetic field part of a harmonic electromagnetic wave in vacuum is B₀ = 510 nT. What is the amplitude of the electric field part?",
        "answer": "Properties of EM waves, field equations, and numerical",
        "explanation": "Marking Scheme:\n(a) Properties (2 marks):\n1. Transverse nature: E and B oscillate perpendicular to each other and perpendicular to wave velocity.\n2. Vacuum propagation: Travel at speed of light c = 1/√(μ₀ ε₀) = 3 × 10⁸ m/s without needing a medium.\n3. Uncharged: Not deflected by electric or magnetic fields.\n4. Energy transport: Carry energy with equal partition between electric (uE) and magnetic (uB) fields.\n\n(b) Field Equations along z-axis (1.5 marks):\n- Electric field: E(z, t) = E₀ sin(kz - ωt) î\n- Magnetic field: B(z, t) = B₀ sin(kz - ωt) ĵ\nwhere k = 2π/λ is wave number, ω = 2πf is angular frequency, and ω/k = c.\n\n(c) Numerical (1.5 marks):\n- B₀ = 510 nT = 510 × 10⁻⁹ T = 5.1 × 10⁻⁷ T.\n- E₀ = c * B₀ = (3.0 × 10⁸ m/s) * (5.1 × 10⁻⁷ T) = 153 N/C (or V/m)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: The Electromagnetic Spectrum in Modern Technology\nThe electromagnetic spectrum encompasses waves spanning from kilometer-long radio waves to sub-picometer gamma rays. Different frequency bands interact differently with matter. Radio waves diffract around large terrestrial obstacles and are utilized in broadcasting; microwaves penetrate clouds and fog making them ideal for satellite and radar links; infrared waves excite molecular vibrations and are detected as heat; ultraviolet radiation ionizes molecules; and X-rays penetrate soft tissue while being absorbed by calcium in bones, creating high-contrast diagnostic radiographs.\n(i) Which electromagnetic radiation is used to inspect luggage at airports?\n(ii) Why are infrared lamps used in physical therapy for treating muscular strain?\n(iii) What frequency of radio waves is used for FM radio broadcasting?\n(iv) Why is the ozone layer crucial for terrestrial life?",
        "answer": "Solutions to Case Study on EM Spectrum Applications",
        "explanation": "(i) X-rays are used in airport security scanners because they easily penetrate luggage containers but are attenuated differentially by metals, weapons, and dense objects.\n(ii) Infrared radiation penetrates beneath the skin surface, producing gentle deep heating that dilates capillaries, enhances localized blood circulation, and relieves muscular strain.\n(iii) FM radio operates in the Very High Frequency (VHF) band between 88 MHz and 108 MHz.\n(iv) The stratospheric ozone layer absorbs high-energy solar UV-B and UV-C radiation. Without it, intense UV exposure would cause severe skin carcinomas, cataracts, and genetic mutations in living organisms."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) A parallel plate capacitor with circular plates of radius R is being charged by a constant current I. Derive the expression for the magnetic field at a distance r from the axis in the region between the plates for:\n(i) r ≤ R,\n(ii) r ≥ R.\n(b) Sketch the variation of magnetic field B with distance r from the axis.",
        "answer": "Derivation of magnetic field inside and outside charging capacitor plates and sketch",
        "explanation": "(a) Derivation:\nTotal displacement current between plates equals conduction current: Id = I.\nDisplacement current is distributed uniformly over plate cross-section A = π R².\nDisplacement current density Jd = I / (π R²).\n\n(i) Inside the plates (r ≤ R):\n- Choose a circular Amperean loop of radius r concentric with the plates.\n- Enclosed displacement current: Id_enc = Jd * (π r²) = [ I / (π R²) ] * (π r²) = I (r / R)².\n- By Ampere-Maxwell law: ∮ B · dl = μ₀ Id_enc\n  => B (2π r) = μ₀ I (r² / R²)\n  => B = [ μ₀ I / (2π R²) ] * r.\n- Magnetic field is directly proportional to r (B ∝ r).\n\n(ii) Outside the plates (r ≥ R):\n- Amperean loop of radius r ≥ R encloses the entire displacement current: Id_enc = I.\n- ∮ B · dl = μ₀ I => B (2π r) = μ₀ I => B = μ₀ I / (2π r).\n- Magnetic field is inversely proportional to r (B ∝ 1/r).\n\n(b) Sketch:\n- B increases linearly from 0 at r = 0 to maximum value B_max = μ₀ I / (2π R) at r = R.\n- For r > R, B decreases hyperbolically according to B ∝ 1/r."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "In a plane electromagnetic wave, the electric field oscillates sinusoidally at a frequency of 2.0 × 10¹⁰ Hz and amplitude 48 V/m.\n(i) What is the wavelength of the wave?\n(ii) What is the amplitude of the oscillating magnetic field?\n(iii) Show that the average energy density of the electric field equals the average energy density of the magnetic field.\n(iv) Calculate the total average energy density of the wave.",
        "answer": "(i) λ = 1.5 cm, (ii) B₀ = 1.6 × 10⁻⁷ T, (iii) uE = uB, (iv) u_total = 1.02 × 10⁻⁸ J/m³",
        "explanation": "Given: f = 2.0 × 10¹⁰ Hz, E₀ = 48 V/m, c = 3.0 × 10⁸ m/s.\n(i) Wavelength λ = c / f = (3.0 × 10⁸ m/s) / (2.0 × 10¹⁰ Hz) = 1.5 × 10⁻² m = 1.5 cm.\n(ii) Magnetic field amplitude B₀ = E₀ / c = 48 / (3.0 × 10⁸) = 1.6 × 10⁻⁷ T.\n(iii) Average electric energy density: uE = 1/4 ε₀ E₀² = 0.25 * (8.854 × 10⁻¹²) * (48)² = 5.10 × 10⁻⁹ J/m³.\nAverage magnetic energy density: uB = B₀² / (4 μ₀) = (1.6 × 10⁻⁷)² / (4 * 4π × 10⁻⁷) = (2.56 × 10⁻¹⁴) / (5.027 × 10⁻⁶) = 5.09 × 10⁻⁹ J/m³.\nThus uE = uB ≈ 5.1 × 10⁻⁹ J/m³.\n(iv) Total average energy density: u_total = uE + uB = 2 * (5.1 × 10⁻⁹) = 1.02 × 10⁻⁸ J/m³."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Identify the type of electromagnetic waves associated with the following wavelengths and state one use of each:\n(i) λ = 10⁻¹⁰ m,\n(ii) λ = 10⁻² m,\n(iii) λ = 10⁻⁷ m,\n(iv) λ = 10⁻⁴ m.",
        "answer": "Identification of EM waves from wavelengths and their applications",
        "explanation": "(i) λ = 10⁻¹⁰ m = 0.1 nm: X-rays.\nUse: Medical diagnosis of bone fractures and structural analysis of crystals.\n(ii) λ = 10⁻² m = 1 cm: Microwaves.\nUse: RADAR systems for aircraft navigation and speed detection.\n(iii) λ = 10⁻⁷ m = 100 nm: Ultraviolet (UV) rays.\nUse: Water purification and sterilization of surgical equipment.\n(iv) λ = 10⁻⁴ m = 0.1 mm: Infrared rays.\nUse: Night vision surveillance cameras and physical therapy."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State Poynting vector. What does it represent and what are its SI units?\n(b) The sun delivers about 1.4 kW/m² of electromagnetic flux to the Earth's upper atmosphere. Calculate:\n(i) the amplitudes of electric and magnetic fields in the incident sunlight,\n(ii) radiation pressure on a completely absorbing surface.",
        "answer": "Poynting vector definition, field amplitudes, and radiation pressure",
        "explanation": "(a) Poynting Vector: S = (E × B) / μ₀.\nIt represents the rate of flow of electromagnetic energy per unit cross-sectional area perpendicular to the direction of wave propagation (energy flux vector). SI Unit: Watt per square metre (W/m²).\n\n(b) Given: Intensity I = 1.4 kW/m² = 1400 W/m².\n(i) Intensity formula: I = 1/2 ε₀ c E₀²\n=> E₀ = √( 2I / (ε₀ c) ) = √( (2 * 1400) / (8.854 × 10⁻¹² * 3 × 10⁸) ) = √( 2800 / 2.656 × 10⁻³ ) = √( 1.054 × 10⁶ ) ≈ 1027 V/m.\nMagnetic field amplitude: B₀ = E₀ / c = 1027 / (3 × 10⁸) ≈ 3.42 × 10⁻⁶ T.\n(ii) Radiation pressure on a completely absorbing surface:\nP_rad = I / c = (1400 W/m²) / (3.0 × 10⁸ m/s) ≈ 4.67 × 10⁻⁶ N/m² (Pa)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A capacitor made of two circular plates each of radius 6.0 cm has a capacitance of 100 pF. The capacitor is connected to a 230 V AC supply with an angular frequency of 300 rad/s.\n(i) Find the rms value of the conduction current.\n(ii) Is the conduction current equal to the displacement current?\n(iii) Determine the amplitude of B at a point 3.0 cm from the axis between the plates.",
        "answer": "(i) Irms = 6.9 μA, (ii) Yes, (iii) B₀ = 1.63 × 10⁻¹¹ T",
        "explanation": "Given: R = 0.06 m, C = 100 pF = 10⁻¹⁰ F, Vrms = 230 V, ω = 300 rad/s.\n(i) Capacitive reactance XC = 1 / (ω C) = 1 / (300 * 10⁻¹⁰) = 10⁸ / 3 Ω = 3.33 × 10⁷ Ω.\nConduction current Irms = Vrms / XC = 230 / (10⁸ / 3) = 690 × 10⁻⁸ A = 6.9 μA.\n(ii) Yes, conduction current equals displacement current across the plates: Id = Ic = 6.9 μA.\n(iii) Peak current I₀ = Irms * √2 = 6.9 μA * 1.414 = 9.76 μA.\nFor r = 0.03 m (r < R = 0.06 m):\nB₀ = [ μ₀ I₀ / (2π R²) ] * r = [ (4π × 10⁻⁷ * 9.76 × 10⁻⁶) / (2π * (0.06)²) ] * 0.03\nB₀ = [ 2 × 10⁻⁷ * 9.76 × 10⁻⁶ * 0.03 ] / 0.0036 = (5.856 × 10⁻¹⁴) / 0.0036 ≈ 1.63 × 10⁻¹¹ T."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Which physical quantity is conserved when an electromagnetic wave is reflected or absorbed by a surface?\n(b) Name the electromagnetic radiations used for:\n(i) cellular phone communication,\n(ii) checking counterfeit currency notes,\n(iii) studying the structure of molecules,\n(iv) surgical sterilization.",
        "answer": "Conservation laws and EM radiation identification",
        "explanation": "(a) Both Total Energy and Total Linear Momentum are strictly conserved. The momentum lost by the electromagnetic wave is transferred to the reflecting or absorbing body, manifesting as radiation pressure.\n(b) Identification:\n(i) Cellular mobile communication: Radio waves (UHF band) and Microwaves.\n(ii) Checking counterfeit currency: Ultraviolet (UV) radiation (excites fluorescent security ink).\n(iii) Studying molecular structures: Infrared radiation (vibrational spectroscopy) and Microwave spectroscopy.\n(iv) Surgical instrument sterilization: Ultraviolet rays and Gamma rays (kills all microbial pathogens)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "unit_num": 6,
      "title": "Ray Optics and Optical Instruments",
      "unit_title": "Optics",
      "weightage_unit": "18 Marks (Units 5 & 6)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A convex lens of focal length 20 cm in air is immersed in water (n = 4/3). If refractive index of lens glass is 1.5, its focal length in water will be:",
        "options": [
          "(a) 20 cm",
          "(b) 40 cm",
          "(c) 80 cm",
          "(d) 10 cm"
        ],
        "answer": "(c) 80 cm",
        "explanation": "In air: 1/f_air = (n_g - 1) (1/R1 - 1/R2) = (1.5 - 1) K = 0.5 K => K = 1 / (0.5 * 20) = 1/10.\nIn water: 1/f_w = (n_g / n_w - 1) K = (1.5 / (4/3) - 1) K = (9/8 - 1) K = (1/8) K = (1/8) * (1/10) = 1/80.\nTherefore, f_w = 80 cm (focal length increases 4 times)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "An optical fibre works on the principle of:",
        "options": [
          "(a) Total internal reflection",
          "(b) Refraction",
          "(c) Dispersion",
          "(d) Scattering"
        ],
        "answer": "(a) Total internal reflection",
        "explanation": "Optical fibres transmit light signals through a core (higher refractive index) surrounded by cladding (lower refractive index) via repeated Total Internal Reflection (TIR) at angles greater than the critical angle."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The magnifying power of an astronomical telescope in normal adjustment (image at infinity) is given by:",
        "options": [
          "(a) fo / fe",
          "(b) fe / fo",
          "(c) fo + fe",
          "(d) fo * fe"
        ],
        "answer": "(a) fo / fe",
        "explanation": "In normal adjustment, magnifying power is m = - fo / fe (magnitude = fo / fe), where fo is the focal length of the objective and fe is the focal length of the eyepiece."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A ray of light passes through an equilateral prism (A = 60°) such that the angle of incidence equals the angle of emergence, and both are equal to 45°. The angle of minimum deviation is:",
        "options": [
          "(a) 30°",
          "(b) 45°",
          "(c) 60°",
          "(d) 90°"
        ],
        "answer": "(a) 30°",
        "explanation": "Using prism formula A + δ = i + e. For minimum deviation i = e = 45°. Thus 60° + δm = 45° + 45° = 90° => δm = 90° - 60° = 30°."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Two thin lenses of focal lengths +20 cm and -40 cm are placed in contact. The power of the combination is:",
        "options": [
          "(a) +2.5 D",
          "(b) -2.5 D",
          "(c) +5 D",
          "(d) -5 D"
        ],
        "answer": "(a) +2.5 D",
        "explanation": "P1 = 100 / f1 = 100 / (+20) = +5 D. P2 = 100 / f2 = 100 / (-40) = -2.5 D. P_eq = P1 + P2 = +5 - 2.5 = +2.5 D."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "For a glass prism, which colour of light has the maximum refractive index and experiences maximum deviation?",
        "options": [
          "(a) Red",
          "(b) Yellow",
          "(c) Violet",
          "(d) Green"
        ],
        "answer": "(c) Violet",
        "explanation": "By Cauchy's dispersion formula, refractive index n increases as wavelength λ decreases (n_violet > n_red). Since deviation δ ≈ (n - 1) A, violet light undergoes the maximum deviation."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The critical angle for a medium of refractive index √2 relative to air is:",
        "options": [
          "(a) 30°",
          "(b) 45°",
          "(c) 60°",
          "(d) 90°"
        ],
        "answer": "(b) 45°",
        "explanation": "sin ic = 1 / n = 1 / √2 => ic = 45°."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A biconvex lens of focal length f is cut into two equal halves along its principal axis (horizontally). The focal length of each half will be:",
        "options": [
          "(a) f",
          "(b) 2f",
          "(c) f/2",
          "(d) 4f"
        ],
        "answer": "(a) f",
        "explanation": "Cutting a lens horizontally along its principal axis does not change the radii of curvature of the surfaces (R1, R2 remain unchanged) or the refractive index. Therefore, the focal length of each half remains f (only the aperture and image intensity are halved)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If a biconvex lens of focal length f is cut into two equal plano-convex halves along the vertical transverse plane, the focal length of each half will be:",
        "options": [
          "(a) f",
          "(b) 2f",
          "(c) f/2",
          "(d) 4f"
        ],
        "answer": "(b) 2f",
        "explanation": "Initially: 1/f = (n - 1)(1/R - (-1/R)) = 2(n - 1)/R. After vertical cut, one face is plane (R2 = ∞): 1/f' = (n - 1)(1/R - 0) = (n - 1)/R = (1/2)(1/f). Thus f' = 2f."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In a compound microscope, the intermediate image formed by the objective lens is:",
        "options": [
          "(a) virtual, erect, and magnified",
          "(b) real, inverted, and magnified",
          "(c) real, inverted, and diminished",
          "(d) virtual, erect, and diminished"
        ],
        "answer": "(b) real, inverted, and magnified",
        "explanation": "The object is placed just beyond the first focal point of the objective lens (fo < u < 2fo), producing a real, inverted, and magnified intermediate image."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The final image in an astronomical telescope in normal adjustment is:",
        "options": [
          "(a) real, inverted, at infinity",
          "(b) virtual, inverted with respect to object, at infinity",
          "(c) virtual, erect, at least distance of distinct vision",
          "(d) real, erect, at infinity"
        ],
        "answer": "(b) virtual, inverted with respect to object, at infinity",
        "explanation": "The objective creates a real inverted image at its focal plane (which coincides with the first focal plane of the eyepiece). The eyepiece then acts as a simple magnifier, producing a virtual, magnified, inverted (with respect to original object) final image at infinity."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following is an advantage of a reflecting telescope (Cassegrain) over a refracting telescope?",
        "options": [
          "(a) It is completely free from chromatic aberration",
          "(b) It is free from spherical aberration when a parabolic mirror is used",
          "(c) A large mirror provides much greater light gathering power and is mechanically easier to support",
          "(d) All of the above"
        ],
        "answer": "(d) All of the above",
        "explanation": "Reflecting telescopes use mirrors (no dispersion, so zero chromatic aberration), can use parabolic mirrors to eliminate spherical aberration, and can support huge primary mirrors from behind."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "An air bubble inside water behaves like a:",
        "options": [
          "(a) converging lens",
          "(b) diverging lens",
          "(c) plane glass plate",
          "(d) concave mirror"
        ],
        "answer": "(b) diverging lens",
        "explanation": "A spherical bubble has convex outer surfaces, but its interior refractive index (n_air = 1) is less than the surrounding medium (n_water = 1.33). By the lens maker's formula, it behaves as a diverging (concave) lens."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The radius of curvature of each face of a biconvex lens of glass (n = 1.5) is 30 cm. Its focal length is:",
        "options": [
          "(a) 15 cm",
          "(b) 30 cm",
          "(c) 60 cm",
          "(d) 45 cm"
        ],
        "answer": "(b) 30 cm",
        "explanation": "1/f = (n - 1) (1/R1 - 1/R2) = (1.5 - 1) [ 1/30 - (-1/30) ] = 0.5 * (2/30) = 0.5 * (1/15) = 1/30 => f = 30 cm."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A ray of light travels from a denser medium to a rarer medium. The critical angle is C. The maximum possible angle of deviation of the reflected ray is:",
        "options": [
          "(a) π - 2C",
          "(b) 2C",
          "(c) π - C",
          "(d) π/2 - C"
        ],
        "answer": "(a) π - 2C",
        "explanation": "For angles of incidence i ≥ C, Total Internal Reflection occurs. The angle of deviation for reflection is δ = 180° - 2i = π - 2i. Deviation is maximum when i takes its minimum possible value for TIR, which is i = C. Thus, δ_max = π - 2C."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "A convex lens is dipped in a liquid whose refractive index is equal to the refractive index of the lens material. The lens will:",
        "options": [
          "(a) become more converging",
          "(b) become diverging",
          "(c) become invisible and behave like a plane glass sheet",
          "(d) turn completely opaque"
        ],
        "answer": "(c) become invisible and behave like a plane glass sheet",
        "explanation": "When n_lens = n_liquid, 1/f = (n_lens / n_liquid - 1) K = (1 - 1) K = 0 => f = ∞. With infinite focal length and no refraction at interfaces, light passes straight through undeflected and the lens becomes optically invisible."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "For a small angled prism of angle A, the angle of minimum deviation δ is given by:",
        "options": [
          "(a) (n - 1) A",
          "(b) (n + 1) A",
          "(c) n A",
          "(d) A / (n - 1)"
        ],
        "answer": "(a) (n - 1) A",
        "explanation": "From Snell's law for small angles: n = sin((A + δ)/2) / sin(A/2) ≈ ((A + δ)/2) / (A/2) = (A + δ) / A = 1 + δ/A => δ = (n - 1) A."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The focal lengths of the objective and eyepiece of an astronomical telescope are 100 cm and 5 cm respectively. The magnifying power in normal adjustment and tube length are:",
        "options": [
          "(a) 20, 105 cm",
          "(b) 20, 95 cm",
          "(c) 500, 105 cm",
          "(d) 0.05, 105 cm"
        ],
        "answer": "(a) 20, 105 cm",
        "explanation": "Magnifying power m = fo / fe = 100 / 5 = 20. Tube length L = fo + fe = 100 + 5 = 105 cm."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "When a ray of light enters a denser medium from a rarer medium, its:",
        "options": [
          "(a) speed and wavelength decrease, frequency remains constant",
          "(b) speed and frequency decrease, wavelength remains constant",
          "(c) speed, wavelength, and frequency all decrease",
          "(d) speed increases, wavelength decreases"
        ],
        "answer": "(a) speed and wavelength decrease, frequency remains constant",
        "explanation": "Frequency is a characteristic of the light source and remains strictly unchanged during refraction. In a denser medium (n > 1), speed decreases (v = c/n) and wavelength decreases proportionally (λ = λ₀/n)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A simple microscope has a focal length of 5 cm. Its magnifying power when the image is formed at the near point (D = 25 cm) is:",
        "options": [
          "(a) 5",
          "(b) 6",
          "(c) 4",
          "(d) 1.2"
        ],
        "answer": "(b) 6",
        "explanation": "m = 1 + D / f = 1 + 25 / 5 = 1 + 5 = 6."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "A ray of light is incident at an angle of 60° on one face of an equilateral prism. If the angle of emergence is also 60°, the refractive index of the prism material is:",
        "options": [
          "(a) √3",
          "(b) 1.5",
          "(c) √2",
          "(d) 4/3"
        ],
        "answer": "(a) √3",
        "explanation": "Equilateral prism A = 60°. Since i = e = 60°, deviation is minimum: δm = i + e - A = 60° + 60° - 60° = 60°. Refractive index n = sin((A + δm)/2) / sin(A/2) = sin((60° + 60°)/2) / sin(60°/2) = sin 60° / sin 30° = (√3/2) / (1/2) = √3."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "A concave mirror of focal length f produces an image n times the size of the real object. If the image is real, the distance of the object from the mirror is:",
        "options": [
          "(a) ((n + 1)/n) f",
          "(b) ((n - 1)/n) f",
          "(c) (n + 1) f",
          "(d) (n - 1) f"
        ],
        "answer": "(a) ((n + 1)/n) f",
        "explanation": "Magnification for real image m = -n = -v/u => v = nu. Mirror formula: 1/f = 1/v + 1/u => -1/f = -1/(nu) - 1/u = - (1 + n) / (nu) => u = ((n + 1) / n) f."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A tank is filled with water to a height of 12.5 cm. The apparent depth of a needle lying at the bottom of the tank as measured by a microscope is (refractive index of water = 4/3):",
        "options": [
          "(a) 9.4 cm",
          "(b) 10.0 cm",
          "(c) 16.6 cm",
          "(d) 8.2 cm"
        ],
        "answer": "(a) 9.4 cm",
        "explanation": "Apparent depth = Real depth / n = 12.5 cm / (4/3) = (12.5 * 3) / 4 = 37.5 / 4 = 9.375 cm ≈ 9.4 cm."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why is the objective of an astronomical telescope made of large focal length and large aperture?",
        "options": [
          "(a) To produce large magnification and gather more light for bright, high-resolution images",
          "(b) To reduce chromatic aberration",
          "(c) To make the telescope compact and lightweight",
          "(d) To view nearby objects"
        ],
        "answer": "(a) To produce large magnification and gather more light for bright, high-resolution images",
        "explanation": "Magnification m = fo / fe (large fo maximizes magnification). A large aperture collects more light photons from faint celestial objects, enhancing brightness and resolving power (θ_res ∝ 1/D)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A glass slab (n = 1.5) of thickness 6 cm is placed over a paper mark. By what distance does the mark appear to be raised?",
        "options": [
          "(a) 2 cm",
          "(b) 4 cm",
          "(c) 3 cm",
          "(d) 1 cm"
        ],
        "answer": "(a) 2 cm",
        "explanation": "Apparent shift Δt = t * (1 - 1/n) = 6 cm * (1 - 1/1.5) = 6 * (1 - 2/3) = 6 * (1/3) = 2 cm."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Optical fibres transmit light signals over tens of kilometres with negligible loss of intensity.\nReason (R): Optical fibres operate on the principle of total internal reflection, in which virtually 100% of the light energy is reflected at the core-cladding boundary.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Unlike conventional silvered mirrors which absorb 5-10% per reflection, TIR has zero transmission loss into the cladding."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Reflecting telescopes are preferred over refracting telescopes for astronomical observations.\nReason (R): Reflecting telescopes are entirely free from chromatic aberration and can have parabolic mirrors that eliminate spherical aberration.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Reflection obeys the law of reflection independently of wavelength, preventing chromatic dispersion."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): A convex lens dipped in carbon disulphide (n = 1.63) behaves as a diverging lens if the lens glass has n = 1.50.\nReason (R): When a lens is immersed in an optically denser medium than itself, the nature of the lens reverses.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. In lens maker's formula 1/f = (n_lens/n_med - 1) K: since n_lens < n_med, the factor (n_lens/n_med - 1) becomes negative, changing convex (converging) to diverging."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The focal length of an equiconvex glass lens increases when immersed in water.\nReason (R): The relative refractive index of glass with respect to water is less than the refractive index of glass with respect to air.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. 1/f = (n_rel - 1) K. Since n_rel drops from 1.5 in air to 1.5/(4/3) = 1.125 in water, (n_rel - 1) decreases fourfold, so f increases 4 times."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Diamonds sparkle with intense brilliance when cut properly.\nReason (R): Diamond has a very high refractive index (~2.42) and consequently a very small critical angle (~24.4°), trapping light inside via multiple total internal reflections.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Expert facet angles ensure light enters and undergoes multiple total internal reflections before exiting through top faces."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State the conditions for Total Internal Reflection (TIR) to occur.",
        "answer": "Conditions for total internal reflection",
        "explanation": "1. The light ray must travel from an optically denser medium towards an optically rarer medium.\n2. The angle of incidence in the denser medium must be strictly greater than the critical angle (i > ic) for the given pair of media."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "A convex lens of focal length 25 cm and a concave lens of focal length 20 cm are placed in contact. Find the power and focal length of the combination.",
        "answer": "Power P = -1.0 D, Focal length f = -100 cm",
        "explanation": "f1 = +25 cm = +0.25 m => P1 = 1 / 0.25 = +4.0 D.\nf2 = -20 cm = -0.20 m => P2 = 1 / (-0.20) = -5.0 D.\nEquivalent power P_eq = P1 + P2 = +4.0 - 5.0 = -1.0 D.\nFocal length f_eq = 1 / P_eq = 1 / (-1.0) = -1.0 m = -100 cm (behaves as a diverging lens)."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Derive the relation between refractive index n, angle of prism A, and angle of minimum deviation δm for a triangular glass prism.",
        "answer": "Derivation of prism formula n = sin((A + δm)/2) / sin(A/2)",
        "explanation": "1. For refraction through prism: In quadrilateral AQNR, ∠A + ∠QNR = 180°. In triangle QNR, r1 + r2 + ∠QNR = 180° => r1 + r2 = A.\n2. Total deviation: δ = (i - r1) + (e - r2) = (i + e) - (r1 + r2) = i + e - A => A + δ = i + e.\n3. At minimum deviation (δ = δm): The refracted ray inside passes symmetrically parallel to the base. Hence i = e and r1 = r2 = r.\n4. From r1 + r2 = A => 2r = A => r = A / 2.\n5. From A + δm = i + e => A + δm = 2i => i = (A + δm) / 2.\n6. By Snell's Law: n = sin i / sin r = sin((A + δm) / 2) / sin(A / 2)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "What is an optical fibre? Describe its basic structure.",
        "answer": "Structure of an optical fibre",
        "explanation": "An optical fibre is an extremely thin, flexible strand of high-quality glass or quartz used to transmit optical signals over long distances by total internal reflection.\nStructure: (i) Core: Central dielectric cylinder of high refractive index (n1 ≈ 1.5).\n(ii) Cladding: Surrounding coaxial layer of material with slightly lower refractive index (n2 ≈ 1.48 < n1).\n(iii) Protective Buffer Jacket: Outer plastic coating protecting against moisture and physical strain."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "A small bulb is placed at the bottom of a water tank of depth 80 cm. What is the area of the surface of water through which light from the bulb can emerge out? (Refractive index of water = 4/3).",
        "answer": "Area of circle of emergence A = 2.58 m²",
        "explanation": "Light emerges only through a circular region of radius r at the surface, where the angle of incidence at the perimeter equals the critical angle ic.\nsin ic = 1 / n = 1 / (4/3) = 3/4 = 0.75.\ntan ic = sin ic / cos ic = sin ic / √(1 - sin² ic) = (3/4) / √(1 - 9/16) = (3/4) / (√7/4) = 3 / √7.\nFrom geometry: r = d * tan ic = 0.80 m * (3 / √7) = 2.4 / √7 m.\nArea of emerging circle A = π r² = π * (2.4 / √7)² = π * (5.76 / 7) = 3.1416 * 0.8228 ≈ 2.58 m²."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Why do stars twinkle while planets do not?",
        "answer": "Reason for twinkling of stars vs planets",
        "explanation": "1. Stars are situated at immense distances and act as effective point sources of light. Starlight traverses atmospheric layers of continuously fluctuating temperatures and densities, causing erratic variations in apparent position and intensity (twinkling).\n2. Planets are much closer to Earth and act as extended sources (collections of numerous point sources). The twinkling effects from different parts of a planet average out and cancel each other, resulting in a steady image."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Derive Lens Maker's Formula for a thin convex lens of focal length f and refractive index n2 placed in a medium of refractive index n1.",
        "answer": "Derivation of 1/f = (n2/n1 - 1) (1/R1 - 1/R2)",
        "explanation": "1. For refraction at first spherical surface of radius R1 forming intermediate image I1:\n   n2 / v1 - n1 / u = (n2 - n1) / R1 ... (1)\n2. For refraction at second spherical surface of radius R2 forming final image I:\n   n1 / v - n2 / v1 = (n1 - n2) / R2 = - (n2 - n1) / R2 ... (2)\n3. Adding equations (1) and (2):\n   n1 / v - n1 / u = (n2 - n1) [ 1/R1 - 1/R2 ]\n   => 1/v - 1/u = (n2/n1 - 1) [ 1/R1 - 1/R2 ].\n4. For an object at infinity (u = ∞), image forms at focus (v = f):\n   1/f = (n2/n1 - 1) [ 1/R1 - 1/R2 ]."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Draw a ray diagram of an astronomical telescope in normal adjustment.",
        "answer": "Ray diagram of astronomical telescope",
        "explanation": "Diagram specifications:\n- Parallel rays from distant star incident at angle α on objective lens of large focal length fo and large aperture.\n- Objective converges rays to form a real, inverted image A'B' at its second focal plane Fo'.\n- Eyepiece of small focal length fe is positioned such that its first focal point Fe coincides with Fo'.\n- Rays emerge from eyepiece as a parallel beam at angle β to the axis, forming a virtual, magnified image at infinity."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "A compound microscope has an objective of focal length 1.25 cm and eyepiece of focal length 5.0 cm. A small object is placed at a distance of 1.5 cm from the objective. If the final image is formed at the near point (25 cm), calculate the magnifying power of the microscope.",
        "answer": "Magnifying power m = -30",
        "explanation": "Given: fo = 1.25 cm, fe = 5.0 cm, uo = -1.5 cm, D = 25 cm.\nFor objective: 1/vo - 1/uo = 1/fo => 1/vo - 1/(-1.5) = 1/1.25\n=> 1/vo = 1/1.25 - 1/1.5 = 0.80 - 0.667 = 0.1333 => vo = 7.5 cm.\nMagnification by objective: mo = - vo / uo = - 7.5 / 1.5 = -5.\nMagnification by eyepiece at near point: me = 1 + D / fe = 1 + 25 / 5 = 1 + 5 = 6.\nTotal magnifying power: m = mo * me = (-5) * 6 = -30."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Define power of a lens. What is its SI unit? Express it in terms of focal length.",
        "answer": "Power of a lens definition and SI unit",
        "explanation": "1. Definition: Power of a lens is the measure of its ability to converge or diverge a beam of light incident on it. It is defined as the tangent of the angle by which it converges or diverges a beam of light falling at unit distance from the optical centre.\n2. Formula: P = 1 / f (in metres).\n3. SI Unit: Dioptre (D), where 1 D = 1 m⁻¹."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Derive the formula for refraction at a single convex spherical surface separating two media of refractive indices n1 and n2 (n2 > n1) for a real image: n2/v - n1/u = (n2 - n1)/R.\n(b) A light point source on the axis in glass (n = 1.5) is at distance 100 cm from a spherical surface of radius 20 cm convex to glass. Find the position of the image in air.",
        "answer": "Derivation of spherical refraction formula and numerical",
        "explanation": "Marking Scheme:\n(a) Derivation (3.5 marks):\n- Consider a convex spherical refracting surface separating medium 1 (n1) and medium 2 (n2) with pole P, centre of curvature C, radius R.\n- Let a point object O be on the principal axis in medium 1. Incident ray OA strikes at A at height h; refracted ray AI meets axis at I.\n- Let angles of OA, IA, CA with axis be α, β, γ.\n- For small paraxial angles: tan α ≈ α ≈ h / (-u), tan β ≈ β ≈ h / v, tan γ ≈ γ ≈ h / R.\n- From exterior angle theorem:\n  In ΔOAC: i = α + γ.\n  In ΔAIC: γ = r + β => r = γ - β.\n- By Snell's Law for small angles: n1 i = n2 r.\n  => n1 (α + γ) = n2 (γ - β)\n  => n1 α + n2 β = (n2 - n1) γ.\n- Substituting α, β, γ:\n  n1 [ h / (-u) ] + n2 [ h / v ] = (n2 - n1) [ h / R ].\n- Dividing throughout by h:\n  n2 / v - n1 / u = (n2 - n1) / R. (Proven).\n\n(b) Numerical (1.5 marks):\n- Medium 1 (glass): n1 = 1.5, u = -100 cm. Medium 2 (air): n2 = 1.0.\n- Radius: convex to glass means centre of curvature is in air: R = -20 cm.\n- Using formula: 1.0 / v - 1.5 / (-100) = (1.0 - 1.5) / (-20)\n  => 1/v + 0.015 = (-0.5) / (-20) = 0.025\n  => 1/v = 0.025 - 0.015 = 0.010 => v = +100 cm in air."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Draw a labelled ray diagram showing the formation of image by a compound microscope when the final image is formed at the near point (least distance of distinct vision D).\n(b) Derive the expression for the magnifying power of the compound microscope in this case.\n(c) Why should both objective and eyepiece have short focal lengths?",
        "answer": "Compound microscope ray diagram, magnification derivation, and focal length reasoning",
        "explanation": "Marking Scheme:\n(a) Ray Diagram (2 marks):\n- Objective lens of small aperture and short fo forms real, inverted, magnified image A'B' of object AB.\n- A'B' falls inside focal length fe of eyepiece.\n- Eyepiece acts as simple magnifier forming virtual, erect (relative to A'B'), magnified final image A''B'' at distance D = 25 cm from eyepiece.\n\n(b) Derivation (2 marks):\n- Magnifying power m = mo * me.\n- Linear magnification of objective: mo = - vo / uo ≈ - L / fo (where L is tube length).\n- Magnification of eyepiece at near point: me = 1 + D / fe.\n- Total magnifying power: m = - (vo / uo) * (1 + D / fe) ≈ - (L / fo) * (1 + D / fe).\n\n(c) Reasoning for short focal lengths (1 mark):\n- Since m ∝ 1 / (fo * fe), making both fo and fe small maximizes the overall magnification of the microscope."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Draw a neat labelled ray diagram of a Cassegrain reflecting telescope.\n(b) State three distinct advantages of a reflecting telescope over a refracting telescope.\n(c) If the radius of curvature of the large primary mirror is 220 mm and of the secondary mirror is 140 mm, find the position of the final image if a parallel beam is incident.",
        "answer": "Cassegrain telescope diagram, advantages, and numerical",
        "explanation": "Marking Scheme:\n(a) Diagram (2 marks):\n- Concave paraboloidal primary mirror with a central hole, convex hyperbolic secondary mirror, parallel incoming rays reflected from primary towards secondary, secondary reflects converging rays through hole in primary into eyepiece.\n\n(b) Advantages (1.5 marks):\n1. No chromatic aberration: Reflection does not involve dispersion.\n2. Reduced spherical aberration: Parabolic mirror focuses all rays to a single focal point.\n3. Mechanical support: A heavy mirror can be supported across its entire back surface, whereas large lenses sag under gravity.\n\n(c) Numerical (1.5 marks):\n- Primary mirror focal length f1 = R1 / 2 = 220 / 2 = 110 mm.\n- Virtual object for secondary mirror is formed at f1 = 110 mm. If distance between mirrors is d (say 20 mm), u = +(110 - 20) = +90 mm. R2 = 140 mm => f2 = +70 mm. Using 1/v + 1/u = 1/f gives final image position."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Total Internal Reflection in Optical Communications\nWhen a light ray traveling in an optically denser medium strikes the boundary of a rarer medium at an angle of incidence greater than the critical angle (i > ic), the ray is reflected completely back into the denser medium. This is Total Internal Reflection (TIR). Modern telecommunications rely heavily on optical fibres, which consist of a silica glass core surrounded by cladding of slightly lower refractive index. Signals propagate via repeated TIR across hundreds of kilometres at the speed of light.\n(i) State the mathematical formula for critical angle ic in terms of refractive indices n1 and n2 (n1 > n2).\n(ii) Why must the refractive index of the cladding be less than that of the core?\n(iii) Calculate the critical angle for a fibre core of index 1.50 surrounded by cladding of index 1.44.\n(iv) State one medical application of optical fibres.",
        "answer": "Solutions to Case Study on Optical Communication and TIR",
        "explanation": "(i) sin ic = n2 / n1.\n(ii) For Total Internal Reflection to occur, light must attempt to pass from an optically denser medium to an optically rarer medium. Therefore, the core must have a higher refractive index than the cladding (n_core > n_cladding).\n(iii) sin ic = n_clad / n_core = 1.44 / 1.50 = 0.96 => ic = arcsin(0.96) ≈ 73.74°.\n(iv) Medical endoscopy: Flexible optical fibre bundles (endoscopes) are inserted into internal organs (stomach, intestines, lungs) to transmit light illumination and return high-resolution visual images for non-invasive medical diagnosis."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) An equilateral glass prism has a refractive index 1.6. Calculate:\n(i) the angle of minimum deviation,\n(ii) the angle of incidence at minimum deviation.\n(b) What will happen to the angle of minimum deviation if the prism is immersed in water (n = 4/3)?",
        "answer": "(i) δm = 46.4°, (ii) i = 53.2°; δm decreases in water",
        "explanation": "(a) Equilateral prism A = 60°.\n(i) n = sin((A + δm)/2) / sin(A/2) => 1.6 = sin((60° + δm)/2) / sin 30° = sin((60° + δm)/2) / 0.5\n=> sin((60° + δm)/2) = 1.6 * 0.5 = 0.80\n=> (60° + δm)/2 = arcsin(0.80) ≈ 53.13°\n=> 60° + δm = 106.26° => δm = 46.26° ≈ 46.4°.\n(ii) Angle of incidence at minimum deviation: i = (A + δm) / 2 = 53.13° ≈ 53.2°.\n(b) In water, the relative refractive index decreases to n_rel = n_glass / n_water = 1.6 / (4/3) = 1.2. Since relative refractive index is smaller, the bending of light is reduced, so the angle of minimum deviation δm decreases significantly."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Derive the expression for the equivalent focal length of two thin lenses of focal lengths f1 and f2 kept in contact coaxially.\n(b) Two thin lenses of powers +3.5 D and -1.5 D are placed in contact. Find:\n(i) power of combination,\n(ii) focal length of combination,\n(iii) nature of the combination.",
        "answer": "Derivation of 1/F = 1/f1 + 1/f2 and combination numerical",
        "explanation": "(a) Derivation (3 marks):\n- Let two thin lenses L1 and L2 of focal lengths f1 and f2 be placed in contact.\n- An object O is placed at distance u from L1. L1 forms image at I1 at distance v1:\n  1/v1 - 1/u = 1/f1 ... (1)\n- Image I1 acts as a virtual object for L2, which forms final image I at distance v:\n  1/v - 1/v1 = 1/f2 ... (2)\n- Adding (1) and (2):\n  1/v - 1/u = 1/f1 + 1/f2 ... (3)\n- For the equivalent single lens of focal length F: 1/v - 1/u = 1/F.\n- Therefore: 1/F = 1/f1 + 1/f2.\n- In terms of powers: P = P1 + P2.\n\n(b) Numerical (2 marks):\n(i) P = P1 + P2 = +3.5 D + (-1.5 D) = +2.0 D.\n(ii) Focal length F = 1 / P = 1 / (+2.0 D) = +0.5 m = +50 cm.\n(iii) Since P and F are positive, the combination behaves as a converging (convex) lens."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A giant refracting telescope at an observatory has an objective lens of focal length 15 m. If an eyepiece of focal length 1.0 cm is used, what is the angular magnification of the telescope? If this telescope is used to view the moon, what is the diameter of the image of the moon formed by the objective lens? (Diameter of moon = 3.48 × 10⁶ m, radius of lunar orbit = 3.8 × 10⁸ m).",
        "answer": "Magnification m = 1500, Diameter of image d = 13.7 cm",
        "explanation": "Given: fo = 15 m = 1500 cm, fe = 1.0 cm.\n(i) Angular magnification m = fo / fe = 1500 cm / 1.0 cm = 1500.\n(ii) Angular diameter of the moon: θ = Diameter of moon / Lunar orbit radius = (3.48 × 10⁶ m) / (3.8 × 10⁸ m) = 9.158 × 10⁻³ radians.\nLet diameter of the image formed by the objective be d.\nSince image forms at focal plane of objective (distance fo = 15 m):\nθ = d / fo => d = θ * fo = (9.158 × 10⁻³ rad) * (15 m) = 0.1374 m = 13.74 cm."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the sign conventions used for spherical lenses.\n(b) An object is placed at a distance of 12 cm in front of a concave lens of focal length 18 cm. Find the position, nature, and magnification of the image formed.\n(c) Draw a neat ray diagram to show the formation of the image.",
        "answer": "Concave lens image calculations: v = -7.2 cm, m = +0.6, virtual and erect",
        "explanation": "(a) Cartesian Sign Convention:\n1. All distances are measured from the optical centre of the lens.\n2. Distances measured in the direction of incident light are taken as positive; opposite are negative.\n3. Heights measured vertically upwards from principal axis are positive; downwards are negative.\n\n(b) Given: u = -12 cm, f = -18 cm (concave lens).\nLens formula: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u\n=> 1/v = -1/18 + (-1/12) = -1/18 - 1/12 = (-2 - 3)/36 = -5/36\n=> v = -36 / 5 = -7.2 cm.\nMagnification m = v / u = (-7.2) / (-12) = +0.6.\nNature: Virtual, erect (m > 0), diminished (m = 0.6 < 1), located on the same side as object at 7.2 cm from lens.\n\n(c) Ray diagram shows divergent rays appearing to originate from virtual focus."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "A convex lens of glass (n = 1.5) has a focal length of 20 cm in air. What will be its focal length when immersed in:\n(i) water of refractive index 1.33,\n(ii) a liquid of refractive index 1.6?",
        "answer": "(i) fw = +80 cm, (ii) fl = -160 cm",
        "explanation": "In air: 1/f_air = (1.5 - 1) K = 0.5 K => K = 1 / (0.5 * 20) = 1/10.\n(i) In water (n = 4/3 = 1.33):\n1/fw = (1.5 / 1.333 - 1) K = (9/8 - 1) K = (1/8) * (1/10) = 1/80 => fw = +80 cm (converging).\n(ii) In liquid of n = 1.6:\n1/fl = (1.5 / 1.6 - 1) K = (15/16 - 1) K = (-1/16) * (1/10) = -1/160 => fl = -160 cm (diverging!).\nThe lens reverses its optical behavior and acts as a diverging lens."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Distinguish between a compound microscope and an astronomical telescope in terms of:\n(i) focal lengths of objective and eyepiece,\n(ii) apertures of objective and eyepiece,\n(iii) nature of intermediate and final images.\n(b) Why can a telescope not be used as a microscope by simply looking through it backwards?",
        "answer": "Detailed comparison of microscope vs telescope and reversal limitation",
        "explanation": "(a) Comparison Table:\nFeature | Compound Microscope | Astronomical Telescope\n---|---|---\nObjective focal length (fo) | Very short (~ few mm to cm) | Very large (~ several metres)\nEyepiece focal length (fe) | Short (~ few cm, fe > fo) | Short (~ few cm, fe << fo)\nObjective aperture | Small (object is close by) | Very large (collects light from faint stars)\nEyepiece aperture | Large (easy viewing) | Small compared to objective\nIntermediate image | Real, inverted, magnified | Real, inverted, diminished\nFinal image | Virtual, inverted, highly magnified | Virtual, inverted, magnified at infinity or D\n\n(b) Reversal limitation: Looking backwards through a telescope makes the large aperture objective the eyepiece and the tiny eyepiece the objective. The tiny eyepiece has a microscopic field of view and cannot collect sufficient light from nearby objects, while the large focal length objective creates a heavily diminished image, failing to provide magnification."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "unit_num": 6,
      "title": "Wave Optics",
      "unit_title": "Optics",
      "weightage_unit": "18 Marks (Units 5 & 6)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In Young's double slit experiment, if the separation between the two slits is halved and distance between slits and screen is doubled, the fringe width will:",
        "options": [
          "(a) remain unchanged",
          "(b) be doubled",
          "(c) become four times",
          "(d) be quadrupled"
        ],
        "answer": "(c) become four times",
        "explanation": "Fringe width is given by β = λ D / d. When d' = d/2 and D' = 2D: β' = λ (2D) / (d/2) = 4 (λ D / d) = 4 β. The fringe width becomes four times larger."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A wavefront is defined as the locus of all points having the same:",
        "options": [
          "(a) phase",
          "(b) frequency",
          "(c) amplitude",
          "(d) wavelength"
        ],
        "answer": "(a) phase",
        "explanation": "A wavefront is the continuous locus of all oscillating particles or field points that are vibrating in the same phase at any given instant."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The wavefront originating from an isolated point source at a finite distance is:",
        "options": [
          "(a) spherical",
          "(b) cylindrical",
          "(c) plane",
          "(d) elliptical"
        ],
        "answer": "(a) spherical",
        "explanation": "Light from a point source spreads out isotropically in all three spatial dimensions, forming concentric spherical wavefronts."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In a single slit diffraction experiment, the angular width of the central maximum is:",
        "options": [
          "(a) λ / a",
          "(b) 2λ / a",
          "(c) λ / (2a)",
          "(d) 4λ / a"
        ],
        "answer": "(b) 2λ / a",
        "explanation": "The first diffraction minimum occurs at angle θ = λ / a on either side of the central axis. The total angular width of the central maximum between the first minima is 2θ = 2λ / a."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Two independent monochromatic light sources:",
        "options": [
          "(a) can produce a steady interference pattern",
          "(b) cannot produce a steady interference pattern",
          "(c) always have zero phase difference",
          "(d) produce circular fringes"
        ],
        "answer": "(b) cannot produce a steady interference pattern",
        "explanation": "Two independent sources cannot maintain a constant phase difference over time due to random, abrupt atomic emission transitions (~10⁻⁸ s), which rapidly washes out any interference pattern."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "If Young's double slit experiment is performed in water instead of air, the fringe width will:",
        "options": [
          "(a) increase",
          "(b) decrease",
          "(c) remain unchanged",
          "(d) disappear"
        ],
        "answer": "(b) decrease",
        "explanation": "In water, the wavelength of light decreases to λ' = λ / n_w = λ / 1.33. Since fringe width β = λ D / d, β' = β / n_w < β, so fringes become narrower."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The ratio of maximum to minimum intensity in an interference pattern produced by two waves of amplitudes a1 and a2 is:",
        "options": [
          "(a) (a1 + a2)² / (a1 - a2)²",
          "(b) (a1 - a2)² / (a1 + a2)²",
          "(c) (a1² + a2²) / (a1² - a2²)",
          "(d) a1 / a2"
        ],
        "answer": "(a) (a1 + a2)² / (a1 - a2)²",
        "explanation": "Maximum amplitude is A_max = a1 + a2, so I_max ∝ (a1 + a2)². Minimum amplitude is A_min = a1 - a2, so I_min ∝ (a1 - a2)². Thus I_max / I_min = (a1 + a2)² / (a1 - a2)²."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The wavefront originating from a distant star reaching the Earth is:",
        "options": [
          "(a) plane",
          "(b) spherical",
          "(c) cylindrical",
          "(d) parabolic"
        ],
        "answer": "(a) plane",
        "explanation": "At immense astronomical distances, a small section of a spherical wavefront has a negligibly small curvature and is effectively a plane wavefront."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "In Young's double slit experiment, the path difference at the location of the 3rd dark fringe from the central maximum is:",
        "options": [
          "(a) 3λ",
          "(b) 5λ / 2",
          "(c) 7λ / 2",
          "(d) 2λ"
        ],
        "answer": "(b) 5λ / 2",
        "explanation": "For destructive interference (dark fringes), path difference Δx = (2n - 1) λ / 2. For the 3rd dark fringe (n = 3): Δx = (2*3 - 1) λ / 2 = 5λ / 2."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following undergoes bending around obstacles?",
        "options": [
          "(a) Light waves only",
          "(b) Sound waves only",
          "(c) Both light and sound waves",
          "(d) Neither light nor sound waves"
        ],
        "answer": "(c) Both light and sound waves",
        "explanation": "Diffraction is a universal wave phenomenon occurring whenever obstacle size is comparable to wavelength. Sound waves diffract easily around doorways (λ ~ 1 m), while light waves diffract noticeably only around microscopic slits (λ ~ 500 nm)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In a Young's double slit experiment, two slits are illuminated by white light. The central fringe is:",
        "options": [
          "(a) white",
          "(b) dark",
          "(c) red",
          "(d) blue"
        ],
        "answer": "(a) white",
        "explanation": "At the geometric centre of the screen, the path difference for all wavelengths is identically zero (Δx = 0). All colours interfere constructively simultaneously, producing a bright white central fringe."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "In single slit diffraction by a slit of width a, the condition for first secondary maximum is:",
        "options": [
          "(a) a sin θ = 3λ / 2",
          "(b) a sin θ = λ",
          "(c) a sin θ = 2λ",
          "(d) a sin θ = λ / 2"
        ],
        "answer": "(a) a sin θ = 3λ / 2",
        "explanation": "Secondary maxima occur at approximately a sin θ = (2n + 1) λ / 2. For the first secondary maximum (n = 1), a sin θ = 3λ / 2."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The intensity of central maximum in a single slit diffraction pattern is I₀. The intensity of the first secondary maximum is roughly:",
        "options": [
          "(a) I₀ / 2",
          "(b) I₀ / 22",
          "(c) I₀ / 4",
          "(d) I₀ / 100"
        ],
        "answer": "(b) I₀ / 22",
        "explanation": "In single slit diffraction, intensity of secondary maxima falls rapidly: I1 ≈ I₀ / (3π/2)² = I₀ / (9π²/4) ≈ I₀ / 22.2 (about 4.5% of central maximum)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Two coherent sources of intensity ratio 100 : 1 produce interference. The ratio of Imax to Imin is:",
        "options": [
          "(a) 1.49 : 1",
          "(b) 121 : 81",
          "(c) 100 : 1",
          "(d) 10 : 1"
        ],
        "answer": "(b) 121 : 81",
        "explanation": "I1 / I2 = 100 / 1 => a1 / a2 = √(100/1) = 10 / 1. Then Imax / Imin = (a1 + a2)² / (a1 - a2)² = (10 + 1)² / (10 - 1)² = 11² / 9² = 121 / 81."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The speed of light in a medium of refractive index n is v = c / n. When light enters the medium, its wavelength λ' satisfies:",
        "options": [
          "(a) λ' = λ / n",
          "(b) λ' = n λ",
          "(c) λ' = λ",
          "(d) λ' = λ / n²"
        ],
        "answer": "(a) λ' = λ / n",
        "explanation": "Since frequency ν remains constant: v = ν λ' => c/n = ν λ' => λ' = (c/ν) / n = λ / n."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "In Young's double slit experiment, if one of the slits is covered with an opaque paper, the screen will show:",
        "options": [
          "(a) a uniform illumination without interference fringes",
          "(b) a single slit diffraction pattern",
          "(c) complete darkness",
          "(d) doubled number of fringes"
        ],
        "answer": "(b) a single slit diffraction pattern",
        "explanation": "Covering one slit eliminates double-slit interference, leaving light from the remaining single slit to form a standard single-slit Fraunhofer diffraction pattern."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "According to Huygens' principle, each point on a primary wavefront acts as:",
        "options": [
          "(a) a sink of light",
          "(b) a source of secondary spherical wavelets",
          "(c) a reflector of light",
          "(d) an absorber of light"
        ],
        "answer": "(b) a source of secondary spherical wavelets",
        "explanation": "Huygens' principle postulates that every point on a wavefront acts as a fresh source of secondary spherical disturbance spreading out in all forward directions at the speed of the wave."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In Young's experiment, monochromatic light of wavelength 600 nm illuminates two slits 0.2 mm apart. If the screen is 1.0 m away, the fringe width is:",
        "options": [
          "(a) 3 mm",
          "(b) 1.5 mm",
          "(c) 6 mm",
          "(d) 0.3 mm"
        ],
        "answer": "(a) 3 mm",
        "explanation": "β = λ D / d = (600 × 10⁻⁹ m * 1.0 m) / (0.2 × 10⁻³ m) = 6 × 10⁻⁷ / 2 × 10⁻⁴ = 3 × 10⁻³ m = 3 mm."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The phase difference between two points separated by path difference Δx in a wave of wavelength λ is:",
        "options": [
          "(a) (2π / λ) Δx",
          "(b) (λ / 2π) Δx",
          "(c) 2π λ Δx",
          "(d) π Δx / λ"
        ],
        "answer": "(a) (2π / λ) Δx",
        "explanation": "Phase difference Δφ = (2π / λ) * Path difference Δx."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "In a diffraction pattern due to a single slit, the width of the central maximum is:",
        "options": [
          "(a) equal to width of secondary maxima",
          "(b) twice the width of secondary maxima",
          "(c) half the width of secondary maxima",
          "(d) four times the width of secondary maxima"
        ],
        "answer": "(b) twice the width of secondary maxima",
        "explanation": "Central maximum width is 2λD / a, whereas each secondary maximum has width λD / a. Hence, the central maximum is twice as wide as any secondary maximum."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In interference, all bright fringes have:",
        "options": [
          "(a) equal intensity and equal width",
          "(b) decreasing intensity with order",
          "(c) unequal widths",
          "(d) zero intensity"
        ],
        "answer": "(a) equal intensity and equal width",
        "explanation": "In ideal Young's interference, all bright fringes possess the same maximum intensity (I_max = 4 I₀) and identical fringe width (β = λD/d), unlike diffraction where intensity decreases rapidly."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "When a thin transparent mica sheet (refractive index n, thickness t) is placed in the path of one of the interfering beams in YDSE, the fringe pattern:",
        "options": [
          "(a) shifts towards the side of the mica sheet by (n - 1)t D / d",
          "(b) shifts away from the sheet",
          "(c) remains completely stationary",
          "(d) disappears"
        ],
        "answer": "(a) shifts towards the side of the mica sheet by (n - 1)t D / d",
        "explanation": "The mica sheet introduces an additional optical path difference of (n - 1)t, shifting the entire fringe pattern toward the side containing the sheet by a distance y_shift = (n - 1) t D / d."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Light of wavelength 500 nm falls normally on a slit of width 0.1 mm. The angular spread of the central diffraction maximum is:",
        "options": [
          "(a) 10⁻² rad",
          "(b) 5 × 10⁻³ rad",
          "(c) 10⁻³ rad",
          "(d) 2 × 10⁻² rad"
        ],
        "answer": "(a) 10⁻² rad",
        "explanation": "2θ = 2λ / a = (2 * 500 × 10⁻⁹ m) / (0.1 × 10⁻³ m) = 10⁻⁶ / 10⁻⁴ = 10⁻² rad."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The shape of the wavefront originating from a linear source of light (such as a thin slit) is:",
        "options": [
          "(a) cylindrical",
          "(b) spherical",
          "(c) plane",
          "(d) conical"
        ],
        "answer": "(a) cylindrical",
        "explanation": "Points equidistant from a line filament lie on a cylindrical surface, producing a coaxial cylindrical wavefront."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which principle explains that light energy is not destroyed during destructive interference but redistributed?",
        "options": [
          "(a) Law of conservation of momentum",
          "(b) Law of conservation of energy",
          "(c) Fermat's principle",
          "(d) Malus's law"
        ],
        "answer": "(b) Law of conservation of energy",
        "explanation": "In interference, energy is conserved: the energy missing from the dark fringes (I = 0) is transferred to the bright fringes (I = 4 I₀), yielding an average intensity across the screen equal to 2 I₀ (sum of separate beam intensities)."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Interference is an example of conservation of energy in optical phenomena.\nReason (R): In interference, light energy is merely redistributed from regions of destructive interference (dark fringes) to regions of constructive interference (bright fringes).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A directly. Average intensity over the screen equals I_avg = (I_max + I_min) / 2 = (4 I₀ + 0) / 2 = 2 I₀ = I1 + I2."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): No interference pattern is detected when two independent incandescent lamps illuminate a screen.\nReason (R): Light waves emitted by independent sources have random, rapidly fluctuating phase differences that destroy coherence.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. For sustained interference, sources must be strictly coherent (constant phase difference over time)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The central fringe in Young's double slit experiment with white light is white.\nReason (R): For the central fringe, the path difference for all wavelengths is zero, so all spectral colours undergo constructive interference simultaneously.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Zero path difference implies zero phase difference for every visible wavelength."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Diffraction of sound waves is much more commonly observed in daily life than diffraction of light waves.\nReason (R): Wavelength of sound waves (~1 m) is comparable to the size of everyday openings (doors, windows), whereas wavelength of light (~500 nm) is enormously smaller.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Noticeable diffraction requires slit/obstacle width ~ wavelength."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The width of the central maximum in a single slit diffraction pattern is twice that of any secondary maximum.\nReason (R): The central maximum extends between the first minima on either side of the center (from -λ/a to +λ/a).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Central width = 2λD/a, while secondary width = λD/a."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Huygens' principle of wave propagation.",
        "answer": "Statement of Huygens' principle",
        "explanation": "1. Every point on a given primary wavefront acts as a fresh source of new disturbance, called secondary wavelets, which spread out in all forward directions with the speed of light in that medium.\n2. The forward envelope (tangential surface touching all secondary wavelets in the forward direction) at any later time gives the new position and shape of the wavefront at that instant."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "What are coherent sources of light? Why can two independent monochromatic light sources not produce a sustained interference pattern?",
        "answer": "Coherent sources definition and independent source explanation",
        "explanation": "1. Coherent Sources: Two sources of light are said to be coherent if they emit light waves of the same frequency, wavelength, and maintain a constant (time-invariant) phase difference.\n2. Independent Sources: Emission of light from atoms occurs via spontaneous transitions lasting ~10⁻⁸ s. In independent sources, phase changes occur randomly and independently millions of times per second. The resulting interference pattern shifts so rapidly that only a time-averaged uniform illumination is observed."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "In Young's double slit experiment using monochromatic light of wavelength λ, the intensity of light at a point on the screen where path difference is λ is K units. Find the intensity at a point where path difference is: (i) λ / 3, (ii) λ / 2.",
        "answer": "(i) I = K / 4, (ii) I = 0",
        "explanation": "Intensity formula: I = 4 I₀ cos²(Δφ / 2) = I_max cos²(Δφ / 2).\nGiven that for path difference Δx = λ, phase difference Δφ = 2π, so I = I_max cos²(π) = I_max = K.\nThus, I = K cos²(Δφ / 2).\n(i) For Δx = λ / 3: Δφ = (2π / λ) * (λ / 3) = 2π / 3 = 120°.\nI = K cos²(60°) = K * (1/2)² = K / 4.\n(ii) For Δx = λ / 2: Δφ = (2π / λ) * (λ / 2) = π = 180°.\nI = K cos²(90°) = K * (0)² = 0 (destructive interference)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "State three differences between interference and diffraction of light.",
        "answer": "Differences between interference and diffraction",
        "explanation": "1. Source: Interference is due to superposition of waves from two separate coherent wavefronts (slits). Diffraction is due to superposition of wavelets originating from different parts of the same wavefront.\n2. Fringe Width: In interference, all fringes have equal width (β = λD/d). In diffraction, the central maximum is twice as wide as secondary fringes.\n3. Intensity: In interference, all bright fringes have equal intensity. In diffraction, intensity falls off dramatically for higher-order secondary maxima."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "In a single slit diffraction experiment, a slit of width 0.2 mm is illuminated by light of wavelength 589 nm. The diffraction pattern is observed on a screen 1.5 m away. Calculate the linear width of: (i) the central maximum, (ii) the first secondary maximum.",
        "answer": "(i) Linear width of central max = 8.84 mm, (ii) first secondary max = 4.42 mm",
        "explanation": "Given: a = 0.2 mm = 2 × 10⁻⁴ m, λ = 589 × 10⁻⁹ m, D = 1.5 m.\n(i) Linear width of central maximum: β₀ = 2 λ D / a = (2 * 589 × 10⁻⁹ * 1.5) / (2 × 10⁻⁴) = (1.767 × 10⁻⁶) / (2 × 10⁻⁴) = 8.835 × 10⁻³ m = 8.84 mm.\n(ii) Linear width of first secondary maximum: β = λ D / a = β₀ / 2 = 8.84 / 2 = 4.42 mm."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Sketch the wavefront corresponding to: (i) light diverging from a point source, (ii) light emerging from a convex lens when a point source is placed at its focus.",
        "answer": "Sketches of wavefronts",
        "explanation": "(i) Point source: Spherical wavefronts expanding radially outwards with the source at the centre.\n(ii) Point source at focus of convex lens: After passing through the convex lens, rays become parallel to the principal axis, so the emerging wavefront is a family of plane wavefronts perpendicular to the axis."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Using Huygens' principle, prove Snell's law of refraction (sin i / sin r = n2 / n1) for a plane wave incident on a plane interface between two media.",
        "answer": "Proof of Snell's law using Huygens' principle",
        "explanation": "1. Let a plane wavefront AB be incident at angle i on a plane refracting surface XY separating medium 1 (speed v1) and medium 2 (speed v2 < v1).\n2. Time taken by point B to reach surface at C is τ = BC / v1 => BC = v1 τ.\n3. In time τ, secondary wavelet from A spreads into medium 2 over distance AE = v2 τ.\n4. Draw tangent CE from C to this wavelet. CE represents the refracted plane wavefront.\n5. In right ΔABC: sin i = BC / AC = (v1 τ) / AC.\n6. In right ΔAEC: sin r = AE / AC = (v2 τ) / AC.\n7. Dividing: sin i / sin r = (v1 τ / AC) / (v2 τ / AC) = v1 / v2.\n8. Since refractive index n = c / v => v1 / v2 = n2 / n1.\n9. Therefore: sin i / sin r = n2 / n1 (Snell's Law proven)."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "In Young's double slit experiment, what is the effect on the interference fringes if:\n(i) the screen is moved further away from the slits,\n(ii) monochromatic light is replaced by source of higher frequency?",
        "answer": "Effects on fringe width in YDSE",
        "explanation": "Fringe width β = λ D / d.\n(i) When screen distance D increases: β ∝ D, so fringe width increases (fringes become broader).\n(ii) When frequency increases (f increases): Wavelength decreases (λ = c/f). Since β ∝ λ, fringe width decreases (fringes become narrower and closely packed)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Two slits are made 1 mm apart and the screen is placed 1 m away. What is the fringe separation when blue-green light of wavelength 500 nm is used? What will be the fringe width if the entire apparatus is immersed in water (refractive index = 4/3)?",
        "answer": "In air: β = 0.5 mm; in water: β' = 0.375 mm",
        "explanation": "In air: β = λ D / d = (500 × 10⁻⁹ m * 1.0 m) / (1.0 × 10⁻³ m) = 5.0 × 10⁻⁴ m = 0.50 mm.\nIn water: Wavelength decreases to λ' = λ / n = 500 / (4/3) = 375 nm.\nNew fringe width β' = β / n = 0.50 mm / (4/3) = (0.50 * 3) / 4 = 1.5 / 4 = 0.375 mm."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why is the central maximum in a single slit diffraction pattern twice as wide as the secondary maxima?",
        "answer": "Explanation of central maximum width",
        "explanation": "The central maximum spans the entire region between the first minimum on the left (θ = -λ/a) and the first minimum on the right (θ = +λ/a), giving total angular width Δθ_central = 2λ / a. Any secondary maximum lies between two consecutive minima (e.g. From λ/a to 2λ/a), giving angular width Δθ_secondary = 2λ/a - λ/a = λ / a. Hence, the central maximum is exactly twice as wide."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) State Huygens' principle.\n(b) Using Huygens' construction, prove the laws of reflection of a plane wave at a plane reflecting surface.\n(c) Draw a diagram showing the incident wavefront, secondary wavelets, and reflected wavefront.",
        "answer": "Complete proof of laws of reflection using Huygens' principle",
        "explanation": "Marking Scheme:\n(a) Statement of Huygens' principle (1.5 marks):\n- Secondary wavelets spreading at wave speed, forward envelope forming new wavefront.\n\n(b) Derivation & Diagram (3.5 marks):\n- Let AB be a plane wavefront incident at angle i on reflecting surface MN.\n- Time taken by edge B to reach surface at C is τ = BC / v => BC = v τ.\n- During this time τ, secondary wavelet from point A spreads into the medium with radius AE = v τ.\n- Draw tangent plane CE from C to this wavelet. CE is the reflected plane wavefront.\n- Consider right triangles ΔBAC and ΔECA:\n  1. Side AC is common (AC = AC).\n  2. BC = AE = v τ (distances traveled in same time).\n  3. ∠ABC = ∠AEC = 90°.\n- By RHS congruence: ΔBAC ≅ ΔECA.\n- Therefore: ∠BAC = ∠ECA.\n- But ∠BAC = angle of incidence i, and ∠ECA = angle of reflection r.\n- Hence: i = r (First Law of Reflection).\n- Also, incident ray, normal, and reflected ray all lie in the plane of incidence (perpendicular to wavefronts), proving the second law."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) In Young's double slit experiment, deduce the condition for constructive and destructive interference in terms of path difference.\n(b) Derive the expression for the fringe width β = λ D / d.\n(c) Show that bright and dark fringes are equally spaced.",
        "answer": "Derivation of fringe width β = λ D / d and fringe spacing proof",
        "explanation": "Marking Scheme:\n(a) Interference Conditions (1.5 marks):\n- Resultant amplitude: A² = a1² + a2² + 2 a1 a2 cos φ.\n- Constructive interference (Bright): cos φ = +1 => φ = 2nπ => Path difference Δx = n λ (n = 0, 1, 2, ...).\n- Destructive interference (Dark): cos φ = -1 => φ = (2n - 1)π => Path difference Δx = (2n - 1) λ / 2 (n = 1, 2, ...).\n\n(b) Fringe Width Derivation (2.5 marks):\n- Let two coherent slits S1 and S2 be separated by distance d. Screen is at distance D (D >> d).\n- Point P on screen is at distance y from central point O.\n- Path difference: S2P² - S1P² = [ D² + (y + d/2)² ] - [ D² + (y - d/2)² ] = 2yd.\n- Approximating S2P + S1P ≈ 2D:\n  Δx = S2P - S1P = 2yd / (2D) = y d / D.\n- Position of nth bright fringe: y d / D = n λ => yn = n λ D / d.\n- Fringe width β is the separation between consecutive bright fringes:\n  β = y_{n} - y_{n-1} = [ n λ D / d ] - [ (n - 1) λ D / d ] = λ D / d.\n\n(c) Dark fringes (1 mark):\n- Position of nth dark fringe: y'n = (2n - 1) λ D / (2d).\n- Separation between consecutive dark fringes:\n  β' = y'_{n} - y'_{n-1} = λ D / d = β.\n- Therefore, bright and dark fringes are of identical width and equally spaced."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) What is diffraction of light? Explain the Fraunhofer diffraction pattern produced by a single slit of width a.\n(b) Derive the conditions for:\n(i) central maximum,\n(ii) first minimum,\n(iii) secondary maxima.\n(c) Plot the intensity distribution curve for single-slit diffraction.",
        "answer": "Single-slit Fraunhofer diffraction complete theory and curve",
        "explanation": "Marking Scheme:\n(a) Definition & Phenomenon (1.5 marks):\n- Diffraction is the bending of light around sharp edges or corners of an obstacle/aperture into the geometrical shadow region.\n- Single slit Fraunhofer: A plane wavefront falls normally on a slit of width a; secondary wavelets diffract at angle θ and are focused on a screen by a convex lens.\n\n(b) Conditions (2.5 marks):\n- Path difference between wavelets from top and bottom edges of slit: Δx = a sin θ.\n(i) Central Maximum: At θ = 0, path difference is zero for all corresponding pairs, producing a bright central peak.\n(ii) Minima: When a sin θ = n λ (n = 1, 2, 3, ...). The slit can be divided into 2n equal halves which cancel each other in pairs.\n(iii) Secondary Maxima: When a sin θ = (2n + 1) λ / 2 (n = 1, 2, ...). The slit divides into (2n + 1) sections, of which 2n cancel, leaving 1 section to contribute light.\n\n(c) Intensity Curve (1 mark):\n- Prominent central peak at θ = 0 with intensity I₀.\n- Successive secondary maxima on either side with rapidly decaying intensities (I1 ≈ I₀/22, I2 ≈ I₀/61) separated by zero-intensity minima at θ = ±nλ/a."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Coherence and Laser Light\nIn 1801, Thomas Young conclusively proved the wave nature of light using his classic double-slit experiment. The critical prerequisite for observable, sustained interference is that the interfering beams must be coherent—maintaining a definite, unchanging phase relationship over time. Traditional thermal light sources emit independent wave trains of very short coherence length (~mm). In contrast, modern lasers emit highly monochromatic, spatially and temporally coherent light with coherence lengths stretching over kilometres.\n(i) What are coherent sources of light?\n(ii) What happens to the interference fringes if the distance between the two slits is increased significantly?\n(iii) In a YDSE with laser light of wavelength 632.8 nm, slits are 0.5 mm apart and screen is 2 m away. Find the fringe width.\n(iv) Why is laser light exceptionally well-suited for interference experiments?",
        "answer": "Solutions to Case Study on Coherence and Lasers",
        "explanation": "(i) Coherent sources are sources that emit light waves with identical frequency, wavelength, and maintain a constant phase difference over time.\n(ii) Fringe width is β = λ D / d. If slit separation d is increased significantly, β becomes extremely small (microscopic). The fringes blur together and cannot be resolved by the human eye, appearing as a uniform illumination.\n(iii) β = λ D / d = (632.8 × 10⁻⁹ m * 2 m) / (0.5 × 10⁻³ m) = 1.2656 × 10⁻⁶ / 5 × 10⁻⁴ = 2.53 × 10⁻³ m = 2.53 mm.\n(iv) Laser light has extraordinary temporal and spatial coherence, high monochromaticity (extremely narrow linewidth Δλ), and high intensity, ensuring sharp, high-contrast, perfectly stable interference patterns."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) In Young's double slit experiment, monochromatic light of wavelength 600 nm produces fringes of width 2.0 mm on a screen. If the wavelength is changed to 480 nm, what will be the new fringe width?\n(b) If the entire apparatus in (a) is placed in a medium of refractive index 1.5, what will be the new fringe width?\n(c) What will be the effect on the fringes if the monochromatic source is replaced by an ordinary white light source?",
        "answer": "(a) β' = 1.6 mm, (b) β'' = 1.07 mm, (c) White central fringe with coloured fringes on sides",
        "explanation": "(a) Fringe width β = λ D / d => β ∝ λ (since D and d are constant).\nβ' / β = λ' / λ => β' = β * (λ' / λ) = 2.0 mm * (480 / 600) = 2.0 * 0.8 = 1.6 mm.\n\n(b) In a medium of refractive index n = 1.5, wavelength reduces to λ_med = λ / n:\nβ'' = β' / n = 1.6 mm / 1.5 ≈ 1.07 mm.\n\n(c) With white light: Central fringe at y = 0 is pure white because path difference is zero for all wavelengths. On either side, closely spaced coloured fringes appear, with violet (shortest λ) closest to the center and red (longest λ) further out. After a few colored fringes, overlapping of different orders produces a uniform white background."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Derive the expression for the resultant intensity when two coherent waves y1 = a1 cos ωt and y2 = a2 cos(ωt + φ) superpose.\n(b) Show that maximum intensity is I_max = (a1 + a2)² and minimum intensity is I_min = (a1 - a2)².\n(c) Two coherent sources have intensities in the ratio 9 : 4. Find the ratio of I_max to I_min.",
        "answer": "Resultant intensity derivation and numerical I_max / I_min = 25 : 1",
        "explanation": "(a) Superposition: y = y1 + y2 = a1 cos ωt + a2 cos(ωt + φ)\n= a1 cos ωt + a2 (cos ωt cos φ - sin ωt sin φ)\n= (a1 + a2 cos φ) cos ωt - (a2 sin φ) sin ωt.\nLet a1 + a2 cos φ = A cos θ and a2 sin φ = A sin θ.\nThen y = A cos(ωt + θ).\nSquaring and adding:\nA² = (a1 + a2 cos φ)² + (a2 sin φ)² = a1² + 2 a1 a2 cos φ + a2² (cos² φ + sin² φ)\nA² = a1² + a2² + 2 a1 a2 cos φ.\nSince Intensity I ∝ A²:\nI = I1 + I2 + 2 √(I1 I2) cos φ.\n\n(b) Maximum intensity (when cos φ = +1):\nI_max = I1 + I2 + 2√(I1 I2) = (√I1 + √I2)² = (a1 + a2)².\nMinimum intensity (when cos φ = -1):\nI_min = I1 + I2 - 2√(I1 I2) = (√I1 - √I2)² = (a1 - a2)².\n\n(c) Numerical: I1 / I2 = 9 / 4 => a1 / a2 = √(9/4) = 3 / 2.\nI_max / I_min = (a1 + a2)² / (a1 - a2)² = (3 + 2)² / (3 - 2)² = 5² / 1² = 25 : 1."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "In a Young's double slit experiment, the slits are separated by 0.28 mm and the screen is placed 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is measured to be 1.2 cm. Determine the wavelength of light used.",
        "answer": "Wavelength λ = 600 nm",
        "explanation": "Given: d = 0.28 mm = 0.28 × 10⁻³ m = 2.8 × 10⁻⁴ m, D = 1.4 m, n = 4, y4 = 1.2 cm = 1.2 × 10⁻² m.\nPosition of nth bright fringe: yn = n λ D / d\n=> y4 = 4 λ D / d\n=> λ = (y4 * d) / (4 * D)\nSubstitute values:\nλ = (1.2 × 10⁻² m * 2.8 × 10⁻⁴ m) / (4 * 1.4 m) = (3.36 × 10⁻⁶) / 5.6 = 0.6 × 10⁻⁶ m = 600 × 10⁻⁹ m = 600 nm."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the essential condition for diffraction of light to occur.\n(b) Explain why a laser beam does not spread out as much as an ordinary light beam.\n(c) A parallel beam of monochromatic light of wavelength 500 nm falls on a narrow slit and the resulting diffraction pattern is observed on a screen 1 m away. It is observed that the first minimum is at a distance of 2.5 mm from the centre of the screen. Find the width of the slit.",
        "answer": "Diffraction conditions and slit width calculation a = 0.2 mm",
        "explanation": "(a) Essential condition: The size of the diffracting obstacle or aperture (a) must be comparable to the wavelength of light (a ≈ λ).\n(b) A laser beam has a wide aperture and is highly coherent, resulting in an exceptionally small angular divergence θ ≈ λ / D_beam. Ordinary light sources have small coherence lengths and wide emission angles, spreading rapidly.\n(c) Given: λ = 500 nm = 5 × 10⁻⁷ m, D = 1 m, x1 = 2.5 mm = 2.5 × 10⁻³ m.\nFirst minimum condition: a sin θ = λ => a (x1 / D) = λ\n=> a = λ D / x1 = (5 × 10⁻⁷ m * 1 m) / (2.5 × 10⁻³ m) = 2 × 10⁻⁴ m = 0.2 mm."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "In Young's double slit experiment, deduce the condition for which the nth bright fringe of wavelength λ1 coincides with the (n+1)th bright fringe of wavelength λ2. If λ1 = 650 nm and λ2 = 520 nm, find the smallest value of n for which coincidence occurs.",
        "answer": "Coincidence condition n = 4, y = 4 λ1 D / d",
        "explanation": "Position of nth bright fringe for λ1: y = n λ1 D / d.\nPosition of (n+1)th bright fringe for λ2: y = (n + 1) λ2 D / d.\nFor coincidence:\nn λ1 D / d = (n + 1) λ2 D / d => n λ1 = (n + 1) λ2\n=> n (650 nm) = (n + 1) (520 nm)\n=> 650 n = 520 n + 520\n=> 130 n = 520 => n = 520 / 130 = 4.\nTherefore, the 4th bright fringe of 650 nm coincides with the 5th bright fringe of 520 nm."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) What is the effect on the interference fringes in Young's double slit experiment when:\n(i) the width of the source slit is increased,\n(ii) the monochromatic source is replaced by another of shorter wavelength,\n(iii) a thin mica sheet is introduced in the path of one of the interfering beams?\n(b) Derive the expression for the angular fringe width.",
        "answer": "Analysis of experimental modifications in YDSE and angular fringe width",
        "explanation": "(a) (i) When source slit width S is increased: If S/s > λ/d (where s is distance between source and double slits), waves from different parts of the source slit become mutually incoherent, reducing fringe visibility until the interference pattern is completely washed out.\n(ii) Shorter wavelength (λ decreases): Fringe width β = λD/d decreases; fringes become narrower and more tightly packed.\n(iii) Thin mica sheet (thickness t, index n): The entire fringe pattern shifts sideways towards the arm containing the sheet by distance y = (n - 1) t D / d, without changing the fringe width β.\n\n(b) Angular fringe width θ:\nLinear fringe width is β = λ D / d.\nAngular fringe width is the angle subtended by fringe width at the slits: θ = β / D = (λ D / d) / D = λ / d.\nNotice that angular fringe width depends only on wavelength λ and slit separation d, and is independent of screen distance D."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 11,
      "unit_num": 7,
      "title": "Dual Nature of Radiation and Matter",
      "unit_title": "Dual Nature of Radiation and Matter",
      "weightage_unit": "12 Marks (Units 7 & 8)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The de Broglie wavelength of an electron accelerated through a potential difference of V volts is given by:",
        "options": [
          "(a) 1.227 / √V nm",
          "(b) 12.27 / √V nm",
          "(c) 0.1227 / √V nm",
          "(d) 1.227 √V nm"
        ],
        "answer": "(a) 1.227 / √V nm",
        "explanation": "λ = h / √(2 m e V) = (6.63 × 10⁻³⁴) / √(2 * 9.1 × 10⁻³¹ * 1.6 × 10⁻¹⁹ * V) = 1.227 × 10⁻⁹ / √V m = 1.227 / √V nm (or 12.27 / √V Å)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The slope of the graph between stopping potential (V₀) and frequency (ν) of incident radiation is equal to:",
        "options": [
          "(a) h / e",
          "(b) e / h",
          "(c) h e",
          "(d) h / e²"
        ],
        "answer": "(a) h / e",
        "explanation": "Einstein's equation: e V₀ = h ν - Φ₀ => V₀ = (h / e) ν - (Φ₀ / e). Comparing with y = mx + c, the slope is m = h / e, which is a universal constant independent of the photosensitive metal."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If the intensity of incident radiation on a photosensitive surface is doubled, the stopping potential will:",
        "options": [
          "(a) be doubled",
          "(b) be halved",
          "(c) remain unchanged",
          "(d) become four times"
        ],
        "answer": "(c) remain unchanged",
        "explanation": "Stopping potential depends solely on the frequency of incident radiation and the work function of the metal. It is completely independent of the intensity of the radiation (intensity only increases the number of emitted photoelectrons per second, hence saturation current)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "An electron, an alpha particle, and a proton have the same kinetic energy. Which one has the shortest de Broglie wavelength?",
        "options": [
          "(a) Electron",
          "(b) Proton",
          "(c) Alpha particle",
          "(d) All have equal wavelength"
        ],
        "answer": "(c) Alpha particle",
        "explanation": "λ = h / √(2m K). For equal kinetic energy K, λ ∝ 1 / √m. Since the alpha particle has the largest mass (m_alpha ≈ 4 m_p >> m_e), it has the shortest de Broglie wavelength."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The work function of a metal is 2.0 eV. The threshold frequency of the metal is approximately:",
        "options": [
          "(a) 4.8 × 10¹⁴ Hz",
          "(b) 3.2 × 10¹⁵ Hz",
          "(c) 9.6 × 10¹⁴ Hz",
          "(d) 1.2 × 10¹⁴ Hz"
        ],
        "answer": "(a) 4.8 × 10¹⁴ Hz",
        "explanation": "Φ₀ = h ν₀ => ν₀ = Φ₀ / h = (2.0 * 1.6 × 10⁻¹⁹ J) / (6.63 × 10⁻³⁴ J·s) = (3.2 × 10⁻¹⁹) / (6.63 × 10⁻³⁴) ≈ 4.83 × 10¹⁴ Hz."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In photoelectric emission, the time lag between the incidence of light photons and the ejection of photoelectrons is roughly:",
        "options": [
          "(a) 10⁻⁹ s or less",
          "(b) 10⁻³ s",
          "(c) 1 s",
          "(d) 10⁻¹ s"
        ],
        "answer": "(a) 10⁻⁹ s or less",
        "explanation": "Photoelectric emission is an instantaneous process. The time lag is less than 10⁻⁹ seconds (about a nanosecond), as a photon transfers its entire energy instantaneously to an electron in an elastic collision."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "A photon of frequency ν has linear momentum equal to:",
        "options": [
          "(a) h ν / c",
          "(b) h ν c",
          "(c) h c / ν",
          "(d) h / (ν c)"
        ],
        "answer": "(a) h ν / c",
        "explanation": "Energy of photon E = h ν = p c. Momentum p = E / c = h ν / c."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "When ultraviolet light is replaced by infrared light of the same intensity on a zinc plate, photoelectron emission:",
        "options": [
          "(a) increases",
          "(b) decreases",
          "(c) stops completely",
          "(d) remains unchanged"
        ],
        "answer": "(c) stops completely",
        "explanation": "The work function of zinc is relatively high (~4.3 eV), which requires ultraviolet light (high frequency). Infrared radiation has frequency far below the threshold frequency of zinc (ν_IR < ν₀), so no photoelectrons can be emitted regardless of intensity."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The de Broglie wavelength of a thermal neutron at temperature T (absolute temperature) is proportional to:",
        "options": [
          "(a) T",
          "(b) 1 / √T",
          "(c) √T",
          "(d) 1 / T"
        ],
        "answer": "(b) 1 / √T",
        "explanation": "Average kinetic energy of a thermal neutron is K = 3/2 k_B T. de Broglie wavelength λ = h / √(2m K) = h / √(3 m k_B T) ∝ 1 / √T."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which metal is most photosensitive and commonly used in photocells for visible light?",
        "options": [
          "(a) Zinc",
          "(b) Caesium",
          "(c) Copper",
          "(d) Platinum"
        ],
        "answer": "(b) Caesium",
        "explanation": "Caesium has the lowest work function among alkali metals (~2.14 eV), allowing it to emit photoelectrons even with low-energy visible light."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If the momentum of a particle is doubled, its de Broglie wavelength will:",
        "options": [
          "(a) be doubled",
          "(b) be halved",
          "(c) remain unchanged",
          "(d) become four times"
        ],
        "answer": "(b) be halved",
        "explanation": "λ = h / p. When p' = 2p, λ' = h / (2p) = λ / 2."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The maximum kinetic energy of emitted photoelectrons depends upon:",
        "options": [
          "(a) intensity of incident radiation",
          "(b) frequency of incident radiation",
          "(c) distance between source and plate",
          "(d) time of illumination"
        ],
        "answer": "(b) frequency of incident radiation",
        "explanation": "K_max = h ν - Φ₀. Maximum kinetic energy depends linearly on the frequency ν of incident radiation and the work function Φ₀ of the metal surface."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The rest mass of a photon is:",
        "options": [
          "(a) 9.1 × 10⁻³¹ kg",
          "(b) zero",
          "(c) 1.67 × 10⁻²⁷ kg",
          "(d) infinite"
        ],
        "answer": "(b) zero",
        "explanation": "Photons travel at the speed of light in vacuum. In relativistic mechanics, the rest mass m₀ of a photon is identically zero (m₀ = 0)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Two particles have identical de Broglie wavelength. They must have the same:",
        "options": [
          "(a) velocity",
          "(b) kinetic energy",
          "(c) momentum",
          "(d) mass"
        ],
        "answer": "(c) momentum",
        "explanation": "Since λ = h / p, if λ is the same, linear momentum p = h / λ must be identical for both particles."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Light of frequency 1.5 times the threshold frequency is incident on a photosensitive material. If the frequency is halved and intensity is doubled, the photoelectric current will be:",
        "options": [
          "(a) doubled",
          "(b) quadrupled",
          "(c) zero",
          "(d) halved"
        ],
        "answer": "(c) zero",
        "explanation": "Initial frequency is ν = 1.5 ν₀. When halved, new frequency is ν' = 1.5 ν₀ / 2 = 0.75 ν₀ < ν₀. Since the new frequency is below the threshold frequency (ν' < ν₀), no photoemission can occur. Thus photoelectric current is zero."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The threshold wavelength for photoelectric emission from a surface is 500 nm. Photoelectrons will be emitted when illuminated by:",
        "options": [
          "(a) 600 nm light",
          "(b) 700 nm light",
          "(c) 400 nm light",
          "(d) 800 nm light"
        ],
        "answer": "(c) 400 nm light",
        "explanation": "Photoelectric emission occurs only when the wavelength of incident radiation is less than or equal to the threshold wavelength (λ ≤ λ₀). Here λ₀ = 500 nm, so emission occurs for 400 nm (higher frequency/energy)."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "An electron and a photon have the same de Broglie wavelength λ = 1.0 nm. The ratio of their kinetic energies (K_electron / E_photon) is:",
        "options": [
          "(a) 1",
          "(b) ~10⁻³",
          "(c) ~10³",
          "(d) 0.5"
        ],
        "answer": "(b) ~10⁻³",
        "explanation": "For electron: K_e = p² / (2m) = h² / (2 m λ²). For photon: E_p = p c = h c / λ. Ratio K_e / E_p = [ h² / (2 m λ²) ] / [ h c / λ ] = h / (2 m c λ) = (6.63 × 10⁻³⁴) / (2 * 9.1 × 10⁻³¹ * 3 × 10⁸ * 10⁻⁹) = 6.63 × 10⁻³⁴ / (5.46 × 10⁻³¹) ≈ 1.21 × 10⁻³."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Wave nature of light is NOT confirmed by:",
        "options": [
          "(a) Interference",
          "(b) Diffraction",
          "(c) Polarisation",
          "(d) Photoelectric effect"
        ],
        "answer": "(d) Photoelectric effect",
        "explanation": "The photoelectric effect demonstrates the particulate (quantum) nature of light as localized energy packets (photons), and cannot be explained by wave theory."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A 100 W sodium lamp radiates energy uniformly in all directions. The wavelength of sodium light is 589 nm. The number of photons emitted per second is approximately:",
        "options": [
          "(a) 3.0 × 10²⁰",
          "(b) 1.5 × 10¹⁹",
          "(c) 5.0 × 10¹⁸",
          "(d) 6.0 × 10²²"
        ],
        "answer": "(a) 3.0 × 10²⁰",
        "explanation": "Energy of 1 photon: E = h c / λ = (6.63 × 10⁻³⁴ * 3 × 10⁸) / (589 × 10⁻⁹) ≈ 3.377 × 10⁻¹⁹ J. Number of photons per second n = P / E = 100 / (3.377 × 10⁻¹⁹) ≈ 2.96 × 10²⁰ ≈ 3.0 × 10²⁰ s⁻¹."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The intercept of the stopping potential versus frequency graph on the negative potential axis represents:",
        "options": [
          "(a) Threshold frequency",
          "(b) Work function / e",
          "(c) Planck's constant",
          "(d) Electronic charge"
        ],
        "answer": "(b) Work function / e",
        "explanation": "Equation: V₀ = (h/e) ν - (Φ₀/e). When ν = 0, V₀ = - Φ₀ / e. Thus, the magnitude of the y-intercept is Φ₀ / e."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "If an electron is accelerated through 100 V, its de Broglie wavelength is:",
        "options": [
          "(a) 1.227 Å",
          "(b) 0.1227 Å",
          "(c) 12.27 Å",
          "(d) 122.7 Å"
        ],
        "answer": "(a) 1.227 Å",
        "explanation": "λ = 1.227 / √V nm = 1.227 / √100 nm = 1.227 / 10 nm = 0.1227 nm = 1.227 Å."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Davisson and Germer experiment proved the:",
        "options": [
          "(a) Wave nature of electrons",
          "(b) Particle nature of electrons",
          "(c) Wave nature of light",
          "(d) Existence of nucleus"
        ],
        "answer": "(a) Wave nature of electrons",
        "explanation": "Davisson and Germer observed diffraction of an accelerated electron beam scattered from nickel crystal planes, directly confirming de Broglie's hypothesis of matter waves."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A particle with mass m and charge q is accelerated from rest through potential difference V. Its de Broglie wavelength is:",
        "options": [
          "(a) h / √(2 m q V)",
          "(b) √(2 m q V) / h",
          "(c) h / (2 m q V)",
          "(d) 2 m q V / h"
        ],
        "answer": "(a) h / √(2 m q V)",
        "explanation": "Kinetic energy K = q V. Momentum p = √(2 m K) = √(2 m q V). Therefore, λ = h / p = h / √(2 m q V)."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The saturation current in a photoelectric cell depends directly upon:",
        "options": [
          "(a) Frequency of incident radiation",
          "(b) Intensity of incident radiation",
          "(c) Stopping potential",
          "(d) Work function"
        ],
        "answer": "(b) Intensity of incident radiation",
        "explanation": "Intensity is the number of photons incident per unit area per second. Higher intensity means more photons striking the surface, freeing more photoelectrons per second, which increases saturation current."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The de Broglie wavelength associated with a macroscopic moving cricket ball (mass 0.15 kg, speed 30 m/s) is of the order of:",
        "options": [
          "(a) 10⁻³⁴ m",
          "(b) 10⁻¹⁰ m",
          "(c) 10⁻¹⁵ m",
          "(d) 10⁻⁶ m"
        ],
        "answer": "(a) 10⁻³⁴ m",
        "explanation": "λ = h / (m v) = (6.63 × 10⁻³⁴) / (0.15 * 30) = (6.63 × 10⁻³⁴) / 4.5 ≈ 1.47 × 10⁻³⁴ m. This is far too tiny to produce observable diffraction effects."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The photoelectric effect demonstrates the particle nature of electromagnetic radiation.\nReason (R): In the photoelectric effect, an incident photon transfers its entire energy to a single conduction electron in a localized one-to-one collision.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The instantaneous emission and localized energy transfer cannot be explained by continuous wave fronts spreading energy over large numbers of electrons."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The stopping potential in photoelectric emission does not depend on the intensity of the incident radiation.\nReason (R): The maximum kinetic energy of emitted photoelectrons depends solely on the frequency of incident radiation and the work function of the metal.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Since e V₀ = K_max and K_max = h ν - Φ₀, V₀ depends on ν and Φ₀, not intensity."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): An electron microscope provides much higher magnification and resolving power than an optical microscope.\nReason (R): The de Broglie wavelength of high-energy electrons can be made thousands of times smaller than the wavelength of visible light.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Resolving power is inversely proportional to wavelength (RP ∝ 1/λ). Extremely small electron wavelengths (~0.05 nm vs 500 nm light) vastly reduce diffraction limits."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Wave theory of light fails to explain the existence of a threshold frequency in photoelectric emission.\nReason (R): According to wave theory, light of any frequency should be able to impart sufficient energy to eject an electron if the intensity is high enough and time of exposure is long enough.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the failure of wave theory."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Matter waves are not electromagnetic waves.\nReason (R): Matter waves are associated with any moving mass particle, whether it is charged or uncharged, whereas electromagnetic waves are produced only by accelerating electric charges.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Matter waves are probability probability waves associated with particle momentum (λ = h/p), not EM radiation."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Write Einstein's photoelectric equation and define: (i) Work function, (ii) Threshold frequency.",
        "answer": "Einstein's equation and definitions",
        "explanation": "1. Einstein's Photoelectric Equation: K_max = h ν - Φ₀ = e V₀ (or 1/2 m v_max² = h ν - h ν₀).\n2. Work Function (Φ₀): The minimum amount of energy required by an electron to escape from the metal surface against attractive ionic forces.\n3. Threshold Frequency (ν₀): The minimum frequency of incident radiation below which no photoelectric emission can occur, regardless of how intense the radiation is."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Draw graphs showing the variation of photoelectric current with collector plate potential for: (i) different intensities at constant frequency, (ii) different frequencies at constant intensity.",
        "answer": "Photoelectric current vs potential graphs",
        "explanation": "(i) Different intensities (I3 > I2 > I1) at fixed frequency: All curves converge to the same stopping potential -V₀ on the negative voltage axis, but level off at different saturation currents directly proportional to intensity.\n(ii) Different frequencies (ν3 > ν2 > ν1) at fixed intensity: Curves have different stopping potentials (-V₀3 < -V₀2 < -V₀1, with higher frequency requiring more negative stopping voltage), but all saturate at the same saturation current level."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "State three experimental observations of the photoelectric effect that could not be explained by the classical wave theory of light.",
        "answer": "Three failures of classical wave theory",
        "explanation": "1. Existence of Threshold Frequency: Wave theory predicts light of any frequency should eject electrons if intensity is high enough; experiment shows zero emission below threshold frequency ν₀.\n2. Instantaneous Emission: Wave theory requires minutes to hours for continuous wavefront energy to accumulate in an atom; experiment shows instantaneous emission (< 10⁻⁹ s).\n3. Kinetic Energy Dependence: Wave theory predicts maximum kinetic energy should increase with intensity; experiment shows K_max is strictly independent of intensity and increases linearly with frequency."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Calculate the de Broglie wavelength of an alpha particle accelerated through a potential difference of 200 V. (Mass of alpha particle = 6.64 × 10⁻²⁷ kg, charge = 3.2 × 10⁻¹⁹ C).",
        "answer": "λ = 7.2 × 10⁻¹³ m = 0.0072 Å",
        "explanation": "Kinetic energy K = q V = (3.2 × 10⁻¹⁹ C) * (200 V) = 6.4 × 10⁻¹⁷ J.\nMomentum p = √(2 m K) = √( 2 * 6.64 × 10⁻²⁷ * 6.4 × 10⁻¹⁷ ) = √( 8.499 × 10⁻⁴³ ) = √( 84.99 × 10⁻⁴⁴ ) ≈ 9.22 × 10⁻²² kg·m/s.\nde Broglie wavelength λ = h / p = (6.63 × 10⁻³⁴ J·s) / (9.22 × 10⁻²² kg·m/s) ≈ 7.19 × 10⁻¹³ m = 0.00719 Å."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "The work function of caesium is 2.14 eV. Find: (i) the threshold frequency for caesium, (ii) the wavelength of the incident light if the stopping potential is 0.60 V.",
        "answer": "(i) ν₀ = 5.16 × 10¹⁴ Hz, (ii) λ = 454 nm",
        "explanation": "(i) Φ₀ = 2.14 eV = 2.14 * 1.6 × 10⁻¹⁹ J = 3.424 × 10⁻¹⁹ J.\nThreshold frequency ν₀ = Φ₀ / h = (3.424 × 10⁻¹⁹) / (6.63 × 10⁻³⁴) ≈ 5.16 × 10¹⁴ Hz.\n(ii) K_max = e V₀ = 0.60 eV.\nPhoton energy E = Φ₀ + K_max = 2.14 eV + 0.60 eV = 2.74 eV.\nE = 2.74 * 1.6 × 10⁻¹⁹ J = 4.384 × 10⁻¹⁹ J.\nWavelength λ = h c / E = (6.63 × 10⁻³⁴ * 3 × 10⁸) / (4.384 × 10⁻¹⁹) = (1.989 × 10⁻²⁵) / (4.384 × 10⁻¹⁹) ≈ 4.537 × 10⁻⁷ m ≈ 454 nm."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Plot a graph between the de Broglie wavelength λ and accelerating potential V for an electron. Also plot λ versus 1/√V.",
        "answer": "λ vs V and λ vs 1/√V graphs",
        "explanation": "1. λ vs V: Since λ = 1.227 / √V, the graph is a smooth curve decaying asymptotically towards both axes (non-linear inverse-square-root decay).\n2. λ vs 1/√V: Since λ = (1.227 nm·V^(1/2)) * (1/√V), it is of the form y = m x, which is a straight line passing through the origin with positive slope m = 1.227 nm·V^(1/2)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "An electron and a photon each have a wavelength of 1.0 nm. Find: (i) their momenta, (ii) energy of the photon, (iii) kinetic energy of the electron.",
        "answer": "(i) p = 6.63 × 10⁻²⁵ kg·m/s, (ii) E = 1243 eV, (iii) K = 1.51 eV",
        "explanation": "(i) Momentum for both: p = h / λ = (6.63 × 10⁻³⁴ J·s) / (1.0 × 10⁻⁹ m) = 6.63 × 10⁻²⁵ kg·m/s.\n(ii) Photon energy: E_photon = p c = (6.63 × 10⁻²⁵ kg·m/s) * (3.0 × 10⁸ m/s) = 1.989 × 10⁻¹⁶ J = 1.989 × 10⁻¹⁶ / 1.6 × 10⁻¹⁹ eV ≈ 1243 eV.\n(iii) Electron kinetic energy: K_e = p² / (2m) = (6.63 × 10⁻²⁵)² / (2 * 9.1 × 10⁻³¹) = (4.396 × 10⁻⁴⁹) / (1.82 × 10⁻³⁰) = 2.415 × 10⁻¹⁹ J = 2.415 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ eV ≈ 1.51 eV."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "State de Broglie hypothesis. Write the expression for the de Broglie wavelength of a particle of mass m moving with velocity v.",
        "answer": "de Broglie hypothesis and wavelength formula",
        "explanation": "1. Hypothesis: Louis de Broglie proposed that dual nature (wave-particle duality) applies symmetrically to matter as well as radiation. Every moving material particle is accompanied by a matter wave (pilot wave) whose wavelength depends inversely on its momentum.\n2. Expression: λ = h / p = h / (m v), where h is Planck's constant."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "In a photoelectric experiment, the stopping potential for incident light of wavelength 400 nm is 1.1 V, and for wavelength 300 nm is 2.1 V. Determine the value of Planck's constant h.",
        "answer": "Planck's constant h = 6.4 × 10⁻³⁴ J·s",
        "explanation": "From Einstein's equation: e V01 = h c / λ1 - Φ₀ and e V02 = h c / λ2 - Φ₀.\nSubtracting equations:\ne (V02 - V01) = h c [ 1/λ2 - 1/λ1 ]\n=> h = [ e (V02 - V01) ] / [ c (1/λ2 - 1/λ1) ].\nGiven: V02 - V01 = 2.1 - 1.1 = 1.0 V.\n1/λ2 - 1/λ1 = 1/(300 × 10⁻⁹) - 1/(400 × 10⁻⁹) = (10⁹ / 1200) * (4 - 3) = 10⁹ / 1200 m⁻¹.\nNumerator = (1.6 × 10⁻¹⁹ C) * (1.0 V) = 1.6 × 10⁻¹⁹ J.\nDenominator = (3.0 × 10⁸ m/s) * (10⁹ / 1200 m⁻¹) = 3.0 × 10¹⁷ / 1200 = 2.5 × 10¹⁴ s⁻¹.\nh = (1.6 × 10⁻¹⁹) / (2.5 × 10¹⁴) = 6.4 × 10⁻³⁴ J·s."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "What is the physical significance of Davisson-Germer experiment?",
        "answer": "Significance of Davisson-Germer experiment",
        "explanation": "The Davisson-Germer experiment provided the first direct experimental verification of the wave nature of electrons (matter waves) proposed by de Broglie. It confirmed that electrons undergo Bragg diffraction from crystal planes, and the measured wavelength matched de Broglie's theoretical formula (λ = h/p) within 1%."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) State the laws of photoelectric emission.\n(b) Using Einstein's photoelectric equation, explain all these laws.\n(c) Plot a graph between maximum kinetic energy of photoelectrons and the frequency of incident radiation.",
        "answer": "Laws of photoelectric emission, Einstein's explanation, and K_max vs ν graph",
        "explanation": "Marking Scheme:\n(a) Laws of Photoelectric Emission (2 marks):\n1. For a given photosensitive material, the rate of emission of photoelectrons (photoelectric current) is directly proportional to the intensity of incident radiation above threshold frequency.\n2. For a given material, there exists a certain minimum frequency (threshold frequency ν₀) below which no photoemission occurs, no matter how high the intensity.\n3. The maximum kinetic energy of emitted photoelectrons is directly proportional to frequency and completely independent of intensity.\n4. Photoelectric emission is an instantaneous process with no observable time lag (< 10⁻⁹ s).\n\n(b) Einstein's Explanation (2 marks):\n- Einstein's equation: K_max = h ν - Φ₀ = h (ν - ν₀).\n- Law 1: Intensity is the number of photons per second. Since 1 photon ejects 1 electron, doubling intensity doubles the number of emitted electrons.\n- Law 2: If ν < ν₀, K_max is negative, which is physically impossible. Hence, emission cannot occur below threshold frequency ν₀.\n- Law 3: K_max depends linearly on frequency ν and is independent of photon number (intensity).\n- Law 4: The collision between a photon and an electron is instantaneous; photon energy is absorbed in a single step without time delay.\n\n(c) Graph (1 mark):\n- K_max vs ν: A straight line with slope h, starting from ν = ν₀ on the positive frequency axis."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Derive the expression for the de Broglie wavelength of an electron accelerated from rest through a potential difference V.\n(b) An electron, an alpha particle, and a proton have the same de Broglie wavelength. Which of these particles has the largest kinetic energy? Justify your answer.\n(c) For what potential difference does an electron have a de Broglie wavelength of 0.1 nm?",
        "answer": "de Broglie derivation, energy comparison, and potential calculation V = 150.6 V",
        "explanation": "Marking Scheme:\n(a) Derivation (2 marks):\n- Work done on electron of mass m and charge e by potential V: W = e V.\n- This work is converted into kinetic energy: K = 1/2 m v² = p² / (2m) = e V => p = √(2 m e V).\n- de Broglie wavelength λ = h / p = h / √(2 m e V).\n- Substituting values: h = 6.63 × 10⁻³⁴, m = 9.1 × 10⁻³¹, e = 1.6 × 10⁻¹⁹:\n  λ = 1.227 × 10⁻⁹ / √V m = 1.227 / √V nm.\n\n(b) Kinetic Energy Comparison (1.5 marks):\n- Since λ = h / √(2m K) => K = h² / (2 m λ²).\n- For identical λ: K ∝ 1 / m.\n- The electron has the smallest mass (m_e << m_p < m_alpha), so the electron has the largest kinetic energy.\n\n(c) Numerical (1.5 marks):\n- λ = 0.1 nm = 1.227 / √V => √V = 1.227 / 0.1 = 12.27\n- V = (12.27)² ≈ 150.6 V."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Describe briefly the experimental setup used by Lenard to study photoelectric effect with a neat schematic diagram.\n(b) Explain the effect of:\n(i) intensity of incident light on photoelectric current,\n(ii) potential on photoelectric current,\n(iii) frequency on stopping potential.",
        "answer": "Lenard's experiment, schematic diagram, and parameter dependencies",
        "explanation": "Marking Scheme:\n(a) Setup & Diagram (2 marks):\n- Evacuated quartz tube containing emitter plate C and collector plate A, quartz window for UV light, potential divider to vary voltage from positive to negative, sensitive microammeter, and commutator.\n\n(b) Effects (3 marks):\n(i) Intensity: Photoelectric current is directly proportional to intensity at constant frequency and accelerating potential.\n(ii) Potential: As positive collector potential increases, current rises until it saturates (saturation current). When potential is made negative (retarding), current decreases and drops to zero at a specific stopping potential -V₀.\n(iii) Frequency: Higher frequency requires a more negative stopping potential (V₀ ∝ ν), showing maximum kinetic energy increases linearly with frequency."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: The Photoelectric Cell in Modern Automation\nA photocell (phototube) is a technological application of the photoelectric effect that converts light energy into electric current. It consists of an evacuated glass bulb containing a semi-cylindrical photosensitive cathode and a wire anode. When illuminated by light of frequency greater than the threshold frequency, photoelectrons are emitted from the cathode and collected by the positive anode, producing a detectable microampere current. Photocells are widely used in automatic street lights, burglar alarms, solar calculators, and sound reproduction in motion pictures.\n(i) What is the fundamental working principle of a photocell?\n(ii) Why are alkali metals like caesium preferred for the cathode of a photocell?\n(iii) How is a photocell used in a burglar alarm system?\n(iv) A photocell is illuminated by a point source of light kept 1 m away. If the source is moved to 2 m away, by what factor does the photoelectric current change?",
        "answer": "Solutions to Case Study on Photocells",
        "explanation": "(i) Principle: Photoelectric effect (emission of electrons from a metal surface when irradiated with light of frequency ν ≥ ν₀).\n(ii) Alkali metals (especially caesium) have exceptionally low work functions (Φ₀ ≈ 2.14 eV), allowing them to emit photoelectrons when exposed to ordinary visible light.\n(iii) An invisible infrared beam is directed continuously onto the photocell cathode, maintaining a steady current. When an intruder walks across the beam, the light is interrupted, the current suddenly drops to zero, and an electronic relay triggers an alarm bell.\n(iv) Intensity from a point source obeys inverse square law: I ∝ 1/r². When distance doubles from 1 m to 2 m, intensity decreases by a factor of 2² = 4. Since photoelectric current is directly proportional to intensity, the current decreases to 1/4th of its original value."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "Light of wavelength 2000 Å falls on an aluminium surface. In aluminium, 4.2 eV of energy is required to remove an electron. Calculate:\n(i) kinetic energy of fastest emitted photoelectrons,\n(ii) kinetic energy of slowest emitted photoelectrons,\n(iii) stopping potential,\n(iv) cut-off wavelength for aluminium.",
        "answer": "(i) K_max = 2.0 eV, (ii) K_min = 0, (iii) V₀ = 2.0 V, (iv) λ₀ = 295.5 nm",
        "explanation": "Given: λ = 2000 Å = 2000 × 10⁻¹⁰ m = 2 × 10⁻⁷ m, Φ₀ = 4.2 eV.\nIncident photon energy: E = h c / λ = (6.63 × 10⁻³⁴ * 3 × 10⁸) / (2 × 10⁻⁷) = 9.945 × 10⁻¹⁹ J\nIn eV: E = 9.945 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ ≈ 6.216 eV ≈ 6.2 eV.\n(i) K_max = E - Φ₀ = 6.2 eV - 4.2 eV = 2.0 eV.\n(ii) Slowest photoelectrons come from deeper layers and lose energy in internal collisions before exiting: K_min = 0.\n(iii) e V₀ = K_max = 2.0 eV => Stopping potential V₀ = 2.0 V.\n(iv) Cut-off wavelength λ₀ = h c / Φ₀ = (1.989 × 10⁻²⁵ J·m) / (4.2 * 1.6 × 10⁻¹⁹ J) = (1.989 × 10⁻²⁵) / (6.72 × 10⁻¹⁹) ≈ 2.96 × 10⁻⁷ m = 296 nm = 2960 Å."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Define de Broglie wavelength. Write its formula in terms of temperature T for a gas molecule of mass m.\n(b) Find the ratio of de Broglie wavelength of an electron and a proton if they have:\n(i) the same velocity,\n(ii) the same kinetic energy,\n(iii) the same accelerating potential.",
        "answer": "Ratio of de Broglie wavelengths under three conditions",
        "explanation": "(a) Matter wavelength λ = h / p. For gas molecule at temperature T: average kinetic energy K = 3/2 k_B T => p = √(3 m k_B T) => λ = h / √(3 m k_B T).\n\n(b) Let mass of proton be mp and mass of electron be me (mp ≈ 1836 me):\n(i) Same velocity v: λ = h / (m v) => λe / λp = mp / me ≈ 1836 : 1.\n(ii) Same kinetic energy K: λ = h / √(2m K) => λe / λp = √(mp / me) = √1836 ≈ 42.8 : 1.\n(iii) Same accelerating potential V: λ = h / √(2 m q V). Since charges are equal (qe = qp = e):\nλe / λp = √(mp / me) ≈ 42.8 : 1."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Radiation of frequency 10¹⁵ Hz is incident on two photosensitive surfaces P and Q. The following observations are recorded:\n(1) Surface P: Photoelectric emission takes place and stopping potential is 1.5 V.\n(2) Surface Q: Photoelectric emission takes place and stopping potential is 0.5 V.\nCalculate:\n(i) Work function of surface P,\n(ii) Work function of surface Q,\n(iii) Threshold frequency of surface P.",
        "answer": "(i) Φ_P = 2.64 eV, (ii) Φ_Q = 3.64 eV, (iii) ν₀_P = 6.38 × 10¹⁴ Hz",
        "explanation": "Incident photon energy: E = h ν = (6.63 × 10⁻³⁴ * 10¹⁵) = 6.63 × 10⁻¹⁹ J.\nIn eV: E = 6.63 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 4.144 eV ≈ 4.14 eV.\n(i) Surface P: e V0P = 1.5 eV => Φ_P = E - e V0P = 4.14 eV - 1.5 eV = 2.64 eV.\n(ii) Surface Q: e V0Q = 0.5 eV => Φ_Q = E - e V0Q = 4.14 eV - 0.5 eV = 3.64 eV.\n(iii) Threshold frequency for P: ν₀_P = Φ_P / h = (2.64 * 1.6 × 10⁻¹⁹ J) / (6.63 × 10⁻³⁴ J·s) = (4.224 × 10⁻¹⁹) / (6.63 × 10⁻³⁴) ≈ 6.37 × 10¹⁴ Hz."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Explain how Davisson and Germer experimentally verified the wave nature of electrons.\n(b) If an electron is accelerated through 54 V in this experiment, calculate its theoretical de Broglie wavelength and compare it with the experimental Bragg diffraction value.",
        "answer": "Davisson-Germer experiment and 54 V calculation",
        "explanation": "(a) Setup: Electron gun produces an accelerated fine beam of electrons of known energy striking a single nickel crystal. Scattered electrons are collected by a movable detector connected to a galvanometer at different scattering angles θ.\nA prominent peak in scattered intensity is observed at accelerating voltage V = 54 V and scattering angle θ = 50°.\n\n(b) Calculations:\n1. Theoretical de Broglie wavelength:\nλ = 1.227 / √V nm = 1.227 / √54 nm = 1.227 / 7.348 nm = 0.167 nm = 1.67 Å.\n2. Experimental Bragg diffraction value:\nGlancing angle φ = (180° - θ) / 2 = (180° - 50°) / 2 = 65°.\nFor nickel crystal, interplanar spacing d = 0.91 Å = 0.091 nm.\nBy Bragg's Law (first order n = 1):\nλ = 2 d sin φ = 2 * (0.91 Å) * sin 65° = 1.82 * 0.9063 = 1.65 Å = 0.165 nm.\nThe theoretical (0.167 nm) and experimental (0.165 nm) values agree remarkably well, conclusively confirming matter waves."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Two monochromatic radiations of frequencies ν1 and ν2 (ν1 > ν2) are incident on a photosensitive surface having work function Φ₀. If the ratio of maximum velocities of the emitted photoelectrons is 2 : 1, show that:\nν1 - 4 ν2 + 3 Φ₀ / h = 0.",
        "answer": "Proof of frequency relation for velocity ratio 2 : 1",
        "explanation": "From Einstein's equation:\n1/2 m v1² = h ν1 - Φ₀ ... (1)\n1/2 m v2² = h ν2 - Φ₀ ... (2)\nDividing (1) by (2):\n(v1 / v2)² = (h ν1 - Φ₀) / (h ν2 - Φ₀).\nGiven v1 / v2 = 2 / 1 => (v1 / v2)² = 4.\nTherefore:\n4 = (h ν1 - Φ₀) / (h ν2 - Φ₀)\n=> 4 (h ν2 - Φ₀) = h ν1 - Φ₀\n=> 4 h ν2 - 4 Φ₀ = h ν1 - Φ₀\n=> h ν1 - 4 h ν2 + 3 Φ₀ = 0.\nDividing by Planck's constant h:\nν1 - 4 ν2 + 3 Φ₀ / h = 0. (Proven)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Why are matter waves associated only with moving microscopic particles and not with macroscopic everyday objects?\n(b) Calculate the de Broglie wavelength associated with:\n(i) an electron moving with speed 5.4 × 10⁶ m/s,\n(ii) a ball of mass 0.150 kg traveling at 30.0 m/s.\nExplain why wave nature is observable in (i) but not in (ii).",
        "answer": "Microscopic vs macroscopic matter waves and wavelength calculations",
        "explanation": "(a) Since de Broglie wavelength is λ = h / (m v), and Planck's constant h is unimaginably tiny (~6.63 × 10⁻³⁴ J·s), for macroscopic bodies having finite mass (m ~ grams or kilograms), the denominator is so large that λ is around 10⁻³⁴ m. This wavelength is vastly smaller than atomic nuclei (~10⁻¹⁵ m), making diffraction phenomena physically undetectable.\n\n(b) Calculations:\n(i) Electron: m = 9.1 × 10⁻³¹ kg, v = 5.4 × 10⁶ m/s.\nλ = (6.63 × 10⁻³⁴) / (9.1 × 10⁻³¹ * 5.4 × 10⁶) = (6.63 × 10⁻³⁴) / (4.914 × 10⁻²⁴) ≈ 1.35 × 10⁻¹⁰ m = 0.135 nm.\n(ii) Ball: m = 0.150 kg, v = 30 m/s.\nλ = (6.63 × 10⁻³⁴) / (0.150 * 30) = (6.63 × 10⁻³⁴) / 4.5 ≈ 1.47 × 10⁻³⁴ m.\n\nExplanation: The wavelength of the electron (0.135 nm) is of the order of interatomic spacings in crystals, allowing observable diffraction effects. In contrast, the ball's wavelength (1.47 × 10⁻³⁴ m) is far below any measurable physical scale."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 12,
      "unit_num": 8,
      "title": "Atoms",
      "unit_title": "Atoms and Nuclei",
      "weightage_unit": "12 Marks (Units 7 & 8)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The total energy of an electron in the first excited state of a hydrogen atom is -3.4 eV. Its kinetic energy and potential energy are respectively:",
        "options": [
          "(a) +3.4 eV, -6.8 eV",
          "(b) -3.4 eV, -6.8 eV",
          "(c) +3.4 eV, +6.8 eV",
          "(d) +6.8 eV, -13.6 eV"
        ],
        "answer": "(a) +3.4 eV, -6.8 eV",
        "explanation": "In Bohr's hydrogen atom: Kinetic Energy K = - Total Energy E = -(-3.4 eV) = +3.4 eV. Potential Energy U = 2 * Total Energy E = 2 * (-3.4 eV) = -6.8 eV."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The radius of the inner-most electron orbit of a hydrogen atom is 5.3 × 10⁻¹¹ m. What is the radius of the orbit in the second excited state (n = 3)?",
        "options": [
          "(a) 1.59 × 10⁻¹⁰ m",
          "(b) 4.77 × 10⁻¹⁰ m",
          "(c) 2.12 × 10⁻¹⁰ m",
          "(d) 1.06 × 10⁻¹⁰ m"
        ],
        "answer": "(b) 4.77 × 10⁻¹⁰ m",
        "explanation": "Orbit radius rn = n² * r1. Second excited state corresponds to principal quantum number n = 3. Therefore, r3 = 3² * r1 = 9 * (5.3 × 10⁻¹¹ m) = 4.77 × 10⁻¹⁰ m."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which spectral series of hydrogen atom lies in the visible region of the electromagnetic spectrum?",
        "options": [
          "(a) Lyman series",
          "(b) Balmer series",
          "(c) Paschen series",
          "(d) Brackett series"
        ],
        "answer": "(b) Balmer series",
        "explanation": "Transitions ending on the n = 2 state (Balmer series) emit photons with wavelengths between 364 nm and 656 nm, lying squarely in the visible region. (Lyman is in UV; Paschen, Brackett, Pfund are in Infrared)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "According to Bohr's second postulate, the angular momentum of an electron orbiting in the nth stationary orbit is an integral multiple of:",
        "options": [
          "(a) h / (2π)",
          "(b) 2π / h",
          "(c) h / π",
          "(d) h / (4π)"
        ],
        "answer": "(a) h / (2π)",
        "explanation": "Bohr's quantization condition states that orbital angular momentum L = m v r = n (h / 2π), where n = 1, 2, 3, ..."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In Rutherford's alpha particle scattering experiment, the number of alpha particles scattered at angle θ is proportional to:",
        "options": [
          "(a) sin⁴(θ / 2)",
          "(b) 1 / sin⁴(θ / 2)",
          "(c) sin²(θ / 2)",
          "(d) 1 / sin²(θ / 2)"
        ],
        "answer": "(b) 1 / sin⁴(θ / 2)",
        "explanation": "Rutherford's scattering formula gives N(θ) ∝ 1 / sin⁴(θ / 2)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The ratio of the speed of an electron in the first Bohr orbit of hydrogen to the speed of light in vacuum (c) is called the fine-structure constant (α) and has the approximate value:",
        "options": [
          "(a) 1 / 137",
          "(b) 1 / 2",
          "(c) 1 / 1836",
          "(d) 1 / 70"
        ],
        "answer": "(a) 1 / 137",
        "explanation": "Speed in first Bohr orbit is v1 = e² / (2 ε₀ h) ≈ 2.18 × 10⁶ m/s. Ratio v1 / c = (2.18 × 10⁶) / (3.0 × 10⁸) ≈ 1 / 137."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The ionization energy of a hydrogen atom in its ground state is:",
        "options": [
          "(a) -13.6 eV",
          "(b) +13.6 eV",
          "(c) 3.4 eV",
          "(d) 0 eV"
        ],
        "answer": "(b) +13.6 eV",
        "explanation": "Ground state energy is E1 = -13.6 eV. Ionization energy is the energy required to liberate the electron to infinity (E_inf = 0): E_ion = E_inf - E1 = 0 - (-13.6 eV) = +13.6 eV."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "When an electron jumps from n = 4 to n = 1 in a hydrogen atom, the maximum number of spectral emission lines possible is:",
        "options": [
          "(a) 6",
          "(b) 3",
          "(c) 4",
          "(d) 10"
        ],
        "answer": "(a) 6",
        "explanation": "Number of possible emission lines N = n(n - 1) / 2 = 4(4 - 1) / 2 = (4 * 3) / 2 = 6."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The ratio of the minimum wavelength of the Lyman series to the minimum wavelength of the Balmer series is:",
        "options": [
          "(a) 1 : 4",
          "(b) 4 : 1",
          "(c) 1 : 2",
          "(d) 2 : 1"
        ],
        "answer": "(a) 1 : 4",
        "explanation": "For series limit (minimum wavelength, n2 = ∞): 1 / λ_min = R / n1². For Lyman (n1 = 1): λ_Lyman = 1 / R. For Balmer (n1 = 2): λ_Balmer = 4 / R. Ratio λ_Lyman / λ_Balmer = (1/R) / (4/R) = 1 / 4."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "If an alpha particle collides head-on with a gold nucleus (Z = 79) with kinetic energy K, the distance of closest approach r₀ is proportional to:",
        "options": [
          "(a) K",
          "(b) 1 / K",
          "(c) √K",
          "(d) 1 / K²"
        ],
        "answer": "(b) 1 / K",
        "explanation": "At closest approach, kinetic energy converts completely into electrostatic potential energy: K = (1 / 4πε₀) * (2 Z e² / r₀) => r₀ = [ 2 Z e² / (4πε₀ K) ] ∝ 1 / K."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "de Broglie's explanation of Bohr's quantization condition requires that the circumference of the nth circular orbit must equal:",
        "options": [
          "(a) n de Broglie wavelengths",
          "(b) n/2 de Broglie wavelengths",
          "(c) 2n de Broglie wavelengths",
          "(d) a single de Broglie wavelength"
        ],
        "answer": "(a) n de Broglie wavelengths",
        "explanation": "For a stable standing matter wave around the orbit, constructive interference requires: 2π rn = n λ. Substituting λ = h / (m v) yields m v rn = n (h / 2π)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The impact parameter b for an alpha particle scattered at 180° (head-on collision) is:",
        "options": [
          "(a) maximum",
          "(b) zero",
          "(c) infinite",
          "(d) equal to nuclear radius"
        ],
        "answer": "(b) zero",
        "explanation": "Formula: b = [ Z e² cot(θ / 2) ] / [ 4πε₀ (1/2 m v²) ]. For θ = 180°: cot(180° / 2) = cot 90° = 0. Thus impact parameter b = 0."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Rydberg constant R has the value:",
        "options": [
          "(a) 1.097 × 10⁷ m⁻¹",
          "(b) 6.63 × 10⁻³⁴ J·s",
          "(c) 8.85 × 10⁻¹² C²/(N·m²)",
          "(d) 9.1 × 10⁻³¹ kg"
        ],
        "answer": "(a) 1.097 × 10⁷ m⁻¹",
        "explanation": "R = m e⁴ / (8 ε₀² c h³) ≈ 1.09737 × 10⁷ m⁻¹."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "An electron in a hydrogen atom makes a transition from n = 3 to n = 2. The wavelength of the emitted photon is (R = 1.097 × 10⁷ m⁻¹):",
        "options": [
          "(a) 656.3 nm",
          "(b) 486.1 nm",
          "(c) 121.6 nm",
          "(d) 102.6 nm"
        ],
        "answer": "(a) 656.3 nm",
        "explanation": "1 / λ = R (1/2² - 1/3²) = R (1/4 - 1/9) = R (5/36) => λ = 36 / (5 R) = 36 / (5 * 1.097 × 10⁷) ≈ 6.563 × 10⁻⁷ m = 656.3 nm (H-alpha red line)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The frequency of revolution of an electron in the nth Bohr orbit of hydrogen varies with n as:",
        "options": [
          "(a) f ∝ 1 / n²",
          "(b) f ∝ 1 / n³",
          "(c) f ∝ 1 / n",
          "(d) f ∝ n³"
        ],
        "answer": "(b) f ∝ 1 / n³",
        "explanation": "Velocity vn ∝ 1/n, radius rn ∝ n². Period T = 2π rn / vn ∝ n² / (1/n) = n³. Frequency f = 1/T ∝ 1 / n³."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "A hydrogen atom absorbs a photon and gets excited from ground state to state with energy -1.51 eV. The principal quantum number n of this excited state is:",
        "options": [
          "(a) 2",
          "(b) 3",
          "(c) 4",
          "(d) 5"
        ],
        "answer": "(b) 3",
        "explanation": "En = -13.6 / n² eV => -1.51 = -13.6 / n² => n² = 13.6 / 1.51 ≈ 9 => n = 3."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The ratio of the longest wavelength in the Lyman series to the longest wavelength in the Balmer series is:",
        "options": [
          "(a) 5 / 27",
          "(b) 27 / 5",
          "(c) 1 / 4",
          "(d) 4 / 9"
        ],
        "answer": "(a) 5 / 27",
        "explanation": "Lyman longest (2 -> 1): 1/λ_L = R(1/1 - 1/4) = 3R/4 => λ_L = 4/(3R).\nBalmer longest (3 -> 2): 1/λ_B = R(1/4 - 1/9) = 5R/36 => λ_B = 36/(5R).\nRatio λ_L / λ_B = (4 / 3R) / (36 / 5R) = (4/3) * (5/36) = 20 / 108 = 5 / 27."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following transitions in a hydrogen atom emits a photon of highest frequency?",
        "options": [
          "(a) n = 2 to n = 1",
          "(b) n = 3 to n = 2",
          "(c) n = 4 to n = 3",
          "(d) n = 5 to n = 4"
        ],
        "answer": "(a) n = 2 to n = 1",
        "explanation": "Energy difference ΔE = h ν:\n- n = 2 to 1: ΔE = -3.4 - (-13.6) = 10.2 eV.\n- n = 3 to 2: ΔE = -1.51 - (-3.4) = 1.89 eV.\n- n = 4 to 3: ΔE = 0.66 eV.\nTransition n = 2 to n = 1 has by far the largest energy change, and therefore emits the highest frequency photon."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What is the orbital magnetic moment of an electron in the ground state of a hydrogen atom?",
        "options": [
          "(a) One Bohr magneton (μB)",
          "(b) Two Bohr magnetons",
          "(c) Zero",
          "(d) Half Bohr magneton"
        ],
        "answer": "(a) One Bohr magneton (μB)",
        "explanation": "M = (e / 2m) L = (e / 2m) * (n h / 2π) = n * [e h / (4π m)]. For n = 1, M = 1 * μB = μB."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Rutherford's planetary model of atom could not explain the stability of atoms because classical electromagnetism predicts that an accelerating electron must:",
        "options": [
          "(a) continuously radiate electromagnetic energy and spiral into the nucleus in ~10⁻¹⁰ s",
          "(b) escape from the atom",
          "(c) split into photons",
          "(d) expand into a cloud"
        ],
        "answer": "(a) continuously radiate electromagnetic energy and spiral into the nucleus in ~10⁻¹⁰ s",
        "explanation": "According to Maxwell's electromagnetic theory, an orbiting electron undergoes centripetal acceleration and must continuously radiate energy, causing its orbit radius to shrink until it collapses into the nucleus in less than 10⁻¹⁰ s."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The energy required to excite a hydrogen atom from its ground state to its first excited state is:",
        "options": [
          "(a) 10.2 eV",
          "(b) 13.6 eV",
          "(c) 3.4 eV",
          "(d) 1.51 eV"
        ],
        "answer": "(a) 10.2 eV",
        "explanation": "ΔE = E2 - E1 = -3.4 eV - (-13.6 eV) = 10.2 eV."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "In a hydrogen atom, the ratio of kinetic energy to total energy is:",
        "options": [
          "(a) -1",
          "(b) +1",
          "(c) +2",
          "(d) -2"
        ],
        "answer": "(a) -1",
        "explanation": "Since Kinetic Energy K = - E, the ratio K / E = -1."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The radius of the first orbit of singly ionized helium (He⁺, Z = 2) compared to hydrogen (H, Z = 1) is:",
        "options": [
          "(a) half",
          "(b) twice",
          "(c) four times",
          "(d) equal"
        ],
        "answer": "(a) half",
        "explanation": "Bohr radius rn ∝ n² / Z. For n = 1: r(He⁺) / r(H) = Z_H / Z_He = 1 / 2. The radius is halved."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The wavelength of the first line of the Lyman series in hydrogen is 1216 Å. The wavelength of the first line of the Balmer series is:",
        "options": [
          "(a) 6563 Å",
          "(b) 4861 Å",
          "(c) 3646 Å",
          "(d) 912 Å"
        ],
        "answer": "(a) 6563 Å",
        "explanation": "1/λ_L1 = 3R/4 => R = 4 / (3 * 1216 Å) = 1 / 912 Å⁻¹.\nBalmer first line: 1/λ_B1 = 5R/36 = 5 / (36 * 912) => λ_B1 = (36 * 912) / 5 = 32832 / 5 ≈ 6566 Å ≈ 6563 Å."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following is NOT a postulate of Bohr's atomic model?",
        "options": [
          "(a) Electrons revolve in certain stable non-radiating orbits",
          "(b) Angular momentum is quantized as n h / (2π)",
          "(c) Radiation is emitted or absorbed only when an electron jumps between orbits",
          "(d) Electrons move in continuous spirals towards the nucleus"
        ],
        "answer": "(d) Electrons move in continuous spirals towards the nucleus",
        "explanation": "Option (d) is the disastrous prediction of classical physics that Bohr's model successfully overcame by postulating stable stationary orbits."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The total energy of an electron revolving in an orbit inside a hydrogen atom is negative.\nReason (R): The negative sign indicates that the electron is bound to the positive nucleus by attractive electrostatic forces.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. A negative total energy signifies a bound state; energy must be supplied externally to free the electron."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Only a very tiny fraction (~1 in 8000) of alpha particles were deflected by more than 90° in Rutherford's scattering experiment.\nReason (R): Almost the entire mass and all the positive charge of an atom is concentrated in an unimaginably small central core called the nucleus.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Because the nucleus occupies an extremely minute fraction of atomic volume (~10⁻¹⁵ m vs 10⁻¹⁰ m), head-on encounters are extraordinarily rare."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The Balmer series of hydrogen spectrum lies in the visible region.\nReason (R): The energy transitions in the Balmer series terminate on the n = 2 energy level, yielding photon energies between 1.89 eV and 3.40 eV.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Photon energies between 1.89 eV and 3.4 eV correspond to visible wavelengths between ~365 nm and 656 nm."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): Bohr's atomic model cannot be directly applied to calculate the energy levels of a neutral helium atom.\nReason (R): Bohr's model does not account for the mutual electron-electron electrostatic repulsion present in multi-electron atoms.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Bohr's theory is valid only for single-electron (hydrogen-like) species: H, He⁺, Li²⁺, Be³⁺."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The kinetic energy of an electron in a hydrogen atom decreases as the principal quantum number n increases.\nReason (R): Orbital velocity vn of the electron is inversely proportional to n (vn ∝ 1/n).",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Since vn ∝ 1/n, kinetic energy K = 1/2 m vn² ∝ 1/n², which decreases as n increases."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "State Bohr's postulates for the hydrogen atom.",
        "answer": "Bohr's postulates",
        "explanation": "1. Stationary Orbits: An electron in an atom revolves in certain stable circular orbits without radiating electromagnetic energy.\n2. Quantization of Angular Momentum: The electron can revolve only in those non-radiating orbits for which its orbital angular momentum is an integral multiple of h / (2π): L = m v r = n (h / 2π), where n = 1, 2, 3, ...\n3. Radiative Transitions: Radiation of frequency ν is emitted or absorbed only when an electron jumps from one non-radiating orbit to another: E_initial - E_final = h ν."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Define impact parameter and distance of closest approach in Rutherford's scattering experiment.",
        "answer": "Definitions of impact parameter and distance of closest approach",
        "explanation": "1. Impact Parameter (b): The perpendicular distance of the initial velocity vector of the projectile alpha particle from the central axis of the target nucleus.\n2. Distance of Closest Approach (r₀): The minimum distance from the centre of the nucleus reached by a head-on incident alpha particle (b = 0) at which its entire initial kinetic energy is momentarily converted into electrostatic potential energy."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Using Bohr's postulates, show that the radius of the nth orbit of hydrogen atom is rn = n² a₀, where a₀ = 0.529 Å.",
        "answer": "Derivation of rn = n² h² ε₀ / (π m e²)",
        "explanation": "1. Centripetal force is provided by electrostatic attraction:\nm v² / r = (1 / 4πε₀) * (e² / r²) => m v² r = e² / (4πε₀) ... (1)\n2. Bohr's angular momentum quantization:\nm v r = n h / (2π) => v = n h / (2π m r) ... (2)\n3. Substituting v into (1):\nm [ n h / (2π m r) ]² r = e² / (4πε₀)\n=> m [ n² h² / (4π² m² r²) ] r = e² / (4πε₀)\n=> n² h² / (4π² m r) = e² / (4πε₀)\n=> r = [ n² h² ε₀ ] / [ π m e² ] = n² * [ h² ε₀ / (π m e²) ].\n4. Substituting values gives the Bohr radius: a₀ = h² ε₀ / (π m e²) ≈ 0.529 × 10⁻¹⁰ m = 0.529 Å.\n5. Therefore: rn = n² a₀."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Draw an energy level diagram for hydrogen atom showing the transitions corresponding to: (i) Lyman series, (ii) Balmer series. In which regions of the EM spectrum do they lie?",
        "answer": "Energy level transitions and spectral regions",
        "explanation": "1. Energy levels: n = 1 (-13.6 eV), n = 2 (-3.4 eV), n = 3 (-1.51 eV), n = 4 (-0.85 eV), n = ∞ (0 eV).\n2. Lyman Series: Transitions from n = 2, 3, 4, ... Down to n = 1. Lies in the Ultraviolet (UV) region.\n3. Balmer Series: Transitions from n = 3, 4, 5, ... Down to n = 2. Lies in the Visible region (H-alpha, H-beta, H-gamma, H-delta lines)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "How did de Broglie explain Bohr's second postulate of quantization of angular momentum?",
        "answer": "de Broglie explanation of Bohr's quantization",
        "explanation": "1. de Broglie proposed that an electron in orbit behaves as a circular standing matter wave.\n2. For a standing wave to be stable and avoid destructive self-interference over successive revolutions, the circumference of the orbit must contain an integral number of whole de Broglie wavelengths:\n2π r = n λ (n = 1, 2, 3, ...).\n3. By de Broglie's formula: λ = h / p = h / (m v).\n4. Substituting λ:\n2π r = n [ h / (m v) ] => m v r = n (h / 2π) = L.\n5. This provides a natural physical explanation for Bohr's quantization rule."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "The ground state energy of hydrogen atom is -13.6 eV. What are the kinetic and potential energies of the electron in this state?",
        "answer": "K = +13.6 eV, U = -27.2 eV",
        "explanation": "Total energy E = -13.6 eV.\nKinetic energy K = - E = -(-13.6 eV) = +13.6 eV.\nPotential energy U = 2 E = 2 * (-13.6 eV) = -27.2 eV.\n(Verification: E = K + U = 13.6 - 27.2 = -13.6 eV)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Calculate the shortest and longest wavelengths in the Balmer series of hydrogen spectrum. (R = 1.097 × 10⁷ m⁻¹).",
        "answer": "Longest λ = 656.3 nm, Shortest λ = 364.6 nm",
        "explanation": "Rydberg formula for Balmer series: 1 / λ = R (1/2² - 1/n²).\n1. Longest wavelength (minimum energy transition, n = 3):\n1 / λ_max = R (1/4 - 1/9) = 5R / 36\n=> λ_max = 36 / (5 R) = 36 / (5 * 1.097 × 10⁷) ≈ 6.563 × 10⁻⁷ m = 656.3 nm.\n2. Shortest wavelength (series limit, maximum energy, n = ∞):\n1 / λ_min = R (1/4 - 1/∞) = R / 4\n=> λ_min = 4 / R = 4 / (1.097 × 10⁷) ≈ 3.646 × 10⁻⁷ m = 364.6 nm."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "State two limitations of Bohr's model of the atom.",
        "answer": "Limitations of Bohr's model",
        "explanation": "1. It is applicable only to single-electron (hydrogen-like) atoms and ions (H, He⁺, Li²⁺); it completely fails for multi-electron atoms.\n2. It cannot explain the fine structure (splitting of spectral lines into multiple closely spaced components) and cannot account for the Zeeman effect (splitting in magnetic fields) or Stark effect (splitting in electric fields)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "In a Geiger-Marsden experiment, what is the distance of closest approach to the nucleus of a 7.7 MeV alpha particle before it is turned back in a head-on collision with a gold nucleus (Z = 79)?",
        "answer": "r₀ = 2.95 × 10⁻¹⁴ m ≈ 30 fm",
        "explanation": "Kinetic energy K = 7.7 MeV = 7.7 × 10⁶ × 1.6 × 10⁻¹⁹ J = 1.232 × 10⁻¹² J.\nAt closest approach: K = (1 / 4πε₀) * (2 Z e² / r₀)\n=> r₀ = [ (1 / 4πε₀) * 2 Z e² ] / K\nr₀ = [ (9 × 10⁹) * 2 * 79 * (1.6 × 10⁻¹⁹)² ] / (1.232 × 10⁻¹²)\nr₀ = [ 9 × 10⁹ * 158 * 2.56 × 10⁻³⁸ ] / (1.232 × 10⁻¹²) = [ 3.640 × 10⁻²⁶ ] / (1.232 × 10⁻¹²) ≈ 2.95 × 10⁻¹⁴ m ≈ 29.5 fm."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why is the classical Rutherford model of an atom unable to explain atomic line spectra?",
        "answer": "Failure of Rutherford model to explain line spectra",
        "explanation": "According to classical electromagnetic theory, an electron continuously spiraling inwards towards the nucleus would emit radiation of continuously increasing frequency as its orbital period shrank. This would produce a continuous spectrum of all wavelengths, which completely contradicts the sharp, discrete line emission spectra experimentally observed for atoms."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Derive the expression for the total energy En of an electron in the nth stationary orbit of a hydrogen atom in terms of fundamental constants.\n(b) Show that En = - 13.6 / n² eV.\n(c) What is the significance of the negative sign in the total energy?",
        "answer": "Derivation of En = - m e⁴ / (8 ε₀² n² h²) and numerical evaluation",
        "explanation": "Marking Scheme:\n(a) Total Energy Derivation (3 marks):\n- Centripetal force = Electrostatic attraction: m vn² / rn = e² / (4πε₀ rn²)\n  => Kinetic Energy K = 1/2 m vn² = e² / (8πε₀ rn).\n- Electrostatic Potential Energy U = - e² / (4πε₀ rn).\n- Total Energy En = K + U = e² / (8πε₀ rn) - e² / (4πε₀ rn) = - e² / (8πε₀ rn).\n- Substituting Bohr radius rn = n² h² ε₀ / (π m e²):\n  En = - [ e² / (8πε₀) ] * [ π m e² / (n² h² ε₀) ] = - m e⁴ / (8 ε₀² n² h²).\n\n(b) Numerical Evaluation (1 mark):\n- Substituting values: m = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C, ε₀ = 8.854 × 10⁻¹² C²/(N·m²), h = 6.626 × 10⁻³⁴ J·s:\n  En = - (2.18 × 10⁻¹⁸ J) / n².\n- Converting to eV (dividing by 1.602 × 10⁻¹⁹ J/eV):\n  En = - 13.6 / n² eV.\n\n(c) Negative Sign Significance (1 mark):\n- The negative sign indicates that the electron is bound in an attractive potential well created by the positive nucleus. To remove the electron to infinity (unbound state where E = 0), positive energy equal to |En| must be supplied."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) State the Rydberg formula for the wavelengths of spectral lines in hydrogen.\n(b) Calculate the shortest and longest wavelengths in:\n(i) Lyman series,\n(ii) Paschen series.\n(c) Identify the electromagnetic spectral regions for both series.",
        "answer": "Rydberg formula, Lyman and Paschen wavelength calculations",
        "explanation": "Marking Scheme:\n(a) Rydberg Formula (1 mark):\n- 1 / λ = R [ 1/n1² - 1/n2² ], where R = 1.097 × 10⁷ m⁻¹ and n2 > n1.\n\n(b) Calculations (3 marks):\n(i) Lyman Series (n1 = 1):\n- Longest λ (n2 = 2): 1/λ_max = R(1 - 1/4) = 3R/4 => λ_max = 4 / (3 * 1.097 × 10⁷) = 1.215 × 10⁻⁷ m = 121.5 nm.\n- Shortest λ (n2 = ∞): 1/λ_min = R(1 - 0) = R => λ_min = 1 / R = 1 / (1.097 × 10⁷) = 9.116 × 10⁻⁸ m = 91.2 nm.\n\n(ii) Paschen Series (n1 = 3):\n- Longest λ (n2 = 4): 1/λ_max = R(1/9 - 1/16) = 7R/144 => λ_max = 144 / (7 * 1.097 × 10⁷) = 1.875 × 10⁻⁶ m = 1875 nm.\n- Shortest λ (n2 = ∞): 1/λ_min = R(1/9 - 0) = R/9 => λ_min = 9 / R = 9 / (1.097 × 10⁷) = 8.204 × 10⁻⁷ m = 820.4 nm.\n\n(c) Spectral Regions (1 mark):\n- Lyman series lies in the Ultraviolet (UV) region.\n- Paschen series lies in the Infrared (IR) region."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Describe Geiger-Marsden alpha particle scattering experiment with a neat schematic diagram.\n(b) State the major experimental observations and explain how they led Rutherford to propose the nuclear model of the atom.\n(c) What fraction of alpha particles are scattered through angles greater than 90°?",
        "answer": "Geiger-Marsden experiment, observations, and nuclear model conclusions",
        "explanation": "Marking Scheme:\n(a) Setup & Diagram (2 marks):\n- Radioactive source (Bismuth-214) emitting 5.5 MeV alpha particles inside a lead collimator, directed at an ultra-thin gold foil (~10⁻⁷ m), surrounded by a rotatable zinc sulphide fluorescent detector screen coupled with a microscope.\n\n(b) Observations & Inferences (2 marks):\n1. Most alpha particles (~99.86%) pass straight through undeflected or with tiny deflections (< 1°).\n   Inference: Most of the atomic volume is completely empty space.\n2. A few alpha particles (~0.14%) are deflected by large angles (> 1°).\n3. About 1 in 8000 particles is deflected by more than 90°, and occasionally an alpha particle bounces straight back (180°).\n   Inference: All positive charge and practically the entire atomic mass is concentrated in a tiny central region called the nucleus.\n\n(c) Fraction scattered > 90° (1 mark):\n- Only about 1 in 8000 (roughly 0.0125%) of the incident alpha particles are deflected by more than 90°."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: The Hydrogen Emission Spectrum\nWhen an electrical discharge is passed through low-pressure hydrogen gas in a discharge tube, hydrogen molecules dissociate into atoms, which get thermally and electrically excited. As the excited electrons jump back to lower energy levels, they emit photons of discrete wavelengths corresponding to the energy difference ΔE = hν = hc/λ. The resulting emission spectrum consists of discrete spectral series: Lyman, Balmer, Paschen, Brackett, and Pfund. In 1913, Niels Bohr successfully derived the Rydberg constant from first quantum principles.\n(i) Why does atomic hydrogen emit a discrete line spectrum rather than a continuous spectrum?\n(ii) In which region of the electromagnetic spectrum does the Brackett series lie?\n(iii) Calculate the wavelength of light emitted when an electron in hydrogen transitions from n = 4 to n = 2.\n(iv) What is the value of the principal quantum number n for the ground state of hydrogen?",
        "answer": "Solutions to Case Study on Hydrogen Spectrum",
        "explanation": "(i) Electrons in atoms can only occupy quantized, discrete energy levels (En = -13.6/n² eV). When jumping between levels, they emit photons with exact energy differences ΔE = E_i - E_f, producing discrete spectral lines.\n(ii) Infrared (IR) region.\n(iii) 1 / λ = R (1/2² - 1/4²) = R (1/4 - 1/16) = 3R / 16\n=> λ = 16 / (3 R) = 16 / (3 * 1.097 × 10⁷ m⁻¹) = 16 / (3.291 × 10⁷) ≈ 4.862 × 10⁻⁷ m = 486.2 nm (H-beta blue-green line).\n(iv) Ground state corresponds to n = 1."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) A hydrogen atom in its ground state is excited by monochromatic radiation of wavelength 975 Å. How many different spectral lines can be emitted by the resulting excited atoms?\n(b) Determine the maximum and minimum wavelengths among these emitted lines.",
        "answer": "(a) 6 spectral lines, (b) λ_min = 97.5 nm, λ_max = 1875 nm",
        "explanation": "(a) Energy of incident photon: E = h c / λ = (1.989 × 10⁻²⁵ J·m) / (975 × 10⁻¹⁰ m) = 2.04 × 10⁻¹⁸ J.\nIn eV: E = 2.04 × 10⁻¹⁸ / 1.6 × 10⁻¹⁹ ≈ 12.75 eV.\nEnergy of excited level: En = E1 + E = -13.6 eV + 12.75 eV = -0.85 eV.\nSince En = -13.6 / n² eV => -0.85 = -13.6 / n² => n² = 16 => n = 4.\nThe atom is excited to n = 4.\nNumber of possible emission lines: N = n(n - 1) / 2 = 4(3) / 2 = 6 lines.\n\n(b) Maximum and minimum wavelengths:\n- Minimum wavelength corresponds to largest energy transition (n = 4 to n = 1):\n  ΔE_max = -0.85 - (-13.6) = 12.75 eV => λ_min = 975 Å = 97.5 nm.\n- Maximum wavelength corresponds to smallest energy transition (n = 4 to n = 3):\n  ΔE_min = -0.85 - (-1.51) = 0.66 eV = 0.66 * 1.6 × 10⁻¹⁹ J = 1.056 × 10⁻¹⁹ J.\n  λ_max = h c / ΔE_min = (1.989 × 10⁻²⁵) / (1.056 × 10⁻¹⁹) ≈ 1.883 × 10⁻⁶ m = 1883 nm = 1.883 μm."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Deduce the expression for the orbital velocity vn of an electron in the nth orbit of a hydrogen atom.\n(b) Compare the orbital speeds in the first three orbits.\n(c) Find the ratio of the time periods of revolution of an electron in the n = 1 and n = 2 orbits.",
        "answer": "Orbital velocity derivation vn = e² / (2 ε₀ n h), speed ratio, and period ratio T1 / T2 = 1 : 8",
        "explanation": "(a) Derivation:\nCentripetal force = Electrostatic force: m v² r = e² / (4πε₀) ... (1)\nBohr quantization: m v r = n h / (2π) => r = n h / (2π m v) ... (2)\nSubstitute r into (1):\nm v² [ n h / (2π m v) ] = e² / (4πε₀)\n=> n h v / (2π) = e² / (4πε₀)\n=> vn = e² / (2 ε₀ n h).\n\n(b) Since vn ∝ 1/n:\nv1 : v2 : v3 = 1/1 : 1/2 : 1/3 = 6 : 3 : 2.\n\n(c) Period of revolution T = 2π rn / vn.\nSince rn ∝ n² and vn ∝ 1/n:\nTn ∝ n² / (1/n) = n³.\nRatio T1 / T2 = (1 / 2)³ = 1 / 8 = 1 : 8."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A 12.5 eV electron beam is used to bombard gaseous hydrogen at room temperature. Up to which energy level will the hydrogen atoms be excited? Calculate the wavelengths of the first member of the Lyman series and first member of the Balmer series.",
        "answer": "Excited to n = 3; λ(Lyman 1) = 121.5 nm, λ(Balmer 1) = 656.3 nm",
        "explanation": "Initial ground state energy E1 = -13.6 eV.\nMax energy level reachable: En ≤ E1 + 12.5 eV = -13.6 + 12.5 = -1.1 eV.\nEnergy levels:\n- n = 1: -13.6 eV\n- n = 2: -3.4 eV (requires 10.2 eV ≤ 12.5 eV - possible!)\n- n = 3: -1.51 eV (requires 12.09 eV ≤ 12.5 eV - possible!)\n- n = 4: -0.85 eV (requires 12.75 eV > 12.5 eV - NOT possible!).\nThus, the atoms are excited up to n = 3 level.\n\nWavelengths:\n- First line of Lyman series (n = 2 to 1): ΔE = 10.2 eV => λ = 1240 / 10.2 ≈ 121.5 nm.\n- First line of Balmer series (n = 3 to 2): ΔE = 1.89 eV => λ = 1240 / 1.89 ≈ 656.3 nm."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the relationship between impact parameter b and scattering angle θ in Rutherford's scattering formula.\n(b) What is the value of impact parameter for an alpha particle scattered at θ = 0° and θ = 180°?\n(c) Why was gold foil chosen for the alpha scattering experiment instead of aluminium?",
        "answer": "Impact parameter analysis and gold foil justification",
        "explanation": "(a) Relationship: b = [ 1 / (4πε₀) ] * [ Z e² cot(θ / 2) ] / [ 1/2 m v² ].\n(b) Special cases:\n- For θ = 0° (undeflected): cot 0° = ∞, so impact parameter b is very large (the alpha particle passes far away from the nucleus and feels negligible Coulomb repulsion).\n- For θ = 180° (rebound head-on collision): cot 90° = 0, so impact parameter b = 0.\n(c) Why gold foil was chosen:\n1. High malleability: Gold can be beaten into extremely thin foils (~10⁻⁷ m thick, roughly 1000 atoms thick), ensuring that an alpha particle undergoes at most one collision (single scattering) while traversing the foil.\n2. High atomic number (Z = 79): Gold nucleus has a large positive charge (+79e) and large mass (197 u), creating an intense repulsive electrostatic force capable of producing large-angle deflections without the nucleus itself recoiling significantly."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Show that the circumference of the Bohr orbit for the hydrogen atom is an integral multiple of the de Broglie wavelength associated with the revolving electron.",
        "answer": "Proof of 2π rn = n λ",
        "explanation": "According to Bohr's second postulate of quantization:\nm v rn = n (h / 2π).\nRearranging terms:\n2π rn = n (h / (m v)).\nAccording to de Broglie's matter wave hypothesis, the wavelength associated with an electron of momentum p = m v is:\nλ = h / (m v).\nSubstituting λ into the rearranged equation:\n2π rn = n λ.\nThis proves that the orbital circumference (2π rn) is exactly an integral multiple (n) of the de Broglie wavelength λ of the electron, confirming that stationary Bohr orbits correspond to constructive circular standing waves."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Distinguish between excitation energy and ionization energy of an atom.\n(b) The energy of an electron in the nth orbit of hydrogen atom is En = -13.6 / n² eV. Calculate:\n(i) Ionization potential of hydrogen atom,\n(ii) Excitation potential for the first excited state,\n(iii) Frequency of the photon emitted in transition from n = 3 to n = 1.",
        "answer": "(i) 13.6 V, (ii) 10.2 V, (iii) ν = 2.92 × 10¹⁵ Hz",
        "explanation": "(a) Definitions:\n- Excitation Energy: The minimum energy required to excite an electron from its ground state to any higher excited state (ΔE = En - E1).\n- Ionization Energy: The minimum energy required to completely remove the electron from the atom's ground state to infinity (E_ion = 0 - E1 = 13.6 eV).\n\n(b) Calculations:\n(i) Ionization Energy = 13.6 eV. Ionization Potential V_ion = 13.6 V.\n(ii) Excitation Energy to first excited state (n = 2): E2 - E1 = -3.4 - (-13.6) = 10.2 eV. Excitation Potential V_exc = 10.2 V.\n(iii) Energy emitted from n = 3 to n = 1: ΔE = E3 - E1 = -1.51 - (-13.6) = 12.09 eV.\nΔE = 12.09 * 1.6 × 10⁻¹⁹ J = 1.934 × 10⁻¹⁸ J.\nFrequency ν = ΔE / h = (1.934 × 10⁻¹⁸ J) / (6.63 × 10⁻³⁴ J·s) ≈ 2.92 × 10¹⁵ Hz."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 13,
      "unit_num": 8,
      "title": "Nuclei",
      "unit_title": "Atoms and Nuclei",
      "weightage_unit": "12 Marks (Units 7 & 8)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Two nuclei have mass numbers in the ratio 1 : 8. The ratio of their nuclear radii is:",
        "options": [
          "(a) 1 : 2",
          "(b) 1 : 4",
          "(c) 1 : 8",
          "(d) 1 : 1"
        ],
        "answer": "(a) 1 : 2",
        "explanation": "Nuclear radius is given by R = R₀ A^(1/3). R1 / R2 = (A1 / A2)^(1/3) = (1 / 8)^(1/3) = 1 / 2 = 1 : 2."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The nuclear density of a nucleus of mass number A is proportional to:",
        "options": [
          "(a) A⁰ (independent of A)",
          "(b) A^(1/3)",
          "(c) A",
          "(d) 1 / A"
        ],
        "answer": "(a) A⁰ (independent of A)",
        "explanation": "Density ρ = Mass / Volume = (A * m_nucleon) / [ 4/3 π R₀³ A ] = (3 m_nucleon) / (4π R₀³). Since mass number A cancels out completely, nuclear density is constant (~2.3 × 10¹⁷ kg/m³) and completely independent of mass number A."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The energy equivalent of 1 atomic mass unit (1 u) is approximately:",
        "options": [
          "(a) 931.5 MeV",
          "(b) 93.15 MeV",
          "(c) 13.6 eV",
          "(d) 1.6 × 10⁻¹⁹ J"
        ],
        "answer": "(a) 931.5 MeV",
        "explanation": "1 u = 1.6605 × 10⁻²⁷ kg. E = m c² = (1.6605 × 10⁻²⁷ kg) * (2.998 × 10⁸ m/s)² ≈ 1.4924 × 10⁻¹⁰ J. In MeV: (1.4924 × 10⁻¹⁰) / (1.602 × 10⁻¹³ J/MeV) ≈ 931.5 MeV."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The binding energy per nucleon is maximum for which of the following nuclei?",
        "options": [
          "(a) ²⁶Fe₅₆",
          "(b) ⁹²U₂₃₈",
          "(c) ²He₄",
          "(d) ¹H²"
        ],
        "answer": "(a) ²⁶Fe₅₆",
        "explanation": "The binding energy per nucleon curve peaks at iron-56 (⁵⁶Fe) with a value of approximately 8.75 MeV/nucleon, making it the most tightly bound and stable nucleus in nature."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Nuclear forces are:",
        "options": [
          "(a) short-range, charge-independent, and attractive",
          "(b) long-range and obey inverse square law",
          "(c) repulsive at all distances",
          "(d) electromagnetic in nature"
        ],
        "answer": "(a) short-range, charge-independent, and attractive",
        "explanation": "The strong nuclear force acts only over distances of ~1-2 fm (short-range), is identical between p-p, n-n, and p-n pairs (charge-independent), and is strongly attractive (overcoming Coulomb repulsion)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a nuclear fission reaction of ²³⁵U by a slow neutron, the average energy released per fission event is roughly:",
        "options": [
          "(a) 200 MeV",
          "(b) 20 MeV",
          "(c) 2 MeV",
          "(d) 0.5 MeV"
        ],
        "answer": "(a) 200 MeV",
        "explanation": "The fission of one ²³⁵U nucleus releases approximately 200 MeV of energy, mostly as kinetic energy of the fission fragments (~168 MeV) and prompt neutrons and gamma rays."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The main source of stellar energy in the interior of the Sun is:",
        "options": [
          "(a) Nuclear fission of heavy elements",
          "(b) Thermonuclear fusion of hydrogen into helium",
          "(c) Chemical combustion of gases",
          "(d) Gravitational contraction alone"
        ],
        "answer": "(b) Thermonuclear fusion of hydrogen into helium",
        "explanation": "The core of the Sun operates via the proton-proton fusion cycle, where four hydrogen nuclei (protons) fuse into a helium-4 nucleus, releasing ~26.7 MeV per reaction."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Mass defect Δm for a nucleus of mass M containing Z protons and N neutrons is:",
        "options": [
          "(a) [Z mp + N mn] - M",
          "(b) M - [Z mp + N mn]",
          "(c) Z mp + N mn",
          "(d) M - Z mp"
        ],
        "answer": "(a) [Z mp + N mn] - M",
        "explanation": "The rest mass of an intact nucleus M is always strictly less than the total rest mass of its individual constituent nucleons: Δm = [Z mp + (A - Z) mn] - M."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following pairs of nuclei are isobars?",
        "options": [
          "(a) ⁶C¹⁴ and ⁷N¹⁴",
          "(b) ⁶C¹² and ⁶C¹⁴",
          "(c) ¹H³ and ²He⁴",
          "(d) ⁸O¹⁶ and ⁸O¹⁸"
        ],
        "answer": "(a) ⁶C¹⁴ and ⁷N¹⁴",
        "explanation": "Isobars are nuclei having the same mass number A but different atomic numbers Z. Both ⁶C¹⁴ and ⁷N¹⁴ have A = 14."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The saturation property of nuclear forces means that:",
        "options": [
          "(a) a nucleon interacts only with its immediate nearest neighbours",
          "(b) all nucleons interact with every other nucleon",
          "(c) nuclear forces decrease with mass number",
          "(d) nuclear density increases with A"
        ],
        "answer": "(a) a nucleon interacts only with its immediate nearest neighbours",
        "explanation": "Due to extremely short range (~1 fm), a nucleon inside a nucleus only experiences nuclear attraction from neighbouring nucleons in its immediate vicinity. This is known as saturation of nuclear forces."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A nucleus undergoes nuclear fusion when two very light nuclei combine because:",
        "options": [
          "(a) the binding energy per nucleon of the resulting nucleus is higher",
          "(b) the binding energy per nucleon decreases",
          "(c) mass increases",
          "(d) atomic number decreases"
        ],
        "answer": "(a) the binding energy per nucleon of the resulting nucleus is higher",
        "explanation": "On the BE/A curve, light nuclei (A < 20) have lower binding energy per nucleon. When they fuse to form a heavier nucleus, BE/A increases, mass defect increases, and the excess mass is released as immense energy."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The ratio of the volume of an aluminium nucleus (²⁷Al) to that of a lead nucleus (²⁰⁸Pb) is approximately:",
        "options": [
          "(a) 27 / 208",
          "(b) 3 / 6",
          "(c) (27 / 208)³",
          "(d) 1 : 1"
        ],
        "answer": "(a) 27 / 208",
        "explanation": "Volume V = 4/3 π R³ = 4/3 π (R₀ A^(1/3))³ = (4/3 π R₀³) A. Therefore, V ∝ A. The ratio V(Al) / V(Pb) = 27 / 208."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which particles are emitted in the thermonuclear fusion reaction: 4 ¹H -> ⁴He + 2 X + 2 ν + 26.7 MeV?",
        "options": [
          "(a) Positrons (e⁺)",
          "(b) Electrons (e⁻)",
          "(c) Neutrons",
          "(d) Alpha particles"
        ],
        "answer": "(a) Positrons (e⁺)",
        "explanation": "In the proton-proton fusion cycle, two protons undergo beta-plus decay into neutrons, emitting two positrons (e⁺) and two electron neutrinos (ν) to conserve electric charge and lepton number."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why are extremely high temperatures (T ~ 10⁷ K) required to initiate nuclear fusion?",
        "answer": "(a) To give nuclei enough kinetic energy to overcome electrostatic Coulomb repulsion",
        "options": [
          "(a) To give nuclei enough kinetic energy to overcome electrostatic Coulomb repulsion",
          "(b) To break nuclear bonds",
          "(c) To accelerate electrons",
          "(d) To melt the nuclei"
        ],
        "explanation": "Positively charged protons experience powerful electrostatic Coulomb repulsion. Only at tens of millions of Kelvin do thermal kinetic energies (~k_B T) become large enough for protons to penetrate the Coulomb barrier and reach the short range of attractive nuclear forces."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The nuclear radius of ⁸O¹⁶ is approximately 3.0 fm. The nuclear radius of ⁸²Pb²⁰⁶ will be roughly:",
        "options": [
          "(a) 7.0 fm",
          "(b) 12.0 fm",
          "(c) 6.0 fm",
          "(d) 15.0 fm"
        ],
        "answer": "(a) 7.0 fm",
        "explanation": "R_Pb / R_O = (206 / 16)^(1/3) = (12.875)^(1/3) ≈ 2.34. Therefore, R_Pb ≈ 3.0 fm * 2.34 ≈ 7.02 fm."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The curve of binding energy per nucleon versus mass number shows a broad plateau in the mass range:",
        "options": [
          "(a) 30 < A < 170",
          "(b) A < 30",
          "(c) A > 200",
          "(d) A > 230"
        ],
        "answer": "(a) 30 < A < 170",
        "explanation": "In the intermediate range 30 < A < 170, the binding energy per nucleon is nearly constant at around 8.5 MeV/nucleon, reflecting the saturation of nuclear forces."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If a heavy nucleus with A = 240 and BE/A = 7.6 MeV breaks into two equal fragments of A = 120 and BE/A = 8.5 MeV, the total energy released is:",
        "options": [
          "(a) 216 MeV",
          "(b) 108 MeV",
          "(c) 90 MeV",
          "(d) 180 MeV"
        ],
        "answer": "(a) 216 MeV",
        "explanation": "Initial total BE = 240 * 7.6 = 1824 MeV. Final total BE = 2 * (120 * 8.5) = 240 * 8.5 = 2040 MeV. Energy released Q = BE_final - BE_initial = 2040 - 1824 = 216 MeV."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Neutrons are effective projectiles for inducing nuclear reactions because they:",
        "options": [
          "(a) carry no electric charge and feel no Coulomb repulsion",
          "(b) are very heavy",
          "(c) have magnetic charge",
          "(d) move faster than protons"
        ],
        "answer": "(a) carry no electric charge and feel no Coulomb repulsion",
        "explanation": "Because neutrons are electrically neutral, they experience zero repulsive electrostatic Coulomb barrier and can readily penetrate deep into positive nuclei even at low thermal kinetic energies."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Two protons are separated by 1 fm inside a nucleus. The nuclear force F_n and electrostatic force F_e between them satisfy:",
        "options": [
          "(a) F_n >> F_e (attractive)",
          "(b) F_n = F_e",
          "(c) F_e >> F_n",
          "(d) F_n is repulsive"
        ],
        "answer": "(a) F_n >> F_e (attractive)",
        "explanation": "At distances ~1 fm, the strong nuclear force is approximately 50 to 100 times stronger than the repulsive electrostatic Coulomb force, holding the protons together inside the nucleus."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The mass of an iron nucleus ⁵⁶Fe is 55.9349 u. If mass of proton is 1.0078 u and neutron is 1.0087 u, the mass defect is:",
        "options": [
          "(a) 0.528 u",
          "(b) 0.0528 u",
          "(c) 5.28 u",
          "(d) 0.005 u"
        ],
        "answer": "(a) 0.528 u",
        "explanation": "⁵⁶Fe has Z = 26 protons and N = 56 - 26 = 30 neutrons.\nTotal nucleon mass = 26 * 1.0078 + 30 * 1.0087 = 26.2028 + 30.2610 = 56.4638 u.\nMass defect Δm = 56.4638 - 55.9349 = 0.5289 u ≈ 0.528 u."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Nuclides having the same neutron number (N = A - Z) but different atomic numbers Z are called:",
        "options": [
          "(a) Isotones",
          "(b) Isotopes",
          "(c) Isobars",
          "(d) Isomers"
        ],
        "answer": "(a) Isotones",
        "explanation": "Isotones are nuclei having an identical number of neutrons (e.g. ⁷N¹⁵ and ⁸O¹⁶ both have N = 8)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "When a neutron breaks into a proton and an electron in beta decay, which other particle is emitted?",
        "options": [
          "(a) Antineutrino",
          "(b) Neutrino",
          "(c) Positron",
          "(d) Alpha particle"
        ],
        "answer": "(a) Antineutrino",
        "explanation": "In beta-minus decay: n -> p + e⁻ + ν̄_e (antineutrino). The antineutrino carries away missing energy and momentum and conserves lepton number."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The approximate radius of a gold nucleus (A = 197) is (take R₀ = 1.2 fm):",
        "options": [
          "(a) 7.0 fm",
          "(b) 1.2 fm",
          "(c) 14 fm",
          "(d) 3.5 fm"
        ],
        "answer": "(a) 7.0 fm",
        "explanation": "R = R₀ A^(1/3) = 1.2 fm * (197)^(1/3) ≈ 1.2 * 5.818 ≈ 6.98 fm ≈ 7.0 fm."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In nuclear reactors, cadmium or boron rods are used as:",
        "options": [
          "(a) Control rods to absorb excess neutrons",
          "(b) Moderators to slow down neutrons",
          "(c) Coolants to remove heat",
          "(d) Fuel elements"
        ],
        "answer": "(a) Control rods to absorb excess neutrons",
        "explanation": "Cadmium and boron have very high neutron capture cross-sections. They are used as control rods to absorb excess neutrons and maintain the multiplication factor k = 1 (critical steady state)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Heavy water (D2O) and graphite are used in nuclear reactors as:",
        "options": [
          "(a) Moderators",
          "(b) Coolants",
          "(c) Control rods",
          "(d) Shielding"
        ],
        "answer": "(a) Moderators",
        "explanation": "Moderators slow down fast fission neutrons (from ~2 MeV to thermal energies ~0.025 eV) via elastic collisions with light nuclei without absorbing them, optimizing U-235 fission probability."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Nuclear density is nearly constant for all atomic nuclei regardless of their mass number.\nReason (R): Both the mass and volume of a nucleus are directly proportional to its mass number A.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Mass M ∝ A, and Volume V ∝ R³ ∝ (A^(1/3))³ = A. Density ρ = M/V ∝ A/A = constant (~2.3 × 10¹⁷ kg/m³)."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Heavy nuclei (A > 230) tend to undergo nuclear fission to achieve greater stability.\nReason (R): For heavy nuclei, the binding energy per nucleon drops from ~8.5 MeV to ~7.6 MeV due to increasing electrostatic Coulomb repulsion between numerous protons.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Fission into medium-mass fragments raises the binding energy per nucleon closer to the stable plateau (~8.5 MeV), releasing energy."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): Nuclear fusion requires extremely high temperatures of tens of millions of Kelvin.\nReason (R): The positively charged fusing nuclei must possess sufficient kinetic energy to overcome the repulsive electrostatic Coulomb barrier.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. High thermal speeds enable overcoming the Coulomb repulsion barrier to bring nuclei within the ~1 fm range of attractive nuclear forces."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): The nuclear force between two protons is identical to the nuclear force between two neutrons at the same separation distance.\nReason (R): Strong nuclear forces are charge-independent in nature.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Experiments confirm F_pp = F_nn = F_pn under identical spin states."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The mass of an intact atomic nucleus is always less than the sum of the individual rest masses of its constituent nucleons.\nReason (R): When nucleons assemble into a nucleus, a fraction of their mass is converted into binding energy according to Einstein's mass-energy equivalence ΔE = Δm c².",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains the fundamental origin of mass defect."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Show that the density of nuclear matter is independent of mass number A.",
        "answer": "Proof that nuclear density is constant",
        "explanation": "1. Let A be the mass number and m be the average mass of a nucleon (m ≈ 1.66 × 10⁻²⁷ kg). Total mass of nucleus M = A * m.\n2. Radius of nucleus R = R₀ A^(1/3), where R₀ ≈ 1.2 × 10⁻¹⁵ m.\n3. Volume of nucleus V = 4/3 π R³ = 4/3 π [ R₀ A^(1/3) ]³ = 4/3 π R₀³ A.\n4. Nuclear density ρ = M / V = (A * m) / [ 4/3 π R₀³ A ] = (3 m) / (4π R₀³).\n5. Since A cancels completely, ρ depends only on constants m and R₀:\n   ρ = (3 * 1.66 × 10⁻²⁷) / [ 4 * 3.1416 * (1.2 × 10⁻¹⁵)³ ] ≈ 2.3 × 10¹⁷ kg/m³ = Constant."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "State four important characteristics of the strong nuclear force.",
        "answer": "Characteristics of nuclear force",
        "explanation": "1. Strongest fundamental force in nature (roughly 100 times stronger than electrostatic repulsion).\n2. Short-range: Acts effectively only over subatomic distances (~1-2 fm) and drops rapidly to zero beyond 2-3 fm.\n3. Charge-independent: Acts equally between p-p, n-n, and p-n pairs.\n4. Saturation property: Each nucleon interacts only with its immediate nearest-neighbor nucleons."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Draw the curve showing the variation of binding energy per nucleon (BE/A) with mass number A. Mark the regions corresponding to nuclear fission and nuclear fusion.",
        "answer": "BE/A curve features, fission and fusion regions",
        "explanation": "1. Curve Features:\n- Starts low for light nuclei (¹H² ≈ 1.1 MeV/A) with local peaks for tightly bound alpha-like nuclei (⁴He, ¹²C, ¹⁶O).\n- Rises rapidly and plateaus between A = 30 and 170 at around 8.5 MeV/nucleon.\n- Reaches maximum value of 8.75 MeV/nucleon at iron-56 (⁵⁶Fe).\n- Drops gradually for heavier nuclei, falling to ~7.6 MeV/nucleon for uranium-238 (²³⁸U).\n2. Nuclear Fusion: Occurs for light nuclei (A < 20) where combining nuclei raises BE/A.\n3. Nuclear Fission: Occurs for heavy nuclei (A > 200) where splitting into two medium-sized fragments raises BE/A."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Calculate the binding energy of an alpha particle (⁴He) in MeV, given: mass of ⁴He nucleus = 4.0015 u, mass of proton = 1.0073 u, mass of neutron = 1.0087 u.",
        "answer": "Binding energy = 28.4 MeV",
        "explanation": "Alpha particle has 2 protons and 2 neutrons.\nTotal mass of separate nucleons = 2(1.0073) + 2(1.0087) = 2.0146 + 2.0174 = 4.0320 u.\nMass defect Δm = 4.0320 u - 4.0015 u = 0.0305 u.\nBinding energy BE = Δm * 931.5 MeV = 0.0305 * 931.5 MeV ≈ 28.41 MeV.\n(BE per nucleon = 28.41 / 4 ≈ 7.10 MeV/nucleon)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "Distinguish between nuclear fission and nuclear fusion with one balanced nuclear equation for each.",
        "answer": "Comparison and balanced equations for fission and fusion",
        "explanation": "1. Nuclear Fission: The splitting of a heavy, unstable nucleus into two lighter, more stable nuclei of comparable masses, accompanied by the emission of neutrons and vast energy.\nEquation: ₀n¹ + ₉₂U²³⁵ -> ₅₆Ba¹⁴⁴ + ₃₆Kr⁸⁹ + 3 ₀n¹ + ~200 MeV.\n2. Nuclear Fusion: The process in which two or more light nuclei combine at extremely high temperature and pressure to form a heavier, more stable nucleus with release of enormous energy.\nEquation: ₁H² + ₁H³ -> ₂He⁴ + ₀n¹ + 17.6 MeV."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "What is the role of: (i) Moderator, (ii) Control rods in a nuclear fission reactor?",
        "answer": "Roles of moderator and control rods",
        "explanation": "(i) Moderator (e.g. Heavy water D2O, graphite): Slows down high-energy fast neutrons (~2 MeV) produced during fission to thermal speeds (~0.025 eV) via elastic collisions, maximizing the likelihood of capturing them to sustain U-235 fission.\n(ii) Control Rods (e.g. Cadmium, boron): Possess high neutron absorption cross-sections. They are inserted or withdrawn to absorb excess neutrons, maintaining the neutron reproduction factor k = 1 for a steady, controlled chain reaction."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Calculate the energy released in the nuclear fusion reaction: ²H + ³H -> ⁴He + n. Given masses: m(²H) = 2.014102 u, m(³H) = 3.016049 u, m(⁴He) = 4.002603 u, m(n) = 1.008665 u.",
        "answer": "Energy released Q = 17.59 MeV",
        "explanation": "Initial mass = m(²H) + m(³H) = 2.014102 + 3.016049 = 5.030151 u.\nFinal mass = m(⁴He) + m(n) = 4.002603 + 1.008665 = 5.011268 u.\nMass defect Δm = 5.030151 - 5.011268 = 0.018883 u.\nEnergy released Q = Δm * 931.5 MeV = 0.018883 * 931.5 MeV ≈ 17.59 MeV."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "Why is the mass of a nucleus always less than the sum of the masses of its constituents? What happens to the lost mass?",
        "answer": "Explanation of mass defect and binding energy",
        "explanation": "When individual protons and neutrons come together under the strong nuclear force to assemble an intact nucleus, work is done by the attractive force, and energy is released. By Einstein's mass-energy equivalence (E = mc²), this released binding energy corresponds to a loss of rest mass Δm = BE / c². Hence, the mass of the bound nucleus is always strictly less than the sum of the free nucleons' rest masses."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "A given coin has a mass of 3.0 g. Calculate the nuclear energy that would be required to separate all the neutrons and protons from each other. For simplicity assume that the coin is entirely made of ₂₉Cu⁶³ atoms (mass = 62.92960 u, mp = 1.007825 u, mn = 1.008665 u).",
        "answer": "Total energy required = 1.58 × 10²⁵ MeV ≈ 2.53 × 10¹² J",
        "explanation": "1. For one ₂₉Cu⁶³ atom (29 protons, 34 neutrons):\nMass of free nucleons = 29 * 1.007825 + 34 * 1.008665 = 29.226925 + 34.29461 = 63.521535 u.\nMass defect Δm = 63.521535 - 62.92960 = 0.591935 u.\nBinding energy per atom = 0.591935 * 931.5 MeV ≈ 551.39 MeV.\n2. Number of Cu atoms in 3.0 g:\nN = (3.0 / 63) * 6.022 × 10²³ = 2.868 × 10²² atoms.\n3. Total energy required = N * BE = (2.868 × 10²²) * (551.39 MeV) ≈ 1.58 × 10²⁵ MeV = 2.53 × 10¹² J."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Why do light nuclei not undergo nuclear fission and heavy nuclei not undergo nuclear fusion?",
        "answer": "Energy reasoning for fission and fusion limits",
        "explanation": "1. Light nuclei: Splitting a light nucleus would produce fragments with even lower binding energy per nucleon, which would require an input of energy rather than releasing it (energetically unfavorable).\n2. Heavy nuclei: Bringing two heavy positive nuclei together requires overcoming immense Coulomb repulsion due to large atomic numbers (Z ~ 80-90), and the resulting super-heavy nucleus would have lower BE/A, making fusion impossible."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Draw the graph showing the variation of binding energy per nucleon (BE/A) as a function of mass number A for 2 ≤ A ≤ 240.\n(b) State the main features of this curve.\n(c) Use the curve to explain:\n(i) the release of energy in nuclear fission,\n(ii) the release of energy in nuclear fusion.",
        "answer": "Complete analysis of Binding Energy per nucleon curve",
        "explanation": "Marking Scheme:\n(a) Graph (1.5 marks):\n- Clear axes (BE/A in MeV on y-axis from 0 to 10; mass number A on x-axis from 0 to 240).\n- Rapid initial rise with peaks for ⁴He, ¹²C, ¹⁶O; maximum at ⁵⁶Fe (~8.75 MeV); broad plateau around ~8.5 MeV (30 < A < 170); gradual drop to ~7.6 MeV for ²³⁸U.\n\n(b) Main Features (1.5 marks):\n1. BE/A is practically constant (~8.5 MeV/nucleon) over intermediate range 30 < A < 170 due to saturation of short-range nuclear forces.\n2. BE/A is lower for very light nuclei (A < 20) and for very heavy nuclei (A > 200).\n3. Iron-56 (⁵⁶Fe) has the highest BE/A (8.75 MeV/nucleon) and represents maximum nuclear stability.\n\n(c) Explanations (2 marks):\n(i) Nuclear Fission: A heavy nucleus (e.g. A = 240, BE/A ≈ 7.6 MeV) breaks into two medium fragments (A ≈ 120, BE/A ≈ 8.5 MeV). Nucleons become more tightly bound, gain ~0.9 MeV per nucleon, releasing roughly 240 * 0.9 ≈ 216 MeV of energy.\n(ii) Nuclear Fusion: Two very light nuclei (e.g. A ≤ 10, BE/A ≈ 1-2 MeV) fuse into a heavier nucleus (like ⁴He, BE/A ≈ 7.1 MeV). The binding energy per nucleon increases drastically, releasing huge energy per unit mass."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) What is a nuclear chain reaction? Explain controlled and uncontrolled chain reactions.\n(b) Describe with the help of a neat labelled schematic diagram the essential components of a nuclear power reactor:\n(i) Nuclear fuel,\n(ii) Moderator,\n(iii) Control rods,\n(iv) Coolant.",
        "answer": "Nuclear chain reactions and nuclear reactor components",
        "explanation": "Marking Scheme:\n(a) Chain Reaction (2 marks):\n- A self-sustaining fission sequence where neutrons released in one fission induce subsequent fissions in surrounding fissile nuclei.\n- Controlled Chain Reaction: Neutron multiplication factor k is strictly maintained at k = 1 (1 neutron per fission triggers the next). Energy is generated at a steady, manageable rate (used in nuclear power plants).\n- Uncontrolled Chain Reaction: k > 1 (multiplication factor exceeds unity). The number of fissions multiplies exponentially in microseconds, releasing catastrophic explosive energy (atomic bomb).\n\n(b) Reactor Components & Diagram (3 marks):\n- Diagram: Core containing fuel rods, control rods, moderator, surrounding reflector, thick biological shield (lead/concrete), coolant loop to heat exchanger and steam turbine.\n(i) Nuclear Fuel: Fissile material enriched with ²³⁵U (3-5%) or ²³⁹Pu encased in zirconium alloy rods.\n(ii) Moderator: Light nuclei (D2O, graphite) that thermalize fast neutrons via elastic collisions without absorbing them.\n(iii) Control Rods: Neutron-absorbing elements (boron, cadmium) moved in/out to regulate reaction rate and emergency shutdown.\n(iv) Coolant: Fluid (water, liquid sodium, CO2) circulating through the core to extract heat and transfer it to steam generators."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) Explain the proton-proton cycle of nuclear fusion occurring in stars with all balanced nuclear equations.\n(b) Write the net reaction and calculate the total energy released.\n(c) Why can fusion reactions not be easily sustained in terrestrial power plants?",
        "answer": "Proton-proton cycle, net reaction, and terrestrial confinement challenges",
        "explanation": "Marking Scheme:\n(a) Proton-Proton Cycle Reactions (2.5 marks):\n1. ₁H¹ + ₁H¹ -> ₁H² + e⁺ + ν_e + 0.42 MeV (occurs twice)\n2. e⁺ + e⁻ -> 2γ + 1.02 MeV (annihilation, occurs twice)\n3. ₁H² + ₁H¹ -> ₂He³ + γ + 5.49 MeV (occurs twice)\n4. ₂He³ + ₂He³ -> ₂He⁴ + 2 ₁H¹ + 12.86 MeV.\n\n(b) Net Reaction & Energy (1.5 marks):\n- Net reaction: 4 ₁H¹ + 2 e⁻ -> ₂He⁴ + 2 ν_e + 6 γ + 26.7 MeV.\n- Total energy released = 2(0.42) + 2(1.02) + 2(5.49) + 12.86 = 26.7 MeV.\n\n(c) Terrestrial Challenges (1 mark):\n- Requires sustained temperatures > 10⁸ K (plasma state) and high plasma densities maintained for sufficient confinement time (Lawson criterion). No solid material vessel can withstand these temperatures, requiring advanced magnetic confinement (Tokamaks) or inertial confinement (lasers)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Nuclear Power Generation\nNuclear reactors generate electricity from controlled nuclear fission of uranium-235. When a thermal neutron strikes a U-235 nucleus, it undergoes fission releasing roughly 200 MeV of energy and 2 to 3 fast neutrons. For a sustained chain reaction, the neutron multiplication factor k = (number of neutrons in current generation) / (number of neutrons in previous generation) must equal 1. If k < 1, the reaction dies down (sub-critical); if k > 1, it accelerates uncontrollably (super-critical).\n(i) What is the value of multiplication factor k in a commercial power reactor operating at steady full power?\n(ii) Name two substances used as moderators in thermal nuclear reactors.\n(iii) Calculate the number of fissions per second required to generate 1000 MW of thermal power (assume 200 MeV per fission).\n(iv) What is the function of the thick concrete shield around the reactor core?",
        "answer": "Solutions to Case Study on Nuclear Power Generation",
        "explanation": "(i) k = 1 (critical condition).\n(ii) Heavy water (D2O) and high-purity graphite (or ordinary light water).\n(iii) Energy per fission = 200 MeV = 200 × 10⁶ × 1.6 × 10⁻¹⁹ J = 3.2 × 10⁻¹¹ J.\nPower P = 1000 MW = 10⁹ W = 10⁹ J/s.\nNumber of fissions per second n = P / Energy = 10⁹ / (3.2 × 10⁻¹¹) = 3.125 × 10¹⁹ fissions/second.\n(iv) Biological Shielding: The heavy 2-meter thick high-density concrete and lead wall absorbs highly penetrating gamma radiation and stray neutrons, safeguarding plant operators and the external environment from lethal radiation exposure."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) Write the nuclear reaction for the fission of ²³⁵U by thermal neutrons yielding ⁵⁶Ba¹⁴¹ and ₃₆Kr⁹².\n(b) If the masses are: m(²³⁵U) = 235.0439 u, m(¹n) = 1.00866 u, m(¹⁴¹Ba) = 140.9144 u, m(⁹²Kr) = 91.9261 u, calculate the Q-value of the reaction in MeV.\n(c) What fraction of the original mass is converted into energy?",
        "answer": "(a) Reaction equation, (b) Q = 173.2 MeV, (c) 0.088%",
        "explanation": "(a) Equation: ₀n¹ + ₉₂U²³⁵ -> ₅₆Ba¹⁴¹ + ₃₆Kr⁹² + 3 ₀n¹ + Q.\n\n(b) Initial mass = m(²³⁵U) + m(¹n) = 235.0439 + 1.00866 = 236.05256 u.\nFinal mass = m(¹⁴¹Ba) + m(⁹²Kr) + 3 m(¹n) = 140.9144 + 91.9261 + 3(1.00866) = 232.8405 + 3.02598 = 235.86648 u.\nMass defect Δm = 236.05256 - 235.86648 = 0.18608 u.\nQ-value = Δm * 931.5 MeV = 0.18608 * 931.5 MeV ≈ 173.3 MeV.\n\n(c) Mass fraction converted = Δm / m_initial = 0.18608 / 236.05256 ≈ 7.88 × 10⁻⁴ ≈ 0.079% (~0.1%)."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) Derive the relationship between nuclear radius R and mass number A.\n(b) Compare the radii, surface areas, and volumes of two nuclei with mass numbers A1 = 8 and A2 = 64.\n(c) Find the ratio of their nuclear densities.",
        "answer": "Radii, area, volume comparisons, and density ratio 1 : 1",
        "explanation": "(a) Empirical formula from electron scattering: R = R₀ A^(1/3), where R₀ ≈ 1.2 fm.\n\n(b) Given A1 = 8, A2 = 64:\n1. Radii: R1 / R2 = (A1 / A2)^(1/3) = (8 / 64)^(1/3) = (1/8)^(1/3) = 1 / 2 = 1 : 2.\n2. Surface Areas: S1 / S2 = (R1 / R2)² = (1 / 2)² = 1 / 4 = 1 : 4.\n3. Volumes: V1 / V2 = (R1 / R2)³ = (1 / 2)³ = 1 / 8 = 1 : 8 (equals A1 / A2).\n\n(c) Nuclear density ratio: Since density is independent of A, ρ1 / ρ2 = 1 : 1."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "A 1000 MW nuclear reactor operates at 30% thermal efficiency. How much ²³⁵U is consumed per day? (Assume 200 MeV energy released per fission of ²³⁵U).",
        "answer": "Mass of U-235 consumed per day = 3.68 kg",
        "explanation": "Electrical output P_elec = 1000 MW = 10⁹ W.\nThermal efficiency η = 30% = 0.30.\nTotal thermal power required P_therm = P_elec / η = 10⁹ / 0.30 = (10/3) × 10⁹ W ≈ 3.333 × 10⁹ J/s.\nTotal energy required per day (t = 86400 s):\nE_total = P_therm * 86400 = (3.333 × 10⁹) * 86400 ≈ 2.88 × 10¹⁴ J.\nEnergy per fission = 200 MeV = 200 × 1.6 × 10⁻¹³ J = 3.2 × 10⁻¹¹ J.\nNumber of fissions per day N = E_total / (3.2 × 10⁻¹¹) = (2.88 × 10¹⁴) / (3.2 × 10⁻¹¹) = 9.0 × 10²⁴ fissions.\nNumber of moles = N / N_A = (9.0 × 10²⁴) / (6.022 × 10²³) ≈ 14.945 moles.\nMass of ²³⁵U consumed = Moles * Molar mass = 14.945 * 235 g ≈ 3512 g ≈ 3.51 kg (roughly 3.5 to 3.7 kg/day)."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) State the conservation laws that hold true in all nuclear reactions.\n(b) Complete the following nuclear reactions and determine the unknown particles X, Y, and Z:\n(i) ₇N¹⁴ + ₂He⁴ -> ₈O¹⁷ + X\n(ii) ₄Be⁹ + ₂He⁴ -> ₆C¹² + Y\n(iii) ₁₁Na²² -> ₁₀Ne²² + Z + ν",
        "answer": "Conservation laws and identification of X = ¹H, Y = ¹n, Z = e⁺",
        "explanation": "(a) Conservation Laws:\n1. Conservation of mass number (total number of nucleons A is conserved).\n2. Conservation of atomic number (total electric charge Z is conserved).\n3. Conservation of total relativistic energy (including mass defect).\n4. Conservation of linear momentum.\n5. Conservation of angular momentum and parity.\n\n(b) Unknown particles:\n(i) ₇N¹⁴ + ₂He⁴ -> ₈O¹⁷ + ₁H¹: Mass: 14 + 4 = 17 + 1; Charge: 7 + 2 = 8 + 1 => X is a proton (₁H¹ or p).\n(ii) ₄Be⁹ + ₂He⁴ -> ₆C¹² + ₀n¹: Mass: 9 + 4 = 12 + 1; Charge: 4 + 2 = 6 + 0 => Y is a neutron (₀n¹ or n).\n(iii) ₁₁Na²² -> ₁₀Ne²² + ₊₁e⁰ + ν: Mass: 22 = 22 + 0; Charge: 11 = 10 + 1 => Z is a positron (e⁺ or β⁺)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "Find the binding energy per nucleon of ₂₆Fe⁵⁶ nucleus. Given: m(⁵⁶Fe) = 55.934939 u, m(¹H) = 1.007825 u, m(n) = 1.008665 u.",
        "answer": "BE per nucleon = 8.79 MeV/nucleon",
        "explanation": "Z = 26, N = 56 - 26 = 30.\nMass of 26 protons = 26 * 1.007825 = 26.20345 u.\nMass of 30 neutrons = 30 * 1.008665 = 30.25995 u.\nTotal constituent mass = 26.20345 + 30.25995 = 56.46340 u.\nMass defect Δm = 56.46340 - 55.934939 = 0.528461 u.\nTotal Binding Energy BE = 0.528461 * 931.5 MeV ≈ 492.26 MeV.\nBinding energy per nucleon = BE / A = 492.26 / 56 ≈ 8.79 MeV/nucleon."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) Explain why nuclear forces are called exchange forces.\n(b) If two deuterium nuclei (²H) undergo complete fusion to form a helium nucleus (⁴He), calculate the energy released per unit mass in kg of deuterium fuel. Compare this with the energy per unit mass in uranium fission (~8 × 10¹³ J/kg). Given: BE(²H) = 2.22 MeV, BE(⁴He) = 28.30 MeV.",
        "answer": "Exchange force explanation and energy per kg calculation = 5.7 × 10¹⁴ J/kg",
        "explanation": "(a) According to Yukawa's meson theory, nuclear forces arise from the continuous, rapid exchange of virtual pi-mesons (pions: π⁺, π⁻, π⁰) between adjacent nucleons within the nucleus, analogous to molecular covalent bonds formed by shared electron pairs.\n\n(b) Fusion reaction: ²H + ²H -> ⁴He.\nInitial total BE = 2 * BE(²H) = 2 * 2.22 MeV = 4.44 MeV.\nFinal total BE = BE(⁴He) = 28.30 MeV.\nEnergy released per reaction Q = 28.30 - 4.44 = 23.86 MeV.\nMass of 2 deuterium nuclei = 2 * 2 u = 4 u = 4 * 1.66 × 10⁻²⁷ kg = 6.64 × 10⁻²⁷ kg.\nEnergy in Joules = 23.86 × 10⁶ × 1.6 × 10⁻¹⁹ J = 3.818 × 10⁻¹² J.\nEnergy per kg of deuterium fuel = Q / Mass = (3.818 × 10⁻¹² J) / (6.64 × 10⁻²⁷ kg) ≈ 5.75 × 10¹⁴ J/kg.\n\nComparison: Energy density of fusion (5.75 × 10¹⁴ J/kg) is roughly 7 times higher than that of uranium fission (0.8 × 10¹⁴ J/kg) and millions of times greater than fossil fuel combustion (~3 × 10⁷ J/kg)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 14,
      "unit_num": 9,
      "title": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      "unit_title": "Electronic Devices",
      "weightage_unit": "7 Marks"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In a pure semiconductor crystal at absolute zero temperature (0 K), the conduction band is:",
        "options": [
          "(a) completely filled",
          "(b) partially filled",
          "(c) completely empty",
          "(d) occupied by holes"
        ],
        "answer": "(c) completely empty",
        "explanation": "At absolute zero (0 K), no thermal energy is available to rupture covalent bonds. All valence electrons remain tightly bound in the valence band, leaving the conduction band completely empty. Thus, an intrinsic semiconductor behaves as a perfect insulator at 0 K."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "When a pentavalent impurity like Arsenic (As) is doped into pure Silicon, the resulting extrinsic semiconductor is:",
        "options": [
          "(a) n-type with electrons as majority carriers",
          "(b) p-type with holes as majority carriers",
          "(c) intrinsic with equal electrons and holes",
          "(d) negatively charged"
        ],
        "answer": "(a) n-type with electrons as majority carriers",
        "explanation": "A pentavalent donor atom contributes five valence electrons: four form covalent bonds with neighbouring silicon atoms, and the fifth is donated to the conduction band, making it an n-type semiconductor where electrons are majority carriers (ne >> nh). (Note that the crystal as a whole remains electrically neutral)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In a p-n junction diode under forward bias, the width of the depletion layer and the barrier height respectively:",
        "options": [
          "(a) decrease and decrease",
          "(b) increase and increase",
          "(c) increase and decrease",
          "(d) remain unchanged"
        ],
        "answer": "(a) decrease and decrease",
        "explanation": "In forward bias, the externally applied voltage opposes the built-in barrier potential. This drives majority carriers toward the junction, thinning the depletion layer and lowering the barrier height."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The output frequency of a full-wave rectifier supplied by an alternating input of 50 Hz is:",
        "options": [
          "(a) 50 Hz",
          "(b) 100 Hz",
          "(c) 25 Hz",
          "(d) 200 Hz"
        ],
        "answer": "(b) 100 Hz",
        "explanation": "A full-wave rectifier rectifies both half-cycles of the AC input in the same direction. Therefore, the ripple frequency of the pulsating DC output is twice the input AC frequency: f_out = 2 * f_in = 2 * 50 = 100 Hz."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The forbidden energy gap Eg for silicon (Si) and germanium (Ge) at room temperature is approximately:",
        "options": [
          "(a) 1.1 eV and 0.7 eV",
          "(b) 0.7 eV and 1.1 eV",
          "(c) 3.0 eV and 5.0 eV",
          "(d) 0 eV and 0 eV"
        ],
        "answer": "(a) 1.1 eV and 0.7 eV",
        "explanation": "At room temperature (300 K), the forbidden band gap of silicon is Eg ≈ 1.1 eV and for germanium is Eg ≈ 0.7 eV."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a semiconductor diode, reverse saturation current is primarily due to the drift of:",
        "options": [
          "(a) majority carriers",
          "(b) minority carriers",
          "(c) donor ions",
          "(d) acceptor ions"
        ],
        "answer": "(b) minority carriers",
        "explanation": "In reverse bias, the barrier height increases, completely blocking majority carriers. Thermally generated minority carriers (electrons in p-side, holes in n-side) are swept across the junction by the internal electric field, producing a tiny reverse saturation current (~μA for Ge, ~nA for Si)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "According to the Law of Mass Action in semiconductors in thermal equilibrium, the product of electron and hole concentrations satisfies:",
        "options": [
          "(a) ne * nh = ni²",
          "(b) ne + nh = ni",
          "(c) ne / nh = ni²",
          "(d) ne * nh = ni"
        ],
        "answer": "(a) ne * nh = ni²",
        "explanation": "Under thermal equilibrium conditions, the mass action law states that the product of majority and minority carrier concentrations is constant and equals the square of the intrinsic carrier concentration: ne * nh = ni²."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "A p-type semiconductor is:",
        "options": [
          "(a) positively charged",
          "(b) negatively charged",
          "(c) electrically neutral",
          "(d) positively charged at 0 K and neutral at 300 K"
        ],
        "answer": "(c) electrically neutral",
        "explanation": "Extrinsic semiconductors are strictly electrically neutral. Every trivalent dopant atom (like boron) is neutral before doping, and after accepting an electron becomes a negative ion matched by the positive hole created."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "In an unbiased p-n junction, the diffusion current is directed from:",
        "options": [
          "(a) p-side to n-side",
          "(b) n-side to p-side",
          "(c) both directions equally",
          "(d) neither side (zero)"
        ],
        "answer": "(a) p-side to n-side",
        "explanation": "Holes diffuse from their high concentration on the p-side to the n-side, and electrons diffuse from n to p. Both contribute to a net diffusion current directed from the p-side to the n-side."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The threshold (knee) voltage for a silicon p-n junction diode is approximately:",
        "options": [
          "(a) 0.2 V",
          "(b) 0.7 V",
          "(c) 1.5 V",
          "(d) 5.0 V"
        ],
        "answer": "(b) 0.7 V",
        "explanation": "For a silicon diode, forward current remains negligibly small until the forward bias overcomes the barrier potential of roughly 0.7 V (knee voltage), after which current rises exponentially."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The dynamic resistance rd of a semiconductor diode is defined as:",
        "options": [
          "(a) ΔV / ΔI",
          "(b) V / I",
          "(c) ΔI / ΔV",
          "(d) V * I"
        ],
        "answer": "(a) ΔV / ΔI",
        "explanation": "Dynamic (or AC) resistance is defined as the reciprocal of the slope of the forward V-I characteristic curve: rd = ΔV / ΔI."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A capacitor filter is connected in parallel with the load resistor in a rectifier circuit to:",
        "options": [
          "(a) reduce the AC ripple and smooth the DC output",
          "(b) step up the voltage",
          "(c) step down the current",
          "(d) increase the frequency"
        ],
        "answer": "(a) reduce the AC ripple and smooth the DC output",
        "explanation": "A capacitor filter charges to peak voltage during conducting pulses and slowly discharges through the load resistor between pulses, significantly reducing AC ripple and delivering a nearly constant DC output."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Carbon, Silicon, and Germanium all have four valence electrons each. At room temperature, the number of free conduction electrons is:",
        "options": [
          "(a) significant in all three",
          "(b) negligible in carbon, but significant in silicon and germanium",
          "(c) significant in carbon, but negligible in silicon and germanium",
          "(d) zero in all three"
        ],
        "answer": "(b) negligible in carbon, but significant in silicon and germanium",
        "explanation": "Carbon (diamond) has a huge forbidden band gap Eg ≈ 5.4 eV (an insulator at room temperature). Silicon (Eg ≈ 1.1 eV) and germanium (Eg ≈ 0.7 eV) have much smaller band gaps, allowing thermal excitation of electrons into the conduction band."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In a half-wave rectifier, if the AC input frequency is 60 Hz, the output ripple frequency is:",
        "options": [
          "(a) 30 Hz",
          "(b) 60 Hz",
          "(c) 120 Hz",
          "(d) 0 Hz"
        ],
        "answer": "(b) 60 Hz",
        "explanation": "A half-wave rectifier conducts only during positive half-cycles (one pulse per input cycle), so the output ripple frequency equals the input frequency: f_out = f_in = 60 Hz."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "To obtain a p-type silicon semiconductor, silicon should be doped with:",
        "options": [
          "(a) Phosphorus",
          "(b) Boron",
          "(c) Arsenic",
          "(d) Antimony"
        ],
        "answer": "(b) Boron",
        "explanation": "Boron is a trivalent impurity (Group 13) having 3 valence electrons, which creates hole vacancies in the silicon lattice, producing a p-type semiconductor. Phosphorus, arsenic, and antimony are pentavalent."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 Term-1",
        "question": "The donor energy level in an n-type semiconductor lies:",
        "options": [
          "(a) just below the conduction band",
          "(b) just above the valence band",
          "(c) in the middle of the forbidden gap",
          "(d) deep inside the valence band"
        ],
        "answer": "(a) just below the conduction band",
        "explanation": "The extra fifth valence electron of donor impurities requires very little thermal energy (~0.01 eV for Ge, ~0.05 eV for Si) to escape into the conduction band. Hence, the donor energy level Ed lies just below the bottom edge of the conduction band Ec."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "When a reverse bias is applied to a p-n junction diode, the barrier potential:",
        "options": [
          "(a) increases",
          "(b) decreases",
          "(c) becomes zero",
          "(d) remains constant"
        ],
        "answer": "(a) increases",
        "explanation": "In reverse bias, the external voltage is applied in the same direction as the built-in barrier field, raising the total effective barrier potential to (V₀ + V)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An ideal diode in forward bias and reverse bias acts respectively as:",
        "options": [
          "(a) closed switch (zero resistance) and open switch (infinite resistance)",
          "(b) open switch and closed switch",
          "(c) constant current source and constant voltage source",
          "(d) resistor of 100 Ω and 1000 Ω"
        ],
        "answer": "(a) closed switch (zero resistance) and open switch (infinite resistance)",
        "explanation": "An ideal diode offers zero resistance in forward bias (closed switch) and infinite resistance in reverse bias (open switch)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The maximum theoretical efficiency of a half-wave rectifier and full-wave rectifier are respectively:",
        "options": [
          "(a) 40.6% and 81.2%",
          "(b) 50% and 100%",
          "(c) 81.2% and 40.6%",
          "(d) 25% and 50%"
        ],
        "answer": "(a) 40.6% and 81.2%",
        "explanation": "Theoretical maximum rectification efficiencies are η_half = 40.6% and η_full = 81.2%."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The electrical conductivity of an intrinsic semiconductor increases with rise in temperature because:",
        "options": [
          "(a) relaxation time increases",
          "(b) charge carrier density increases exponentially",
          "(c) band gap widens",
          "(d) atoms vibrate less"
        ],
        "answer": "(b) charge carrier density increases exponentially",
        "explanation": "Thermal energy breaks covalent bonds, causing an exponential increase in intrinsic carrier concentrations (ni ∝ T^(3/2) exp(-Eg / 2kT)), vastly dominating over minor reductions in mobility."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "At equilibrium in an isolated unbiased p-n junction:",
        "options": [
          "(a) Diffusion current = Drift current",
          "(b) Diffusion current > Drift current",
          "(c) Drift current > Diffusion current",
          "(d) Both currents are zero"
        ],
        "answer": "(a) Diffusion current = Drift current",
        "explanation": "In electrostatic equilibrium with no external bias, the built-in electric field drives a minority-carrier drift current that exactly balances the majority-carrier diffusion current, yielding zero net current across the junction."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The acceptor energy level in a p-type semiconductor lies:",
        "options": [
          "(a) just above the valence band",
          "(b) just below the conduction band",
          "(c) in the middle of the band gap",
          "(d) inside the conduction band"
        ],
        "answer": "(a) just above the valence band",
        "explanation": "Acceptor atoms can easily capture electrons from the nearby valence band with slight thermal excitation (~0.01 to 0.05 eV). Thus, the acceptor level Ea lies just above the upper edge of the valence band Ev."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "A silicon diode has a reverse breakdown voltage of 50 V. If operated with 10 V reverse bias, the diode current will be approximately:",
        "options": [
          "(a) zero / nanoamperes (nA)",
          "(b) 10 A",
          "(c) 1 A",
          "(d) 10 mA"
        ],
        "answer": "(a) zero / nanoamperes (nA)",
        "explanation": "Below breakdown voltage, a silicon diode allows only an extremely tiny reverse saturation current due to minority carriers, typically in the nanoampere (nA) range."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The direction of the built-in internal electric field across the depletion region of an unbiased p-n junction is from:",
        "options": [
          "(a) n-region to p-region",
          "(b) p-region to n-region",
          "(c) anode to cathode",
          "(d) parallel to the junction plane"
        ],
        "answer": "(a) n-region to p-region",
        "explanation": "Uncompensated positive donor ions reside on the n-side and uncompensated negative acceptor ions reside on the p-side of the depletion layer. Consequently, the internal electric field is directed from the positive donor ions (n-side) towards the negative acceptor ions (p-side)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In a forward-biased p-n junction diode, when the applied voltage changes from 0.6 V to 0.7 V, the current increases from 10 mA to 30 mA. The dynamic resistance is:",
        "options": [
          "(a) 5 Ω",
          "(b) 10 Ω",
          "(c) 20 Ω",
          "(d) 50 Ω"
        ],
        "answer": "(a) 5 Ω",
        "explanation": "rd = ΔV / ΔI = (0.7 - 0.6 V) / (30 - 10 mA) = 0.1 V / (20 × 10⁻³ A) = 0.1 / 0.02 = 5 Ω."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): An n-type semiconductor carries zero net electrostatic charge (is electrically neutral).\nReason (R): The number of mobile conduction electrons equals the number of immobile positively charged donor ions plus the number of holes.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Doping introduces neutral atoms. In the crystal: total positive charge (holes + donor ions) equals total negative charge (conduction electrons)."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The width of the depletion layer decreases when a p-n junction is forward biased.\nReason (R): In forward bias, the applied electric field opposes the built-in junction electric field, pushing majority carriers towards the junction.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. The applied voltage counteracts the barrier, thinning the depletion region."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 Term-1",
        "question": "Assertion (A): The electrical resistance of an intrinsic semiconductor decreases with increasing temperature.\nReason (R): Higher temperatures supply sufficient thermal energy to rupture covalent bonds, generating additional electron-hole pairs.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Exponential growth in charge carrier concentration ni decreases resistivity."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 Term-1",
        "question": "Assertion (A): A full-wave rectifier has twice the output ripple frequency compared to a half-wave rectifier.\nReason (R): A full-wave rectifier inverts both the negative and positive half-cycles of the AC input, producing two output DC pulses per input AC period.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R explains A. Two pulses per period yield f_out = 2 * f_in."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Carbon and silicon belong to the same group of the periodic table, yet carbon is an electrical insulator while silicon is a semiconductor.\nReason (R): The forbidden energy gap for carbon is ~5.4 eV, whereas for silicon it is only ~1.1 eV.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains A. Thermal energy at room temperature (~0.026 eV) cannot bridge carbon's 5.4 eV gap, but easily bridges silicon's 1.1 eV gap."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (2 Marks)",
        "question": "Distinguish between intrinsic and extrinsic semiconductors on the basis of: (i) electrical conductivity at room temperature, (ii) carrier concentration.",
        "answer": "Comparison between intrinsic and extrinsic semiconductors",
        "explanation": "1. Electrical Conductivity:\n- Intrinsic: Very low at room temperature due to limited thermally generated electron-hole pairs.\n- Extrinsic: High and easily controllable by adjusting the doping concentration.\n2. Carrier Concentration:\n- Intrinsic: Electron concentration strictly equals hole concentration (ne = nh = ni).\n- Extrinsic: Unequal carrier concentrations: in n-type ne >> nh, in p-type nh >> ne."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (2 Marks)",
        "question": "Explain how a depletion layer and barrier potential are formed at an unbiased p-n junction.",
        "answer": "Formation of depletion layer and barrier potential",
        "explanation": "1. Depletion Layer: Upon joining p and n materials, majority holes diffuse from p to n and electrons diffuse from n to p across the junction. Recombining near the boundary, they leave behind uncompensated, immobile positive donor ions on the n-side and immobile negative acceptor ions on the p-side. This region depleted of mobile charge carriers is the depletion layer.\n2. Barrier Potential: The separated layer of positive and negative uncompensated ions creates an internal electric field directed from n to p, establishing a potential difference called the barrier potential V₀, which prevents further majority carrier diffusion."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 Marks)",
        "question": "Draw the circuit diagram of a half-wave rectifier using a p-n junction diode. Draw input and output waveforms and explain its working.",
        "answer": "Half-wave rectifier theory and waveforms",
        "explanation": "1. Working: AC voltage is applied across the primary of a step-down transformer. During the positive half-cycle of input AC, diode is forward-biased and conducts, producing a voltage drop across load resistor RL. During the negative half-cycle, diode is reverse-biased and blocks current, producing zero output.\n2. Waveforms: Input is sinusoidal AC; output consists of pulsating unidirectional DC pulses corresponding only to positive half-cycles.\n3. Output frequency = Input frequency (50 Hz)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (2 Marks)",
        "question": "Draw the energy band diagrams for: (i) an n-type semiconductor, (ii) a p-type semiconductor, showing the position of donor and acceptor energy levels.",
        "answer": "Energy band diagrams for n-type and p-type semiconductors",
        "explanation": "1. n-type: Conduction band (Ec) and Valence band (Ev) separated by band gap Eg. The discrete donor energy level Ed lies just below the bottom of the conduction band Ec (separated by only ~0.05 eV in Si).\n2. p-type: Conduction band (Ec) and Valence band (Ev). The discrete acceptor energy level Ea lies just above the top of the valence band Ev (separated by only ~0.05 eV in Si)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 Marks)",
        "question": "A p-n junction diode has V-I characteristics shown with forward knee voltage 0.7 V. Find the dynamic resistance of the diode when: (i) forward voltage changes from 0.7 V to 0.75 V causing current to change from 20 mA to 45 mA, (ii) reverse bias voltage is changed from 10 V to 20 V with constant reverse current 1 μA.",
        "answer": "(i) Forward dynamic resistance rd = 2.0 Ω, (ii) Reverse dynamic resistance = ∞ (very high)",
        "explanation": "(i) Forward bias dynamic resistance:\nrd = ΔV / ΔI = (0.75 - 0.70 V) / (45 - 20 mA) = 0.05 V / (25 × 10⁻³ A) = 50 mV / 25 mA = 2.0 Ω.\n(ii) Reverse bias dynamic resistance:\nΔI = 0 (constant reverse saturation current of 1 μA).\nrd_rev = ΔV / ΔI = (20 - 10 V) / 0 = 10 V / 0 = ∞ (practically several megaohms, ~10⁷ Ω)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (2 Marks)",
        "question": "Why is a semiconductor damaged by a strong electric current?",
        "answer": "Reason for semiconductor damage by high current",
        "explanation": "A high electric current generates substantial Joule heat (P = I² R). Semiconductors have negative temperature coefficients of resistance (resistance drops as temperature rises). Higher temperatures generate more carrier pairs, further lowering resistance and drawing even more current (thermal runaway). The excessive localized heat breaks all covalent bonds, permanently destroying the crystal lattice structure."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 Marks)",
        "question": "Explain with the help of energy band diagrams how conductors, semiconductors, and insulators are classified on the basis of their forbidden energy gap.",
        "answer": "Classification of solids via energy bands",
        "explanation": "1. Conductors (Metals): The valence band and conduction band overlap (Eg = 0) or the conduction band is partially filled. Electrons move freely into empty available states under negligible electric fields.\n2. Insulators: A very wide forbidden energy gap exists (Eg > 3 eV, e.g. Eg ≈ 5.4 eV for diamond). Valence band is completely full and conduction band is completely empty; thermal energy at room temperature cannot excite electrons across the gap.\n3. Semiconductors: Possess a narrow forbidden energy gap (Eg < 3 eV, e.g. 1.1 eV for Si, 0.7 eV for Ge). At 0 K they are insulators, but at room temperature thermal energy excites some electrons into the conduction band."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (2 Marks)",
        "question": "What is the function of a capacitor filter in a DC power supply? Draw the filtered output waveform.",
        "answer": "Capacitor filter function and waveform",
        "explanation": "1. Function: A large capacitor connected in parallel with the load resistor RL smooths the pulsating DC output from a rectifier. When voltage rises, the capacitor charges up to peak value Vm. When rectifier voltage falls below capacitor voltage, the diode ceases conducting, and the capacitor discharges slowly through RL, maintaining load voltage and drastically suppressing AC ripple.\n2. Waveform: Shows gentle, slight ripple peaks decaying slowly towards the next pulse, delivering an almost steady DC line."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 Marks)",
        "question": "Pure silicon at 300 K has equal electron and hole concentration of 1.5 × 10¹⁶ m⁻³. Doping by indium increases the hole concentration to 4.5 × 10²² m⁻³. Calculate the new electron concentration in the doped silicon.",
        "answer": "Electron concentration ne = 5.0 × 10⁹ m⁻³",
        "explanation": "From the Law of Mass Action in thermal equilibrium:\nne * nh = ni²\n=> ne = ni² / nh.\nGiven: ni = 1.5 × 10¹⁶ m⁻³, nh = 4.5 × 10²² m⁻³.\nne = (1.5 × 10¹⁶)² / (4.5 × 10²²) = (2.25 × 10³²) / (4.5 × 10²²) = 0.5 × 10¹⁰ = 5.0 × 10⁹ m⁻³.\n(Since nh >> ne, the material is strongly p-type)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (2 Marks)",
        "question": "Can we measure the potential barrier of a p-n junction by connecting a sensitive voltmeter across its terminals? Justify your answer.",
        "answer": "No, voltmeter cannot measure barrier potential",
        "explanation": "No. When a voltmeter is connected across the diode terminals, contact potentials are automatically established at the metal-semiconductor junctions. In an open circuit without external energy sources, the contact potentials at the leads exactly cancel the built-in barrier potential (net EMF around the closed circuit is zero, in accordance with the second law of thermodynamics). Hence, a voltmeter reads zero."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (5 Marks)",
        "question": "(a) Draw the complete circuit diagram of a full-wave center-tapped rectifier using two p-n junction diodes.\n(b) Explain its working principle with input and output waveforms.\n(c) State the role of a capacitor filter in smoothing the output.",
        "answer": "Full-wave rectifier circuit, working, waveforms, and filter role",
        "explanation": "Marking Scheme:\n(a) Circuit Diagram (2 marks):\n- Center-tapped step-down transformer, two diodes D1 and D2 connected to opposite secondary terminals, center-tap grounded through load resistor RL.\n\n(b) Working & Waveforms (2 marks):\n- Positive half-cycle: Secondary end A is positive relative to center-tap; end B is negative. Diode D1 is forward-biased and conducts; D2 is reverse-biased and blocks. Current flows through RL from top to bottom.\n- Negative half-cycle: End A is negative, end B is positive. Diode D2 is forward-biased and conducts; D1 is reverse-biased and blocks. Current again flows through RL in the same direction (top to bottom).\n- Hence, bidirectional AC input is converted into unidirectional pulsating DC output over the complete cycle.\n- Waveforms: Input AC sinusoid; output showing continuous positive DC pulses of frequency 2f_in.\n\n(c) Capacitor Filter Role (1 mark):\n- Connected in parallel with RL. Charges to peak voltage Vm during conduction pulses and discharges slowly through RL when rectifier voltage drops, dramatically reducing ripple and delivering steady DC."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (5 Marks)",
        "question": "(a) Explain the formation of depletion region and barrier potential in a p-n junction with suitable diagrams.\n(b) How does the width of the depletion layer change when the p-n junction is:\n(i) forward biased,\n(ii) reverse biased?\n(c) Draw typical V-I characteristics of a silicon diode in forward and reverse bias.",
        "answer": "p-n junction formation, bias dependence, and V-I characteristics",
        "explanation": "Marking Scheme:\n(a) Formation of Depletion Layer & Barrier (2 marks):\n- Diffusion of majority holes (p to n) and electrons (n to p) leaves immobile positive donor ions on n-side and negative acceptor ions on p-side.\n- The central region becomes depleted of free mobile carriers (depletion layer).\n- The charge separation creates an internal electric field directed from n to p, establishing a barrier potential V₀ (~0.7 V for Si) that stops further diffusion.\n\n(b) Bias Effects (1.5 marks):\n(i) Forward bias: Applied voltage opposes internal barrier, reducing total barrier to (V₀ - V), which narrows the depletion layer width and allows heavy majority carrier conduction.\n(ii) Reverse bias: Applied voltage aids the internal barrier, increasing total barrier to (V₀ + V), which widens the depletion layer and blocks majority carriers.\n\n(c) V-I Characteristic Graph (1.5 marks):\n- Forward quadrant: Current negligible until knee voltage (~0.7 V for Si), then rises exponentially (in mA).\n- Reverse quadrant: Very small, voltage-independent reverse saturation current (in μA/nA) until breakdown voltage V_br, where current increases sharply."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (5 Marks)",
        "question": "(a) What is doping? Differentiate between n-type and p-type semiconductors with respect to:\n(i) nature of impurity atoms added,\n(ii) majority and minority charge carriers,\n(iii) energy band diagram showing the impurity energy level.\n(b) If a pure silicon crystal has 5 × 10²⁸ atoms/m³ and is doped with 1 ppm of arsenic, calculate the concentration of majority and minority carriers (ni = 1.5 × 10¹⁶ m⁻³).",
        "answer": "Doping theory, comparison, and carrier concentration numerical",
        "explanation": "Marking Scheme:\n(a) Doping & Comparison (3 marks):\n- Doping: The deliberate addition of a desirable trace impurity to an intrinsic semiconductor in small controlled amounts (~ppm) to dramatically enhance its electrical conductivity.\n\nComparison Table:\nFeature | n-type | p-type\n---|---|---\nImpurity | Pentavalent (As, P, Sb) (Donors) | Trivalent (B, Al, In) (Acceptors)\nMajority carriers | Conduction electrons (ne >> nh) | Valence holes (nh >> ne)\nMinority carriers | Holes | Electrons\nImpurity Level | Donor level Ed just below Ec (~0.05 eV) | Acceptor level Ea just above Ev (~0.05 eV)\n\n(b) Numerical (2 marks):\n- Doping concentration Nd = 1 ppm = 10⁻⁶ * (5 × 10²⁸) = 5 × 10²² atoms/m³.\n- Since each donor atom provides one electron: Majority electron concentration ne ≈ Nd = 5 × 10²² m⁻³.\n- Minority hole concentration from Law of Mass Action: ne * nh = ni²\n  => nh = ni² / ne = (1.5 × 10¹⁶)² / (5 × 10²²) = (2.25 × 10³²) / (5 × 10²²) = 4.5 × 10⁹ m⁻³."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2021 (Case Study - 4 Marks)",
        "question": "Read the following passage and answer the questions:\nCase Study: Semiconductor Diodes in Power Supplies\nVirtually all consumer electronic equipment—from smartphones and laptops to LED televisions—require a steady direct current (DC) supply to operate their integrated circuits. However, electrical grid power is supplied as alternating current (AC) at 220 V, 50 Hz. Conversion of AC into DC is carried out by a DC power supply system consisting of a step-down transformer, a diode rectifier, a capacitor smoothing filter, and a voltage regulator.\n(i) Name the basic electronic property of a p-n junction diode that makes it suitable for rectification.\n(ii) Why is a full-wave rectifier preferred over a half-wave rectifier for electronic power supplies?\n(iii) What is the ripple frequency of a full-wave rectifier connected to a 220 V, 50 Hz AC mains?\n(iv) How does an increase in load resistance RL affect the ripple voltage across a capacitor filter?",
        "answer": "Solutions to Case Study on Diode Power Supplies",
        "explanation": "(i) Unidirectional conductivity: A diode conducts electric current easily in forward bias (low resistance) while offering virtually infinite resistance in reverse bias.\n(ii) Full-wave rectifiers have twice the efficiency (81.2% vs 40.6%), higher average DC output voltage, and produce smaller, higher-frequency ripple that is far easier to smooth with filtering capacitors.\n(iii) Ripple frequency = 2 * 50 Hz = 100 Hz.\n(iv) The discharge time constant is τ = RL * C. Increasing load resistance RL increases the discharge time constant, causing the capacitor to discharge more slowly between pulses, which reduces the output ripple voltage and improves output smoothness."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2020 (5 Marks)",
        "question": "(a) With the help of a neat circuit diagram, explain the working of a full-wave bridge rectifier using four diodes.\n(b) What are the advantages of a bridge rectifier over a center-tapped transformer rectifier?",
        "answer": "Bridge rectifier circuit, working, and advantages",
        "explanation": "(a) Bridge Rectifier Working:\n- Circuit consists of four diodes D1, D2, D3, D4 arranged in a bridge loop across the secondary of a normal step-down transformer.\n- Positive half-cycle: Terminal A is positive, B is negative. Diodes D1 and D3 are forward-biased and conduct in series with load RL, while D2 and D4 are reverse-biased. Current flows through RL from top to bottom.\n- Negative half-cycle: Terminal A is negative, B is positive. Diodes D2 and D4 are forward-biased and conduct in series with RL, while D1 and D3 are reverse-biased. Current again flows through RL from top to bottom.\n- Output is identical unidirectional full-wave rectified DC.\n\n(b) Advantages over Center-Tapped Rectifier:\n1. No bulky, expensive center-tapped transformer is required; a standard, compact two-terminal transformer is sufficient.\n2. Peak Inverse Voltage (PIV) rating per diode is only Vm (compared to 2Vm in a center-tapped circuit), allowing cheaper diodes with lower voltage breakdown ratings to be used."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2019 (5 Marks)",
        "question": "(a) In a pure semiconductor, the number of conduction electrons is 6 × 10¹⁸ m⁻³. How many holes are there in a sample of size 1 cm × 1 cm × 1 mm?\n(b) If this semiconductor is doped with indium in the ratio 1 : 10⁶, find the new hole and electron concentrations. (Atom density of host crystal = 6 × 10²⁸ m⁻³).",
        "answer": "(a) Total holes = 6 × 10¹¹ holes, (b) nh = 6 × 10²² m⁻³, ne = 6 × 10¹⁴ m⁻³",
        "explanation": "(a) In an intrinsic semiconductor, hole density equals electron density: nh = ne = 6 × 10¹⁸ m⁻³.\nVolume of sample = 1 cm * 1 cm * 0.1 cm = 0.1 cm³ = 0.1 × 10⁻⁶ m³ = 10⁻⁷ m³.\nTotal number of holes in sample = nh * Volume = (6 × 10¹⁸ m⁻³) * (10⁻⁷ m³) = 6 × 10¹¹ holes.\n\n(b) Doping with trivalent Indium creates a p-type semiconductor.\nAcceptor density Na = (1 / 10⁶) * (6 × 10²⁸ m⁻³) = 6 × 10²² m⁻³.\nNew majority hole concentration nh ≈ Na = 6 × 10²² m⁻³.\nFrom Mass Action Law: ne * nh = ni²\n=> ne = ni² / nh = (6 × 10¹⁸)² / (6 × 10²²) = (36 × 10³⁶) / (6 × 10²²) = 6 × 10¹⁴ m⁻³."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2018 (4 Marks)",
        "question": "Two diodes D1 and D2 each with forward resistance 20 Ω and infinite reverse resistance are connected in a circuit with a 10 V battery and two resistors of 30 Ω and 50 Ω. Diode D1 is forward-biased and D2 is reverse-biased. Calculate the current supplied by the battery.",
        "answer": "Current I = 0.10 A",
        "explanation": "Since D2 is reverse-biased, its branch acts as an open circuit (infinite resistance) and carries zero current.\nDiode D1 is forward-biased, offering forward resistance rd = 20 Ω.\nThe current flows through D1, the 30 Ω resistor, and the 50 Ω resistor in series.\nTotal resistance of the active circuit branch = rd + R1 + R2 = 20 Ω + 30 Ω + 50 Ω = 100 Ω.\nCurrent supplied by 10 V battery: I = V / R_total = 10 V / 100 Ω = 0.10 A."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2017 (5 Marks)",
        "question": "(a) Explain the electrical conduction mechanism in an intrinsic semiconductor.\n(b) Derive the expression for total electrical conductivity σ = e (ne μe + nh μh).\n(c) Why is the electrical mobility of electrons μe higher than that of holes μh in the same semiconductor?",
        "answer": "Intrinsic conduction, conductivity derivation, and mobility comparison",
        "explanation": "(a) Mechanism: At room temperature, thermal vibrations rupture covalent bonds, freeing electrons into the conduction band and leaving vacant states (holes) in the valence band. When an electric field E is applied, free electrons drift opposite to E, and valence electrons jump into adjacent holes (effectively causing holes to drift along E). Both contribute to net current in the same direction.\n\n(b) Conductivity Derivation:\nTotal current I = I_e + I_h.\nElectron current: I_e = ne e A v_e = ne e A (μe E).\nHole current: I_h = nh e A v_h = nh e A (μh E).\nTotal current: I = e A E (ne μe + nh μh).\nCurrent density J = I / A = e E (ne μe + nh μh).\nSince J = σ E by Ohm's Law:\nTotal electrical conductivity σ = e (ne μe + nh μh).\n\n(c) Mobility Comparison: Conduction electrons move freely in the conduction band through empty states with minimal scattering. In contrast, holes move by the hopping of bound valence electrons between adjacent covalent bonds, experiencing much higher lattice resistance. Thus, electron mobility is significantly higher than hole mobility (μe ≈ 2 to 3 times μh)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2016 (4 Marks)",
        "question": "For a silicon p-n junction diode, the current is 10 mA at forward voltage 0.65 V and rises to 50 mA at 0.70 V. Calculate:\n(i) the change in voltage ΔV,\n(ii) the change in current ΔI,\n(iii) the dynamic resistance rd,\n(iv) the static resistance at V = 0.70 V.",
        "answer": "(i) ΔV = 0.05 V, (ii) ΔI = 40 mA, (iii) rd = 1.25 Ω, (iv) R_static = 14 Ω",
        "explanation": "(i) ΔV = 0.70 V - 0.65 V = 0.05 V.\n(ii) ΔI = 50 mA - 10 mA = 40 mA = 0.04 A.\n(iii) Dynamic resistance rd = ΔV / ΔI = 0.05 V / 0.04 A = 1.25 Ω.\n(iv) Static (DC) resistance at 0.70 V: R_static = V / I = 0.70 V / (50 × 10⁻³ A) = 700 / 50 = 14 Ω."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2015 (5 Marks)",
        "question": "(a) State what happens to the electrical resistance of:\n(i) a pure metal (copper),\n(ii) a semiconductor (silicon),\nas temperature increases from 0 K to 300 K. Explain the physical mechanism in each case.\n(b) A p-n junction diode is connected to an AC signal generator. Can it be used to produce alternating sound waves? Explain.",
        "answer": "Temperature effects on metal vs semiconductor and diode analysis",
        "explanation": "(a) Temperature Effects:\n(i) Pure Metal (Copper): Resistance increases with temperature. In metals, carrier density n is high and constant (~10²⁹ m⁻³). As temperature rises, lattice vibrations increase, causing more frequent collisions and reducing relaxation time τ. Since R ∝ 1/τ, resistance increases.\n(ii) Semiconductor (Silicon): Resistance decreases with temperature. At 0 K, all covalent bonds are intact and silicon is an insulator (R = ∞). As temperature rises to 300 K, thermal agitation breaks covalent bonds, causing an exponential increase in free carrier density ni, which heavily outweighs the slight decrease in relaxation time. Since R ∝ 1/n, resistance drops sharply.\n\n(b) Diode Sound Output: A diode conducts only in one direction. Connecting it directly to an AC signal rectifies the waveform into unidirectional pulses. To produce sound waves, these pulses must drive an acoustic transducer (like a loudspeaker coil). However, the diode alone cannot generate alternating acoustic compression and rarefaction without a full driving amplifier."
      }
    ]
  }
];
