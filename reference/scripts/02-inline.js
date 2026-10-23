(function(){const storageKey = "tc-cookie-consent";
const consentVersion = 2;
const consentMaxAgeMs = 31536000000;
const pixelId = "2861331167599604";

	(function () {
		let loaded = false;

		function readConsent() {
			try {
				var parsed = JSON.parse(localStorage.getItem(storageKey) || 'null');
				var updatedAt = Date.parse(parsed && parsed.updatedAt);
				if (
					parsed &&
					parsed.version === consentVersion &&
					typeof parsed.advertising === 'boolean' &&
					Number.isFinite(updatedAt) &&
					Date.now() - updatedAt <= consentMaxAgeMs
				) {
					return parsed;
				}
			} catch (e) {}
			return null;
		}

		function loadMetaPixel() {
			if (loaded) return;
			loaded = true;

			!function(f,b,e,v,n,t,s) {
				if (f.fbq) return;

				n = f.fbq = function() {
					n.callMethod
						? n.callMethod.apply(n, arguments)
						: n.queue.push(arguments);
				};

				if (!f._fbq) f._fbq = n;

				n.push = n;
				n.loaded = true;
				n.version = '2.0';
				n.queue = [];

				t = b.createElement(e);
				t.async = true;
				t.src = v;

				s = b.getElementsByTagName(e)[0];
				s.parentNode.insertBefore(t, s);
			}(
				window,
				document,
				'script',
				'https://connect.facebook.net/en_US/fbevents.js'
			);

			window.fbq('init', pixelId);
			window.fbq('track', 'PageView');
		}

		var storedConsent = readConsent();
		if (storedConsent && storedConsent.advertising) loadMetaPixel();

		window.addEventListener('tc:consent-changed', function (event) {
			if (event.detail.advertising) {
				loadMetaPixel();
				if (window.fbq) window.fbq('consent', 'grant');
			} else if (window.fbq) {
				window.fbq('consent', 'revoke');
			}
		});

		document.addEventListener('click', function (event) {
			if (!window.fbq) return;
			if (!(event.target instanceof Element)) return;

			const link = event.target.closest('a');
			if (!link) return;

			const href = link.href || '';

			const isTakeControlIOS =
				href.includes('apps.apple.com') &&
				href.includes('id6790032465');

			const isTakeControlAndroid =
				href.includes('play.google.com/store/apps/details') &&
				href.includes('id=com.takecontrol.app');

			if (!isTakeControlIOS && !isTakeControlAndroid) return;

			window.fbq('trackCustom', 'AppDownloadClick', {
				store: isTakeControlIOS ? 'ios' : 'android',
				page_path: window.location.pathname,
			});
		});
	})();
})();