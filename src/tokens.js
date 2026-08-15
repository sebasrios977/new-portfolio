/**
 * Design tokens for inline styles.
 *
 * These are not literal colours — each one resolves a CSS variable defined in
 * index.css, so anything styled through `T` follows the active theme without
 * the component knowing which theme is on.
 *
 * Because the values are `rgb(var(--x))` strings, the old trick of appending a
 * hex pair for opacity (`${T.green}40`) no longer works. Use `alpha()` instead:
 *
 *   alpha('green', 0.25)  ->  rgb(var(--port-green) / 0.25)
 */
const c = name => `rgb(var(--port-${name}))`;

/** Same colour at a given opacity (0–1). */
export const alpha = (name, a) => `rgb(var(--port-${name}) / ${a})`;

export const T = {
  bg:        c('bg'),
  bgCard:    c('card'),
  bgCard2:   c('card2'),
  border:    c('border'),
  green:     c('green'),
  greenDim:  alpha('green', 0.1),
  greenGlow: alpha('green', 0.25),
  blue:      c('blue'),
  teal:      c('teal'),
  text:      c('text'),
  textSub:   c('sub'),
  textMuted: c('muted'),
  onGreen:   c('on-green'),
};

/**
 * Per-project accent colours (in data/portfolio.js) were picked as pastels for
 * a dark background, so as text on a white card they fall well below a usable
 * contrast ratio. This darkens them for light mode only — the variables resolve
 * to a no-op mix in dark mode, so the original colour comes through untouched.
 *
 * Use it for project colour applied to *text*; borders and shadows are
 * decorative and can keep the raw colour.
 */
export const projectInk = color =>
  `color-mix(in srgb, ${color}, var(--project-ink-shade) var(--project-ink-amount))`;

/**
 * The terminal is a fixed dark surface in both themes — a terminal that turns
 * white stops reading as one. These stay constant so its contents never invert
 * into illegibility when the rest of the site goes light.
 */
export const TERM = {
  bg:     '#060D18',
  green:  '#00E587',
  text:   '#7EA8C4',
  muted:  '#3D6080',
  border: '#1E3A5F',
};
