import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoConCarnePageRoutingModule } from './no-efectivo-con-carne-routing.module';

import { NoEfectivoConCarnePage } from './no-efectivo-con-carne.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NoEfectivoConCarnePageRoutingModule
  ],
  declarations: [NoEfectivoConCarnePage]
})
export class NoEfectivoConCarnePageModule {}
