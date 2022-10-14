import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string ="";

  loginRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
  })

  constructor( public ls: LoginServiceService, public _router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.signIn(login).subscribe({
      next:(result) => {
        console.log(result);
        if(result == "Admin Successfully Logged In"){
          this._router.navigate(["admin-dashboard"])
        } else if (result == "Logged In successfully"){
          this._router.navigate(["user-dashboard"]);
        } else{
          this.errorMsg=result;
        }
      },
      error:(error:any) => console.log(error),
      complete: () =>  console.log("done")

    });
  }

}
