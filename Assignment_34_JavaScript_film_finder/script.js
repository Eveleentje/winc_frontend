// const movieTitles = movies.map((movie) => movie.title);

// console.log(movieTitles);

const addMoviesToDOM = function (array) {
    const lezGo = document.getElementById("movielist");
    lezGo.replaceChildren();
    array.forEach((item) => {
        const lezGoLi = document.createElement("li");
        const lezGoA = document.createElement("a");
        const ImdbUrl = "https://www.imdb.com/title/";
        lezGoA.href = ImdbUrl + item.imdbID;
        lezGoA.innerHTML = "<img src=" + item.poster + ">";
        lezGo.appendChild(lezGoLi);
        lezGoLi.appendChild(lezGoA);
    });
};

document.addEventListener("DOMContentLoaded", addMoviesToDOM);

addMoviesToDOM(movies);

// filter movies 

const filterMovies = function (wordInMovie) {

    const filteredMovies = [];

    movies.forEach((movie) => {
        if (movie.title.includes(wordInMovie)) {
            filteredMovies.push(movie);
        };
    });

    addMoviesToDOM(filteredMovies);
};

// filter latest movies 

const filterLatestMovies = function () {

    const filteredLatestMovies = [];

    movies.forEach((movie) => {
        if (parseInt(movie.year) > 2014) {
            filteredLatestMovies.push(movie);
            console.log(filteredLatestMovies);
        };
    });

    addMoviesToDOM(filteredLatestMovies);
};

const handleOnChangeEvent = function (event) {
    const expr = event.target.value;
    switch (expr) {
        case "new":
            filterLatestMovies();
            break;
        case "avenger":
            filterMovies("Avengers");
            break;
        case "xmen":
            filterMovies("X-Men");
            break;
        case "princess":
            filterMovies("Princess");
            break;
        case "batman":
            filterMovies("Batman");
            break;
        default:
            console.log("noting to see here");
    }
};

const addEventListeners = function () {
    for (i = 0; i < document.getElementsByTagName('input').length; i++) {
        const movieFilter = document.getElementsByTagName('input')[i].name == 'movies';
        if (movieFilter) {
            document.getElementsByTagName('input')[i].addEventListener('change', handleOnChangeEvent);
        };

    };
};

addEventListeners();