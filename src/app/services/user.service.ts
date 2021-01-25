import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly APIUrl = 'http://127.0.0.1:8000/users';
  constructor(private http: HttpClient) { }
  
  getUserList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/users/');
  }
  addUser(val: any){
    return this.http.post(this.APIUrl + '/users/', val);
  }
  updateUser(val: any){
    return this.http.put(this.APIUrl + '/users/', val);
  }
  deleteUser(val: any){
    return this.http.delete(this.APIUrl + '/users/', val);
  }
  
}
