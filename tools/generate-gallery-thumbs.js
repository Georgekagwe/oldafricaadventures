/* Old Africa Adventures — gallery thumbnail generator
   Creates a lightweight 640x640 JPEG thumbnail for every photo in
   assets/gallery/<Category>/, written to assets/gallery/thumbs/<Category>/.
   The gallery page uses these thumbnails in the grid and only loads the
   full-resolution original when someone opens it in the lightbox — phone
   photos straight out of a gallery folder are typically 2-8MB each, which
   is much too heavy to load 100+ of at once.

   This script needs the "sharp" package, which isn't part of this static
   site's dependencies (there's no root package.json/node_modules — the
   site is plain HTML/CSS/JS). To run it:

     npm init -y                 (only if this folder has no package.json yet)
     npm install sharp
     node tools/generate-gallery-thumbs.js

   Video files are skipped — the gallery page shows their first frame
   directly via <video preload="metadata">, so no separate thumbnail is
   needed for them.

   Run tools/generate-gallery-data.js afterwards (or first — order doesn't
   matter) to make sure js/gallery-data.js lists any newly added files. */

const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch {
  console.error('The "sharp" package isn\'t installed. Run:\n  npm install sharp\nfrom this project root, then re-run this script.');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'assets', 'gallery');
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png']);
const THUMB_SIZE = 640;
const THUMB_QUALITY = 72;

async function processCategory(category) {
  const srcDir = path.join(GALLERY_DIR, category);
  const outDir = path.join(GALLERY_DIR, 'thumbs', category);
  fs.mkdirSync(outDir, { recursive: true });

  let done = 0, skipped = 0, failed = 0;

  for (const file of fs.readdirSync(srcDir)) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) { skipped++; continue; }

    const outPath = path.join(outDir, path.basename(file, ext) + '.jpg');
    if (fs.existsSync(outPath)) continue; // already generated

    try {
      await sharp(path.join(srcDir, file))
        .rotate()
        .resize({ width: THUMB_SIZE, height: THUMB_SIZE, fit: 'cover' })
        .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
        .toFile(outPath);
      done++;
    } catch (err) {
      console.error('FAILED:', category, file, err.message);
      failed++;
    }
  }

  console.log(`${category}: ${done} created, ${skipped} skipped (video/other), ${failed} failed`);
}

async function build() {
  const categories = fs.readdirSync(GALLERY_DIR)
    .filter(name => name !== 'thumbs')
    .filter(name => fs.statSync(path.join(GALLERY_DIR, name)).isDirectory());

  for (const category of categories) {
    await processCategory(category);
  }
}

build();
