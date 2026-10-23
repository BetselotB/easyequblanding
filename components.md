# Components

## Recipes

### Navigation link

Transparent background, #454543 text, square corners, 0px × 0px padding, 14px at weight 600. Measured 5 on the page.

- States: No visible change was measured on hover or focus.
- Use when: Top-level navigation.

### Filled button 1

#000000 background, #ffffff text, fully rounded (pill) corners, 9px × 11px padding, 16px at weight 400, 1px solid #000000 border. Measured 2 on the page.

- States: Focus: outline → 1px auto rgb(16, 16, 16)
- Use when: Secondary actions that sit beside the primary one.

### Outline button

Transparent background, #121211 text, fully rounded (pill) corners, 0px × 12px padding, 14px at weight 600, 1px solid #eaeae7 border. Measured 1 on the page.

- States: Hover: background → #f7f7f6, border → #d9d9d6. Focus: outline → 1px auto rgb(16, 16, 16)
- Use when: Secondary actions that sit beside the primary one.

### Filled button 3

#121211 background, #ffffff text, fully rounded (pill) corners, 0px × 12px padding, 14px at weight 600, 1px solid #121211 border. Measured 1 on the page.

- States: No visible change was measured on hover or focus.
- Use when: Secondary actions that sit beside the primary one.

### Card

#ffffff background, #121211 text, 32px corners, 24px × 24px padding, 16px at weight 400. Measured 1 on the page.

- States: No visible change was measured on hover or focus.
- Use when: Grouping related content into a scannable block.

## Measured variants

| Kind | Count | Background | Text | Border | Radius | Padding (y/x px) | Height px | Font | States |
|---|---|---|---|---|---|---|---|---|---|
| nav-link | 5 | transparent | #454543 | none | 0px | 0/0 | 38 | 14px 600 | no change measured |
| button | 2 | #000000 | #ffffff | 1px solid #000000 | 9999px | 9/11 | 54 | 16px 400 | focus: {"outline":"1px auto rgb(16, 16, 16)"} |
| button | 1 | transparent | #121211 | 1px solid #eaeae7 | 9999px | 0/12 | 38 | 14px 600 | hover: {"bg":"#f7f7f6","borderColor":"#d9d9d6"}; focus: {"outline":"1px auto rgb(16, 16, 16)"} |
| button | 1 | #121211 | #ffffff | 1px solid #121211 | 9999px | 0/12 | 38 | 14px 600 | no change measured |
| card | 1 | #ffffff | #121211 | none | 32px | 24/24 | 324 | 16px 400 | no change measured |
