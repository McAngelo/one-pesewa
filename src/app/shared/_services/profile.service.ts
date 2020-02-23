import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { User } from '../';

@Injectable({ providedIn: 'root'})
export class ProfileService {

	private _apiUrl: string = environment._apiEndpoint;

	constructor(private _http: HttpClient){ }

	
	public createProfile(data: any) {
        return this._http.post<User>(`${this._apiUrl}/profile`, data);
    }

	public sendHi() {
        return this._http.get<any>(`${this._apiUrl}/profile/greetings`);
    }

	public profileDetails() {
        return this._http.get<User>(`${this._apiUrl}/profile`);
    }

	public changePassword(data: any) {
        return this._http.patch<User>(`${this._apiUrl}/profile/change-password`, data);
    }

	public updateProfile(data: any) {
        return this._http.patch<User>(`${this._apiUrl}/profile`, data);
    }

	public deleteProfile() {
        return this._http.delete<any>(`${this._apiUrl}/profile`);
    }

	public uploadProfileAvatar(data: any) {
        return this._http.post<User>(`${this._apiUrl}/profile`, data);
    }

	public deleteProfileAvatar(data: any) {
        return this._http.delete<any>(`${this._apiUrl}/profile/avatar`);
    }
}