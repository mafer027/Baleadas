import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEfectivoSinCarnePageRoutingModule } from './no-efectivo-sin-carne-routing.module';

import { NoEfectivoSinCarnePage } from './no-efectivo-sin-carne.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NoEfectivoSinCarnePageRoutingModule
  ],
  declarations: [NoEfectivoSinCarnePage]
})
export class NoEfectivoSinCarnePageModule {}
