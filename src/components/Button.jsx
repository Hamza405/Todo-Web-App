import React from "react";
import style from "../styles/modules/button.module.scss";

const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={style.button} type="button">
      {children}
    </button>
  );
};

export default Button;
