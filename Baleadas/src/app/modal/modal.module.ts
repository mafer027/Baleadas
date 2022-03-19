import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { MymodalPage } from '../mymodal/mymodal.page';
import {BhuevoPage } from '../bhuevo/bhuevo.page';
import { BhfrijolesPage } from '../bhfrijoles/bhfrijoles.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  declarations: [ModalPage, MymodalPage, BhuevoPage, BhfrijolesPage],
  entryComponents: [MymodalPage, BhuevoPage, BhfrijolesPage]
})
export class ModalPageModule {}
