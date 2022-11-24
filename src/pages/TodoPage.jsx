import React from "react";
import { Toaster } from "react-hot-toast";
import PageTitle from "../components/PageTitle";
import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import style from "../styles/modules/app.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const TodoPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
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
