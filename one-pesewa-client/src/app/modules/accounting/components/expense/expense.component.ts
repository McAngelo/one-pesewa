import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { TransactionModel } from '../../../../shared/index';
import { environment } from './../../../../../environments/environment';
import { Guid } from "guid-typescript";
import { PubSubService } from 'angular7-pubsub';

@Component({
	selector: 'app-expense',
	templateUrl: './expense.component.html',
	styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

    public baseUrl:string = environment._apiEndpoint;
	public model:any = new TransactionModel();
	public processing:boolean;
    public formError: boolean;
    public formErrorMessage: string;

    constructor(
        private _httpClient:HttpClient,
        private _pubsub: PubSubService) { }

    ngOnInit() { }

    onSubmit(){
        let amount = parseInt(this.model.amount);

        if(amount < 0){
            this.formError = true;
            this.formErrorMessage = `value cannot be empty or negative`;

            const self = this;

            setTimeout(function(){
                self.formError = false;
            }, 4000);
        }else{
            let uniqueId = Guid.create();
            this.model.transaction_id = uniqueId.toString();
            this.model.amount = amount;
            this.model.user_id = 1;
            this.model.transaction_created_by = 1;
            this.model.transaction_date_created = Date.now();
            this.model.transaction_type = "debit";
            this.model.transaction_status = "active";
            console.log("We are submitting the income form", this.model);

            this.save(this.model);
        }
    }

    save(data:any){
        this._httpClient.post(`${this.baseUrl}/transactions`, data)
        .subscribe( data  => {
            /*console.log("POST Request is successful ", data);
            window.location.reload();*/
            let pubMessage = {
                type: 'success',
                message: 'Expense was added successfully',
                data: data
            };
            this._pubsub.$pub('updateTransactions', pubMessage);
            this._pubsub.$pub('closeModal', { message:'closeExpenseModal' });
            this.model = new TransactionModel();
        }, error  => {
            console.log("Error", error);
        });
    }

}
