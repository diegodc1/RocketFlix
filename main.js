const image = document.getElementById("movieImage");
const average = document.getElementById("averageNote")
const movieDate = document.getElementById("movieDate")
const infoDetails = document.getElementById("infoDetails") 
const subTitle = document.getElementById("subTitle")


const API_KEY = 'api_key=0c0cd73908db86277cdea9e6ec945b6d';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const language = '&language=pt-BR';
const API_MOVIE_URL = "/movie/popular?";
const API_SERIE_URL = "/tv/popular?";
const movie_url = BASE_URL + API_MOVIE_URL + API_KEY + language;
const series_url = BASE_URL + API_SERIE_URL + API_KEY + language

function getMovie() {
  const number = randomNumber()
  
  const data = axios.get(movie_url)
  .then(response => {

    const check = response.data.results
    const titleMovie = response.data.results[number].title;
    const descriptionMovie = response.data.results[number].overview
    const getImage = response.data.results[number].poster_path
    const imageUrl = IMG_URL + getImage
    const averageRating = response.data.results[number].vote_average
    const releaseData = response.data.results[number].release_date

    movieTitle.textContent = titleMovie;
    movieDescription.textContent = descriptionMovie;
    average.textContent = averageRating
    movieDate.textContent = releaseData.substr(0, 4)

    image.src = imageUrl;
    image.classList.remove("invisible");
    infoDetails.classList.remove("invisible");
    subTitle.classList.remove("invisible");

    })
  .catch(error => {console.log(error);
  })
}

function getSeries() {
  const number = randomNumber()
  
  const data = axios.get(series_url)
  .then(response => {

    const check = response.data.results
    const titleSerie = response.data.results[number].original_name;
    const description = response.data.results[number].overview
    const getImage = response.data.results[number].poster_path
    const imageUrl = IMG_URL + getImage
    const averageRating = response.data.results[number].vote_average
    const releaseData = response.data.results[number].first_air_date

    movieTitle.textContent = titleSerie;
    movieDescription.textContent = description;
    average.textContent = averageRating;
    movieDate.textContent = releaseData.substr(0, 4)

    image.src = imageUrl;
    image.classList.remove("invisible");
    infoDetails.classList.remove("invisible");
    subTitle.classList.remove("invisible");
    })
  .catch(error => {console.log(error);
  })
}

function randomNumber(){
  const number = Math.floor(Math.random() * (20 - 0 )) + 0;
  return number
}

