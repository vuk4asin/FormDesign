import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl='http://localhost:5000/posts';

   httpOptions = {
    headers:new HttpHeaders({
    'Content-Type':'application/json',
    })
  }

  constructor(private http:HttpClient) { }


  Post(User:any){
     return this.http.post<any>(this.apiUrl,User,this.httpOptions).subscribe(res=>{
      alert("Regstration sucssesful");
    })
  }

  getPost(){
    return this.http.get(this.apiUrl).subscribe((res)=>{
      console.log(res);
    })
  }

}
