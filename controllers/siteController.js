// Route handlers (controllers) for the portfolio site.
// Keeping these separate from app.js makes it easy to extend the site
// with more pages and features later.

import projects from '../data/projects.js';

const home = (req, res) => {
  res.render('index');
};

const hobbies = (req, res) => {
  res.render('hobbies');
};

const contact = (req, res) => {
  res.render('contact');
};

const resume = (req, res) => {
  res.render('resume');
};

const skills = (req, res) => {
  res.render('skills');
};

// Renders the projects page from the data/projects.js placeholder.
// Add entries there and they appear automatically — no view changes needed.
const projectsPage = (req, res) => {
  res.render('projects', { projects });
};

// 404 fallback
const notFound = (req, res) => {
  res.status(404).render('404');
};

export { home, hobbies, contact, resume, projectsPage, skills, notFound };
