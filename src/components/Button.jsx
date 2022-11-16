import React from "react";
import style from "../styles/modules/button.module.scss";
import { getStyleClasses } from "../utils/getStyleClasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ children, variant = "primary" }) => {
  return (
    <button
      className={getStyleClasses([
        style.button,
        style[`button--${buttonTypes[variant]}`],
      ])}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
