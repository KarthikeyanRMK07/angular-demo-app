import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() options: any;
  @Output() updateSelectedGender:EventEmitter<string>=new EventEmitter();


  ngOnInit() {

  }

  selectedGender(gender:string){
    this.updateSelectedGender.emit(gender);
  }

}
