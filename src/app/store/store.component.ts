import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getEmployees()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
       
        Object.assign(a,{quantity:1,total:a.dp});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
    alert("Product Added To Cart");
  }
  filter(category:String){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.name == category || category==''){
        return a;
      }
    })
  }


}
