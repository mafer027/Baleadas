import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoConSalPageRoutingModule } from './si-efectivo-con-sal-routing.module';

import { SiEfectivoConSalPage } from './si-efectivo-con-sal.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiEfectivoConSalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SiEfectivoConSalPage]
})
export class SiEfectivoConSalPageModule {}
