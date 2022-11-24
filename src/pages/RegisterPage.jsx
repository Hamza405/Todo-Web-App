import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { register, updateProfile } from "../api/auth-api";
import Button from "../components/Button";
import style from "../styles/modules/register.module.scss";
import { useDispatch } from "react-redux";
import { handleLogin } from "../store/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    const inputData = {
      displayName: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (inputData.displayName.trim() === "") {
      setUsernameError({ error: "Enter your username!" });
      return;
    }

    if (inputData.email.trim() === "") {
      setEmailError({ error: "Enter your email!" });
      return;
    }

    if (inputData.password.trim() === "" || inputData.password.length < 7) {
      setPasswordError({ error: "Password should be at lest 7 charter" });
      return;
    }

    try {
      setLoading(true);
      const res = await register(inputData);
      const secondRes = await updateProfile({
        displayName: inputData.displayName,
        token: res.idToken,
      });
      dispatch(
        handleLogin({
          displayName: secondRes.displayName,
          email: res.email,
          token: res.idToken,
          userId: res.localId,
        })
      );
      setLoading(false);
      navigate("/");
    } catch (e) {
      console.log(e);
      toast.error(e.message);
      setLoading(false);
    }
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
            <input
              className={usernameError && style.error}
              ref={usernameRef}
              id="username"
              type="text"
            />
            {usernameError && <p>Enter your userName</p>}
          </label>
          <label htmlFor="email">
            Email
            <input
              className={emailError && style.error}
              ref={emailRef}
              type="email"
              id="email"
            />
            {emailError && <p>Enter your Email</p>}
          </label>
          <label style={{ marginBottom: "25px" }} htmlFor="password">
            Password
            <input
              className={passwordError && style.error}
              ref={passwordRef}
              id="password"
              type="password"
            />
            {passwordError && <p>{passwordError.error}</p>}
          </label>
          <Button
            style={{ padding: "0.8rem 5rem" }}
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
      <Toaster
        toastOptions={{ className: "toaster" }}
        position="bottom-center"
      />
    </div>
  );
};

export default RegisterPage;
