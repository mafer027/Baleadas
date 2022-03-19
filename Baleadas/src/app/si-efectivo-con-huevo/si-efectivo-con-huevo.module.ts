import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoConHuevoPageRoutingModule } from './si-efectivo-con-huevo-routing.module';

import { SiEfectivoConHuevoPage } from './si-efectivo-con-huevo.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiEfectivoConHuevoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SiEfectivoConHuevoPage]
})
export class SiEfectivoConHuevoPageModule {}
