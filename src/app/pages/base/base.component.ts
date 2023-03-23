import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { rotas } from 'src/app/core/constants/rotas';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  titulo: string = ''
  mostraBotaoNovo: boolean = false

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titulo = this.activatedRoute.snapshot.firstChild?.data['titulo']
        this.mostraBotaoNovo = this.activatedRoute.snapshot.firstChild?.data['mostraBotaoNovo']
      }
    });
  }

  logout() {
    this.router.navigate(['/'+rotas.login])
  }

  clickBotaoNovo() {
    const eventoBotaoNovo = this.activatedRoute.snapshot.firstChild?.component?.prototype.novo
    
    if (eventoBotaoNovo)
      eventoBotaoNovo.call()
  }
}
