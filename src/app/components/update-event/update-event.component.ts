import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit
{
eventid: number;
updateForm: FormGroup;



  constructor(
    private _route:ActivatedRoute,
    private _fb: FormBuilder,
    private _eventservice:EventsService,
    private _router:Router
  ){}

  ngOnInit(): void{
     this.eventid=Number(this._route.snapshot.paramMap.get('id'));

     this.updateForm=this._fb.group({
      name:['',Validators.required],
      occasion:[''],
      description:[''],
      location:[''],
      date:[''],
      time:[''],
      expectedGuests:[''],
      catering:[''],
      decorations:['']

     });


    this._eventservice.getEventById(this.eventid).subscribe((data:Event) =>
    {
      this.updateForm.patchValue(data);
      console.log(Event);
    },(err) =>
    {
      console.error(err);
    }
    
    );
  }

 
  updateEvent() 
  {
    this._eventservice.putEvent(this.eventid,this.updateForm.value).subscribe((res) =>
    {
      console.log(res);
      this._router.navigate(['/display']);
    },(err) =>
    {
      console.error(err);
    });

    }
 

}



  


