import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerViewComponent } from './player-view/player-view.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerCreateComponent } from './player-create/player-create.component';


@NgModule({
  declarations: [
    PlayerViewComponent,
    PlayerCreateComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule
  ],
  exports:[
    PlayerViewComponent,
    PlayerCreateComponent

  ]
})
export class PlayerModule { }
