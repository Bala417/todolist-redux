import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { list: [] },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.list.push(todo);
    },
    updateTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    removeTodo: (state, action) => {
      console.log(action);
      state.list = state.list.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo, removeTodo, updateTodo } = actions;
export default reducer;
