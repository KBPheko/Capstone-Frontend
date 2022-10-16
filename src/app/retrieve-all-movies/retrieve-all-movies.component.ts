import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-retrieve-all-movies',
  templateUrl: './retrieve-all-movies.component.html',
  styleUrls: ['./retrieve-all-movies.component.css']
})
export class RetrieveAllMoviesComponent implements OnInit {

  mid:number = 0;
  imageurl:string = '';
  movietitle:string = '';
  quantity:number = 0;
  description:string = '';
  showtime:string = '';
  ticketprice:number = 0;
  genre:string = '';
  language:string = '';


  flag:boolean=false;
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
    this.flag=true;
    console.log(mv);
    this.mid = mv.mid;
    this.imageurl = mv.imageurl;
    this.description = mv.description;
    this.quantity = mv.quantity;
    this.movietitle = mv.movietitle;
    this.showtime = mv.showtime;
    this.ticketprice = mv.ticketprice;
    this.genre = mv.genre;
    this.language = mv.language;

  }

  updateMovieInfo(){
    let mv = {mid:this.mid,
    imageurl: this.imageurl,
    quantity:this.quantity,
    ticketprice:this.ticketprice,
    description:this.description,
    movietitle:this.movietitle,
    showtime: this.showtime,
    language: this.language,
    genre: this.genre}
      this.ms.updateMovieRecords(mv).subscribe({
        next:(result:any)=>console.log(result),
        error:(error:any)=>console.log(error),
        complete:()=>{
          console.log("record updated successfully")
          this.loadAllMovies();
          this.flag=false;
        }
      })
  }

  onNoClick(){
    this.flag=false;
  }

}
