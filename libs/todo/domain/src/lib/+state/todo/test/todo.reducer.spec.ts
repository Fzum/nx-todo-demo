import * as fromReducer from '../todo.reducer';
import { TodoState } from '../todo.reducer';
import { loadTodos, loadTodoSuccess, Todo } from '@nx-todo-demo/todo/domain';

describe('todo reducer', () => {
  it('should set loading true when loading todos', () => {
    // given
    const { initialState } = fromReducer;

    // when
    const state = fromReducer.todoReducer(initialState, loadTodos());

    // then
    const expectedState: TodoState = {
      ...initialState,
      isLoading: true,
    };
    expect(state).toEqual(expectedState);
    expect(state).not.toBe(expectedState);
  });

  it('should add todos when loading todos success', () => {
    const { initialState } = fromReducer;
    const givenTodos: Todo[] = [
      {
        id: 1,
        name: 'one',
        description: 'one',
      },
      {
        id: 2,
        name: 'two',
        description: 'two',
      },
    ];

    // when
    const state = fromReducer.todoReducer(
      initialState,
      loadTodoSuccess({ todos: givenTodos })
    );

    // then
    expect(state.ids).toHaveLength(2);
  });
});
