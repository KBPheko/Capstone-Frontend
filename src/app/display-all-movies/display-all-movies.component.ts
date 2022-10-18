import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  flag: boolean = false;
  flag2: boolean = true;
  keyword: any;
  filteredResults: Array<Movie> = [];

  constructor( public ms:MovieService, public router:Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAllMovies();
  }

  searchRef = new FormGroup({
    keyword: new FormControl()
  })

  search(){
    //this.flag = true;
    //this.keyword =
    //this.keyword = '';
    console.log(this.keyword)
    this.ms.searchMoviesByKeyword(this.keyword).subscribe({
      next:(result:any[]) => {
        this.flag2 = false;
        this.flag = true;
        this.filteredResults = result;
        console.log(result);

      },
      error:(error:any)=>console.log(error),
      complete: () => console.log("Search complete")
    })

  }

  // search(){
  //   this.flag = true;
  //   this.flag2 = false;
  //   this.ms.searchMoviesByKeyword(this.keyword).subscribe( (data:Movie[]) =>{
  //     this.filteredResults = data;
  //     console.log(data);
  //   })

  // }

  clear() {
    this.flag = false;
    this.flag2 = true;
    this.keyword = '';
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

  searchByName(){
    this.movies = this.searchArray.filter((data) =>
         data.movietitle == this.movietitle
    );
  }

}
