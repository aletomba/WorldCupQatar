import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
