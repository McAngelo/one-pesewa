import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	/* Landing module route */
    { path: '', loadChildren: () => import('./modules/accounting/accounting.module').then(m => m.AccountingModule) },
    /*{ path: '', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },
    { path: '', loadChildren: () => import('./modules/csv-json/csv-json.module').then(m => m.CsvJsonModule) },*/
    
    /* Error Messages routes */
    /*{ path: 'error', loadChildren: './modules/error-messages/error-messages.module#ErrorMessagesModule' },
    { path: 'access-denied', loadChildren: './modules/error-messages/error-messages.module#ErrorMessagesModule' },
    { path: 'not-found', loadChildren: './modules/error-messages/error-messages.module#ErrorMessagesModule'  },*/
    { path: '', redirectTo: 'accounting', pathMatch: 'full' },
    { path: '**', redirectTo: 'accounting' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
