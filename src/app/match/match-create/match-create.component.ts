import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SoccerTeamView } from 'src/app/soccerTeam/interfaces/SoccerteamView';
import { SoccerteamService } from 'src/app/soccerTeam/services/soccerteam.service';
import { InstaceView } from '../interfaces/InstaceViewInterface';
import { MatchCreate } from '../interfaces/MatchCreateInterface';
import { StadiumView } from '../interfaces/StadiumViewinterface';
import { MatchService } from '../services/match-service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent implements OnInit {
  action="CREAR"
  id:number|null|undefined

  private allCountrys:SoccerTeamView[]=[];
  private allStadiums:StadiumView[]=[];
  private allInstaces:InstaceView[]=[];
  newMatch:MatchCreate | undefined



 get countrys(){
  return this.allCountrys
 }

 get stadiums(){
  return this.allStadiums
 }

 get instace(){
  return this.allInstaces
 }

  miForm = this.formBuilder.group({
    stadium: [, [Validators.required]],
    instance: [, [Validators.required, Validators.min(1)]],
    soccerTeamLocal: [,[Validators.required, Validators.min(1)]],
    soccerTeamVisit: [, [Validators.required, Validators.min(1)]],
    matchDay: [, [Validators.required, Validators.min(1)]],
  });


  constructor(private formBuilder: FormBuilder, private matchcreate:MatchService, private soccerteamservice:SoccerteamService) {

   }

  ngOnInit(): void {
    this.Soccerteam
    this.Stadium
    this.Instance
  }



    save(){
      if (this.miForm.invalid){
        this.miForm.markAllAsTouched();
      }
      this.newMatch ={
        stadium: this.miForm.controls['stadium'].value,
        instance: this.miForm.controls['instance'].value,
        soccerTeamLocal: this.miForm.controls['soccerTeamLocal'].value,
        soccerTeamVisit: this.miForm.controls['soccerTeamVisit'].value,
        matchDay: this.miForm.controls['matchDay'].value
        }
        this.matchcreate.createMatch(this.newMatch)

        console.log(this.newMatch)
      }





//------------------------------------Select options--------------------------
    get Soccerteam(){
    return this.soccerteamservice.searchSoccerteam().subscribe(resp =>{
      this.allCountrys=resp

    })
  }

  get Stadium(){
    return this.matchcreate.getStadium().subscribe(resp=>{
      this.allStadiums = resp
    })
  }

  get Instance(){
    return this.matchcreate.getInstance().subscribe(resp=>{
      this.allInstaces= resp
    }
      )
  }

}


