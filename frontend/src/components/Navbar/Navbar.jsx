import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { scroller } from "react-scroll";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>

        <Link
          to="/"
          onClick={() => {
            setMenu("menu");
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                scroller.scrollTo("explore-menu", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -70, // adjust based on navbar height
                });
              }, 100);
            } else {
              scroller.scrollTo("explore-menu", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -70,
              });
            }
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </Link>

        <Link
          to="/"
          onClick={() => {
            setMenu("mobile-app");
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                scroller.scrollTo("mobile-app", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -70, // adjust based on navbar height
                });
              }, 100);
            } else {
              scroller.scrollTo("mobile-app", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -70,
              });
            }
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </Link>
        <Link
          to="/"
          onClick={() => {
            setMenu("contact-us");
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                scroller.scrollTo("contact-us", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -70, // adjust based on navbar height
                });
              }, 100);
            } else {
              scroller.scrollTo("contact-us", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -70,
              });
            }
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </Link>

        {/* ✅ Meal Planner */}
        <Link
          to="/calendar"
          onClick={() => setMenu("calendar")}
          className={menu === "calendar" ? "active" : ""}
        >
          meal planner
        </Link>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
