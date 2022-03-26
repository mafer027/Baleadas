import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoSinSalPageRoutingModule } from './no-efectivo-sin-sal-routing.module';

import { NoEfectivoSinSalPage } from './no-efectivo-sin-sal.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEfectivoSinSalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoEfectivoSinSalPage]
})
export class NoEfectivoSinSalPageModule {}
