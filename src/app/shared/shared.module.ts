import { NgModule } from '@angular/core';


//material
import { MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatSliderModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,

    ],
    exports:[
      MatTableModule,
      MatSliderModule,
      MatCardModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatIconModule,
      MatTooltipModule,
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatButtonModule,
      MatListModule,

    ]
})
export class SharedModule { }
