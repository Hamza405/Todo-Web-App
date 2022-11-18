import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import style from "../styles/modules/app.module.scss";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <div className={style.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((i) => <TodoItem key={i.id} todo={i} />)
        : "No Tasks found"}
    </div>
  );
};

export default TodoList;
