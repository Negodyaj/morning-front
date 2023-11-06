type MovieData = {
  id: number;
  name: string;
  imdb: number;
  tags: string[];
  description: string;
  watchLink: string;
  detailsLink: string;
  imageUrl: string;
};

type NumberOrString = number | string;

let aa: NumberOrString = 42;
aa = "hi there";

let bb: (number | string)[] = [1, "2", 3];

function test(value1: number, value2: number) {
  return value1 / value2;
}

test(4, 2);

const movies: MovieData[] = [
  {
    id: 1,
    name: "Batman Begins",
    imdb: 8.2,
    tags: ["action", "adventure"],
    description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
    watchLink: "https://google.com",
    detailsLink: "https://ya.ru",
    imageUrl: "./images/movie1.png",
  },
  {
    id: 2,
    name: "The Dark Knight",
    imdb: 9.0,
    tags: ["action", "crime", "drama"],
    description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
    watchLink: "https://google.com",
    detailsLink: "https://ya.ru",
    imageUrl: "./images/movie2.png",
  },
  {
    id: 3,
    name: "The Dark Knight Rises",
    imdb: 8.4,
    tags: ["action", "adventure"],
    description: `Directing one of the most anticipated films of the year, Christopher Nolan returns to Gotham to complete his...`,
    watchLink: "https://google.com",
    detailsLink: "https://ya.ru",
    imageUrl: "./images/movie3.png",
  },
  {
    id: 4,
    name: "Batman Begins 2",
    imdb: 8.2,
    tags: ["action", "adventure"],
    description: `Batman Begins explores the origins of the Batman legend and the Dark Knight's emergence as a force...`,
    watchLink: "https://google.com",
    detailsLink: "https://ya.ru",
    imageUrl: "./images/movie1.png",
  },
  {
    id: 5,
    name: "The Dark Knight 2",
    imdb: 9.0,
    tags: ["action", "crime", "drama"],
    description: `Christian Bale and director Christopher Nolan reunite following their blockbuster success with...`,
    watchLink: "https://google.com",
    detailsLink: "https://ya.ru",
    imageUrl: "./images/movie2.png",
  },
];

console.log(movies);

function renderMovieCard(movie) {
  return `
    <div class="movie-card">
      <img src="${movie.imageUrl}" alt="">
      <div class="card-content">
        <div class="movie-details">
          <div class="tags">${movie.tags.join(", ")}</div>
          <h2>${movie.name}</h2>
          <div class="rating">IMDB:<span>${movie.imdb}</span></div>
          <div class="movie-about">${movie.description}</div>
        </div>
        <div class="movie-links">
          <a href="${movie.watchLink}" class="link-button small">Watch</a>
          <a href="${
            movie.detailsLink
          }" class="link-button small with-border">Details</a>
        </div>
      </div>
    </div>
  `;
}

const moviesContainer = document.querySelector(".movie-cards");
let a = true;
// 0 == false; 1 == true; 2 == true
// '' == false; '1' == true; ' ' == true
// null == false; not null == true
if (moviesContainer) {
  for (const movie of movies) {
    const newCard = document.createElement("div");
    moviesContainer.appendChild(newCard);
    newCard.outerHTML = renderMovieCard(movie);
  }
}

// DOM = document object model
const nav = document.querySelector<HTMLElement>("header nav");
const burgerButton = document.querySelector("header button");

function handleBurgerMenuClick(event) {
  if (!nav || !burgerButton) return;

  nav.classList.toggle("opened");
  burgerButton.classList.add("hidden");
  event.stopPropagation();
  console.log("button clicked");
}

function closeBurgerMenu() {
  if (!nav || !burgerButton) return;

  if (nav.classList.contains("opened")) {
    nav.classList.remove("opened");
    burgerButton.classList.remove("hidden");
    console.log("class removed");
  }
  console.log("body clicked");
}

document.body.onclick = closeBurgerMenu;

const firstMovie = moviesContainer?.children[0];
let currentLeftMargin = 0;
let counter = 0;
const gap = 32;
const cardSize = firstMovie?.clientWidth;
const leftMarginValue = `-${gap + (cardSize ?? 0)}px`;

const maxCounter = document.body.clientWidth <= 850 ? 4 : 2;

console.log(firstMovie);

function showPrevSlide() {
  if (!moviesContainer) return;

  const lastCard = moviesContainer.children[
    moviesContainer.children.length - 1
  ] as HTMLElement;
  lastCard.style.marginLeft = leftMarginValue;
  moviesContainer.prepend(lastCard);
  setTimeout(() => {
    lastCard.style.marginLeft = "0px";
  }, 0);
}

function showNextSlide() {
  if (!moviesContainer) return;

  const firstCard = moviesContainer.children[0] as HTMLElement;
  firstCard.style.marginLeft = leftMarginValue;
  setTimeout(() => {
    moviesContainer.appendChild(firstCard);
    firstCard.style.marginLeft = "0px";
  }, 500);
}
