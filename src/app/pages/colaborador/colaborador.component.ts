import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/core/models/colaborador/colaborador';
import { Result } from 'src/app/core/models/results/result';
import { ColaboradorService } from 'src/app/core/services/colaborador.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {
  colaboradores: Colaborador[] = []

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaboradorService.pegarLista().subscribe({
      next: (result: Result<Colaborador[]>) => this.colaboradores = result.retorno,
      error: (result: Result<any>) => alert(result)
    });
  }

}
