import React, { useState } from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assests/register.png";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import {  toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    // console.log(email,password,cPassword)
    if (password !== cPassword) {
      toast.error("Passwords does not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  

  

  return (
    <>
      
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                required
              />
              <input
                type="password"
                value={cPassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
                placeholder=" Confirm Password"
                required
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
            </form>

            <span className={styles.register}>
              <p>Currently have an account? </p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>

        <div className={styles.img}>
          <img src={registerImg} alt="register" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;
