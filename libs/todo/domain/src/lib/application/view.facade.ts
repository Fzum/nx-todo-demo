import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  deselectMany,
  deselectTodo,
  loadTodos,
  removeTodo,
  searchTodo,
  selectMany,
  selectTodo,
} from '../+state/todo/todo.actions';
import * as fromTodo from '../+state/todo/todo.reducer';
import * as TodoSelectors from '../+state/todo/todo.selectors';
import { Todo } from '../entities/todo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViewFacade {
  isLoading$: Observable<boolean> = this.store.select(
    TodoSelectors.getIsTodoLoading
  );
  todos$: Observable<Todo[]> = this.store.select(TodoSelectors.getAllTodo);
  searchedTodos$: Observable<Todo[]> = this.store.select(
    TodoSelectors.getSearchedTodos
  );
  selectedTodos$: Observable<Todo[]> = this.store.select(
    TodoSelectors.getSelected
  );
  isAllSearchedSelected$: Observable<boolean> = this.store.select(
    TodoSelectors.isAllSearchedSelected
  );
  isAllSelected$: Observable<boolean> = this.store.select(
    TodoSelectors.isAllSelected
  );

  constructor(private store: Store<fromTodo.TodoState>) {}

  loadTodos(): void {
    this.store.dispatch(loadTodos());
  }

  delete(todo: Todo) {
    this.store.dispatch(removeTodo({ todo }));
  }

  deselect(todo: Todo) {
    this.store.dispatch(deselectTodo({ todo }));
  }

  select(todo: Todo) {
    this.store.dispatch(selectTodo({ todo }));
  }

  selectMany(todos: Todo[]) {
    this.store.dispatch(selectMany({ todos }));
  }

  deselectMany(todos: Todo[]) {
    this.store.dispatch(deselectMany({ todos }));
  }

  searchTodos(searchTerm: string) {
    this.store.dispatch(searchTodo({ searchTerm }));
  }
}
