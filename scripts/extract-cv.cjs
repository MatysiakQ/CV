const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const dir = path.resolve(__dirname, '../public/assets/cv');
const files = ['cv-mobile.pdf', 'cv-desktop.pdf'];

(async () => {
  for (const f of files) {
    const p = path.join(dir, f);
    if (!fs.existsSync(p)) {
      console.error('Missing', p);
      continue;
    }
    const dataBuffer = fs.readFileSync(p);
    try {
      const data = await pdf(dataBuffer);
      const out = path.join(dir, f.replace('.pdf', '.txt'));
      fs.writeFileSync(out, data.text, 'utf8');
      console.log('Wrote', out);
    } catch (err) {
      console.error('Failed parse', p, err.message);
    }
  }
})();
