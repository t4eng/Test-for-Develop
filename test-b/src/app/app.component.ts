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

 ngOnInit(){

      this.apiService.getApi().toPromise().then( res=>{ 
         localStorage.setItem('persons',JSON.stringify(res))
         this.showComponent = true
      })
  
  }
}
