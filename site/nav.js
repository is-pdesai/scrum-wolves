// SCRUM Wolves — sidebar nav toggle
(function () {
  function init() {
    var body = document.body;
    var toggle = document.querySelector('.nav-toggle');
    var backdrop = document.querySelector('.nav-backdrop');
    if (!toggle) return;
    function open() { body.classList.add('nav-open'); toggle.setAttribute('aria-expanded', 'true'); }
    function close() { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
    function toggleNav() { body.classList.contains('nav-open') ? close() : open(); }
    toggle.addEventListener('click', toggleNav);
    if (backdrop) backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    // Close after clicking a nav link (so single-page feel)
    document.querySelectorAll('.site-nav a').forEach(function (a) { a.addEventListener('click', close); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
