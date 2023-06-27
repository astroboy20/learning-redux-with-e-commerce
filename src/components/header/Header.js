import React, { useState,useEffect } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import {  onAuthStateChanged } from "firebase/auth";
const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  //monitor currently signedu=in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(uid)
        console.log(user.displayName)
        setDisplayName(user.displayName)
      } else {
        setDisplayName("")
      }
    });
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("LogOut Successfully.");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        navigate("/");
      });
  };

  
  return (
    <>
      <header>
        <div className={styles.header}>
          {logo}
          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-menu"]}`
            }
          >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
            ></div>

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                <NavLink className={activeLink} to="/login">
                  Login
                </NavLink>
                <a href="###">
                  <FaUserCircle size={16}/>
                  Hi, {displayName}
                </a>
                <NavLink className={activeLink} to="/register">
                  Register
                </NavLink>
                <NavLink className={activeLink} to="/order-history">
                  My Orders
                </NavLink>
                <NavLink onClick={logoutUser}>Logout</NavLink>
              </span>
              {cart}
            </div>
          </nav>
          <div className={styles["menu-icon"]}>
            {cart}
            <HiOutlineMenuAlt3 onClick={toggleMenu} size={28} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
