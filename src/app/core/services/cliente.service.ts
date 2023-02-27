import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente/cliente';
import { Result } from '../models/results/result';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = environment.apiUrl + '/clientes'

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Result<Cliente[]>> {
    return this.http.get<Result<Cliente[]>>(this.url)
  }
}
