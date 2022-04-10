import { createAction, props } from '@ngrx/store';
import { Todo } from '../../entities/todo';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodoSuccess = createAction(
  '[Todo] Load Todo Success',
  props<{ todo: Todo[] }>()
);

export const loadTodoFailure = createAction('[Todo] Load Todo Failure');
