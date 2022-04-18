import { Component, OnInit } from '@angular/core';
import { Todo, ViewFacade } from '@nx-todo-demo/todo/domain';
import { ButtonSeverity } from '@nx-todo-demo/shared/ui-components';
import { first, map } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;
  isLoading$ = this.viewFacade.isLoading$;
  isAllSelected$ = this.viewFacade.isAllSelected$;
  selectedTodos$ = this.viewFacade.selectedTodos$;

  buttonSeverity = ButtonSeverity;

  searchFc = new FormControl('');
  searchedTodos$ = this.viewFacade.todos$;

  constructor(private viewFacade: ViewFacade) {
    this.searchFc.valueChanges.subscribe(
      (searchTerm) =>
        (this.searchedTodos$ = this.todos$.pipe(
          map((todos) =>
            todos.filter((t) =>
              t.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        ))
    );
  }

  get searchTerm() {
    return this.searchFc.value;
  }

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
    this.getSelectedTodos$().subscribe((selectedTodos) => {
      if (selectedTodos.includes(todo)) {
        this.viewFacade.deselect(todo);
      } else {
        this.viewFacade.select(todo);
      }
    });
  }

  toggleAllSelection() {
    this.isAllSelected$.pipe(first()).subscribe((isAllSelected) => {
      if (isAllSelected) {
        this.viewFacade.deselectAll();
      } else {
        this.viewFacade.selectAll();
      }
    });
  }

  isSelected(todo: Todo) {
    return this.getSelectedTodos$().pipe(
      map((selectedTodos) => selectedTodos.includes(todo))
    );
  }

  private getSelectedTodos$() {
    return this.selectedTodos$.pipe(first());
  }
}
