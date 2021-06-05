import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';
import {DemoRountingModule} from './demo-routing.component';
//importo shared
import {SharedModule} from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRountingModule,
    FormsModule
  ]
})
export class DemoModule { }
