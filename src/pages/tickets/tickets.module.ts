import { NgModule } from '@angular/core';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    TicketsComponent 
  ],
  imports: [
    SharedModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
