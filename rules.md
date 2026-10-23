# gettakecontrol.app: design rules

A light interface on a light neutral background, built on contrast rather than colour. Type is Figtree set tight at large sizes, corners are fully rounded on controls, and depth comes from borders and surface tone rather than shadows.

## Principles

### Contrast, not colour

Build hierarchy from contrast, weight and size; keep the palette neutral.

_Why:_ No saturated colour carries real weight on the measured page; emphasis comes from dark-on-light contrast alone.

### Flat surfaces, drawn edges

Separate surfaces with 2px borders in #eaeae7 and the #ffffff surface tone, not shadows.

_Why:_ No visible shadows were measured, so depth comes from lines and tone shifts, which keeps the page calm.

### Big type, quiet body

Pair 62px headings with 15px body text in Figtree.

_Why:_ A 4.1× jump between headline and body creates strong hierarchy with few elements.

### Rounded and approachable

Use pill shapes for buttons and chips, and 17px corners for containers.

_Why:_ Fully rounded shapes make up 78% of measured radii; they soften an otherwise structured page.

## Never

- **Never use drop shadows for depth.** No visible shadows were measured anywhere on the site.
- **Never use positive letter-spacing on headings.** Large type is tightened, down to -0.01em on the biggest sizes.
- **Never square off buttons.** Measured buttons are fully rounded; square ones would break the shape language.
- **Never set button labels in all capitals.** No measured button uses uppercase text.
- **Never mix in a second display typeface.** Headings and body share Figtree; a second family would split the voice.

## Colour

- Light theme: light neutral background (#eaeae7) with #ffffff surfaces.
- Body text #121211 on the background reads at 15.6:1; secondary text uses #7f7f7e.
- There is no saturated accent; links and actions rely on weight and underline.

## Typography

- Figtree throughout.
- Scale: display 62px, h1 42px, h2 40px, h3 34px, h4 28px, h5 19px, h6 18px.
- Weights in use: 500, 600.
- Headings are tightened (-0.01em at 62px); body text keeps normal tracking.

## Shape and depth

- Radii: 17px (19%), pill (78%).
- Borders: 2px, 1px, 3px in #eaeae7.
- No shadows: elevation comes from surface tone and borders.
