import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { Observable } from  "rxjs/Observable";
import { TransactionModel } from '../../shared/index';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

	public currentDate:any = Date.now();
	public transactionsObservable : Observable<TransactionModel[]>;
	public transactions:any;


	constructor(private _httpClient:HttpClient) { }

	ngOnInit() {
		//const  params = new  HttpParams().set('_page', "1").set('_limit', "1");
		//const  params = new  HttpParams({fromString:  '_page=1&_limit=1'});
		this._httpClient.get<TransactionModel[]>("http://localhost:3000/transactions")
		.subscribe(data  => {
			console.log("GET Request is successful ", data);
			this.transactions = data;
		},
		error  => {
			console.log("Error", error);
		});
	}

	onEdit(id:string){
		console.log("You are about to edit ", id);
	}

	onDelete(id:string){
		console.log("You are about to delete ", id);
	}

}
