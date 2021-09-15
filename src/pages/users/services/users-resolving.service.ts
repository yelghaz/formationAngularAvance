import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/models/user.model";
import { UsersFacade } from "src/app/users.facade";

@Injectable({
    providedIn: 'root'
})
export class UsersResolving implements Resolve<any> {

  constructor(private facade: UsersFacade) {}
  
  async resolve(route: ActivatedRouteSnapshot) {
    this.facade.setUser(null);
    const {id = null} = route.params;
    const item = await this.facade.getUser(id).toPromise();
    this.facade.setUser(item);
    return item
  }
}