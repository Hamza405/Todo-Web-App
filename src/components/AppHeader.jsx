import React, { useState } from "react";
import style from "../styles/modules/app.module.scss";
import Button from "./Button";
import SelectButton from "./SelectButton";
import TodoModal from "./TodoModal";

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className={style.appHeader}>
      <Button onClick={handleOpenModal}>Add Task</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incompleted">In Completed</option>
        <option value="completed">Completed</option>
      </SelectButton>
      {modalOpen && <TodoModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default AppHeader;
