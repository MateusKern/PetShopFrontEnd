import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/core/models/results/result';
import { Servico } from 'src/app/core/models/servico/servico';
import { ServicoService } from 'src/app/core/services/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  servicos: Servico[] = []

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.servicoService.pegarLista().subscribe({
      next: (result: Result<Servico[]>) => this.servicos = result.retorno,
      error: (result: Result<any>) => alert(result)
    });
  }

}
