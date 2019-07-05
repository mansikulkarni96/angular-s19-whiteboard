import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {routing} from './app.routing';
import { CourseServiceClient } from './services/CourseServiceClient';

import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [CourseServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
