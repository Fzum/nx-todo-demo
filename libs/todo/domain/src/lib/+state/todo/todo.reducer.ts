import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as TodoActions from './todo.actions';
import { Todo } from '../../entities/todo';

export const TODO_FEATURE_KEY = 'todo-todo';

export interface TodoState extends EntityState<Todo> {
  selectedId?: string;
  isLoaded: boolean;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState({
  isLoaded: false,
});

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({
    ...state,
    isLoaded: false,
    error: null,
  })),
  on(TodoActions.loadTodoSuccess, (state, { todo }) =>
    todoAdapter.upsertMany(todo, { ...state, isLoaded: true })
  ),
  on(TodoActions.loadTodoFailure, (state) => ({ ...state }))
);
