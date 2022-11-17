import React from "react";
import style from "../styles/modules/";
import Button from "./Button";
import SelectButton from "./SelectButton";

const AppHeader = () => {
  return (
    <div>
      <Button>Click</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="inCompleted">In Completed</option>
        <option value="completed">Completed</option>
      </SelectButton>
    </div>
  );
};

export default AppHeader;
