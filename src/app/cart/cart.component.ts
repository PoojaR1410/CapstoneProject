import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  
  checkout()
  {
    this.http.post("http://localhost:3000/orders/",this.products)
    .subscribe(res=>{
alert("Your order is successfully placed!!! Keep shopping with us");


// this.router.navigate(['/order'])
this.emptycart();
},
err=>{
  alert("Something Went Wrong")
})
  }

}
