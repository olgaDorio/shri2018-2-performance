!function(e){function t(t){for(var o,n,l=t[0],c=t[1],a=0,s=[];a<l.length;a++)n=l[a],r[n]&&s.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(i&&i(t);s.length;)s.shift()()}var o={},r={2:0};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=l);var c,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.src=function(e){return n.p+""+({}[e]||e)+".js"}(e),c=function(t){i.onerror=i.onload=null,clearTimeout(s);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+l+")");c.type=n,c.request=l,o[1](c)}r[e]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,a.appendChild(i)}return Promise.all(t)},n.m=e,n.c=o,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var i=c;n(n.s=2)}({2:function(e,t,o){const r=document.querySelector(".devices__paginator .paginator__arrow_left"),n=document.querySelector(".devices__paginator .paginator__arrow_right"),l=document.querySelectorAll(".devices__panel").length,c=document.querySelector(".devices");let a=1;document.querySelector(".devices__paginator").classList.toggle("paginator_hide",l<7),n.addEventListener("click",function(){a+=1,r.classList.toggle("paginator__arrow_disabled",1===a),c.scroll({top:0,left:1366,behavior:"smooth"})}),r.addEventListener("click",function(){a>1&&(a-=1,r.classList.toggle("paginator__arrow_disabled",1===a),c.scroll({top:0,left:-1366,behavior:"smooth"}))});const i=document.querySelector(".scenarios__paginator .paginator__arrow_left"),s=document.querySelector(".scenarios__paginator .paginator__arrow_right"),u=document.querySelectorAll(".scenarios__panel").length,d=document.querySelectorAll(".scenarios__page").length,_=document.querySelector(".scenarios");let p=1;document.querySelector(".scenarios__paginator").classList.toggle("paginator_hide",u<=9),s.addEventListener("click",function(){p<d&&(p+=1,s.classList.toggle("paginator__arrow_disabled",p===d),i.classList.toggle("paginator__arrow_disabled",1===p),_.scroll({top:0,left:645,behavior:"smooth"}))}),i.addEventListener("click",function(){p>1&&(p-=1,s.classList.toggle("paginator__arrow_disabled",p===d),i.classList.toggle("paginator__arrow_disabled",1===p),_.scroll({top:0,left:-645,behavior:"smooth"}))});const g=document.querySelector(".filter__select-button"),f=document.querySelector(".filter__select-button .button__text"),m=document.querySelectorAll(".filter__select-item"),y=document.querySelector(".filter__select-popup");g.addEventListener("click",function(){y.classList.toggle("filter__select-popup_open")}),m.forEach(e=>{e.addEventListener("click",function(e){document.querySelector("#"+e.target.dataset.group).checked=!0,m.forEach(e=>e.classList.toggle("filter__select-item_checked",!1)),e.target.classList.toggle("filter__select-item_checked",!0),y.classList.toggle("filter__select-popup_open",!1),f.innerText=e.target.innerText})}),document.querySelector(".menu__icon").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("menu_open")}),document.querySelectorAll(".panel_temp, .panel_lamp, .panel_floor").forEach(e=>{e.addEventListener("click",()=>{const t=[".modal_temp",".modal_light",".modal_knob"],o=["panel_temp","panel_lamp"].findIndex(t=>e.classList.contains(t));v(t[o<0?t.length-1:o])})});let h=!1;const v=async function(e){document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden",h||o.e(4).then(o.t.bind(null,9,7)).then(e=>{e.default(),h=!0})}}});