# SOLEY Suite — Commercial Landing Page

## What This Is

Marketing landing page for the full SOLEY Suite, hosted at `soley-pv.com`. This is the **commercial** page for the complete four-module platform (SOLEY Core + I-SOLEY + IN-SOLEY + SOLEY-S). It is separate from the **academic** landing page at `zacharie-li-kao.github.io/SOLEY-PV/` which covers only SOLEY Core (the free device physics engine).

**Repository**: `zacharie-li-kao/SOLEY-WEB` on GitHub

## The Product

SOLEY Suite is a photovoltaic simulation platform (~50,000+ lines Python + HTML/CSS/JS). One validated physics engine (TMM optics + extended detailed balance) powers four modules:

| Module | Purpose | Competition |
|--------|---------|-------------|
| **SOLEY Core** | Device physics: TMM, J-V, EQE, luminescence, defects | SCAPS-1D (limited) |
| **I-SOLEY** | Outdoor PV production: year-long hourly simulation, financial analysis | PVsyst ($1,200/yr), SAM (free) |
| **IN-SOLEY** | Indoor PV: radiosity + TMM for artificial lighting environments | **None** |
| **SOLEY-S** | Space/Lunar PV: transient electro-thermal with JPL ephemeris | **None** |

**Key differentiator**: Users design any arbitrary thin-film stack in SOLEY Core, then simulate it outdoors, indoors, or in space — all with the same validated engine. No other tool offers this vertical integration.

**Publication**: Jehl Li-Kao, Z. Solar RRL (2025). DOI: 10.1002/solr.202500345

## Target Audience

1. **PV educators** — Only tool going from first principles to all utility-scale applications, with built-in theory hints
2. **Students** — Bachelor/master thesis, self-study, understanding PV
3. **Researchers / PhD students** — Unified framework for any thin-film PV technology; digital twins in real-world conditions
4. **Industry** — Emerging technologies lacking empirical data, emerging applications (BIPV, agrivoltaics, indoor PV for IoT, space PV)

## Design Principles

This page must look **completely different** from the academic landing page:

- **Professional, austere, even boring** — No flashiness, no animations, no particle effects
- **Left-side vertical navigation** (sidebar) — Not horizontal tabs
- **0px border-radius everywhere** — Sharp corners on all elements (buttons, cards, inputs)
- **System font stack** — No Google Fonts, no custom fonts
- **Light and dark themes** — Light is default. Light-blue and grey palette. Subtle.
- **Pure British English** — "colour" not "color" in copy (CSS properties use American spelling as required by spec)
- **No marketing buzzwords** — Physics, factual, simple language. Engineers and business people should both understand.
- **No emojis** in the page content
- **Minimal colour** — One accent (muted blue), otherwise greys. Not Las Vegas.

## File Structure

```
index.html              ← Main landing page
css/
  variables.css         ← Theme tokens (colours, spacing, type scale)
  base.css              ← Reset, typography, body
  layout.css            ← Sidebar, content area, grid
  components.css        ← Buttons, cards, signup form, demo bar
  responsive.css        ← Mobile breakpoints (<1024px)
js/
  theme.js              ← Light/dark toggle with localStorage
  signup.js             ← Email form → Google Apps Script
  nav.js                ← Scroll spy, mobile menu, smooth scroll
assets/
  logo.png              ← SOLEY logo (USER MUST PROVIDE)
  screenshots/          ← Application screenshots (USER MUST PROVIDE)
    core-jv-curves.png
    isoley-production.png
    insoley-heatmap.png
    spacepv-thermal.png
  team/                 ← Team photos (USER MUST PROVIDE)
    zacharie.jpg
```

## Key URLs

| What | URL |
|------|-----|
| This site | `soley-pv.com` |
| Demo | `demo.soley-pv.com` |
| Academic version (SOLEY Core, always free) | `zacharie-li-kao.github.io/SOLEY-PV/` |
| Solar RRL paper | `https://doi.org/10.1002/solr.202500345` |
| PV Magazine article | `https://www.pv-magazine.com/2025/09/24/open-access-simulation-software-for-solar-cell-modeling/` |
| UPC article | `https://eebe.upc.edu/ca/noticies/nou-programari-dacces-obert-per-entendre-i-dissenyar-cel-lules-solars` |
| Email signup endpoint | `https://script.google.com/macros/s/AKfycby1uyJpxP03lsfEPEKjzkXFtymClP5gcnt7m5xfozkVuB0f-4rg4IwklpSI8G0ACgpd3g/exec` |

## Page Sections

1. **Hero** — Large logo, "SOLEY Suite", factual tagline, "Coming later in 2026", email signup
2. **Platform** — Four module descriptions with screenshots, unifying paragraph, factual metrics
3. **Audience** — Four text blocks: Educators, Students, Researchers, Industry
4. **Press & Publications** — Solar RRL, PV Magazine, UPC article, link to free academic version
5. **Team** — Zacharie Jehl Li-Kao bio + links. Placeholder for Sergio Giraldo.
6. **Footer** — Copyright, links, contact

**Persistent elements**:
- Demo button pinned at bottom of sidebar (desktop) / bottom bar (mobile)
- Theme toggle in sidebar

## Screenshots Needed

The user must capture these from the SOLEY application and place them in `assets/screenshots/`:

| File | What to capture |
|------|-----------------|
| `core-jv-curves.png` | SOLEY Core: J-V curves with layer stack panel visible |
| `isoley-production.png` | I-SOLEY Tab 5: monthly production bar chart or daily production area chart |
| `insoley-heatmap.png` | IN-SOLEY: illumination heatmap or SVG room cross-section |
| `spacepv-thermal.png` | SOLEY-S Tab 5: cell temperature vs time with day/night shading |

Capture at ~1400x900, dark UI theme, PNG format. No rounded frames or shadows on the screenshots themselves.

## Team

**Creator**: Zacharie Jehl Li-Kao, PhD
- Professor (Tenure Track) at UPC BarcelonaTech, Barcelona, Spain
- Applied physicist, 15+ years in PV research (France, Japan, South Africa, Spain)
- 74 peer-reviewed publications, h-index 26, >2600 citations
- Ramon y Cajal fellow (2022), Marie Curie fellow (2018)
- Coordinator of EU project SOLIS (8 international partners)
- Google Scholar: linked from page
- LinkedIn: https://www.linkedin.com/in/zacharie-j-9ba014ba/

**Future team member**: Sergio Giraldo (placeholder, CV to be provided later)

## Reference Documents

These files in the repo provide deep context about the SOLEY software:
- `SOLEY_REFERENCE.md` — Complete software reference (physics, architecture, features)
- `MODULE_REFERENCE.md` — File-level architecture map of all modules
- `DEPLOYMENT_STRATEGY.md` — Business/deployment strategy, market positioning, financial projections

## Development Notes

- **No build tools**: Plain HTML + CSS + vanilla JS. No frameworks, no bundlers.
- **No external dependencies**: No CDN links, no Google Fonts, no analytics (yet).
- **Future-proof**: When the academic page merges into this site, each section can become its own page. CSS is modular via separate files.
- **Hosting**: Will be served from `soley-pv.com`. Currently static files, no server-side logic.
