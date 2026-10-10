import test from "node:test";
import assert from "node:assert/strict";
import { handleContact } from "../worker/contact.mjs";

const env = {MAIL_RELAY_URL:"https://relay.example.com/contact.php",MAIL_RELAY_SECRET:"fixture-only-secret-with-at-least-32-characters",TURNSTILE_SECRET_KEY:"fixture-only"};
const fixedNow = 10000000;
function request(fields = {}, options = {}) {
  return new Request("https://preview.pages.dev/api/contact", {
    method:"POST", headers:{origin:"https://preview.pages.dev",...options.headers},
    body:new URLSearchParams({name:"Test enquiry",email:"sender@example.org",company:"Example",message:"A biomass route for testing",ts:"9995000",path:"/contact","cf-turnstile-response":"fixture-token",...fields}),
  });
}
function dependencies(override = {}) {
  return {now:()=>fixedNow,send:async()=>({accepted:true}),verifyFetch:async()=>Response.json({success:true,hostname:"preview.pages.dev",action:"contact"}),...override};
}
test("success requires SMTP acceptance, with reply and enquiry fields retained",async()=>{
  let delivered;
  const response=await handleContact(request(),env,dependencies({send:async(_,data)=>{delivered=data;return {accepted:true};}}));
  assert.equal(response.status,200); assert.deepEqual(await response.json(),{ok:true,accepted:true});
  assert.equal(delivered.email,"sender@example.org"); assert.equal(delivered.path,"/contact");
  assert.equal(response.headers.get("Cache-Control"),"no-store");
});
for (const [label,fields] of [["honeypot",{website:"spam"}],["too quick",{ts:"9999999"}],["timestamp missing",{ts:""}],["future timestamp",{ts:"10000001"}],["expired",{ts:"1"}],["invalid email",{email:"not an email"}],["header injection",{name:"Name\r\nBcc: recipient@example.org"}],["message length",{message:"x".repeat(6001)}],["missing message",{message:""}],["missing token",{"cf-turnstile-response":""}],["links",{message:"Visit https://spam.example"}]]) {
  test(`rejects ${label} without sending`,async()=>{
    let sent=0;const response=await handleContact(request(fields),env,dependencies({send:async()=>{sent++;return {accepted:true};}}));
    assert.equal(response.status,400);assert.equal(sent,0);assert.equal((await response.json()).ok,false);
  });
}
test("rejects oversized bodies even without content-length",async()=>{
  assert.equal((await handleContact(request({company:"x".repeat(70000)}),env,dependencies())).status,413);
});
test("rejects cross-origin requests",async()=>{
  assert.equal((await handleContact(request({}, {headers:{origin:"https://attacker.example"}}),env,dependencies())).status,403);
});
test("missing relay or spam-check secrets cannot simulate success",async()=>{
  assert.equal((await handleContact(request(),{...env,MAIL_RELAY_SECRET:""},dependencies())).status,503);
  assert.equal((await handleContact(request(),{...env,TURNSTILE_SECRET_KEY:""},dependencies())).status,503);
});
for (const verification of [{success:false},{success:true,hostname:"attacker.example",action:"contact"},{success:true,hostname:"preview.pages.dev",action:"other"}]) {
  test(`rejects invalid challenge ${JSON.stringify(verification)}`,async()=>{
    let sent=0;const response=await handleContact(request(),env,dependencies({verifyFetch:async()=>Response.json(verification),send:async()=>{sent++;return {accepted:true};}}));
    assert.equal(response.status,400);assert.equal(sent,0);
  });
}
test("spam-check network failures are reported honestly",async()=>{
  assert.equal((await handleContact(request(),env,dependencies({verifyFetch:async()=>{throw Error("timeout");}}))).status,503);
});
for (const send of [async()=>{throw Error("rejected");},async()=>({accepted:false}),async()=>undefined]) {
  test("delivery failures never return success",async()=>{
    const response=await handleContact(request(),env,dependencies({send}));
    assert.equal(response.status,502);assert.equal((await response.json()).ok,false);
  });
}
test("only POST is allowed",async()=>{
  const response=await handleContact(new Request("https://preview.pages.dev/api/contact"),env,dependencies());
  assert.equal(response.status,405);assert.equal(response.headers.get("Allow"),"POST");
});
