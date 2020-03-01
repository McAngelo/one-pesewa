import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    ForgottenPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
	EmailVerificationComponent,
    LandingPageComponent
} from './index';
 
const routes: Routes = [
    
     /* Login, Sign Up and Forgotten Password */

    { path: 'home', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reset-password/:id', component: ResetPasswordComponent },
    { path: 'forgotten-password', component: ForgottenPasswordComponent },
    { path: 'email-verification/:id/:id', component: EmailVerificationComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
