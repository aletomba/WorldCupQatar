import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoccerteamRoutingModule } from './soccerteam-routing.module';
import { SoccerteamViewComponent } from './soccerteam-view/soccerteam-view.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SoccerteamCreateComponent } from './soccerteam-create/soccerteam-create.component';


@NgModule({
  declarations: [
    SoccerteamViewComponent,
    SoccerteamCreateComponent
  ],
  imports: [
    CommonModule,
    SoccerteamRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    SoccerteamViewComponent
  ]
})
export class SoccerteamModule { }
