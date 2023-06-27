import React from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assests/forgot.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="reset password" width="400" />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>

          <form>
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-primary --btn-block">
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
  );
};

export default Reset;
