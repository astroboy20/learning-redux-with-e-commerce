import React, { useState } from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assests/register.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const registerUser = (e) =>{
    e.preventDefault()
    console.log(email,password,cPassword)
  }
  return (
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
            <button type="submit" className="--btn --btn-primary --btn-block">Register</button>
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
  );
};

export default Register;
