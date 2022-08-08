import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/user/login';

@Injectable()
export class AuthService {
    private url = environment.apiUrl
    private STR_TOKEN = 'TOKEN'
    jwtHelper = new JwtHelperService()

    constructor(private http: HttpClient) { }

    login(model: Login) {
        return this.http.post(this.url + '/login', model)
        .pipe(
            map((result: any) => {
                if (result) {
                    localStorage.setItem(this.STR_TOKEN, result.retorno)
                }
            })
        )
    }

    logged():boolean {
        const token = localStorage.getItem(this.STR_TOKEN)
        return token != null && !this.jwtHelper.isTokenExpired(token)
    }

    logout() {
    }
}