"use strict";const cardsRestaraunts=document.querySelectorAll(".card");$(document).ready(()=>{sessionStorage.clear()});const getInfo=t=>{let e=[];for(let n of t.children)for(let t of n.children)(t.classList.contains("heading")||t.classList.contains("info")||t.classList.contains("rating"))&&e.push(t.textContent);return{name:e[0],rating:e[1],startPrice:e[2],text:e[3]}};for(let t of cardsRestaraunts)t.addEventListener("click",(function(){const t=getInfo(this.lastElementChild);sessionStorage.setItem(t.name,JSON.stringify(t))}));(new WOW).init();
//# sourceMappingURL=script-min.js.map