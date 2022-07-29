import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ShareService } from 'src/app/services/share.service';
import { CreateUpdatePlayer } from '../interfaces/create-update-player';
import { PlayerView } from '../interfaces/player-view';
import { PlayerCreateComponent } from '../player-create/player-create.component';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {


  displayedColumns: string[] = ['name', 'lastname', 'position', 'country', 'actions'];
  dataSource!: MatTableDataSource<CreateUpdatePlayer>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: PlayerService, public dialog: MatDialog, private shareData: ShareService) { }

  ngOnInit(): void {
    this.allPlayers
  }

  editPlayer(player: PlayerView) {
    console.log(player)
    this.shareData.open.emit(player)
    this.allPlayers
  }
  deletePlayer(id: number) {
    //delete
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PlayerCreateComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,

    })
  };

  get allPlayers() {
    return this.service.getAllPLayer().subscribe(resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


}

