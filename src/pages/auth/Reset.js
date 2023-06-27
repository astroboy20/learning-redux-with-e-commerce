import React, { useState } from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assests/forgot.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const { isLoading, setIsLoading } = useState(false);
  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email for a rest link");
        setIsLoading(false);
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
        <div className={styles.img}>
          <img src={resetImg} alt="reset password" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>

            <form onSubmit={resetPassword}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                required
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to="/login">-Login</Link>
                </p>
                <p>
                  <Link to="/login">-Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
