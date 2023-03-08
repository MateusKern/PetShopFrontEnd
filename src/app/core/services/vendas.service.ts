import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/results/result';
import { Venda } from '../models/vendas/venda';

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private url = environment.apiUrl + '/cobrancas'

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Result<Venda[]>> {
    return this.http.get<Result<Venda[]>>(this.url)
  }
}
