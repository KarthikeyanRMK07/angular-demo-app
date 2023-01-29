import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() options: any;
  @Output() updateSelectedHobbies: EventEmitter<string[]> = new EventEmitter();
  selectedHobbies: string[] = [];

  constructor(){

  }
  ngOnInit() {
  }

  selectedOptions(option: string) {
    let index=this.selectedHobbies.findIndex((hobby:string)=>hobby==option);
    if(index==-1){
      this.selectedHobbies.push(option);
    }else{
      this.selectedHobbies.splice(index,1)
    }
    this.updateSelectedHobbies.emit(this.selectedHobbies);
  }
}
