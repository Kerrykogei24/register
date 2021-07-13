import { environment } from './../environments/environment.prod';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(private http: HttpClient) { }
//the api call for new user registration
  registerNewUser(userData:any): Observable<any>{
    return this.http.post(`${environment.apiUrl}` + '/api/v1/users/registration/' , userData)
  }
  //adding survey data to our database
  addData(val:any):Observable<any>{
    return this.http.post(`${environment.apiUrl}`+ "/surveydata/",val )
  }
}
