import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { login } from "../store/actions/authActions";
import Button from "../components/Button";
import style from "../styles/modules/register.module.scss";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../store/slices/uiSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const loading = useSelector((state) => state.ui.loading);
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const submit = async (e) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    const inputData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (inputData.email.trim() === "") {
      setEmailError({ error: "Enter your email!" });
      return;
    }

    if (inputData.password.trim() === "" || inputData.password.length < 7) {
      setPasswordError({ error: "Password should be at lest 7 charter" });
      return;
    }

    try {
      dispatch(login(inputData));
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
          <h2 className={style.formTitle}>Login</h2>
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
            pending={loading}
          >
            Login
          </Button>
          <Link to="/register" className="link">
            <p className={style.navigate}>
              You don't have an account ? Register
            </p>
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

export default LoginPage;
