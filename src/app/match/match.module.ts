import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchViewComponent } from './match-view/match-view.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    MatchViewComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    SharedModule
  ],
  exports:[
    MatchViewComponent
  ],



})
export class MatchModule { }
