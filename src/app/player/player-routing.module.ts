import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerModule } from './player.module';

const routes: Routes = [{

  path:'player-view',component:PlayerViewComponent
},
{
  path:'player-create',component:PlayerCreateComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
