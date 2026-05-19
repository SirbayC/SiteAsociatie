const fs = require('fs/promises');
const path = require('path');

const yearFolder = '2025';
const sourceRoot = path.join(__dirname, '..', '..', 'client', 'src', 'resources', 'pics', yearFolder);
const outputRoot = path.join(__dirname, yearFolder);

async function main() {
  await fs.rm(outputRoot, { recursive: true, force: true });
  await fs.mkdir(outputRoot, { recursive: true });

  const topLevelEntries = await fs.readdir(sourceRoot, { withFileTypes: true });
  const topLevelFolders = topLevelEntries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((left, right) => left.localeCompare(right, 'en', { numeric: true }));

  for (const folderName of topLevelFolders) {
    await processEventFolder(path.join(sourceRoot, folderName), path.join(outputRoot, folderName));
  }

  console.log(`Copied ${topLevelFolders.length} top-level event folders to ${outputRoot}`);
}

async function processEventFolder(sourceDir, outputDir) {
  const jsxPath = await findSingleFileByExtension(sourceDir, '.jsx');
  if (!jsxPath) {
    throw new Error(`Missing JSX metadata file in ${sourceDir}`);
  }

  const jsxContent = await fs.readFile(jsxPath, 'utf8');
  const eventInfo = parseEventJsx(jsxContent);
  const importPaths = eventInfo.importPaths;

  await fs.mkdir(outputDir, { recursive: true });

  if (importPaths.length === 0) {
    await copyLeafEvent(sourceDir, outputDir, eventInfo.title, eventInfo.desc);
    return;
  }

  await fs.writeFile(path.join(outputDir, 'meta.txt'), `${eventInfo.title}\n`);

  for (let index = 0; index < importPaths.length; index++) {
    const relativeChildPath = importPaths[index];
    const childSourceDir = path.join(sourceDir, relativeChildPath);
    const childOutputDir = path.join(outputDir, relativeChildPath);
    const childTitle = eventInfo.subNames[index] || path.basename(relativeChildPath);
    const childDesc = eventInfo.subDescs[index] || '';

    await copyLeafEvent(childSourceDir, childOutputDir, childTitle, childDesc);
  }
}

async function copyLeafEvent(sourceDir, outputDir, title, desc) {
  const photosPath = path.join(sourceDir, 'photos.js');
  const photosContent = await fs.readFile(photosPath, 'utf8');
  const imageFiles = [...photosContent.matchAll(/import\s+p\d+\s+from\s+['"]\.\/([^'"]+)['"]\s*;/g)].map(match => match[1]);

  await fs.mkdir(outputDir, { recursive: true });

  for (const fileName of imageFiles) {
    await fs.copyFile(path.join(sourceDir, fileName), path.join(outputDir, fileName));
  }

  await fs.writeFile(path.join(outputDir, 'meta.txt'), `${title}\n${desc ?? ''}`);
}

async function findSingleFileByExtension(dirPath, extension) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const matches = entries.filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith(extension));

  if (matches.length === 0) {
    return null;
  }

  if (matches.length > 1) {
    throw new Error(`Expected exactly one ${extension} file in ${dirPath}, found ${matches.length}`);
  }

  return path.join(dirPath, matches[0].name);
}

function parseEventJsx(jsxContent) {
  const title = extractFirstMatch(jsxContent, /<div className="name">([\s\S]*?)<\/div>/);
  const desc = extractFirstMatch(jsxContent, /<div className="desc">([\s\S]*?)<\/div>/) || '';
  const importPaths = [...jsxContent.matchAll(/import\s+[^;]+\s+from\s+["']\.\/([^"']+)\/photos["'];?/g)].map(match => match[1]);
  const subNames = [...jsxContent.matchAll(/<div className="subName">([\s\S]*?)<\/div>/g)].map(match => match[1].trim());
  const subDescs = [...jsxContent.matchAll(/<div className="subDesc">([\s\S]*?)<\/div>/g)].map(match => match[1].trim());

  if (!title) {
    throw new Error('Unable to parse event title from JSX');
  }

  if (subNames.length !== subDescs.length) {
    throw new Error('Mismatched subName/subDesc entries in JSX metadata');
  }

  if (importPaths.length > 0 && importPaths.length !== subNames.length) {
    throw new Error('Mismatched child imports and subevent metadata in JSX');
  }

  return {
    title,
    desc,
    importPaths,
    subNames,
    subDescs,
  };
}

function extractFirstMatch(text, regex) {
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}

main().catch(error => {
  console.error('Extraction failed:', error);
  process.exitCode = 1;
});