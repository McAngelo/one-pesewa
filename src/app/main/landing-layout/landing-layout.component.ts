import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing-layout',
	templateUrl: './landing-layout.component.html',
	styleUrls: ['./landing-layout.component.css']
})
export class LandingLayoutComponent implements OnInit {
	public currentUrl: string;
	public displayHome: boolean;
	public displayLogin: boolean;

	constructor() { 
		let rawUrl = window.location.href;
		let arr = rawUrl.split('/')
		console.log(arr[3]);

		/*if(condition) {
			// code...
		}*/
	}

	ngOnInit() {
	}

}
