import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuevovPage } from './huevov.page';

const routes: Routes = [
  {
    path: '',
    component: HuevovPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuevovPageRoutingModule {}
