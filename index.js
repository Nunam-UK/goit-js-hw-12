import{a as u,S as y,i as a}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",L="52321579-5376ad108ad3c10360339b813";u.defaults.baseURL=g;async function b(i,o,r){const s={key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r};return(await u.get("",{params:s})).data}const d=document.querySelector(".gallery"),p=document.querySelector(".loader"),S=new y(".gallery a"),f=document.querySelector(".load-more-btn");function w(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:m,downloads:h})=>`
      <li>
        <a href="${s}">
          <img src="${r}" alt="${e}"  />

          <ul>
            <li>
              <p>Likes</p>
              <p>${t}</p>
            </li>
            <li>
              <p>Views</p>
              <p>${n}</p>
            </li>
            <li>
              <p>Comments</p>
              <p>${m}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p>${h}</p>
            </li>
          </ul>
        </a>
      </li>
      `).join("");d.innerHTML=o,S.refresh()}function E(){d.innerHTML=""}function P(){p.classList.remove("hidden")}function c(){p.classList.add("hidden")}function $(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}let O=1;const l=15,x=document.querySelector("form");x.addEventListener("submit",M);function M(i){i.preventDefault(),P(),E();const o=i.currentTarget.elements["search-text"].value.trim();if(o===""){a.error({message:"Search input can`t be empty"}),setTimeout(()=>{c()},500),i.target.reset();return}b(o,O,l).then(r=>{if(r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");w(r.hits),r.totalHits>l?$():q()}).catch(r=>{a.error({message:r.message})}).finally(()=>{c(),i.target.reset()})}
//# sourceMappingURL=index.js.map
