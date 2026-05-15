/* ============================================================
   CURATED EMAN — Shared Navigation
   /assets/js/nav.js
   To update the nav site-wide, edit ONLY this file.
   ============================================================ */

(function () {
  var NAV_HTML = [
    '<header class="site-header">',
    '  <div class="nav-container">',
    '    <a href="/" class="logo">Curated Eman</a>',
    '    <nav class="nav-menu" aria-label="Main navigation">',
    '      <a href="/home-cozy-lighting">Lighting</a>',
    '      <a href="/outdoor-hosting-essentials">Hosting</a>',
    '      <a href="/home-organization-ideas">Organization</a>',
    '      <a href="/home-accents">Decor</a>',
    '      <span class="nav-pill-sep" aria-hidden="true"></span>',
    '      <a href="/gift-ideas" class="nav-pill nav-pill--gifts">Gifts</a>',
    '      <a href="/home-easy-fixes" class="nav-pill nav-pill--fixes">Easy Fixes</a>',
    '      <a href="/under-25-finds" class="nav-pill nav-pill--25">Under $25</a>',
    '      <a href="/about">About</a>',
    '    </nav>',
    '    <button class="menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-menu">&#9776;</button>',
    '  </div>',
    '</header>'
  ].join('\n');

  function inject() {
    if (document.querySelector('.site-header')) return;
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    initMenu();
    markActive();
  }

  function initMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var menu   = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function markActive() {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
      try {
        var linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
        if (linkPath === path) {
          link.setAttribute('aria-current', 'page');
          link.classList.add('nav-active');
        }
      } catch(e) {}
    });
  }

  if (document.body) {
    inject();
  } else {
    document.addEventListener('DOMContentLoaded', inject);
  }

})();
