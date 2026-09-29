/* ---------- Icons (24x24 Material paths) ---------- */
const P={
menu:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
search:"M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
mic:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z",
home:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",
shorts:"M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25z",
subs:"M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z",
you:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z",
history:"M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z",
list:"M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z",
up:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",
share:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z",
save:"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z",
more:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
play:"M8 5v14l11-7z",pause:"M6 19h4V5H6v14zm8-14v14h4V5h-4z",
vol:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z",
mute:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z",
theater:"M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z",
fs:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
moon:"M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",
plus:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
bell:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
create:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"};
const I=(n,c='')=>`<svg class="ic ${c}" viewBox="0 0 24 24" aria-hidden="true"><path d="${P[n]}"/></svg>`;

/* ---------- Helpers ---------- */
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const LS={get(k,d){try{const v=localStorage.getItem('pt_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('pt_'+k,JSON.stringify(v))}catch(e){}}};
/* ---------- API client (same-origin /api, JWT in localStorage) ---------- */
let TOKEN=null,ME=null,unsub=null;
try{TOKEN=localStorage.getItem('pt_token')}catch(e){}
async function api(path,opt={}){
  const r=await fetch('/api'+path,{method:opt.method||'GET',headers:{'Content-Type':'application/json',...(TOKEN?{Authorization:'Bearer '+TOKEN}:{})},body:opt.body&&JSON.stringify(opt.body)});
  const j=await r.json().catch(()=>({}));
  if(!r.ok)throw Object.assign(new Error(j.error||'Request failed'),{status:r.status});
  return j;
}
const store={get:LS.get,set:LS.set};   /* local cache of the signed-in user's state */
const offline=()=>toast('Couldn’t save that. Check your connection.');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const secs=d=>d.split(':').reduce((a,b)=>a*60+ +b,0);
const clock=s=>{s=Math.floor(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=String(s%60).padStart(2,'0');return h?`${h}:${String(m).padStart(2,'0')}:${x}`:`${m}:${x}`};
const kfmt=n=>n>=1e6?(n/1e6).toFixed(1).replace('.0','')+'M':n>=1e3?(n/1e3).toFixed(n>=1e4?0:1).replace('.0','')+'K':String(n);
let toastT;const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2600)};

/* ---------- Sample data ---------- */
let CH=[];
let V=[];
const CATS=['All','Music','Gaming','Cooking','Tech','Travel','Science','Fitness','Live'];
const ini=c=>CH[c][0][0];

/* ---------- Templates ---------- */
const th=v=>`<a class="th" href="#/watch/${v.id}" style="--h:${v.h}" tabindex="-1" aria-hidden="true"><span class="em">${v.e}</span><span class="dur">${v.d}</span><span class="pv"><i></i></span></a>`;
const moreBtn=v=>`<button class="ib more" data-a="more" data-id="${v.id}" aria-label="Action menu">${I('more')}</button>`;
const card=v=>`<article class="card">${th(v)}<div class="meta"><a class="av" href="#/search/${encodeURIComponent(CH[v.c][0])}" style="--h:${CH[v.c][2]}" aria-label="${CH[v.c][0]}">${ini(v.c)}</a><a class="tx" href="#/watch/${v.id}"><h3>${v.t}</h3><p>${CH[v.c][0]}</p><p>${v.v} • ${v.a}</p></a>${moreBtn(v)}</div></article>`;
const rowCard=v=>`<article class="row">${th(v)}<a class="rt" href="#/watch/${v.id}"><h3>${v.t}</h3><p>${v.v} • ${v.a}</p><p style="margin-top:8px">${CH[v.c][0]}</p></a>${moreBtn(v)}</article>`;
const recCard=v=>`<article class="rec row">${th(v)}<a class="rt" href="#/watch/${v.id}"><h3>${v.t}</h3><p>${CH[v.c][0]}</p><p>${v.v} • ${v.a}</p></a>${moreBtn(v)}</article>`;

/* ---------- Sidebar ---------- */
function sidebar(){
  const it=(r,i,l)=>`<a class="si" href="#/${r}" data-r="${r}">${I(i)}<span>${l}</span></a>`;
  $('#side').innerHTML=it('','home','Home')+`<a class="si" href="#/" data-toast="Shorts aren't available in this demo">${I('shorts')}<span>Shorts</span></a>`+it('subs','subs','Subscriptions')+
  `<div class="sec">${it('history','history','History')}${it('liked','up','Liked videos')}<a class="si" href="#/" data-toast="Playlists aren't available in this demo">${I('list')}<span>Playlists</span></a></div>`+
  `<div class="sec"><h4>Subscriptions</h4>${CH.slice(0,6).map(c=>`<a class="si" href="#/search/${encodeURIComponent(c[0])}"><span class="sav" style="--h:${c[2]}">${c[0][0]}</span><span>${c[0]}</span></a>`).join('')}</div>`;
}

/* ---------- Views ---------- */
let tick=0,cat='All',firstLoad=true;
const main=$('#main');
function skeleton(){return '<div class="grid">'+Array(8).fill('<div class="sk"><div class="th"></div><i></i><i style="width:45%"></i></div>').join('')+'</div>'}
function home(){
  main.innerHTML=`<div class="chips" role="tablist">${CATS.map(c=>`<button class="chip rp${c===cat?' on':''}" data-a="chip" data-c="${c}">${c}</button>`).join('')}</div><div id="gridbox"></div>`;
  const draw=()=>{const l=V.filter(v=>cat==='All'||v.cat===cat);$('#gridbox').innerHTML=l.length?`<div class="grid">${l.map(card).join('')}</div>`:'<p class="empty">No videos in this category yet.</p>'};
  if(firstLoad){firstLoad=false;$('#gridbox').innerHTML=skeleton();setTimeout(()=>{if($('#gridbox'))draw()},700)}else draw();
}
function listView(title,arr,msg){
  main.innerHTML=`<section class="list"><h2>${title}</h2>${arr.length?arr.map(rowCard).join(''):`<p class="empty">${msg}</p>`}</section>`;
}
function search(q){
  const s=q.toLowerCase();
  listView(`Results for “${esc(q)}”`,V.filter(v=>v.t.toLowerCase().includes(s)||CH[v.c][0].toLowerCase().includes(s)||v.cat.toLowerCase()===s),'No results found. Try different keywords.');
}

/* ---------- Watch page ---------- */
let pl=null;
function watch(id){
  const v=V[id];if(!v){location.hash='#/';return}
  store.set('hist',[id,...store.get('hist',[]).filter(x=>x!==id)].slice(0,50));api('/me/history/'+id,{method:'POST'}).catch(()=>{});
  const others=V.filter(x=>x.id!==id).sort((a,b)=>(b.c===v.c)-(a.c===v.c)||(b.cat===v.cat)-(a.cat===v.cat)).slice(0,14);
  main.innerHTML=`<div class="wl" id="wl"><div class="wm">
  <div class="player paused" id="pl" tabindex="0" aria-label="Video player">
    <div class="scr" id="scr" style="--h:${v.h}"><span>${v.e}</span></div>
    <div class="ctl"><div class="bar" id="bar"><div class="fill" id="fill"></div></div>
      <div class="crow"><button class="ib" id="pp" aria-label="Play"></button><button class="ib" id="mu" aria-label="Mute"></button><input type="range" id="vr" min="0" max="1" step=".05" value="1" aria-label="Volume"><span class="t" id="tm"></span><span class="g"></span>
      <button class="tb" id="sp" aria-label="Playback speed">1x</button><button class="ib" id="tt" aria-label="Theater mode">${I('theater')}</button><button class="ib" id="fs" aria-label="Full screen">${I('fs')}</button></div></div>
  </div>
  <h1>${v.t}</h1><div class="wbar" id="acts"></div>
  <div class="desc" id="desc" data-a="desc" tabindex="0" role="button" aria-expanded="false"><b>${v.v} &nbsp;${v.a}</b><p>${v.t}. Thanks for watching! In this video ${CH[v.c][0]} walks through every step from start to finish, with tips, mistakes to avoid and everything you need to try it yourself.</p><small>Show more</small></div>
  <section class="cms" id="cms"></section></div>
  <aside class="wr" aria-label="Recommended videos">${others.map(recCard).join('')}</aside></div>`;
  acts(v);cms(v);player(v);
}
function acts(v){
  const lk=store.get('lk',{})[v.id]||0,sb=!!store.get('sb',{})[v.c],sv=!!store.get('sv',{})[v.id],base=(v.id*7919%90+10)*1000;
  $('#acts').innerHTML=`<div class="chn"><a class="av" href="#/search/${encodeURIComponent(CH[v.c][0])}" style="--h:${CH[v.c][2]}">${ini(v.c)}</a><div><b>${CH[v.c][0]}</b><small>${CH[v.c][1]} subscribers</small></div>
  <button class="sub rp${sb?' on':''}" data-a="sub" data-c="${v.c}">${sb?'Subscribed':'Subscribe'}</button></div>
  <div class="grp"><button class="pill rp${lk>0?' on':''}" data-a="like" aria-pressed="${lk>0}">${I('up')}${kfmt(base+(lk>0?1:0))}</button><button class="pill rp${lk<0?' on':''}" data-a="dislike" aria-label="Dislike" aria-pressed="${lk<0}">${I('up','flip')}</button></div>
  <button class="pill rp" data-a="share">${I('share')}Share</button><button class="pill rp${sv?' on':''}" data-a="save">${I('save')}${sv?'Saved':'Save'}</button>`;
}
const ago=t=>{const x=(Date.now()-t)/1e3;return x<60?'just now':x<3600?Math.floor(x/60)+' minutes ago':x<86400?Math.floor(x/3600)+' hours ago':x<2592e3?Math.floor(x/86400)+' days ago':x<31536e3?Math.floor(x/2592e3)+' months ago':Math.floor(x/31536e3)+' years ago'};
function cms(v){
  let docs=[],open=-1;const names={},K='cmx'+v.id,me=ME?ME.id:0;
  const who=u=>u===me?'You':(names[u]||'Someone');
  const fail=()=>toast('Saving needs Contributor access to this page');
  const resolve=async()=>{docs.forEach(d=>{names[d.u]=d.name;d.r.forEach(r=>names[r.u]=r.name)})};
  const draw=()=>{
    const old=$('#ci'),keep=old?old.value:'',foc=old&&document.activeElement===old,n=docs.length+docs.reduce((a,x)=>a+x.r.length,0);
    $('#cms').innerHTML=`<h2>${n} Comments</h2><div class="cin"><div class="me">Y</div><div class="grow"><input id="ci" placeholder="Add a comment..." aria-label="Add a comment"><div class="ca" id="ca" hidden><button class="pill" data-a="cc">Cancel</button><button class="pill blue" id="cpost" data-a="cp" disabled>Comment</button></div></div></div>`+
    (docs.length?'':'<p class="empty" style="padding:16px 0">No comments yet. Start the conversation.</p>')+
    docs.map((x,i)=>{const liked=x.l.includes(me);return `<div class="cm"><div class="av" style="--h:${(who(x.u).length*53)%360}">${esc(who(x.u)[0])}</div><div class="grow"><b>${esc(who(x.u))}</b><small>${ago(x.w)}</small><p>${esc(x.t)}</p>
      <div class="cact"><button class="ib" data-a="cl" data-i="${i}" aria-label="Like comment" aria-pressed="${liked}" style="${liked?'color:var(--blue)':''}">${I('up')}</button><span>${x.l.length||''}</span><button class="pill" style="background:none" data-a="cr" data-i="${i}">Reply</button></div>
      ${open===i?`<div class="rbox"><input id="ri" placeholder="Add a reply..." aria-label="Add a reply"><button class="pill blue" data-a="rp" data-i="${i}">Reply</button></div>`:''}
      ${x.r.map(r=>`<div class="cm sm"><div class="av" style="--h:${(who(r.u).length*53)%360}">${esc(who(r.u)[0])}</div><div><b>${esc(who(r.u))}</b><p>${esc(r.t)}</p></div></div>`).join('')}</div></div>`}).join('');
    const ci=$('#ci');
    if(keep){ci.value=keep;$('#ca').hidden=false;$('#cpost').disabled=false}
    if(foc)ci.focus();
    if(open>=0&&$('#ri')){$('#ri').focus();$('#ri').onkeydown=e=>{if(e.key==='Enter')reply(open)}}
    ci.onfocus=()=>$('#ca').hidden=false;
    ci.oninput=()=>$('#cpost').disabled=!ci.value.trim();
    ci.onkeydown=e=>{if(e.key==='Enter'&&ci.value.trim())post()};
  };
  const load=async()=>{try{docs=await api('/videos/'+v.id+'/comments');await resolve();draw()}catch(e){}};
  const send=async(path,method,body)=>{try{await api(path,{method,body});await load()}catch(e){toast(e.status===401?'Sign in to comment':'Couldn’t save your comment')}};
  const post=()=>{const t=$('#ci').value.trim();if(!t)return;$('#ci').value='';$('#cpost').disabled=true;send('/videos/'+v.id+'/comments','POST',{text:t})};
  const reply=i=>{const t=$('#ri').value.trim();if(!t)return;const d=docs[i];open=-1;send('/comments/'+d.id+'/replies','POST',{text:t})};
  cms.act=(a,i)=>{
    if(a==='cp')post();
    if(a==='cc'){$('#ci').value='';$('#ca').hidden=true;$('#ci').blur()}
    if(a==='cl')send('/comments/'+docs[i].id+'/like','PUT');
    if(a==='cr'){open=open===i?-1:i;draw()}
    if(a==='rp')reply(i);
  };
  draw();load();
  const poll=setInterval(load,8000);unsub=()=>clearInterval(poll);
}

/* ---------- Player (simulated playback: swap .scr for a <video> to use real files) ---------- */
function player(v){
  const P=$('#pl'),d=secs(v.d),sps=[.5,1,1.5,2];
  let pos=0,playing=true,sp=1,vol=1;
  const paint=()=>{P.classList.toggle('paused',!playing);$('#fill').style.width=pos/d*100+'%';$('#tm').textContent=clock(pos)+' / '+v.d;$('#pp').innerHTML=I(playing?'pause':'play');$('#pp').setAttribute('aria-label',playing?'Pause':'Play');$('#mu').innerHTML=I(vol?'vol':'mute')};
  const toggle=()=>{if(pos>=d)pos=0;playing=!playing;paint()};
  const seek=s=>{pos=Math.max(0,Math.min(d,pos+s));if(pos<d&&!playing&&s>0)paint();paint()};
  const mute=()=>{vol=vol?0:1;$('#vr').value=vol;paint()};
  const full=()=>document.fullscreenElement?document.exitFullscreen():P.requestFullscreen&&P.requestFullscreen();
  const theater=()=>$('#wl').classList.toggle('tt');
  tick=setInterval(()=>{if(!playing)return;pos=Math.min(d,pos+.25*sp);if(pos>=d)playing=false;paint()},250);
  $('#pp').onclick=toggle;$('#scr').onclick=toggle;$('#mu').onclick=mute;$('#fs').onclick=full;$('#tt').onclick=theater;
  $('#sp').onclick=e=>{sp=sps[(sps.indexOf(sp)+1)%sps.length];e.currentTarget.textContent=sp+'x'};
  $('#vr').oninput=e=>{vol=+e.target.value;paint()};
  const bar=$('#bar'),sk=e=>{const r=bar.getBoundingClientRect();pos=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*d;paint()};
  bar.onpointerdown=e=>{bar.setPointerCapture(e.pointerId);sk(e);bar.onpointermove=sk};bar.onpointerup=()=>bar.onpointermove=null;
  pl={toggle,seek,mute,full,theater};paint();
}
document.addEventListener('keydown',e=>{
  if(!pl||/INPUT|TEXTAREA/.test(e.target.tagName)||e.ctrlKey||e.metaKey)return;
  const k=e.key.toLowerCase(),m={' ':()=>pl.toggle(),k:()=>pl.toggle(),arrowleft:()=>pl.seek(-5),arrowright:()=>pl.seek(5),m:()=>pl.mute(),f:()=>pl.full(),t:()=>pl.theater()};
  if(m[k]&&(e.target===document.body||e.target.id==='pl')){e.preventDefault();m[k]()}
});

/* ---------- Router ---------- */
function route(){
  clearInterval(tick);pl=null;if(unsub){unsub();unsub=null}
  const [p,...rest]=(location.hash.slice(2)||'').split('/'),a=decodeURIComponent(rest.join('/'));
  document.body.classList.toggle('wp',p==='watch');document.body.classList.remove('open');
  $$('.si[data-r]').forEach(e=>e.classList.toggle('on',e.dataset.r===p));
  $('#q').value=p==='search'?a:$('#q').value;
  window.scrollTo(0,0);
  if(p==='watch')watch(+a);
  else if(p==='search')search(a);
  else if(p==='history')listView('Watch history',store.get('hist',[]).map(i=>V[i]),'Videos you watch will show up here.');
  else if(p==='liked'){const lk=store.get('lk',{});listView('Liked videos',V.filter(v=>lk[v.id]>0),'Videos you like will show up here.')}
  else if(p==='subs'){const sb=store.get('sb',{});listView('Subscriptions',V.filter(v=>sb[v.c]),'Subscribe to channels on a watch page to see their videos here.')}
  else home();
}
addEventListener('hashchange',route);

/* ---------- Global events ---------- */
const menu=$('#menu');
document.addEventListener('pointerdown',e=>{
  const b=e.target.closest('button,.chip');
  if(b&&!b.matches('input,.ib.more:disabled')){const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,x=document.createElement('span');
    x.className='rpl';x.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;
    if(getComputedStyle(b).position==='static')b.style.position='relative';b.style.overflow='hidden';b.appendChild(x);setTimeout(()=>x.remove(),500)}
  if(!e.target.closest('#menu'))menu.style.display='none';
});
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-toast]');if(t){toast(t.dataset.toast);return}
  const el=e.target.closest('[data-a]');if(!el)return;
  const a=el.dataset.a,id=+el.dataset.id,i=+el.dataset.i;
  if(a==='chip'){cat=el.dataset.c;$$('.chip').forEach(c=>c.classList.toggle('on',c.dataset.c===cat));const l=V.filter(v=>cat==='All'||v.cat===cat);$('#gridbox').innerHTML=l.length?`<div class="grid">${l.map(card).join('')}</div>`:'<p class="empty">No videos in this category yet.</p>'}
  if(a==='more'){e.preventDefault();const r=el.getBoundingClientRect();
    menu.innerHTML=`<button data-m="q" data-id="${id}">${I('list')}Add to queue</button><button data-m="w" data-id="${id}">${I('history')}Save to Watch later</button><button data-m="n" data-id="${id}">${I('mute')}Not interested</button>`;
    menu.style.display='block';menu.style.top=Math.min(r.bottom,innerHeight-140)+'px';menu.style.left=Math.max(8,Math.min(r.left-160,innerWidth-216))+'px';e.stopPropagation()}
  if(a==='desc'){const d=$('#desc'),o=d.classList.toggle('open');d.setAttribute('aria-expanded',o);$('small',d).textContent=o?'Show less':'Show more'}
  if(a==='like'||a==='dislike'){const l=store.get('lk',{}),vid=+location.hash.split('/')[2],w=a==='like'?1:-1;l[vid]=l[vid]===w?0:w;store.set('lk',l);acts(V[vid]);api('/videos/'+vid+'/reaction',{method:'PUT',body:{value:l[vid]}}).catch(offline)}
  if(a==='sub'){const s=store.get('sb',{}),c=+el.dataset.c;s[c]=!s[c];store.set('sb',s);acts(V[+location.hash.split('/')[2]]);api('/channels/'+c+'/subscription',{method:s[c]?'PUT':'DELETE'}).catch(offline);toast(s[c]?'Subscription added':'Subscription removed')}
  if(a==='save'){const s=store.get('sv',{}),vid=+location.hash.split('/')[2];s[vid]=!s[vid];store.set('sv',s);acts(V[vid]);api('/videos/'+vid+'/save',{method:s[vid]?'PUT':'DELETE'}).catch(offline);toast(s[vid]?'Saved to Watch later':'Removed from Watch later')}
  if(a==='share'){const u=location.href;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>toast('Link copied to clipboard')).catch(()=>toast('Copy this page’s link from the address bar'))}
  if(['cp','cc','cl','cr','rp'].includes(a))cms.act(a,i);
});
menu.addEventListener('click',e=>{
  const b=e.target.closest('[data-m]');if(!b)return;menu.style.display='none';
  const m=b.dataset.m;
  if(m==='q')toast('Added to queue');
  if(m==='w'){const s=store.get('sv',{});s[+b.dataset.id]=true;store.set('sv',s);api('/videos/'+b.dataset.id+'/save',{method:'PUT'}).catch(offline);toast('Saved to Watch later')}
  if(m==='n'){toast('Okay, we’ll show fewer videos like this');const c=$$('.card,.row').find(x=>x.querySelector(`[data-id="${b.dataset.id}"]`));if(c)c.remove()}
});
addEventListener('scroll',()=>menu.style.display='none',{passive:true});

/* ---------- Header wiring ---------- */
$('#burger').innerHTML=I('menu');$('#go').innerHTML=I('search');$('#mic').innerHTML=I('mic');
$('#theme').innerHTML=I('moon');$$('[data-toast].ib')[0].innerHTML=I('create');$$('[data-toast].ib')[1].innerHTML=I('bell');
$('#burger').onclick=()=>{const drawer=innerWidth<=800||document.body.classList.contains('wp');document.body.classList.toggle(drawer?'open':'mini')};
$('#ov').onclick=()=>document.body.classList.remove('open');
const doSearch=()=>{const q=$('#q').value.trim();if(q)location.hash='#/search/'+encodeURIComponent(q)};
$('#go').onclick=doSearch;$('#q').onkeydown=e=>{if(e.key==='Enter')doSearch()};
$('#mic').onclick=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){toast('Voice search isn’t supported in this browser');return}
  const r=new SR();r.onresult=e=>{$('#q').value=e.results[0][0].transcript;doSearch()};r.onerror=()=>toast('Couldn’t hear anything. Check your microphone permission.');toast('Listening…');r.start();
};
$('#theme').onclick=()=>{const dark=getComputedStyle(document.body).backgroundColor==='rgb(15, 15, 15)',n=dark?'light':'dark';document.documentElement.dataset.theme=n;store.set('theme',n)};
const saved=store.get('theme',null);if(saved)document.documentElement.dataset.theme=saved;
sidebar();
/* ---------- Boot: load catalog, start a session, render ---------- */
function paintMe(){const m=$('#me');m.textContent=(ME&&ME.username?ME.username[0]:'G').toUpperCase();m.title=ME&&!ME.isGuest?ME.username:'Guest: sign in to keep your account'}
async function session(){
  try{
    if(!TOKEN){const g=await api('/auth/guest',{method:'POST'});TOKEN=g.token;localStorage.setItem('pt_token',TOKEN)}
    const m=await api('/me');ME=m.user;['lk','sb','sv','hist'].forEach(k=>LS.set(k,m.state[k]));paintMe();
  }catch(e){TOKEN=null;ME=null;try{localStorage.removeItem('pt_token')}catch(x){}}
}
async function boot(){
  try{const b=await api('/bootstrap');CH=b.channels;V=b.videos.map(v=>({...v,v:kfmt(v.views)+' views',a:ago(v.published_at),h:(v.id*47+15)%360}))}
  catch(e){main.innerHTML='<p class="empty">Can’t reach the server. Start it with <b>npm start</b>.</p>';return}
  await session();sidebar();route();
}
const dlg=$('#auth');
$('#me').onclick=()=>{const guest=!ME||ME.isGuest;$('#at').textContent=guest?'Sign in':ME.username;$('#ainfo').textContent=guest?'Create an account to keep your likes, subscriptions and comments.':'You’re signed in.';
  $('#au').hidden=$('#ap').hidden=$('#alog').hidden=$('#areg').hidden=!guest;$('#aout').hidden=guest;$('#ae').textContent='';dlg.showModal()};
$('#acl').onclick=()=>dlg.close();
$('#aout').onclick=()=>{try{localStorage.removeItem('pt_token')}catch(e){}location.href='#/';location.reload()};
async function authGo(kind){
  try{const r=await api('/auth/'+kind,{method:'POST',body:{username:$('#au').value.trim(),password:$('#ap').value}});
    TOKEN=r.token;localStorage.setItem('pt_token',TOKEN);dlg.close();$('#ap').value='';await session();route();toast('Signed in as '+r.user.username)}
  catch(e){$('#ae').textContent=e.message}
}
$('#alog').onclick=()=>authGo('login');$('#areg').onclick=()=>authGo('register');
boot();
