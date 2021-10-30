import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginWithEmailPage } from './login-with-email.page';

const routes: Routes = [
  {
    path: '',
    component: LoginWithEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginWithEmailPageRoutingModule {}
