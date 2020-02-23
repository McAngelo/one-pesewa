import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

	constructor(
		private _router: Router, 
		private _authenticationService: AuthenticationService 
	){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
		const currentUser = this._authenticationService.currentUserValue;

		if(currentUser){
			// check if route is restricted by role
			if(route.data.roles && route.data.roles.indexOf(currentUser.role) === -1){
				// role not authorised so redirect to home page
				this._router.navigate(['/']);
				return false;
			}

			// authorised so return true
			return true;
		}

		// not  logged in so redirect to login page with the return url
		this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
		return false;
	}
}