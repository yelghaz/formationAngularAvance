import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UsersService } from "./api/users.api";
import { User } from "./models/user.model";
import { UserState } from "./state/users.state";

@Injectable({
    providedIn: 'root'
  })
export class UsersFacade {

 user!: User;
    constructor(private userService: UsersService, private userState: UserState) {}
    
    /**
     * Charge les utilisateurs (Initialisation)
     */
    loadUsers() {
        this.userService.getUsers().subscribe(res => {
            this.userState.setUsers$(res);
        }, error => {
            // Gestion des erreurs
        })
    }

    /**
     * Recupère les utilisateurs
     * @returns 
     */
    getUsers(): Observable<User[]> {
        return this.userState.getUsers$();
    }

    getUser(userId: any): Observable<User> {
        if(this.user)
        return of(this.user)
        else
       return this.userService.getUser(userId);
    }
    setUser(user: any){
        this.user = user;
    }

    /**
     * Ajoute un utilisateur à la liste
     * @param user 
     */
    addUser(user: User): void {
        this.userService.addUser(user).subscribe(re => {
            this.userState.addUser(user)
        }, 
        error => {
            //error
        }, 
        () => {
            //finally
        });
    }

    /**
     * Retrait d'un utilisateur
     * @param user 
     */
    removeUser(user: User): void {
     this.userService.removeUser(user.id).subscribe(re => {
        this.userState.removeUser(user);
    }, 
    error => {
        //Error
    }, 
    () => {
        //finally
    });
    }
}