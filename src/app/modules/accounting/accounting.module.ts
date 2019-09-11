import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { DataTableModule } from "angular2-datatable";
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AccountingRoutingModule } from './accounting-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { PubSubModule } from 'angular7-pubsub';

import { 
	IncomeComponent, 
	ExpenseComponent, 
	TransactionsComponent, 
	GraphComponent, 
	DashboardComponent,
	MainAccountingComponent
} from './components/index';



const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 50000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 10
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

@NgModule({
	declarations: [
		IncomeComponent,
		ExpenseComponent,
		TransactionsComponent,
		GraphComponent,
		DashboardComponent,
		MainAccountingComponent],
	imports: [
		CommonModule,
		AccountingRoutingModule,
		FormsModule,
	    HttpClientModule,
	    DataTableModule,
	    NotifierModule.withConfig(customNotifierOptions),
        ToastrModule.forRoot(),
        PubSubModule.forRoot()
	]
})
export class AccountingModule { }
