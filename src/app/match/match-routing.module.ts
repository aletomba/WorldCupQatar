import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchResultComponent } from './match-result/match-result.component';
import { MatchViewComponent } from './match-view/match-view.component';
import { MatchSixteenComponent } from './sixteenView/match-sixteen/match-sixteen.component';

const routes: Routes = [
  {
    path:'match-view',component:MatchViewComponent

  },
  {
    path:'match-create',component:MatchCreateComponent
  },
  {
    path:'match-result',component:MatchResultComponent
  },
  {
    path:'match-sixteen',component:MatchSixteenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
