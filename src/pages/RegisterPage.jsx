import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import style from "../styles/modules/register.module.scss";

const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    const inputData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (inputData.username.trim() === "") {
      setUsernameError({ error: "Enter your username!" });
      return;
    }

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
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        className={style.card}
      >
        <form className={style.form} onSubmit={submit}>
          <h2 className={style.formTitle}>Register</h2>
          <label htmlFor="username">
            User Name
            <input ref={usernameRef} id="username" type="text" />
            {usernameError && <p>Enter your userName</p>}
          </label>
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
            Sign up
          </Button>
          <Link className="link" to="/login">
            <p className={style.navigate}> Do you have an account ? Login</p>
          </Link>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
