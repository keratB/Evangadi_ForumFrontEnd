import React, { useContext } from "react";
import "./Header1.css";
import logo from "../Images/evangadi-logo-home.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function Header1({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  }
  return (
    <div className="header">
      <div className="header__container">
        <Link to='/' className="header__image">
          <img src={logo} alt="Evangadi logo" />
        </Link>
        <div className="rightSide">
          <a className="" href="">Home</a>
          <a className="" href="">How it Works</a>
          <div className="rightSide__button">
            <button className="btn" onClick={goToSignIn}>{userData.user? "LogOut" : "SIGN IN"}</button>
          </div>
        </div>
        <button className='ic'>
               ☰
        </button>
      </div>
    </div>
  );
}

export default Header1;
