import React, { useState } from 'react';
import InputControl from "../InputControl/InputControl";
import styles from './Login.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState(" ");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill in all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const queryParams = new URLSearchParams(location.search);
        const redirectParam = queryParams.get("redirect");

        if (redirectParam) {
          navigate(redirectParam);
        } else {
          navigate("/default");
        }
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handleForgotPassword = () => {
    if (!values.email) {
      setErrorMsg("Enter your email address to reset your password.");
      return;
    }
    setErrorMsg("");

    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        setErrorMsg("Password reset email sent. Check your inbox.");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label1="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter Email Address"
        />
        <InputControl
          label="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
        
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Don't have an Account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
          <p onClick={handleForgotPassword} style={{ textAlign: 'right', color: 'blue' }}>Forgot Password?</p>
        </div>
        
      </div>
      
    </div>
    
  );
}

export default Login;
