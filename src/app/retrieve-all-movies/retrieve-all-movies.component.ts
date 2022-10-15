import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-retrieve-all-movies',
  templateUrl: './retrieve-all-movies.component.html',
  styleUrls: ['./retrieve-all-movies.component.css']
})
export class RetrieveAllMoviesComponent implements OnInit {

  movies: Array<Movie> = [];
  constructor( public ms: MovieService) { }

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

  deleteMovieRecord(mid:any){
    console.log(mid);
    this.ms.deleteMovieRecord(mid).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
        console.log("record deleted successfully")
        this.loadAllMovies()
      }
    })
  }

  editMovieRecord(mv:any){
    console.log(mv);
  }

}
