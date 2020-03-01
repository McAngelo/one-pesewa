import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
	selector: 'app-landing-layout',
	templateUrl: './landing-layout.component.html',
	styleUrls: ['./landing-layout.component.css']
})
export class LandingLayoutComponent implements OnInit {
	public currentUrl: string;
	public displayHome: boolean;
	public displayLogin: boolean;

	constructor(
		private _location: Location,
  		private _router: Router) { 

		_router.events.subscribe((val) => {
	      if(_location.path() != ''){
	      	this.currentUrl = _location.path()
	        switch (this.currentUrl) {
	        	case "":
				case "/":
	        	case "/home":
	        		// code...
	        		//console.log(this.currentUrl);
	        		this.displayHome = true;
	        		this.displayLogin = false;
	        		break;
	        	case "/login":
	        		// code...
	        		//console.log(this.currentUrl);
	        		this.displayHome = false;
	        		this.displayLogin = true;
	        		break;
	        }
	      }
	    });
	}

	ngOnInit() {}

}
