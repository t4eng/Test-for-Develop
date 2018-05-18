import { Component,OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit{
    @Input() toDay: string

  constructor(
    private http:HttpClient
  ){}

  dataName=[];
  dataPhoto=[];

  ngOnInit(){
 
        var per = JSON.parse(localStorage.getItem('persons'))
        if(localStorage.getItem('persons')){
          var myDate;
          per.forEach(element => {
            myDate = new Date (element.birthday.mdy)
            if(myDate.getDay()==0&&this.toDay.toUpperCase()=='SUN'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
            if(myDate.getDay()==1&&this.toDay.toUpperCase()=='MON'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
            if(myDate.getDay()==2&&this.toDay.toUpperCase()=='TUE'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
            if(myDate.getDay()==3&&this.toDay.toUpperCase()=='WED'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
            if(myDate.getDay()==4&&this.toDay.toUpperCase()=='THU'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
            if(myDate.getDay()==5&&this.toDay.toUpperCase()=='FRI'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
            if(myDate.getDay()==6&&this.toDay.toUpperCase()=='SAT'){
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
            }
          })
        }
      }
  }

