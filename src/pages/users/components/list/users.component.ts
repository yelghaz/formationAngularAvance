import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersFacade } from 'src/app/users.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

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
