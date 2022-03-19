import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoPageRoutingModule } from './no-efectivo-routing.module';

import { NoEfectivoPage } from './no-efectivo.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEfectivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoEfectivoPage]
})
export class NoEfectivoPageModule {}
