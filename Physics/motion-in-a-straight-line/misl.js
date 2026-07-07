// =========================================================
// MOTION IN A STRAIGHT LINE — question bank
// Sourced from Arjuna JEE 2024 "Motion in a straight line (PYQ)"
// sheet. Every question below was independently re-solved using
// kinematics equations and cross-checked against the source
// answer key. Add more questions below in the same format —
// engine picks 25 at random each run.
// =========================================================

const mislQuestionBank = [
  {
    question: "A particle is moving with speed v = b√x along the positive x-axis. Calculate the speed of the particle at time t = τ (assume the particle is at the origin at t = 0).",
    answers: [
      { text: "b²τ/4", correct: false },
      { text: "b²τ/2", correct: true },
      { text: "b²τ", correct: false },
      { text: "b²τ/√2", correct: false },
    ],
  },
  {
    question: "In 1.0 s, a particle goes from point A to point B, moving in a semicircle of radius 1.0 m. The magnitude of the average velocity is:",
    answers: [
      { text: "3.14 m/s", correct: false },
      { text: "2.0 m/s", correct: true },
      { text: "1.0 m/s", correct: false },
      { text: "Zero", correct: false },
    ],
  },
  {
    question: "A particle is moving eastwards with a velocity of 5 m/s. In 10 s the velocity changes to 5 m/s northwards. The average acceleration in this time is:",
    answers: [
      { text: "Zero", correct: false },
      { text: "1/√2 m/s² towards north-west", correct: true },
      { text: "1/√2 m/s² towards north-east", correct: false },
      { text: "1/2 m/s² towards north", correct: false },
    ],
  },
  {
    question: "A bullet of mass 20 g has an initial speed of 1 ms⁻¹ just before it starts penetrating a mud wall of thickness 20 cm. If the wall offers a mean resistance of 2.5×10⁻² N, the speed of the bullet after emerging from the other side of the wall is close to:",
    answers: [
      { text: "0.1 ms⁻¹", correct: false },
      { text: "0.7 ms⁻¹", correct: true },
      { text: "0.3 ms⁻¹", correct: false },
      { text: "0.4 ms⁻¹", correct: false },
    ],
  },
  {
    question: "The position of a particle as a function of time t is given by x(t) = at + bt² − ct³, where a, b, and c are constants. When the particle attains zero acceleration, its velocity will be:",
    answers: [
      { text: "a + b²/4c", correct: false },
      { text: "a + b²/3c", correct: true },
      { text: "a + b²/c", correct: false },
      { text: "a + b²/2c", correct: false },
    ],
  },
  {
    question: "A body starts from rest at t = 0. Its acceleration-time graph is a straight line, starting at 10 m/s² at t = 0 and decreasing linearly to 0 m/s² at t = 11 s. The maximum velocity attained by the body is:",
    answers: [
      { text: "110 m/s", correct: false },
      { text: "55 m/s", correct: true },
      { text: "650 m/s", correct: false },
      { text: "550 m/s", correct: false },
    ],
  },
  {
    question: "Train A and Train B run on parallel tracks in opposite directions with speeds of 36 km/hr and 72 km/hr respectively. A person walks inside Train A, opposite to its motion, at 1.8 km/hr. The speed of this person as observed from Train B will be close to (neglect the distance between the tracks):",
    answers: [
      { text: "29.5 ms⁻¹", correct: true },
      { text: "28.5 ms⁻¹", correct: false },
      { text: "31.5 ms⁻¹", correct: false },
      { text: "30.5 ms⁻¹", correct: false },
    ],
  },
  {
    question: "A car is standing 200 m behind a bus, both at rest. Both start moving at the same instant, the bus with acceleration 2 m/s² and the car with acceleration 4 m/s². The car will catch up with the bus after a time of:",
    answers: [
      { text: "√110 s", correct: false },
      { text: "√120 s", correct: false },
      { text: "10√2 s", correct: true },
      { text: "15 s", correct: false },
    ],
  },
  {
    question: "A helicopter rises from rest on the ground vertically upwards with a constant acceleration g. A food packet is dropped from the helicopter when it is at a height h. The time taken by the packet to reach the ground is close to:",
    answers: [
      { text: "t = (2/3)√(h/g)", correct: false },
      { text: "t = 1.8√(h/g)", correct: false },
      { text: "t = 3.4√(h/g)", correct: true },
      { text: "t = √(2h/3g)", correct: false },
    ],
  },
  {
    question: "From a tower of height H, a particle is thrown vertically upwards with speed u. The time taken by the particle to hit the ground is n times the time taken to reach the highest point of its path. The relation between H and n is:",
    answers: [
      { text: "2gH = n²u²", correct: false },
      { text: "gH = (n−2)²u²", correct: false },
      { text: "2gH = nu²(n−2)", correct: true },
      { text: "gH = (n−2)u²", correct: false },
    ],
  },
  {
    question: "A particle is projected with velocity v₀ along the x-axis. A damping force acts on the particle, proportional to the square of its distance from the origin (a = −αx²). The distance at which the particle stops is:",
    answers: [
      { text: "(3v₀²/2α)^(1/2)", correct: false },
      { text: "(2v₀/3α)^(1/3)", correct: false },
      { text: "(2v₀²/3α)^(1/2)", correct: false },
      { text: "(3v₀²/2α)^(1/3)", correct: true },
    ],
  },
  {
    question: "An engine of a train, moving with uniform acceleration, passes a signal post with velocity u and the last compartment with velocity v. The velocity with which the middle point of the train passes the signal post is:",
    answers: [
      { text: "√((v²+u²)/2)", correct: true },
      { text: "(v−u)/2", correct: false },
      { text: "(u+v)/2", correct: false },
      { text: "√((v²−u²)/2)", correct: false },
    ],
  },
  {
    question: "The velocity of a particle is v = v₀ + gt + Ft². Its position is x = 0 at t = 0. Its displacement after time t = 1 (in the same time units) is:",
    answers: [
      { text: "v₀ + g + F", correct: false },
      { text: "v₀ + g/2 + F/3", correct: true },
      { text: "v₀ + g/2 + F", correct: false },
      { text: "v₀ + 2g + 3F", correct: false },
    ],
  },
  {
    question: "The instantaneous velocity of a particle moving in a straight line is given as v = αt + βt², where α and β are constants. The distance travelled by the particle between t = 1 s and t = 2 s is:",
    answers: [
      { text: "3α + 7β", correct: false },
      { text: "(3/2)α + (7/3)β", correct: true },
      { text: "α/2 + β/3", correct: false },
      { text: "(3/2)α + (7/2)β", correct: false },
    ],
  },
  {
    question: "A small toy starts moving from rest under constant acceleration. If it travels a distance of 10 m in the first t seconds, the distance travelled in the NEXT t seconds will be:",
    answers: [
      { text: "10 m", correct: false },
      { text: "20 m", correct: false },
      { text: "30 m", correct: true },
      { text: "40 m", correct: false },
    ],
  },

  // ---------- Questions with a graph shown IN the question ----------
  // Drop the matching image file into an "images" folder next to this
  // misl.js file (i.e. Physics/Motion-in-a-Straight-Line/images/...).
  {
    question: "The velocity (v) and time (t) graph of a body in straight line motion is shown below. Point S is at 4.333 seconds. The total distance covered by the body in 6 s is:",
    image: "images/q4-vt-graph.png",
    answers: [
      { text: "37/3 m", correct: true },
      { text: "12 m", correct: false },
      { text: "11 m", correct: false },
      { text: "49/4 m", correct: false },
    ],
  },
  {
    question: "The velocity-time graphs of a car and a scooter are shown below. Find (i) the difference between the distance travelled by the car and the scooter in 15 s, and (ii) the time at which the car will catch up with the scooter, respectively:",
    image: "images/q7-car-scooter-graph.png",
    answers: [
      { text: "337.5 m and 25 s", correct: false },
      { text: "225.5 m and 10 s", correct: false },
      { text: "112.5 m and 22.5 s", correct: true },
      { text: "11.25 m and 15 s", correct: false },
    ],
  },
  {
    question: "A body starts from rest at time t = 0. The acceleration-time graph is shown below. The maximum velocity attained by the body will be:",
    image: "images/q11-at-graph.png",
    answers: [
      { text: "110 m/s", correct: false },
      { text: "55 m/s", correct: true },
      { text: "650 m/s", correct: false },
      { text: "550 m/s", correct: false },
    ],
  },
];

// Kick off the quiz using the shared engine
initQuiz({
  chapterTitle: "Motion in a Straight Line",
  questions: mislQuestionBank,
  questionCount: 25,
});