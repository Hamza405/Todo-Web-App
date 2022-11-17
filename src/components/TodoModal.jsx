import React from "react";
import { MdOutlineClose } from "react-icons/md";
import style from "../styles/modules/modal.module.scss";
import Button from "./Button";

const TodoModal = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.closeButton}>
          <MdOutlineClose />
        </div>
        <form className={style.form}>
          <h1 className={style.formTitle}>Add Task</h1>
          <label htmlFor="title">
            Title
            <input type="text" id="title" />
          </label>
          <label htmlFor="status">
            Status
            <select id="status" name="status">
              <option value="inComplete">In Complete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className={style.buttonContainer}>
            <Button type="submit" variant="primary">
              Add task
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
