const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Define directories
const assetsDir = "./assets/images"; // Source images
const outputDir = "./images"; // Where resized images go

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all image files from the assets directory
let files = fs.readdirSync(assetsDir);

for (const file of files) {
  let filename = path.parse(file).name; // Get file name without extension

  console.log(`Resizing: ${file}`);

  sharp(`${assetsDir}/${file}`)
    .resize({ width: 780 }) // Set desired width
    .webp({ quality: 60 }) // Convert to WebP format
    .toFile(`${outputDir}/${filename}-780.webp`, (err, info) => {
      if (err) console.error("Error resizing:", err);
      else console.log(`✅ Saved: ${filename}-780.webp`);
    });

  sharp(`${assetsDir}/${file}`)
    .resize({ width: 550 }) // Second size option
    .webp({ quality: 60 })
    .toFile(`${outputDir}/${filename}-550.webp`, (err, info) => {
      if (err) console.error("Error resizing:", err);
      else console.log(`✅ Saved: ${filename}-550.webp`);
    });
}
