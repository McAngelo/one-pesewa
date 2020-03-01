import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../shared'


@Component({
	selector: 'app-landing-layout',
	templateUrl: './landing-layout.component.html',
	styleUrls: ['./landing-layout.component.css'],
	providers: [UtilService]
})
export class LandingLayoutComponent implements OnInit {
	public currentUrl: string;
	public displayHome: boolean;
	public displayLogin: boolean;

	constructor(private _utilService: UtilService) { 
		let rawUrl = window.location.href;
		let arr = rawUrl.split('/')
		console.log(arr[3]);


	}

	ngOnInit() {}

}
