import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuevovPageRoutingModule } from './huevov-routing.module';

import { HuevovPage } from './huevov.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuevovPageRoutingModule
  ],
  declarations: [HuevovPage]
})
export class HuevovPageModule {}
