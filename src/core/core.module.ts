import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFacade } from 'src/app/users.facade';
import { UsersService } from 'src/app/api/users.api';
import { UserState } from 'src/app/state/users.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserState, UsersService, UsersFacade]
})
export class CoreModule { }
