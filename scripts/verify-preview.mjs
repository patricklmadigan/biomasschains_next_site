import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const preview = process.argv[2];
if (!preview?.startsWith('https://')) throw new Error('Pass the HTTPS preview origin');
const live = process.argv[3]?.startsWith('https://') ? process.argv[3] : 'https://www.biomasschains.com';
const production = process.argv.includes('--production');
const routes = ['', '/about', '/solutions', '/method', '/cases', '/contact', '/privacy', '/cookies',
  '/cases/australia-carrier', '/cases/cameroon-eu', '/cases/ireland-iceland-woodchip',
  '/cases/russia-lignin', '/cases/south-africa', '/cases/usa-shovel-ready', '/cases/wc-africa-residues'];
const decode = text => text.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;|&#x27;/g,"'")
  .replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ')
  .replace(/&#(x[\da-f]+|\d+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n)));
const visible = html => decode(html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || '')
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'')
  .replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
function attributes(tag) { return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])])); }
function seo(html) {
  return {
    title:decode(html.match(/<title>(.*?)<\/title>/)?.[1] || ''),
    meta:[...html.matchAll(/<meta\b[^>]*>/g)].map(m=>attributes(m[0])).filter(a=>a.name||a.property),
    canonical:[...html.matchAll(/<link\b[^>]*>/g)].map(m=>attributes(m[0])).filter(a=>a.rel==='canonical'),
  };
}
const expectedHeaders = {'x-frame-options':'SAMEORIGIN','x-content-type-options':'nosniff',
  'referrer-policy':'strict-origin-when-cross-origin','permissions-policy':'camera=(), microphone=(), geolocation=()'};
const report = {preview,baseline:live,checkedAt:new Date().toISOString(),pages:[],assets:[],checks:[],failures:[]};
const assetPaths = new Set();
const links = new Set();
const check = (condition,message) => { if (!condition) report.failures.push(message); };
for (const route of routes) {
  const [next,old] = await Promise.all([fetch(preview+route),fetch(live+route)]);
  const [newHtml,oldHtml] = await Promise.all([next.text(),old.text()]);
  check(next.status===200,`${route||'/'} returned ${next.status}`);
  // The live Suspense form is only added after hydration; the export renders it
  // immediately. Compare its wording separately in the browser.
  const comparable = route === '/contact' ? newHtml.replace(/<form\b[^>]*>[\s\S]*?<\/form>/i, '') : newHtml;
  const baselineComparable = route === '/contact' ? oldHtml.replace(/<form\b[^>]*>[\s\S]*?<\/form>/i, '') : oldHtml;
  const textMatches = visible(comparable)===visible(baselineComparable);
  check(textMatches,`${route||'/'} body content differs`);
  let seoMatches = true;
  try { assert.deepEqual(seo(newHtml),seo(oldHtml)); } catch { seoMatches=false; }
  check(seoMatches,`${route||'/'} SEO differs`);
  for (const [key,value] of Object.entries(expectedHeaders)) check(next.headers.get(key)===value,`${route||'/'} missing ${key}`);
  check(next.headers.get('strict-transport-security')?.includes('max-age=31536000'),`${route||'/'} missing HSTS`);
  const noindex = next.headers.get('x-robots-tag')?.includes('noindex') || false;
  check(production ? !noindex : noindex,`${route||'/'} ${production ? 'production is noindex' : 'preview is not noindex'}`);
  for (const m of newHtml.matchAll(/<(?:img|script|link)\b[^>]*>/g)) {
    const a = attributes(m[0]);
    if (a.src?.startsWith('/')) assetPaths.add(a.src);
    if (a.href?.startsWith('/') && (a.rel==='stylesheet'||a.rel==='icon'||a.rel==='preload')) assetPaths.add(a.href);
    for (const source of (a.srcSet||a.srcset||'').split(',')) {
      const url=source.trim().split(/\s+/)[0]; if(url.startsWith('/'))assetPaths.add(url);
    }
  }
  for (const m of newHtml.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(m[0]).href; if(href?.startsWith('/'))links.add(href.split('#')[0]);
  }
  report.pages.push({route:route||'/',status:next.status,textMatches,seoMatches});
  if (!textMatches) {
    await fs.mkdir('migration-evidence/content',{recursive:true});
    const name=(route||'home').replaceAll('/','_');
    await fs.writeFile(`migration-evidence/content/${name}-preview.txt`,visible(newHtml));
    await fs.writeFile(`migration-evidence/content/${name}-live.txt`,visible(oldHtml));
  }
}
const queue=[...new Set([...assetPaths,...links])];
for(let i=0;i<queue.length;i+=8) {
  const batch=await Promise.all(queue.slice(i,i+8).map(async path=>{
    const response=await fetch(preview+path,{method:'HEAD'});
    check(response.status===200,`Asset/link ${path} returned ${response.status}`);
    return {path,status:response.status};
  }));
  report.assets.push(...batch);
}
for (const file of ['/robots.txt','/sitemap.xml']) {
  const [next,old]=await Promise.all([fetch(preview+file),fetch(live+file)]);
  const trimDates=text=>text.replace(/<lastmod>[^<]+<\/lastmod>/g,'').trim();
  check(next.status===200,`${file} missing`);
  check(trimDates(await next.text())===trimDates(await old.text()),`${file} differs apart from dates`);
  report.checks.push(file);
}
for(const route of ['/not-a-real-page','/api']) {
  const response=await fetch(preview+route); check(response.status===404,`${route} should be 404, received ${response.status}`);
  report.checks.push({route,status:response.status});
}
for(const route of ['/about/','/about.html',
  '/images/cases/usa-shovel-ready/georgia-harvested-pine-logs.png',
  '/images/cases/south-africa/handymax-woodchip-trimming.png']) {
  const response=await fetch(preview+route,{redirect:'manual'});
  check([301,308].includes(response.status),`${route} permanent redirect missing (${response.status})`);
  report.checks.push({route,status:response.status,location:response.headers.get('location')});
}
const method=await fetch(preview+'/api/contact');
check(method.status===405,'Contact GET should be rejected');
const invalid=await fetch(preview+'/api/contact',{method:'POST',headers:{origin:preview},body:new URLSearchParams({name:'Migration test',email:'patrick@biomasschains.com',message:'Invalid challenge test',ts:String(Date.now()-5000),'cf-turnstile-response':'invalid'})});
check(invalid.status===400,'Invalid challenge must fail');
check((await invalid.json()).ok===false,'Invalid challenge must not claim success');
const crossOrigin=await fetch(preview+'/api/contact',{method:'POST',headers:{origin:'https://example.com'},body:new URLSearchParams({})});
check(crossOrigin.status===403,'Cross-origin submission must be rejected');
report.checks.push({contactGet:method.status,invalidChallenge:invalid.status,crossOrigin:crossOrigin.status});
await fs.mkdir('migration-evidence',{recursive:true});
await fs.writeFile(`migration-evidence/${production ? 'production' : 'preview'}-http.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify({pages:report.pages,assetAndLinkRequests:report.assets.length,checks:report.checks,failures:report.failures},null,2));
if(report.failures.length) process.exitCode=1;
