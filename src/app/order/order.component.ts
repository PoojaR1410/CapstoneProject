import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:any = [];

  constructor(public restApi:ProductService,public cartService:CartService) { }

  ngOnInit() {
 this.loadOrder();
  }

loadOrder()
{
  return this.restApi.getOrder().subscribe((data: {}) => {
    this.orders = data;
  })
}

removeItem(item: any){
  this.cartService.removeCartItem(item);
}


  // deleteOrder(id: string) {
  //   if (window.confirm('Are you sure, you want to delete?')){
  //     this.restApi.deleteOrder(id).subscribe(data => {
  //       this.loadOrder()
  //     })
  //   }
  // }

  approveOrder(id: string) {
    
      this.restApi.deleteOrder(id).subscribe(data => {
        this.loadOrder()
        alert("Order is Approved!!!");
      })
    
  }


}
