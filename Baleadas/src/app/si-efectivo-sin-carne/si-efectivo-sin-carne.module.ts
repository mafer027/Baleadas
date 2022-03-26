import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiEfectivoSinCarnePageRoutingModule } from './si-efectivo-sin-carne-routing.module';

import { SiEfectivoSinCarnePage } from './si-efectivo-sin-carne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiEfectivoSinCarnePageRoutingModule
  ],
  declarations: [SiEfectivoSinCarnePage]
})
export class SiEfectivoSinCarnePageModule {}
