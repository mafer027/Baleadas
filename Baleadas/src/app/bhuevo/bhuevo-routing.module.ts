import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhuevoPage } from './bhuevo.page';

const routes: Routes = [
  {
    path: '',
    component: BhuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhuevoPageRoutingModule {}
