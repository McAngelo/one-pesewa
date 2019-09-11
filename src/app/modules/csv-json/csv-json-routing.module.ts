import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    MainConvertorComponent
} from './components/index';

const routes: Routes = [
    {
        path: '',
        component: MainConvertorComponent,
        children: [
            { path: '', redirectTo: 'csv-to-json', pathMatch: 'full' },
            {  path: 'csv-to-json', component: MainConvertorComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CsvJsonRoutingModule {} 