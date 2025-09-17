import{a as p,S as E,i as u}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const q="https://pixabay.com/api/",P="52321579-5376ad108ad3c10360339b813";p.defaults.baseURL=q;async function m(o,e,s){const n={key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s};return(await p.get("",{params:n})).data}const $=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=new E(".gallery a"),g=document.querySelector(".load-more-btn");function L(o){return o.map(({webformatURL:e,largeImageURL:s,tags:n,likes:t,views:r,comments:i,downloads:w})=>`
      <li>
        <a href="${s}">
          <img src="${e}" alt="${n}"  />

          <ul>
            <li>
              <p>Likes</p>
              <p>${t}</p>
            </li>
            <li>
              <p>Views</p>
              <p>${r}</p>
            </li>
            <li>
              <p>Comments</p>
              <p>${i}</p>
            </li>
            <li>
              <p>Downloads</p>
              <p>${w}</p>
            </li>
          </ul>
        </a>
      </li>
      `).join("")}function v(){$.innerHTML=""}function b(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}function M(){g.classList.remove("hidden")}function f(){g.classList.add("hidden")}let a=1;const c=15;let l=null;const B=document.querySelector("form"),H=document.querySelector(".load-more-btn"),S=document.querySelector(".gallery");B.addEventListener("submit",O);H.addEventListener("click",T);async function O(o){if(o.preventDefault(),a=1,f(),b(),v(),l=o.currentTarget.elements["search-text"].value.trim(),l===""){u.error({message:"Search input can`t be empty"}),setTimeout(()=>{d()},500),o.target.reset();return}try{const e=await m(l,a,c);if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");S.innerHTML=L(e.hits),y.refresh(),e.totalHits>c?M():f()}catch(e){u.error({message:e.message})}finally{d(),o.target.reset()}}async function T(o){a+=1,b();try{const e=await m(l,a,c);S.insertAdjacentHTML("beforeend",L(e.hits)),y.refresh();const{height:s}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"}),Math.ceil(e.totalHits/c)===a&&(f(),u.success({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.log(e)}finally{d()}}
//# sourceMappingURL=index.js.map
