const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, '../../client/src/resources/pics/2024');

fs.readdir(baseDir, (err, folders) => {
  if (err) {
    console.error('Error reading base directory:', err);
    return;
  }

  folders.forEach(folder => {
    const evName = folder;
    const sanitizedEvName = evName.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters
    const imagesDir = path.join(baseDir, evName);
    const outputFilePath = path.join(imagesDir, 'photos.js');

    fs.readdir(imagesDir, async (err, files) => {
      if (err) {
        console.error(`Error reading directory ${imagesDir}:`, err);
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
          const metadata = await image.metadata();
          n++;
          imports.push(`import ${'p' + n} from './${file}';`);
          photos.push(`{
            src: ${'p' + n},
            width: ${metadata.width},
            height: ${metadata.height}
          }`);
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
        }
      }

      const content = `${imports.join('\n')}

export const content = [
  ${photos.join(',\n  ')}
];`;

      fs.writeFile(outputFilePath, content, err => {
        if (err) {
          console.error(`Error writing file ${outputFilePath}:`, err);
        } else {
          console.log(`photos.js file generated successfully for ${evName}.`);
        }
      });
    });
  });
});