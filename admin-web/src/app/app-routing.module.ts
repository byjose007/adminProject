import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', 
    pathMatch: 'full'
  },
  
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./modules/estadisticas/estadisticas.module').then( m => m.EstadisticasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
