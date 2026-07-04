# JEE Mains Quiz 🧠

A simple website I'm building to help revise for JEE Mains. The idea is basically: pick a subject → pick a topic → pick a chapter, instead of scrolling through one giant list of everything.

Still a work in progress! Right now it's just the navigation part (all the pages you click through), the actual quiz/questions part isn't done yet.

## What it does right now

- Home page where you pick Physics, Chemistry or Maths
- Each subject has a page with its big topics (like Mechanics, Organic, Algebra etc.)
- Each topic has its own page listing all the chapters as cards
- Cards have a little hover animation
- Works on mobile too (cards stack into 1 column)
- Back button on every page

## What it doesn't do yet (planned)

- No actual quiz/questions yet, chapter cards don't lead anywhere (`#`)
- No scoring or tracking progress
- "Short Notes" is in the navbar but doesn't exist yet
- No timer / mock test mode
- No dark/light toggle

## Built with

Just plain HTML and CSS, no framework. Icons are from Font Awesome (CDN link). No JavaScript yet.

## Folder structure

```
index.html          -> home page
physics.html         -> physics topics
chemistry.html        -> chemistry topics
math.html            -> maths topics
style.css            -> all the css

Physics/
  mechanics.html
  thermo.html
  electromechanics.html
  optics.html
  quantum.html

Chemistry/
  physical.html
  inorganic.html
  organic.html

Math/
  algebra.html
  calculus.html
  geometry.html
```

## How to run it

Just clone it and open `index.html` in your browser, that's it. No installs needed.

```bash
git clone https://github.com/your-username/jee-mains-quiz.git
```

Then double click `index.html` or use Live Server in VS Code.

## How to use

Home page → click a subject → click a topic → click a chapter card. That's the whole flow for now since there's no quiz yet.

## Why I made it this way

Wanted every page to look and feel the same so it's easy to navigate — same card style everywhere, same navbar, same back button. Kept the design simple and dark so it's not distracting while studying.

## To-do / ideas for later

- [ ] Add actual quiz questions per chapter
- [ ] Score tracking
- [ ] Short notes pages
- [ ] Timed tests
- [ ] Maybe login/save progress

## License

MIT

## Made by

Aman Tiwatane

## Thanks to

Font Awesome for the icons
