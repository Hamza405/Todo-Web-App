import React, { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
import style from "../styles/modules/app.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";
import { getTodo } from "../store/actions/todoActions";

const TodoPage = () => {
  const userId = useSelector((state) => state.auth.user.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo(userId));
  }, []);

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
    </>
  );
};

export default TodoPage;
