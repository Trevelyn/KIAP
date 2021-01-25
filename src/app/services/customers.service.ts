import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
readonly APIUrl = "http://127.0.0.1:8000";
  

  constructor(private http:HttpClient) { }

  
  form: FormGroup = new FormGroup({
    $id: new FormControl(null), //unique idetifier
    customerName: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
    
  });

  initializeFormGroup(){
    this.form.setValue({
      $id: null,
      customerName: '',
      category:''
    });
  }
 

  getCustoList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/customers/');
  }
  addCustomer(val:any){
    return this.http.post(this.APIUrl + '/customers/', val);
  }
  updateCustomer(val: any){
    return this.http.put(this.APIUrl + '/customers/', val);
  }
  deleteCusomer(val: any){
    return this.http.delete(this.APIUrl + '/customers/' + val);
  }
}
