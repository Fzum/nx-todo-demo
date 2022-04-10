import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadTodos } from '../+state/todo/todo.actions';
import * as fromTodo from '../+state/todo/todo.reducer';
import * as TodoSelectors from '../+state/todo/todo.selectors';

@Injectable({ providedIn: 'root' })
export class ViewFacade {
  loaded$ = this.store.pipe(select(TodoSelectors.getTodoLoaded));
  todoList$ = this.store.pipe(select(TodoSelectors.getAllTodo));
  selectedTodo$ = this.store.pipe(select(TodoSelectors.getSelected));

  constructor(private store: Store<fromTodo.TodoState>) {}

  load(): void {
    this.store.dispatch(loadTodos());
  }
}
