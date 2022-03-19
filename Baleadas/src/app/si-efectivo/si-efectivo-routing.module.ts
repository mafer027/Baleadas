import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiEfectivoPage } from './si-efectivo.page';

const routes: Routes = [
  {
    path: '',
    component: SiEfectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiEfectivoPageRoutingModule {}
