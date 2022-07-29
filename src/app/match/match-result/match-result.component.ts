import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { SoccerTeamView } from 'src/app/soccerTeam/interfaces/SoccerteamView';
import { SoccerteamService } from 'src/app/soccerTeam/services/soccerteam.service';
import { MatchCreateUpdate } from '../interfaces/match-create-update';
import { MatchType } from '../interfaces/match-type';
import { MatchService } from '../services/match-service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  newMatch!: MatchCreateUpdate
  resultMatch!: MatchCreateUpdate
  action:string='Resultado'
  buttonName:string='Finalizar'
  private allInstances:MatchType[]=[];
  private allCountrys: SoccerTeamView[] = [];

  get Instances(){
    return this.allInstances
  }

  get countrys() {
    return this.allCountrys
  }


  constructor(private router:Router,private shared:ShareService,private formBuilder:FormBuilder,private matchcreate:MatchService,private soccerteamservice:SoccerteamService)
   {this.incomingData()}


   ngOnInit(): void {
    this.Instance
    this.Soccerteam
  }

   miForm = this.formBuilder.group({
    idStadium:[],
    stadium:[, [Validators.required, Validators.min(1)]],
    matchType: [, [Validators.required, Validators.min(1)]],
    team1: [, [Validators.required, Validators.min(1)]],
    goalsTeam1: [, [Validators.required]],
    team2: [, [Validators.required, Validators.min(1)]],
    goalsTeam2: [, [Validators.required]],
    dataTime: [, [Validators.required, Validators.min(1)]],
  });


incomingData(){
  this.shared.open.subscribe(resp=>{
    this.resultMatch = resp
    this.miForm.patchValue({
      idStadium:resp.idStadium,
      stadium:resp.stadium,
      matchType: resp.idMatchType,
      team1: resp.idTeam1,
      goalsTeam1:resp.goalsTeam1,
      team2: resp.idTeam2,
      goalsTeam2:resp.goalsTeam2,
  })
})}

saveOrUpdate(){
  if (this.miForm.invalid) {
    this.miForm.markAllAsTouched();
  }
  if (this.resultMatch != undefined) {
    this.editMatchs()

  }
}
editMatchs(){
  console.log('editing')
  this.newMatch = {
    idMatch: this.resultMatch.idMatch,
    stadium:this.resultMatch.stadium,
    idStadium: this.resultMatch.idStadium,
    matchType: this.miForm.controls['matchType'].value,
    team1: this.miForm.controls['team1'].value,
    goalsTeam1: this.miForm.controls['goalsTeam1'].value,
    team2: this.miForm.controls['team2'].value,
    goalsTeam2: this.miForm.controls['goalsTeam2'].value,
    dataTime: this.miForm.controls['dataTime'].value
  }
  this.matchcreate.editMatch(this.newMatch)
  console.log(this.newMatch)
  this.router.navigate(['/match/match-view'])
}


get Instance(){
  return this.matchcreate.getInstance().subscribe(resp=>{
    this.allInstances = resp
  })
}

get Soccerteam() {
  return this.soccerteamservice.searchSoccerteam().subscribe(resp => {
    this.allCountrys = resp
  })
}
}
