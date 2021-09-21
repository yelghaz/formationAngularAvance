import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set(
                'Authorization', 
                'Bearer ' + localStorage.getItem("token"))
        });
        return next.handle(clonedRequest);
    }
}