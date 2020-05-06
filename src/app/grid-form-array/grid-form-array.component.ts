import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Column, ColumnApi, GridApi, GridReadyEvent, RowNode } from 'ag-grid-community';
import { FormArrayCellComponent } from '../grid-part-of-form-array/form-array-cell/form-array-cell.component';

@Component({
  selector: 'app-grid-form-array',
  templateUrl: './grid-form-array.component.html',
  styleUrls: ['./grid-form-array.component.scss']
})
export class GridFormArrayComponent {

  @Input() primekey: string;

  private api: GridApi;
  private columnApi: ColumnApi;

  gridForm: FormGroup = new FormGroup({});

  rowData;

  columnDefs;

  constructor(public snackBar: MatSnackBar) {

    // 外部設定 每筆資料的 Primekey 用
    this.primekey = 'orderNumber';

    this.columnDefs = [
      { headerName: 'Order #', field: 'orderNumber', width: 110, suppressSizeToFit: true },
      { headerName: 'Make', field: 'make', cellRenderer: 'formCell' },
      { headerName: 'Model', field: 'model', cellRenderer: 'formCell' },
      { headerName: 'Price', field: 'price', cellRenderer: 'formCell' }
    ];

    this.rowData = [
      { orderNumber: 1, make: 'Toyota', model: 'Celica', price: 35000 },
      { orderNumber: 5, make: 'Ford', model: 'Mondeo', price: 32000 },
      { orderNumber: 7, make: 'Porsche', model: 'Boxter', price: 72000 },
      { orderNumber: 11, make: 'Seat', model: 'Leon', price: 32000 },
      { orderNumber: 20, make: 'Honda', model: 'CRV', price: 35000 }
    ];
  }

  refreshFormControls() {
    if (this.api) {
      this.createFormControls();
      this.api.refreshCells({ force: true });
    }
  }

  gridReady(params: GridReadyEvent) {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.refreshFormControls();

    this.api.sizeColumnsToFit();
  }

  private createFormControls() {
    const columns = this.columnApi.getAllColumns();

    const controlNames = Object.keys(this.gridForm.controls);
    controlNames.forEach((controlName) => {
      this.gridForm.removeControl(controlName);
    });

    this.api.forEachNode((rowNode: RowNode) => {
      const formArray: FormArray = new FormArray([]);
      columns.filter((column: Column) => column.getColDef().field !== this.primekey)
        .forEach((column: Column) => {
          const key = this.createKey(this.columnApi, column);
          formArray.setControl(key as any, new FormControl());
        });

      this.gridForm.addControl(rowNode.id as any, formArray);
    });
  }

  getRowNodeId(data: any) {

    return data.orderNumber;
  }

  getComponents() {
    return { formCell: FormArrayCellComponent };
  }

  getContext() {
    return {
      formGroup: this.gridForm,
      createKey: this.createKey
    };
  }

  onSubmit() {
    console.dir(this.gridForm.value);

    this.snackBar.open('Open Console for Form State', null, {
      verticalPosition: 'top',
      duration: 2000
    });
  }

  private createKey(columnApi: ColumnApi, column: Column): any {
    return columnApi.getAllColumns().indexOf(column) - 1;
  }
}
