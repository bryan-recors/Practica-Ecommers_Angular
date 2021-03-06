import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo un formulario reactivo
import {ReactiveFormsModule} from '@angular/forms'

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//importo material
import { MaterialModule} from './../material/material.module';

//importo routermodule para que funcionen las rutas
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent

  ],
  //que pueda exportar para ser usados por otros modulos 
  exports:[
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    //importo para que funcine rutas
    RouterModule,
    //material
    MaterialModule,
    //formularios reactivos
    ReactiveFormsModule
  ]
})
export class SharedModule { }



