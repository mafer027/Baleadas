import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiEfectivoConSalPage } from './si-efectivo-con-sal.page';

const routes: Routes = [
  {
    path: '',
    component: SiEfectivoConSalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiEfectivoConSalPageRoutingModule {}
