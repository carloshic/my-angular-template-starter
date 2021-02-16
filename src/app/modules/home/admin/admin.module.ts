import { MaterialModule } from './../../../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ADMIN_PAGES } from './pages';

@NgModule({
  declarations: [
    ...ADMIN_PAGES
  ],
  imports: [AdminRoutingModule, CommonModule, MaterialModule],
})
export class AdminModule { }
