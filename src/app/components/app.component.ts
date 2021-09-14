import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../api/users.api';
import { User } from '../models/user.model';
import { UserState } from '../state/users.state';
import { UsersFacade } from '../users.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users$ : Observable<User[]>

  constructor(private userFacade: UsersFacade) {
    this.userFacade.loadUsers()
    this.users$ = this.userFacade.getUsers();
  }
  
  /**
   * Ajout d'un user
   */
  addUser() {
    this.userFacade.addUser({"name": "toto"} as User)
  }

  /**
   * Retrait d'un user
   * @param user 
   */
  removeUser(user: User) {
    this.userFacade.removeUser(user)

  }


}
