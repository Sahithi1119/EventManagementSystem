import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-bylocation',
  templateUrl: './event-bylocation.component.html',
  styleUrls: ['./event-bylocation.component.css']
})
export class EventBYLocationComponent {
constructor(private _route:ActivatedRoute,private _eventservice:EventsService){}
events: any[]=[];
location: string='';

ngOnInit():void{
  this._route.params.subscribe((params) =>{
    this.location=params['location'];
    this.fetchEventsByLocation();
  }
  )
}
  fetchEventsByLocation():void{
    this._eventservice.findbylocation(this.location).subscribe(
      (res) =>
      {
        this.events=res;
        console.log(this.events);
      },
      (err) =>
      {
        console.error("error fetching events:",err);
      }
    );
    
  }

}
