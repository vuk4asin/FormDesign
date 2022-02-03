import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import {MenuModule} from 'primeng/menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username?:string;
  password?:number;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.username){
      alert("Please fill username");
    }
    if(!this.password){
      alert("Please fill password");
    }
    const User= {
      username: this.username,
      password: this.password
    }
    console.log(User);
    this.service.Post(User)
  }

  Click(){
    console.log("Click")
  }

}
