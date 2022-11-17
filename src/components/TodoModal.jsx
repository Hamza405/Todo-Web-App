import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import style from "../styles/modules/modal.module.scss";
import Button from "./Button";

const TodoModal = ({ handleCloseModal }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("inComplete");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div onClick={handleCloseModal} className={style.closeButton}>
          <MdOutlineClose />
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.formTitle}>Add Task</h1>
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
              <option value="inComplete">In Complete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className={style.buttonContainer}>
            <Button type="submit" variant="primary">
              Add task
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
