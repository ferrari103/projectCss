import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarComponent, ChunkPipe} from './calendar/calendar.component';
import {FormsModule} from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ChunkPipe,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
