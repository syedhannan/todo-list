import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from '../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();

  onSubmit() {
    const todo = {
      slno: 3,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
  }

  clearData() {
    this.title = '';
    this.desc = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
