import {cases, posts, experience, name, origin, email, linkedin} from './content.mjs';

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');
const pageTitle = (s) => s + ' | ' + name;
const nav = [['/projetos','Projetos'],['/artigos','Artigos'],['/cv','Currículo'],['/contato','Contato']];
const arrow = '<svg class="arrow" aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M4 12 12 4M5 4h7v7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const more = (url,label,style = '') => `<a class="button ${style}" href="${url}">${label} ${arrow}</a>`;
const lead = (eyebrow, title, intro) => `<header class="page-lead"><p class="eyebrow">${eyebrow}</p><h1>${escape(title)}</h1><p class="intro">${escape(intro)}</p></header>`;
const caseUrl = (item) => '/projetos/' + item.slug;
const postUrl = (item) => '/artigos/' + item.slug;
const visual = (c) => c.number === '01' ?
  '<svg viewBox="0 0 460 235" fill="none" aria-hidden="true"><defs><pattern id="grid1" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" stroke="currentColor" opacity=".2"/></pattern></defs><path d="M0 0H460V235H0z" fill="url(#grid1)"/><g stroke="currentColor"><circle cx="230" cy="120" r="82" opacity=".4"/><circle cx="230" cy="120" r="61" stroke-dasharray="4 6" opacity=".75"/><path d="M139 103v-39h39m104 0h39v39m0 35v39h-39m-104 0h-39v-39" stroke-width="2"/><path d="m211 122 14 14 28-30" stroke-width="3"/><path d="M0 120h139m182 0h139" opacity=".5"/></g></svg>' :
  '<svg viewBox="0 0 460 235" fill="none" aria-hidden="true"><defs><pattern id="grid2" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" stroke="currentColor" opacity=".2"/></pattern></defs><path d="M0 0H460V235H0z" fill="url(#grid2)"/><g stroke="currentColor"><path d="M0 116h112m235 0h113" opacity=".5"/><path d="M176 116h46m18 0h45" stroke-dasharray="4 5"/><rect x="112" y="87" width="64" height="58" rx="12"/><rect x="285" y="87" width="64" height="58" rx="12"/><circle cx="230" cy="116" r="9" fill="currentColor"/><path d="M128 108h32m-32 10h23m151-11h29m-29 13h20" stroke-width="2"/></g></svg>';
const caseCard = (c) => `<article class="case-card"><a href="${caseUrl(c)}"><div class="case-visual case-${c.number}">${visual(c)}<span aria-hidden="true">${c.number} / PROJETO</span></div><div class="case-copy"><p class="eyebrow">${c.tag}</p><h3>${c.title}</h3><p>${c.intro}</p><span class="link-label">Ver projeto ${arrow}</span></div></a></article>`;
const caseSection = () => `<div class="case-grid">${cases.map(caseCard).join('')}</div>`;
const articleLink = (p) => `<article class="reading-card"><a href="${postUrl(p)}"><p class="eyebrow">Android · Guia prático</p><h3>${p.title}</h3><p>${p.intro}</p><span class="link-label">Ler artigo ${arrow}</span></a></article>`;
const closing = () => `<section class="closing"><div><p class="eyebrow">Contato</p><h2>Tem um desafio de integração?</h2><p>Me conte o que você está construindo.</p></div>${more('/contato','Entrar em contato','primary')}</section>`;

const home = {
  route: '/', title: name + ' | Tech Lead em SDKs, Biometria e Pagamentos',
  description: 'Portfólio de Diônnatas Santa Fé Filho, Tech Lead em SDKs móveis, biometria facial e pagamentos. Veja projetos, artigos e experiência profissional.',
  body: () => `<section class="hero"><div class="hero-copy"><p class="eyebrow">Portfólio de engenharia · São Paulo, BR</p><h1>${name}</h1><p class="hero-role">Tech Lead em SDKs móveis,<br class="desktop-break"> biometria e pagamentos.</p><p class="intro">Lidero o desenvolvimento de SDKs e integrações para reconhecimento facial, validação de identidade e pagamentos.</p><div class="actions">${more('/projetos','Ver projetos','primary')}${more('/contato','Entrar em contato')}</div></div><figure class="portrait"><img src="/images/Dionn_Proff.jpg" alt="Retrato de ${name}" width="539" height="719" fetchpriority="high"><figcaption><span>Diônnatas S. Fé Filho</span><span>Tech Lead · Payface</span></figcaption></figure></section>
  <section class="section"><div class="section-head"><div><p class="eyebrow">01 / Portfólio</p><h2>Projetos em destaque</h2></div><p>Da captura biométrica à integração com terminais de pagamento.</p></div>${caseSection()}</section>
  <section class="section reading"><div><p class="eyebrow">02 / Escrita técnica</p><h2>Artigos</h2><p>Guias práticos sobre desenvolvimento e distribuição de SDKs.</p></div>${articleLink(posts[0])}</section>
  <section class="section experience"><div><p class="eyebrow">03 / Trajetória</p><h2>Liderança e engenharia</h2></div><div><p>Na Payface, trabalho com biometria facial, SDKs e pagamentos. Antes, na SKYTEF, desenvolvi aplicações Android para terminais SmartPOS e integrações de pagamento.</p>${more('/cv','Ver currículo')}</div></section>${closing()}`,
  schema: {'@context':'https://schema.org','@type':'ProfilePage', mainEntity:{'@type':'Person',name,url:origin+'/',image:origin+'/images/Dionn_Proff.jpg',jobTitle:'Tech Lead',sameAs:[linkedin,'https://github.com/dionnatas']}}
};
export const pages = [
  home,
  {route:'/projetos', title:pageTitle('Projetos de SDKs e pagamentos'), description:'Projetos de biometria facial, SDKs móveis e integração Android com terminais SmartPOS.', body:()=>lead('Portfólio','Projetos','Dois recortes do meu trabalho com SDKs e integrações.')+`<section class="listing" aria-label="Projetos em destaque">${caseSection().replaceAll('h3','h2')}</section>`+closing()},
  ...cases.map(c=>({route:caseUrl(c), image:'/images/og-projetos.png', title:pageTitle(c.title), description:c.intro, body:()=>`<a class="back" href="/projetos">← Todos os projetos</a>`+lead(c.tag,c.title,c.intro)+`<div class="case-feature case-${c.number}">${visual(c)}</div><article class="prose"><h2>Minha atuação</h2><p>${c.role}</p><h2>O desafio</h2><p>${c.challenge}</p><h2>Como penso a arquitetura</h2><p>${c.decision}</p><figure class="diagram"><figcaption>Visão conceitual do fluxo</figcaption><ol>${c.diagram.map(i=>`<li>${escape(i)}</li>`).join('')}</ol></figure><h2>O que levo para o próximo projeto</h2><p>${c.takeaway}</p></article>`+closing()})),
  {route:'/artigos', title:pageTitle('Artigos de engenharia'),description:'Guias práticos sobre SDKs móveis, Android e distribuição de aplicativos.', body:()=>lead('Escrita técnica','Artigos','O que aprendi desenvolvendo e integrando SDKs.')+`<section class="listing">${posts.map(p=>articleLink(p).replaceAll('h3','h2')).join('')}</section>`},
  ...posts.map(p=>({route:postUrl(p), image:'/images/og-artigos.png',type:'article',title:pageTitle(p.title),description:p.intro,body:()=>`<a class="back" href="/artigos">← Todos os artigos</a>`+lead('Android · Guia prático',p.title,p.intro)+`<article class="prose"><p class="byline">Por <a href="/">${name}</a></p>${p.sections.map(([h,t])=>`<h2>${escape(h)}</h2><p>${escape(t)}</p>`).join('')}<h2>Ferramentas</h2><ul><li><a href="https://developer.android.com/tools/bundletool">bundletool · documentação do Android</a></li><li><a href="https://developer.android.com/studio/debug/apk-analyzer">APK Analyzer · documentação do Android</a></li></ul></article>`+closing(),schema:{'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.intro,url:origin+postUrl(p),image:origin+'/images/og-artigos.png',author:{'@type':'Person',name,url:origin+'/'}}})),
  {route:'/cv',title:pageTitle('Currículo e experiência profissional'),description:'Experiência, formação e competências técnicas de Diônnatas Santa Fé Filho, Tech Lead na Payface.',body:()=>lead('Trajetória','Currículo','Diônnatas Santa Fé Filho · Tech Lead em SDKs móveis, biometria e pagamentos.')+`<div class="cv-layout"><section class="timeline"><h2>Experiência profissional</h2>${experience.map(([company,role,date,desc])=>`<article><p class="eyebrow">${company}</p><h3>${role}</h3><p class="date">${date}</p><p>${desc}</p></article>`).join('')}</section><aside class="cv-side"><section><h2>Formação</h2><h3>Análise e Desenvolvimento de Sistemas</h3><p>Universidade Anhembi Morumbi · 2016</p><h3>Técnico em Informática</h3><p>Senac São Paulo · 2012–2013</p></section><section><h2>Competências</h2><ul><li>Android nativo, Kotlin, Java e Jetpack Compose</li><li>SDKs, APIs e integrações de pagamento</li><li>React e TypeScript</li><li>Node.js, microsserviços, AWS e Docker</li><li>SQL, NoSQL e Redis</li></ul></section></aside></div>`+closing()},
  {route:'/contato',title:pageTitle('Contato'),description:'Entre em contato com Diônnatas Santa Fé Filho sobre projetos, integrações e oportunidades.',body:()=>lead('São Paulo · Brasil','Contato','Me conte sobre seu projeto, oportunidade ou desafio técnico.')+`<div class="contact-layout"><section class="contact-links"><h2>Canais diretos</h2><p>Se preferir, mande um e-mail ou me escreva pelo LinkedIn.</p><ul><li><a href="mailto:${email}">Enviar e-mail ${arrow}<small>${email}</small></a></li><li><a href="${linkedin}">LinkedIn ${arrow}<small>linkedin.com/in/dionnatas</small></a></li></ul></section><form data-contact hidden method="post" aria-labelledby="form-title"><h2 id="form-title">Enviar mensagem</h2><label>Nome <span>(obrigatório)</span><input name="name" autocomplete="name" maxlength="120" required></label><label>E-mail <span>(obrigatório)</span><input name="email" type="email" autocomplete="email" maxlength="254" required></label><label>Assunto<input name="subject" maxlength="150"></label><label>Mensagem <span>(obrigatório)</span><textarea name="message" rows="5" maxlength="3000" required></textarea></label><p class="form-note">Uso seus dados para responder à mensagem. O envio é processado pelo EmailJS.</p><button type="submit" class="button primary">Enviar mensagem ${arrow}</button><p id="form-status" role="status" aria-live="polite"></p></form></div>`},
  {route:'/404',noindex:true,title:pageTitle('Página não encontrada'),description:'A página solicitada não existe.',body:()=>lead('Erro 404','Página não encontrada','O endereço pode ter mudado. Volte ao início para encontrar a página que você procura.')+more('/','Voltar ao início','primary')}
];

export function render(page) {
  const section = '/' + page.route.split('/')[1];
  const url = origin + page.route;
  const share = origin + (page.image || '/images/og-home.png');
  return `<!doctype html>
<html lang="pt-BR"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
<link rel="icon" href="/images/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/site.css">
<meta property="og:type" content="${page.type || 'website'}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${name}">
<meta property="og:title" content="${escape(page.title)}">
<meta property="og:description" content="${escape(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${share}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Portfólio de ${name}">
<meta name="twitter:card" content="summary_large_image">
${page.schema ? `<script type="application/ld+json">${safeJson(page.schema)}</script>` : ''}
<script src="/assets/site.js" defer></script>
</head><body>
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header class="site-header"><div class="shell header-inner">
<a class="wordmark" href="/" aria-label="DSF: ${name}, início"${page.route === '/' ? ' aria-current="page"' : ''}><span aria-hidden="true">DSF<span class="brand-dot">.</span></span></a>
<nav aria-label="Navegação principal">${nav.map(([href,label])=>`<a href="${href}"${section === href ? ` aria-current="${page.route===href ? 'page' : 'location'}"` : ''}>${label}</a>`).join('')}</nav>
<button class="theme" type="button" data-theme-switch hidden>Tema escuro</button>
</div></header>
<main class="shell main-content" id="conteudo">${page.body()}</main>
<footer class="site-footer"><div class="shell"><div><strong>${name}</strong><p>SDKs móveis · Biometria · Pagamentos</p></div><div class="footer-links"><a href="${linkedin}">LinkedIn ${arrow}</a><a href="https://github.com/dionnatas">GitHub ${arrow}</a></div></div></footer>
</body></html>\n`;
}
