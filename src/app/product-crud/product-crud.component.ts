import { Component, Input, OnInit } from '@angular/core';
import { employee } from '../employee';
import { ProductService } from '../product.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
 
details!: FormGroup;
  restApi!: ProductService;
 

  constructor(private formbuilder:FormBuilder,private router: Router, private http:HttpClient,) { 

    this.details = this.formbuilder.group({
      name:[''],
      uploadPhoto:[''],
      mrp:[''],
      productDesc:[''],
      dp:['']
       }
       )
      
  }

  ngOnInit() { }

  addEmployee()
  {


    this.http.post("http://localhost:3000/products",this.details.value)
    .subscribe(res=>{
alert("Product Added Successfully");

this.router.navigate(['/admin'])},
err=>{
  alert("Something Went Wrong")
})

  

}}
