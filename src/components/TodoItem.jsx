import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { getStyleClasses } from "../utils/getStyleClasses";
import style from "../styles/modules/todoItem.module.scss";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/slices/todoSlice";
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";

const TodoItem = ({ todo }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleCloseModal = () => setShowUpdateModal(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleUpdate = (e) => setShowUpdateModal(true);
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };
  return (
    <>
      <div className={style.item}>
        <div className={style.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
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
