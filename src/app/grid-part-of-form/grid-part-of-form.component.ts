import { Component, OnInit } from '@angular/core';
import { Column, RowNode, GridReadyEvent, GridApi, ColumnApi } from 'ag-grid-community';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BranchService } from './grid-part-of-form.service';
import { FormCellComponent } from '../grid-form/form-cell/form-cell.component';

@Component({
  selector: 'app-grid-part-of-form',
  templateUrl: './grid-part-of-form.component.html',
  styleUrls: ['./grid-part-of-form.component.scss'],
  providers: [BranchService]
})

// The Grid Is Part Of The Form
// Grid 是 Form 的一部分
export class GridPartOfFormComponent {

  private api: GridApi;
  private columnApi: ColumnApi;

  // this cannot be null - create it with no controls instead
  gridForm: FormGroup = new FormGroup({
    salesperson: new FormControl(),
    telephone: new FormControl(),
    address: new FormControl(),
    stock: new FormGroup({})
  });

  branchNames: string[];
  selectedBranch: string;

  columnDefs;
  rowData;

  constructor(public snackBar: MatSnackBar, private branchService: BranchService) {

    this.columnDefs = [
      { headerName: 'Order #', field: 'orderNumber', width: 110, suppressSizeToFit: true },
      { headerName: 'Make', field: 'make', cellRenderer: 'formCell' },
      { headerName: 'Model', field: 'model', cellRenderer: 'formCell' },
      { headerName: 'Price', field: 'price', cellRenderer: 'formCell' }
    ];

    this.branchNames = this.branchService.branches;
    this.selectedBranch = this.branchNames[0];
    this.updateForm();
  }

  updateForm() {
    const currentBranch = this.branchService.getBranchData(this.selectedBranch);
    this.gridForm.controls.salesperson.patchValue(currentBranch.salesperson);
    this.gridForm.controls.telephone.patchValue(currentBranch.telephone);
    this.gridForm.controls.address.patchValue(currentBranch.address);

    this.rowData = currentBranch.stock;
  }

  refreshFormControls() {
    if (this.api) {
      // slight chicken and egg here - the grid cells will be created before the grid is ready, but we need set
      // formGroup up front as such we'll create the grid (and cells) and force refresh the cells
      // FormCellComponent will then set the form in the refresh, completing the loop  this is only necessary
      // once, on initialisation
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

    const stockGroup = (this.gridForm.controls.stock as FormGroup);

    // clear out old form group controls if switching between branches
    const controlNames = Object.keys(stockGroup.controls);
    controlNames.forEach((controlName) => {
      stockGroup.removeControl(controlName);
    });

    this.api.forEachNode((rowNode: RowNode) => {
      columns.filter((column: Column) => column.getColDef().field !== 'orderNumber')
        .forEach((column: Column) => {
          const key = this.createKey(rowNode.id, column); // the cells will use this same createKey method
          stockGroup.addControl(key, new FormControl());
        });
    });
  }

  getRowNodeId(data: any) {
    // optional here - ag-Grid will create row ids if you don't supply one, but
    // if you have a way of uniquely identifying rows here's where you'd do it.
    // doing so would make it easier to pull out specific rows from the form,
    // say by order number, as we do here
    return data.orderNumber;
  }

  getComponents() {
    return { formCell: FormCellComponent };
  }

  getContext() {
    return {
      formGroup: this.gridForm.controls.stock,
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

  private createKey(rowId: string, column: Column): string {
    return `${rowId}${column.getColId()}`;
  }

}
