import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainConvertorComponent } from './components/';
import { CsvJsonRoutingModule } from './csv-json-routing.module';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap/ngx-bootstrap';

@NgModule({
  declarations: [MainConvertorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    CsvJsonRoutingModule
  ]
})
export class CsvJsonModule { }
