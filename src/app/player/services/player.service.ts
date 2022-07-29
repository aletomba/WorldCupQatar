import { HttpClient } from '@angular/common/http';
import { Injectable, PlatformRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUpdatePlayer } from '../interfaces/create-update-player';
import { PlayerCreate } from '../interfaces/player-create';
import { PlayerView } from '../interfaces/player-view';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url:string='http://localhost:5187'

  constructor(private http:HttpClient) { }

  getAllPLayer():Observable<CreateUpdatePlayer[]>
  {
    return this.http.get<CreateUpdatePlayer[]>(this.url+'/api/Players/all')
  }

  createPlayer(player:CreateUpdatePlayer){
    this.http.post(this.url +'/api/Players',player)
  }
}
