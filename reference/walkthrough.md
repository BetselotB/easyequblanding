# Walkthrough: how the page is built and how it moves

One part per top-level section, top to bottom, as measured at 1440 px. Sizes are CSS pixels; colours are as computed. Every file named here is in this folder. How things move and behave (scrolling, page changes, the menu, hovers), step by step, is in `reference/motion/README.md`.

## 01 · nav

- **Box:** 1440×54 px, starting 24 px from the top. Background rgb(234, 234, 231), text rgb(18, 18, 17).
- **Layout:** flex row of 3, gap 24px, space-between/center.
- **Type:** Figtree 400 16px/normal · Figtree 500 14px/18.9px · Figtree 600 14px/normal · Figtree 700 14px/18.9px · Figtree 600 14px/16px (family weight size/line-height, most text first).
- **Inside:** 3 paragraphs, 5 buttons, 25 links, 2 pictures, 11 drawings.
- **Look:** `reference/sections/01-nav.jpg` and its anatomy `reference/sections/01-nav.anatomy.jpg`.
- **Markup:** `reference/sections/01-nav.html`.
- **Drawings:** `reference/assets/svg/001-logo-nav.svg` (logo, 165×26), `reference/assets/svg/002-icon-nav.svg` (icon, 16×16).
- **Pictures:** `reference/assets/images/002-app-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/003-play-store-takecontrol-qr-code.png` (200×200).
- **Hover:** `.lang-switch__trigger[data-astro-cid-a2mxz4y6]:hover` changes background, border-color; `.lang-switch__option[data-astro-cid-a2mxz4y6]:hover` changes background, color; `.lang-switch[data-astro-cid-a2mxz4y6][data-variant="nav"] .lang-switch__trigger[data-astro-cid-a2mxz4y6]:hover` changes background, border-color, color; `.lang-switch[data-astro-cid-a2mxz4y6][data-variant="nav"] .lang-switch__option[data-astro-cid-a2mxz4y6]:hover` changes background, color; `.store-btn[data-astro-cid-ye7h23vz]:hover` changes opacity; `.lang-hint__close[data-astro-cid-4ppyjw5u]:hover` changes background, color; `.content-nav__link:hover` changes color; `.content-nav__cta:hover` changes opacity; `.content-nav__menu-toggle:hover` changes background; `.content-nav__mobile-link:hover` changes background, color.
- **Control states:** `reference/components/01-nav-link.jpg` (nav-link a.content-nav__link:nth-of-type(1): rest, hover, focus).

## 02 · hero

- **Box:** 1440×1623 px, starting 0 px from the top. Background rgb(234, 234, 231), text rgb(18, 18, 17).
- **Layout:** flex row of 2, gap 10px, center/normal.
- **Type:** Figtree 500 14.8px/16.914px · Figtree 500 12.686px/16.914px · Figtree 600 19.028px/23.257px · Figtree 600 14.8px/16.914px · Figtree 500 14px/18.9px (family weight size/line-height, most text first).
- **Inside:** 1 heading, 147 paragraphs, 2 buttons, 2 links, 706 pictures, 4 drawings.
- **Look:** `reference/sections/02-hero.jpg` and its anatomy `reference/sections/02-hero.anatomy.jpg`.
- **Markup:** `reference/sections/02-hero.html`.
- **Drawings:** `reference/assets/svg/003-icon-hero.svg` (icon, 34×34), `reference/assets/svg/004-icon-hero.svg` (icon, 18×18), `reference/assets/svg/005-icon-hero.svg` (icon, 34×34), `reference/assets/svg/006-icon-hero.svg` (icon, 18×18).
- **Pictures:** `reference/assets/images/002-app-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/003-play-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/004-take-control-app-en.webp` (513×878), `reference/assets/images/005-hero-group-caret.svg`, `reference/assets/images/006-hero-avatar.webp` (64×64), `reference/assets/images/007-hero-avatar.webp` (64×64), `reference/assets/images/008-hero-avatar.webp` (64×64), `reference/assets/images/009-hero-group-clock.svg`, `reference/assets/images/010-hero-group-chart-pie.svg`, `reference/assets/images/011-hero-group-cover.webp` (136×136).
- **Motion:**
  - choreography: 6 elements (article) animate `--orbit-rotation` starting 2282–2282 ms after load together, each for about 20523 ms
  - choreography: 3 elements (img) animate `--cover-shadow-alpha` starting 2282–2282 ms after load together, each for about 20523 ms
  - choreography: 3 elements (img) animate `--cover-shadow-detail-alpha` starting 2282–2282 ms after load together, each for about 20523 ms
  - choreography: 35 elements (div) animate `--slice-shade-opacity` starting 2282–2282 ms after load together, each for about 19003 ms
  - script writes `--orbit-rotation` on `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1)` 33 times over 20523 ms (on load): from `0deg` to `-60.42240658492005deg`
  - script writes `--orbit-rotation` on `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2)` 33 times over 20523 ms (on load): from `0deg` to `-60.42240658492005deg`
  - script writes `--orbit-rotation` on `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3)` 33 times over 20523 ms (on load): from `0deg` to `-60.42240658492005deg`
  - script writes `--orbit-rotation` on `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(4)` 33 times over 20523 ms (on load): from `0deg` to `-60.42240658492005deg`
  - script writes `--orbit-rotation` on `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(5)` 33 times over 20523 ms (on load): from `0deg` to `-60.42240658492005deg`
  - script writes `--orbit-rotation` on `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(6)` 33 times over 20523 ms (on load): from `0deg` to `-60.42240658492005deg`
  - and 42 more recorded tracks (motion.json `recorded`)
  - scripts add `.is-visible` to 1 element as the page scrolls (first at scrollY 0)
- **Hover:** `.store-btn[data-astro-cid-ye7h23vz]:hover` changes opacity.

## 03 · steps

- **Box:** 1440×602 px, starting 1623 px from the top. Background rgb(234, 234, 231), text rgb(18, 18, 17).
- **Layout:** grid, 3 columns (321.328px 321.328px 321.344px), gap normal.
- **Type:** Figtree 500 16px/20px · Figtree 500 15px/normal · Figtree 600 14px/16px · Figtree 600 18px/22px · Figtree 600 18px/normal (family weight size/line-height, most text first).
- **Inside:** 3 headings, 4 paragraphs, 10 drawings.
- **Look:** `reference/sections/03-steps.jpg` and its anatomy `reference/sections/03-steps.anatomy.jpg`.
- **Markup:** `reference/sections/03-steps.html`.
- **Drawings:** `reference/assets/svg/007-icon-steps.svg` (icon, 16×16), `reference/assets/svg/008-illustration-steps.svg` (illustration, 273×145), `reference/assets/svg/009-illustration-steps.svg` (illustration, 272×144), `reference/assets/svg/010-icon-steps.svg` (icon, 18×18), `reference/assets/svg/011-icon-steps.svg` (icon, 18×18), `reference/assets/svg/012-icon-steps.svg` (icon, 18×18).
- **Motion:**
  - choreography: 141 elements (g) animate `transform` starting 5965–5965 ms after load together, each for about 16834 ms
  - script writes `transform` on `g > g:nth-of-type(2) > g:nth-of-type(1) > g > g:nth-of-type(321)` 88 times over 16834 ms (on load): from `matrix(1,0,0,1,706.5020141601562,1714.5050048828125)` to `matrix(1,0,0,1,706.5020141601562,1418.519287109375)`
  - script writes `transform` on `g > g:nth-of-type(2) > g:nth-of-type(1) > g > g:nth-of-type(320)` 88 times over 16834 ms (on load): from `matrix(1,0,0,1,684.7010498046875,1714.5050048828125)` to `matrix(1,0,0,1,684.7010498046875,1418.519287109375)`
  - script writes `transform` on `g > g:nth-of-type(2) > g:nth-of-type(1) > g > g:nth-of-type(319)` 88 times over 16834 ms (on load): from `matrix(1,0,0,1,654.0859985351562,1714.5050048828125)` to `matrix(1,0,0,1,654.0859985351562,1418.519287109375)`
  - script writes `transform` on `g > g:nth-of-type(2) > g:nth-of-type(1) > g > g:nth-of-type(318)` 88 times over 16834 ms (on load): from `matrix(1,0,0,1,630.6080322265625,1714.5050048828125)` to `matrix(1,0,0,1,630.6080322265625,1418.519287109375)`
  - script writes `transform` on `g > g:nth-of-type(2) > g:nth-of-type(1) > g > g:nth-of-type(317)` 88 times over 16834 ms (on load): from `matrix(1,0,0,1,603.4639892578125,1714.5050048828125)` to `matrix(1,0,0,1,603.4639892578125,1418.519287109375)`
  - script writes `transform` on `g > g:nth-of-type(2) > g:nth-of-type(1) > g > g:nth-of-type(316)` 88 times over 16834 ms (on load): from `matrix(1,0,0,1,718.7670288085938,1686.85107421875)` to `matrix(1,0,0,1,718.7670288085938,1390.8653564453125)`
  - and 135 more recorded tracks (motion.json `recorded`)
- **Film:** `reference/motion/films/01-scripted-steps.jpg` (Scripted div: 142 moving parts (transform); it is `main > section#steps:nth-of-type(2) > div.steps__container:nth-of-type(1) > div.steps__row` in the markup; frames captioned with ms).

## 04 · features

- **Box:** 1440×2004 px, starting 2225 px from the top. Background rgb(255, 255, 255), text rgb(18, 18, 17).
- **Layout:** grid, 2 columns (472px 472px), gap 40px 20px.
- **Type:** Figtree 600 20px/24px · Figtree 500 20px/24px · Figtree 600 18px/22px · Figtree 500 42px/48px (family weight size/line-height, most text first).
- **Inside:** 7 headings, 7 paragraphs, 10 pictures, 12 drawings.
- **Look:** `reference/sections/04-features.jpg` and its anatomy `reference/sections/04-features.anatomy.jpg`.
- **Markup:** `reference/sections/04-features.html`.
- **Drawings:** `reference/assets/svg/013-icon-features.svg` (icon, 16×16), `reference/assets/svg/014-illustration-features.svg` (illustration, 157×38), `reference/assets/svg/015-icon-features.svg` (icon, 16×16), `reference/assets/svg/016-icon-features.svg` (icon, 26×17), `reference/assets/svg/017-illustration-features.svg` (illustration, 372×108), `reference/assets/svg/018-icon-features.svg` (icon, 16×16), `reference/assets/svg/019-illustration-features.svg` (illustration, 320×303), `reference/assets/svg/020-icon-features.svg` (icon, 16×16), `reference/assets/svg/021-icon-features.svg` (icon, 16×16), `reference/assets/svg/022-illustration-features.svg` (illustration, 147×163), `reference/assets/svg/023-icon-features.svg` (icon, 16×16), `reference/assets/svg/024-icon-features.svg` (icon, 26×17).
- **Pictures:** `reference/assets/images/022-pattern-budget.png` (947×803), `reference/assets/images/023-budgets-en.svg`, `reference/assets/images/024-voice-registration.webp` (944×800), `reference/assets/images/026-offline.webp` (942×800), `reference/assets/images/028-pattern-repeat.png` (1007×802), `reference/assets/images/029-pattern-security.webp` (944×800), `reference/assets/images/030-en.webp` (813×604), `reference/assets/images/031-scan.webp` (944×800), `reference/assets/images/046-inline.png` (221×167), `reference/assets/images/047-inline.png` (223×170).
- **Motion:**
  - CSS `mfc-budget-float` 4s ease-in-out infinite on 1 element (e.g. `div.mf__grid > article.mfc.mfc--budget:nth-of-type(1) > div.mfc__media.mfc__media--widget:nth-of-type(1) > div.mfc__widget-ui:nth-of-type(2) > img.mfc__budget-img`)
  - choreography: 7 elements (g) animate `transform` starting 5365–6100 ms after load, about 140 ms apart, each for about 17274 ms
  - choreography: 4 elements (g) animate `opacity` starting 5505–6100 ms after load, about 595 ms apart, each for about 15741 ms, and keep looping
  - script writes `transform` on `svg > g > g > g > g` 88 times over 17434 ms (on load): from `matrix(1.0009000301361084,0,0,0.9230999946594238,969,6)` to `matrix(1.0009000301361084,0,0,0.9230999946594238,904.3699951171875,6)`
  - script writes `transform` on `div.mfc__media.mfc__media--receipt:nth-of-type(1) > div.mfc__receipt-lottie > svg > g > g:nth-of-type(2)` 88 times over 17274 ms (on load): from `matrix(1,0,0,1,229,60)` to `matrix(1,0,0,1,229,223.5897216796875)`
  - script writes `transform` on `div.mfc__media.mfc__media--receipt:nth-of-type(1) > div.mfc__receipt-lottie > svg > g > g:nth-of-type(1)` 88 times over 17274 ms (on load): from `matrix(1,0,0,0,229,59)` to `matrix(1,0,0,-1.9224421977996826,229,145.69203186035156)`
  - script writes `transform` on `div.mfc__media.mfc__media--receipt:nth-of-type(1) > div.mfc__receipt-lottie > svg > g > g:nth-of-type(3)` 86 times over 17274 ms (on load): from `matrix(1,0,0,1,229,254)` to `matrix(1.0049593448638916,0,0,1.0049593448638916,229,254)`
  - script writes `transform` on `g:nth-of-type(3) > g:nth-of-type(2) > g > g > g:nth-of-type(5)` 70 times over 16699 ms (on load): from `matrix(1,0,0,1,21,21)` to `matrix(0.9200485944747925,-0.3918043076992035,0.3918043076992035,0.9200485944747925,14.762943267822266,30.435115814208984)`
  - script writes `transform` on `div.mfc__widget-ui:nth-of-type(2) > div.mfc__recurring-lottie > svg > g > g:nth-of-type(3)` 13 times over 3125 ms (on load): from `matrix(1,0,0,1,5,97)` to `matrix(1,0,0,1,5,2)`
  - and 5 more recorded tracks (motion.json `recorded`)
- **Hover:** `.mfc--receipt[data-astro-cid-z74wl6x4]:hover .mfc__receipt-img[data-astro-cid-z74wl6x4]` changes transform; `.mfc--video[data-astro-cid-z74wl6x4]:hover .mfc__media-zoom[data-astro-cid-z74wl6x4]` changes transform.

## 05 · showcase

- **Box:** 1440×1040 px, starting 4229 px from the top. Background rgb(255, 255, 255), text rgb(18, 18, 17).
- **Layout:** flex row of 2, gap 120px, normal/stretch.
- **Type:** Figtree 500 16px/20px · Figtree 500 14px/18.9px · Figtree 500 20px/24px · Figtree 700 14px/18.9px · Figtree 600 18px/22px (family weight size/line-height, most text first).
- **Inside:** 1 heading, 7 paragraphs, 6 buttons, 2 links, 3 pictures, 4 drawings.
- **Markup:** `reference/sections/05-showcase.html`.
- **Drawings:** `reference/assets/svg/025-icon-showcase.svg` (icon, 34×34), `reference/assets/svg/026-icon-showcase.svg` (icon, 18×18), `reference/assets/svg/027-icon-showcase.svg` (icon, 34×34), `reference/assets/svg/028-icon-showcase.svg` (icon, 18×18).
- **Pictures:** `reference/assets/images/002-app-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/003-play-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/032-group-en.webp` (800×1575).
- **Motion:**
  - scripts add `.is-revealed` to 1 element as the page scrolls (first at scrollY 0)
- **Hover:** `.store-btn[data-astro-cid-ye7h23vz]:hover` changes opacity.

## 06 · features

- **Box:** 1440×1592 px, starting 5269 px from the top. Background rgb(234, 234, 231), text rgb(18, 18, 17).
- **Layout:** grid, 3 columns (314.656px 314.672px 314.656px), gap 4px.
- **Type:** Figtree 500 16px/20px · Figtree 600 18px/22px · Figtree 500 20px/24px · Figtree 500 36px/40px · Figtree 500 42px/48px (family weight size/line-height, most text first).
- **Inside:** 14 headings, 14 paragraphs, 1 picture, 16 drawings.
- **Markup:** `reference/sections/06-features.html`.
- **Drawings:** `reference/assets/svg/029-icon-features.svg` (icon, 20×20), `reference/assets/svg/030-icon-features.svg` (icon, 20×20), `reference/assets/svg/031-icon-features.svg` (icon, 20×20), `reference/assets/svg/032-icon-features.svg` (icon, 26×17), `reference/assets/svg/033-icon-features.svg` (icon, 20×20), `reference/assets/svg/034-icon-features.svg` (icon, 20×20), `reference/assets/svg/035-icon-features.svg` (icon, 20×20), `reference/assets/svg/036-icon-features.svg` (icon, 20×20), `reference/assets/svg/037-icon-features.svg` (icon, 20×20), `reference/assets/svg/038-icon-features.svg` (icon, 20×20), `reference/assets/svg/039-icon-features.svg` (icon, 20×20), `reference/assets/svg/040-icon-features.svg` (icon, 20×20), and 4 more.
- **Pictures:** `reference/assets/images/033-widget-illustration-en.webp` (952×800).
- **Hover:** `.fgc[data-astro-cid-hjwy6tez]:hover` changes background.

## 07 · splitwise-migration

- **Box:** 1440×962 px, starting 6861 px from the top. Background rgb(247, 247, 246), text rgb(18, 18, 17).
- **Layout:** flex row of 5, gap 6px, normal/stretch.
- **Type:** Figtree 500 16px/20px · Figtree 500 20px/24px · Figtree 500 14px/16px · Figtree 500 42px/48px · Figtree 600 12px/16px (family weight size/line-height, most text first).
- **Inside:** 1 heading, 6 paragraphs, 1 button, 2 links, 1 picture, 15 drawings.
- **Markup:** `reference/sections/07-splitwise-migration.html`.
- **Drawings:** `reference/assets/svg/045-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/046-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/047-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/048-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/049-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/050-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/051-icon-splitwise-migration.svg` (icon, 16×16), `reference/assets/svg/052-icon-splitwise-migration.svg` (icon, 27×27), `reference/assets/svg/053-icon-splitwise-migration.svg` (icon, 16×16, ×7).
- **Pictures:** `reference/assets/images/034-pattern-take-control.svg`.
- **Hover:** `.sm__subtitle-link[data-astro-cid-a6yplpsy]:hover` changes text-decoration; `.sm__tc-btn[data-astro-cid-a6yplpsy]:hover` changes opacity.

## 08 · faq

- **Box:** 1440×745 px, starting 7823 px from the top. Background rgb(18, 18, 17), text rgb(255, 255, 255).
- **Layout:** grid, 2 columns (430px 494px), gap 40px.
- **Type:** Figtree 500 16px/20px · Figtree 600 16px/20px · Figtree 500 36px/40px · Figtree 600 14px/18px · Figtree 600 18px/22px (family weight size/line-height, most text first).
- **Inside:** 1 heading, 8 paragraphs, 8 buttons, 4 links, 16 drawings.
- **Markup:** `reference/sections/08-faq.html`.
- **Drawings:** `reference/assets/svg/054-icon-faq.svg` (icon, 14×14), `reference/assets/svg/055-icon-faq.svg` (icon, 12×12), `reference/assets/svg/056-icon-faq.svg` (icon, 12×12, ×7), `reference/assets/svg/057-icon-faq.svg` (icon, 14×14, ×7).
- **Hover:** `.faq__view-all[data-astro-cid-dairopq3]:hover span[data-astro-cid-dairopq3]` changes text-decoration; `.faq-item__a[data-astro-cid-dairopq3] a:hover` changes text-decoration.

## 09 · footer

- **Box:** 1440×1197 px, starting 8568 px from the top. Background rgb(18, 18, 17), text rgb(255, 255, 255).
- **Layout:** flex row of 2, gap normal, normal/center.
- **Type:** Figtree 500 14px/18.9px · Figtree 600 14px/normal · Figtree 500 14px/16px · Figtree 600 12px/normal · Figtree 500 18px/22px (family weight size/line-height, most text first).
- **Inside:** 6 headings, 4 paragraphs, 4 buttons, 34 links, 8 pictures, 13 drawings.
- **Markup:** `reference/sections/09-footer.html`.
- **Drawings:** `reference/assets/svg/058-logo-footer.svg` (logo, 36×36), `reference/assets/svg/059-icon-footer.svg` (icon, 34×34), `reference/assets/svg/060-icon-footer.svg` (icon, 18×18), `reference/assets/svg/061-icon-footer.svg` (icon, 34×34), `reference/assets/svg/062-icon-footer.svg` (icon, 18×18), `reference/assets/svg/063-logo-footer.svg` (logo, 127×20), `reference/assets/svg/064-icon-footer.svg` (icon, 26×17), `reference/assets/svg/065-icon-footer.svg` (icon, 16×16), `reference/assets/svg/066-icon-footer.svg` (icon, 16×16), `reference/assets/svg/067-icon-footer.svg` (icon, 16×16), `reference/assets/svg/068-icon-footer.svg` (icon, 16×16), `reference/assets/svg/069-icon-footer.svg` (icon, 12×12), and 1 more.
- **Pictures:** `reference/assets/images/002-app-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/003-play-store-takecontrol-qr-code.png` (200×200), `reference/assets/images/035-cta.webp` (1149×822), `reference/assets/images/036-chatgpt.svg`, `reference/assets/images/037-claude.svg`, `reference/assets/images/038-gemini.svg`, `reference/assets/images/039-perplexity.svg`, `reference/assets/images/040-grok.svg`.
- **Hover:** `.lang-switch__trigger[data-astro-cid-a2mxz4y6]:hover` changes background, border-color; `.lang-switch__option[data-astro-cid-a2mxz4y6]:hover` changes background, color; `.store-btn[data-astro-cid-ye7h23vz]:hover` changes opacity; `.cta[data-astro-cid-nbpnc35u]:hover .cta__phone[data-astro-cid-nbpnc35u]:not(.cta__phone--content)` changes transform; `.ft__social[data-astro-cid-nbpnc35u] a[data-astro-cid-nbpnc35u]:hover` changes background, border-color, color; `.ft__col[data-astro-cid-nbpnc35u] a[data-astro-cid-nbpnc35u]:hover` changes color; `.ft__email[data-astro-cid-nbpnc35u]:hover` changes color; `.ft__ai-link[data-astro-cid-nbpnc35u]:hover` changes background, opacity, transform; `.ft__legal[data-astro-cid-nbpnc35u] a[data-astro-cid-nbpnc35u]:hover` changes color; `.ft__legal[data-astro-cid-nbpnc35u] button[data-astro-cid-nbpnc35u]:hover` changes color.

## 10 · banner

- **Box:** 1440×50 px, starting 834 px from the top. Background rgb(255, 255, 255), text rgb(18, 18, 17).
- **Layout:** flex row of 2, gap 12px, space-between/center.
- **Type:** Figtree 400 14px/19.6px · Figtree 500 13px/18.2px · Figtree 600 12px/13.2px · Figtree 700 14px/normal · Figtree 700 20px/normal (family weight size/line-height, most text first).
- **Inside:** 2 headings, 3 paragraphs, 6 buttons, 2 links, 2 drawings, 3 fields.
- **Look:** `reference/sections/10-banner.jpg` and its anatomy `reference/sections/10-banner.anatomy.jpg`.
- **Markup:** `reference/sections/10-banner.html`.
- **Drawings:** `reference/assets/svg/071-icon-banner.svg` (icon, 18×18).
- **Hover:** `.consent-banner__btn--primary[data-astro-cid-2effgw6e]:hover` changes background; `.consent-banner__btn--secondary[data-astro-cid-2effgw6e]:hover` changes background.
