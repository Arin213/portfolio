// Smooth scroll (Lenis)
const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// Custom cursor with trailing ring
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
function trail() {
  rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(trail);
}
trail();
document.querySelectorAll('a, button, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

// Ripple on buttons
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

// Hero image parallax
const photo = document.querySelector('.hero-photo');
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 24;
  const y = (e.clientY / window.innerHeight - 0.5) * 24;
  if (photo) photo.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.05}deg)`;
});

// GSAP load + scroll animations
window.addEventListener('load', () => {
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
});
