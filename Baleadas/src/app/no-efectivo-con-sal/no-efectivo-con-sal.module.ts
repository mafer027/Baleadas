import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoConSalPageRoutingModule } from './no-efectivo-con-sal-routing.module';

import { NoEfectivoConSalPage } from './no-efectivo-con-sal.page';
import { Component } from 'node_modules copy/@angular/core/core';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEfectivoConSalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoEfectivoConSalPage]
})
export class NoEfectivoConSalPageModule {}
