(function(){const storageKey = "tc-cookie-consent";
const consentVersion = 2;
const consentMaxAgeMs = 31536000000;
const projectId = "y97gkapkjm";

  (function () {
    var loaded = false;

    function readConsent() {
      try {
        var parsed = JSON.parse(localStorage.getItem(storageKey) || 'null');
        var updatedAt = Date.parse(parsed && parsed.updatedAt);
        if (
          parsed &&
          parsed.version === consentVersion &&
          typeof parsed.analytics === 'boolean' &&
          typeof parsed.advertising === 'boolean' &&
          Number.isFinite(updatedAt) &&
          Date.now() - updatedAt <= consentMaxAgeMs
        ) {
          return parsed;
        }
      } catch (e) {}
      return null;
    }

    function setClarityConsent(preferences) {
      if (typeof window.clarity !== 'function') return;
      window.clarity('consentv2', {
        ad_Storage: preferences.advertising ? 'granted' : 'denied',
        analytics_Storage: preferences.analytics ? 'granted' : 'denied',
      });
    }

    function loadClarity(preferences) {
      if (loaded || !preferences.analytics) return;
      loaded = true;
      window.clarity = window.clarity || function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };
      setClarityConsent(preferences);

      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.clarity.ms/tag/' + projectId;
      document.head.appendChild(script);
    }

    var storedConsent = readConsent();
    if (storedConsent && storedConsent.analytics) loadClarity(storedConsent);

    window.addEventListener('tc:consent-changed', function (event) {
      var preferences = event.detail;
      if (preferences.analytics) {
        loadClarity(preferences);
        setClarityConsent(preferences);
      } else if (typeof window.clarity === 'function') {
        setClarityConsent(preferences);
        window.clarity('consent', false);
      }
    });
  })();
})();