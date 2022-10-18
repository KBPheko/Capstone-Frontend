import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieRef = new FormGroup({
    movietitle: new FormControl(),
    imageurl:new FormControl(),
    ticketprice: new FormControl(),
    quantity: new FormControl(),
    language: new FormControl(),
    description: new FormControl(),
    genre: new FormControl(),
    showtime: new FormControl()
  });

  msg: string = "";

  constructor( public mv: MovieService, public router: Router ) { }

  ngOnInit(): void {
  }

  storeMovieRecord(){
    let movie = this.movieRef.value;
    this.mv.storeMovieRecord(movie).subscribe({
      next: (result:any) => this.msg=result,
      error:(error:any)=> {
        this.msg=error.message;
        alert(error.message);

      },
      complete:()=>{
        this.router.navigate(['/add-movie']);
        console.log("completed");
        this.movieRef.reset();

      }
    })
  }

}
