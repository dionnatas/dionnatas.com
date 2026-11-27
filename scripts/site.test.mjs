import assert from 'node:assert/strict';
import {after, before, test} from 'node:test';
import {once} from 'node:events';
import {pages} from '../site/render.mjs';
import {origin} from '../site/content.mjs';
import {makeServer} from './serve.mjs';

const server = makeServer();
let base;
before(async()=>{server.listen(0,'127.0.0.1');await once(server,'listening');base='http://127.0.0.1:'+server.address().port;});
after(async()=>{server.closeAllConnections();await new Promise(resolve=>server.close(resolve));});
const indexable=pages.filter(p=>!p.noindex);
test('rotas entregam conteúdo completo, títulos únicos, canonical, OG e recursos reais',async()=>{
  const titles=new Set();
  for(const page of indexable){
    const res=await fetch(base+page.route);
    assert.equal(res.status,200,page.route);
    const html=await res.text();
    const title=html.match(/<title>(.*?)<\/title>/)[1];
    assert(!titles.has(title),title);
    titles.add(title);
    assert.match(html,/<html lang="pt-BR">/);
    assert.equal((html.match(/<h1>/g)||[]).length,1,page.route);
    assert(html.includes('<link rel="canonical" href="'+origin+page.route+'">'));
    assert.match(html,/<meta name="description" content="[^"]+">/);
    assert.match(html,/<main [^>]*id="conteudo">/);
    assert.match(html,/<nav aria-label=/);
    const image=html.match(/property="og:image" content="https:\/\/www\.dionnatas\.com([^"]+)"/)[1];
    assert.match((await fetch(base+image)).headers.get('content-type'),/^image\//);
    for(const [,url] of html.matchAll(/(?:href|src)="(\/[^"]+)"/g)){
      assert.equal((await fetch(base+url)).status,200,url);
    }
  }
});
test('robots é texto e sitemap é XML com todas as canônicas públicas',async()=>{
  const robots=await fetch(base+'/robots.txt');
  assert.match(robots.headers.get('content-type'),/^text\/plain/);
  assert((await robots.text()).includes('Sitemap: '+origin+'/sitemap.xml'));
  const xml=await fetch(base+'/sitemap.xml');
  assert.match(xml.headers.get('content-type'),/^application\/xml/);
  const sitemap=await xml.text();
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]),indexable.map(p=>origin+p.route));
});
test('rota desconhecida tem 404 real e arquivos de servidor não são publicados',async()=>{
  for(const path of ['/nao-existe','/404','/server.js','/site/content.mjs']){
    const res=await fetch(base+path);
    assert.equal(res.status,404,path);
    assert.match(await res.text(),/name="robots" content="noindex"/);
  }
});
test('contato e navegação não exigem JavaScript',async()=>{
  const html=await (await fetch(base+'/contato')).text();
  assert.match(html,/href="mailto:dionnatas@dionnatas\.com"/);
  assert.match(html,/href="https:\/\/www\.linkedin\.com\/in\/dionnatas\//);
  assert.match(html,/<form data-contact hidden method="post"/);
  assert.match(html,/id="form-status" role="status"/);
  assert.doesNotMatch(await (await fetch(base+'/cv')).text(),/Data de Nascimento/i);
});
