import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing"
import { User } from "../models/user.model";
import { UsersService } from "./users.api"

describe('UsersService', () => {
    let service: UsersService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
          });
        service = TestBed.inject(UsersService)
        httpMock = TestBed.inject(HttpTestingController)
    });


    it('should be created', () => {
        expect(service).toBeTruthy()
    });

    it('returns a list of users', () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const expectedResult = [{ name: "Barbenoire" }];

        service.getUsers().subscribe(r => {
            expect(r).toEqual(expectedResult as []);
        });

        const request = httpMock.expectOne(url);
        request.flush(expectedResult);
    });

    it('create a new user', () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const expectedResult:User = { id: 34 } as User;

        service.addUser({} as User).subscribe(r => {
            expect(r).toEqual(expectedResult as User);
        });

        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('POST');
        request.flush(expectedResult);
    });

    // it('returns a 404 error', () => {
    //     const url = "https://jsonplaceholder.typicode.com/users";
    //     const expectedResult = [{ name: "Barbenoire" }];

    //     service.getUsers().subscribe(r => {
    //         expect(r).toEqual(expectedResult as []);
    //     });

    //     const request = httpMock.expectOne(url);
    //     request.error({error: "404"});
    // });

});