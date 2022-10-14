import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {

  createRef = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    mobilenumber: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
  })

  errorMsg: string = "";

  constructor( public lg:LoginServiceService) { }

  ngOnInit(): void {
  }

  createProfile(){
    let ll = this.createRef.value;
    console.log(ll);
    this.lg.createProfile(ll).subscribe({
      next: (result:any) => this.errorMsg=result,
      error:(error:any)=> this.errorMsg=error,
      complete:()=>console.log("completed")
    })
  }

}
