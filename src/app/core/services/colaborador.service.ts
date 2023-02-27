import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colaborador } from '../models/colaborador/colaborador';
import { Result } from '../models/results/result';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private url = environment.apiUrl + '/colaboradores'

  constructor(private http: HttpClient) { }

  pegarLista(): Observable<Result<Colaborador[]>> {
    return this.http.get<Result<Colaborador[]>>(this.url)
  }
}
