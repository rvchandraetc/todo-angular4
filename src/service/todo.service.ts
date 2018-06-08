import { Injectable } from "@angular/core";
import { Todo } from "src/modal/Todo";


/**
 *  A Service class to get default
 *   list of todo
 */
@Injectable()
export class TodoService {

    todos: Todo[] = [
        { label: 'Get Up Early', done: false, priority: 1 },
        { label: 'Read Java', done: false, priority: 2 },
        { label: 'Attend Java Interview', done: false, priority: 3 },
    ]

     getTodoList() {
        console.log("Get ToDo List")
        return this.todos;
    }
}