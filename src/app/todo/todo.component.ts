import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;
  

  constructor(private service: TodoService, private cookie: CookieService) { 
    this.cookie.set('isUserLogged', 'true' );
  }

  ngOnInit() {
    this.service.getTodo()
      .subscribe( response => {
        this.todos = response;
      });

    console.log(this.cookie.get('isUserLogged'));
  }

  createData(todo) {

    let data = {
      title: todo.value,
    };

    this.service.createTodo(data)
      .subscribe( response => {
        todo.value = '';
        this.todos.splice(0, 0, data);
      })
  }


  login() {
    console.log('Loggin In...');

    // So once the login is success, save those info in cookie
    this.cookie.set('userid', "12345");
    this.cookie.set('userType', "Internal");

    alert("User with id (" + this.cookie.get('userid') + ") successfully logged in.");
  }



}
