import { createAction, props } from '@ngrx/store';
import { Todo } from '../../entities/todo';

export const loadTodos = createAction('[Todo Page] Load Todos');

export const loadTodoSuccess = createAction(
  '[Todo Page] Load Todo Success',
  props<{ todos: Todo[] }>()
);

export const loadTodoFailure = createAction('[Todo Page] Load Todo Failure');

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ todo: Todo }>()
);

export const selectTodo = createAction(
  '[Todo Page] Select Todo',
  props<{ todo: Todo }>()
);

export const deselectTodo = createAction(
  '[Todo Page] Deselect Todo',
  props<{ todo: Todo }>()
);

export const selectMany = createAction(
  '[Todo Page] Select Many',
  props<{ todos: Todo[] }>()
);

export const deselectMany = createAction(
  '[Todo Page] Deselect Many',
  props<{ todos: Todo[] }>()
);
