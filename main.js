const fs = require('fs').promises; 
const subsetFont = require('subset-font');


// Add your input and output here
const inputPath = 'input/PublicSans-BlackItalic.woff'; 
const outputPath = 'output/subset_PublicSans-BlackItalic.woff'; 


async function doTheThing() {
  
  try {
    // Read the file content asynchronously and await for its completion
    const mySfntFontBuffer = await fs.readFile(inputPath);

    // Create a new font with only the characters required to render "Hello, world!" in WOFF2 format:
    const subsetBuffer = await subsetFont(mySfntFontBuffer, 'Hello, world!', {
      targetFormat: 'woff2',
    });

    await fs.writeFile(outputPath, subsetBuffer);

    console.log("Success: Subset font created successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
}

doTheThing();