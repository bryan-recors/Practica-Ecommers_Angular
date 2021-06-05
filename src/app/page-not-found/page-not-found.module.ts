import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {PageNotFoundRountingModule} from './page-not-found-routing.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRountingModule
  ]
})
export class PageNotFoundModule { }
