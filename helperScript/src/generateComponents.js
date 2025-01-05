const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../../client/src/resources/pics/2024');

fs.readdir(baseDir, (err, folders) => {
  if (err) {
    console.error('Error reading base directory:', err);
    return;
  }

  folders.forEach(folder => {
    const metadataFilePath = path.join(baseDir, folder, 'metadata.json');
    const outputFilePath = path.join(baseDir, folder, `${folder}.jsx`);

    fs.readFile(metadataFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading metadata file for ${folder}:`, err);
        return;
      }

      try {
        const metadata = JSON.parse(data);
        const componentName = folder.replace(/[^a-zA-Z0-9]/g, '');

        const componentContent = `
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const ${componentName} = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">${metadata.subcategory}</div>
            <div className="desc">${metadata.desc}</div>
            <BasicRows />
        </div>
    );
}

export default ${componentName};
`;

        fs.writeFile(outputFilePath, componentContent, err => {
          if (err) {
            console.error(`Error writing component file for ${folder}:`, err);
          } else {
            console.log(`Component file generated successfully for ${folder}.`);
          }
        });
      } catch (err) {
        console.error(`Error parsing JSON for ${folder}:`, err);
      }
    });
  });
});