import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { LdWrapperModule } from 'src/app/features/ld-wrapper/ld-wrapper.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    LdWrapperModule
  ]
})
export class ListModule { }
