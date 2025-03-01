import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { LdHeaderModule } from 'src/app/features/ld-header/ld-header.module';
import { LdWrapperModule } from 'src/app/features/ld-wrapper/ld-wrapper.module';
import { ProjectCreateEditRoutingModule } from './project-create-edit-routing.module';
import { LdButtonModule } from "../../shared/components/ld-button/ld-button.module";



@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateEditRoutingModule,
    LdHeaderModule,
    LdWrapperModule,
    LdButtonModule
]
})
export class ProjectCreateEditModule { }
