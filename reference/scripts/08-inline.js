(function () {
    var PREF_KEY = 'tc_lang_pref';
    var DONE_KEY = 'tc_lang_hint_done';
    var BOT_RE = /bot|crawl|spider|slurp|bingpreview|mediapartners|google-inspectiontool|lighthouse|headlesschrome|facebookexternalhit|embedly|quora link preview|whatsapp|telegrambot|discordbot|preview/i;
    if (BOT_RE.test(navigator.userAgent || '')) return;

    var root = document.querySelector('[data-lang-hint]');
    if (!(root instanceof HTMLElement)) return;

    var current = root.getAttribute('data-current-lang') || 'pt';
    var textEl = root.querySelector('[data-lang-hint-text]');
    var closeBtn = root.querySelector('[data-lang-hint-close]');

    function dismiss() {
      root.hidden = true;
      root.classList.remove('is-visible');
      try {
        localStorage.setItem(DONE_KEY, '1');
      } catch (e) {}
    }

    function positionNearTrigger() {
      var trigger = document.querySelector('[data-lang-switch="nav"] [data-lang-switch-trigger]');
      if (!(trigger instanceof HTMLElement)) return false;

      var rect = trigger.getBoundingClientRect();
      var tipWidth = root.offsetWidth || 260;
      var left = rect.left + rect.width / 2 - tipWidth / 2;
      left = Math.max(12, Math.min(left, window.innerWidth - tipWidth - 12));
      root.style.top = rect.bottom + 14 + 'px';
      root.style.left = left + 'px';

      var arrow = root.querySelector('.lang-hint__arrow');
      if (arrow instanceof HTMLElement) {
        var arrowLeft = rect.left + rect.width / 2 - left;
        arrow.style.left = Math.max(16, Math.min(arrowLeft, tipWidth - 16)) + 'px';
      }
      return true;
    }

    function show(suggested) {
      if (!(textEl instanceof HTMLElement)) return;
      var msg = root.getAttribute('data-hint-' + suggested) || '';
      if (!msg) return;
      textEl.textContent = msg;
      root.hidden = false;
      // measure then place
      requestAnimationFrame(function () {
        if (!positionNearTrigger()) {
          root.hidden = true;
          return;
        }
        root.classList.add('is-visible');
      });
    }

    try {
      if (localStorage.getItem(DONE_KEY)) return;
      var pref = localStorage.getItem(PREF_KEY);
      if (pref === 'pt' || pref === 'en' || pref === 'es' || pref === 'de' || pref === 'fr' || pref === 'it' || pref === 'nl' || pref === 'sv' || pref === 'ja') return;
    } catch (e) {}

    var PT = { BR: 1, PT: 1, AO: 1, MZ: 1, CV: 1, GW: 1, ST: 1, TL: 1 };
    var ES = {
      ES: 1, MX: 1, AR: 1, CO: 1, CL: 1, PE: 1, VE: 1, EC: 1, GT: 1, CU: 1,
      BO: 1, DO: 1, HN: 1, PY: 1, SV: 1, NI: 1, CR: 1, PA: 1, UY: 1, PR: 1, GQ: 1,
    };
    var DE = { DE: 1, AT: 1, CH: 1, LI: 1 };
    var FR = { FR: 1, BE: 1, MC: 1, LU: 1 };
    var IT = { IT: 1, SM: 1, VA: 1 };
    var NL = { NL: 1, SR: 1, AW: 1, CW: 1, SX: 1, BQ: 1 };
    var SV = { SE: 1, AX: 1 };
    var JA = { JP: 1 };

    fetch('/cdn-cgi/trace', { cache: 'no-store' })
      .then(function (r) { return r.text(); })
      .then(function (text) {
        var match = text.match(/\bloc=([A-Z]{2})\b/);
        var cc = match ? match[1] : '';
        var suggested = PT[cc] ? 'pt' : ES[cc] ? 'es' : IT[cc] ? 'it' : NL[cc] ? 'nl' : SV[cc] ? 'sv' : JA[cc] ? 'ja' : FR[cc] ? 'fr' : DE[cc] ? 'de' : 'en';
        if (suggested === current) return;
        show(suggested);
      })
      .catch(function () {});

    if (closeBtn) closeBtn.addEventListener('click', dismiss);
    document.addEventListener('tc:lang-switch-open', dismiss);
    window.addEventListener('resize', function () {
      if (!root.hidden) positionNearTrigger();
    }, { passive: true });
    window.addEventListener('scroll', function () {
      if (root.hidden) return;
      var navScrolled = document.querySelector(
        '.content-nav.is-scrolled, .content-nav[data-scrolled="true"]'
      );
      if (navScrolled) {
        root.classList.remove('is-visible');
        return;
      }
      if (positionNearTrigger()) root.classList.add('is-visible');
    }, { passive: true });
  })();