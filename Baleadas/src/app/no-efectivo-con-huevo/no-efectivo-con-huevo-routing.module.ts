import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEfectivoConHuevoPage } from './no-efectivo-con-huevo.page';

const routes: Routes = [
  {
    path: '',
    component: NoEfectivoConHuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEfectivoConHuevoPageRoutingModule {}
