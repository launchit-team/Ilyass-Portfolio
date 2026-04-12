/**
 * Image optimization script
 * Generates thumbnail (500px) and full-size (1600px) versions
 * in AVIF and WebP formats from source JPGs in public/images/
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const SRC_DIR = 'public/images';
const THUMB_DIR = 'public/images/thumbs';
const FULL_DIR = 'public/images/full';

const THUMB_WIDTH = 500;
const FULL_WIDTH = 1600;

const AVIF_OPTS = { quality: 50, effort: 4 };
const WEBP_OPTS = { quality: 75, effort: 4 };
const AVIF_FULL_OPTS = { quality: 65, effort: 4 };
const WEBP_FULL_OPTS = { quality: 82, effort: 4 };

async function run() {
  await mkdir(THUMB_DIR, { recursive: true });
  await mkdir(FULL_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f)
  );

  console.log(`Found ${files.length} source images\n`);

  for (const file of files) {
    const { name } = parse(file);
    const src = join(SRC_DIR, file);
    const img = sharp(src);
    const meta = await img.metadata();

    console.log(`Processing: ${file} (${meta.width}x${meta.height})`);

    // ── Thumbnails (grid) ──
    await sharp(src)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .avif(AVIF_OPTS)
      .toFile(join(THUMB_DIR, `${name}.avif`));

    await sharp(src)
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp(WEBP_OPTS)
      .toFile(join(THUMB_DIR, `${name}.webp`));

    // ── Full size (lightbox) ──
    await sharp(src)
      .resize({ width: FULL_WIDTH, withoutEnlargement: true })
      .avif(AVIF_FULL_OPTS)
      .toFile(join(FULL_DIR, `${name}.avif`));

    await sharp(src)
      .resize({ width: FULL_WIDTH, withoutEnlargement: true })
      .webp(WEBP_FULL_OPTS)
      .toFile(join(FULL_DIR, `${name}.webp`));

    console.log(`  ✓ thumb: avif + webp  |  full: avif + webp`);
  }

  console.log('\nDone! Optimized images written to:');
  console.log(`  Thumbnails → ${THUMB_DIR}/`);
  console.log(`  Full size  → ${FULL_DIR}/`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
