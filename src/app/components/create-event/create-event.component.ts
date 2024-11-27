import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

createForm: FormGroup;

constructor(private _formbuilder:FormBuilder,private _create:EventsService,
  private _router:Router
){};

ngOnInit()
{
this.createForm=this._formbuilder.group({
  "name":[''],
  "occasion":[''],
  "description":[''],
  "date":[''],
  "time":[''],
  "location":[''],
  "expectedGuests":[''],
  "catering":[''],
  "decorations":['']

})
}

postData() {

 const eventData=this.createForm.value;
 
 if (eventData.time) {
  const timeParts = eventData.time.split(':');
  eventData.time = `${timeParts[0]}:${timeParts[1]}:00`; // Adjust to match the expected format
}


 console.log("sending",eventData);
    this._create.PostEvent(eventData).subscribe(
      (res) =>
      {
        alert("Event added successfully");
        console.log("Event added successfully",res);
        this._router.navigate(['/display']);
      },
      (err)=>
      {
        console.error(err);
      }
    )
  }

}
