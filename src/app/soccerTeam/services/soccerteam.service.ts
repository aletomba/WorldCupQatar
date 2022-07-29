import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoccerTeamView } from '../interfaces/SoccerteamView';

@Injectable({
  providedIn: 'root'
})
export class SoccerteamService {

  private url:string='http://localhost:5187'

  constructor(private http:HttpClient) { }

  searchSoccerteam():Observable<SoccerTeamView[]>{

    return this.http.get<SoccerTeamView[]>(this.url+'/api/Teams/all')

   }

   createSoccerTeam(soccer:SoccerTeamView){
    return this.http.post(this.url+'/api/Teams',soccer).subscribe()
   }

   updateSoccerTeam(soccer:SoccerTeamView){
    return this.http.put(this.url+'/api/Teams',soccer).subscribe()
   }

   deleteSoccerTeam(id:undefined){
   return this.http.delete(this.url+'/api/Teams'+id).subscribe()
   }

   //----------------------------------GroupService-------------------------------

}

