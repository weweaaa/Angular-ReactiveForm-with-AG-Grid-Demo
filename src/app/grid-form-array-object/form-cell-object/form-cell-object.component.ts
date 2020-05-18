import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-form-cell-object',
  templateUrl: './form-cell-object.component.html',
  styleUrls: ['./form-cell-object.component.scss']
})
export class FormCellObjectComponent {

  formGroup: FormGroup;

  private value;

  columnKey: string;

  rowId: number;

  constructor() { }

  agInit(params: any) {
    this.columnKey = (params.column.colDef as ColDef).field;
    this.value = params.value;
    this.rowId = params.node.id;
  }

  refresh(params: any): boolean {

    this.formGroup = params.context.formArray.controls[this.rowId];

    this.formGroup.get(this.columnKey).patchValue(this.value);

    return true;
  }

}
