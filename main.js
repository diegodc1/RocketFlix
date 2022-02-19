// import {
//   API_KEY, BASE_URL,
//   IMG_URL,
//   language,
// } from './api.js'

const API_KEY = 'api_key=0c0cd73908db86277cdea9e6ec945b6d';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';
const API_URL = "/discover/movie?sort_by=popularity.desc&";

const url = BASE_URL + API_URL + API_KEY 

function getMovie() {
  const number = Math.floor(Math.random() * (20 - 1 )) + 1
  const data = axios.get(url)
  .then(response => {
    const checkInfo = response.data.results
    const titleMovie = response.data.results[number].title;
    const DescriptionMovie = response.data.results[number].overview
    renderTitleMovie.textContent = JSON.stringify(titleMovie);
    renderDescription.textContent = JSON.stringify(DescriptionMovie)
  })
  .catch(error => {console.log(error);
  })
}


// getMovie()

