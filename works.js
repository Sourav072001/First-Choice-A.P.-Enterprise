const galleryItems = (window.SITE_CONFIG?.gallery || [
  { title:'Living room concept', category:'Interior design', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Warm dining space', category:'Interior design', image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85' },
  { title:'Sculpted bedroom', category:'Interior design', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Layered lounge', category:'Interior design', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Soft neutral palette', category:'Interior design', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Minimal living corner', category:'Interior design', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Modular kitchen layout', category:'Modular kitchen', image:'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85' },
  { title:'Handle-less cabinetry', category:'Modular kitchen', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Kitchen island detail', category:'Modular kitchen', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Stone and wood kitchen', category:'Modular kitchen', image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85' },
  { title:'Smart storage wall', category:'Modular kitchen', image:'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85' },
  { title:'Contemporary pantry', category:'Modular kitchen', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Custom dining table', category:'Furniture works', image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
  { title:'Wardrobe joinery', category:'Furniture works', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Statement chair set', category:'Furniture works', image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85' },
  { title:'Built-in storage', category:'Furniture works', image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
  { title:'Oak furniture detail', category:'Furniture works', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Cabinetry and seating', category:'Furniture works', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Accent wall finish', category:'Paint works', image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
  { title:'Textured wall colour', category:'Paint works', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Warm neutral shade', category:'Paint works', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Designer paint palette', category:'Paint works', image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85' },
  { title:'Soft colour layering', category:'Paint works', image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
  { title:'Decorative wall treatment', category:'Paint works', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Wood flooring detail', category:'Flooring', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' },
  { title:'Stone tile finish', category:'Flooring', image:'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85' },
  { title:'Marble effect floor', category:'Flooring', image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85' },
  { title:'Patterned tile work', category:'Flooring', image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85' },
  { title:'Polished concrete', category:'Flooring', image:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
  { title:'Warm hardwood floor', category:'Flooring', image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85' }
]).map(item => ({ ...item, image: item.image }));
const savedProjects=JSON.parse(localStorage.getItem('atelierProjects')||'null');
if(Array.isArray(savedProjects)&&savedProjects.length){galleryItems.splice(0,galleryItems.length,...savedProjects.flatMap(project=>(project.images||[project.image]).map((image,index)=>({title:project.name,category:project.type,image}))))}
const track=document.getElementById('gallery-track');
const dotsWrap=document.getElementById('gallery-dots');
const thumbsWrap=document.getElementById('gallery-thumbs');
const prevBtn=document.getElementById('gallery-prev');
const nextBtn=document.getElementById('gallery-next');
let currentIndex=0;
let autoPlay;
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));

function renderGallery(){
  if(!track||!dotsWrap||!thumbsWrap) return;
  track.innerHTML=galleryItems.map((item,index)=>`<article class="gallery-slide ${index===currentIndex?'active':''}" aria-label="${escapeHtml(item.title)}"><img src="${item.image}" alt="${escapeHtml(item.alt || item.title)}" loading="eager"><div class="gallery-copy"><p>${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3></div></article>`).join('');
  dotsWrap.innerHTML=galleryItems.map((_,index)=>`<button class="gallery-dot ${index===currentIndex?'active':''}" type="button" aria-label="Show image ${index+1}" data-index="${index}"></button>`).join('');
  thumbsWrap.innerHTML=galleryItems.map((item,index)=>`<button class="gallery-thumb ${index===currentIndex?'active':''}" type="button" data-index="${index}" aria-label="Open image ${index+1}"><img src="${item.image}" alt="${escapeHtml(item.alt || item.title)}"></button>`).join('');

  dotsWrap.querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => setCurrentSlide(Number(dot.dataset.index)));
  });

  thumbsWrap.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => setCurrentSlide(Number(thumb.dataset.index)));
  });
}

function setCurrentSlide(index){
  currentIndex=(index+galleryItems.length)%galleryItems.length;
  renderGallery();
  restartAutoPlay();
}

function showNextSlide(){
  setCurrentSlide(currentIndex + 1);
}

function showPrevSlide(){
  setCurrentSlide(currentIndex - 1);
}

function restartAutoPlay(){
  clearInterval(autoPlay);
  autoPlay=setInterval(showNextSlide, 5000);
}

prevBtn?.addEventListener('click', showPrevSlide);
nextBtn?.addEventListener('click', showNextSlide);

renderGallery();
restartAutoPlay();

document.querySelector('#year').textContent = new Date().getFullYear();
const worksSettings = JSON.parse(localStorage.getItem('atelierSettings') || 'null') || { whatsapp: '919830012345' };
document.querySelector('#whatsapp-link').href = `https://wa.me/${worksSettings.whatsapp.replace(/\D/g, '')}`;
setupNavigation();
setupBackTop();

function setupNavigation(){
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(!toggle||!nav) return;
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
  document.querySelectorAll('.nav-dropdown > a').forEach(link => {
    link.addEventListener('click', event => {
      if(window.innerWidth <= 760){
        event.preventDefault();
        link.parentElement.classList.toggle('submenu-open');
      }
    });
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}

function setupBackTop(){
  const backTop=document.querySelector('#back-top');
  if(!backTop) return;
  addEventListener('scroll', () => backTop.classList.toggle('visible', scrollY > 500));
  backTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
}

