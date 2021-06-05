import { RouterModule, Routes } from '@angular/router'; 
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//tambien se puede declarar como un componente o modulo en si mismo para ello importamos ngmodule
import { NgModule } from '@angular/core';
//constante para rutas
const routes: Routes = [
    {
        path:'',
        component: PageNotFoundComponent
    }
];
//decorador
@NgModule({
    //metadata en este caso las rutas 
    imports:[ //importaciones que son un array 
        RouterModule.forChild(routes), //utilice RouterModule con unas rutas en especifico 
    ],
    //para que el modulo sea  exportable
    exports: [
        RouterModule
    ]
})
//ahora creamos una clase 
export class PageNotFoundRountingModule {

}