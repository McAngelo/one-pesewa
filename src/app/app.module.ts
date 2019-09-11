import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { DataTableModule } from "angular2-datatable";
import { ToastrModule } from 'ngx-toastr';
/*import { PubSubModule } from 'angular7-pubsub';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        DataTableModule,
        ToastrModule.forRoot(),
        /*PubSubModule.forRoot()*/
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }