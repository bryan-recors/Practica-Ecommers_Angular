import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './componentes/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './../material/material.module';
import { NavComponent } from './componentes/nav/nav.component';
import {ProductsListComponent} from './componentes/products-list/products-list.component';
import { FormProductComponent } from './componentes/form-product/form-product.component';
import { ProductEditComponent } from './componentes/product-edit/product-edit.component'


@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductsListComponent, FormProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
