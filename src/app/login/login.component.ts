import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
  })

  constructor( public ls: LoginServiceService) { }

  ngOnInit( ): void {
  }

  signIn(){
    let login = this.loginRef.value;
    this.ls.signIn(login).subscribe({
      next:(result) => {
        console.log(result);
      },
      error:(error:any) => console.log(error),
      complete: () =>  console.log("done")

    });
  }

}
