import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatchRoutingModule } from './match-routing.module';
import { MatchViewComponent } from './match-view/match-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchService } from './services/match-service';
import { SoccerteamService } from '../soccerTeam/services/soccerteam.service';
import { ShareService } from '../services/share.service';
import { MatchResultComponent } from './match-result/match-result.component';
import { MatchSixteenComponent } from './sixteenView/match-sixteen/match-sixteen.component';



@NgModule({
  declarations: [
    MatchViewComponent,
    MatchCreateComponent,
    MatchResultComponent,
    MatchSixteenComponent,


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
    ShareService
  ]



})
export class MatchModule { }
