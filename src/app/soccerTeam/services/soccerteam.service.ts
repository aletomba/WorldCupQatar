import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupView } from '../interfaces/group-view';
import { SoccerTeamView } from '../interfaces/SoccerteamView';

@Injectable({
  providedIn: 'root'
})
export class SoccerteamService {

  private url:string='http://localhost:1186'

  constructor(private http:HttpClient) { }

  searchSoccerteam():Observable<SoccerTeamView[]>{

    return this.http.get<SoccerTeamView[]>(this.url+'/api/SoccerTeam')

   }

   createSoccerTeam(soccer:SoccerTeamView){
    return this.http.post(this.url+'/api/SoccerTeam',soccer).subscribe()
   }

   updateSoccerTeam(soccer:SoccerTeamView){
    return this.http.put(this.url+'/api/SoccerTeam',soccer).subscribe()
   }

   deleteSoccerTeam(id:undefined){
   return this.http.delete(this.url+'/api/SoccerTeam/'+id).subscribe()
   }

   //----------------------------------GroupService-------------------------------
   getGroups():Observable<GroupView[]>{
    return this.http.get<GroupView[]>(this.url+'/api/Group')
   }
}

