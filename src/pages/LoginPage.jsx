import React, { useRef, useState } from "react";
import Button from "../components/Button";
import style from "../styles/modules/register.module.scss";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const inputData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (inputData.email.trim() === "") {
      setEmailError({ error: "Enter your email!" });
      return;
    }

    if (inputData.password.trim() === "") {
      setPasswordError({ error: "Enter your password!" });
      return;
    }
    console.log(inputData);
  };
  return (
    <div className={style.page__wrapper}>
      <div className={style.card}>
        <form className={style.form} onSubmit={submit}>
          <h2 className={style.formTitle}>Login</h2>
          <label htmlFor="email">
            Email
            <input ref={emailRef} type="email" id="email" />
            {emailError && <p>Enter your Email</p>}
          </label>
          <label style={{ marginBottom: "25px" }} htmlFor="password">
            Password
            <input ref={passwordRef} id="password" type="password" />
            {passwordError && <p>Enter your password</p>}
          </label>
          <Button
            style={{ padding: "0.8rem 5rem" }}
            isAuthPage={true}
            type="submit"
            variant="primary"
          >
            Login
          </Button>
          <p className={style.navigate}>You don't have an account ? Register</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
