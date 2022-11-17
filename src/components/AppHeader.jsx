import React from "react";
import style from "../styles/modules/app.module.scss";
import Button from "./Button";
import SelectButton from "./SelectButton";
import TodoModal from "./TodoModal";

const AppHeader = () => {
  return (
    <div className={style.appHeader}>
      <Button>Add Task</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="inCompleted">In Completed</option>
        <option value="completed">Completed</option>
      </SelectButton>
      <TodoModal />
    </div>
  );
};

export default AppHeader;
