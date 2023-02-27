import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto/produto';
import { Result } from '../models/results/result';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = environment.apiUrl + '/produtos'

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Result<Produto[]>> {
    return this.http.get<Result<Produto[]>>(this.url)
  }
}
