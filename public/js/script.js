!function(){
  document.getElementById("yr").textContent=new Date().getFullYear();

  /* ── LOADER ── */
  window.addEventListener("load",function(){setTimeout(function(){document.getElementById("loader").classList.add("out")},1600)});

  /* ── NAV ── */
  function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});closeMenu()}
  window.go=go;
  var ham=document.getElementById("ham"),mob=document.getElementById("mob");
  function toggleMenu(){ham.classList.toggle("open");mob.classList.toggle("show")}
  function closeMenu(){ham.classList.remove("open");mob.classList.remove("show")}
  window.toggleMenu=toggleMenu;
  var nav=document.getElementById("nav");
  window.addEventListener("scroll",function(){nav.classList.toggle("scrolled",scrollY>50)},{passive:true});

  /* ── ACTIVE SECTION ── */
  var secs=["home","about","skills","projects","certifications","achievements","contact"];
  var allBtns=document.querySelectorAll("[data-s]");
  var secObs=new IntersectionObserver(function(e){e.forEach(function(en){
    if(en.isIntersecting){var id=en.target.id;allBtns.forEach(function(b){b.classList.toggle("active",b.getAttribute("data-s")===id)})}
  })},{rootMargin:"-35% 0px -60% 0px"});
  secs.forEach(function(s){var el=document.getElementById(s);if(el)secObs.observe(el)});

  /* ── THEME ── */
  var dk=localStorage.getItem("t")!=="light";
  document.documentElement.setAttribute("data-theme",dk?"dark":"light");
  var sun='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var moon='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function themeIcon(){var h=dk?sun:moon;document.getElementById("td").innerHTML=h;document.getElementById("tm").innerHTML=h}
  themeIcon();
  window.toggleTheme=function(){dk=!dk;document.documentElement.setAttribute("data-theme",dk?"dark":"light");localStorage.setItem("t",dk?"dark":"light");themeIcon()};

  /* ── SCROLL PROGRESS ── */
  var bar=document.getElementById("scroll-bar");
  window.addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.width=h>0?scrollY/h*100+"%":"0%"},{passive:true});

  /* ── BACK TOP ── */
  var btt=document.getElementById("btt");
  window.addEventListener("scroll",function(){btt.classList.toggle("show",scrollY>400)},{passive:true});

  /* ── SCROLL ANIM ── */
  var aObs=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting)en.target.classList.add("show")})},{threshold:.08});
  document.querySelectorAll(".anim").forEach(function(el){aObs.observe(el)});

  /* ── TYPING ── */
  var roles=["Computer Science Undergraduate","Front-End Developer","UI/UX Designer","Python Developer"],ri=0,ci=0,del=false;
  var typed=document.getElementById("typed");
  function tick(){
    var r=roles[ri];
    if(!del&&ci<=r.length){typed.textContent=r.substring(0,ci);if(ci===r.length){setTimeout(tick,2200);ci++;return}ci++;setTimeout(tick,75)}
    else if(del&&ci>=0){typed.textContent=r.substring(0,ci);ci--;if(ci<0){del=false;ri=(ri+1)%roles.length;ci=0;setTimeout(tick,350);return}setTimeout(tick,35)}
    else{del=true;setTimeout(tick,35)}
  }
  tick();

  /* ── PROJECT FILTER ── */
  var fbs=document.querySelectorAll(".filter-btn"),pcs=document.querySelectorAll(".project-card");
  fbs.forEach(function(b){b.addEventListener("click",function(){
    fbs.forEach(function(x){x.classList.remove("active")});b.classList.add("active");
    var f=b.getAttribute("data-f");
    pcs.forEach(function(c){var show=f==="All"||c.getAttribute("data-cat")===f;c.classList.toggle("hidden",!show);if(show){c.style.animation="none";c.offsetHeight;c.style.animation=""}})
  })});

  /* ── CONTACT FORM ── */
  window.sendForm=function(e){
    e.preventDefault();
    var btn=document.getElementById("cbtn"),msg=document.getElementById("cmsg");
    btn.textContent="✓ Sent!";msg.style.display="block";e.target.reset();
    setTimeout(function(){btn.textContent="Send Message";msg.style.display="none"},3500)
  };

  /* ── PARTICLES ── */
  var cv=document.getElementById("particles"),cx=cv.getContext("2d"),ps=[],mx=-999,my=-999,cols=["59,130,246","139,92,246","6,182,212"];
  function resize(){cv.width=innerWidth;cv.height=innerHeight;init()}
  function init(){var n=innerWidth<768?25:50;ps=[];for(var i=0;i<n;i++)ps.push({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.5+.8,o:Math.random()*.4+.15,c:cols[i%3]})}
  function draw(){cx.clearRect(0,0,cv.width,cv.height);for(var i=0;i<ps.length;i++){var p=ps[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=cv.width;if(p.x>cv.width)p.x=0;if(p.y<0)p.y=cv.height;if(p.y>cv.height)p.y=0;cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fillStyle="rgba("+p.c+","+p.o+")";cx.fill();for(var j=i+1;j<ps.length;j++){var q=ps[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.strokeStyle="rgba(59,130,246,"+(0.06*(1-d/120))+")";cx.lineWidth=.5;cx.stroke()}}}requestAnimationFrame(draw)}
  addEventListener("resize",resize);addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY});resize();draw();

  /* ── CURSOR GLOW ── */
  var glow=document.getElementById("cursor-glow");
  if(matchMedia("(pointer:fine)").matches){glow.style.display="block";addEventListener("mousemove",function(e){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"})}
}();
