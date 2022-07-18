import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatchRoutingModule } from './match-routing.module';
import { MatchViewComponent } from './match-view/match-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchService } from './services/match-service';
import { SoccerteamService } from '../soccerTeam/services/soccerteam.service';


@NgModule({
  declarations: [
    MatchViewComponent,
    MatchCreateComponent,

  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    SharedModule,
    ],

  exports:[
    MatchViewComponent,
    MatchCreateComponent,
  ],

  providers:[
    MatchService,
    SoccerteamService,
  ]



})
export class MatchModule { }
