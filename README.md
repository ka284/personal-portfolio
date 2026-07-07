
# Kethavath Anil — Portfolio Website

A premium personal portfolio built with **pure HTML5, CSS3, and vanilla JavaScript** (no frameworks).

---

## Folder Structure

```
public/
├── index.html              ← Main portfolio page (all HTML)
├── css/
│   └── styles.css          ← All styles (themes, animations, layout)
├── js/
│   └── script.js           ← All JavaScript (particles, typing, filter, etc.)
├── images/
│   ├── hero-illustration.png
│   ├── profile.png
│   ├── project-event.png
│   ├── project-steganography.png
│   ├── project-portfolio.png
│   └── project-iot.png
└── resume.pdf
```

---

## How to Run

```bash
bun run dev
```

Open the **Preview Panel** on the right (or go to `http://localhost:3000`).

---

## Sections (8 Total)

| # | Section | ID | Description |
|---|---------|----|-------------|
| 1 | Hero | `#home` | Name, typing effect, social links, CTA buttons |
| 2 | About | `#about` | Bio, profile photo, education timeline |
| 3 | Skills | `#skills` | 4-category grid (Languages, Frameworks, Tools, Soft Skills) |
| 4 | Projects | `#projects` | Filterable project cards with images, tech, features |
| 5 | Certifications | `#certifications` | 5 certification cards |
| 6 | Achievements | `#achievements` | Achievement cards + coding profile links |
| 7 | Resume | `#resume` | View / Download CV |
| 8 | Contact | `#contact` | Contact form + contact info |

---

## How to Add Content

### Add a Skill

Open `public/index.html`, find `<section id="skills">`, and add a `<span>` inside any skill card:

```html
<span class="skill-tag">React</span>
```

To add a **new category**, add inside `.skills-grid`:

```html
<div class="card skill-card anim from-zoom d5">
  <h3>Category Name</h3>
  <div class="skill-tags">
    <span class="skill-tag">Skill 1</span>
    <span class="skill-tag">Skill 2</span>
  </div>
</div>
```

---

### Add a Project

Inside `<div class="projects-grid">`, add:

```html
<article class="card project-card anim from-zoom d5" data-cat="Web">
  <div class="p-img">
    <img src="images/your-image.png" alt="Project Name" loading="lazy">
  </div>
  <div class="p-body">
    <h3>Project Name</h3>
    <p class="p-desc">Short description of the project.</p>
    <div class="p-tech">
      <span>HTML</span><span>CSS</span><span>JavaScript</span>
    </div>
    <ul class="p-features">
      <li>Feature one</li>
      <li>Feature two</li>
      <li>Feature three</li>
      <li>Feature four</li>
    </ul>
    <div class="p-actions">
      <a href="https://github.com/ka284/your-repo" class="btn btn-link">Code</a>
      <a href="https://your-demo.com" class="btn btn-primary">Live Demo
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </a>
    </div>
  </div>
</article>
```

**`data-cat` values**: `Web`, `Python`, `IoT` (or add your own filter button)

---

### Add a Certification

Inside `<div class="certs-grid">`, add:

```html
<div class="card cert-card anim from-zoom d6">
  <div class="cert-icon">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  </div>
  <div>
    <h3>Certification Name</h3>
    <p>Issuing Organization</p>
  </div>
</div>
```

---

### Add an Achievement

Inside `<div class="ach-grid">`, add:

```html
<div class="card ach-card anim from-zoom d4">
  <div class="ach-icon">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  </div>
  <h3>Achievement Title</h3>
  <p>Description of the achievement.</p>
</div>
```

**Icon color variants** — add class to `.ach-icon`:
- Default: blue
- `ach-icon-green`: green
- `ach-icon-amber`: yellow/orange

---

### Add Education (Timeline)

Inside `.timeline`, add after the last `tl-item`:

```html
<div class="tl-item anim from-left d4">
  <div class="tl-dot">4</div>
  <div class="tl-content">
    <h4>Your Degree or Course</h4>
    <p class="tl-place">Institution Name</p>
    <p class="tl-meta">2025 – 2029 · CGPA: 9.0</p>
  </div>
</div>
```

---

### Add a Project Filter Button

Inside `.filters`, add a button:

```html
<button class="filter-btn" data-f="AI">AI</button>
```

Then use `data-cat="AI"` on your project card.

---

### Add a New Social Link

In the hero section `.hero-socials`, add:

```html
<a href="https://your-link.com" target="_blank" rel="noopener" class="social-btn" aria-label="Name">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <!-- Your SVG icon path here -->
  </svg>
</a>
```

Also add the same in the footer `.footer-socials`.

---

## External Links

| Platform | URL |
|----------|-----|
| GitHub | `https://github.com/ka284` |
| LinkedIn | `https://www.linkedin.com/in/kethavath-anil-bb7a41299` |
| LeetCode | `https://leetcode.com/u/kethavath12/` |
| HackerRank | `https://www.hackerrank.com/profile/kethavathanil308` |

---

## Features

- Dark / Light mode toggle (persisted in localStorage)
- Particle background (canvas)
- Cursor glow effect (desktop only)
- Scroll progress bar
- Typing effect in hero
- Book page-opening scroll animations
- Project category filtering
- Responsive mobile menu
- Loading screen
- Back-to-top button

---

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, keyframes, perspective transforms)
- Vanilla JavaScript (ES6+)
- No frameworks, no libraries