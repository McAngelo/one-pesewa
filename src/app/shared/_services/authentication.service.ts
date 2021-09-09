import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

import { User, ApiResponse } from '../';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	
	private _currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;
	private _apiUrl: string = environment._apiEndpoint;

	constructor(private _http: HttpClient){
		this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
		this.currentUser =  this._currentUserSubject.asObservable();
	}

	public get currentUserValue(): User {
		return this._currentUserSubject.value;
	}

	public login(email: string, password: string){
		return this._http.post<any>(`${this._apiUrl}/auth/login`, { email, password})
			.pipe(map (user => {
				// login successful if there's a jwt token in the response
				if(user && user.token){
					// store user details and jwt token inlocal storage to keep user logged in between page refreshes
					sessionStorage.setItem('currentUser', JSON.stringify(user));
					this._currentUserSubject.next(user);
				}

				return user;
			}));
	}

	public logout(): void {
		// remove user from session storage to log user out
		sessionStorage.removeItem('currentUser');
		this._currentUserSubject.next(null);
	}
}