// Create an object to store the following information about your favorite movie

let favoriteMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const showFavoriteMovie = function (movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes' + '. Stars ' + movie.stars.join(', '));
}
showFavoriteMovie(favoriteMovie);

