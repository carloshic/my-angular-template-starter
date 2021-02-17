import { NgModule } from '@angular/core';
import { SharedModule } from './../../../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ADMIN_PAGES } from './pages';

@NgModule({
  declarations: [
    ...ADMIN_PAGES
  ],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule { }
