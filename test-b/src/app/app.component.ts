import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from '../environments/environment'
import { ApiService } from './service/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private http:HttpClient,
    private apiService: ApiService
  ){}

  showComponent = false
  countSun=0;countMon=0;countTue=0;countWed=0;
  countThu=0;countFri=0;countSat=0; countMax;
  numbers=[];
 ngOnInit(){

      this.apiService.getApi().toPromise().then( res=>{ 
         localStorage.setItem('persons',JSON.stringify(res))
         this.showComponent = true

      var per = JSON.parse(localStorage.getItem('persons'))
      if(localStorage.getItem('persons')){
        var myDate;
        var i=0;
        per.forEach(element => {
          myDate = new Date (element.birthday.mdy)
          if(myDate.getDay()==0){
           this.countSun++;
          }
          if(myDate.getDay()==1){
            this.countMon++;
           }
           if(myDate.getDay()==2){
            this.countTue++;
           }
           if(myDate.getDay()==3){
            this.countWed++;
           }
           if(myDate.getDay()==4){
            this.countThu++;
           }
           if(myDate.getDay()==5){
            this.countFri++;
           }
           if(myDate.getDay()==6){
            this.countSat++;
           }
        })
      
      }
      this.numbers.push(this.countSun)
      this.numbers.push(this.countMon)
      this.numbers.push(this.countTue)
      this.numbers.push(this.countWed)
      this.numbers.push(this.countThu)
      this.numbers.push(this.countFri)
      this.numbers.push(this.countSat)

      console.log(this.numbers);
      this.countMax = this.numbers[0] 
      for(var i=0;i<this.numbers.length;i++){
         if(this.numbers[i] > this.countMax){
          this.countMax = this.numbers[i]
         }
      }
      console.log(this.countMax);
      // console.log(Math.max(...this.numbers));
    })//
  } 
}
