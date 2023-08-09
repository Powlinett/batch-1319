// import Mustache from "mustachejs";
// import { createApp } from 'vue';

// Uncomment one code block at a time

const results = document.querySelector('#results');
const template = document.querySelector('#movieCardTemplate');

fetch("http://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {

      // WITHOUT TEMPLATE
      // const movieCard = `
      //   <div class='col-3'>
      //     <div class="card">
      //       <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
      //       <div class="card-body">
      //         <h6 class="card-title">${movie.Title}</h6>
      //         <p class="card-text">${movie.Year}</p>
      //         <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
      //       </div>
      //     </div>
      //   </div>
      // `;

      // results.insertAdjacentHTML('beforeend', movieCard);


      // WITH NATIVE TEMPLATE
      // const clone = template.content.cloneNode(true);

      // clone.querySelector('img').src = movie.Poster;
      // clone.querySelector('img').alt = movie.Title;
      // clone.querySelector('h6').textContent = movie.Title;
      // clone.querySelector('p').textContent = movie.Year;
      // clone.querySelector('a').href = `https://www.imdb.com/title/${movie.imdbID}`;

      // results.appendChild(clone);
      

      // WITH MUSTACHEJS + TEMPLATE
      // const output = Mustache.render(template.innerHTML, movie);
      // results.insertAdjacentHTML('beforeend', output);
    });


    // WITH MUSTACHEJS (with iteration inside template)
    // const movies = data.Search;
    // const output = Mustache.render(template.innerHTML, { movieCards: movies });
    // results.insertAdjacentHTML('beforeend', output);
  });


// WITH VUEJS FRAMEWORK

// createApp({
//   data() {
//     return {
//       message: 'hello batch 1319',
//     }
//   }
// }).mount('#results');
