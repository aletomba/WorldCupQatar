import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { SoccerTeamView } from 'src/app/soccerTeam/interfaces/SoccerteamView';
import { SoccerteamService } from 'src/app/soccerTeam/services/soccerteam.service';
import { CreateUpdatePlayer } from '../interfaces/create-update-player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  action:string='Crear';
  buttonName:string = 'Guardar';
  newPlayer!: CreateUpdatePlayer
  editPlayers!:CreateUpdatePlayer
  private soccerteam: SoccerTeamView[]=[];

  get SoccerTeams(){
    return this.soccerteam
  }

  constructor( private route:Router, private _formBuilder: FormBuilder,private service:PlayerService, private shareData:ShareService,private SoccerService:SoccerteamService)
  {
    this.incomingData()
  }

  ngOnInit(): void {
    this.Soccerteam
  }


  incomingData() {
    this.shareData.open.subscribe(resp => {
      this.action = "Editar"
      this.buttonName = "Editar"
      this.editPlayers = resp
      this.miForm.patchValue({
        name: resp.name,
        lastname: resp.lastname,
        idTeam:resp.idTeam,
        position:resp.position,
        number:resp.number
      })
    })
  }

  miForm = this._formBuilder.group({
    name: [, [Validators.required]],
    lastname: [, [Validators.required]],
    idTeam: [, [Validators.required]],
    position:[, [Validators.required]],
    number:[, [Validators.required]],
  });

  saveOrEdit() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
    }
    if (this.editPlayers == undefined) {
      this.savePlayer();
      this.route.navigate(['/player/player-view']);
    }
    else {
      this.editPlayer();
      this.route.navigate(['/player/player-view']);
    }
  }

  savePlayer() {
    console.log('saving');
    this.newPlayer = {
      name: this.miForm.controls['name'].value,
      lastname: this.miForm.controls['lastname'].value,
      idTeam: this.miForm.controls['idTeam'].value,
      position: this.miForm.controls['position'].value,
      number: this.miForm.controls['number'].value
    }
    // this.service.createPlayer(this.newPlayer)
    console.log(this.newPlayer);
  }

  editPlayer() {
    console.log('editing')
    this.newPlayer = {
      idPLayer: this.editPlayers.idPLayer,
      name: this.miForm.controls['name'].value,
      lastname: this.miForm.controls['lastname'].value,
      idTeam: this.miForm.controls['idTeam'].value,
      position: this.miForm.controls['position'].value,
      number: this.miForm.controls['number'].value
    }
    // this.service.updateSoccerTeam(this.newSoccerTeam)
    console.log(this.newPlayer)
  }

  get Soccerteam(){
    return this.SoccerService.searchSoccerteam().subscribe(resp =>{
      this.soccerteam = resp
    })
  }
}
