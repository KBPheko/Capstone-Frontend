import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-display-all-movies',
  templateUrl: './display-all-movies.component.html',
  styleUrls: ['./display-all-movies.component.css']
})
export class DisplayAllMoviesComponent implements OnInit {

  movies: Array<Movie> = [];
  movietitle: string;
  searchArray:any[];
  sortArray: any[];

  constructor( public ms:MovieService, public router:Router) { }

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

  bookNow(mid:any){
    console.log(mid);
    this.router.navigate(['/book/'+mid])
  }

  latestMovies(){
    this.movies = this.sortArray.sort((a, b) =>
        a.showtime > b.showtime ? -1 : 1
    );
  }

  allMovies(){
    this.ngOnInit();
  }

  searchByName(){
    this.movies = this.searchArray.filter((data) =>
         data.movietitle == this.movietitle
    );
  }

}
