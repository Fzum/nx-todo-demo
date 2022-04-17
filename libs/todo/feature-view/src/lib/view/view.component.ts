import { Component, OnInit } from '@angular/core';
import { Todo, ViewFacade } from '@nx-todo-demo/todo/domain';
import { ButtonSeverity } from '@nx-todo-demo/shared/ui-components';
import { first } from 'rxjs';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;
  isLoading$ = this.viewFacade.isLoading$;
  selectedTodos$ = this.viewFacade.selectedTodos$;

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

  toggleSelection(todo: Todo) {
    this.getFirstSelectedTodos$().subscribe((selectedTodos) => {
      if (selectedTodos.includes(todo)) {
        this.viewFacade.deselect(todo);
      } else {
        this.viewFacade.select(todo);
      }
    });
  }

  toggleAllSelection() {
    this.getFirstSelectedTodos$().subscribe((selectedTodos) => {
      if (selectedTodos.length > 0) {
        this.viewFacade.deselectAll();
      } else {
        this.viewFacade.selectAll();
      }
    });
  }

  private getFirstSelectedTodos$() {
    return this.selectedTodos$.pipe(first());
  }
}
