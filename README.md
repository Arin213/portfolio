# Anil Limbu — Personal Portfolio

A personal portfolio website built with **Node.js**, **Express**, and **EJS**. It features a premium animated landing page, several content subpages, a custom cursor, dark mode, and a shared full-width footer.

## Features

- **Animated landing page** — floating gradient orbs, organic morphing blobs, GSAP load/scroll animations, and a custom trailing-dot cursor.
- **Subpages** — About/Resume, Projects, Skills, Hobbies, and Contact, all sharing a consistent card layout and footer.
- **Dark mode** — toggle button (🌙) on every page; the choice is saved to `localStorage` so it persists across navigation.
- **Custom cursor** — dotted cursor with a trailing ring on desktop (automatically disabled on touch devices).
- **Shared footer** — full-width premium footer with animated wave, gradient border, and social links (GitHub, LinkedIn, Email) using inline SVG icons.
- **Responsive** — layouts adapt for tablet and mobile viewports.

## Tech Stack

- **Backend:** Node.js + Express 4
- **Templating:** EJS (with partials for header/footer)
- **Frontend:** Vanilla HTML/CSS/JS
- **Libraries (CDN):** GSAP + ScrollTrigger (landing animations), Lenis (smooth scroll)
- **No build step** — plain static assets served from `public/`

## Project Structure

```
portfolio/
├── app.js                  # Express server, route definitions, static serving
├── package.json            # Scripts and dependencies
├── controllers/
│   └── siteController.js   # Route handlers (home, hobbies, contact, resume, projects, skills)
├── data/
│   └── projects.js         # Project data rendered on the Projects page
├── public/
│   ├── css/
│   │   ├── landing.css     # Landing page styles (blobs, cursor, footer, dark mode)
│   │   └── style.css       # Subpage styles (card layout, dark mode)
│   ├── js/
│   │   ├── landing.js      # Landing page logic (Lenis, GSAP, parallax)
│   │   ├── cursor.js       # Shared custom cursor
│   │   └── theme.js        # Shared dark-mode toggle + persistence
│   ├── certification/      # Certification PDFs
│   ├── svg/                 # Social/brand SVG icons (github, linkedin, email)
│   └── photo.jpg           # Profile photo
└── views/
    ├── index.ejs           # Landing page
    ├── resume.ejs          # Resume / About
    ├── projects.ejs        # Projects
    ├── skills.ejs          # Skills
    ├── hobbies.ejs         # Hobbies
    ├── contact.ejs         # Contact
    ├── 404.ejs             # Not-found page
    └── partials/
        ├── header.ejs      # Shared <head> + top nav + theme toggle
        └── footer.ejs      # Shared footer + scripts
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
- **Projects:** Add entries to `data/projects.js` — they appear automatically on the Projects page.
- **Certifications:** Drop PDFs into `public/certification/` and link them from the Resume page.
- **Profile photo:** Replace `public/photo.jpg`.

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

### Secrets
Never commit secrets. Store any API keys or credentials in a `.env` file (already git-ignored) and add them as **Environment Variables** in the Render dashboard. See `.gitignore` for the full list of excluded files.

## License

Personal project. All rights reserved.