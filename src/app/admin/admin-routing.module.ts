import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductFormComponent} from './componentes/product-form/product-form.component';
import {NavComponent} from './componentes/nav/nav.component';
import {ProductsListComponent} from './componentes/products-list/products-list.component';
import {FormProductComponent} from './componentes/form-product/form-product.component';
import {ProductEditComponent} from './componentes/product-edit/product-edit.component';
const routes: Routes = [
 
  {
    path: '',
    component: NavComponent,
    children:[
      {
        path:'create',
        component:ProductFormComponent
      },
      {
        path:'products',
        component:ProductsListComponent
      },
      {
        path:'products/create',
        component:FormProductComponent
      },
      {
        path:'products/edit/:id',
        component:ProductEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
