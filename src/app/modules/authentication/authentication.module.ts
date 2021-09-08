import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
	LoginComponent, 
	ForgottenPasswordComponent,
	ResetPasswordComponent,
	EmailVerificationComponent,
	LandingPageComponent
} from './index';

import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
	declarations: [
		LoginComponent,
		LandingPageComponent,
		ForgottenPasswordComponent,
		ResetPasswordComponent,
		EmailVerificationComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		AuthenticationRoutingModule
	]
})
export class AuthenticationModule { }
