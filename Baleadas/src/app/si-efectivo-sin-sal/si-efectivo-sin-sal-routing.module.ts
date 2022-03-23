import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiEfectivoSinSalPage } from './si-efectivo-sin-sal.page';

const routes: Routes = [
  {
    path: '',
    component: SiEfectivoSinSalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiEfectivoSinSalPageRoutingModule {}
