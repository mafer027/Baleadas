import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    //loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'mymodal',
    loadChildren: () => import('./mymodal/mymodal.module').then( m => m.MymodalPageModule)
  },
  {
    path: 'bhuevo',
    loadChildren: () => import('./bhuevo/bhuevo.module').then( m => m.BhuevoPageModule)
  },
  {
    path: 'bhfrijoles',
    loadChildren: () => import('./bhfrijoles/bhfrijoles.module').then( m => m.BhfrijolesPageModule)
  },  {
    path: 'aguacate',
    loadChildren: () => import('./aguacate/aguacate.module').then( m => m.AguacatePageModule)
  },
  {
    path: 'carne',
    loadChildren: () => import('./carne/carne.module').then( m => m.CarnePageModule)
  },
  {
    path: 'huevo',
    loadChildren: () => import('./huevo/huevo.module').then( m => m.HuevoPageModule)
  },
  {
    path: 'huevov',
    loadChildren: () => import('./huevov/huevov.module').then( m => m.HuevovPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
