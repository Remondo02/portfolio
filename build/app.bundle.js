!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){var e=window.navigator.userAgent;/MSIE|Trident/.test(e)&&document.documentElement.classList.add("ie"),document.documentElement.classList.add("reveal-loaded"),window.addEventListener("DOMContentLoaded",(function(){t(),n(),o(),a(),r()}));var t=function(){(new TimelineMax).from("#logo",2,{opacity:0,scale:.5,ease:Power2.easeOut}).staggerFrom(".home__details__job",1,{opacity:0,y:-40,ease:Power2.easeInOut},.5,"+=1").staggerFrom(".icons a",1,{opacity:0,y:-40,ease:Power2.easeInOut},.2,"-=0.5").staggerFrom("nav",1,{opacity:0,y:"-100%"},{opacity:100,y:"0%"},"-=0.5")},n=function(){var e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".about"}).setClassToggle(".about__details__heading","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:"blockquote"}).setClassToggle(".about__details__content","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".percent50",triggerHook:.4}).setClassToggle(".about__details__contact","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".about__details__contact",triggerHook:.2}).setClassToggle(".portfolio__gallery","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".contact"}).setClassToggle(".contact__info","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".contact__info"}).setClassToggle(".form-content","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".contact__info"}).setClassToggle(".form-header","fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".form-message",triggerHook:.6}).setClassToggle('input[type="submit"]',"fade-in").addTo(e),new ScrollMagic.Scene({triggerElement:".form-message",triggerHook:.6}).setClassToggle(".social","fade-in").addTo(e)},o=function(){var e=document.querySelector(".burger"),t=document.querySelector(".nav-links"),n=Array.from(document.querySelectorAll(".nav-links li"));e.addEventListener("click",(function(){t.classList.toggle("nav-active"),n.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.5,"s")})),e.classList.toggle("toggle")}))},a=function(){new SmoothScroll('.navbar, .about__details__contact, a[href*="#"]',{speed:800});var e=function(e){return document.querySelector(e)};e(".burger").addEventListener("click",(function(){e(".burger").classList.toggle("active")}))},r=function(){var e=document.createElement("div");e.id="lightbox",document.body.appendChild(e);var t=document.createElement("div");t.id="lbContainer",e.appendChild(t),Array.from(document.querySelectorAll(".portfolio__gallery__container img")).forEach((function(n){var o=n.parentElement.parentElement.childNodes[3].firstElementChild,a=n.parentElement.parentElement.childNodes[3].childNodes[3],r=n.parentElement.parentElement.childNodes[3].childNodes[5],i=n.parentElement.parentElement.childNodes[3].childNodes[6].nextElementSibling;console.log(i),n.addEventListener("click",(function(l){e.classList.add("active"),t.classList.add("active");var c=document.createElement("img");for(c.src=n.src;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(c),t.appendChild(o),t.appendChild(a),t.appendChild(r),t.appendChild(i)})),i.addEventListener("click",(function(n){e.classList.remove("active"),t.classList.remove("active")}))})),e.addEventListener("click",(function(n){n.target==n.currentTarget&&(e.classList.remove("active"),t.classList.remove("active"))}))}}()}]);