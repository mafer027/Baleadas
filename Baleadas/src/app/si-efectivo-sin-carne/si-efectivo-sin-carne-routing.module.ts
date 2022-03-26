import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiEfectivoSinCarnePage } from './si-efectivo-sin-carne.page';

const routes: Routes = [
  {
    path: '',
    component: SiEfectivoSinCarnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiEfectivoSinCarnePageRoutingModule {}
