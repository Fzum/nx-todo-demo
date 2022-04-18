import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, todoAdapter, TodoState } from './todo.reducer';
import * as _ from 'lodash';

export const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

const { selectAll, selectEntities } = todoAdapter.getSelectors();

export const getIsTodoLoading = createSelector(
  getTodoState,
  (state) => state.isLoading
);

export const getAllTodo = createSelector(getTodoState, (state) =>
  selectAll(state)
);

export const getTodoEntities = createSelector(getTodoState, (state) =>
  selectEntities(state)
);

export const getSelectedIds = createSelector(
  getTodoState,
  (state) => state.selectedIds
);

export const getSelected = createSelector(
  getAllTodo,
  getSelectedIds,
  (todos, selectedIds) => todos.filter((t) => selectedIds.includes(t.id))
);

export const getSearchedTodos = createSelector(
  getTodoState,
  (state) => state.searchedTodos
);

export const isAllSearchedSelected = createSelector(
  getSearchedTodos,
  getSelectedIds,
  (todos, selectedIds) => {
    const searchedTodoIds = todos.map((t) => t.id);
    return searchedTodoIds.every((id) => selectedIds.includes(id));
  }
);

export const isAllSelected = createSelector(
  getAllTodo,
  getSelectedIds,
  (todos, selectedIds) => {
    const allTodoIds = todos.map((t) => t.id);
    return _.isEqual(allTodoIds.sort(), [...selectedIds].sort());
  }
);
