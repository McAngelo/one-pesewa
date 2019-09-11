import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
	title = 'one-pesewa-client';

	ngOnInit() {
		this.inactivityTime();
	}


	inactivityTime = function () {
		var time;
		window.onload = resetTimer;
		// DOM Events
		document.onmousemove = resetTimer;
		document.onkeypress = resetTimer;

		function logout() {
			alert("You are now logged out.")
			//location.href = 'logout.html'
		}

		function resetTimer() {
			clearTimeout(time);
			time = setTimeout(logout, 900000)
			// 1000 milliseconds = 1 second
		}
	};

}
