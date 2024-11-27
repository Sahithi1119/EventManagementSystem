import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import { DeleteEventComponent } from './components/delete-event/delete-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EventbynameComponent } from './components/eventbyname/eventbyname.component';
import { EventbyoccasionComponent } from './components/eventby-occasion/eventby-occasion.component';
import { AboutComponent } from './components/about/about.component';
import { EventBYLocationComponent } from './components/event-bylocation/event-bylocation.component';
import { EventBYDateComponent } from './components/event-bydate/event-bydate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEventComponent,
    DisplayEventComponent,
    DeleteEventComponent,
    UpdateEventComponent,
    PagenotfoundComponent,
    EventbynameComponent,
    EventbyoccasionComponent,
    AboutComponent,
    EventBYLocationComponent,
    EventBYDateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
