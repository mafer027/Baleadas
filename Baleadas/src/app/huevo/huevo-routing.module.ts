import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuevoPage } from './huevo.page';

const routes: Routes = [
  {
    path: '',
    component: HuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuevoPageRoutingModule {}
