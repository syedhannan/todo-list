import { Component, OnInit } from '@angular/core';
import { Todos } from '../Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  todos: Todos[];
  localItem: string;
  
  

  constructor() {
    this.localItem = localStorage.getItem("todos") || ""

    if(this.localItem=="") {
      this.todos = []
    }
    else {
      this.todos= JSON.parse(this.localItem)
    }



    // this.todos= [
    //   { slno: 1, title: 'First todo', desc: 'This is my first todo task' },
    //   { slno: 2, title: 'Second todo', desc: 'This is my second todo task' },
    //   { slno: 3, title: 'Third todo', desc: 'This is my third todo task' },
    // ];
  }

  deleteTodo(todo: Todos) {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos", JSON.stringify(this.todos))

    console.log(todo)
  }

  addTodo(todo :Todos) {
   
    console.log("getting called todoAdd")
    this.todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(this.todos))
  
  }
  toggleTodo(todo: Todos) {
    console.log("toggleTodo is getting called")
    console.log(this.todos)
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
    console.log(this.todos)




  }



  ngOnInit(): void {}
}
