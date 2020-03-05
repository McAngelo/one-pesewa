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

	ngOnInit() {

		window.onscroll = function() {myFunction()};

		// Get the header
		var header = document.getElementById("fixed-top");

		// Get the offset position of the navbar
		var sticky = header.offsetTop;

		// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
		function myFunction() {
		  if (window.pageYOffset > sticky) {
		    header.classList.add("sticky");
		  } else {
		    header.classList.remove("sticky");
		  }
		}
	}

}
