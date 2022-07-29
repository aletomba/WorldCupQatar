import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path:'match',
    loadChildren:()=>import('./match/match.module').then(m=>m.MatchModule)
  },
  {
    path:'soccerTeam',
    loadChildren:()=>import('./soccerTeam/soccerteam.module').then(m=>m.SoccerteamModule)
  },
  {
    path:'player',
    loadChildren:()=>import('./player/player.module').then(m=>m.PlayerModule)
  },
  {
    path:'statistics',
    loadChildren:()=>import('./statistic/statistics/statistics.module').then(m=>m.StatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
