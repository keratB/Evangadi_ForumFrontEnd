import "./Header.css";
import React, { useContext } from "react";
import "./Header.css";
import logo from "../../Images/evangadi-logo-home.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
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
    <div className="header container-fluid">
      <div className="innerContainer container d-flex justify-content-around ">
        <Link to='/' className="header__image">
          <img src={logo} alt="Evangadi logo" />
        </Link>
        <button className='ic d-sm-block d-md-none'>
          ☰
        </button>
        <div className="d-flex  innerContainer2 justify-content-between d-none d-md-block">
          <Link to="/">Home</Link>
          <Link to="/">How it Works</Link>
          <button className="btn_header" onClick={goToSignIn}>{userData.user ? "LogOut" : "SIGN IN"}</button>
        </div>
      </div>
    </div>
  );
}

export default Header1;
