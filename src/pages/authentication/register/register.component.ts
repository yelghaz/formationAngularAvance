import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/api/users.api';
import { FakeBackendInterceptor } from 'src/app/interceptors/fake-backend.interceptor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  users: any = [];
  constructor(private fb: FormBuilder, private userapi: UsersService) {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      firstname: [null, [Validators.required, Validators.minLength(2)]],
      lastname: [null, [Validators.required, Validators.minLength(2)]],
    });

   }
  ngOnInit(): void {
    this.userapi.fakeGetUser().subscribe(e => {
      this.users = e as any;
    }, r => {
      this.users = []
    })
  }

  register() {
    this.userapi.fakeRegisterUser(this.registerForm.value).subscribe(res => {
      alert("inscription réussie")
    }, error => {
      console.error(error)
      alert("inscription échouée ")

    });
  }
}
