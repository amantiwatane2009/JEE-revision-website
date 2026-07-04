# 🧪 JEE Mains Quiz — Revise Smarter

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-7.0.1-528DD7?style=flat&logo=fontawesome&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

A clean, subject-first revision hub for **JEE Mains** aspirants. The site organizes the entire syllabus — Physics, Chemistry, and Maths — into subjects → broad topics → chapters, so students can quickly navigate to exactly what they want to revise.

> ⚠️ **Current status:** The site is a fully-built static navigation structure (subject selection → topic selection → chapter selection). Quiz functionality (actual questions, scoring, timers) is **not yet implemented** — see [Future Enhancements](#-future-enhancements).

---

## 📖 Overview

JEE Mains preparation involves a huge, sprawling syllabus spread across three subjects. This project's goal is to make revision frictionless: instead of scrolling through long chapter lists, students move through a simple, guided drill-down flow:

```
Home → Subject (Physics / Chemistry / Maths) → Broad Topic → Chapter
```

Every screen uses the same clean card-based UI, so the experience stays consistent no matter which subject or topic a student is browsing.

---

## ✨ Key Features

### ✅ Implemented

- **Home / Subject Selection Screen** — entry point with Physics, Chemistry, and Maths.
- **Topic Selection Screens** for each subject:
  - **Physics:** Mechanics, Thermodynamics and Heat, Electromechanics, Optics, Quantum Physics
  - **Chemistry:** Physical, Inorganic, Organic
  - **Maths:** Algebra, Calculus, Geometry
- **Chapter Selection Screens** — a dedicated page per topic listing every individual chapter as a card (e.g. `Physics/mechanics.html` lists Units and Measurements, Motion in a Straight Line, Newton's Laws of Motion, and more).
- **Consistent, reusable card component** (`.chapter-card`) with icon, title, and short description — used identically across all 11 topic pages.
- **Hover animations** on all cards (lift + shadow + icon rotation) for a polished, tactile feel.
- **Fully responsive layouts** — grids reflow from multi-column on desktop down to a single column on mobile.
- **Centralized, reusable navigation bar** (with mobile hamburger menu) shared across every page.
- **"Back" navigation** on every chapter screen, returning to the parent topic/subject screen.

### 🔜 Planned (see [Future Enhancements](#-future-enhancements))

- Interactive quizzes with real questions per chapter
- Score tracking and performance analytics
- A "Short Notes" section (already present as a nav link, not yet built)
- Timed mock tests

---

## 📸 Screenshots

> Replace these placeholders with actual screenshots once available.

| Home Screen | Subject → Topic Screen | Topic → Chapter Screen |
|---|---|---|
| ![Home Screen](docs/screenshots/home-screen.png) | ![Physics Topics](docs/screenshots/physics-topics.png) | ![Mechanics Chapters](docs/screenshots/mechanics-chapters.png) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, BEM-style class naming) |
| Styling | Vanilla CSS3 (CSS custom properties / variables, Flexbox, CSS Grid) |
| Icons | [Font Awesome 7.0.1](https://fontawesome.com/) (via CDN) |
| Fonts | Open Sans |
| Interactivity | None yet — pure static HTML/CSS (JavaScript planned for quiz logic) |
| Hosting | Static — deployable on GitHub Pages, Netlify, or any static host |

No build tools, bundlers, or package managers are required — this is a dependency-free static site.

---

## 📁 Project Structure

```
JEE-Chapter-Quiz/
│
├── index.html                  # Home / subject selection screen
├── physics.html                # Physics topic selection screen
├── chemistry.html              # Chemistry topic selection screen
├── math.html                   # Maths topic selection screen
├── style.css                   # Global stylesheet (shared by all pages)
│
├── images/                     # Static assets (logo, icons, etc.)
│   └── atom.svg
│
├── Physics/                    # Chapter-level pages for each Physics topic
│   ├── mechanics.html
│   ├── thermo.html
│   ├── electromechanics.html
│   ├── optics.html
│   └── quantum.html
│
├── Chemistry/                  # Chapter-level pages for each Chemistry topic
│   ├── physical.html
│   ├── inorganic.html
│   └── organic.html
│
└── Math/                       # Chapter-level pages for each Maths topic
    ├── algebra.html
    ├── calculus.html
    └── geometry.html
```

Each subject follows the same two-level pattern:
`subject.html` (broad topics) → `Subject/topic.html` (individual chapters).

---

## 🚀 Installation and Setup

This is a static website — no dependencies, no build step.

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/jee-mains-quiz.git
   cd jee-mains-quiz
   ```

2. **Open it directly in a browser**
   ```bash
   # macOS
   open index.html

   # Windows
   start index.html

   # Linux
   xdg-open index.html
   ```

3. **(Recommended) Serve it locally** for correct relative-path behavior, using any static server, e.g.:
   ```bash
   npx serve .
   ```
   or, with the VS Code **Live Server** extension, right-click `index.html` → *Open with Live Server*.

No `npm install`, environment variables, or configuration is required.

---

## 🧭 How to Use the Website

1. Land on the **Home** screen and choose a subject: **Physics**, **Chemistry**, or **Maths**.
2. On the subject screen, pick a **broad topic** (e.g. Mechanics, Organic Chemistry, Calculus).
3. On the topic screen, pick a specific **chapter** from the card grid (e.g. Newton's Laws of Motion, GOC, Integrals).
4. Use the **Back** button at any point to return to the previous screen.

> Chapter cards currently link to placeholder (`#`) targets — actual quiz pages for each chapter are part of the next development phase.

---

## 🎨 Design Philosophy & UI/UX Goals

- **Consistency over novelty** — every subject/topic/chapter screen reuses the exact same layout primitives (`.chapter-main`, `.chapter-grid`, `.chapter-card`), so students never have to relearn a new UI as they move between subjects.
- **Guided drill-down navigation** — rather than one overwhelming list of 50+ chapters, the three-tier flow (subject → topic → chapter) keeps each screen focused and scannable.
- **Calm, distraction-free visual language** — a dark, low-saturation palette (defined via CSS variables) keeps the focus on content, not decoration.
- **Tactile feedback** — subtle hover animations (lift, shadow, icon rotation) on every interactive card make the site feel responsive without being flashy.
- **Mobile-first accessibility** — JEE aspirants often revise on their phones between classes; every screen is built to reflow cleanly from desktop grids down to single-column mobile layouts.

---

## 🗺️ Future Enhancements

These were planned during development but are **not yet implemented**:

- 🧩 **Actual quiz engine** — MCQs per chapter with instant feedback, powered by JavaScript.
- 📊 **Score tracking & analytics** — per-chapter and per-subject performance history.
- ⏱️ **Timed mock tests** — full-length or subject-wise timed practice sets.
- 📝 **Short Notes section** — quick-revision notes per chapter (already referenced in the navbar).
- 🔖 **Bookmarking / "Practice Later"** for specific chapters or questions.
- 🌗 **Light/Dark theme toggle**.
- 👤 **User accounts** to persist progress across sessions/devices.
- 🔍 **Search** across all chapters from any screen.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes, keeping with the existing naming conventions (BEM-style classes, `.chapter-*` component patterns) and folder structure.
4. Commit your changes with a clear message:
   ```bash
   git commit -m "Add: short notes page for Mechanics"
   ```
5. Push to your fork and open a Pull Request describing the change.

Please keep new chapter/topic pages consistent with the existing patterns (same navbar markup, same card component, correct relative paths for nested folders) so the site remains uniform as it grows.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Aman Tiwatane**

---

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com/) for the icon set used across all chapter and navigation UI.
- The JEE Mains aspirant community, whose revision needs shaped the structure and flow of this project.
