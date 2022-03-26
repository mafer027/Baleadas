import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiEfectivoConCarnePage } from './si-efectivo-con-carne.page';

const routes: Routes = [
  {
    path: '',
    component: SiEfectivoConCarnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiEfectivoConCarnePageRoutingModule {}
