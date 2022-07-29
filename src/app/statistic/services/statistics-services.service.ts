import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatiticsView } from '../interfaces/statitics-view';

@Injectable({
  providedIn: 'root'
})
export class StatisticsServicesService {

  private url:string='http://localhost:5187'
  constructor(private http:HttpClient)
  {

  }

  getResult(group:string):Observable<StatiticsView[]>
    {
      return this.http.get<StatiticsView[]>(this.url+'/api/Results/GroupName?groupName='+group)
    }

}
