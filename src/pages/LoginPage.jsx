import React from "react";
import Button from "../components/Button";
import style from "../styles/modules/register.module.scss";

const LoginPage = () => {
  return (
    <div className={style.page__wrapper}>
      <div className={style.card}>
        <form className={style.form}>
          <h2 className={style.formTitle}>Login</h2>
          <label htmlFor="username">
            User Name
            <input id="username" />
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
            Login
          </Button>
          <p>You don't have an account ? Register</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
