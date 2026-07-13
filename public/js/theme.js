// Theme toggle with localStorage persistence — shared across all pages
(function () {
  const KEY = 'theme';
  const apply = (dark) => document.body.classList.toggle('dark', dark);

  // Restore saved preference on load
  apply(localStorage.getItem(KEY) === 'dark');

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const dark = !document.body.classList.contains('dark');
      apply(dark);
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
    });
  });
})();
