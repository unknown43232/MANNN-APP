import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'penny-task-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3333/api/user/user', { withCredentials: true })
      .subscribe(
        (name: any) => {
          this.message = 'Hello, ' + name;
          Emitters.authEmitter.emit(true);
        },
        (err) => {
          this.message = 'you are not';
          Emitters.authEmitter.emit(false);
        }
      );
  }
}
