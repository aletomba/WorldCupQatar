import { Component, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatchCreate } from '../interfaces/MatchCreateInterface';
import { MatchViewModels } from '../interfaces/MatchViewInterface';
import { MatchCreateComponent } from '../match-create/match-create.component';
import { MatchEditComponent } from '../match-edit/match-edit.component';
import { MatchService } from '../services/match-service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent  {



  displayedColumns: string[] = ['stadium', 'instance', 'soccerTeamLocal', 'soccerTeamVisit', 'matchDay','actions'];

  dataSource!:MatTableDataSource<MatchViewModels>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor( private shareData:ShareService, private matchservice : MatchService,public dialog: MatDialog) {
    this.Matches;

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MatchEditComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,

        })};

    editMatch(match:MatchCreate){
      this.shareData.open.emit(match)
      console.log(match)
    }


  get Matches() {
  return this.matchservice.searchMatches()
  .subscribe(resp => {this.dataSource = new MatTableDataSource(resp);
    this.dataSource.paginator = this.paginator;

  })
}

}
