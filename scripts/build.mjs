import {cp, mkdir, rm, writeFile} from 'node:fs/promises';
import {origin} from '../site/content.mjs';
import {pages, render} from '../site/render.mjs';
const base = new URL('../build/', import.meta.url);
await rm(base, {recursive:true, force:true});
await mkdir(new URL('assets/', base), {recursive:true});
await mkdir(new URL('images/', base), {recursive:true});
await Promise.all([
  cp(new URL('../site/style.css', import.meta.url), new URL('assets/site.css',base)),
  cp(new URL('../site/client.js', import.meta.url), new URL('assets/site.js',base)),
  ...['Dionn_Proff.jpg','favicon.svg','og-home.png','og-projetos.png','og-artigos.png','Profile.pdf'].map(file=>cp(new URL('../public/images/'+file,import.meta.url),new URL('images/'+file,base))),
  ...pages.map(async page => {
    const path = page.route === '/' ? 'index.html' : page.route.slice(1)+'.html';
    const output = new URL(path, base);
    await mkdir(new URL('./',output), {recursive:true});
    await writeFile(output,render(page));
  }),
  writeFile(new URL('robots.txt',base),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`),
  writeFile(new URL('sitemap.xml',base),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p=>!p.noindex).map(p=>`  <url><loc>${origin}${p.route}</loc></url>`).join('\n')}\n</urlset>\n`),
]);
console.log(`Geradas ${pages.length} páginas estáticas, robots.txt e sitemap.xml.`);
