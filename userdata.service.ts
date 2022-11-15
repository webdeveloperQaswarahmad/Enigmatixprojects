import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
     url="https://jsonplaceholder.typicode.com/albums";
  constructor(private http:HttpClient) { }
  user(){
    return this.http.get(this.url)
  }
  saveUser(data:any){
      return this.http.post(this.url,data)
  }
   
}
