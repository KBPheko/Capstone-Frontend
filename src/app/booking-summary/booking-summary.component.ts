import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Movie } from '../movie';
import { BookingServiceService } from '../services/booking-service.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  booking: Booking;
  bookingId: number;
  movie: Movie;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private bookService: BookingServiceService
  ) { }

  ngOnInit(): void {
    this.bookingId = this.activatedRouter.snapshot.params['bookingId'];
    this.bookService.getTotal(this.bookingId);
    this.bookService.getBookingById(this.bookingId).subscribe((data: Booking) => {
      this.booking = data;
      console.log(this.booking.bid);
    })
  }

}
