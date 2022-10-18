import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { BookingServiceService } from '../services/booking-service.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookingForm: FormGroup;
  errorMessage: string;
  bid:any;
  movieid: any;
  bookingId: number;
  quantity:number;
  movie: Movie;

  constructor( private fb: FormBuilder,
    private bookService: BookingServiceService,
    private movieServe: MovieService,
    private router: Router,
    private ar: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Booking page started");
    //this.movieid = this.ar.snapshot.params['mid'];
    this.movieid = this.ar.snapshot.paramMap.get('id');
    console.log(this.movieid);
    this.movieServe.findMovieInfo(this.movieid).subscribe((data: Movie) => {
      this.movie = data;
      console.log(data);  //double check
    }),
    (error:any) => {
      this.errorMessage = error;
      console.log(error);
    };

    this.bookingForm = this.fb.group({
      bookingdate: ['', Validators.required],
      tickets: ['', Validators.required],
      Customer: ['', Validators.required]
    });
  }

  addBooking(){
    console.log(this.bookingForm.value);
    this.bookService.addBooking(this.bookingForm.value, this.movieid).subscribe(
      (result: any) => {
        this.router.navigate(['booking-summary', this.movieid]);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    )
  }

}
