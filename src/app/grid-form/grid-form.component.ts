import { Component, OnInit } from '@angular/core';
import { Column, RowNode, GridReadyEvent, ColumnApi, GridApi } from 'ag-grid-community';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormCellComponent } from './form-cell/form-cell.component';

@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss']
})

// The Grid Is The Form
// Grid 本身就是 Form
export class GridFormComponent {

  private api: GridApi;
  private columnApi: ColumnApi;

  // this cannot be null - create it with no controls instead
  formGroup: FormGroup = new FormGroup({});

  columnDefs;
  rowData;

  constructor(public snackBar: MatSnackBar) {
    this.columnDefs = [
      { headerName: 'Order #', field: 'orderNumber', width: 110, suppressSizeToFit: true },
      { headerName: 'Make', field: 'make', cellRenderer: 'formCell' },
      { headerName: 'Model', field: 'model', cellRenderer: 'formCell' },
      { headerName: 'Price', field: 'price', cellRenderer: 'formCell' }
    ];

    this.rowData = [
      { orderNumber: 1, make: 'Toyota', model: 'Celica', price: 35000 },
      { orderNumber: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
      { orderNumber: 3, make: 'Porsche', model: 'Boxter', price: 72000 },
      { orderNumber: 4, make: 'Seat', model: 'Leon', price: 32000 },
      { orderNumber: 5, make: 'Honda', model: 'CRV', price: 35000 },
    ];
  }

  gridReady(params: GridReadyEvent) {
    this.api = params.api;
    this.columnApi = params.columnApi;

    // slight chicken and egg here - the grid cells will be created before the grid is ready, but we need set
    // formGroup up front as such we'll create the grid (and cells) and force refresh the cells FormCellComponent
    // will then set the form in the refresh, completing the loop  this is only necessary once, on initialisation
    this.createFormControls();
    this.api.refreshCells({ force: true });

    this.api.sizeColumnsToFit();
  }

  private createFormControls() {
    const columns = this.columnApi.getAllColumns();

    this.api.forEachNode((rowNode: RowNode) => {
      columns.filter(column => column.getColDef().field !== 'orderNumber')
        .forEach((column: Column) => {
          const key = this.createKey(rowNode.id, column);    // the cells will use this same createKey method
          this.formGroup.addControl(key, new FormControl());
        });
    });
  }

  getRowNodeId(data: any) {
    // optional here - ag-Grid will create row ids if you don't supply one, but if you have a way of uniquely
    // identifying rows here's where you'd do it. Doing so would make it easier to pull out specific rows from the
    // form, say by order number, as we do here
    return data.orderNumber;
  }

  getComponents() {
    return {
      formCell: FormCellComponent
    };
  }

  getContext() {
    return {
      formGroup: this.formGroup,
      createKey: this.createKey
    };
  }

  onSubmit() {
    console.dir(this.formGroup.value);

    this.snackBar.open('Open Console for Form State', null, {
      verticalPosition: 'top',
      duration: 2000
    });
  }

  private createKey(rowId: string, column: Column): string {
    return `${rowId}${column.getColId()}`;
  }

}
