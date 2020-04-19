import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-cell',
  templateUrl: './form-array-cell.component.html',
  styleUrls: ['./form-array-cell.component.scss']
})
export class FormArrayCellComponent {

  formGroup: FormArray;
  key;
  private value;
  columnName: string;
  private rowId: number;

  agInit(params: any) {
    this.columnName = params.column.colDef.headerName;
    this.key = params.context.createKey(params.columnApi, params.column);
    this.value = params.value;
    this.rowId = params.node.id;
  }

  refresh(params: any): boolean {
    this.formGroup = params.context.formGroup.controls[this.rowId];

    // 這也可以在 GridFormComponent.createFormControls 中完成，
    // 但是 FormCellComponent 可能正在做某事設定該值，所以在此處處理較為恰當
    this.formGroup.at(this.key).patchValue(this.value);
    return true;
  }
}
