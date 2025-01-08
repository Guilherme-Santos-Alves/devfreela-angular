import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { LdButtonModule } from 'src/app/shared/components/ld-button/ld-button.module';
import { LdWrapperModule } from 'src/app/features/ld-wrapper/ld-wrapper.module';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LdButtonModule,
    LdWrapperModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class RegisterModule { }
