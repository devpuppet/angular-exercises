import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  todoForm: FormGroup;

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      id: [""],
      value: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }

  onSubmit() {
    this.todoService.create(this.todoForm.value);
    this.todoForm.get("value")?.setValue("");
  }

}
