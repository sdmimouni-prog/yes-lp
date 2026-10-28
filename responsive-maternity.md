# One-screen maternity campaign — 2026-10-28

Changed desktop form to three columns/two rows, mobile form to two columns/three rows. Heading, spacing and photo height now respond to viewport height. No overflow clipping is used. At short landscape sizes the photo is omitted to prioritize the complete form.

Browser checks: 1512×780, 1366×650, 1024×768, 390×844, 375×667, 320×568, 667×375. Document scroll width/height equal viewport width/height at all tested sizes. The smallest mobile initially overflowed32px; smaller photo/header and vertical gaps corrected it (final content bottom529px at568px viewport). Submit button is visible in each tested size.

Selected month6 still updates week24. No browser console errors. Local standalone export regenerated. Evidence: qa/maternite-no-scroll.png.

Form submission is still a preview; Google Sheets is not connected.
