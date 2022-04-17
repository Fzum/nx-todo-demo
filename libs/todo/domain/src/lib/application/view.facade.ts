import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  deSelectAll,
  deselectTodo,
  loadTodos,
  removeTodo,
  selectAll,
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
  selectedTodos$: Observable<Todo[]> = this.store.select(
    TodoSelectors.getSelected
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

  selectAll() {
    this.store.dispatch(selectAll());
  }

  deselectAll() {
    this.store.dispatch(deSelectAll());
  }
}
