import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  IncomeComponent, 
  ExpenseComponent, 
  TransactionsComponent, 
  GraphComponent, 
  DashboardComponent 
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    ExpenseComponent,
    TransactionsComponent,
    GraphComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
