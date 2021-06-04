// para que funcione el modulo necesita 
import { NgModule } from '@angular/core';
//importamos el modulo para ngfor ngif
import {CommonModule} from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
//traigo el modulo de ruteo 
import {HomeRountingModule} from './home-routing.module';
//importo shared
import {SharedModule} from './../shared/shared.module';
@NgModule({
    //metadata en este caso 
    declarations: [
        BannerComponent,
        HomeComponent,
    ], // componentes que tendra este modulo 
    imports: [
        CommonModule,
        SharedModule,
        HomeRountingModule
    ]
})
export class HomeModule{

}

    