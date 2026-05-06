/* ============================================================
   WOLF WORLD — script.js
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
  "Every domestic dog — Chihuahua to Great Dane — is a subspecies of the gray wolf!",
  "When wolves returned to Yellowstone in 1995, they actually changed the path of rivers.",
  "There is no such thing as an 'alpha wolf' — the alpha pair is just mom and dad.",
  "A wolf's howl can travel up to 10 miles in open country.",
  "Wolves recognize each other by voice — every pack member has a unique vocal signature.",
  "When a pack howls together, each wolf takes a different note to sound bigger than they are.",
  "A wolf can sprint 38 mph but its real superpower is cruising 5 mph for hours on end.",
  "Wolves have ~200 million olfactory receptors — about 100× a human's.",
  "Ravens follow wolf packs and sometimes lead them to carrion they can't open themselves.",
  "Wolves mate for life — only the breeding pair in a pack reproduces each year.",
  "Wolf pups are born deaf, blind, and weighing about one pound.",
  "Fewer than two fatal wolf attacks on humans occur per decade in North America.",
  "Wolves were eliminated from 95% of their U.S. range by 1960 — they're still recovering.",
  "Pack territory ranges from 50 sq mi in lush forest to over 1,000 sq mi in tundra.",
  "Wolves have a scent gland on top of their tail called the precaudal gland.",
  "A wolf's bite force tops 1,500 psi — enough to crush a femur."
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

// ── Wolf diagram tooltip-style hover labels ──────────────────
document.querySelectorAll('.snake-seg').forEach(seg => {
  seg.addEventListener('mouseenter', () => {
    seg.style.color = '#fff';
  });
  seg.addEventListener('mouseleave', () => {
    seg.style.color = '';
  });
});
