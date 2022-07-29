import { Component, OnInit } from '@angular/core';
import { CreateUpdatePlayer } from 'src/app/player/interfaces/create-update-player';
import { MatchCreateUpdate } from '../../interfaces/match-create-update';
import { MatchService } from '../../services/match-service';

@Component({
  selector: 'app-match-sixteen',
  templateUrl: './match-sixteen.component.html',
  styleUrls: ['./match-sixteen.component.css']
})
export class MatchSixteenComponent implements OnInit {

  private roundOfSixteen:MatchCreateUpdate[]=[]

  get roundofsix(){
    return this.roundOfSixteen
  }

  constructor(private matchservice:MatchService ) { }

  ngOnInit(): void {
    this.Sixteen
  }

  get Sixteen(){
    return this.matchservice.getSixteen().subscribe(resp=>{
      this.roundOfSixteen= resp
      console.log(resp)
    })
  }

}
