import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menu } from 'src/app/core/constants/menu';

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

  verifyIfThisRoute(rota: string): boolean {
    return this.router.url.endsWith('/' + rota);
  }

}
