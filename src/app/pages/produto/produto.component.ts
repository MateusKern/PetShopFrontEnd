import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/models/produto/produto';
import { Result } from 'src/app/core/models/results/result';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.pegarLista().subscribe({
      next: (result: Result<Produto[]>) => this.produtos = result.retorno,
      error: (result: Result<any>) => alert(result)
    });
  }

}
