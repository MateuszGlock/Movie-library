function e(e){let t=document.querySelector(".cards-list");t.innerHTML=null,e.forEach(e=>{let i=document.createElement("div"),a=e.movieId,l=e.movieTitle,n=e.urlW154,c=e.urlW185,r=e.urlW342,s=e.urlW500,d=e.urlW780,o=e.urlOriginal,u=e.movieGenreAndYear;console.log(e.genreAndYear),i.classList.add("card"),i.innerHTML=`
        <li>
      <div class="card" data-id="${a}">
        <div class="card-img">
        <img class="card-img"
        alt="${l}"
        src="${n}"
        srcset="
          ${c} 185w,
          ${r} 342w,
          ${s} 500w,
          ${d} 780w,
           ${o} 2000w
        "
        sizes="(min-width: 1157px) 780px, (min-width: 768px) 500px, (max-width: 767px) 342px, 100vw"
      />
        </div>
        <div class="card-text">
          <p class="card-text-title">${l}</p>
          <p class="card-text-genre">${u}</p>
        </div>
      </div>
    </li>
        `,t.appendChild(i)})}window.onload=function(){let i=localStorage.getItem("watchedMovies");e(i?JSON.parse(i):[]),t.style.display="none"};const t=document.querySelector("div#pagination-new"),i=document.querySelector("button.watch-btn"),a=document.querySelector("button.queue-btn");i.addEventListener("click",function(){i.classList.add("library-btn-active"),a.classList.remove("library-btn-active");let l=localStorage.getItem("watchedMovies");e(l?JSON.parse(l):[]),t.style.display="none"}),a.addEventListener("click",function(){a.classList.add("library-btn-active"),i.classList.remove("library-btn-active");let l=localStorage.getItem("movieQueue");e(l?JSON.parse(l):[]),t.style.display="none"});
//# sourceMappingURL=my-library.9ace3003.js.map
