import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsedPages: boolean = true;
  sideBar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sidebarCollapseClick() {
    this.sideBar = !this.sideBar;
  }

}
