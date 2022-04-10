import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadTodos } from '../+state/todo/todo.actions';
import * as fromTodo from '../+state/todo/todo.reducer';
import * as TodoSelectors from '../+state/todo/todo.selectors';

@Injectable({ providedIn: 'root' })
export class ViewFacade {
  loaded$ = this.store.select(TodoSelectors.getTodoLoaded);
  todos$ = this.store.select(TodoSelectors.getAllTodo);
  selectedTodo$ = this.store.select(TodoSelectors.getSelected);

  constructor(private store: Store<fromTodo.TodoState>) {}

  load(): void {
    this.store.dispatch(loadTodos());
  }
}
