# Pending content

Every fact below came to us as a bracketed placeholder in the redesign canvas.
The brief is explicit that missing facts stay visible rather than being
invented, so each one renders on the site as a gold chip and is greppable:

```bash
grep -rn "⟨" src/
```

Replace the text inside the `⟨angle brackets⟩` in `src/lib/site.ts` and the
chip disappears, replaced by the real value.

## Pricing

| Where | Value | Source |
| --- | --- | --- |
| Exhibitor Pro — monthly and annual | `⟨PRICE⟩` / `⟨ANNUAL PRICE⟩` | Services + Home plans teaser |
| Agency Studio — monthly and annual | `⟨PRICE⟩` / `⟨ANNUAL PRICE⟩` | Services + Home plans teaser |
| Annual saving | `⟨X⟩%` | Services billing toggle |
| Plan confirmation line | `⟨CONFIRM BEFORE LAUNCH⟩` | Services footnote |

## Clients and projects

| Where | Value |
| --- | --- |
| Why Choose Us, "Proven expertise" | `⟨CLIENT 1⟩`, `⟨CLIENT 2⟩`, `⟨CLIENT 3⟩` |
| Royal Canin case study | `⟨Show⟩`, `⟨City⟩`, `⟨Year⟩`, `⟨Size⟩ m²`, plus Goal / What we did / Result rows |
| Belstaff and Ben X cards | `⟨show⟩`, `⟨city⟩`, `⟨year⟩` |
| Exhibition and retail cards | `⟨CLIENT⟩`, `⟨BRAND⟩`, `⟨mall⟩`, `⟨city⟩` |
| Five museum cards | `⟨name of museum⟩` for each city |
| Client logo wall | five real logo files to replace `src/components/ui/logo-wall.tsx` marks |

## Company history

| Where | Value |
| --- | --- |
| Timeline — four of six steps | `⟨YEAR⟩` for founded, expansion, museums, 850+ booths |
| Why Choose Us counter | `⟨X⟩` exhibitions served |

## Team

| Where | Value |
| --- | --- |
| Jyotsna Pande | `⟨ROLE⟩`, `⟨One line on experience⟩` |
| Design lead | `⟨NAME⟩`, `⟨Years of experience⟩` |
| Production lead | `⟨NAME⟩`, `⟨Years of experience⟩` |

Team photos are drawn as initials avatars; swap for photographs when available.

## Offices and contact

| Where | Value |
| --- | --- |
| Hyderabad, New Delhi, Bengaluru | `⟨Full street address, exactly as on Google Business Profile⟩` — must match GBP exactly |
| All three offices | `⟨hours⟩` |
| Google Business Profile | `⟨rating⟩ · ⟨N⟩ reviews` in the footer |
| `src/lib/structured-data.tsx` | street address, geo coordinates and GBP URL for each of the three `LocalBusiness` blocks — currently `[PLACEHOLDER]` strings |

## Events

| Where | Value |
| --- | --- |
| AAHAR 2027 dates | `⟨confirm⟩` |

## Sector template

| Where | Value |
| --- | --- |
| Typical sizes / budget band | `⟨₹ RANGE⟩` |

## Media still to be supplied

Every dashed-free media slot on the site names what it wants in its caption
chip — see the `MediaSlot` label and detail props across `src/app/`:

- Hero loop: ten seconds, muted, looping, sketch → render → built booth
- Six render-vs-reality pairs, shot at the same camera angle
- Workshop, team-on-site and three vertical photographs
- 11 project thumbnails named by their `file` field
- Three time-lapses and two client testimonial videos
- White-label organiser portal screenshot
- Three Google Maps embeds
