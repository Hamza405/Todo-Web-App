import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
  updateFilterStatusAction,
} from "../actions/todoActions";

const getInitTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

const initValue = {
  todoList: getInitTodo(),
  filterStatus: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initValue,
  reducers: {
    addTodoAction,
    deleteTodoAction,
    updateTodoAction,
    updateFilterStatusAction,
  },
});

export const {
  addTodoAction: addTodo,
  deleteTodoAction: deleteTodo,
  updateTodoAction: updateTodo,
  updateFilterStatusAction: updateFilterStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
