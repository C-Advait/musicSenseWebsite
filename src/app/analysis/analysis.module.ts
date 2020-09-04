import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalysisComponent } from './analysis.component';
import { DisplayComponent } from './display/display.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AnalysisComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [ 
    AnalysisComponent
  ]
})

export class AnalysisModule { }