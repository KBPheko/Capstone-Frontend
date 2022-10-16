import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-display-all-movies',
  templateUrl: './display-all-movies.component.html',
  styleUrls: ['./display-all-movies.component.css']
})
export class DisplayAllMoviesComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor( public ms:MovieService) { }

  ngOnInit(): void {
    this.loadAllMovies();
  }

  loadAllMovies(){
    this.ms.getAllMovieRecords().subscribe({
      next:(result:any)=>this.movies=result,
      error:(error:any)=>console.log(error),
      complete: ()=>console.log("completed")
    })
  }

}
