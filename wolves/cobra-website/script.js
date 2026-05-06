/* ============================================================
   COBRA WORLD — script.js
   Navigation, animations, counters, fact ticker
   ============================================================ */

// ── Image fallback is handled inline via onerror on each <img> ──
// When an image fails to load, the browser adds .img-fallback to
// the parent .img-wrap, which triggers the CSS illustrated card.

// ── Navbar scroll shadow ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Active nav link based on scroll position ─────────────────
const sections  = document.querySelectorAll('.page-section');
const navLinks  = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

// ── Smooth scroll for all anchor links ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const offset = navbar.offsetHeight + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ── Hamburger menu toggle ─────────────────────────────────────
const hamburger      = document.getElementById('hamburger');
const navLinksEl     = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// ── Animated number counter ───────────────────────────────────
function animateCounter(el, target) {
  const duration = 1800;
  const stepTime  = 16;
  const steps     = duration / stepTime;
  const increment = target / steps;
  let current     = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.round(current);
  }, stepTime);
}

// ── Intersection Observer — fade-up + counter trigger ─────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Fade-up elements inside the section
    entry.target.querySelectorAll(
      '.gallery-card, .food-card, .step, .info-card, .beh-card, ' +
      '.anatomy-card, .region-card, .env-item, .species-card, .qn-card'
    ).forEach((el, i) => {
      el.classList.add('fade-up');
      setTimeout(() => el.classList.add('visible'), i * 60);
    });

    // Counters (home section only)
    entry.target.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      animateCounter(el, target);
    });

    observer.unobserve(entry.target);
  });
}, { threshold: 0.08 });

sections.forEach(sec => observer.observe(sec));

// ── Rotating fact ticker ──────────────────────────────────────
const facts = [
  "King Cobras are the only snakes in the world that build a nest!",
  "Baby cobras are fully venomous the moment they hatch — no training needed!",
  "A cobra's venom can kill an elephant, or a human in under an hour.",
  "Cobras don't hear music — they follow the snake charmer's movement, not the tune.",
  "The King Cobra can raise one-third of its entire body off the ground.",
  "Spitting cobras can hit a target's eyes from 8 feet away with incredible accuracy!",
  "After a big meal, a cobra can go months without eating again.",
  "The Indian Cobra's hood markings look like a pair of spectacles.",
  "King Cobras eat other snakes — including large, venomous pythons!",
  "Cobras shed their entire skin — including the transparent scale over each eye.",
  "Just before shedding, a cobra's eyes turn cloudy blue.",
  "The word 'cobra' comes from the Portuguese 'cobra de capelo' meaning 'hood snake'."
];

let factIndex = 0;
const factTextEl = document.getElementById('factText');

function rotateFact() {
  factIndex = (factIndex + 1) % facts.length;
  factTextEl.style.opacity = '0';
  setTimeout(() => {
    factTextEl.textContent = facts[factIndex];
    factTextEl.style.opacity = '1';
    factTextEl.style.transition = 'opacity 0.45s ease';
  }, 300);
}

setInterval(rotateFact, 5000);

// ── Snake diagram tooltip-style hover labels ──────────────────
document.querySelectorAll('.snake-seg').forEach(seg => {
  seg.addEventListener('mouseenter', () => {
    seg.style.color = '#fff';
  });
  seg.addEventListener('mouseleave', () => {
    seg.style.color = '';
  });
});
