import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { rotas } from 'src/app/core/constants/rotas';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    login: [''],
    senha: ['']
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(Object.assign({}, this.loginForm.getRawValue())).subscribe(() => {
    }, error => {
      alert('Login or password wrong!')
    }, () => {
      this.router.navigate(['/'+ rotas.home])
    })

  }

}