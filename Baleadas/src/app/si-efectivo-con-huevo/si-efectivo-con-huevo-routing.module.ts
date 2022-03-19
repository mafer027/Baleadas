import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiEfectivoConHuevoPage } from './si-efectivo-con-huevo.page';

const routes: Routes = [
  {
    path: '',
    component: SiEfectivoConHuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiEfectivoConHuevoPageRoutingModule {}
