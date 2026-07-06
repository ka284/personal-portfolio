# Kethavath Anil — Portfolio Website

## Folder Structure

```
portfolio-site/
├── index.html          ← Main HTML file
├── css/
│   └── styles.css       ← All styles (288 lines)
├── js/
│   └── script.js        ← All JavaScript (83 lines)
├── images/
│   ├── hero-illustration.png
│   ├── profile.png
│   ├── project-event.png
│   ├── project-steganography.png
│   ├── project-portfolio.png
│   └── project-iot.png
└── resume.pdf           ← Downloadable resume
```

## How to Run

### Option 1 — Direct (no server, fastest)

Simply open `index.html` in a browser. Everything works with zero setup.

```bash
# macOS
open portfolio-site/index.html

# Windows
start portfolio-site/index.html

# Linux
xdg-open portfolio-site/index.html
```

### Option 2 — Local HTTP server (recommended)

Using **Python** (no install needed):

```bash
cd portfolio-site
python3 -m http.server 8000
# → http://localhost:8000
```

Using **Node.js**:

```bash
npx serve portfolio-site
# → http://localhost:3000
```

Using **VS Code**:

1. Install the "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Option 3 — Current Project (Next.js)

The portfolio is already running at the root URL. The middleware in `src/middleware.ts` serves the `portfolio-site/` folder.

```bash
bun run dev
# → http://localhost:3000
```

## Features

| Feature | Implementation |
|---------|---------------|
| Dark / Light mode | CSS custom properties + JS toggle, saved to localStorage |
| Typing animation | Vanilla JS setInterval with type/delete loop |
| Particle background | Canvas 2D with connecting lines + mouse interaction |
| Cursor glow | Radial gradient following mouse (desktop only) |
| Scroll progress bar | Fixed 3px gradient bar at top |
| Scroll animations | IntersectionObserver adds `.show` class |
| Project filtering | JS filter by category with re-animation |
| Contact form | Client-side form with success feedback |
| Responsive menu | Hamburger button on mobile (≤768px) |
| Back to top | Appears after scrolling 400px |
| Loading screen | Spinner + text, fades out after 1.6s |
| Accessibility | ARIA labels, semantic HTML, keyboard nav, reduced-motion support |

## Customization

### Change colors
Edit the CSS custom properties in `css/styles.css` under `[data-theme="dark"]` and `[data-theme="light"]`.

### Change content
Edit the HTML directly in `index.html` — all sections are clearly labeled with comments.

### Change images
Replace files in `images/` folder. Keep the same filenames.

### Change resume
Replace `resume.pdf` in the root of `portfolio-site/`.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, animations, backdrop-filter, Grid, Flexbox
- **JavaScript (ES6+)** — Vanilla JS, no frameworks
- **Google Fonts** — Inter