import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
