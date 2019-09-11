import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { AlertModule } from 'ngx-bootstrap/ngx-bootstrap';
import { MainGalleryComponent } from './components/index';

@NgModule({
  declarations: [MainGalleryComponent],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
