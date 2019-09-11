import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { Observable } from  "rxjs/Observable";
import { TransactionModel, NotificationService, ApiResponse } from '../../../../shared/index';
import { environment } from './../../../../../environments/environment';
import Swal from 'sweetalert2';
import { PubSubService } from 'angular7-pubsub';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public baseUrl:string = environment._apiEndpoint;
    public transactionsObservable : Observable<ApiResponse<TransactionModel[]>>;
    public transactions:any;
    public total_income:number = 0;
    public total_expense:number = 0;
    public balance:number = 0;

  	constructor(private _httpClient:HttpClient, 
        private _notifyService: NotificationService, 
        private _pubsub: PubSubService) { }

  	ngOnInit() {
        setTimeout(() => this._notifyService.showInfo('Welcome to one pesewa, enjoy the app', 'One Pesewa'));
        
  		this._pubsub.$sub('updateTransactions').subscribe((dataFromPublisher) =>{
            if(dataFromPublisher.type == 'success'){
                this.transactions = [];
                this.total_income = 0;
                this.total_expense = 0;
                this.balance = 0;
                this.dashboardStatistics();
            }
            
            setTimeout(() => {
                let rawDetails = localStorage.getItem('currentUser');
                //console.log(rawDetails);
            });
            
        });
        this.dashboardStatistics();

        
  	}

      public dashboardStatistics(){
          const self = this;
        this._httpClient.get<ApiResponse<TransactionModel[]>>(`${this.baseUrl}/transactions`)
        .subscribe(result  => {
            //console.log("GET Request is successful ", data);
            //this.transactions = data;
            if(result.status == '200'){
                result.data.forEach(function(obj){
                    if(obj.transaction_status[0] === 'active' && obj.transaction_type === 'credit'){
                        self.total_income += obj.amount;
                    }

                    if(obj.transaction_status[0] === 'active' && obj.transaction_type === 'debit'){
                        self.total_expense += obj.amount;
                    }
                    //console.log(obj);
                });

                this.balance = this.calculateBalance(self.total_income, self.total_expense);
            }
            else{
                console.log('display the appropriate error')
            }
            
        },
        error  => {
            console.error("Error", error);
        });
      }

    public onHover(){
        console.log("He just passed over me");
    }

    public calculateBalance(totalIncome:number, totalExpense:number){
        let balance = totalIncome - totalExpense;
        return balance;
    }

}
