import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebaseinit";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleForm = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  } //j kan theke esecho sekhane chole jjao,,history rakbe na

  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title">Login</h1>

          <form onSubmit={handleForm} action="">
            <div className="input-group">
              <label htmlFor="">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" />
            </div>
            <div className="input-group">
              <label htmlFor="">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
              />{" "}
            </div>
            <p style={{ color: "red" }}>{error?.message}</p>
            <input className="form-submit" type="submit" value="Login" />
          </form>

          <p>
            New to Ema-john? <Link to="/sign">Creat An Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
