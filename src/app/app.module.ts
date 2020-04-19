import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridFormComponent } from './grid-form/grid-form.component';
import { GridPartOfFormComponent } from './grid-part-of-form/grid-part-of-form.component';
import { GridPartOfFormArrayComponent } from './grid-part-of-form-array/grid-part-of-form-array.component';
import { AppRoutingModule } from './app-routing.module';
import { GridBasicComponent } from './grid-basic/grid-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    GridFormComponent,
    GridPartOfFormComponent,
    GridPartOfFormArrayComponent,
    GridBasicComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
