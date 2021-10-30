import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TroublePageRoutingModule } from './trouble-routing.module';

import { TroublePage } from './trouble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TroublePageRoutingModule
  ],
  declarations: [TroublePage]
})
export class TroublePageModule {}
