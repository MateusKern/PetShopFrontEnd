import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rotas } from 'src/app/core/constants/rotas';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/'+rotas.login]);
  }
}
