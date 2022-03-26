import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEfectivoSinCarnePage } from './no-efectivo-sin-carne.page';

const routes: Routes = [
  {
    path: '',
    component: NoEfectivoSinCarnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEfectivoSinCarnePageRoutingModule {}
