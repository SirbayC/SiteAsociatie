# Picture Archive Structure

This folder contains the extracted copy of the picture archive used by the site.

## Main Layout

The actual image archive lives under `data/pics/` and is split by year:

- `2015-2022/` - flat folder of images
- `2023/` - flat folder of images
- `2024/` - one folder per event
- `2025/` - one folder per event, with support for nested subevents

## 2015-2022 and 2023

These years are simple buckets of images.

Each year folder contains only the picture files.

Example:

```
data/pics/2023/
  image-1.jpg
  image-2.jpeg
  ...
```

## 2024

Each top-level folder represents one event.

Inside each event folder:

- the image files are stored directly in the folder
- `meta.txt` contains 2 lines:
  - line 1: event title
  - line 2: event description

Example:

```
data/pics/2024/Event Name/
  photo-1.jpg
  photo-2.jpg
  meta.txt
```

## 2025

Each top-level folder represents one event.

There are 2 cases:

### Simple event

If the event has no subevents, the folder contains:

- the image files directly
- `meta.txt` with 2 lines:
  - line 1: event title
  - line 2: event description

### Complex event

If the event contains subevents:

- the top-level event folder contains a `meta.txt` with 1 line:
  - line 1: main event title
- each subevent is a subfolder
- each subevent folder contains:
  - image files
  - `meta.txt` with 2 lines:
    - line 1: subevent name
    - line 2: subevent description

Example:

```
data/pics/2025/Main Event/
  meta.txt
  Sub Event 1/
    image-1.jpg
    image-2.jpg
    meta.txt
  Sub Event 2/
    image-1.jpg
    meta.txt
```

## Extraction Scripts

The scripts used to rebuild this archive are in `data/pics/`:

- `extract-2015-2022.js`
- `extract-2023.js`
- `extract-2024.js`
- `extract-2025.js`

They read the structure from `client/src/resources/pics/` and rebuild the copy in `data/pics/`.