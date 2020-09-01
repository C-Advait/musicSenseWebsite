import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalysisComponent } from './analysis.component';
import { DisplayComponentComponent } from './display-component/display-component.component';

@NgModule({
  declarations: [
    AnalysisComponent,
    DisplayComponentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    AnalysisComponent
  ]
})

export class AnalysisModule { }
