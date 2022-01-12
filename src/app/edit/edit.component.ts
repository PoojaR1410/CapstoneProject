import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  
  data!: FormGroup;
  details!: {};

 

  constructor(
    public restApi: ProductService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formbuilder:FormBuilder
   
  ) { 
    
      this.data = this.formbuilder.group({
        name:[''],
        uploadPhoto:[''],
        mrp:[''],
        productDesc:[''],
        dp:['']
         }
         )
        
    
       
  }

  ngOnInit() { 
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.details= data;
    })
  }

  // Update data
  updateProduct() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateEmployee(this.id, this.data.value).subscribe(data => {
        this.router.navigate(['/admin'])
      })
    }
  }

}