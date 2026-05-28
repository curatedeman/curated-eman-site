(function () {

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

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    markActive();
  });

})();