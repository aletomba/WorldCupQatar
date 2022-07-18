import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerView } from '../interfaces/player-view';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url:string='http://localhost:1186'

  constructor(private http:HttpClient) { }

  getAllPLayer():Observable<PlayerView[]>
  {
    return this.http.get<PlayerView[]>(this.url+'/api/Players')
  }
}
