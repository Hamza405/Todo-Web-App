import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoRequest,
  deleteTodoRequest,
  getTodoRequest,
  updateTodoRequest,
} from "../../api/todo-api";
import {
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
  updateFilterStatusAction,
  replaceTodoListAction,
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
  todoList: [],
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
    replaceTodoListAction,
  },
});

export const {
  addTodoAction: addTodoProcess,
  deleteTodoAction: deleteTodoProcess,
  updateTodoAction: updateTodoProcess,
  updateFilterStatusAction: updateFilterStatus,
  replaceTodoListAction: replaceTodoList,
} = todoSlice.actions;
export default todoSlice.reducer;

export const getTodo = (userId) => {
  return async (dispatch) => {
    try {
      const res = await getTodoRequest(userId);
      dispatch(replaceTodoList(res));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addTodo = (userId, todo) => {
  return async (dispatch) => {
    try {
      const res = await addTodoRequest(userId, todo);
      dispatch(addTodoProcess(res));
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateTodo = (userId, todo) => {
  return async (dispatch) => {
    try {
      const res = await updateTodoRequest(userId, todo);
      dispatch(updateTodoProcess({ ...res, ...todo }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteTodo = (userId, todoId) => {
  return async (dispatch) => {
    try {
      await deleteTodoRequest(userId, todoId);
      dispatch(deleteTodoProcess(todoId));
    } catch (e) {
      console.log(e);
    }
  };
};
