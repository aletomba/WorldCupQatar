
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SoccerTeamView } from 'src/app/soccerTeam/interfaces/SoccerteamView';
import { SoccerteamService } from 'src/app/soccerTeam/services/soccerteam.service';
import { MatchCreateUpdate } from '../interfaces/match-create-update';
import { StadiumView } from '../interfaces/StadiumViewinterface';
import { MatchService } from '../services/match-service';
import { ShareService } from '../../services/share.service';
import { MatchType } from '../interfaces/match-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent implements OnInit {

  action = "Crear"
  buttonName = "Guardar"
  private allCountrys: SoccerTeamView[] = [];
  private allStadiums: StadiumView[] = [];
  private allInstances:MatchType[]=[];
  newMatch!: MatchCreateUpdate
  editMatch!: MatchCreateUpdate




  get countrys() {
    return this.allCountrys
  }

  get stadiums() {
    return this.allStadiums
  }

  get Instances(){
    return this.allInstances
  }

  miForm = this.formBuilder.group({
    stadium: [, [Validators.required]],
    matchType: [, [Validators.required, Validators.min(1)]],
    team1: [, [Validators.required, Validators.min(1)]],
    team2: [, [Validators.required, Validators.min(1)]],
    dataTime: [, [Validators.required, Validators.min(1)]],
  });


  constructor(private router:Router, private shareData: ShareService, private formBuilder: FormBuilder, private matchcreate: MatchService, private soccerteamservice: SoccerteamService) {
    this.incomingData()
  }

  ngOnInit(): void {
    this.Soccerteam
    this.Stadium
    this.Instance
  }

  incomingData(){
    return this.shareData.open.subscribe(resp => {
      this.editMatch = resp
      this.action = "Editar"
      this.buttonName = "Editar"
      this.miForm.patchValue({
        stadium: resp.idStadium,
        matchType: resp.idMatchType,
        team1: resp.idTeam1,
        team2: resp.idTeam2,
        dataTime: resp.dataTime
      })
      console.log(resp.idStadium)
    })
  }



  saveOrUpdate() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
    }

    if (this.editMatch == undefined) {
      this.saveMatch()
      this.router.navigate(['/match/match-view'])

    }
    else {
      this.editMatchs()
      this.router.navigate(['/match/match-view'])
    }
  }

  saveMatch(){
    console.log('saving')
    this.newMatch = {
      stadium: this.miForm.controls['stadium'].value,
      matchType: this.miForm.controls['matchType'].value,
      team1: this.miForm.controls['team1'].value,
      team2: this.miForm.controls['team2'].value,
      dataTime: this.miForm.controls['dataTime'].value
    }
    this.matchcreate.createMatch(this.newMatch).subscribe(resp =>{
      console.log(resp);
    })
  }

  editMatchs(){
    console.log('editing')
    this.newMatch = {
      idMatch:this.editMatch.idMatch,
      stadium: this.miForm.controls['stadium'].value,
      matchType: this.miForm.controls['matchType'].value,
      team1: this.miForm.controls['team1'].value,
      team2: this.miForm.controls['team2'].value,
      dataTime: this.miForm.controls['dataTime'].value
    }
    this.matchcreate.editMatch(this.newMatch).subscribe(resp =>{
      console.log(resp);
    })
  }

  //------------------------------------Select options--------------------------
  get Soccerteam() {
    return this.soccerteamservice.searchSoccerteam().subscribe(resp => {
      this.allCountrys = resp
    })
  }

  get Stadium() {
    return this.matchcreate.getStadium().subscribe(resp => {
      this.allStadiums = resp
    })
  }

  get Instance(){
    return this.matchcreate.getInstance().subscribe(resp=>{
      this.allInstances = resp

    })
  }

}


