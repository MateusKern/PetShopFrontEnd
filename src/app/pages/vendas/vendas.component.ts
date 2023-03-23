import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/core/models/results/result';
import { Venda } from 'src/app/core/models/vendas/venda';
import { VendasService } from 'src/app/core/services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {
  vendas: Venda[] = []

  constructor(private vendasService: VendasService) { }

  ngOnInit() {
    this.vendasService.pegarLista().subscribe({
      next: (result: Result<Venda[]>) => this.vendas = result.retorno,
      error: (result: Result<any>) => alert(result)
    });
  }

  precoVenda(venda: Venda): number {
    let preco: number = 0

    if (venda.itens)
      preco = venda.itens.reduce((soma, atual) => soma + ((atual.quantidade ?? 0) * (atual.precoUnitario ?? 0)), 0)
    
    if (preco !== 0 && venda.desconto)
      preco = preco - venda.desconto

    return preco
  }

  novo() {
    console.log('Nova Venda');
  }
}
