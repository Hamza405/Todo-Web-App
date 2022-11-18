import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/slices/todoSlice";
import { v4 as uuid } from "uuid";
import style from "../styles/modules/modal.module.scss";
import Button from "./Button";
import toast from "react-hot-toast";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

const TodoModal = ({ type, todo, handleCloseModal }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status && type !== "update") {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      toast.success("Task Added Successfully");
      handleCloseModal();
    }
    if (type === "update") {
      if (todo.title !== title || todo.status !== status) {
        dispatch(updateTodo({ ...todo, title, status }));
        toast.success("Task Updated successfully");
      } else {
        toast.error("No changes made");
        return;
      }
    }
    handleCloseModal();
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div onClick={handleCloseModal} className={style.closeButton}>
          <MdOutlineClose />
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.formTitle}>
            {type === "add" ? "Add" : "Update"} TODO
          </h1>
          <label htmlFor="title">
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
            />
          </label>
          <label htmlFor="status">
            Status
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              id="status"
              name="status"
            >
              <option value="incomplete">In Complete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className={style.buttonContainer}>
            <Button type="submit" variant="primary">
              {type === "add" ? "Add Task" : "Update Task"}
            </Button>
            <Button
              onClick={handleCloseModal}
              type="button"
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
