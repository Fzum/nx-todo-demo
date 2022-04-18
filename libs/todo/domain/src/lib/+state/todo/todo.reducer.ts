import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as TodoActions from './todo.actions';
import { Todo } from '../../entities/todo';
import { immerOn } from 'ngrx-immer/store';
import produce from 'immer';
import * as _ from 'lodash';

export const TODO_FEATURE_KEY = 'todo-todo';

export interface TodoState extends EntityState<Todo> {
  selectedIds: number[];
  isLoading: boolean;
  searchedTodos: Todo[];
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState({
  selectedIds: [],
  isLoading: false,
  searchedTodos: [],
});

export const todoReducer = createReducer(
  initialState,
  immerOn(TodoActions.loadTodos, (state: TodoState) => {
    state.isLoading = true;
  }),
  on(TodoActions.loadTodoSuccess, (state: TodoState, { todos }) =>
    todoAdapter.upsertMany(todos, {
      ...state,
      isLoading: false,
      searchedTodos: todos,
    })
  ),
  immerOn(TodoActions.loadTodoFailure, (state: TodoState) => {
    state.isLoading = false;
  }),
  on(TodoActions.removeTodo, (state: TodoState, { todo }) =>
    todoAdapter.removeOne(
      todo.id,
      produce(state, (draft) => {
        draft.selectedIds.splice(draft.selectedIds.indexOf(todo.id), 1);
      })
    )
  ),
  immerOn(TodoActions.selectTodo, (state: TodoState, { todo }) => {
    if (!state.selectedIds.includes(todo.id)) {
      state.selectedIds.push(todo.id);
    }
  }),
  immerOn(TodoActions.deselectTodo, (state: TodoState, { todo }) => {
    const selectedIds = state.selectedIds;
    selectedIds.splice(selectedIds.indexOf(todo.id), 1);
  }),
  immerOn(TodoActions.selectMany, (state: TodoState, { todos }) => {
    state.selectedIds = _.union(
      state.selectedIds,
      todos.map((t) => t.id)
    );
  }),
  immerOn(TodoActions.deselectMany, (state: TodoState, { todos }) => {
    _.remove(state.selectedIds, (id) => todos.map((t) => t.id).includes(id));
  }),
  immerOn(TodoActions.searchTodo, (state: TodoState, { searchTerm }) => {
    state.searchedTodos = (Object.values(state.entities) as Todo[]).filter(
      (t) => t.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  })
);
