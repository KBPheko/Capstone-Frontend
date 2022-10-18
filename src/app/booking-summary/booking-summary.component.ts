import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Movie } from '../movie';
import { BookingServiceService } from '../services/booking-service.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  booking: Booking;
  bid: any;
  movie: Movie;
  errMsg: string;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private bookService: BookingServiceService,
    private movieService: MovieService
  ) { }

  // ngOnInit(): void {
  //   console.log("start");
  //   this.bookingId = this.activatedRouter.snapshot.params['id'];
  //   console.log(this.bookingId);
  //   console.log("next")
  //   this.bookService.getTotal(this.bookingId);
  //   console.log(this.bookService.getTotal(this.bookingId));
  //   console.log("total done")
  //   this.bookService.getBookingById(this.bookingId).subscribe((data: Booking) => {
  //     this.booking = data;
  //     console.log(this.booking.bid);
  //   })
  // }

  ngOnInit(): void {
    this.bid = this.activatedRouter.snapshot.paramMap.get('id');
    console.log("booking ID: "+this.bid);
    this.bookService.getBookingById(this.bid).subscribe((data: Booking) => {
      this.booking = data;
      console.log(data);
    }, (error:any) => {
      this.errMsg = error;
      console.log(error);
    })
  }

}
