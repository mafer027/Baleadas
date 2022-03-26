import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoConCarnePageRoutingModule } from './si-efectivo-con-carne-routing.module';

import { SiEfectivoConCarnePage } from './si-efectivo-con-carne.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SiEfectivoConCarnePageRoutingModule
  ],
  declarations: [SiEfectivoConCarnePage]
})
export class SiEfectivoConCarnePageModule {}
