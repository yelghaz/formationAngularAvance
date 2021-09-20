import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TootipDirective } from 'src/app/directives/tootip.directive';
import { SharedModule } from 'src/shared/shared.module';
import { UserDetailComponent } from './components/detail/user-detail.component';
import { UsersComponent } from './components/list/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersResolving } from './services/users-resolving.service';


const routes: Routes = [
  {   path: '',   component: UsersComponent   },
  { path: 'users/:id', component: UserDetailComponent, 
  /*resolve: {
    user: UsersResolving
  } */}
];
@NgModule({
  declarations: [UsersComponent, UserDetailComponent, UserCardComponent, TootipDirective],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
