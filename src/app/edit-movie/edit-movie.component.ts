import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  mid:number = 0;
  imageurl:string = '';
  movietitle:string = '';
  quantity:number = 0;
  description:string = '';
  showtime:string = '';
  ticketprice:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  updateMovieInfo(){

  }

}
