import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import style from "../styles/modules/app.module.scss";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className={style.content__wrapper}>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((i) => <TodoItem key={i.id} todo={i} />)
        : "No Tasks found"}
    </div>
  );
};

export default TodoList;
