import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, todoAdapter, TodoState } from './todo.reducer';

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
