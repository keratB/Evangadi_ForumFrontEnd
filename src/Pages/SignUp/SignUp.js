import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import "./SignUp.css";
//to import icons 
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
const SignUp = () => {
  const [form, setForm] = useState({});
  const [userData, setUserData] = useContext(UserContext);  const [type, setType] = useState("password");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_base_url}/user`, form);
      const loginRes = await axios.post(
        `${process.env.REACT_APP_base_url}/login`,
        {
          email: form.email,
          password: form.password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      navigate("/");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
      alert(error.response.data.msg);
    }
  };

  // to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listen for Password function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="container-fluid sign_page">
      <div className="container d-md-flex mx-auto py-5 align-items-center">
        <div className="form_wrapper col-12 col-md-6 me-md-2 p-5 d-flex flex-column">
          <p className="p11">Join the network</p>
          <p className="p22 lorem">
            Already have an account?
            <Link to="/login" className="a11">
              Sign in
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="in11 mr-1"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <div className="FLname d-flex">
              <input
                className="in11 me-1"
                name="firstName"
                onChange={handleChange}
                type="text"
                placeholder="First Name"
              />

              <input
                className="in11 ms-1"
                name="lastName"
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="in11"
              name="userName"
              onChange={handleChange}
              type="text"
              placeholder="User Name"
            />

            <input
              className="in11"
              onChange={handleChange}
              name="password"
              type={type}
              placeholder="Password"
            />
            <span className="showHide">
              <Icon icon={icon} size={20} onClick={HandleIconChange} />
            </span>
            <button className="btnSign">Agree and Join</button>
          </form>
          <p className="mt-md-5 mt-sm-5 text-center texttag">
            I agree to the
            <Link to="" className="a22">
              privacy policy
            </Link>
            and
            <Link to="" className="a22">
              terms of serivice.
            </Link>
          </p>
          

          <Link to="/login" className="a33 text-center">
            Already have an account?
          </Link>
        </div>
        <div className="SignupNote container col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">About</p>
          <h1>Evangadi Networks Q&A</h1>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptate officiis beatae nobis pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum quisquam! Molestias, ut commodi!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptate officiis beatae nobis pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum quisquam! Molestias, ut commodi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor odio harum sunt, quaerat, molestias fuga expedita ad excepturi officiis aliquam aut nemo ratione culpa id laborum ipsum porro tempore?</p>
          <button className="btn1">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
