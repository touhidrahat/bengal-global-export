(() => {
  const html=document.documentElement;
  html.classList.add('js-enabled');
  const body=document.body;
  const header=document.querySelector('.site-header');
  const menuBtn=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  const progress=document.createElement('div');
  progress.className='scroll-progress'; progress.innerHTML='<span></span>'; body.prepend(progress);
  const bar=progress.firstElementChild;
  const back=document.createElement('button'); back.className='back-top'; back.type='button'; back.setAttribute('aria-label','Back to top'); back.textContent='↑'; body.appendChild(back);
  const closeMenu=()=>{if(!menuBtn||!nav)return;menuBtn.setAttribute('aria-expanded','false');nav.classList.remove('open');body.classList.remove('menu-open')};
  if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);body.classList.toggle('menu-open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));window.addEventListener('resize',()=>{if(innerWidth>900)closeMenu()})}
  back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const onScroll=()=>{const y=scrollY;if(header)header.classList.toggle('scrolled',y>12);back.classList.toggle('show',y>620);const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=max>0?Math.min(100,(y/max)*100)+'%':'0%'};onScroll();addEventListener('scroll',onScroll,{passive:true});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const reveal=[...document.querySelectorAll('[data-reveal]')];reveal.forEach((el,i)=>{el.classList.add('will-reveal');el.style.setProperty('--delay',Math.min((i%5)*65,260)+'ms')});
  if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -30px'});reveal.forEach(el=>io.observe(el))}else{reveal.forEach(el=>el.classList.add('is-visible'))}
  document.querySelectorAll('[data-mail-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}const d=new FormData(form);const fields=[...d.entries()].map(([k,v])=>`${k}: ${v}`).join('\n');const subject=encodeURIComponent('Bengal Global export inquiry');const bodyText=encodeURIComponent('Hello Bengal Global,\n\nI would like to discuss an export requirement.\n\n'+fields+'\n\nThank you.');const status=form.querySelector('.form-status');if(status){status.textContent='Your email app should open with the inquiry details. If it does not, email hello@bengalglobal.com directly.';status.classList.add('show')}setTimeout(()=>{window.location.href=`mailto:hello@bengalglobal.com?subject=${subject}&body=${bodyText}`},120)}));
})();