import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/results/result';
import { Servico } from '../models/servico/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private url = environment.apiUrl + '/servicos'

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Result<Servico[]>> {
    return this.http.get<Result<Servico[]>>(this.url)
  }
}
