import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
    ForgottenPasswordComponent,
    LoginComponent,
    ResetPasswordComponent
} from './index';
 
const routes: Routes = [
    
     /* Login, Sign Up and Forgotten Password */

    { path: 'login', component: LoginComponent },
    //{ path: 'sign-up', component: SignUpComponent },
    { path: 'forgotten-password', component: ForgottenPasswordComponent },
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
