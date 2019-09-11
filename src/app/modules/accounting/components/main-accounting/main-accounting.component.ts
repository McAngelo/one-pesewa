import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PubSubService } from 'angular7-pubsub';

@Component({
  selector: 'app-main-accounting',
  templateUrl: './main-accounting.component.html',
  styleUrls: ['./main-accounting.component.css']
})
export class MainAccountingComponent implements OnInit {
	@ViewChild('closeIncomeBtn', { read: true, static: false }) closeIncomeBtn: ElementRef;
	@ViewChild('closeExpenseBtn', { read: true, static: false }) closeExpenseBtn: ElementRef;
  	constructor(
  		private _el: ElementRef,
        private _pubsub: PubSubService) { }

  	ngOnInit() {
  		this._pubsub.$sub('closeModal').subscribe((dataFromPublisher) =>{
			
			if(dataFromPublisher.message === 'closeIncomeModal'){
				//console.log(dataFromPublisher);
				this.closeIncomeBtn.nativeElement.click();
			}

			else if(dataFromPublisher.message === 'closeExpenseModal'){
				//console.log(dataFromPublisher);
				this.closeExpenseBtn.nativeElement.click();
			}
		});
  	}

}
