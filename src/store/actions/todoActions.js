import {
  addTodoRequest,
  deleteTodoRequest,
  getTodoRequest,
  updateTodoRequest,
} from "../../api/todo-api";

import {
  replaceTodoList,
  addTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "../slices/todoSlice";

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
      dispatch(addTodoAction(res));
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateTodo = (userId, todo) => {
  return async (dispatch) => {
    try {
      const res = await updateTodoRequest(userId, todo);
      dispatch(updateTodoAction({ ...res, ...todo }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteTodo = (userId, todoId) => {
  return async (dispatch) => {
    try {
      await deleteTodoRequest(userId, todoId);
      dispatch(deleteTodoAction(todoId));
    } catch (e) {
      console.log(e);
    }
  };
};
