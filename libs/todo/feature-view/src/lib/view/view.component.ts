import { Component, OnInit } from '@angular/core';
import {Todo, ViewFacade} from '@nx-todo-demo/todo/domain';
import { ButtonSeverity } from '@nx-todo-demo/shared/ui-components';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;
  buttonSeverity = ButtonSeverity;

  constructor(private viewFacade: ViewFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.viewFacade.load();
  }

  delete(todo: Todo) {
    this.viewFacade.delete(todo);
  }
}
