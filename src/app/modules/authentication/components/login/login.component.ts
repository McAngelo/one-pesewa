import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../../shared';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;
	public loading: boolean = false;
	public submitted: boolean = false;
	public returnUrl: string;
	public error: string;

	public enableSignUpForm: boolean;
	public signUpModel: any = {};
	public loginModel: any = {};

	constructor(
		private _formBuilder: FormBuilder,
		private _route: ActivatedRoute,
		private _router: Router,
		private _authenticationService: AuthenticationService) {
		// redirect to home if already logged in
		if(this._authenticationService.currentUserValue){
			this._router.navigate(['/client-portal'])
		}
	}

	ngOnInit() {
		this.loginForm = this._formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});

		// get return url from route parameters or default to '/'
		this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
	}

	// convenience getter for easy access to form fields
	get f() { return this.loginForm.controls }

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
			this.processSignUp();
		}else{
			console.log(formType, this.loginModel);
			this.processLogin();
		}
	}

	public processLogin(): void {
		console.log('processing login');
		this.submitted = true;

		// stop here if form is invalid
		if(this.loginForm.invalid){
			return;
		}

		this.loading = true;
		this._authenticationService.login(this.f.email.value, this.f.password.value)
			.pipe(first())
			.subscribe(
				data => {
					this._router.navigate([this.returnUrl]);
				},
				error => {
					this.error = error;
					this.loading = false;
				}
			);
	}

	public processSignUp(): void {
		console.log('working on the registration');
	}

}
