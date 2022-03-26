import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEfectivoSinSalPage } from './no-efectivo-sin-sal.page';

const routes: Routes = [
  {
    path: '',
    component: NoEfectivoSinSalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEfectivoSinSalPageRoutingModule {}
