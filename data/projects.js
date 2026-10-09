// Project data for the /projects page.
// Add a new entry below and it renders automatically — no view changes needed.
//
//   title       : project name shown on the card
//   description : one or two short sentences about what it does
//   tech        : array of tags shown as pills
//   link        : live demo URL          (optional)
//   repo        : GitHub repository URL  (optional) — rendered as the "GitHub" button
//
// Example:
// {
//   title: 'My App',
//   description: 'A short description of what the project does.',
//   tech: ['Node.js', 'Express', 'EJS'],
//   link: 'https://myapp.example.com',
//   repo: 'https://github.com/Arin213/myapp'
// }

const projects = [
  {
    title: 'Digital Business Card',
    description: 'A responsive digital business card built with React and Vite. Data-driven components render the contact buttons and social links from plain arrays via props, and every push to main auto-deploys to GitHub Pages.',
    tech: ['React 19', 'Vite', 'CSS3', 'GitHub Actions'],
    link: 'https://arin213.github.io/DigitalBusinessCard/',
    repo: 'https://github.com/Arin213/DigitalBusinessCard'
  },
  {
    title: 'Portfolio Website',
    description: 'This site — a server-rendered portfolio built with Express and EJS. Shared header/footer partials, a projects page driven by a data file, dark mode with localStorage persistence, and a deploy blueprint for Render.',
    tech: ['Node.js', 'Express', 'EJS', 'MVC'],
    link: 'https://portfolio-02lz.onrender.com',
    repo: 'https://github.com/Arin213/portfolio'
  },
  {
    title: 'My Journey',
    description: 'A multi-page personal site built with HTML5, Bootstrap 5 and custom CSS while learning layout, navigation and responsive design.',
    tech: ['HTML5', 'Bootstrap 5.3.5', 'Custom CSS'],
    link: 'https://arin213.github.io/myJourney/',
    repo: 'https://github.com/Arin213/myJourney'
  },
  {
    title: 'React Basics',
    description: 'Coursework from the Scrimba React course: static pages, data-driven components rendered with props and .map(), and state management with useState and event handlers.',
    tech: ['React', 'JavaScript (ES6+)', 'Vite'],
    repo: 'https://github.com/Arin213/reactBasic'
  },
  {
    title: 'Full Stack Open',
    description: 'Exercises from the University of Helsinki Full Stack Open course — React front ends, Node/Express REST APIs, and the fundamentals of testing and deployment.',
    tech: ['React', 'Node.js', 'Express', 'REST APIs'],
    repo: 'https://github.com/Arin213/fullStackOpen'
  },
  {
    title: 'Web Development Practice',
    description: 'A collection of the projects and exercises I built while learning: CSS Grid and Flexbox layouts, Bootstrap components, JavaScript DOM projects (drum kit, Simon game, dice game) and Express/EJS back-end practice.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Node.js'],
    repo: 'https://github.com/Arin213/webDevelopment'
  }
];

export default projects;
