import { Component, OnInit } from '@angular/core';
import { Todo, ViewFacade } from '@nx-todo-demo/todo/domain';
import { ButtonSeverity } from '@nx-todo-demo/shared/ui-components';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;
  isLoading$ = this.viewFacade.isLoading$;
  buttonSeverity = ButtonSeverity;

  constructor(private viewFacade: ViewFacade) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos(): void {
    this.viewFacade.loadTodos();
  }

  delete(todo: Todo) {
    this.viewFacade.delete(todo);
  }
}
