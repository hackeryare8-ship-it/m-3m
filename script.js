(function(){
  const translations = {
    'Creative Services':'Adeegyada Hal-abuurka',
    'Home':'Bogga Hore','About':'Nagu Saabsan','Services':'Adeegyada','Packages':'Xirmooyinka','Portfolio':'Portfolio','Testimonials':'Maxay Yiraahdeen','Contact':'Xiriir',
    '“Ideas →':'“Fikrado →','Stories →':'Sheekooyin →','Visuals”':'Muuqaallo”',
    'Get a Quote →':'Hel Qiimeyn →',"HELLO, I'M":'SALAAN, WAA',
    'Content Creator':'Abuure Mawduuc','Storyteller':'Sheeko-sheegaha','Web Developer':'Horumariye Web',
    'I turn ideas into stories. I help schools, institutes and businesses grow with modern websites, engaging social media content, professional videos and creative visual solutions.':'Waxaan fikradaha u beddelaa sheekooyin. Waxaan dugsiyada, machadyada iyo ganacsiyada ka caawiyaa inay ku koraan website-yo casri ah, mawduucyo baraha bulshada ah, muuqaallo xirfad leh iyo xalal muuqaal oo hal-abuur leh.',
    'View My Work ▷':'Eeg Shaqooyinkayga ▷','✦ Creative Ideas':'✦ Fikrado Hal-abuur leh','⚙ Professional Quality':'⚙ Tayo Xirfadeed','◈ Fast Delivery':'◈ Gaarsiin Degdeg ah','◉ Ongoing Support':'◉ Taageero Joogto ah',
    'WINNER':'GUULEYSTE','TikTok Followers':'Raacayaal TikTok','Videos Created':'Muuqaallo La Sameeyay','Year Experience':'Sannad Khibrad','Projects / Ideas':'Mashruucyo / Fikrado',
    'About Me':'Nagu Saabsan','I’m':'Waxaan ahay',"I'm":'Waxaan ahay',
    ', a creative content creator, storyteller and web developer. I help schools, institutes and businesses present themselves professionally online through websites, social media content and creative visual solutions.':', abuure mawduuc, sheeko-sheegaha iyo horumariye web. Waxaan dugsiyada, machadyada iyo ganacsiyada ka caawiyaa inay si xirfad leh uga muuqdaan internetka iyada oo loo marayo website-yo, mawduucyo baraha bulshada ah iyo xalal muuqaal oo hal-abuur leh.',
    'Mogadishu, Somalia':'Muqdisho, Soomaaliya','More About Me →':'Wax Badan Iga Ogow →',
    'My Services':'Adeegyadayda','Website Design & Development':'Naqshadaynta & Horumarinta Website-ka','Modern, fast and responsive websites for your business or institution.':'Website-yo casri ah, degdeg ah oo la jaanqaadi kara qalab kasta oo loogu talagalay ganacsigaaga ama hay’addaada.',
    'Social Media Content':'Mawduucyada Baraha Bulshada','Engaging videos, posters, reels and graphics for Facebook, Instagram and TikTok.':'Muuqaallo, boorar, reels iyo naqshado soo jiidasho leh oo loogu talagalay Facebook, Instagram iyo TikTok.',
    'Video Editing & Post Production':'Tafatirka Muuqaalka & Post Production','Professional editing with captions, effects, B-roll, animations and motion graphics.':'Tafatir xirfad leh oo leh captions, effects, B-roll, animations iyo motion graphics.',
    'Photography & Videography':'Sawir-qaadis & Muuqaal-duubis','High-quality photos and videos for events, products, people and brands.':'Sawirro iyo muuqaallo tayo sare leh oo loogu talagalay munaasabadaha, alaabada, dadka iyo summadaha.',
    'Branding & Visual Design':'Branding & Naqshad Muuqaal','Logos, posters, flyers, banners and other visual materials.':'Logos, boorar, flyers, banners iyo agab kale oo muuqaal ah.',
    'Packages & Pricing':'Xirmooyinka & Qiimayaasha','Request Custom Package →':'Codso Xirmo Gaar ah →','Flexible packages designed for schools, institutes and businesses. Choose a starting package or request a custom plan.':'Xirmooyin dabacsan oo loogu talagalay dugsiyada, machadyada iyo ganacsiyada. Dooro xirmo bilow ah ama codso qorshe kuu gaar ah.',
    'PACKAGE':'XIRMADA','DELIVERABLE':'WAXA LA HELAYO','PRICE':'QIIMAHA','Monthly Essential':'Xirmada Bilaha','Consistent monthly social content':'Mawduuc joogto ah oo bille ah','8 videos / month · 2 videos / week':'8 muuqaal / bil · 2 muuqaal / toddobaad','Choose →':'Dooro →',
    'Weekly Content':'Xirmada Toddobaadlaha','For active pages that need frequent posts':'Bogag firfircoon oo u baahan qoraallo joogto ah','4 videos / week':'4 muuqaal / toddobaad',
    '3-Month Growth Plan':'Qorshaha Kobaca 3 Bilood','Commitment package for consistent branding':'Xirmo joogto ah oo lagu dhiso sumcad isku mid ah','8 videos / month · 24 videos over 3 months':'8 muuqaal / bil · 24 muuqaal 3 bilood gudahood',
    'Starter Content':'Xirmada Bilowga','For a new school, institute or small business':'Dugsi, machad ama ganacsi yar oo cusub','4 edited videos / month':'4 muuqaal la tafatiray / bil',
    'One-Time Video':'Hal Muuqaal','Single project or promotional clip':'Hal mashruuc ama muuqaal xayeysiis','1 edited video with captions':'1 muuqaal la tafatiray oo captions leh',
    'Packages cover video production/editing as agreed before work begins. Transport, paid ads, extra revisions and additional deliverables can be quoted separately.':'Xirmooyinku waxay daboolayaan soo-saarista/tafatirka muuqaalka sida lagu heshiiyo ka hor shaqada. Gaadiidka, xayeysiisyada lacagta leh, revisions dheeraad ah iyo adeegyo kale si gaar ah ayaa loo qiimeyn karaa.',
    'Portfolio & Real Clients':'Portfolio & Macaamiisha Dhabta ah','Selected organizations and institutions I have worked with through camera operation, video editing, content production and visual media.':'Hay’adaha iyo ururrada aan la soo shaqeeyay ee dhinacyada camera operation, video editing, content production iyo visual media.',
    'Media & Production':'Warbaahin & Soo-saaris','Professional experience: camera operation, video production and editing.':'Khibrad xirfadeed: camera operation, soo-saarista muuqaalka iyo tafatirka.',
    'Technology & Digital':'Technology & Digital','Professional experience: camera operation, digital content production and video editing.':'Khibrad xirfadeed: camera operation, soo-saarista mawduucyada digital-ka iyo video editing.',
    'Freelance Projects':'Mashaariic Freelance','Independent Creative Work':'Shaqo Hal-abuur oo Madaxbannaan','Client-based video shoots, editing, photography and social media content for individual projects.':'Muuqaal-duubis, tafatir, sawir-qaadis iyo mawduucyo baraha bulshada ah oo aan u qabtay macaamiil kala duwan.',
    '1st Place · Winner':'Kaalinta 1aad · Guuleyste','Recognized as the first-place winner of KiKi Go Talent — a milestone in my creative journey.':'Waxaa la ii aqoonsaday guuleystaha kaalinta 1aad ee KiKi Go Talent — guul muhiim ah oo ka mid ah safarkayga hal-abuurka.',
    'Why Choose Me?':'Maxaad Ii Dooranaysaa?','✓ Creative Ideas':'✓ Fikrado Hal-abuur leh','✓ Professional Quality':'✓ Tayo Xirfadeed','✓ Affordable Pricing':'✓ Qiime La Awoodi Karo','✓ Fast Delivery':'✓ Gaarsiin Degdeg ah','✓ Ongoing Support':'✓ Taageero Joogto ah',
    '“Let’s build something great.”':'“Aan wada dhisno wax weyn.”',"“Let's build something great.”":'“Aan wada dhisno wax weyn.”',
    'Clients & Projects':'Macaamiisha & Mashaariicda','+ Add Client':'+ Ku Dar Macmiil','Keep a simple record of schools, institutes and businesses you work with.':'Halkan ku hay diiwaan kooban oo ku saabsan dugsiyada, machadyada iyo ganacsiyada aad la shaqeyso.',
    'CLIENT':'MACMIIL','TYPE':'NOOCA','SERVICE':'ADEEGGA','STATUS':'XAAALAD','School':'Dugsi','Photo + Video Content':'Mawduuc Sawir + Muuqaal','Client':'Macmiil','Food Business':'Ganacsi Cunto','Promotional Photo + Video Content':'Sawir + Muuqaal Xayeysiis',
    "Let's Work Together":'Aan Wada Shaqayno',"Have a project in mind? Send a message and let's create something great.":'Mashruuc ma maskaxdaada ku jiraa? Fariin soo dir, aan wada abuurno wax weyn.',
    'WhatsApp Me →':'WhatsApp Iigu Soo Dir →','Send Email →':'Email Iigu Soo Dir →','© 2026 Mohamed Creative Services':'© 2026 Mohamed Creative Services','M³M · Ideas → Stories → Visuals':'M³M · Fikrado → Sheekooyin → Muuqaallo',
    'Creative Services':'Adeegyada Hal-abuurka'
  };

  const originalNodes = new Map();
  const textNodes = [];
  function collect(){
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    let n; while(n=walker.nextNode()){
      if(!n.nodeValue.trim() || n.parentElement.closest('script,style')) continue;
      originalNodes.set(n,n.nodeValue);
      textNodes.push(n);
    }
  }
  function setLanguage(lang){
    const so=lang==='so';
    textNodes.forEach(n=>{
      const raw=originalNodes.get(n);
      const trimmed=raw.trim();
      const translated=so ? translations[trimmed] : trimmed;
      if(translated!==undefined){
        const lead=raw.match(/^\s*/)?.[0]||''; const trail=raw.match(/\s*$/)?.[0]||'';
        n.nodeValue=lead+translated+trail;
      }
    });
    document.documentElement.lang=so?'so':'en';
    document.title=so?'Mohamed Creative Services':'Mohamed Creative Services';
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    localStorage.setItem('m3m-language',lang);
    window.currentLanguage=lang;
  }
  window.setLanguage=setLanguage;

  function choosePackage(name){
    const lang=window.currentLanguage||'en';
    const mapSo={
      'Monthly Essential — $50/month':'Xirmada Bilaha — $50/bil',
      'Weekly Content — $25/week':'Xirmada Toddobaadlaha — $25/toddobaad',
      '3-Month Growth Plan — $150/3 months':'Qorshaha Kobaca 3 Bilood — $150/3 bilood',
      'Starter Content — $30/month':'Xirmada Bilowga — $30/bil',
      'One-Time Video — $15/video':'Hal Muuqaal — $15/muuqaal'
    };
    const packageName=lang==='so'?(mapSo[name]||name):name;
    const msg=lang==='so'?`Salaan Mohamed, waxaan xiiseynayaa "${packageName}". Fadlan ii soo dir faahfaahinta.`:`Hello Mohamed, I am interested in the "${packageName}" package. Please send me the details.`;
    window.open('https://wa.me/252619337879?text='+encodeURIComponent(msg),'_blank');
  }
  window.choosePackage=choosePackage;

  function addClient(){
    const so=window.currentLanguage==='so';
    const name=prompt(so?'Magaca macmiilka / dugsiga / machadka:':'Client / school / institute name:');
    if(!name)return;
    const type=prompt(so?'Nooca macmiilka (Dugsi, Machad, Ganacsi):':'Client type (School, Institute, Business):',so?'Ganacsi':'Business') || (so?'Ganacsi':'Business');
    const service=prompt(so?'Adeegga la bixiyay:':'Service provided:',so?'Mawduucyada Baraha Bulshada':'Social Media Content') || (so?'Mawduucyada Baraha Bulshada':'Social Media Content');
    const row=document.createElement('div'); row.className='client-row';
    row.innerHTML=`<span>${escapeHtml(name)}</span><span>${escapeHtml(type)}</span><span>${escapeHtml(service)}</span><em>${so?'Firfircoon':'Active'}</em>`;
    document.querySelector('#clientTable').appendChild(row);
  }
  window.addClient=addClient;
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}

  document.addEventListener('DOMContentLoaded',()=>{
    collect();
    const lang=localStorage.getItem('m3m-language')||'en';
    setLanguage(lang);
  });
})();
