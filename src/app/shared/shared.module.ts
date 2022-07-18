import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


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
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';



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
    ReactiveFormsModule,
    MatProgressSpinnerModule





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
      MatDialogModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatStepperModule
    ]
})
export class SharedModule { }
