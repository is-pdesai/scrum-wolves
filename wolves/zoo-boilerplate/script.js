/* WildNation Zoo — script.js (Boilerplate) */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));

const sections = document.querySelectorAll('.page-section');
const navLinks  = document.querySelectorAll('.nav-link');
function updateActiveLink() {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(l => { l.classList.remove('active'); if (l.getAttribute('href') === '#' + current) l.classList.add('active'); });
}
window.addEventListener('scroll', updateActiveLink, { passive:true });
updateActiveLink();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if (t) window.scrollTo({ top: t.offsetTop - navbar.offsetHeight - 16, behavior:'smooth' });
  });
});

const hamburger  = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinksEl.classList.toggle('open'));
navLinksEl.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinksEl.classList.remove('open')));

function animateCounter(el, target) {
  const inc = target / (1800/16); let cur = 0;
  const t = setInterval(() => { cur += inc; if (cur >= target) { cur=target; clearInterval(t); } el.textContent = Math.round(cur); }, 16);
}
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.animal-card,.stat-card,.team-card,.contact-item').forEach((el,i) => { el.classList.add('fade-up'); setTimeout(() => el.classList.add('visible'), i*80); });
    e.target.querySelectorAll('.stat-num[data-target]').forEach(el => animateCounter(el, parseInt(el.dataset.target,10)));
    obs.unobserve(e.target);
  });
}, { threshold:0.08 });
sections.forEach(s => obs.observe(s));

// Contact form placeholder
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll be in touch soon. 🦁');
    form.reset();
  });
}
