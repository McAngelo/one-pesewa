import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	LoginComponent, 
	ForgottenPasswordComponent,
	SignUpComponent 
} from './index';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [LoginComponent, ForgottenPasswordComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
