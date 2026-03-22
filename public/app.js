// === MASARI — Bilingual App Logic ===
let lang = 'ar';
let tpl = 'classic';

const T = {
  ar: {
    navTag:'مدعوم بالذكاء الاصطناعي',trustText:'انضم لأكثر من +٢,٥٠٠ باحث عن عمل في السعودية',
    heroTitle:'سيرة ذاتية احترافية<br/><em>تُكتب لك بالذكاء الاصطناعي</em>',
    heroDesc:'أجب على أسئلة بسيطة → اختر التصميم → حمّل سيرتك PDF<br/>كل هالشي في أقل من دقيقتين.',
    st1v:'٣ قوالب',st1l:'تصميم احترافي',st2v:'دقيقتين',st2l:'وقت الإنشاء',st3v:'٣٥ ريال',st3l:'فقط',
    revTitle:'ماذا يقول مستخدمونا',
    r1q:'سيرتي الذاتية صارت احترافية وقدرت أقدم على وظائف بثقة. شكراً مساري!',r1w:'سارة م. — الرياض',
    r2q:'الذكاء الاصطناعي كتب لي ملخص مهني أفضل مما كنت أتوقع.',r2w:'فهد ع. — جدة',
    r3q:'مساري الوحيد اللي يفهم السوق السعودي ويكتب بعربي سليم.',r3w:'نورة ك. — الدمام',
    r4q:'خريج جديد وسهّل لي الموضوع بشكل كبير.',r4w:'عمر ح. — المدينة',
    tplTitle:'اختر تصميم سيرتك الذاتية',tplDesc:'كل القوالب متوافقة مع أنظمة التوظيف ATS',
    tpn1:'كلاسيكي',tpd1:'رسمي — قطاع حكومي',tpn2:'عصري',tpd2:'ملفت — قطاع خاص',tpn3:'بسيط',tpd3:'أنيق — كل المجالات',
    step1:'الخطوة ١ من ٣',step2:'الخطوة ٢ من ٣',step3:'الخطوة ٣ من ٣',step4:'جاري الإنشاء...',step5:'سيرتك جاهزة!',
    livePreview:'معاينة مباشرة',yourName:'اسمك سيظهر هنا',
    p1Title:'المعلومات الشخصية',p1Desc:'البيانات الأساسية في أعلى السيرة',
    lName:'الاسم الكامل <span class="rq">*</span>',lJob:'المسمى الوظيفي <span class="rq">*</span>',
    lPhone:'رقم الجوال <span class="rq">*</span>',lEmail:'البريد الإلكتروني <span class="rq">*</span>',
    lCity:'المدينة',lNat:'الجنسية',
    phName:'محمد عبدالله الأحمد',phJob:'مهندس برمجيات',phPhone:'+966 5X XXX XXXX',phCity:'الرياض',phNat:'سعودي',
    btn1:'التالي — الخبرة والتعليم ←',btnBack:'→ رجوع',
    p2Title:'الخبرة والتعليم',p2Desc:'خلفيتك المهنية والأكاديمية',
    lLastJob:'آخر وظيفة شغلتها <span class="rq">*</span>',lExp:'سنوات الخبرة',lEduLvl:'مستوى التعليم',
    lEdu:'التخصص والجامعة',lSkills:'المهارات الرئيسية',
    phLastJob:'مهندس برمجيات أول — STC',phEdu:'هندسة حاسب — جامعة الملك سعود',phSkills:'Python، إدارة المشاريع، تحليل البيانات',
    expFresh:'خريج جديد',exp12:'١-٢ سنة',exp35:'٣-٥ سنوات',exp510:'٥-١٠ سنوات',exp10p:'أكثر من ١٠',
    eduBach:'بكالوريوس',eduMast:'ماجستير',eduPhd:'دكتوراه',eduDip:'دبلوم',eduHigh:'ثانوية عامة',
    btn2:'التالي — الهدف الوظيفي ←',
    p3Title:'الهدف الوظيفي',p3Desc:'الذكاء الاصطناعي سيخصص المحتوى بناءً على هدفك',
    lTarget:'الوظيفة المستهدفة <span class="rq">*</span>',lSector:'القطاع',
    lHighlight:'إنجاز مميز (اختياري)',phTarget:'مدير مشاريع تقنية',phHighlight:'مثال: خفّضت التكاليف ٣٠٪...',
    secTech:'التقنية',secFin:'المالية',secMkt:'التسويق',secEng:'الهندسة',secHR:'الموارد البشرية',
    secHealth:'الصحة',secEdu:'التعليم',secGov:'الحكومي',secLog:'اللوجستيات',
    btnGen:'أنشئ سيرتي الذاتية 🪄',
    loadTitle:'الذكاء الاصطناعي يكتب سيرتك...',loadDesc:'محتوى مخصص لسوق العمل السعودي',
    ls1:'تحليل بياناتك',ls2:'كتابة الملخص المهني',ls3:'صياغة الخبرات',ls4:'تنسيق السيرة النهائية',
    cvSum:'الملخص المهني',cvExp:'الخبرة العملية',cvEdu:'التعليم',cvSk:'المهارات',cvLn:'اللغات',
    pwTitle:'سيرتك جاهزة — حمّلها الآن',pwDesc:'ادفع مرة واحدة وحمّل سيرتك كملف PDF احترافي جاهز للإرسال.',
    price:'٣٥',cur:'ريال',priceNote:'دفعة واحدة — بدون اشتراك',priceBadge:'👌 أرخص من كوب قهوة',
    f1:'تحميل PDF بجودة عالية',f2:'صياغة ذكية بالعربي',f3:'متوافق مع أنظمة ATS',f4:'تعديل وإعادة تحميل مجاناً',
    payBtn:'ادفع ٣٥ ريال وحمّل سيرتك',
    dlBadge:'✓ تم الدفع — سيرتك جاهزة',dlText:'⬇ تحميل السيرة الذاتية PDF',
    dlNote:'ملف PDF جاهز للإرفاق في LinkedIn وطاقات',newCv:'← إنشاء سيرة جديدة',
    footer:'© ٢٠٢٦ مساري — جميع الحقوق محفوظة. مصمم لسوق العمل السعودي.',
    errRequired:'يرجى تعبئة جميع الحقول المطلوبة',errEmail:'يرجى إدخال بريد إلكتروني صحيح',
    errJob:'يرجى كتابة آخر وظيفة شغلتها',errTarget:'يرجى تحديد الوظيفة المستهدفة',
    fbSummary:'محترف في مجال',fbGoal:'أسعى لشغل منصب',fbAchieve:'أتمتع بمهارات قيادية وقدرة على العمل ضمن الفريق.',
    fbNow:'حتى الآن',fbDesc:'تحقيق الأهداف وتطوير العمليات والمساهمة في نمو المؤسسة بكفاءة.',
    dlProgress:'⏳ جاري إنشاء الملف...',dlError:'حدث خطأ. يرجى المحاولة مرة أخرى.',
    langAr:'العربية — اللغة الأم',langEn:'الإنجليزية — جيد'
  },
  en: {
    navTag:'AI-Powered',trustText:'Join 2,500+ job seekers in Saudi Arabia',
    heroTitle:'Professional CV<br/><em>Written by AI in Minutes</em>',
    heroDesc:'Answer simple questions → Pick a template → Download your PDF CV<br/>All in under 2 minutes.',
    st1v:'3 Templates',st1l:'Professional Design',st2v:'2 Minutes',st2l:'Creation Time',st3v:'35 SAR',st3l:'Only',
    revTitle:'What Our Users Say',
    r1q:'My CV became so professional. I applied to jobs with confidence. Thank you Masari!',r1w:'Sarah M. — Riyadh',
    r2q:'The AI wrote me a better professional summary than I ever could. Fastest CV builder.',r2w:'Fahad A. — Jeddah',
    r3q:'Masari is the only platform that truly understands the Saudi job market.',r3w:'Noura K. — Dammam',
    r4q:'As a fresh graduate, I had no idea how to write a CV. Masari made it so easy.',r4w:'Omar H. — Madinah',
    tplTitle:'Choose Your CV Template',tplDesc:'All templates are ATS-compatible',
    tpn1:'Classic',tpd1:'Formal — Government',tpn2:'Modern',tpd2:'Eye-catching — Private Sector',tpn3:'Minimal',tpd3:'Elegant — All Fields',
    step1:'Step 1 of 3',step2:'Step 2 of 3',step3:'Step 3 of 3',step4:'Generating...',step5:'Your CV is ready!',
    livePreview:'Live Preview',yourName:'Your name will appear here',
    p1Title:'Personal Information',p1Desc:'Basic details shown at the top of your CV',
    lName:'Full Name <span class="rq">*</span>',lJob:'Job Title <span class="rq">*</span>',
    lPhone:'Phone Number <span class="rq">*</span>',lEmail:'Email Address <span class="rq">*</span>',
    lCity:'City',lNat:'Nationality',
    phName:'Mohammed Abdullah',phJob:'Software Engineer',phPhone:'+966 5X XXX XXXX',phCity:'Riyadh',phNat:'Saudi',
    btn1:'Next — Experience & Education →',btnBack:'← Back',
    p2Title:'Experience & Education',p2Desc:'Your professional and academic background',
    lLastJob:'Last Job Title <span class="rq">*</span>',lExp:'Years of Experience',lEduLvl:'Education Level',
    lEdu:'Major & University',lSkills:'Key Skills',
    phLastJob:'Senior Software Engineer — STC',phEdu:'Computer Science — King Saud University',phSkills:'Python, Project Management, Data Analysis',
    expFresh:'Fresh Graduate',exp12:'1-2 Years',exp35:'3-5 Years',exp510:'5-10 Years',exp10p:'10+ Years',
    eduBach:'Bachelor\'s',eduMast:'Master\'s',eduPhd:'PhD',eduDip:'Diploma',eduHigh:'High School',
    btn2:'Next — Career Goal →',
    p3Title:'Career Goal',p3Desc:'AI will customize your CV content based on your target',
    lTarget:'Target Job <span class="rq">*</span>',lSector:'Industry',
    lHighlight:'Key Achievement (optional)',phTarget:'Technical Project Manager',phHighlight:'e.g. Reduced costs by 30%...',
    secTech:'Technology',secFin:'Finance',secMkt:'Marketing',secEng:'Engineering',secHR:'Human Resources',
    secHealth:'Healthcare',secEdu:'Education',secGov:'Government',secLog:'Logistics',
    btnGen:'Generate My CV 🪄',
    loadTitle:'AI is writing your CV...',loadDesc:'Creating personalized content for the Saudi job market',
    ls1:'Analyzing your data',ls2:'Writing professional summary',ls3:'Crafting experience section',ls4:'Finalizing layout',
    cvSum:'Professional Summary',cvExp:'Work Experience',cvEdu:'Education',cvSk:'Skills',cvLn:'Languages',
    pwTitle:'Your CV is Ready — Download Now',pwDesc:'Pay once and download your professional PDF CV, ready to send.',
    price:'35',cur:'SAR',priceNote:'One-time payment — No subscription',priceBadge:'👌 Cheaper than a coffee',
    f1:'High-quality PDF download',f2:'Smart AI-written content',f3:'ATS-compatible format',f4:'Free edits & re-downloads',
    payBtn:'Pay 35 SAR & Download Your CV',
    dlBadge:'✓ Payment Complete — CV Ready',dlText:'⬇ Download CV as PDF',
    dlNote:'PDF ready for LinkedIn, Taqat, and job portals',newCv:'→ Create New CV',
    footer:'© 2026 Masari — All rights reserved. Designed for the Saudi job market.',
    errRequired:'Please fill in all required fields',errEmail:'Please enter a valid email address',
    errJob:'Please enter your last job title',errTarget:'Please specify your target job',
    fbSummary:'Professional in the field of',fbGoal:'Seeking a position as',fbAchieve:'Strong leadership and teamwork skills.',
    fbNow:'Present',fbDesc:'Achieving objectives, improving operations, and driving organizational growth.',
    dlProgress:'⏳ Creating file...',dlError:'An error occurred. Please try again.',
    langAr:'Arabic — Native',langEn:'English — Fluent'
  }
};

function toggleLang(){
  lang = lang === 'ar' ? 'en' : 'ar';
  document.getElementById('langBtn').textContent = lang === 'ar' ? 'English' : 'العربية';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('en', lang === 'en');
  // Update all data-t elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (T[lang][key]) el.innerHTML = T[lang][key];
  });
  // Update placeholders
  document.querySelectorAll('[data-ph]').forEach(el => {
    const key = el.dataset.ph;
    if (T[lang][key]) el.placeholder = T[lang][key];
  });
  // Phone/email text alignment
  const phoneEl = document.getElementById('phone');
  const emailEl = document.getElementById('email');
  if (phoneEl) phoneEl.style.textAlign = lang === 'ar' ? 'right' : 'left';
  if (emailEl) emailEl.style.textAlign = lang === 'ar' ? 'right' : 'left';
  updateMini();
}

function t(key) { return T[lang][key] || key; }

const stepLabels = () => [t('step1'),t('step2'),t('step3'),t('step4'),t('step5')];

function pickTpl(tp, el) {
  tpl = tp;
  document.querySelectorAll('.tc').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

function go(n) {
  [1,2,3,4,5].forEach(i => document.getElementById('p'+i).classList.add('hidden'));
  document.getElementById('p'+n).classList.remove('hidden');
  [1,2,3,4].forEach(i => { const d = document.getElementById('pd'+i); if(d) d.classList.toggle('on', i<=n); });
  document.getElementById('pLbl').textContent = stepLabels()[n-1] || '';
  window.scrollTo({top: document.querySelector('.ctn').offsetTop - 70, behavior:'smooth'});
}

function showE(id, msg) { const el = document.getElementById(id); el.textContent = msg; el.classList.remove('hidden'); }
function hideE(id) { document.getElementById(id).classList.add('hidden'); }

function updateMini() {
  const n = document.getElementById('name').value.trim();
  const j = document.getElementById('jobTitle').value.trim();
  document.getElementById('mN').textContent = n || t('yourName');
  document.getElementById('mR').textContent = j;
  if(n) { const p = n.split(' '); document.getElementById('mAv').textContent = p.length >= 2 ? p[0][0]+p[p.length-1][0] : n.slice(0,2); }
  else document.getElementById('mAv').textContent = '—';
  // Save to localStorage
  try { localStorage.setItem('masari_draft', JSON.stringify(getPayload())); } catch(e) {}
}

function vStep(s) {
  if(s===1) {
    const n=document.getElementById('name').value.trim(), j=document.getElementById('jobTitle').value.trim(),
          p=document.getElementById('phone').value.trim(), e=document.getElementById('email').value.trim();
    if(!n||!j||!p||!e) { showE('e1', t('errRequired')); return; }
    if(!e.includes('@')) { showE('e1', t('errEmail')); return; }
    hideE('e1');
  }
  if(s===2) { if(!document.getElementById('lastJob').value.trim()) { showE('e2', t('errJob')); return; } hideE('e2'); }
  go(s+1);
}

function getPayload() {
  return {
    name: document.getElementById('name').value || (lang==='ar'?'المستخدم':'User'),
    jobTitle: document.getElementById('jobTitle').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    city: document.getElementById('city').value,
    nationality: document.getElementById('nationality').value,
    lastJob: document.getElementById('lastJob').value,
    exp: document.getElementById('exp').value,
    edu: document.getElementById('edu').value,
    eduLevel: document.getElementById('eduLevel').value,
    skills: document.getElementById('skills').value,
    targetJob: document.getElementById('targetJob').value,
    sector: document.getElementById('sector').value,
    highlight: document.getElementById('highlight').value,
    lang: lang
  };
}

async function gen() {
  const tj = document.getElementById('targetJob').value.trim();
  if(!tj) { showE('e3', t('errTarget')); return; }
  hideE('e3');
  const btn = document.getElementById('genBtn'); btn.disabled = true;
  go(4);
  ['s1','s2','s3','s4'].forEach((id,i) => { setTimeout(() => document.getElementById(id).classList.add('ok'), (i+1)*700); });
  const payload = getPayload();
  try {
    const res = await fetch('/api/generate', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
    const data = await res.json();
    if(!data.success) throw new Error(data.error);
    renderCV(payload, data.cv);
  } catch(err) { console.error(err); renderFB(payload); }
  setTimeout(() => { go(5); btn.disabled = false; }, 3200);
}

function fillH(p) {
  const parts = p.name.trim().split(' ');
  const ini = parts.length >= 2 ? parts[0][0]+parts[parts.length-1][0] : p.name.slice(0,2);
  document.getElementById('cA').textContent = ini;
  document.getElementById('cN').textContent = p.name;
  document.getElementById('cJ').textContent = p.jobTitle;
  let ct = '';
  if(p.phone) ct += `<span>${p.phone}</span>`;
  if(p.email) ct += `<span>${p.email}</span>`;
  if(p.city) ct += `<span>${p.city}</span>`;
  document.getElementById('cC').innerHTML = ct;
  document.getElementById('cvDoc').className = 'cd tpl-' + tpl;
}

function renderCV(p, cv) {
  fillH(p);
  document.getElementById('cS').textContent = cv.summary || '';
  const ex = document.getElementById('cE'); ex.innerHTML = '';
  (cv.experience||[]).forEach(e => {
    ex.innerHTML += `<div class="ce"><div class="cer"><div class="cet">${e.title}</div><div class="ced">${e.duration}</div></div><div class="ceo">${e.company}</div><div class="cep">${e.description}</div></div>`;
  });
  document.getElementById('cEd').innerHTML = `<div class="ce"><div class="cet">${cv.education?.degree||p.eduLevel+' — '+p.edu}</div><div class="ceo">${cv.education?.institution||''}</div></div>`;
  const sk = document.getElementById('cSk'); sk.innerHTML = '';
  (cv.skills||[]).forEach(s => { sk.innerHTML += `<span class="csk">${s}</span>`; });
  const lg = document.getElementById('cL'); lg.innerHTML = '';
  (cv.languages||[t('langAr'),t('langEn')]).forEach(l => { lg.innerHTML += `<span class="clg">${l}</span>`; });
}

function renderFB(p) {
  fillH(p);
  document.getElementById('cS').textContent = `${t('fbSummary')} ${p.sector}, ${t('fbGoal')} ${p.targetJob||p.jobTitle}. ${p.highlight||t('fbAchieve')}`;
  document.getElementById('cE').innerHTML = `<div class="ce"><div class="cer"><div class="cet">${p.lastJob}</div><div class="ced">${t('fbNow')}</div></div><div class="ceo">${p.city||''}</div><div class="cep">${t('fbDesc')}</div></div>`;
  document.getElementById('cEd').innerHTML = `<div class="ce"><div class="cet">${p.eduLevel}</div><div class="ceo">${p.edu||''}</div></div>`;
  const sk = document.getElementById('cSk'); sk.innerHTML = '';
  const sl = p.skills ? p.skills.split(/[,،]/).map(s=>s.trim()).filter(Boolean) : (lang==='ar'?['التواصل','حل المشكلات']:['Communication','Problem Solving']);
  sl.forEach(s => { sk.innerHTML += `<span class="csk">${s}</span>`; });
  document.getElementById('cL').innerHTML = `<span class="clg">${t('langAr')}</span><span class="clg">${t('langEn')}</span>`;
}

function unlock() {
  document.getElementById('cvA').classList.remove('blur');
  document.getElementById('pwS').style.display = 'none';
  document.getElementById('dlS').classList.add('show');
  window.scrollTo({top:0,behavior:'smooth'});
}

async function dlPDF() {
  const btn = document.getElementById('dlBtn'); btn.disabled = true; btn.textContent = t('dlProgress');
  try {
    const {jsPDF} = window.jspdf;
    const el = document.getElementById('cvDoc');
    const ow = el.style.width; el.style.width = '210mm';
    const canvas = await html2canvas(el, {scale:2,useCORS:true,backgroundColor:'#ffffff',logging:false});
    el.style.width = ow;
    const img = canvas.toDataURL('image/jpeg',0.92);
    const pdf = new jsPDF('p','mm','a4');
    const w = pdf.internal.pageSize.getWidth(), h = (canvas.height*w)/canvas.width;
    pdf.addImage(img,'JPEG',0,0,w,h);
    const nm = (document.getElementById('cN').textContent||'CV').trim().replace(/\s+/g,'_');
    pdf.save(lang==='ar' ? `سيرة_ذاتية_${nm}.pdf` : `CV_${nm}.pdf`);
  } catch(e) { alert(t('dlError')); console.error(e); }
  btn.disabled = false; btn.textContent = t('dlText');
}

// Restore draft from localStorage
try {
  const draft = JSON.parse(localStorage.getItem('masari_draft') || '{}');
  if(draft.name) { document.getElementById('name').value = draft.name; document.getElementById('jobTitle').value = draft.jobTitle||''; document.getElementById('phone').value = draft.phone||''; document.getElementById('email').value = draft.email||''; document.getElementById('city').value = draft.city||''; document.getElementById('nationality').value = draft.nationality||''; updateMini(); }
} catch(e) {}
