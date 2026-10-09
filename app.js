import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Do not advertise the framework.
app.disable('x-powered-by');

// NOTE: keep `trust proxy` OFF unless it is genuinely needed.
// Express uses the `proxy-addr` package to decide which hops may set
// X-Forwarded-For, and a wrong trust setting makes `req.ip` client-controlled
// (IP spoofing). If IP-based logic is ever added behind a host like Render,
// enable it explicitly with `app.set('trust proxy', 1)` and re-check
// `npm run audit:prod`.

// Baseline security headers (no extra dependency required).
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  next();
});

// Serve static files (images, css, pdfs).
// Certificates never change, so they get a long cache; everything else is
// revalidated with an ETag so deploys show up immediately.
app.use('/certification', express.static(path.join(__dirname, 'public', 'certification'), {
  maxAge: '7d',
  immutable: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

// Controllers
import * as site from './controllers/siteController.js';

// Routes
app.get('/', site.home);
app.get('/hobbies', site.hobbies);
app.get('/contact', site.contact);
app.get('/resume', site.resume);
app.get('/skills', site.skills);
app.get('/projects', site.projectsPage);

// 404 handler
app.use(site.notFound);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
