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
      this.fetchProduc(id);
      //console.log(id);
      //this.product = this.productsService.getProduct(id); //lamo almetodo y lo que me retorno lo guardo
      //imprimo la respusta
      //console.log(this.product);
    });
  }

  fetchProduc(id:String){
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    })

  }

  createProduct(){
    const newProduct:Product = {
        id:'222',
        title:'nuevo desde angular bryan',
        image:'assets/images/pantalon.jpg',
        price: 5000,
        description: 'nuevo Producto bran'
    };
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });

  }

  updateProduct(){
    const updateProduct:Partial <Product> = { //indicao que es una parte de producto
      price: 9000,
      description: 'edicion bryan'
  };
    this.productsService.updateProduct('222',updateProduct).subscribe(product =>{
      console.log(product);
    });
  }

  
  deleteProduct(){
    this.productsService.deleteProduct('222').subscribe(rta =>{
      console.log(rta);
    });
  }




}
