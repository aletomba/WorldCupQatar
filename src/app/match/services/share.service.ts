import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatchCreate } from '../interfaces/MatchCreateInterface';
import { MatchViewModels } from '../interfaces/MatchViewInterface';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  @Output() open:EventEmitter<MatchCreate>= new EventEmitter();
  constructor() { }


}
