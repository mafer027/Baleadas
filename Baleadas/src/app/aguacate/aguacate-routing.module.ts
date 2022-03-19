import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AguacatePage } from './aguacate.page';

const routes: Routes = [
  {
    path: '',
    component: AguacatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AguacatePageRoutingModule {}
