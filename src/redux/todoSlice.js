import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoAction: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodoAction: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
    updateTodoAction: (state, { payload }) => {
      state.todos = state.todos.map(item =>
        item.id === payload.id ? payload : item
      );
    },
  },
});

export const { addTodoAction, deleteTodoAction, updateTodoAction } =
  todoSlice.actions;
export default todoSlice.reducer;

export const todosSelector = state => state.todos;
