import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import style from "../styles/modules/app.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { getTodo } from "../store/actions/todoActions";

const TodoPage = () => {
  const userId = useSelector((state) => state.auth.user.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo(userId));
  }, [userId, dispatch]);

  return (
    <>
      <div className="container">
        <PageHeader>Todo List</PageHeader>
        <div className={style.app__wrapper}>
          <AppHeader />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
