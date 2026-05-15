/* ============================================================
   CURATED EMAN — Shared Navigation
   /assets/js/nav.js
   Load on: every page via <script src="/assets/js/nav.js"></script>
   To update the nav site-wide, edit ONLY this file.
   ============================================================ */

(function () {
  var nav = `
<header class="site-header">
  <div class="nav-container">
    <a href="/" class="logo">Curated Eman</a>
    <nav class="nav-menu" aria-label="Main navigation">
      <a href="/home-cozy-lighting">Lighting</a>
      <a href="/outdoor-hosting-essentials">Hosting</a>
      <a href="/home-organization-ideas">Organization</a>
      <a href="/home-accents">Decor</a>
      <span class="nav-pill-sep" aria-hidden="true"></span>
      <a href="/gift-ideas" class="nav-pill nav-pill--gifts">Gifts</a>
      <a href="/home-easy-fixes" class="nav-pill nav-pill--fixes">Easy Fixes</a>
      <a href="/under-25-finds" class="nav-pill nav-pill--25">Under $25</a>
      <a href="/about">About</a>
    </nav>
    <button class="menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-menu">☰</button>
  </div>
</header>`;

  /* Inject nav as the first element inside <body> */
  document.body.insertAdjacentHTML('afterbegin', nav);

  /* ── Mobile menu toggle ── */
  var toggle = document.querySelector('.menu-toggle');
  var menu   = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Mark active link based on current path ── */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    var linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (linkPath === path) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('nav-active');
    }
  });
})();
