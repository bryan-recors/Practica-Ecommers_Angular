import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';  
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
        loadChildren:() => import('./product/product.module').then(m => m.ProductModule)
      },

      {
        path: 'contact',  
        canActivate:[AdminGuard],
        loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)
      },
    ] 
  },
  {
    path: 'demo',  
    loadChildren:() => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: '**',
    loadChildren:() => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
