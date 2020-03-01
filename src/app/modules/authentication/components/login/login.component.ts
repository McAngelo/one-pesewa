import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public enableSignUpForm: boolean;

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

}
