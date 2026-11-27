import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {extname,resolve,sep} from 'node:path';
const root=fileURLToPath(new URL('../build',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.pdf':'application/pdf'};
export const makeServer = () => createServer(async (request,response)=>{
  const reply = (status, type, data) => {
    response.writeHead(status, {'Content-Type':type,'X-Content-Type-Options':'nosniff','X-Robots-Tag':'noindex'});
    response.end(request.method === 'HEAD' ? undefined : data);
  };
  if (!['GET','HEAD'].includes(request.method)) return reply(405, types['.txt'], 'Method not allowed');
  let pathname;
  try {pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);}
  catch {return reply(400,types['.txt'],'Invalid path');}
  let target=pathname==='/' ? '/index.html' : pathname.replace(/\/$/,'');
  if (!extname(target)) target+='.html';
  const file=resolve(root,'.'+target);
  if (file.startsWith(root+sep) && file !== resolve(root,'404.html')) {
    try {return reply(200,types[extname(file)]||'application/octet-stream',await readFile(file));}
    catch { /* Fall through to the public not-found page. */ }
  }
  reply(404,types['.html'],await readFile(resolve(root,'404.html')));
});
if (process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const port=Number(process.env.PORT || 4173);
  makeServer().listen(port,'0.0.0.0',()=>console.log('Prévia local: http://localhost:'+port));
}
