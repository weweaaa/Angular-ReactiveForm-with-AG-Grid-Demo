import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cell',
  templateUrl: './form-cell.component.html',
  styleUrls: ['./form-cell.component.scss']
})
export class FormCellComponent {

  formGroup: FormGroup;
  key;
  private value;
  columnName: string;

  agInit(params: any) {
    this.columnName = params.column.colDef.headerName;
    this.key = params.context.createKey(params.node.id, params.column);
    this.value = params.value;
  }

  refresh(params: any): boolean {
    this.formGroup = params.context.formGroup;

    // 這也可以在 GridFormComponent.createFormControls 中完成，
    // 但是 FormCellComponent 可能正在做某事設定該值，所以在此處處理較為恰當
    this.formGroup.controls[this.key].patchValue(this.value);
    return true;
  }
}
