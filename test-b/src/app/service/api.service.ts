import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
    ) { }

    getApi() {
        return this.http.get(environment.API_BASE_URL)
    }

}