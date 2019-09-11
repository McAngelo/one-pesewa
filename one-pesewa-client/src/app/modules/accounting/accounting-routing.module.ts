import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    MainAccountingComponent
} from './components/index';

const routes: Routes = [
    {
        path: '',
        component: MainAccountingComponent,
        children: [
            { path: '', redirectTo: 'accounting', pathMatch: 'full' },
            {  path: 'accounting', component: MainAccountingComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountingRoutingModule {} 