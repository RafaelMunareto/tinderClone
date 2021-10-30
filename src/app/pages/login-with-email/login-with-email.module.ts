import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginWithEmailPageRoutingModule } from './login-with-email-routing.module';

import { LoginWithEmailPage } from './login-with-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginWithEmailPageRoutingModule
  ],
  declarations: [LoginWithEmailPage]
})
export class LoginWithEmailPageModule {}
