import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoConCarnePageRoutingModule } from './no-efectivo-con-carne-routing.module';

import { NoEfectivoConCarnePage } from './no-efectivo-con-carne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEfectivoConCarnePageRoutingModule
  ],
  declarations: [NoEfectivoConCarnePage]
})
export class NoEfectivoConCarnePageModule {}
