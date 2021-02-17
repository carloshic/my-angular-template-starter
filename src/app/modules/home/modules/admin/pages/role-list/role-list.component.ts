import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

interface Role {
  id: string;
  name: string;
}
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'name', 'name', 'name', 'name', 'name'];

  roles: Observable<Role[]>;

  constructor() { }

  ngOnInit(): void {

    this.roles = new Observable(observer => {
      let roles = [{
        id: new Date().getTime().toString(),
        name: 'Admin'
      }, {
        id: new Date().getTime().toString(),
        name: 'User'
      }];

      observer.next(roles);

      setInterval(() => {
        const role: Role = {
          id: new Date().getTime().toString(),
          name: 'Super Admin'
        };
        roles = [...roles, role];
        observer.next(roles);
      }, 2000);
    });
  }

}
