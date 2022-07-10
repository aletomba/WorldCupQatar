import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {

  constructor(private share:ShareService) { }



  ngOnInit(): void {


  }



}
