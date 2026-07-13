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

// Serve static files (images, css, pdfs)
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
