
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SoccerTeamView } from 'src/app/soccerTeam/interfaces/SoccerteamView';
import { SoccerteamService } from 'src/app/soccerTeam/services/soccerteam.service';
import { InstaceView } from '../interfaces/InstaceViewInterface';
import { MatchCreateUpdate } from '../interfaces/match-create-update';
import { StadiumView } from '../interfaces/StadiumViewinterface';
import { MatchService } from '../services/match-service';
import { ShareService } from '../../services/share.service';

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
  private allInstaces: InstaceView[] = [];
  newMatch!: MatchCreateUpdate
  editMatch!: MatchCreateUpdate



  get countrys() {
    return this.allCountrys
  }

  get stadiums() {
    return this.allStadiums
  }

  get instace() {
    return this.allInstaces
  }

  miForm = this.formBuilder.group({
    stadium: [, [Validators.required]],
    instance: [, [Validators.required, Validators.min(1)]],
    soccerTeamLocal: [, [Validators.required, Validators.min(1)]],
    soccerTeamVisit: [, [Validators.required, Validators.min(1)]],
    matchDay: [, [Validators.required, Validators.min(1)]],
  });


  constructor(private shareData: ShareService, private formBuilder: FormBuilder, private matchcreate: MatchService, private soccerteamservice: SoccerteamService) {
    this.incomingData()
  }

  ngOnInit(): void {
    this.Soccerteam
    this.Stadium
    this.Instance

  }

  incomingData(){
    this.shareData.open.subscribe(resp => {
      this.editMatch = resp
      this.action = "Editar"
      this.buttonName = "Editar"
      this.miForm.patchValue({
        stadium: resp.stadium,
        instance: resp.instance,
        soccerTeamLocal: resp.soccerTeamLocal,
        soccerTeamVisit: resp.soccerTeamVisit,
        matchDay: resp.matchDay
      })
    })
  }



  saveOrUpdate() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
    }

    if (this.editMatch == undefined) {
      this.saveMatch()
    }
    else {
      this.editMatchs()
    }
  }

  saveMatch(){
    console.log('saving')
    this.newMatch = {
      stadium: this.miForm.controls['stadium'].value,
      instance: this.miForm.controls['instance'].value,
      soccerTeamLocal: this.miForm.controls['soccerTeamLocal'].value,
      soccerTeamVisit: this.miForm.controls['soccerTeamVisit'].value,
      matchDay: this.miForm.controls['matchDay'].value
    }
    this.matchcreate.createMatch(this.newMatch)
    console.log(this.newMatch)
  }

  editMatchs(){
    console.log('editing', this.newMatch)
    this.newMatch = {
      idMatch: this.editMatch.idMatch,
      stadium: this.miForm.controls['stadium'].value,
      instance: this.miForm.controls['instance'].value,
      soccerTeamLocal: this.miForm.controls['soccerTeamLocal'].value,
      soccerTeamVisit: this.miForm.controls['soccerTeamVisit'].value,
      matchDay: this.miForm.controls['matchDay'].value
    }
    this.matchcreate.editMatch(this.newMatch)

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

  get Instance() {
    return this.matchcreate.getInstance().subscribe(resp => {
      this.allInstaces = resp
    }
    )
  }

}


