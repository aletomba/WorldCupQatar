import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { observable, Observable } from 'rxjs';
import { MatchViewModels } from '../interfaces/MatchViewInterface';

@Injectable({
  providedIn: 'root'
})
export class MatchViewServiceService {

  private url:string='http://localhost:1186/api/Matches'



  constructor(private http:HttpClient) { }

  searchMatches():Observable<MatTableDataSource<MatchViewModels>>{

    return this.http.get<MatTableDataSource<MatchViewModels>>(this.url)

   }
}
