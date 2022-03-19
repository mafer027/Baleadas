import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BhfrijolesPageRoutingModule } from './bhfrijoles-routing.module';

import { BhfrijolesPage } from './bhfrijoles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhfrijolesPageRoutingModule
  ],
  declarations: [BhfrijolesPage]
})
export class BhfrijolesPageModule {}
