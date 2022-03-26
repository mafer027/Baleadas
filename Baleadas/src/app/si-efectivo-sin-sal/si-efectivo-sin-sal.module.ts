import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoSinSalPageRoutingModule } from './si-efectivo-sin-sal-routing.module';

import { SiEfectivoSinSalPage } from './si-efectivo-sin-sal.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiEfectivoSinSalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SiEfectivoSinSalPage]
})
export class SiEfectivoSinSalPageModule {}
