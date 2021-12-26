import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./Todolists/TodoSlice";
export default configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});
