import React, { useState } from "react";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { getStyleClasses } from "../utils/getStyleClasses";
import style from "../styles/modules/todoItem.module.scss";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/slices/todoSlice";
import TodoModal from "./TodoModal";

const TodoItem = ({ todo }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleCloseModal = () => setShowUpdateModal(false);
  const dispatch = useDispatch();

  const handleUpdate = (e) => setShowUpdateModal(true);
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <>
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
      {showUpdateModal && (
        <TodoModal
          type="update"
          todo={todo}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default TodoItem;
