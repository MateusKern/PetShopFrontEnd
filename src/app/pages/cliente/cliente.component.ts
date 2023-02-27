import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { Result } from 'src/app/core/models/results/result';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.pegarLista().subscribe({
      next: (result: Result<Cliente[]>) => this.clientes = result.retorno,
      error: (result: Result<any>) => alert(result)
    });
  }

}