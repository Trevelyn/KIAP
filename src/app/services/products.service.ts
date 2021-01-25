import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  getProduList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/products/');
  }
  addProducts(val:any){
    return this.http.post(this.APIUrl + '/products/', val);
  }
  updateProducts(val: any){
    return this.http.put(this.APIUrl + '/products/', val);
  }
  deleteProducts(val: any){
    return this.http.delete(this.APIUrl + '/products/' + val);
  }
}
