import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-drop-down-list-cell-edit',
  templateUrl: './drop-down-list-cell-edit.component.html',
  styleUrls: ['./drop-down-list-cell-edit.component.scss']
})
export class DropDownListCellEditComponent implements INoRowsOverlayAngularComp, AfterViewInit {

  @ViewChild('selectRef', { static: true }) selectRef: ElementRef;

  get select() {
    return (this.selectRef || ({} as any)).nativeElement as HTMLSelectElement;
  }

  public dropdownData: any;
  public value: any;
  private params: any;

  // 用來記錄目前已監聽的事件物件
  private noteListenerList: { [key: string]: any } = {};

  constructor(private renderer: Renderer2) { }

  public agInit(params: any): void {
    this.params = params;
    this.value = this.params.properties.value;
    this.dropdownData = this.params.properties.values;

    if (!this.value) {
      this.value = this.dropdownData[0];
    }
  }

  onSelectFocus() {
    this.renderer.addClass(this.select, 'form-highlight');
  }

  onSelectBlur() {
    this.renderer.removeClass(this.select, 'form-highlight');
  }

  onSelectChange() {
    this.value = this.select.value;
    this.renderer.addClass(this.select, 'form-highlight');
  }

  ngAfterViewInit() {

    // 顯示後 , 自動 focus
    setTimeout(() => {
      this.select.focus();
    });
  }

  getValue(): any {
    return this.value;
  }

  isPopup() {
    return true;
  }
}
