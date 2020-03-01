import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalLayoutComponent } from './main/portal-layout/portal-layout.component';
import { LandingLayoutComponent } from './main/landing-layout/landing-layout.component';

const routes: Routes = [
	/* Landing module route */
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: '', 
        component: LandingLayoutComponent,
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) 
    },
    { 
        path: '',  
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule) 
    },
    /*{ path: '', loadChildren: () => import('./modules/csv-json/csv-json.module').then(m => m.CsvJsonModule) },*/
    
    /* Error Messages routes */
    /*{ path: 'error', loadChildren: './modules/error-messages/error-messages.module#ErrorMessagesModule' },
    { path: 'access-denied', loadChildren: './modules/error-messages/error-messages.module#ErrorMessagesModule' },
    { path: 'not-found', loadChildren: './modules/error-messages/error-messages.module#ErrorMessagesModule'  },*/
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
