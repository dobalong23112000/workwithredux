import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataTodoLists, addTodoDB } from "../../firebase";
export const getTodos = createAsyncThunk("todoList/todosFetched", async () => {
  const data = await getDataTodoLists();
  return data;
});
export const TodoAdded = createAsyncThunk(
  "/todoList/todoAdded",
  async (dataTodo) => {
    await addTodoDB(dataTodo);
  }
);
export const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateCompleted: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      // return state.filter((todo) => {
      //   return todo.id !== action.payload;
      // });
      state = state.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      action.payload.forEach((todo) => {
        state.push(todo);
      });
    },
    [TodoAdded.fulfilled]: (state, action) => {},
  },
});
export const { addTodo, updateCompleted, deleteTodo } = todoSlice.actions;
