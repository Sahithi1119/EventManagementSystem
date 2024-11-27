import { Time } from "@angular/common";

export class Event
 {
    id:number;
    name:string;
    occasion:string;
    description:string;
    location:string;
    date:Date;
    time:Time   
    expectedGuests:number;
    decorations:string;
}
