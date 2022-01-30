import axios from "axios";
import "./LoginPage.css";
import React, { useState, useContext, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { LoginContext } from "../../LoginContext";
import LoginImage from "./assets/LoginImage.png";

export default function LoginPage() {
  const { setLoggedIn } = useContext(LoginContext);

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/server/admins").then((res) => {
      setAdmins(res.data);
    });
  }, []);

  function Login(user) {
    const { email } = user.profileObj;
    if (admins.indexOf(email) >= 0) {
      setLoggedIn(true);
    } else {
      alert("User is not an admin. Try with another user.");
    }
  }

  function Logout() {
    alert("Unable to login. Please try again.");
    setLoggedIn(false);
  }

  return (
    <div className="loginpage">
      <div className="LoginBar">
        <img src={LoginImage} />
        <GoogleLogin
          clientId="518519154529-q0eema18474te4kcgbt950n9t2utcrrl.apps.googleusercontent.com"
          buttonText="Login via Google"
          onSuccess={Login}
          onFailure={Logout}
          uxMode="popup"
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}
