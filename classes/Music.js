// import the Media class:
const { Media } = require("./Media");

// create your Music class:
class Music extends Media {
    constructor(artist, length) {
        this.artist = artist;
        this.length = length;
    };

    summary(){
        return `Title: ${Media.title}, Artist: ${this.artist}, Year: ${Media.year}, 
        Genre: ${Media.genre}, Length: ${this.length}`
    };

    static shortestAlbum(albums) {
        const shortestAlbum = albums.reduce((acc, album) => {
          if (acc.length > album.length) {
            return album;
          } else {
            return acc;
          }
        }, null);
        return shortestAlbum;
    };
}

// don't change below
module.exports = { Music }

