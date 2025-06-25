const fs = require('fs');
const https = require('https');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images/ticker');

// Ensure the directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Download 6 images from placekitten.com
const downloadImage = (index) => {
  const fileName = path.join(IMAGES_DIR, `image${index}.jpg`);
  const url = `https://placekitten.com/320/${320 + index}`; // Different sizes to get different images
  
  console.log(`Downloading image ${index} from ${url}...`);
  
  const file = fs.createWriteStream(fileName);
  
  https.get(url, (response) => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Image ${index} downloaded successfully!`);
    });
  }).on('error', (err) => {
    fs.unlink(fileName, () => {}); // Delete the file if there was an error
    console.error(`Error downloading image ${index}: ${err.message}`);
  });
};

// Download 6 images
for (let i = 1; i <= 6; i++) {
  downloadImage(i);
}

console.log('Started downloading 6 placeholder images. Please wait...'); 