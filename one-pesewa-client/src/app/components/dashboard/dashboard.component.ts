import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  	private readonly notifier: NotifierService;

  	constructor(private _notifierService: NotifierService) {
	  	this.notifier = _notifierService; 
	}

  	ngOnInit() {
  		this.notifier.notify('info', `Welcome to one pesewa, enjoy the app` );

  		/*Swal.fire(
            'Successful',
            'Welcome to the dashboard info.',
            'success'
        );*/
  	}

}
