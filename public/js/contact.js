// Contact form: builds a mailto: link from the form fields.
// No server round-trip, no stored data — the visitor's own mail client sends it.
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('cf-status');
  const TO = 'unsung.apricity01@gmail.com';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const field = (id) => document.getElementById(id);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = field('cf-name').value.trim();
    const email = field('cf-email').value.trim();
    const message = field('cf-message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in every field.';
      return;
    }
    if (!EMAIL_RE.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      return;
    }

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;

    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = `Opening your email app… if nothing happens, write to ${TO}.`;
  });
})();
