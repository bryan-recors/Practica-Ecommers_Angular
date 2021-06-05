import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
//importo la clase para el servicio
import {ProductsService} from '../../../core/services/products/products.service';
//importo el producto model 
import {Product} from '../../model/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id = params.id;
      //console.log(id);
       this.product = this.productsService.getProduct(id); //lamo almetodo y lo que me retorno lo guardo
      //imprimo la respusta
      console.log(this.product);
    });
  }

}
