import fs from 'fs';
import { createCanvas, loadImage, registerFont } from './lib/canvas.js';
import path from 'path';

const customFont = path.join(process.cwd(), 'fonts', 'ChildosArabicDEMO-Light.otf');
registerFont(customFont, { family: 'ChildosArabic' });

async function test() {
  const img = await loadImage('public/1.png');
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '32px ChildosArabic';
  ctx.lineWidth = 8;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#ffffff';
  ctx.fillStyle = '#000000';

  // Test coordinates
  // Left column: x = 255
  // Right column: x = 635
  const testCoords = {
    Chile: [255, 588],
    Colombia: [255, 628],
    Ecuador: [255, 668],
    España: [255, 708],
    EEUU: [255, 748],

    Mexico: [635, 588],
    Brasil: [635, 628],
    Argentina: [635, 668],
    Paraguay: [635, 708],
    Peru: [635, 748],
  };

  const dummyRates = {
    Chile: '0.9431',
    Colombia: '0.2902',
    Ecuador: '1.00',
    España: '953.10',
    EEUU: '874.35',
    Mexico: '45.13',
    Brasil: '185.39',
    Argentina: '0.5897',
    Paraguay: '0.1607',
    Peru: '268.43',
  };

  for (const [country, pos] of Object.entries(testCoords)) {
    const val = dummyRates[country];
    ctx.strokeText(val, pos[0], pos[1]);
    ctx.fillText(val, pos[0], pos[1]);
  }

  const buf = canvas.toBuffer('image/jpeg');
  fs.writeFileSync('scratch_positions.jpg', buf);
  console.log('Saved scratch_positions.jpg');
}

test().catch(console.error);
