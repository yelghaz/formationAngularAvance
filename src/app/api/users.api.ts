import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }


  fakeGetUser() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
  fakeLoginUser(user: any) {
    return this.http.post<User[]>("https://jsonplaceholder.typicode.com/users/authenticate", user);
  }
  fakeRegisterUser(user: any) {
    return this.http.post<User[]>("https://jsonplaceholder.typicode.com/users/register", user);
  }

  /**
   * 
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  /**
   * 
   */
  public getUser(id: any): Observable<User> {
    return this.http.get<User>(this.url+"/"+id);
  }
  
  /**
   * 
   * @param user 
   */
  public addUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  /**
   * 
   * @param idUser 
   */
  public removeUser(idUser: number): Observable<any> {
    return this.http.delete(`${this.url}/${idUser}`);
  }

}
