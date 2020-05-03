import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { DropDownListCellEditComponent } from './drop-down-list-cell-edit/drop-down-list-cell-edit.component';

@Component({
  selector: 'app-grid-edit-dropdownlist',
  templateUrl: './grid-edit-dropdownlist.component.html',
  styleUrls: ['./grid-edit-dropdownlist.component.scss']
})
export class GridEditDropdownlistComponent implements OnInit {

  title = 'ag-grid-reactive-form';

  fComp = { DropDownListCellEditComponent }

  columnDefs = [
    {
      headerName: 'Make',
      cellEditor: 'DropDownListCellEditComponent',
      field: 'make',
      editable: true,
      sortable: true,
      filter: true,
      cellEditorParams: {
        properties: {
          value: '',
          values: ['aa', 'bb', 'cc']
        }
      }
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ] as ColDef[];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  CustomBlur() {
    console.log('Custom Blur Event...');
  }

  CustomFocus() {
    console.log('Custom Focus Event...');
  }

}
