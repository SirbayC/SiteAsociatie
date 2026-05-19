const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const dataRoot = path.join(__dirname, '..', '..', 'data', 'pics');
const publicPicsDir = path.join(__dirname, '..', '..', 'client', 'public', 'pics');

// Map to track image ID -> original filename for manifest
const imageMap = new Map();

// Track manifests by year for index generation
const manifestsByYear = {
  '2024': [],
  '2025': [],
};

async function generateUniqueId(fullPath) {
  // Generate deterministic ID from full path
  const hash = crypto.createHash('sha256').update(fullPath).digest('hex').substring(0, 8);
  const ext = path.extname(fullPath).toLowerCase();
  return `${hash}${ext}`;
}

async function getImageDimensions(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    // Some cameras store orientation in EXIF. If orientation indicates a
    // rotation by 90/270 degrees, swap width/height so manifests reflect
    // the displayed aspect ratio (not the raw pixel storage).
    const orient = metadata.orientation || metadata.Orientation || null;
    const rotated = orient && [5, 6, 7, 8].includes(Number(orient));
    return rotated
      ? { width: metadata.height, height: metadata.width }
      : { width: metadata.width, height: metadata.height };
  } catch (error) {
    console.warn(`  ⚠️ Could not read dimensions for ${imagePath}: ${error.message}`);
    return { width: 800, height: 600 }; // Fallback
  }
}

async function readMeta(folderPath) {
  const metaPath = path.join(folderPath, 'meta.txt');
  try {
    const content = await fs.readFile(metaPath, 'utf8');
    const lines = content.trim().split('\n');
    return {
      title: lines[0] || '',
      description: lines[1] || '',
    };
  } catch {
    return { title: '', description: '' };
  }
}

async function processImageFile(imagePath, sourceRelativePath) {
  const imageId = await generateUniqueId(sourceRelativePath);
  const targetPath = path.join(publicPicsDir, imageId);

  await fs.copyFile(imagePath, targetPath);

  const dimensions = await getImageDimensions(imagePath);
  imageMap.set(imageId, { ...dimensions });

  return imageId;
}

async function processFlatYear(year) {
  console.log(`\n📅 Processing ${year} (flat)...`);
  const yearDir = path.join(dataRoot, year);
  const manifest = {
    title: year,
    description: '',
    images: [],
  };

  try {
    const files = await fs.readdir(yearDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();

    for (const file of imageFiles) {
      const imagePath = path.join(yearDir, file);
      const sourceRelativePath = `${year}/${file}`;
      const imageId = await processImageFile(imagePath, sourceRelativePath);

      manifest.images.push({
        id: imageId,
        ...imageMap.get(imageId),
      });
    }

    const manifestPath = path.join(publicPicsDir, `${year}-manifest.json`);
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`  ✓ Generated manifest for ${year} with ${manifest.images.length} images`);
  } catch (error) {
    console.error(`  ✗ Error processing ${year}:`, error.message);
  }
}

async function processEventYear(year) {
  console.log(`\n📅 Processing ${year} (event-based)...`);
  const yearDir = path.join(dataRoot, year);

  try {
    const entries = await fs.readdir(yearDir, { withFileTypes: true });
    const eventFolders = entries
      .filter(e => e.isDirectory())
      .map(e => e.name)
      .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

    for (const eventFolder of eventFolders) {
      const eventPath = path.join(yearDir, eventFolder);
      const metaPath = path.join(eventPath, 'meta.txt');

      try {
        const meta = await readMeta(eventPath);

        // Check if this is a complex event (has subfolders)
        const subitems = await fs.readdir(eventPath, { withFileTypes: true });
        const subfolders = subitems.filter(e => e.isDirectory()).map(e => e.name);

        if (subfolders.length > 0) {
          // Complex event with subevents
          await processComplexEvent(year, eventFolder, eventPath, meta, subfolders);
        } else {
          // Simple event
          await processSimpleEvent(year, eventFolder, eventPath, meta);
        }
      } catch (error) {
        console.error(`  ✗ Error processing event ${eventFolder}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`  ✗ Error processing year ${year}:`, error.message);
  }
}

async function processSimpleEvent(year, eventFolder, eventPath, meta) {
  const manifest = {
    title: meta.title || eventFolder,
    description: meta.description || '',
    images: [],
  };

  const files = await fs.readdir(eventPath);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();

  for (const file of imageFiles) {
    const imagePath = path.join(eventPath, file);
    const sourceRelativePath = `${year}/${eventFolder}/${file}`;
    const imageId = await processImageFile(imagePath, sourceRelativePath);

    manifest.images.push({
      id: imageId,
      ...imageMap.get(imageId),
    });
  }

  const manifestFilename = `${year}-${eventFolder.replace(/[^a-zA-Z0-9]/g, '')}-manifest.json`;
  const manifestPath = path.join(publicPicsDir, manifestFilename);
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  
  // Track for index
  if (manifestsByYear[year]) {
    manifestsByYear[year].push({
      id: manifestFilename,
      type: 'simple',
    });
  }
  
  console.log(`  ✓ Event: ${eventFolder} (${manifest.images.length} images)`);
}

async function processComplexEvent(year, eventFolder, eventPath, meta, subfolders) {
  console.log(`    ℹ️ Complex event: ${eventFolder} with ${subfolders.length} subevents`);

  const subevents = [];

  for (const subfolder of subfolders) {
    const subeventPath = path.join(eventPath, subfolder);
    const subeventMeta = await readMeta(subeventPath);

    const manifest = {
      title: subeventMeta.title || subfolder,
      description: subeventMeta.description || '',
      images: [],
    };

    const files = await fs.readdir(subeventPath);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();

    for (const file of imageFiles) {
      const imagePath = path.join(subeventPath, file);
      const sourceRelativePath = `${year}/${eventFolder}/${subfolder}/${file}`;
      const imageId = await processImageFile(imagePath, sourceRelativePath);

      manifest.images.push({
        id: imageId,
        ...imageMap.get(imageId),
      });
    }

    const manifestFilename = `${year}-${eventFolder.replace(/[^a-zA-Z0-9]/g, '')}-${subfolder.replace(/[^a-zA-Z0-9]/g, '')}-manifest.json`;
    const manifestPath = path.join(publicPicsDir, manifestFilename);
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    
    // Track subevent for complex event grouping
    subevents.push({
      id: manifestFilename,
    });
    
    console.log(`      ✓ Subevent: ${subfolder} (${manifest.images.length} images)`);
  }

  // Add complex event to index with grouped subevents
  if (manifestsByYear[year]) {
    manifestsByYear[year].push({
      id: `${year}-${eventFolder.replace(/[^a-zA-Z0-9]/g, '')}-complex`,
      title: meta.title || eventFolder,
      type: 'complex',
      subevents,
    });
  }
}

async function main() {
  try {
    // Ensure output directory exists
    await fs.mkdir(publicPicsDir, { recursive: true });
    console.log(`📦 Creating manifests and copying images to ${publicPicsDir}`);

    // Process flat years
    await processFlatYear('2015-2022');
    await processFlatYear('2023');

    // Process event-based years
    await processEventYear('2024');
    await processEventYear('2025');

    // Generate index files for event-based years
    for (const year of ['2024', '2025']) {
      const indexPath = path.join(publicPicsDir, `${year}-index.json`);
      const index = {
        year,
        events: manifestsByYear[year],
      };
      await fs.writeFile(indexPath, JSON.stringify(index, null, 2));
      console.log(`  ✓ Generated index for ${year} with ${manifestsByYear[year].length} entries`);
    }

    console.log('\n✅ All manifests generated successfully!');
    console.log(`📊 Total images processed: ${imageMap.size}`);
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exitCode = 1;
  }
}

main();
