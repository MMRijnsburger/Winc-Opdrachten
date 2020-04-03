const getMovieGenres = async () => {
    const data = await getData();
    console.log("Do something with this data:", data);
    const genres = data.genres;

    const list = document.getElementById('movie-genre-list');

    const listItems = genres.map(genre => {
        const li = document.createElement('li');

        // vult de data van de li in.... vanuit genre

        const id = genre.id;
        const name = genre.name;

        const text = `genre name: ${name}, id: ${id}`

        li.innerHTML = text;


        return li;
    });

    listItems.forEach(item => {
        list.appendChild(item);
    });
};

getMovieGenres();

const getMyTopMovie = async () => {
    const data = await getMovieTitel();
    console.log("movie titel hier:", data);
    const movieTitle = data.movie_results;

    const list = document.getElementById('my-top-movie');

    const listItems = movieTitle.map(movieTitle => {
        const li = document.createElement('li');

        const titel = movieTitle.title;
        li.innerHTML = titel;

        return li;

    });

    listItems.forEach(item => {
        list.appendChild(item);
    });

};

getMyTopMovie();

const getTopRatedMovies = async () => {
    const topRatedMovies = await getTopRated();
    const topRatedResults = topRatedMovies.results.splice(0, 10);

    const list = document.getElementById('top-rated-movies');

    const listItems = topRatedResults.map(movie => {
        const li = document.createElement('li');
        li.innerHTML = movie.title;
        return li;
    });

    listItems.forEach(item => {
        list.appendChild(item);
    });
};

getTopRatedMovies();