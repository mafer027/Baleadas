import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoPageRoutingModule } from './si-efectivo-routing.module';

import { SiEfectivoPage } from './si-efectivo.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiEfectivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SiEfectivoPage]
})
export class SiEfectivoPageModule {}
