import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  isCollapsedPages: boolean = true;
  sideBar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sidebarCollapseClick() {
    this.sideBar = !this.sideBar;
  }
}
