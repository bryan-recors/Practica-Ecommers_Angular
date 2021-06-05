import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';  
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component';
//IMPORTO EL GUARDIAN
import {AdminGuard} from './admin.guard';
const routes: Routes = [
  {
    //este componente generara el layout
    path: '',
    component: LayoutComponent, //seria como el padre
    children: [
      //las rutas que se basaran en el Layout
      {
        //ruta limpia dominio 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home', //direccion 
        //component: HomeComponent
        loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',  
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',  
        canActivate:[AdminGuard],
        component: ContactComponent
      },
    ] 
  },
  {
    path: 'demo',  
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
