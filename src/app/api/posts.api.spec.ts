import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing"
import { User } from "../models/user.model";
import { PostsApi } from "./posts.api";
import { UsersService } from "./users.api"

describe('PostsApi', () => {
    let service: PostsApi;
    let httpMock: HttpTestingController;
    // let http: HttpClient
    const url = "https://jsonplaceholder.typicode.com/posts";

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
          });
         service = TestBed.inject(PostsApi)
        httpMock = TestBed.inject(HttpTestingController)
        // http = TestBed.inject(HttpClient)
    });


    it('should be created', () => {
        expect(service).toBeTruthy()
        // expect(http).toBeTruthy()
    });

    fit('returns a list of POSTS', () => {
        const expectedResult = [{ name: "Barbenoire" }];

        service.getPosts().subscribe(r => {
            expect(r).toEqual(expectedResult as []);
        });
        // http.get<any[]>(url).subscribe(r => {
        //     expect(r).toEqual(expectedResult as []);
        // });

        const request = httpMock.expectOne(url);
        request.flush(expectedResult);
    });

    fit('create a new POST', () => {
        const expectedResult = { id: 34 };

        service.addPost({}).subscribe(r => {
            expect(r).toEqual(expectedResult);
        });

        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('POST');
        request.flush(expectedResult);
    });

    // it('returns a 404 error', () => {
    //     const url = "https://jsonplaceholder.typicode.com/posts";
    //     const expectedResult = [{ name: "Barbenoire" }];

    //     service.getUsers().subscribe(r => {
    //         expect(r).toEqual(expectedResult as []);
    //     });

    //     const request = httpMock.expectOne(url);
    //     request.error({error: "404"});
    // });

});