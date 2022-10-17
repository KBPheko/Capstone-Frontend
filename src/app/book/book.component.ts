import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookingForm!: FormGroup;
  errorMessage: string = '';
  movieid: any;
  bookingId: number = 0;
  movie: Movie;

  constructor( private fb: FormBuilder,
    private bookService: BookingServiceService,
    private router: Router,
    private ar: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.movieid = this.ar.snapshot.params['movieid'];
  //   console.log(this.movie.mid);
  //   this.bookingForm = this.fb.group({
  //     bookingDate: ['']
  //   });
  // }

  ngOnInit(): void {
    console.log("Booking page started");
    this.movieid = this.ar.snapshot.paramMap.get('id');
    console.log(this.movieid);
    //this.bookService.findBookingById(this.bid).subscribe( result => {
      
   // })
  }

  addBooking(){
    this.bookService.addBooking(this.bookingForm.value, this.movieid).subscribe(
      (res:any) => {
        console.log(res.bid);
        this.router.navigate(['booking-summary', res.bid]);
      },
      (error:any) => {
        this.errorMessage = error;
      }
    )
  }

  // addBooking(){
  //   this.bookService.addBooking().subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       this.router.navigate(['/']);
  //     },
  //     (error: any) => {
  //       this.errorMessage = error;
  //     }
  //   )
  // }

}
