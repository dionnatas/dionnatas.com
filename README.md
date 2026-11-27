# dionnatas.com

Portfólio público de Diônnatas Santa Fé Filho: projetos, artigos de engenharia, currículo e contato.

## Desenvolvimento

Requer Node.js 22 ou superior. O build não tem dependências externas de npm.

- `npm start`: gera e serve uma prévia em `http://localhost:4173`.
- `npm test`: gera o site e verifica HTML, links internos, sitemap, robots e status HTTP.
- `npm run build`: gera as páginas estáticas em `build/`.

O conteúdo está em `site/content.mjs`, as páginas em `site/render.mjs` e o estilo em `site/style.css`. As imagens de compartilhamento estão em `public/images`.

## Deploy

A Vercel usa `vercel.json` para publicar apenas `build/`. A branch `master` está ligada a produção; outras branches geram previews. Valide as rotas diretas, o sitemap e uma URL inexistente antes do merge. A configuração de domínio e a proteção de previews são gerenciadas na Vercel.

O formulário preserva o serviço e o template públicos do EmailJS. Os testes simulam a API, sem enviar mensagens reais. Se a conta tiver allowlist de origem, a URL de Preview pode não ter permissão; valide a configuração no dashboard sem liberar origens indiscriminadamente. E-mail direto e LinkedIn continuam disponíveis sem JavaScript. O `server.js` é legado e não participa do build nem do deploy.
