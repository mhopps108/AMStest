export class Movie {

  ids: {
    trakt: string;
    slug: string;
    imdb: string;
    tmdb: string;
  }

  genres: string[];

  title: string;
  year: string;
  runtime: number;
  rating: number;
  certification: string;
  overview: string;
  released: string;
  trailer: string;


  constructor(data: any) {

    this.ids = data.movie.ids;
    this.genres = data.movie.genres;

    this.title = data.movie.title;
    this.year = data.movie.year;
    this.runtime = data.movie.runtime;
    this.rating = data.movie.rating;
    this.certification = data.movie.certification;
    this.overview = data.movie.overview;
    this.released = data.movie.released;
    this.trailer = data.movie.trailer;

    console.log(this);
  }


  printMovie() {
    return this.title + ' - ' + this.year + ' - ' +
      this.runtime + ' - ' + this.released + ' - ' + this.ids.tmdb;
  }

}
