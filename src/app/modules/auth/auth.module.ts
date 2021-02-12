import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';
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
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    ...AUTH_COMPONENTS,
  ]
})
export class AuthModule { }
