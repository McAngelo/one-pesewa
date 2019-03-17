import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { TransactionModel } from '../../shared/index';
import { Guid } from "guid-typescript";

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

	public model:any = new TransactionModel();
	public processing:boolean;
    public formError: boolean;
    public formErrorMessage: string;

    constructor(private _httpClient:HttpClient) { }

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
            this.model.transaction_type = "credit";
            this.model.transaction_status = true;
            console.log("We are submitting the income form", this.model);

            this.saveIncome(this.model);
        }
    }

    saveIncome(data:any){
        this._httpClient.post("http://127.0.0.1:3000/transactions",data)
        .subscribe( data  => {
            console.log("POST Request is successful ", data);
            window.location.reload();
        }, error  => {
            console.log("Error", error);
        });
    }

}
