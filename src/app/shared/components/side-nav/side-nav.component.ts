import { Component, OnInit } from '@angular/core';
import { IMenu } from './../../../core/interfaces/menu.interface';
import { SideMenuService } from './../../../core/services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],

})
export class SideNavComponent implements OnInit {

  menus: IMenu[] = [];
  constructor(
    private sideMenuService: SideMenuService
  ) {}

  ngOnInit(): void {
    this.menus = this.sideMenuService.getMenus();
  }

  onSelect(menu: IMenu): void {
    this.sideMenuService.select(menu);
  }
}
