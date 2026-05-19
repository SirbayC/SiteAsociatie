# Performance & cleanup plan

Agent-oriented work plan for this repo. Lives under `.cursor/` (committed with project rules and skills) so Cursor sessions can `@` it directly.

**Site:** React SPA in `client/` (Create React App), GitHub Pages.

**Build baseline (May 2026):** ~189 MB total build, ~177 MB images in `static/media`, main JS ~153 KB gzip.

Use across **separate Agent sessions** — one phase per chat. Start each session with:

```text
@.cursor/plans/performance-plan.md

Implement Phase N only. Follow acceptance criteria below.
Run `yarn build` in `client/` when done. Do not work on other phases.
```

Track progress at the bottom. Use a branch per phase if you want isolated PRs (e.g. `perf/phase-1-images`).

---

## How to run with different agent sessions

1. **New Agent chat** for each phase (keeps scope and diffs clean).
2. **@ mention this file** so the agent has full context.
3. **Merge phases in order** where dependencies apply (see table).
4. After each phase: `cd client && yarn build`, smoke-test the pages listed under that phase.
5. Optional: one GitHub issue per phase; paste the phase’s **Session prompt** as the issue body.

Cursor does not auto-run phases in sequence — you start a new session manually for each.

---

## Phase overview

| Phase | Title | Depends on | Main pages to test |
|-------|--------|------------|-------------------|
| **1** | Image pipeline | — | Any gallery year |
| **2** | Gallery loading & library | 1 recommended | `/lumea_imagini` (all year tabs) |
| **3** | App bundle & code splitting | — | Home, Da pot, Scrisori |
| **4** | Site polish (HTML, fonts, a11y, nav) | — | All routes |
| **5** | Tooling & guardrails | 1 recommended | CI / README |

**Suggested order:** 1 → 2 → 3 and 4 in parallel if you use branches → 5 last.

---

## Phase 1 — Image pipeline

**Merged from:** compress originals, move to `public/`, WebP variants.

### Goal

Shrink the ~177 MB image payload and stop bundling full-resolution photos through webpack. Enable long-term CDN hosting if needed.

### Scope

- Add `helper_scripts` workflow (e.g. Sharp) to:
  - Resize/compress JPEGs under `client/src/resources/pics/` (target ~150–300 KB typical; document rules).
  - Optionally emit WebP alongside JPEG.
- Migrate gallery metadata from `import './1.jpg'` to **URL paths** under `client/public/pics/...` in `photos.js` (and update generators in `helper_scripts/` if used).
- Keep `width` / `height` in metadata for layout.
- Update README with how to add a new album after compression.

### Out of scope

- Changing how many React gallery components mount (Phase 2).
- Replacing `react-photo-gallery` (Phase 2).

### Acceptance criteria

- [ ] `yarn build` succeeds; `build/static/media` (or `build/pics/`) is materially smaller than before.
- [ ] At least one 2024 and one 2025 album render correctly with URL-based `src`.
- [ ] Helper script is documented; no single new photo &gt; agreed max without warning.

### Session prompt

```text
@.cursor/plans/performance-plan.md

Implement Phase 1 only: image compression script, migrate photos to client/public/pics with URL-based photos.js, optional WebP generation. Update helper_scripts generators and README. Do not change gallery mounting or App.jsx routing.
```

---

## Phase 2 — Gallery loading & library

**Merged from:** lazy-mount 2024/2025 albums, paginate 2023 & 2015–2022, native lazy images, replace `react-photo-gallery`.

### Goal

Opening “Lumea mea în imagini” must not load every album and every photo at once. Use a maintained gallery library with lazy loading.

### Scope

- **2024 / 2025:** Refactor `Evenimente.jsx` and `Evenimente2025.jsx` so albums are not all mounted via eager `require.context` — use accordion, tabs, or dynamic `import()` per album.
- **2023 & 2015–2022:** Split or paginate `Gallery2023` and `Gallery20152022` (96 images) — “Load more”, sections, or sub-year chunks.
- **Lazy images:** `loading="lazy"` (and `decoding="async"` where helpful) via gallery API or custom render.
- **Library:** Migrate from `react-photo-gallery` (React 16 peer, unmaintained) to `react-photo-album` or equivalent; update `lumeaimagini.scss` if class names change.
- Remove `react-photo-gallery` from `package.json` when done.

### Depends on

Phase 1 recommended (URL-based photos and smaller files make testing easier).

### Acceptance criteria

- [ ] Selecting year 2025 loads only visible/nearest albums (network tab: not all albums at once).
- [ ] 2015–2022 / 2023 initial view loads a bounded set of images.
- [ ] `yarn build` passes; all four year tabs work.
- [ ] `react-photo-gallery` removed.

### Session prompt

```text
@.cursor/plans/performance-plan.md

Implement Phase 2 only: lazy-mount 2024/2025 albums, paginate 2023 and 2015-2022 galleries, add image lazy-loading, migrate to react-photo-album. Assume Phase 1 URL-based photos may already exist. Do not touch App.jsx routes or react-spring/MUI.
```

---

## Phase 3 — App bundle & code splitting

**Merged from:** route-level `lazy()`, remove react-spring + MUI, Scrisori per-year lazy load.

### Goal

Smaller initial JS; only load letter content when a year is opened.

### Scope

- `App.jsx`: `React.lazy` + `Suspense` for page routes (`DaPot`, `Scrisori`, `LumeaImagini`, `Redir`, `Spons`, `Contact`, etc.).
- Replace `react-spring` + `@mui/icons-material` in `Accordion.jsx`, `CunoasteNe.jsx`, `UserSubmenu.jsx` with CSS transitions (existing SCSS).
- `Scrisori.jsx`: load `Single20XX` modules on demand when `:id` is set (static map of imports to satisfy bundler).
- Remove unused deps: `react-spring`, `@mui/material`, `@mui/icons-material`, `@emotion/*` if nothing else uses them.

### Acceptance criteria

- [ ] First load: main bundle smaller or split into route chunks (`yarn build` output).
- [ ] Home accordion animations still acceptable.
- [ ] `/scrisori` list works; `/scrisori/2025` loads that year only.
- [ ] No MUI/react-spring imports left in `client/src`.

### Session prompt

```text
@.cursor/plans/performance-plan.md

Implement Phase 3 only: lazy routes in App.jsx, CSS instead of react-spring/MUI in Accordion/CunoasteNe/UserSubmenu, lazy Scrisori singles by year. Remove unused dependencies. Do not change gallery albums or images.
```

---

## Phase 4 — Site polish

**Merged from:** `index.html` meta, font subset, Navbar fix, alt text, submenu hover.

### Goal

Correct SEO defaults, smaller font download, accessible images, working active nav state.

### Scope

- `client/public/index.html`: `lang="ro"`, proper `<title>` and meta description (align with Asociația Prietenii D.A.R.I.E.I.).
- Google Fonts: load only weights used in SCSS (200, 300, 400, 500, 600, 700, 800 — verify in repo).
- `Navbar.jsx`: fix `NavLink` `className` to use function form for `isActive`.
- Re-enable `jsx-a11y/alt-text` in ESLint; add meaningful `alt` on logo and key content images.
- `UserSubmenu`: use `setShowSubmenu(true/false)` on mouse enter/leave (not toggle on both).

### Acceptance criteria

- [ ] Home nav link shows active state on `/`.
- [ ] Font CSS request has fewer weights.
- [ ] ESLint alt-text rule on; no new lint errors.
- [ ] Submenu does not flicker on hover.

### Session prompt

```text
@.cursor/plans/performance-plan.md

Implement Phase 4 only: index.html metadata, Raleway font subset, Navbar NavLink active fix, alt text + eslint rule, submenu hover fix. No gallery or bundle dependency changes.
```

---

## Phase 5 — Tooling & guardrails

**Merged from:** web-vitals cleanup, PDF note, CI/image size check, optional Vite note.

### Goal

Prevent regressions and document maintenance.

### Scope

- Remove unused `web-vitals` from `package.json` **or** wire `reportWebVitals` in `index.js`.
- README: note `brosura.pdf` size (~8.8 MB); optional compression or download-only UX (small change in `DaPot.jsx` if needed).
- Add optional check in `helper_scripts` or CI: fail or warn if new images exceed size limit (e.g. 500 KB).
- Document **optional** CRA → Vite migration as future work only — do not migrate in this phase unless explicitly requested.

### Acceptance criteria

- [ ] No dead dependencies without explanation in README.
- [ ] Image size check documented and runnable locally.
- [ ] README links to `.cursor/plans/performance-plan.md` for ongoing performance work.

### Session prompt

```text
@.cursor/plans/performance-plan.md

Implement Phase 5 only: web-vitals cleanup, README performance/maintenance section, optional image size guard in helper_scripts. Do not migrate to Vite. Do not change gallery behavior.
```

---

## Optional later — Vite migration

Large, separate project. Only start a dedicated session if you explicitly want to leave CRA.

**Prompt:** `Migrate client/ from Create React App to Vite. Preserve GitHub Pages deploy and hash router behavior.`

---

## Progress checklist

- [ ] **Phase 1** — Image pipeline  
- [ ] **Phase 2** — Gallery loading & library  
- [ ] **Phase 3** — App bundle & code splitting  
- [ ] **Phase 4** — Site polish  
- [ ] **Phase 5** — Tooling & guardrails  
- [ ] *(optional)* Vite migration  

---

## Reference — what was wrong (context for agents)

- All photos imported in `photos.js` → full size in webpack build (~177 MB).
- `Evenimente2025` / `Evenimente` eager `require.context` → all albums mount at once.
- `Gallery20152022` loads 96 images in one grid.
- `react-photo-gallery` outdated (React 16 peers).
- `react-spring` + MUI used for small animations; all pages imported eagerly in `App.jsx`.
- `Scrisori` eager-loads every `Single20XX.jsx`.
- `index.html` generic CRA meta; Raleway loads weights 100–900; Navbar `className` bug for active link.
