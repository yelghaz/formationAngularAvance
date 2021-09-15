import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostsApi {

  private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  /**
   * 
   */
  public getPosts(): Observable<any[]> {
    // return this.http.get<any[]>(this.url);
    return of()
  }
  
  /**
   * 
   * @param user 
   */
  public addPost(post: any): Observable<any> {
    // return this.http.post(this.url, post);
    return of()
  }

}
