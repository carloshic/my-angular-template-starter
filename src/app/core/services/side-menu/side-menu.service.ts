import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IMenu } from '../../interfaces';
import { PageTitleService } from '../page-title';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  currentMenu: IMenu;

  menus: IMenu[] = [
    {
      id: 'welcome',
      path: 'welcome',
      name: 'Dashboard',
      childs: []
    },
    {
      id: 'admin',
      name: 'Admin',
      path: 'admin',
      childs: [
        {
          id: 'roles',
          path: 'admin/roles',
          name: 'Roles',
        },
        {
          id: 'menus',
          path: 'admin/menus',
          name: 'Menus',
        },
        {
          id: 'Actions',
          path: 'admin/actions',
          name: 'Actions',
        },
      ]
    },
  ];

  constructor(
    private router: Router,
    private pageTitleService: PageTitleService,
    private activatedRoute: ActivatedRoute
  ) { }

  getMenus(): IMenu[] {
    return this.menus;
  }

  select(menu: IMenu): void {
    this.currentMenu = menu;
    this.pageTitleService.title = menu.name;
    // this.router.navigate([menu.path], { relativeTo: this.activatedRoute });
  }
}
