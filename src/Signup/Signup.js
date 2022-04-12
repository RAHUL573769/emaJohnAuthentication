import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import auth from "../components/Firebase/firebaseinit";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
// import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  if (user) {
    navigate("/home");
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Two Password donot MATCH");
      return;
    }

    if (password.length < 6) {
      setError("Password Must be 6 characters long");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title">Sign Up</h1>

          <form onSubmit={handleCreateUser} action="">
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
            <div className="input-group">
              <label htmlFor="">Confirm Password</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="password"
                id=""
              />{" "}
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>

          <p>
            Already Have An Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
