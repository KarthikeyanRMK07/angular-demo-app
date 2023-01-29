import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less']
})
export class MultiSelectComponent implements OnInit {
  @Input() options: any;
  @Output() updateSelectedTechnologies:EventEmitter<string[]>=new EventEmitter();
  displayOptions: boolean = false;
  selectedTechnologies:string[]=[];
  ngOnInit() {
  }
  

  openToggle() {
     this.displayOptions = !this.displayOptions;
  }

  selectedOptions(option:string) {
    let index=this.selectedTechnologies.findIndex((tech:string)=>tech==option);
    if(index==-1){
      this.selectedTechnologies.push(option);
    }else{
      this.selectedTechnologies.splice(index,1)
    }
    this.updateSelectedTechnologies.emit(this.selectedTechnologies);
  }
}
