import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";


@Injectable()
export class UserState {

  private updating$ = new BehaviorSubject<boolean>(false);
  private users$ = new BehaviorSubject<User[]>([]);

  /**
   * Recupere le statut de l'attribut updating
   * @returns 
   */
  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getUsers$() {
    return this.users$.asObservable();
  }
  getUser(id: any): User {
    const users = this.users$.getValue();
    console.log("users ", users)
    return users.find(o => o.id+"" === id+"") as User;
  }

  setUsers$(users: User[]) {
    return this.users$.next(users);
  }

  addUser(user: User) {
    const currentValue = this.users$.getValue();
    this.users$.next([...currentValue, user]);
  }

  updateUser(userToUpdate: User) {
    const users = this.users$.getValue();
    const index = users.findIndex(user => user.id === userToUpdate.id);
    users[index] = userToUpdate;
    this.users$.next([...users]);
  }

  removeUser(userToRemove: User) {
    const currentValue = this.users$.getValue();
    this.users$.next(currentValue.filter(user => user !== userToRemove));
  }

}