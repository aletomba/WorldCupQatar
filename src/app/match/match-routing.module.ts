import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchViewComponent } from './match-view/match-view.component';

const routes: Routes = [
  {
    path:'',
    children:[{
      path:'match-view',component:MatchViewComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
