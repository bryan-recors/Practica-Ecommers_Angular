import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';
//importo el layout
import { LayoutComponent } from './layout/layout.component'; //importo el componente creado de product
//importo shared
import {SharedModule} from './shared/shared.module';
//importo el core 
import {CoreModule} from './core/core.module';
//de material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//*********servicio consumir ***
import {HttpClientModule} from '@angular/common/http';
//********* fin servicio consumir ***
//firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
//variables de ambiente firebase 
import {environment} from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent, //en el array de declaration agregamos el componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    //*********servicio consumir ***
    HttpClientModule,
    //********* fin servicio consumir ***
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    //modulo para autenticacion 
    AngularFireAuthModule,
    //modulo para storage
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
