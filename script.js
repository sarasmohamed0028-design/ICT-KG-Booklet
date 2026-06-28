/* =========================================================
   BYTE'S COMPUTER LAB — script.js
   Vanilla JS. No external libraries.
   ========================================================= */

/* ---------- SVG ICON LIBRARY (mascot + computer parts) ---------- */
const SVG = {
  robot: `<svg class="byte-robot" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="200" rx="55" ry="10" fill="#2B2250" opacity="0.08"/>
    <rect x="92" y="20" width="16" height="26" rx="6" fill="#9B5DE5"/>
    <circle cx="100" cy="16" r="9" fill="#FFD93D"/>
    <rect x="40" y="46" width="120" height="100" rx="26" fill="#4ECDC4"/>
    <rect x="55" y="60" width="90" height="56" rx="16" fill="#2B2250"/>
    <circle cx="80" cy="88" r="11" fill="#FFD93D"/>
    <circle cx="120" cy="88" r="11" fill="#FFD93D"/>
    <circle cx="80" cy="88" r="4" fill="#2B2250"/>
    <circle cx="120" cy="88" r="4" fill="#2B2250"/>
    <rect x="85" y="104" width="30" height="6" rx="3" fill="#FFD93D"/>
    <rect x="20" y="70" width="22" height="46" rx="11" fill="#FF6B6B"/>
    <rect x="158" y="70" width="22" height="46" rx="11" fill="#FF6B6B"/>
    <rect x="55" y="150" width="34" height="50" rx="14" fill="#9B5DE5"/>
    <rect x="111" y="150" width="34" height="50" rx="14" fill="#9B5DE5"/>
  </svg>`,
  monitor: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="16" width="92" height="64" rx="8" fill="#4ECDC4"/><rect x="22" y="24" width="76" height="48" rx="4" fill="#fff"/><rect x="50" y="80" width="20" height="14" fill="#9B5DE5"/><rect x="36" y="94" width="48" height="8" rx="4" fill="#2B2250"/></svg>`,
  tower: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="36" y="10" width="48" height="100" rx="8" fill="#9B5DE5"/><circle cx="60" cy="30" r="7" fill="#FFD93D"/><rect x="46" y="46" width="28" height="6" rx="3" fill="#fff"/><rect x="46" y="58" width="28" height="6" rx="3" fill="#fff"/><rect x="46" y="86" width="28" height="10" rx="5" fill="#4ECDC4"/></svg>`,
  mouse: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="42" y="20" width="36" height="58" rx="18" fill="#FF6B6B"/><rect x="58" y="20" width="4" height="22" fill="#fff"/><ellipse cx="60" cy="96" rx="22" ry="8" fill="#2B2250" opacity="0.1"/></svg>`,
  keyboard: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="36" width="100" height="48" rx="10" fill="#FFD93D"/>${Array.from({length:15}).map((_,i)=>`<rect x="${16+(i%8)*12}" y="${44+Math.floor(i/8)*18}" width="9" height="9" rx="2" fill="#2B2250"/>`).join('')}</svg>`,
  chair: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="34" y="14" width="52" height="40" rx="8" fill="#9B5DE5"/><rect x="34" y="58" width="52" height="10" rx="4" fill="#4ECDC4"/><rect x="40" y="68" width="6" height="36" fill="#2B2250"/><rect x="74" y="68" width="6" height="36" fill="#2B2250"/></svg>`,
  stopHand: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="50" fill="#FF6B6B"/><rect x="52" y="30" width="16" height="44" rx="6" fill="#fff"/><circle cx="60" cy="84" r="8" fill="#fff"/></svg>`,
};

/* ---------- CURRICULUM DATA ---------- */
const LESSONS = [
  { id:'welcome', emoji:'🏫', title:'Welcome to the Computer Lab',
    sentence:"This is our Computer Lab. It is a fun place to learn!",
    illo: SVG.monitor,
    vocab:[ {w:'Computer Lab',e:'🏫'}, {w:'Learn',e:'🧠'}, {w:'Fun',e:'🎉'} ],
    activity:{type:'tap', prompt:'Tap the picture that shows our Computer Lab!',
      options:[{e:'🏫',ok:true,label:'Computer Lab'},{e:'🏖️',ok:false,label:'Beach'},{e:'🍕',ok:false,label:'Pizza'}] } },
  { id:'safety', emoji:'🛡️', title:'Lab Safety Rules',
    sentence:"We walk, we listen, and we keep our hands gentle in the lab.",
    illo: SVG.stopHand,
    vocab:[ {w:'Safety',e:'🛡️'}, {w:'Gentle Hands',e:'🤲'}, {w:'Listen',e:'👂'} ],
    activity:{type:'sort', prompt:'Sort each behavior: is it Safe or Unsafe?',
      items:[
        {label:'Walking slowly 🚶',ok:'safe'},
        {label:'Running in the lab 🏃',ok:'unsafe'},
        {label:'Gentle hands 🤲',ok:'safe'},
        {label:'Pulling cables 🔌',ok:'unsafe'},
        {label:'Listening to teacher 👂',ok:'safe'},
        {label:'Eating at the desk 🍪',ok:'unsafe'},
      ] } },
  { id:'posture', emoji:'🪑', title:'Proper Sitting Posture',
    sentence:"I sit up straight, feet on the floor, and eyes on the screen.",
    illo: SVG.chair,
    vocab:[ {w:'Straight Back',e:'🧍'}, {w:'Feet Flat',e:'🦶'}, {w:'Eyes Forward',e:'👀'} ],
    activity:{type:'tap', prompt:'Tap the picture that shows GOOD sitting posture!',
      options:[{e:'🧍',ok:true,label:'Sitting Straight'},{e:'🙇',ok:false,label:'Slouching'},{e:'🤸',ok:false,label:'Jumping'}] } },
  { id:'screen', emoji:'🖥️', title:'Computer Screen',
    sentence:"I am the Screen. I show you pictures, words, and videos.",
    illo: SVG.monitor,
    vocab:[ {w:'Screen',e:'🖥️'}, {w:'Pictures',e:'🖼️'}, {w:'Bright',e:'✨'} ],
    activity:{type:'build', part:'screen' } },
  { id:'case', emoji:'🗄️', title:'Computer Case',
    sentence:"I am the Case. I keep the computer's brain safe inside.",
    illo: SVG.tower,
    vocab:[ {w:'Case',e:'🗄️'}, {w:'Brain',e:'🧠'}, {w:'Safe',e:'🔒'} ],
    activity:{type:'build', part:'case' } },
  { id:'mouse', emoji:'🖱️', title:'Mouse',
    sentence:"Hello! I am the Mouse. I help you click and point.",
    illo: SVG.mouse,
    vocab:[ {w:'Mouse',e:'🖱️'}, {w:'Click',e:'👆'}, {w:'Point',e:'➡️'} ],
    activity:{type:'build', part:'mouse' } },
  { id:'keyboard', emoji:'⌨️', title:'Keyboard',
    sentence:"I am the Keyboard. I have keys with letters and numbers.",
    illo: SVG.keyboard,
    vocab:[ {w:'Keyboard',e:'⌨️'}, {w:'Keys',e:'🔘'}, {w:'Letters',e:'🔤'} ],
    activity:{type:'build', part:'keyboard' } },
  { id:'typing', emoji:'📝', title:'Typing My Name',
    sentence:"I can use the keyboard to type my very own name!",
    illo: SVG.keyboard,
    vocab:[ {w:'Type',e:'⌨️'}, {w:'Name',e:'📝'}, {w:'Letters',e:'🔤'} ],
    activity:{type:'typename'} },
];

const GAMES = [
  {id:'clickpic', emoji:'🎯', title:'Click the Correct Picture', desc:'Find the picture Byte asks for!'},
  {id:'dragdrop', emoji:'🧲', title:'Label the Computer Parts', desc:'Drag each label to the right part.'},
  {id:'memory', emoji:'🃏', title:'Memory Cards', desc:'Flip and match the pairs!'},
  {id:'sortgame', emoji:'🧺', title:'Sorting Game', desc:'Safe or Unsafe? Sort it out!'},
  {id:'balloon', emoji:'🎈', title:'Balloon Pop', desc:'Pop the balloon Byte calls out!'},
  {id:'build', emoji:'🛠️', title:'Build the Computer', desc:'Drag all 4 parts onto the desk.'},
  {id:'puzzle', emoji:'🧩', title:'Matching Puzzle', desc:'Match each word to its picture.'},
  {id:'quiz', emoji:'❓', title:'Final Review Quiz', desc:'Show off everything you learned!'},
];

const BADGES = [
  {id:'first_lesson', emoji:'🌱', label:'First Step', test:s=>s.completedLessons.length>=1},
  {id:'halfway', emoji:'🚦', label:'Halfway Hero', test:s=>s.completedLessons.length>=4},
  {id:'all_lessons', emoji:'🎓', label:'Lab Graduate', test:s=>s.completedLessons.length>=8},
  {id:'first_game', emoji:'🎮', label:'Game Starter', test:s=>s.gamesCompleted.length>=1},
  {id:'all_games', emoji:'🏅', label:'Game Master', test:s=>s.gamesCompleted.length>=8},
  {id:'coins50', emoji:'🪙', label:'Coin Collector', test:s=>s.coins>=50},
];

const PRAISE = ["Excellent! 🌟","Amazing! 🎉","Fantastic! ✨","Great Job! 👏","Keep Going! 💪","You did it! 🥳","Super Star! ⭐","Wonderful! 🌈"];
const OOPS = ["Try again! 🤔","Almost! Give it another go.","Oops, let's try once more!","Not quite — you can do it!"];

/* ---------- STATE / PROGRESS (localStorage) ---------- */
const STORE_KEY = 'byteLabProgress_v1';
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return { completedLessons:[], lessonStars:{}, gamesCompleted:[], coins:0, certificateUnlocked:false, badgesEarned:[], settings:{music:true,voice:true,sfx:true,reducedMotion:false} };
}
let state = loadState();
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

/* ---------- AUDIO ENGINE (WebAudio synthesized SFX + ambient music, SpeechSynthesis for voice) ---------- */
const AudioEngine = (() => {
  let ctx = null;
  let musicNodes = null;
  function ensureCtx(){ if(!ctx){ ctx = new (window.AudioContext||window.webkitAudioContext)(); } return ctx; }

  function tone(freq, dur=0.18, type='sine', vol=0.18, delay=0){
    if(!state.settings.sfx) return;
    const c = ensureCtx();
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(vol, t0+0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t0+dur);
    osc.connect(gain); gain.connect(c.destination);
    osc.start(t0); osc.stop(t0+dur+0.02);
  }
  function click(){ tone(520,0.08,'square',0.12); }
  function correct(){ tone(523.25,0.14,'sine',0.2); tone(659.25,0.14,'sine',0.2,0.1); tone(784,0.18,'sine',0.2,0.2); }
  function wrong(){ tone(200,0.22,'sawtooth',0.15); }
  function celebrate(){ [523,659,784,1046].forEach((f,i)=>tone(f,0.22,'sine',0.2,i*0.09)); }
  function pop(){ tone(900,0.06,'square',0.12); }

  function startMusic(){
    if(!state.settings.music) return;
    const c = ensureCtx();
    if(musicNodes) return;
    const notes = [261.6,329.6,392.0,329.6];
    const gain = c.createGain(); gain.gain.value = 0.03; gain.connect(c.destination);
    let i = 0;
    const interval = setInterval(()=>{
      if(!state.settings.music){ return; }
      const osc = c.createOscillator(); osc.type='sine';
      osc.frequency.value = notes[i % notes.length]; i++;
      const g = c.createGain(); g.gain.setValueAtTime(0,c.currentTime);
      g.gain.linearRampToValueAtTime(0.04,c.currentTime+0.3);
      g.gain.linearRampToValueAtTime(0,c.currentTime+1.1);
      osc.connect(g); g.connect(c.destination);
      osc.start(); osc.stop(c.currentTime+1.2);
    }, 1300);
    musicNodes = { interval };
  }
  function stopMusic(){ if(musicNodes){ clearInterval(musicNodes.interval); musicNodes=null; } }
  function speak(text){
    if(!state.settings.voice || !('speechSynthesis' in window)) return;
    try{
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.85; u.pitch = 1.15; u.lang='en-US';
      window.speechSynthesis.speak(u);
    }catch(e){}
  }
  return { click, correct, wrong, celebrate, pop, startMusic, stopMusic, speak, ensureCtx };
})();

/* ---------- CONFETTI ---------- */
function fireConfetti(){
  if(state.settings.reducedMotion) return;
  const canvas = document.getElementById('confettiCanvas');
  canvas.width = innerWidth; canvas.height = innerHeight; canvas.style.display='block';
  const ctx2 = canvas.getContext('2d');
  const colors = ['#FF6B6B','#4ECDC4','#FFD93D','#9B5DE5','#06D6A0'];
  let pieces = Array.from({length:90}).map(()=>({
    x: Math.random()*canvas.width, y: -20-Math.random()*canvas.height*0.3,
    vy: 2+Math.random()*3, vx: -1.5+Math.random()*3, size:6+Math.random()*6,
    color: colors[Math.floor(Math.random()*colors.length)], rot: Math.random()*360, vr: -6+Math.random()*12
  }));
  let frame=0;
  function draw(){
    ctx2.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr;
      ctx2.save(); ctx2.translate(p.x,p.y); ctx2.rotate(p.rot*Math.PI/180);
      ctx2.fillStyle=p.color; ctx2.fillRect(-p.size/2,-p.size/2,p.size,p.size*0.6);
      ctx2.restore();
    });
    frame++;
    if(frame<140) requestAnimationFrame(draw); else canvas.style.display='none';
  }
  draw();
}

/* ---------- MASCOT ---------- */
function mascotSay(text, opts={}){
  const bubble = document.getElementById('mascotBubble');
  bubble.textContent = text;
  bubble.classList.add('show');
  AudioEngine.speak(text);
  clearTimeout(mascotSay._t);
  mascotSay._t = setTimeout(()=>bubble.classList.remove('show'), opts.duration || 3600);
}
function praiseUser(){ mascotSay(PRAISE[Math.floor(Math.random()*PRAISE.length)]); AudioEngine.correct(); }
function oopsUser(){ mascotSay(OOPS[Math.floor(Math.random()*OOPS.length)]); AudioEngine.wrong(); }

/* ---------- NAVIGATION ---------- */
const screens = ['home','lessons','lesson-detail','games','game-detail','progress','certificate','settings'];
function showScreen(name){
  screens.forEach(s=>{
    const el = document.getElementById('screen-'+s);
    if(el) el.classList.toggle('active', s===name);
  });
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.screen===name);
  });
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='home') renderHome();
  if(name==='lessons') renderLessonGrid();
  if(name==='games') renderGameGrid();
  if(name==='progress') renderProgress();
  if(name==='certificate') renderCertificate();
}

document.querySelectorAll('.nav-btn').forEach(b=>{
  b.addEventListener('click', ()=>{ AudioEngine.click(); showScreen(b.dataset.screen); });
});
document.querySelectorAll('[data-back]').forEach(b=>{
  b.addEventListener('click', ()=>{ AudioEngine.click(); showScreen(b.dataset.back); });
});

/* ---------- HOME / LEARNING PATH ---------- */
function renderHome(){
  document.getElementById('homeMascotStage').innerHTML = SVG.robot;
  const track = document.getElementById('pathTrack');
  track.innerHTML = '';
  LESSONS.forEach((lesson, idx)=>{
    const done = state.completedLessons.includes(lesson.id);
    const unlocked = idx===0 || state.completedLessons.includes(LESSONS[idx-1].id) || done;
    const stars = state.lessonStars[lesson.id] || 0;
    const node = document.createElement('div');
    node.className = 'path-node ' + (done?'done':(unlocked?'':'locked'));
    node.innerHTML = `
      <button ${unlocked?'':'disabled'} data-lesson="${lesson.id}">
        <div class="node-circle">${unlocked? lesson.emoji : '🔒'}</div>
        <div class="node-label">${lesson.title}</div>
        <div class="node-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
      </button>`;
    if(unlocked){
      node.querySelector('button').addEventListener('click', ()=>{ AudioEngine.click(); openLesson(lesson.id); });
    }
    track.appendChild(node);
  });
}
document.getElementById('startJourneyBtn').addEventListener('click', ()=>{
  AudioEngine.click();
  const next = LESSONS.find(l=>!state.completedLessons.includes(l.id)) || LESSONS[0];
  openLesson(next.id);
});

/* ---------- LESSON GRID ---------- */
function renderLessonGrid(){
  const grid = document.getElementById('lessonGrid');
  grid.innerHTML = '';
  LESSONS.forEach((lesson, idx)=>{
    const done = state.completedLessons.includes(lesson.id);
    const unlocked = idx===0 || state.completedLessons.includes(LESSONS[idx-1].id) || done;
    const card = document.createElement('div');
    card.className = 'tile-card';
    card.innerHTML = `
      <div class="tile-emoji">${lesson.emoji}</div>
      <div class="tile-title">${lesson.title}</div>
      <div class="tile-desc">${lesson.sentence}</div>
      ${done?'<div class="tile-badge">✅ Completed</div>':''}
      <button class="tile-cta" ${unlocked?'':'disabled'}>${done?'Review':'Start'}</button>`;
    card.querySelector('.tile-cta').addEventListener('click', ()=>{ AudioEngine.click(); openLesson(lesson.id); });
    grid.appendChild(card);
  });
}

/* ---------- LESSON DETAIL ---------- */
function openLesson(id){
  const lesson = LESSONS.find(l=>l.id===id);
  const idx = LESSONS.indexOf(lesson);
  const content = document.getElementById('lessonDetailContent');
  content.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-illustration">${lesson.illo}</div>
      <div>
        <h2>${lesson.emoji} ${lesson.title}</h2>
        <p class="lesson-sentence">"${lesson.sentence}"</p>
        <button class="speak-btn" id="speakSentenceBtn">🔊 Hear it</button>
      </div>
    </div>
    <h3 class="sub-title">📚 New Words</h3>
    <div class="vocab-grid" id="vocabGrid"></div>
    <div class="lesson-activity" id="lessonActivityArea"></div>
    <div class="lesson-nav-row">
      <button class="btn-secondary" id="lessonPrevBtn" ${idx===0?'disabled':''}>← Previous Lesson</button>
      <button class="btn-primary" id="lessonCompleteBtn">Mark Complete ⭐</button>
      <button class="btn-secondary" id="lessonNextBtn" ${idx===LESSONS.length-1?'disabled':''}>Next Lesson →</button>
    </div>`;
  document.getElementById('speakSentenceBtn').addEventListener('click', ()=>AudioEngine.speak(lesson.sentence));
  const vocabGrid = document.getElementById('vocabGrid');
  lesson.vocab.forEach(v=>{
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `<span class="vocab-emoji">${v.e}</span><div class="vocab-word">${v.w}</div>
      <button class="speak-btn" data-word="${v.w}">🔁 Repeat</button>`;
    card.querySelector('button').addEventListener('click', ()=>AudioEngine.speak(v.w));
    vocabGrid.appendChild(card);
  });
  renderLessonActivity(lesson);
  document.getElementById('lessonPrevBtn').addEventListener('click', ()=>{ if(idx>0) openLesson(LESSONS[idx-1].id); });
  document.getElementById('lessonNextBtn').addEventListener('click', ()=>{
    if(idx<LESSONS.length-1){
      if(idx===LESSONS.length-1 || state.completedLessons.includes(LESSONS[idx+1>0?idx:0].id) || true){}
      const nextLesson = LESSONS[idx+1];
      const nextUnlocked = state.completedLessons.includes(lesson.id) || idx+1===0;
      if(!state.completedLessons.includes(lesson.id) && !state.completedLessons.includes(nextLesson.id)){
        mascotSay("Finish this lesson first, then I'll unlock the next one!");
        return;
      }
      openLesson(nextLesson.id);
    }
  });
  document.getElementById('lessonCompleteBtn').addEventListener('click', ()=>completeLesson(lesson.id));
  mascotSay(`Let's learn about ${lesson.title}!`);
  showScreen('lesson-detail');
}

function renderLessonActivity(lesson){
  const area = document.getElementById('lessonActivityArea');
  const act = lesson.activity;
  if(act.type==='tap'){
    area.innerHTML = `<p class="quiz-question">${act.prompt}</p><div class="choice-grid"></div>`;
    const grid = area.querySelector('.choice-grid');
    act.options.forEach(opt=>{
      const tile = document.createElement('div');
      tile.className='choice-tile';
      tile.innerHTML = `${opt.e}<span class="choice-label">${opt.label}</span>`;
      tile.addEventListener('click', ()=>{
        AudioEngine.click();
        if(opt.ok){ tile.classList.add('correct'); praiseUser(); }
        else { tile.classList.add('wrong'); oopsUser(); setTimeout(()=>tile.classList.remove('wrong'),600); }
      });
      grid.appendChild(tile);
    });
  } else if(act.type==='sort'){
    area.innerHTML = `<p class="quiz-question">${act.prompt}</p>
      <div class="sort-row">
        <div class="sort-bin safe" data-bin="safe"><h4>✅ Safe</h4></div>
        <div class="sort-bin unsafe" data-bin="unsafe"><h4>⚠️ Unsafe</h4></div>
      </div>
      <div class="sort-pool"></div>`;
    const pool = area.querySelector('.sort-pool');
    act.items.forEach((item,i)=>{
      const chip = document.createElement('div');
      chip.className='sort-item'; chip.draggable=true; chip.textContent=item.label;
      chip.dataset.ok = item.ok; chip.dataset.idx=i;
      setupDrag(chip);
      pool.appendChild(chip);
    });
    area.querySelectorAll('.sort-bin').forEach(bin=>setupDropBin(bin, area));
  } else if(act.type==='build'){
    const partEmoji = {screen:'🖥️',case:'🗄️',mouse:'🖱️',keyboard:'⌨️'}[act.part];
    area.innerHTML = `<p class="quiz-question">Drag the ${act.part} onto the desk!</p>
      <div class="dropzone-row">
        <div class="dropzone" data-accept="${act.part}"></div>
      </div>
      <div class="drag-tray">
        <div class="drag-item" draggable="true" data-part="${act.part}">${partEmoji}</div>
        <div class="drag-item" draggable="true" data-part="decoy1">🪴</div>
        <div class="drag-item" draggable="true" data-part="decoy2">📚</div>
      </div>`;
    area.querySelectorAll('.drag-item').forEach(setupDrag);
    area.querySelectorAll('.dropzone').forEach(dz=>setupDropZone(dz, ()=>{ praiseUser(); }));
  } else if(act.type==='typename'){
    area.innerHTML = `<p class="quiz-question">Type your name on Byte's keyboard! ⌨️</p>
      <input type="text" id="nameTypePractice" maxlength="20" placeholder="Type here..."
        style="font-size:1.4rem;padding:12px 18px;border-radius:14px;border:3px solid var(--grape);width:100%;max-width:300px;">
      <p id="nameTypeFeedback" style="margin-top:10px;font-weight:700;color:var(--ink-soft);"></p>`;
    document.getElementById('nameTypePractice').addEventListener('input', (e)=>{
      const fb = document.getElementById('nameTypeFeedback');
      if(e.target.value.length>0){
        fb.textContent = `Great typing, ${e.target.value}! 🎉`;
        AudioEngine.click();
      } else fb.textContent='';
    });
  }
}

function completeLesson(id){
  if(!state.completedLessons.includes(id)){
    state.completedLessons.push(id);
    state.lessonStars[id] = 3;
    state.coins += 10;
  }
  saveState();
  fireConfetti();
  AudioEngine.celebrate();
  mascotSay("You finished the lesson! "+PRAISE[Math.floor(Math.random()*PRAISE.length)]);
  checkBadges();
  checkCertificate();
}

/* ---------- DRAG & DROP HELPERS (mouse + touch friendly) ---------- */
function setupDrag(el){
  el.addEventListener('dragstart', (e)=>{ e.dataTransfer.setData('text/plain', el.dataset.part ?? el.dataset.idx ?? ''); e.dataTransfer.setData('elId', assignTempId(el)); });
  // simple touch support
  let dragging=false, offX=0, offY=0;
  el.addEventListener('pointerdown', (e)=>{
    dragging=true; el.setPointerCapture(e.pointerId);
    el.style.position='relative'; el.style.zIndex=999;
  });
  el.addEventListener('pointermove', (e)=>{
    if(!dragging) return;
    el.style.transform = `translate(${e.movementX}px,${e.movementY}px)`;
  });
}
let _tempIdCounter=0;
const _tempIdMap = new WeakMap();
function assignTempId(el){
  if(!_tempIdMap.has(el)){ _tempIdCounter++; el.id = el.id||('drag_'+_tempIdCounter); _tempIdMap.set(el, el.id);}
  return el.id;
}
function setupDropZone(dz, onSuccess){
  dz.addEventListener('dragover', e=>e.preventDefault());
  dz.addEventListener('drop', e=>{
    e.preventDefault();
    const elId = e.dataTransfer.getData('elId');
    const el = document.getElementById(elId);
    if(!el) return;
    const part = el.dataset.part;
    if(part === dz.dataset.accept){
      dz.classList.add('filled'); dz.innerHTML = el.innerHTML;
      el.classList.add('placed');
      onSuccess && onSuccess();
    } else { oopsUser(); }
  });
  // tap-to-place fallback for touch devices
  dz.addEventListener('click', ()=>{
    const tray = dz.closest('.lesson-activity, .game-board')?.querySelector('.drag-item:not(.placed)');
  });
}
function setupDropBin(bin, scope){
  bin.addEventListener('dragover', e=>e.preventDefault());
  bin.addEventListener('drop', e=>{
    e.preventDefault();
    const elId = e.dataTransfer.getData('elId');
    const el = document.getElementById(elId);
    if(!el) return;
    if(el.dataset.ok === bin.dataset.bin){
      el.classList.add('placed'); praiseUser();
      checkSortDone(scope);
    } else { oopsUser(); }
  });
}
function checkSortDone(scope){
  const remaining = scope.querySelectorAll('.sort-item:not(.placed)');
  if(remaining.length===0){ fireConfetti(); AudioEngine.celebrate(); }
}

/* For simple click-based fallback drag (mobile-friendly alternative): tap item then tap zone */
document.addEventListener('click', (e)=>{
  const item = e.target.closest('.drag-item:not(.placed), .sort-item:not(.placed)');
  if(item){ document.querySelectorAll('.drag-item,.sort-item').forEach(i=>i.style.outline=''); item.style.outline='4px solid var(--coral)'; window._selectedDragItem = item; return; }
  const zone = e.target.closest('.dropzone:not(.filled)');
  if(zone && window._selectedDragItem && window._selectedDragItem.dataset.part){
    const part = window._selectedDragItem.dataset.part;
    if(part === zone.dataset.accept){
      zone.classList.add('filled'); zone.innerHTML = window._selectedDragItem.innerHTML;
      window._selectedDragItem.classList.add('placed'); praiseUser();
    } else oopsUser();
    window._selectedDragItem=null;
  }
  const bin = e.target.closest('.sort-bin');
  if(bin && window._selectedDragItem && window._selectedDragItem.dataset.ok){
    if(window._selectedDragItem.dataset.ok === bin.dataset.bin){
      window._selectedDragItem.classList.add('placed'); praiseUser();
      checkSortDone(bin.closest('.lesson-activity, .game-board'));
    } else oopsUser();
    window._selectedDragItem=null;
  }
});

/* ---------- GAMES HUB ---------- */
function renderGameGrid(){
  const grid = document.getElementById('gameGrid');
  grid.innerHTML='';
  GAMES.forEach(g=>{
    const done = state.gamesCompleted.includes(g.id);
    const card = document.createElement('div');
    card.className='tile-card';
    card.innerHTML = `<div class="tile-emoji">${g.emoji}</div>
      <div class="tile-title">${g.title}</div>
      <div class="tile-desc">${g.desc}</div>
      ${done?'<div class="tile-badge">✅ Completed</div>':''}
      <button class="tile-cta">${done?'Play Again':'Play'}</button>`;
    card.querySelector('.tile-cta').addEventListener('click', ()=>{ AudioEngine.click(); openGame(g.id); });
    grid.appendChild(card);
  });
}

function openGame(id){
  showScreen('game-detail');
  const content = document.getElementById('gameDetailContent');
  const game = GAMES.find(g=>g.id===id);
  content.innerHTML = `<div class="game-header"><h2>${game.emoji} ${game.title}</h2><div class="game-score" id="gameScoreLabel">Score: 0</div></div>
    <div class="game-board" id="gameBoard"></div>
    <div class="feedback-banner" id="gameFeedback"></div>`;
  mascotSay(game.desc);
  const builders = { clickpic:buildClickPic, dragdrop:buildDragDrop, memory:buildMemory, sortgame:buildSortGame, balloon:buildBalloon, build:buildBuildGame, puzzle:buildPuzzle, quiz:buildQuiz };
  builders[id] && builders[id]();
}

function markGameDone(id){
  if(!state.gamesCompleted.includes(id)){ state.gamesCompleted.push(id); state.coins += 15; }
  saveState(); fireConfetti(); AudioEngine.celebrate(); checkBadges();
  mascotSay("Game complete! "+PRAISE[Math.floor(Math.random()*PRAISE.length)]);
}

const PARTS_POOL = [
  {part:'monitor', label:'Screen', emoji:'🖥️'},
  {part:'tower', label:'Case', emoji:'🗄️'},
  {part:'mouse', label:'Mouse', emoji:'🖱️'},
  {part:'keyboard', label:'Keyboard', emoji:'⌨️'},
];

function buildClickPic(){
  const board = document.getElementById('gameBoard');
  let score=0, round=0;
  const rounds = shuffle([...PARTS_POOL]);
  function nextRound(){
    if(round>=rounds.length){ board.innerHTML=`<p class="quiz-question">All done! 🎉</p>`; markGameDone('clickpic'); return; }
    const target = rounds[round];
    const choices = shuffle([target, ...shuffle(PARTS_POOL.filter(p=>p.part!==target.part)).slice(0,2)]);
    board.innerHTML = `<p class="quiz-question">Click the ${target.label}!</p><div class="choice-grid"></div>`;
    const grid = board.querySelector('.choice-grid');
    choices.forEach(c=>{
      const tile = document.createElement('div'); tile.className='choice-tile';
      tile.innerHTML = `${c.emoji}<span class="choice-label">${c.label}</span>`;
      tile.addEventListener('click', ()=>{
        AudioEngine.click();
        if(c.part===target.part){ tile.classList.add('correct'); score++; document.getElementById('gameScoreLabel').textContent='Score: '+score; praiseUser(); round++; setTimeout(nextRound,700); }
        else { tile.classList.add('wrong'); oopsUser(); setTimeout(()=>tile.classList.remove('wrong'),500); }
      });
      grid.appendChild(tile);
    });
  }
  nextRound();
}

function buildDragDrop(){
  const board = document.getElementById('gameBoard');
  const shuffled = shuffle([...PARTS_POOL]);
  board.innerHTML = `<p class="quiz-question">Drag each label to match its part! (Tap label, then tap part)</p>
    <div class="dropzone-row"></div><div class="drag-tray"></div>`;
  const dzRow = board.querySelector('.dropzone-row');
  const tray = board.querySelector('.drag-tray');
  PARTS_POOL.forEach(p=>{
    const dz = document.createElement('div'); dz.className='dropzone'; dz.dataset.accept=p.part;
    dz.innerHTML = `${p.emoji}<span class="dz-label">?</span>`;
    dzRow.appendChild(dz);
  });
  shuffled.forEach(p=>{
    const item = document.createElement('div'); item.className='drag-item'; item.draggable=true; item.dataset.part=p.part;
    item.textContent = p.label;
    item.style.fontSize='0.95rem'; item.style.fontWeight='800';
    setupDrag(item); tray.appendChild(item);
  });
  board.querySelectorAll('.dropzone').forEach(dz=>{
    setupDropZone(dz, ()=>{
      dz.querySelector('.dz-label')?.remove();
      checkAllPlaced(board, 'dragdrop');
    });
  });
}
function checkAllPlaced(board, gameId){
  const remaining = board.querySelectorAll('.drag-item:not(.placed)');
  if(remaining.length===0) markGameDone(gameId);
}

function buildMemory(){
  const board = document.getElementById('gameBoard');
  const pairs = shuffle([...PARTS_POOL]);
  let cards = [];
  pairs.forEach(p=>{ cards.push({key:p.part, content:p.emoji}); cards.push({key:p.part, content:p.label}); });
  cards = shuffle(cards);
  board.innerHTML = `<div class="memory-grid"></div>`;
  const grid = board.querySelector('.memory-grid');
  let first=null, lock=false, matchedCount=0;
  cards.forEach((c,i)=>{
    const card = document.createElement('div'); card.className='memory-card'; card.dataset.key=c.key; card.dataset.idx=i;
    card.textContent='❓';
    card.addEventListener('click', ()=>{
      if(lock || card.classList.contains('matched') || card.classList.contains('flipped')) return;
      card.classList.add('flipped'); card.textContent=c.content; AudioEngine.click();
      if(!first){ first=card; }
      else {
        lock=true;
        if(first.dataset.key===card.dataset.key && first!==card){
          first.classList.add('matched'); card.classList.add('matched');
          matchedCount+=2; praiseUser(); first=null; lock=false;
          if(matchedCount===cards.length) markGameDone('memory');
        } else {
          oopsUser();
          setTimeout(()=>{
            first.classList.remove('flipped'); first.textContent='❓';
            card.classList.remove('flipped'); card.textContent='❓';
            first=null; lock=false;
          },800);
        }
      }
    });
    grid.appendChild(card);
  });
}

function buildSortGame(){
  const board = document.getElementById('gameBoard');
  const items = shuffle(LESSONS.find(l=>l.id==='safety').activity.items);
  board.innerHTML = `<p class="quiz-question">Sort each card: Safe or Unsafe?</p>
    <div class="sort-row">
      <div class="sort-bin safe" data-bin="safe"><h4>✅ Safe</h4></div>
      <div class="sort-bin unsafe" data-bin="unsafe"><h4>⚠️ Unsafe</h4></div>
    </div><div class="sort-pool"></div>`;
  const pool = board.querySelector('.sort-pool');
  items.forEach(it=>{
    const chip = document.createElement('div'); chip.className='sort-item'; chip.draggable=true;
    chip.textContent = it.label; chip.dataset.ok = it.ok;
    setupDrag(chip); pool.appendChild(chip);
  });
  board.querySelectorAll('.sort-bin').forEach(bin=>setupDropBin(bin, board));
  const observer = new MutationObserver(()=>{
    if(board.querySelectorAll('.sort-item:not(.placed)').length===0) markGameDone('sortgame');
  });
  observer.observe(pool, {attributes:true, subtree:true, attributeFilter:['class']});
}

function buildBalloon(){
  const board = document.getElementById('gameBoard');
  board.innerHTML = `<div class="balloon-field" id="balloonField"></div>`;
  const field = document.getElementById('balloonField');
  const colors = ['#FF6B6B','#4ECDC4','#9B5DE5','#06D6A0'];
  let score=0; let target = PARTS_POOL[Math.floor(Math.random()*PARTS_POOL.length)];
  mascotSay(`Pop the balloon with the ${target.label}!`);
  let spawnTimer;
  function spawnBalloon(){
    const isTarget = Math.random()<0.4;
    const item = isTarget? target : PARTS_POOL[Math.floor(Math.random()*PARTS_POOL.length)];
    const b = document.createElement('div'); b.className='balloon';
    b.style.left = (10+Math.random()*80)+'%';
    b.style.background = colors[Math.floor(Math.random()*colors.length)];
    b.style.animationDuration = (5+Math.random()*2)+'s';
    b.textContent = item.emoji;
    b.addEventListener('click', ()=>{
      AudioEngine.pop();
      b.classList.add('pop');
      if(item.part===target.part){
        score++; document.getElementById('gameScoreLabel').textContent='Score: '+score; praiseUser();
        if(score>=5){ clearInterval(spawnTimer); markGameDone('balloon'); }
        else { target = PARTS_POOL[Math.floor(Math.random()*PARTS_POOL.length)]; mascotSay(`Now pop the ${target.label}!`); }
      } else oopsUser();
      setTimeout(()=>b.remove(),250);
    });
    field.appendChild(b);
    setTimeout(()=>b.remove(), 7500);
  }
  spawnTimer = setInterval(spawnBalloon, 900);
}

function buildBuildGame(){
  const board = document.getElementById('gameBoard');
  board.innerHTML = `<p class="quiz-question">Drag all 4 parts onto the desk to build your computer!</p>
    <div class="build-desk">
      <div class="desk-target" id="deskTarget">
        <div class="desk-slot" data-accept="monitor">🖥️</div>
        <div class="desk-slot" data-accept="tower">🗄️</div>
        <div class="desk-slot" data-accept="mouse">🖱️</div>
        <div class="desk-slot" data-accept="keyboard">⌨️</div>
      </div>
      <div class="drag-tray" id="buildTray"></div>
    </div>`;
  document.querySelectorAll('#deskTarget .desk-slot').forEach(slot=>slot.textContent='');
  const tray = document.getElementById('buildTray');
  shuffle([...PARTS_POOL]).forEach(p=>{
    const item = document.createElement('div'); item.className='drag-item'; item.draggable=true; item.dataset.part=p.part;
    item.textContent = p.emoji;
    setupDrag(item); tray.appendChild(item);
  });
  document.querySelectorAll('#deskTarget .desk-slot').forEach(slot=>{
    slot.addEventListener('dragover', e=>e.preventDefault());
    slot.addEventListener('drop', e=>{
      e.preventDefault();
      const elId = e.dataTransfer.getData('elId');
      const el = document.getElementById(elId);
      if(!el) return;
      if(el.dataset.part === slot.dataset.accept){
        slot.classList.add('filled'); slot.textContent = el.textContent;
        el.classList.add('placed'); praiseUser();
        if(document.querySelectorAll('#buildTray .drag-item:not(.placed)').length===0) markGameDone('build');
      } else oopsUser();
    });
  });
  // tap-to-place support
  document.addEventListener('click', buildTapHandler);
  function buildTapHandler(e){
    const slot = e.target.closest('#deskTarget .desk-slot:not(.filled)');
    if(slot && window._selectedDragItem && window._selectedDragItem.dataset.part){
      if(window._selectedDragItem.dataset.part === slot.dataset.accept){
        slot.classList.add('filled'); slot.textContent = window._selectedDragItem.textContent;
        window._selectedDragItem.classList.add('placed'); praiseUser();
        if(document.querySelectorAll('#buildTray .drag-item:not(.placed)').length===0){ markGameDone('build'); document.removeEventListener('click', buildTapHandler); }
      } else oopsUser();
      window._selectedDragItem=null;
    }
  }
}

function buildPuzzle(){
  const board = document.getElementById('gameBoard');
  const words = shuffle([...PARTS_POOL]);
  board.innerHTML = `<p class="quiz-question">Match each word to its picture! (Tap word, then tap picture)</p>
    <div class="dropzone-row" id="puzzlePics"></div>
    <div class="drag-tray" id="puzzleWords"></div>`;
  const picsRow = document.getElementById('puzzlePics');
  const wordsRow = document.getElementById('puzzleWords');
  shuffle([...words]).forEach(p=>{
    const dz = document.createElement('div'); dz.className='dropzone'; dz.dataset.accept=p.part;
    dz.textContent = p.emoji;
    picsRow.appendChild(dz);
  });
  shuffle([...words]).forEach(p=>{
    const item = document.createElement('div'); item.className='drag-item'; item.draggable=true; item.dataset.part=p.part;
    item.textContent = p.label; item.style.fontSize='0.9rem'; item.style.fontWeight='800';
    setupDrag(item); wordsRow.appendChild(item);
  });
  picsRow.querySelectorAll('.dropzone').forEach(dz=>{
    setupDropZone(dz, ()=>{ checkAllPlaced(board,'puzzle'); });
  });
}

const QUIZ_QUESTIONS = [
  {q:'What do we use to click and point?', options:[{l:'Mouse',ok:true,e:'🖱️'},{l:'Keyboard',ok:false,e:'⌨️'},{l:'Screen',ok:false,e:'🖥️'}]},
  {q:'What shows pictures and words?', options:[{l:'Screen',ok:true,e:'🖥️'},{l:'Mouse',ok:false,e:'🖱️'},{l:'Chair',ok:false,e:'🪑'}]},
  {q:'What keeps the computer\'s brain safe?', options:[{l:'Case',ok:true,e:'🗄️'},{l:'Keyboard',ok:false,e:'⌨️'},{l:'Mouse',ok:false,e:'🖱️'}]},
  {q:'How should we sit in the lab?', options:[{l:'Sitting straight',ok:true,e:'🧍'},{l:'Slouching',ok:false,e:'🙇'},{l:'Standing on the chair',ok:false,e:'🤸'}]},
  {q:'What rule keeps us safe in the lab?', options:[{l:'Gentle hands',ok:true,e:'🤲'},{l:'Running fast',ok:false,e:'🏃'},{l:'Pulling cables',ok:false,e:'🔌'}]},
  {q:'What do we use to type our name?', options:[{l:'Keyboard',ok:true,e:'⌨️'},{l:'Mouse',ok:false,e:'🖱️'},{l:'Screen',ok:false,e:'🖥️'}]},
];
function buildQuiz(){
  const board = document.getElementById('gameBoard');
  let qIndex=0, score=0;
  const order = shuffle([...QUIZ_QUESTIONS]);
  function renderDots(){
    return `<div class="quiz-progress">${order.map((_,i)=>`<div class="quiz-dot ${i<qIndex?'done':(i===qIndex?'current':'')}"></div>`).join('')}</div>`;
  }
  function nextQ(){
    if(qIndex>=order.length){
      board.innerHTML = `<p class="quiz-question">Quiz complete! You scored ${score}/${order.length} 🎉</p>`;
      if(score>=Math.ceil(order.length*0.6)) markGameDone('quiz');
      else mascotSay("Great try! Play again to do even better!");
      return;
    }
    const q = order[qIndex];
    board.innerHTML = `${renderDots()}<p class="quiz-question">${q.q}</p><div class="choice-grid"></div>`;
    const grid = board.querySelector('.choice-grid');
    shuffle([...q.options]).forEach(opt=>{
      const tile = document.createElement('div'); tile.className='choice-tile';
      tile.innerHTML = `${opt.e}<span class="choice-label">${opt.l}</span>`;
      tile.addEventListener('click', ()=>{
        AudioEngine.click();
        if(opt.ok){ tile.classList.add('correct'); score++; praiseUser(); }
        else { tile.classList.add('wrong'); oopsUser(); }
        document.getElementById('gameScoreLabel').textContent='Score: '+score;
        qIndex++;
        setTimeout(nextQ, 700);
      });
      grid.appendChild(tile);
    });
  }
  nextQ();
}

function shuffle(arr){ return arr.map(a=>[Math.random(),a]).sort((a,b)=>a[0]-b[0]).map(a=>a[1]); }

/* ---------- PROGRESS SCREEN ---------- */
function renderProgress(){
  document.getElementById('statStars').textContent = Object.values(state.lessonStars).reduce((a,b)=>a+b,0);
  document.getElementById('statCoins').textContent = state.coins;
  document.getElementById('statLessons').textContent = state.completedLessons.length+'/8';
  document.getElementById('statGames').textContent = state.gamesCompleted.length+'/8';
  const pct = Math.round(((state.completedLessons.length+state.gamesCompleted.length)/16)*100);
  document.getElementById('bigProgressFill').style.width = pct+'%';
  const row = document.getElementById('badgeRow');
  row.innerHTML='';
  BADGES.forEach(b=>{
    const earned = state.badgesEarned.includes(b.id);
    const chip = document.createElement('div'); chip.className='badge-chip'+(earned?' earned':'');
    chip.innerHTML = `<span class="b-emoji">${b.emoji}</span><span class="b-label">${b.label}</span>`;
    row.appendChild(chip);
  });
}
function checkBadges(){
  BADGES.forEach(b=>{
    if(!state.badgesEarned.includes(b.id) && b.test(state)){
      state.badgesEarned.push(b.id);
      mascotSay(`New badge unlocked: ${b.label} ${b.emoji}`);
    }
  });
  saveState();
}
[document.getElementById('resetProgressBtn'), document.getElementById('resetProgressBtn2')].forEach(btn=>{
  btn?.addEventListener('click', ()=>{
    if(confirm('Reset all progress, stars, and badges? This cannot be undone.')){
      state = { completedLessons:[], lessonStars:{}, gamesCompleted:[], coins:0, certificateUnlocked:false, badgesEarned:[], settings:state.settings };
      saveState(); renderProgress(); renderHome();
      mascotSay("Fresh start! Let's learn again!");
    }
  });
});

/* ---------- CERTIFICATE ---------- */
function checkCertificate(){
  if(state.completedLessons.length>=8){ state.certificateUnlocked = true; saveState(); }
}
function renderCertificate(){
  const locked = document.getElementById('certLockedMsg');
  const area = document.getElementById('certArea');
  if(state.certificateUnlocked){
    locked.style.display='none'; area.style.display='flex';
    document.getElementById('certDate').textContent = new Date().toLocaleDateString();
    const saved = localStorage.getItem('byteLabStudentName')||'';
    document.getElementById('studentNameInput').value = saved;
    document.getElementById('certNameDisplay').textContent = saved || '_____________';
  } else {
    locked.style.display='block'; area.style.display='none';
  }
}
document.getElementById('studentNameInput')?.addEventListener('input', (e)=>{
  document.getElementById('certNameDisplay').textContent = e.target.value || '_____________';
  localStorage.setItem('byteLabStudentName', e.target.value);
});
document.getElementById('printCertBtn').addEventListener('click', ()=>window.print());
document.getElementById('pdfCertBtn').addEventListener('click', ()=>{ mascotSay("Choose 'Save as PDF' in the print window!"); window.print(); });

/* ---------- SETTINGS ---------- */
function bindSetting(id, key){
  const el = document.getElementById(id);
  el.checked = state.settings[key];
  el.addEventListener('change', ()=>{
    state.settings[key] = el.checked; saveState();
    if(key==='music'){ el.checked? AudioEngine.startMusic() : AudioEngine.stopMusic(); syncMusicIcon(); }
    if(key==='reducedMotion'){ document.body.classList.toggle('reduced-motion', el.checked); }
  });
}
bindSetting('settingMusic','music');
bindSetting('settingVoice','voice');
bindSetting('settingSfx','sfx');
bindSetting('settingReducedMotion','reducedMotion');
document.body.classList.toggle('reduced-motion', state.settings.reducedMotion);

function syncMusicIcon(){
  document.getElementById('musicToggle').textContent = state.settings.music ? '🔊' : '🔈';
}
document.getElementById('musicToggle').addEventListener('click', ()=>{
  state.settings.music = !state.settings.music; saveState();
  state.settings.music ? AudioEngine.startMusic() : AudioEngine.stopMusic();
  syncMusicIcon();
  document.getElementById('settingMusic').checked = state.settings.music;
});

/* ---------- MASCOT WIDGET ---------- */
document.getElementById('mascotWidget').addEventListener('click', ()=>{
  const tips = [
    "Tip: tap any word to hear it out loud! 🔊",
    "Visit Games to play fun activities! 🎮",
    "Finish all lessons to unlock your certificate! 🏆",
    "You can turn music on or off in Settings! ⚙️",
    "Click the path circles on Home to start a lesson! 🛣️",
  ];
  mascotSay(tips[Math.floor(Math.random()*tips.length)]);
});

/* ---------- FIRST USER GESTURE: unlock audio context + start music ---------- */
function unlockAudioOnce(){
  AudioEngine.ensureCtx();
  AudioEngine.startMusic();
  syncMusicIcon();
  document.removeEventListener('click', unlockAudioOnce);
}
document.addEventListener('click', unlockAudioOnce, {once:true});

/* ---------- INIT ---------- */
syncMusicIcon();
showScreen('home');
checkCertificate();
setTimeout(()=>mascotSay("Hi! I'm Byte! Click my path below to start learning! 🤖"), 800);
