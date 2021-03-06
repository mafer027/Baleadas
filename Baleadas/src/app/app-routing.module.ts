import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'no-efectivo',
    loadChildren: () => import('./no-efectivo/no-efectivo.module').then( m => m.NoEfectivoPageModule)
  },
  {
    path: 'si-efectivo',
    loadChildren: () => import('./si-efectivo/si-efectivo.module').then( m => m.SiEfectivoPageModule)
  },
  {
    path: 'no-efectivo-con-huevo',
    loadChildren: () => import('./no-efectivo-con-huevo/no-efectivo-con-huevo.module').then( m => m.NoEfectivoConHuevoPageModule)
  },
  {
    path: 'si-efectivo-con-huevo',
    loadChildren: () => import('./si-efectivo-con-huevo/si-efectivo-con-huevo.module').then( m => m.SiEfectivoConHuevoPageModule)
  },
  {
    path: 'si-efectivo-con-sal',
    loadChildren: () => import('./si-efectivo-con-sal/si-efectivo-con-sal.module').then( m => m.SiEfectivoConSalPageModule)
  },
  {
    path: 'no-efectivo-con-sal',
    loadChildren: () => import('./no-efectivo-con-sal/no-efectivo-con-sal.module').then( m => m.NoEfectivoConSalPageModule)
  },
  {
    path: 'si-efectivo-sin-sal',
    loadChildren: () => import('./si-efectivo-sin-sal/si-efectivo-sin-sal.module').then( m => m.SiEfectivoSinSalPageModule)
  },
  {
    path: 'no-efectivo-sin-sal',
    loadChildren: () => import('./no-efectivo-sin-sal/no-efectivo-sin-sal.module').then( m => m.NoEfectivoSinSalPageModule)
  },
  {
    path: 'si-efectivo-con-carne',
    loadChildren: () => import('./si-efectivo-con-carne/si-efectivo-con-carne.module').then( m => m.SiEfectivoConCarnePageModule)
  },
  {
    path: 'si-efectivo-sin-carne',
    loadChildren: () => import('./si-efectivo-sin-carne/si-efectivo-sin-carne.module').then( m => m.SiEfectivoSinCarnePageModule)
  },
  {
    path: 'no-efectivo-con-carne',
    loadChildren: () => import('./no-efectivo-con-carne/no-efectivo-con-carne.module').then( m => m.NoEfectivoConCarnePageModule)
  },
  {
    path: 'no-efectivo-sin-carne',
    loadChildren: () => import('./no-efectivo-sin-carne/no-efectivo-sin-carne.module').then( m => m.NoEfectivoSinCarnePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
