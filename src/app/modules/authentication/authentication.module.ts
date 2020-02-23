import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	LoginComponent, 
	ForgottenPasswordComponent,
	ResetPasswordComponent,
	EmailVerificationComponent
} from './index';

import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
	declarations: [
		LoginComponent,
		ForgottenPasswordComponent,
		ResetPasswordComponent,
		EmailVerificationComponent
	],
	imports: [
		CommonModule,
		AuthenticationRoutingModule
	]
})
export class AuthenticationModule { }
