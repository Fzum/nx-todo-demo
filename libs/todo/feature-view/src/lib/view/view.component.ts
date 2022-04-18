import { Component, OnInit } from '@angular/core';
import { Todo, ViewFacade } from '@nx-todo-demo/todo/domain';
import { ButtonSeverity } from '@nx-todo-demo/shared/ui-components';
import { first, map, withLatestFrom } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo-view',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  todos$ = this.viewFacade.todos$;
  searchedTodos$ = this.viewFacade.searchedTodos$;
  isLoading$ = this.viewFacade.isLoading$;
  isAllSearchedSelected$ = this.viewFacade.isAllSearchedSelected$;
  isAllSelected$ = this.viewFacade.isAllSelected$;
  selectedTodos$ = this.viewFacade.selectedTodos$;

  buttonSeverity = ButtonSeverity;

  searchFc = new FormControl('');

  constructor(private viewFacade: ViewFacade) {
    this.searchFc.valueChanges.subscribe((searchTerm) =>
      this.viewFacade.searchTodos(searchTerm)
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

  toggleManySelection() {
    this.isAllSearchedSelected$
      .pipe(first(), withLatestFrom(this.searchedTodos$))
      .subscribe(([isAllSelected, searchedTodos]) => {
        if (isAllSelected) {
          this.viewFacade.deselectMany(searchedTodos);
        } else {
          this.viewFacade.selectMany(searchedTodos);
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
