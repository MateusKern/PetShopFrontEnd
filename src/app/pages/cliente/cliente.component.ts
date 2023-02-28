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

  retornaEmojiPet(tipo?: string): string {
    switch (tipo) {
      case 'Cachorro':
        return '&#128054;';
      case 'Gato':
        return '&#128049;';
      case 'Passaro':
        return '&#128038;';
      case 'Peixe':
        return '&#128031;';
      case 'Tartaruga':
        return '&#128034;';
      default:
        return 'pet';
    }
  }
}