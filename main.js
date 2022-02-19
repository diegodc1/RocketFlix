const API_KEY = 'api_key=0c0cd73908db86277cdea9e6ec945b6d';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
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
    const movieImage = response.data.results[number].poster_path
    const imageUrl = IMG_URL + movieImage
    movieTitle.textContent = titleMovie;
    movieDescription.textContent = DescriptionMovie;
    document.getElementById("movieImage").src = imageUrl;
  })
  .catch(error => {console.log(error);
  })
}


// getMovie()

