import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { Observable } from  "rxjs/Observable";
import { TransactionModel, NotificationService, ApiResponse } from '../../../../shared/index';
import { environment } from './../../../../../environments/environment';
import Swal from 'sweetalert2';
import { PubSubService } from 'angular7-pubsub';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, OnDestroy  {

	@ViewChild('displayDetailsBtn', { static: false }) displayDetailsBtn: ElementRef;

	public baseUrl:string = environment._apiEndpoint;
	public transactionsObservable : Observable<ApiResponse<TransactionModel[]>>;
	public transactions:any;
	public transaction:any = {};
	public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "transaction_date_created";
    public sortOrder = "desc";
    public closeUpdateTransactionsSub:any = null;


	constructor(
  		private _el: ElementRef,
		private _httpClient:HttpClient, 
        private _notifyService: NotificationService, 
        private _pubsub: PubSubService) { }

	ngOnInit() {
		this.closeUpdateTransactionsSub = this._pubsub.$sub('updateTransactions').subscribe((dataFromPublisher) =>{
			//console.log(dataFromPublisher);
			if(dataFromPublisher.type == 'success'){
				this._notifyService.showSuccess(dataFromPublisher.message, 'Notification');
				this.getAllTransaction();
			}
		});

		this.getAllTransaction();
	}

	public getAllTransaction(){
		this._httpClient.get<ApiResponse<TransactionModel[]>>(`${this.baseUrl}/transactions`)
		.subscribe(result  => {
			//console.log("GET Request is successful ", result);
			if(result.status == '200'){
				this.transactions = result.data;
				//console.log(this.transactions);
			}
			
		},
		error  => {
			console.error("Error", error);
		});
	}

	public getOneTransaction(id:string){
		this._httpClient.get<ApiResponse<TransactionModel[]>>(`${this.baseUrl}/transactions/${id}`)
		.subscribe(result  => {
			if(result.status == '200'){
				this.transaction = result.data;
			}
		},
		error  => {
			console.error("Error", error);
		});
	}

	public onViewDetails(id:string){
		//console.log("You are about to edit ", id);
		this.getOneTransaction(id);
		this.displayDetailsBtn.nativeElement.click();
	}

	public onEdit(id:string){
		//console.log("You are about to edit ", id);
	}

	public onDelete(id:string, title:string){
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

	public delete(id:string){
		this._httpClient.put(`${this.baseUrl}/transactions/${id}`,{ "transaction_status":  "delete" })
		.subscribe(data  => {
			console.log("Record deleted successful ", data);
			//window.location.reload();
			let pubMessage = {
                type: 'success',
                message: 'Transaction record deleted successfully',
                data: data
            };
            this._pubsub.$pub('updateTransactions', pubMessage);
		},error  => {
			console.error("Error", error);
		});
	}

	public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    ngOnDestroy() {
        this.closeUpdateTransactionsSub.unsubscribe();
    }

}
