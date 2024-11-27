import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-eventbyname',
  templateUrl: './eventbyname.component.html',
  styleUrls: ['./eventbyname.component.css']
})
export class EventbynameComponent 
{
  selectedEvent: any;

  constructor(private route:ActivatedRoute , private _eventservice: EventsService){}

  ngOnInit():void{

    const eventId=Number(this.route.snapshot.paramMap.get('id'));
    if(eventId)
    {
      this._eventservice.getEventById(eventId).subscribe(
        (event) => {
            this.selectedEvent = event;
        },
        (error) => {
            console.error(error);
            alert('Error retrieving event details.');
        }
    );
    }
  }
}
