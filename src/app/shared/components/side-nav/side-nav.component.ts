import { Component, EventEmitter, Output } from '@angular/core';
import { PageTitleService } from './../../../core/services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],

})
export class SideNavComponent {
  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter();

  currentItemId: string;

  menus = [
    {
      id: 'Welcome',
      path: 'welcome',
      name: 'Google',
      childs: []
    },
    {
      id: 'Admin',
      name: 'Admin',
      childs: [
        {
          id: 'Roles',
          path: 'admin/role-list',
          name: 'Roles',
        },
      ]
    },
  ];

  constructor(
    private pageTitleService: PageTitleService
  ) {}

  onSelect(name: string): void {
    this.pageTitleService.title = name;
  }
}
