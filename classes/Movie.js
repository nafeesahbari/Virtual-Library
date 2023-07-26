// import the Media class:
const { Media } = require("./Media");

// create your Movie class:
class Movie extends Media {
    constructor(director, duration, rating) {
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    };
    summary() {
        return `Title: ${Media.title}, Director: ${this.director}, 
        Year: ${Media.year}, Genre: ${Media.genre}, 
        Duration: ${this.duration}, Rating: ${this.rating}`;
    };

    static longestMovie(movies) {
        const longestMovie = movies[0];
        for (const movie of movies) {
          if (movie.duration > longestMovie.duration) {
            longestMovie = movie;
          }
        }
        return longestMovie;
    };

}

// don't change below
module.exports = { Movie }
