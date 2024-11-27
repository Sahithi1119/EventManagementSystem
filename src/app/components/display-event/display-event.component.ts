import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent {
  public EventData:any[]=[] ;
  public eventName:string='';
  public occasion:string='';
  public selectedEvent:any;
  public eventNotFound: boolean=false;
public searchType: string='';
public originalData:any[]=[];//for sorted data

events:Event[]=[];
location:string='';
date:string;

  constructor(private _eventservice:EventsService,private _dialog:MatDialog, private _router:Router){};

  @ViewChild('dialogTemplate') dialogTemplate!: any;


  ngOnInit()
  {
    this.getEvents();
  }
  
  public getEvents()
  {
    this._eventservice.getEvents().subscribe(
      (res)=>{
        console.log(res)
        this.originalData=res;
        this.EventData=[...this.originalData];
       
      }
    );
  }

  public deleteEvent(id:number)
  {
    this._eventservice.deleteEventById(id).subscribe(
      (response)=>{
        console.log(response);
        this.EventData=this.EventData.filter(event => event.id !== id);

        this.getEvents();
      }
    );
  }


  onSearch(): void {
    this.resetToDefault();
    if (this.searchType === 'name') {
      this.findbyname();
    } else if (this.searchType === 'occasion') {
      this.findbyoccasion();
    } 
    else if(this.searchType==='location'){
      this.findEventsbyLocation();
    }
    else if(this.searchType==='date'){
      this.findEventsbyDate();
    }
    else {
      alert('Please select a search type.');
    }
  }

  findbyname(): void {
    this.eventNotFound = false;
    this._eventservice.findbyname(this.eventName).subscribe(
        (res) => {
            if (res && res.id) { // Assuming the response has an id field
                this._router.navigate(['/eventbyname', res.id]);
            } else {
              console.log(res);
                alert('No event found with that name.');
            }
        },
        (err) => {
            console.error(err);
            alert('No event found with that name.');
        }
    );
}

findbyoccasion():void{
  this.eventNotFound=false;
  this._eventservice.findbyoccasion(this.occasion).subscribe(
    (res) =>{
      console.log(res);
      if(Array.isArray(res) && res.length > 0){
        this._router.navigate(['/eventbyoccasion',res[0].id]);
      }
      else{
        console.log(res);
        this.eventNotFound = true;
        alert('no event found with that occassion.')
      }
    },
    (err) =>{
      console.error(err);
      this.eventNotFound = true;
      alert("no event found with thar occassion");
    }
  );

}
  findEventsbyLocation():void{
    if(this.location.trim()==='')
    {
      alert('please enter valid locatio.');
      return;
    }
    this._eventservice.findbylocation(this.location).subscribe(
      (res) =>{
        if(res && res.length>0)
        {
          this._router.navigate(['/eventbylocation',this.location]);
        }
        else
        {
          alert("No events found with this location.");
        }
      },
      (err)=>{
          console.error("error fetching results",err);
      }
    );
  }

  findEventsbyDate():void {
    this._eventservice.findbydate(this.date).subscribe(
      (res) =>{
        if(res)
        {
          this._router.navigate(['/eventbydate',this.date]);
        }
        else
        {
          alert("No event fount with this Date")
        }
      },
      (err)=>{
        console.error("error fetching results",err);
      }

    )

    
  }

  sortByDate():void{
    this.resetToDefault();
    this.EventData.sort((a,b) => new Date(a.date).getTime()-new Date(b.date).getTime());
  }


  public resetToDefault(): void {
    this.EventData = [...this.originalData]; // Reset to default data
  }
}
