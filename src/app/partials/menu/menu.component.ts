import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from 'src/app/core/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sideBar: boolean = false;
  menus: any[] = menu;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sidebarCollapseClick() {
    this.sideBar = !this.sideBar;
  }

  verificaSeEstaNessaRota(rota: string): boolean {
    return this.router.url.endsWith('/' + rota);
  }

}
