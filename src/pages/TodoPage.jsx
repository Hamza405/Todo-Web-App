import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../components/PageHeader";
import AppHeader from "../components/AppHeader";
import TodoList from "../components/TodoList";
import { getTodo } from "../store/actions/todoActions";
import style from "../styles/modules/app.module.scss";

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
