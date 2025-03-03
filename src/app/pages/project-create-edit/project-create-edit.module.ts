import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { LdHeaderModule } from 'src/app/features/ld-header/ld-header.module';
import { LdWrapperModule } from 'src/app/features/ld-wrapper/ld-wrapper.module';
import { ProjectCreateEditRoutingModule } from './project-create-edit-routing.module';
import { LdButtonModule } from "../../shared/components/ld-button/ld-button.module";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, NGX_MASK_CONFIG } from 'ngx-mask'

const maskConfig: Partial<NgxMaskModule> = {
  validation: false,
};



@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateEditRoutingModule,
    LdHeaderModule,
    LdWrapperModule,
    LdButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
]
})
export class ProjectCreateEditModule { }
