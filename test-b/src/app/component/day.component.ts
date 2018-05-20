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
    @Input() countMax: number
    @Input() countSun: number
    @Input() countMon: number
    @Input() countTue: number
    @Input() countWed: number
    @Input() countThu: number
    @Input() countFri: number
    @Input() countSat: number

  constructor(
    private http:HttpClient
  ){ }

  dataName=[]; dataPhoto=[];
  arrySun=[];arryMon=[];arryTue=[];
  arryWed=[];arryThu=[];arryFri=[];arrySat=[];
  noPerson;

  ngOnInit(){
  

        var per = JSON.parse(localStorage.getItem('persons'))
        if(localStorage.getItem('persons')){
          var myDate;
          per.forEach(element => {
            myDate = new Date (element.birthday.mdy)
            if(myDate.getDay()==0&&this.toDay.toUpperCase()=='SUN'){
              if(element.name==""){  
              this.dataName.push("noname")
              this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              }
            }
            if(myDate.getDay()==1&&this.toDay.toUpperCase()=='MON'){
              if(element.name==""){  
                this.dataName.push("noname") 
                this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              }
            }
            if(myDate.getDay()==2&&this.toDay.toUpperCase()=='TUE'){
              if(element.name==""){  
                this.dataName.push("noname") 
                this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              }
            }
            if(myDate.getDay()==3&&this.toDay.toUpperCase()=='WED'){
              if(element.name==""){  
                this.dataName.push("noname")
                this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              } 
            }
            if(myDate.getDay()==4&&this.toDay.toUpperCase()=='THU'){
              if(element.name==""){  
                this.dataName.push("noname")
                this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              }
            }
            if(myDate.getDay()==5&&this.toDay.toUpperCase()=='FRI'){
              if(element.name==""){  
                this.dataName.push("noname") 
                this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              }
            }
            if(myDate.getDay()==6&&this.toDay.toUpperCase()=='SAT'){
              if(element.name==""){  
                this.dataName.push("noname") 
                this.dataPhoto.push(element.photo)
              }else{
              this.dataName.push(element.name)
              this.dataPhoto.push(element.photo)
              }
            }
          })
        }

      if(this.countSun!=undefined){
         var del = this.countMax-this.countSun
         if(del){ this.arrySun = Array(del).fill(4) }
         if(del == this.countMax) { this.noPerson = "No one today" }
      }

      if(this.countMon!=undefined){
        var del = this.countMax-this.countMon
        if(del){ this.arryMon = Array(del).fill(4) }
        if(del == this.countMax) { this.noPerson = "No one today" }
     }

      if(this.countTue!=undefined){
        var del = this.countMax-this.countTue
        if(del){ this.arryTue = Array(del).fill(4) }
        if(del == this.countMax) { this.noPerson = "No one today" }
      }

      if(this.countWed!=undefined){
         var del = this.countMax-this.countWed
         if(del){ this.arryWed = Array(del).fill(4) }
         if(del == this.countMax) { this.noPerson = "No one today" }
      }

      if(this.countThu!=undefined){
        var del = this.countMax-this.countThu
        if(del){ this.arryThu = Array(del).fill(4) }
        if(del == this.countMax) { this.noPerson = "No one today" }
     }

     if(this.countFri!=undefined){
       var del = this.countMax-this.countFri
       if(del){ this.arryFri = Array(del).fill(4) }
       if(del == this.countMax) { this.noPerson = "No one today" }
   }

    if(this.countSat!=undefined){
      var del = this.countMax-this.countSat
      if(del){ this.arrySat = Array(del).fill(4) }
      if(del == this.countMax) { this.noPerson = "No one today" }
   }
 }
}

