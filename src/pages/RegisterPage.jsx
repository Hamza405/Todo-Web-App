import React from "react";
import Button from "../components/Button";
import style from "../styles/modules/register.module.scss";

const RegisterPage = () => {
  return (
    <div className={style.page__wrapper}>
      <div className={style.card}>
        <form className={style.form}>
          <h2 className={style.formTitle}>Register</h2>
          <label htmlFor="username">
            User Name
            <input id="username" type="text" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Password
            <input id="password" type="password" />
          </label>
          <Button
            style={{ padding: "0.8rem 5rem" }}
            isAuthPage={true}
            type="submit"
            variant="primary"
          >
            Sign up
          </Button>
          <p> Do you have an account ? Login</p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
