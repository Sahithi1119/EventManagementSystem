import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-bydate',
  templateUrl: './event-bydate.component.html',
  styleUrls: ['./event-bydate.component.css']
})
export class EventBYDateComponent {
  selectedEvent: any;
  date: string = '';

  constructor(private _route: ActivatedRoute, private _eventservice: EventsService) { }

  ngOnInit(): void {
    const dateParam = this._route.snapshot.paramMap.get('date') || '';
  
    if (dateParam) {
      const date = new Date(dateParam);
  
      if (!isNaN(date.getTime())) {
        const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        this._eventservice.findbydate(formattedDate).subscribe(
          (event) => {
            this.selectedEvent = event;
            console.log(this.selectedEvent);
          },
          (error) => {
            console.error(error);
            alert('Error retrieving event details.');
          }
        );
      } else {
        alert("Invalid date format");
      }
    } else {
      alert("No date provided");
    }
  }
  
}
