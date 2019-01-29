import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

interface Data {
  selectValues: string;
  defaultSelection: string;
}

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css']
})
export class DropdownSelectComponent  {
  @Input()  data: Data; 
  @Output() dropDownSelected = new EventEmitter;

   valueSelected(event){
      this.dropDownSelected.emit(event.value);
   }
}
