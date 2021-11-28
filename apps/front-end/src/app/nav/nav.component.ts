import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'penny-task-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated:boolean=false;
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{    
        this.authenticated = auth;
      }
    );
  }
  logout():void{
    this.http.post("http://localhost:3333/api/user/logout",{},{withCredentials:true}).subscribe(()=>{
      console.log("logging out");
      
    });
  }

}
