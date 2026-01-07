const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const svg = path.join(publicDir, 'favicon.svg');

if (!fs.existsSync(svg)) {
  console.error('SVG favicon not found at', svg);
  process.exit(1);
}

async function generate() {
  const sizes = [16, 32, 180, 192, 512];
  try {
    for (const s of sizes) {
      const out = path.join(publicDir, `favicon-${s}.png`);
      await sharp(svg).resize(s, s).png().toFile(out);
      console.log('Wrote', out);
    }

    // Create favicon.ico from 16 + 32 sized PNGs
    const png16 = path.join(publicDir, 'favicon-16.png');
    const png32 = path.join(publicDir, 'favicon-32.png');
    const buf = await pngToIco([png16, png32]);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buf);
    console.log('Wrote', path.join(publicDir, 'favicon.ico'));

    console.log('Favicon generation complete.');
  } catch (err) {
    console.error('Error generating favicons', err);
    process.exit(1);
  }
}

generate();
