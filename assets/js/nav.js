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

  function initAmazonRedirect() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var isPinterest = /Pinterest/i.test(navigator.userAgent);
    if (!isMobile || isPinterest) return;

    document.querySelectorAll('a[href*="amazon.com"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var url = this.href;
        var appOpened = false;

        window.addEventListener('blur', function() {
          appOpened = true;
        }, { once: true });

        window.location = url.replace('https://', 'amzn://');

        setTimeout(function() {
          if (!appOpened) {
            window.open(url, '_blank');
          }
        }, 1500);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    markActive();
    initAmazonRedirect();
  });

})();