import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { Observable } from  "rxjs/Observable";
import { TransactionModel } from '../../shared/index';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  	private readonly notifier: NotifierService;
    public transactionsObservable : Observable<TransactionModel[]>;
    public transactions:any;
    public total_income:number = 0;
    public total_expense:number = 0;
    public balance:number = 0;

  	constructor(private _notifierService: NotifierService, private _httpClient:HttpClient) {
	  	this.notifier = _notifierService; 
        //this.total_income = this.transactions.sum('amount');
        //var adults_sum = 0, children_sum = 0;

        /*this.transactions.forEach(function(obj){
            console.log(obj);
            adults_sum += obj["adults"];
            children_sum += obj["children"];
        });*/
	}

  	ngOnInit() {
  		//this.notifier.notify('info', `Welcome to one pesewa, enjoy the app` );

  		/*Swal.fire(
            'Successful',
            'Welcome to the dashboard info.',
            'success'
        );*/

        const self = this;
        this._httpClient.get<TransactionModel[]>("http://localhost:3000/transactions")
        .subscribe(data  => {
            //console.log("GET Request is successful ", data);
            //this.transactions = data;
            data.forEach(function(obj){
                if(obj.transaction_status && obj.transaction_type === 'credit'){
                    self.total_income += obj.amount;
                }

                if(obj.transaction_status && obj.transaction_type === 'debit'){
                    self.total_expense += obj.amount;
                }
                //console.log(obj);
            });

            this.balance = this.calculateBalance(self.total_income, self.total_expense);
        },
        error  => {
            console.error("Error", error);
        });
  	}

    calculateBalance(totalIncome:number, totalExpense:number){
        let balance = totalIncome - totalExpense;
        return balance;
    }

}
