import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoSinCarnePageRoutingModule } from './si-efectivo-sin-carne-routing.module';

import { SiEfectivoSinCarnePage } from './si-efectivo-sin-carne.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SiEfectivoSinCarnePageRoutingModule
  ],
  declarations: [SiEfectivoSinCarnePage]
})
export class SiEfectivoSinCarnePageModule {}
