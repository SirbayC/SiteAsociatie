const fs = require('fs/promises');
const path = require('path');

const yearFolder = '2023';
const sourceDir = path.join(__dirname, '..', '..', 'client', 'src', 'resources', 'pics', yearFolder);
const outputDir = path.join(__dirname, yearFolder);
const sourceManifestPath = path.join(sourceDir, 'photos.js');

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const sourceManifest = await fs.readFile(sourceManifestPath, 'utf8');
  const imageFiles = [...sourceManifest.matchAll(/import\s+p\d+\s+from\s+'\.\/([^']+)'\s*;/g)].map(match => match[1]);

  for (const fileName of imageFiles) {
    const sourcePath = path.join(sourceDir, fileName);
    const targetPath = path.join(outputDir, fileName);

    await fs.copyFile(sourcePath, targetPath);
  }

  console.log(`Copied ${imageFiles.length} images to ${outputDir}`);
}

main().catch(error => {
  console.error('Extraction failed:', error);
  process.exitCode = 1;
});