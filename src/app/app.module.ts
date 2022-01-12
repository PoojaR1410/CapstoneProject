import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AdminComponent } from './admin/admin.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { HomefillerComponent } from './homefiller/homefiller.component';
import { ProductsComponent } from './products/products.component';
import { Banner2Component } from './banner2/banner2.component';
import { StoreComponent } from './store/store.component';
import { BedsComponent } from './beds/beds.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { SkillsComponent } from './skills/skills.component';
import { OrderComponent } from './order/order.component';
import { FrmComponent } from './frm/frm.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { ImgadminComponent } from './imgadmin/imgadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    NewsletterComponent,
    PartnersComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    AdminComponent,
    ProductCrudComponent,
    EditComponent,
    HomeComponent,
    ServiceComponent,
    HomefillerComponent,
    ProductsComponent,
    Banner2Component,
    StoreComponent,
    BedsComponent,
    CartComponent,
    FilterPipe,
    SkillsComponent,
    OrderComponent,
    FrmComponent,
    AdmindashboardComponent,
    AdminnavComponent,
    ImgadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
   
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
