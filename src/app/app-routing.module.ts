import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { GridEditDropdownlistComponent } from './grid-edit-dropdownlist/grid-edit-dropdownlist.component';
import { GridFormArrayObjectComponent } from './grid-form-array-object/grid-form-array-object.component';
import { GridFormArrayComponent } from './grid-form-array/grid-form-array.component';
import { GridFormComponent } from './grid-form/grid-form.component';
import { GridPartOfFormArrayComponent } from './grid-part-of-form-array/grid-part-of-form-array.component';
import { GridPartOfFormComponent } from './grid-part-of-form/grid-part-of-form.component';

const routes: Routes = [
  { path: 'grid-basic', component: GridBasicComponent },
  { path: 'grid-form', component: GridFormComponent },
  { path: 'grid-form-array', component: GridFormArrayComponent },
  { path: 'grid-form-array-object', component: GridFormArrayObjectComponent },
  { path: 'grid-part-of-form', component: GridPartOfFormComponent },
  { path: 'grid-part-of-form-array', component: GridPartOfFormArrayComponent },
  { path: 'grid-drop-down-list-deit', component: GridEditDropdownlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
