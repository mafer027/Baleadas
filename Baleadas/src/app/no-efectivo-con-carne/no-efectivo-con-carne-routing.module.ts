import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEfectivoConCarnePage } from './no-efectivo-con-carne.page';

const routes: Routes = [
  {
    path: '',
    component: NoEfectivoConCarnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEfectivoConCarnePageRoutingModule {}
