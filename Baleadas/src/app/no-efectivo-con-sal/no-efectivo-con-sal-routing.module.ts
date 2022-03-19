import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEfectivoConSalPage } from './no-efectivo-con-sal.page';

const routes: Routes = [
  {
    path: '',
    component: NoEfectivoConSalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEfectivoConSalPageRoutingModule {}
