import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  details:any;
  id:any;

  public loginform!:FormGroup;
   user: any;

  constructor(private formbuilder:FormBuilder, private http:HttpClient ,private router:Router,public restApi:ProductService) {
this.loginform = this.formbuilder.group(
{
email : [''],
password : ['']


}

)

   }

  ngOnInit(): void {
  }
  login()
  {

    if (this.loginform.value.email == ['admin@gmail.com'] && this.loginform.value.password  == ['123456']) {
    
      this.router.navigateByUrl('/admindash');
    }
else{


this.http.get<any>("http://localhost:3000/signup")
.subscribe(res=>
  
  {
   this.user = res.find((a:any)=>
{

  return a.email == this.loginform.value.email &&  a.password == this.loginform.value.password }
  )

 


if(this.user){

// this.router.navigate(['/signup'])


 
alert("Login Success") ;

 this.loginform.reset();

 this.router.navigate(['/home'])



  }

 
  else{

    alert("User Not Found");
  }
 }) 




  }
}

}
