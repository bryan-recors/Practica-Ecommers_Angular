import { Component, OnInit } from '@angular/core';
//importo un injector de dependencias
import {ActivatedRoute} from '@angular/router';
//importo la clase para el servicio
import {ProductsService} from '../../../core/services/products/products.service';
//importo el producto model 
import {Product} from '../../model/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts(); //lamo almetodo y lo que me retorno lo guardo
    console.log(this.products);
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }


}
