// Theme toggle with localStorage persistence — shared across all pages
(function () {
  const KEY = 'theme';
  const buttons = document.querySelectorAll('.theme-toggle');

  const readStored = () => {
    try { return localStorage.getItem(KEY) === 'dark'; } catch (e) { return false; }
  };

  const apply = (dark) => {
    document.body.classList.toggle('dark', dark);
    buttons.forEach(btn => {
      btn.textContent = dark ? '☀️' : '🌙';
      btn.setAttribute('aria-pressed', String(dark));
      btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  };

  // Restore saved preference on load
  apply(readStored());

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const dark = !document.body.classList.contains('dark');
      apply(dark);
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) { /* private mode */ }
    });
  });
})();
