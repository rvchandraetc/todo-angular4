import { Todo } from './../modal/Todo';
import { Component } from '@angular/core';
import { Subscription } from "rxjs";
import { TodoService } from 'src/service/todo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

   title = 'My Todos';
   show_loader: boolean = false;
   todos: Todo[] = new Array();
   isLoading:boolean = false;


  constructor(public todoService: TodoService) {
       console.log("called constructor");
  }


  ngOnInit(){
    console.log("called ngOnInit");
    this.isLoading = true;
    setTimeout(()=>{   
      this.todos = this.todoService.getTodoList();
      this. isLoading = false; }, 2000);
  }


 /**
  * @param label 
  *  Add a todo
  */
  addToDo(label): void {
    this.isLoading = true;
    setTimeout(()=>{   
      let priority: number = this.todos.length;
      let newTodo: Todo = {
        label: label,
        priority: priority + 1,
        done: false
      }
      this.todos.push(newTodo);
      this.isLoading = false; }, 2000);
  }


  /**
   * 
   * @param todoToRemove 
   * Remove a todo
   */
  deleteTodo(todoToRemove): void {
    this.isLoading = true;
    setTimeout(()=>{   
      this.todos = this.todos.filter(todo => todo.label != todoToRemove.label);
      this.isLoading = false; }, 2000);
  }
}
