import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';
import { GroupView } from '../interfaces/group-view';
import { SoccerTeamView } from '../interfaces/SoccerteamView';
import { SoccerteamService } from '../services/soccerteam.service';

@Component({
  selector: 'app-soccerteam-create',
  templateUrl: './soccerteam-create.component.html',
  styleUrls: ['./soccerteam-create.component.css']
})
export class SoccerteamCreateComponent implements OnInit {

  private allGroups: GroupView[] = [];
  action = "Crear"
  buttonName = "Guardar"
  newSoccerTeam!: SoccerTeamView
  editSoccerteam!: SoccerTeamView

  miForm = this.formBuilder.group({
    country: [, [Validators.required]],
    group: [, [Validators.required]],
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
        group: resp.idGroup
      })
    })
  }

  get groups() {
    return this.allGroups
  }

  ngOnInit(): void {
    this.group
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
      idGroup: this.miForm.controls['group'].value,
      goal: 0,
      points: 0
    }
    this.soccerService.createSoccerTeam(this.newSoccerTeam)
    console.log(this.newSoccerTeam)
  }

  editSoccerTeam() {
    console.log('editing')
    this.newSoccerTeam = {
      idCountry: this.editSoccerteam.idCountry,
      country: this.miForm.controls['country'].value,
      idGroup: this.miForm.controls['group'].value,
      goal: 0,
      points: 0
    }
    this.soccerService.updateSoccerTeam(this.newSoccerTeam)
    console.log(this.newSoccerTeam)
  }

  //------------------------select Group------------------

  get group() {
    return this.soccerService.getGroups().subscribe(resp => {
      this.allGroups = resp
    })
  }
}


