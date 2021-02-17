import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home';
import { WelcomeComponent } from './pages/welcome';
import { ForbiddenComponent } from './pages/forbidden';

@NgModule({
  declarations: [HomeComponent, WelcomeComponent, ForbiddenComponent],
  imports: [
    HttpClientModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
