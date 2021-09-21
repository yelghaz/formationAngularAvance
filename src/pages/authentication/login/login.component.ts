import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/api/users.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userapi: UsersService) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });

   }

  ngOnInit(): void {
  }

  login() {
    this.userapi.fakeLoginUser(this.loginForm.value).subscribe((res:any) => {
      localStorage.setItem("token", res['token'])
      alert("connexion réussie")
    }, error => {
      
      alert("connexion échouée")
    });
  }

  deconnect() {
    localStorage.removeItem('token')
  }

}
