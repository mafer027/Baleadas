import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BhfrijolesPage } from './bhfrijoles.page';

const routes: Routes = [
  {
    path: '',
    component: BhfrijolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BhfrijolesPageRoutingModule {}
