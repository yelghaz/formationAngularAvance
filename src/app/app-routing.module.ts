import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';

const routes: Routes = [
  { path: '', component: AppComponent, },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
