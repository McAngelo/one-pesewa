import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { Observable } from  "rxjs/Observable";
import { TransactionModel } from '../../shared/index';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

	public transactionsObservable : Observable<TransactionModel[]>;
	public transactions:any;
	public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "transaction_date_created";
    public sortOrder = "desc";


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
		//console.log("You are about to edit ", id);
	}

	onDelete(id:string, title:string){
		console.log("You are about to delete ", id);
		const self = this;

	    Swal.fire({
	      	title: 'Are you sure?',
	      	text: `You will delete "${title}" record!`,
	      	type: 'warning',
	      	showCancelButton: true,
	      	confirmButtonText: 'Yes',
	      	cancelButtonText: 'No'
	    }).then((result) => {
	      	if (result.value) {
	        	this.delete(id);
	      	} else if (result.dismiss === Swal.DismissReason.cancel) {
	        
	      	}
	    });
	}

	delete(id:string){
		this._httpClient.patch(`http://127.0.0.1:3000/transactions/${id}`,{ "transaction_status":  false })
		.subscribe(data  => {
			console.log("Record deleted successful ", data);
			window.location.reload();
		},error  => {
			console.log("Error", error);
		});
	}

	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

}
