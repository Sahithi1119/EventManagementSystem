import { Component} from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: 'app-eventbyoccasion',
  templateUrl: './eventby-occasion.component.html',
  styleUrls: ['./eventby-occasion.component.css']
})
export class EventbyoccasionComponent
{
  selectedEvent: any;

  constructor(private _eventservice: EventsService,private _route:ActivatedRoute){}
  ngOnInit():void
  {
    const eventId=Number(this._route.snapshot.paramMap.get('id'));
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