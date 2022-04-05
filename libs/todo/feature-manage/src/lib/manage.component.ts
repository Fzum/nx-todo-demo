import { Component, OnInit } from '@angular/core';
import { ManageFacade } from '@nx-todo-demo/todo/domain';

@Component({
  selector: 'todo-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  todoList$ = this.manageFacade.todoList$;

  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manageFacade.load();
  }
}
