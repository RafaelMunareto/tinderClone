import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TroublePage } from './trouble.page';

const routes: Routes = [
  {
    path: '',
    component: TroublePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TroublePageRoutingModule {}
