import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from  "@angular/common/http";
import { TransactionModel, NotificationService } from '../../../../shared/index';
import { environment } from './../../../../../environments/environment';
import { Guid } from "guid-typescript";
import { PubSubService } from 'angular7-pubsub';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

    
    public baseUrl:string = environment._apiEndpoint;
	public model:any = new TransactionModel();
	public processing:boolean;
    public formError: boolean;
    public formErrorMessage: string;

    constructor(
        private _httpClient:HttpClient, 
        private _notifyService: NotificationService,
        private _pubsub: PubSubService) { 
        //this.showToaster();
    }

    ngOnInit() {

    }

    showToaster(){
        this._notifyService.showDefault("<h1>Data shown successfully</h1>", 'Notification', {enableHtml:true});
        this._notifyService.showSuccess("Data shown successfully", 'Notification');
        this._notifyService.showInfo("Data shown successfully", 'Notification');
        this._notifyService.showWarning("Data shown successfully", 'Notification');
        this._notifyService.showError("Data shown successfully", 'Notification');
    }

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
            this.model.transaction_status = "active";
            //console.log("We are submitting the income form", this.model);

            this.saveIncome(this.model);
        }
    }

    saveIncome(data:any){
        this._httpClient.post(`${this.baseUrl}/transactions`, data)
        .subscribe( data  => {
            let pubMessage = {
                type: 'success',
                message: 'Income was added successfully',
                data: data
            };
            this._pubsub.$pub('updateTransactions', pubMessage);
            this._pubsub.$pub('closeModal', { message:'closeIncomeModal' });
            localStorage.setItem('currentUser', "try and get this without refresh");
            this.model = new TransactionModel();
        }, error  => {
            console.log("Error", error);
        });
    }

}
