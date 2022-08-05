import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/core/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sideBar: boolean = false;
  menus: any[] = menu;

  constructor() { }

  ngOnInit() {
  }

  sidebarCollapseClick() {
    this.sideBar = !this.sideBar;
  }

}
