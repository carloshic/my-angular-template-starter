import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AUTH_COMPONENTS } from './components';
import { AUTH_PAGES } from './pages';

@NgModule({
  declarations: [
    ...AUTH_PAGES,
    ...AUTH_COMPONENTS,
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ...AUTH_COMPONENTS,
  ]
})
export class AuthModule { }
