import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private _baseUrl="http://localhost:8080";

  constructor(private _http:HttpClient) { };

  public getEvents():Observable<any[]>
  {
    return this._http.get<any[]>(`${this._baseUrl}/events`);
  }

  public deleteEventById(id:number):Observable<any>
  {
    return this._http.delete(`${this._baseUrl}/delete/${id}`,{responseType:'text'});
  }

  
  public PostEvent(event:any):Observable<any>
  {
    return this._http.post<any>(this._baseUrl,event,{headers:{'Content-Type':'application/json'}});
  }

public updateEvent(id:number, partialEvent: any):Observable<any>{
  return this._http.patch<any>(`${this._baseUrl}/${id}`,partialEvent);
}

public putEvent(id:number,updatedevent:any):Observable<any>
{
  return this._http.put(`${this._baseUrl}/update/${id}`,updatedevent);
}

public getEventById(id:number):Observable<any>
{
  return this._http.get<any>(`${this._baseUrl}/${id}`);
}

public findbyname(name:string):Observable<any>
{
  return this._http.get<any>(`${this._baseUrl}/name/${name}`);
}

public findbyoccasion(occasion:string):Observable<any>
{
  return this._http.get<any>(`${this._baseUrl}/occasion/${occasion}`);
}

public findbylocation(location:string):Observable<Event[]>
{
  return this._http.get<Event[]>(`${this._baseUrl}/location/${location}`);
}

public findbydate(date:string):Observable<any>
{
  return this._http.get<any>(`${this._baseUrl}/date/${date}`);
}


public getEventsortedbydate():Observable<any>{
  return this._http.get(`${this._baseUrl}/all/`);
}
}
