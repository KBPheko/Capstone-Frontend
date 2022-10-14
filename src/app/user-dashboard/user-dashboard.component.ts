import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userName:string ="";
  constructor( public _router: Router) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userInfo");

    if(obj != null){
      this.userName = obj;
    }

  }

  logout(){
    sessionStorage.removeItem("userInfo");
    this._router.navigate(["signin"])
  }
}
