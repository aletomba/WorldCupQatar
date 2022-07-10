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
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCommonModule} from '@angular/material/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';


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
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatCommonModule,
    MatDialogModule,




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
      MatSelectModule,
      MatInputModule,
      MatChipsModule,
      FlexLayoutModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatBadgeModule,
      MatCommonModule,
      MatDialogModule
    ]
})
export class SharedModule { }
