import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { InstaceView } from '../interfaces/InstaceViewInterface';

import { MatchCreate } from '../interfaces/MatchCreateInterface';
import { MatchViewModels } from '../interfaces/MatchViewInterface';
import { StadiumView } from '../interfaces/StadiumViewinterface';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url:string='http://localhost:1186'


  constructor(private http:HttpClient) { }

  searchMatches():Observable<MatchViewModels[]>{

    return this.http.get<MatchViewModels[]>(this.url+'/api/Matches')

   }

   createMatch(newMatch:MatchCreate){
    this.http.post(this.url+'/api/Matches',newMatch).subscribe();
    console.log('incoming')
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
