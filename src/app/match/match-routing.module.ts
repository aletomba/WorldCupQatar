import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchViewComponent } from './match-view/match-view.component';

const routes: Routes = [
  {
    path:'match-view',component:MatchViewComponent

  },
  {
    path:'match-create',component:MatchCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
