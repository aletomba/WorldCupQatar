import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoccerteamViewComponent } from './soccerteam-view/soccerteam-view.component';

const routes: Routes = [{
  path:'soccerTeam-View',component:SoccerteamViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoccerteamRoutingModule { }
