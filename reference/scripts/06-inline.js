(function () {
    function initContentNavScroll() {
      var nav = document.querySelector('.content-nav');
      if (!nav || nav.dataset.scrollReady) return;
      nav.dataset.scrollReady = '1';

      function setScrolled(scrolled) {
        nav.classList.toggle('is-scrolled', scrolled);
        nav.setAttribute('data-scrolled', scrolled ? 'true' : 'false');
        if (scrolled) {
          var open = nav.querySelector('.lang-switch.is-open');
          if (open instanceof HTMLElement) {
            var menu = open.querySelector('.lang-switch__menu');
            var trigger = open.querySelector('.lang-switch__trigger');
            if (menu) menu.hidden = true;
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            open.classList.remove('is-open');
          }
        }
      }

      function onScroll() {
        setScrolled(window.scrollY > 12);
      }

      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initContentNavScroll);
    } else {
      initContentNavScroll();
    }

    document.addEventListener('astro:page-load', initContentNavScroll);
  })();