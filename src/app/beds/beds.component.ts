import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
  
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
        if(a.name ==="Bed"){
          a.category ="bed"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:String){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


}