import { Injectable } from '@angular/core';
import {Product} from '../../../product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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

  constructor() { }

  getAllProducts(){ //metodo que me devuelve todos los productos
    return this.products;
  }

  //metodo que busque un id
  getProduct(id:String){
    //funcion find que recibe una arrayfuncion que si coincide con el id con el item.id ese devuelve
    return this.products.find(item => id === item.id);
  }
  
}

