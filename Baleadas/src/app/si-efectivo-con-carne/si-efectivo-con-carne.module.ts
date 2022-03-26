import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoConCarnePageRoutingModule } from './si-efectivo-con-carne-routing.module';

import { SiEfectivoConCarnePage } from './si-efectivo-con-carne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiEfectivoConCarnePageRoutingModule
  ],
  declarations: [SiEfectivoConCarnePage]
})
export class SiEfectivoConCarnePageModule {}
