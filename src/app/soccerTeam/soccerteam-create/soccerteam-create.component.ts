import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';
import { SoccerTeamView } from '../interfaces/SoccerteamView';
import { SoccerteamService } from '../services/soccerteam.service';

@Component({
  selector: 'app-soccerteam-create',
  templateUrl: './soccerteam-create.component.html',
  styleUrls: ['./soccerteam-create.component.css']
})
export class SoccerteamCreateComponent implements OnInit {


  action = "Crear"
  buttonName = "Guardar"
  newSoccerTeam!: SoccerTeamView
  editSoccerteam!: SoccerTeamView

  miForm = this.formBuilder.group({
    country: [, [Validators.required]],
    groupName: [, [Validators.required]],
    position: [, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private soccerService: SoccerteamService, private shareData: ShareService) {
    this.incomingData()
  }

  incomingData() {
    this.shareData.open.subscribe(resp => {
      this.action = "Editar"
      this.buttonName = "Editar"
      this.editSoccerteam = resp
      this.miForm.patchValue({
        country: resp.country,
        groupName: resp.groupName,
        position:resp.position
      })
    })
  }



  ngOnInit(): void {

  }

  saveOrEdit() {
    if (this.miForm.invalid) {
      this.miForm.markAllAsTouched();
    }
    if (this.editSoccerteam == undefined) {
      this.saveSoccerTeam()
    }
    else {
      this.editSoccerTeam()
    }
  }

  saveSoccerTeam() {
    console.log('saving')
    this.newSoccerTeam = {
      country: this.miForm.controls['country'].value,
      groupName: this.miForm.controls['groupName'].value,
      position: this.miForm.controls['position'].value
    }
    // this.soccerService.createSoccerTeam(this.newSoccerTeam)
    console.log(this.newSoccerTeam)
  }

  editSoccerTeam() {
    console.log('editing')
    this.newSoccerTeam = {
      idTeam: this.editSoccerteam.idTeam,
      country: this.miForm.controls['country'].value,
      groupName: this.miForm.controls['groupName'].value,
      position:this.miForm.controls['position'].value,
    }
    // this.soccerService.updateSoccerTeam(this.newSoccerTeam)
    console.log(this.newSoccerTeam)
  }

}


