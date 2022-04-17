import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadTodos, removeTodo } from '../+state/todo/todo.actions';
import * as fromTodo from '../+state/todo/todo.reducer';
import * as TodoSelectors from '../+state/todo/todo.selectors';
import { Todo } from '../entities/todo';

@Injectable({ providedIn: 'root' })
export class ViewFacade {
  isLoading$ = this.store.select(TodoSelectors.getIsTodoLoading);
  todos$ = this.store.select(TodoSelectors.getAllTodo);
  selectedTodo$ = this.store.select(TodoSelectors.getSelected);

  constructor(private store: Store<fromTodo.TodoState>) {}

  loadTodos(): void {
    this.store.dispatch(loadTodos());
  }

  delete(todo: Todo) {
    this.store.dispatch(removeTodo({ todo }));
  }
}
