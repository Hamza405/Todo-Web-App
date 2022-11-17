import React from "react";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { getStyleClasses } from "../utils/getStyleClasses";
import style from "../styles/modules/todoItem.module.scss";

const TodoItem = ({ todo }) => {
  const handleUpdate = (e) => {};
  const handleDelete = (e) => {};
  return (
    <div className={style.item}>
      <div className={style.todoDetails}>
        <div className={style.texts}>
          <p
            className={getStyleClasses([
              style.todoText,
              todo.status === "complete" && style["todoText--completed"],
            ])}
          >
            {todo.title}
          </p>
          <p className={style.time}>
            {format(new Date(todo.time), "p, MM/dd/yyyy")}
          </p>
        </div>
      </div>
      <div className={style.todoActions}>
        <div
          onClick={() => handleDelete()}
          onKeyDown={() => handleDelete()}
          className={style.icon}
          tabIndex={0}
          role="button"
        >
          <MdDelete />
        </div>
        <div
          onClick={() => handleUpdate()}
          onKeyDown={() => handleUpdate()}
          className={style.icon}
          tabIndex={0}
          role="button"
        >
          <MdEdit />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
