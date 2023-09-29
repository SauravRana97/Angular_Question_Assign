import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  public response = new BehaviorSubject<any>([]); 
  public formres = this.response.asObservable();

  public submitres = new BehaviorSubject<any>([]); 
  public data = this.response.asObservable();
  

  
  

  formdata(form:any){
    this.formres = form
  }
  submitdata(form:any){
    this.data = form
    console.log(this.data)
  }

  constructor() { }
}
