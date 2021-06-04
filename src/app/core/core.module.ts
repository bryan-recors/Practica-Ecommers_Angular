import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo servicio
import {ProductsService} from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //para servicios
  providers:[
    ProductsService
  ]
})
export class CoreModule { }
