import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { FormCellObjectComponent } from './form-cell-object/form-cell-object.component';

@Component({
  selector: 'app-grid-form-array-object',
  templateUrl: './grid-form-array-object.component.html',
  styleUrls: ['./grid-form-array-object.component.scss']
})
export class GridFormArrayObjectComponent {

  isShowTest = true;

  /** 資料物件 */
  rowData;

  /** 欄位物件設定 */
  columnDefs;

  /** Grid API 物件 */
  private api: GridApi;

  /** Grid Column API 物件 */
  private columnApi: ColumnApi;

  /** 存放表單資料的物件 */
  gridFormArray: FormArray = new FormArray([]);

  constructor(public snackBar: MatSnackBar) {
    this.columnDefs = [
      { headerName: 'Order #', field: 'orderNumber', cellRenderer: 'formCellObject' },    // 設定固定寬度 => width: 110, suppressSizeToFit: true
      { headerName: 'Make', field: 'make', cellRenderer: 'formCellObject' },
      { headerName: 'Model', field: 'model', cellRenderer: 'formCellObject' },
      { headerName: 'Price', field: 'price', cellRenderer: 'formCellObject' }
    ];

    this.rowData = [
      { orderNumber: 1, make: 'Toyota', model: 'Celica', price: 35000 },
      { orderNumber: 5, make: 'Ford', model: 'Mondeo', price: 32000 },
      { orderNumber: 7, make: 'Porsche', model: 'Boxter', price: 72000 },
      { orderNumber: 11, make: 'Seat', model: 'Leon', price: 32000 },
      { orderNumber: 20, make: 'Honda', model: 'CRV', price: 35000 }
    ];
  }

  getComponents() {
    return { formCellObject: FormCellObjectComponent };
  }

  getContext() {
    return {
      formArray: this.gridFormArray
    };
  }

  gridReady(params: GridReadyEvent) {

    this.api = params.api;
    this.columnApi = params.columnApi;

    this.refreshFormControls();
    this.api.sizeColumnsToFit();

    console.log('params :>> ', params);
  }

  refreshFormControls() {
    if (this.api) {
      this.createFormControls();
      // this.api.refreshCells({ force: true });
    }
  }

  private createFormControls() {
    // const columns = this.columnApi.getAllColumns();
    // console.log('columns :>> ', columns);
    // const controlNames = Object.keys(this.gridFormArray.controls);
    // console.log('controlNames :>> ', controlNames);

    this.gridFormArray.clear();  // Init Grid FormArray

    // 實際依據資料物件，來初始化建立 From
    this.api.getModel().forEachNode((val) => {

      // 建立用來存放每筆資料的 FromGroup
      const group: FormGroup = new FormGroup({});

      // 尋覽將此列資料的每個欄位成為一個 FormControl 塞到每列的 FormGroup 當中
      Object.keys(val.data).forEach((keyName) => {
        group.addControl(keyName, new FormControl(val.data[keyName]));
      });

      // 將每一列 FormGroup 加入到 FormArray 成為一個元素(代表一列資料)
      this.gridFormArray.setControl(val.id as any, group);
    });

    console.log('this.gridForm.value :>> ', this.gridFormArray.value);
  }

  /** 表單提交 */
  onSubmit() {
    console.dir(this.gridFormArray.value);

    this.snackBar.open('Open Console for Form State', null, {
      horizontalPosition: 'center',
      duration: 2000
    });
  }

  /**
   * 如果一開始 Gird Hidden 隱藏起來，
   * 會造成，refreshFormControls 過程異常，
   * 此原因好像是因為 Grid 在 Hidden 狀態下，當畫面載入後，只會觸發前幾欄位甚至可能所有單元格都不會觸發 agInit
   * 那就會造成可能只有前兩個欄位有 agInit，進而造成 refresh Cell 事件只會觸發兩個欄位
   *
   * 解決辦法就是將 refreshFormControls 時機點改為手動或資料表確定顯示在畫面上時候再觸發 refreshCells
   */
  fixgridShow() {
    this.isShowTest = false;
    this.api.refreshCells({ force: true });
  }
}
