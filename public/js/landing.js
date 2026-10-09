// Landing page behaviour: smooth scroll, ripple, parallax and GSAP reveals.
// Every enhancement here is optional — if a CDN asset fails to load, the page
// must still be fully visible and usable.

const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
const hasLenis = typeof Lenis !== 'undefined';

// ---- Smooth scroll (Lenis) ----
if (hasLenis) {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

// ---- Ripple on buttons ----
document.querySelectorAll('.btn').forEach(b => {
  b.addEventListener('click', e => {
    const r = document.createElement('span');
    const d = Math.max(b.clientWidth, b.clientHeight);
    r.className = 'ripple';
    r.style.width = r.style.height = d + 'px';
    r.style.left = (e.clientX - b.getBoundingClientRect().left - d / 2) + 'px';
    r.style.top = (e.clientY - b.getBoundingClientRect().top - d / 2) + 'px';
    b.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });
});

// ---- Hero image parallax ----
const photo = document.querySelector('.hero-photo');
if (photo) {
  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    photo.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.05}deg)`;
  });
}

if (hasGsap) {
  gsap.registerPlugin(ScrollTrigger);

  // Intro animation. Runs as soon as the DOM is parsed (this script is at the
  // end of <body>) instead of waiting for window.load, so the card is never
  // left invisible while a slow image or font is still downloading.
  gsap.to('.landing-card', { opacity: 1, scale: 1, duration: 0.8, ease: 'expo.out' });
  gsap.from('.hero-title .line', { yPercent: 120, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'expo.out', delay: 0.3 });
  gsap.from('.eyebrow', { y: 20, opacity: 0, duration: 0.6, delay: 0.2 });
  gsap.from('.hero-desc', { y: 20, opacity: 0, duration: 0.6, delay: 0.6 });
  gsap.from('.cta-row .btn', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, delay: 0.8 });
  gsap.from('.hero-photo', { scale: 0.9, opacity: 0, duration: 1, delay: 0.5, ease: 'expo.out' });

  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });
} else {
  // GSAP missing/blocked: undo the CSS "hidden until animated" states so the
  // landing page is still readable.
  const card = document.querySelector('.landing-card');
  if (card) {
    card.style.opacity = '1';
    card.style.transform = 'none';
  }
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
