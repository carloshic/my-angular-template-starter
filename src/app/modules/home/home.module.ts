import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home';
import { WelcomeComponent } from './welcome';
import { ForbiddenComponent } from './forbidden';

@NgModule({
  declarations: [HomeComponent, WelcomeComponent, ForbiddenComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
