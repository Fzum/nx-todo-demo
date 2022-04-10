import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, TodoState, todoAdapter } from './todo.reducer';

export const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

const { selectAll, selectEntities } = todoAdapter.getSelectors();

export const getTodoLoaded = createSelector(
  getTodoState,
  (state: TodoState) => state.isLoading
);

export const getAllTodo = createSelector(getTodoState, (state: TodoState) =>
  selectAll(state)
);

export const getTodoEntities = createSelector(
  getTodoState,
  (state: TodoState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTodoState,
  (state: TodoState) => state.selectedId
);

export const getSelected = createSelector(
  getTodoEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
