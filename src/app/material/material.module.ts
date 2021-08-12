import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importar botones 
import {MatButtonModule} from '@angular/material/button'; 
//importar tolbar
import { MatToolbarModule} from '@angular/material/toolbar';
//iconos
import {MatIconModule} from '@angular/material/icon';
//immportar badge
import {MatBadgeModule} from '@angular/material/badge';
//importar cards
import {MatCardModule} from '@angular/material/card';
//importar tables
import {MatTableModule} from '@angular/material/table';
//material para imputs del formulario
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
//material stepper 
import {MatStepperModule} from '@angular/material/stepper';

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatFormFieldModule,
    MatStepperModule

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatListModule,
    LayoutModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatStepperModule
  ]
})
export class MaterialModule { }

