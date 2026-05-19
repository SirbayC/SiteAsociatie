const fs = require('fs/promises');
const path = require('path');

const yearFolder = '2024';
const sourceRoot = path.join(__dirname, '..', '..', 'client', 'src', 'resources', 'pics', yearFolder);
const outputRoot = path.join(__dirname, yearFolder);

async function main() {
  await fs.mkdir(outputRoot, { recursive: true });

  const entries = await fs.readdir(sourceRoot, { withFileTypes: true });
  const eventFolders = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((left, right) => left.localeCompare(right, 'en', { numeric: true }));

  for (const eventFolder of eventFolders) {
    await copyEventFolder(eventFolder);
  }

  console.log(`Copied ${eventFolders.length} event folders to ${outputRoot}`);
}

async function copyEventFolder(eventFolder) {
  const sourceEventDir = path.join(sourceRoot, eventFolder);
  const outputEventDir = path.join(outputRoot, eventFolder);
  const metadataPath = path.join(sourceEventDir, 'metadata.json');
  const photosPath = path.join(sourceEventDir, 'photos.js');
  const metaPath = path.join(outputEventDir, 'meta.txt');

  await fs.mkdir(outputEventDir, { recursive: true });

  const [metadataRaw, photosRaw] = await Promise.all([
    fs.readFile(metadataPath, 'utf8'),
    fs.readFile(photosPath, 'utf8'),
  ]);

  const metadata = JSON.parse(metadataRaw);
  const imageFiles = [...photosRaw.matchAll(/import\s+p\d+\s+from\s+['"]\.\/([^'"]+)['"]\s*;/g)].map(match => match[1]);

  for (const fileName of imageFiles) {
    const sourcePath = path.join(sourceEventDir, fileName);
    const targetPath = path.join(outputEventDir, fileName);
    await fs.copyFile(sourcePath, targetPath);
  }

  const title = metadata.subcategory || eventFolder;
  const description = metadata.desc || '';
  await fs.writeFile(metaPath, `${title}\n${description}`);
}

main().catch(error => {
  console.error('Extraction failed:', error);
  process.exitCode = 1;
});