import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth-routing/auth-routing.module';
import { ValidateEqualModule } from 'ng-validate-equal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ValidateEqualModule
  ]
})
export class AuthModule { }
