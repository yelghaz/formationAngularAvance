import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/pages/admin/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../pages/users/users.module')
      .then(mod => mod.UsersModule)
  },
  { path: 'admin', 
  loadChildren: () => import('../pages/admin/admin.module')
      .then(m => m.AdminModule),
    canLoad: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
