import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	ClientLayoutComponent, 
	ProfileComponent, 
	DashboardComponent, 
	TransactionsComponent 
} from './index';

import { ClientRoutingModule } from './client-routing.module';



@NgModule({
	declarations: [
		ClientLayoutComponent, 
		ProfileComponent, 
		DashboardComponent, 
		TransactionsComponent
	],
	imports: [
		CommonModule,
		ClientRoutingModule
	]
})
export class ClientModule { }
