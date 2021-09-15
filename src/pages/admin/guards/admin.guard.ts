import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private admService: AdminService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Logique ici
      return !this.admService.isAdmin();
  }
}
