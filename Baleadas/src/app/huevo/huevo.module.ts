import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuevoPageRoutingModule } from './huevo-routing.module';

import { HuevoPage } from './huevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuevoPageRoutingModule
  ],
  declarations: [HuevoPage]
})
export class HuevoPageModule {}
