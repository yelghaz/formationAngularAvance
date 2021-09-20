import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFacade } from 'src/app/users.facade';
import { UsersService } from 'src/app/api/users.api';
import { UserState } from 'src/app/state/users.state';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [UserState, UsersService, UsersFacade]
})
export class CoreModule { }
