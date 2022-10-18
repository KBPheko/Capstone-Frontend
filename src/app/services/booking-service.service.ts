import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Booking } from '../booking';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  private baseUrl = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor( private http: HttpClient) { }

  // addBooking(book: any, movieid: number): Observable<any> {
  //   return this.httpClient
  //     .post<Booking>(
  //       this.url + '/booking/insert?showId=' + showId,
  //       JSON.stringify(book),
  //       this.httpOptions
  //     )
  //     .pipe(catchError(this.handleError));
  // }

  addBooking(book:any, movieid:number): Observable<any>{
    return this.http.post<Booking>(
      this.baseUrl + '/booking/bookmovie?mid=' + movieid,
      JSON.stringify(book),
      this.httpOptions
    ).pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }

  getBookingById(id:any): Observable<Booking>{
    return this.http.get<Booking>(this.baseUrl + '/booking/viewBooking/' + id)
    .pipe(catchError(this.handleError));
  }

  getTotal(id:any): Observable<Booking>{
    return this.http
    .get<Booking>(this.baseUrl + '/booking/cost/' + id)
    .pipe(catchError(this.handleError));
  }
}
