import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  //movies: Movie;
  movie: Movie;
  mid: any;
  msg:string = '';

  constructor( private ar: ActivatedRoute, private router: Router, private ms: MovieService) { }


  ngOnInit(): void {
    console.log("start");
    this.mid = this.ar.snapshot.paramMap.get('id');
    console.log(this.ms.findMovieInfo(this.mid));
    this.ms.findMovieInfo(this.mid).subscribe(result => {
      this.movie = result;
      console.log(result);

    }, (error) => { console.log(error); })
    console.log("finish");
  }

}
