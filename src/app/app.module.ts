import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

/* Material Modules*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

/* Flex */
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridFormComponent } from './grid-form/grid-form.component';
import { GridPartOfFormComponent } from './grid-part-of-form/grid-part-of-form.component';
import { GridPartOfFormArrayComponent } from './grid-part-of-form-array/grid-part-of-form-array.component';
import { AppRoutingModule } from './app-routing.module';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { FormCellComponent } from './grid-form/form-cell/form-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GridFormComponent,
    GridPartOfFormComponent,
    GridPartOfFormArrayComponent,
    GridBasicComponent,
    FormCellComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,

    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
