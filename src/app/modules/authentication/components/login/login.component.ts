import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public enableSignUpForm: boolean;
	public signUpModel: any = {};
	public loginModel: any = {};

	constructor() {
	}

	ngOnInit() {
		
	}

	public switchForm(enableForm: string): void {  	

		if(enableForm === 'signIn'){
			this.enableSignUpForm = false;
		}

		if(enableForm === 'signUp'){
			this.enableSignUpForm = true;
		}
	}

	public onSubmit(formType: string): void {
		if(formType === 'signupForm'){
			console.log(formType, this.signUpModel);
		}else{
			console.log(formType, this.loginModel);
		}
	}

}
