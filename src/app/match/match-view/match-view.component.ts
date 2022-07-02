import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatchViewModels } from '../interfaces/MatchViewInterface';
import { MatchViewServiceService } from '../services/match-view-service.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent  {


  private allmatches:MatchViewModels[]=[];

  displayedColumns: string[] = ['stadium', 'instance', 'soccerTeamLocal', 'soccerTeamVisit', 'matchDay','actions'];

  dataSource = new MatTableDataSource<MatchViewModels>(this.allmatches);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private matchservice : MatchViewServiceService) {
    this.Matches
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;}

get Matches() {
  return this.matchservice.searchMatches().subscribe(resp => this.dataSource = resp);
}

}
