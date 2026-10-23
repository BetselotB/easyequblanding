(function(){const storageKey = "tc-cookie-consent";
const consentVersion = 2;
const consentMaxAgeMs = 31536000000;

	(function () {
		var loaded = false;
		var started = false;

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

		function loadScript() {
			if (loaded) return;
			loaded = true;
			var s = document.createElement('script');
			s.async = true;
			s.src = 'https://www.googletagmanager.com/gtag/js?id=G-FDKT3VST6C';
			document.head.appendChild(s);
		}

		function start(preferences) {
			if (!preferences || !preferences.analytics) return;

			if (!started) {
				started = true;
				window.dataLayer = window.dataLayer || [];
				window.gtag = function () { window.dataLayer.push(arguments); };

				window.gtag('consent', 'default', {
					ad_storage: 'denied',
					ad_user_data: 'denied',
					ad_personalization: 'denied',
					analytics_storage: 'denied',
				});
				window.gtag('js', new Date());
				window.gtag('config', 'G-FDKT3VST6C');
			}

			window.gtag('consent', 'update', {
				ad_storage: preferences.advertising ? 'granted' : 'denied',
				ad_user_data: preferences.advertising ? 'granted' : 'denied',
				ad_personalization: preferences.advertising ? 'granted' : 'denied',
				analytics_storage: 'granted',
			});

			loadScript();
		}

		var storedConsent = readConsent();
		if (storedConsent) start(storedConsent);

		window.addEventListener('tc:consent-changed', function (event) {
			var preferences = event.detail;
			if (preferences.analytics) {
				start(preferences);
			} else if (typeof window.gtag === 'function') {
				window.gtag('consent', 'update', {
					ad_storage: preferences.advertising ? 'granted' : 'denied',
					ad_user_data: preferences.advertising ? 'granted' : 'denied',
					ad_personalization: preferences.advertising ? 'granted' : 'denied',
					analytics_storage: 'denied',
				});
			}
		});

		document.addEventListener('click', function (event) {
			if (typeof window.gtag !== 'function') return;
			if (!(event.target instanceof Element)) return;

			var link = event.target.closest('a');
			if (!link) return;

			var href = link.href || '';
			var isTakeControlIOS =
				href.includes('apps.apple.com') &&
				href.includes('id6790032465');
			var isTakeControlAndroid =
				href.includes('play.google.com/store/apps/details') &&
				href.includes('id=com.takecontrol.app');

			if (!isTakeControlIOS && !isTakeControlAndroid) return;

			window.gtag('event', 'app_store_click', {
				store: isTakeControlIOS ? 'ios' : 'android',
				page_path: window.location.pathname,
				link_url: href,
				link_text: (link.textContent || '').trim().slice(0, 100),
				page_language: document.documentElement.lang || '',
			});
		});
	})();
})();