import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    MainGalleryComponent
} from './components/index';

const routes: Routes = [
    {
        path: '',
        component: MainGalleryComponent,
        children: [
            { path: '', redirectTo: 'gallery', pathMatch: 'full' },
            {  path: 'gallery', component: MainGalleryComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalleryRoutingModule {} 