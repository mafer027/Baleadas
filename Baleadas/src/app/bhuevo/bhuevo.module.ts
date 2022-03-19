import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhuevoPageRoutingModule } from './bhuevo-routing.module';

import { BhuevoPage } from './bhuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhuevoPageRoutingModule
  ],
  declarations: [BhuevoPage]
})
export class BhuevoPageModule {}
