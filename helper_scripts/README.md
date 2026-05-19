# Build Tools for Site Asociatie

This folder contains the build pipeline for the picture archive system.

## Overview

The build system processes images from `/data/pics/` and generates manifests for the React components to consume.

**Workflow:**
1. Non-technical maintainer updates `/data/pics/` with new images organized by year/event
2. Run `npm run generate-manifests` to:
   - Copy images to `client/public/pics/` with deterministic hash-based IDs
   - Generate `manifest.json` files with image metadata (dimensions, titles, descriptions)
   - Generate `index.json` files for 2024/2025 listing all events
3. React components fetch manifests at runtime and render galleries

## Installation

```bash
npm install
```

## Usage

```bash
npm run generate-manifests
```

This script:
- Reads the structure from `/data/pics/` (handles 2015-2022, 2023, 2024, 2025)
- Processes images and extracts dimensions using sharp
- Detects complex events (those with subevents in 2025)
- Generates all necessary JSON manifests and index files
- Copies images to `client/public/pics/`

## Output

Generated files in `client/public/pics/`:

**Manifests:**
- `2015-2022-manifest.json` - All 2015-2022 images
- `2023-manifest.json` - All 2023 images
- `2024-EventName-manifest.json` - Per-event manifests for 2024
- `2025-EventName-manifest.json` - Per-event/subevent manifests for 2025

**Indexes:**
- `2024-index.json` - Lists all 2024 events
- `2025-index.json` - Lists all 2025 events (including complex ones with subevents)

**Images:**
- `*.jpg`, `*.jpeg`, `*.png` - All images flattened with hash-based unique IDs