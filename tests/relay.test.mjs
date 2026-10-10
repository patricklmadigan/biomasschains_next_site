import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { sendRelay } from '../worker/relay.mjs';
const env={MAIL_RELAY_URL:'https://relay.example.com/contact.php',MAIL_RELAY_SECRET:'fixture-only-secret-with-at-least-32-characters'};
const data={name:'Test',email:'sender@example.org',company:'Example',message:'A real enquiry',path:'/contact',ip:'unknown',ua:'test'};
test('relay authenticates the exact payload and requires matching SMTP acceptance',async()=>{
  const result=await sendRelay(env,data,async(url,options)=>{
    assert.equal(url,env.MAIL_RELAY_URL);assert.equal(options.redirect,'manual');
    assert.equal(options.headers['X-Biomass-Signature'],createHmac('sha256',env.MAIL_RELAY_SECRET).update(options.body).digest('hex'));
    const payload=JSON.parse(options.body);assert.equal(payload.message,data.message);
    return Response.json({ok:true,accepted:true,id:payload.id});
  });
  assert.deepEqual(result,{accepted:true});
});
for(const [label,response] of [['SMTP rejection',()=>Response.json({ok:false,accepted:false},{status:502})],['redirect',()=>new Response(null,{status:302,headers:{Location:'https://other.example.com'}})],['missing acceptance',()=>Response.json({ok:true})],['different request',()=>Response.json({ok:true,accepted:true,id:'other'})]]) {
  test(`${label} cannot claim success`,async()=>{
    await assert.rejects(sendRelay(env,data,async()=>response()));
  });
}
test('relay network failure cannot claim success',async()=>{
  await assert.rejects(sendRelay(env,data,async()=>{throw Error('timeout');}));
});
