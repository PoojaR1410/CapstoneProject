import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { employee } from '../employee';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
    employee: any = [];
  
    constructor(
      public restApi: ProductService
    ) { }
  
    ngOnInit() {
      this.loadEmployees()
    }
  
    // Get list
    loadEmployees() {
      return this.restApi.getEmployees().subscribe((data: {}) => {
        this.employee = data;
      })
    }
  
    // Delete 
    deleteEmployee(id: string) {
      if (window.confirm('Are you sure, you want to delete?')){
        this.restApi.deleteEmployee(id).subscribe(data => {
          this.loadEmployees()
        })
      }
    }  
  
  }
 

