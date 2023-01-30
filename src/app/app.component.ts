import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  @ViewChild("multiselect") multiselectComponentRef: any;
  radiobuttonOptions: string[] = ["Male", "Female", "Others"];
  checkboxOptions: string[] = ["Coding", "Music", "Dance"];
  multiSelectOptions: string[] = ["Angular", "React", "Java", "Python", "C"];
  displayValues: boolean = false;
  selectedGender: string = "";
  selectedHobbies: string[] = [];
  selectedTehnologies: string[] = [];
  userDetails: any = [];
  tempUserDetails:any=[];
  pageNumber:any=1;
  pageRecord=5;


  constructor() {

  }
  ngOnInit(): void {

  }

  getSelectedGender(gender: string) {
    this.selectedGender = gender;
  }

  getSelectedHobbies(hobbies: string[]) {
    this.selectedHobbies = hobbies;
  }

  getSelectedTechnologies(technologies: string[]) {
    this.selectedTehnologies = technologies;
  }

  submit() {
    
    this.tempUserDetails=[];
    this.displayValues = !this.displayValues;
    this.userDetails.push({ gender: this.selectedGender, hobbies: this.selectedHobbies, technologies: this.selectedTehnologies });
    this.userDetails.forEach((element:any,index:any) => {
      if(index <this.pageRecord)  this.tempUserDetails.push(element);
     
    });
    this.multiselectComponentRef.clearData();
    this.selectedTehnologies=[];
  }



  next() {
    this.tempUserDetails=[];
    this.pageNumber=this.pageNumber+1;
    const prev=(this.pageNumber-1)* this.pageRecord;
    const curr=this.pageNumber* this.pageRecord;
    this.userDetails.forEach((element:any,index:any)=>{
      if(index >= prev && index < curr){
        this.tempUserDetails.push(element);
      }
    })
  }
  prev() {
    this.tempUserDetails=[];
    this.pageNumber=this.pageNumber-1;
    const prev=(this.pageNumber-1)* this.pageRecord;
    const curr=this.pageNumber* this.pageRecord;
    this.userDetails.forEach((element:any,index:any)=>{
      if(index >= prev && index < curr){
        this.tempUserDetails.push(element);
      }
    })
  }

 
}
