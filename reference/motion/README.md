# How it moves, step by step

Every animation and behaviour found on the page, as recipes: what starts it, which element, which property from what to what, for how long, on which curve, in what order. Times are from the moment the trigger happens. Build them one at a time and check each against its film (frames captioned with their time, or with the scroll position).

Measured at 1440 px on gettakecontrol.app. Values in `code` are exactly as the browser reported them.

## The page's motion language

- **Curves:** `ease-in-out` (1×).
- **Durations:** 4000 ms.
- **Easing toward the scroll:** values chase their target by 0.333 of the remaining distance each frame (`current += (target - current) * 0.333` in a requestAnimationFrame loop), coming to rest about 2478 ms after the scroll stops.

## When the page scrolls

### 1. `main > section.hero.is-revealed` follows the scroll

- **What:** it changes `--hero-orbit-scroll-scale` as the page scrolls.
- `main > section.hero.is-revealed:nth-of-type(1)` `--hero-orbit-scroll-scale`: `1.000000` → `0.936398` over 15 frames, at rest 2475 ms after the scroll; eases toward its target by 0.257 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.257` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/17-inline.js` at character 216 (`is-revealed`: `duce)").matches){for(const e of t)e.classList.add("is-revealed");return}r=new IntersectionObserver(e=>{for(const o of e)`).

### 2. `div.hero-orbit__scaler > div.hero-orbit__viewport > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card` follows the scroll

- **What:** 6 elements like it change `--orbit-rotation` as the page scrolls.
- `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1)` `--orbit-rotation`: `-120deg` → `-183.67471996146375deg` over 9 frames, at rest 2478 ms after the scroll; eases toward its target by 0.129 a frame.
- `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2)` `--orbit-rotation`: `-120deg` → `-183.67471996146375deg` over 9 frames, at rest 2478 ms after the scroll; eases toward its target by 0.129 a frame.
- `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3)` `--orbit-rotation`: `-120deg` → `-183.67471996146375deg` over 9 frames, at rest 2478 ms after the scroll; eases toward its target by 0.129 a frame.
- `div.hero-orbit__scaler > div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(4)` `--orbit-rotation`: `-120deg` → `-183.67471996146375deg` over 9 frames, at rest 2478 ms after the scroll; eases toward its target by 0.129 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.129` each frame); write the values above from the eased copy, so it glides on after the wheel stops.

### 3. `div.hero-orbit__viewport > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card > div.hero-group-card__slice` follows the scroll

- **What:** 26 elements like it change `--slice-shade-opacity` as the page scrolls.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(21)` `--slice-shade-opacity`: `0.094` → `0.000` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.718 a frame.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(22)` `--slice-shade-opacity`: `0.102` → `0.000` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.696 a frame.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(24)` `--slice-shade-opacity`: `0.119` → `0.001` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.673 a frame.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(6) > div.hero-group-card__slice:nth-of-type(1)` `--slice-shade-opacity`: `0.002` → `0.134` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.615 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.718` each frame); write the values above from the eased copy, so it glides on after the wheel stops.

### 4. `div.hero-orbit__viewport > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card > img.hero-group-card__cover-float` follows the scroll

- **What:** 3 elements like it change `--cover-shadow-alpha`, `--cover-shadow-detail-alpha` as the page scrolls.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > img.hero-group-card__cover-float` `--cover-shadow-alpha`: `0.162` → `0.000` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.779 a frame.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha`: `0.108` → `0.000` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.778 a frame.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(4) > img.hero-group-card__cover-float` `--cover-shadow-alpha`: `0.120` → `0.155` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.105 a frame.
- `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(4) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha`: `0.080` → `0.103` over 6 frames, at rest 2478 ms after the scroll; eases toward its target by 0.154 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.779` each frame); write the values above from the eased copy, so it glides on after the wheel stops.

## Moving scenes (filmed)

### 5. Scripted div: 142 moving parts (transform)

- **Film:** `reference/motion/films/01-scripted-steps.jpg` (captions are ms).
- **Element:** `main > section#steps:nth-of-type(2) > div.steps__container:nth-of-type(1) > div.steps__row` in section `03-steps`.

## Hovering (what scripts do; CSS hover rules are in styles.css)

### 6. Hovering `article.hero-group-card`

- **Text typewriter:** `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span` runs `T` → `Tr` → `Tri` → `Trip` over 538 ms.
- 74 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-alpha` `0.163` → `0.162`
- 74 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.079` → `0.080`
- 74 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(1)` `--slice-shade-opacity` `0.116` → `0.119`
- 74 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(2)` `--slice-shade-opacity` `0.107` → `0.110`
- 74 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.099` → `0.102`
- 74 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(4)` `--slice-shade-opacity` `0.091` → `0.094`
- 19212 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))
- **Film:** `reference/motion/hovers/01-article-hero-group-card.jpg`.

### 7. Hovering `div.hero-group-card__panel`

- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(1)` `--slice-back-cover` `0` → `1`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(1)` `--slice-opacity` `1.000` → `0.700`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(2)` `--slice-back-cover` `0` → `1`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(2)` `--slice-opacity` `1.000` → `0.700`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(2)` `--slice-shade-opacity` `0.000` → `0.008` (4 steps)
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-opacity` `0.273` → `0.000`
- 23382 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 8. Hovering `div.hero-group-card__header`

- 253 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(2)` `--slice-shade-opacity` `0.001` → `0.109` (5 steps)
- 253 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.010` → `0.001` (5 steps)
- 253 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(4)` `--slice-shade-opacity` `0.012` → `0.001` (5 steps)
- 253 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(5)` `--slice-shade-opacity` `0.014` → `0.000` (4 steps)
- 253 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(7)` `--slice-shade-opacity` `0.019` → `0.000` (4 steps)
- 253 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(8)` `--slice-shade-opacity` `0.022` → `0.000` (4 steps)
- 27732 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))
- **Film:** `reference/motion/hovers/03-div-hero-group-card-head.jpg`.

### 9. Hovering `span.hero-group-card__cover-placeholder`

- **Text typewriter:** `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span` runs `Hango` → `Hangou` → `Hangout` over 381 ms.
- 774 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-alpha` `0.120` → `0.170` (3 steps)
- 774 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.080` → `0.113` (3 steps)
- 774 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(1)` `--slice-shade-opacity` `0.119` → `0.000` (3 steps)
- 774 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(2)` `--slice-shade-opacity` `0.110` → `0.000` (3 steps)
- 774 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.102` → `0.000` (3 steps)
- 774 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(4)` `--slice-shade-opacity` `0.094` → `0.000` (3 steps)
- 31997 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 10. Hovering `div.hero-group-card__info`

- **Text typewriter:** `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span` runs `T` → `Tr` → `Tri` → `Trip` over 166 ms.
- 13 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(1)` `--slice-shade-opacity` `0.118` → `0.119`
- 13 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.101` → `0.102`
- 13 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(4)` `--slice-shade-opacity` `0.093` → `0.094`
- 13 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(6) > img.hero-group-card__cover-float` `--cover-opacity` `0.362` → `0.360`
- 13 ms: `main > section.hero.is-revealed:nth-of-type(1) > div.hero__showcase:nth-of-type(2) > div.hero-orbit` `data-active-index` set to `0`
- 34127 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 11. Hovering `div.hero-group-card__title-row`

- **Text typewriter:** `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span` runs `H` → `Ha` → `Han` → `Hang` → `Hango` over 626 ms.
- 52 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-opacity` `1.000` → `0.360` (3 steps)
- 52 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-alpha` `0.087` → `0.003`
- 52 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.058` → `0.002`
- 52 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.117` → `0.108`
- 52 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(13)` `--slice-back-cover` `1` → `0`
- 52 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > div.hero-group-card__slice:nth-of-type(13)` `--slice-opacity` `0.278` → `1.000`
- 36014 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 12. Hovering `span.hero-group-card__title`

- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-opacity` `0.360` → `0.000`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-alpha` `0.003` → `0.000`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.002` → `0.000`
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.108` → `0.002` (5 steps)
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > img.hero-group-card__cover-float` `--cover-shadow-alpha` `0.120` → `0.162` (5 steps)
- 5 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > img.hero-group-card__cover-float` `--cover-shadow-detail-alpha` `0.080` → `0.108` (5 steps)
- 37880 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 13. Hovering `div.hero-group-card__avatars`

- 708 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(2)` `--slice-shade-opacity` `0.008` → `0.000` (3 steps)
- 708 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.010` → `0.000` (3 steps)
- 708 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(4)` `--slice-shade-opacity` `0.012` → `0.000` (3 steps)
- 708 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(5)` `--slice-shade-opacity` `0.014` → `0.000` (3 steps)
- 708 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(7)` `--slice-shade-opacity` `0.019` → `0.000` (3 steps)
- 708 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(9)` `--slice-shade-opacity` `0.026` → `0.001` (3 steps)
- 39632 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 14. Hovering `div.hero-group-card__footer`

- **Text typewriter:** `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span` runs `T` → `Tr` → `Tri` → `Trip` over 759 ms.
- 7 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(1)` `--slice-shade-opacity` `0.007` → `0.006`
- 7 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(11)` `--slice-shade-opacity` `0.034` → `0.033`
- 7 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(3) > img.hero-group-card__cover-float` `--cover-opacity` `0.361` → `0.360`
- 7 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(6) > div.hero-group-card__slice:nth-of-type(1)` `--slice-shade-opacity` `0.118` → `0.119`
- 7 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(6) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.101` → `0.102`
- 7 ms: `main > section.hero.is-revealed:nth-of-type(1) > div.hero__showcase:nth-of-type(2) > div.hero-orbit` `data-active-index` set to `3`
- 41489 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

### 15. Hovering `p.hero-group-card__balance`

- **Text typewriter:** `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span` runs `K` → `Ki` → `Kid` over 412 ms.
- 37 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(2)` `--slice-shade-opacity` `0.004` → `0.110` (4 steps)
- 37 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(3)` `--slice-shade-opacity` `0.003` → `0.102` (4 steps)
- 37 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(4)` `--slice-shade-opacity` `0.002` → `0.094` (4 steps)
- 37 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(5)` `--slice-shade-opacity` `0.002` → `0.086` (4 steps)
- 37 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(7)` `--slice-shade-opacity` `0.001` → `0.072` (4 steps)
- 37 ms: `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(1) > div.hero-group-card__slice:nth-of-type(9)` `--slice-shade-opacity` `0.000` → `0.059` (4 steps)
- 43203 ms: `div.app-showcase__content > div.app-showcase__tabs > div.app-showcase__item.is-active > p.app-showcase__tab-desc` CSS animation `app-showcase-desc-in` on `opacity, transform`, 450 ms, `cubic-bezier(0.22, 1, 0.36, 1)` (opacity: 0 → 1; transform: translateY(6px) → translateY(0px))

## Text that changes in place

### 16. `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span`: a typewriter, on its own

- **Sequence:** `C` → `Co` → `Cou` → `Coup` (873 ms).
- **How:** add one character at a time.

### 17. `div.hero__showcase:nth-of-type(2) > div.hero-orbit > div.hero-orbit__scaler > div.hero-orbit__tag:nth-of-type(2) > span`: a scramble, while scrolling

- **Sequence:** `Couple` → `T` → `Tr` → `Tri` → `Trip` (1465 ms).
- **How:** each frame, show the final text with the not-yet-settled letters replaced by random characters, settling one more letter every few frames from left to right.

## Following the pointer

### 18. `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(2)` answers to the pointer

- `--slice-shade-opacity` `0.000` → `0.128` over 9 frames, easing 0.053 a frame.

### 19. `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(6) > img.hero-group-card__cover-float` answers to the pointer

- `--cover-shadow-alpha` `0.102` → `0.153` over 9 frames, easing 0.029 a frame.

### 20. `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(1)` answers to the pointer

- `--slice-shade-opacity` `0.001` → `0.137` over 8 frames, easing 0.098 a frame.

### 21. `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(3)` answers to the pointer

- `--slice-shade-opacity` `0.000` → `0.119` over 8 frames, easing 0.085 a frame.

### 22. `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(2) > div.hero-group-card__slice:nth-of-type(4)` answers to the pointer

- `--slice-shade-opacity` `0.000` → `0.110` over 8 frames, easing 0.074 a frame.

### 23. `div.hero-orbit__viewport:nth-of-type(1) > div.hero-orbit__stage > div.hero-orbit__ring > article.hero-group-card:nth-of-type(5) > img.hero-group-card__cover-float` answers to the pointer

- `--cover-shadow-alpha` `0.171` → `0.000` over 8 frames, easing 0.258 a frame.

## CSS animations (rules and @keyframes in styles.css)

- `div.mf__grid > article.mfc.mfc--budget:nth-of-type(1) > div.mfc__media.mfc__media--widget:nth-of-type(1) > div.mfc__widget-ui:nth-of-type(2) > img.mfc__budget-img`: `mfc-budget-float` 4s `ease-in-out` infinite.

## The page's own code

The scripts the page ran are in `reference/scripts/` (20 files), so you can read exactly how each effect is made. Don't paste them in whole: rebuild each effect in the project's own code, following the recipe and the source together.

Not tried: navigation: cdpSession.send: Target page, context or browser has been closed; menu: skipped, out of time.
