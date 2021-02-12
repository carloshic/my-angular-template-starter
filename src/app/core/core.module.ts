import { NgModule } from '@angular/core';
import {
  INTERCEPTORS
} from './interceptors';



@NgModule({
  providers: [
    ...INTERCEPTORS,
  ],
})
export class CoreModule { }
