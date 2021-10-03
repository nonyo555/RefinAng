import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Q2';
  arr : any ;
  result :string[] = [''] ;
  @ViewChild("searchBox") myInput: any;
  constructor(private httpClient: HttpClient) {

  }
  search(){
    let key =this.myInput.nativeElement.value
    this.result = []
    for(let item of this.arr){
        if(item.includes(key)){
          this.result.push(item)
        }
    }
  }
  ngOnInit(){
    this.httpClient.get('https://api.publicapis.org/categories').subscribe(data => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
       this.arr = data
       this.search()
    });    
  }
}
