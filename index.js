import{a as l,S as m,i as a}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="52321579-5376ad108ad3c10360339b813";l.defaults.baseURL=h;function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.get("",{params:r})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function L(o){const r=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:p,comments:d,downloads:f})=>`
      <li>
        <a href="${e}">
          <img src="${n}" alt="${t}"  />

          <ul>
            <li>
              <p>Likes</p>
              <p>${s}</p>
            </li>
            <li>
              <p>Views</p>
              <p>${p}</p>
            </li>
            <li>
              <p>Comments</p>
              <p>${d}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p>${f}</p>
            </li>
          </ul>
        </a>
      </li>
      `).join("");console.log(r),c.innerHTML=r,new m(".gallery a").refresh()}function b(){c.innerHTML=""}function S(){u.classList.remove("hidden")}function E(){u.classList.add("hidden")}const w=document.querySelector("form");w.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){a.error({message:"Search input can`t be empty"}),o.target.reset();return}S(),b(),y(r).then(i=>{if(i.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");L(i.data.hits)}).catch(i=>{a.error({message:i.message})}).finally(()=>{E(),o.target.reset()})}
//# sourceMappingURL=index.js.map
