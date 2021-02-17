import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './pages/forbidden';
import { HomeComponent } from './pages/home';
import { WelcomeComponent } from './pages/welcome';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          title: 'Bienvenido',
        }
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
        data: {
          title: 'Prohibido',
        }
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
