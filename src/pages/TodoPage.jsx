import React from "react";
import { Toaster } from "react-hot-toast";
import PageTitle from "../components/PageTitle";
import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import style from "../styles/modules/app.module.scss";

const TodoPage = () => {
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader></AppHeader>
          <TodoList />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
};

export default TodoPage;
