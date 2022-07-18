import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShareService } from 'src/app/services/share.service';
import { SoccerTeamView } from '../interfaces/SoccerteamView';
import { SoccerteamService } from '../services/soccerteam.service';
import { SoccerteamCreateComponent } from '../soccerteam-create/soccerteam-create.component';

@Component({
  selector: 'app-soccerteam-view',
  templateUrl: './soccerteam-view.component.html',
  styleUrls: ['./soccerteam-view.component.css']
})
export class SoccerteamViewComponent implements OnInit {

  displayedColumns: string[] = ['country', 'group', 'goal', 'points','actions'];

  dataSource!:MatTableDataSource<SoccerTeamView>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private shareData:ShareService, private soccerTeamService:SoccerteamService, public dialog: MatDialog)
  {
    this.Soccerteam
  }

  ngOnInit(): void {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SoccerteamCreateComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,

    })
  };

  editSoccerTeam(soccerteam: SoccerTeamView) {
    this.shareData.open.emit(soccerteam)
    this.Soccerteam
  }

  deleteSoccerTeam(id:undefined){
    console.log(id)
    this.soccerTeamService.deleteSoccerTeam(id)
    this.Soccerteam
  }

  get Soccerteam() {
    return this.soccerTeamService.searchSoccerteam().subscribe(resp =>
      {this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    })
  }

}
