import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EventbynameComponent } from './components/eventbyname/eventbyname.component';
import { EventbyoccasionComponent } from './components/eventby-occasion/eventby-occasion.component';
import { AboutComponent } from './components/about/about.component';
import { EventBYLocationComponent } from './components/event-bylocation/event-bylocation.component';
import { EventBYDateComponent } from './components/event-bydate/event-bydate.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"/home",
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'createEvent',
    component:CreateEventComponent
  
  },
  {
    path:'display',
    component:DisplayEventComponent
  },
  {
    path:'update/:id',
    component:UpdateEventComponent
  },
  {
    path:'eventbyname/:id',
    component:EventbynameComponent
  },
  {
    path:'eventbyoccasion/:id',
    component:EventbyoccasionComponent
  },
  {
    path:'eventbylocation/:location',
    component:EventBYLocationComponent
  },
  {
    path:'eventbydate/:date',
    component:EventBYDateComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
