import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': 'f841af6ab2f42fe79d3e7ca8dc4cb04fe9fb8d1818174024c668787d08f5cdef'
  })
};


@Injectable({ providedIn: 'root' })
export class MovieService {

  private moviesUrl = 'https://api.trakt.tv/movies/collected/weekly?extended=full&languages=en&countries=us';

  constructor( private http: HttpClient ) { }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl, httpOptions)
      .pipe(
        tap(m => console.log('fetched movies' + m.forEach(movie => console.log(movie))))// ,
        // catchError(this.handleError('getHeroes', []))
      );
  }

  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  // }

  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //
  //       // access the body directly, which is typed as `Config`.
  //       this.config = { ... resp.body };
  //     });
  // }


}
