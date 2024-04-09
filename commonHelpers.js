import{A as p,S as y,a as f,i as b}from"./assets/vendor-7e083a22.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const g=document.querySelector(".mobile-open-btn");let u=document.querySelector(".mobile-menu");g.addEventListener("click",()=>{u.classList.add("is-open")});const L=document.querySelector(".mobile-close-btn");L.addEventListener("click",()=>{u.classList.remove("is-open")});const E=document.querySelectorAll(".menu-list-item"),k=document.querySelector(".toggle-menu");k.addEventListener("click",()=>{document.querySelector(".menu-list").classList.toggle("active")});E.forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".menu-list").classList.remove("active")})});const S=document.querySelector(".mobile-order-btn");S.addEventListener("click",()=>{u.classList.remove("is-open")});const h=document.querySelectorAll(".mobile-menu-list-link");for(const e of h)e.addEventListener("click",()=>{u.classList.remove("is-open")});const w=new p(".about-accordion",{onOpen:e=>{e.querySelector(".svg-btn").classList.toggle("clicked")},onclose:e=>{e.querySelector(".svg-btn").classList.toggle("clicked")},showMultiple:!0});w.open(0);const q=document.querySelector(".about-skills-list"),C=["Global Ecology","Landskape Ecology","Ecosystem Ecology","Community Ecology","Population Ecology","Organismal Ecologys","Biotic components"];function B(){C.forEach(r=>{const o=document.createElement("li");o.className="about-skills-item swiper-slide",o.innerHTML=`<p class="about-skills-text">${r}</p>`,q.appendChild(o)});const e=new y(".about-scroll",{breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-btn-left"},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},on:{click:function(){this.isStart&&this.slideTo(0)}}});let t=null;const s=document.querySelector(".about-skills-text:first-child");s.style.backgroundColor="var(--btn-hover)",e.on("slideChange",function(){s.style.backgroundColor="",t&&(t.style.backgroundColor="");const r=e.slides[e.activeIndex];r.style.backgroundColor="var(--btn-hover)",r.style.borderRadius="50%",t=r,e.on("click",function(){t&&(t.style.backgroundColor="",t.style.borderRadius="",t=null)})}),document.addEventListener("keydown",function(r){r.key==="ArrowLeft"?e.slidePrev():r.key==="ArrowRight"&&e.slideNext()})}B();document.addEventListener("DOMContentLoaded",function(){const e={active:{stroke:"var(--span-clr)",border:"rgba(250, 250, 250, 0.5)"},inactive:{stroke:"var(--span-clr)",border:"rgba(250, 250, 250, 0.2)"}},t=document.querySelector(".swiper-but-prev"),s=document.querySelector(".swiper-but-next");t.disabled=!0,s.disabled=!1;const r=new y(".projects-container-swiper",{navigation:{nextEl:".swiper-but-next",prevEl:".swiper-but-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:30,speed:800,nested:!0,effect:"cube",cubeEffect:{}});o(),r.on("slideChange",function(){o(),r.isBeginning?(t.style.borderColor=e.inactive.border,t.querySelector(".content-icon").style.stroke=e.inactive.stroke,s.style.borderColor=e.active.border,s.querySelector(".content-icon").style.stroke=e.active.stroke):r.isEnd?(t.style.borderColor=e.active.border,t.querySelector(".content-icon").style.stroke=e.active.stroke,s.style.borderColor=e.inactive.border,s.querySelector(".content-icon").style.stroke=e.inactive.stroke):(t.style.borderColor=e.active.border,t.querySelector(".content-icon").style.stroke=e.active.stroke,s.style.borderColor=e.active.border,s.querySelector(".content-icon").style.stroke=e.active.stroke)});function o(){r.isBeginning?(i(t),l(s)):r.isEnd?(i(t),i(s)):(l(t),l(s))}function i(a){a.disabled=!0,a.style.borderColor=e.inactive.border,a.querySelector(".content-icon").style.stroke=e.inactive.stroke}function l(a){a.disabled=!1,a.style.borderColor=e.active.border,a.querySelector(".content-icon").style.stroke=e.active.stroke}});new p(".faq-accordion",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});function M(){document.querySelectorAll(".covers-container").forEach(t=>{const s=document.querySelectorAll(".covers-item"),r=t.getBoundingClientRect(),o=window.innerHeight,i=Math.min(r.bottom,o)-Math.max(r.top,0);s.forEach(l=>{i/o>=.2?window.getComputedStyle(l).getPropertyValue("animation-play-state")==="paused"&&(l.style.animationPlayState="running"):window.getComputedStyle(l).getPropertyValue("animation-play-state")==="running"&&(l.style.animationPlayState="paused")})})}window.addEventListener("scroll",M);const n=document.querySelector('input[name="email"]'),c=document.querySelector('input[name="comments"]');let m=0,v=0;function P(){n.checkValidity()?(n.parentElement.classList.remove("invalid"),n.parentElement.classList.add("succes")):(n.parentElement.classList.add("invalid"),n.parentElement.classList.remove("succes")),n.value===""&&(n.parentElement.classList.remove("invalid"),n.parentElement.classList.remove("succes"))}n.addEventListener("focus",()=>{n.parentElement.classList.add("active"),m=1});n.addEventListener("blur",()=>{n.parentElement.classList.remove("active"),m=0});n.addEventListener("mouseenter",()=>n.parentElement.classList.add("active"));n.addEventListener("mouseleave",()=>{m===0&&n.parentElement.classList.remove("active")});c.addEventListener("focus",()=>{c.parentElement.classList.add("active"),v=1});c.addEventListener("blur",()=>{c.parentElement.classList.remove("active"),v=0});c.addEventListener("mouseenter",()=>c.parentElement.classList.add("active"));c.addEventListener("mouseleave",()=>{v===0&&c.parentElement.classList.remove("active")});n.addEventListener("input",P);const x=document.querySelector(".footer-form-button"),d=document.querySelector(".modal-backdrop");x.addEventListener("click",A);async function A(e){e.preventDefault();const t={email:n.value,comment:c.value};n.checkValidity()?(f.post("https://portfolio-js.b.goit.study/api-docs",t).then(s=>{d.classList.remove("visually-hidden")}).catch(s=>{alert(s)}),n.value="",c.value="",n.parentElement.classList.remove("succes")):b.error({title:"Error",message:"Invalid data, try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"})}const O=document.querySelector(".modal-button");O.addEventListener("click",()=>d.classList.add("visually-hidden"));d.addEventListener("click",()=>{event.target===d&&d.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.add("visually-hidden")});
//# sourceMappingURL=commonHelpers.js.map