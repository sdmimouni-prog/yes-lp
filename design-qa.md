# Maternity landing — local HTML QA

final result: passed

Scope: local HTML preview requested on 2026-10-23, with pregnancy week and approximate months. Not a production collection form.

Source visual direction: `/Users/salaheddinemimouni/.codex/generated_images/01a15eb9-3da4-7ac1-8482-9263bc9e3fbd/exec-673ee1f7-914a-4dc1-99a9-abe1516b7e12.png` (1586×992). First direction used as an explicit implementation assumption after user requested local HTML without choosing a number.
Implementation: `qa/maternite-desktop.png`, 1440×900 CSS/pixels; mobile `qa/maternite-mobile.png`, 390×844 CSS/pixels. Source and implementation viewed together in the same tool response; compare at equivalent landscape aspect, not pixel-perfect equality.
State: empty fields, selected pregnancy week; submit separately tested with fictional local data.

## Findings and intentional changes
- Added pregnancy week selector and approximate calendar-month conversion as requested. Name/phone and city/week use two columns to keep desktop to one viewport.
- Generated a clean maternity photo separately; supplied exact Yes logo reused. Photo crop and simpler edge treatment differ from concept. This is a functional interpretation of the first direction, not a pixel-perfect recreation.
- No actionable P0/P1/P2 issues within the requested local-preview scope.
- Google Sheets is not connected. The page discloses this before and after submission; no success or saved-request claim is made. Production collection remains out of scope for this handoff.

## Required surfaces
- Typography: local Tajawal regular/700/800, heading 36–57px, inputs at least16px, explicit labels. Browser screenshot capture softens type; DOM labels and font sizes verified as readable. No screenshot-only pixel fidelity claim.
- Layout: 47/53 desktop split; total scroll height900 at1440×900; mobile stacked at390, scroll width390. All input bounds remain inside content. Mobile scroll is intentional.
- Colors: ivory #fff7f8, brand pink #e00061/#ca005a, navy #17334d. Strong primary action and free home-delivery promise.
- Imagery: generated maternity photograph, no broken images; actual supplied logo and heart. No fake product pack counts.
- Content: Darija promise explicitly says diapers and delivery free, first15days. Pregnancy conversion is explicitly approximate. Consent requests contact/delivery use.

## Comparison history
- Mobile pregnancy label initially wrapped and select placeholder truncated. Shortened to سيمانة الحمل and اختاري السيمانة; final mobile capture confirms fit.
- Initial full-page mobile capture had a backend clipping artifact; replaced with stable viewport capture and DOM width/bounds checks.

## Interactions and checks
- Selected24weeks → approximately5.5months;28weeks →6.4months.
- Native required fields, telephone format, address length and consent enabled.
- Submitted fictional local data: explicit not-sent message, no outgoing network submission.
- Standalone HTML loaded with embedded fonts/images/styles/script.
- Console errors: none during test.
- Vite production build passed after module-script bundling fix.

## Follow-up polish
- P3: match concept cloud edges and additional decoration if desired.
- Connect an actual Google Sheets endpoint before collecting real applications.
