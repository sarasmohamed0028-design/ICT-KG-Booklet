# Byte's Computer Lab — KG ICT Interactive Book

A self-contained HTML5 educational web app for Kindergarten ICT (ages 4–6),
covering the 8 first-term lessons: Welcome to the Computer Lab, Lab Safety Rules,
Proper Sitting Posture, Computer Screen, Computer Case, Mouse, Keyboard, and
Typing My Name.

## How to use
1. Open `index.html` in any modern browser (Chrome/Edge/Safari) — works fully offline.
2. To publish: drag the whole `kg-ict-book` folder onto Netlify Drop, or push it to
   a GitHub repo and enable GitHub Pages. No build step needed.

## What's inside
- `index.html` — app shell and all screens (Home, Lessons, Games, Progress, Certificate, Settings)
- `style.css` — the full visual design system (colors, fonts, animations)
- `script.js` — all app logic: lessons, 8 games, gamification, audio, certificate
- `assets/`, `games/`, `icons/`, `certificates/` — reserved folders for your own
  photos, custom artwork, or recorded audio if you'd like to swap these in later

## Important notes on this build
- **Visuals** are drawn with inline SVG/CSS and emoji so the book works fully
  offline with zero image files to manage. Swap in real photos/illustrations by
  editing the `SVG` object and `vocab`/`activity` data at the top of `script.js`.
- **Voice & sound** use the browser's built-in Web Speech API (text-to-speech)
  and Web Audio API (tones for clicks, correct/wrong, celebration, and a light
  ambient background loop) — no audio files required, and it respects the
  Settings toggles. If you'd rather use real recorded voice/music later, replace
  the `AudioEngine.speak()` calls with `<audio>` playback of files placed in
  `assets/audio/`.
- **School Logo**: look for the dashed circle labeled "School Logo" in the top
  nav and on the Certificate — replace that `<div id="schoolLogo">` (and the
  matching one in the certificate) with an `<img>` tag pointing to your logo file.
- **Games included**: Click the Correct Picture, Label the Computer Parts
  (drag & drop), Memory Cards, Sorting Game, Balloon Pop, Build the Computer,
  Matching Puzzle, and a Final Review Quiz. Drag-and-drop also supports a
  tap-to-place fallback for touch devices/smartboards.
- **Progress** is saved per-device in the browser's Local Storage (lessons done,
  stars, coins, badges, games completed, certificate unlock state).
- **Certificate** unlocks after all 8 lessons are marked complete; the child can
  type their name, then Print or "Save as PDF" via the browser print dialog.

## Customizing the curriculum
All lesson and vocabulary content lives in the `LESSONS` array near the top of
`script.js` — each entry has a title, a simple sentence, vocabulary words, and
one interactive activity. Edit text directly there; no other file needs to change.
