import { Component, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatchCreateUpdate } from '../interfaces/match-create-update';
import { MatchCreateComponent } from '../match-create/match-create.component';
import { MatchService } from '../services/match-service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent  {


  showSpinner = false
  displayedColumns: string[] = ['stadium', 'instance', 'soccerTeamLocal', 'soccerTeamVisit', 'matchDay','actions'];

  dataSource!:MatTableDataSource<MatchCreateUpdate>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor( private shareData:ShareService, private matchservice : MatchService,public dialog: MatDialog) {
   this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner=false
    }, 5000);
    this.Matches;

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MatchCreateComponent,{
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,

        })};

  editMatch(match:MatchCreateUpdate){
      this.shareData.open.emit(match)
      console.log(match)
      this.Matches
    }

  deleteMatch(id:undefined){
    console.log(id);
    this.matchservice.deleteMatch(id);
    this.Matches
    }


  get Matches() {
  return this.matchservice.searchMatches()
  .subscribe(resp => {this.dataSource = new MatTableDataSource(resp);
    this.dataSource.paginator = this.paginator;

  })
}

}
