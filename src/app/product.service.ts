import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Order } from './order';
import { employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  // Define API
  apiURL = 'http://localhost:3000/products/';
url ='http://localhost:3000/orders/';
  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch  list
  getEmployees(): Observable<employee> {
    return this.http.get<employee>(this.apiURL )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getOrder(): Observable<Order> {
    return this.http.get<Order>(this.url )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch 
  getEmployee(id: string): Observable<employee> {
    return this.http.get<employee>(this.apiURL+ id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  



  // HttpClient API post() method => Create 
  createEmployee(employee: any): Observable<employee> {
    return this.http.post<employee>(this.apiURL + JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update
  updateEmployee(id: string, employee: any): Observable<employee> {
    return this.http.put<employee>(this.apiURL + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete
  deleteEmployee(id: string){
    return this.http.delete<employee>(this.apiURL+ id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteOrder(id: string){
    return this.http.delete<Order>(this.url+ id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}


