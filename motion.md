# Motion and Interactions

Considered transitions, with signature motion that carries the personality: endless rail, float.

- Default to 650ms transitions (76% of measured ones).
- Ease with cubic-bezier(0.22, 1, 0.36, 1).
- Animate opacity, transform, color, background; avoid animating layout.
- Looping motion is slow and steady (several seconds per cycle), never frantic.
- Turn every loop and decorative animation off under prefers-reduced-motion, as the site does.

## Signature motion

The animations that make this site feel like itself. Recreate the behaviour with your own elements and content; the keyframes are the measured reference.

### Endless rail

A strip scrolls sideways forever, one pass every 28s, linear. It starts when its state changes (opened, selected, shown), on blocks.

```css
@keyframes steps-pills-marquee { 0% { transform: translate(0px); } 100% { transform: translate(-50%); } }
.steps-pills-marquee { animation: steps-pills-marquee 28000ms linear infinite; }
```

### Float

Drifts gently up and down every 4s with ease-in-out. It starts when its state changes (opened, selected, shown), on images.

```css
@keyframes mfc-budget-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
.mfc-budget-float { animation: mfc-budget-float 4000ms ease-in-out infinite; }
```

### Entrance

Arrives with a fade and vertical slide over 450ms with cubic-bezier(0.22, 1, 0.36, 1). It runs on its own, on text, images.

```css
@keyframes app-showcase-desc-in { 0% { opacity: 0; transform: translateY(6px); } 100% { opacity: 1; transform: translateY(0px); } }
.app-showcase-desc-in { animation: app-showcase-desc-in 450ms cubic-bezier(0.22, 1, 0.36, 1) both; }
```

## Interactions

- **Hover** changes background (56% of hover rules), background colour (56% of hover rules), text colour (38% of hover rules), border (16% of hover rules), opacity (13% of hover rules), position or scale (13% of hover rules). Things rarely move on hover; they change colour.
- **Illustrations** are line art: thin strokes that stay thin at any size (vector-effect: non-scaling-stroke) on flat fills. Highlight a part by brightening its stroke, not by adding colour.

Animations started by people or state:

- `steps-pills-marquee`: marquee, 28000ms linear, starts when its state changes (opened, selected, shown).
- `mfc-budget-float`: float, 4000ms ease-in-out, starts when its state changes (opened, selected, shown).
- `mfc-edit-rise`: enter, 850ms cubic-bezier(0.22, 1, 0.36, 1), starts when its state changes (opened, selected, shown).

## Measurements

- Durations: 650ms (76%), 200ms (9%), 350ms (4%), 600ms (4%), 850ms (2%)
- Easings: `cubic-bezier(0.22, 1, 0.36, 1)`, `ease`, `cubic-bezier(0.4, 0, 0.2, 1)`
- Animated properties: opacity, transform, color, background, border-color, text-decoration-color, grid-template-rows

The site turns its motion off under `prefers-reduced-motion: reduce`. Do the same: every looping or decorative animation stops, and state changes happen instantly.
