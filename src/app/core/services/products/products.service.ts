import { Injectable } from '@angular/core';
import {Product} from '../../../product/model/product.model';
//**** consumir servicio*************
import {environment} from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

//**** fin consumir  servicio*************
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
/*  
  products: Product[] = [
    {
      id:'1',
      image:'assets/images/camiseta.jpg',
      title:'camiseta',
      price:8000,
      description:'camiseta pequeña'
    },
    {
      id:'2',
      image:'assets/images/pantalon.jpg',
      title:'pantalon',
      price:30,
      description:'pantalon pequeña'
    },
    {
      id:'3',
      image:'assets/images/saco.jpg',
      title:'saco',
      price:4000,
      description:'saco pequeña'
    },

  ];
*/
  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){ //metodo que me devuelve todos los productos
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  //metodo que busque un id
  getProduct(id:String){
    //funcion find que recibe una arrayfuncion que si coincide con el id con el item.id ese devuelve
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products`,product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`,changes);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
  
}

