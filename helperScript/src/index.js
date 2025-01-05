const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const evName = "2015-2022"
const sanitizedEvName = evName.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
const imagesDir = path.join(__dirname,`../../client/src/resources/pics/${evName}`)
const outputFilePath = path.join(imagesDir, 'photos.js')

fs.readdir(imagesDir, async (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const imageFiles = files.filter(file => /\.(jpg|jpeg)$/i.test(file));
  const imports = [];
    const photos = [];
    let n = 0;

  for (const file of imageFiles) {
    const filePath = path.join(imagesDir, file);
    try {
      const image = sharp(filePath);
      image.rotate()
      const metadata = await image.metadata();
      n++
      let dim = getNormalSize(metadata)
      imports.push(`import ${'p' + n} from './${file}';`);
      photos.push(`{
        src: ${'p' + n},
        width: ${dim.width},
        height: ${dim.height}
      }`);
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }

  const content = `${imports.join('\n')}

export const p${sanitizedEvName} = [
  ${photos.join(',\n  ')}
];`;

  fs.writeFile(outputFilePath, content, err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('photos.js file generated successfully.');
    }
  });
});

function getNormalSize(metadata) {
  return (metadata.orientation || 0) >= 5
    ? { width: metadata.height, height: metadata.width }
    : { width: metadata.width, height: metadata.height };
}