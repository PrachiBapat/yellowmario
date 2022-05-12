import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // url = "http://localhost:4600/productsapi";
  urlsp = "http://localhost:4600/productssp";

  constructor(private eshttp:HttpClient) { }

  //will return the observable
  getAllProducts(){
    return this.eshttp.get<product[]>(this.urlsp);
  }

}
