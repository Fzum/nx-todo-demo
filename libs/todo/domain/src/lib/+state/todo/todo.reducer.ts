import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as TodoActions from './todo.actions';
import { Todo } from '../../entities/todo';
import { immerOn } from 'ngrx-immer/store';

export const TODO_FEATURE_KEY = 'todo-todo';

export interface TodoState extends EntityState<Todo> {
  selectedId?: string;
  isLoading: boolean;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState({
  isLoading: false,
});

export const todoReducer = createReducer(
  initialState,
  immerOn(TodoActions.loadTodos, (state: TodoState) => {
    state.isLoading = true;
  }),
  on(TodoActions.loadTodoSuccess, (state: TodoState, { todos }) =>
    todoAdapter.upsertMany(todos, { ...state, isLoading: false })
  ),
  immerOn(TodoActions.loadTodoFailure, (state: TodoState) => {
    state.isLoading = false;
  }),
  on(TodoActions.removeTodo, (state: TodoState, { todo }) =>
    todoAdapter.removeOne(todo.id, state)
  )
);
