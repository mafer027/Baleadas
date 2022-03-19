import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AguacatePageRoutingModule } from './aguacate-routing.module';

import { AguacatePage } from './aguacate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AguacatePageRoutingModule
  ],
  declarations: [AguacatePage]
})
export class AguacatePageModule {}
