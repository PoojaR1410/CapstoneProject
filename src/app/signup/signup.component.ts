import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupform: FormGroup;

  constructor(private formbuilder:FormBuilder,private http: HttpClient,private router: Router) { 

    this.signupform = this.formbuilder.group({
      fname:[''],
      lname:[''],
      mobile:[''],
      email:[''],
      password:[''],
      address:['']
       }
       )
  }

  ngOnInit(): void {
    
  }
  signup()
  {
    this.http.post("http://localhost:3000/signup",this.signupform.value)
    .subscribe(res=>{
alert("Signup Successfull");
this.signupform.reset();
this.router.navigate(['/login'])},
err=>{
  alert("Something Went Wrong")
})


    
  }
}
