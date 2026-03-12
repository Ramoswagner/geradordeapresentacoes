const fs = require('fs');
const path = require('path');

const DIST_DIR = './dist';

if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
}
fs.mkdirSync(DIST_DIR);
fs.copyFileSync('./index.html', path.join(DIST_DIR, 'index.html'));
console.log('Build completed!');
