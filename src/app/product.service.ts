import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  viewproduct(): Observable<Array<product>> {
    console.log("In viewProduct in service");
    return this.httpClient.get<Array<product>>('http://localhost:3000/products');
  }

  addProduct(product: product) {
    console.log("In addProduct in service");
    return this.httpClient.post<product>('http://localhost:3000/products', product);
  }

  deleteProduct(id): Observable<product> {
    console.log("In deleteProduct");
    return this.httpClient.delete<product>('http://localhost:3000/products/' + id);
  }

}
