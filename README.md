# Anil Limbu — Personal Portfolio

A personal portfolio website built with **Node.js**, **Express**, and **EJS**. It features a premium animated landing page, several content subpages, a custom cursor, dark mode, a data-driven projects page with GitHub links, and a shared full-width footer.

## Features

- **Animated landing page** — floating gradient orbs, organic morphing blobs, GSAP load/scroll animations, and a custom trailing-dot cursor. Every animation is optional: if a CDN asset fails to load, the script falls back to the fully visible layout.
- **Subpages** — Resume/About, Projects, Skills, Hobbies, and Contact, all sharing a consistent card layout and footer.
- **Projects page driven by data** — `data/projects.js` holds the project list; each card renders its tech tags plus **Live demo** and **GitHub** buttons that open in a new tab.
- **Dark mode** — toggle button (🌙/☀️) on every page; the choice is saved to `localStorage` so it persists across navigation.
- **Custom cursor** — dotted cursor with a trailing ring on desktop (automatically disabled on touch devices).
- **Shared partials** — one header, one footer and one skills list, included by every page, so markup changes happen in a single place.
- **Link previews** — Open Graph / Twitter tags so shared links show a title, description and image.
- **Responsive** — layouts adapt for tablet and mobile viewports.

## Tech Stack

- **Backend:** Node.js + Express 4
- **Templating:** EJS (with partials for header/footer/skills)
- **Frontend:** Vanilla HTML/CSS/JS
- **Libraries (CDN):** GSAP + ScrollTrigger (landing animations), Lenis (smooth scroll)
- **No build step** — plain static assets served from `public/`

## Project Structure

```
portfolio/
├── app.js                  # Express server, security headers, routes, static serving
├── package.json            # Scripts, dependencies, security overrides
├── render.yaml             # Render blueprint (free tier)
├── controllers/
│   └── siteController.js   # Route handlers (home, hobbies, contact, resume, projects, skills)
├── data/
│   └── projects.js         # Project data rendered on the Projects page
├── public/
│   ├── css/
│   │   ├── landing.css     # Landing page styles (blobs, cursor, footer, dark mode)
│   │   └── style.css       # Subpage styles (card layout, projects, contact form, dark mode)
│   ├── js/
│   │   ├── landing.js      # Landing logic (Lenis, GSAP, parallax, ripple) + CDN fallbacks
│   │   ├── cursor.js       # Shared custom cursor
│   │   ├── theme.js        # Shared dark-mode toggle + persistence
│   │   └── contact.js      # Contact form -> mailto: composer
│   ├── certification/      # Certification PDFs (URL-safe file names)
│   ├── svg/                # Social/brand SVG icons (github, linkedin, email)
│   └── photo.jpg           # Profile photo
└── views/
    ├── index.ejs           # Landing page
    ├── resume.ejs          # Resume / About
    ├── projects.ejs        # Projects
    ├── skills.ejs          # Skills
    ├── hobbies.ejs         # Hobbies
    ├── contact.ejs         # Contact + message form
    ├── 404.ejs             # Not-found page
    └── partials/
        ├── header.ejs      # Shared <head> (meta, preview tags, favicon) + top nav
        ├── footer.ejs      # Closes the page, includes the shared footer + scripts
        ├── siteFooter.ejs  # The footer markup itself (used on every page)
        └── skills.ejs      # The skills list (used by Resume and Skills)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)

### Installation

```bash
# From the project root:
npm install
```

### Running the App

```bash
# Production / normal start
npm start

# Development (auto-restarts on file changes)
npm run dev
```

The server listens on port `3000` by default (or the `PORT` environment variable). Open `http://localhost:3000`.

### Routes

| Route        | Page              |
|--------------|-------------------|
| `/`          | Landing page      |
| `/resume`    | Resume / About    |
| `/projects`  | Projects          |
| `/skills`    | Skills            |
| `/hobbies`   | Hobbies           |
| `/contact`   | Contact           |
| `*`          | 404 page          |

## Customization

- **Theme colors:** Edit the CSS variables in `public/css/landing.css` (`:root` / `body.dark`) and `public/css/style.css` (`:root` / `body.dark`).
- **Projects:** Add entries to `data/projects.js` — they appear automatically on the Projects page as cards with tech pills and a GitHub button. Each entry takes `title`, `description`, `tech[]`, and the optional `link` (live demo) and `repo` (GitHub repository) URLs.
- **Certifications:** Drop PDFs into `public/certification/` (use URL-safe file names such as `my-certificate.pdf`) and link them from the Resume page.
- **Profile photo:** Replace `public/photo.jpg`.
- **Link preview image:** The Open Graph tags in `views/partials/header.ejs` and `views/index.ejs` point at `https://portfolio-02lz.onrender.com/photo.jpg` — update the host if the site moves.

## Security & Dependencies

- `npm audit --omit=dev` / `npm run audit:prod` reports **0 vulnerabilities**.
- `package.json` pins patched transitive releases through `overrides`: `brace-expansion` (CVE-2026-14257, DoS), `proxy-addr` (CVE-2026-90711, IP spoofing) and `qs` (query-string DoS). Re-run the audit after any dependency bump and remove an override once the parent package ships the fix itself.
- `app.js` sets `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`, and disables `X-Powered-By`.
- `trust proxy` is deliberately **off**. Only enable it (`app.set('trust proxy', 1)`) together with correct proxy configuration if IP-based logic is added — an incorrect trust setting makes `req.ip` client-controlled.
- The contact form does not post to the server: it composes the message in the visitor's own email app, so there are no message bodies to store or secure.
- Certification PDFs never change, so they are served with a 7-day immutable cache; all other assets are revalidated with an ETag so deploys appear immediately.

## Deploy (Render, free, auto-deploy from GitHub)

This is a server-side Express app, so it needs a Node host (not GitHub Pages). [Render](https://render.com) has a free tier and auto-deploys on every `git push`.

### One-time setup
1. Push this repo to GitHub.
2. Go to **render.com** → **New +** → **Blueprint** (the included `render.yaml` pre-fills the settings).
   - Alternatively pick **Web Service** and set:
     - **Environment:** Node
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Plan:** Free
3. Connect your GitHub repo and click **Apply / Create Web Service**.

Render builds the app and gives you a URL like `https://portfolio.onrender.com`.

### Auto-deploy
Every `git push` to GitHub triggers a new deploy automatically. To add a project later, just edit `data/projects.js`, commit, and push — no rebuild by hand needed.

> **Free-tier note:** the service sleeps after ~15 min of inactivity; the first visit after sleep takes ~30–60s to wake up.

## License

Personal project. All rights reserved.
