import { RoleGuard } from './../../../core/guards/role/role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, RoleListComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'roles',
      },
      {
        path: 'roles',
        component: RoleListComponent,
        canLoad: [RoleGuard],
        canActivate: [RoleGuard],
        data: {
          roles: ['ADMIN'],
          title: 'Roles'
        }
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
