import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { InstaceView } from '../interfaces/InstaceViewInterface';
import { MatchCreateUpdate } from '../interfaces/match-create-update'
import { MatchViewModels } from '../interfaces/MatchViewInterface';
import { StadiumView } from '../interfaces/StadiumViewinterface';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url:string='http://localhost:1186'


  constructor(private http:HttpClient) { }

  searchMatches():Observable<MatchCreateUpdate[]>{

    return this.http.get<MatchCreateUpdate[]>(this.url+'/api/Matches')

   }

   createMatch(newMatch:MatchCreateUpdate){
    this.http.post(this.url+'/api/Matches',newMatch).subscribe();

   }

   editMatch(edit:MatchCreateUpdate){
    this.http.put(this.url+'/api/Matches',edit).subscribe();
   }

   deleteMatch(id:undefined){
    return this.http.delete(this.url+'/api/Matches/'+id).subscribe();
   }

   //----------------StadiumService---------------------

   getStadium():Observable<StadiumView[]>{
    return this.http.get<StadiumView[]>(this.url + '/api/Stadium')
   }
   //--------------InstanceService-----------------------
   getInstance():Observable<InstaceView[]>{
    return this.http.get<InstaceView[]>(this.url + '/api/Instance')
}
}
