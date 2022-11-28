const fetchMovie = (e) => {
  e.preventDefault();
  const input = document.querySelector("input#searchByID");
  const x = input.value;

  fetch(`http://localhost:3000/movies/${x}`)
    .then((resp) => resp.json())
    .then((json) => createMovie(json));
};
const createMovie = (json) => {
  //   const movieItems = document.getElementById("movieList");

  //   const movieItem = document.createElement("li");
  //   const movieTitle = document.createElement("h3");
  //   const movieId = document.createElement("div");
  //   movieId.innerText = `${json.id}`;
  //   movieItem.appendChild(movieId);
  //   movieTitle.innerText = `${json.title}`;
  //   movieItem.appendChild(movieTitle);
  //   movieItems.appendChild(movieItem);

  //   const summaryMovie = document.getElementById("movieDetails");

  const title = document.querySelector("section#movieDetails h4");
  const summary = document.querySelector("section#movieDetails p");

  title.innerText = json.title;
  summary.innerText = json.summary;
};

const init = () => {
  const inputFrom = document.querySelector("form");
  inputFrom.addEventListener("submit", fetchMovie);
};

document.addEventListener("DOMContentLoaded", init);
