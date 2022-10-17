import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "http://localhost:8080/movie"
  constructor( public _http: HttpClient) { }

  storeMovieRecord(movie: any):Observable<string> {
    return this._http.post(this.baseUrl+"/store", movie,{responseType:"text"});
  }

  updateMovieRecords(movie:any):Observable<string> {
    return this._http.put(this.baseUrl+"/update", movie,{responseType:"text"});
  }

  getAllMovieRecords():Observable<Movie[]>{
    return this._http.get<Movie[]>(this.baseUrl+"/findMovies");
  }

  findMovieInfo(mid:any):Observable<Movie> {
    return this._http.get<Movie>(this.baseUrl+"/findMovie/"+mid);
  }

  deleteMovieRecord(mid:any):Observable<string> {
    return this._http.delete(this.baseUrl+"/deleteMovie/"+mid, {responseType:"text"});
  }
}
