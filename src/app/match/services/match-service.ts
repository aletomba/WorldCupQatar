import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

import { MatchCreateUpdate } from '../interfaces/match-create-update'
import { MatchType } from '../interfaces/match-type';
import { StadiumView } from '../interfaces/StadiumViewinterface';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private url:string='http://localhost:5187'


  constructor(private http:HttpClient) { }

  searchMatches():Observable<MatchCreateUpdate[]>{

    return this.http.get<MatchCreateUpdate[]>(this.url+'/Matches/all')
   }

   getSixteen():Observable<MatchCreateUpdate[]>{
    return this.http.get<MatchCreateUpdate[]>(this.url+'/Matches/GetMatchesByType?matchType=2')
   }


   createMatch(newMatch:MatchCreateUpdate):Observable<MatchCreateUpdate[]>{
    return this.http.post<MatchCreateUpdate[]>(this.url+'/Matches/Create Matches',newMatch);
   }

   editMatch(edit:MatchCreateUpdate):Observable<MatchCreateUpdate[]>{
    return this.http.put<MatchCreateUpdate[]>(this.url+'/Matches/edit',edit);
   }

   deleteMatch(id:undefined){
    return this.http.delete(this.url+'/api/Matches/'+id).subscribe();
   }

   //----------------StadiumService---------------------

   getStadium():Observable<StadiumView[]>{
    return this.http.get<StadiumView[]>(this.url + '/api/Stadium')
   }
   //--------------InstanceService-----------------------
   getInstance():Observable<MatchType[]>{
    return this.http.get<MatchType[]>(this.url + '/api/MatchType')
   }


}

