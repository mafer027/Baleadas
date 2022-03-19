import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEfectivoPage } from './no-efectivo.page';

const routes: Routes = [
  {
    path: '',
    component: NoEfectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEfectivoPageRoutingModule {}
