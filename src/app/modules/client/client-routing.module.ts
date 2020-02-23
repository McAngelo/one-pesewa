import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
    ClientLayoutComponent
} from './index';
 
const routes: Routes = [
    
    { path: 'client-portal', component: ClientLayoutComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}
