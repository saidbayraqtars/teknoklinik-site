// Ön-render: her sayfa için dolu HTML (başlık, açıklama, kanonik, JSON-LD ve içerik) üretir.
// Tarayıcı gerekmez; React sunucu çizimi (renderToString) kullanılır. Ayrıca sitemap.xml, robots.txt ve 404.html yazar.
// Sıra: vite build → vite build --ssr src/entry-server.jsx → node scripts/prerender.mjs
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const kok = path.resolve(import.meta.dirname, '..');
const dist = path.join(kok, 'dist');
const ssrDir = path.join(kok, 'dist-ssr');

const { render, pageMeta, headHtml, ALL_ROUTES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const { SITE_URL } = await import(pathToFileURL(path.join(kok, 'src/data/site.js')).href);

const sablon = await readFile(path.join(dist, 'index.html'), 'utf8');
if (!sablon.includes('<!--head-->') || !sablon.includes('<!--app-->')) {
    throw new Error('dist/index.html içinde <!--head--> ya da <!--app--> yok');
}

const sayfa = (url) =>
    sablon.replace('<!--head-->', headHtml(pageMeta(url))).replace('<!--app-->', render(url));

for (const url of ALL_ROUTES) {
    const dosya = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html');
    await mkdir(path.dirname(dosya), { recursive: true });
    await writeFile(dosya, sayfa(url));
    console.log('[prerender]', url);
}

await writeFile(path.join(dist, '404.html'), sayfa('/__bulunamadi'));
console.log('[prerender] 404.html');

const bugun = new Date().toISOString().slice(0, 10);
const oncelik = (u) => (u === '/' ? '1.0' : u.startsWith('/hizmetler') ? '0.9' : u === '/gizlilik' ? '0.3' : '0.7');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ALL_ROUTES.map((u) => `  <url><loc>${SITE_URL}${u === '/' ? '/' : u}</loc><lastmod>${bugun}</lastmod><priority>${oncelik(u)}</priority></url>`).join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log('[prerender] sitemap.xml, robots.txt');

await rm(ssrDir, { recursive: true, force: true });
