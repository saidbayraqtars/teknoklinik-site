// Görselleri üretir: gorsel-kaynak/*.png → public/img/*.webp, favicon/simge ve paylaşım görseli (og-image.jpg).
// Çıktılar depoya girer; derleme (npm run build) sharp gerektirmez. Görsel değişince: npm run gorseller
import sharp from 'sharp';
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const kok = path.resolve(import.meta.dirname, '..');
const pub = path.join(kok, 'public');
const kaynak = path.join(kok, 'gorsel-kaynak');
const hedef = path.join(pub, 'img');
await mkdir(hedef, { recursive: true });

// 1) Galeri/hizmet görselleri
for (const ad of (await readdir(kaynak)).filter((f) => f.endsWith('.png'))) {
    const cikti = path.join(hedef, ad.replace(/\.png$/, '.webp'));
    await sharp(path.join(kaynak, ad)).resize(640, 640, { fit: 'cover' }).webp({ quality: 78 }).toFile(cikti);
    console.log('webp', path.relative(kok, cikti));
}

// 2) Simge: Reicon "monitor" ikonu (src/components/Icon.jsx içinden) sarı kare üstünde
const iconSrc = await readFile(path.join(kok, 'src/components/Icon.jsx'), 'utf8');
const monitor = JSON.parse(iconSrc.match(/'monitor': ("(?:[^"\\]|\\.)*"),/)[1]);
const simgeSvg = (boyut) => `<svg xmlns="http://www.w3.org/2000/svg" width="${boyut}" height="${boyut}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#FFD700"/>
  <g transform="translate(12 12) scale(1.6667)" color="#0a0a0a">${monitor}</g>
</svg>`;
await writeFile(path.join(pub, 'favicon.svg'), simgeSvg(64));
for (const [ad, b] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180], ['favicon-32.png', 32]]) {
    await sharp(Buffer.from(simgeSvg(b))).png().toFile(path.join(pub, ad));
    console.log('simge', ad);
}

// 3) Paylaşım görseli 1200×630
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="20%" cy="40%" r="70%"><stop offset="0" stop-color="#2a2400"/><stop offset="1" stop-color="#0a0a0a"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(70 80)">
    <rect width="72" height="72" rx="16" fill="#FFD700"/>
    <g transform="translate(12 12) scale(2)" color="#0a0a0a">${monitor}</g>
    <text x="92" y="52" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="900" fill="#ffffff">TECNO<tspan fill="#FFD700">KLİNİK</tspan></text>
  </g>
  <text x="70" y="290" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" fill="#ffffff">Samsun Bilgisayar ve</text>
  <text x="70" y="365" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" fill="#FFD700">Yazıcı Tamiri</text>
  <text x="70" y="425" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#cfcfcf">Kamera montajı · Bilgisayar alım satımı</text>
  <text x="70" y="465" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#cfcfcf">Yazıcı kiralama · Web tasarım</text>
  <text x="70" y="540" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="#ffffff">0545 342 29 44 · tecnoklinik.com</text>
</svg>`;
const foto = await sharp(path.join(kaynak, 'anakart-tamiri.png')).resize(380, 380).png().toBuffer();
const yuvarlak = Buffer.from('<svg width="380" height="380"><rect width="380" height="380" rx="28" fill="#fff"/></svg>');
const fotoYuv = await sharp(foto).composite([{ input: yuvarlak, blend: 'dest-in' }]).png().toBuffer();
await sharp(Buffer.from(ogSvg))
    .composite([{ input: fotoYuv, left: 760, top: 125 }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(pub, 'og-image.jpg'));
console.log('og-image.jpg');
