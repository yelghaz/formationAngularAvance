import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { UserDetailComponent } from './components/detail/user-detail.component';
import { UsersComponent } from './components/list/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';


const routes: Routes = [
  {   path: '',   component: UsersComponent   },
  { path: 'users/:id', component: UserDetailComponent }
];
@NgModule({
  declarations: [UsersComponent, UserDetailComponent, UserCardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
