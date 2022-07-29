import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { StatiticsView } from '../interfaces/statitics-view';
import { StatisticsServicesService } from '../services/statistics-services.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  showData=false
  selected = '';
  private groups:string[]=['A','B','C','D','E','F','G','H'];

  displayedColumns: string[] = ['team','score', 'goalsDif', 'goalsFor','goalsAgainst'];
  dataSource!: MatTableDataSource<StatiticsView>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get allGroups(){
    return this.groups;
  }

  constructor(private service:StatisticsServicesService) { }

  ngOnInit(): void {

  }

  openTable(){
    return this.showData=true
  }

  searchGroups(group:string){
    console.log(group)
    this.service.getResult(group).subscribe(resp=>{
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
    });
  }




  }

