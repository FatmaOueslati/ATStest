import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getProducts(numberPages: number){
    return this.httpClient.get('http://internal.ats-digital.com:30000/products?size='+numberPages);
  }
  
  getProduct(id: string){
    return this.httpClient.get('http://internal.ats-digital.com:30000/products/'+id);
  }
}
