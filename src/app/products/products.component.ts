import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  all_products:any;

  constructor(private router: Router, private ProductService: ProductService,private cartService : CartService) { }

 
  ngOnInit() {
    this.getAllProduct()


  }
  getAllProduct()
  {
    
    this.ProductService.getEmployees().subscribe(res=>{
      this.all_products = res;
     
      this.all_products.forEach((a:any) => {
       
        Object.assign(a,{quantity:1,total:a.dp});
      });
      console.log(this.all_products)
    });
  }

  // getAllProduct() {
  //   this.ProductService.getEmployees().subscribe(data => {
  //     this.all_products = data;
  //     // console.log("ALl Product", this.all_products);
  //   }, error => {
  //     console.log("My error", error);
  //   })
  // }

  addtocart(item: any){
    
    this.cartService.addtoCart(item);
    alert("Product Added To Cart")
  }


}


