import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feature',
    pathMatch: 'full'
  },
  {
    path: 'auth',  
    loadChildren: () => import('./auth/auth.module')  
    .then(m => m.AuthModule)
  },
  {
    path: 'feature',  
    loadChildren: () => import('./features/features.module')  
    .then(m => m.FeaturesModule) 
  }
  // {
  //   path: 'Shared',  
  //   loadChildren: () => import('./shared/shared.module')  
  //   .then(m => m.SharedModule) 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
