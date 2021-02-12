import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ADMIN_PAGES } from './pages';

@NgModule({
  declarations: [
    ...ADMIN_PAGES
  ],
  imports: [AdminRoutingModule],
})
export class AdminModule { }
