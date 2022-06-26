import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from '../Todos';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todo!: Todos;
 @Input() i!: number;
 @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
 @Output() todoToggle: EventEmitter<Todos> = new EventEmitter();

 onClick(todo:Todos) {
  this.todoDelete.emit(todo)
  console.log("Delete is triggered")
 }

 toggleTodo(todo: Todos) {
  this.todoToggle.emit(todo)

 }

  constructor() { }

  ngOnInit(): void {
  }

}
