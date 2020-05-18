# AgGridReactiveForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

___
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

___
## sample

- ### grid-basic
  - ag-grid 的基礎使用方式

- ### grid-form
  - 將 ag-grid 作為 Form 來使用 (送出 Formcontrol，攤平的 Grid 資料)
  - 取得的 Form 資料
  ``` json
    {
      "1make": "Toyota",
      "1model": "Celica",
      "1price": 35000,
      "2make": "Ford",
      "2model": "Mondeo",
      "2price": 32000,
      "3make": "Porsche",
      "3model": "Boxter",
      "3price": 72000,
      "4make": "Seat",
      "4model": "Leon",
      "4price": 32000,
      "5make": "Honda",
      "5model": "CRV",
      "5price": 35000,
    }
  ``` 
- ### grid-form-array
  - 將 ag-grid 作為 Form 來使用 (送出 FormGroup(FormArray)，以每列中的 PrimaryKey 欄位作為 FormArray 的 Key)
  - 取得的 Form 資料
  ``` json
     1: ["Toyota", "Celica", 35000],
     5: ["Ford", "Mondeo", 32000],
     7: ["Porsche", "Boxter", 72000],
    11: ["Seat", "Leon", 32000],
    20: ["Honda", "CRV", 35000]
  ``` 

- ### grid-form-array-object
  - 將 ag-grid 作為 Form 來使用 (送出 FormArray(FormGroup)，以每列 ID 作為 FormGroup Key)
  - 取得的 Form 資料
  ``` json
    [
      { "orderNumber":  1, "make": "Toyota", "model": "Celica", "price": 35000 },
      { "orderNumber":  5, "make": "Ford", "model": "Mondeo", "price": 32000 },
      { "orderNumber":  7, "make": "Porsche", "model": "Boxter", "price": 72000 },
      { "orderNumber": 11, "make": "Seat", "model": "Leon", "price": 32000 },
      { "orderNumber": 20, "make": "Honda", "model": "CRV", "price": 35000 }
    ]
  ```

- ### grid-part-of-form
  - ag-grid 為 Form 的一部分
  - 取得的 Form 資料
  ``` json
    {
      "address": "1 Station Road↵Balham↵London↵SW1 1JT",
      "salesperson": "Niall Crosby",

      "stock": {  // <---- grid 資料
        "1make": "Toyota",
        "1model": "Celica",
        "1price": 35000,
        "5make": "Ford",
        "5model": "Mondeo",
        "5price": 32000,
        "7make": "Porsche",
        "7model": "Boxter",
        "7price": 72000,
        "11make": "Seat",
        "11model": "Leon",
        "11price": 32000,
        "20make": "Honda",
        "20model": "CRV",
        "20price": 35000,
      },

      "telephone": "0208 123123"
    }
  ```

- ### grid-part-of-form-array
  - ag-grid 為 Form 的一部分的 FromArray
  - 取得的 Form 資料
  ``` json
    {
      "address": "1 Station Road↵Balham↵London↵SW1 1JT",
      "salesperson": "Niall Crosby",

      "stock": {  // <---- grid 資料
        "1": ["Toyota", "Celica", 35000],
        "5": ["Ford", "Mondeo", 32000],
        "7": ["Porsche", "Boxter", 72000],
       "11": ["Seat", "Leon", 32000],
       "20": ["Honda", "CRV", 35000],
      },
      
      "telephone": "0208 123123"
    }
  ```

- ### grid-drop-down-list-deit
  - ag-grid 自訂編輯單元格元件 - 下拉式選單

___
## 參考來源：

- [Github - Sean Landsman](https://github.com/seanlandsman/ag-grid-ng-forms)
- [Medium - Using Angular Forms with ag-Grid](https://medium.com/ag-grid/using-angular-forms-with-ag-grid-1efe00265535)
