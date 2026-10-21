import { createIcons, Truck, CreditCard, Heart, Instagram, Facebook, Youtube, Search, UserRound, ShoppingCart, Menu, ArrowLeft, ArrowRight, Feather, ShieldCheck, Droplets, Leaf, Package, Layers, Flower2, FlaskConical, UsersRound, CalendarDays, Star, ChevronLeft, ChevronRight, Mail, X } from 'lucide';
const icons = {Truck, CreditCard, Heart, Instagram, Facebook, Youtube, Search, UserRound, ShoppingCart, Menu, ArrowLeft, ArrowRight, Feather, ShieldCheck, Droplets, Leaf, Package, Layers, Flower2, FlaskConical, UsersRound, CalendarDays, Star, ChevronLeft, ChevronRight, Mail, X};
const icon = name => `<i data-lucide="${name}"></i>`;
const products = [
['حفاضات للأطفال','نعومة، أمان وراحة تدوم.','diapers.jpg','package'],
['مناديل مبللة','تنظيف لطيف في كل وقت.',null,'layers'],
['منتجات العناية','لبشرة نظيفة ومحمية.',null,'droplets'],
['مستلزمات الأطفال','لمزيد من الراحة والعناية.',null,'flower-2']
];
document.querySelector('#product-grid').innerHTML = products.map(([title,desc,image,glyph],i)=>`<div class="reveal-wrap" data-reveal="product" style="--delay:${i*100}ms"><article class="product-card"><div class="product-image">${image?`<img src="/assets/products/${image}" alt="عبوة حفاضات Yes الأصلية" loading="lazy">`:`<div class="asset-placeholder">${icon(glyph)}<span>صورة المنتج قريباً</span></div>`}</div><h3>${title}</h3><p>${desc}</p><button class="button" data-product="${i}">تسوق الآن ${icon('shopping-cart')}</button></article></div>`).join('');
const articles = [
['كيف تختارين مقاس الحفاض المناسب لطفلك؟','النوم','15 سبتمبر 2026','اختاري المقاس بناءً على وزن طفلك ودليل المقاسات الموجود على العبوة، مع التأكد من راحته حول الخصر والساقين.'],
['روتين العناية اليومي ببشرة الطفل','العناية','10 سبتمبر 2026','لحظات العناية اليومية هي أيضاً لحظات قرب وحنان. اكتشفي روتيناً بسيطاً يناسب احتياجات عائلتك.'],
['5 نصائح لليالٍ أكثر هدوءاً لطفلك ولك أيضاً','نصائح','5 سبتمبر 2026','اصنعي أجواء هادئة قبل النوم، وحافظي على طقوس مريحة ومتكررة تناسب طفلك.']
];
document.querySelector('#article-grid').innerHTML=articles.map(([title,tag,date],i)=>`<div data-reveal="article" style="--delay:${i*130}ms"><article class="article-card"><div class="article-image"><img src="/assets/images/hero-baby.webp" alt="طفل في بطانية ناعمة" loading="lazy" style="object-position:${70-i*15}% center"><span>${tag}</span></div><div class="article-copy"><h3>${title}</h3><div class="article-meta"><span>${icon('calendar-days')}${date}</span><button class="text-link" data-article="${i}">اقرأ المزيد ${icon('arrow-left')}</button></div></div></article></div>`).join('');
const reviews=[['منتجات رائعة وجودة عالية. أنصح بها لكل الأمهات.','أم سارة','مراكش'],['منذ أن استخدمنا Yes، أصبح نوم طفلنا أكثر راحة. شكراً لكم.','أم يوسف','الرباط'],['أفضل حفاضات ناعمة ومريحة ولا تسبب أي تهيج لبشرة طفلي.','أم مريم','الدار البيضاء']];
let reviewPage=0;
function renderReviews(){ const focusedPage=document.activeElement?.closest('.dots [data-page]')?.dataset.page; document.querySelector('.review-grid').innerHTML=reviews.map((_,i)=>{const [quote,name,city]=reviews[(i+reviewPage)%3];return `<article class="review-card" style="--delay:${i*75}ms"><div class="stars" aria-label="5 من 5">${Array.from({length:5},()=>icon('star')).join('')}</div><blockquote>”${quote}“</blockquote><div class="review-author"><strong>${name}</strong><span>${city}</span></div></article>`}).join('');document.querySelector('.dots').innerHTML=reviews.map((_,i)=>`<button class="${i===reviewPage?'selected':''}" aria-label="صفحة ${i+1}" aria-pressed="${i===reviewPage}" data-page="${i}"></button>`).join('');createIcons({icons,attrs:{'aria-hidden':'true',focusable:'false'}});if(focusedPage!==undefined)document.querySelector(`.dots [data-page="${focusedPage}"]`)?.focus();}
renderReviews();
document.querySelector('.previous').onclick=()=>{reviewPage=(reviewPage+2)%3;renderReviews()};
document.querySelector('.next').onclick=()=>{reviewPage=(reviewPage+1)%3;renderReviews()};
document.querySelector('.dots').onclick=e=>{const b=e.target.closest('[data-page]');if(b){reviewPage=Number(b.dataset.page);renderReviews()}};
createIcons({icons,attrs:{'aria-hidden':'true',focusable:'false'}});
// Progressive enhancement: content stays visible if JavaScript is unavailable.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const revealElements=[...document.querySelectorAll('[data-reveal]')];
let observer;
function configureMotion(){observer?.disconnect();if(reducedMotion.matches||!('IntersectionObserver' in window)){revealElements.forEach(el=>{el.classList.remove('motion-ready');el.classList.add('is-visible')});return}observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:0.08});revealElements.forEach(el=>{if(!el.classList.contains('is-visible')){el.classList.add('motion-ready');observer.observe(el)}})}
configureMotion();reducedMotion.addEventListener('change',configureMotion);
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
const searchToggle=document.querySelector('#search-toggle'),searchForm=document.querySelector('#search-form');
const searchInput=document.querySelector('#search');
function closeMenu(restoreFocus=false){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','فتح القائمة');if(restoreFocus)menu.focus()}
const desktopNavigation=window.matchMedia('(min-width:1024px)');
desktopNavigation.addEventListener('change',event=>{if(event.matches){const menuHadFocus=document.activeElement===menu;closeMenu();if(menuHadFocus)nav.querySelector('a')?.focus({preventScroll:true})}});
function closeSearch(restoreFocus=false){searchForm.hidden=true;searchToggle.setAttribute('aria-expanded','false');if(restoreFocus)searchToggle.focus()}
menu.onclick=()=>{const open=menu.getAttribute('aria-expanded')!=='true';if(open)closeSearch();menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة');nav.classList.toggle('open',open)};
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
searchToggle.onclick=()=>{const open=searchForm.hidden;if(open)closeMenu();searchForm.hidden=!open;searchToggle.setAttribute('aria-expanded',String(open));if(open)searchInput.focus()};
function resetProducts(){document.querySelectorAll('.reveal-wrap').forEach(card=>card.hidden=false);searchInput.value='';document.querySelector('#search-status').textContent='';const status=document.querySelector('#product-status');status.hidden=true;status.replaceChildren();closeSearch()}
document.addEventListener('click',e=>{if(e.target.closest('a[href="#product-grid"],a[href="#products"],[data-reset-products]')){resetProducts();if(e.target.closest('[data-reset-products]')){document.querySelector('#products').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});document.querySelector('.products .text-link').focus({preventScroll:true})}}});
searchForm.onsubmit=e=>{e.preventDefault();const term=searchInput.value.trim();const cards=[...document.querySelectorAll('.reveal-wrap')];let count=0;cards.forEach((card,i)=>{card.hidden=!!term&&!products[i].slice(0,2).join(' ').includes(term);if(!card.hidden)count++});const message=count===1?'منتج واحد':count?`${count} منتجات`:'لا توجد نتائج. جربي كلمة أخرى.';document.querySelector('#search-status').textContent=message;const status=document.querySelector('#product-status');status.hidden=false;status.textContent=message;if(!count){const reset=document.createElement('button');reset.type='button';reset.className='text-link';reset.dataset.resetProducts='';reset.textContent='عرض جميع المنتجات';status.append(' ',reset)}document.querySelector('#products').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'})};
// Anchor targets account for an expanded search form in the sticky header.
const header=document.querySelector('header');function updateHeaderOffset(){document.documentElement.style.setProperty('--sticky-header-offset',`${header.offsetHeight+16}px`)}
updateHeaderOffset();if('ResizeObserver' in window)new ResizeObserver(updateHeaderOffset).observe(header);else window.addEventListener('resize',updateHeaderOffset);
const dialog=document.querySelector('#info-dialog');let lastFocus;
function showInfo(title,body){lastFocus=document.activeElement;document.querySelector('#dialog-title').textContent=title;document.querySelector('#dialog-body').textContent=body;dialog.showModal()}
document.addEventListener('click',e=>{const product=e.target.closest('[data-product]'),article=e.target.closest('[data-article]'),info=e.target.closest('[data-info]');if(product){const p=products[Number(product.dataset.product)];showInfo(p[0],`${p[1]} المتجر قيد التحضير. الطلب والدفع غير متاحين في هذا النموذج.`)}if(article){const a=articles[Number(article.dataset.article)];showInfo(a[0],a[3])}if(info)showInfo('Yes Baby Comfort',info.dataset.info);if(e.target.closest('.close-dialog'))dialog.close()});
dialog.addEventListener('close',()=>lastFocus?.focus());
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.open){const menuOpen=menu.getAttribute('aria-expanded')==='true';const searchOpen=!searchForm.hidden;closeMenu(menuOpen);closeSearch(searchOpen)}});
document.querySelector('#newsletter-form').onsubmit=e=>{e.preventDefault();document.querySelector('.form-status').textContent='شكراً لاهتمامك! الاشتراك تجريبي، لم يُرسل بريدك الإلكتروني.'};
const sections=[...document.querySelectorAll('main section[id]')];
function markActiveSection(id){if(![...nav.querySelectorAll('a')].some(link=>link.hash===`#${id}`))return;nav.querySelectorAll('a').forEach(link=>{const active=link.hash===`#${id}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}
if('IntersectionObserver' in window){
 const activeObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)markActiveSection(entry.target.id)}),{rootMargin:'-15% 0px -65% 0px'});sections.forEach(section=>activeObserver.observe(section));
 // The final section may never reach the top observation band on tall screens.
 const contactObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)markActiveSection('contact')}),{threshold:.5});contactObserver.observe(document.querySelector('#contact'));
}
