import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoConHuevoPageRoutingModule } from './no-efectivo-con-huevo-routing.module';

import { NoEfectivoConHuevoPage } from './no-efectivo-con-huevo.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEfectivoConHuevoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoEfectivoConHuevoPage]
})
export class NoEfectivoConHuevoPageModule {}
