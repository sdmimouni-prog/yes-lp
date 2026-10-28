# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Footer reference

The user supplied `Référence fournie : انضموا إلى عائلة Yes Baby Comfort.png` as the exact reference for the newsletter/footer on 2026-10-21. Preserve its desktop proportions, brand lockup, five-column order, four social brands, copy, spacing, and pastel corner artwork. Keep copy, inputs and links as live HTML and preserve motion preferences. Footer styles are scoped in `css/footer.css`.

## Maternity campaign
On 2026-10-23 the user requested a local standalone HTML landing page for pregnant women: Darija copy, free newborn diaper gift for first15days and free delivery to the home; form includes pregnancy week with approximate month equivalent. Preferred eventual lead destination is Google Sheets. Do not claim submissions are saved until an actual integration is configured.
On 2026-10-28 the user required the maternity page to fit in one screen with no scrolling, and authorized production deployment. Keep all six form fields, consent, free delivery promise and submit button visible at standard desktop/mobile viewports. Fit content through responsive layout and spacing; do not hide overflow to clip controls.
