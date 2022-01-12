import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { BedsComponent } from './beds/beds.component';
import { EditComponent } from './edit/edit.component';
import { OrderComponent } from './order/order.component';
import { FrmComponent } from './frm/frm.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'store',component:StoreComponent},
  {path:'cart',component:CartComponent},
  {path:'bed',component:BedsComponent},
  {path:'bed',component:BedsComponent},
  {path:'order',component:OrderComponent},
  {path:'admindash',component:AdmindashboardComponent},
  {path:'frm',component:FrmComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'product',component:ProductsComponent},
  {path:'product-crud',component:ProductCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
