// =========================================================
// UNITS AND MEASUREMENTS — question bank
// Sourced from Vibrant Academy "Unit and Dimensions" module
// (Exercise-I and Exercise-II). Every question below was
// independently solved/verified using dimensional analysis
// and vector algebra, then cross-checked against the source
// answer key. Add more questions below in the same format —
// engine picks 25 at random each run.
// =========================================================

const unitsQuestionBank = [
  // ---------- Exercise-I: Unit and Dimensions ----------
  {
    question: "Choose the pair that does NOT have the same dimensions:",
    answers: [
      { text: "Pressure × Volume, and Work done", correct: false },
      { text: "Force × Time, and Change in momentum", correct: false },
      { text: "Kilocalorie, and Joule", correct: false },
      { text: "Angle, and Mole", correct: true },
    ],
  },
  {
    question: "Which of the following can be a set of fundamental quantities?",
    answers: [
      { text: "Length, velocity, time", correct: false },
      { text: "Momentum, mass, velocity", correct: false },
      { text: "Force, mass, velocity", correct: true },
      { text: "Momentum, time, frequency", correct: false },
    ],
  },
  {
    question: "In a certain system of units, 1 unit of time is 5 sec, 1 unit of mass is 20 kg, and 1 unit of length is 10 m. In this system, one unit of power corresponds to:",
    answers: [
      { text: "16 watts", correct: true },
      { text: "1/16 watts", correct: false },
      { text: "25 watts", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "The pressure of 10⁶ dyne/cm² is equivalent to:",
    answers: [
      { text: "10⁵ N/m²", correct: true },
      { text: "10⁶ N/m²", correct: false },
      { text: "10⁷ N/m²", correct: false },
      { text: "10⁸ N/m²", correct: false },
    ],
  },
  {
    question: "The time dependence of a physical quantity p is given by p = p₀e⁻ᵅᵗ², where α is a constant and t is time. The constant α:",
    answers: [
      { text: "Is dimensionless", correct: false },
      { text: "Has dimensions T⁻²", correct: true },
      { text: "Has dimensions T²", correct: false },
      { text: "Has the same dimensions as p", correct: false },
    ],
  },
  {
    question: "Speed of gas molecules is given by v = √(3RT/M), where R is the universal gas constant and T is temperature. The dimensions of M are:",
    answers: [
      { text: "M¹L⁰T⁰", correct: false },
      { text: "M¹K⁻¹", correct: false },
      { text: "M¹L⁻¹", correct: false },
      { text: "M¹mol⁻¹", correct: true },
    ],
  },
  {
    question: "Statement-1: Method of dimensions cannot tell whether an equation is correct.\nStatement-2: A dimensionally incorrect equation may be correct.",
    answers: [
      { text: "Statement-1 is true, statement-2 is true, and statement-2 is the correct explanation of statement-1", correct: false },
      { text: "Statement-1 is true, statement-2 is true, but statement-2 is NOT the correct explanation of statement-1", correct: false },
      { text: "Statement-1 is true, statement-2 is false", correct: true },
      { text: "Statement-1 is false, statement-2 is true", correct: false },
    ],
  },

  // ---------- Exercise-I: Vectors ----------
  {
    question: "Statement-1: Unit vector has a unit, though its magnitude is one.\nStatement-2: A unit vector is obtained by dividing a vector by its own magnitude.",
    answers: [
      { text: "Statement-1 is true, statement-2 is true, and statement-2 is the correct explanation of statement-1", correct: false },
      { text: "Statement-1 is true, statement-2 is true, but statement-2 is NOT the correct explanation of statement-1", correct: false },
      { text: "Statement-1 is true, statement-2 is false", correct: false },
      { text: "Statement-1 is false, statement-2 is true", correct: true },
    ],
  },
  {
    question: "Let A = î+ĵ+k̂, B = aî−ĵ−k̂, and C = î+ĵ+bk̂. Given A⊥B and A⊥C, find the angle between B and C.",
    answers: [
      { text: "60°", correct: true },
      { text: "90°", correct: false },
      { text: "120°", correct: false },
      { text: "30°", correct: false },
    ],
  },
  {
    question: "If A·B = C·B, which of the following can NOT be a possible case?",
    answers: [
      { text: "A = C", correct: false },
      { text: "Angle between A and B is 30°, angle between B and C is 150°, all three vectors of equal magnitude", correct: true },
      { text: "B is a null vector", correct: false },
      { text: "A, B, and C are along the x, y, and z axes respectively", correct: false },
    ],
  },
  {
    question: "Statement-1: When two non-parallel forces F₁ and F₂ act on a body, the magnitude of the resultant force is less than the sum of F₁ and F₂.\nStatement-2: In a triangle, any side is less than the sum of the other two sides.",
    answers: [
      { text: "Statement-1 is true, statement-2 is true, and statement-2 is the correct explanation of statement-1", correct: true },
      { text: "Statement-1 is true, statement-2 is true, but statement-2 is NOT the correct explanation of statement-1", correct: false },
      { text: "Statement-1 is false, statement-2 is true", correct: false },
      { text: "Statement-1 is true, statement-2 is false", correct: false },
    ],
  },
  {
    question: "Let u be a constant vector and v be a vector of constant magnitude such that |v| = 1/2|u| and |u| ≠ 0. The maximum possible angle between u and (u + v) is:",
    answers: [
      { text: "60°", correct: false },
      { text: "120°", correct: false },
      { text: "30°", correct: true },
      { text: "150°", correct: false },
    ],
  },
  {
    question: "A man rows a boat with a speed of 18 km/hr in the northwest direction. The shoreline makes an angle of 15° south of west. Find the component of the boat's velocity along the shoreline.",
    answers: [
      { text: "9 km/hr", correct: true },
      { text: "18(√3/2) km/hr", correct: false },
      { text: "18 cos15° km/hr", correct: false },
      { text: "18 cos75° km/hr", correct: false },
    ],
  },
  {
    question: "A bird moves from point (1, −2) to (4, 2). If the speed of the bird is 10 m/sec, the velocity vector of the bird is:",
    answers: [
      { text: "5(î−2ĵ)", correct: false },
      { text: "5(4î+2ĵ)", correct: false },
      { text: "0.6î + 0.8ĵ", correct: false },
      { text: "6î + 8ĵ", correct: true },
    ],
  },
  {
    question: "Two forces whose magnitudes are in the ratio 3:5 give a resultant of 28 N. If the angle between them is 60°, find the magnitude of the stronger force.",
    answers: [
      { text: "15 N", correct: false },
      { text: "12 N", correct: false },
      { text: "20 N", correct: true },
      { text: "18 N", correct: false },
    ],
  },
  {
    question: "If the angle between the unit vectors â and b̂ is 60°, then |â − b̂| is:",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "4", correct: false },
    ],
  },

  // ---------- Exercise-I: Basic Maths ----------
  {
    question: "If y represents distance and x represents time, the dimensions of d²y/dx² are:",
    answers: [
      { text: "L²T⁻²", correct: false },
      { text: "LT⁻¹", correct: false },
      { text: "LT⁻²", correct: true },
      { text: "L²T⁻¹", correct: false },
    ],
  },
  {
    question: "For a particle moving in a straight line, position at time t is x = t³ − 6t² + 3t + 3. What is the velocity of the particle when its acceleration is zero?",
    answers: [
      { text: "−9 ms⁻¹", correct: true },
      { text: "−12 ms⁻¹", correct: false },
      { text: "3 ms⁻¹", correct: false },
      { text: "42 ms⁻¹", correct: false },
    ],
  },

  // ---------- Exercise-II: Unit and Dimensions (JEE Main PYQs) ----------
  {
    question: "If velocity [V], time [T], and force [F] are chosen as base quantities, the dimensions of mass are:",
    answers: [
      { text: "[F T² V]", correct: false },
      { text: "[F T V⁻¹]", correct: true },
      { text: "[F T⁻¹ V⁻¹]", correct: false },
      { text: "[F V T⁻¹]", correct: false },
    ],
  },
  {
    question: "If time (t), velocity (v), and angular momentum (ℓ) are taken as fundamental units, the dimension of mass (m) in terms of t, v, and ℓ is:",
    answers: [
      { text: "[t⁻² v⁻¹ ℓ¹]", correct: false },
      { text: "[t⁻¹ v¹ ℓ⁻²]", correct: false },
      { text: "[t¹ v² ℓ⁻¹]", correct: false },
      { text: "[t⁻¹ v⁻² ℓ¹]", correct: true },
    ],
  },
  {
    question: "The force is given in terms of time t and displacement x by F = A cos(Bx) + C sin(Dt). The dimensional formula of AD/B is:",
    answers: [
      { text: "[M² L² T⁻³]", correct: false },
      { text: "[M¹ L¹ T⁻²]", correct: false },
      { text: "[M⁰ L T⁻¹]", correct: false },
      { text: "[M L² T⁻³]", correct: true },
    ],
  },
  {
    question: "In the Van der Waals equation (P + a/V²)(V − b) = RT, the ratio a/b is dimensionally equal to:",
    answers: [
      { text: "P/V", correct: false },
      { text: "V/P", correct: false },
      { text: "PV", correct: true },
      { text: "PV³", correct: false },
    ],
  },
  {
    question: "The SI unit of a physical quantity is pascal-second. The dimensional formula of this quantity is:",
    answers: [
      { text: "[ML⁻¹T⁻¹]", correct: true },
      { text: "[ML⁻¹T⁻²]", correct: false },
      { text: "[ML²T⁻¹]", correct: false },
      { text: "[M⁻¹L³T⁰]", correct: false },
    ],
  },
  {
    question: "Velocity (v) and acceleration (a) in two systems of units 1 and 2 are related as v₂ = (n/m²)v₁ and a₂ = a₁/(mn) respectively, where m and n are constants. The relations for distance and time in the two systems are:",
    answers: [
      { text: "L₁ = (n³/m³)L₂ and T₁ = (n²/m)T₂", correct: true },
      { text: "L₁ = (n⁴/m²)L₂ and T₁ = (n²/m)T₂", correct: false },
      { text: "L₂ = (n⁴/m²)L₁ and T₁ = (n⁴/m²)T₂", correct: false },
      { text: "T₁ = (n⁴/m²)L₁L₂", correct: false },
    ],
  },
  {
    question: "If the velocity of light c, gravitational constant G, and Planck's constant h are chosen as fundamental quantities, the dimension of mass in the new system is:",
    answers: [
      { text: "[h¹ᐟ²c¹ᐟ²G⁻¹ᐟ²]", correct: true },
      { text: "[h⁻¹ᐟ²c¹ᐟ²G¹ᐟ²]", correct: false },
      { text: "[h¹c¹G⁻¹]", correct: false },
      { text: "[h¹ᐟ²c⁻¹ᐟ²G¹]", correct: false },
    ],
  },
  {
    question: "The speed of a wave produced in water is given by v = λᵃgᵇρᶜ, where λ, g, and ρ are wavelength, acceleration due to gravity, and density of water respectively. The values of a, b, and c respectively are:",
    answers: [
      { text: "1, −1, 0", correct: false },
      { text: "1/2, 1/2, 0", correct: true },
      { text: "1, 1, 0", correct: false },
      { text: "1/2, 0, 1/2", correct: false },
    ],
  },
  {
    question: "In the equation (X + a/Y²)(Y − b) = RT, X is pressure, Y is volume, R is the universal gas constant, and T is temperature. The physical quantity equivalent to the ratio a/b is:",
    answers: [
      { text: "Energy", correct: true },
      { text: "Pressure gradient", correct: false },
      { text: "Coefficient of viscosity", correct: false },
      { text: "Impulse", correct: false },
    ],
  },
  {
    question: "If force (F), velocity (V), and time (T) are considered fundamental physical quantities, the dimensional formula of density will be:",
    answers: [
      { text: "[F² V⁻² T⁶]", correct: false },
      { text: "[F V⁴ T⁻⁶]", correct: false },
      { text: "[F V⁻² T²]", correct: false },
      { text: "[F V⁻⁴ T⁻²]", correct: true },
    ],
  },
  {
    question: "Statement I: Astronomical Unit (Au), Parsec (Pc), and Light Year (ly) are units for measuring astronomical distances.\nStatement II: Au < Parsec (Pc) < ly.",
    answers: [
      { text: "Both statements I and II are correct", correct: false },
      { text: "Statement I is correct but statement II is incorrect", correct: true },
      { text: "Both statements I and II are incorrect", correct: false },
      { text: "Statement I is incorrect but statement II is correct", correct: false },
    ],
  },
  {
    question: "Two physical quantities A and B are related as E = (B − x²)/(At), where E, x, and t have dimensions of energy, length, and time respectively. The dimension of AB is:",
    answers: [
      { text: "L²M⁻¹T¹", correct: true },
      { text: "L⁻²M¹T⁰", correct: false },
      { text: "L⁰M⁻¹T¹", correct: false },
      { text: "L⁻²M⁻¹T¹", correct: false },
    ],
  },
  {
    question: "If mass is written as m = k·cᵖ·G⁻¹ᐟ²·h¹ᐟ² (k is a dimensionless constant), the value of p is:",
    answers: [
      { text: "1/3", correct: false },
      { text: "−1/3", correct: false },
      { text: "2", correct: false },
      { text: "1/2", correct: true },
    ],
  },
  {
    question: "A force is represented by F = ax² + bt¹ᐟ², where x is distance and t is time. The dimensions of b²/a are:",
    answers: [
      { text: "[ML⁻¹T⁻¹]", correct: false },
      { text: "[ML²T⁻³]", correct: false },
      { text: "[ML³T⁻³]", correct: true },
      { text: "[MLT⁻²]", correct: false },
    ],
  },
  {
    question: "The equation of state of a real gas is (P + a/V²)(V − b) = RT. The dimensions of a/b² are similar to that of:",
    answers: [
      { text: "P", correct: true },
      { text: "R", correct: false },
      { text: "PV", correct: false },
      { text: "RT", correct: false },
    ],
  },
  {
    question: "The position of a particle moving on the x-axis is given by x(t) = A sin(t) + B cos²(t) + Ct² + D, where t is time. The dimension of ABC/D is:",
    answers: [
      { text: "L", correct: false },
      { text: "L³T⁻²", correct: false },
      { text: "L²T⁻²", correct: true },
      { text: "L²", correct: false },
    ],
  },
  {
    question: "The expression v = At² + Bt/(C+t) shows the variation of velocity (v) with time (t). The dimension of ABC is:",
    answers: [
      { text: "[M⁰L²T⁻³]", correct: true },
      { text: "[M⁰L¹T⁻³]", correct: false },
      { text: "[M⁰L¹T⁻²]", correct: false },
      { text: "[M⁰L²T⁻²]", correct: false },
    ],
  },
  {
    question: "The pair of physical quantities NOT having the same dimensions is:",
    answers: [
      { text: "Torque and energy", correct: false },
      { text: "Surface tension and impulse", correct: true },
      { text: "Angular momentum and Planck's constant", correct: false },
      { text: "Pressure and Young's modulus", correct: false },
    ],
  },
  {
    question: "Given a charge q, current I, and permeability of vacuum μ₀, which of the following has the dimension of momentum?",
    answers: [
      { text: "qI/μ₀", correct: false },
      { text: "q·μ₀·I", correct: true },
      { text: "q²·μ₀·I", correct: false },
      { text: "qμ₀/I", correct: false },
    ],
  },
  {
    question: "For the real gas equation (P + a/V²)(V − b) = RT, the dimension of a/b² is equivalent to that of:",
    answers: [
      { text: "Planck's constant", correct: false },
      { text: "Compressibility", correct: false },
      { text: "Strain", correct: false },
      { text: "Energy density", correct: true },
    ],
  },
  {
    question: "The dimension of √(μ₀/ε₀) (μ₀ = vacuum permeability, ε₀ = vacuum permittivity) is equal to that of:",
    answers: [
      { text: "Voltage", correct: false },
      { text: "Capacitance", correct: false },
      { text: "Inductance", correct: false },
      { text: "Resistance", correct: true },
    ],
  },

  // ---------- Exercise-II: Vectors (JEE Main PYQs) ----------
  {
    question: "In a regular octagon ABCDEFGH of equal sides, what is the sum of AB+AC+AD+AE+AF+AG+AH, if AO = 2î+3ĵ−4k̂ (O is the center)?",
    answers: [
      { text: "−16î − 24ĵ + 32k̂", correct: false },
      { text: "16î − 24ĵ + 32k̂", correct: false },
      { text: "16î + 24ĵ − 32k̂", correct: true },
      { text: "16î + 24ĵ + 32k̂", correct: false },
    ],
  },
  {
    question: "What is the projection of vector A = î+ĵ+k̂ on vector B = î+ĵ?",
    answers: [
      { text: "√2(î+ĵ)", correct: false },
      { text: "(î+ĵ)", correct: true },
      { text: "√2(î+ĵ+k̂)", correct: false },
      { text: "2(î+ĵ+k̂)", correct: false },
    ],
  },
  {
    question: "Two vectors X and Y have equal magnitude. The magnitude of (X−Y) is n times the magnitude of (X+Y). The angle between X and Y is:",
    answers: [
      { text: "cos⁻¹[(n²+1)/(n²−1)]", correct: false },
      { text: "cos⁻¹[−(n²+1)/(n²−1)]", correct: false },
      { text: "cos⁻¹[(n²−1)/(n²+1)]", correct: false },
      { text: "cos⁻¹[(1−n²)/(1+n²)]", correct: true },
    ],
  },
  {
    question: "Two vectors P and Q have equal magnitudes. If the magnitude of (P+Q) is n times the magnitude of (P−Q), the angle between P and Q is:",
    answers: [
      { text: "cos⁻¹[(n−1)/(n+1)]", correct: false },
      { text: "sin⁻¹[(n−1)/(n+1)]", correct: false },
      { text: "cos⁻¹[(n²−1)/(n²+1)]", correct: true },
      { text: "sin⁻¹[(n²−1)/(n²+1)]", correct: false },
    ],
  },
  {
    question: "Two vectors A and B have equal magnitude. If the magnitude of (A+B) is equal to two times the magnitude of (A−B), the angle between A and B is:",
    answers: [
      { text: "sin⁻¹(3/5)", correct: false },
      { text: "sin⁻¹(1/3)", correct: false },
      { text: "cos⁻¹(3/5)", correct: true },
      { text: "cos⁻¹(1/3)", correct: false },
    ],
  },
  {
    question: "Which of the following relations is true for two unit vectors â and b̂ making an angle θ with each other?",
    answers: [
      { text: "|Â+B̂| = |Â−B̂|·tan(θ/2)", correct: false },
      { text: "|Â−B̂| = |Â+B̂|·tan(θ/2)", correct: true },
      { text: "|Â+B̂| = |Â−B̂|·cos(θ/2)", correct: false },
      { text: "|Â−B̂| = |Â+B̂|·cos(θ/2)", correct: false },
    ],
  },
  {
    question: "If vectors P = î+2mĵ+mk̂ and Q = 4î−2ĵ+mk̂ are perpendicular to each other, the value of m is:",
    answers: [
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "−1", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Two forces having magnitudes A and A/2 are perpendicular to each other. The magnitude of their resultant is:",
    answers: [
      { text: "√5·A/4", correct: false },
      { text: "√5·A²/2", correct: false },
      { text: "√5·A/2", correct: true },
      { text: "5A/2", correct: false },
    ],
  },
  {
    question: "A vector in the x-y plane makes an angle of 30° with the y-axis. The magnitude of its y-component is 2√3. The magnitude of the x-component is:",
    answers: [
      { text: "6", correct: false },
      { text: "1", correct: false },
      { text: "√3", correct: false },
      { text: "2", correct: true },
    ],
  },
  {
    question: "If A − B = 2ĵ, where A = 2î+3ĵ+2k̂, the magnitude of vector B is:",
    answers: [
      { text: "√6", correct: false },
      { text: "√5", correct: false },
      { text: "3", correct: true },
      { text: "√13", correct: false },
    ],
  },
  {
    question: "If two vectors A and B have equal magnitude R and are inclined at angle θ, then:",
    answers: [
      { text: "|A+B| = 2R sin(θ/2)", correct: false },
      { text: "|A+B| = 2R cos(θ/2)", correct: true },
      { text: "|A−B| = 2R cos(θ/2)", correct: false },
      { text: "|A−B| = √2 R sin(θ/2)", correct: false },
    ],
  },

  // ---------- Exercise-II: Basic Maths ----------
  {
    question: "The distance of the Sun from Earth is 1.5×10¹¹ m and its angular diameter is 2000″ (arcseconds) as observed from Earth. The diameter of the Sun is:",
    answers: [
      { text: "2.45×10¹⁰ m", correct: false },
      { text: "1.45×10¹⁰ m", correct: false },
      { text: "1.45×10⁹ m", correct: true },
      { text: "0.14×10⁹ m", correct: false },
    ],
  },
];

// Kick off the quiz using the shared engine
initQuiz({
  chapterTitle: "Units and Measurements",
  questions: unitsQuestionBank,
  questionCount: 25,
});