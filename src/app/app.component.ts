import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  radiobuttonOptions:string[]=["Male","Female","Others"];
  checkboxOptions:string[]=["Coding","Music","Dance"];
  multiSelectOptions:string[] = ["Angular", "React", "Java", "Python", "C"];
  displayValues:boolean=false;
  selectedGender:string="";
  selectedHobbies:string[]=[];
  selectedTehnologies:string[]=[];

  ngOnInit(): void {
    
  }

  getSelectedGender(gender:string){
      this.selectedGender=gender;
  }

  getSelectedHobbies(hobbies:string[]){
    this.selectedHobbies=hobbies;
  }

  getSelectedTechnologies(technologies:string[]){
    this.selectedTehnologies=technologies;
  }

  submit(){
    this.displayValues= !this.displayValues;
  }
}
