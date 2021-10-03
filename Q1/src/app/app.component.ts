import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Q1';
  ansValue : string = ''; 
  number  = 0;
  @ViewChild("input") myInput: any;
  @ViewChild("select") mySelect: any;
  constructor() {
    
  }
  calculation(){
     let input = this.myInput.nativeElement.value
     let select = this.mySelect.nativeElement.value
     if(select == 1){
        //isPrime
        let count = 0;
        if(input < 2){
          this.ansValue = "false";
          return
        }
        for (let i = 2 ; i <= input;i++){
          if(input % i ==0){
            count+=1
          }
          if(count > 1) {
            this.ansValue = "false";
            return
          }
        }
        this.ansValue = "true"
      }
     else if (select == 2){
        //isFibbonacci
        let past = 1
        let cur = 1
        while (cur  <= input) {
           if(cur == input){
             this.ansValue = "true"
             return;
           }
        let temp = cur ;
        cur += past ;
        past = temp ; 
        }
        this.ansValue = "false"
     }
  }
}
